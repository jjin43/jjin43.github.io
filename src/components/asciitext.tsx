'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const vertexShader = `
varying vec2 vUv;
uniform float uTime;
uniform float mouse;
uniform float uEnableWaves;

void main() {
    vUv = uv;
    float time = uTime * 5.;

    float waveFactor = uEnableWaves;

    vec3 transformed = position;

    transformed.x += sin(time + position.y) * 0.5 * waveFactor;
    transformed.y += cos(time + position.z) * 0.15 * waveFactor;
    transformed.z += sin(time + position.x) * waveFactor;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
}
`;

const fragmentShader = `
varying vec2 vUv;
uniform float mouse;
uniform float uTime;
uniform sampler2D uTexture;

void main() {
    float time = uTime;
    vec2 pos = vUv;
    
    float move = sin(time + mouse) * 0.01;
    float r = texture2D(uTexture, pos + cos(time * 2. - time + pos.x) * .01).r;
    float g = texture2D(uTexture, pos + tan(time * .5 + pos.x - time) * .01).g;
    float b = texture2D(uTexture, pos - cos(time * 2. + time + pos.y) * .01).b;
    float a = texture2D(uTexture, pos).a;
    gl_FragColor = vec4(r, g, b, a);
}
`;

function map(
  n: number,
  start: number,
  stop: number,
  start2: number,
  stop2: number
) {
  return ((n - start) / (stop - start)) * (stop2 - start2) + start2;
}

function clamp(n: number, min: number, max: number) {
  return Math.min(Math.max(n, min), max);
}

const PX_RATIO = typeof window !== 'undefined' ? window.devicePixelRatio : 1;

interface AsciiFilterOptions {
  fontSize?: number;
  fontFamily?: string;
  charset?: string;
  invert?: boolean;
}

class AsciiFilter {
  renderer!: THREE.WebGLRenderer;
  domElement: HTMLDivElement;
  pre: HTMLPreElement;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D | null;
  deg: number;
  invert: boolean;
  fontSize: number;
  fontFamily: string;
  charset: string;
  width: number = 0;
  height: number = 0;
  center: { x: number; y: number } = { x: 0, y: 0 };
  mouse: { x: number; y: number } = { x: 0, y: 0 };
  cols: number = 0;
  rows: number = 0;

  constructor(
    renderer: THREE.WebGLRenderer,
    { fontSize, fontFamily, charset, invert }: AsciiFilterOptions = {}
  ) {
    this.renderer = renderer;
    this.domElement = document.createElement('div');
    this.domElement.style.position = 'absolute';
    this.domElement.style.top = '0';
    this.domElement.style.left = '0';
    this.domElement.style.width = '100%';
    this.domElement.style.height = '100%';

    this.pre = document.createElement('pre');
    this.domElement.appendChild(this.pre);

    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d');
    this.domElement.appendChild(this.canvas);

    this.deg = 0;
    this.invert = invert ?? true;
    this.fontSize = fontSize ?? 12;
    this.fontFamily = fontFamily ?? "'Courier New', monospace";
    this.charset =
      charset ??
      ' .\'`^",:;Il!i~+_-?][}{1)(|/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$';

    if (this.context) {
      this.context.imageSmoothingEnabled = false;
      this.context.imageSmoothingEnabled = false;
    }

    this.onMouseMove = this.onMouseMove.bind(this);
    document.addEventListener('mousemove', this.onMouseMove);
  }

  setSize(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.renderer.setSize(width, height);
    this.reset();

    this.center = { x: width / 2, y: height / 2 };
    this.mouse = { x: this.center.x, y: this.center.y };
  }

  reset() {
    if (this.context) {
      this.context.font = `${this.fontSize}px ${this.fontFamily}`;
      const charWidth = this.context.measureText('A').width;

      this.cols = Math.floor(
        this.width / (this.fontSize * (charWidth / this.fontSize))
      );
      this.rows = Math.floor(this.height / this.fontSize);

      this.canvas.width = this.cols;
      this.canvas.height = this.rows;
      this.pre.style.fontFamily = this.fontFamily;
      this.pre.style.fontSize = `${this.fontSize}px`;
      this.pre.style.margin = '0';
      this.pre.style.padding = '0';
      this.pre.style.lineHeight = '1em';
      this.pre.style.position = 'absolute';
      this.pre.style.left = '50%';
      this.pre.style.top = '50%';
      this.pre.style.transform = 'translate(-50%, -50%)';
      this.pre.style.zIndex = '9';
      this.pre.style.backgroundAttachment = 'fixed';
      this.pre.style.mixBlendMode = 'difference';
    }
  }

  render(scene: THREE.Scene, camera: THREE.Camera) {
    this.renderer.render(scene, camera);

    const w = this.canvas.width;
    const h = this.canvas.height;
    if (this.context) {
      this.context.clearRect(0, 0, w, h);
      this.context.drawImage(this.renderer.domElement, 0, 0, w, h);
      this.asciify(this.context, w, h);
      this.hue();
    }
  }

  onMouseMove(e: MouseEvent) {
    this.mouse = { x: e.clientX * PX_RATIO, y: e.clientY * PX_RATIO };
  }

  get dx() {
    return this.mouse.x - this.center.x;
  }

  get dy() {
    return this.mouse.y - this.center.y;
  }

  hue() {
    const deg = (Math.atan2(this.dy, this.dx) * 180) / Math.PI;
    this.deg += (deg - this.deg) * 0.075;
    this.domElement.style.filter = `hue-rotate(${this.deg.toFixed(1)}deg)`;
  }

  asciify(ctx: CanvasRenderingContext2D, w: number, h: number) {
    const imgData = ctx.getImageData(0, 0, w, h).data;
    let str = '';
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const i = x * 4 + y * 4 * w;
        const [r, g, b, a] = [
          imgData[i],
          imgData[i + 1],
          imgData[i + 2],
          imgData[i + 3],
        ];

        if (a === 0) {
          str += ' ';
          continue;
        }

        const gray = (0.3 * r + 0.6 * g + 0.1 * b) / 255;
        let idx = Math.floor((1 - gray) * (this.charset.length - 1));
        if (this.invert) idx = this.charset.length - idx - 1;
        str += this.charset[idx];
      }
      str += '\n';
    }
    this.pre.innerHTML = str;
  }

  dispose() {
    document.removeEventListener('mousemove', this.onMouseMove);
  }
}

interface CanvasTxtOptions {
  fontSize?: number | number[];
  fontFamily?: string;
  color?: string;
}

class CanvasTxt {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D | null;
  lines: string[];
  fontSizes: number[];
  fontFamily: string;
  color: string;

  constructor(
    txt: string | string[],
    {
      fontSize = 200,
      fontFamily = 'Arial',
      color = '#fdf9f3',
    }: CanvasTxtOptions = {}
  ) {
    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d');
    this.lines = Array.isArray(txt) ? txt : [txt];
    const fontSizeArray = Array.isArray(fontSize) ? fontSize : [fontSize];
    this.fontSizes = this.lines.map(
      (_, idx) => fontSizeArray[idx] ?? fontSizeArray[0] ?? 200
    );
    this.fontFamily = fontFamily;
    this.color = color;
  }

  resize() {
    if (this.context) {
      const lineMetrics = this.lines.map((line, idx) => {
        this.context!.font = `600 ${this.fontSizes[idx]}px ${this.fontFamily}`;
        return this.context!.measureText(line);
      });

      const lineHeights = lineMetrics.map(
        (metrics, idx) =>
          (metrics.actualBoundingBoxAscent || this.fontSizes[idx]) +
          (metrics.actualBoundingBoxDescent || 0)
      );

      const textWidth =
        Math.ceil(Math.max(...lineMetrics.map((m) => m.width), 0)) + 20;
      const totalHeight = lineHeights.reduce((sum, h) => sum + h, 0);
      const textHeight = Math.ceil(totalHeight * 1.5) + 40;

      this.canvas.width = textWidth;
      this.canvas.height = textHeight;
    }
  }

  render() {
    if (this.context) {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.context.fillStyle = this.color;

      let currentY = 20;
      this.lines.forEach((line, idx) => {
        this.context!.font = `600 ${this.fontSizes[idx]}px ${this.fontFamily}`;
        const lineMetrics = this.context!.measureText(line);
        const lineHeight =
          (lineMetrics.actualBoundingBoxAscent || this.fontSizes[idx]) +
          (lineMetrics.actualBoundingBoxDescent || 0);

        const xPos = (this.canvas.width - lineMetrics.width) / 2;
        const yPos = currentY + lineHeight;
        this.context!.fillText(line, xPos, yPos);

        currentY = yPos + lineHeight * 0.5;
      });
    }
  }

  get width() {
    return this.canvas.width;
  }

  get height() {
    return this.canvas.height;
  }

  get texture() {
    return this.canvas;
  }
}

interface CanvAsciiOptions {
  text: string | string[];
  asciiFontSize: number;
  textFontSize: number | number[];
  textColor: string;
  planeBaseHeight: number;
  enableWaves: boolean;
}

class CanvAscii {
  textLines: string[];
  asciiFontSize: number;
  textFontSize: number | number[];
  textColor: string;
  planeBaseHeight: number;
  container: HTMLElement;
  width: number;
  height: number;
  enableWaves: boolean;
  camera: THREE.PerspectiveCamera;
  scene: THREE.Scene;
  mouse: { x: number; y: number };
  textCanvas!: CanvasTxt;
  texture!: THREE.CanvasTexture;
  geometry: THREE.PlaneGeometry | undefined;
  material: THREE.ShaderMaterial | undefined;
  mesh!: THREE.Mesh;
  renderer!: THREE.WebGLRenderer;
  filter!: AsciiFilter;
  center: { x: number; y: number } = { x: 0, y: 0 };
  animationFrameId: number = 0;

  constructor(
    {
      text,
      asciiFontSize,
      textFontSize,
      textColor,
      planeBaseHeight,
      enableWaves,
    }: CanvAsciiOptions,
    containerElem: HTMLElement,
    width: number,
    height: number
  ) {
    this.textLines = Array.isArray(text) ? text : [text];
    this.asciiFontSize = asciiFontSize;
    this.textFontSize = textFontSize;
    this.textColor = textColor;
    this.planeBaseHeight = planeBaseHeight;
    this.container = containerElem;
    this.width = width;
    this.height = height;
    this.enableWaves = enableWaves;

    this.camera = new THREE.PerspectiveCamera(
      45,
      this.width / this.height,
      1,
      1000
    );
    this.camera.position.z = 30;

    this.scene = new THREE.Scene();
    this.mouse = { x: 0, y: 0 };

    this.setMesh();
    this.setRenderer();
  }

  setMesh() {
    this.textCanvas = new CanvasTxt(this.textLines, {
      fontSize: this.textFontSize,
      fontFamily: 'IBM Plex Mono',
      color: this.textColor,
    });
    this.textCanvas.resize();
    this.textCanvas.render();

    this.texture = new THREE.CanvasTexture(this.textCanvas.texture);
    this.texture.minFilter = THREE.NearestFilter;

    const textAspect = this.textCanvas.width / this.textCanvas.height;
    const baseH = this.planeBaseHeight;
    const planeW = baseH * textAspect;
    const planeH = baseH;

    this.geometry = new THREE.PlaneGeometry(planeW, planeH, 36, 36);
    this.material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      transparent: true,
      uniforms: {
        uTime: { value: 0 },
        mouse: { value: 1.0 },
        uTexture: { value: this.texture },
        uEnableWaves: { value: this.enableWaves ? 1.0 : 0.0 },
      },
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.mesh);
  }

  setRenderer() {
    this.renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
    this.renderer.setPixelRatio(1);
    this.renderer.setClearColor(0x000000, 0);

    this.filter = new AsciiFilter(this.renderer, {
      fontFamily: 'IBM Plex Mono',
      fontSize: this.asciiFontSize,
      invert: true,
    });

    this.container.appendChild(this.filter.domElement);
    this.setSize(this.width, this.height);
  }

  setSize(w: number, h: number) {
    this.width = w;
    this.height = h;

    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();

    this.filter.setSize(w, h);

    this.center = { x: w / 2, y: h / 2 };
  }

  load() {
    this.animate();
  }

  setGlobalPointer(x: number, y: number) {
    this.mouse = { x, y };
    if (this.filter) {
      this.filter.mouse = { x, y };
    }
  }

  animate() {
    const animateFrame = () => {
      this.animationFrameId = requestAnimationFrame(animateFrame);
      this.render();
    };
    animateFrame();
  }

  render() {
    const time = new Date().getTime() * 0.001;

    this.textCanvas.render();
    this.texture.needsUpdate = true;

    (this.mesh.material as THREE.ShaderMaterial).uniforms.uTime.value =
      Math.sin(time);

    this.updateRotation();
    this.filter.render(this.scene, this.camera);
  }

  updateRotation() {
    const x = map(this.mouse.y, 0, this.height, 0.5, -0.5);
    const y = map(this.mouse.x, 0, this.width, -0.5, 0.5);

    const targetX = clamp(x, -0.35, 0.35);
    const targetY = clamp(y, -0.35, 0.35);

    this.mesh.rotation.x += (targetX - this.mesh.rotation.x) * 0.05;
    this.mesh.rotation.y += (targetY - this.mesh.rotation.y) * 0.05;
  }

  clear() {
    this.scene.traverse((object) => {
      const obj = object as unknown as THREE.Mesh;
      if (!obj.isMesh) return;
      [obj.material].flat().forEach((material) => {
        material.dispose();
        Object.keys(material).forEach((key) => {
          const matProp = material[key as keyof typeof material];
          if (
            matProp &&
            typeof matProp === 'object' &&
            'dispose' in matProp &&
            typeof matProp.dispose === 'function'
          ) {
            matProp.dispose();
          }
        });
      });
      obj.geometry.dispose();
    });
    this.scene.clear();
  }

  dispose() {
    cancelAnimationFrame(this.animationFrameId);
    this.filter.dispose();
    this.container.removeChild(this.filter.domElement);
    this.clear();
    this.renderer.dispose();
  }
}

interface ASCIITextProps {
  text?: string | string[];
  asciiFontSize?: number;
  textFontSize?: number | number[];
  textColor?: string;
  planeBaseHeight?: number;
  enableWaves?: boolean;
}

export default function ASCIIText({
  text = 'David!',
  asciiFontSize = 8,
  textFontSize = 200,
  textColor = '#fdf9f3',
  planeBaseHeight = 8,
  enableWaves = true,
}: ASCIITextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const asciiRef = useRef<CanvAscii | null>(null);
  const textLines = Array.isArray(text) ? text : [text];
  const [responsiveConfig, setResponsiveConfig] = useState({
    asciiFontSize,
    textFontSize,
    planeBaseHeight,
  });

  useEffect(() => {
    const updateSizing = () => {
      if (typeof window === 'undefined') return;
      const width = window.innerWidth;

      if (width < 640) {
        const scaleFontSize = (size: number | number[]) => {
          if (Array.isArray(size)) {
            return size.map((s) => Math.max(70, Math.floor(s * 0.45)));
          }
          return Math.max(70, Math.floor(size * 0.45));
        };
        setResponsiveConfig({
          asciiFontSize: Math.max(3, Math.floor(asciiFontSize * 0.45)),
          textFontSize: scaleFontSize(textFontSize),
          planeBaseHeight: Math.max(4, planeBaseHeight * 0.5),
        });
        return;
      }

      if (width < 1024) {
        const scaleFontSize = (size: number | number[]) => {
          if (Array.isArray(size)) {
            return size.map((s) => Math.max(150, Math.floor(s * 0.9)));
          }
          return Math.max(150, Math.floor(size * 0.9));
        };
        setResponsiveConfig({
          asciiFontSize: Math.max(7, Math.floor(asciiFontSize * 0.85)),
          textFontSize: scaleFontSize(textFontSize),
          planeBaseHeight: Math.max(7, planeBaseHeight * 0.9),
        });
        return;
      }

      setResponsiveConfig({ asciiFontSize, textFontSize, planeBaseHeight });
    };

    updateSizing();
    window.addEventListener('resize', updateSizing);
    return () => window.removeEventListener('resize', updateSizing);
  }, [asciiFontSize, planeBaseHeight, textFontSize]);

  useEffect(() => {
    if (!containerRef.current) return;

    const { width, height } = containerRef.current.getBoundingClientRect();
    const {
      asciiFontSize: effectiveAsciiFontSize,
      textFontSize: effectiveTextFontSize,
      planeBaseHeight: effectivePlaneBaseHeight,
    } = responsiveConfig;

    let observer: IntersectionObserver | null = null;
    let ro: ResizeObserver | null = null;

    const setupAscii = (w: number, h: number) => {
      asciiRef.current = new CanvAscii(
        {
          text: textLines,
          asciiFontSize: effectiveAsciiFontSize,
          textFontSize: effectiveTextFontSize,
          textColor,
          planeBaseHeight: effectivePlaneBaseHeight,
          enableWaves,
        },
        containerRef.current!,
        w,
        h
      );
      asciiRef.current.load();

      // Listen to global pointer events
      const handlePointer = (e: PointerEvent) => {
        asciiRef.current?.setGlobalPointer(e.clientX, e.clientY);
      };
      window.addEventListener('pointermove', handlePointer);

      ro = new ResizeObserver((entries) => {
        if (!entries[0] || !asciiRef.current) return;
        const { width: rw, height: rh } = entries[0].contentRect;
        if (rw > 0 && rh > 0) {
          asciiRef.current.setSize(rw, rh);
        }
      });
      ro.observe(containerRef.current!);

      return () => {
        window.removeEventListener('pointermove', handlePointer);
        ro?.disconnect();
        asciiRef.current?.dispose();
      };
    };

    if (width === 0 || height === 0) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (
            entry.isIntersecting &&
            entry.boundingClientRect.width > 0 &&
            entry.boundingClientRect.height > 0
          ) {
            const { width: w, height: h } = entry.boundingClientRect;
            const cleanup = setupAscii(w, h);
            observer?.disconnect();
            // Clean up when unmounting
            return cleanup;
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(containerRef.current);
      return () => {
        observer?.disconnect();
        ro?.disconnect();
        asciiRef.current?.dispose();
      };
    }

    const cleanup = setupAscii(width, height);
    return cleanup;
  }, [text, textColor, enableWaves, responsiveConfig, textLines]);

  return (
    <div
      ref={containerRef}
      className="ascii-text-container"
      style={{
        position: 'relative',
        width: 'min(1400px, 100%)',
        aspectRatio: '3 / 1',
        minHeight: '320px',
        maxHeight: '640px',
        margin: '0 auto',
        overflow: 'hidden',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500&display=swap');

        body {
          margin: 0;
          padding: 0;
        }

        .ascii-text-container canvas {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          image-rendering: optimizeSpeed;
          image-rendering: -moz-crisp-edges;
          image-rendering: -o-crisp-edges;
          image-rendering: -webkit-optimize-contrast;
          image-rendering: optimize-contrast;
          image-rendering: crisp-edges;
          image-rendering: pixelated;
        }

        .ascii-text-container pre {
          margin: 0;
          user-select: none;
          padding: 0;
          line-height: 1em;
          text-align: left;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          background-image: radial-gradient(circle, #ff6188 0%, #fc9867 50%, #ffd866 100%);
          background-attachment: fixed;
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
          z-index: 9;
          mix-blend-mode: difference;
          white-space: pre;
        }
      `}</style>
    </div>
  );
}
