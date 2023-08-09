import React from "react";

const ReactBoilerPlate = () => {

  const CreatingAppSteps = [
    {
      text: "Step 1. Install the React and Webpack",
      code: "npm i react react-dom webpack webpack-cli webpack-dev-server style-loader css-loader"
    },
    {
      text: "Step 2. Install Babel to transpile code for older browsers",
      code: "npm install --save-dev @babel/preset-react  @babel/preset-env"
    },
    {
      text: "Step 3. Create file '.babelrc', put value below and save" ,
      code: `{
        "presets": ["@babel/preset-react", "@babel/preset-env"]
      }`
    },
    {
      text: "Step 4. Create file 'webpack.config.js' and copy paste the configuration",
      code: `
      const path = require('path');
      const HtmlWebpackPlugin = require('html-webpack-plugin');
      
      module.exports = {
        entry: './src/index.js',
        output: {
          path: path.join(__dirname, '/build'),
          filename: 'main.js
        },
        devServer: {
          historyApiFallback: true,
          port: 1000
        },
        module: {
          rules: [
            {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              include: path.resolve(__dirname, 'src'),
              loader: require.resolve("babel-loader"),
            },
            {
              test: /\.css$/,
              use: ["style-loader", "css-loader"],
            },
            {
              test: /\.(png|jpg|jpeg|gif|svg|ico)$/i,
              type: 'asset/resource'
            }
          ]
        },
        plugins: [
          new HtmlWebpackPlugin({
            template: './public/index.html'
          })
        ],
        resolve: {
          modules: [__dirname, "src", "node_modules"],
          extensions: ["*", ".js", ".jsx"],
          alias: {
            '@': path.resolve(__dirname, 'src'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@store': path.resolve(__dirname, 'src/store'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@helpers': path.resolve(__dirname, 'src/utils/helpers'),
            '@constants': path.resolve(__dirname, 'src/utils/constants'),
            '@services': path.resolve(__dirname, 'src/utils/services'),
            '@modals': path.resolve(__dirname, 'src/components/Modal'),
          }
           },
      }
      ` 
    }
  ]

  const Step = ({ text, code }) => {
    return (
      <div className="mt-4">
        <p>{text}</p>
        <div className="code-block">{code}</div>
      </div>
    )
  }

  return ( <>
    <div className="container">
      <div>
        <h1 className="text-info">React Boilerplate</h1>
        <p> Setting up, installing dependencies, checking version compatibility is one of the hardest part of being a developer. </p>
        <p> It takes a lot of time to get started. In this blog, we are going to make it easier and faster. </p>
        { CreatingAppSteps.map((data) => { return <Step text={data.text} code={data.code}/> }) }
      </div>
    </div> 
  </>)
}

export default ReactBoilerPlate