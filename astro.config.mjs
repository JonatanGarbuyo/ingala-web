import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
	vite: {
		server: {
			// host: '0.0.0.0',
			// hmr: { clientPort: 3000 },
			// port: 3000,
			watch: {
				usePolling: true,
				// useFsEvents: true
			},
		},
	},
	integrations: [tailwind()],
})
