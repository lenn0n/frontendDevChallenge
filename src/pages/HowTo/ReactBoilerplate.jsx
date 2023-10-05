import React from "react";
import Footer from "@components/Footer/Footer";
const ReactBoilerPlate = () => {
	const CreatingAppSteps = [
		{
			text: "Before you start, make sure you have NodeJS in your machine. In your directory, type:",
			code: "npm init",
		},
		{
			text: "Next, install the React, RouterDOM, Loaders and Webpack",
			code: "npm i react react-dom webpack webpack-cli webpack-dev-server html-webpack-plugin babel-loader style-loader css-loader react-router-dom",
		},
		{
			text: "Install Babel to transpile code for older browsers",
			code: "npm i --save-dev @babel/preset-react @babel/preset-env",
		},
		{
			text: "Create file '.babelrc', put value below and save",
			code: `{ "presets": ["@babel/preset-react", "@babel/preset-env"] }`,
		},
		{
			text: "Then, create file 'webpack.config.js' in your root folder and copy paste the config below",
			code: `
      const path = require('path');
      const HtmlWebpackPlugin = require('html-webpack-plugin');
      
      module.exports = {
        entry: './src/index.js',
        output: {
          path: path.join(__dirname, '/build'),
          filename: 'main.js'
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
      `,
		},
		{
			text: "Next, in your root folder, Create /public folder and put index.html file inside. (./public/index.html)",
			code: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
           <meta charset="UTF-8">
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <link rel="icon" type="image/x-icon" href="YOUR_FAVICON">
           <title>WEBSITE_TITLE</title>
      </head>
      <body>
           <div id="root"></div>
      </body>
      </html>
      `,
		},
		{
			text: "Create /src folder and put index.js file inside. (./src/index.js)",
			code: `
      import React from 'react';
      import ReactDOM from 'react-dom/client';
      
      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(<div>Hello World</div>)
      `,
		},
		{
			text: "Replace scripts in your package.json",
			code: ` 
      "scripts": {
        "start": "webpack-dev-server --mode development --open --hot",
        "build": "webpack --mode production"
      }
      `,
		},
		{
			text: "Finally, run your project, you will be redirect to http://localhost:1000. You can change the port in webpack.config.js",
			code: `npm start`,
		},
		{
			text: "I didn't include the react-router-dom here simply because the documentation itself is very straightforward. ",
			code: "https://reactrouter.com/en/main",
		},
		{
			text: "To support Typescript, install the packages below",
			code: "npm install --save-dev typescript ts-loader @types/react @types/react-dom @babel/preset-typescript",
		},

		{
			text: "Create file in root folder: tsconfig.json",
			code: `
			{
				"compilerOptions": {
					"target": "es5",
					"module": "commonjs",
					"jsx": "react",
					"outDir": "./dist",
					"strict": true,
					"esModuleInterop": true
				},
				"include": [
					"./src/**/*"
				]
			}
			`,
		},
		{
			text: "Add this to webpack.config.js",
			code: ` module.exports = {
				// ...
				module: {
					rules: [
						{
							test: /\.(ts|tsx)$/,
							exclude: /node_modules/,
							use: 'ts-loader',
						},
						// other rules...
					],
				},
				resolve: {
					extensions: ['.tsx', '.ts', '.js'],
				},
			};`,
		},
		{
			text: "Update .babelrc",
			code: `
			{ 
				"presets": [ 
					"@babel/preset-react",
					"@babel/preset-env",
					"@babel/preset-typescript"
				] 
			}
			`,
		},

	];

	const Step = ({ text, code }) => {
		return (
			<div className="mt-4">
				<p>{text}</p>
				<div className="code-block rounded-lg bg-slate-800">
					{code}
				</div>
			</div>
		);
	};

	return (
		<>
			<div className="flex justify-center m-4">
				<div>
					<h1 className="text-white bg-blue-800 p-2 rounded-lg mb-3  font-bold text-[29px]">
						React + WP5 + Typescript
					</h1>
					<p>
						{" "}
						Setting up, installing dependencies, checking version
						compatibility is one of the hardest part of being a
						developer.{" "}
					</p>
					<p>
						{" "}
						It takes a lot of time to get started. In this blog, we
						are going to make it easier and faster".{" "}
					</p>
					<p>
						{" "}
						Or you can just clone my repo:{" "}
						<a href="https://github.com/lenn0n/react-webpack-boileplate.git">
							https://github.com/lenn0n/react-webpack-boileplate.git
						</a>
					</p>
					{CreatingAppSteps.map((data) => {
						return <Step text={data.text} code={data.code} />;
					})}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default ReactBoilerPlate;
