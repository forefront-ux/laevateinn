
/**
 *
 *
 * @export
 * @param {*} cmd
 * @param {string} [path="/bin/bash"]
 */
export function run(cmd, path="/bin/bash"){
	var task = NSTask.alloc().init();
	task.setLaunchPath(path);
	task.setArguments(cmd);
	task.launch();
}