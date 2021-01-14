# Electron App Template

## 準備

フォルダを作成して必要なパッケージをインストールする。

```bash
mkdir electron-app
cd electron-app

npm init -y
yarn add -D electron
yarn add -D typescript
yarn add -D webpack webpack-cli ts-loader
yarn add -D react react-dom @types/react @types/react-dom
yarn add -D html-webpack-plugin
```

tsconfig.jsonファイルを作成する。
webpack.config.jsファイルを作成する。

srfフォルダを作成する。
その中にelectron.tsファイルとindex.htmlファイルとreact.tsxファイルを作る。

- src
  - electron.ts
  - index.html
  - react.tsx

package.jsonにスクリプトを追加する

```json
"scripts": {
  "build": "webpack --config ./webpack.config.js",
  "start": "npm run build && electron ./src/electron.js"
}
```

## 参考にしたサイト

[Getting Started with Electron, Typescript, React and Webpack](https://www.sitepen.com/blog/getting-started-with-electron-typescript-react-and-webpack)