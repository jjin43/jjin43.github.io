import { ReactNode } from 'react';

type TProps = {
  heading: string;
  content?: string | ReactNode | undefined;
};

export const SectionHeading = ({ heading, content }: TProps) => {
  return (
    <div className="mb-6 text-center sm:mb-10">
      <h2 className="font-heading text-xl font-semibold sm:text-2xl md:text-3xl">
        {heading}
      </h2>
      {content && (
        <p className="text-muted-foreground mt-2 text-xs sm:mt-3 sm:text-sm">
          {content}
        </p>
      )}
    </div>
  );
};
