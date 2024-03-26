```cmd
npm i bootstrap react-bootstrap
```

```cmd
 npm i react-hook-form @tanstack/react-query axios react-router-dom
 npm i vite-tsconfig-paths
```

vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
plugins: [react(), tsconfigPaths()],
server: {
port: 5173,
},
css: {
devSourcemap: true,
},
resolve: {
alias: {
'~': path.resolve(\_\_dirname, './src'),
},
},
})
