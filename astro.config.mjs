import react from "@astrojs/react"
import starlight from '@astrojs/starlight'
import tailwind from "@astrojs/tailwind"
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Starlight UI',
      social: {
        github: 'https://github.com/withastro/starlight'
      },
      sidebar: [
        {
          label: 'Components',
          autogenerate: {
            directory: 'components'
          }
        },
        {
          label: 'Guides',
          items:
            [
              // Each item here is one entry in the navigation menu.
              {
                label: 'Example Guide',
                link: '/guides/example/'
              }
            ]
        },
        {
          label: 'Reference',
          autogenerate: {
            directory: 'reference'
          }
        }],
      customCss: [
        './src/tailwind.css',
      ],
    }),
    react(),
    tailwind({
      // Desactiva los estilos base predeterminados:
      applyBaseStyles: false,
    }),
  ]
})