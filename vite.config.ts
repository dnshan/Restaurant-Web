// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Import Node.js path module for path resolution

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Use the port number you prefer
  },
  resolve: {
    alias: {
      '@app_assets': path.resolve(__dirname, 'src/assets'),
      '@app_constants': path.resolve(__dirname, 'src/constants'),
      '@app_styles': path.resolve(__dirname, 'src/styles'),
      '@app_components': path.resolve(__dirname, 'src/components'),
      '@app_container': path.resolve(__dirname, 'src/container'),
      '@app_pages': path.resolve(__dirname, 'src/pages')

    }
  }
});
