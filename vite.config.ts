/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import path from 'node:path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
        open: true,
        cors: process.env.NODE_ENV === 'development',
    },
    resolve: {
        alias: [
            { find: '@', replacement: path.resolve(__dirname, 'src') },
            {
                find: '@components',
                replacement: path.resolve(__dirname, 'src/components'),
            },
            {
                find: '@assets',
                replacement: path.resolve(__dirname, 'src/assets'),
            },
            {
                find: '@css',
                replacement: path.resolve(__dirname, 'src/assets/css'),
            },
        ],
    },
});
