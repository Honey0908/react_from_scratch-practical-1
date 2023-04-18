# Creating a React project from scratch with Babel and Webpack

we'll go over how to create a new React project from scratch using Babel and Webpack. These tools are commonly used together to transpile and bundle JavaScript code, making it compatible with all browsers and environments.

### Prerequisites

Before we get started, you'll need to have Node.js and npm installed on your machine. You can download the latest version of Node.js from the official website: https://nodejs.org/en/.

### Set up a new project directory

Open up a terminal window and run the following command:

```sh
mkdir my-react-app && cd my-react-app
```

This will create a new directory called my-react-app and navigate into that directory

### Install React and ReactDOM

react and react-dom: These are the core dependencies for building React applications.

```sh
npm install react react-dom
```

### Insatll webpack and realted packages

It’s a very popular and powerful tool for configuring not only React, but almost all front-end projects. The core function of webpack is that it takes a bunch of JavaScript files we write in our project and turns them into a single, minified file, so that it will be quick to serve.

```sh
npm install -D webpack webpack-cli webpack-dev-server html-webpack-plugin
```

**html-webpack-plugin**: This is a Webpack plugin that generates an HTML file with the appropriate `<script>` tags to include your bundled JavaScript files in the HTML file.

**webpack**: This is a module bundler that enables you to bundle all your JavaScript and other assets into a single, optimized file for deployment.

**webpack-cli**: This is a command-line interface tool for Webpack that enables you to run Webpack from the command line.

**webpack-dev-server**: This is a development server that enables you to serve your Webpack bundle and assets from memory, with live reloading for fast development.

### Install Babel and realted packages

Webpack needs Babel to process ES6 into ES5 syntaxes in order to work.

```sh
npm install -D @babel/core @babel/preset-env @babel/preset-react babel-loader
```

**@babel/core**: This is the core Babel package that provides the core functionality for transpiling JavaScript code.

**@babel/preset-env**: This is a Babel preset that enables Babel to transpile modern JavaScript syntax into compatible code that works on a wide range of browsers and environments.

**@babel/preset-react**: This is a Babel preset that enables Babel to transpile JSX syntax into regular JavaScript code.

**babel-loader**: This is a Webpack loader that enables Webpack to use Babel to transpile JavaScript code.

### Configure Babel

We'll now configure Babel to transpile our code. Create a new file called .babelrc in your project directory with the following contents:

```sh
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

This tells Babel to use the @babel/preset-env and @babel/preset-react presets to transpile our code.

### Configure Webpack

```sh
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html", // to import index.html file inside index.js
        }),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'), // to define output directory
        filename: '[name].js', // to define the name of the output file
        clean: true, // to clean up the output directory before each build
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3030, // to define the port number for the dev server
        open: true, // to open the browser automatically
        hot: true, // to enable hot module replacement
        compress: true, // to enable gzip compression
        historyApiFallback: true, // to enable HTML5 history API fallback
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
};
```

**mode** specifies the mode for Webpack to run in. In this case, it is set to development.

**entry** specifies the entry point for the application. In this case, it is set to src/index.js.

**plugins** is an array of plugins to use. In this case, it includes HtmlWebpackPlugin, which generates an HTML file for the application.

**output** specifies where to output the bundled files. In this case, it is set to dist/ and the bundled file will be named bundle.js.

**devServer** is the configuration for the development server. It is set to run on port 3030 with the option to automatically open the browser, enable hot module replacement, gzip compression, and HTML5 history API fallback.

**module** specifies how to handle different types of modules in the application. In this case, it includes a rules array that specifies how to handle JavaScript files with babel-loader.

### Write some React code

Open up src/index.js in your favorite code editor and add the following code:

```sh
import React from "react";
import ReactDOM from "react-dom";

function Welcome() {
    return <h1>Hello World !</h1>;
}

ReactDOM.render(<Welcome />, document.getElementById("root"));

```

### create HTML File

```sh
<!DOCTYPE html>
<html>

<head>
    <title>My React Configuration Setup</title>
</head>

<body>
    <div id="root"></div>
</body>

</html>
```

### Run the development server:

```sh
npm run dev
```

### Build for Production

```sh
npm run build
```
