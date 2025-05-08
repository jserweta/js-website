/**
 * This configuration file lets you run `$ sanity [command]` in this folder
 * Go to https://www.sanity.io/docs/cli to learn more.
 **/
import path from 'path';
import {loadEnvConfig} from '@next/env';
import {defineCliConfig} from 'sanity/cli';

const dev = process.env.NODE_ENV !== 'production';
loadEnvConfig(__dirname, dev, {info: () => null, error: console.error});

// @TODO report top-level await bug
// Using a dynamic import here as `loadEnvConfig` needs to run before this file is loaded
// const { projectId, dataset } = await import('@/lib/sanity.api')
const projectId = process.env.SANITY_STUDIO_PROJECT_ID;
const dataset = process.env.SANITY_STUDIO_DATASET;
const studioHost = process.env.SANITY_STUDIO_HOST;

export default defineCliConfig({
  // project: {basePath: '/studio'},
  api: {projectId, dataset},
  studioHost: studioHost,
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  },
});
