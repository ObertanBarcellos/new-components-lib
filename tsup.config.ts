import { defineConfig } from "tsup"
import { copyFileSync } from "fs"
import { join } from "path"

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: {
    compilerOptions: {
      incremental: false
    }
  },
  tsconfig: "tsconfig.build.json",
  splitting: false,
  sourcemap: true,
  clean: true,
  publicDir: false,
  onSuccess: async () => {
    // Copy CSS file to dist
    copyFileSync(
      join(__dirname, "src/styles.css"),
      join(__dirname, "dist/styles.css")
    )
  },
  external: [
    "react",
    "react-dom",
    "react/jsx-runtime",
    "@radix-ui/react-accordion",
    "@radix-ui/react-avatar",
    "@radix-ui/react-checkbox",
    "@radix-ui/react-collapsible",
    "@radix-ui/react-dialog",
    "@radix-ui/react-dropdown-menu",
    "@radix-ui/react-label",
    "@radix-ui/react-popover",
    "@radix-ui/react-progress",
    "@radix-ui/react-select",
    "@radix-ui/react-slot",
    "@radix-ui/react-switch",
    "@radix-ui/react-tabs",
    "@radix-ui/react-tooltip",
    "@tiptap/extension-link",
    "@tiptap/extension-placeholder",
    "@tiptap/react",
    "@tiptap/starter-kit",
    "class-variance-authority",
    "clsx",
    "cmdk",
    "date-fns",
    "embla-carousel-react",
    "fuse.js",
    "lucide-react",
    "next-themes",
    "react-day-picker",
    "shiki",
    "sonner",
    "tailwind-merge",
    "vaul",
  ],
  treeshake: true,
})

