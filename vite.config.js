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

{/* ac812175fbea1db0550899be0d571eec 
  
  echo "# test" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/skijox/ac812175fbea1db0550899be0d571eec.git
git push -u origin main


git remote add origin https://github.com/skijox/ac812175fbea1db0550899be0d571eec.git
git branch -M main
git push -u origin main*/ }