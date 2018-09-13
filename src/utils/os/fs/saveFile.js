import * as Sound from '../sound';
import * as Dialog from '../dialog';

const contentFormat = content => {
    return JSON.stringify(content, null, '    ');
};

/**
 *
 *
 * @export
 * @param {string} [path='']
 * @returns {boolean}
 */
export function saveFile(path='', content='') {
	let errorPtr = MOPointer.alloc().init()
	const fileContent = NSString.stringWithString(contentFormat(content));
	fileContent.writeToFile_atomically_encoding_error(path, true, NSUTF8StringEncoding, errorPtr);
	const error = errorPtr.value();
	if (error) {
		Dialog.alert(errorPtr.value());
        Sound.alert('fail');
        return false;
	}
	return true;
}
