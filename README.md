# @binbinji/unplugin-compress-json

一个用于压缩 JSON 文件的 unplugin 插件，支持 Vite、Webpack、Rollup 等主流构建工具。

## 功能特性

- 🗜️ **自动压缩** - 自动移除 JSON 文件中的空白字符和换行符
- 🔧 **多构建工具支持** - 支持 Vite、Webpack、Rollup 等构建工具
- ⚡ **零配置** - 开箱即用，无需额外配置
- 🎯 **精确匹配** - 只处理 `.json` 文件，不影响其他资源

## 安装

```bash
# npm
npm install @binbinji/unplugin-compress-json -D

# yarn
yarn add @binbinji/unplugin-compress-json -D

# pnpm
pnpm add @binbinji/unplugin-compress-json -D
```

## 使用方法

### Vite

```ts
// vite.config.js
import { defineConfig } from 'vite'
import CompressJson from '@binbinji/unplugin-compress-json/vite'

export default defineConfig({
  plugins: [
    CompressJson(),
  ],
})
```

### Vue CLI

```ts
// vue.config.js
const CompressJson = require('@binbinji/unplugin-compress-json/webpack')

module.exports = {
  configureWebpack: {
    plugins: [
      CompressJson(),
    ],
  },
}
```

## 工作原理

插件会在构建过程中自动检测所有 `.json` 文件，并移除其中的：
- 空格
- 制表符
- 换行符
- 其他空白字符

**压缩前：**
```json
{
  "name": "example",
  "version": "1.0.0",
  "description": "这是一个示例"
}
```

**压缩后：**
```json
{"name":"example","version":"1.0.0","description":"这是一个示例"}
```

## 注意事项

- 插件只处理构建输出中的 `.json` 文件
- 不会修改源代码文件
- 适用于生产环境构建，可以减小打包体积

## License

[MIT](LICENSE)
