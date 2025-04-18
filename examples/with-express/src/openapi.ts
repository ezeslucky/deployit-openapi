import { generateOpenApiDocument } from 'deployit-openapi';

import { appRouter } from './router';

// Generate OpenAPI schema document
export const openApiDocument = generateOpenApiDocument(appRouter, {
  title: 'Example CRUD API',
  description: 'OpenAPI compliant REST API built using tRPC with Express',
  version: '1.0.0',
  baseUrl: 'http://localhost:3000/api',
  docsUrl: 'https://github.com/jlalmes/deployit-openapi',
  tags: ['auth', 'users', 'posts'],
});
