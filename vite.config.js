// @ts-check
import reactRefresh from "@vitejs/plugin-react-refresh";

export default {
  jsx: "react",
  plugins: [reactRefresh()],
  // esbuild: {
  //   jsxInject: `import React from 'react';`
  // },
  build: {
    minify: false,
  },
  logLevel: "info",
  server: {
    watch: {
      // During tests we edit the files too fast and sometimes chokidar
      // misses change events, so enforce polling for consistency
      usePolling: true,
      interval: 100,
    },
  },
};
