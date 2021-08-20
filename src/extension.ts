import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('google-it.search', async () => {
		let inputSearch = await vscode.window.showInputBox({
			title: 'Google this',
			placeHolder: 'type your search'
		});
		if (inputSearch) vscode.env.openExternal(vscode.Uri.parse(`https://google.com/search?q=${inputSearch}`));
	});
	context.subscriptions.push(disposable);
}
export function deactivate() { }
