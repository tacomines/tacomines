import { Metadata } from 'next';

interface GenerateMetadataProps {
  title: string;

  description: string;
}

export const generateMetadata = ({
  title,
  description,
}: GenerateMetadataProps): Metadata => {
  return {
    title,

    description,
  };
};