import * as color from './token-generator/color.js';
import * as Dialog from './utils/os/dialog';

export function exportAction(){
  const doc = context.document;
  // OSUI.floatPanel();
  if (doc) {
    // const alert = utils.createDialog()[0];
    // alert.runModal();
    // const res = utils.saveFile(context.document);
    const res = color.generateFiles(doc);
    if (res) {
      Dialog.alert('Congratulation!', 'Export Design Token Succeed!');
    }
  }
}

