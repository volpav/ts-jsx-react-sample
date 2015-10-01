/// <reference path="../typings/bundle.d.ts" />

import * as bodyParser from 'body-parser';
import * as express from 'express';
import {Router} from './router';
import * as http from 'http';
import * as path from 'path';

var app = express(),
	router = new Router(),
	server = http.createServer(app);
	
/* HTTP port can be customized via environment variables. */
app.set('port', process.env.PORT || 3000);

/* Setting up middleware. */
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client')));

/* Serving website root. */
app.get('/', (req,res) => {
  res.sendfile('client/index.html');
});

/* Configuring API routes. */
router.configureRoutes(app);

try {
	/* Starting our server. */
	server.listen(app.get('port'), () => {
		console.log('HTTP server is listening on port ' + app.get('port') + '...');
	});
} catch (ex) {
	/* To give a hint to developer. */
	console.log(ex.stack);
}