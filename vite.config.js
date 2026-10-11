import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const EXERCISE_COUNT = 9;

const exercisePages = Object.fromEntries(
  Array.from({ length: EXERCISE_COUNT }, (_, index) => {
    const pageName = `js_ejercicio_${index + 1}`;
    return [pageName, resolve(import.meta.dirname, `${pageName}.html`)];
  })
);

export default defineConfig({
  plugins: [react()],
  // Relative base so the build works under the GitHub Pages subpath (/reactJS-exercises/)
  base: './',
  build: {
    rollupOptions: {
      input: {
        index: resolve(import.meta.dirname, 'index.html'),
        ...exercisePages,
      },
    },
  },
});
