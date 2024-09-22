import { defineConfig } from 'orval';
import { API_DOCS_KEY } from '@/constants/api-key';

export default defineConfig({
  'polling-frontend': {
    input: {
      target: `${API_DOCS_KEY}`,
    },
    output: {
      mode: 'tags-split',
      target: './src/api/generated/endpoints',
      schemas: './src/api/generated/model',
      client: 'react-query',
      override: {
        mutator: {
          path: './src/api/generated/mutator/custom-instance.ts',
          name: 'customInstance',
        },
      },
    },
  },
});
