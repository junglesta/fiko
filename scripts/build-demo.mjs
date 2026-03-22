#!/usr/bin/env node
// scripts/build-demo.mjs — builds a self-contained dist/ for fiko.junglestar.org

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

// demo assets
await copyFile(path.join(root, 'demo', 'index.css'), path.join(dist, 'index.css'))

for (const f of ['favicon.svg', 'favicon.ico', 'apple-touch-icon.png', 'og-image.jpg', 'CNAME']) {
  const src = path.join(root, 'demo', f)
  if (existsSync(src)) await copyFile(src, path.join(dist, f))
}

// read version from package.json
const { version } = JSON.parse(await readFile(path.join(root, 'package.json'), 'utf8'))

// fix CSS path in index.html: ../index.css → ./fiko.css, inject version
let html = await readFile(path.join(root, 'demo', 'index.html'), 'utf8')
html = html
  .replace('<link rel="stylesheet" href="../index.css" />', '<link rel="stylesheet" href="./fiko.css" />')
  .replaceAll('__FIKO_VERSION__', version)
await writeFile(path.join(dist, 'index.html'), html)

console.log('dist/ ready → run: npm run deploy')
