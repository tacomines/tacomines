import JsonLd from './JsonLd';

import { generateOrganizationSchema } from '@/lib/schema';

const OrganizationSchema = () => {
  const schema = generateOrganizationSchema();

  return <JsonLd data={schema} />;
};

export default OrganizationSchema;