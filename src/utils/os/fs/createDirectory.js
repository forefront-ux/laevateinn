import * as Sound from '../sound';
import * as Dialog from '../dialog';

/**
 *
 *
 * @export
 * @param {string} [path='']
 * @returns {boolean}
 */
export function createDirectory(path='') {
	const fileManager = NSFileManager.defaultManager();
	let errorPtr = MOPointer.alloc().init()
	fileManager.createDirectoryAtPath_withIntermediateDirectories_attributes_error(path, true, nil, errorPtr);
	const error = errorPtr.value();
	if (error) {
		Dialog.alert(errorPtr.value());
        Sound.alert('fail');
        return false;
    }
    return true;
}