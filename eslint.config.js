import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

// Next.js App Router route files are REQUIRED to export these alongside the
// component. Without this list, react-refresh flags every layout and page.
const NEXT_ROUTE_EXPORTS = [
  'metadata',
  'generateMetadata',
  'viewport',
  'generateViewport',
  'generateStaticParams',
  'dynamic',
  'dynamicParams',
  'revalidate',
  'fetchCache',
  'runtime',
  'preferredRegion',
  'maxDuration',
]

export default defineConfig([
  // `.next` holds Next's own minified build output. Linting it produced ~1300
  // meaningless errors that buried the real ones.
  globalIgnores(['dist', '.next', 'node_modules', 'next-env.d.ts']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [js.configs.recommended, reactHooks.configs.flat.recommended],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: { 'react-refresh': reactRefresh },
    rules: {
      // Was `reactRefresh.configs.vite` — a leftover from before this project
      // moved to Next.js. Next has its own fast refresh, and the Vite preset
      // does not know about the route exports above.
      'react-refresh/only-export-components': [
        'warn',
        { allowExportNames: NEXT_ROUTE_EXPORTS },
      ],
    },
  },
])
