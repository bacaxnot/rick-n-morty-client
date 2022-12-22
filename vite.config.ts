import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: [
            {
                find: '@assets',
                replacement: path.resolve(__dirname, '/src/assets'),
            },
            {
                find: '@interfaces',
                replacement: path.resolve(__dirname, 'src/entities/interfaces'),
            },
            {
                find: '@classes',
                replacement: path.resolve(__dirname, 'src/entities/classes'),
            },
            {
                find: '@types',
                replacement: path.resolve(__dirname, 'src/entities/types'),
            },
            {
                find: '@utils',
                replacement: path.resolve(__dirname, 'src/utils'),
            },
            {
                find: '@config',
                replacement: path.resolve(__dirname, 'src/config'),
            },
            {
                find: '@components',
                replacement: path.resolve(__dirname, 'src/components'),
            },
            {
                find: '@styles',
                replacement: path.resolve(__dirname, 'src/styles'),
            },
        ],
    },
    plugins: [react()],
    test: {
        globals: true,
    },
})
