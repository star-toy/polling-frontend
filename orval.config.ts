import dotenv from 'dotenv';
import { defineConfig } from 'orval';

dotenv.config();

export default defineConfig({
  'polling-frontend': {
    input: {
      target: `${process.env.NEXT_PUBLIC_API_DOCS_KEY}`,
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
