# Sample project with TypeScript (JSX), React and Node.js

A very simple web project template which makes use of the following tools:

- React
- TypeScript
- Sass
- gulp
- Node
- Express

The IDE being used was Visual Studio Code.

## Running the sample

To compile and bundle everything:

	cd ts-jsx-react-sample/
	npm install
	gulp

To run the client-side piece:

	cd dist/client
	npm install -g http-server
	http-server -p 3000

To run the Node app (listens to port 3000 by default):

	cd dist/
	node app.js

Visit `http://localhost:3000` to see it in action. For the Node app, you can also try `http://localhost:3000/api/time` to test out API routes set up by Express.

## Credits

This template is largely based on [Quramy/tsc-react-example](https://github.com/Quramy/tsc-react-example).
