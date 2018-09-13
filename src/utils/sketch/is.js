// see all the headers of sketch in 
// https://github.com/abynim/Sketch-Headers/tree/master/Headers

/**
 *
 *
 * @export
 * @param {MSLayer} layer
 * @returns {boolean}
 */
export function isPage(layer) {
	return layer.class() == MSPage;
}

/**
 *
 *
 * @export
 * @param {MSLayer} layer
 * @returns {boolean}
 */
export function isArtboard(layer) {
	return layer.class() == MSArtboardGroup;
}

/**
 *
 *
 * @export
 * @param {MSLayer} layer
 * @returns {boolean}
 */
export function isSymbolMaster(layer) {
	return layer.class() == MSSymbolMaster;
}

/**
 *
 *
 * @export
 * @param {MSLayer} layer
 * @returns {boolean}
 */
export function isSymbolInstance(layer) {
	return layer.class() == MSSymbolInstance;
}

/**
 *
 *
 * @export
 * @param {MSLayer} layer
 * @returns {boolean}
 */
export function isShape(layer) {
	return layer.class() == MSShapeGroup;
}

/**
 *
 *
 * @export
 * @param {MSLayer} layer
 * @returns {boolean}
 */
export function isSymbol(layer) {
	return layer.class() == MSSymbolInstance || layer.class() == MSSymbolMaster;
}

/**
 *
 *
 * @export
 * @param {MSLayer} layer
 * @returns {boolean}
 */
export function isGroup(layer) {
	return layer.class() == MSLayerGroup;
}

/**
 *
 *
 * @export
 * @param {MSLayer} layer
 * @returns {boolean}
 */
export function isLayer(layer) {
	return !isGroup(layer) && !isText(layer) && !isSymbolInstance(layer);
}

/**
 *
 *
 * @export
 * @param {MSLayer} layer
 * @returns {boolean}
 */
export function isText(layer) {
	return layer.class() == MSTextLayer;
}

/**
 *
 *
 * @export
 * @param {MSLayer} layer
 * @returns {boolean}
 */
export function isIcon(layer){
    var tagsNames = layer.name().split("#").slice(1);
    var iconName = tagsNames.filter(tag => {
        var tagName = String(tag);
        return tagName.charAt(0) == 'i';
    });

    return iconName && iconName.length;
}
