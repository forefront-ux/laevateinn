/**
 *
 *
 * @export
 * @returns {NSArray}
 */
export function getSymbols() {
    const doc = context.document;
    return doc.documentData().allSymbols();
}

/**
 *
 *
 * @export
 * @returns {String} currentDirectory
 */
export function getDirectory() {
    const doc = context.document;
    const path = doc.fileURL().path();
    const currentDirectory = path.split(doc.displayName())[0];
    return currentDirectory;
}