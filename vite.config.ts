import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: [
      // Alias @ to the src directory
      { find: '@', replacement: path.resolve(__dirname, './src') },
      // Resolve figma:asset/<file> to the src/assets folder so Figma-exported
      // imports like `figma:asset/<hash>.png` work during dev.
      // Use a RegExp-based alias so the filename part is preserved.
      { find: /^figma:asset\/(.*)/, replacement: path.resolve(__dirname, './src/assets') + '/$1' },
    ],
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
