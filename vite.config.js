import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: 'https://velmoren.github.io/alcapital/',
  build: {
    rollupOptions: {
      input: {
        'main': resolve(__dirname, 'index.html'),
        'mission': resolve(__dirname, 'mission.html'),
        'esg': resolve(__dirname, 'esg.html'),
        'islamic-accounts': resolve(__dirname, 'islamic-accounts.html'),
        'trade-robot': resolve(__dirname, 'trade-robot.html'),
        '404': resolve(__dirname, '404.html'),
      },
    },
  },
})