# Money tracker

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

This is a simple expenses tracking app built with React. I made it because I wanted to get familiar with the [amCharts](https://www.amcharts.com/) Javascript library for building charts. I got inspired by [Monefy](https://monefy.me/) , one of my favorite apps.

It stores all the data in the localhost, so you'll data will be persistent until you clean it.

## Demo
You can have a look on https://app.netlify.com/sites/nardoyala-money-tracker/overview

![Screenshot](https://raw.githubusercontent.com/nardoyala/money-tracker/main/images/screenshot.png)

## Installation

Clone this repo and npm install.

```bash
npm i
```

## Usage

### Development server

```bash
npm start
```

You can view the development server at `localhost:8080`.

### Production build

```bash
npm run build
```

> Note: Install [http-server](https://www.npmjs.com/package/http-server) globally to deploy a simple server.

```bash
npm i -g http-server
```

You can view the deploy by creating a server in `dist`.

```bash
cd dist && http-server
```

## Author

- [Bernardo Ayala](https://www.bernardoayala.com)

## License

This project is open source and available under the [MIT License](LICENSE).