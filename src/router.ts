/// <reference path="../typings/bundle.d.ts" />

import * as express from 'express';

/** Represents an API router. */
export class Router {
	/**
	 * Initializes a new instance of an object.
	 * @param routePrefix {string} Route prefix.
	 */
	constructor(private routePrefix: string = '/api') {}
	
	/**
	 * Configures API routes.
	 * @param app {express.Application} Express application.
	 */
	configureRoutes(app: express.Application) {
		/**
		 * Builds up an absolute path for an API endpoint.
		 * @param relativePath {string} Relative path.
		 */ 
		var route = (relativePath: string) =>
			this.routePrefix + '/' + relativePath;
		
		app.get(route('time'), (req, res) => {
			res.json({ result: new Date() });
		});
	}
}