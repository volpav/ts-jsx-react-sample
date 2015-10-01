/// <reference path="../../../../typings/bundle.d.ts" />

import * as React from 'react';

/** Represents component settings. */
export interface ComponentSettings {
	/** Gets or sets the tag name for the wrapper element. */
	tagName?: string,
	
	/** Gets or sets CSS class name to be applied to the wrapper element. */
	className?: string	
}

/** Represents a component. */
export abstract class Component<TProperties> extends React.Component<TProperties, any> {
	/**
	 * Initializes a new instance of an object.
	 * @param settings {ComponentSettings} Component settings.
	 */
	constructor(private settings?: ComponentSettings) {
		super();
		
		if (!this.settings) {
			this.settings = {};
		}
		
		/* When CSS class is specified but no tag name, we will fall back to using <div />. */
		if (!this.settings.tagName && this.settings.className) {
			this.settings.tagName = 'div';
		}
	}
	
	/**
	 * Renders the component body.
	 * @returns {JSX.Element} Component XJS content.
	 */
	abstract renderBody(): JSX.Element;
	
	/**
	 * Renders the component.
	 * @returns {JSX.Element} Component XJS content.
	 */
	render() {
		var ret = null;
		
		if (this.settings.tagName) {
			/* Wrapping component body into the  */
			ret = React.createElement(
				this.settings.tagName,
				this.settings.className ? { 'className': this.settings.className } : null,
				this.renderBody()
			);
		} else {
			/* No wrapping element, rendering only the body. */
			ret = this.renderBody();
		}
		
		return ret;
	}
}