# Product Completion Status — vue

Canonical branch: `ai/product-completion/vue`
Product boundary: Vue 3 single-page starter/reference. The branch repairs the real modern-Node build and dependency-security failures without inventing unrelated product functionality or changing frameworks.

## T01–T10 core tasks

| ID | Status | Task / verification |
| --- | --- | --- |
| T01 | DONE | Inspected source, dependency graph and Vercel failure history. |
| T02 | DONE | Reproduced the Vue CLI 4 / webpack 4 OpenSSL 3 build failure on modern Node. |
| T03 | DONE | Migrated Vue CLI build tooling to CLI 5 / webpack 5 without `--openssl-legacy-provider`. |
| T04 | DONE | Added regression contracts for the toolchain boundary. |
| T05 | DONE | Scoped Vue lint to application source while Node contract tests run separately. |
| T06 | DONE | Regenerated and verified the Yarn lockfile under Node 22. |
| T07 | DONE | Production build passes on the migrated toolchain. |
| T08 | DONE | Production audit findings in old Vue compiler graph were reproduced. |
| T09 | DONE | Runtime/compiler moved to stable Vue 3.5.42. |
| T10 | PARTIAL | Exact final Vercel/browser smoke remains to be verified. |

## I01–I10 improvements

| ID | Status | Improvement |
| --- | --- | --- |
| I01 | DONE | Pin Node 22 and Yarn 1.22.22 release boundary. |
| I02 | DONE | Preserve Vue architecture; avoid an unnecessary framework rewrite. |
| I03 | DONE | Remove dependence on legacy OpenSSL behavior. |
| I04 | DONE | Add permanent contracts → frozen install → lint → build Quality CI. |
| I05 | DONE | Add high-severity production dependency audit to the permanent gate. |
| I06 | DONE | Use guarded lockfile regeneration before generated dependency state is committed. |
| I07 | DONE | Upgrade `@vue/compiler-sfc` with the Vue runtime to keep compiler/runtime versions aligned. |
| I08 | PARTIAL | Re-run exact-head production audit after Vue 3.5.42 lock sync. |
| I09 | PARTIAL | Hosted responsive/accessibility smoke requires the final READY preview. |
| I10 | DEFERRED WITH REASON | No Vite rewrite: the repaired CLI 5 build is stable and stack replacement adds no validated product value. |

## F01–F10 product features

| ID | Status | Feature / reason |
| --- | --- | --- |
| F01 | DONE | Existing Vue SPA behavior retained. |
| F02 | DEFERRED WITH REASON | Authentication — no user/account domain exists in this starter. |
| F03 | DEFERRED WITH REASON | Persistence — no product data model exists. |
| F04 | DEFERRED WITH REASON | CRUD — no product entity exists. |
| F05 | DEFERRED WITH REASON | Search — no searchable corpus exists. |
| F06 | DEFERRED WITH REASON | Dashboard — no operational workflow exists. |
| F07 | DEFERRED WITH REASON | Payments — no commerce model exists. |
| F08 | DEFERRED WITH REASON | AI — no validated need exists. |
| F09 | DEFERRED WITH REASON | Export/notifications — no lifecycle or user data exists. |
| F10 | DEFERRED WITH REASON | No production promotion is performed automatically. |

## Verification evidence

Historical Vercel deployment `dpl_HJM2LCUdNa5d6CWDqDSMWscJWmeM` failed under modern Node/OpenSSL with `ERR_OSSL_EVP_UNSUPPORTED` from webpack 4 hashing. A RED contract first required a webpack-5-era Vue CLI boundary. The branch then moved to Vue CLI 5 and a guarded lock migration. That run exposed a separate lint-target mismatch; a second RED contract required linting only `src`, because Node `.mjs` contract tests are executed separately.

Guarded sync run `35038509118` passed contracts, lock regeneration, frozen reinstall, source lint and production build, committing verified lock state `174879546087706997e0fa7e635cf89a1a88ba35`.

The permanent production audit then found high-severity `postcss`/`nanoid` paths through the older Vue compiler graph. A third RED contract required stable Vue/runtime compiler `3.5.42`; guarded sync run `35038735584` passed contracts, regenerated the lockfile, frozen-installed, linted, built, and committed verified lock state `546d4a8778659b30278db7d929b0d72d59953df2`. The permanent exact-head audit still must be observed after this status commit before DONE is claimed.

No merge or production promotion is performed automatically.

Status: **PARTIAL** — build migration is verified; exact-head security gate and hosted preview/browser evidence remain.
