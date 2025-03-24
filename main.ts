import { Plugin } from 'obsidian';

export default class ExamplePlugin extends Plugin {
	statusBarTextElement: HTMLSpanElement;

	async onload(): Promise<void> {
		this.statusBarTextElement = this.addStatusBarItem().createEl("span");
		this.statusBarTextElement.textContent = "Hello, miguel";
		console.log("Hello world!")
	}
}
