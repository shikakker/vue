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

test('Vue lint targets application source while Node contract tests run separately', () => {
  assert.equal(pkg.scripts?.lint, 'vue-cli-service lint src')
})

test('Vue runtime stays on the patched stable compiler boundary', () => {
  assert.equal(pkg.dependencies?.vue, '3.5.42')
  assert.equal(pkg.devDependencies?.['@vue/compiler-sfc'], '3.5.42')
})
