import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import fs from 'fs/promises';
import svgr from '@svgr/rollup';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            src: resolve(__dirname, 'src'),
        },
    },
    esbuild: {
        loader: 'jsx',
        include: /src\/.*\.jsx?$/, // Handles both .js and .jsx files within src/
        exclude: [],
    },
    optimizeDeps: {
        esbuildOptions: {
            plugins: [
                {
                    name: 'load-js-files-as-jsx',
                    setup(build) {
                        build.onLoad(
                          { filter: /src\/.*\.js$/ }, // Use forward slashes for cross-platform compatibility
                          async (args) => ({
                              loader: 'jsx', // Treat .js files as JSX
                              contents: await fs.readFile(args.path, 'utf8'),
                          })
                        );
                    },
                },
            ],
        },
    },

    plugins: [svgr(), react()],
});
