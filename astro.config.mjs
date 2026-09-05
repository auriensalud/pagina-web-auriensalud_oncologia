import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [react()],
    adapter: netlify({
        devFeatures: {
            environmentVariables: true,
            // Deshabilitado: el sandbox de este entorno no logra conectar con el
            // servidor Deno local que emula las Edge Functions, y astro dev se
            // queda colgado esperando la conexión. La edge function sigue
            // funcionando normalmente al desplegar en Netlify.
            edgeFunctions: false
        }
    })
});
