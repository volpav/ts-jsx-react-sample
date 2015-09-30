/// <reference path="../../../typings/bundle.d.ts" />

import * as React from 'react';
import {Label} from './Label';

/** Represents application properties. */
interface AppProperties {}

/** Represents an application. */
export class App extends React.Component<AppProperties, any> {
	/**
	 * Renders the component.
	 * @returns {JSX.Element} Component XJS content.
	 */
	render() {
		return <Label text="Hello, world!" />;
	}
}
