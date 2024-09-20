import dotenv from 'dotenv';
import { defineConfig } from 'orval';

dotenv.config();

export default defineConfig({
  'polling-frontend': {
    input: {
      target: `${process.env.NEXT_PUBLIC_API_KEY}`,
    },
    output: {
      mode: 'tags-split',
      target: './src/generated/endpoints',
      schemas: './src/generated/model',
      client: 'react-query',
      override: {
        mutator: {
          path: './src/generated/mutator/custom-instance.ts',
          name: 'customInstance',
        },
      },
    },
  },
});
