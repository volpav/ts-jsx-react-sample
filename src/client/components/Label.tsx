/// <reference path="../../../typings/bundle.d.ts" />

import * as React from 'react';
import {Component} from './abstractions/Component';

/** Represents label properties. */
export interface LabelProperties {
	/** Gets or sets the text of a label. */
	text: string;
}

export class Label extends Component<LabelProperties> {
	/**
	 * Initializes a new instance of an object.
	 * @param settings {ComponentSettings} Component settings.
	 */
	constructor() {
		super({ className: 'todo-label' });
	}
	
	/**
	 * Renders the component body.
	 * @returns {JSX.Element} Component XJS content.
	 */
	renderInternal() {
		return <label>{this.props.text}</label>;
	}
}