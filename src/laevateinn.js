import * as color from './token-generator/color.js';
import * as Dialog from './utils/os/dialog';

export function exportAction(){
  const doc = context.document;
  if (doc) {
    const res = color.generateFiles(doc);
    if (res) {
      Dialog.alert('Congratulation!', 'Export Design Token Succeed!');
    }
  }
}

