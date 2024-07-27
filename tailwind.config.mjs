/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      boxShadow: {
      'custom': '0px 1px 2px -1px rgba(0, 0, 0, 0.10), 0px 1px 3px 0 rgba(0, 0, 0, 0.10)'
      },
    },
  },
	plugins: [
   
  ],
}
