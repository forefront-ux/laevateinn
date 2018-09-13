import * as Sound from '../sound';
import * as Dialog from '../dialog';

/**
 *
 *
 * @export
 * @param {string} [path='']
 * @returns {boolean}
 */
export function readFile(path='') {
	var errorPtr = MOPointer.alloc().init()
	var str = NSString.stringWithContentsOfFile_encoding_error(path, NSUTF8StringEncoding, errorPtr);
	const error = errorPtr.value();
	if (error) {
		Dialog.alert(errorPtr.value());
        Sound.alert('fail');
        return false;
    } 	
    return str;
}
