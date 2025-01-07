// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',  // Set the base path for GitHub Pages
  build: {
    outDir: 'dist', 
    chunkSizeWarningLimit: 1500,  // Optional, increase chunk size if necessary
    rollupOptions: {
      input: {
        main: './index.html',
        blog: './blog.html', 
      },
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],  // Split React libraries
          threejs: ['three'],  // Split Three.js (if used)
        },
      },
    },
  },
});
