import * as Styles from './styles';

/**
 * Get all the symbols for a document.
 * @param {NSSymbolMaster} symbol
 * @return {Category, NSSymbolMaster}
 */
export function classify(symbols){
	const tokens = {
		palette:[]
	};
	for (let i=0; i < symbols.count(); i++) {
		const symbol = symbols[i];
		const name = String(symbol.name());
		_getColorPalette(symbol, name, tokens);
	}
	print(tokens);
	return tokens;
}

function _getColorPalette(symbol, name, tokens) {
    if (name.indexOf('color') >=0){
        const colorShape = symbol.layers().firstObject();
        const fill = colorShape.style().fills().firstObject();
        const nameArr = name.split('/').map(part => {
            return part.trim();
        });
        tokens.palette.push({
            hue: nameArr[1],
            name: nameArr[2] ? nameArr.splice(2).join('_') : nameArr[1],
            color: Styles.rgb2hex(Styles.SketchRGBAtoCSSRGBA(fill.color()))
        });
    }
}

export function getTextStyles(doc) {
    var text = doc.documentData().layerTextStyles().objects();
    var definedTextStyles = [];

    for (var i = 0; i < text.count(); i++) {
        var style = text.objectAtIndex(i);
        var attributes = style.style().textStyle().attributes();

        definedTextStyles.push({
            "attributes": attributes,
            "textStyle": style,
            "name": style.name()
        });
    }

    var styles = [];

    for (var i = 0; i < definedTextStyles.length; i++) {
        var definedTextStyle = definedTextStyles[i];
        var color = definedTextStyle.attributes.MSAttributedStringColorAttribute;

        if (color != null) {
            var red = color.red();
            var green = color.green();
            var blue = color.blue();
            var alpha = color.alpha();
        }

        const name = _getTextName(String(definedTextStyle.name));

        var family = String(definedTextStyle.attributes.NSFont.fontDescriptor().objectForKey(NSFontNameAttribute))
        var size = String(definedTextStyle.attributes.NSFont.fontDescriptor().objectForKey(NSFontSizeAttribute)) * 1

        var par = definedTextStyle.attributes.NSParagraphStyle;

        if (par != null) {
            var align = par.alignment();
            var lineHeight = par.maximumLineHeight();
            var paragraphSpacing = par.paragraphSpacing();
        }

        var spacing = String(definedTextStyle.attributes.NSKern) * 1;

        var text = definedTextStyle.attributes.MSAttributedStringTextTransformAttribute;

        if (text != null) {
            var textTransform = String(definedTextStyle.attributes.MSAttributedStringTextTransformAttribute) * 1;
        } else {
            var textTransform = 0;
        }

        var strike = String(definedTextStyle.attributes.NSStrikethrough) * 1
        var underline = String(definedTextStyle.attributes.NSUnderline) * 1

        styles.push({
            name: name,
            font: family,
            size: size,
            color: {
                red: red,
                green: green,
                blue: blue,
                alpha: alpha
            },
            alignment: align,
            spacing: spacing,
            lineHeight: lineHeight,
            paragraphSpacing: paragraphSpacing,
            textTransform: textTransform,
            strikethrough: strike,
            underline: underline
        });
    };
    return styles;
}

function _getTextName(name) {
    const names = name.split('/').map(n => n.trim());
    return names.join('.');
}
