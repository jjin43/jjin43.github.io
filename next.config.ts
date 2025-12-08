import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '',
  trailingSlash: true,
  turbopack: {
    root: __dirname,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.txt$/,
      type: 'asset/source',
    });

    return config;
  },
};

export default nextConfig;
