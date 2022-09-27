import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd());
  const { VITE_PORT } = env;
  const isBuild = command === 'build';
  console.log(env, isBuild);
  return {
    build: {
      outDir: 'dist',
      assetsDir: 'static',
    },
    server: {
      host: '192.168.10.54',
      port: VITE_PORT,
      open: true,
    },
    plugins: [
      legacy({
        targets: ['defaults', 'not IE 11'],
      }),
      vue(),
      AutoImport({
        imports: ['vue'],
        resolvers: [ElementPlusResolver()],
        eslintrc: {
          enabled: true, // Default `false`
          filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
          globalsPropValue: false, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        },
        dts: './types/auto-imports.d.ts',
      }),
      Components({
        resolvers: [ElementPlusResolver()],
        dts: './types/components.d.ts',
      }),
    ],
  };
});
