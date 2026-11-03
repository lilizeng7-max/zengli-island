/** GitHub Pages 站点仓库（构建时可通过 SITE_GITHUB_REPO / VITE_SITE_GITHUB_REPO 注入） */
export const SITE_GITHUB_REPO: string =
  (import.meta.env.VITE_SITE_GITHUB_REPO as string | undefined)?.trim() ||
  'https://github.com/lilizeng7-max/zengli-island'
