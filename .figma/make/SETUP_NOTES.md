# Initial import setup blocker

The Figma Make bootstrap scripts were added and dependency installation succeeds.
Vite starts on the assigned port, but `figma make verify-bootstrap` fails because
`GET /` returns `404`.

The imported repository contains `src/App.tsx` but does not contain a Vite HTML
entrypoint (`index.html`) or a React entry module such as `src/main.tsx`.
Restore the missing application entry files from the source project, then rerun:

```sh
figma make verify-bootstrap
```

Deployment and deploy-preview setup were intentionally deferred because
bootstrap is not ready.
