interface GenerateSEOMetadataProps {
  title: string;

  description: string;

  keywords?: string[];
}

export const generateSEOMetadata = ({
  title,
  description,
  keywords = [],
}: GenerateSEOMetadataProps) => {
  return {
    title,

    description,

    keywords,
  };
};