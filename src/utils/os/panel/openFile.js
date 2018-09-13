/**
 *
 *
 * @export
 * @param {string} [title="Choose a file…"]
 * @param {string} [message="Select the location…"]
 * @param {string} [prompt="Open"]
 * @returns {NSOpenPanel}
 */
export function openFile(title="Choose a file…", message="Select the location…", prompt="Open") {
    const openPanel = NSOpenPanel.openPanel();

	openPanel.setTitle(title);
	openPanel.setMessage(message);
	openPanel.setPrompt(prompt);

	openPanel.setCanCreateDirectories(false);
	openPanel.setCanChooseDirectories(false);
	openPanel.setCanChooseFiles(true);

	openPanel.setAllowsMultipleSelection(false);
	openPanel.setShowsHiddenFiles(false);
	openPanel.setExtensionHidden(false);
    return openPanel;
}