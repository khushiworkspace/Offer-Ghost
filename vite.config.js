// import { defineConfig } from 'vite'
// // import react from '@vitejs/plugin-react-swc'
// import reactRefresh from '@vitejs/plugin-react-swc';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [reactRefresh()],
//   optimizeDeps: {
//     include: ['xlsx'],
//   },  
// })

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react' //removed swc

// // https://vitejs.dev/config/
// export default defineConfig({
//     plugins: [react()],
// })




import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dns from 'dns'

dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        host: "localhost",
        port: "5173",
        proxy: {
            "/trunk": {
                target: "http://localhost:8484/api-docs",
                changeOrigin: true,
                // try to comment
                cookieDomainRewrite: {
                    "*": "localhost",
                },
                // try to comment
                cookiePathRewrite: {
                    "*": "/",
                },
            },
        },
    },

    optimizeDeps: {
        include: ['@mui/x-date-pickers-pro'],
      },
}); 