/**
 * 
 * @param {String} SketchRGBAStr (r:xxxx, g:xxxx, b:xxxxx, a:xxx)
 * @return {String} rgba(number, number, number, number) 
 */
export function SketchRGBAtoCSSRGBA(SketchRGBAStr) {
    const valueArr = String(SketchRGBAStr).replace(/[\(\)]/g, '').split(' ').map(v => {
      const [type, value] = v.split(':');
      if (type !== 'a') {
        return Math.round(Number(value) * 255);
      }
      return Number(value);
    }).join(', ');
    return `rgba(${valueArr})`;
  }
  
  /**
   * 
   * @param {String} CSSRGBAStr
   */
  export function rgb2hex(CSSRGBAStr){
    const hex = String(CSSRGBAStr).replace(/[rgba\(\)]/g, '').split(', ').map((v,i) => {
      if(i!=3) return ("0" + parseInt(v, 10).toString(16)).slice(-2);
      else return '';
    }).join('').toUpperCase();
    return `#${hex}`;
   }
  
  /**
   * 
   * @param {MSStyle} style
   */
  export function getShadow(style) {
      var shadows = style.enabledShadows();
      var len = shadows.length;
  
      if (len == 0) {
          return null;
      } else {
          return shadows[len - 1];
      }
  }
  
  /**
   * 
   * @param {MSStyle} style
   */
  export function getInnerShadow(style) {
      var shadows = style.enabledInnerShadows();
      var len = shadows.length;
  
      if (len == 0) {
          return null;
      } else {
          return shadows[len - 1];
      }
  }