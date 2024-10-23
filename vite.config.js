import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import fs from 'fs/promises';
import svgr from '@svgr/rollup';
import path from 'path'; // Import path to handle cross-platform compatibility

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            src: resolve(__dirname, 'src'),
        },
    },
    esbuild: {
        loader: 'jsx',
        include: /src\/.*\.jsx?$/, // Handles .js and .jsx files in src/
        exclude: [],
    },
    optimizeDeps: {
        esbuildOptions: {
            plugins: [
                {
                    name: 'load-js-files-as-jsx',
                    setup(build) {
                        build.onLoad(
                            {
                                // Use RegExp constructor to handle cross-platform paths
                                filter: new RegExp(`src\\${path.sep}.*\\.js$`)
                            },
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
