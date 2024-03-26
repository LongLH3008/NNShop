Setup And Config for Node JS / Express / Mongo

```cmd
npm init -y
npm i -D vite-plugin-node morgan
npm i express
npm i cors
npm i mongoose
npm i nodemon
npm i bcryptjs
npm i joi
npm i http-status-codes
npm i jsonwebtoken
npm i dotenv

tạo vite.config.js
import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';

export default defineConfig({
  // ...vite configures
  server: {
    // vite server configs, for details see [vite doc](https://vitejs.dev/config/#server-host)
    port: 3000
  },
  plugins: [
    ...VitePluginNode({
      // Nodejs native Request adapter
      // currently this plugin support 'express', 'nest', 'koa' and 'fastify' out of box,
      // you can also pass a function if you are using other frameworks, see Custom Adapter section
      adapter: 'express',

      // tell the plugin where is your project entry
      appPath: './app.ts',

      // Optional, default: 'viteNodeApp'
      // the name of named export of you app from the appPath file
      exportName: 'viteNodeApp',

      // Optional, default: false
      // if you want to init your app on boot, set this to true
      initAppOnBoot: false,

      // Optional, default: 'esbuild'
      // The TypeScript compiler you want to use
      // by default this plugin is using vite default ts compiler which is esbuild
      // 'swc' compiler is supported to use as well for frameworks
      // like Nestjs (esbuild dont support 'emitDecoratorMetadata' yet)
      // you need to INSTALL `@swc/core` as dev dependency if you want to use swc
      tsCompiler: 'esbuild',

      // Optional, default: {
      // jsc: {
      //   target: 'es2019',
      //   parser: {
      //     syntax: 'typescript',
      //     decorators: true
      //   },
      //  transform: {
      //     legacyDecorator: true,
      //     decoratorMetadata: true
      //   }
      // }
      // }
      // swc configs, see [swc doc](https://swc.rs/docs/configuration/swcrc)
      swcOptions: {}
    })
  ],
  optimizeDeps: {
    // Vite does not work well with optionnal dependencies,
    // you can mark them as ignored for now
    // eg: for nestjs, exlude these optional dependencies:
    // exclude: [
    //   '@nestjs/microservices',
    //   '@nestjs/websockets',
    //   'cache-manager',
    //   'class-transformer',
    //   'class-validator',
    //   'fastify-swagger',
    // ],
  },
});

Sửa cổng port và đường dẫn thư mục (appPath) trong file vite.config.js nếu cần

Sau dó tạo thư mục src, tạo file src/app.js
import express from "express";

const app = express();

export const viteNodeApp = app;

Lưu ý: file package.json
Cần thêm key 'type: module' (module es6) vào file.
Sửa 'start' trong key 'script' thành 'dev:vite'

Tạo các thư mục src/models, src/controllers, src/routers, src/schemas, ...


npm i dotenv và tạo file .env tạo biến môi trường
hoặc tạo file .env và biến môi trường và chạy node --env-file .env

```
