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
        'account-types': resolve(__dirname, 'account-types.html'),
        'platform': resolve(__dirname, 'platform.html'),
        'honors': resolve(__dirname, 'honors.html'),
        'contacts': resolve(__dirname, 'contacts.html'),
        'documents': resolve(__dirname, 'documents.html'),
        'data-base': resolve(__dirname, 'data-base.html'),
        '404': resolve(__dirname, '404.html'),
      },
    },
  },
})