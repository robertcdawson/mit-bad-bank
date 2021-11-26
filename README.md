# Bank Bank app for MIT xPro

## Description

This app presents a fictional bank without security (hence, Bad Bank).

## Features

* Create an account (as many as desired for this demo)
* Deposit money into last created account (last created for demo)
* Withdraw money into last created account (last created for demo)
* View all account data (minus balance as this was not a requirement)

Note: For simplicity, this app uses [React Context](https://reactjs.org/docs/context.html) to maintain account information.

## View Online

This app can be viewed online at:

http://bank-bank-robert-dawson.s3-website-us-west-1.amazonaws.com/#/

## Installation Guidelines

First, download this repo using `git clone https://github.com/robertcdawson/mit-bad-bank.git`.

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Technology

* React
* Bootstrap
* React Testing Library

## License

MIT