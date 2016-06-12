!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@angular/common"),require("@angular/core")):"function"==typeof define&&define.amd?define(["@angular/common","@angular/core"],t):"object"==typeof exports?exports.textMask=t(require("@angular/common"),require("@angular/core")):e.textMask=t(e.ng.common,e.ng.core)}(this,function(e,t){return function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={exports:{},id:o,loaded:!1};return e[o].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";var o=this&&this.__decorate||function(e,t,r,o){var n,a=arguments.length,i=3>a?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(i=(3>a?n(i):a>3?n(t,r,i):n(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i},n=this&&this.__metadata||function(e,t){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(e,t):void 0},a=r(5),i=r(7),l=r(6),u=function(){function e(e,t){this.model=t,this.textMaskConfig={mask:"",guide:!0,placeholderCharacter:void 0,validator:void 0},this.inputElement=e.nativeElement}return e.prototype.setComponentInitialState=function(e){var t=e.inputValue,r=e.mask,o=e.guide,n=e.placeholderChar,i=e.validator,l=a.getComponentInitialState({inputValue:t,validator:i,mask:r,guide:o,placeholderChar:n}),u=l.conformedInput,c=l.componentPlaceholder;this.conformedInput=u,this.componentPlaceholder=c,this.inputElement.placeholder=void 0!==this.inputElement.placeholder?this.inputElement.placeholder:this.componentPlaceholder,this.model.valueAccessor.writeValue(u),this.updateModel(u)},e.prototype.ngOnInit=function(e){var t=void 0===e?this.textMaskConfig:e,r=t.mask,o=t.validator,n=t.guide,a=t.placeholderCharacter;this.setComponentInitialState({inputValue:this.model.viewModel,validator:o,mask:r,guide:n,placeholderChar:a})},e.prototype.ngOnChanges=function(e){var t=e.textMaskConfig,r=t.currentValue,o=r.mask,n=r.guide,a=r.validator,i=r.placeholderCharacter,l=t.previousValue,u=(l.mask,l.guide,l.validator);l.placeholderCharacter,a!==u&&this.setComponentInitialState({inputValue:this.model.viewModel,mask:o,guide:n,validator:a,placeholderChar:i})},e.prototype.onInput=function(e){void 0===e&&(e="");var t=this,r=t.textMaskConfig,o=r.mask,n=r.guide,i=r.placeholderCharacter,l=t.componentPlaceholder,u=t.conformedInput,c=a.processComponentChanges({userInput:e,componentPlaceholder:l,previousConformedInput:u,mask:o,guide:n,placeholderChar:i,currentCaretPosition:this.inputElement.selectionStart}),s=c.adjustedCaretPosition,d=c.conformedInput;this.conformedInput=d,this.model.valueAccessor.writeValue(d),a.safeSetSelection(this.inputElement,s)},e.prototype.updateModel=function(e){this.model.viewToModelUpdate(e)},o([i.Input("textMask"),n("design:type",Object)],e.prototype,"textMaskConfig",void 0),e=o([i.Directive({selector:"input[textMask][ngModel]",host:{"(input)":"onInput($event.target.value)","(keyup)":"updateModel($event.target.value)"}}),n("design:paramtypes",[i.ElementRef,l.NgModel])],e)}();Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=u,t.Directive=u;var c=r(2);t.conformToMask=c["default"];var s=r(1);t.convertMaskToPlaceholder=s.convertMaskToPlaceholder},function(e,t,r){"use strict";function o(e){var t=e.mask,r=void 0===t?"":t,o=e.placeholderChar,n=void 0===o?p.placeholderCharacter:o;if(-1!==r.indexOf(n))throw console.log("Text Mask received placeholder character: ",n),console.log("Text Mask received mask: ",r),new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.");for(var a=!1,i="",l=0;l<r.length;l++){var u=r[l];"\\"!==u||a===!0?a!==!0?i+=-1!==p.maskingCharacters.indexOf(u)?n:u:(a=!1,i+=u):(a=!0,i+="")}return i}function n(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return e.replace(/\\./g," ")}function a(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return e.split("")}function i(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],t=arguments[1];switch(t){case p.maskingCharactersEnums.numeric:return u(e);case p.maskingCharactersEnums.uppercase:case p.maskingCharactersEnums.lowercase:case p.maskingCharactersEnums.alphabetic:return c(e);case p.maskingCharactersEnums.alphanumeric:return u(e)||c(e);case p.maskingCharactersEnums.any:return!0;default:return!1}}function l(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],t=arguments[1];switch(t){case p.maskingCharactersEnums.uppercase:return e.toUpperCase();case p.maskingCharactersEnums.lowercase:return e.toLowerCase();default:return e}}function u(e){return!isNaN(e)&&" "!==e}function c(e){return/^[a-zA-Z]+$/.test(e)}function s(e,t){for(var r=e.length>t.length?e.length:t.length,o=0;r>o;o++)if(e[o]!==t[o])return o;return null}function d(e){return"string"==typeof e||e instanceof String}function h(e){return e&&void 0===e.length&&!isNaN(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.convertMaskToPlaceholder=o,t.unescapeMask=n,t.tokenize=a,t.isAcceptableCharacter=i,t.potentiallyTransformCharacter=l,t.getIndexOfFirstChange=s,t.isString=d,t.isNumber=h;var p=r(3)},function(e,t,r){"use strict";function o(){for(var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],t=arguments.length<=1||void 0===arguments[1]?"":arguments[1],r=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],o=r.guide,l=void 0===o?!0:o,u=r.previousConformedInput,c=void 0===u?"":u,s=r.placeholderChar,d=void 0===s?i.placeholderCharacter:s,h=r.validator,p=void 0===h?n:h,f=(0,a.convertMaskToPlaceholder)({mask:t,placeholderChar:d}),v=l===!1&&void 0!==c,m=(0,a.getIndexOfFirstChange)(c,e),g=e.length-c.length,C=(0,a.tokenize)(e),k=v&&!(e.length<c.length),M=(0,a.unescapeMask)(t),y=0,b=0;b<f.length&&C.length>0;b++){var P=b>=m&&""!==c,x=(P?b+g:b)-y;f[b]===C[x]&&C[x]!==d&&(C.splice(x,1),y++)}var I="";e:for(var E=0;E<f.length;E++){var w=f[E];if(w===d){if(C.length>0)for(;C.length>0;){var T=C.shift();if(T===d&&v!==!0){I+=d;continue e}if((0,a.isAcceptableCharacter)(T,M[E])){I+=(0,a.potentiallyTransformCharacter)(T,M[E]);continue e}}v===!1&&(I+=f.substr(E,f.length));break}I+=w}if(v&&k===!1){for(var _=null,j=0;j<I.length;j++)f[j]===d&&(_=j);I=null!==_?I.substr(0,_+1):""}return{output:p(I)?I:c,meta:{input:e,mask:t,guide:l,placeholderChar:d,placeholder:f}}}function n(){return!0}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var a=r(1),i=r(3)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.maskingCharactersEnums={numeric:"1",alphabetic:"A",alphanumeric:"?",uppercase:"U",lowercase:"L",any:"*"},t.maskingCharactersWithDescription={1:"Any number",A:"Any letter","?":"Any number or letter",U:"Any letter (will be transformed to uppercase)",L:"Any letter (will be transformed to lowercase)","*":"Any character"},t.maskingCharacters=["1","A","?","U","L","*"],t.placeholderCharacter="_"},function(e,t,r){"use strict";function o(e){var t=e.previousConformedInput,r=void 0===t?"":t,o=e.conformToMaskResults,a=void 0===o?{}:o,i=e.currentCaretPosition,l=void 0===i?0:i;if(0===l)return 0;var u=a.output,c=void 0===u?"":u,s=a.meta,d=void 0===s?{}:s,h=d.input,p=void 0===h?"":h,f=d.placeholderChar,v=d.placeholder,m=(0,n.getIndexOfFirstChange)(r,p),g=m-l>1;if(g)return l;var C=!(p.length<r.length),k=Math.abs(r.length-p.length)>1,M=1===p.length,y=k&&!C&&!M,b=C&&(r===c||c===v),P=""===r&&c===v,x=k||M?c:v,I=v[m]!==f,E=l;if(y)return l;if(k||M)E=0;else if(b)E--;else if(C)for(var w=l;w<v.length;w++){var T=I&&!P;if(v[w]===f){E=w+(T?1:0);break}}if(C||M){for(var _=E;_<=x.length;_++)if(x[_]===f||_===x.length)return _>c.length?c.length:_}else for(var j=E;j>=0;j--)if(x[j-1]===f||0===j)return j}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var n=r(1)},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function n(e){var t=e.userInput,r=void 0===t?"":t,o=e.componentPlaceholder,n=void 0===o?"":o,a=e.previousConformedInput,i=void 0===a?"":a,l=e.mask,u=void 0===l?"":l,s=e.guide,h=void 0===s?"":s,p=e.validator,f=e.currentCaretPosition,v=void 0===f?0:f,m=e.placeholderChar,g=(0,d["default"])(r,u,{previousConformedInput:i,guide:h,placeholderChar:m,validator:p}),C=g.output,k=(0,c["default"])({previousConformedInput:i,conformToMaskResults:g,currentCaretPosition:v,placeholderChar:m}),M=C===n&&0===k,y=M?"":C;return{conformedInput:y,adjustedCaretPosition:k}}function a(e){var t=e.inputValue,r=e.mask,o=e.validator,n=e.guide,a=e.placeholderChar,i=l(t),u=i.length>0,c={validator:o,guide:n,previousConformedInput:"",placeholderChar:a},s=u?(0,d["default"])(i,r,c):{output:""},p=s.output;return{conformedInput:p,adjustedCaretPosition:0,componentPlaceholder:(0,h.convertMaskToPlaceholder)({mask:r,placeholderChar:a})}}function i(e,t){document.activeElement===e&&e.setSelectionRange(t,t,"none")}function l(e){if((0,h.isString)(e))return e;if((0,h.isNumber)(e))return String(e);if(void 0===e||null===e)return"";throw console.log("Text Mask received",e),new Error("The `value` provided to Text Mask needs to be a string or a number.")}Object.defineProperty(t,"__esModule",{value:!0}),t.convertMaskToPlaceholder=void 0,t.processComponentChanges=n,t.getComponentInitialState=a,t.safeSetSelection=i;var u=r(4),c=o(u),s=r(2),d=o(s),h=r(1);t.convertMaskToPlaceholder=h.convertMaskToPlaceholder},function(t,r){t.exports=e},function(e,r){e.exports=t}])});