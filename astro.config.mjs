// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
   vite: {
      plugins: [
         tailwindcss(),
         {
            name: '@astrojs/ts-plugin',
         },
      ],
   },
   fonts: [
      {
         provider: fontProviders.local(),
         name: 'Roboto',
         cssVariable: '--custom-font-roboto',
         options: {
            variants: [
               {
                  src: ['./src/assets/fonts/roboto/static/Roboto-Regular.ttf'],
                  weight: 400,
                  style: 'normal',
               },
               {
                  src: ['./src/assets/fonts/roboto/static/Roboto-Italic.ttf'],
                  weight: 400,
                  style: 'italic',
               },
               {
                  src: ['./src/assets/fonts/roboto/static/Roboto-Bold.ttf'],
                  weight: 700,
                  style: 'normal',
               },
               {
                  src: [
                     './src/assets/fonts/roboto/static/Roboto-BoldItalic.ttf',
                  ],
                  weight: 700,
                  style: 'italic',
               },
               {
                  src: ['./src/assets/fonts/roboto/static/Roboto-Light.ttf'],
                  weight: 300,
                  style: 'normal',
               },
               {
                  src: [
                     './src/assets/fonts/roboto/static/Roboto-LightItalic.ttf',
                  ],
                  weight: 300,
                  style: 'italic',
               },
            ],
         },
      },
   ],
});
