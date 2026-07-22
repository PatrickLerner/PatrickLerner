import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import type { ViteReactSSGOptions } from 'vite-react-ssg'

// nested: /writing/foo -> /writing/foo/index.html, so every route resolves to a clean URL.
const ssgOptions: ViteReactSSGOptions = {
  dirStyle: 'nested',
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  ssgOptions,
})
