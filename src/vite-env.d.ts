/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_GITHUB_REPO?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
