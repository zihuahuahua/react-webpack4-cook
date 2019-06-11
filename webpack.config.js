const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin  = require('html-webpack-plugin')
 
module.exports = {
  mode: "development",
  entry: ["./src/index.js"],
  output: {
    // 输出目录
    path: path.join(_dirname, "dist"),
    // 文件名称
    filename: "bundle.js"
  },
  module: {},
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html', // 最终创建的文件名
      template: path.join(__dirname,'src/template.html') /// 指定模版路径
    })
  ],
  devServer: {},
  test: /\.jsx?$/,
  exclude: /node_modules/,
  use: [
    {
      loader: "babel-loader"
    }
  ],
  alias: {
    // +++ 加入配置
    '@': resolve('src')
}
}