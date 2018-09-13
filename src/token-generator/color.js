import paletteTemplate from '../token-template/palette';
import * as SD from '../utils/sketch/document';
import * as Symbols from '../utils/sketch/symbols';
import * as Dialog from '../utils/os/dialog';
import * as Fs from '../utils/os/fs';
import * as Panel from '../utils/os/panel';

export /**
 *
 * @param {*} colors [{hue: 'blue', name: 'blue10', color: '#fff'}]
 * @param {*} brands {main: 'blue', second: 'purple'}
 */
const generatePalette = (colors, brands) => {
    const files = [];
    // hue files
    const hues = [...new Set(colors.map(color => color.hue))];
    hues.forEach(hue => {
        const file = {};
        file.name = paletteTemplate.hues.fileName.replace('${fileName}', hue);
        const hueColors = colors.filter(color => color.hue === hue);
        const content = {};
        hueColors.forEach(hc => {
            content[`${hc.hue}_${hc.name}`] = hc.color;
        });
        file.content = content;
        files.push(file);
    });
    // aliases file
    const aliasesFile = {
        name: paletteTemplate.aliases.fileName
    };
    const aliasesContent = {
        imports: files.map(file => `./${file.name}`),
        aliases: {}
    };
    if (brands) {
        if (!brands.main) {
            Dialog.alert('Please set a main brand colors.');
            return false;
        } else if (brands.main) {
            const mainColors = colors.filter(color => color.hue === brands.main);
            mainColors.forEach(mainColor => {
                aliasesContent.aliases[`brand_main_${mainColor.name}`] = `{!${mainColor.hue}_${mainColor.name}}`;
            });
        } else if (brands.second) {
            const secondColors = colors.filter(color => color.hue === brands.second);
            secondColors.forEach(secondColor => {
                aliasesContent.aliases[`brand_main_${secondColor.name}`] = `{!${secondColor.hue}_${secondColor.name}}`;
            });
        }
    } else {
        Dialog.alert('Please set brand colors.');
        return false;
    }
    aliasesFile.content = aliasesContent;
    files.push(aliasesFile);
    // index file
    const indexFile = {
        name: paletteTemplate.index.fileName
    };
    const indexContent = {
        "imports": [
            "./aliases.json"
        ],
        "global": {
            "type": "color",
            "category": "palette"
        },
        "props": []
    };
    hues.forEach(hue => {
        const hueColors = colors.filter(color => color.hue === hue);
        hueColors.forEach(hc => {
            const colorName = `${hc.hue}_${hc.name}`;
            indexContent.props.push({
                "name": colorName,
                "value": `{!${colorName}}`
            });
        });
    });
    indexFile.content = indexContent;
    files.push(indexFile);
    return files;
}

export const generateFiles = () => {
    const savePanel = Panel.openDirectory('~/Documents/');
    if (savePanel.runModal()) {
        const dirPath = savePanel.URL().path();
        const palettePath = dirPath + '/palette';
        Fs.createDirectory(palettePath);
        const symbols = SD.getSymbols();
        const tokens = Symbols.classify(symbols);
        const files = generatePalette(tokens.palette, { main: 'blue', second: 'green'});
        files.forEach(file => {
            const filePath = palettePath + '/' + file.name;
            Fs.saveFile(filePath, file.content);
        })
		return true;
    }
    return false;
}