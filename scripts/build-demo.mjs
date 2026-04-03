#!/usr/bin/env node
// scripts/build-demo.mjs — builds a self-contained dist/ for fiko.junglestar.org
// Kitchen is the site root. Demo page is retired (KISS).

import { mkdir, copyFile, readFile, writeFile, cp } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const dist = path.join(root, 'dist')

await mkdir(dist, { recursive: true })

// framework CSS — copy omg/ and entry point as fiko.css
await cp(path.join(root, 'omg'), path.join(dist, 'omg'), { recursive: true })
await copyFile(path.join(root, 'index.css'), path.join(dist, 'fiko.css'))

// static assets — live at project root
for (const f of ['favicon.svg', 'favicon.ico', 'apple-touch-icon.png', 'og-image.jpg', 'CNAME']) {
  const src = path.join(root, f)
  if (existsSync(src)) await copyFile(src, path.join(dist, f))
}

// index.html — fix CSS path: ./index.css → ./fiko.css
let html = await readFile(path.join(root, 'index.html'), 'utf8')
html = html.replace('<link rel="stylesheet" href="./index.css" />', '<link rel="stylesheet" href="./fiko.css" />')
await writeFile(path.join(dist, 'index.html'), html)

console.log('dist/ ready → run: npm run deploy')
