import { defineConfig } from 'astro/config';
import testAstroIntegration from './testFolder/testAstroIntegration';

// https://astro.build/config
export default defineConfig({
  integrations: [
    testAstroIntegration()
  ]
});
