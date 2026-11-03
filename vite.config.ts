import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteGithubRepo =
    env.SITE_GITHUB_REPO ||
    env.VITE_SITE_GITHUB_REPO ||
    'https://github.com/lilizeng7-max/zengli-island'

  return {
    base: './',
    envPrefix: ['VITE_', 'SITE_'],
    define: {
      'import.meta.env.VITE_SITE_GITHUB_REPO': JSON.stringify(siteGithubRepo),
    },
    server: {
      port: 5173,
    },
    build: {
      chunkSizeWarningLimit: 700,
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor-three': ['three'],
          },
        },
      },
    },
  }
})
