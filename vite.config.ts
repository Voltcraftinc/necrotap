import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // Adjust if deploying to a sub-directory on Netlify
  build: {
    rollupOptions: {
      input: './index.html', // Specify the input HTML file
    },
  },
  plugins: [react()],
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.gif', '**/*.svg', '**/*.otf'], // Include all image formats
});
