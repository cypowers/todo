# AGENTS.md

## Cursor Cloud specific instructions

This is a single client-side React app (Create React App / `react-scripts` 5.0.1, React 19), bootstrapped at the repo root. No backend, database, or environment variables are required. Standard scripts live in `package.json` (`start`, `build`, `test`).

- **Run (dev):** `npm start` serves the app at http://localhost:3000. In this headless VM start it without auto-opening a browser, e.g. `BROWSER=none npm start`.
- **Build:** `npm run build`. Note CRA treats lint warnings as errors only when `CI=true`; the source currently has one `react-hooks/exhaustive-deps` warning in `src/App.js`, so `CI=true npm run build` fails while a plain `npm run build` (dev/default) succeeds. Do not "fix" this as an environment problem.
- **Lint:** there is no dedicated lint script; CRA surfaces ESLint (config `react-app`) during `npm start`/`npm run build`. Ad-hoc: `npx eslint src`.
- **Tests:** Testing Library + Jest are installed, but the repo currently has **no test files**, so `npm test` reports "No tests found" (exit 1). This is expected, not a setup failure. Use `CI=true npm test` for a non-watch run.
- The UI is in Korean (header "오늘의 할 일"; "추가" = Add). Todo state is in-memory only — there is no persistence, so a page refresh resets the list to the mock todos.
