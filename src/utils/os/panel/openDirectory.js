import * as SD from '../../sketch/document';

/**
 *
 *
 * @export
 * @param {string} [title="Choose a location…"]
 * @param {string} [message="Select the export location…"]
 * @param {string} [prompt="Export"]
 * @returns {NSOpenPanel}
 */
export function openDirectory(title="Choose a location…", message="Select the export location…", prompt="Export"){
	const openPanel = NSOpenPanel.openPanel();
	const defaultDirectory = SD.getDirectory();

	openPanel.setDirectoryURL(NSURL.fileURLWithPath(defaultDirectory));

	openPanel.setTitle(title);
	openPanel.setMessage(message);
	openPanel.setPrompt(prompt);

	openPanel.setCanCreateDirectories(true);
	openPanel.setCanChooseDirectories(true);
	openPanel.setCanChooseFiles(false);

	openPanel.setAllowsMultipleSelection(false);
	openPanel.setShowsHiddenFiles(false);
	openPanel.setExtensionHidden(false);

	return openPanel;
}