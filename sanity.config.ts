import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schema } from './sanity/schemas';

export default defineConfig({
  name: 'divya-fashion',
  title: 'Divya Fashion Store',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  basePath: '/studio',
  plugins: [structureTool(), visionTool()],
  schema,
  theme: {
    colors: {
      default: {
        // Matching Divya's color palette
        primary: '#3a3d2f', // olive-900
        mainNavigation: {
          bg: '#faf8f5', // cream-100
        },
      },
    },
  },
});
