# Changelog

## 2.0.0 (2026-03-30)

### Breaking Changes
- Minimum Node.js version raised to **22** (from 10)
- Moleculer peer dependency updated to **^0.15.0** (from ^0.14.0)
- ESLint upgraded to **v9** with flat config format (replaces `.eslintrc.js`)
- Travis CI replaced with **GitHub Actions**

### Changes
- Updated all devDependencies to latest versions:
  - Jest 26 → **30**
  - ESLint 7 → **9** (flat config with `@eslint/js`, `globals`, `eslint-plugin-security`)
  - Prettier 2 → **3**
  - Nodemon 2 → **3**
- Removed deprecated/unnecessary dependencies:
  - `benchmarkify`, `coveralls`, `jest-cli`, `npm-check`
  - `eslint-config-prettier`, `eslint-plugin-prettier`, `eslint-plugin-node`, `eslint-plugin-promise`
- Added param validation example in the test action
- Modernized lifecycle hooks (`started`/`stopped` are now `async`)
- Test uses `async/await` instead of `.then()` chains
- Test broker created with `{ logger: false }` to suppress output
- VS Code launch config uses `${workspaceFolder}` (replaces deprecated `${workspaceRoot}`)
- VS Code launch config uses forward slashes (cross-platform)
- README badges updated (Travis CI → GitHub Actions, removed Snyk)
- `npm install` command updated (removed deprecated `--save` flag)
- `meta.js` username default now handles missing git config gracefully
