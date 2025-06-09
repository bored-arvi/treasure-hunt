import { defineConfig } from 'vite';

export default defineConfig({
  base: '/', 
  server: {
  proxy: {
    '/api': 'http://localhost:5000',
  },
} // Replace 'treasure-hunt' with your actual GitHub repo name
});
