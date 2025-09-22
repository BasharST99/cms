
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      'sonner@2.0.3': 'sonner',
      'recharts@2.15.2': 'recharts',
      'embla-carousel-react@8.6.0': 'embla-carousel-react',
      'react-hook-form@7.55.0': 'react-hook-form',
      'next-themes@0.4.6': 'next-themes',
      'vaul@1.1.2': 'vaul',
      'react-day-picker@8.10.1': 'react-day-picker',
      'lucide-react@0.487.0': 'lucide-react',
      'input-otp@1.4.2': 'input-otp',
      'class-variance-authority@0.7.1': 'class-variance-authority',
      'react-resizable-panels@2.1.7': 'react-resizable-panels',
      '@radix-ui/react-accordion@1.2.3': '@radix-ui/react-accordion',
      '@radix-ui/react-alert-dialog@1.1.6': '@radix-ui/react-alert-dialog',
      '@radix-ui/react-aspect-ratio@1.1.2': '@radix-ui/react-aspect-ratio',
      '@radix-ui/react-avatar@1.1.3': '@radix-ui/react-avatar',
      '@radix-ui/react-checkbox@1.1.4': '@radix-ui/react-checkbox',
      '@radix-ui/react-collapsible@1.1.3': '@radix-ui/react-collapsible',
      '@radix-ui/react-context-menu@2.2.6': '@radix-ui/react-context-menu',
      '@radix-ui/react-dialog@1.1.6': '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu@2.1.6': '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-hover-card@1.1.6': '@radix-ui/react-hover-card',
      '@radix-ui/react-label@2.1.2': '@radix-ui/react-label',
      '@radix-ui/react-menubar@1.1.6': '@radix-ui/react-menubar',
      '@radix-ui/react-navigation-menu@1.2.5': '@radix-ui/react-navigation-menu',
      '@radix-ui/react-popover@1.1.6': '@radix-ui/react-popover',
      '@radix-ui/react-progress@1.1.2': '@radix-ui/react-progress',
      '@radix-ui/react-radio-group@1.2.3': '@radix-ui/react-radio-group',
      '@radix-ui/react-scroll-area@1.2.3': '@radix-ui/react-scroll-area',
      '@radix-ui/react-select@2.1.6': '@radix-ui/react-select',
      '@radix-ui/react-separator@1.1.2': '@radix-ui/react-separator',
      '@radix-ui/react-slider@1.2.3': '@radix-ui/react-slider',
      '@radix-ui/react-slot@1.1.2': '@radix-ui/react-slot',
      '@radix-ui/react-switch@1.1.3': '@radix-ui/react-switch',
      '@radix-ui/react-tabs@1.1.3': '@radix-ui/react-tabs',
      '@radix-ui/react-toggle-group@1.1.2': '@radix-ui/react-toggle-group',
      '@radix-ui/react-toggle@1.1.2': '@radix-ui/react-toggle',
      '@radix-ui/react-tooltip@1.1.8': '@radix-ui/react-tooltip',
      '/assets/f63e52b8f45122222e1f17960c3a1dc6854bd58a.png': path.resolve(
        __dirname,
        './src/assets/f63e52b8f45122222e1f17960c3a1dc6854bd58a.png',
      ),
      '/assets/f23eb893348f59a0eef3df0739393d997b419cfd.png': path.resolve(
        __dirname,
        './src/assets/f23eb893348f59a0eef3df0739393d997b419cfd.png',
      ),
      '/assets/d0400c167c2b5599f72e19a01b70f51fb477fb65.png': path.resolve(
        __dirname,
        './src/assets/d0400c167c2b5599f72e19a01b70f51fb477fb65.png',
      ),
      '/assets/c7c1437d32e5d96d914055f2258eadea8b0ce7b9.png': path.resolve(
        __dirname,
        './src/assets/c7c1437d32e5d96d914055f2258eadea8b0ce7b9.png',
      ),
      '/assets/c6eb38dcd73fc74b02ab1fd906ac1e453ac4d4b3.png': path.resolve(
        __dirname,
        './src/assets/c6eb38dcd73fc74b02ab1fd906ac1e453ac4d4b3.png',
      ),
      '/assets/aeb2717050b8a016c376bef2963b717132266221.png': path.resolve(
        __dirname,
        './src/assets/aeb2717050b8a016c376bef2963b717132266221.png',
      ),
      '/assets/9e03314b6be949db4da5ca3cd5c60d680034189d.png': path.resolve(
        __dirname,
        './src/assets/9e03314b6be949db4da5ca3cd5c60d680034189d.png',
      ),
      '/assets/966bdcc20de9d1146da18068833210d399cd593e.png': path.resolve(
        __dirname,
        './src/assets/966bdcc20de9d1146da18068833210d399cd593e.png',
      ),
      '/assets/857ca1a3aac5701949e3af6a86e751253a0af20c.png': path.resolve(
        __dirname,
        './src/assets/857ca1a3aac5701949e3af6a86e751253a0af20c.png',
      ),
      '/assets/72f66d3e7acb92eb92c527dd49faafdec13db680.png': path.resolve(
        __dirname,
        './src/assets/72f66d3e7acb92eb92c527dd49faafdec13db680.png',
      ),
      '/assets/5e9207bcb735441d972e642ef3dc91e8c03e307c.png': path.resolve(
        __dirname,
        './src/assets/5e9207bcb735441d972e642ef3dc91e8c03e307c.png',
      ),
      '/assets/287162d3326dca5991c0757aaed3696b8bcf2b7f.png': path.resolve(
        __dirname,
        './src/assets/287162d3326dca5991c0757aaed3696b8bcf2b7f.png',
      ),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'build',
  },
  server: {
    port: 3000,
    open: true,
  },
});
