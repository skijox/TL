import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '', // Set the base path for GitHub Pages
  build: {
    chunkSizeWarningLimit: 1500, // Increase chunk size limit to avoid warnings
    rollupOptions: {
      output: {
        // Manual chunking to split the bundle
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'], // Split React libraries
          threejs: ['three'], // Split Three.js (if used)
        },
      },
    },
  },
});

{/* ac812175fbea1db0550899be0d571eec */ }