import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// // Use environment variables from .env file
// import dotenv from 'dotenv';
// dotenv.config();

export default defineConfig({
    plugins: [react()],
    server: {
        port: 5173, // or any preferred local dev port
        proxy: {
            '/api': {
                target: 'http://localhost:5000', // Backend API server in development
                changeOrigin: true,
                secure: false,
            },
        },
    },
    define: {
        'process.env': process.env, // Enables use of process.env in code
    },
    build: {
        outDir: 'dist',
        sourcemap: false,
    },
});
