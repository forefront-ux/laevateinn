/**
 *
 *
 * @export
 * @param {string} [message='']
 * @param {string} [title='Whoops']
 */
export function alert(message='', title='Whoops'){
	const app = NSApplication.sharedApplication();
	app.displayDialog_withTitle_(message, title);
}