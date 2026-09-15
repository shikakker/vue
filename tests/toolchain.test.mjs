import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const pkg = JSON.parse(await readFile(new URL('../package.json', import.meta.url), 'utf8'))

test('Vue CLI build uses webpack-5-era tooling compatible with modern Node/OpenSSL', () => {
  assert.match(pkg.devDependencies?.['@vue/cli-service'] || '', /^[~^]?5\./)
  assert.match(pkg.devDependencies?.['@vue/cli-plugin-babel'] || '', /^[~^]?5\./)
  assert.match(pkg.devDependencies?.['@vue/cli-plugin-eslint'] || '', /^[~^]?5\./)
  assert.doesNotMatch(pkg.scripts?.build || '', /openssl-legacy-provider/)
})
