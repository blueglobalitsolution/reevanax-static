// @__NO_SIDE_EFFECTS__
function makeMap(str) {
  const map = /* @__PURE__ */ Object.create(null);
  for (const key of str.split(",")) map[key] = 1;
  return (val) => val in map;
}
const EMPTY_OBJ = {};
const EMPTY_ARR = [];
const NOOP = () => {
};
const NO = () => false;
const isOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // uppercase letter
(key.charCodeAt(2) > 122 || key.charCodeAt(2) < 97);
const isModelListener = (key) => key.startsWith("onUpdate:");
const extend = Object.assign;
const remove = (arr, el) => {
  const i = arr.indexOf(el);
  if (i > -1) {
    arr.splice(i, 1);
  }
};
const hasOwnProperty$1 = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty$1.call(val, key);
const isArray = Array.isArray;
const isMap = (val) => toTypeString(val) === "[object Map]";
const isSet = (val) => toTypeString(val) === "[object Set]";
const isDate = (val) => toTypeString(val) === "[object Date]";
const isRegExp = (val) => toTypeString(val) === "[object RegExp]";
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isSymbol = (val) => typeof val === "symbol";
const isObject$1 = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return (isObject$1(val) || isFunction(val)) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString$1 = Object.prototype.toString;
const toTypeString = (value) => objectToString$1.call(value);
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
const isPlainObject$1 = (val) => toTypeString(val) === "[object Object]";
const isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const isReservedProp = /* @__PURE__ */ makeMap(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
);
const isBuiltInDirective = /* @__PURE__ */ makeMap(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
);
const cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return ((str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  });
};
const camelizeRE = /-\w/g;
const camelize = cacheStringFunction(
  (str) => {
    return str.replace(camelizeRE, (c) => c.slice(1).toUpperCase());
  }
);
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction(
  (str) => str.replace(hyphenateRE, "-$1").toLowerCase()
);
const capitalize = cacheStringFunction((str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
const toHandlerKey = cacheStringFunction(
  (str) => {
    const s = str ? `on${capitalize(str)}` : ``;
    return s;
  }
);
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const invokeArrayFns = (fns, ...arg) => {
  for (let i = 0; i < fns.length; i++) {
    fns[i](...arg);
  }
};
const def = (obj, key, value, writable = false) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    writable,
    value
  });
};
const looseToNumber = (val) => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
};
const toNumber = (val) => {
  const n = isString(val) ? Number(val) : NaN;
  return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};
const identRE = /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;
function genPropsAccessExp(name) {
  return identRE.test(name) ? `__props.${name}` : `__props[${JSON.stringify(name)}]`;
}
function genCacheKey(source, options) {
  return source + JSON.stringify(
    options,
    (_, val) => typeof val === "function" ? val.toString() : val
  );
}
const PatchFlags = {
  "TEXT": 1,
  "1": "TEXT",
  "CLASS": 2,
  "2": "CLASS",
  "STYLE": 4,
  "4": "STYLE",
  "PROPS": 8,
  "8": "PROPS",
  "FULL_PROPS": 16,
  "16": "FULL_PROPS",
  "NEED_HYDRATION": 32,
  "32": "NEED_HYDRATION",
  "STABLE_FRAGMENT": 64,
  "64": "STABLE_FRAGMENT",
  "KEYED_FRAGMENT": 128,
  "128": "KEYED_FRAGMENT",
  "UNKEYED_FRAGMENT": 256,
  "256": "UNKEYED_FRAGMENT",
  "NEED_PATCH": 512,
  "512": "NEED_PATCH",
  "DYNAMIC_SLOTS": 1024,
  "1024": "DYNAMIC_SLOTS",
  "DEV_ROOT_FRAGMENT": 2048,
  "2048": "DEV_ROOT_FRAGMENT",
  "CACHED": -1,
  "-1": "CACHED",
  "BAIL": -2,
  "-2": "BAIL"
};
const PatchFlagNames = {
  [1]: `TEXT`,
  [2]: `CLASS`,
  [4]: `STYLE`,
  [8]: `PROPS`,
  [16]: `FULL_PROPS`,
  [32]: `NEED_HYDRATION`,
  [64]: `STABLE_FRAGMENT`,
  [128]: `KEYED_FRAGMENT`,
  [256]: `UNKEYED_FRAGMENT`,
  [512]: `NEED_PATCH`,
  [1024]: `DYNAMIC_SLOTS`,
  [2048]: `DEV_ROOT_FRAGMENT`,
  [-1]: `CACHED`,
  [-2]: `BAIL`
};
const ShapeFlags = {
  "ELEMENT": 1,
  "1": "ELEMENT",
  "FUNCTIONAL_COMPONENT": 2,
  "2": "FUNCTIONAL_COMPONENT",
  "STATEFUL_COMPONENT": 4,
  "4": "STATEFUL_COMPONENT",
  "TEXT_CHILDREN": 8,
  "8": "TEXT_CHILDREN",
  "ARRAY_CHILDREN": 16,
  "16": "ARRAY_CHILDREN",
  "SLOTS_CHILDREN": 32,
  "32": "SLOTS_CHILDREN",
  "TELEPORT": 64,
  "64": "TELEPORT",
  "SUSPENSE": 128,
  "128": "SUSPENSE",
  "COMPONENT_SHOULD_KEEP_ALIVE": 256,
  "256": "COMPONENT_SHOULD_KEEP_ALIVE",
  "COMPONENT_KEPT_ALIVE": 512,
  "512": "COMPONENT_KEPT_ALIVE",
  "COMPONENT": 6,
  "6": "COMPONENT"
};
const SlotFlags = {
  "STABLE": 1,
  "1": "STABLE",
  "DYNAMIC": 2,
  "2": "DYNAMIC",
  "FORWARDED": 3,
  "3": "FORWARDED"
};
const slotFlagsText = {
  [1]: "STABLE",
  [2]: "DYNAMIC",
  [3]: "FORWARDED"
};
const GLOBALS_ALLOWED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol";
const isGloballyAllowed = /* @__PURE__ */ makeMap(GLOBALS_ALLOWED);
const isGloballyWhitelisted = isGloballyAllowed;
const range = 2;
function generateCodeFrame(source, start = 0, end = source.length) {
  start = Math.max(0, Math.min(start, source.length));
  end = Math.max(0, Math.min(end, source.length));
  if (start > end) return "";
  let lines = source.split(/(\r?\n)/);
  const newlineSequences = lines.filter((_, idx) => idx % 2 === 1);
  lines = lines.filter((_, idx) => idx % 2 === 0);
  let count = 0;
  const res = [];
  for (let i = 0; i < lines.length; i++) {
    count += lines[i].length + (newlineSequences[i] && newlineSequences[i].length || 0);
    if (count >= start) {
      for (let j2 = i - range; j2 <= i + range || end > count; j2++) {
        if (j2 < 0 || j2 >= lines.length) continue;
        const line = j2 + 1;
        res.push(
          `${line}${" ".repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j2]}`
        );
        const lineLength = lines[j2].length;
        const newLineSeqLength = newlineSequences[j2] && newlineSequences[j2].length || 0;
        if (j2 === i) {
          const pad = start - (count - (lineLength + newLineSeqLength));
          const length = Math.max(
            1,
            end > count ? lineLength - pad : end - start
          );
          res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
        } else if (j2 > i) {
          if (end > count) {
            const length = Math.max(Math.min(end - count, lineLength), 1);
            res.push(`   |  ` + "^".repeat(length));
          }
          count += lineLength + newLineSeqLength;
        }
      }
      break;
    }
  }
  return res.join("\n");
}
function normalizeStyle(value) {
  if (isArray(value)) {
    const res = {};
    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }
    return res;
  } else if (isString(value) || isObject$1(value)) {
    return value;
  }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:([^]+)/;
const styleCommentRE = /\/\*[^]*?\*\//g;
function parseStringStyle(cssText) {
  const ret = {};
  cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}
function stringifyStyle(styles) {
  if (!styles) return "";
  if (isString(styles)) return styles;
  let ret = "";
  for (const key in styles) {
    const value = styles[key];
    if (isString(value) || typeof value === "number") {
      const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
      ret += `${normalizedKey}:${value};`;
    }
  }
  return ret;
}
function normalizeClass(value) {
  let res = "";
  if (isString(value)) {
    res = value;
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass(value[i]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject$1(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + " ";
      }
    }
  }
  return res.trim();
}
function normalizeProps(props) {
  if (!props) return null;
  let { class: klass, style } = props;
  if (klass && !isString(klass)) {
    props.class = normalizeClass(klass);
  }
  if (style) {
    props.style = normalizeStyle(style);
  }
  return props;
}
const HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
const SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
const MATH_TAGS = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics";
const VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
const isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
const isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
const isMathMLTag = /* @__PURE__ */ makeMap(MATH_TAGS);
const isVoidTag = /* @__PURE__ */ makeMap(VOID_TAGS);
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
const isBooleanAttr = /* @__PURE__ */ makeMap(
  specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`
);
function includeBooleanAttr(value) {
  return !!value || value === "";
}
const unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
const attrValidationCache = {};
function isSSRSafeAttrName(name) {
  if (attrValidationCache.hasOwnProperty(name)) {
    return attrValidationCache[name];
  }
  const isUnsafe = unsafeAttrCharRE.test(name);
  if (isUnsafe) {
    console.error(`unsafe attribute name: ${name}`);
  }
  return attrValidationCache[name] = !isUnsafe;
}
const propsToAttrMap = {
  acceptCharset: "accept-charset",
  className: "class",
  htmlFor: "for",
  httpEquiv: "http-equiv"
};
const isKnownHtmlAttr = /* @__PURE__ */ makeMap(
  `accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap`
);
const isKnownSvgAttr = /* @__PURE__ */ makeMap(
  `xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`
);
const isKnownMathMLAttr = /* @__PURE__ */ makeMap(
  `accent,accentunder,actiontype,align,alignmentscope,altimg,altimg-height,altimg-valign,altimg-width,alttext,bevelled,close,columnsalign,columnlines,columnspan,denomalign,depth,dir,display,displaystyle,encoding,equalcolumns,equalrows,fence,fontstyle,fontweight,form,frame,framespacing,groupalign,height,href,id,indentalign,indentalignfirst,indentalignlast,indentshift,indentshiftfirst,indentshiftlast,indextype,justify,largetop,largeop,lquote,lspace,mathbackground,mathcolor,mathsize,mathvariant,maxsize,minlabelspacing,mode,other,overflow,position,rowalign,rowlines,rowspan,rquote,rspace,scriptlevel,scriptminsize,scriptsizemultiplier,selection,separator,separators,shift,side,src,stackalign,stretchy,subscriptshift,superscriptshift,symmetric,voffset,width,widths,xlink:href,xlink:show,xlink:type,xmlns`
);
function isRenderableAttrValue(value) {
  if (value == null) {
    return false;
  }
  const type = typeof value;
  return type === "string" || type === "number" || type === "boolean";
}
const escapeRE = /["'&<>]/;
function escapeHtml(string) {
  const str = "" + string;
  const match = escapeRE.exec(str);
  if (!match) {
    return str;
  }
  let html2 = "";
  let escaped;
  let index;
  let lastIndex = 0;
  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        escaped = "&quot;";
        break;
      case 38:
        escaped = "&amp;";
        break;
      case 39:
        escaped = "&#39;";
        break;
      case 60:
        escaped = "&lt;";
        break;
      case 62:
        escaped = "&gt;";
        break;
      default:
        continue;
    }
    if (lastIndex !== index) {
      html2 += str.slice(lastIndex, index);
    }
    lastIndex = index + 1;
    html2 += escaped;
  }
  return lastIndex !== index ? html2 + str.slice(lastIndex, index) : html2;
}
const commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
function escapeHtmlComment(src) {
  return src.replace(commentStripRE, "");
}
const cssVarNameEscapeSymbolsRE = /[ !"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g;
function getEscapedCssVarName(key, doubleEscape) {
  return key.replace(
    cssVarNameEscapeSymbolsRE,
    (s) => doubleEscape ? s === '"' ? '\\\\\\"' : `\\\\${s}` : `\\${s}`
  );
}
function looseCompareArrays(a, b) {
  if (a.length !== b.length) return false;
  let equal = true;
  for (let i = 0; equal && i < a.length; i++) {
    equal = looseEqual(a[i], b[i]);
  }
  return equal;
}
function looseEqual(a, b) {
  if (a === b) return true;
  let aValidType = isDate(a);
  let bValidType = isDate(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? a.getTime() === b.getTime() : false;
  }
  aValidType = isSymbol(a);
  bValidType = isSymbol(b);
  if (aValidType || bValidType) {
    return a === b;
  }
  aValidType = isArray(a);
  bValidType = isArray(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? looseCompareArrays(a, b) : false;
  }
  aValidType = isObject$1(a);
  bValidType = isObject$1(b);
  if (aValidType || bValidType) {
    if (!aValidType || !bValidType) {
      return false;
    }
    const aKeysCount = Object.keys(a).length;
    const bKeysCount = Object.keys(b).length;
    if (aKeysCount !== bKeysCount) {
      return false;
    }
    for (const key in a) {
      const aHasKey = a.hasOwnProperty(key);
      const bHasKey = b.hasOwnProperty(key);
      if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
        return false;
      }
    }
  }
  return String(a) === String(b);
}
function looseIndexOf(arr, val) {
  return arr.findIndex((item) => looseEqual(item, val));
}
const isRef$1 = (val) => {
  return !!(val && val["__v_isRef"] === true);
};
const toDisplayString = (val) => {
  return isString(val) ? val : val == null ? "" : isArray(val) || isObject$1(val) && (val.toString === objectToString$1 || !isFunction(val.toString)) ? isRef$1(val) ? toDisplayString(val.value) : JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val) => {
  if (isRef$1(val)) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce(
        (entries2, [key, val2], i) => {
          entries2[stringifySymbol(key, i) + " =>"] = val2;
          return entries2;
        },
        {}
      )
    };
  } else if (isSet(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()].map((v) => stringifySymbol(v))
    };
  } else if (isSymbol(val)) {
    return stringifySymbol(val);
  } else if (isObject$1(val) && !isArray(val) && !isPlainObject$1(val)) {
    return String(val);
  }
  return val;
};
const stringifySymbol = (v, i = "") => {
  var _a;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    isSymbol(v) ? `Symbol(${(_a = v.description) != null ? _a : i})` : v
  );
};
function normalizeCssVarValue(value) {
  if (value == null) {
    return "initial";
  }
  if (typeof value === "string") {
    return value === "" ? " " : value;
  }
  return String(value);
}
const shared_esmBundler = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  EMPTY_ARR,
  EMPTY_OBJ,
  NO,
  NOOP,
  PatchFlagNames,
  PatchFlags,
  ShapeFlags,
  SlotFlags,
  camelize,
  capitalize,
  cssVarNameEscapeSymbolsRE,
  def,
  escapeHtml,
  escapeHtmlComment,
  extend,
  genCacheKey,
  genPropsAccessExp,
  generateCodeFrame,
  getEscapedCssVarName,
  getGlobalThis,
  hasChanged,
  hasOwn,
  hyphenate,
  includeBooleanAttr,
  invokeArrayFns,
  isArray,
  isBooleanAttr,
  isBuiltInDirective,
  isDate,
  isFunction,
  isGloballyAllowed,
  isGloballyWhitelisted,
  isHTMLTag,
  isIntegerKey,
  isKnownHtmlAttr,
  isKnownMathMLAttr,
  isKnownSvgAttr,
  isMap,
  isMathMLTag,
  isModelListener,
  isObject: isObject$1,
  isOn,
  isPlainObject: isPlainObject$1,
  isPromise,
  isRegExp,
  isRenderableAttrValue,
  isReservedProp,
  isSSRSafeAttrName,
  isSVGTag,
  isSet,
  isSpecialBooleanAttr,
  isString,
  isSymbol,
  isVoidTag,
  looseEqual,
  looseIndexOf,
  looseToNumber,
  makeMap,
  normalizeClass,
  normalizeCssVarValue,
  normalizeProps,
  normalizeStyle,
  objectToString: objectToString$1,
  parseStringStyle,
  propsToAttrMap,
  remove,
  slotFlagsText,
  stringifyStyle,
  toDisplayString,
  toHandlerKey,
  toNumber,
  toRawType,
  toTypeString
}, Symbol.toStringTag, { value: "Module" }));
let activeEffectScope;
class EffectScope {
  // TODO isolatedDeclarations "__v_skip"
  constructor(detached = false) {
    this.detached = detached;
    this._active = true;
    this._on = 0;
    this.effects = [];
    this.cleanups = [];
    this._isPaused = false;
    this.__v_skip = true;
    this.parent = activeEffectScope;
    if (!detached && activeEffectScope) {
      this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(
        this
      ) - 1;
    }
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = true;
      let i, l;
      if (this.scopes) {
        for (i = 0, l = this.scopes.length; i < l; i++) {
          this.scopes[i].pause();
        }
      }
      for (i = 0, l = this.effects.length; i < l; i++) {
        this.effects[i].pause();
      }
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active) {
      if (this._isPaused) {
        this._isPaused = false;
        let i, l;
        if (this.scopes) {
          for (i = 0, l = this.scopes.length; i < l; i++) {
            this.scopes[i].resume();
          }
        }
        for (i = 0, l = this.effects.length; i < l; i++) {
          this.effects[i].resume();
        }
      }
    }
  }
  run(fn) {
    if (this._active) {
      const currentEffectScope = activeEffectScope;
      try {
        activeEffectScope = this;
        return fn();
      } finally {
        activeEffectScope = currentEffectScope;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    if (++this._on === 1) {
      this.prevScope = activeEffectScope;
      activeEffectScope = this;
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      activeEffectScope = this.prevScope;
      this.prevScope = void 0;
    }
  }
  stop(fromParent) {
    if (this._active) {
      this._active = false;
      let i, l;
      for (i = 0, l = this.effects.length; i < l; i++) {
        this.effects[i].stop();
      }
      this.effects.length = 0;
      for (i = 0, l = this.cleanups.length; i < l; i++) {
        this.cleanups[i]();
      }
      this.cleanups.length = 0;
      if (this.scopes) {
        for (i = 0, l = this.scopes.length; i < l; i++) {
          this.scopes[i].stop(true);
        }
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !fromParent) {
        const last = this.parent.scopes.pop();
        if (last && last !== this) {
          this.parent.scopes[this.index] = last;
          last.index = this.index;
        }
      }
      this.parent = void 0;
    }
  }
}
function effectScope(detached) {
  return new EffectScope(detached);
}
function getCurrentScope() {
  return activeEffectScope;
}
function onScopeDispose(fn, failSilently = false) {
  if (activeEffectScope) {
    activeEffectScope.cleanups.push(fn);
  }
}
let activeSub;
const pausedQueueEffects = /* @__PURE__ */ new WeakSet();
class ReactiveEffect {
  constructor(fn) {
    this.fn = fn;
    this.deps = void 0;
    this.depsTail = void 0;
    this.flags = 1 | 4;
    this.next = void 0;
    this.cleanup = void 0;
    this.scheduler = void 0;
    if (activeEffectScope && activeEffectScope.active) {
      activeEffectScope.effects.push(this);
    }
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    if (this.flags & 64) {
      this.flags &= -65;
      if (pausedQueueEffects.has(this)) {
        pausedQueueEffects.delete(this);
        this.trigger();
      }
    }
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags & 2 && !(this.flags & 32)) {
      return;
    }
    if (!(this.flags & 8)) {
      batch(this);
    }
  }
  run() {
    if (!(this.flags & 1)) {
      return this.fn();
    }
    this.flags |= 2;
    cleanupEffect(this);
    prepareDeps(this);
    const prevEffect = activeSub;
    const prevShouldTrack = shouldTrack;
    activeSub = this;
    shouldTrack = true;
    try {
      return this.fn();
    } finally {
      cleanupDeps(this);
      activeSub = prevEffect;
      shouldTrack = prevShouldTrack;
      this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let link = this.deps; link; link = link.nextDep) {
        removeSub(link);
      }
      this.deps = this.depsTail = void 0;
      cleanupEffect(this);
      this.onStop && this.onStop();
      this.flags &= -2;
    }
  }
  trigger() {
    if (this.flags & 64) {
      pausedQueueEffects.add(this);
    } else if (this.scheduler) {
      this.scheduler();
    } else {
      this.runIfDirty();
    }
  }
  /**
   * @internal
   */
  runIfDirty() {
    if (isDirty(this)) {
      this.run();
    }
  }
  get dirty() {
    return isDirty(this);
  }
}
let batchDepth = 0;
let batchedSub;
let batchedComputed;
function batch(sub, isComputed2 = false) {
  sub.flags |= 8;
  if (isComputed2) {
    sub.next = batchedComputed;
    batchedComputed = sub;
    return;
  }
  sub.next = batchedSub;
  batchedSub = sub;
}
function startBatch() {
  batchDepth++;
}
function endBatch() {
  if (--batchDepth > 0) {
    return;
  }
  if (batchedComputed) {
    let e = batchedComputed;
    batchedComputed = void 0;
    while (e) {
      const next = e.next;
      e.next = void 0;
      e.flags &= -9;
      e = next;
    }
  }
  let error;
  while (batchedSub) {
    let e = batchedSub;
    batchedSub = void 0;
    while (e) {
      const next = e.next;
      e.next = void 0;
      e.flags &= -9;
      if (e.flags & 1) {
        try {
          ;
          e.trigger();
        } catch (err) {
          if (!error) error = err;
        }
      }
      e = next;
    }
  }
  if (error) throw error;
}
function prepareDeps(sub) {
  for (let link = sub.deps; link; link = link.nextDep) {
    link.version = -1;
    link.prevActiveLink = link.dep.activeLink;
    link.dep.activeLink = link;
  }
}
function cleanupDeps(sub) {
  let head;
  let tail = sub.depsTail;
  let link = tail;
  while (link) {
    const prev = link.prevDep;
    if (link.version === -1) {
      if (link === tail) tail = prev;
      removeSub(link);
      removeDep(link);
    } else {
      head = link;
    }
    link.dep.activeLink = link.prevActiveLink;
    link.prevActiveLink = void 0;
    link = prev;
  }
  sub.deps = head;
  sub.depsTail = tail;
}
function isDirty(sub) {
  for (let link = sub.deps; link; link = link.nextDep) {
    if (link.dep.version !== link.version || link.dep.computed && (refreshComputed(link.dep.computed) || link.dep.version !== link.version)) {
      return true;
    }
  }
  if (sub._dirty) {
    return true;
  }
  return false;
}
function refreshComputed(computed2) {
  if (computed2.flags & 4 && !(computed2.flags & 16)) {
    return;
  }
  computed2.flags &= -17;
  if (computed2.globalVersion === globalVersion) {
    return;
  }
  computed2.globalVersion = globalVersion;
  if (!computed2.isSSR && computed2.flags & 128 && (!computed2.deps && !computed2._dirty || !isDirty(computed2))) {
    return;
  }
  computed2.flags |= 2;
  const dep = computed2.dep;
  const prevSub = activeSub;
  const prevShouldTrack = shouldTrack;
  activeSub = computed2;
  shouldTrack = true;
  try {
    prepareDeps(computed2);
    const value = computed2.fn(computed2._value);
    if (dep.version === 0 || hasChanged(value, computed2._value)) {
      computed2.flags |= 128;
      computed2._value = value;
      dep.version++;
    }
  } catch (err) {
    dep.version++;
    throw err;
  } finally {
    activeSub = prevSub;
    shouldTrack = prevShouldTrack;
    cleanupDeps(computed2);
    computed2.flags &= -3;
  }
}
function removeSub(link, soft = false) {
  const { dep, prevSub, nextSub } = link;
  if (prevSub) {
    prevSub.nextSub = nextSub;
    link.prevSub = void 0;
  }
  if (nextSub) {
    nextSub.prevSub = prevSub;
    link.nextSub = void 0;
  }
  if (dep.subs === link) {
    dep.subs = prevSub;
    if (!prevSub && dep.computed) {
      dep.computed.flags &= -5;
      for (let l = dep.computed.deps; l; l = l.nextDep) {
        removeSub(l, true);
      }
    }
  }
  if (!soft && !--dep.sc && dep.map) {
    dep.map.delete(dep.key);
  }
}
function removeDep(link) {
  const { prevDep, nextDep } = link;
  if (prevDep) {
    prevDep.nextDep = nextDep;
    link.prevDep = void 0;
  }
  if (nextDep) {
    nextDep.prevDep = prevDep;
    link.nextDep = void 0;
  }
}
function effect(fn, options) {
  if (fn.effect instanceof ReactiveEffect) {
    fn = fn.effect.fn;
  }
  const e = new ReactiveEffect(fn);
  if (options) {
    extend(e, options);
  }
  try {
    e.run();
  } catch (err) {
    e.stop();
    throw err;
  }
  const runner = e.run.bind(e);
  runner.effect = e;
  return runner;
}
function stop(runner) {
  runner.effect.stop();
}
let shouldTrack = true;
const trackStack = [];
function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}
function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === void 0 ? true : last;
}
function cleanupEffect(e) {
  const { cleanup } = e;
  e.cleanup = void 0;
  if (cleanup) {
    const prevSub = activeSub;
    activeSub = void 0;
    try {
      cleanup();
    } finally {
      activeSub = prevSub;
    }
  }
}
let globalVersion = 0;
class Link {
  constructor(sub, dep) {
    this.sub = sub;
    this.dep = dep;
    this.version = dep.version;
    this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Dep {
  // TODO isolatedDeclarations "__v_skip"
  constructor(computed2) {
    this.computed = computed2;
    this.version = 0;
    this.activeLink = void 0;
    this.subs = void 0;
    this.map = void 0;
    this.key = void 0;
    this.sc = 0;
    this.__v_skip = true;
  }
  track(debugInfo) {
    if (!activeSub || !shouldTrack || activeSub === this.computed) {
      return;
    }
    let link = this.activeLink;
    if (link === void 0 || link.sub !== activeSub) {
      link = this.activeLink = new Link(activeSub, this);
      if (!activeSub.deps) {
        activeSub.deps = activeSub.depsTail = link;
      } else {
        link.prevDep = activeSub.depsTail;
        activeSub.depsTail.nextDep = link;
        activeSub.depsTail = link;
      }
      addSub(link);
    } else if (link.version === -1) {
      link.version = this.version;
      if (link.nextDep) {
        const next = link.nextDep;
        next.prevDep = link.prevDep;
        if (link.prevDep) {
          link.prevDep.nextDep = next;
        }
        link.prevDep = activeSub.depsTail;
        link.nextDep = void 0;
        activeSub.depsTail.nextDep = link;
        activeSub.depsTail = link;
        if (activeSub.deps === link) {
          activeSub.deps = next;
        }
      }
    }
    return link;
  }
  trigger(debugInfo) {
    this.version++;
    globalVersion++;
    this.notify(debugInfo);
  }
  notify(debugInfo) {
    startBatch();
    try {
      if (false) ;
      for (let link = this.subs; link; link = link.prevSub) {
        if (link.sub.notify()) {
          ;
          link.sub.dep.notify();
        }
      }
    } finally {
      endBatch();
    }
  }
}
function addSub(link) {
  link.dep.sc++;
  if (link.sub.flags & 4) {
    const computed2 = link.dep.computed;
    if (computed2 && !link.dep.subs) {
      computed2.flags |= 4 | 16;
      for (let l = computed2.deps; l; l = l.nextDep) {
        addSub(l);
      }
    }
    const currentTail = link.dep.subs;
    if (currentTail !== link) {
      link.prevSub = currentTail;
      if (currentTail) currentTail.nextSub = link;
    }
    link.dep.subs = link;
  }
}
const targetMap = /* @__PURE__ */ new WeakMap();
const ITERATE_KEY = /* @__PURE__ */ Symbol(
  ""
);
const MAP_KEY_ITERATE_KEY = /* @__PURE__ */ Symbol(
  ""
);
const ARRAY_ITERATE_KEY = /* @__PURE__ */ Symbol(
  ""
);
function track(target, type, key) {
  if (shouldTrack && activeSub) {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = new Dep());
      dep.map = depsMap;
      dep.key = key;
    }
    {
      dep.track();
    }
  }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    globalVersion++;
    return;
  }
  const run = (dep) => {
    if (dep) {
      {
        dep.trigger();
      }
    }
  };
  startBatch();
  if (type === "clear") {
    depsMap.forEach(run);
  } else {
    const targetIsArray = isArray(target);
    const isArrayIndex = targetIsArray && isIntegerKey(key);
    if (targetIsArray && key === "length") {
      const newLength = Number(newValue);
      depsMap.forEach((dep, key2) => {
        if (key2 === "length" || key2 === ARRAY_ITERATE_KEY || !isSymbol(key2) && key2 >= newLength) {
          run(dep);
        }
      });
    } else {
      if (key !== void 0 || depsMap.has(void 0)) {
        run(depsMap.get(key));
      }
      if (isArrayIndex) {
        run(depsMap.get(ARRAY_ITERATE_KEY));
      }
      switch (type) {
        case "add":
          if (!targetIsArray) {
            run(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              run(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          } else if (isArrayIndex) {
            run(depsMap.get("length"));
          }
          break;
        case "delete":
          if (!targetIsArray) {
            run(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              run(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          }
          break;
        case "set":
          if (isMap(target)) {
            run(depsMap.get(ITERATE_KEY));
          }
          break;
      }
    }
  }
  endBatch();
}
function getDepFromReactive(object, key) {
  const depMap = targetMap.get(object);
  return depMap && depMap.get(key);
}
function reactiveReadArray(array) {
  const raw = /* @__PURE__ */ toRaw(array);
  if (raw === array) return raw;
  track(raw, "iterate", ARRAY_ITERATE_KEY);
  return /* @__PURE__ */ isShallow(array) ? raw : raw.map(toReactive);
}
function shallowReadArray(arr) {
  track(arr = /* @__PURE__ */ toRaw(arr), "iterate", ARRAY_ITERATE_KEY);
  return arr;
}
function toWrapped(target, item) {
  if (/* @__PURE__ */ isReadonly(target)) {
    return /* @__PURE__ */ isReactive(target) ? toReadonly(toReactive(item)) : toReadonly(item);
  }
  return toReactive(item);
}
const arrayInstrumentations = {
  __proto__: null,
  [Symbol.iterator]() {
    return iterator(this, Symbol.iterator, (item) => toWrapped(this, item));
  },
  concat(...args) {
    return reactiveReadArray(this).concat(
      ...args.map((x) => isArray(x) ? reactiveReadArray(x) : x)
    );
  },
  entries() {
    return iterator(this, "entries", (value) => {
      value[1] = toWrapped(this, value[1]);
      return value;
    });
  },
  every(fn, thisArg) {
    return apply$1(this, "every", fn, thisArg, void 0, arguments);
  },
  filter(fn, thisArg) {
    return apply$1(
      this,
      "filter",
      fn,
      thisArg,
      (v) => v.map((item) => toWrapped(this, item)),
      arguments
    );
  },
  find(fn, thisArg) {
    return apply$1(
      this,
      "find",
      fn,
      thisArg,
      (item) => toWrapped(this, item),
      arguments
    );
  },
  findIndex(fn, thisArg) {
    return apply$1(this, "findIndex", fn, thisArg, void 0, arguments);
  },
  findLast(fn, thisArg) {
    return apply$1(
      this,
      "findLast",
      fn,
      thisArg,
      (item) => toWrapped(this, item),
      arguments
    );
  },
  findLastIndex(fn, thisArg) {
    return apply$1(this, "findLastIndex", fn, thisArg, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(fn, thisArg) {
    return apply$1(this, "forEach", fn, thisArg, void 0, arguments);
  },
  includes(...args) {
    return searchProxy(this, "includes", args);
  },
  indexOf(...args) {
    return searchProxy(this, "indexOf", args);
  },
  join(separator) {
    return reactiveReadArray(this).join(separator);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...args) {
    return searchProxy(this, "lastIndexOf", args);
  },
  map(fn, thisArg) {
    return apply$1(this, "map", fn, thisArg, void 0, arguments);
  },
  pop() {
    return noTracking(this, "pop");
  },
  push(...args) {
    return noTracking(this, "push", args);
  },
  reduce(fn, ...args) {
    return reduce(this, "reduce", fn, args);
  },
  reduceRight(fn, ...args) {
    return reduce(this, "reduceRight", fn, args);
  },
  shift() {
    return noTracking(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(fn, thisArg) {
    return apply$1(this, "some", fn, thisArg, void 0, arguments);
  },
  splice(...args) {
    return noTracking(this, "splice", args);
  },
  toReversed() {
    return reactiveReadArray(this).toReversed();
  },
  toSorted(comparer) {
    return reactiveReadArray(this).toSorted(comparer);
  },
  toSpliced(...args) {
    return reactiveReadArray(this).toSpliced(...args);
  },
  unshift(...args) {
    return noTracking(this, "unshift", args);
  },
  values() {
    return iterator(this, "values", (item) => toWrapped(this, item));
  }
};
function iterator(self2, method, wrapValue) {
  const arr = shallowReadArray(self2);
  const iter = arr[method]();
  if (arr !== self2 && !/* @__PURE__ */ isShallow(self2)) {
    iter._next = iter.next;
    iter.next = () => {
      const result = iter._next();
      if (!result.done) {
        result.value = wrapValue(result.value);
      }
      return result;
    };
  }
  return iter;
}
const arrayProto = Array.prototype;
function apply$1(self2, method, fn, thisArg, wrappedRetFn, args) {
  const arr = shallowReadArray(self2);
  const needsWrap = arr !== self2 && !/* @__PURE__ */ isShallow(self2);
  const methodFn = arr[method];
  if (methodFn !== arrayProto[method]) {
    const result2 = methodFn.apply(self2, args);
    return needsWrap ? toReactive(result2) : result2;
  }
  let wrappedFn = fn;
  if (arr !== self2) {
    if (needsWrap) {
      wrappedFn = function(item, index) {
        return fn.call(this, toWrapped(self2, item), index, self2);
      };
    } else if (fn.length > 2) {
      wrappedFn = function(item, index) {
        return fn.call(this, item, index, self2);
      };
    }
  }
  const result = methodFn.call(arr, wrappedFn, thisArg);
  return needsWrap && wrappedRetFn ? wrappedRetFn(result) : result;
}
function reduce(self2, method, fn, args) {
  const arr = shallowReadArray(self2);
  let wrappedFn = fn;
  if (arr !== self2) {
    if (!/* @__PURE__ */ isShallow(self2)) {
      wrappedFn = function(acc, item, index) {
        return fn.call(this, acc, toWrapped(self2, item), index, self2);
      };
    } else if (fn.length > 3) {
      wrappedFn = function(acc, item, index) {
        return fn.call(this, acc, item, index, self2);
      };
    }
  }
  return arr[method](wrappedFn, ...args);
}
function searchProxy(self2, method, args) {
  const arr = /* @__PURE__ */ toRaw(self2);
  track(arr, "iterate", ARRAY_ITERATE_KEY);
  const res = arr[method](...args);
  if ((res === -1 || res === false) && /* @__PURE__ */ isProxy(args[0])) {
    args[0] = /* @__PURE__ */ toRaw(args[0]);
    return arr[method](...args);
  }
  return res;
}
function noTracking(self2, method, args = []) {
  pauseTracking();
  startBatch();
  const res = (/* @__PURE__ */ toRaw(self2))[method].apply(self2, args);
  endBatch();
  resetTracking();
  return res;
}
const isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(isSymbol)
);
function hasOwnProperty(key) {
  if (!isSymbol(key)) key = String(key);
  const obj = /* @__PURE__ */ toRaw(this);
  track(obj, "has", key);
  return obj.hasOwnProperty(key);
}
class BaseReactiveHandler {
  constructor(_isReadonly = false, _isShallow = false) {
    this._isReadonly = _isReadonly;
    this._isShallow = _isShallow;
  }
  get(target, key, receiver) {
    if (key === "__v_skip") return target["__v_skip"];
    const isReadonly2 = this._isReadonly, isShallow2 = this._isShallow;
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_isShallow") {
      return isShallow2;
    } else if (key === "__v_raw") {
      if (receiver === (isReadonly2 ? isShallow2 ? shallowReadonlyMap : readonlyMap : isShallow2 ? shallowReactiveMap : reactiveMap).get(target) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(target) === Object.getPrototypeOf(receiver)) {
        return target;
      }
      return;
    }
    const targetIsArray = isArray(target);
    if (!isReadonly2) {
      let fn;
      if (targetIsArray && (fn = arrayInstrumentations[key])) {
        return fn;
      }
      if (key === "hasOwnProperty") {
        return hasOwnProperty;
      }
    }
    const res = Reflect.get(
      target,
      key,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ isRef(target) ? target : receiver
    );
    if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }
    if (!isReadonly2) {
      track(target, "get", key);
    }
    if (isShallow2) {
      return res;
    }
    if (/* @__PURE__ */ isRef(res)) {
      const value = targetIsArray && isIntegerKey(key) ? res : res.value;
      return isReadonly2 && isObject$1(value) ? /* @__PURE__ */ readonly(value) : value;
    }
    if (isObject$1(res)) {
      return isReadonly2 ? /* @__PURE__ */ readonly(res) : /* @__PURE__ */ reactive(res);
    }
    return res;
  }
}
class MutableReactiveHandler extends BaseReactiveHandler {
  constructor(isShallow2 = false) {
    super(false, isShallow2);
  }
  set(target, key, value, receiver) {
    let oldValue = target[key];
    const isArrayWithIntegerKey = isArray(target) && isIntegerKey(key);
    if (!this._isShallow) {
      const isOldValueReadonly = /* @__PURE__ */ isReadonly(oldValue);
      if (!/* @__PURE__ */ isShallow(value) && !/* @__PURE__ */ isReadonly(value)) {
        oldValue = /* @__PURE__ */ toRaw(oldValue);
        value = /* @__PURE__ */ toRaw(value);
      }
      if (!isArrayWithIntegerKey && /* @__PURE__ */ isRef(oldValue) && !/* @__PURE__ */ isRef(value)) {
        if (isOldValueReadonly) {
          return true;
        } else {
          oldValue.value = value;
          return true;
        }
      }
    }
    const hadKey = isArrayWithIntegerKey ? Number(key) < target.length : hasOwn(target, key);
    const result = Reflect.set(
      target,
      key,
      value,
      /* @__PURE__ */ isRef(target) ? target : receiver
    );
    if (target === /* @__PURE__ */ toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add", key, value);
      } else if (hasChanged(value, oldValue)) {
        trigger(target, "set", key, value);
      }
    }
    return result;
  }
  deleteProperty(target, key) {
    const hadKey = hasOwn(target, key);
    target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) {
      trigger(target, "delete", key, void 0);
    }
    return result;
  }
  has(target, key) {
    const result = Reflect.has(target, key);
    if (!isSymbol(key) || !builtInSymbols.has(key)) {
      track(target, "has", key);
    }
    return result;
  }
  ownKeys(target) {
    track(
      target,
      "iterate",
      isArray(target) ? "length" : ITERATE_KEY
    );
    return Reflect.ownKeys(target);
  }
}
class ReadonlyReactiveHandler extends BaseReactiveHandler {
  constructor(isShallow2 = false) {
    super(true, isShallow2);
  }
  set(target, key) {
    return true;
  }
  deleteProperty(target, key) {
    return true;
  }
}
const mutableHandlers = /* @__PURE__ */ new MutableReactiveHandler();
const readonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler();
const shallowReactiveHandlers = /* @__PURE__ */ new MutableReactiveHandler(true);
const shallowReadonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler(true);
const toShallow = (value) => value;
const getProto = (v) => Reflect.getPrototypeOf(v);
function createIterableMethod(method, isReadonly2, isShallow2) {
  return function(...args) {
    const target = this["__v_raw"];
    const rawTarget = /* @__PURE__ */ toRaw(target);
    const targetIsMap = isMap(rawTarget);
    const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
    const isKeyOnly = method === "keys" && targetIsMap;
    const innerIterator = target[method](...args);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(
      rawTarget,
      "iterate",
      isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY
    );
    return extend(
      // inheriting all iterator properties
      Object.create(innerIterator),
      {
        // iterator protocol
        next() {
          const { value, done } = innerIterator.next();
          return done ? { value, done } : {
            value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
            done
          };
        }
      }
    );
  };
}
function createReadonlyMethod(type) {
  return function(...args) {
    return type === "delete" ? false : type === "clear" ? void 0 : this;
  };
}
function createInstrumentations(readonly2, shallow) {
  const instrumentations = {
    get(key) {
      const target = this["__v_raw"];
      const rawTarget = /* @__PURE__ */ toRaw(target);
      const rawKey = /* @__PURE__ */ toRaw(key);
      if (!readonly2) {
        if (hasChanged(key, rawKey)) {
          track(rawTarget, "get", key);
        }
        track(rawTarget, "get", rawKey);
      }
      const { has } = getProto(rawTarget);
      const wrap = shallow ? toShallow : readonly2 ? toReadonly : toReactive;
      if (has.call(rawTarget, key)) {
        return wrap(target.get(key));
      } else if (has.call(rawTarget, rawKey)) {
        return wrap(target.get(rawKey));
      } else if (target !== rawTarget) {
        target.get(key);
      }
    },
    get size() {
      const target = this["__v_raw"];
      !readonly2 && track(/* @__PURE__ */ toRaw(target), "iterate", ITERATE_KEY);
      return target.size;
    },
    has(key) {
      const target = this["__v_raw"];
      const rawTarget = /* @__PURE__ */ toRaw(target);
      const rawKey = /* @__PURE__ */ toRaw(key);
      if (!readonly2) {
        if (hasChanged(key, rawKey)) {
          track(rawTarget, "has", key);
        }
        track(rawTarget, "has", rawKey);
      }
      return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
    },
    forEach(callback, thisArg) {
      const observed = this;
      const target = observed["__v_raw"];
      const rawTarget = /* @__PURE__ */ toRaw(target);
      const wrap = shallow ? toShallow : readonly2 ? toReadonly : toReactive;
      !readonly2 && track(rawTarget, "iterate", ITERATE_KEY);
      return target.forEach((value, key) => {
        return callback.call(thisArg, wrap(value), wrap(key), observed);
      });
    }
  };
  extend(
    instrumentations,
    readonly2 ? {
      add: createReadonlyMethod("add"),
      set: createReadonlyMethod("set"),
      delete: createReadonlyMethod("delete"),
      clear: createReadonlyMethod("clear")
    } : {
      add(value) {
        if (!shallow && !/* @__PURE__ */ isShallow(value) && !/* @__PURE__ */ isReadonly(value)) {
          value = /* @__PURE__ */ toRaw(value);
        }
        const target = /* @__PURE__ */ toRaw(this);
        const proto = getProto(target);
        const hadKey = proto.has.call(target, value);
        if (!hadKey) {
          target.add(value);
          trigger(target, "add", value, value);
        }
        return this;
      },
      set(key, value) {
        if (!shallow && !/* @__PURE__ */ isShallow(value) && !/* @__PURE__ */ isReadonly(value)) {
          value = /* @__PURE__ */ toRaw(value);
        }
        const target = /* @__PURE__ */ toRaw(this);
        const { has, get } = getProto(target);
        let hadKey = has.call(target, key);
        if (!hadKey) {
          key = /* @__PURE__ */ toRaw(key);
          hadKey = has.call(target, key);
        }
        const oldValue = get.call(target, key);
        target.set(key, value);
        if (!hadKey) {
          trigger(target, "add", key, value);
        } else if (hasChanged(value, oldValue)) {
          trigger(target, "set", key, value);
        }
        return this;
      },
      delete(key) {
        const target = /* @__PURE__ */ toRaw(this);
        const { has, get } = getProto(target);
        let hadKey = has.call(target, key);
        if (!hadKey) {
          key = /* @__PURE__ */ toRaw(key);
          hadKey = has.call(target, key);
        }
        get ? get.call(target, key) : void 0;
        const result = target.delete(key);
        if (hadKey) {
          trigger(target, "delete", key, void 0);
        }
        return result;
      },
      clear() {
        const target = /* @__PURE__ */ toRaw(this);
        const hadItems = target.size !== 0;
        const result = target.clear();
        if (hadItems) {
          trigger(
            target,
            "clear",
            void 0,
            void 0
          );
        }
        return result;
      }
    }
  );
  const iteratorMethods = [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ];
  iteratorMethods.forEach((method) => {
    instrumentations[method] = createIterableMethod(method, readonly2, shallow);
  });
  return instrumentations;
}
function createInstrumentationGetter(isReadonly2, shallow) {
  const instrumentations = createInstrumentations(isReadonly2, shallow);
  return (target, key, receiver) => {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_raw") {
      return target;
    }
    return Reflect.get(
      hasOwn(instrumentations, key) && key in target ? instrumentations : target,
      key,
      receiver
    );
  };
}
const mutableCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
const shallowReadonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, true)
};
const reactiveMap = /* @__PURE__ */ new WeakMap();
const shallowReactiveMap = /* @__PURE__ */ new WeakMap();
const readonlyMap = /* @__PURE__ */ new WeakMap();
const shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
  switch (rawType) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function getTargetType(value) {
  return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}
// @__NO_SIDE_EFFECTS__
function reactive(target) {
  if (/* @__PURE__ */ isReadonly(target)) {
    return target;
  }
  return createReactiveObject(
    target,
    false,
    mutableHandlers,
    mutableCollectionHandlers,
    reactiveMap
  );
}
// @__NO_SIDE_EFFECTS__
function shallowReactive(target) {
  return createReactiveObject(
    target,
    false,
    shallowReactiveHandlers,
    shallowCollectionHandlers,
    shallowReactiveMap
  );
}
// @__NO_SIDE_EFFECTS__
function readonly(target) {
  return createReactiveObject(
    target,
    true,
    readonlyHandlers,
    readonlyCollectionHandlers,
    readonlyMap
  );
}
// @__NO_SIDE_EFFECTS__
function shallowReadonly(target) {
  return createReactiveObject(
    target,
    true,
    shallowReadonlyHandlers,
    shallowReadonlyCollectionHandlers,
    shallowReadonlyMap
  );
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
  if (!isObject$1(target)) {
    return target;
  }
  if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
    return target;
  }
  const targetType = getTargetType(target);
  if (targetType === 0) {
    return target;
  }
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  const proxy = new Proxy(
    target,
    targetType === 2 ? collectionHandlers : baseHandlers
  );
  proxyMap.set(target, proxy);
  return proxy;
}
// @__NO_SIDE_EFFECTS__
function isReactive(value) {
  if (/* @__PURE__ */ isReadonly(value)) {
    return /* @__PURE__ */ isReactive(value["__v_raw"]);
  }
  return !!(value && value["__v_isReactive"]);
}
// @__NO_SIDE_EFFECTS__
function isReadonly(value) {
  return !!(value && value["__v_isReadonly"]);
}
// @__NO_SIDE_EFFECTS__
function isShallow(value) {
  return !!(value && value["__v_isShallow"]);
}
// @__NO_SIDE_EFFECTS__
function isProxy(value) {
  return value ? !!value["__v_raw"] : false;
}
// @__NO_SIDE_EFFECTS__
function toRaw(observed) {
  const raw = observed && observed["__v_raw"];
  return raw ? /* @__PURE__ */ toRaw(raw) : observed;
}
function markRaw(value) {
  if (!hasOwn(value, "__v_skip") && Object.isExtensible(value)) {
    def(value, "__v_skip", true);
  }
  return value;
}
const toReactive = (value) => isObject$1(value) ? /* @__PURE__ */ reactive(value) : value;
const toReadonly = (value) => isObject$1(value) ? /* @__PURE__ */ readonly(value) : value;
// @__NO_SIDE_EFFECTS__
function isRef(r) {
  return r ? r["__v_isRef"] === true : false;
}
// @__NO_SIDE_EFFECTS__
function ref(value) {
  return createRef(value, false);
}
// @__NO_SIDE_EFFECTS__
function shallowRef(value) {
  return createRef(value, true);
}
function createRef(rawValue, shallow) {
  if (/* @__PURE__ */ isRef(rawValue)) {
    return rawValue;
  }
  return new RefImpl(rawValue, shallow);
}
class RefImpl {
  constructor(value, isShallow2) {
    this.dep = new Dep();
    this["__v_isRef"] = true;
    this["__v_isShallow"] = false;
    this._rawValue = isShallow2 ? value : /* @__PURE__ */ toRaw(value);
    this._value = isShallow2 ? value : toReactive(value);
    this["__v_isShallow"] = isShallow2;
  }
  get value() {
    {
      this.dep.track();
    }
    return this._value;
  }
  set value(newValue) {
    const oldValue = this._rawValue;
    const useDirectValue = this["__v_isShallow"] || /* @__PURE__ */ isShallow(newValue) || /* @__PURE__ */ isReadonly(newValue);
    newValue = useDirectValue ? newValue : /* @__PURE__ */ toRaw(newValue);
    if (hasChanged(newValue, oldValue)) {
      this._rawValue = newValue;
      this._value = useDirectValue ? newValue : toReactive(newValue);
      {
        this.dep.trigger();
      }
    }
  }
}
function triggerRef(ref2) {
  if (ref2.dep) {
    {
      ref2.dep.trigger();
    }
  }
}
function unref(ref2) {
  return /* @__PURE__ */ isRef(ref2) ? ref2.value : ref2;
}
function toValue$1(source) {
  return isFunction(source) ? source() : unref(source);
}
const shallowUnwrapHandlers = {
  get: (target, key, receiver) => key === "__v_raw" ? target : unref(Reflect.get(target, key, receiver)),
  set: (target, key, value, receiver) => {
    const oldValue = target[key];
    if (/* @__PURE__ */ isRef(oldValue) && !/* @__PURE__ */ isRef(value)) {
      oldValue.value = value;
      return true;
    } else {
      return Reflect.set(target, key, value, receiver);
    }
  }
};
function proxyRefs(objectWithRefs) {
  return /* @__PURE__ */ isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
class CustomRefImpl {
  constructor(factory) {
    this["__v_isRef"] = true;
    this._value = void 0;
    const dep = this.dep = new Dep();
    const { get, set } = factory(dep.track.bind(dep), dep.trigger.bind(dep));
    this._get = get;
    this._set = set;
  }
  get value() {
    return this._value = this._get();
  }
  set value(newVal) {
    this._set(newVal);
  }
}
function customRef(factory) {
  return new CustomRefImpl(factory);
}
// @__NO_SIDE_EFFECTS__
function toRefs(object) {
  const ret = isArray(object) ? new Array(object.length) : {};
  for (const key in object) {
    ret[key] = propertyToRef(object, key);
  }
  return ret;
}
class ObjectRefImpl {
  constructor(_object, _key, _defaultValue) {
    this._object = _object;
    this._key = _key;
    this._defaultValue = _defaultValue;
    this["__v_isRef"] = true;
    this._value = void 0;
    this._raw = /* @__PURE__ */ toRaw(_object);
    let shallow = true;
    let obj = _object;
    if (!isArray(_object) || !isIntegerKey(String(_key))) {
      do {
        shallow = !/* @__PURE__ */ isProxy(obj) || /* @__PURE__ */ isShallow(obj);
      } while (shallow && (obj = obj["__v_raw"]));
    }
    this._shallow = shallow;
  }
  get value() {
    let val = this._object[this._key];
    if (this._shallow) {
      val = unref(val);
    }
    return this._value = val === void 0 ? this._defaultValue : val;
  }
  set value(newVal) {
    if (this._shallow && /* @__PURE__ */ isRef(this._raw[this._key])) {
      const nestedRef = this._object[this._key];
      if (/* @__PURE__ */ isRef(nestedRef)) {
        nestedRef.value = newVal;
        return;
      }
    }
    this._object[this._key] = newVal;
  }
  get dep() {
    return getDepFromReactive(this._raw, this._key);
  }
}
class GetterRefImpl {
  constructor(_getter) {
    this._getter = _getter;
    this["__v_isRef"] = true;
    this["__v_isReadonly"] = true;
    this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
// @__NO_SIDE_EFFECTS__
function toRef(source, key, defaultValue) {
  if (/* @__PURE__ */ isRef(source)) {
    return source;
  } else if (isFunction(source)) {
    return new GetterRefImpl(source);
  } else if (isObject$1(source) && arguments.length > 1) {
    return propertyToRef(source, key, defaultValue);
  } else {
    return /* @__PURE__ */ ref(source);
  }
}
function propertyToRef(source, key, defaultValue) {
  return new ObjectRefImpl(source, key, defaultValue);
}
class ComputedRefImpl {
  constructor(fn, setter, isSSR) {
    this.fn = fn;
    this.setter = setter;
    this._value = void 0;
    this.dep = new Dep(this);
    this.__v_isRef = true;
    this.deps = void 0;
    this.depsTail = void 0;
    this.flags = 16;
    this.globalVersion = globalVersion - 1;
    this.next = void 0;
    this.effect = this;
    this["__v_isReadonly"] = !setter;
    this.isSSR = isSSR;
  }
  /**
   * @internal
   */
  notify() {
    this.flags |= 16;
    if (!(this.flags & 8) && // avoid infinite self recursion
    activeSub !== this) {
      batch(this, true);
      return true;
    }
  }
  get value() {
    const link = this.dep.track();
    refreshComputed(this);
    if (link) {
      link.version = this.dep.version;
    }
    return this._value;
  }
  set value(newValue) {
    if (this.setter) {
      this.setter(newValue);
    }
  }
}
// @__NO_SIDE_EFFECTS__
function computed$1(getterOrOptions, debugOptions, isSSR = false) {
  let getter;
  let setter;
  if (isFunction(getterOrOptions)) {
    getter = getterOrOptions;
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }
  const cRef = new ComputedRefImpl(getter, setter, isSSR);
  return cRef;
}
const TrackOpTypes = {
  "GET": "get",
  "HAS": "has",
  "ITERATE": "iterate"
};
const TriggerOpTypes = {
  "SET": "set",
  "ADD": "add",
  "DELETE": "delete",
  "CLEAR": "clear"
};
const INITIAL_WATCHER_VALUE = {};
const cleanupMap = /* @__PURE__ */ new WeakMap();
let activeWatcher = void 0;
function getCurrentWatcher() {
  return activeWatcher;
}
function onWatcherCleanup(cleanupFn, failSilently = false, owner = activeWatcher) {
  if (owner) {
    let cleanups = cleanupMap.get(owner);
    if (!cleanups) cleanupMap.set(owner, cleanups = []);
    cleanups.push(cleanupFn);
  }
}
function watch$1(source, cb, options = EMPTY_OBJ) {
  const { immediate, deep, once, scheduler, augmentJob, call } = options;
  const reactiveGetter = (source2) => {
    if (deep) return source2;
    if (/* @__PURE__ */ isShallow(source2) || deep === false || deep === 0)
      return traverse(source2, 1);
    return traverse(source2);
  };
  let effect2;
  let getter;
  let cleanup;
  let boundCleanup;
  let forceTrigger = false;
  let isMultiSource = false;
  if (/* @__PURE__ */ isRef(source)) {
    getter = () => source.value;
    forceTrigger = /* @__PURE__ */ isShallow(source);
  } else if (/* @__PURE__ */ isReactive(source)) {
    getter = () => reactiveGetter(source);
    forceTrigger = true;
  } else if (isArray(source)) {
    isMultiSource = true;
    forceTrigger = source.some((s) => /* @__PURE__ */ isReactive(s) || /* @__PURE__ */ isShallow(s));
    getter = () => source.map((s) => {
      if (/* @__PURE__ */ isRef(s)) {
        return s.value;
      } else if (/* @__PURE__ */ isReactive(s)) {
        return reactiveGetter(s);
      } else if (isFunction(s)) {
        return call ? call(s, 2) : s();
      } else ;
    });
  } else if (isFunction(source)) {
    if (cb) {
      getter = call ? () => call(source, 2) : source;
    } else {
      getter = () => {
        if (cleanup) {
          pauseTracking();
          try {
            cleanup();
          } finally {
            resetTracking();
          }
        }
        const currentEffect = activeWatcher;
        activeWatcher = effect2;
        try {
          return call ? call(source, 3, [boundCleanup]) : source(boundCleanup);
        } finally {
          activeWatcher = currentEffect;
        }
      };
    }
  } else {
    getter = NOOP;
  }
  if (cb && deep) {
    const baseGetter = getter;
    const depth = deep === true ? Infinity : deep;
    getter = () => traverse(baseGetter(), depth);
  }
  const scope = getCurrentScope();
  const watchHandle = () => {
    effect2.stop();
    if (scope && scope.active) {
      remove(scope.effects, effect2);
    }
  };
  if (once && cb) {
    const _cb = cb;
    cb = (...args) => {
      _cb(...args);
      watchHandle();
    };
  }
  let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
  const job = (immediateFirstRun) => {
    if (!(effect2.flags & 1) || !effect2.dirty && !immediateFirstRun) {
      return;
    }
    if (cb) {
      const newValue = effect2.run();
      if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i) => hasChanged(v, oldValue[i])) : hasChanged(newValue, oldValue))) {
        if (cleanup) {
          cleanup();
        }
        const currentWatcher = activeWatcher;
        activeWatcher = effect2;
        try {
          const args = [
            newValue,
            // pass undefined as the old value when it's changed for the first time
            oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
            boundCleanup
          ];
          oldValue = newValue;
          call ? call(cb, 3, args) : (
            // @ts-expect-error
            cb(...args)
          );
        } finally {
          activeWatcher = currentWatcher;
        }
      }
    } else {
      effect2.run();
    }
  };
  if (augmentJob) {
    augmentJob(job);
  }
  effect2 = new ReactiveEffect(getter);
  effect2.scheduler = scheduler ? () => scheduler(job, false) : job;
  boundCleanup = (fn) => onWatcherCleanup(fn, false, effect2);
  cleanup = effect2.onStop = () => {
    const cleanups = cleanupMap.get(effect2);
    if (cleanups) {
      if (call) {
        call(cleanups, 4);
      } else {
        for (const cleanup2 of cleanups) cleanup2();
      }
      cleanupMap.delete(effect2);
    }
  };
  if (cb) {
    if (immediate) {
      job(true);
    } else {
      oldValue = effect2.run();
    }
  } else if (scheduler) {
    scheduler(job.bind(null, true), true);
  } else {
    effect2.run();
  }
  watchHandle.pause = effect2.pause.bind(effect2);
  watchHandle.resume = effect2.resume.bind(effect2);
  watchHandle.stop = watchHandle;
  return watchHandle;
}
function traverse(value, depth = Infinity, seen) {
  if (depth <= 0 || !isObject$1(value) || value["__v_skip"]) {
    return value;
  }
  seen = seen || /* @__PURE__ */ new Map();
  if ((seen.get(value) || 0) >= depth) {
    return value;
  }
  seen.set(value, depth);
  depth--;
  if (/* @__PURE__ */ isRef(value)) {
    traverse(value.value, depth, seen);
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      traverse(value[i], depth, seen);
    }
  } else if (isSet(value) || isMap(value)) {
    value.forEach((v) => {
      traverse(v, depth, seen);
    });
  } else if (isPlainObject$1(value)) {
    for (const key in value) {
      traverse(value[key], depth, seen);
    }
    for (const key of Object.getOwnPropertySymbols(value)) {
      if (Object.prototype.propertyIsEnumerable.call(value, key)) {
        traverse(value[key], depth, seen);
      }
    }
  }
  return value;
}
const stack = [];
function pushWarningContext(vnode) {
  stack.push(vnode);
}
function popWarningContext() {
  stack.pop();
}
let isWarning = false;
function warn$1(msg, ...args) {
  if (isWarning) return;
  isWarning = true;
  pauseTracking();
  const instance = stack.length ? stack[stack.length - 1].component : null;
  const appWarnHandler = instance && instance.appContext.config.warnHandler;
  const trace = getComponentTrace();
  if (appWarnHandler) {
    callWithErrorHandling(
      appWarnHandler,
      instance,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        msg + args.map((a) => {
          var _a, _b;
          return (_b = (_a = a.toString) == null ? void 0 : _a.call(a)) != null ? _b : JSON.stringify(a);
        }).join(""),
        instance && instance.proxy,
        trace.map(
          ({ vnode }) => `at <${formatComponentName(instance, vnode.type)}>`
        ).join("\n"),
        trace
      ]
    );
  } else {
    const warnArgs = [`[Vue warn]: ${msg}`, ...args];
    if (trace.length && // avoid spamming console during tests
    true) {
      warnArgs.push(`
`, ...formatTrace(trace));
    }
    console.warn(...warnArgs);
  }
  resetTracking();
  isWarning = false;
}
function getComponentTrace() {
  let currentVNode = stack[stack.length - 1];
  if (!currentVNode) {
    return [];
  }
  const normalizedStack = [];
  while (currentVNode) {
    const last = normalizedStack[0];
    if (last && last.vnode === currentVNode) {
      last.recurseCount++;
    } else {
      normalizedStack.push({
        vnode: currentVNode,
        recurseCount: 0
      });
    }
    const parentInstance = currentVNode.component && currentVNode.component.parent;
    currentVNode = parentInstance && parentInstance.vnode;
  }
  return normalizedStack;
}
function formatTrace(trace) {
  const logs = [];
  trace.forEach((entry, i) => {
    logs.push(...i === 0 ? [] : [`
`], ...formatTraceEntry(entry));
  });
  return logs;
}
function formatTraceEntry({ vnode, recurseCount }) {
  const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
  const isRoot = vnode.component ? vnode.component.parent == null : false;
  const open = ` at <${formatComponentName(
    vnode.component,
    vnode.type,
    isRoot
  )}`;
  const close = `>` + postfix;
  return vnode.props ? [open, ...formatProps(vnode.props), close] : [open + close];
}
function formatProps(props) {
  const res = [];
  const keys = Object.keys(props);
  keys.slice(0, 3).forEach((key) => {
    res.push(...formatProp(key, props[key]));
  });
  if (keys.length > 3) {
    res.push(` ...`);
  }
  return res;
}
function formatProp(key, value, raw) {
  if (isString(value)) {
    value = JSON.stringify(value);
    return raw ? value : [`${key}=${value}`];
  } else if (typeof value === "number" || typeof value === "boolean" || value == null) {
    return raw ? value : [`${key}=${value}`];
  } else if (/* @__PURE__ */ isRef(value)) {
    value = formatProp(key, /* @__PURE__ */ toRaw(value.value), true);
    return raw ? value : [`${key}=Ref<`, value, `>`];
  } else if (isFunction(value)) {
    return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
  } else {
    value = /* @__PURE__ */ toRaw(value);
    return raw ? value : [`${key}=`, value];
  }
}
function assertNumber(val, type) {
  return;
}
const ErrorCodes = {
  "SETUP_FUNCTION": 0,
  "0": "SETUP_FUNCTION",
  "RENDER_FUNCTION": 1,
  "1": "RENDER_FUNCTION",
  "NATIVE_EVENT_HANDLER": 5,
  "5": "NATIVE_EVENT_HANDLER",
  "COMPONENT_EVENT_HANDLER": 6,
  "6": "COMPONENT_EVENT_HANDLER",
  "VNODE_HOOK": 7,
  "7": "VNODE_HOOK",
  "DIRECTIVE_HOOK": 8,
  "8": "DIRECTIVE_HOOK",
  "TRANSITION_HOOK": 9,
  "9": "TRANSITION_HOOK",
  "APP_ERROR_HANDLER": 10,
  "10": "APP_ERROR_HANDLER",
  "APP_WARN_HANDLER": 11,
  "11": "APP_WARN_HANDLER",
  "FUNCTION_REF": 12,
  "12": "FUNCTION_REF",
  "ASYNC_COMPONENT_LOADER": 13,
  "13": "ASYNC_COMPONENT_LOADER",
  "SCHEDULER": 14,
  "14": "SCHEDULER",
  "COMPONENT_UPDATE": 15,
  "15": "COMPONENT_UPDATE",
  "APP_UNMOUNT_CLEANUP": 16,
  "16": "APP_UNMOUNT_CLEANUP"
};
const ErrorTypeStrings$1 = {
  ["sp"]: "serverPrefetch hook",
  ["bc"]: "beforeCreate hook",
  ["c"]: "created hook",
  ["bm"]: "beforeMount hook",
  ["m"]: "mounted hook",
  ["bu"]: "beforeUpdate hook",
  ["u"]: "updated",
  ["bum"]: "beforeUnmount hook",
  ["um"]: "unmounted hook",
  ["a"]: "activated hook",
  ["da"]: "deactivated hook",
  ["ec"]: "errorCaptured hook",
  ["rtc"]: "renderTracked hook",
  ["rtg"]: "renderTriggered hook",
  [0]: "setup function",
  [1]: "render function",
  [2]: "watcher getter",
  [3]: "watcher callback",
  [4]: "watcher cleanup function",
  [5]: "native event handler",
  [6]: "component event handler",
  [7]: "vnode hook",
  [8]: "directive hook",
  [9]: "transition hook",
  [10]: "app errorHandler",
  [11]: "app warnHandler",
  [12]: "ref function",
  [13]: "async component loader",
  [14]: "scheduler flush",
  [15]: "component update",
  [16]: "app unmount cleanup function"
};
function callWithErrorHandling(fn, instance, type, args) {
  try {
    return args ? fn(...args) : fn();
  } catch (err) {
    handleError(err, instance, type);
  }
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
  if (isFunction(fn)) {
    const res = callWithErrorHandling(fn, instance, type, args);
    if (res && isPromise(res)) {
      res.catch((err) => {
        handleError(err, instance, type);
      });
    }
    return res;
  }
  if (isArray(fn)) {
    const values = [];
    for (let i = 0; i < fn.length; i++) {
      values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
    }
    return values;
  }
}
function handleError(err, instance, type, throwInDev = true) {
  const contextVNode = instance ? instance.vnode : null;
  const { errorHandler, throwUnhandledErrorInProduction } = instance && instance.appContext.config || EMPTY_OBJ;
  if (instance) {
    let cur = instance.parent;
    const exposedInstance = instance.proxy;
    const errorInfo = `https://vuejs.org/error-reference/#runtime-${type}`;
    while (cur) {
      const errorCapturedHooks = cur.ec;
      if (errorCapturedHooks) {
        for (let i = 0; i < errorCapturedHooks.length; i++) {
          if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
            return;
          }
        }
      }
      cur = cur.parent;
    }
    if (errorHandler) {
      pauseTracking();
      callWithErrorHandling(errorHandler, null, 10, [
        err,
        exposedInstance,
        errorInfo
      ]);
      resetTracking();
      return;
    }
  }
  logError(err, type, contextVNode, throwInDev, throwUnhandledErrorInProduction);
}
function logError(err, type, contextVNode, throwInDev = true, throwInProd = false) {
  if (throwInProd) {
    throw err;
  } else {
    console.error(err);
  }
}
const queue = [];
let flushIndex = -1;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = /* @__PURE__ */ Promise.resolve();
let currentFlushPromise = null;
function nextTick(fn) {
  const p2 = currentFlushPromise || resolvedPromise;
  return fn ? p2.then(this ? fn.bind(this) : fn) : p2;
}
function findInsertionIndex(id) {
  let start = flushIndex + 1;
  let end = queue.length;
  while (start < end) {
    const middle = start + end >>> 1;
    const middleJob = queue[middle];
    const middleJobId = getId(middleJob);
    if (middleJobId < id || middleJobId === id && middleJob.flags & 2) {
      start = middle + 1;
    } else {
      end = middle;
    }
  }
  return start;
}
function queueJob(job) {
  if (!(job.flags & 1)) {
    const jobId = getId(job);
    const lastJob = queue[queue.length - 1];
    if (!lastJob || // fast path when the job id is larger than the tail
    !(job.flags & 2) && jobId >= getId(lastJob)) {
      queue.push(job);
    } else {
      queue.splice(findInsertionIndex(jobId), 0, job);
    }
    job.flags |= 1;
    queueFlush();
  }
}
function queueFlush() {
  if (!currentFlushPromise) {
    currentFlushPromise = resolvedPromise.then(flushJobs);
  }
}
function queuePostFlushCb(cb) {
  if (!isArray(cb)) {
    if (activePostFlushCbs && cb.id === -1) {
      activePostFlushCbs.splice(postFlushIndex + 1, 0, cb);
    } else if (!(cb.flags & 1)) {
      pendingPostFlushCbs.push(cb);
      cb.flags |= 1;
    }
  } else {
    pendingPostFlushCbs.push(...cb);
  }
  queueFlush();
}
function flushPreFlushCbs(instance, seen, i = flushIndex + 1) {
  for (; i < queue.length; i++) {
    const cb = queue[i];
    if (cb && cb.flags & 2) {
      if (instance && cb.id !== instance.uid) {
        continue;
      }
      queue.splice(i, 1);
      i--;
      if (cb.flags & 4) {
        cb.flags &= -2;
      }
      cb();
      if (!(cb.flags & 4)) {
        cb.flags &= -2;
      }
    }
  }
}
function flushPostFlushCbs(seen) {
  if (pendingPostFlushCbs.length) {
    const deduped = [...new Set(pendingPostFlushCbs)].sort(
      (a, b) => getId(a) - getId(b)
    );
    pendingPostFlushCbs.length = 0;
    if (activePostFlushCbs) {
      activePostFlushCbs.push(...deduped);
      return;
    }
    activePostFlushCbs = deduped;
    for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
      const cb = activePostFlushCbs[postFlushIndex];
      if (cb.flags & 4) {
        cb.flags &= -2;
      }
      if (!(cb.flags & 8)) cb();
      cb.flags &= -2;
    }
    activePostFlushCbs = null;
    postFlushIndex = 0;
  }
}
const getId = (job) => job.id == null ? job.flags & 2 ? -1 : Infinity : job.id;
function flushJobs(seen) {
  try {
    for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
      const job = queue[flushIndex];
      if (job && !(job.flags & 8)) {
        if (false) ;
        if (job.flags & 4) {
          job.flags &= ~1;
        }
        callWithErrorHandling(
          job,
          job.i,
          job.i ? 15 : 14
        );
        if (!(job.flags & 4)) {
          job.flags &= ~1;
        }
      }
    }
  } finally {
    for (; flushIndex < queue.length; flushIndex++) {
      const job = queue[flushIndex];
      if (job) {
        job.flags &= -2;
      }
    }
    flushIndex = -1;
    queue.length = 0;
    flushPostFlushCbs();
    currentFlushPromise = null;
    if (queue.length || pendingPostFlushCbs.length) {
      flushJobs();
    }
  }
}
let devtools$1;
let buffer = [];
function setDevtoolsHook$1(hook, target) {
  var _a, _b;
  devtools$1 = hook;
  if (devtools$1) {
    devtools$1.enabled = true;
    buffer.forEach(({ event, args }) => devtools$1.emit(event, ...args));
    buffer = [];
  } else if (
    // handle late devtools injection - only do this if we are in an actual
    // browser environment to avoid the timer handle stalling test runner exit
    // (#4815)
    typeof window !== "undefined" && // some envs mock window but not fully
    window.HTMLElement && // also exclude jsdom
    // eslint-disable-next-line no-restricted-syntax
    !((_b = (_a = window.navigator) == null ? void 0 : _a.userAgent) == null ? void 0 : _b.includes("jsdom"))
  ) {
    const replay = target.__VUE_DEVTOOLS_HOOK_REPLAY__ = target.__VUE_DEVTOOLS_HOOK_REPLAY__ || [];
    replay.push((newHook) => {
      setDevtoolsHook$1(newHook, target);
    });
    setTimeout(() => {
      if (!devtools$1) {
        target.__VUE_DEVTOOLS_HOOK_REPLAY__ = null;
        buffer = [];
      }
    }, 3e3);
  } else {
    buffer = [];
  }
}
let currentRenderingInstance = null;
let currentScopeId = null;
function setCurrentRenderingInstance(instance) {
  const prev = currentRenderingInstance;
  currentRenderingInstance = instance;
  currentScopeId = instance && instance.type.__scopeId || null;
  return prev;
}
function pushScopeId(id) {
  currentScopeId = id;
}
function popScopeId() {
  currentScopeId = null;
}
const withScopeId = (_id) => withCtx;
function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot) {
  if (!ctx) return fn;
  if (fn._n) {
    return fn;
  }
  const renderFnWithContext = (...args) => {
    if (renderFnWithContext._d) {
      setBlockTracking(-1);
    }
    const prevInstance = setCurrentRenderingInstance(ctx);
    let res;
    try {
      res = fn(...args);
    } finally {
      setCurrentRenderingInstance(prevInstance);
      if (renderFnWithContext._d) {
        setBlockTracking(1);
      }
    }
    return res;
  };
  renderFnWithContext._n = true;
  renderFnWithContext._c = true;
  renderFnWithContext._d = true;
  return renderFnWithContext;
}
function withDirectives(vnode, directives) {
  if (currentRenderingInstance === null) {
    return vnode;
  }
  const instance = getComponentPublicInstance(currentRenderingInstance);
  const bindings = vnode.dirs || (vnode.dirs = []);
  for (let i = 0; i < directives.length; i++) {
    let [dir, value, arg, modifiers = EMPTY_OBJ] = directives[i];
    if (dir) {
      if (isFunction(dir)) {
        dir = {
          mounted: dir,
          updated: dir
        };
      }
      if (dir.deep) {
        traverse(value);
      }
      bindings.push({
        dir,
        instance,
        value,
        oldValue: void 0,
        arg,
        modifiers
      });
    }
  }
  return vnode;
}
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
  const bindings = vnode.dirs;
  const oldBindings = prevVNode && prevVNode.dirs;
  for (let i = 0; i < bindings.length; i++) {
    const binding = bindings[i];
    if (oldBindings) {
      binding.oldValue = oldBindings[i].value;
    }
    let hook = binding.dir[name];
    if (hook) {
      pauseTracking();
      callWithAsyncErrorHandling(hook, instance, 8, [
        vnode.el,
        binding,
        vnode,
        prevVNode
      ]);
      resetTracking();
    }
  }
}
function provide(key, value) {
  if (currentInstance) {
    let provides = currentInstance.provides;
    const parentProvides = currentInstance.parent && currentInstance.parent.provides;
    if (parentProvides === provides) {
      provides = currentInstance.provides = Object.create(parentProvides);
    }
    provides[key] = value;
  }
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
  const instance = getCurrentInstance();
  if (instance || currentApp) {
    let provides = currentApp ? currentApp._context.provides : instance ? instance.parent == null || instance.ce ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides : void 0;
    if (provides && key in provides) {
      return provides[key];
    } else if (arguments.length > 1) {
      return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue.call(instance && instance.proxy) : defaultValue;
    } else ;
  }
}
function hasInjectionContext() {
  return !!(getCurrentInstance() || currentApp);
}
const ssrContextKey = /* @__PURE__ */ Symbol.for("v-scx");
const useSSRContext = () => {
  {
    const ctx = inject(ssrContextKey);
    return ctx;
  }
};
function watchEffect(effect2, options) {
  return doWatch(effect2, null, options);
}
function watchPostEffect(effect2, options) {
  return doWatch(
    effect2,
    null,
    { flush: "post" }
  );
}
function watchSyncEffect(effect2, options) {
  return doWatch(
    effect2,
    null,
    { flush: "sync" }
  );
}
function watch(source, cb, options) {
  return doWatch(source, cb, options);
}
function doWatch(source, cb, options = EMPTY_OBJ) {
  const { immediate, deep, flush, once } = options;
  const baseWatchOptions = extend({}, options);
  const runsImmediately = cb && immediate || !cb && flush !== "post";
  let ssrCleanup;
  if (isInSSRComponentSetup) {
    if (flush === "sync") {
      const ctx = useSSRContext();
      ssrCleanup = ctx.__watcherHandles || (ctx.__watcherHandles = []);
    } else if (!runsImmediately) {
      const watchStopHandle = () => {
      };
      watchStopHandle.stop = NOOP;
      watchStopHandle.resume = NOOP;
      watchStopHandle.pause = NOOP;
      return watchStopHandle;
    }
  }
  const instance = currentInstance;
  baseWatchOptions.call = (fn, type, args) => callWithAsyncErrorHandling(fn, instance, type, args);
  let isPre = false;
  if (flush === "post") {
    baseWatchOptions.scheduler = (job) => {
      queuePostRenderEffect(job, instance && instance.suspense);
    };
  } else if (flush !== "sync") {
    isPre = true;
    baseWatchOptions.scheduler = (job, isFirstRun) => {
      if (isFirstRun) {
        job();
      } else {
        queueJob(job);
      }
    };
  }
  baseWatchOptions.augmentJob = (job) => {
    if (cb) {
      job.flags |= 4;
    }
    if (isPre) {
      job.flags |= 2;
      if (instance) {
        job.id = instance.uid;
        job.i = instance;
      }
    }
  };
  const watchHandle = watch$1(source, cb, baseWatchOptions);
  if (isInSSRComponentSetup) {
    if (ssrCleanup) {
      ssrCleanup.push(watchHandle);
    } else if (runsImmediately) {
      watchHandle();
    }
  }
  return watchHandle;
}
function instanceWatch(source, value, options) {
  const publicThis = this.proxy;
  const getter = isString(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
  let cb;
  if (isFunction(value)) {
    cb = value;
  } else {
    cb = value.handler;
    options = value;
  }
  const reset = setCurrentInstance(this);
  const res = doWatch(getter, cb.bind(publicThis), options);
  reset();
  return res;
}
function createPathGetter(ctx, path) {
  const segments = path.split(".");
  return () => {
    let cur = ctx;
    for (let i = 0; i < segments.length && cur; i++) {
      cur = cur[segments[i]];
    }
    return cur;
  };
}
const TeleportEndKey = /* @__PURE__ */ Symbol("_vte");
const isTeleport = (type) => type.__isTeleport;
const isTeleportDisabled = (props) => props && (props.disabled || props.disabled === "");
const isTeleportDeferred = (props) => props && (props.defer || props.defer === "");
const isTargetSVG = (target) => typeof SVGElement !== "undefined" && target instanceof SVGElement;
const isTargetMathML = (target) => typeof MathMLElement === "function" && target instanceof MathMLElement;
const resolveTarget = (props, select) => {
  const targetSelector = props && props.to;
  if (isString(targetSelector)) {
    if (!select) {
      return null;
    } else {
      const target = select(targetSelector);
      return target;
    }
  } else {
    return targetSelector;
  }
};
const TeleportImpl = {
  name: "Teleport",
  __isTeleport: true,
  process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals) {
    const {
      mc: mountChildren,
      pc: patchChildren,
      pbc: patchBlockChildren,
      o: { insert, querySelector, createText, createComment }
    } = internals;
    const disabled = isTeleportDisabled(n2.props);
    let { shapeFlag, children, dynamicChildren } = n2;
    if (n1 == null) {
      const placeholder = n2.el = createText("");
      const mainAnchor = n2.anchor = createText("");
      insert(placeholder, container, anchor);
      insert(mainAnchor, container, anchor);
      const mount = (container2, anchor2) => {
        if (shapeFlag & 16) {
          mountChildren(
            children,
            container2,
            anchor2,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        }
      };
      const mountToTarget = () => {
        const target = n2.target = resolveTarget(n2.props, querySelector);
        const targetAnchor = prepareAnchor(target, n2, createText, insert);
        if (target) {
          if (namespace !== "svg" && isTargetSVG(target)) {
            namespace = "svg";
          } else if (namespace !== "mathml" && isTargetMathML(target)) {
            namespace = "mathml";
          }
          if (parentComponent && parentComponent.isCE) {
            (parentComponent.ce._teleportTargets || (parentComponent.ce._teleportTargets = /* @__PURE__ */ new Set())).add(target);
          }
          if (!disabled) {
            mount(target, targetAnchor);
            updateCssVars(n2, false);
          }
        }
      };
      if (disabled) {
        mount(container, mainAnchor);
        updateCssVars(n2, true);
      }
      if (isTeleportDeferred(n2.props)) {
        n2.el.__isMounted = false;
        queuePostRenderEffect(() => {
          mountToTarget();
          delete n2.el.__isMounted;
        }, parentSuspense);
      } else {
        mountToTarget();
      }
    } else {
      if (isTeleportDeferred(n2.props) && n1.el.__isMounted === false) {
        queuePostRenderEffect(() => {
          TeleportImpl.process(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized,
            internals
          );
        }, parentSuspense);
        return;
      }
      n2.el = n1.el;
      n2.targetStart = n1.targetStart;
      const mainAnchor = n2.anchor = n1.anchor;
      const target = n2.target = n1.target;
      const targetAnchor = n2.targetAnchor = n1.targetAnchor;
      const wasDisabled = isTeleportDisabled(n1.props);
      const currentContainer = wasDisabled ? container : target;
      const currentAnchor = wasDisabled ? mainAnchor : targetAnchor;
      if (namespace === "svg" || isTargetSVG(target)) {
        namespace = "svg";
      } else if (namespace === "mathml" || isTargetMathML(target)) {
        namespace = "mathml";
      }
      if (dynamicChildren) {
        patchBlockChildren(
          n1.dynamicChildren,
          dynamicChildren,
          currentContainer,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds
        );
        traverseStaticChildren(n1, n2, true);
      } else if (!optimized) {
        patchChildren(
          n1,
          n2,
          currentContainer,
          currentAnchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          false
        );
      }
      if (disabled) {
        if (!wasDisabled) {
          moveTeleport(
            n2,
            container,
            mainAnchor,
            internals,
            1
          );
        } else {
          if (n2.props && n1.props && n2.props.to !== n1.props.to) {
            n2.props.to = n1.props.to;
          }
        }
      } else {
        if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
          const nextTarget = n2.target = resolveTarget(
            n2.props,
            querySelector
          );
          if (nextTarget) {
            moveTeleport(
              n2,
              nextTarget,
              null,
              internals,
              0
            );
          }
        } else if (wasDisabled) {
          moveTeleport(
            n2,
            target,
            targetAnchor,
            internals,
            1
          );
        }
      }
      updateCssVars(n2, disabled);
    }
  },
  remove(vnode, parentComponent, parentSuspense, { um: unmount, o: { remove: hostRemove } }, doRemove) {
    const {
      shapeFlag,
      children,
      anchor,
      targetStart,
      targetAnchor,
      target,
      props
    } = vnode;
    if (target) {
      hostRemove(targetStart);
      hostRemove(targetAnchor);
    }
    doRemove && hostRemove(anchor);
    if (shapeFlag & 16) {
      const shouldRemove = doRemove || !isTeleportDisabled(props);
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        unmount(
          child,
          parentComponent,
          parentSuspense,
          shouldRemove,
          !!child.dynamicChildren
        );
      }
    }
  },
  move: moveTeleport,
  hydrate: hydrateTeleport
};
function moveTeleport(vnode, container, parentAnchor, { o: { insert }, m: move }, moveType = 2) {
  if (moveType === 0) {
    insert(vnode.targetAnchor, container, parentAnchor);
  }
  const { el, anchor, shapeFlag, children, props } = vnode;
  const isReorder = moveType === 2;
  if (isReorder) {
    insert(el, container, parentAnchor);
  }
  if (!isReorder || isTeleportDisabled(props)) {
    if (shapeFlag & 16) {
      for (let i = 0; i < children.length; i++) {
        move(
          children[i],
          container,
          parentAnchor,
          2
        );
      }
    }
  }
  if (isReorder) {
    insert(anchor, container, parentAnchor);
  }
}
function hydrateTeleport(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, {
  o: { nextSibling, parentNode, querySelector, insert, createText }
}, hydrateChildren) {
  function hydrateAnchor(target2, targetNode) {
    let targetAnchor = targetNode;
    while (targetAnchor) {
      if (targetAnchor && targetAnchor.nodeType === 8) {
        if (targetAnchor.data === "teleport start anchor") {
          vnode.targetStart = targetAnchor;
        } else if (targetAnchor.data === "teleport anchor") {
          vnode.targetAnchor = targetAnchor;
          target2._lpa = vnode.targetAnchor && nextSibling(vnode.targetAnchor);
          break;
        }
      }
      targetAnchor = nextSibling(targetAnchor);
    }
  }
  function hydrateDisabledTeleport(node2, vnode2) {
    vnode2.anchor = hydrateChildren(
      nextSibling(node2),
      vnode2,
      parentNode(node2),
      parentComponent,
      parentSuspense,
      slotScopeIds,
      optimized
    );
  }
  const target = vnode.target = resolveTarget(
    vnode.props,
    querySelector
  );
  const disabled = isTeleportDisabled(vnode.props);
  if (target) {
    const targetNode = target._lpa || target.firstChild;
    if (vnode.shapeFlag & 16) {
      if (disabled) {
        hydrateDisabledTeleport(node, vnode);
        hydrateAnchor(target, targetNode);
        if (!vnode.targetAnchor) {
          prepareAnchor(
            target,
            vnode,
            createText,
            insert,
            // if target is the same as the main view, insert anchors before current node
            // to avoid hydrating mismatch
            parentNode(node) === target ? node : null
          );
        }
      } else {
        vnode.anchor = nextSibling(node);
        hydrateAnchor(target, targetNode);
        if (!vnode.targetAnchor) {
          prepareAnchor(target, vnode, createText, insert);
        }
        hydrateChildren(
          targetNode && nextSibling(targetNode),
          vnode,
          target,
          parentComponent,
          parentSuspense,
          slotScopeIds,
          optimized
        );
      }
    }
    updateCssVars(vnode, disabled);
  } else if (disabled) {
    if (vnode.shapeFlag & 16) {
      hydrateDisabledTeleport(node, vnode);
      vnode.targetStart = node;
      vnode.targetAnchor = nextSibling(node);
    }
  }
  return vnode.anchor && nextSibling(vnode.anchor);
}
const Teleport = TeleportImpl;
function updateCssVars(vnode, isDisabled) {
  const ctx = vnode.ctx;
  if (ctx && ctx.ut) {
    let node, anchor;
    if (isDisabled) {
      node = vnode.el;
      anchor = vnode.anchor;
    } else {
      node = vnode.targetStart;
      anchor = vnode.targetAnchor;
    }
    while (node && node !== anchor) {
      if (node.nodeType === 1) node.setAttribute("data-v-owner", ctx.uid);
      node = node.nextSibling;
    }
    ctx.ut();
  }
}
function prepareAnchor(target, vnode, createText, insert, anchor = null) {
  const targetStart = vnode.targetStart = createText("");
  const targetAnchor = vnode.targetAnchor = createText("");
  targetStart[TeleportEndKey] = targetAnchor;
  if (target) {
    insert(targetStart, target, anchor);
    insert(targetAnchor, target, anchor);
  }
  return targetAnchor;
}
const leaveCbKey = /* @__PURE__ */ Symbol("_leaveCb");
const enterCbKey$1 = /* @__PURE__ */ Symbol("_enterCb");
function useTransitionState() {
  const state2 = {
    isMounted: false,
    isLeaving: false,
    isUnmounting: false,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  onMounted(() => {
    state2.isMounted = true;
  });
  onBeforeUnmount(() => {
    state2.isUnmounting = true;
  });
  return state2;
}
const TransitionHookValidator = [Function, Array];
const BaseTransitionPropsValidators = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: TransitionHookValidator,
  onEnter: TransitionHookValidator,
  onAfterEnter: TransitionHookValidator,
  onEnterCancelled: TransitionHookValidator,
  // leave
  onBeforeLeave: TransitionHookValidator,
  onLeave: TransitionHookValidator,
  onAfterLeave: TransitionHookValidator,
  onLeaveCancelled: TransitionHookValidator,
  // appear
  onBeforeAppear: TransitionHookValidator,
  onAppear: TransitionHookValidator,
  onAfterAppear: TransitionHookValidator,
  onAppearCancelled: TransitionHookValidator
};
const recursiveGetSubtree = (instance) => {
  const subTree = instance.subTree;
  return subTree.component ? recursiveGetSubtree(subTree.component) : subTree;
};
const BaseTransitionImpl = {
  name: `BaseTransition`,
  props: BaseTransitionPropsValidators,
  setup(props, { slots }) {
    const instance = getCurrentInstance();
    const state2 = useTransitionState();
    return () => {
      const children = slots.default && getTransitionRawChildren(slots.default(), true);
      if (!children || !children.length) {
        return;
      }
      const child = findNonCommentChild(children);
      const rawProps = /* @__PURE__ */ toRaw(props);
      const { mode } = rawProps;
      if (state2.isLeaving) {
        return emptyPlaceholder(child);
      }
      const innerChild = getInnerChild$1(child);
      if (!innerChild) {
        return emptyPlaceholder(child);
      }
      let enterHooks = resolveTransitionHooks(
        innerChild,
        rawProps,
        state2,
        instance,
        // #11061, ensure enterHooks is fresh after clone
        (hooks) => enterHooks = hooks
      );
      if (innerChild.type !== Comment) {
        setTransitionHooks(innerChild, enterHooks);
      }
      let oldInnerChild = instance.subTree && getInnerChild$1(instance.subTree);
      if (oldInnerChild && oldInnerChild.type !== Comment && !isSameVNodeType(oldInnerChild, innerChild) && recursiveGetSubtree(instance).type !== Comment) {
        let leavingHooks = resolveTransitionHooks(
          oldInnerChild,
          rawProps,
          state2,
          instance
        );
        setTransitionHooks(oldInnerChild, leavingHooks);
        if (mode === "out-in" && innerChild.type !== Comment) {
          state2.isLeaving = true;
          leavingHooks.afterLeave = () => {
            state2.isLeaving = false;
            if (!(instance.job.flags & 8)) {
              instance.update();
            }
            delete leavingHooks.afterLeave;
            oldInnerChild = void 0;
          };
          return emptyPlaceholder(child);
        } else if (mode === "in-out" && innerChild.type !== Comment) {
          leavingHooks.delayLeave = (el, earlyRemove, delayedLeave) => {
            const leavingVNodesCache = getLeavingNodesForType(
              state2,
              oldInnerChild
            );
            leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
            el[leaveCbKey] = () => {
              earlyRemove();
              el[leaveCbKey] = void 0;
              delete enterHooks.delayedLeave;
              oldInnerChild = void 0;
            };
            enterHooks.delayedLeave = () => {
              delayedLeave();
              delete enterHooks.delayedLeave;
              oldInnerChild = void 0;
            };
          };
        } else {
          oldInnerChild = void 0;
        }
      } else if (oldInnerChild) {
        oldInnerChild = void 0;
      }
      return child;
    };
  }
};
function findNonCommentChild(children) {
  let child = children[0];
  if (children.length > 1) {
    for (const c of children) {
      if (c.type !== Comment) {
        child = c;
        break;
      }
    }
  }
  return child;
}
const BaseTransition = BaseTransitionImpl;
function getLeavingNodesForType(state2, vnode) {
  const { leavingVNodes } = state2;
  let leavingVNodesCache = leavingVNodes.get(vnode.type);
  if (!leavingVNodesCache) {
    leavingVNodesCache = /* @__PURE__ */ Object.create(null);
    leavingVNodes.set(vnode.type, leavingVNodesCache);
  }
  return leavingVNodesCache;
}
function resolveTransitionHooks(vnode, props, state2, instance, postClone) {
  const {
    appear,
    mode,
    persisted = false,
    onBeforeEnter,
    onEnter,
    onAfterEnter,
    onEnterCancelled,
    onBeforeLeave,
    onLeave,
    onAfterLeave,
    onLeaveCancelled,
    onBeforeAppear,
    onAppear,
    onAfterAppear,
    onAppearCancelled
  } = props;
  const key = String(vnode.key);
  const leavingVNodesCache = getLeavingNodesForType(state2, vnode);
  const callHook2 = (hook, args) => {
    hook && callWithAsyncErrorHandling(
      hook,
      instance,
      9,
      args
    );
  };
  const callAsyncHook = (hook, args) => {
    const done = args[1];
    callHook2(hook, args);
    if (isArray(hook)) {
      if (hook.every((hook2) => hook2.length <= 1)) done();
    } else if (hook.length <= 1) {
      done();
    }
  };
  const hooks = {
    mode,
    persisted,
    beforeEnter(el) {
      let hook = onBeforeEnter;
      if (!state2.isMounted) {
        if (appear) {
          hook = onBeforeAppear || onBeforeEnter;
        } else {
          return;
        }
      }
      if (el[leaveCbKey]) {
        el[leaveCbKey](
          true
          /* cancelled */
        );
      }
      const leavingVNode = leavingVNodesCache[key];
      if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el[leaveCbKey]) {
        leavingVNode.el[leaveCbKey]();
      }
      callHook2(hook, [el]);
    },
    enter(el) {
      if (leavingVNodesCache[key] === vnode) return;
      let hook = onEnter;
      let afterHook = onAfterEnter;
      let cancelHook = onEnterCancelled;
      if (!state2.isMounted) {
        if (appear) {
          hook = onAppear || onEnter;
          afterHook = onAfterAppear || onAfterEnter;
          cancelHook = onAppearCancelled || onEnterCancelled;
        } else {
          return;
        }
      }
      let called = false;
      el[enterCbKey$1] = (cancelled) => {
        if (called) return;
        called = true;
        if (cancelled) {
          callHook2(cancelHook, [el]);
        } else {
          callHook2(afterHook, [el]);
        }
        if (hooks.delayedLeave) {
          hooks.delayedLeave();
        }
        el[enterCbKey$1] = void 0;
      };
      const done = el[enterCbKey$1].bind(null, false);
      if (hook) {
        callAsyncHook(hook, [el, done]);
      } else {
        done();
      }
    },
    leave(el, remove2) {
      const key2 = String(vnode.key);
      if (el[enterCbKey$1]) {
        el[enterCbKey$1](
          true
          /* cancelled */
        );
      }
      if (state2.isUnmounting) {
        return remove2();
      }
      callHook2(onBeforeLeave, [el]);
      let called = false;
      el[leaveCbKey] = (cancelled) => {
        if (called) return;
        called = true;
        remove2();
        if (cancelled) {
          callHook2(onLeaveCancelled, [el]);
        } else {
          callHook2(onAfterLeave, [el]);
        }
        el[leaveCbKey] = void 0;
        if (leavingVNodesCache[key2] === vnode) {
          delete leavingVNodesCache[key2];
        }
      };
      const done = el[leaveCbKey].bind(null, false);
      leavingVNodesCache[key2] = vnode;
      if (onLeave) {
        callAsyncHook(onLeave, [el, done]);
      } else {
        done();
      }
    },
    clone(vnode2) {
      const hooks2 = resolveTransitionHooks(
        vnode2,
        props,
        state2,
        instance,
        postClone
      );
      if (postClone) postClone(hooks2);
      return hooks2;
    }
  };
  return hooks;
}
function emptyPlaceholder(vnode) {
  if (isKeepAlive(vnode)) {
    vnode = cloneVNode(vnode);
    vnode.children = null;
    return vnode;
  }
}
function getInnerChild$1(vnode) {
  if (!isKeepAlive(vnode)) {
    if (isTeleport(vnode.type) && vnode.children) {
      return findNonCommentChild(vnode.children);
    }
    return vnode;
  }
  if (vnode.component) {
    return vnode.component.subTree;
  }
  const { shapeFlag, children } = vnode;
  if (children) {
    if (shapeFlag & 16) {
      return children[0];
    }
    if (shapeFlag & 32 && isFunction(children.default)) {
      return children.default();
    }
  }
}
function setTransitionHooks(vnode, hooks) {
  if (vnode.shapeFlag & 6 && vnode.component) {
    vnode.transition = hooks;
    setTransitionHooks(vnode.component.subTree, hooks);
  } else if (vnode.shapeFlag & 128) {
    vnode.ssContent.transition = hooks.clone(vnode.ssContent);
    vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
  } else {
    vnode.transition = hooks;
  }
}
function getTransitionRawChildren(children, keepComment = false, parentKey) {
  let ret = [];
  let keyedFragmentCount = 0;
  for (let i = 0; i < children.length; i++) {
    let child = children[i];
    const key = parentKey == null ? child.key : String(parentKey) + String(child.key != null ? child.key : i);
    if (child.type === Fragment) {
      if (child.patchFlag & 128) keyedFragmentCount++;
      ret = ret.concat(
        getTransitionRawChildren(child.children, keepComment, key)
      );
    } else if (keepComment || child.type !== Comment) {
      ret.push(key != null ? cloneVNode(child, { key }) : child);
    }
  }
  if (keyedFragmentCount > 1) {
    for (let i = 0; i < ret.length; i++) {
      ret[i].patchFlag = -2;
    }
  }
  return ret;
}
// @__NO_SIDE_EFFECTS__
function defineComponent(options, extraOptions) {
  return isFunction(options) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => extend({ name: options.name }, extraOptions, { setup: options }))()
  ) : options;
}
function useId() {
  const i = getCurrentInstance();
  if (i) {
    return (i.appContext.config.idPrefix || "v") + "-" + i.ids[0] + i.ids[1]++;
  }
  return "";
}
function markAsyncBoundary(instance) {
  instance.ids = [instance.ids[0] + instance.ids[2]++ + "-", 0, 0];
}
function useTemplateRef(key) {
  const i = getCurrentInstance();
  const r = /* @__PURE__ */ shallowRef(null);
  if (i) {
    const refs = i.refs === EMPTY_OBJ ? i.refs = {} : i.refs;
    {
      Object.defineProperty(refs, key, {
        enumerable: true,
        get: () => r.value,
        set: (val) => r.value = val
      });
    }
  }
  const ret = r;
  return ret;
}
function isTemplateRefKey(refs, key) {
  let desc;
  return !!((desc = Object.getOwnPropertyDescriptor(refs, key)) && !desc.configurable);
}
const pendingSetRefMap = /* @__PURE__ */ new WeakMap();
function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
  if (isArray(rawRef)) {
    rawRef.forEach(
      (r, i) => setRef(
        r,
        oldRawRef && (isArray(oldRawRef) ? oldRawRef[i] : oldRawRef),
        parentSuspense,
        vnode,
        isUnmount
      )
    );
    return;
  }
  if (isAsyncWrapper(vnode) && !isUnmount) {
    if (vnode.shapeFlag & 512 && vnode.type.__asyncResolved && vnode.component.subTree.component) {
      setRef(rawRef, oldRawRef, parentSuspense, vnode.component.subTree);
    }
    return;
  }
  const refValue = vnode.shapeFlag & 4 ? getComponentPublicInstance(vnode.component) : vnode.el;
  const value = isUnmount ? null : refValue;
  const { i: owner, r: ref3 } = rawRef;
  const oldRef = oldRawRef && oldRawRef.r;
  const refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
  const setupState = owner.setupState;
  const rawSetupState = /* @__PURE__ */ toRaw(setupState);
  const canSetSetupRef = setupState === EMPTY_OBJ ? NO : (key) => {
    if (isTemplateRefKey(refs, key)) {
      return false;
    }
    return hasOwn(rawSetupState, key);
  };
  const canSetRef = (ref22, key) => {
    if (key && isTemplateRefKey(refs, key)) {
      return false;
    }
    return true;
  };
  if (oldRef != null && oldRef !== ref3) {
    invalidatePendingSetRef(oldRawRef);
    if (isString(oldRef)) {
      refs[oldRef] = null;
      if (canSetSetupRef(oldRef)) {
        setupState[oldRef] = null;
      }
    } else if (/* @__PURE__ */ isRef(oldRef)) {
      const oldRawRefAtom = oldRawRef;
      if (canSetRef(oldRef, oldRawRefAtom.k)) {
        oldRef.value = null;
      }
      if (oldRawRefAtom.k) refs[oldRawRefAtom.k] = null;
    }
  }
  if (isFunction(ref3)) {
    callWithErrorHandling(ref3, owner, 12, [value, refs]);
  } else {
    const _isString = isString(ref3);
    const _isRef = /* @__PURE__ */ isRef(ref3);
    if (_isString || _isRef) {
      const doSet = () => {
        if (rawRef.f) {
          const existing = _isString ? canSetSetupRef(ref3) ? setupState[ref3] : refs[ref3] : canSetRef() || !rawRef.k ? ref3.value : refs[rawRef.k];
          if (isUnmount) {
            isArray(existing) && remove(existing, refValue);
          } else {
            if (!isArray(existing)) {
              if (_isString) {
                refs[ref3] = [refValue];
                if (canSetSetupRef(ref3)) {
                  setupState[ref3] = refs[ref3];
                }
              } else {
                const newVal = [refValue];
                if (canSetRef(ref3, rawRef.k)) {
                  ref3.value = newVal;
                }
                if (rawRef.k) refs[rawRef.k] = newVal;
              }
            } else if (!existing.includes(refValue)) {
              existing.push(refValue);
            }
          }
        } else if (_isString) {
          refs[ref3] = value;
          if (canSetSetupRef(ref3)) {
            setupState[ref3] = value;
          }
        } else if (_isRef) {
          if (canSetRef(ref3, rawRef.k)) {
            ref3.value = value;
          }
          if (rawRef.k) refs[rawRef.k] = value;
        } else ;
      };
      if (value) {
        const job = () => {
          doSet();
          pendingSetRefMap.delete(rawRef);
        };
        job.id = -1;
        pendingSetRefMap.set(rawRef, job);
        queuePostRenderEffect(job, parentSuspense);
      } else {
        invalidatePendingSetRef(rawRef);
        doSet();
      }
    }
  }
}
function invalidatePendingSetRef(rawRef) {
  const pendingSetRef = pendingSetRefMap.get(rawRef);
  if (pendingSetRef) {
    pendingSetRef.flags |= 8;
    pendingSetRefMap.delete(rawRef);
  }
}
let hasLoggedMismatchError = false;
const logMismatchError = () => {
  if (hasLoggedMismatchError) {
    return;
  }
  console.error("Hydration completed but contains mismatches.");
  hasLoggedMismatchError = true;
};
const isSVGContainer = (container) => container.namespaceURI.includes("svg") && container.tagName !== "foreignObject";
const isMathMLContainer = (container) => container.namespaceURI.includes("MathML");
const getContainerType = (container) => {
  if (container.nodeType !== 1) return void 0;
  if (isSVGContainer(container)) return "svg";
  if (isMathMLContainer(container)) return "mathml";
  return void 0;
};
const isComment = (node) => node.nodeType === 8;
function createHydrationFunctions(rendererInternals) {
  const {
    mt: mountComponent,
    p: patch,
    o: {
      patchProp: patchProp2,
      createText,
      nextSibling,
      parentNode,
      remove: remove2,
      insert,
      createComment
    }
  } = rendererInternals;
  const hydrate2 = (vnode, container) => {
    if (!container.hasChildNodes()) {
      patch(null, vnode, container);
      flushPostFlushCbs();
      container._vnode = vnode;
      return;
    }
    hydrateNode(container.firstChild, vnode, null, null, null);
    flushPostFlushCbs();
    container._vnode = vnode;
  };
  const hydrateNode = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized = false) => {
    optimized = optimized || !!vnode.dynamicChildren;
    const isFragmentStart = isComment(node) && node.data === "[";
    const onMismatch = () => handleMismatch(
      node,
      vnode,
      parentComponent,
      parentSuspense,
      slotScopeIds,
      isFragmentStart
    );
    const { type, ref: ref3, shapeFlag, patchFlag } = vnode;
    let domType = node.nodeType;
    vnode.el = node;
    if (patchFlag === -2) {
      optimized = false;
      vnode.dynamicChildren = null;
    }
    let nextNode = null;
    switch (type) {
      case Text:
        if (domType !== 3) {
          if (vnode.children === "") {
            insert(vnode.el = createText(""), parentNode(node), node);
            nextNode = node;
          } else {
            nextNode = onMismatch();
          }
        } else {
          if (node.data !== vnode.children) {
            logMismatchError();
            node.data = vnode.children;
          }
          nextNode = nextSibling(node);
        }
        break;
      case Comment:
        if (isTemplateNode(node)) {
          nextNode = nextSibling(node);
          replaceNode(
            vnode.el = node.content.firstChild,
            node,
            parentComponent
          );
        } else if (domType !== 8 || isFragmentStart) {
          nextNode = onMismatch();
        } else {
          nextNode = nextSibling(node);
        }
        break;
      case Static:
        if (isFragmentStart) {
          node = nextSibling(node);
          domType = node.nodeType;
        }
        if (domType === 1 || domType === 3) {
          nextNode = node;
          const needToAdoptContent = !vnode.children.length;
          for (let i = 0; i < vnode.staticCount; i++) {
            if (needToAdoptContent)
              vnode.children += nextNode.nodeType === 1 ? nextNode.outerHTML : nextNode.data;
            if (i === vnode.staticCount - 1) {
              vnode.anchor = nextNode;
            }
            nextNode = nextSibling(nextNode);
          }
          return isFragmentStart ? nextSibling(nextNode) : nextNode;
        } else {
          onMismatch();
        }
        break;
      case Fragment:
        if (!isFragmentStart) {
          nextNode = onMismatch();
        } else {
          nextNode = hydrateFragment(
            node,
            vnode,
            parentComponent,
            parentSuspense,
            slotScopeIds,
            optimized
          );
        }
        break;
      default:
        if (shapeFlag & 1) {
          if ((domType !== 1 || vnode.type.toLowerCase() !== node.tagName.toLowerCase()) && !isTemplateNode(node)) {
            nextNode = onMismatch();
          } else {
            nextNode = hydrateElement(
              node,
              vnode,
              parentComponent,
              parentSuspense,
              slotScopeIds,
              optimized
            );
          }
        } else if (shapeFlag & 6) {
          vnode.slotScopeIds = slotScopeIds;
          const container = parentNode(node);
          if (isFragmentStart) {
            nextNode = locateClosingAnchor(node);
          } else if (isComment(node) && node.data === "teleport start") {
            nextNode = locateClosingAnchor(node, node.data, "teleport end");
          } else {
            nextNode = nextSibling(node);
          }
          mountComponent(
            vnode,
            container,
            null,
            parentComponent,
            parentSuspense,
            getContainerType(container),
            optimized
          );
          if (isAsyncWrapper(vnode) && !vnode.type.__asyncResolved) {
            let subTree;
            if (isFragmentStart) {
              subTree = createVNode(Fragment);
              subTree.anchor = nextNode ? nextNode.previousSibling : container.lastChild;
            } else {
              subTree = node.nodeType === 3 ? createTextVNode("") : createVNode("div");
            }
            subTree.el = node;
            vnode.component.subTree = subTree;
          }
        } else if (shapeFlag & 64) {
          if (domType !== 8) {
            nextNode = onMismatch();
          } else {
            nextNode = vnode.type.hydrate(
              node,
              vnode,
              parentComponent,
              parentSuspense,
              slotScopeIds,
              optimized,
              rendererInternals,
              hydrateChildren
            );
          }
        } else if (shapeFlag & 128) {
          nextNode = vnode.type.hydrate(
            node,
            vnode,
            parentComponent,
            parentSuspense,
            getContainerType(parentNode(node)),
            slotScopeIds,
            optimized,
            rendererInternals,
            hydrateNode
          );
        } else ;
    }
    if (ref3 != null) {
      setRef(ref3, null, parentSuspense, vnode);
    }
    return nextNode;
  };
  const hydrateElement = (el, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
    optimized = optimized || !!vnode.dynamicChildren;
    const { type, props, patchFlag, shapeFlag, dirs, transition } = vnode;
    const forcePatch = type === "input" || type === "option";
    if (forcePatch || patchFlag !== -1) {
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "created");
      }
      let needCallTransitionHooks = false;
      if (isTemplateNode(el)) {
        needCallTransitionHooks = needTransition(
          null,
          // no need check parentSuspense in hydration
          transition
        ) && parentComponent && parentComponent.vnode.props && parentComponent.vnode.props.appear;
        const content = el.content.firstChild;
        if (needCallTransitionHooks) {
          const cls = content.getAttribute("class");
          if (cls) content.$cls = cls;
          transition.beforeEnter(content);
        }
        replaceNode(content, el, parentComponent);
        vnode.el = el = content;
      }
      if (shapeFlag & 16 && // skip if element has innerHTML / textContent
      !(props && (props.innerHTML || props.textContent))) {
        let next = hydrateChildren(
          el.firstChild,
          vnode,
          el,
          parentComponent,
          parentSuspense,
          slotScopeIds,
          optimized
        );
        while (next) {
          if (!isMismatchAllowed(
            el,
            1
            /* CHILDREN */
          )) {
            logMismatchError();
          }
          const cur = next;
          next = next.nextSibling;
          remove2(cur);
        }
      } else if (shapeFlag & 8) {
        let clientText = vnode.children;
        if (clientText[0] === "\n" && (el.tagName === "PRE" || el.tagName === "TEXTAREA")) {
          clientText = clientText.slice(1);
        }
        const { textContent } = el;
        if (textContent !== clientText && // innerHTML normalize \r\n or \r into a single \n in the DOM
        textContent !== clientText.replace(/\r\n|\r/g, "\n")) {
          if (!isMismatchAllowed(
            el,
            0
            /* TEXT */
          )) {
            logMismatchError();
          }
          el.textContent = vnode.children;
        }
      }
      if (props) {
        if (forcePatch || !optimized || patchFlag & (16 | 32)) {
          const isCustomElement = el.tagName.includes("-");
          for (const key in props) {
            if (forcePatch && (key.endsWith("value") || key === "indeterminate") || isOn(key) && !isReservedProp(key) || // force hydrate v-bind with .prop modifiers
            key[0] === "." || isCustomElement && !isReservedProp(key)) {
              patchProp2(el, key, null, props[key], void 0, parentComponent);
            }
          }
        } else if (props.onClick) {
          patchProp2(
            el,
            "onClick",
            null,
            props.onClick,
            void 0,
            parentComponent
          );
        } else if (patchFlag & 4 && /* @__PURE__ */ isReactive(props.style)) {
          for (const key in props.style) props.style[key];
        }
      }
      let vnodeHooks;
      if (vnodeHooks = props && props.onVnodeBeforeMount) {
        invokeVNodeHook(vnodeHooks, parentComponent, vnode);
      }
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
      }
      if ((vnodeHooks = props && props.onVnodeMounted) || dirs || needCallTransitionHooks) {
        queueEffectWithSuspense(() => {
          vnodeHooks && invokeVNodeHook(vnodeHooks, parentComponent, vnode);
          needCallTransitionHooks && transition.enter(el);
          dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
        }, parentSuspense);
      }
    }
    return el.nextSibling;
  };
  const hydrateChildren = (node, parentVNode, container, parentComponent, parentSuspense, slotScopeIds, optimized) => {
    optimized = optimized || !!parentVNode.dynamicChildren;
    const children = parentVNode.children;
    const l = children.length;
    for (let i = 0; i < l; i++) {
      const vnode = optimized ? children[i] : children[i] = normalizeVNode(children[i]);
      const isText = vnode.type === Text;
      if (node) {
        if (isText && !optimized) {
          if (i + 1 < l && normalizeVNode(children[i + 1]).type === Text) {
            insert(
              createText(
                node.data.slice(vnode.children.length)
              ),
              container,
              nextSibling(node)
            );
            node.data = vnode.children;
          }
        }
        node = hydrateNode(
          node,
          vnode,
          parentComponent,
          parentSuspense,
          slotScopeIds,
          optimized
        );
      } else if (isText && !vnode.children) {
        insert(vnode.el = createText(""), container);
      } else {
        if (!isMismatchAllowed(
          container,
          1
          /* CHILDREN */
        )) {
          logMismatchError();
        }
        patch(
          null,
          vnode,
          container,
          null,
          parentComponent,
          parentSuspense,
          getContainerType(container),
          slotScopeIds
        );
      }
    }
    return node;
  };
  const hydrateFragment = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
    const { slotScopeIds: fragmentSlotScopeIds } = vnode;
    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }
    const container = parentNode(node);
    const next = hydrateChildren(
      nextSibling(node),
      vnode,
      container,
      parentComponent,
      parentSuspense,
      slotScopeIds,
      optimized
    );
    if (next && isComment(next) && next.data === "]") {
      return nextSibling(vnode.anchor = next);
    } else {
      logMismatchError();
      insert(vnode.anchor = createComment(`]`), container, next);
      return next;
    }
  };
  const handleMismatch = (node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragment) => {
    if (!isMismatchAllowed(
      node.parentElement,
      1
      /* CHILDREN */
    )) {
      logMismatchError();
    }
    vnode.el = null;
    if (isFragment) {
      const end = locateClosingAnchor(node);
      while (true) {
        const next2 = nextSibling(node);
        if (next2 && next2 !== end) {
          remove2(next2);
        } else {
          break;
        }
      }
    }
    const next = nextSibling(node);
    const container = parentNode(node);
    remove2(node);
    patch(
      null,
      vnode,
      container,
      next,
      parentComponent,
      parentSuspense,
      getContainerType(container),
      slotScopeIds
    );
    if (parentComponent) {
      parentComponent.vnode.el = vnode.el;
      updateHOCHostEl(parentComponent, vnode.el);
    }
    return next;
  };
  const locateClosingAnchor = (node, open = "[", close = "]") => {
    let match = 0;
    while (node) {
      node = nextSibling(node);
      if (node && isComment(node)) {
        if (node.data === open) match++;
        if (node.data === close) {
          if (match === 0) {
            return nextSibling(node);
          } else {
            match--;
          }
        }
      }
    }
    return node;
  };
  const replaceNode = (newNode, oldNode, parentComponent) => {
    const parentNode2 = oldNode.parentNode;
    if (parentNode2) {
      parentNode2.replaceChild(newNode, oldNode);
    }
    let parent = parentComponent;
    while (parent) {
      if (parent.vnode.el === oldNode) {
        parent.vnode.el = parent.subTree.el = newNode;
      }
      parent = parent.parent;
    }
  };
  const isTemplateNode = (node) => {
    return node.nodeType === 1 && node.tagName === "TEMPLATE";
  };
  return [hydrate2, hydrateNode];
}
const allowMismatchAttr = "data-allow-mismatch";
const MismatchTypeString = {
  [
    0
    /* TEXT */
  ]: "text",
  [
    1
    /* CHILDREN */
  ]: "children",
  [
    2
    /* CLASS */
  ]: "class",
  [
    3
    /* STYLE */
  ]: "style",
  [
    4
    /* ATTRIBUTE */
  ]: "attribute"
};
function isMismatchAllowed(el, allowedType) {
  if (allowedType === 0 || allowedType === 1) {
    while (el && !el.hasAttribute(allowMismatchAttr)) {
      el = el.parentElement;
    }
  }
  const allowedAttr = el && el.getAttribute(allowMismatchAttr);
  if (allowedAttr == null) {
    return false;
  } else if (allowedAttr === "") {
    return true;
  } else {
    const list = allowedAttr.split(",");
    if (allowedType === 0 && list.includes("children")) {
      return true;
    }
    return list.includes(MismatchTypeString[allowedType]);
  }
}
const requestIdleCallback = getGlobalThis().requestIdleCallback || ((cb) => setTimeout(cb, 1));
const cancelIdleCallback = getGlobalThis().cancelIdleCallback || ((id) => clearTimeout(id));
const hydrateOnIdle = (timeout = 1e4) => (hydrate2) => {
  const id = requestIdleCallback(hydrate2, { timeout });
  return () => cancelIdleCallback(id);
};
function elementIsVisibleInViewport(el) {
  const { top, left, bottom, right } = el.getBoundingClientRect();
  const { innerHeight, innerWidth } = window;
  return (top > 0 && top < innerHeight || bottom > 0 && bottom < innerHeight) && (left > 0 && left < innerWidth || right > 0 && right < innerWidth);
}
const hydrateOnVisible = (opts) => (hydrate2, forEach) => {
  const ob = new IntersectionObserver((entries2) => {
    for (const e of entries2) {
      if (!e.isIntersecting) continue;
      ob.disconnect();
      hydrate2();
      break;
    }
  }, opts);
  forEach((el) => {
    if (!(el instanceof Element)) return;
    if (elementIsVisibleInViewport(el)) {
      hydrate2();
      ob.disconnect();
      return false;
    }
    ob.observe(el);
  });
  return () => ob.disconnect();
};
const hydrateOnMediaQuery = (query) => (hydrate2) => {
  if (query) {
    const mql = matchMedia(query);
    if (mql.matches) {
      hydrate2();
    } else {
      mql.addEventListener("change", hydrate2, { once: true });
      return () => mql.removeEventListener("change", hydrate2);
    }
  }
};
const hydrateOnInteraction = (interactions = []) => (hydrate2, forEach) => {
  if (isString(interactions)) interactions = [interactions];
  let hasHydrated = false;
  const doHydrate = (e) => {
    if (!hasHydrated) {
      hasHydrated = true;
      teardown();
      hydrate2();
      e.target.dispatchEvent(new e.constructor(e.type, e));
    }
  };
  const teardown = () => {
    forEach((el) => {
      for (const i of interactions) {
        el.removeEventListener(i, doHydrate);
      }
    });
  };
  forEach((el) => {
    for (const i of interactions) {
      el.addEventListener(i, doHydrate, { once: true });
    }
  });
  return teardown;
};
function forEachElement(node, cb) {
  if (isComment(node) && node.data === "[") {
    let depth = 1;
    let next = node.nextSibling;
    while (next) {
      if (next.nodeType === 1) {
        const result = cb(next);
        if (result === false) {
          break;
        }
      } else if (isComment(next)) {
        if (next.data === "]") {
          if (--depth === 0) break;
        } else if (next.data === "[") {
          depth++;
        }
      }
      next = next.nextSibling;
    }
  } else {
    cb(node);
  }
}
const isAsyncWrapper = (i) => !!i.type.__asyncLoader;
// @__NO_SIDE_EFFECTS__
function defineAsyncComponent(source) {
  if (isFunction(source)) {
    source = { loader: source };
  }
  const {
    loader,
    loadingComponent,
    errorComponent,
    delay: delay3 = 200,
    hydrate: hydrateStrategy,
    timeout,
    // undefined = never times out
    suspensible = true,
    onError: userOnError
  } = source;
  let pendingRequest = null;
  let resolvedComp;
  let retries = 0;
  const retry = () => {
    retries++;
    pendingRequest = null;
    return load();
  };
  const load = () => {
    let thisRequest;
    return pendingRequest || (thisRequest = pendingRequest = loader().catch((err) => {
      err = err instanceof Error ? err : new Error(String(err));
      if (userOnError) {
        return new Promise((resolve2, reject) => {
          const userRetry = () => resolve2(retry());
          const userFail = () => reject(err);
          userOnError(err, userRetry, userFail, retries + 1);
        });
      } else {
        throw err;
      }
    }).then((comp) => {
      if (thisRequest !== pendingRequest && pendingRequest) {
        return pendingRequest;
      }
      if (comp && (comp.__esModule || comp[Symbol.toStringTag] === "Module")) {
        comp = comp.default;
      }
      resolvedComp = comp;
      return comp;
    }));
  };
  return /* @__PURE__ */ defineComponent({
    name: "AsyncComponentWrapper",
    __asyncLoader: load,
    __asyncHydrate(el, instance, hydrate2) {
      let patched = false;
      (instance.bu || (instance.bu = [])).push(() => patched = true);
      const performHydrate = () => {
        if (patched) {
          return;
        }
        hydrate2();
      };
      const doHydrate = hydrateStrategy ? () => {
        const teardown = hydrateStrategy(
          performHydrate,
          (cb) => forEachElement(el, cb)
        );
        if (teardown) {
          (instance.bum || (instance.bum = [])).push(teardown);
        }
      } : performHydrate;
      if (resolvedComp) {
        doHydrate();
      } else {
        load().then(() => !instance.isUnmounted && doHydrate());
      }
    },
    get __asyncResolved() {
      return resolvedComp;
    },
    setup() {
      const instance = currentInstance;
      markAsyncBoundary(instance);
      if (resolvedComp) {
        return () => createInnerComp(resolvedComp, instance);
      }
      const onError = (err) => {
        pendingRequest = null;
        handleError(
          err,
          instance,
          13,
          !errorComponent
        );
      };
      if (suspensible && instance.suspense || isInSSRComponentSetup) {
        return load().then((comp) => {
          return () => createInnerComp(comp, instance);
        }).catch((err) => {
          onError(err);
          return () => errorComponent ? createVNode(errorComponent, {
            error: err
          }) : null;
        });
      }
      const loaded = /* @__PURE__ */ ref(false);
      const error = /* @__PURE__ */ ref();
      const delayed = /* @__PURE__ */ ref(!!delay3);
      if (delay3) {
        setTimeout(() => {
          delayed.value = false;
        }, delay3);
      }
      if (timeout != null) {
        setTimeout(() => {
          if (!loaded.value && !error.value) {
            const err = new Error(
              `Async component timed out after ${timeout}ms.`
            );
            onError(err);
            error.value = err;
          }
        }, timeout);
      }
      load().then(() => {
        loaded.value = true;
        if (instance.parent && isKeepAlive(instance.parent.vnode)) {
          instance.parent.update();
        }
      }).catch((err) => {
        onError(err);
        error.value = err;
      });
      return () => {
        if (loaded.value && resolvedComp) {
          return createInnerComp(resolvedComp, instance);
        } else if (error.value && errorComponent) {
          return createVNode(errorComponent, {
            error: error.value
          });
        } else if (loadingComponent && !delayed.value) {
          return createInnerComp(
            loadingComponent,
            instance
          );
        }
      };
    }
  });
}
function createInnerComp(comp, parent) {
  const { ref: ref22, props, children, ce } = parent.vnode;
  const vnode = createVNode(comp, props, children);
  vnode.ref = ref22;
  vnode.ce = ce;
  delete parent.vnode.ce;
  return vnode;
}
const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
const KeepAliveImpl = {
  name: `KeepAlive`,
  // Marker for special handling inside the renderer. We are not using a ===
  // check directly on KeepAlive in the renderer, because importing it directly
  // would prevent it from being tree-shaken.
  __isKeepAlive: true,
  props: {
    include: [String, RegExp, Array],
    exclude: [String, RegExp, Array],
    max: [String, Number]
  },
  setup(props, { slots }) {
    const instance = getCurrentInstance();
    const sharedContext = instance.ctx;
    if (!sharedContext.renderer) {
      return () => {
        const children = slots.default && slots.default();
        return children && children.length === 1 ? children[0] : children;
      };
    }
    const cache = /* @__PURE__ */ new Map();
    const keys = /* @__PURE__ */ new Set();
    let current = null;
    const parentSuspense = instance.suspense;
    const {
      renderer: {
        p: patch,
        m: move,
        um: _unmount,
        o: { createElement }
      }
    } = sharedContext;
    const storageContainer = createElement("div");
    sharedContext.activate = (vnode, container, anchor, namespace, optimized) => {
      const instance2 = vnode.component;
      move(vnode, container, anchor, 0, parentSuspense);
      patch(
        instance2.vnode,
        vnode,
        container,
        anchor,
        instance2,
        parentSuspense,
        namespace,
        vnode.slotScopeIds,
        optimized
      );
      queuePostRenderEffect(() => {
        instance2.isDeactivated = false;
        if (instance2.a) {
          invokeArrayFns(instance2.a);
        }
        const vnodeHook = vnode.props && vnode.props.onVnodeMounted;
        if (vnodeHook) {
          invokeVNodeHook(vnodeHook, instance2.parent, vnode);
        }
      }, parentSuspense);
    };
    sharedContext.deactivate = (vnode) => {
      const instance2 = vnode.component;
      invalidateMount(instance2.m);
      invalidateMount(instance2.a);
      move(vnode, storageContainer, null, 1, parentSuspense);
      queuePostRenderEffect(() => {
        if (instance2.da) {
          invokeArrayFns(instance2.da);
        }
        const vnodeHook = vnode.props && vnode.props.onVnodeUnmounted;
        if (vnodeHook) {
          invokeVNodeHook(vnodeHook, instance2.parent, vnode);
        }
        instance2.isDeactivated = true;
      }, parentSuspense);
    };
    function unmount(vnode) {
      resetShapeFlag(vnode);
      _unmount(vnode, instance, parentSuspense, true);
    }
    function pruneCache(filter) {
      cache.forEach((vnode, key) => {
        const name = getComponentName(
          isAsyncWrapper(vnode) ? vnode.type.__asyncResolved || {} : vnode.type
        );
        if (name && !filter(name)) {
          pruneCacheEntry(key);
        }
      });
    }
    function pruneCacheEntry(key) {
      const cached = cache.get(key);
      if (cached && (!current || !isSameVNodeType(cached, current))) {
        unmount(cached);
      } else if (current) {
        resetShapeFlag(current);
      }
      cache.delete(key);
      keys.delete(key);
    }
    watch(
      () => [props.include, props.exclude],
      ([include, exclude]) => {
        include && pruneCache((name) => matches$1(include, name));
        exclude && pruneCache((name) => !matches$1(exclude, name));
      },
      // prune post-render after `current` has been updated
      { flush: "post", deep: true }
    );
    let pendingCacheKey = null;
    const cacheSubtree = () => {
      if (pendingCacheKey != null) {
        if (isSuspense(instance.subTree.type)) {
          queuePostRenderEffect(() => {
            cache.set(pendingCacheKey, getInnerChild(instance.subTree));
          }, instance.subTree.suspense);
        } else {
          cache.set(pendingCacheKey, getInnerChild(instance.subTree));
        }
      }
    };
    onMounted(cacheSubtree);
    onUpdated(cacheSubtree);
    onBeforeUnmount(() => {
      cache.forEach((cached) => {
        const { subTree, suspense } = instance;
        const vnode = getInnerChild(subTree);
        if (cached.type === vnode.type && cached.key === vnode.key) {
          resetShapeFlag(vnode);
          const da = vnode.component.da;
          da && queuePostRenderEffect(da, suspense);
          return;
        }
        unmount(cached);
      });
    });
    return () => {
      pendingCacheKey = null;
      if (!slots.default) {
        return current = null;
      }
      const children = slots.default();
      const rawVNode = children[0];
      if (children.length > 1) {
        current = null;
        return children;
      } else if (!isVNode(rawVNode) || !(rawVNode.shapeFlag & 4) && !(rawVNode.shapeFlag & 128)) {
        current = null;
        return rawVNode;
      }
      let vnode = getInnerChild(rawVNode);
      if (vnode.type === Comment) {
        current = null;
        return vnode;
      }
      const comp = vnode.type;
      const name = getComponentName(
        isAsyncWrapper(vnode) ? vnode.type.__asyncResolved || {} : comp
      );
      const { include, exclude, max } = props;
      if (include && (!name || !matches$1(include, name)) || exclude && name && matches$1(exclude, name)) {
        vnode.shapeFlag &= -257;
        current = vnode;
        return rawVNode;
      }
      const key = vnode.key == null ? comp : vnode.key;
      const cachedVNode = cache.get(key);
      if (vnode.el) {
        vnode = cloneVNode(vnode);
        if (rawVNode.shapeFlag & 128) {
          rawVNode.ssContent = vnode;
        }
      }
      pendingCacheKey = key;
      if (cachedVNode) {
        vnode.el = cachedVNode.el;
        vnode.component = cachedVNode.component;
        if (vnode.transition) {
          setTransitionHooks(vnode, vnode.transition);
        }
        vnode.shapeFlag |= 512;
        keys.delete(key);
        keys.add(key);
      } else {
        keys.add(key);
        if (max && keys.size > parseInt(max, 10)) {
          pruneCacheEntry(keys.values().next().value);
        }
      }
      vnode.shapeFlag |= 256;
      current = vnode;
      return isSuspense(rawVNode.type) ? rawVNode : vnode;
    };
  }
};
const KeepAlive = KeepAliveImpl;
function matches$1(pattern, name) {
  if (isArray(pattern)) {
    return pattern.some((p2) => matches$1(p2, name));
  } else if (isString(pattern)) {
    return pattern.split(",").includes(name);
  } else if (isRegExp(pattern)) {
    pattern.lastIndex = 0;
    return pattern.test(name);
  }
  return false;
}
function onActivated(hook, target) {
  registerKeepAliveHook(hook, "a", target);
}
function onDeactivated(hook, target) {
  registerKeepAliveHook(hook, "da", target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
  const wrappedHook = hook.__wdc || (hook.__wdc = () => {
    let current = target;
    while (current) {
      if (current.isDeactivated) {
        return;
      }
      current = current.parent;
    }
    return hook();
  });
  injectHook(type, wrappedHook, target);
  if (target) {
    let current = target.parent;
    while (current && current.parent) {
      if (isKeepAlive(current.parent.vnode)) {
        injectToKeepAliveRoot(wrappedHook, type, target, current);
      }
      current = current.parent;
    }
  }
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
  const injected = injectHook(
    type,
    hook,
    keepAliveRoot,
    true
    /* prepend */
  );
  onUnmounted(() => {
    remove(keepAliveRoot[type], injected);
  }, target);
}
function resetShapeFlag(vnode) {
  vnode.shapeFlag &= -257;
  vnode.shapeFlag &= -513;
}
function getInnerChild(vnode) {
  return vnode.shapeFlag & 128 ? vnode.ssContent : vnode;
}
function injectHook(type, hook, target = currentInstance, prepend = false) {
  if (target) {
    const hooks = target[type] || (target[type] = []);
    const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
      pauseTracking();
      const reset = setCurrentInstance(target);
      const res = callWithAsyncErrorHandling(hook, target, type, args);
      reset();
      resetTracking();
      return res;
    });
    if (prepend) {
      hooks.unshift(wrappedHook);
    } else {
      hooks.push(wrappedHook);
    }
    return wrappedHook;
  }
}
const createHook = (lifecycle) => (hook, target = currentInstance) => {
  if (!isInSSRComponentSetup || lifecycle === "sp") {
    injectHook(lifecycle, (...args) => hook(...args), target);
  }
};
const onBeforeMount = createHook("bm");
const onMounted = createHook("m");
const onBeforeUpdate = createHook(
  "bu"
);
const onUpdated = createHook("u");
const onBeforeUnmount = createHook(
  "bum"
);
const onUnmounted = createHook("um");
const onServerPrefetch = createHook(
  "sp"
);
const onRenderTriggered = createHook("rtg");
const onRenderTracked = createHook("rtc");
function onErrorCaptured(hook, target = currentInstance) {
  injectHook("ec", hook, target);
}
const COMPONENTS = "components";
const DIRECTIVES = "directives";
function resolveComponent(name, maybeSelfReference) {
  return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}
const NULL_DYNAMIC_COMPONENT = /* @__PURE__ */ Symbol.for("v-ndc");
function resolveDynamicComponent(component) {
  if (isString(component)) {
    return resolveAsset(COMPONENTS, component, false) || component;
  } else {
    return component || NULL_DYNAMIC_COMPONENT;
  }
}
function resolveDirective(name) {
  return resolveAsset(DIRECTIVES, name);
}
function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
  const instance = currentRenderingInstance || currentInstance;
  if (instance) {
    const Component = instance.type;
    if (type === COMPONENTS) {
      const selfName = getComponentName(
        Component,
        false
      );
      if (selfName && (selfName === name || selfName === camelize(name) || selfName === capitalize(camelize(name)))) {
        return Component;
      }
    }
    const res = (
      // local registration
      // check instance[type] first which is resolved for options API
      resolve(instance[type] || Component[type], name) || // global registration
      resolve(instance.appContext[type], name)
    );
    if (!res && maybeSelfReference) {
      return Component;
    }
    return res;
  }
}
function resolve(registry, name) {
  return registry && (registry[name] || registry[camelize(name)] || registry[capitalize(camelize(name))]);
}
function renderList(source, renderItem, cache, index) {
  let ret;
  const cached = cache && cache[index];
  const sourceIsArray = isArray(source);
  if (sourceIsArray || isString(source)) {
    const sourceIsReactiveArray = sourceIsArray && /* @__PURE__ */ isReactive(source);
    let needsWrap = false;
    let isReadonlySource = false;
    if (sourceIsReactiveArray) {
      needsWrap = !/* @__PURE__ */ isShallow(source);
      isReadonlySource = /* @__PURE__ */ isReadonly(source);
      source = shallowReadArray(source);
    }
    ret = new Array(source.length);
    for (let i = 0, l = source.length; i < l; i++) {
      ret[i] = renderItem(
        needsWrap ? isReadonlySource ? toReadonly(toReactive(source[i])) : toReactive(source[i]) : source[i],
        i,
        void 0,
        cached && cached[i]
      );
    }
  } else if (typeof source === "number") {
    ret = new Array(source);
    for (let i = 0; i < source; i++) {
      ret[i] = renderItem(i + 1, i, void 0, cached && cached[i]);
    }
  } else if (isObject$1(source)) {
    if (source[Symbol.iterator]) {
      ret = Array.from(
        source,
        (item, i) => renderItem(item, i, void 0, cached && cached[i])
      );
    } else {
      const keys = Object.keys(source);
      ret = new Array(keys.length);
      for (let i = 0, l = keys.length; i < l; i++) {
        const key = keys[i];
        ret[i] = renderItem(source[key], key, i, cached && cached[i]);
      }
    }
  } else {
    ret = [];
  }
  if (cache) {
    cache[index] = ret;
  }
  return ret;
}
function createSlots(slots, dynamicSlots) {
  for (let i = 0; i < dynamicSlots.length; i++) {
    const slot = dynamicSlots[i];
    if (isArray(slot)) {
      for (let j2 = 0; j2 < slot.length; j2++) {
        slots[slot[j2].name] = slot[j2].fn;
      }
    } else if (slot) {
      slots[slot.name] = slot.key ? (...args) => {
        const res = slot.fn(...args);
        if (res) res.key = slot.key;
        return res;
      } : slot.fn;
    }
  }
  return slots;
}
function renderSlot(slots, name, props = {}, fallback, noSlotted) {
  if (currentRenderingInstance.ce || currentRenderingInstance.parent && isAsyncWrapper(currentRenderingInstance.parent) && currentRenderingInstance.parent.ce) {
    const hasProps = Object.keys(props).length > 0;
    if (name !== "default") props.name = name;
    return openBlock(), createBlock(
      Fragment,
      null,
      [createVNode("slot", props, fallback && fallback())],
      hasProps ? -2 : 64
    );
  }
  let slot = slots[name];
  if (slot && slot._c) {
    slot._d = false;
  }
  openBlock();
  const validSlotContent = slot && ensureValidVNode(slot(props));
  const slotKey = props.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  validSlotContent && validSlotContent.key;
  const rendered = createBlock(
    Fragment,
    {
      key: (slotKey && !isSymbol(slotKey) ? slotKey : `_${name}`) + // #7256 force differentiate fallback content from actual content
      (!validSlotContent && fallback ? "_fb" : "")
    },
    validSlotContent || (fallback ? fallback() : []),
    validSlotContent && slots._ === 1 ? 64 : -2
  );
  if (!noSlotted && rendered.scopeId) {
    rendered.slotScopeIds = [rendered.scopeId + "-s"];
  }
  if (slot && slot._c) {
    slot._d = true;
  }
  return rendered;
}
function ensureValidVNode(vnodes) {
  return vnodes.some((child) => {
    if (!isVNode(child)) return true;
    if (child.type === Comment) return false;
    if (child.type === Fragment && !ensureValidVNode(child.children))
      return false;
    return true;
  }) ? vnodes : null;
}
function toHandlers(obj, preserveCaseIfNecessary) {
  const ret = {};
  for (const key in obj) {
    ret[preserveCaseIfNecessary && /[A-Z]/.test(key) ? `on:${key}` : toHandlerKey(key)] = obj[key];
  }
  return ret;
}
const getPublicInstance = (i) => {
  if (!i) return null;
  if (isStatefulComponent(i)) return getComponentPublicInstance(i);
  return getPublicInstance(i.parent);
};
const publicPropertiesMap = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ extend(/* @__PURE__ */ Object.create(null), {
    $: (i) => i,
    $el: (i) => i.vnode.el,
    $data: (i) => i.data,
    $props: (i) => i.props,
    $attrs: (i) => i.attrs,
    $slots: (i) => i.slots,
    $refs: (i) => i.refs,
    $parent: (i) => getPublicInstance(i.parent),
    $root: (i) => getPublicInstance(i.root),
    $host: (i) => i.ce,
    $emit: (i) => i.emit,
    $options: (i) => resolveMergedOptions(i),
    $forceUpdate: (i) => i.f || (i.f = () => {
      queueJob(i.update);
    }),
    $nextTick: (i) => i.n || (i.n = nextTick.bind(i.proxy)),
    $watch: (i) => instanceWatch.bind(i)
  })
);
const hasSetupBinding = (state2, key) => state2 !== EMPTY_OBJ && !state2.__isScriptSetup && hasOwn(state2, key);
const PublicInstanceProxyHandlers = {
  get({ _: instance }, key) {
    if (key === "__v_skip") {
      return true;
    }
    const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
    if (key[0] !== "$") {
      const n = accessCache[key];
      if (n !== void 0) {
        switch (n) {
          case 1:
            return setupState[key];
          case 2:
            return data[key];
          case 4:
            return ctx[key];
          case 3:
            return props[key];
        }
      } else if (hasSetupBinding(setupState, key)) {
        accessCache[key] = 1;
        return setupState[key];
      } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
        accessCache[key] = 2;
        return data[key];
      } else if (hasOwn(props, key)) {
        accessCache[key] = 3;
        return props[key];
      } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
        accessCache[key] = 4;
        return ctx[key];
      } else if (shouldCacheAccess) {
        accessCache[key] = 0;
      }
    }
    const publicGetter = publicPropertiesMap[key];
    let cssModule, globalProperties;
    if (publicGetter) {
      if (key === "$attrs") {
        track(instance.attrs, "get", "");
      }
      return publicGetter(instance);
    } else if (
      // css module (injected by vue-loader)
      (cssModule = type.__cssModules) && (cssModule = cssModule[key])
    ) {
      return cssModule;
    } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
      accessCache[key] = 4;
      return ctx[key];
    } else if (
      // global properties
      globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key)
    ) {
      {
        return globalProperties[key];
      }
    } else ;
  },
  set({ _: instance }, key, value) {
    const { data, setupState, ctx } = instance;
    if (hasSetupBinding(setupState, key)) {
      setupState[key] = value;
      return true;
    } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
      data[key] = value;
      return true;
    } else if (hasOwn(instance.props, key)) {
      return false;
    }
    if (key[0] === "$" && key.slice(1) in instance) {
      return false;
    } else {
      {
        ctx[key] = value;
      }
    }
    return true;
  },
  has({
    _: { data, setupState, accessCache, ctx, appContext, props, type }
  }, key) {
    let cssModules;
    return !!(accessCache[key] || data !== EMPTY_OBJ && key[0] !== "$" && hasOwn(data, key) || hasSetupBinding(setupState, key) || hasOwn(props, key) || hasOwn(ctx, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key) || (cssModules = type.__cssModules) && cssModules[key]);
  },
  defineProperty(target, key, descriptor) {
    if (descriptor.get != null) {
      target._.accessCache[key] = 0;
    } else if (hasOwn(descriptor, "value")) {
      this.set(target, key, descriptor.value, null);
    }
    return Reflect.defineProperty(target, key, descriptor);
  }
};
const RuntimeCompiledPublicInstanceProxyHandlers = /* @__PURE__ */ extend({}, PublicInstanceProxyHandlers, {
  get(target, key) {
    if (key === Symbol.unscopables) {
      return;
    }
    return PublicInstanceProxyHandlers.get(target, key, target);
  },
  has(_, key) {
    const has = key[0] !== "_" && !isGloballyAllowed(key);
    return has;
  }
});
function defineProps() {
  return null;
}
function defineEmits() {
  return null;
}
function defineExpose(exposed) {
}
function defineOptions(options) {
}
function defineSlots() {
  return null;
}
function defineModel() {
}
function withDefaults(props, defaults) {
  return null;
}
function useSlots() {
  return getContext().slots;
}
function useAttrs() {
  return getContext().attrs;
}
function getContext(calledFunctionName) {
  const i = getCurrentInstance();
  return i.setupContext || (i.setupContext = createSetupContext(i));
}
function normalizePropsOrEmits(props) {
  return isArray(props) ? props.reduce(
    (normalized, p2) => (normalized[p2] = null, normalized),
    {}
  ) : props;
}
function mergeDefaults(raw, defaults) {
  const props = normalizePropsOrEmits(raw);
  for (const key in defaults) {
    if (key.startsWith("__skip")) continue;
    let opt = props[key];
    if (opt) {
      if (isArray(opt) || isFunction(opt)) {
        opt = props[key] = { type: opt, default: defaults[key] };
      } else {
        opt.default = defaults[key];
      }
    } else if (opt === null) {
      opt = props[key] = { default: defaults[key] };
    } else ;
    if (opt && defaults[`__skip_${key}`]) {
      opt.skipFactory = true;
    }
  }
  return props;
}
function mergeModels(a, b) {
  if (!a || !b) return a || b;
  if (isArray(a) && isArray(b)) return a.concat(b);
  return extend({}, normalizePropsOrEmits(a), normalizePropsOrEmits(b));
}
function createPropsRestProxy(props, excludedKeys) {
  const ret = {};
  for (const key in props) {
    if (!excludedKeys.includes(key)) {
      Object.defineProperty(ret, key, {
        enumerable: true,
        get: () => props[key]
      });
    }
  }
  return ret;
}
function withAsyncContext(getAwaitable) {
  const ctx = getCurrentInstance();
  let awaitable = getAwaitable();
  unsetCurrentInstance();
  const cleanup = () => {
    if (getCurrentInstance() !== ctx) ctx.scope.off();
    unsetCurrentInstance();
  };
  if (isPromise(awaitable)) {
    awaitable = awaitable.catch((e) => {
      setCurrentInstance(ctx);
      Promise.resolve().then(() => Promise.resolve().then(cleanup));
      throw e;
    });
  }
  return [
    awaitable,
    () => {
      setCurrentInstance(ctx);
      Promise.resolve().then(cleanup);
    }
  ];
}
let shouldCacheAccess = true;
function applyOptions(instance) {
  const options = resolveMergedOptions(instance);
  const publicThis = instance.proxy;
  const ctx = instance.ctx;
  shouldCacheAccess = false;
  if (options.beforeCreate) {
    callHook$1(options.beforeCreate, instance, "bc");
  }
  const {
    // state
    data: dataOptions,
    computed: computedOptions,
    methods,
    watch: watchOptions,
    provide: provideOptions,
    inject: injectOptions,
    // lifecycle
    created,
    beforeMount,
    mounted,
    beforeUpdate,
    updated,
    activated,
    deactivated,
    beforeDestroy,
    beforeUnmount,
    destroyed,
    unmounted,
    render: render2,
    renderTracked,
    renderTriggered,
    errorCaptured,
    serverPrefetch,
    // public API
    expose,
    inheritAttrs,
    // assets
    components,
    directives,
    filters
  } = options;
  const checkDuplicateProperties = null;
  if (injectOptions) {
    resolveInjections(injectOptions, ctx, checkDuplicateProperties);
  }
  if (methods) {
    for (const key in methods) {
      const methodHandler = methods[key];
      if (isFunction(methodHandler)) {
        {
          ctx[key] = methodHandler.bind(publicThis);
        }
      }
    }
  }
  if (dataOptions) {
    const data = dataOptions.call(publicThis, publicThis);
    if (!isObject$1(data)) ;
    else {
      instance.data = /* @__PURE__ */ reactive(data);
    }
  }
  shouldCacheAccess = true;
  if (computedOptions) {
    for (const key in computedOptions) {
      const opt = computedOptions[key];
      const get = isFunction(opt) ? opt.bind(publicThis, publicThis) : isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
      const set = !isFunction(opt) && isFunction(opt.set) ? opt.set.bind(publicThis) : NOOP;
      const c = computed({
        get,
        set
      });
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => c.value,
        set: (v) => c.value = v
      });
    }
  }
  if (watchOptions) {
    for (const key in watchOptions) {
      createWatcher(watchOptions[key], ctx, publicThis, key);
    }
  }
  if (provideOptions) {
    const provides = isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
    Reflect.ownKeys(provides).forEach((key) => {
      provide(key, provides[key]);
    });
  }
  if (created) {
    callHook$1(created, instance, "c");
  }
  function registerLifecycleHook(register, hook) {
    if (isArray(hook)) {
      hook.forEach((_hook) => register(_hook.bind(publicThis)));
    } else if (hook) {
      register(hook.bind(publicThis));
    }
  }
  registerLifecycleHook(onBeforeMount, beforeMount);
  registerLifecycleHook(onMounted, mounted);
  registerLifecycleHook(onBeforeUpdate, beforeUpdate);
  registerLifecycleHook(onUpdated, updated);
  registerLifecycleHook(onActivated, activated);
  registerLifecycleHook(onDeactivated, deactivated);
  registerLifecycleHook(onErrorCaptured, errorCaptured);
  registerLifecycleHook(onRenderTracked, renderTracked);
  registerLifecycleHook(onRenderTriggered, renderTriggered);
  registerLifecycleHook(onBeforeUnmount, beforeUnmount);
  registerLifecycleHook(onUnmounted, unmounted);
  registerLifecycleHook(onServerPrefetch, serverPrefetch);
  if (isArray(expose)) {
    if (expose.length) {
      const exposed = instance.exposed || (instance.exposed = {});
      expose.forEach((key) => {
        Object.defineProperty(exposed, key, {
          get: () => publicThis[key],
          set: (val) => publicThis[key] = val,
          enumerable: true
        });
      });
    } else if (!instance.exposed) {
      instance.exposed = {};
    }
  }
  if (render2 && instance.render === NOOP) {
    instance.render = render2;
  }
  if (inheritAttrs != null) {
    instance.inheritAttrs = inheritAttrs;
  }
  if (components) instance.components = components;
  if (directives) instance.directives = directives;
  if (serverPrefetch) {
    markAsyncBoundary(instance);
  }
}
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP) {
  if (isArray(injectOptions)) {
    injectOptions = normalizeInject(injectOptions);
  }
  for (const key in injectOptions) {
    const opt = injectOptions[key];
    let injected;
    if (isObject$1(opt)) {
      if ("default" in opt) {
        injected = inject(
          opt.from || key,
          opt.default,
          true
        );
      } else {
        injected = inject(opt.from || key);
      }
    } else {
      injected = inject(opt);
    }
    if (/* @__PURE__ */ isRef(injected)) {
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => injected.value,
        set: (v) => injected.value = v
      });
    } else {
      ctx[key] = injected;
    }
  }
}
function callHook$1(hook, instance, type) {
  callWithAsyncErrorHandling(
    isArray(hook) ? hook.map((h2) => h2.bind(instance.proxy)) : hook.bind(instance.proxy),
    instance,
    type
  );
}
function createWatcher(raw, ctx, publicThis, key) {
  let getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
  if (isString(raw)) {
    const handler = ctx[raw];
    if (isFunction(handler)) {
      {
        watch(getter, handler);
      }
    }
  } else if (isFunction(raw)) {
    {
      watch(getter, raw.bind(publicThis));
    }
  } else if (isObject$1(raw)) {
    if (isArray(raw)) {
      raw.forEach((r) => createWatcher(r, ctx, publicThis, key));
    } else {
      const handler = isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
      if (isFunction(handler)) {
        watch(getter, handler, raw);
      }
    }
  } else ;
}
function resolveMergedOptions(instance) {
  const base = instance.type;
  const { mixins, extends: extendsOptions } = base;
  const {
    mixins: globalMixins,
    optionsCache: cache,
    config: { optionMergeStrategies }
  } = instance.appContext;
  const cached = cache.get(base);
  let resolved;
  if (cached) {
    resolved = cached;
  } else if (!globalMixins.length && !mixins && !extendsOptions) {
    {
      resolved = base;
    }
  } else {
    resolved = {};
    if (globalMixins.length) {
      globalMixins.forEach(
        (m) => mergeOptions(resolved, m, optionMergeStrategies, true)
      );
    }
    mergeOptions(resolved, base, optionMergeStrategies);
  }
  if (isObject$1(base)) {
    cache.set(base, resolved);
  }
  return resolved;
}
function mergeOptions(to, from, strats, asMixin = false) {
  const { mixins, extends: extendsOptions } = from;
  if (extendsOptions) {
    mergeOptions(to, extendsOptions, strats, true);
  }
  if (mixins) {
    mixins.forEach(
      (m) => mergeOptions(to, m, strats, true)
    );
  }
  for (const key in from) {
    if (asMixin && key === "expose") ;
    else {
      const strat = internalOptionMergeStrats[key] || strats && strats[key];
      to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
  }
  return to;
}
const internalOptionMergeStrats = {
  data: mergeDataFn,
  props: mergeEmitsOrPropsOptions,
  emits: mergeEmitsOrPropsOptions,
  // objects
  methods: mergeObjectOptions,
  computed: mergeObjectOptions,
  // lifecycle
  beforeCreate: mergeAsArray,
  created: mergeAsArray,
  beforeMount: mergeAsArray,
  mounted: mergeAsArray,
  beforeUpdate: mergeAsArray,
  updated: mergeAsArray,
  beforeDestroy: mergeAsArray,
  beforeUnmount: mergeAsArray,
  destroyed: mergeAsArray,
  unmounted: mergeAsArray,
  activated: mergeAsArray,
  deactivated: mergeAsArray,
  errorCaptured: mergeAsArray,
  serverPrefetch: mergeAsArray,
  // assets
  components: mergeObjectOptions,
  directives: mergeObjectOptions,
  // watch
  watch: mergeWatchOptions,
  // provide / inject
  provide: mergeDataFn,
  inject: mergeInject
};
function mergeDataFn(to, from) {
  if (!from) {
    return to;
  }
  if (!to) {
    return from;
  }
  return function mergedDataFn() {
    return extend(
      isFunction(to) ? to.call(this, this) : to,
      isFunction(from) ? from.call(this, this) : from
    );
  };
}
function mergeInject(to, from) {
  return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
  if (isArray(raw)) {
    const res = {};
    for (let i = 0; i < raw.length; i++) {
      res[raw[i]] = raw[i];
    }
    return res;
  }
  return raw;
}
function mergeAsArray(to, from) {
  return to ? [...new Set([].concat(to, from))] : from;
}
function mergeObjectOptions(to, from) {
  return to ? extend(/* @__PURE__ */ Object.create(null), to, from) : from;
}
function mergeEmitsOrPropsOptions(to, from) {
  if (to) {
    if (isArray(to) && isArray(from)) {
      return [.../* @__PURE__ */ new Set([...to, ...from])];
    }
    return extend(
      /* @__PURE__ */ Object.create(null),
      normalizePropsOrEmits(to),
      normalizePropsOrEmits(from != null ? from : {})
    );
  } else {
    return from;
  }
}
function mergeWatchOptions(to, from) {
  if (!to) return from;
  if (!from) return to;
  const merged = extend(/* @__PURE__ */ Object.create(null), to);
  for (const key in from) {
    merged[key] = mergeAsArray(to[key], from[key]);
  }
  return merged;
}
function createAppContext() {
  return {
    app: null,
    config: {
      isNativeTag: NO,
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let uid$1 = 0;
function createAppAPI(render2, hydrate2) {
  return function createApp2(rootComponent, rootProps = null) {
    if (!isFunction(rootComponent)) {
      rootComponent = extend({}, rootComponent);
    }
    if (rootProps != null && !isObject$1(rootProps)) {
      rootProps = null;
    }
    const context = createAppContext();
    const installedPlugins = /* @__PURE__ */ new WeakSet();
    const pluginCleanupFns = [];
    let isMounted = false;
    const app = context.app = {
      _uid: uid$1++,
      _component: rootComponent,
      _props: rootProps,
      _container: null,
      _context: context,
      _instance: null,
      version,
      get config() {
        return context.config;
      },
      set config(v) {
      },
      use(plugin, ...options) {
        if (installedPlugins.has(plugin)) ;
        else if (plugin && isFunction(plugin.install)) {
          installedPlugins.add(plugin);
          plugin.install(app, ...options);
        } else if (isFunction(plugin)) {
          installedPlugins.add(plugin);
          plugin(app, ...options);
        } else ;
        return app;
      },
      mixin(mixin) {
        {
          if (!context.mixins.includes(mixin)) {
            context.mixins.push(mixin);
          }
        }
        return app;
      },
      component(name, component) {
        if (!component) {
          return context.components[name];
        }
        context.components[name] = component;
        return app;
      },
      directive(name, directive) {
        if (!directive) {
          return context.directives[name];
        }
        context.directives[name] = directive;
        return app;
      },
      mount(rootContainer, isHydrate, namespace) {
        if (!isMounted) {
          const vnode = app._ceVNode || createVNode(rootComponent, rootProps);
          vnode.appContext = context;
          if (namespace === true) {
            namespace = "svg";
          } else if (namespace === false) {
            namespace = void 0;
          }
          if (isHydrate && hydrate2) {
            hydrate2(vnode, rootContainer);
          } else {
            render2(vnode, rootContainer, namespace);
          }
          isMounted = true;
          app._container = rootContainer;
          rootContainer.__vue_app__ = app;
          return getComponentPublicInstance(vnode.component);
        }
      },
      onUnmount(cleanupFn) {
        pluginCleanupFns.push(cleanupFn);
      },
      unmount() {
        if (isMounted) {
          callWithAsyncErrorHandling(
            pluginCleanupFns,
            app._instance,
            16
          );
          render2(null, app._container);
          delete app._container.__vue_app__;
        }
      },
      provide(key, value) {
        context.provides[key] = value;
        return app;
      },
      runWithContext(fn) {
        const lastApp = currentApp;
        currentApp = app;
        try {
          return fn();
        } finally {
          currentApp = lastApp;
        }
      }
    };
    return app;
  };
}
let currentApp = null;
function useModel(props, name, options = EMPTY_OBJ) {
  const i = getCurrentInstance();
  const camelizedName = camelize(name);
  const hyphenatedName = hyphenate(name);
  const modifiers = getModelModifiers(props, camelizedName);
  const res = customRef((track2, trigger2) => {
    let localValue;
    let prevSetValue = EMPTY_OBJ;
    let prevEmittedValue;
    watchSyncEffect(() => {
      const propValue = props[camelizedName];
      if (hasChanged(localValue, propValue)) {
        localValue = propValue;
        trigger2();
      }
    });
    return {
      get() {
        track2();
        return options.get ? options.get(localValue) : localValue;
      },
      set(value) {
        const emittedValue = options.set ? options.set(value) : value;
        if (!hasChanged(emittedValue, localValue) && !(prevSetValue !== EMPTY_OBJ && hasChanged(value, prevSetValue))) {
          return;
        }
        const rawProps = i.vnode.props;
        if (!(rawProps && // check if parent has passed v-model
        (name in rawProps || camelizedName in rawProps || hyphenatedName in rawProps) && (`onUpdate:${name}` in rawProps || `onUpdate:${camelizedName}` in rawProps || `onUpdate:${hyphenatedName}` in rawProps))) {
          localValue = value;
          trigger2();
        }
        i.emit(`update:${name}`, emittedValue);
        if (hasChanged(value, emittedValue) && hasChanged(value, prevSetValue) && !hasChanged(emittedValue, prevEmittedValue)) {
          trigger2();
        }
        prevSetValue = value;
        prevEmittedValue = emittedValue;
      }
    };
  });
  res[Symbol.iterator] = () => {
    let i2 = 0;
    return {
      next() {
        if (i2 < 2) {
          return { value: i2++ ? modifiers || EMPTY_OBJ : res, done: false };
        } else {
          return { done: true };
        }
      }
    };
  };
  return res;
}
const getModelModifiers = (props, modelName) => {
  return modelName === "modelValue" || modelName === "model-value" ? props.modelModifiers : props[`${modelName}Modifiers`] || props[`${camelize(modelName)}Modifiers`] || props[`${hyphenate(modelName)}Modifiers`];
};
function emit(instance, event, ...rawArgs) {
  if (instance.isUnmounted) return;
  const props = instance.vnode.props || EMPTY_OBJ;
  let args = rawArgs;
  const isModelListener2 = event.startsWith("update:");
  const modifiers = isModelListener2 && getModelModifiers(props, event.slice(7));
  if (modifiers) {
    if (modifiers.trim) {
      args = rawArgs.map((a) => isString(a) ? a.trim() : a);
    }
    if (modifiers.number) {
      args = rawArgs.map(looseToNumber);
    }
  }
  let handlerName;
  let handler = props[handlerName = toHandlerKey(event)] || // also try camelCase event handler (#2249)
  props[handlerName = toHandlerKey(camelize(event))];
  if (!handler && isModelListener2) {
    handler = props[handlerName = toHandlerKey(hyphenate(event))];
  }
  if (handler) {
    callWithAsyncErrorHandling(
      handler,
      instance,
      6,
      args
    );
  }
  const onceHandler = props[handlerName + `Once`];
  if (onceHandler) {
    if (!instance.emitted) {
      instance.emitted = {};
    } else if (instance.emitted[handlerName]) {
      return;
    }
    instance.emitted[handlerName] = true;
    callWithAsyncErrorHandling(
      onceHandler,
      instance,
      6,
      args
    );
  }
}
const mixinEmitsCache = /* @__PURE__ */ new WeakMap();
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
  const cache = asMixin ? mixinEmitsCache : appContext.emitsCache;
  const cached = cache.get(comp);
  if (cached !== void 0) {
    return cached;
  }
  const raw = comp.emits;
  let normalized = {};
  let hasExtends = false;
  if (!isFunction(comp)) {
    const extendEmits = (raw2) => {
      const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
      if (normalizedFromExtend) {
        hasExtends = true;
        extend(normalized, normalizedFromExtend);
      }
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendEmits);
    }
    if (comp.extends) {
      extendEmits(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendEmits);
    }
  }
  if (!raw && !hasExtends) {
    if (isObject$1(comp)) {
      cache.set(comp, null);
    }
    return null;
  }
  if (isArray(raw)) {
    raw.forEach((key) => normalized[key] = null);
  } else {
    extend(normalized, raw);
  }
  if (isObject$1(comp)) {
    cache.set(comp, normalized);
  }
  return normalized;
}
function isEmitListener(options, key) {
  if (!options || !isOn(key)) {
    return false;
  }
  key = key.slice(2).replace(/Once$/, "");
  return hasOwn(options, key[0].toLowerCase() + key.slice(1)) || hasOwn(options, hyphenate(key)) || hasOwn(options, key);
}
function markAttrsAccessed() {
}
function renderComponentRoot(instance) {
  const {
    type: Component,
    vnode,
    proxy,
    withProxy,
    propsOptions: [propsOptions],
    slots,
    attrs,
    emit: emit2,
    render: render2,
    renderCache,
    props,
    data,
    setupState,
    ctx,
    inheritAttrs
  } = instance;
  const prev = setCurrentRenderingInstance(instance);
  let result;
  let fallthroughAttrs;
  try {
    if (vnode.shapeFlag & 4) {
      const proxyToUse = withProxy || proxy;
      const thisProxy = false ? new Proxy(proxyToUse, {
        get(target, key, receiver) {
          warn$1(
            `Property '${String(
              key
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          );
          return Reflect.get(target, key, receiver);
        }
      }) : proxyToUse;
      result = normalizeVNode(
        render2.call(
          thisProxy,
          proxyToUse,
          renderCache,
          false ? /* @__PURE__ */ shallowReadonly(props) : props,
          setupState,
          data,
          ctx
        )
      );
      fallthroughAttrs = attrs;
    } else {
      const render22 = Component;
      if (false) ;
      result = normalizeVNode(
        render22.length > 1 ? render22(
          false ? /* @__PURE__ */ shallowReadonly(props) : props,
          false ? {
            get attrs() {
              markAttrsAccessed();
              return /* @__PURE__ */ shallowReadonly(attrs);
            },
            slots,
            emit: emit2
          } : { attrs, slots, emit: emit2 }
        ) : render22(
          false ? /* @__PURE__ */ shallowReadonly(props) : props,
          null
        )
      );
      fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
    }
  } catch (err) {
    blockStack.length = 0;
    handleError(err, instance, 1);
    result = createVNode(Comment);
  }
  let root = result;
  if (fallthroughAttrs && inheritAttrs !== false) {
    const keys = Object.keys(fallthroughAttrs);
    const { shapeFlag } = root;
    if (keys.length) {
      if (shapeFlag & (1 | 6)) {
        if (propsOptions && keys.some(isModelListener)) {
          fallthroughAttrs = filterModelListeners(
            fallthroughAttrs,
            propsOptions
          );
        }
        root = cloneVNode(root, fallthroughAttrs, false, true);
      }
    }
  }
  if (vnode.dirs) {
    root = cloneVNode(root, null, false, true);
    root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
  }
  if (vnode.transition) {
    setTransitionHooks(root, vnode.transition);
  }
  {
    result = root;
  }
  setCurrentRenderingInstance(prev);
  return result;
}
function filterSingleRoot(children, recurse = true) {
  let singleRoot;
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (isVNode(child)) {
      if (child.type !== Comment || child.children === "v-if") {
        if (singleRoot) {
          return;
        } else {
          singleRoot = child;
        }
      }
    } else {
      return;
    }
  }
  return singleRoot;
}
const getFunctionalFallthrough = (attrs) => {
  let res;
  for (const key in attrs) {
    if (key === "class" || key === "style" || isOn(key)) {
      (res || (res = {}))[key] = attrs[key];
    }
  }
  return res;
};
const filterModelListeners = (attrs, props) => {
  const res = {};
  for (const key in attrs) {
    if (!isModelListener(key) || !(key.slice(9) in props)) {
      res[key] = attrs[key];
    }
  }
  return res;
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
  const { props: prevProps, children: prevChildren, component } = prevVNode;
  const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
  const emits = component.emitsOptions;
  if (nextVNode.dirs || nextVNode.transition) {
    return true;
  }
  if (optimized && patchFlag >= 0) {
    if (patchFlag & 1024) {
      return true;
    }
    if (patchFlag & 16) {
      if (!prevProps) {
        return !!nextProps;
      }
      return hasPropsChanged(prevProps, nextProps, emits);
    } else if (patchFlag & 8) {
      const dynamicProps = nextVNode.dynamicProps;
      for (let i = 0; i < dynamicProps.length; i++) {
        const key = dynamicProps[i];
        if (hasPropValueChanged(nextProps, prevProps, key) && !isEmitListener(emits, key)) {
          return true;
        }
      }
    }
  } else {
    if (prevChildren || nextChildren) {
      if (!nextChildren || !nextChildren.$stable) {
        return true;
      }
    }
    if (prevProps === nextProps) {
      return false;
    }
    if (!prevProps) {
      return !!nextProps;
    }
    if (!nextProps) {
      return true;
    }
    return hasPropsChanged(prevProps, nextProps, emits);
  }
  return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
  const nextKeys = Object.keys(nextProps);
  if (nextKeys.length !== Object.keys(prevProps).length) {
    return true;
  }
  for (let i = 0; i < nextKeys.length; i++) {
    const key = nextKeys[i];
    if (hasPropValueChanged(nextProps, prevProps, key) && !isEmitListener(emitsOptions, key)) {
      return true;
    }
  }
  return false;
}
function hasPropValueChanged(nextProps, prevProps, key) {
  const nextProp = nextProps[key];
  const prevProp = prevProps[key];
  if (key === "style" && isObject$1(nextProp) && isObject$1(prevProp)) {
    return !looseEqual(nextProp, prevProp);
  }
  return nextProp !== prevProp;
}
function updateHOCHostEl({ vnode, parent }, el) {
  while (parent) {
    const root = parent.subTree;
    if (root.suspense && root.suspense.activeBranch === vnode) {
      root.el = vnode.el;
    }
    if (root === vnode) {
      (vnode = parent.vnode).el = el;
      parent = parent.parent;
    } else {
      break;
    }
  }
}
const internalObjectProto = {};
const createInternalObject = () => Object.create(internalObjectProto);
const isInternalObject = (obj) => Object.getPrototypeOf(obj) === internalObjectProto;
function initProps(instance, rawProps, isStateful, isSSR = false) {
  const props = {};
  const attrs = createInternalObject();
  instance.propsDefaults = /* @__PURE__ */ Object.create(null);
  setFullProps(instance, rawProps, props, attrs);
  for (const key in instance.propsOptions[0]) {
    if (!(key in props)) {
      props[key] = void 0;
    }
  }
  if (isStateful) {
    instance.props = isSSR ? props : /* @__PURE__ */ shallowReactive(props);
  } else {
    if (!instance.type.props) {
      instance.props = attrs;
    } else {
      instance.props = props;
    }
  }
  instance.attrs = attrs;
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
  const {
    props,
    attrs,
    vnode: { patchFlag }
  } = instance;
  const rawCurrentProps = /* @__PURE__ */ toRaw(props);
  const [options] = instance.propsOptions;
  let hasAttrsChanged = false;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (optimized || patchFlag > 0) && !(patchFlag & 16)
  ) {
    if (patchFlag & 8) {
      const propsToUpdate = instance.vnode.dynamicProps;
      for (let i = 0; i < propsToUpdate.length; i++) {
        let key = propsToUpdate[i];
        if (isEmitListener(instance.emitsOptions, key)) {
          continue;
        }
        const value = rawProps[key];
        if (options) {
          if (hasOwn(attrs, key)) {
            if (value !== attrs[key]) {
              attrs[key] = value;
              hasAttrsChanged = true;
            }
          } else {
            const camelizedKey = camelize(key);
            props[camelizedKey] = resolvePropValue(
              options,
              rawCurrentProps,
              camelizedKey,
              value,
              instance,
              false
            );
          }
        } else {
          if (value !== attrs[key]) {
            attrs[key] = value;
            hasAttrsChanged = true;
          }
        }
      }
    }
  } else {
    if (setFullProps(instance, rawProps, props, attrs)) {
      hasAttrsChanged = true;
    }
    let kebabKey;
    for (const key in rawCurrentProps) {
      if (!rawProps || // for camelCase
      !hasOwn(rawProps, key) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((kebabKey = hyphenate(key)) === key || !hasOwn(rawProps, kebabKey))) {
        if (options) {
          if (rawPrevProps && // for camelCase
          (rawPrevProps[key] !== void 0 || // for kebab-case
          rawPrevProps[kebabKey] !== void 0)) {
            props[key] = resolvePropValue(
              options,
              rawCurrentProps,
              key,
              void 0,
              instance,
              true
            );
          }
        } else {
          delete props[key];
        }
      }
    }
    if (attrs !== rawCurrentProps) {
      for (const key in attrs) {
        if (!rawProps || !hasOwn(rawProps, key) && true) {
          delete attrs[key];
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (hasAttrsChanged) {
    trigger(instance.attrs, "set", "");
  }
}
function setFullProps(instance, rawProps, props, attrs) {
  const [options, needCastKeys] = instance.propsOptions;
  let hasAttrsChanged = false;
  let rawCastValues;
  if (rawProps) {
    for (let key in rawProps) {
      if (isReservedProp(key)) {
        continue;
      }
      const value = rawProps[key];
      let camelKey;
      if (options && hasOwn(options, camelKey = camelize(key))) {
        if (!needCastKeys || !needCastKeys.includes(camelKey)) {
          props[camelKey] = value;
        } else {
          (rawCastValues || (rawCastValues = {}))[camelKey] = value;
        }
      } else if (!isEmitListener(instance.emitsOptions, key)) {
        if (!(key in attrs) || value !== attrs[key]) {
          attrs[key] = value;
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (needCastKeys) {
    const rawCurrentProps = /* @__PURE__ */ toRaw(props);
    const castValues = rawCastValues || EMPTY_OBJ;
    for (let i = 0; i < needCastKeys.length; i++) {
      const key = needCastKeys[i];
      props[key] = resolvePropValue(
        options,
        rawCurrentProps,
        key,
        castValues[key],
        instance,
        !hasOwn(castValues, key)
      );
    }
  }
  return hasAttrsChanged;
}
function resolvePropValue(options, props, key, value, instance, isAbsent) {
  const opt = options[key];
  if (opt != null) {
    const hasDefault = hasOwn(opt, "default");
    if (hasDefault && value === void 0) {
      const defaultValue = opt.default;
      if (opt.type !== Function && !opt.skipFactory && isFunction(defaultValue)) {
        const { propsDefaults } = instance;
        if (key in propsDefaults) {
          value = propsDefaults[key];
        } else {
          const reset = setCurrentInstance(instance);
          value = propsDefaults[key] = defaultValue.call(
            null,
            props
          );
          reset();
        }
      } else {
        value = defaultValue;
      }
      if (instance.ce) {
        instance.ce._setProp(key, value);
      }
    }
    if (opt[
      0
      /* shouldCast */
    ]) {
      if (isAbsent && !hasDefault) {
        value = false;
      } else if (opt[
        1
        /* shouldCastTrue */
      ] && (value === "" || value === hyphenate(key))) {
        value = true;
      }
    }
  }
  return value;
}
const mixinPropsCache = /* @__PURE__ */ new WeakMap();
function normalizePropsOptions(comp, appContext, asMixin = false) {
  const cache = asMixin ? mixinPropsCache : appContext.propsCache;
  const cached = cache.get(comp);
  if (cached) {
    return cached;
  }
  const raw = comp.props;
  const normalized = {};
  const needCastKeys = [];
  let hasExtends = false;
  if (!isFunction(comp)) {
    const extendProps = (raw2) => {
      hasExtends = true;
      const [props, keys] = normalizePropsOptions(raw2, appContext, true);
      extend(normalized, props);
      if (keys) needCastKeys.push(...keys);
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendProps);
    }
    if (comp.extends) {
      extendProps(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendProps);
    }
  }
  if (!raw && !hasExtends) {
    if (isObject$1(comp)) {
      cache.set(comp, EMPTY_ARR);
    }
    return EMPTY_ARR;
  }
  if (isArray(raw)) {
    for (let i = 0; i < raw.length; i++) {
      const normalizedKey = camelize(raw[i]);
      if (validatePropName(normalizedKey)) {
        normalized[normalizedKey] = EMPTY_OBJ;
      }
    }
  } else if (raw) {
    for (const key in raw) {
      const normalizedKey = camelize(key);
      if (validatePropName(normalizedKey)) {
        const opt = raw[key];
        const prop = normalized[normalizedKey] = isArray(opt) || isFunction(opt) ? { type: opt } : extend({}, opt);
        const propType = prop.type;
        let shouldCast = false;
        let shouldCastTrue = true;
        if (isArray(propType)) {
          for (let index = 0; index < propType.length; ++index) {
            const type = propType[index];
            const typeName = isFunction(type) && type.name;
            if (typeName === "Boolean") {
              shouldCast = true;
              break;
            } else if (typeName === "String") {
              shouldCastTrue = false;
            }
          }
        } else {
          shouldCast = isFunction(propType) && propType.name === "Boolean";
        }
        prop[
          0
          /* shouldCast */
        ] = shouldCast;
        prop[
          1
          /* shouldCastTrue */
        ] = shouldCastTrue;
        if (shouldCast || hasOwn(prop, "default")) {
          needCastKeys.push(normalizedKey);
        }
      }
    }
  }
  const res = [normalized, needCastKeys];
  if (isObject$1(comp)) {
    cache.set(comp, res);
  }
  return res;
}
function validatePropName(key) {
  if (key[0] !== "$" && !isReservedProp(key)) {
    return true;
  }
  return false;
}
const isInternalKey = (key) => key === "_" || key === "_ctx" || key === "$stable";
const normalizeSlotValue = (value) => isArray(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
const normalizeSlot = (key, rawSlot, ctx) => {
  if (rawSlot._n) {
    return rawSlot;
  }
  const normalized = withCtx((...args) => {
    if (false) ;
    return normalizeSlotValue(rawSlot(...args));
  }, ctx);
  normalized._c = false;
  return normalized;
};
const normalizeObjectSlots = (rawSlots, slots, instance) => {
  const ctx = rawSlots._ctx;
  for (const key in rawSlots) {
    if (isInternalKey(key)) continue;
    const value = rawSlots[key];
    if (isFunction(value)) {
      slots[key] = normalizeSlot(key, value, ctx);
    } else if (value != null) {
      const normalized = normalizeSlotValue(value);
      slots[key] = () => normalized;
    }
  }
};
const normalizeVNodeSlots = (instance, children) => {
  const normalized = normalizeSlotValue(children);
  instance.slots.default = () => normalized;
};
const assignSlots = (slots, children, optimized) => {
  for (const key in children) {
    if (optimized || !isInternalKey(key)) {
      slots[key] = children[key];
    }
  }
};
const initSlots = (instance, children, optimized) => {
  const slots = instance.slots = createInternalObject();
  if (instance.vnode.shapeFlag & 32) {
    const type = children._;
    if (type) {
      assignSlots(slots, children, optimized);
      if (optimized) {
        def(slots, "_", type, true);
      }
    } else {
      normalizeObjectSlots(children, slots);
    }
  } else if (children) {
    normalizeVNodeSlots(instance, children);
  }
};
const updateSlots = (instance, children, optimized) => {
  const { vnode, slots } = instance;
  let needDeletionCheck = true;
  let deletionComparisonTarget = EMPTY_OBJ;
  if (vnode.shapeFlag & 32) {
    const type = children._;
    if (type) {
      if (optimized && type === 1) {
        needDeletionCheck = false;
      } else {
        assignSlots(slots, children, optimized);
      }
    } else {
      needDeletionCheck = !children.$stable;
      normalizeObjectSlots(children, slots);
    }
    deletionComparisonTarget = children;
  } else if (children) {
    normalizeVNodeSlots(instance, children);
    deletionComparisonTarget = { default: 1 };
  }
  if (needDeletionCheck) {
    for (const key in slots) {
      if (!isInternalKey(key) && deletionComparisonTarget[key] == null) {
        delete slots[key];
      }
    }
  }
};
const queuePostRenderEffect = queueEffectWithSuspense;
function createRenderer(options) {
  return baseCreateRenderer(options);
}
function createHydrationRenderer(options) {
  return baseCreateRenderer(options, createHydrationFunctions);
}
function baseCreateRenderer(options, createHydrationFns) {
  const target = getGlobalThis();
  target.__VUE__ = true;
  const {
    insert: hostInsert,
    remove: hostRemove,
    patchProp: hostPatchProp,
    createElement: hostCreateElement,
    createText: hostCreateText,
    createComment: hostCreateComment,
    setText: hostSetText,
    setElementText: hostSetElementText,
    parentNode: hostParentNode,
    nextSibling: hostNextSibling,
    setScopeId: hostSetScopeId = NOOP,
    insertStaticContent: hostInsertStaticContent
  } = options;
  const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, namespace = void 0, slotScopeIds = null, optimized = !!n2.dynamicChildren) => {
    if (n1 === n2) {
      return;
    }
    if (n1 && !isSameVNodeType(n1, n2)) {
      anchor = getNextHostNode(n1);
      unmount(n1, parentComponent, parentSuspense, true);
      n1 = null;
    }
    if (n2.patchFlag === -2) {
      optimized = false;
      n2.dynamicChildren = null;
    }
    const { type, ref: ref3, shapeFlag } = n2;
    switch (type) {
      case Text:
        processText(n1, n2, container, anchor);
        break;
      case Comment:
        processCommentNode(n1, n2, container, anchor);
        break;
      case Static:
        if (n1 == null) {
          mountStaticNode(n2, container, anchor, namespace);
        }
        break;
      case Fragment:
        processFragment(
          n1,
          n2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
        break;
      default:
        if (shapeFlag & 1) {
          processElement(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else if (shapeFlag & 6) {
          processComponent(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else if (shapeFlag & 64) {
          type.process(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized,
            internals
          );
        } else if (shapeFlag & 128) {
          type.process(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized,
            internals
          );
        } else ;
    }
    if (ref3 != null && parentComponent) {
      setRef(ref3, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
    } else if (ref3 == null && n1 && n1.ref != null) {
      setRef(n1.ref, null, parentSuspense, n1, true);
    }
  };
  const processText = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(
        n2.el = hostCreateText(n2.children),
        container,
        anchor
      );
    } else {
      const el = n2.el = n1.el;
      if (n2.children !== n1.children) {
        hostSetText(el, n2.children);
      }
    }
  };
  const processCommentNode = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(
        n2.el = hostCreateComment(n2.children || ""),
        container,
        anchor
      );
    } else {
      n2.el = n1.el;
    }
  };
  const mountStaticNode = (n2, container, anchor, namespace) => {
    [n2.el, n2.anchor] = hostInsertStaticContent(
      n2.children,
      container,
      anchor,
      namespace,
      n2.el,
      n2.anchor
    );
  };
  const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostInsert(el, container, nextSibling);
      el = next;
    }
    hostInsert(anchor, container, nextSibling);
  };
  const removeStaticNode = ({ el, anchor }) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostRemove(el);
      el = next;
    }
    hostRemove(anchor);
  };
  const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    if (n2.type === "svg") {
      namespace = "svg";
    } else if (n2.type === "math") {
      namespace = "mathml";
    }
    if (n1 == null) {
      mountElement(
        n2,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized
      );
    } else {
      const customElement = n1.el && n1.el._isVueCE ? n1.el : null;
      try {
        if (customElement) {
          customElement._beginPatch();
        }
        patchElement(
          n1,
          n2,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      } finally {
        if (customElement) {
          customElement._endPatch();
        }
      }
    }
  };
  const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    let el;
    let vnodeHook;
    const { props, shapeFlag, transition, dirs } = vnode;
    el = vnode.el = hostCreateElement(
      vnode.type,
      namespace,
      props && props.is,
      props
    );
    if (shapeFlag & 8) {
      hostSetElementText(el, vnode.children);
    } else if (shapeFlag & 16) {
      mountChildren(
        vnode.children,
        el,
        null,
        parentComponent,
        parentSuspense,
        resolveChildrenNamespace(vnode, namespace),
        slotScopeIds,
        optimized
      );
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "created");
    }
    setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
    if (props) {
      for (const key in props) {
        if (key !== "value" && !isReservedProp(key)) {
          hostPatchProp(el, key, null, props[key], namespace, parentComponent);
        }
      }
      if ("value" in props) {
        hostPatchProp(el, "value", null, props.value, namespace);
      }
      if (vnodeHook = props.onVnodeBeforeMount) {
        invokeVNodeHook(vnodeHook, parentComponent, vnode);
      }
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
    }
    const needCallTransitionHooks = needTransition(parentSuspense, transition);
    if (needCallTransitionHooks) {
      transition.beforeEnter(el);
    }
    hostInsert(el, container, anchor);
    if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        needCallTransitionHooks && transition.enter(el);
        dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
      }, parentSuspense);
    }
  };
  const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
    if (scopeId) {
      hostSetScopeId(el, scopeId);
    }
    if (slotScopeIds) {
      for (let i = 0; i < slotScopeIds.length; i++) {
        hostSetScopeId(el, slotScopeIds[i]);
      }
    }
    if (parentComponent) {
      let subTree = parentComponent.subTree;
      if (vnode === subTree || isSuspense(subTree.type) && (subTree.ssContent === vnode || subTree.ssFallback === vnode)) {
        const parentVNode = parentComponent.vnode;
        setScopeId(
          el,
          parentVNode,
          parentVNode.scopeId,
          parentVNode.slotScopeIds,
          parentComponent.parent
        );
      }
    }
  };
  const mountChildren = (children, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, start = 0) => {
    for (let i = start; i < children.length; i++) {
      const child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
      patch(
        null,
        child,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized
      );
    }
  };
  const patchElement = (n1, n2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    const el = n2.el = n1.el;
    let { patchFlag, dynamicChildren, dirs } = n2;
    patchFlag |= n1.patchFlag & 16;
    const oldProps = n1.props || EMPTY_OBJ;
    const newProps = n2.props || EMPTY_OBJ;
    let vnodeHook;
    parentComponent && toggleRecurse(parentComponent, false);
    if (vnodeHook = newProps.onVnodeBeforeUpdate) {
      invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
    }
    if (dirs) {
      invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
    }
    parentComponent && toggleRecurse(parentComponent, true);
    if (oldProps.innerHTML && newProps.innerHTML == null || oldProps.textContent && newProps.textContent == null) {
      hostSetElementText(el, "");
    }
    if (dynamicChildren) {
      patchBlockChildren(
        n1.dynamicChildren,
        dynamicChildren,
        el,
        parentComponent,
        parentSuspense,
        resolveChildrenNamespace(n2, namespace),
        slotScopeIds
      );
    } else if (!optimized) {
      patchChildren(
        n1,
        n2,
        el,
        null,
        parentComponent,
        parentSuspense,
        resolveChildrenNamespace(n2, namespace),
        slotScopeIds,
        false
      );
    }
    if (patchFlag > 0) {
      if (patchFlag & 16) {
        patchProps(el, oldProps, newProps, parentComponent, namespace);
      } else {
        if (patchFlag & 2) {
          if (oldProps.class !== newProps.class) {
            hostPatchProp(el, "class", null, newProps.class, namespace);
          }
        }
        if (patchFlag & 4) {
          hostPatchProp(el, "style", oldProps.style, newProps.style, namespace);
        }
        if (patchFlag & 8) {
          const propsToUpdate = n2.dynamicProps;
          for (let i = 0; i < propsToUpdate.length; i++) {
            const key = propsToUpdate[i];
            const prev = oldProps[key];
            const next = newProps[key];
            if (next !== prev || key === "value") {
              hostPatchProp(el, key, prev, next, namespace, parentComponent);
            }
          }
        }
      }
      if (patchFlag & 1) {
        if (n1.children !== n2.children) {
          hostSetElementText(el, n2.children);
        }
      }
    } else if (!optimized && dynamicChildren == null) {
      patchProps(el, oldProps, newProps, parentComponent, namespace);
    }
    if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
      }, parentSuspense);
    }
  };
  const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, namespace, slotScopeIds) => {
    for (let i = 0; i < newChildren.length; i++) {
      const oldVNode = oldChildren[i];
      const newVNode = newChildren[i];
      const container = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        oldVNode.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (oldVNode.type === Fragment || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !isSameVNodeType(oldVNode, newVNode) || // - In the case of a component, it could contain anything.
        oldVNode.shapeFlag & (6 | 64 | 128)) ? hostParentNode(oldVNode.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          fallbackContainer
        )
      );
      patch(
        oldVNode,
        newVNode,
        container,
        null,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        true
      );
    }
  };
  const patchProps = (el, oldProps, newProps, parentComponent, namespace) => {
    if (oldProps !== newProps) {
      if (oldProps !== EMPTY_OBJ) {
        for (const key in oldProps) {
          if (!isReservedProp(key) && !(key in newProps)) {
            hostPatchProp(
              el,
              key,
              oldProps[key],
              null,
              namespace,
              parentComponent
            );
          }
        }
      }
      for (const key in newProps) {
        if (isReservedProp(key)) continue;
        const next = newProps[key];
        const prev = oldProps[key];
        if (next !== prev && key !== "value") {
          hostPatchProp(el, key, prev, next, namespace, parentComponent);
        }
      }
      if ("value" in newProps) {
        hostPatchProp(el, "value", oldProps.value, newProps.value, namespace);
      }
    }
  };
  const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
    const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
    let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }
    if (n1 == null) {
      hostInsert(fragmentStartAnchor, container, anchor);
      hostInsert(fragmentEndAnchor, container, anchor);
      mountChildren(
        // #10007
        // such fragment like `<></>` will be compiled into
        // a fragment which doesn't have a children.
        // In this case fallback to an empty array
        n2.children || [],
        container,
        fragmentEndAnchor,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized
      );
    } else {
      if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && // #2715 the previous fragment could've been a BAILed one as a result
      // of renderSlot() with no valid children
      n1.dynamicChildren && n1.dynamicChildren.length === dynamicChildren.length) {
        patchBlockChildren(
          n1.dynamicChildren,
          dynamicChildren,
          container,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds
        );
        if (
          // #2080 if the stable fragment has a key, it's a <template v-for> that may
          //  get moved around. Make sure all root level vnodes inherit el.
          // #2134 or if it's a component root, it may also get moved around
          // as the component is being moved.
          n2.key != null || parentComponent && n2 === parentComponent.subTree
        ) {
          traverseStaticChildren(
            n1,
            n2,
            true
            /* shallow */
          );
        }
      } else {
        patchChildren(
          n1,
          n2,
          container,
          fragmentEndAnchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      }
    }
  };
  const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    n2.slotScopeIds = slotScopeIds;
    if (n1 == null) {
      if (n2.shapeFlag & 512) {
        parentComponent.ctx.activate(
          n2,
          container,
          anchor,
          namespace,
          optimized
        );
      } else {
        mountComponent(
          n2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          optimized
        );
      }
    } else {
      updateComponent(n1, n2, optimized);
    }
  };
  const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, namespace, optimized) => {
    const instance = initialVNode.component = createComponentInstance(
      initialVNode,
      parentComponent,
      parentSuspense
    );
    if (isKeepAlive(initialVNode)) {
      instance.ctx.renderer = internals;
    }
    {
      setupComponent(instance, false, optimized);
    }
    if (instance.asyncDep) {
      parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect, optimized);
      if (!initialVNode.el) {
        const placeholder = instance.subTree = createVNode(Comment);
        processCommentNode(null, placeholder, container, anchor);
        initialVNode.placeholder = placeholder.el;
      }
    } else {
      setupRenderEffect(
        instance,
        initialVNode,
        container,
        anchor,
        parentSuspense,
        namespace,
        optimized
      );
    }
  };
  const updateComponent = (n1, n2, optimized) => {
    const instance = n2.component = n1.component;
    if (shouldUpdateComponent(n1, n2, optimized)) {
      if (instance.asyncDep && !instance.asyncResolved) {
        updateComponentPreRender(instance, n2, optimized);
        return;
      } else {
        instance.next = n2;
        instance.update();
      }
    } else {
      n2.el = n1.el;
      instance.vnode = n2;
    }
  };
  const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, namespace, optimized) => {
    const componentUpdateFn = () => {
      if (!instance.isMounted) {
        let vnodeHook;
        const { el, props } = initialVNode;
        const { bm, m, parent, root, type } = instance;
        const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
        toggleRecurse(instance, false);
        if (bm) {
          invokeArrayFns(bm);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) {
          invokeVNodeHook(vnodeHook, parent, initialVNode);
        }
        toggleRecurse(instance, true);
        if (el && hydrateNode) {
          const hydrateSubTree = () => {
            instance.subTree = renderComponentRoot(instance);
            hydrateNode(
              el,
              instance.subTree,
              instance,
              parentSuspense,
              null
            );
          };
          if (isAsyncWrapperVNode && type.__asyncHydrate) {
            type.__asyncHydrate(
              el,
              instance,
              hydrateSubTree
            );
          } else {
            hydrateSubTree();
          }
        } else {
          if (root.ce && root.ce._hasShadowRoot()) {
            root.ce._injectChildStyle(type);
          }
          const subTree = instance.subTree = renderComponentRoot(instance);
          patch(
            null,
            subTree,
            container,
            anchor,
            instance,
            parentSuspense,
            namespace
          );
          initialVNode.el = subTree.el;
        }
        if (m) {
          queuePostRenderEffect(m, parentSuspense);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
          const scopedInitialVNode = initialVNode;
          queuePostRenderEffect(
            () => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode),
            parentSuspense
          );
        }
        if (initialVNode.shapeFlag & 256 || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256) {
          instance.a && queuePostRenderEffect(instance.a, parentSuspense);
        }
        instance.isMounted = true;
        initialVNode = container = anchor = null;
      } else {
        let { next, bu, u, parent, vnode } = instance;
        {
          const nonHydratedAsyncRoot = locateNonHydratedAsyncRoot(instance);
          if (nonHydratedAsyncRoot) {
            if (next) {
              next.el = vnode.el;
              updateComponentPreRender(instance, next, optimized);
            }
            nonHydratedAsyncRoot.asyncDep.then(() => {
              queuePostRenderEffect(() => {
                if (!instance.isUnmounted) update2();
              }, parentSuspense);
            });
            return;
          }
        }
        let originNext = next;
        let vnodeHook;
        toggleRecurse(instance, false);
        if (next) {
          next.el = vnode.el;
          updateComponentPreRender(instance, next, optimized);
        } else {
          next = vnode;
        }
        if (bu) {
          invokeArrayFns(bu);
        }
        if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
          invokeVNodeHook(vnodeHook, parent, next, vnode);
        }
        toggleRecurse(instance, true);
        const nextTree = renderComponentRoot(instance);
        const prevTree = instance.subTree;
        instance.subTree = nextTree;
        patch(
          prevTree,
          nextTree,
          // parent may have changed if it's in a teleport
          hostParentNode(prevTree.el),
          // anchor may have changed if it's in a fragment
          getNextHostNode(prevTree),
          instance,
          parentSuspense,
          namespace
        );
        next.el = nextTree.el;
        if (originNext === null) {
          updateHOCHostEl(instance, nextTree.el);
        }
        if (u) {
          queuePostRenderEffect(u, parentSuspense);
        }
        if (vnodeHook = next.props && next.props.onVnodeUpdated) {
          queuePostRenderEffect(
            () => invokeVNodeHook(vnodeHook, parent, next, vnode),
            parentSuspense
          );
        }
      }
    };
    instance.scope.on();
    const effect2 = instance.effect = new ReactiveEffect(componentUpdateFn);
    instance.scope.off();
    const update2 = instance.update = effect2.run.bind(effect2);
    const job = instance.job = effect2.runIfDirty.bind(effect2);
    job.i = instance;
    job.id = instance.uid;
    effect2.scheduler = () => queueJob(job);
    toggleRecurse(instance, true);
    update2();
  };
  const updateComponentPreRender = (instance, nextVNode, optimized) => {
    nextVNode.component = instance;
    const prevProps = instance.vnode.props;
    instance.vnode = nextVNode;
    instance.next = null;
    updateProps(instance, nextVNode.props, prevProps, optimized);
    updateSlots(instance, nextVNode.children, optimized);
    pauseTracking();
    flushPreFlushCbs(instance);
    resetTracking();
  };
  const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized = false) => {
    const c1 = n1 && n1.children;
    const prevShapeFlag = n1 ? n1.shapeFlag : 0;
    const c2 = n2.children;
    const { patchFlag, shapeFlag } = n2;
    if (patchFlag > 0) {
      if (patchFlag & 128) {
        patchKeyedChildren(
          c1,
          c2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
        return;
      } else if (patchFlag & 256) {
        patchUnkeyedChildren(
          c1,
          c2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
        return;
      }
    }
    if (shapeFlag & 8) {
      if (prevShapeFlag & 16) {
        unmountChildren(c1, parentComponent, parentSuspense);
      }
      if (c2 !== c1) {
        hostSetElementText(container, c2);
      }
    } else {
      if (prevShapeFlag & 16) {
        if (shapeFlag & 16) {
          patchKeyedChildren(
            c1,
            c2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else {
          unmountChildren(c1, parentComponent, parentSuspense, true);
        }
      } else {
        if (prevShapeFlag & 8) {
          hostSetElementText(container, "");
        }
        if (shapeFlag & 16) {
          mountChildren(
            c2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        }
      }
    }
  };
  const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    c1 = c1 || EMPTY_ARR;
    c2 = c2 || EMPTY_ARR;
    const oldLength = c1.length;
    const newLength = c2.length;
    const commonLength = Math.min(oldLength, newLength);
    let i;
    for (i = 0; i < commonLength; i++) {
      const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      patch(
        c1[i],
        nextChild,
        container,
        null,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized
      );
    }
    if (oldLength > newLength) {
      unmountChildren(
        c1,
        parentComponent,
        parentSuspense,
        true,
        false,
        commonLength
      );
    } else {
      mountChildren(
        c2,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized,
        commonLength
      );
    }
  };
  const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    let i = 0;
    const l2 = c2.length;
    let e1 = c1.length - 1;
    let e2 = l2 - 1;
    while (i <= e1 && i <= e2) {
      const n1 = c1[i];
      const n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      if (isSameVNodeType(n1, n2)) {
        patch(
          n1,
          n2,
          container,
          null,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      } else {
        break;
      }
      i++;
    }
    while (i <= e1 && i <= e2) {
      const n1 = c1[e1];
      const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
      if (isSameVNodeType(n1, n2)) {
        patch(
          n1,
          n2,
          container,
          null,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      } else {
        break;
      }
      e1--;
      e2--;
    }
    if (i > e1) {
      if (i <= e2) {
        const nextPos = e2 + 1;
        const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
        while (i <= e2) {
          patch(
            null,
            c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]),
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
          i++;
        }
      }
    } else if (i > e2) {
      while (i <= e1) {
        unmount(c1[i], parentComponent, parentSuspense, true);
        i++;
      }
    } else {
      const s1 = i;
      const s2 = i;
      const keyToNewIndexMap = /* @__PURE__ */ new Map();
      for (i = s2; i <= e2; i++) {
        const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
        if (nextChild.key != null) {
          keyToNewIndexMap.set(nextChild.key, i);
        }
      }
      let j2;
      let patched = 0;
      const toBePatched = e2 - s2 + 1;
      let moved = false;
      let maxNewIndexSoFar = 0;
      const newIndexToOldIndexMap = new Array(toBePatched);
      for (i = 0; i < toBePatched; i++) newIndexToOldIndexMap[i] = 0;
      for (i = s1; i <= e1; i++) {
        const prevChild = c1[i];
        if (patched >= toBePatched) {
          unmount(prevChild, parentComponent, parentSuspense, true);
          continue;
        }
        let newIndex;
        if (prevChild.key != null) {
          newIndex = keyToNewIndexMap.get(prevChild.key);
        } else {
          for (j2 = s2; j2 <= e2; j2++) {
            if (newIndexToOldIndexMap[j2 - s2] === 0 && isSameVNodeType(prevChild, c2[j2])) {
              newIndex = j2;
              break;
            }
          }
        }
        if (newIndex === void 0) {
          unmount(prevChild, parentComponent, parentSuspense, true);
        } else {
          newIndexToOldIndexMap[newIndex - s2] = i + 1;
          if (newIndex >= maxNewIndexSoFar) {
            maxNewIndexSoFar = newIndex;
          } else {
            moved = true;
          }
          patch(
            prevChild,
            c2[newIndex],
            container,
            null,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
          patched++;
        }
      }
      const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
      j2 = increasingNewIndexSequence.length - 1;
      for (i = toBePatched - 1; i >= 0; i--) {
        const nextIndex = s2 + i;
        const nextChild = c2[nextIndex];
        const anchorVNode = c2[nextIndex + 1];
        const anchor = nextIndex + 1 < l2 ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          anchorVNode.el || resolveAsyncComponentPlaceholder(anchorVNode)
        ) : parentAnchor;
        if (newIndexToOldIndexMap[i] === 0) {
          patch(
            null,
            nextChild,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else if (moved) {
          if (j2 < 0 || i !== increasingNewIndexSequence[j2]) {
            move(nextChild, container, anchor, 2);
          } else {
            j2--;
          }
        }
      }
    }
  };
  const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
    const { el, type, transition, children, shapeFlag } = vnode;
    if (shapeFlag & 6) {
      move(vnode.component.subTree, container, anchor, moveType);
      return;
    }
    if (shapeFlag & 128) {
      vnode.suspense.move(container, anchor, moveType);
      return;
    }
    if (shapeFlag & 64) {
      type.move(vnode, container, anchor, internals);
      return;
    }
    if (type === Fragment) {
      hostInsert(el, container, anchor);
      for (let i = 0; i < children.length; i++) {
        move(children[i], container, anchor, moveType);
      }
      hostInsert(vnode.anchor, container, anchor);
      return;
    }
    if (type === Static) {
      moveStaticNode(vnode, container, anchor);
      return;
    }
    const needTransition2 = moveType !== 2 && shapeFlag & 1 && transition;
    if (needTransition2) {
      if (moveType === 0) {
        transition.beforeEnter(el);
        hostInsert(el, container, anchor);
        queuePostRenderEffect(() => transition.enter(el), parentSuspense);
      } else {
        const { leave, delayLeave, afterLeave } = transition;
        const remove22 = () => {
          if (vnode.ctx.isUnmounted) {
            hostRemove(el);
          } else {
            hostInsert(el, container, anchor);
          }
        };
        const performLeave = () => {
          if (el._isLeaving) {
            el[leaveCbKey](
              true
              /* cancelled */
            );
          }
          leave(el, () => {
            remove22();
            afterLeave && afterLeave();
          });
        };
        if (delayLeave) {
          delayLeave(el, remove22, performLeave);
        } else {
          performLeave();
        }
      }
    } else {
      hostInsert(el, container, anchor);
    }
  };
  const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
    const {
      type,
      props,
      ref: ref3,
      children,
      dynamicChildren,
      shapeFlag,
      patchFlag,
      dirs,
      cacheIndex
    } = vnode;
    if (patchFlag === -2) {
      optimized = false;
    }
    if (ref3 != null) {
      pauseTracking();
      setRef(ref3, null, parentSuspense, vnode, true);
      resetTracking();
    }
    if (cacheIndex != null) {
      parentComponent.renderCache[cacheIndex] = void 0;
    }
    if (shapeFlag & 256) {
      parentComponent.ctx.deactivate(vnode);
      return;
    }
    const shouldInvokeDirs = shapeFlag & 1 && dirs;
    const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
    let vnodeHook;
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) {
      invokeVNodeHook(vnodeHook, parentComponent, vnode);
    }
    if (shapeFlag & 6) {
      unmountComponent(vnode.component, parentSuspense, doRemove);
    } else {
      if (shapeFlag & 128) {
        vnode.suspense.unmount(parentSuspense, doRemove);
        return;
      }
      if (shouldInvokeDirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
      }
      if (shapeFlag & 64) {
        vnode.type.remove(
          vnode,
          parentComponent,
          parentSuspense,
          internals,
          doRemove
        );
      } else if (dynamicChildren && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !dynamicChildren.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (type !== Fragment || patchFlag > 0 && patchFlag & 64)) {
        unmountChildren(
          dynamicChildren,
          parentComponent,
          parentSuspense,
          false,
          true
        );
      } else if (type === Fragment && patchFlag & (128 | 256) || !optimized && shapeFlag & 16) {
        unmountChildren(children, parentComponent, parentSuspense);
      }
      if (doRemove) {
        remove2(vnode);
      }
    }
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
      }, parentSuspense);
    }
  };
  const remove2 = (vnode) => {
    const { type, el, anchor, transition } = vnode;
    if (type === Fragment) {
      {
        removeFragment(el, anchor);
      }
      return;
    }
    if (type === Static) {
      removeStaticNode(vnode);
      return;
    }
    const performRemove = () => {
      hostRemove(el);
      if (transition && !transition.persisted && transition.afterLeave) {
        transition.afterLeave();
      }
    };
    if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
      const { leave, delayLeave } = transition;
      const performLeave = () => leave(el, performRemove);
      if (delayLeave) {
        delayLeave(vnode.el, performRemove, performLeave);
      } else {
        performLeave();
      }
    } else {
      performRemove();
    }
  };
  const removeFragment = (cur, end) => {
    let next;
    while (cur !== end) {
      next = hostNextSibling(cur);
      hostRemove(cur);
      cur = next;
    }
    hostRemove(end);
  };
  const unmountComponent = (instance, parentSuspense, doRemove) => {
    const { bum, scope, job, subTree, um, m, a } = instance;
    invalidateMount(m);
    invalidateMount(a);
    if (bum) {
      invokeArrayFns(bum);
    }
    scope.stop();
    if (job) {
      job.flags |= 8;
      unmount(subTree, instance, parentSuspense, doRemove);
    }
    if (um) {
      queuePostRenderEffect(um, parentSuspense);
    }
    queuePostRenderEffect(() => {
      instance.isUnmounted = true;
    }, parentSuspense);
  };
  const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
    for (let i = start; i < children.length; i++) {
      unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
    }
  };
  const getNextHostNode = (vnode) => {
    if (vnode.shapeFlag & 6) {
      return getNextHostNode(vnode.component.subTree);
    }
    if (vnode.shapeFlag & 128) {
      return vnode.suspense.next();
    }
    const el = hostNextSibling(vnode.anchor || vnode.el);
    const teleportEnd = el && el[TeleportEndKey];
    return teleportEnd ? hostNextSibling(teleportEnd) : el;
  };
  let isFlushing = false;
  const render2 = (vnode, container, namespace) => {
    let instance;
    if (vnode == null) {
      if (container._vnode) {
        unmount(container._vnode, null, null, true);
        instance = container._vnode.component;
      }
    } else {
      patch(
        container._vnode || null,
        vnode,
        container,
        null,
        null,
        null,
        namespace
      );
    }
    container._vnode = vnode;
    if (!isFlushing) {
      isFlushing = true;
      flushPreFlushCbs(instance);
      flushPostFlushCbs();
      isFlushing = false;
    }
  };
  const internals = {
    p: patch,
    um: unmount,
    m: move,
    r: remove2,
    mt: mountComponent,
    mc: mountChildren,
    pc: patchChildren,
    pbc: patchBlockChildren,
    n: getNextHostNode,
    o: options
  };
  let hydrate2;
  let hydrateNode;
  if (createHydrationFns) {
    [hydrate2, hydrateNode] = createHydrationFns(
      internals
    );
  }
  return {
    render: render2,
    hydrate: hydrate2,
    createApp: createAppAPI(render2, hydrate2)
  };
}
function resolveChildrenNamespace({ type, props }, currentNamespace) {
  return currentNamespace === "svg" && type === "foreignObject" || currentNamespace === "mathml" && type === "annotation-xml" && props && props.encoding && props.encoding.includes("html") ? void 0 : currentNamespace;
}
function toggleRecurse({ effect: effect2, job }, allowed) {
  if (allowed) {
    effect2.flags |= 32;
    job.flags |= 4;
  } else {
    effect2.flags &= -33;
    job.flags &= -5;
  }
}
function needTransition(parentSuspense, transition) {
  return (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
}
function traverseStaticChildren(n1, n2, shallow = false) {
  const ch1 = n1.children;
  const ch2 = n2.children;
  if (isArray(ch1) && isArray(ch2)) {
    for (let i = 0; i < ch1.length; i++) {
      const c1 = ch1[i];
      let c2 = ch2[i];
      if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
        if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
          c2 = ch2[i] = cloneIfMounted(ch2[i]);
          c2.el = c1.el;
        }
        if (!shallow && c2.patchFlag !== -2)
          traverseStaticChildren(c1, c2);
      }
      if (c2.type === Text) {
        if (c2.patchFlag === -1) {
          c2 = ch2[i] = cloneIfMounted(c2);
        }
        c2.el = c1.el;
      }
      if (c2.type === Comment && !c2.el) {
        c2.el = c1.el;
      }
    }
  }
}
function getSequence(arr) {
  const p2 = arr.slice();
  const result = [0];
  let i, j2, u, v, c;
  const len = arr.length;
  for (i = 0; i < len; i++) {
    const arrI = arr[i];
    if (arrI !== 0) {
      j2 = result[result.length - 1];
      if (arr[j2] < arrI) {
        p2[i] = j2;
        result.push(i);
        continue;
      }
      u = 0;
      v = result.length - 1;
      while (u < v) {
        c = u + v >> 1;
        if (arr[result[c]] < arrI) {
          u = c + 1;
        } else {
          v = c;
        }
      }
      if (arrI < arr[result[u]]) {
        if (u > 0) {
          p2[i] = result[u - 1];
        }
        result[u] = i;
      }
    }
  }
  u = result.length;
  v = result[u - 1];
  while (u-- > 0) {
    result[u] = v;
    v = p2[v];
  }
  return result;
}
function locateNonHydratedAsyncRoot(instance) {
  const subComponent = instance.subTree.component;
  if (subComponent) {
    if (subComponent.asyncDep && !subComponent.asyncResolved) {
      return subComponent;
    } else {
      return locateNonHydratedAsyncRoot(subComponent);
    }
  }
}
function invalidateMount(hooks) {
  if (hooks) {
    for (let i = 0; i < hooks.length; i++)
      hooks[i].flags |= 8;
  }
}
function resolveAsyncComponentPlaceholder(anchorVnode) {
  if (anchorVnode.placeholder) {
    return anchorVnode.placeholder;
  }
  const instance = anchorVnode.component;
  if (instance) {
    return resolveAsyncComponentPlaceholder(instance.subTree);
  }
  return null;
}
const isSuspense = (type) => type.__isSuspense;
let suspenseId = 0;
const SuspenseImpl = {
  name: "Suspense",
  // In order to make Suspense tree-shakable, we need to avoid importing it
  // directly in the renderer. The renderer checks for the __isSuspense flag
  // on a vnode's type and calls the `process` method, passing in renderer
  // internals.
  __isSuspense: true,
  process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, rendererInternals) {
    if (n1 == null) {
      mountSuspense(
        n2,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized,
        rendererInternals
      );
    } else {
      if (parentSuspense && parentSuspense.deps > 0 && !n1.suspense.isInFallback) {
        n2.suspense = n1.suspense;
        n2.suspense.vnode = n2;
        n2.el = n1.el;
        return;
      }
      patchSuspense(
        n1,
        n2,
        container,
        anchor,
        parentComponent,
        namespace,
        slotScopeIds,
        optimized,
        rendererInternals
      );
    }
  },
  hydrate: hydrateSuspense,
  normalize: normalizeSuspenseChildren
};
const Suspense = SuspenseImpl;
function triggerEvent(vnode, name) {
  const eventListener = vnode.props && vnode.props[name];
  if (isFunction(eventListener)) {
    eventListener();
  }
}
function mountSuspense(vnode, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, rendererInternals) {
  const {
    p: patch,
    o: { createElement }
  } = rendererInternals;
  const hiddenContainer = createElement("div");
  const suspense = vnode.suspense = createSuspenseBoundary(
    vnode,
    parentSuspense,
    parentComponent,
    container,
    hiddenContainer,
    anchor,
    namespace,
    slotScopeIds,
    optimized,
    rendererInternals
  );
  patch(
    null,
    suspense.pendingBranch = vnode.ssContent,
    hiddenContainer,
    null,
    parentComponent,
    suspense,
    namespace,
    slotScopeIds
  );
  if (suspense.deps > 0) {
    triggerEvent(vnode, "onPending");
    triggerEvent(vnode, "onFallback");
    patch(
      null,
      vnode.ssFallback,
      container,
      anchor,
      parentComponent,
      null,
      // fallback tree will not have suspense context
      namespace,
      slotScopeIds
    );
    setActiveBranch(suspense, vnode.ssFallback);
  } else {
    suspense.resolve(false, true);
  }
}
function patchSuspense(n1, n2, container, anchor, parentComponent, namespace, slotScopeIds, optimized, { p: patch, um: unmount, o: { createElement } }) {
  const suspense = n2.suspense = n1.suspense;
  suspense.vnode = n2;
  n2.el = n1.el;
  const newBranch = n2.ssContent;
  const newFallback = n2.ssFallback;
  const { activeBranch, pendingBranch, isInFallback, isHydrating } = suspense;
  if (pendingBranch) {
    suspense.pendingBranch = newBranch;
    if (isSameVNodeType(pendingBranch, newBranch)) {
      patch(
        pendingBranch,
        newBranch,
        suspense.hiddenContainer,
        null,
        parentComponent,
        suspense,
        namespace,
        slotScopeIds,
        optimized
      );
      if (suspense.deps <= 0) {
        suspense.resolve();
      } else if (isInFallback) {
        if (!isHydrating) {
          patch(
            activeBranch,
            newFallback,
            container,
            anchor,
            parentComponent,
            null,
            // fallback tree will not have suspense context
            namespace,
            slotScopeIds,
            optimized
          );
          setActiveBranch(suspense, newFallback);
        }
      }
    } else {
      suspense.pendingId = suspenseId++;
      if (isHydrating) {
        suspense.isHydrating = false;
        suspense.activeBranch = pendingBranch;
      } else {
        unmount(pendingBranch, parentComponent, suspense);
      }
      suspense.deps = 0;
      suspense.effects.length = 0;
      suspense.hiddenContainer = createElement("div");
      if (isInFallback) {
        patch(
          null,
          newBranch,
          suspense.hiddenContainer,
          null,
          parentComponent,
          suspense,
          namespace,
          slotScopeIds,
          optimized
        );
        if (suspense.deps <= 0) {
          suspense.resolve();
        } else {
          patch(
            activeBranch,
            newFallback,
            container,
            anchor,
            parentComponent,
            null,
            // fallback tree will not have suspense context
            namespace,
            slotScopeIds,
            optimized
          );
          setActiveBranch(suspense, newFallback);
        }
      } else if (activeBranch && isSameVNodeType(activeBranch, newBranch)) {
        patch(
          activeBranch,
          newBranch,
          container,
          anchor,
          parentComponent,
          suspense,
          namespace,
          slotScopeIds,
          optimized
        );
        suspense.resolve(true);
      } else {
        patch(
          null,
          newBranch,
          suspense.hiddenContainer,
          null,
          parentComponent,
          suspense,
          namespace,
          slotScopeIds,
          optimized
        );
        if (suspense.deps <= 0) {
          suspense.resolve();
        }
      }
    }
  } else {
    if (activeBranch && isSameVNodeType(activeBranch, newBranch)) {
      patch(
        activeBranch,
        newBranch,
        container,
        anchor,
        parentComponent,
        suspense,
        namespace,
        slotScopeIds,
        optimized
      );
      setActiveBranch(suspense, newBranch);
    } else {
      triggerEvent(n2, "onPending");
      suspense.pendingBranch = newBranch;
      if (newBranch.shapeFlag & 512) {
        suspense.pendingId = newBranch.component.suspenseId;
      } else {
        suspense.pendingId = suspenseId++;
      }
      patch(
        null,
        newBranch,
        suspense.hiddenContainer,
        null,
        parentComponent,
        suspense,
        namespace,
        slotScopeIds,
        optimized
      );
      if (suspense.deps <= 0) {
        suspense.resolve();
      } else {
        const { timeout, pendingId } = suspense;
        if (timeout > 0) {
          setTimeout(() => {
            if (suspense.pendingId === pendingId) {
              suspense.fallback(newFallback);
            }
          }, timeout);
        } else if (timeout === 0) {
          suspense.fallback(newFallback);
        }
      }
    }
  }
}
function createSuspenseBoundary(vnode, parentSuspense, parentComponent, container, hiddenContainer, anchor, namespace, slotScopeIds, optimized, rendererInternals, isHydrating = false) {
  const {
    p: patch,
    m: move,
    um: unmount,
    n: next,
    o: { parentNode, remove: remove2 }
  } = rendererInternals;
  let parentSuspenseId;
  const isSuspensible = isVNodeSuspensible(vnode);
  if (isSuspensible) {
    if (parentSuspense && parentSuspense.pendingBranch) {
      parentSuspenseId = parentSuspense.pendingId;
      parentSuspense.deps++;
    }
  }
  const timeout = vnode.props ? toNumber(vnode.props.timeout) : void 0;
  const initialAnchor = anchor;
  const suspense = {
    vnode,
    parent: parentSuspense,
    parentComponent,
    namespace,
    container,
    hiddenContainer,
    deps: 0,
    pendingId: suspenseId++,
    timeout: typeof timeout === "number" ? timeout : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: !isHydrating,
    isHydrating,
    isUnmounted: false,
    effects: [],
    resolve(resume = false, sync = false) {
      const {
        vnode: vnode2,
        activeBranch,
        pendingBranch,
        pendingId,
        effects,
        parentComponent: parentComponent2,
        container: container2,
        isInFallback
      } = suspense;
      let delayEnter = false;
      if (suspense.isHydrating) {
        suspense.isHydrating = false;
      } else if (!resume) {
        delayEnter = activeBranch && pendingBranch.transition && pendingBranch.transition.mode === "out-in";
        if (delayEnter) {
          activeBranch.transition.afterLeave = () => {
            if (pendingId === suspense.pendingId) {
              move(
                pendingBranch,
                container2,
                anchor === initialAnchor ? next(activeBranch) : anchor,
                0
              );
              queuePostFlushCb(effects);
              if (isInFallback && vnode2.ssFallback) {
                vnode2.ssFallback.el = null;
              }
            }
          };
        }
        if (activeBranch) {
          if (parentNode(activeBranch.el) === container2) {
            anchor = next(activeBranch);
          }
          unmount(activeBranch, parentComponent2, suspense, true);
          if (!delayEnter && isInFallback && vnode2.ssFallback) {
            queuePostRenderEffect(() => vnode2.ssFallback.el = null, suspense);
          }
        }
        if (!delayEnter) {
          move(pendingBranch, container2, anchor, 0);
        }
      }
      setActiveBranch(suspense, pendingBranch);
      suspense.pendingBranch = null;
      suspense.isInFallback = false;
      let parent = suspense.parent;
      let hasUnresolvedAncestor = false;
      while (parent) {
        if (parent.pendingBranch) {
          parent.effects.push(...effects);
          hasUnresolvedAncestor = true;
          break;
        }
        parent = parent.parent;
      }
      if (!hasUnresolvedAncestor && !delayEnter) {
        queuePostFlushCb(effects);
      }
      suspense.effects = [];
      if (isSuspensible) {
        if (parentSuspense && parentSuspense.pendingBranch && parentSuspenseId === parentSuspense.pendingId) {
          parentSuspense.deps--;
          if (parentSuspense.deps === 0 && !sync) {
            parentSuspense.resolve();
          }
        }
      }
      triggerEvent(vnode2, "onResolve");
    },
    fallback(fallbackVNode) {
      if (!suspense.pendingBranch) {
        return;
      }
      const { vnode: vnode2, activeBranch, parentComponent: parentComponent2, container: container2, namespace: namespace2 } = suspense;
      triggerEvent(vnode2, "onFallback");
      const anchor2 = next(activeBranch);
      const mountFallback = () => {
        if (!suspense.isInFallback) {
          return;
        }
        patch(
          null,
          fallbackVNode,
          container2,
          anchor2,
          parentComponent2,
          null,
          // fallback tree will not have suspense context
          namespace2,
          slotScopeIds,
          optimized
        );
        setActiveBranch(suspense, fallbackVNode);
      };
      const delayEnter = fallbackVNode.transition && fallbackVNode.transition.mode === "out-in";
      if (delayEnter) {
        activeBranch.transition.afterLeave = mountFallback;
      }
      suspense.isInFallback = true;
      unmount(
        activeBranch,
        parentComponent2,
        null,
        // no suspense so unmount hooks fire now
        true
        // shouldRemove
      );
      if (!delayEnter) {
        mountFallback();
      }
    },
    move(container2, anchor2, type) {
      suspense.activeBranch && move(suspense.activeBranch, container2, anchor2, type);
      suspense.container = container2;
    },
    next() {
      return suspense.activeBranch && next(suspense.activeBranch);
    },
    registerDep(instance, setupRenderEffect, optimized2) {
      const isInPendingSuspense = !!suspense.pendingBranch;
      if (isInPendingSuspense) {
        suspense.deps++;
      }
      const hydratedEl = instance.vnode.el;
      instance.asyncDep.catch((err) => {
        handleError(err, instance, 0);
      }).then((asyncSetupResult) => {
        if (instance.isUnmounted || suspense.isUnmounted || suspense.pendingId !== instance.suspenseId) {
          return;
        }
        instance.asyncResolved = true;
        const { vnode: vnode2 } = instance;
        handleSetupResult(instance, asyncSetupResult, false);
        if (hydratedEl) {
          vnode2.el = hydratedEl;
        }
        const placeholder = !hydratedEl && instance.subTree.el;
        setupRenderEffect(
          instance,
          vnode2,
          // component may have been moved before resolve.
          // if this is not a hydration, instance.subTree will be the comment
          // placeholder.
          parentNode(hydratedEl || instance.subTree.el),
          // anchor will not be used if this is hydration, so only need to
          // consider the comment placeholder case.
          hydratedEl ? null : next(instance.subTree),
          suspense,
          namespace,
          optimized2
        );
        if (placeholder) {
          vnode2.placeholder = null;
          remove2(placeholder);
        }
        updateHOCHostEl(instance, vnode2.el);
        if (isInPendingSuspense && --suspense.deps === 0) {
          suspense.resolve();
        }
      });
    },
    unmount(parentSuspense2, doRemove) {
      suspense.isUnmounted = true;
      if (suspense.activeBranch) {
        unmount(
          suspense.activeBranch,
          parentComponent,
          parentSuspense2,
          doRemove
        );
      }
      if (suspense.pendingBranch) {
        unmount(
          suspense.pendingBranch,
          parentComponent,
          parentSuspense2,
          doRemove
        );
      }
    }
  };
  return suspense;
}
function hydrateSuspense(node, vnode, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, rendererInternals, hydrateNode) {
  const suspense = vnode.suspense = createSuspenseBoundary(
    vnode,
    parentSuspense,
    parentComponent,
    node.parentNode,
    // eslint-disable-next-line no-restricted-globals
    document.createElement("div"),
    null,
    namespace,
    slotScopeIds,
    optimized,
    rendererInternals,
    true
  );
  const result = hydrateNode(
    node,
    suspense.pendingBranch = vnode.ssContent,
    parentComponent,
    suspense,
    slotScopeIds,
    optimized
  );
  if (suspense.deps === 0) {
    suspense.resolve(false, true);
  }
  return result;
}
function normalizeSuspenseChildren(vnode) {
  const { shapeFlag, children } = vnode;
  const isSlotChildren = shapeFlag & 32;
  vnode.ssContent = normalizeSuspenseSlot(
    isSlotChildren ? children.default : children
  );
  vnode.ssFallback = isSlotChildren ? normalizeSuspenseSlot(children.fallback) : createVNode(Comment);
}
function normalizeSuspenseSlot(s) {
  let block;
  if (isFunction(s)) {
    const trackBlock = isBlockTreeEnabled && s._c;
    if (trackBlock) {
      s._d = false;
      openBlock();
    }
    s = s();
    if (trackBlock) {
      s._d = true;
      block = currentBlock;
      closeBlock();
    }
  }
  if (isArray(s)) {
    const singleChild = filterSingleRoot(s);
    s = singleChild;
  }
  s = normalizeVNode(s);
  if (block && !s.dynamicChildren) {
    s.dynamicChildren = block.filter((c) => c !== s);
  }
  return s;
}
function queueEffectWithSuspense(fn, suspense) {
  if (suspense && suspense.pendingBranch) {
    if (isArray(fn)) {
      suspense.effects.push(...fn);
    } else {
      suspense.effects.push(fn);
    }
  } else {
    queuePostFlushCb(fn);
  }
}
function setActiveBranch(suspense, branch) {
  suspense.activeBranch = branch;
  const { vnode, parentComponent } = suspense;
  let el = branch.el;
  while (!el && branch.component) {
    branch = branch.component.subTree;
    el = branch.el;
  }
  vnode.el = el;
  if (parentComponent && parentComponent.subTree === vnode) {
    parentComponent.vnode.el = el;
    updateHOCHostEl(parentComponent, el);
  }
}
function isVNodeSuspensible(vnode) {
  const suspensible = vnode.props && vnode.props.suspensible;
  return suspensible != null && suspensible !== false;
}
const Fragment = /* @__PURE__ */ Symbol.for("v-fgt");
const Text = /* @__PURE__ */ Symbol.for("v-txt");
const Comment = /* @__PURE__ */ Symbol.for("v-cmt");
const Static = /* @__PURE__ */ Symbol.for("v-stc");
const blockStack = [];
let currentBlock = null;
function openBlock(disableTracking = false) {
  blockStack.push(currentBlock = disableTracking ? null : []);
}
function closeBlock() {
  blockStack.pop();
  currentBlock = blockStack[blockStack.length - 1] || null;
}
let isBlockTreeEnabled = 1;
function setBlockTracking(value, inVOnce = false) {
  isBlockTreeEnabled += value;
  if (value < 0 && currentBlock && inVOnce) {
    currentBlock.hasOnce = true;
  }
}
function setupBlock(vnode) {
  vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
  closeBlock();
  if (isBlockTreeEnabled > 0 && currentBlock) {
    currentBlock.push(vnode);
  }
  return vnode;
}
function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
  return setupBlock(
    createBaseVNode(
      type,
      props,
      children,
      patchFlag,
      dynamicProps,
      shapeFlag,
      true
    )
  );
}
function createBlock(type, props, children, patchFlag, dynamicProps) {
  return setupBlock(
    createVNode(
      type,
      props,
      children,
      patchFlag,
      dynamicProps,
      true
    )
  );
}
function isVNode(value) {
  return value ? value.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
  return n1.type === n2.type && n1.key === n2.key;
}
function transformVNodeArgs(transformer) {
}
const normalizeKey = ({ key }) => key != null ? key : null;
const normalizeRef = ({
  ref: ref3,
  ref_key,
  ref_for
}) => {
  if (typeof ref3 === "number") {
    ref3 = "" + ref3;
  }
  return ref3 != null ? isString(ref3) || /* @__PURE__ */ isRef(ref3) || isFunction(ref3) ? { i: currentRenderingInstance, r: ref3, k: ref_key, f: !!ref_for } : ref3 : null;
};
function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
  const vnode = {
    __v_isVNode: true,
    __v_skip: true,
    type,
    props,
    key: props && normalizeKey(props),
    ref: props && normalizeRef(props),
    scopeId: currentScopeId,
    slotScopeIds: null,
    children,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag,
    patchFlag,
    dynamicProps,
    dynamicChildren: null,
    appContext: null,
    ctx: currentRenderingInstance
  };
  if (needFullChildrenNormalization) {
    normalizeChildren(vnode, children);
    if (shapeFlag & 128) {
      type.normalize(vnode);
    }
  } else if (children) {
    vnode.shapeFlag |= isString(children) ? 8 : 16;
  }
  if (isBlockTreeEnabled > 0 && // avoid a block node from tracking itself
  !isBlockNode && // has current parent block
  currentBlock && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (vnode.patchFlag > 0 || shapeFlag & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  vnode.patchFlag !== 32) {
    currentBlock.push(vnode);
  }
  return vnode;
}
const createVNode = _createVNode;
function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
  if (!type || type === NULL_DYNAMIC_COMPONENT) {
    type = Comment;
  }
  if (isVNode(type)) {
    const cloned = cloneVNode(
      type,
      props,
      true
      /* mergeRef: true */
    );
    if (children) {
      normalizeChildren(cloned, children);
    }
    if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
      if (cloned.shapeFlag & 6) {
        currentBlock[currentBlock.indexOf(type)] = cloned;
      } else {
        currentBlock.push(cloned);
      }
    }
    cloned.patchFlag = -2;
    return cloned;
  }
  if (isClassComponent(type)) {
    type = type.__vccOpts;
  }
  if (props) {
    props = guardReactiveProps(props);
    let { class: klass, style } = props;
    if (klass && !isString(klass)) {
      props.class = normalizeClass(klass);
    }
    if (isObject$1(style)) {
      if (/* @__PURE__ */ isProxy(style) && !isArray(style)) {
        style = extend({}, style);
      }
      props.style = normalizeStyle(style);
    }
  }
  const shapeFlag = isString(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject$1(type) ? 4 : isFunction(type) ? 2 : 0;
  return createBaseVNode(
    type,
    props,
    children,
    patchFlag,
    dynamicProps,
    shapeFlag,
    isBlockNode,
    true
  );
}
function guardReactiveProps(props) {
  if (!props) return null;
  return /* @__PURE__ */ isProxy(props) || isInternalObject(props) ? extend({}, props) : props;
}
function cloneVNode(vnode, extraProps, mergeRef = false, cloneTransition = false) {
  const { props, ref: ref3, patchFlag, children, transition } = vnode;
  const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
  const cloned = {
    __v_isVNode: true,
    __v_skip: true,
    type: vnode.type,
    props: mergedProps,
    key: mergedProps && normalizeKey(mergedProps),
    ref: extraProps && extraProps.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      mergeRef && ref3 ? isArray(ref3) ? ref3.concat(normalizeRef(extraProps)) : [ref3, normalizeRef(extraProps)] : normalizeRef(extraProps)
    ) : ref3,
    scopeId: vnode.scopeId,
    slotScopeIds: vnode.slotScopeIds,
    children,
    target: vnode.target,
    targetStart: vnode.targetStart,
    targetAnchor: vnode.targetAnchor,
    staticCount: vnode.staticCount,
    shapeFlag: vnode.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
    dynamicProps: vnode.dynamicProps,
    dynamicChildren: vnode.dynamicChildren,
    appContext: vnode.appContext,
    dirs: vnode.dirs,
    transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: vnode.component,
    suspense: vnode.suspense,
    ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
    ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
    placeholder: vnode.placeholder,
    el: vnode.el,
    anchor: vnode.anchor,
    ctx: vnode.ctx,
    ce: vnode.ce
  };
  if (transition && cloneTransition) {
    setTransitionHooks(
      cloned,
      transition.clone(cloned)
    );
  }
  return cloned;
}
function createTextVNode(text2 = " ", flag = 0) {
  return createVNode(Text, null, text2, flag);
}
function createStaticVNode(content, numberOfNodes) {
  const vnode = createVNode(Static, null, content);
  vnode.staticCount = numberOfNodes;
  return vnode;
}
function createCommentVNode(text2 = "", asBlock = false) {
  return asBlock ? (openBlock(), createBlock(Comment, null, text2)) : createVNode(Comment, null, text2);
}
function normalizeVNode(child) {
  if (child == null || typeof child === "boolean") {
    return createVNode(Comment);
  } else if (isArray(child)) {
    return createVNode(
      Fragment,
      null,
      // #3666, avoid reference pollution when reusing vnode
      child.slice()
    );
  } else if (isVNode(child)) {
    return cloneIfMounted(child);
  } else {
    return createVNode(Text, null, String(child));
  }
}
function cloneIfMounted(child) {
  return child.el === null && child.patchFlag !== -1 || child.memo ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
  let type = 0;
  const { shapeFlag } = vnode;
  if (children == null) {
    children = null;
  } else if (isArray(children)) {
    type = 16;
  } else if (typeof children === "object") {
    if (shapeFlag & (1 | 64)) {
      const slot = children.default;
      if (slot) {
        slot._c && (slot._d = false);
        normalizeChildren(vnode, slot());
        slot._c && (slot._d = true);
      }
      return;
    } else {
      type = 32;
      const slotFlag = children._;
      if (!slotFlag && !isInternalObject(children)) {
        children._ctx = currentRenderingInstance;
      } else if (slotFlag === 3 && currentRenderingInstance) {
        if (currentRenderingInstance.slots._ === 1) {
          children._ = 1;
        } else {
          children._ = 2;
          vnode.patchFlag |= 1024;
        }
      }
    }
  } else if (isFunction(children)) {
    children = { default: children, _ctx: currentRenderingInstance };
    type = 32;
  } else {
    children = String(children);
    if (shapeFlag & 64) {
      type = 16;
      children = [createTextVNode(children)];
    } else {
      type = 8;
    }
  }
  vnode.children = children;
  vnode.shapeFlag |= type;
}
function mergeProps(...args) {
  const ret = {};
  for (let i = 0; i < args.length; i++) {
    const toMerge = args[i];
    for (const key in toMerge) {
      if (key === "class") {
        if (ret.class !== toMerge.class) {
          ret.class = normalizeClass([ret.class, toMerge.class]);
        }
      } else if (key === "style") {
        ret.style = normalizeStyle([ret.style, toMerge.style]);
      } else if (isOn(key)) {
        const existing = ret[key];
        const incoming = toMerge[key];
        if (incoming && existing !== incoming && !(isArray(existing) && existing.includes(incoming))) {
          ret[key] = existing ? [].concat(existing, incoming) : incoming;
        }
      } else if (key !== "") {
        ret[key] = toMerge[key];
      }
    }
  }
  return ret;
}
function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
  callWithAsyncErrorHandling(hook, instance, 7, [
    vnode,
    prevVNode
  ]);
}
const emptyAppContext = createAppContext();
let uid = 0;
function createComponentInstance(vnode, parent, suspense) {
  const type = vnode.type;
  const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
  const instance = {
    uid: uid++,
    vnode,
    type,
    parent,
    appContext,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new EffectScope(
      true
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: parent ? parent.provides : Object.create(appContext.provides),
    ids: parent ? parent.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: normalizePropsOptions(type, appContext),
    emitsOptions: normalizeEmitsOptions(type, appContext),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: EMPTY_OBJ,
    // inheritAttrs
    inheritAttrs: type.inheritAttrs,
    // state
    ctx: EMPTY_OBJ,
    data: EMPTY_OBJ,
    props: EMPTY_OBJ,
    attrs: EMPTY_OBJ,
    slots: EMPTY_OBJ,
    refs: EMPTY_OBJ,
    setupState: EMPTY_OBJ,
    setupContext: null,
    // suspense related
    suspense,
    suspenseId: suspense ? suspense.pendingId : 0,
    asyncDep: null,
    asyncResolved: false,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: false,
    isUnmounted: false,
    isDeactivated: false,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  {
    instance.ctx = { _: instance };
  }
  instance.root = parent ? parent.root : instance;
  instance.emit = emit.bind(null, instance);
  if (vnode.ce) {
    vnode.ce(instance);
  }
  return instance;
}
let currentInstance = null;
const getCurrentInstance = () => currentInstance || currentRenderingInstance;
let internalSetCurrentInstance;
let setInSSRSetupState;
{
  const g = getGlobalThis();
  const registerGlobalSetter = (key, setter) => {
    let setters;
    if (!(setters = g[key])) setters = g[key] = [];
    setters.push(setter);
    return (v) => {
      if (setters.length > 1) setters.forEach((set) => set(v));
      else setters[0](v);
    };
  };
  internalSetCurrentInstance = registerGlobalSetter(
    `__VUE_INSTANCE_SETTERS__`,
    (v) => currentInstance = v
  );
  setInSSRSetupState = registerGlobalSetter(
    `__VUE_SSR_SETTERS__`,
    (v) => isInSSRComponentSetup = v
  );
}
const setCurrentInstance = (instance) => {
  const prev = currentInstance;
  internalSetCurrentInstance(instance);
  instance.scope.on();
  return () => {
    instance.scope.off();
    internalSetCurrentInstance(prev);
  };
};
const unsetCurrentInstance = () => {
  currentInstance && currentInstance.scope.off();
  internalSetCurrentInstance(null);
};
function isStatefulComponent(instance) {
  return instance.vnode.shapeFlag & 4;
}
let isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false, optimized = false) {
  isSSR && setInSSRSetupState(isSSR);
  const { props, children } = instance.vnode;
  const isStateful = isStatefulComponent(instance);
  initProps(instance, props, isStateful, isSSR);
  initSlots(instance, children, optimized || isSSR);
  const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
  isSSR && setInSSRSetupState(false);
  return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
  const Component = instance.type;
  instance.accessCache = /* @__PURE__ */ Object.create(null);
  instance.proxy = new Proxy(instance.ctx, PublicInstanceProxyHandlers);
  const { setup } = Component;
  if (setup) {
    pauseTracking();
    const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
    const reset = setCurrentInstance(instance);
    const setupResult = callWithErrorHandling(
      setup,
      instance,
      0,
      [
        instance.props,
        setupContext
      ]
    );
    const isAsyncSetup = isPromise(setupResult);
    resetTracking();
    reset();
    if ((isAsyncSetup || instance.sp) && !isAsyncWrapper(instance)) {
      markAsyncBoundary(instance);
    }
    if (isAsyncSetup) {
      setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
      if (isSSR) {
        return setupResult.then((resolvedResult) => {
          handleSetupResult(instance, resolvedResult, isSSR);
        }).catch((e) => {
          handleError(e, instance, 0);
        });
      } else {
        instance.asyncDep = setupResult;
      }
    } else {
      handleSetupResult(instance, setupResult, isSSR);
    }
  } else {
    finishComponentSetup(instance, isSSR);
  }
}
function handleSetupResult(instance, setupResult, isSSR) {
  if (isFunction(setupResult)) {
    if (instance.type.__ssrInlineRender) {
      instance.ssrRender = setupResult;
    } else {
      instance.render = setupResult;
    }
  } else if (isObject$1(setupResult)) {
    instance.setupState = proxyRefs(setupResult);
  } else ;
  finishComponentSetup(instance, isSSR);
}
let compile;
let installWithProxy;
function registerRuntimeCompiler(_compile) {
  compile = _compile;
  installWithProxy = (i) => {
    if (i.render._rc) {
      i.withProxy = new Proxy(i.ctx, RuntimeCompiledPublicInstanceProxyHandlers);
    }
  };
}
const isRuntimeOnly = () => !compile;
function finishComponentSetup(instance, isSSR, skipOptions) {
  const Component = instance.type;
  if (!instance.render) {
    if (!isSSR && compile && !Component.render) {
      const template = Component.template || resolveMergedOptions(instance).template;
      if (template) {
        const { isCustomElement, compilerOptions } = instance.appContext.config;
        const { delimiters, compilerOptions: componentCompilerOptions } = Component;
        const finalCompilerOptions = extend(
          extend(
            {
              isCustomElement,
              delimiters
            },
            compilerOptions
          ),
          componentCompilerOptions
        );
        Component.render = compile(template, finalCompilerOptions);
      }
    }
    instance.render = Component.render || NOOP;
    if (installWithProxy) {
      installWithProxy(instance);
    }
  }
  {
    const reset = setCurrentInstance(instance);
    pauseTracking();
    try {
      applyOptions(instance);
    } finally {
      resetTracking();
      reset();
    }
  }
}
const attrsProxyHandlers = {
  get(target, key) {
    track(target, "get", "");
    return target[key];
  }
};
function createSetupContext(instance) {
  const expose = (exposed) => {
    instance.exposed = exposed || {};
  };
  {
    return {
      attrs: new Proxy(instance.attrs, attrsProxyHandlers),
      slots: instance.slots,
      emit: instance.emit,
      expose
    };
  }
}
function getComponentPublicInstance(instance) {
  if (instance.exposed) {
    return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
      get(target, key) {
        if (key in target) {
          return target[key];
        } else if (key in publicPropertiesMap) {
          return publicPropertiesMap[key](instance);
        }
      },
      has(target, key) {
        return key in target || key in publicPropertiesMap;
      }
    }));
  } else {
    return instance.proxy;
  }
}
const classifyRE = /(?:^|[-_])\w/g;
const classify = (str) => str.replace(classifyRE, (c) => c.toUpperCase()).replace(/[-_]/g, "");
function getComponentName(Component, includeInferred = true) {
  return isFunction(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
}
function formatComponentName(instance, Component, isRoot = false) {
  let name = getComponentName(Component);
  if (!name && Component.__file) {
    const match = Component.__file.match(/([^/\\]+)\.\w+$/);
    if (match) {
      name = match[1];
    }
  }
  if (!name && instance) {
    const inferFromRegistry = (registry) => {
      for (const key in registry) {
        if (registry[key] === Component) {
          return key;
        }
      }
    };
    name = inferFromRegistry(instance.components) || instance.parent && inferFromRegistry(
      instance.parent.type.components
    ) || inferFromRegistry(instance.appContext.components);
  }
  return name ? classify(name) : isRoot ? `App` : `Anonymous`;
}
function isClassComponent(value) {
  return isFunction(value) && "__vccOpts" in value;
}
const computed = (getterOrOptions, debugOptions) => {
  const c = /* @__PURE__ */ computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
  return c;
};
function h(type, propsOrChildren, children) {
  try {
    setBlockTracking(-1);
    const l = arguments.length;
    if (l === 2) {
      if (isObject$1(propsOrChildren) && !isArray(propsOrChildren)) {
        if (isVNode(propsOrChildren)) {
          return createVNode(type, null, [propsOrChildren]);
        }
        return createVNode(type, propsOrChildren);
      } else {
        return createVNode(type, null, propsOrChildren);
      }
    } else {
      if (l > 3) {
        children = Array.prototype.slice.call(arguments, 2);
      } else if (l === 3 && isVNode(children)) {
        children = [children];
      }
      return createVNode(type, propsOrChildren, children);
    }
  } finally {
    setBlockTracking(1);
  }
}
function initCustomFormatter() {
  {
    return;
  }
}
function withMemo(memo, render2, cache, index) {
  const cached = cache[index];
  if (cached && isMemoSame(cached, memo)) {
    return cached;
  }
  const ret = render2();
  ret.memo = memo.slice();
  ret.cacheIndex = index;
  return cache[index] = ret;
}
function isMemoSame(cached, memo) {
  const prev = cached.memo;
  if (prev.length != memo.length) {
    return false;
  }
  for (let i = 0; i < prev.length; i++) {
    if (hasChanged(prev[i], memo[i])) {
      return false;
    }
  }
  if (isBlockTreeEnabled > 0 && currentBlock) {
    currentBlock.push(cached);
  }
  return true;
}
const version = "3.5.29";
const warn = NOOP;
const ErrorTypeStrings = ErrorTypeStrings$1;
const devtools = devtools$1;
const setDevtoolsHook = setDevtoolsHook$1;
const _ssrUtils = {
  createComponentInstance,
  setupComponent,
  renderComponentRoot,
  setCurrentRenderingInstance,
  isVNode,
  normalizeVNode,
  getComponentPublicInstance,
  ensureValidVNode,
  pushWarningContext,
  popWarningContext
};
const ssrUtils = _ssrUtils;
const resolveFilter = null;
const compatUtils = null;
const DeprecationTypes = null;
let policy = void 0;
const tt = typeof window !== "undefined" && window.trustedTypes;
if (tt) {
  try {
    policy = /* @__PURE__ */ tt.createPolicy("vue", {
      createHTML: (val) => val
    });
  } catch (e) {
  }
}
const unsafeToTrustedHTML = policy ? (val) => policy.createHTML(val) : (val) => val;
const svgNS = "http://www.w3.org/2000/svg";
const mathmlNS = "http://www.w3.org/1998/Math/MathML";
const doc = typeof document !== "undefined" ? document : null;
const templateContainer = doc && /* @__PURE__ */ doc.createElement("template");
const nodeOps = {
  insert: (child, parent, anchor) => {
    parent.insertBefore(child, anchor || null);
  },
  remove: (child) => {
    const parent = child.parentNode;
    if (parent) {
      parent.removeChild(child);
    }
  },
  createElement: (tag, namespace, is, props) => {
    const el = namespace === "svg" ? doc.createElementNS(svgNS, tag) : namespace === "mathml" ? doc.createElementNS(mathmlNS, tag) : is ? doc.createElement(tag, { is }) : doc.createElement(tag);
    if (tag === "select" && props && props.multiple != null) {
      el.setAttribute("multiple", props.multiple);
    }
    return el;
  },
  createText: (text2) => doc.createTextNode(text2),
  createComment: (text2) => doc.createComment(text2),
  setText: (node, text2) => {
    node.nodeValue = text2;
  },
  setElementText: (el, text2) => {
    el.textContent = text2;
  },
  parentNode: (node) => node.parentNode,
  nextSibling: (node) => node.nextSibling,
  querySelector: (selector) => doc.querySelector(selector),
  setScopeId(el, id) {
    el.setAttribute(id, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(content, parent, anchor, namespace, start, end) {
    const before = anchor ? anchor.previousSibling : parent.lastChild;
    if (start && (start === end || start.nextSibling)) {
      while (true) {
        parent.insertBefore(start.cloneNode(true), anchor);
        if (start === end || !(start = start.nextSibling)) break;
      }
    } else {
      templateContainer.innerHTML = unsafeToTrustedHTML(
        namespace === "svg" ? `<svg>${content}</svg>` : namespace === "mathml" ? `<math>${content}</math>` : content
      );
      const template = templateContainer.content;
      if (namespace === "svg" || namespace === "mathml") {
        const wrapper = template.firstChild;
        while (wrapper.firstChild) {
          template.appendChild(wrapper.firstChild);
        }
        template.removeChild(wrapper);
      }
      parent.insertBefore(template, anchor);
    }
    return [
      // first
      before ? before.nextSibling : parent.firstChild,
      // last
      anchor ? anchor.previousSibling : parent.lastChild
    ];
  }
};
const TRANSITION = "transition";
const ANIMATION = "animation";
const vtcKey = /* @__PURE__ */ Symbol("_vtc");
const DOMTransitionPropsValidators = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: true
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
const TransitionPropsValidators = /* @__PURE__ */ extend(
  {},
  BaseTransitionPropsValidators,
  DOMTransitionPropsValidators
);
const decorate$1 = (t) => {
  t.displayName = "Transition";
  t.props = TransitionPropsValidators;
  return t;
};
const Transition = /* @__PURE__ */ decorate$1(
  (props, { slots }) => h(BaseTransition, resolveTransitionProps(props), slots)
);
const callHook = (hook, args = []) => {
  if (isArray(hook)) {
    hook.forEach((h2) => h2(...args));
  } else if (hook) {
    hook(...args);
  }
};
const hasExplicitCallback = (hook) => {
  return hook ? isArray(hook) ? hook.some((h2) => h2.length > 1) : hook.length > 1 : false;
};
function resolveTransitionProps(rawProps) {
  const baseProps = {};
  for (const key in rawProps) {
    if (!(key in DOMTransitionPropsValidators)) {
      baseProps[key] = rawProps[key];
    }
  }
  if (rawProps.css === false) {
    return baseProps;
  }
  const {
    name = "v",
    type,
    duration,
    enterFromClass = `${name}-enter-from`,
    enterActiveClass = `${name}-enter-active`,
    enterToClass = `${name}-enter-to`,
    appearFromClass = enterFromClass,
    appearActiveClass = enterActiveClass,
    appearToClass = enterToClass,
    leaveFromClass = `${name}-leave-from`,
    leaveActiveClass = `${name}-leave-active`,
    leaveToClass = `${name}-leave-to`
  } = rawProps;
  const durations = normalizeDuration(duration);
  const enterDuration = durations && durations[0];
  const leaveDuration = durations && durations[1];
  const {
    onBeforeEnter,
    onEnter,
    onEnterCancelled,
    onLeave,
    onLeaveCancelled,
    onBeforeAppear = onBeforeEnter,
    onAppear = onEnter,
    onAppearCancelled = onEnterCancelled
  } = baseProps;
  const finishEnter = (el, isAppear, done, isCancelled) => {
    el._enterCancelled = isCancelled;
    removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
    removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
    done && done();
  };
  const finishLeave = (el, done) => {
    el._isLeaving = false;
    removeTransitionClass(el, leaveFromClass);
    removeTransitionClass(el, leaveToClass);
    removeTransitionClass(el, leaveActiveClass);
    done && done();
  };
  const makeEnterHook = (isAppear) => {
    return (el, done) => {
      const hook = isAppear ? onAppear : onEnter;
      const resolve2 = () => finishEnter(el, isAppear, done);
      callHook(hook, [el, resolve2]);
      nextFrame(() => {
        removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
        addTransitionClass(el, isAppear ? appearToClass : enterToClass);
        if (!hasExplicitCallback(hook)) {
          whenTransitionEnds(el, type, enterDuration, resolve2);
        }
      });
    };
  };
  return extend(baseProps, {
    onBeforeEnter(el) {
      callHook(onBeforeEnter, [el]);
      addTransitionClass(el, enterFromClass);
      addTransitionClass(el, enterActiveClass);
    },
    onBeforeAppear(el) {
      callHook(onBeforeAppear, [el]);
      addTransitionClass(el, appearFromClass);
      addTransitionClass(el, appearActiveClass);
    },
    onEnter: makeEnterHook(false),
    onAppear: makeEnterHook(true),
    onLeave(el, done) {
      el._isLeaving = true;
      const resolve2 = () => finishLeave(el, done);
      addTransitionClass(el, leaveFromClass);
      if (!el._enterCancelled) {
        forceReflow(el);
        addTransitionClass(el, leaveActiveClass);
      } else {
        addTransitionClass(el, leaveActiveClass);
        forceReflow(el);
      }
      nextFrame(() => {
        if (!el._isLeaving) {
          return;
        }
        removeTransitionClass(el, leaveFromClass);
        addTransitionClass(el, leaveToClass);
        if (!hasExplicitCallback(onLeave)) {
          whenTransitionEnds(el, type, leaveDuration, resolve2);
        }
      });
      callHook(onLeave, [el, resolve2]);
    },
    onEnterCancelled(el) {
      finishEnter(el, false, void 0, true);
      callHook(onEnterCancelled, [el]);
    },
    onAppearCancelled(el) {
      finishEnter(el, true, void 0, true);
      callHook(onAppearCancelled, [el]);
    },
    onLeaveCancelled(el) {
      finishLeave(el);
      callHook(onLeaveCancelled, [el]);
    }
  });
}
function normalizeDuration(duration) {
  if (duration == null) {
    return null;
  } else if (isObject$1(duration)) {
    return [NumberOf(duration.enter), NumberOf(duration.leave)];
  } else {
    const n = NumberOf(duration);
    return [n, n];
  }
}
function NumberOf(val) {
  const res = toNumber(val);
  return res;
}
function addTransitionClass(el, cls) {
  cls.split(/\s+/).forEach((c) => c && el.classList.add(c));
  (el[vtcKey] || (el[vtcKey] = /* @__PURE__ */ new Set())).add(cls);
}
function removeTransitionClass(el, cls) {
  cls.split(/\s+/).forEach((c) => c && el.classList.remove(c));
  const _vtc = el[vtcKey];
  if (_vtc) {
    _vtc.delete(cls);
    if (!_vtc.size) {
      el[vtcKey] = void 0;
    }
  }
}
function nextFrame(cb) {
  requestAnimationFrame(() => {
    requestAnimationFrame(cb);
  });
}
let endId = 0;
function whenTransitionEnds(el, expectedType, explicitTimeout, resolve2) {
  const id = el._endId = ++endId;
  const resolveIfNotStale = () => {
    if (id === el._endId) {
      resolve2();
    }
  };
  if (explicitTimeout != null) {
    return setTimeout(resolveIfNotStale, explicitTimeout);
  }
  const { type, timeout, propCount } = getTransitionInfo(el, expectedType);
  if (!type) {
    return resolve2();
  }
  const endEvent = type + "end";
  let ended = 0;
  const end = () => {
    el.removeEventListener(endEvent, onEnd);
    resolveIfNotStale();
  };
  const onEnd = (e) => {
    if (e.target === el && ++ended >= propCount) {
      end();
    }
  };
  setTimeout(() => {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(endEvent, onEnd);
}
function getTransitionInfo(el, expectedType) {
  const styles = window.getComputedStyle(el);
  const getStyleProperties = (key) => (styles[key] || "").split(", ");
  const transitionDelays = getStyleProperties(`${TRANSITION}Delay`);
  const transitionDurations = getStyleProperties(`${TRANSITION}Duration`);
  const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  const animationDelays = getStyleProperties(`${ANIMATION}Delay`);
  const animationDurations = getStyleProperties(`${ANIMATION}Duration`);
  const animationTimeout = getTimeout(animationDelays, animationDurations);
  let type = null;
  let timeout = 0;
  let propCount = 0;
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }
  const hasTransform = type === TRANSITION && /\b(?:transform|all)(?:,|$)/.test(
    getStyleProperties(`${TRANSITION}Property`).toString()
  );
  return {
    type,
    timeout,
    propCount,
    hasTransform
  };
}
function getTimeout(delays, durations) {
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }
  return Math.max(...durations.map((d, i) => toMs(d) + toMs(delays[i])));
}
function toMs(s) {
  if (s === "auto") return 0;
  return Number(s.slice(0, -1).replace(",", ".")) * 1e3;
}
function forceReflow(el) {
  const targetDocument = el ? el.ownerDocument : document;
  return targetDocument.body.offsetHeight;
}
function patchClass(el, value, isSVG) {
  const transitionClasses = el[vtcKey];
  if (transitionClasses) {
    value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
  }
  if (value == null) {
    el.removeAttribute("class");
  } else if (isSVG) {
    el.setAttribute("class", value);
  } else {
    el.className = value;
  }
}
const vShowOriginalDisplay = /* @__PURE__ */ Symbol("_vod");
const vShowHidden = /* @__PURE__ */ Symbol("_vsh");
const vShow = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(el, { value }, { transition }) {
    el[vShowOriginalDisplay] = el.style.display === "none" ? "" : el.style.display;
    if (transition && value) {
      transition.beforeEnter(el);
    } else {
      setDisplay(el, value);
    }
  },
  mounted(el, { value }, { transition }) {
    if (transition && value) {
      transition.enter(el);
    }
  },
  updated(el, { value, oldValue }, { transition }) {
    if (!value === !oldValue) return;
    if (transition) {
      if (value) {
        transition.beforeEnter(el);
        setDisplay(el, true);
        transition.enter(el);
      } else {
        transition.leave(el, () => {
          setDisplay(el, false);
        });
      }
    } else {
      setDisplay(el, value);
    }
  },
  beforeUnmount(el, { value }) {
    setDisplay(el, value);
  }
};
function setDisplay(el, value) {
  el.style.display = value ? el[vShowOriginalDisplay] : "none";
  el[vShowHidden] = !value;
}
function initVShowForSSR() {
  vShow.getSSRProps = ({ value }) => {
    if (!value) {
      return { style: { display: "none" } };
    }
  };
}
const CSS_VAR_TEXT = /* @__PURE__ */ Symbol("");
function useCssVars(getter) {
  const instance = getCurrentInstance();
  if (!instance) {
    return;
  }
  const updateTeleports = instance.ut = (vars = getter(instance.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${instance.uid}"]`)
    ).forEach((node) => setVarsOnNode(node, vars));
  };
  const setVars = () => {
    const vars = getter(instance.proxy);
    if (instance.ce) {
      setVarsOnNode(instance.ce, vars);
    } else {
      setVarsOnVNode(instance.subTree, vars);
    }
    updateTeleports(vars);
  };
  onBeforeUpdate(() => {
    queuePostFlushCb(setVars);
  });
  onMounted(() => {
    watch(setVars, NOOP, { flush: "post" });
    const ob = new MutationObserver(setVars);
    ob.observe(instance.subTree.el.parentNode, { childList: true });
    onUnmounted(() => ob.disconnect());
  });
}
function setVarsOnVNode(vnode, vars) {
  if (vnode.shapeFlag & 128) {
    const suspense = vnode.suspense;
    vnode = suspense.activeBranch;
    if (suspense.pendingBranch && !suspense.isHydrating) {
      suspense.effects.push(() => {
        setVarsOnVNode(suspense.activeBranch, vars);
      });
    }
  }
  while (vnode.component) {
    vnode = vnode.component.subTree;
  }
  if (vnode.shapeFlag & 1 && vnode.el) {
    setVarsOnNode(vnode.el, vars);
  } else if (vnode.type === Fragment) {
    vnode.children.forEach((c) => setVarsOnVNode(c, vars));
  } else if (vnode.type === Static) {
    let { el, anchor } = vnode;
    while (el) {
      setVarsOnNode(el, vars);
      if (el === anchor) break;
      el = el.nextSibling;
    }
  }
}
function setVarsOnNode(el, vars) {
  if (el.nodeType === 1) {
    const style = el.style;
    let cssText = "";
    for (const key in vars) {
      const value = normalizeCssVarValue(vars[key]);
      style.setProperty(`--${key}`, value);
      cssText += `--${key}: ${value};`;
    }
    style[CSS_VAR_TEXT] = cssText;
  }
}
const displayRE = /(?:^|;)\s*display\s*:/;
function patchStyle(el, prev, next) {
  const style = el.style;
  const isCssString = isString(next);
  let hasControlledDisplay = false;
  if (next && !isCssString) {
    if (prev) {
      if (!isString(prev)) {
        for (const key in prev) {
          if (next[key] == null) {
            setStyle(style, key, "");
          }
        }
      } else {
        for (const prevStyle of prev.split(";")) {
          const key = prevStyle.slice(0, prevStyle.indexOf(":")).trim();
          if (next[key] == null) {
            setStyle(style, key, "");
          }
        }
      }
    }
    for (const key in next) {
      if (key === "display") {
        hasControlledDisplay = true;
      }
      setStyle(style, key, next[key]);
    }
  } else {
    if (isCssString) {
      if (prev !== next) {
        const cssVarText = style[CSS_VAR_TEXT];
        if (cssVarText) {
          next += ";" + cssVarText;
        }
        style.cssText = next;
        hasControlledDisplay = displayRE.test(next);
      }
    } else if (prev) {
      el.removeAttribute("style");
    }
  }
  if (vShowOriginalDisplay in el) {
    el[vShowOriginalDisplay] = hasControlledDisplay ? style.display : "";
    if (el[vShowHidden]) {
      style.display = "none";
    }
  }
}
const importantRE = /\s*!important$/;
function setStyle(style, name, val) {
  if (isArray(val)) {
    val.forEach((v) => setStyle(style, name, v));
  } else {
    if (val == null) val = "";
    if (name.startsWith("--")) {
      style.setProperty(name, val);
    } else {
      const prefixed = autoPrefix(style, name);
      if (importantRE.test(val)) {
        style.setProperty(
          hyphenate(prefixed),
          val.replace(importantRE, ""),
          "important"
        );
      } else {
        style[prefixed] = val;
      }
    }
  }
}
const prefixes = ["Webkit", "Moz", "ms"];
const prefixCache = {};
function autoPrefix(style, rawName) {
  const cached = prefixCache[rawName];
  if (cached) {
    return cached;
  }
  let name = camelize(rawName);
  if (name !== "filter" && name in style) {
    return prefixCache[rawName] = name;
  }
  name = capitalize(name);
  for (let i = 0; i < prefixes.length; i++) {
    const prefixed = prefixes[i] + name;
    if (prefixed in style) {
      return prefixCache[rawName] = prefixed;
    }
  }
  return rawName;
}
const xlinkNS = "http://www.w3.org/1999/xlink";
function patchAttr(el, key, value, isSVG, instance, isBoolean = isSpecialBooleanAttr(key)) {
  if (isSVG && key.startsWith("xlink:")) {
    if (value == null) {
      el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (value == null || isBoolean && !includeBooleanAttr(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(
        key,
        isBoolean ? "" : isSymbol(value) ? String(value) : value
      );
    }
  }
}
function patchDOMProp(el, key, value, parentComponent, attrName) {
  if (key === "innerHTML" || key === "textContent") {
    if (value != null) {
      el[key] = key === "innerHTML" ? unsafeToTrustedHTML(value) : value;
    }
    return;
  }
  const tag = el.tagName;
  if (key === "value" && tag !== "PROGRESS" && // custom elements may use _value internally
  !tag.includes("-")) {
    const oldValue = tag === "OPTION" ? el.getAttribute("value") || "" : el.value;
    const newValue = value == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      el.type === "checkbox" ? "on" : ""
    ) : String(value);
    if (oldValue !== newValue || !("_value" in el)) {
      el.value = newValue;
    }
    if (value == null) {
      el.removeAttribute(key);
    }
    el._value = value;
    return;
  }
  let needRemove = false;
  if (value === "" || value == null) {
    const type = typeof el[key];
    if (type === "boolean") {
      value = includeBooleanAttr(value);
    } else if (value == null && type === "string") {
      value = "";
      needRemove = true;
    } else if (type === "number") {
      value = 0;
      needRemove = true;
    }
  }
  try {
    el[key] = value;
  } catch (e) {
  }
  needRemove && el.removeAttribute(attrName || key);
}
function addEventListener(el, event, handler, options) {
  el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
  el.removeEventListener(event, handler, options);
}
const veiKey = /* @__PURE__ */ Symbol("_vei");
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
  const invokers = el[veiKey] || (el[veiKey] = {});
  const existingInvoker = invokers[rawName];
  if (nextValue && existingInvoker) {
    existingInvoker.value = nextValue;
  } else {
    const [name, options] = parseName(rawName);
    if (nextValue) {
      const invoker = invokers[rawName] = createInvoker(
        nextValue,
        instance
      );
      addEventListener(el, name, invoker, options);
    } else if (existingInvoker) {
      removeEventListener(el, name, existingInvoker, options);
      invokers[rawName] = void 0;
    }
  }
}
const optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
  let options;
  if (optionsModifierRE.test(name)) {
    options = {};
    let m;
    while (m = name.match(optionsModifierRE)) {
      name = name.slice(0, name.length - m[0].length);
      options[m[0].toLowerCase()] = true;
    }
  }
  const event = name[2] === ":" ? name.slice(3) : hyphenate(name.slice(2));
  return [event, options];
}
let cachedNow = 0;
const p = /* @__PURE__ */ Promise.resolve();
const getNow = () => cachedNow || (p.then(() => cachedNow = 0), cachedNow = Date.now());
function createInvoker(initialValue, instance) {
  const invoker = (e) => {
    if (!e._vts) {
      e._vts = Date.now();
    } else if (e._vts <= invoker.attached) {
      return;
    }
    callWithAsyncErrorHandling(
      patchStopImmediatePropagation(e, invoker.value),
      instance,
      5,
      [e]
    );
  };
  invoker.value = initialValue;
  invoker.attached = getNow();
  return invoker;
}
function patchStopImmediatePropagation(e, value) {
  if (isArray(value)) {
    const originalStop = e.stopImmediatePropagation;
    e.stopImmediatePropagation = () => {
      originalStop.call(e);
      e._stopped = true;
    };
    return value.map(
      (fn) => (e2) => !e2._stopped && fn && fn(e2)
    );
  } else {
    return value;
  }
}
const isNativeOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // lowercase letter
key.charCodeAt(2) > 96 && key.charCodeAt(2) < 123;
const patchProp = (el, key, prevValue, nextValue, namespace, parentComponent) => {
  const isSVG = namespace === "svg";
  if (key === "class") {
    patchClass(el, nextValue, isSVG);
  } else if (key === "style") {
    patchStyle(el, prevValue, nextValue);
  } else if (isOn(key)) {
    if (!isModelListener(key)) {
      patchEvent(el, key, prevValue, nextValue, parentComponent);
    }
  } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
    patchDOMProp(el, key, nextValue);
    if (!el.tagName.includes("-") && (key === "value" || key === "checked" || key === "selected")) {
      patchAttr(el, key, nextValue, isSVG, parentComponent, key !== "value");
    }
  } else if (
    // #11081 force set props for possible async custom element
    el._isVueCE && (/[A-Z]/.test(key) || !isString(nextValue))
  ) {
    patchDOMProp(el, camelize(key), nextValue, parentComponent, key);
  } else {
    if (key === "true-value") {
      el._trueValue = nextValue;
    } else if (key === "false-value") {
      el._falseValue = nextValue;
    }
    patchAttr(el, key, nextValue, isSVG);
  }
};
function shouldSetAsProp(el, key, value, isSVG) {
  if (isSVG) {
    if (key === "innerHTML" || key === "textContent") {
      return true;
    }
    if (key in el && isNativeOn(key) && isFunction(value)) {
      return true;
    }
    return false;
  }
  if (key === "spellcheck" || key === "draggable" || key === "translate" || key === "autocorrect") {
    return false;
  }
  if (key === "sandbox" && el.tagName === "IFRAME") {
    return false;
  }
  if (key === "form") {
    return false;
  }
  if (key === "list" && el.tagName === "INPUT") {
    return false;
  }
  if (key === "type" && el.tagName === "TEXTAREA") {
    return false;
  }
  if (key === "width" || key === "height") {
    const tag = el.tagName;
    if (tag === "IMG" || tag === "VIDEO" || tag === "CANVAS" || tag === "SOURCE") {
      return false;
    }
  }
  if (isNativeOn(key) && isString(value)) {
    return false;
  }
  return key in el;
}
const REMOVAL = {};
// @__NO_SIDE_EFFECTS__
function defineCustomElement(options, extraOptions, _createApp) {
  let Comp = /* @__PURE__ */ defineComponent(options, extraOptions);
  if (isPlainObject$1(Comp)) Comp = extend({}, Comp, extraOptions);
  class VueCustomElement extends VueElement {
    constructor(initialProps) {
      super(Comp, initialProps, _createApp);
    }
  }
  VueCustomElement.def = Comp;
  return VueCustomElement;
}
const defineSSRCustomElement = (/* @__NO_SIDE_EFFECTS__ */ (options, extraOptions) => {
  return /* @__PURE__ */ defineCustomElement(options, extraOptions, createSSRApp);
});
const BaseClass = typeof HTMLElement !== "undefined" ? HTMLElement : class {
};
class VueElement extends BaseClass {
  constructor(_def, _props = {}, _createApp = createApp) {
    super();
    this._def = _def;
    this._props = _props;
    this._createApp = _createApp;
    this._isVueCE = true;
    this._instance = null;
    this._app = null;
    this._nonce = this._def.nonce;
    this._connected = false;
    this._resolved = false;
    this._patching = false;
    this._dirty = false;
    this._numberProps = null;
    this._styleChildren = /* @__PURE__ */ new WeakSet();
    this._ob = null;
    if (this.shadowRoot && _createApp !== createApp) {
      this._root = this.shadowRoot;
    } else {
      if (_def.shadowRoot !== false) {
        this.attachShadow(
          extend({}, _def.shadowRootOptions, {
            mode: "open"
          })
        );
        this._root = this.shadowRoot;
      } else {
        this._root = this;
      }
    }
  }
  connectedCallback() {
    if (!this.isConnected) return;
    if (!this.shadowRoot && !this._resolved) {
      this._parseSlots();
    }
    this._connected = true;
    let parent = this;
    while (parent = parent && (parent.parentNode || parent.host)) {
      if (parent instanceof VueElement) {
        this._parent = parent;
        break;
      }
    }
    if (!this._instance) {
      if (this._resolved) {
        this._mount(this._def);
      } else {
        if (parent && parent._pendingResolve) {
          this._pendingResolve = parent._pendingResolve.then(() => {
            this._pendingResolve = void 0;
            this._resolveDef();
          });
        } else {
          this._resolveDef();
        }
      }
    }
  }
  _setParent(parent = this._parent) {
    if (parent) {
      this._instance.parent = parent._instance;
      this._inheritParentContext(parent);
    }
  }
  _inheritParentContext(parent = this._parent) {
    if (parent && this._app) {
      Object.setPrototypeOf(
        this._app._context.provides,
        parent._instance.provides
      );
    }
  }
  disconnectedCallback() {
    this._connected = false;
    nextTick(() => {
      if (!this._connected) {
        if (this._ob) {
          this._ob.disconnect();
          this._ob = null;
        }
        this._app && this._app.unmount();
        if (this._instance) this._instance.ce = void 0;
        this._app = this._instance = null;
        if (this._teleportTargets) {
          this._teleportTargets.clear();
          this._teleportTargets = void 0;
        }
      }
    });
  }
  _processMutations(mutations) {
    for (const m of mutations) {
      this._setAttr(m.attributeName);
    }
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    if (this._pendingResolve) {
      return;
    }
    for (let i = 0; i < this.attributes.length; i++) {
      this._setAttr(this.attributes[i].name);
    }
    this._ob = new MutationObserver(this._processMutations.bind(this));
    this._ob.observe(this, { attributes: true });
    const resolve2 = (def2, isAsync = false) => {
      this._resolved = true;
      this._pendingResolve = void 0;
      const { props, styles } = def2;
      let numberProps;
      if (props && !isArray(props)) {
        for (const key in props) {
          const opt = props[key];
          if (opt === Number || opt && opt.type === Number) {
            if (key in this._props) {
              this._props[key] = toNumber(this._props[key]);
            }
            (numberProps || (numberProps = /* @__PURE__ */ Object.create(null)))[camelize(key)] = true;
          }
        }
      }
      this._numberProps = numberProps;
      this._resolveProps(def2);
      if (this.shadowRoot) {
        this._applyStyles(styles);
      }
      this._mount(def2);
    };
    const asyncDef = this._def.__asyncLoader;
    if (asyncDef) {
      this._pendingResolve = asyncDef().then((def2) => {
        def2.configureApp = this._def.configureApp;
        resolve2(this._def = def2, true);
      });
    } else {
      resolve2(this._def);
    }
  }
  _mount(def2) {
    this._app = this._createApp(def2);
    this._inheritParentContext();
    if (def2.configureApp) {
      def2.configureApp(this._app);
    }
    this._app._ceVNode = this._createVNode();
    this._app.mount(this._root);
    const exposed = this._instance && this._instance.exposed;
    if (!exposed) return;
    for (const key in exposed) {
      if (!hasOwn(this, key)) {
        Object.defineProperty(this, key, {
          // unwrap ref to be consistent with public instance behavior
          get: () => unref(exposed[key])
        });
      }
    }
  }
  _resolveProps(def2) {
    const { props } = def2;
    const declaredPropKeys = isArray(props) ? props : Object.keys(props || {});
    for (const key of Object.keys(this)) {
      if (key[0] !== "_" && declaredPropKeys.includes(key)) {
        this._setProp(key, this[key]);
      }
    }
    for (const key of declaredPropKeys.map(camelize)) {
      Object.defineProperty(this, key, {
        get() {
          return this._getProp(key);
        },
        set(val) {
          this._setProp(key, val, true, !this._patching);
        }
      });
    }
  }
  _setAttr(key) {
    if (key.startsWith("data-v-")) return;
    const has = this.hasAttribute(key);
    let value = has ? this.getAttribute(key) : REMOVAL;
    const camelKey = camelize(key);
    if (has && this._numberProps && this._numberProps[camelKey]) {
      value = toNumber(value);
    }
    this._setProp(camelKey, value, false, true);
  }
  /**
   * @internal
   */
  _getProp(key) {
    return this._props[key];
  }
  /**
   * @internal
   */
  _setProp(key, val, shouldReflect = true, shouldUpdate = false) {
    if (val !== this._props[key]) {
      this._dirty = true;
      if (val === REMOVAL) {
        delete this._props[key];
      } else {
        this._props[key] = val;
        if (key === "key" && this._app) {
          this._app._ceVNode.key = val;
        }
      }
      if (shouldUpdate && this._instance) {
        this._update();
      }
      if (shouldReflect) {
        const ob = this._ob;
        if (ob) {
          this._processMutations(ob.takeRecords());
          ob.disconnect();
        }
        if (val === true) {
          this.setAttribute(hyphenate(key), "");
        } else if (typeof val === "string" || typeof val === "number") {
          this.setAttribute(hyphenate(key), val + "");
        } else if (!val) {
          this.removeAttribute(hyphenate(key));
        }
        ob && ob.observe(this, { attributes: true });
      }
    }
  }
  _update() {
    const vnode = this._createVNode();
    if (this._app) vnode.appContext = this._app._context;
    render(vnode, this._root);
  }
  _createVNode() {
    const baseProps = {};
    if (!this.shadowRoot) {
      baseProps.onVnodeMounted = baseProps.onVnodeUpdated = this._renderSlots.bind(this);
    }
    const vnode = createVNode(this._def, extend(baseProps, this._props));
    if (!this._instance) {
      vnode.ce = (instance) => {
        this._instance = instance;
        instance.ce = this;
        instance.isCE = true;
        const dispatch = (event, args) => {
          this.dispatchEvent(
            new CustomEvent(
              event,
              isPlainObject$1(args[0]) ? extend({ detail: args }, args[0]) : { detail: args }
            )
          );
        };
        instance.emit = (event, ...args) => {
          dispatch(event, args);
          if (hyphenate(event) !== event) {
            dispatch(hyphenate(event), args);
          }
        };
        this._setParent();
      };
    }
    return vnode;
  }
  _applyStyles(styles, owner) {
    if (!styles) return;
    if (owner) {
      if (owner === this._def || this._styleChildren.has(owner)) {
        return;
      }
      this._styleChildren.add(owner);
    }
    const nonce = this._nonce;
    for (let i = styles.length - 1; i >= 0; i--) {
      const s = document.createElement("style");
      if (nonce) s.setAttribute("nonce", nonce);
      s.textContent = styles[i];
      this.shadowRoot.prepend(s);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const slots = this._slots = {};
    let n;
    while (n = this.firstChild) {
      const slotName = n.nodeType === 1 && n.getAttribute("slot") || "default";
      (slots[slotName] || (slots[slotName] = [])).push(n);
      this.removeChild(n);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const outlets = this._getSlots();
    const scopeId = this._instance.type.__scopeId;
    for (let i = 0; i < outlets.length; i++) {
      const o = outlets[i];
      const slotName = o.getAttribute("name") || "default";
      const content = this._slots[slotName];
      const parent = o.parentNode;
      if (content) {
        for (const n of content) {
          if (scopeId && n.nodeType === 1) {
            const id = scopeId + "-s";
            const walker = document.createTreeWalker(n, 1);
            n.setAttribute(id, "");
            let child;
            while (child = walker.nextNode()) {
              child.setAttribute(id, "");
            }
          }
          parent.insertBefore(n, o);
        }
      } else {
        while (o.firstChild) parent.insertBefore(o.firstChild, o);
      }
      parent.removeChild(o);
    }
  }
  /**
   * @internal
   */
  _getSlots() {
    const roots = [this];
    if (this._teleportTargets) {
      roots.push(...this._teleportTargets);
    }
    const slots = /* @__PURE__ */ new Set();
    for (const root of roots) {
      const found = root.querySelectorAll("slot");
      for (let i = 0; i < found.length; i++) {
        slots.add(found[i]);
      }
    }
    return Array.from(slots);
  }
  /**
   * @internal
   */
  _injectChildStyle(comp) {
    this._applyStyles(comp.styles, comp);
  }
  /**
   * @internal
   */
  _beginPatch() {
    this._patching = true;
    this._dirty = false;
  }
  /**
   * @internal
   */
  _endPatch() {
    this._patching = false;
    if (this._dirty && this._instance) {
      this._update();
    }
  }
  /**
   * @internal
   */
  _hasShadowRoot() {
    return this._def.shadowRoot !== false;
  }
  /**
   * @internal
   */
  _removeChildStyle(comp) {
  }
}
function useHost(caller) {
  const instance = getCurrentInstance();
  const el = instance && instance.ce;
  if (el) {
    return el;
  }
  return null;
}
function useShadowRoot() {
  const el = useHost();
  return el && el.shadowRoot;
}
function useCssModule(name = "$style") {
  {
    const instance = getCurrentInstance();
    if (!instance) {
      return EMPTY_OBJ;
    }
    const modules = instance.type.__cssModules;
    if (!modules) {
      return EMPTY_OBJ;
    }
    const mod = modules[name];
    if (!mod) {
      return EMPTY_OBJ;
    }
    return mod;
  }
}
const positionMap = /* @__PURE__ */ new WeakMap();
const newPositionMap = /* @__PURE__ */ new WeakMap();
const moveCbKey = /* @__PURE__ */ Symbol("_moveCb");
const enterCbKey = /* @__PURE__ */ Symbol("_enterCb");
const decorate = (t) => {
  delete t.props.mode;
  return t;
};
const TransitionGroupImpl = /* @__PURE__ */ decorate({
  name: "TransitionGroup",
  props: /* @__PURE__ */ extend({}, TransitionPropsValidators, {
    tag: String,
    moveClass: String
  }),
  setup(props, { slots }) {
    const instance = getCurrentInstance();
    const state2 = useTransitionState();
    let prevChildren;
    let children;
    onUpdated(() => {
      if (!prevChildren.length) {
        return;
      }
      const moveClass = props.moveClass || `${props.name || "v"}-move`;
      if (!hasCSSTransform(
        prevChildren[0].el,
        instance.vnode.el,
        moveClass
      )) {
        prevChildren = [];
        return;
      }
      prevChildren.forEach(callPendingCbs);
      prevChildren.forEach(recordPosition);
      const movedChildren = prevChildren.filter(applyTranslation);
      forceReflow(instance.vnode.el);
      movedChildren.forEach((c) => {
        const el = c.el;
        const style = el.style;
        addTransitionClass(el, moveClass);
        style.transform = style.webkitTransform = style.transitionDuration = "";
        const cb = el[moveCbKey] = (e) => {
          if (e && e.target !== el) {
            return;
          }
          if (!e || e.propertyName.endsWith("transform")) {
            el.removeEventListener("transitionend", cb);
            el[moveCbKey] = null;
            removeTransitionClass(el, moveClass);
          }
        };
        el.addEventListener("transitionend", cb);
      });
      prevChildren = [];
    });
    return () => {
      const rawProps = /* @__PURE__ */ toRaw(props);
      const cssTransitionProps = resolveTransitionProps(rawProps);
      let tag = rawProps.tag || Fragment;
      prevChildren = [];
      if (children) {
        for (let i = 0; i < children.length; i++) {
          const child = children[i];
          if (child.el && child.el instanceof Element) {
            prevChildren.push(child);
            setTransitionHooks(
              child,
              resolveTransitionHooks(
                child,
                cssTransitionProps,
                state2,
                instance
              )
            );
            positionMap.set(child, getPosition(child.el));
          }
        }
      }
      children = slots.default ? getTransitionRawChildren(slots.default()) : [];
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (child.key != null) {
          setTransitionHooks(
            child,
            resolveTransitionHooks(child, cssTransitionProps, state2, instance)
          );
        }
      }
      return createVNode(tag, null, children);
    };
  }
});
const TransitionGroup = TransitionGroupImpl;
function callPendingCbs(c) {
  const el = c.el;
  if (el[moveCbKey]) {
    el[moveCbKey]();
  }
  if (el[enterCbKey]) {
    el[enterCbKey]();
  }
}
function recordPosition(c) {
  newPositionMap.set(c, getPosition(c.el));
}
function applyTranslation(c) {
  const oldPos = positionMap.get(c);
  const newPos = newPositionMap.get(c);
  const dx = oldPos.left - newPos.left;
  const dy = oldPos.top - newPos.top;
  if (dx || dy) {
    const el = c.el;
    const s = el.style;
    const rect = el.getBoundingClientRect();
    let scaleX = 1;
    let scaleY = 1;
    if (el.offsetWidth) scaleX = rect.width / el.offsetWidth;
    if (el.offsetHeight) scaleY = rect.height / el.offsetHeight;
    if (!Number.isFinite(scaleX) || scaleX === 0) scaleX = 1;
    if (!Number.isFinite(scaleY) || scaleY === 0) scaleY = 1;
    if (Math.abs(scaleX - 1) < 0.01) scaleX = 1;
    if (Math.abs(scaleY - 1) < 0.01) scaleY = 1;
    s.transform = s.webkitTransform = `translate(${dx / scaleX}px,${dy / scaleY}px)`;
    s.transitionDuration = "0s";
    return c;
  }
}
function getPosition(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left,
    top: rect.top
  };
}
function hasCSSTransform(el, root, moveClass) {
  const clone2 = el.cloneNode();
  const _vtc = el[vtcKey];
  if (_vtc) {
    _vtc.forEach((cls) => {
      cls.split(/\s+/).forEach((c) => c && clone2.classList.remove(c));
    });
  }
  moveClass.split(/\s+/).forEach((c) => c && clone2.classList.add(c));
  clone2.style.display = "none";
  const container = root.nodeType === 1 ? root : root.parentNode;
  container.appendChild(clone2);
  const { hasTransform } = getTransitionInfo(clone2);
  container.removeChild(clone2);
  return hasTransform;
}
const getModelAssigner = (vnode) => {
  const fn = vnode.props["onUpdate:modelValue"] || false;
  return isArray(fn) ? (value) => invokeArrayFns(fn, value) : fn;
};
function onCompositionStart(e) {
  e.target.composing = true;
}
function onCompositionEnd(e) {
  const target = e.target;
  if (target.composing) {
    target.composing = false;
    target.dispatchEvent(new Event("input"));
  }
}
const assignKey = /* @__PURE__ */ Symbol("_assign");
function castValue(value, trim, number) {
  if (trim) value = value.trim();
  if (number) value = looseToNumber(value);
  return value;
}
const vModelText = {
  created(el, { modifiers: { lazy, trim, number } }, vnode) {
    el[assignKey] = getModelAssigner(vnode);
    const castToNumber = number || vnode.props && vnode.props.type === "number";
    addEventListener(el, lazy ? "change" : "input", (e) => {
      if (e.target.composing) return;
      el[assignKey](castValue(el.value, trim, castToNumber));
    });
    if (trim || castToNumber) {
      addEventListener(el, "change", () => {
        el.value = castValue(el.value, trim, castToNumber);
      });
    }
    if (!lazy) {
      addEventListener(el, "compositionstart", onCompositionStart);
      addEventListener(el, "compositionend", onCompositionEnd);
      addEventListener(el, "change", onCompositionEnd);
    }
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(el, { value }) {
    el.value = value == null ? "" : value;
  },
  beforeUpdate(el, { value, oldValue, modifiers: { lazy, trim, number } }, vnode) {
    el[assignKey] = getModelAssigner(vnode);
    if (el.composing) return;
    const elValue = (number || el.type === "number") && !/^0\d/.test(el.value) ? looseToNumber(el.value) : el.value;
    const newValue = value == null ? "" : value;
    if (elValue === newValue) {
      return;
    }
    if (document.activeElement === el && el.type !== "range") {
      if (lazy && value === oldValue) {
        return;
      }
      if (trim && el.value.trim() === newValue) {
        return;
      }
    }
    el.value = newValue;
  }
};
const vModelCheckbox = {
  // #4096 array checkboxes need to be deep traversed
  deep: true,
  created(el, _, vnode) {
    el[assignKey] = getModelAssigner(vnode);
    addEventListener(el, "change", () => {
      const modelValue = el._modelValue;
      const elementValue = getValue(el);
      const checked = el.checked;
      const assign2 = el[assignKey];
      if (isArray(modelValue)) {
        const index = looseIndexOf(modelValue, elementValue);
        const found = index !== -1;
        if (checked && !found) {
          assign2(modelValue.concat(elementValue));
        } else if (!checked && found) {
          const filtered = [...modelValue];
          filtered.splice(index, 1);
          assign2(filtered);
        }
      } else if (isSet(modelValue)) {
        const cloned = new Set(modelValue);
        if (checked) {
          cloned.add(elementValue);
        } else {
          cloned.delete(elementValue);
        }
        assign2(cloned);
      } else {
        assign2(getCheckboxValue(el, checked));
      }
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: setChecked,
  beforeUpdate(el, binding, vnode) {
    el[assignKey] = getModelAssigner(vnode);
    setChecked(el, binding, vnode);
  }
};
function setChecked(el, { value, oldValue }, vnode) {
  el._modelValue = value;
  let checked;
  if (isArray(value)) {
    checked = looseIndexOf(value, vnode.props.value) > -1;
  } else if (isSet(value)) {
    checked = value.has(vnode.props.value);
  } else {
    if (value === oldValue) return;
    checked = looseEqual(value, getCheckboxValue(el, true));
  }
  if (el.checked !== checked) {
    el.checked = checked;
  }
}
const vModelRadio = {
  created(el, { value }, vnode) {
    el.checked = looseEqual(value, vnode.props.value);
    el[assignKey] = getModelAssigner(vnode);
    addEventListener(el, "change", () => {
      el[assignKey](getValue(el));
    });
  },
  beforeUpdate(el, { value, oldValue }, vnode) {
    el[assignKey] = getModelAssigner(vnode);
    if (value !== oldValue) {
      el.checked = looseEqual(value, vnode.props.value);
    }
  }
};
const vModelSelect = {
  // <select multiple> value need to be deep traversed
  deep: true,
  created(el, { value, modifiers: { number } }, vnode) {
    const isSetModel = isSet(value);
    addEventListener(el, "change", () => {
      const selectedVal = Array.prototype.filter.call(el.options, (o) => o.selected).map(
        (o) => number ? looseToNumber(getValue(o)) : getValue(o)
      );
      el[assignKey](
        el.multiple ? isSetModel ? new Set(selectedVal) : selectedVal : selectedVal[0]
      );
      el._assigning = true;
      nextTick(() => {
        el._assigning = false;
      });
    });
    el[assignKey] = getModelAssigner(vnode);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(el, { value }) {
    setSelected(el, value);
  },
  beforeUpdate(el, _binding, vnode) {
    el[assignKey] = getModelAssigner(vnode);
  },
  updated(el, { value }) {
    if (!el._assigning) {
      setSelected(el, value);
    }
  }
};
function setSelected(el, value) {
  const isMultiple = el.multiple;
  const isArrayValue = isArray(value);
  if (isMultiple && !isArrayValue && !isSet(value)) {
    return;
  }
  for (let i = 0, l = el.options.length; i < l; i++) {
    const option = el.options[i];
    const optionValue = getValue(option);
    if (isMultiple) {
      if (isArrayValue) {
        const optionType = typeof optionValue;
        if (optionType === "string" || optionType === "number") {
          option.selected = value.some((v) => String(v) === String(optionValue));
        } else {
          option.selected = looseIndexOf(value, optionValue) > -1;
        }
      } else {
        option.selected = value.has(optionValue);
      }
    } else if (looseEqual(getValue(option), value)) {
      if (el.selectedIndex !== i) el.selectedIndex = i;
      return;
    }
  }
  if (!isMultiple && el.selectedIndex !== -1) {
    el.selectedIndex = -1;
  }
}
function getValue(el) {
  return "_value" in el ? el._value : el.value;
}
function getCheckboxValue(el, checked) {
  const key = checked ? "_trueValue" : "_falseValue";
  return key in el ? el[key] : checked;
}
const vModelDynamic = {
  created(el, binding, vnode) {
    callModelHook(el, binding, vnode, null, "created");
  },
  mounted(el, binding, vnode) {
    callModelHook(el, binding, vnode, null, "mounted");
  },
  beforeUpdate(el, binding, vnode, prevVNode) {
    callModelHook(el, binding, vnode, prevVNode, "beforeUpdate");
  },
  updated(el, binding, vnode, prevVNode) {
    callModelHook(el, binding, vnode, prevVNode, "updated");
  }
};
function resolveDynamicModel(tagName, type) {
  switch (tagName) {
    case "SELECT":
      return vModelSelect;
    case "TEXTAREA":
      return vModelText;
    default:
      switch (type) {
        case "checkbox":
          return vModelCheckbox;
        case "radio":
          return vModelRadio;
        default:
          return vModelText;
      }
  }
}
function callModelHook(el, binding, vnode, prevVNode, hook) {
  const modelToUse = resolveDynamicModel(
    el.tagName,
    vnode.props && vnode.props.type
  );
  const fn = modelToUse[hook];
  fn && fn(el, binding, vnode, prevVNode);
}
function initVModelForSSR() {
  vModelText.getSSRProps = ({ value }) => ({ value });
  vModelRadio.getSSRProps = ({ value }, vnode) => {
    if (vnode.props && looseEqual(vnode.props.value, value)) {
      return { checked: true };
    }
  };
  vModelCheckbox.getSSRProps = ({ value }, vnode) => {
    if (isArray(value)) {
      if (vnode.props && looseIndexOf(value, vnode.props.value) > -1) {
        return { checked: true };
      }
    } else if (isSet(value)) {
      if (vnode.props && value.has(vnode.props.value)) {
        return { checked: true };
      }
    } else if (value) {
      return { checked: true };
    }
  };
  vModelDynamic.getSSRProps = (binding, vnode) => {
    if (typeof vnode.type !== "string") {
      return;
    }
    const modelToUse = resolveDynamicModel(
      // resolveDynamicModel expects an uppercase tag name, but vnode.type is lowercase
      vnode.type.toUpperCase(),
      vnode.props && vnode.props.type
    );
    if (modelToUse.getSSRProps) {
      return modelToUse.getSSRProps(binding, vnode);
    }
  };
}
const systemModifiers = ["ctrl", "shift", "alt", "meta"];
const modifierGuards = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, modifiers) => systemModifiers.some((m) => e[`${m}Key`] && !modifiers.includes(m))
};
const withModifiers = (fn, modifiers) => {
  if (!fn) return fn;
  const cache = fn._withMods || (fn._withMods = {});
  const cacheKey = modifiers.join(".");
  return cache[cacheKey] || (cache[cacheKey] = ((event, ...args) => {
    for (let i = 0; i < modifiers.length; i++) {
      const guard = modifierGuards[modifiers[i]];
      if (guard && guard(event, modifiers)) return;
    }
    return fn(event, ...args);
  }));
};
const keyNames = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
};
const withKeys = (fn, modifiers) => {
  const cache = fn._withKeys || (fn._withKeys = {});
  const cacheKey = modifiers.join(".");
  return cache[cacheKey] || (cache[cacheKey] = ((event) => {
    if (!("key" in event)) {
      return;
    }
    const eventKey = hyphenate(event.key);
    if (modifiers.some(
      (k) => k === eventKey || keyNames[k] === eventKey
    )) {
      return fn(event);
    }
  }));
};
const rendererOptions = /* @__PURE__ */ extend({ patchProp }, nodeOps);
let renderer;
let enabledHydration = false;
function ensureRenderer() {
  return renderer || (renderer = createRenderer(rendererOptions));
}
function ensureHydrationRenderer() {
  renderer = enabledHydration ? renderer : createHydrationRenderer(rendererOptions);
  enabledHydration = true;
  return renderer;
}
const render = ((...args) => {
  ensureRenderer().render(...args);
});
const hydrate = ((...args) => {
  ensureHydrationRenderer().hydrate(...args);
});
const createApp = ((...args) => {
  const app = ensureRenderer().createApp(...args);
  const { mount } = app;
  app.mount = (containerOrSelector) => {
    const container = normalizeContainer(containerOrSelector);
    if (!container) return;
    const component = app._component;
    if (!isFunction(component) && !component.render && !component.template) {
      component.template = container.innerHTML;
    }
    if (container.nodeType === 1) {
      container.textContent = "";
    }
    const proxy = mount(container, false, resolveRootNamespace(container));
    if (container instanceof Element) {
      container.removeAttribute("v-cloak");
      container.setAttribute("data-v-app", "");
    }
    return proxy;
  };
  return app;
});
const createSSRApp = ((...args) => {
  const app = ensureHydrationRenderer().createApp(...args);
  const { mount } = app;
  app.mount = (containerOrSelector) => {
    const container = normalizeContainer(containerOrSelector);
    if (container) {
      return mount(container, true, resolveRootNamespace(container));
    }
  };
  return app;
});
function resolveRootNamespace(container) {
  if (container instanceof SVGElement) {
    return "svg";
  }
  if (typeof MathMLElement === "function" && container instanceof MathMLElement) {
    return "mathml";
  }
}
function normalizeContainer(container) {
  if (isString(container)) {
    const res = document.querySelector(container);
    return res;
  }
  return container;
}
let ssrDirectiveInitialized = false;
const initDirectivesForSSR = () => {
  if (!ssrDirectiveInitialized) {
    ssrDirectiveInitialized = true;
    initVModelForSSR();
    initVShowForSSR();
  }
};
const runtimeDom_esmBundler = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BaseTransition,
  BaseTransitionPropsValidators,
  Comment,
  DeprecationTypes,
  EffectScope,
  ErrorCodes,
  ErrorTypeStrings,
  Fragment,
  KeepAlive,
  ReactiveEffect,
  Static,
  Suspense,
  Teleport,
  Text,
  TrackOpTypes,
  Transition,
  TransitionGroup,
  TriggerOpTypes,
  VueElement,
  assertNumber,
  callWithAsyncErrorHandling,
  callWithErrorHandling,
  camelize,
  capitalize,
  cloneVNode,
  compatUtils,
  computed,
  createApp,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createElementVNode: createBaseVNode,
  createHydrationRenderer,
  createPropsRestProxy,
  createRenderer,
  createSSRApp,
  createSlots,
  createStaticVNode,
  createTextVNode,
  createVNode,
  customRef,
  defineAsyncComponent,
  defineComponent,
  defineCustomElement,
  defineEmits,
  defineExpose,
  defineModel,
  defineOptions,
  defineProps,
  defineSSRCustomElement,
  defineSlots,
  devtools,
  effect,
  effectScope,
  getCurrentInstance,
  getCurrentScope,
  getCurrentWatcher,
  getTransitionRawChildren,
  guardReactiveProps,
  h,
  handleError,
  hasInjectionContext,
  hydrate,
  hydrateOnIdle,
  hydrateOnInteraction,
  hydrateOnMediaQuery,
  hydrateOnVisible,
  initCustomFormatter,
  initDirectivesForSSR,
  inject,
  isMemoSame,
  isProxy,
  isReactive,
  isReadonly,
  isRef,
  isRuntimeOnly,
  isShallow,
  isVNode,
  markRaw,
  mergeDefaults,
  mergeModels,
  mergeProps,
  nextTick,
  nodeOps,
  normalizeClass,
  normalizeProps,
  normalizeStyle,
  onActivated,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onDeactivated,
  onErrorCaptured,
  onMounted,
  onRenderTracked,
  onRenderTriggered,
  onScopeDispose,
  onServerPrefetch,
  onUnmounted,
  onUpdated,
  onWatcherCleanup,
  openBlock,
  patchProp,
  popScopeId,
  provide,
  proxyRefs,
  pushScopeId,
  queuePostFlushCb,
  reactive,
  readonly,
  ref,
  registerRuntimeCompiler,
  render,
  renderList,
  renderSlot,
  resolveComponent,
  resolveDirective,
  resolveDynamicComponent,
  resolveFilter,
  resolveTransitionHooks,
  setBlockTracking,
  setDevtoolsHook,
  setTransitionHooks,
  shallowReactive,
  shallowReadonly,
  shallowRef,
  ssrContextKey,
  ssrUtils,
  stop,
  toDisplayString,
  toHandlerKey,
  toHandlers,
  toRaw,
  toRef,
  toRefs,
  toValue: toValue$1,
  transformVNodeArgs,
  triggerRef,
  unref,
  useAttrs,
  useCssModule,
  useCssVars,
  useHost,
  useId,
  useModel,
  useSSRContext,
  useShadowRoot,
  useSlots,
  useTemplateRef,
  useTransitionState,
  vModelCheckbox,
  vModelDynamic,
  vModelRadio,
  vModelSelect,
  vModelText,
  vShow,
  version,
  warn,
  watch,
  watchEffect,
  watchPostEffect,
  watchSyncEffect,
  withAsyncContext,
  withCtx,
  withDefaults,
  withDirectives,
  withKeys,
  withMemo,
  withModifiers,
  withScopeId
}, Symbol.toStringTag, { value: "Module" }));
let activePinia;
const setActivePinia = (pinia) => activePinia = pinia;
const piniaSymbol = (
  /* istanbul ignore next */
  /* @__PURE__ */ Symbol()
);
function isPlainObject(o) {
  return o && typeof o === "object" && Object.prototype.toString.call(o) === "[object Object]" && typeof o.toJSON !== "function";
}
var MutationType;
(function(MutationType2) {
  MutationType2["direct"] = "direct";
  MutationType2["patchObject"] = "patch object";
  MutationType2["patchFunction"] = "patch function";
})(MutationType || (MutationType = {}));
function createPinia() {
  const scope = effectScope(true);
  const state2 = scope.run(() => /* @__PURE__ */ ref({}));
  let _p = [];
  let toBeInstalled = [];
  const pinia = markRaw({
    install(app) {
      setActivePinia(pinia);
      {
        pinia._a = app;
        app.provide(piniaSymbol, pinia);
        app.config.globalProperties.$pinia = pinia;
        toBeInstalled.forEach((plugin) => _p.push(plugin));
        toBeInstalled = [];
      }
    },
    use(plugin) {
      if (!this._a && true) {
        toBeInstalled.push(plugin);
      } else {
        _p.push(plugin);
      }
      return this;
    },
    _p,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: scope,
    _s: /* @__PURE__ */ new Map(),
    state: state2
  });
  return pinia;
}
const noop$1 = () => {
};
function addSubscription(subscriptions, callback, detached, onCleanup = noop$1) {
  subscriptions.push(callback);
  const removeSubscription = () => {
    const idx = subscriptions.indexOf(callback);
    if (idx > -1) {
      subscriptions.splice(idx, 1);
      onCleanup();
    }
  };
  if (!detached && getCurrentScope()) {
    onScopeDispose(removeSubscription);
  }
  return removeSubscription;
}
function triggerSubscriptions(subscriptions, ...args) {
  subscriptions.slice().forEach((callback) => {
    callback(...args);
  });
}
const fallbackRunWithContext = (fn) => fn();
const ACTION_MARKER = /* @__PURE__ */ Symbol();
const ACTION_NAME = /* @__PURE__ */ Symbol();
function mergeReactiveObjects(target, patchToApply) {
  if (target instanceof Map && patchToApply instanceof Map) {
    patchToApply.forEach((value, key) => target.set(key, value));
  } else if (target instanceof Set && patchToApply instanceof Set) {
    patchToApply.forEach(target.add, target);
  }
  for (const key in patchToApply) {
    if (!patchToApply.hasOwnProperty(key))
      continue;
    const subPatch = patchToApply[key];
    const targetValue = target[key];
    if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key) && !/* @__PURE__ */ isRef(subPatch) && !/* @__PURE__ */ isReactive(subPatch)) {
      target[key] = mergeReactiveObjects(targetValue, subPatch);
    } else {
      target[key] = subPatch;
    }
  }
  return target;
}
const skipHydrateSymbol = (
  /* istanbul ignore next */
  /* @__PURE__ */ Symbol()
);
function shouldHydrate(obj) {
  return !isPlainObject(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
}
const { assign } = Object;
function isComputed(o) {
  return !!(/* @__PURE__ */ isRef(o) && o.effect);
}
function createOptionsStore(id, options, pinia, hot) {
  const { state: state2, actions, getters } = options;
  const initialState = pinia.state.value[id];
  let store;
  function setup() {
    if (!initialState && true) {
      {
        pinia.state.value[id] = state2 ? state2() : {};
      }
    }
    const localState = /* @__PURE__ */ toRefs(pinia.state.value[id]);
    return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
      computedGetters[name] = markRaw(computed(() => {
        setActivePinia(pinia);
        const store2 = pinia._s.get(id);
        return getters[name].call(store2, store2);
      }));
      return computedGetters;
    }, {}));
  }
  store = createSetupStore(id, setup, options, pinia, hot, true);
  return store;
}
function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
  let scope;
  const optionsForPlugin = assign({ actions: {} }, options);
  const $subscribeOptions = { deep: true };
  let isListening;
  let isSyncListening;
  let subscriptions = [];
  let actionSubscriptions = [];
  let debuggerEvents;
  const initialState = pinia.state.value[$id];
  if (!isOptionsStore && !initialState && true) {
    {
      pinia.state.value[$id] = {};
    }
  }
  let activeListener;
  function $patch(partialStateOrMutator) {
    let subscriptionMutation;
    isListening = isSyncListening = false;
    if (typeof partialStateOrMutator === "function") {
      partialStateOrMutator(pinia.state.value[$id]);
      subscriptionMutation = {
        type: MutationType.patchFunction,
        storeId: $id,
        events: debuggerEvents
      };
    } else {
      mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
      subscriptionMutation = {
        type: MutationType.patchObject,
        payload: partialStateOrMutator,
        storeId: $id,
        events: debuggerEvents
      };
    }
    const myListenerId = activeListener = /* @__PURE__ */ Symbol();
    nextTick().then(() => {
      if (activeListener === myListenerId) {
        isListening = true;
      }
    });
    isSyncListening = true;
    triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
  }
  const $reset = isOptionsStore ? function $reset2() {
    const { state: state2 } = options;
    const newState = state2 ? state2() : {};
    this.$patch(($state) => {
      assign($state, newState);
    });
  } : (
    /* istanbul ignore next */
    noop$1
  );
  function $dispose() {
    scope.stop();
    subscriptions = [];
    actionSubscriptions = [];
    pinia._s.delete($id);
  }
  const action = (fn, name = "") => {
    if (ACTION_MARKER in fn) {
      fn[ACTION_NAME] = name;
      return fn;
    }
    const wrappedAction = function() {
      setActivePinia(pinia);
      const args = Array.from(arguments);
      const afterCallbackList = [];
      const onErrorCallbackList = [];
      function after(callback) {
        afterCallbackList.push(callback);
      }
      function onError(callback) {
        onErrorCallbackList.push(callback);
      }
      triggerSubscriptions(actionSubscriptions, {
        args,
        name: wrappedAction[ACTION_NAME],
        store,
        after,
        onError
      });
      let ret;
      try {
        ret = fn.apply(this && this.$id === $id ? this : store, args);
      } catch (error) {
        triggerSubscriptions(onErrorCallbackList, error);
        throw error;
      }
      if (ret instanceof Promise) {
        return ret.then((value) => {
          triggerSubscriptions(afterCallbackList, value);
          return value;
        }).catch((error) => {
          triggerSubscriptions(onErrorCallbackList, error);
          return Promise.reject(error);
        });
      }
      triggerSubscriptions(afterCallbackList, ret);
      return ret;
    };
    wrappedAction[ACTION_MARKER] = true;
    wrappedAction[ACTION_NAME] = name;
    return wrappedAction;
  };
  const partialStore = {
    _p: pinia,
    // _s: scope,
    $id,
    $onAction: addSubscription.bind(null, actionSubscriptions),
    $patch,
    $reset,
    $subscribe(callback, options2 = {}) {
      const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
      const stopWatcher = scope.run(() => watch(() => pinia.state.value[$id], (state2) => {
        if (options2.flush === "sync" ? isSyncListening : isListening) {
          callback({
            storeId: $id,
            type: MutationType.direct,
            events: debuggerEvents
          }, state2);
        }
      }, assign({}, $subscribeOptions, options2)));
      return removeSubscription;
    },
    $dispose
  };
  const store = /* @__PURE__ */ reactive(partialStore);
  pinia._s.set($id, store);
  const runWithContext = pinia._a && pinia._a.runWithContext || fallbackRunWithContext;
  const setupStore = runWithContext(() => pinia._e.run(() => (scope = effectScope()).run(() => setup({ action }))));
  for (const key in setupStore) {
    const prop = setupStore[key];
    if (/* @__PURE__ */ isRef(prop) && !isComputed(prop) || /* @__PURE__ */ isReactive(prop)) {
      if (!isOptionsStore) {
        if (initialState && shouldHydrate(prop)) {
          if (/* @__PURE__ */ isRef(prop)) {
            prop.value = initialState[key];
          } else {
            mergeReactiveObjects(prop, initialState[key]);
          }
        }
        {
          pinia.state.value[$id][key] = prop;
        }
      }
    } else if (typeof prop === "function") {
      const actionValue = action(prop, key);
      {
        setupStore[key] = actionValue;
      }
      optionsForPlugin.actions[key] = prop;
    } else ;
  }
  {
    assign(store, setupStore);
    assign(/* @__PURE__ */ toRaw(store), setupStore);
  }
  Object.defineProperty(store, "$state", {
    get: () => pinia.state.value[$id],
    set: (state2) => {
      $patch(($state) => {
        assign($state, state2);
      });
    }
  });
  pinia._p.forEach((extender) => {
    {
      assign(store, scope.run(() => extender({
        store,
        app: pinia._a,
        pinia,
        options: optionsForPlugin
      })));
    }
  });
  if (initialState && isOptionsStore && options.hydrate) {
    options.hydrate(store.$state, initialState);
  }
  isListening = true;
  isSyncListening = true;
  return store;
}
// @__NO_SIDE_EFFECTS__
function defineStore(idOrOptions, setup, setupOptions) {
  let id;
  let options;
  const isSetupStore = typeof setup === "function";
  if (typeof idOrOptions === "string") {
    id = idOrOptions;
    options = isSetupStore ? setupOptions : setup;
  } else {
    options = idOrOptions;
    id = idOrOptions.id;
  }
  function useStore(pinia, hot) {
    const hasContext = hasInjectionContext();
    pinia = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    pinia || (hasContext ? inject(piniaSymbol, null) : null);
    if (pinia)
      setActivePinia(pinia);
    pinia = activePinia;
    if (!pinia._s.has(id)) {
      if (isSetupStore) {
        createSetupStore(id, setup, options, pinia);
      } else {
        createOptionsStore(id, options, pinia);
      }
    }
    const store = pinia._s.get(id);
    return store;
  }
  useStore.$id = id;
  return useStore;
}
function storeToRefs(store) {
  {
    const rawStore = /* @__PURE__ */ toRaw(store);
    const refs = {};
    for (const key in rawStore) {
      const value = rawStore[key];
      if (value.effect) {
        refs[key] = // ...
        computed({
          get: () => store[key],
          set(value2) {
            store[key] = value2;
          }
        });
      } else if (/* @__PURE__ */ isRef(value) || /* @__PURE__ */ isReactive(value)) {
        refs[key] = // ---
        /* @__PURE__ */ toRef(store, key);
      }
    }
    return refs;
  }
}
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function toValue(r) {
  return typeof r === "function" ? r() : unref(r);
}
const isClient = typeof window !== "undefined" && typeof document !== "undefined";
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
const toString = Object.prototype.toString;
const isObject = (val) => toString.call(val) === "[object Object]";
const noop = () => {
};
const isIOS = /* @__PURE__ */ getIsIOS();
function getIsIOS() {
  var _a, _b;
  return isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((_b = window == null ? void 0 : window.navigator) == null ? void 0 : _b.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    return new Promise((resolve2, reject) => {
      Promise.resolve(filter(() => fn.apply(this, args), { fn, thisArg: this, args })).then(resolve2).catch(reject);
    });
  }
  return wrapper;
}
const bypassFilter = (invoke2) => {
  return invoke2();
};
function debounceFilter(ms, options = {}) {
  let timer;
  let maxTimer;
  let lastRejector = noop;
  const _clearTimeout = (timer2) => {
    clearTimeout(timer2);
    lastRejector();
    lastRejector = noop;
  };
  const filter = (invoke2) => {
    const duration = toValue(ms);
    const maxDuration = toValue(options.maxWait);
    if (timer)
      _clearTimeout(timer);
    if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
      if (maxTimer) {
        _clearTimeout(maxTimer);
        maxTimer = null;
      }
      return Promise.resolve(invoke2());
    }
    return new Promise((resolve2, reject) => {
      lastRejector = options.rejectOnCancel ? reject : resolve2;
      if (maxDuration && !maxTimer) {
        maxTimer = setTimeout(() => {
          if (timer)
            _clearTimeout(timer);
          maxTimer = null;
          resolve2(invoke2());
        }, maxDuration);
      }
      timer = setTimeout(() => {
        if (maxTimer)
          _clearTimeout(maxTimer);
        maxTimer = null;
        resolve2(invoke2());
      }, duration);
    });
  };
  return filter;
}
function pausableFilter(extendFilter = bypassFilter) {
  const isActive = /* @__PURE__ */ ref(true);
  function pause() {
    isActive.value = false;
  }
  function resume() {
    isActive.value = true;
  }
  const eventFilter = (...args) => {
    if (isActive.value)
      extendFilter(...args);
  };
  return { isActive: /* @__PURE__ */ readonly(isActive), pause, resume, eventFilter };
}
function createSingletonPromise(fn) {
  let _promise;
  function wrapper() {
    if (!_promise)
      _promise = fn();
    return _promise;
  }
  wrapper.reset = async () => {
    const _prev = _promise;
    _promise = void 0;
    if (_prev)
      await _prev;
  };
  return wrapper;
}
function getLifeCycleTarget(target) {
  return getCurrentInstance();
}
function useDebounceFn(fn, ms = 200, options = {}) {
  return createFilterWrapper(
    debounceFilter(ms, options),
    fn
  );
}
function watchWithFilter(source, cb, options = {}) {
  const {
    eventFilter = bypassFilter,
    ...watchOptions
  } = options;
  return watch(
    source,
    createFilterWrapper(
      eventFilter,
      cb
    ),
    watchOptions
  );
}
function watchPausable(source, cb, options = {}) {
  const {
    eventFilter: filter,
    ...watchOptions
  } = options;
  const { eventFilter, pause, resume, isActive } = pausableFilter(filter);
  const stop2 = watchWithFilter(
    source,
    cb,
    {
      ...watchOptions,
      eventFilter
    }
  );
  return { stop: stop2, pause, resume, isActive };
}
function tryOnMounted(fn, sync = true, target) {
  const instance = getLifeCycleTarget();
  if (instance)
    onMounted(fn, target);
  else if (sync)
    fn();
  else
    nextTick(fn);
}
function tryOnUnmounted(fn, target) {
  const instance = getLifeCycleTarget();
  if (instance)
    onUnmounted(fn, target);
}
function useTimeoutFn(cb, interval, options = {}) {
  const {
    immediate = true
  } = options;
  const isPending = /* @__PURE__ */ ref(false);
  let timer = null;
  function clear() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
  function stop2() {
    isPending.value = false;
    clear();
  }
  function start(...args) {
    clear();
    isPending.value = true;
    timer = setTimeout(() => {
      isPending.value = false;
      timer = null;
      cb(...args);
    }, toValue(interval));
  }
  if (immediate) {
    isPending.value = true;
    if (isClient)
      start();
  }
  tryOnScopeDispose(stop2);
  return {
    isPending: /* @__PURE__ */ readonly(isPending),
    start,
    stop: stop2
  };
}
function whenever(source, cb, options) {
  const stop2 = watch(
    source,
    (v, ov, onInvalidate) => {
      if (v) {
        if (options == null ? void 0 : options.once)
          nextTick(() => stop2());
        cb(v, ov, onInvalidate);
      }
    },
    {
      ...options,
      once: false
    }
  );
  return stop2;
}
function unrefElement(elRef) {
  var _a;
  const plain = toValue(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
const defaultWindow = isClient ? window : void 0;
const defaultNavigator = isClient ? window.navigator : void 0;
function useEventListener(...args) {
  let target;
  let events2;
  let listeners;
  let options;
  if (typeof args[0] === "string" || Array.isArray(args[0])) {
    [events2, listeners, options] = args;
    target = defaultWindow;
  } else {
    [target, events2, listeners, options] = args;
  }
  if (!target)
    return noop;
  if (!Array.isArray(events2))
    events2 = [events2];
  if (!Array.isArray(listeners))
    listeners = [listeners];
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options2) => {
    el.addEventListener(event, listener, options2);
    return () => el.removeEventListener(event, listener, options2);
  };
  const stopWatch = watch(
    () => [unrefElement(target), toValue(options)],
    ([el, options2]) => {
      cleanup();
      if (!el)
        return;
      const optionsClone = isObject(options2) ? { ...options2 } : options2;
      cleanups.push(
        ...events2.flatMap((event) => {
          return listeners.map((listener) => register(el, event, listener, optionsClone));
        })
      );
    },
    { immediate: true, flush: "post" }
  );
  const stop2 = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop2);
  return stop2;
}
let _iOSWorkaround = false;
function onClickOutside(target, handler, options = {}) {
  const { window: window2 = defaultWindow, ignore = [], capture = true, detectIframe = false } = options;
  if (!window2)
    return noop;
  if (isIOS && !_iOSWorkaround) {
    _iOSWorkaround = true;
    Array.from(window2.document.body.children).forEach((el) => el.addEventListener("click", noop));
    window2.document.documentElement.addEventListener("click", noop);
  }
  let shouldListen = true;
  const shouldIgnore = (event) => {
    return ignore.some((target2) => {
      if (typeof target2 === "string") {
        return Array.from(window2.document.querySelectorAll(target2)).some((el) => el === event.target || event.composedPath().includes(el));
      } else {
        const el = unrefElement(target2);
        return el && (event.target === el || event.composedPath().includes(el));
      }
    });
  };
  const listener = (event) => {
    const el = unrefElement(target);
    if (!el || el === event.target || event.composedPath().includes(el))
      return;
    if (event.detail === 0)
      shouldListen = !shouldIgnore(event);
    if (!shouldListen) {
      shouldListen = true;
      return;
    }
    handler(event);
  };
  const cleanup = [
    useEventListener(window2, "click", listener, { passive: true, capture }),
    useEventListener(window2, "pointerdown", (e) => {
      const el = unrefElement(target);
      shouldListen = !shouldIgnore(e) && !!(el && !e.composedPath().includes(el));
    }, { passive: true }),
    detectIframe && useEventListener(window2, "blur", (event) => {
      setTimeout(() => {
        var _a;
        const el = unrefElement(target);
        if (((_a = window2.document.activeElement) == null ? void 0 : _a.tagName) === "IFRAME" && !(el == null ? void 0 : el.contains(window2.document.activeElement))) {
          handler(event);
        }
      }, 0);
    })
  ].filter(Boolean);
  const stop2 = () => cleanup.forEach((fn) => fn());
  return stop2;
}
function useMounted() {
  const isMounted = /* @__PURE__ */ ref(false);
  const instance = getCurrentInstance();
  if (instance) {
    onMounted(() => {
      isMounted.value = true;
    }, instance);
  }
  return isMounted;
}
function useSupported(callback) {
  const isMounted = useMounted();
  return computed(() => {
    isMounted.value;
    return Boolean(callback());
  });
}
function usePermission(permissionDesc, options = {}) {
  const {
    controls = false,
    navigator = defaultNavigator
  } = options;
  const isSupported = useSupported(() => navigator && "permissions" in navigator);
  let permissionStatus;
  const desc = typeof permissionDesc === "string" ? { name: permissionDesc } : permissionDesc;
  const state2 = /* @__PURE__ */ ref();
  const onChange = () => {
    if (permissionStatus)
      state2.value = permissionStatus.state;
  };
  const query = createSingletonPromise(async () => {
    if (!isSupported.value)
      return;
    if (!permissionStatus) {
      try {
        permissionStatus = await navigator.permissions.query(desc);
        useEventListener(permissionStatus, "change", onChange);
        onChange();
      } catch (e) {
        state2.value = "prompt";
      }
    }
    return permissionStatus;
  });
  query();
  if (controls) {
    return {
      state: state2,
      isSupported,
      query
    };
  } else {
    return state2;
  }
}
function useClipboard(options = {}) {
  const {
    navigator = defaultNavigator,
    read = false,
    source,
    copiedDuring = 1500,
    legacy = false
  } = options;
  const isClipboardApiSupported = useSupported(() => navigator && "clipboard" in navigator);
  const permissionRead = usePermission("clipboard-read");
  const permissionWrite = usePermission("clipboard-write");
  const isSupported = computed(() => isClipboardApiSupported.value || legacy);
  const text2 = /* @__PURE__ */ ref("");
  const copied = /* @__PURE__ */ ref(false);
  const timeout = useTimeoutFn(() => copied.value = false, copiedDuring);
  function updateText() {
    if (isClipboardApiSupported.value && isAllowed(permissionRead.value)) {
      navigator.clipboard.readText().then((value) => {
        text2.value = value;
      });
    } else {
      text2.value = legacyRead();
    }
  }
  if (isSupported.value && read)
    useEventListener(["copy", "cut"], updateText);
  async function copy(value = toValue(source)) {
    if (isSupported.value && value != null) {
      if (isClipboardApiSupported.value && isAllowed(permissionWrite.value))
        await navigator.clipboard.writeText(value);
      else
        legacyCopy(value);
      text2.value = value;
      copied.value = true;
      timeout.start();
    }
  }
  function legacyCopy(value) {
    const ta = document.createElement("textarea");
    ta.value = value != null ? value : "";
    ta.style.position = "absolute";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
  }
  function legacyRead() {
    var _a, _b, _c;
    return (_c = (_b = (_a = document == null ? void 0 : document.getSelection) == null ? void 0 : _a.call(document)) == null ? void 0 : _b.toString()) != null ? _c : "";
  }
  function isAllowed(status) {
    return status === "granted" || status === "prompt";
  }
  return {
    isSupported,
    text: text2,
    copied,
    copy
  };
}
const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
const handlers = /* @__PURE__ */ getHandlers();
function getHandlers() {
  if (!(globalKey in _global))
    _global[globalKey] = _global[globalKey] || {};
  return _global[globalKey];
}
function getSSRHandler(key, fallback) {
  return handlers[key] || fallback;
}
function guessSerializerType(rawInit) {
  return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : rawInit instanceof Date ? "date" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
}
const StorageSerializers = {
  boolean: {
    read: (v) => v === "true",
    write: (v) => String(v)
  },
  object: {
    read: (v) => JSON.parse(v),
    write: (v) => JSON.stringify(v)
  },
  number: {
    read: (v) => Number.parseFloat(v),
    write: (v) => String(v)
  },
  any: {
    read: (v) => v,
    write: (v) => String(v)
  },
  string: {
    read: (v) => v,
    write: (v) => String(v)
  },
  map: {
    read: (v) => new Map(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v.entries()))
  },
  set: {
    read: (v) => new Set(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v))
  },
  date: {
    read: (v) => new Date(v),
    write: (v) => v.toISOString()
  }
};
const customStorageEventName = "vueuse-storage";
function useStorage(key, defaults2, storage, options = {}) {
  var _a;
  const {
    flush = "pre",
    deep = true,
    listenToStorageChanges = true,
    writeDefaults = true,
    mergeDefaults: mergeDefaults2 = false,
    shallow,
    window: window2 = defaultWindow,
    eventFilter,
    onError = (e) => {
      console.error(e);
    },
    initOnMounted
  } = options;
  const data = (shallow ? shallowRef : ref)(typeof defaults2 === "function" ? defaults2() : defaults2);
  if (!storage) {
    try {
      storage = getSSRHandler("getDefaultStorage", () => {
        var _a2;
        return (_a2 = defaultWindow) == null ? void 0 : _a2.localStorage;
      })();
    } catch (e) {
      onError(e);
    }
  }
  if (!storage)
    return data;
  const rawInit = toValue(defaults2);
  const type = guessSerializerType(rawInit);
  const serializer = (_a = options.serializer) != null ? _a : StorageSerializers[type];
  const { pause: pauseWatch, resume: resumeWatch } = watchPausable(
    data,
    () => write(data.value),
    { flush, deep, eventFilter }
  );
  if (window2 && listenToStorageChanges) {
    tryOnMounted(() => {
      useEventListener(window2, "storage", update2);
      useEventListener(window2, customStorageEventName, updateFromCustomEvent);
      if (initOnMounted)
        update2();
    });
  }
  if (!initOnMounted)
    update2();
  function dispatchWriteEvent(oldValue, newValue) {
    if (window2) {
      window2.dispatchEvent(new CustomEvent(customStorageEventName, {
        detail: {
          key,
          oldValue,
          newValue,
          storageArea: storage
        }
      }));
    }
  }
  function write(v) {
    try {
      const oldValue = storage.getItem(key);
      if (v == null) {
        dispatchWriteEvent(oldValue, null);
        storage.removeItem(key);
      } else {
        const serialized = serializer.write(v);
        if (oldValue !== serialized) {
          storage.setItem(key, serialized);
          dispatchWriteEvent(oldValue, serialized);
        }
      }
    } catch (e) {
      onError(e);
    }
  }
  function read(event) {
    const rawValue = event ? event.newValue : storage.getItem(key);
    if (rawValue == null) {
      if (writeDefaults && rawInit != null)
        storage.setItem(key, serializer.write(rawInit));
      return rawInit;
    } else if (!event && mergeDefaults2) {
      const value = serializer.read(rawValue);
      if (typeof mergeDefaults2 === "function")
        return mergeDefaults2(value, rawInit);
      else if (type === "object" && !Array.isArray(value))
        return { ...rawInit, ...value };
      return value;
    } else if (typeof rawValue !== "string") {
      return rawValue;
    } else {
      return serializer.read(rawValue);
    }
  }
  function update2(event) {
    if (event && event.storageArea !== storage)
      return;
    if (event && event.key == null) {
      data.value = rawInit;
      return;
    }
    if (event && event.key !== key)
      return;
    pauseWatch();
    try {
      if ((event == null ? void 0 : event.newValue) !== serializer.write(data.value))
        data.value = read(event);
    } catch (e) {
      onError(e);
    } finally {
      if (event)
        nextTick(resumeWatch);
      else
        resumeWatch();
    }
  }
  function updateFromCustomEvent(event) {
    update2(event.detail);
  }
  return data;
}
function useLocalStorage(key, initialValue, options = {}) {
  const { window: window2 = defaultWindow } = options;
  return useStorage(key, initialValue, window2 == null ? void 0 : window2.localStorage, options);
}
var candidateSelectors = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"];
var candidateSelector = /* @__PURE__ */ candidateSelectors.join(",");
var NoElement = typeof Element === "undefined";
var matches = NoElement ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
var getRootNode = !NoElement && Element.prototype.getRootNode ? function(element) {
  var _element$getRootNode;
  return element === null || element === void 0 ? void 0 : (_element$getRootNode = element.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element);
} : function(element) {
  return element === null || element === void 0 ? void 0 : element.ownerDocument;
};
var _isInert = function isInert(node, lookUp) {
  var _node$getAttribute;
  if (lookUp === void 0) {
    lookUp = true;
  }
  var inertAtt = node === null || node === void 0 ? void 0 : (_node$getAttribute = node.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(node, "inert");
  var inert = inertAtt === "" || inertAtt === "true";
  var result = inert || lookUp && node && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof node.closest === "function" ? node.closest("[inert]") : _isInert(node.parentNode));
  return result;
};
var isContentEditable = function isContentEditable2(node) {
  var _node$getAttribute2;
  var attValue = node === null || node === void 0 ? void 0 : (_node$getAttribute2 = node.getAttribute) === null || _node$getAttribute2 === void 0 ? void 0 : _node$getAttribute2.call(node, "contenteditable");
  return attValue === "" || attValue === "true";
};
var getCandidates = function getCandidates2(el, includeContainer, filter) {
  if (_isInert(el)) {
    return [];
  }
  var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
  if (includeContainer && matches.call(el, candidateSelector)) {
    candidates.unshift(el);
  }
  candidates = candidates.filter(filter);
  return candidates;
};
var _getCandidatesIteratively = function getCandidatesIteratively(elements, includeContainer, options) {
  var candidates = [];
  var elementsToCheck = Array.from(elements);
  while (elementsToCheck.length) {
    var element = elementsToCheck.shift();
    if (_isInert(element, false)) {
      continue;
    }
    if (element.tagName === "SLOT") {
      var assigned = element.assignedElements();
      var content = assigned.length ? assigned : element.children;
      var nestedCandidates = _getCandidatesIteratively(content, true, options);
      if (options.flatten) {
        candidates.push.apply(candidates, nestedCandidates);
      } else {
        candidates.push({
          scopeParent: element,
          candidates: nestedCandidates
        });
      }
    } else {
      var validCandidate = matches.call(element, candidateSelector);
      if (validCandidate && options.filter(element) && (includeContainer || !elements.includes(element))) {
        candidates.push(element);
      }
      var shadowRoot = element.shadowRoot || // check for an undisclosed shadow
      typeof options.getShadowRoot === "function" && options.getShadowRoot(element);
      var validShadowRoot = !_isInert(shadowRoot, false) && (!options.shadowRootFilter || options.shadowRootFilter(element));
      if (shadowRoot && validShadowRoot) {
        var _nestedCandidates = _getCandidatesIteratively(shadowRoot === true ? element.children : shadowRoot.children, true, options);
        if (options.flatten) {
          candidates.push.apply(candidates, _nestedCandidates);
        } else {
          candidates.push({
            scopeParent: element,
            candidates: _nestedCandidates
          });
        }
      } else {
        elementsToCheck.unshift.apply(elementsToCheck, element.children);
      }
    }
  }
  return candidates;
};
var hasTabIndex = function hasTabIndex2(node) {
  return !isNaN(parseInt(node.getAttribute("tabindex"), 10));
};
var getTabIndex = function getTabIndex2(node) {
  if (!node) {
    throw new Error("No node provided");
  }
  if (node.tabIndex < 0) {
    if ((/^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || isContentEditable(node)) && !hasTabIndex(node)) {
      return 0;
    }
  }
  return node.tabIndex;
};
var getSortOrderTabIndex = function getSortOrderTabIndex2(node, isScope) {
  var tabIndex = getTabIndex(node);
  if (tabIndex < 0 && isScope && !hasTabIndex(node)) {
    return 0;
  }
  return tabIndex;
};
var sortOrderedTabbables = function sortOrderedTabbables2(a, b) {
  return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
};
var isInput = function isInput2(node) {
  return node.tagName === "INPUT";
};
var isHiddenInput = function isHiddenInput2(node) {
  return isInput(node) && node.type === "hidden";
};
var isDetailsWithSummary = function isDetailsWithSummary2(node) {
  var r = node.tagName === "DETAILS" && Array.prototype.slice.apply(node.children).some(function(child) {
    return child.tagName === "SUMMARY";
  });
  return r;
};
var getCheckedRadio = function getCheckedRadio2(nodes, form) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked && nodes[i].form === form) {
      return nodes[i];
    }
  }
};
var isTabbableRadio = function isTabbableRadio2(node) {
  if (!node.name) {
    return true;
  }
  var radioScope = node.form || getRootNode(node);
  var queryRadios = function queryRadios2(name) {
    return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
  };
  var radioSet;
  if (typeof window !== "undefined" && typeof window.CSS !== "undefined" && typeof window.CSS.escape === "function") {
    radioSet = queryRadios(window.CSS.escape(node.name));
  } else {
    try {
      radioSet = queryRadios(node.name);
    } catch (err) {
      console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", err.message);
      return false;
    }
  }
  var checked = getCheckedRadio(radioSet, node.form);
  return !checked || checked === node;
};
var isRadio = function isRadio2(node) {
  return isInput(node) && node.type === "radio";
};
var isNonTabbableRadio = function isNonTabbableRadio2(node) {
  return isRadio(node) && !isTabbableRadio(node);
};
var isNodeAttached = function isNodeAttached2(node) {
  var _nodeRoot;
  var nodeRoot = node && getRootNode(node);
  var nodeRootHost = (_nodeRoot = nodeRoot) === null || _nodeRoot === void 0 ? void 0 : _nodeRoot.host;
  var attached = false;
  if (nodeRoot && nodeRoot !== node) {
    var _nodeRootHost, _nodeRootHost$ownerDo, _node$ownerDocument;
    attached = !!((_nodeRootHost = nodeRootHost) !== null && _nodeRootHost !== void 0 && (_nodeRootHost$ownerDo = _nodeRootHost.ownerDocument) !== null && _nodeRootHost$ownerDo !== void 0 && _nodeRootHost$ownerDo.contains(nodeRootHost) || node !== null && node !== void 0 && (_node$ownerDocument = node.ownerDocument) !== null && _node$ownerDocument !== void 0 && _node$ownerDocument.contains(node));
    while (!attached && nodeRootHost) {
      var _nodeRoot2, _nodeRootHost2, _nodeRootHost2$ownerD;
      nodeRoot = getRootNode(nodeRootHost);
      nodeRootHost = (_nodeRoot2 = nodeRoot) === null || _nodeRoot2 === void 0 ? void 0 : _nodeRoot2.host;
      attached = !!((_nodeRootHost2 = nodeRootHost) !== null && _nodeRootHost2 !== void 0 && (_nodeRootHost2$ownerD = _nodeRootHost2.ownerDocument) !== null && _nodeRootHost2$ownerD !== void 0 && _nodeRootHost2$ownerD.contains(nodeRootHost));
    }
  }
  return attached;
};
var isZeroArea = function isZeroArea2(node) {
  var _node$getBoundingClie = node.getBoundingClientRect(), width = _node$getBoundingClie.width, height = _node$getBoundingClie.height;
  return width === 0 && height === 0;
};
var isHidden = function isHidden2(node, _ref2) {
  var displayCheck = _ref2.displayCheck, getShadowRoot = _ref2.getShadowRoot;
  if (displayCheck === "full-native") {
    if ("checkVisibility" in node) {
      var visible = node.checkVisibility({
        // Checking opacity might be desirable for some use cases, but natively,
        // opacity zero elements _are_ focusable and tabbable.
        checkOpacity: false,
        opacityProperty: false,
        contentVisibilityAuto: true,
        visibilityProperty: true,
        // This is an alias for `visibilityProperty`. Contemporary browsers
        // support both. However, this alias has wider browser support (Chrome
        // >= 105 and Firefox >= 106, vs. Chrome >= 121 and Firefox >= 122), so
        // we include it anyway.
        checkVisibilityCSS: true
      });
      return !visible;
    }
  }
  if (getComputedStyle(node).visibility === "hidden") {
    return true;
  }
  var isDirectSummary = matches.call(node, "details>summary:first-of-type");
  var nodeUnderDetails = isDirectSummary ? node.parentElement : node;
  if (matches.call(nodeUnderDetails, "details:not([open]) *")) {
    return true;
  }
  if (!displayCheck || displayCheck === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  displayCheck === "full-native" || displayCheck === "legacy-full") {
    if (typeof getShadowRoot === "function") {
      var originalNode = node;
      while (node) {
        var parentElement = node.parentElement;
        var rootNode = getRootNode(node);
        if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true) {
          return isZeroArea(node);
        } else if (node.assignedSlot) {
          node = node.assignedSlot;
        } else if (!parentElement && rootNode !== node.ownerDocument) {
          node = rootNode.host;
        } else {
          node = parentElement;
        }
      }
      node = originalNode;
    }
    if (isNodeAttached(node)) {
      return !node.getClientRects().length;
    }
    if (displayCheck !== "legacy-full") {
      return true;
    }
  } else if (displayCheck === "non-zero-area") {
    return isZeroArea(node);
  }
  return false;
};
var isDisabledFromFieldset = function isDisabledFromFieldset2(node) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
    var parentNode = node.parentElement;
    while (parentNode) {
      if (parentNode.tagName === "FIELDSET" && parentNode.disabled) {
        for (var i = 0; i < parentNode.children.length; i++) {
          var child = parentNode.children.item(i);
          if (child.tagName === "LEGEND") {
            return matches.call(parentNode, "fieldset[disabled] *") ? true : !child.contains(node);
          }
        }
        return true;
      }
      parentNode = parentNode.parentElement;
    }
  }
  return false;
};
var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable2(options, node) {
  if (node.disabled || isHiddenInput(node) || isHidden(node, options) || // For a details element with a summary, the summary element gets the focus
  isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
    return false;
  }
  return true;
};
var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable2(options, node) {
  if (isNonTabbableRadio(node) || getTabIndex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) {
    return false;
  }
  return true;
};
var isShadowRootTabbable = function isShadowRootTabbable2(shadowHostNode) {
  var tabIndex = parseInt(shadowHostNode.getAttribute("tabindex"), 10);
  if (isNaN(tabIndex) || tabIndex >= 0) {
    return true;
  }
  return false;
};
var _sortByOrder = function sortByOrder(candidates) {
  var regularTabbables = [];
  var orderedTabbables = [];
  candidates.forEach(function(item, i) {
    var isScope = !!item.scopeParent;
    var element = isScope ? item.scopeParent : item;
    var candidateTabindex = getSortOrderTabIndex(element, isScope);
    var elements = isScope ? _sortByOrder(item.candidates) : element;
    if (candidateTabindex === 0) {
      isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element);
    } else {
      orderedTabbables.push({
        documentOrder: i,
        tabIndex: candidateTabindex,
        item,
        isScope,
        content: elements
      });
    }
  });
  return orderedTabbables.sort(sortOrderedTabbables).reduce(function(acc, sortable) {
    sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
    return acc;
  }, []).concat(regularTabbables);
};
var tabbable = function tabbable2(container, options) {
  options = options || {};
  var candidates;
  if (options.getShadowRoot) {
    candidates = _getCandidatesIteratively([container], options.includeContainer, {
      filter: isNodeMatchingSelectorTabbable.bind(null, options),
      flatten: false,
      getShadowRoot: options.getShadowRoot,
      shadowRootFilter: isShadowRootTabbable
    });
  } else {
    candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
  }
  return _sortByOrder(candidates);
};
var focusable = function focusable2(container, options) {
  options = options || {};
  var candidates;
  if (options.getShadowRoot) {
    candidates = _getCandidatesIteratively([container], options.includeContainer, {
      filter: isNodeMatchingSelectorFocusable.bind(null, options),
      flatten: true,
      getShadowRoot: options.getShadowRoot
    });
  } else {
    candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorFocusable.bind(null, options));
  }
  return candidates;
};
var isTabbable = function isTabbable2(node, options) {
  options = options || {};
  if (!node) {
    throw new Error("No node provided");
  }
  if (matches.call(node, candidateSelector) === false) {
    return false;
  }
  return isNodeMatchingSelectorTabbable(options, node);
};
var focusableCandidateSelector = /* @__PURE__ */ candidateSelectors.concat("iframe:not([inert]):not([inert] *)").join(",");
var isFocusable = function isFocusable2(node, options) {
  options = options || {};
  if (!node) {
    throw new Error("No node provided");
  }
  if (matches.call(node, focusableCandidateSelector) === false) {
    return false;
  }
  return isNodeMatchingSelectorFocusable(options, node);
};
function _arrayLikeToArray$1(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray$1(r);
}
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray$1(r)) || e) {
      t && (r = t);
      var n = 0, F = function() {
      };
      return {
        s: F,
        n: function() {
          return n >= r.length ? {
            done: true
          } : {
            done: false,
            value: r[n++]
          };
        },
        e: function(r2) {
          throw r2;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return {
    s: function() {
      t = t.call(r);
    },
    n: function() {
      var r2 = t.next();
      return a = r2.done, r2;
    },
    e: function(r2) {
      u = true, o = r2;
    },
    f: function() {
      try {
        a || null == t.return || t.return();
      } finally {
        if (u) throw o;
      }
    }
  };
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray$1(r) || _nonIterableSpread();
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _unsupportedIterableToArray$1(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray$1(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$1(r, a) : void 0;
  }
}
var activeFocusTraps = {
  // Returns the trap from the top of the stack.
  getActiveTrap: function getActiveTrap(trapStack) {
    if ((trapStack === null || trapStack === void 0 ? void 0 : trapStack.length) > 0) {
      return trapStack[trapStack.length - 1];
    }
    return null;
  },
  // Pauses the currently active trap, then adds a new trap to the stack.
  activateTrap: function activateTrap(trapStack, trap) {
    var activeTrap = activeFocusTraps.getActiveTrap(trapStack);
    if (trap !== activeTrap) {
      activeFocusTraps.pauseTrap(trapStack);
    }
    var trapIndex = trapStack.indexOf(trap);
    if (trapIndex === -1) {
      trapStack.push(trap);
    } else {
      trapStack.splice(trapIndex, 1);
      trapStack.push(trap);
    }
  },
  // Removes the trap from the top of the stack, then unpauses the next trap down.
  deactivateTrap: function deactivateTrap(trapStack, trap) {
    var trapIndex = trapStack.indexOf(trap);
    if (trapIndex !== -1) {
      trapStack.splice(trapIndex, 1);
    }
    activeFocusTraps.unpauseTrap(trapStack);
  },
  // Pauses the trap at the top of the stack.
  pauseTrap: function pauseTrap(trapStack) {
    var activeTrap = activeFocusTraps.getActiveTrap(trapStack);
    activeTrap === null || activeTrap === void 0 || activeTrap._setPausedState(true);
  },
  // Unpauses the trap at the top of the stack.
  unpauseTrap: function unpauseTrap(trapStack) {
    var activeTrap = activeFocusTraps.getActiveTrap(trapStack);
    if (activeTrap && !activeTrap._isManuallyPaused()) {
      activeTrap._setPausedState(false);
    }
  }
};
var isSelectableInput = function isSelectableInput2(node) {
  return node.tagName && node.tagName.toLowerCase() === "input" && typeof node.select === "function";
};
var isEscapeEvent = function isEscapeEvent2(e) {
  return (e === null || e === void 0 ? void 0 : e.key) === "Escape" || (e === null || e === void 0 ? void 0 : e.key) === "Esc" || (e === null || e === void 0 ? void 0 : e.keyCode) === 27;
};
var isTabEvent = function isTabEvent2(e) {
  return (e === null || e === void 0 ? void 0 : e.key) === "Tab" || (e === null || e === void 0 ? void 0 : e.keyCode) === 9;
};
var isKeyForward = function isKeyForward2(e) {
  return isTabEvent(e) && !e.shiftKey;
};
var isKeyBackward = function isKeyBackward2(e) {
  return isTabEvent(e) && e.shiftKey;
};
var delay = function delay2(fn) {
  return setTimeout(fn, 0);
};
var valueOrHandler = function valueOrHandler2(value) {
  for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    params[_key - 1] = arguments[_key];
  }
  return typeof value === "function" ? value.apply(void 0, params) : value;
};
var getActualTarget = function getActualTarget2(event) {
  return event.target.shadowRoot && typeof event.composedPath === "function" ? event.composedPath()[0] : event.target;
};
var internalTrapStack = [];
var createFocusTrap = function createFocusTrap2(elements, userOptions) {
  var doc2 = (userOptions === null || userOptions === void 0 ? void 0 : userOptions.document) || document;
  var trapStack = (userOptions === null || userOptions === void 0 ? void 0 : userOptions.trapStack) || internalTrapStack;
  var config = _objectSpread2({
    returnFocusOnDeactivate: true,
    escapeDeactivates: true,
    delayInitialFocus: true,
    isolateSubtrees: false,
    isKeyForward,
    isKeyBackward
  }, userOptions);
  var state2 = {
    // containers given to createFocusTrap()
    /** @type {Array<HTMLElement>} */
    containers: [],
    // list of objects identifying tabbable nodes in `containers` in the trap
    // NOTE: it's possible that a group has no tabbable nodes if nodes get removed while the trap
    //  is active, but the trap should never get to a state where there isn't at least one group
    //  with at least one tabbable node in it (that would lead to an error condition that would
    //  result in an error being thrown)
    /** @type {Array<{
     *    container: HTMLElement,
     *    tabbableNodes: Array<HTMLElement>, // empty if none
     *    focusableNodes: Array<HTMLElement>, // empty if none
     *    posTabIndexesFound: boolean,
     *    firstTabbableNode: HTMLElement|undefined,
     *    lastTabbableNode: HTMLElement|undefined,
     *    firstDomTabbableNode: HTMLElement|undefined,
     *    lastDomTabbableNode: HTMLElement|undefined,
     *    nextTabbableNode: (node: HTMLElement, forward: boolean) => HTMLElement|undefined
     *  }>}
     */
    containerGroups: [],
    // same order/length as `containers` list
    // references to objects in `containerGroups`, but only those that actually have
    //  tabbable nodes in them
    // NOTE: same order as `containers` and `containerGroups`, but __not necessarily__
    //  the same length
    tabbableGroups: [],
    // references to nodes that are siblings to the ancestors of this trap's containers.
    /** @type {Set<HTMLElement>} */
    adjacentElements: /* @__PURE__ */ new Set(),
    // references to nodes that were inert or aria-hidden before the trap was activated.
    /** @type {Set<HTMLElement>} */
    alreadySilent: /* @__PURE__ */ new Set(),
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: false,
    paused: false,
    manuallyPaused: false,
    // timer ID for when delayInitialFocus is true and initial focus in this trap
    //  has been delayed during activation
    delayInitialFocusTimer: void 0,
    // the most recent KeyboardEvent for the configured nav key (typically [SHIFT+]TAB), if any
    recentNavEvent: void 0
  };
  var trap;
  var getOption = function getOption2(configOverrideOptions, optionName, configOptionName) {
    return configOverrideOptions && configOverrideOptions[optionName] !== void 0 ? configOverrideOptions[optionName] : config[configOptionName || optionName];
  };
  var findContainerIndex = function findContainerIndex2(element, event) {
    var composedPath = typeof (event === null || event === void 0 ? void 0 : event.composedPath) === "function" ? event.composedPath() : void 0;
    return state2.containerGroups.findIndex(function(_ref2) {
      var container = _ref2.container, tabbableNodes = _ref2.tabbableNodes;
      return container.contains(element) || // fall back to explicit tabbable search which will take into consideration any
      //  web components if the `tabbableOptions.getShadowRoot` option was used for
      //  the trap, enabling shadow DOM support in tabbable (`Node.contains()` doesn't
      //  look inside web components even if open)
      (composedPath === null || composedPath === void 0 ? void 0 : composedPath.includes(container)) || tabbableNodes.find(function(node) {
        return node === element;
      });
    });
  };
  var getNodeForOption = function getNodeForOption2(optionName) {
    var _ref2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref2$hasFallback = _ref2.hasFallback, hasFallback = _ref2$hasFallback === void 0 ? false : _ref2$hasFallback, _ref2$params = _ref2.params, params = _ref2$params === void 0 ? [] : _ref2$params;
    var optionValue = config[optionName];
    if (typeof optionValue === "function") {
      optionValue = optionValue.apply(void 0, _toConsumableArray(params));
    }
    if (optionValue === true) {
      optionValue = void 0;
    }
    if (!optionValue) {
      if (optionValue === void 0 || optionValue === false) {
        return optionValue;
      }
      throw new Error("`".concat(optionName, "` was specified but was not a node, or did not return a node"));
    }
    var node = optionValue;
    if (typeof optionValue === "string") {
      try {
        node = doc2.querySelector(optionValue);
      } catch (err) {
        throw new Error("`".concat(optionName, '` appears to be an invalid selector; error="').concat(err.message, '"'));
      }
      if (!node) {
        if (!hasFallback) {
          throw new Error("`".concat(optionName, "` as selector refers to no known node"));
        }
      }
    }
    return node;
  };
  var getInitialFocusNode = function getInitialFocusNode2() {
    var node = getNodeForOption("initialFocus", {
      hasFallback: true
    });
    if (node === false) {
      return false;
    }
    if (node === void 0 || node && !isFocusable(node, config.tabbableOptions)) {
      if (findContainerIndex(doc2.activeElement) >= 0) {
        node = doc2.activeElement;
      } else {
        var firstTabbableGroup = state2.tabbableGroups[0];
        var firstTabbableNode = firstTabbableGroup && firstTabbableGroup.firstTabbableNode;
        node = firstTabbableNode || getNodeForOption("fallbackFocus");
      }
    } else if (node === null) {
      node = getNodeForOption("fallbackFocus");
    }
    if (!node) {
      throw new Error("Your focus-trap needs to have at least one focusable element");
    }
    return node;
  };
  var updateTabbableNodes = function updateTabbableNodes2() {
    state2.containerGroups = state2.containers.map(function(container) {
      var tabbableNodes = tabbable(container, config.tabbableOptions);
      var focusableNodes = focusable(container, config.tabbableOptions);
      var firstTabbableNode = tabbableNodes.length > 0 ? tabbableNodes[0] : void 0;
      var lastTabbableNode = tabbableNodes.length > 0 ? tabbableNodes[tabbableNodes.length - 1] : void 0;
      var firstDomTabbableNode = focusableNodes.find(function(node) {
        return isTabbable(node);
      });
      var lastDomTabbableNode = focusableNodes.slice().reverse().find(function(node) {
        return isTabbable(node);
      });
      var posTabIndexesFound = !!tabbableNodes.find(function(node) {
        return getTabIndex(node) > 0;
      });
      return {
        container,
        tabbableNodes,
        focusableNodes,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode,
        // NOTE: DOM order is NOT NECESSARILY "document position" order, but figuring that out
        //  would require more than just https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        //  because that API doesn't work with Shadow DOM as well as it should (@see
        //  https://github.com/whatwg/dom/issues/320) and since this first/last is only needed, so far,
        //  to address an edge case related to positive tabindex support, this seems like a much easier,
        //  "close enough most of the time" alternative for positive tabindexes which should generally
        //  be avoided anyway...
        /** First tabbable node in container, __DOM__ order; `undefined` if none. */
        firstDomTabbableNode,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function nextTabbableNode(node) {
          var forward = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
          var nodeIdx = tabbableNodes.indexOf(node);
          if (nodeIdx < 0) {
            if (forward) {
              return focusableNodes.slice(focusableNodes.indexOf(node) + 1).find(function(el) {
                return isTabbable(el);
              });
            }
            return focusableNodes.slice(0, focusableNodes.indexOf(node)).reverse().find(function(el) {
              return isTabbable(el);
            });
          }
          return tabbableNodes[nodeIdx + (forward ? 1 : -1)];
        }
      };
    });
    state2.tabbableGroups = state2.containerGroups.filter(function(group) {
      return group.tabbableNodes.length > 0;
    });
    if (state2.tabbableGroups.length <= 0 && !getNodeForOption("fallbackFocus")) {
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    }
    if (state2.containerGroups.find(function(g) {
      return g.posTabIndexesFound;
    }) && state2.containerGroups.length > 1) {
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
    }
  };
  var _getActiveElement = function getActiveElement(el) {
    var activeElement = el.activeElement;
    if (!activeElement) {
      return;
    }
    if (activeElement.shadowRoot && activeElement.shadowRoot.activeElement !== null) {
      return _getActiveElement(activeElement.shadowRoot);
    }
    return activeElement;
  };
  var _tryFocus = function tryFocus(node) {
    if (node === false) {
      return;
    }
    if (node === _getActiveElement(document)) {
      return;
    }
    if (!node || !node.focus) {
      _tryFocus(getInitialFocusNode());
      return;
    }
    node.focus({
      preventScroll: !!config.preventScroll
    });
    state2.mostRecentlyFocusedNode = node;
    if (isSelectableInput(node)) {
      node.select();
    }
  };
  var getReturnFocusNode = function getReturnFocusNode2(previousActiveElement) {
    var node = getNodeForOption("setReturnFocus", {
      params: [previousActiveElement]
    });
    return node ? node : node === false ? false : previousActiveElement;
  };
  var findNextNavNode = function findNextNavNode2(_ref3) {
    var target = _ref3.target, event = _ref3.event, _ref3$isBackward = _ref3.isBackward, isBackward = _ref3$isBackward === void 0 ? false : _ref3$isBackward;
    target = target || getActualTarget(event);
    updateTabbableNodes();
    var destinationNode = null;
    if (state2.tabbableGroups.length > 0) {
      var containerIndex = findContainerIndex(target, event);
      var containerGroup = containerIndex >= 0 ? state2.containerGroups[containerIndex] : void 0;
      if (containerIndex < 0) {
        if (isBackward) {
          destinationNode = state2.tabbableGroups[state2.tabbableGroups.length - 1].lastTabbableNode;
        } else {
          destinationNode = state2.tabbableGroups[0].firstTabbableNode;
        }
      } else if (isBackward) {
        var startOfGroupIndex = state2.tabbableGroups.findIndex(function(_ref4) {
          var firstTabbableNode = _ref4.firstTabbableNode;
          return target === firstTabbableNode;
        });
        if (startOfGroupIndex < 0 && (containerGroup.container === target || isFocusable(target, config.tabbableOptions) && !isTabbable(target, config.tabbableOptions) && !containerGroup.nextTabbableNode(target, false))) {
          startOfGroupIndex = containerIndex;
        }
        if (startOfGroupIndex >= 0) {
          var destinationGroupIndex = startOfGroupIndex === 0 ? state2.tabbableGroups.length - 1 : startOfGroupIndex - 1;
          var destinationGroup = state2.tabbableGroups[destinationGroupIndex];
          destinationNode = getTabIndex(target) >= 0 ? destinationGroup.lastTabbableNode : destinationGroup.lastDomTabbableNode;
        } else if (!isTabEvent(event)) {
          destinationNode = containerGroup.nextTabbableNode(target, false);
        }
      } else {
        var lastOfGroupIndex = state2.tabbableGroups.findIndex(function(_ref5) {
          var lastTabbableNode = _ref5.lastTabbableNode;
          return target === lastTabbableNode;
        });
        if (lastOfGroupIndex < 0 && (containerGroup.container === target || isFocusable(target, config.tabbableOptions) && !isTabbable(target, config.tabbableOptions) && !containerGroup.nextTabbableNode(target))) {
          lastOfGroupIndex = containerIndex;
        }
        if (lastOfGroupIndex >= 0) {
          var _destinationGroupIndex = lastOfGroupIndex === state2.tabbableGroups.length - 1 ? 0 : lastOfGroupIndex + 1;
          var _destinationGroup = state2.tabbableGroups[_destinationGroupIndex];
          destinationNode = getTabIndex(target) >= 0 ? _destinationGroup.firstTabbableNode : _destinationGroup.firstDomTabbableNode;
        } else if (!isTabEvent(event)) {
          destinationNode = containerGroup.nextTabbableNode(target);
        }
      }
    } else {
      destinationNode = getNodeForOption("fallbackFocus");
    }
    return destinationNode;
  };
  var checkPointerDown = function checkPointerDown2(e) {
    var target = getActualTarget(e);
    if (findContainerIndex(target, e) >= 0) {
      return;
    }
    if (valueOrHandler(config.clickOutsideDeactivates, e)) {
      trap.deactivate({
        // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
        //  which will result in the outside click setting focus to the node
        //  that was clicked (and if not focusable, to "nothing"); by setting
        //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
        //  on activation (or the configured `setReturnFocus` node), whether the
        //  outside click was on a focusable node or not
        returnFocus: config.returnFocusOnDeactivate
      });
      return;
    }
    if (valueOrHandler(config.allowOutsideClick, e)) {
      return;
    }
    e.preventDefault();
  };
  var checkFocusIn = function checkFocusIn2(event) {
    var target = getActualTarget(event);
    var targetContained = findContainerIndex(target, event) >= 0;
    if (targetContained || target instanceof Document) {
      if (targetContained) {
        state2.mostRecentlyFocusedNode = target;
      }
    } else {
      event.stopImmediatePropagation();
      var nextNode;
      var navAcrossContainers = true;
      if (state2.mostRecentlyFocusedNode) {
        if (getTabIndex(state2.mostRecentlyFocusedNode) > 0) {
          var mruContainerIdx = findContainerIndex(state2.mostRecentlyFocusedNode);
          var tabbableNodes = state2.containerGroups[mruContainerIdx].tabbableNodes;
          if (tabbableNodes.length > 0) {
            var mruTabIdx = tabbableNodes.findIndex(function(node) {
              return node === state2.mostRecentlyFocusedNode;
            });
            if (mruTabIdx >= 0) {
              if (config.isKeyForward(state2.recentNavEvent)) {
                if (mruTabIdx + 1 < tabbableNodes.length) {
                  nextNode = tabbableNodes[mruTabIdx + 1];
                  navAcrossContainers = false;
                }
              } else {
                if (mruTabIdx - 1 >= 0) {
                  nextNode = tabbableNodes[mruTabIdx - 1];
                  navAcrossContainers = false;
                }
              }
            }
          }
        } else {
          if (!state2.containerGroups.some(function(g) {
            return g.tabbableNodes.some(function(n) {
              return getTabIndex(n) > 0;
            });
          })) {
            navAcrossContainers = false;
          }
        }
      } else {
        navAcrossContainers = false;
      }
      if (navAcrossContainers) {
        nextNode = findNextNavNode({
          // move FROM the MRU node, not event-related node (which will be the node that is
          //  outside the trap causing the focus escape we're trying to fix)
          target: state2.mostRecentlyFocusedNode,
          isBackward: config.isKeyBackward(state2.recentNavEvent)
        });
      }
      if (nextNode) {
        _tryFocus(nextNode);
      } else {
        _tryFocus(state2.mostRecentlyFocusedNode || getInitialFocusNode());
      }
    }
    state2.recentNavEvent = void 0;
  };
  var checkKeyNav = function checkKeyNav2(event) {
    var isBackward = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    state2.recentNavEvent = event;
    var destinationNode = findNextNavNode({
      event,
      isBackward
    });
    if (destinationNode) {
      if (isTabEvent(event)) {
        event.preventDefault();
      }
      _tryFocus(destinationNode);
    }
  };
  var checkTabKey = function checkTabKey2(event) {
    if (config.isKeyForward(event) || config.isKeyBackward(event)) {
      checkKeyNav(event, config.isKeyBackward(event));
    }
  };
  var checkEscapeKey = function checkEscapeKey2(event) {
    if (isEscapeEvent(event) && valueOrHandler(config.escapeDeactivates, event) !== false) {
      event.preventDefault();
      trap.deactivate();
    }
  };
  var checkClick = function checkClick2(e) {
    var target = getActualTarget(e);
    if (findContainerIndex(target, e) >= 0) {
      return;
    }
    if (valueOrHandler(config.clickOutsideDeactivates, e)) {
      return;
    }
    if (valueOrHandler(config.allowOutsideClick, e)) {
      return;
    }
    e.preventDefault();
    e.stopImmediatePropagation();
  };
  var addListeners = function addListeners2() {
    if (!state2.active) {
      return;
    }
    activeFocusTraps.activateTrap(trapStack, trap);
    state2.delayInitialFocusTimer = config.delayInitialFocus ? delay(function() {
      _tryFocus(getInitialFocusNode());
    }) : _tryFocus(getInitialFocusNode());
    doc2.addEventListener("focusin", checkFocusIn, true);
    doc2.addEventListener("mousedown", checkPointerDown, {
      capture: true,
      passive: false
    });
    doc2.addEventListener("touchstart", checkPointerDown, {
      capture: true,
      passive: false
    });
    doc2.addEventListener("click", checkClick, {
      capture: true,
      passive: false
    });
    doc2.addEventListener("keydown", checkTabKey, {
      capture: true,
      passive: false
    });
    doc2.addEventListener("keydown", checkEscapeKey);
    return trap;
  };
  var collectAdjacentElements = function collectAdjacentElements2(containers) {
    if (state2.active && !state2.paused) {
      trap._setSubtreeIsolation(false);
    }
    state2.adjacentElements.clear();
    state2.alreadySilent.clear();
    var containerAncestors = /* @__PURE__ */ new Set();
    var adjacentElements = /* @__PURE__ */ new Set();
    var _iterator = _createForOfIteratorHelper(containers), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var container = _step.value;
        containerAncestors.add(container);
        var insideShadowRoot = typeof ShadowRoot !== "undefined" && container.getRootNode() instanceof ShadowRoot;
        var current = container;
        while (current) {
          containerAncestors.add(current);
          var parent = current.parentElement;
          var siblings = [];
          if (parent) {
            siblings = parent.children;
          } else if (!parent && insideShadowRoot) {
            siblings = current.getRootNode().children;
            parent = current.getRootNode().host;
            insideShadowRoot = typeof ShadowRoot !== "undefined" && parent.getRootNode() instanceof ShadowRoot;
          }
          var _iterator2 = _createForOfIteratorHelper(siblings), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              var child = _step2.value;
              adjacentElements.add(child);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          current = parent;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    containerAncestors.forEach(function(el) {
      adjacentElements["delete"](el);
    });
    state2.adjacentElements = adjacentElements;
  };
  var removeListeners = function removeListeners2() {
    if (!state2.active) {
      return;
    }
    doc2.removeEventListener("focusin", checkFocusIn, true);
    doc2.removeEventListener("mousedown", checkPointerDown, true);
    doc2.removeEventListener("touchstart", checkPointerDown, true);
    doc2.removeEventListener("click", checkClick, true);
    doc2.removeEventListener("keydown", checkTabKey, true);
    doc2.removeEventListener("keydown", checkEscapeKey);
    return trap;
  };
  var checkDomRemoval = function checkDomRemoval2(mutations) {
    var isFocusedNodeRemoved = mutations.some(function(mutation) {
      var removedNodes = Array.from(mutation.removedNodes);
      return removedNodes.some(function(node) {
        return node === state2.mostRecentlyFocusedNode;
      });
    });
    if (isFocusedNodeRemoved) {
      _tryFocus(getInitialFocusNode());
    }
  };
  var mutationObserver = typeof window !== "undefined" && "MutationObserver" in window ? new MutationObserver(checkDomRemoval) : void 0;
  var updateObservedNodes = function updateObservedNodes2() {
    if (!mutationObserver) {
      return;
    }
    mutationObserver.disconnect();
    if (state2.active && !state2.paused) {
      state2.containers.map(function(container) {
        mutationObserver.observe(container, {
          subtree: true,
          childList: true
        });
      });
    }
  };
  trap = {
    get active() {
      return state2.active;
    },
    get paused() {
      return state2.paused;
    },
    activate: function activate(activateOptions) {
      if (state2.active) {
        return this;
      }
      var onActivate = getOption(activateOptions, "onActivate");
      var onPostActivate = getOption(activateOptions, "onPostActivate");
      var checkCanFocusTrap = getOption(activateOptions, "checkCanFocusTrap");
      var preexistingTrap = activeFocusTraps.getActiveTrap(trapStack);
      var revertState = false;
      if (preexistingTrap && !preexistingTrap.paused) {
        var _preexistingTrap$_set;
        (_preexistingTrap$_set = preexistingTrap._setSubtreeIsolation) === null || _preexistingTrap$_set === void 0 || _preexistingTrap$_set.call(preexistingTrap, false);
        revertState = true;
      }
      try {
        if (!checkCanFocusTrap) {
          updateTabbableNodes();
        }
        state2.active = true;
        state2.paused = false;
        state2.nodeFocusedBeforeActivation = _getActiveElement(doc2);
        onActivate === null || onActivate === void 0 || onActivate();
        var finishActivation = function finishActivation2() {
          if (checkCanFocusTrap) {
            updateTabbableNodes();
          }
          addListeners();
          updateObservedNodes();
          if (config.isolateSubtrees) {
            trap._setSubtreeIsolation(true);
          }
          onPostActivate === null || onPostActivate === void 0 || onPostActivate();
        };
        if (checkCanFocusTrap) {
          checkCanFocusTrap(state2.containers.concat()).then(finishActivation, finishActivation);
          return this;
        }
        finishActivation();
      } catch (error) {
        if (preexistingTrap === activeFocusTraps.getActiveTrap(trapStack) && revertState) {
          var _preexistingTrap$_set2;
          (_preexistingTrap$_set2 = preexistingTrap._setSubtreeIsolation) === null || _preexistingTrap$_set2 === void 0 || _preexistingTrap$_set2.call(preexistingTrap, true);
        }
        throw error;
      }
      return this;
    },
    deactivate: function deactivate(deactivateOptions) {
      if (!state2.active) {
        return this;
      }
      var options = _objectSpread2({
        onDeactivate: config.onDeactivate,
        onPostDeactivate: config.onPostDeactivate,
        checkCanReturnFocus: config.checkCanReturnFocus
      }, deactivateOptions);
      clearTimeout(state2.delayInitialFocusTimer);
      state2.delayInitialFocusTimer = void 0;
      if (!state2.paused) {
        trap._setSubtreeIsolation(false);
      }
      state2.alreadySilent.clear();
      removeListeners();
      state2.active = false;
      state2.paused = false;
      updateObservedNodes();
      activeFocusTraps.deactivateTrap(trapStack, trap);
      var onDeactivate = getOption(options, "onDeactivate");
      var onPostDeactivate = getOption(options, "onPostDeactivate");
      var checkCanReturnFocus = getOption(options, "checkCanReturnFocus");
      var returnFocus = getOption(options, "returnFocus", "returnFocusOnDeactivate");
      onDeactivate === null || onDeactivate === void 0 || onDeactivate();
      var finishDeactivation = function finishDeactivation2() {
        delay(function() {
          if (returnFocus) {
            _tryFocus(getReturnFocusNode(state2.nodeFocusedBeforeActivation));
          }
          onPostDeactivate === null || onPostDeactivate === void 0 || onPostDeactivate();
        });
      };
      if (returnFocus && checkCanReturnFocus) {
        checkCanReturnFocus(getReturnFocusNode(state2.nodeFocusedBeforeActivation)).then(finishDeactivation, finishDeactivation);
        return this;
      }
      finishDeactivation();
      return this;
    },
    pause: function pause(pauseOptions) {
      if (!state2.active) {
        return this;
      }
      state2.manuallyPaused = true;
      return this._setPausedState(true, pauseOptions);
    },
    unpause: function unpause(unpauseOptions) {
      if (!state2.active) {
        return this;
      }
      state2.manuallyPaused = false;
      if (trapStack[trapStack.length - 1] !== this) {
        return this;
      }
      return this._setPausedState(false, unpauseOptions);
    },
    updateContainerElements: function updateContainerElements(containerElements) {
      var elementsAsArray = [].concat(containerElements).filter(Boolean);
      state2.containers = elementsAsArray.map(function(element) {
        return typeof element === "string" ? doc2.querySelector(element) : element;
      });
      if (config.isolateSubtrees) {
        collectAdjacentElements(state2.containers);
      }
      if (state2.active) {
        updateTabbableNodes();
        if (config.isolateSubtrees && !state2.paused) {
          trap._setSubtreeIsolation(true);
        }
      }
      updateObservedNodes();
      return this;
    }
  };
  Object.defineProperties(trap, {
    _isManuallyPaused: {
      value: function value() {
        return state2.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function value(paused, options) {
        if (state2.paused === paused) {
          return this;
        }
        state2.paused = paused;
        if (paused) {
          var onPause = getOption(options, "onPause");
          var onPostPause = getOption(options, "onPostPause");
          onPause === null || onPause === void 0 || onPause();
          removeListeners();
          updateObservedNodes();
          trap._setSubtreeIsolation(false);
          onPostPause === null || onPostPause === void 0 || onPostPause();
        } else {
          var onUnpause = getOption(options, "onUnpause");
          var onPostUnpause = getOption(options, "onPostUnpause");
          onUnpause === null || onUnpause === void 0 || onUnpause();
          trap._setSubtreeIsolation(true);
          updateTabbableNodes();
          addListeners();
          updateObservedNodes();
          onPostUnpause === null || onPostUnpause === void 0 || onPostUnpause();
        }
        return this;
      }
    },
    _setSubtreeIsolation: {
      value: function value(isEnabled) {
        if (config.isolateSubtrees) {
          state2.adjacentElements.forEach(function(el) {
            var _el$getAttribute;
            if (isEnabled) {
              switch (config.isolateSubtrees) {
                case "aria-hidden":
                  if (el.ariaHidden === "true" || ((_el$getAttribute = el.getAttribute("aria-hidden")) === null || _el$getAttribute === void 0 ? void 0 : _el$getAttribute.toLowerCase()) === "true") {
                    state2.alreadySilent.add(el);
                  }
                  el.setAttribute("aria-hidden", "true");
                  break;
                default:
                  if (el.inert || el.hasAttribute("inert")) {
                    state2.alreadySilent.add(el);
                  }
                  el.setAttribute("inert", true);
                  break;
              }
            } else {
              if (state2.alreadySilent.has(el)) ;
              else {
                switch (config.isolateSubtrees) {
                  case "aria-hidden":
                    el.removeAttribute("aria-hidden");
                    break;
                  default:
                    el.removeAttribute("inert");
                    break;
                }
              }
            }
          });
        }
      }
    }
  });
  trap.updateContainerElements(elements);
  return trap;
};
function useFocusTrap(target, options = {}) {
  let trap;
  const { immediate, ...focusTrapOptions } = options;
  const hasFocus = /* @__PURE__ */ ref(false);
  const isPaused = /* @__PURE__ */ ref(false);
  const activate = (opts) => trap && trap.activate(opts);
  const deactivate = (opts) => trap && trap.deactivate(opts);
  const pause = () => {
    if (trap) {
      trap.pause();
      isPaused.value = true;
    }
  };
  const unpause = () => {
    if (trap) {
      trap.unpause();
      isPaused.value = false;
    }
  };
  watch(
    () => unrefElement(target),
    (el) => {
      if (!el)
        return;
      trap = createFocusTrap(el, {
        ...focusTrapOptions,
        onActivate() {
          hasFocus.value = true;
          if (options.onActivate)
            options.onActivate();
        },
        onDeactivate() {
          hasFocus.value = false;
          if (options.onDeactivate)
            options.onDeactivate();
        }
      });
      if (immediate)
        activate();
    },
    { flush: "post" }
  );
  tryOnScopeDispose(() => deactivate());
  return {
    hasFocus,
    isPaused,
    activate,
    deactivate,
    pause,
    unpause
  };
}
const uo = (e) => (...o) => {
  e && (e == null || e(...o), e = null);
}, q = () => {
};
function oe(e, o, l) {
  return e > l ? l : e < o ? o : e;
}
const we = (e) => typeof e == "string";
function fe(e, o) {
  var s;
  const l = ((s = $(e, o)) == null ? void 0 : s[0]) || o;
  e.push(l);
}
function $(e, o) {
  const l = e.indexOf(o);
  if (l !== -1)
    return e.splice(l, 1);
}
function Fe(e) {
  return Object.entries(e);
}
const co = {
  /**
   * @description Set `null | false` to disable teleport.
   * @default `'body'`
   * @example
   * ```js
   * teleportTo: '#modals'
   * ```
   */
  teleportTo: {
    type: [String, null, Boolean, Object],
    default: "body"
  },
  /**
   * @description An uniq name for the open/close a modal via vfm.open/vfm.close APIs.
   * @default `undefined`
   * @example Symbol: `Symbol('MyModal')`
   * @example String: `'AUniqString'`
   * @example Number: `300`
   */
  modalId: {
    type: [String, Number, Symbol],
    default: void 0
  },
  /**
   * @description Display the modal or not.
   * @default `undefined`
   * @example
   * ```js
   * const showModal = ref(false)
   * v-model="showModal"
   * ```
   */
  modelValue: {
    type: Boolean,
    default: void 0
  },
  /**
   * @description Render the modal via `if` or `show`.
   * @default `'if'`
   * @example
   * ```js
   * displayDirective: 'if'
   * ```
   * @example
   * ```js
   * displayDirective: 'show'
   * ```
   */
  displayDirective: {
    type: String,
    default: "if",
    validator: (e) => ["if", "show", "visible"].includes(e)
  },
  /**
   * @description Hide the overlay or not.
   * @default `undefined`
   * @example
   * ```js
   * hideOverlay="true"
   * ```
   */
  hideOverlay: {
    type: Boolean,
    default: void 0
  },
  /**
   * @description Customize the overlay behavior.
   */
  overlayBehavior: {
    type: String,
    default: "auto",
    validator: (e) => ["auto", "persist"].includes(e)
  },
  /**
   * @description Customize the overlay transition.
   * @default `undefined`
   */
  overlayTransition: {
    type: [String, Object],
    default: void 0
  },
  /**
   * @description Customize the content transition.
   * @default `undefined`
   */
  contentTransition: {
    type: [String, Object],
    default: void 0
  },
  /**
   * @description Bind class to vfm__overlay.
   * @default `undefined`
   */
  overlayClass: {
    type: void 0,
    default: void 0
  },
  /**
   * @description Bind class to vfm__content.
   * @default `undefined`
   */
  contentClass: {
    type: void 0,
    default: void 0
  },
  /**
   * @description Bind style to vfm__overlay.
   * @default `undefined`
   */
  overlayStyle: {
    type: [String, Object, Array],
    default: void 0
  },
  /**
   * @description Bind style to vfm__content.
   * @default `undefined`
   */
  contentStyle: {
    type: [String, Object, Array],
    default: void 0
  },
  /**
   * @description Is it allow to close the modal by clicking the overlay.
   * @default `true`
   */
  clickToClose: {
    type: Boolean,
    default: true
  },
  /**
   * @description Is it allow to close the modal by keypress `esc`.
   * @default `true`
   */
  escToClose: {
    type: Boolean,
    default: true
  },
  /**
   * @description Is it allow to click outside of the vfm__content when the modal is opened
   * @default `'non-interactive'`
   */
  background: {
    type: String,
    default: "non-interactive",
    validator: (e) => ["interactive", "non-interactive"].includes(e)
  },
  /**
   * @description
   * * Use `{ disabled: true }` to disable the focusTrap.
   * * Checkout the createOptions type here https://github.com/focus-trap/focus-trap for more.
   * @default `{ allowOutsideClick: true }`
   */
  focusTrap: {
    type: [Boolean, Object],
    default: () => ({
      allowOutsideClick: true
    })
  },
  /**
   * @description Lock body scroll or not when the modal is opened.
   * @default `true`
   */
  lockScroll: {
    type: Boolean,
    default: true
  },
  /**
   * @description Creates a padding-right when scroll is locked to prevent the page from jumping
   * @default `true`
   */
  reserveScrollBarGap: {
    type: Boolean,
    default: true
  },
  /**
   * @description Define how to increase the zIndex when there are nested modals
   * @default `({ index }) => 1000 + 2 * index`
   */
  zIndexFn: {
    type: Function,
    default: ({ index: e }) => 1e3 + 2 * e
  },
  /**
   * @description The direction of swiping to close the modal
   * @default `none`
   * @example
   * Set swipeToClose="none" to disable swiping to close
   * ```js
   * swipeToClose="none"
   * ```
   */
  swipeToClose: {
    type: String,
    default: "none",
    validator: (e) => ["none", "up", "right", "down", "left"].includes(e)
  },
  /**
   * @description Threshold for swipe to close
   * @default `0`
   */
  threshold: {
    type: Number,
    default: 0
  },
  /**
   * @description If set `:showSwipeBanner="true"`, only allow clicking `swipe-banner` slot to swipe to close
   * @default `undefined`
   * @example
   * ```js
   * swipeToClose="right"
   * :showSwipeBanner="true"
   * ```
   * ```html
   * <VueFinalModal
   *   ...
   *   swipeToClose="right"
   *   :showSwipeBanner="true"
   * >
   *   <template #swipe-banner>
   *     <div style="position: absolute; height: 100%; top: 0; left: 0; width: 10px;" />
   *   </template>
   *   ...modal content
   * </VueFinalModal>
   * ```
   */
  showSwipeBanner: {
    type: Boolean,
    default: void 0
  },
  /**
   * @description When set `:preventNavigationGestures="true"`, there will be two invisible bars for prevent navigation gestures including swiping back/forward on mobile webkit. For example: Safari mobile.
   * @default `undefined`
   * @example
   * Set preventNavigationGestures="true" to prevent Safari navigation gestures including swiping back/forward.
   * ```js
   * :preventNavigationGestures="true"
   * ```
   */
  preventNavigationGestures: {
    type: Boolean,
    default: void 0
  }
};
function Oe(e = false) {
  const o = /* @__PURE__ */ ref(e), l = /* @__PURE__ */ ref(o.value ? 0 : void 0);
  return [o, l, {
    beforeEnter() {
      l.value = 1;
    },
    afterEnter() {
      l.value = 0;
    },
    beforeLeave() {
      l.value = 3;
    },
    afterLeave() {
      l.value = 2;
    }
  }];
}
function fo(e, o) {
  const { modelValueLocal: l, onEntering: s, onEnter: u, onLeaving: c, onLeave: a } = o, n = /* @__PURE__ */ ref(l.value), [t, r, m] = Oe(n.value), [f, M, S] = Oe(n.value), V = computed(() => typeof e.contentTransition == "string" ? { name: e.contentTransition, appear: true } : { appear: true, ...e.contentTransition }), O = computed(() => typeof e.overlayTransition == "string" ? { name: e.overlayTransition, appear: true } : { appear: true, ...e.overlayTransition }), E = computed(
    () => (e.hideOverlay || M.value === 2) && r.value === 2
    /* Leave */
  );
  watch(
    E,
    (k) => {
      k && (n.value = false);
    }
  ), watch(r, (k) => {
    if (k === 1) {
      if (!n.value)
        return;
      s == null || s();
    } else if (k === 0) {
      if (!n.value)
        return;
      u == null || u();
    } else
      k === 3 ? c == null || c() : k === 2 && (a == null || a());
  });
  async function w() {
    n.value = true, await nextTick(), t.value = true, f.value = true;
  }
  function D() {
    t.value = false, f.value = false;
  }
  return {
    visible: n,
    contentVisible: t,
    contentListeners: m,
    contentTransition: V,
    overlayVisible: f,
    overlayListeners: S,
    overlayTransition: O,
    enterTransition: w,
    leaveTransition: D
  };
}
function vo(e, o, l) {
  const { vfmRootEl: s, vfmContentEl: u, visible: c, modelValueLocal: a } = l, n = /* @__PURE__ */ ref();
  function t() {
    c.value && e.escToClose && (a.value = false);
  }
  function r(f) {
    n.value = f == null ? void 0 : f.target;
  }
  function m() {
    var f;
    n.value === s.value && (e.clickToClose ? a.value = false : ((f = u.value) == null || f.focus(), o("clickOutside")));
  }
  return {
    onEsc: t,
    onMouseupRoot: m,
    onMousedown: r
  };
}
function po(e, o, l) {
  let s = false;
  const { open: u, close: c } = l, a = /* @__PURE__ */ ref(false), n = {
    get value() {
      return a.value;
    },
    set value(r) {
      t(r);
    }
  };
  function t(r) {
    (r ? u() : c()) ? (a.value = r, r !== e.modelValue && o("update:modelValue", r)) : (s = true, o("update:modelValue", !r), nextTick(() => {
      s = false;
    }));
  }
  return watch(() => e.modelValue, (r) => {
    s || (n.value = !!r);
  }), {
    modelValueLocal: n
  };
}
function yo(e, o) {
  if (e.focusTrap === false)
    return {
      focus() {
      },
      blur() {
      }
    };
  const { focusEl: l } = o, { hasFocus: s, activate: u, deactivate: c } = useFocusTrap(l, e.focusTrap);
  function a() {
    requestAnimationFrame(() => {
      u();
    });
  }
  function n() {
    s.value && c();
  }
  return { focus: a, blur: n };
}
let be = false;
if (typeof window < "u") {
  const e = {
    get passive() {
      be = true;
    }
  };
  window.addEventListener("testPassive", null, e), window.removeEventListener("testPassive", null, e);
}
const He = typeof window < "u" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
let j = [], le = false, ne = 0, je = -1, W, X;
const ho = (e) => {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return false;
  const o = window.getComputedStyle(e);
  return ["auto", "scroll"].includes(o.overflowY) && e.scrollHeight > e.clientHeight;
}, mo = (e, o) => !(e.scrollTop === 0 && o < 0 || e.scrollTop + e.clientHeight + o >= e.scrollHeight && o > 0), wo = (e) => {
  const o = [];
  for (; e; ) {
    if (o.push(e), e.classList.contains("vfm"))
      return o;
    e = e.parentElement;
  }
  return o;
}, bo = (e, o) => {
  let l = false;
  return wo(e).forEach((u) => {
    ho(u) && mo(u, o) && (l = true);
  }), l;
}, Ne = (e) => j.some(() => bo(e, -ne)), se = (e) => {
  const o = e || window.event;
  return Ne(o.target) || o.touches.length > 1 ? true : (o.preventDefault && o.preventDefault(), false);
}, To = (e) => {
  if (X === void 0) {
    const o = !!e && e.reserveScrollBarGap === true, l = window.innerWidth - document.documentElement.clientWidth;
    if (o && l > 0) {
      const s = parseInt(getComputedStyle(document.body).getPropertyValue("padding-right"), 10);
      X = document.body.style.paddingRight, document.body.style.paddingRight = `${s + l}px`;
    }
  }
  W === void 0 && (W = document.body.style.overflow, document.body.style.overflow = "hidden");
}, So = () => {
  X !== void 0 && (document.body.style.paddingRight = X, X = void 0), W !== void 0 && (document.body.style.overflow = W, W = void 0);
}, Mo = (e) => e ? e.scrollHeight - e.scrollTop <= e.clientHeight : false, go = (e, o) => (ne = e.targetTouches[0].clientY - je, Ne(e.target) ? false : o && o.scrollTop === 0 && ne > 0 || Mo(o) && ne < 0 ? se(e) : (e.stopPropagation(), true)), Co = (e, o) => {
  if (!e) {
    console.error(
      "disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices."
    );
    return;
  }
  if (j.some((s) => s.targetElement === e))
    return;
  const l = {
    targetElement: e,
    options: o || {}
  };
  j = [...j, l], He ? (e.ontouchstart = (s) => {
    s.targetTouches.length === 1 && (je = s.targetTouches[0].clientY);
  }, e.ontouchmove = (s) => {
    s.targetTouches.length === 1 && go(s, e);
  }, le || (document.addEventListener("touchmove", se, be ? { passive: false } : void 0), le = true)) : To(o);
}, ko = (e) => {
  if (!e) {
    console.error(
      "enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices."
    );
    return;
  }
  j = j.filter((o) => o.targetElement !== e), He ? (e.ontouchstart = null, e.ontouchmove = null, le && j.length === 0 && (document.removeEventListener("touchmove", se, be ? { passive: false } : void 0), le = false)) : j.length || So();
};
function Vo(e, o) {
  const { lockScrollEl: l, modelValueLocal: s } = o;
  let u;
  watch(l, (n) => {
    n && (u = n);
  }, { immediate: true }), watch(() => e.lockScroll, (n) => {
    n ? a() : c();
  }), onBeforeUnmount(() => {
    c();
  });
  function c() {
    u && ko(u);
  }
  function a() {
    s.value && e.lockScroll && u && Co(u, {
      reserveScrollBarGap: e.reserveScrollBarGap,
      allowTouchMove: (n) => {
        for (; n && n !== document.body; ) {
          if (n.getAttribute("vfm-scroll-lock-ignore") !== null)
            return true;
          n = n.parentElement;
        }
        return false;
      }
    });
  }
  return {
    enableBodyScroll: c,
    disableBodyScroll: a
  };
}
function Eo(e) {
  const o = /* @__PURE__ */ ref();
  function l(u) {
    var c;
    o.value = (c = e.zIndexFn) == null ? void 0 : c.call(e, { index: u <= -1 ? 0 : u });
  }
  function s() {
    o.value = void 0;
  }
  return {
    zIndex: o,
    refreshZIndex: l,
    resetZIndex: s
  };
}
const ve = {
  beforeMount(e, { value: o }, { transition: l }) {
    e._vov = e.style.visibility === "hidden" ? "" : e.style.visibility, l && o ? l.beforeEnter(e) : G(e, o);
  },
  mounted(e, { value: o }, { transition: l }) {
    l && o && l.enter(e);
  },
  updated(e, { value: o, oldValue: l }, { transition: s }) {
    !o != !l && (s ? o ? (s.beforeEnter(e), G(e, true), s.enter(e)) : s.leave(e, () => {
      G(e, false);
    }) : G(e, o));
  },
  beforeUnmount(e, { value: o }) {
    G(e, o);
  }
};
function G(e, o) {
  e.style.visibility = o ? e._vov : "hidden";
}
const De = (e) => {
  if (e instanceof MouseEvent) {
    const { clientX: o, clientY: l } = e;
    return { x: o, y: l };
  } else {
    const { clientX: o, clientY: l } = e.targetTouches[0];
    return { x: o, y: l };
  }
};
function Bo(e) {
  if (!e)
    return false;
  let o = false;
  const l = {
    get passive() {
      return o = true, false;
    }
  };
  return e.addEventListener("x", q, l), e.removeEventListener("x", q), o;
}
function Oo(e, {
  threshold: o = 0,
  onSwipeStart: l,
  onSwipe: s,
  onSwipeEnd: u,
  passive: c = true
}) {
  const a = /* @__PURE__ */ reactive({ x: 0, y: 0 }), n = /* @__PURE__ */ reactive({ x: 0, y: 0 }), t = computed(() => a.x - n.x), r = computed(() => a.y - n.y), { max: m, abs: f } = Math, M = computed(
    () => m(f(t.value), f(r.value)) >= o
  ), S = /* @__PURE__ */ ref(false), V = computed(() => M.value ? f(t.value) > f(r.value) ? t.value > 0 ? "left" : "right" : r.value > 0 ? "up" : "down" : "none"), O = (p2, h2) => {
    a.x = p2, a.y = h2;
  }, E = (p2, h2) => {
    n.x = p2, n.y = h2;
  };
  let w, D;
  function k(p2) {
    w.capture && !w.passive && p2.preventDefault();
    const { x: h2, y: R } = De(p2);
    O(h2, R), E(h2, R), l == null || l(p2), D = [
      useEventListener(e, "mousemove", P, w),
      useEventListener(e, "touchmove", P, w),
      useEventListener(e, "mouseup", i, w),
      useEventListener(e, "touchend", i, w),
      useEventListener(e, "touchcancel", i, w)
    ];
  }
  function P(p2) {
    const { x: h2, y: R } = De(p2);
    E(h2, R), !S.value && M.value && (S.value = true), S.value && (s == null || s(p2));
  }
  function i(p2) {
    S.value && (u == null || u(p2, V.value)), S.value = false, D.forEach((h2) => h2());
  }
  let b = [];
  return onMounted(() => {
    const p2 = Bo(window == null ? void 0 : window.document);
    c ? w = p2 ? { passive: true } : { capture: false } : w = p2 ? { passive: false, capture: true } : { capture: true }, b = [
      useEventListener(e, "mousedown", k, w),
      useEventListener(e, "touchstart", k, w)
    ];
  }), {
    isSwiping: S,
    direction: V,
    coordsStart: a,
    coordsEnd: n,
    lengthX: t,
    lengthY: r,
    stop: () => {
      b.forEach((p2) => p2()), D.forEach((p2) => p2());
    }
  };
}
function Do(e, o) {
  const { vfmContentEl: l, modelValueLocal: s } = o, u = 0.1, c = 300, a = /* @__PURE__ */ ref(), n = computed(() => {
    if (!(e.swipeToClose === void 0 || e.swipeToClose === "none"))
      return e.showSwipeBanner ? a.value : l.value;
  }), t = /* @__PURE__ */ ref(0), r = /* @__PURE__ */ ref(true);
  let m = q, f = true, M, S = false;
  const { lengthX: V, lengthY: O, direction: E, isSwiping: w } = Oo(n, {
    threshold: e.threshold,
    onSwipeStart(i) {
      m = useEventListener(document, "selectionchange", () => {
        var b;
        r.value = (b = window.getSelection()) == null ? void 0 : b.isCollapsed;
      }), M = (/* @__PURE__ */ new Date()).getTime(), S = P(i == null ? void 0 : i.target);
    },
    onSwipe() {
      var i, b, L, p2;
      if (S && r.value && E.value === e.swipeToClose) {
        if (E.value === "up") {
          const h2 = oe(Math.abs(O.value || 0), 0, ((i = n.value) == null ? void 0 : i.offsetHeight) || 0) - (e.threshold || 0);
          t.value = h2;
        } else if (E.value === "down") {
          const h2 = oe(Math.abs(O.value || 0), 0, ((b = n.value) == null ? void 0 : b.offsetHeight) || 0) - (e.threshold || 0);
          t.value = -h2;
        } else if (E.value === "right") {
          const h2 = oe(Math.abs(V.value || 0), 0, ((L = n.value) == null ? void 0 : L.offsetWidth) || 0) - (e.threshold || 0);
          t.value = -h2;
        } else if (E.value === "left") {
          const h2 = oe(Math.abs(V.value || 0), 0, ((p2 = n.value) == null ? void 0 : p2.offsetWidth) || 0) - (e.threshold || 0);
          t.value = h2;
        }
      }
    },
    onSwipeEnd(i, b) {
      if (m(), !r.value) {
        r.value = true;
        return;
      }
      const L = (/* @__PURE__ */ new Date()).getTime(), p2 = b === e.swipeToClose, h2 = (() => {
        var J, Q;
        if (b === "up" || b === "down")
          return Math.abs((O == null ? void 0 : O.value) || 0) > u * (((J = n.value) == null ? void 0 : J.offsetHeight) || 0);
        if (b === "left" || b === "right")
          return Math.abs((V == null ? void 0 : V.value) || 0) > u * (((Q = n.value) == null ? void 0 : Q.offsetWidth) || 0);
      })(), R = L - M <= c;
      if (f && S && p2 && (h2 || R)) {
        s.value = false;
        return;
      }
      t.value = 0;
    }
  }), D = computed(() => {
    if (e.swipeToClose === "none")
      return;
    const i = (() => {
      switch (e.swipeToClose) {
        case "up":
        case "down":
          return "translateY";
        case "left":
        case "right":
          return "translateX";
      }
    })();
    return {
      class: { "vfm-bounce-back": !w.value },
      style: { transform: `${i}(${-t.value}px)` }
    };
  });
  watch(
    () => r.value,
    (i) => {
      i || (t.value = 0);
    }
  ), watch(
    () => s.value,
    (i) => {
      i && (t.value = 0);
    }
  ), watch(
    () => t.value,
    (i, b) => {
      switch (e.swipeToClose) {
        case "down":
        case "right":
          f = i < b;
          break;
        case "up":
        case "left":
          f = i > b;
          break;
      }
    }
  );
  function k(i) {
    e.preventNavigationGestures && i.preventDefault();
  }
  function P(i) {
    const b = i == null ? void 0 : i.tagName;
    if (!b || ["INPUT", "TEXTAREA"].includes(b))
      return false;
    const L = (() => {
      switch (e.swipeToClose) {
        case "up":
          return (i == null ? void 0 : i.scrollTop) + (i == null ? void 0 : i.clientHeight) === (i == null ? void 0 : i.scrollHeight);
        case "left":
          return (i == null ? void 0 : i.scrollLeft) + (i == null ? void 0 : i.clientWidth) === (i == null ? void 0 : i.scrollWidth);
        case "down":
          return (i == null ? void 0 : i.scrollTop) === 0;
        case "right":
          return (i == null ? void 0 : i.scrollLeft) === 0;
        default:
          return false;
      }
    })();
    return i === n.value ? L : L && P(i == null ? void 0 : i.parentElement);
  }
  return {
    vfmContentEl: l,
    swipeBannerEl: a,
    bindSwipe: D,
    onTouchStartSwipeBanner: k
  };
}
const Ye = /* @__PURE__ */ Symbol("vfm");
let H;
const Lo = (e) => H = e, Po = {
  install: q,
  modals: [],
  openedModals: [],
  openedModalOverlays: [],
  dynamicModals: [],
  modalsContainers: /* @__PURE__ */ ref([]),
  get: () => {
  },
  toggle: () => {
  },
  open: () => {
  },
  close: () => {
  },
  closeAll: () => Promise.allSettled([])
}, Ao = () => getCurrentInstance() && inject(Ye, Po) || H;
function zo() {
  const e = /* @__PURE__ */ shallowReactive([]), o = /* @__PURE__ */ shallowReactive([]), l = /* @__PURE__ */ shallowReactive([]), s = /* @__PURE__ */ shallowReactive([]), u = /* @__PURE__ */ ref([]), c = markRaw({
    install(a) {
      a.provide(Ye, c), a.config.globalProperties.$vfm = c;
    },
    modals: e,
    openedModals: o,
    openedModalOverlays: l,
    dynamicModals: s,
    modalsContainers: u,
    get(a) {
      return e.find((n) => {
        var t, r;
        return ((r = (t = Z(n)) == null ? void 0 : t.value.modalId) == null ? void 0 : r.value) === a;
      });
    },
    toggle(a, n) {
      var r;
      const t = c.get(a);
      return (r = Z(t)) == null ? void 0 : r.value.toggle(n);
    },
    open(a) {
      return c.toggle(a, true);
    },
    close(a) {
      return c.toggle(a, false);
    },
    closeAll() {
      return Promise.allSettled(
        o.reduce((a, n) => {
          const t = Z(n), r = t == null ? void 0 : t.value.toggle(false);
          return r && a.push(r), a;
        }, [])
      );
    }
  });
  return Lo(c), c;
}
function Z(e) {
  var o;
  return (o = e == null ? void 0 : e.exposed) == null ? void 0 : o.modalExposed;
}
const Io = /* @__PURE__ */ defineComponent({ inheritAttrs: false }), Ro = /* @__PURE__ */ defineComponent({
  ...Io,
  __name: "VueFinalModal",
  props: co,
  emits: ["update:modelValue", "beforeOpen", "opened", "beforeClose", "closed", "clickOutside"],
  setup(e, { expose: o, emit: l }) {
    const s = e, u = l, c = useAttrs(), a = getCurrentInstance(), { modals: n, openedModals: t, openedModalOverlays: r } = K(), m = /* @__PURE__ */ ref(), f = /* @__PURE__ */ ref(), { focus: M, blur: S } = yo(s, { focusEl: m }), { zIndex: V, refreshZIndex: O, resetZIndex: E } = Eo(s), { modelValueLocal: w } = po(s, u, { open: We, close: Xe }), { enableBodyScroll: D, disableBodyScroll: k } = Vo(s, {
      lockScrollEl: m,
      modelValueLocal: w
    });
    let P = q;
    const {
      visible: i,
      contentVisible: b,
      contentListeners: L,
      contentTransition: p2,
      overlayVisible: h2,
      overlayListeners: R,
      overlayTransition: J,
      enterTransition: Q,
      leaveTransition: xe
    } = fo(s, {
      modelValueLocal: w,
      onEntering() {
        nextTick(() => {
          k(), M();
        });
      },
      onEnter() {
        u("opened"), P("opened");
      },
      onLeave() {
        $(t, a), E(), D(), u("closed"), P("closed");
      }
    }), { onEsc: ze, onMouseupRoot: Ge, onMousedown: Te } = vo(s, u, { vfmRootEl: m, vfmContentEl: f, visible: i, modelValueLocal: w }), {
      swipeBannerEl: $e,
      bindSwipe: Ue,
      onTouchStartSwipeBanner: Se
    } = Do(s, { vfmContentEl: f, modelValueLocal: w }), Me = computed(() => a ? t.indexOf(a) : -1);
    watch([() => s.zIndexFn, Me], () => {
      i.value && O(Me.value);
    }), onMounted(() => {
      fe(n, a);
    }), s.modelValue && (w.value = true);
    function We() {
      let d = false;
      return u("beforeOpen", { stop: () => d = true }), d ? false : (fe(t, a), fe(r, a), ie(), Q(), true);
    }
    function Xe() {
      let d = false;
      return u("beforeClose", { stop: () => d = true }), d ? false : ($(r, a), ie(), S(), xe(), true);
    }
    function Ze() {
      w.value = false;
    }
    onBeforeUnmount(() => {
      D(), $(n, a), $(t, a), S(), ie();
    });
    async function ie() {
      await nextTick();
      const d = r.filter((y) => {
        var A;
        const T = Z(y);
        return (T == null ? void 0 : T.value.overlayBehavior.value) === "auto" && !((A = T == null ? void 0 : T.value.hideOverlay) != null && A.value);
      });
      d.forEach((y, T) => {
        const A = Z(y);
        A != null && A.value && (A.value.overlayVisible.value = T === d.length - 1);
      });
    }
    const Ke = /* @__PURE__ */ toRef(() => s.modalId), ge = /* @__PURE__ */ toRef(() => s.hideOverlay), qe = /* @__PURE__ */ toRef(() => s.overlayBehavior), Je = computed(() => ({
      modalId: Ke,
      hideOverlay: ge,
      overlayBehavior: qe,
      overlayVisible: h2,
      toggle(d) {
        return new Promise((y) => {
          P = uo((A) => y(A));
          const T = typeof d == "boolean" ? d : !w.value;
          w.value = T;
        });
      }
    }));
    return o({
      modalExposed: Je
    }), (d, y) => (openBlock(), createBlock(Teleport, {
      to: d.teleportTo ? d.teleportTo : void 0,
      disabled: !d.teleportTo
    }, [
      d.displayDirective !== "if" || unref(i) ? withDirectives((openBlock(), createElementBlock("div", mergeProps({ key: 0 }, unref(c), {
        ref_key: "vfmRootEl",
        ref: m,
        class: ["vfm vfm--fixed vfm--inset", { "vfm--prevent-none": d.background === "interactive" }],
        style: { zIndex: unref(V) },
        role: "dialog",
        "aria-modal": "true",
        onKeydown: y[7] || (y[7] = withKeys(() => unref(ze)(), ["esc"])),
        onMouseup: y[8] || (y[8] = withModifiers(() => unref(Ge)(), ["self"])),
        onMousedown: y[9] || (y[9] = withModifiers((T) => unref(Te)(T), ["self"]))
      }), [
        ge.value ? createCommentVNode("", true) : (openBlock(), createBlock(Transition, mergeProps({ key: 0 }, unref(J), toHandlers(unref(R))), {
          default: withCtx(() => [
            d.displayDirective !== "if" || unref(h2) ? withDirectives((openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(["vfm__overlay vfm--overlay vfm--absolute vfm--inset vfm--prevent-none", d.overlayClass]),
              style: normalizeStyle(d.overlayStyle),
              "aria-hidden": "true"
            }, null, 6)), [
              [vShow, d.displayDirective !== "show" || unref(h2)],
              [unref(ve), d.displayDirective !== "visible" || unref(h2)]
            ]) : createCommentVNode("", true)
          ]),
          _: 1
        }, 16)),
        createVNode(Transition, mergeProps(unref(p2), toHandlers(unref(L))), {
          default: withCtx(() => [
            d.displayDirective !== "if" || unref(b) ? withDirectives((openBlock(), createElementBlock("div", mergeProps({
              key: 0,
              ref_key: "vfmContentEl",
              ref: f,
              class: ["vfm__content vfm--outline-none", [d.contentClass, { "vfm--prevent-auto": d.background === "interactive" }]],
              style: d.contentStyle,
              tabindex: "0"
            }, unref(Ue), {
              onMousedown: y[6] || (y[6] = () => unref(Te)())
            }), [
              renderSlot(d.$slots, "default", normalizeProps(guardReactiveProps({ close: Ze }))),
              d.showSwipeBanner ? (openBlock(), createElementBlock("div", {
                key: 0,
                ref_key: "swipeBannerEl",
                ref: $e,
                class: "vfm-swipe-banner-container",
                onTouchstart: y[2] || (y[2] = (T) => unref(Se)(T))
              }, [
                renderSlot(d.$slots, "swipe-banner", {}, () => [
                  createBaseVNode("div", {
                    class: "vfm-swipe-banner-back",
                    onTouchstart: y[0] || (y[0] = (T) => d.swipeToClose === "left" && T.preventDefault())
                  }, null, 32),
                  createBaseVNode("div", {
                    class: "vfm-swipe-banner-forward",
                    onTouchstart: y[1] || (y[1] = (T) => d.swipeToClose === "right" && T.preventDefault())
                  }, null, 32)
                ])
              ], 544)) : !d.showSwipeBanner && d.preventNavigationGestures ? (openBlock(), createElementBlock("div", {
                key: 1,
                class: "vfm-swipe-banner-container",
                onTouchstart: y[5] || (y[5] = (T) => unref(Se)(T))
              }, [
                createBaseVNode("div", {
                  class: "vfm-swipe-banner-back",
                  onTouchstart: y[3] || (y[3] = (T) => d.swipeToClose === "left" && T.preventDefault())
                }, null, 32),
                createBaseVNode("div", {
                  class: "vfm-swipe-banner-forward",
                  onTouchstart: y[4] || (y[4] = (T) => d.swipeToClose === "right" && T.preventDefault())
                }, null, 32)
              ], 32)) : createCommentVNode("", true)
            ], 16)), [
              [vShow, d.displayDirective !== "show" || unref(b)],
              [unref(ve), d.displayDirective !== "visible" || unref(b)]
            ]) : createCommentVNode("", true)
          ]),
          _: 3
        }, 16)
      ], 16)), [
        [vShow, d.displayDirective !== "show" || unref(i)],
        [unref(ve), d.displayDirective !== "visible" || unref(i)]
      ]) : createCommentVNode("", true)
    ], 8, ["to", "disabled"]));
  }
});
function K() {
  const e = Ao();
  if (!e)
    throw new Error(
      `[Vue Final Modal]: getActiveVfm was called with no active Vfm. Did you forget to install vfm?
	const vfm = createVfm()
	app.use(vfm)
This will fail in production.`
    );
  return e;
}
function Le(e, o = Ro) {
  const { component: l, slots: s, ...u } = e, c = typeof s > "u" ? {} : Object.fromEntries(Fe(s).map(([a, n]) => we(n) ? [a, n] : re(n) ? [a, {
    ...n,
    component: markRaw(n.component)
  }] : [a, markRaw(n)]));
  return {
    ...u,
    component: markRaw(l || o),
    slots: c
  };
}
function Go(e) {
  const o = /* @__PURE__ */ reactive({
    id: /* @__PURE__ */ Symbol("useModal"),
    modelValue: !!(e != null && e.defaultModelValue),
    resolveOpened: () => {
    },
    resolveClosed: () => {
    },
    attrs: {},
    ...Le(e)
  });
  tryOnUnmounted(() => {
    o != null && o.keepAlive || n();
  }), o.modelValue === true && (H ? H == null || H.dynamicModals.push(o) : nextTick(() => {
    const t = K();
    t == null || t.dynamicModals.push(o);
  }));
  async function l() {
    let t;
    return H ? t = H : (await nextTick(), t = K()), o.modelValue ? Promise.resolve("[Vue Final Modal] modal is already opened.") : (n(), o.modelValue = true, t.dynamicModals.push(o), new Promise((r) => {
      o.resolveOpened = () => r("opened");
    }));
  }
  function s() {
    return o.modelValue ? (o.modelValue = false, new Promise((t) => {
      o.resolveClosed = () => t("closed");
    })) : Promise.resolve("[Vue Final Modal] modal is already closed.");
  }
  function u(t) {
    const { slots: r, ...m } = Le(t, o.component);
    t.defaultModelValue !== void 0 && (o.defaultModelValue = t.defaultModelValue), (t == null ? void 0 : t.keepAlive) !== void 0 && (o.keepAlive = t == null ? void 0 : t.keepAlive), c(o, m), r && Fe(r).forEach(([f, M]) => {
      const S = o.slots[f];
      we(S) ? o.slots[f] = M : re(S) && re(M) ? c(S, M) : o.slots[f] = M;
    });
  }
  function c(t, r) {
    r.component && (t.component = r.component), r.attrs && a(t.attrs, r.attrs);
  }
  function a(t, r) {
    return Object.entries(r).forEach(([m, f]) => {
      t[m] = f;
    }), t;
  }
  function n() {
    const t = K(), r = t.dynamicModals.indexOf(o);
    r !== -1 && t.dynamicModals.splice(r, 1);
  }
  return {
    options: o,
    open: l,
    close: s,
    patchOptions: u,
    destroy: n
  };
}
function re(e) {
  return typeof e == "object" && e !== null ? "component" in e : false;
}
const jo = ["innerHTML"], Wo = /* @__PURE__ */ defineComponent({
  __name: "ModalsContainer",
  setup(e) {
    const { modalsContainers: o, dynamicModals: l } = K(), s = /* @__PURE__ */ Symbol("ModalsContainer"), u = computed(() => {
      var n;
      return s === ((n = o.value) == null ? void 0 : n[0]);
    });
    o.value.push(s), onBeforeUnmount(() => {
      o.value = o.value.filter((n) => n !== s);
    });
    function c(n) {
      var t, r, m;
      (r = (t = l[n]) == null ? void 0 : t.resolveClosed) == null || r.call(t), (m = l[n]) != null && m.keepAlive || l.splice(n, 1);
    }
    function a(n) {
      var t, r;
      (r = (t = l[n]) == null ? void 0 : t.resolveOpened) == null || r.call(t);
    }
    return (n, t) => u.value ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(unref(l), (r, m) => (openBlock(), createBlock(resolveDynamicComponent(r.component), mergeProps({
      key: r.id
    }, {
      displayDirective: r != null && r.keepAlive ? "show" : void 0,
      ...typeof r.attrs == "object" ? r.attrs : {}
    }, {
      modelValue: r.modelValue,
      "onUpdate:modelValue": (f) => r.modelValue = f,
      onClosed: () => c(m),
      onOpened: () => a(m)
    }), createSlots({ _: 2 }, [
      renderList(r.slots, (f, M) => ({
        name: M,
        fn: withCtx(() => [
          unref(we)(f) ? (openBlock(), createElementBlock("div", {
            key: 0,
            innerHTML: f
          }, null, 8, jo)) : unref(re)(f) ? (openBlock(), createBlock(resolveDynamicComponent(f.component), normalizeProps(mergeProps({ key: 1 }, f.attrs)), null, 16)) : (openBlock(), createBlock(resolveDynamicComponent(f), { key: 2 }))
        ])
      }))
    ]), 1040, ["modelValue", "onUpdate:modelValue", "onClosed", "onOpened"]))), 128)) : createCommentVNode("", true);
  }
});
const __vite_glob_0_0$1 = "" + new URL("../../assets/about-icon-addons-em-D6mL-SIE.png", import.meta.url).href;
const __vite_glob_0_1$1 = "" + new URL("../../assets/about-icon-addons-C2ixtqJP.png", import.meta.url).href;
const __vite_glob_0_2$1 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20512%20512'%20style='enable-background:new%200%200%20512%20512;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:none;stroke:%234ab99b;stroke-width:41;stroke-miterlimit:10;}%20%3c/style%3e%3cpath%20class='st0'%20d='M181,423.6L28.9,271.5c-9.1-9.1-9.1-24,0-33.1l33.1-33.1c9.1-9.1,24-9.1,33.1,0l102.5,102.5L417,88.4%20c9.1-9.1,24-9.1,33.1,0l33.1,33.1c9.1,9.1,9.1,24,0,33.1L214,423.6C204.9,432.8,190.1,432.8,181,423.6L181,423.6z'/%3e%3c/svg%3e";
const __vite_glob_0_3$1 = "" + new URL("../../assets/about-icon-connect-DAoaUoSQ.png", import.meta.url).href;
const __vite_glob_0_4$1 = "" + new URL("../../assets/about-icon-ecommerce-CAFOtSeP.png", import.meta.url).href;
const __vite_glob_0_5$1 = "" + new URL("../../assets/about-icon-gdpr-BTD6obvj.png", import.meta.url).href;
const __vite_glob_0_6 = "" + new URL("../../assets/about-icon-guide-COBxne7W.png", import.meta.url).href;
const __vite_glob_0_7 = "" + new URL("../../assets/about-team-BIYjWj57.jpg", import.meta.url).href;
const __vite_glob_0_8 = "" + new URL("../../assets/affiliates-promo-logo-CXLL8Y6U.png", import.meta.url).href;
const __vite_glob_0_9 = "" + new URL("../../assets/aioseo-client-logo-1-tH1SYrXg.svg", import.meta.url).href;
const __vite_glob_0_10 = "" + new URL("../../assets/aioseo-client-logo-10-Bl7JSYeC.svg", import.meta.url).href;
const __vite_glob_0_11$1 = "" + new URL("../../assets/aioseo-client-logo-11-DVMVeIgg.svg", import.meta.url).href;
const __vite_glob_0_12$1 = "" + new URL("../../assets/aioseo-client-logo-12-BEkB8B5R.svg", import.meta.url).href;
const __vite_glob_0_13$1 = "" + new URL("../../assets/aioseo-client-logo-2-DffWHG7x.svg", import.meta.url).href;
const __vite_glob_0_14$1 = "" + new URL("../../assets/aioseo-client-logo-3-CJQ3YNjp.svg", import.meta.url).href;
const __vite_glob_0_15$1 = "" + new URL("../../assets/aioseo-client-logo-4-rmUdiF8S.svg", import.meta.url).href;
const __vite_glob_0_16$1 = "" + new URL("../../assets/aioseo-client-logo-5-BFbbcR6D.svg", import.meta.url).href;
const __vite_glob_0_17$1 = "" + new URL("../../assets/aioseo-client-logo-6-B1Xil_91.svg", import.meta.url).href;
const __vite_glob_0_18$1 = "" + new URL("../../assets/aioseo-client-logo-7-zu-ySb0j.svg", import.meta.url).href;
const __vite_glob_0_19 = "" + new URL("../../assets/aioseo-client-logo-8-MyDSqUcV.svg", import.meta.url).href;
const __vite_glob_0_20 = "" + new URL("../../assets/aioseo-client-logo-9-Cs1wjsF9.svg", import.meta.url).href;
const __vite_glob_0_21 = "" + new URL("../../assets/aioseo-screen-1-BQGPIB3_.svg", import.meta.url).href;
const __vite_glob_0_22 = "" + new URL("../../assets/aioseo-screen-2-By8FTTOW.svg", import.meta.url).href;
const __vite_glob_0_23 = "data:image/svg+xml,%3csvg%20width='14'%20height='8'%20viewBox='0%200%2014%208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0.256282%200.228747C0.59799%20-0.0762491%201.15201%20-0.0762491%201.49372%200.228747L7%205.14345L12.5063%200.228747C12.848%20-0.0762491%2013.402%20-0.0762491%2013.7437%200.228747C14.0854%200.533743%2014.0854%201.02824%2013.7437%201.33324L7.61872%206.80018C7.27701%207.10518%206.72299%207.10518%206.38128%206.80018L0.256282%201.33324C-0.0854272%201.02824%20-0.0854272%200.533743%200.256282%200.228747Z'%20fill='%23777777'/%3e%3c/svg%3e";
const __vite_glob_0_24 = "data:image/svg+xml,%3csvg%20width='20'%20height='15'%20viewBox='0%200%2020%2015'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15.0764%208.78821C15.1742%208.6893%2015.1044%208.52178%2014.9655%208.52178H14.9192C7.95871%208.52178%208.31663%208.52178%201.35618%208.52178C0.643215%208.52178%200.246995%208.27307%200.0674666%207.7179C-0.192678%206.91288%200.325896%206.15132%201.16922%206.10215C1.29272%206.09471%201.41622%206.097%201.53971%206.097C8.44298%206.097%208.0279%206.097%2014.9312%206.097H14.9769C15.1158%206.097%2015.1862%205.92891%2015.0878%205.83057L15.0855%205.82828C13.854%204.60131%2012.6236%203.37263%2011.3892%202.14852C11.0307%201.79289%2010.8655%201.38638%2011.0101%200.885529C11.256%200.035342%2012.2783%20-0.280262%2012.9604%200.284052C13.0553%200.362381%2013.1405%200.453289%2013.2279%200.540194C15.157%202.46755%2017.0855%204.39434%2019.014%206.32227C19.6624%206.97006%2019.6652%207.64015%2019.0226%208.28279C17.0478%2010.2576%2015.0655%2012.2256%2013.0993%2014.2095C12.2914%2015.0248%2011.2017%2014.4908%2010.9918%2013.6521C10.8723%2013.1764%2011.053%2012.8024%2011.3835%2012.4725C12.6087%2011.2524%2013.8317%2010.03%2015.0552%208.80822C15.0621%208.80136%2015.069%208.7945%2015.0752%208.78764L15.0764%208.78821Z'%20fill='%23E43462'/%3e%3c/svg%3e";
const __vite_glob_0_25 = "" + new URL("../../assets/badge-dark-D_gbrV0g.svg", import.meta.url).href;
const __vite_glob_0_26 = "" + new URL("../../assets/badge-light-CbU2HY-C.svg", import.meta.url).href;
const __vite_glob_0_27 = "" + new URL("../../assets/charlie-ai-CpIAtARD.svg", import.meta.url).href;
const __vite_glob_0_28 = "" + new URL("../../assets/charlie-front-CY3xVt1R.svg", import.meta.url).href;
const __vite_glob_0_29 = "" + new URL("../../assets/charlie-with-heart-DgXDZoCa.svg", import.meta.url).href;
const __vite_glob_0_30 = "" + new URL("../../assets/charlie-BzOnX0S1.png", import.meta.url).href;
const __vite_glob_0_31 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2027.0.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2015%2015'%20style='enable-background:new%200%200%2015%2015;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st1{fill:%23fff;}%20%3c/style%3e%3cg%3e%3cpath%20class='st1'%20d='M6.3,10.3L4,7.9C3.9,7.8,3.9,7.8,3.9,7.7c0-0.1,0-0.2,0.1-0.3l0.5-0.5c0.1-0.1,0.1-0.1,0.2-0.1%20c0.1,0,0.2,0,0.3,0.1l1.6,1.6L10,5.1C10.1,5,10.2,5,10.2,5c0.1,0,0.2,0,0.3,0.1L11,5.6c0.1,0.1,0.1,0.2,0.1,0.3%20c0,0.1,0,0.2-0.1,0.3l-4.2,4.2c-0.1,0.1-0.2,0.1-0.3,0.1C6.5,10.4,6.4,10.3,6.3,10.3z'/%3e%3c/g%3e%3c/svg%3e";
const __vite_glob_0_32 = "" + new URL("../../assets/chris-BbkhLLpc.png", import.meta.url).href;
const __vite_glob_0_33 = "" + new URL("../../assets/easy-affiliate-logo-BgGyElpp.png", import.meta.url).href;
const __vite_glob_0_34 = "" + new URL("../../assets/easy-digital-downloads-Cd4s_trb.png", import.meta.url).href;
const __vite_glob_0_35 = "" + new URL("../../assets/ecommerce-report-gDSXb6tx.png", import.meta.url).href;
const __vite_glob_0_36 = "" + new URL("../../assets/edd-xsell-banner-DBceVxLc.svg", import.meta.url).href;
const __vite_glob_0_37 = "" + new URL("../../assets/em-ai-insights-DN-61trs.svg", import.meta.url).href;
const __vite_glob_0_38 = "" + new URL("../../assets/em-logo-lg-VJAZE3vu.png", import.meta.url).href;
const __vite_glob_0_39 = "" + new URL("../../assets/em-logo-Cpepvj1O.svg", import.meta.url).href;
const __vite_glob_0_40 = "" + new URL("../../assets/em-pl-logo-DuSkixaX.svg", import.meta.url).href;
const __vite_glob_0_41 = "" + new URL("../../assets/flags-Ck9rBLLL.png", import.meta.url).href;
const __vite_glob_0_42 = "data:image/png;base64,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";
const __vite_glob_0_43 = "" + new URL("../../assets/givewp-DMywhpeP.png", import.meta.url).href;
const welcomeImage = "" + new URL("../../assets/google-ads-welcome-DrZfoDoR.png", import.meta.url).href;
const __vite_glob_0_45 = "" + new URL("../../assets/icon-advancedcoupons-CWll3WTF.svg", import.meta.url).href;
const __vite_glob_0_46 = "data:image/svg+xml,%3csvg%20width='27'%20height='27'%20viewBox='0%200%2027%2027'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.7056%2026.0982C20.6824%2026.0982%2026.3381%2020.4424%2026.3381%2013.4657C26.3381%206.48902%2020.6824%200.833313%2013.7056%200.833313C6.72897%200.833313%201.07324%206.48902%201.07324%2013.4657C1.07324%2020.4424%206.72897%2026.0982%2013.7056%2026.0982ZM11.6942%205.45674C11.523%205.19595%2011.2061%205.07402%2010.9154%205.17669C10.5844%205.29365%2010.2605%205.4312%209.94592%205.58851C9.66973%205.72662%209.53116%206.04205%209.59197%206.34972L9.80858%207.44586C9.86434%207.72798%209.74921%208.01432%209.53063%208.19623C9.18517%208.48372%208.86627%208.80876%208.58053%209.1685C8.40294%209.39209%208.12271%209.51063%207.84603%209.45473L6.7715%209.23766C6.46962%209.17668%206.16086%209.31935%206.02661%209.6019C5.95078%209.76152%205.87916%209.92448%205.81203%2010.0907C5.74491%2010.2569%205.68318%2010.424%205.62676%2010.5918C5.52696%2010.8888%205.64753%2011.2121%205.90383%2011.3858L6.81621%2012.0044C7.05114%2012.1636%207.16816%2012.4492%207.13977%2012.7356C7.09408%2013.1963%207.09594%2013.6562%207.14258%2014.1086C7.17206%2014.3948%207.05601%2014.6808%206.82165%2014.8409L5.91102%2015.463C5.65546%2015.6376%205.53595%2015.961%205.63658%2016.2576C5.75119%2016.5955%205.886%2016.9259%206.04015%2017.2469C6.1755%2017.5287%206.48464%2017.6701%206.78613%2017.6081L7.86038%2017.387C8.13686%2017.3302%208.41747%2017.4476%208.59573%2017.6707C8.87747%2018.0232%209.19601%2018.3486%209.54856%2018.6402C9.76767%2018.8214%209.88385%2019.1073%209.82904%2019.3896L9.61632%2020.4861C9.55656%2020.7941%209.6964%2021.1092%209.97326%2021.2462C10.1297%2021.3236%2010.2894%2021.3966%2010.4523%2021.4651C10.6152%2021.5336%2010.7789%2021.5966%2010.9434%2021.6542C11.4245%2021.8226%2012.0978%2021.2199%2012.5956%2020.7743C12.8411%2020.5545%2012.9925%2020.2436%2012.9942%2019.9106C12.9942%2019.9088%2012.9942%2019.907%2012.9942%2019.9053V18.0717C12.9942%2018.0523%2012.9949%2018.033%2012.9964%2018.014C11.526%2017.6552%2010.4328%2016.3055%2010.4328%2014.6952V12.7482C10.4328%2012.6002%2010.5504%2012.4802%2010.6954%2012.4802H11.6061V10.5646C11.6061%2010.3001%2011.8163%2010.0857%2012.0755%2010.0857C12.3347%2010.0857%2012.5448%2010.3001%2012.5448%2010.5646V12.4802H15.0088V10.5646C15.0088%2010.3001%2015.2189%2010.0857%2015.4781%2010.0857C15.7373%2010.0857%2015.9474%2010.3001%2015.9474%2010.5646V12.4802H16.8582C17.0032%2012.4802%2017.1208%2012.6002%2017.1208%2012.7482V14.6952C17.1208%2016.3564%2015.9574%2017.7403%2014.4166%2018.045C14.417%2018.0538%2014.4171%2018.0627%2014.4171%2018.0717V19.8974C14.4171%2020.2368%2014.5731%2020.5534%2014.8259%2020.7739C15.3326%2021.2158%2016.0176%2021.8132%2016.4959%2021.6442C16.8269%2021.5272%2017.1508%2021.3897%2017.4654%2021.2324C17.7416%2021.0943%2017.8801%2020.7788%2017.8193%2020.4712L17.6027%2019.375C17.547%2019.0929%2017.6621%2018.8065%2017.8807%2018.6246C18.2261%2018.3371%2018.545%2018.0121%2018.8308%2017.6524C19.0084%2017.4288%2019.2885%2017.3103%2019.5652%2017.3661L20.6398%2017.5832C20.9417%2017.6442%2021.2504%2017.5015%2021.3847%2017.219C21.4606%2017.0594%2021.5321%2016.8964%2021.5993%2016.7302C21.6664%2016.564%2021.7281%2016.3969%2021.7845%2016.2291C21.8843%2015.9321%2021.7638%2015.6088%2021.5075%2015.4351L20.5951%2014.8165C20.3601%2014.6573%2020.2431%2014.3717%2020.2715%2014.0853C20.3172%2013.6246%2020.3153%2013.1647%2020.2687%2012.7123C20.2392%2012.4261%2020.3552%2012.1401%2020.5896%2011.98L21.5003%2011.3579C21.7558%2011.1833%2021.8753%2010.8598%2021.7747%2010.5633C21.6601%2010.2254%2021.5253%209.89501%2021.3711%209.574C21.2358%209.29216%2020.9267%209.15078%2020.6252%209.21282L19.5509%209.43385C19.2744%209.49073%2018.9938%209.37325%2018.8156%209.15022C18.5338%208.79774%2018.2153%208.47231%2017.8627%208.18075C17.6436%207.99951%2017.5274%207.7136%2017.5823%207.43126L17.795%206.33477C17.8547%206.02675%2017.7149%205.71167%2017.438%205.57468C17.2816%205.49731%2017.1219%205.42425%2016.959%205.35575C16.7961%205.28722%2016.6324%205.22424%2016.4679%205.16669C16.1769%205.06482%2015.8601%205.18788%2015.6898%205.44941L15.0836%206.38038C14.9275%206.62012%2014.6476%206.73953%2014.367%206.71055C13.9155%206.66398%2013.4648%206.66584%2013.0215%206.71342C12.741%206.7435%2012.4607%206.6251%2012.3038%206.38593L11.6942%205.45674Z'%20fill='%23005AE0'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0'%3e%3crect%20width='25.6157'%20height='25.2648'%20fill='white'%20transform='translate(0.858887%200.833313)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
const __vite_glob_0_47 = "" + new URL("../../assets/icon-constantcontact-DBCKokOt.svg", import.meta.url).href;
const __vite_glob_0_48 = "" + new URL("../../assets/icon-easyaffiliate-BUCr-VFu.svg", import.meta.url).href;
const __vite_glob_0_49 = "data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M54.6439%209.35605C48.8466%203.55874%2040.8682%200%2032.0287%200C23.1892%200%2015.1534%203.55874%209.35605%209.35605C3.55874%2015.1534%200%2023.1892%200%2032.0287C0%2040.8682%203.55874%2048.8466%209.35605%2054.6439C15.1534%2060.4413%2023.1318%2064%2031.9713%2064C40.8108%2064%2048.7892%2060.4413%2054.5865%2054.6439C60.3839%2048.8466%2063.9426%2040.8682%2063.9426%2032.0287C63.9426%2023.1892%2060.4413%2015.1534%2054.6439%209.35605ZM53.5534%2053.5534C48.0431%2059.0637%2040.409%2062.5076%2031.9713%2062.5076C23.5336%2062.5076%2015.8996%2059.1211%2010.3892%2053.5534C4.87892%2047.9856%201.49238%2040.409%201.49238%2032.0287C1.49238%2023.591%204.93632%2015.957%2010.4466%2010.4466C15.957%204.93632%2023.591%201.49238%2032.0287%201.49238C40.4664%201.49238%2048.1005%204.93632%2053.6108%2010.4466C59.1211%2015.957%2062.565%2023.591%2062.565%2032.0287C62.5076%2040.409%2059.1211%2048.043%2053.5534%2053.5534Z'%20fill='%231D2428'/%3e%3cpath%20d='M59.5228%2031.7417C59.408%2016.6457%2047.1246%204.47713%2032.0287%204.47713C16.9327%204.47713%204.6493%2016.6457%204.4771%2031.7417L17.1049%2019.1139L21.3524%2023.3614L12.1112%2032.6027H51.9462L42.7049%2023.3614L46.9524%2019.1139L59.5228%2031.7417ZM32.0287%2027.035L20.2619%2014.6942H28.0681V8.60987C28.0681%207.06009%2029.8475%205.73991%2032.0287%205.73991C34.2098%205.73991%2035.9892%207.00269%2035.9892%208.60987V14.6942H43.7955L32.0287%2027.035Z'%20fill='%231D2428'/%3e%3cpath%20d='M35.4153%2047.5265C34.7839%2047.1247%2033.9803%2046.7803%2033.0619%2046.4359C32.3157%2046.2063%2031.7417%2045.9193%2031.2825%2045.6897C30.8233%2045.4601%2030.4789%2045.2305%2030.2493%2044.9435C30.0197%2044.6565%2029.9049%2044.3695%2029.9049%2043.9677C29.9049%2043.6807%2030.0197%2043.3937%2030.1919%2043.1067C30.3641%2042.8197%2030.6511%2042.5901%2031.0529%2042.4753C31.4547%2042.3031%2031.9713%2042.1883%2032.6027%2042.1883C33.1193%2042.1883%2033.5785%2042.2457%2034.0377%2042.3031C34.4395%2042.3605%2034.8413%2042.4753%2035.1283%2042.5901C35.4727%2042.7049%2035.7023%2042.8197%2035.9318%2042.8771L36.6206%2040.7534C36.2188%2040.5238%2035.6449%2040.3516%2035.0135%2040.2368C34.4395%2040.122%2033.8081%2040.0646%2033.1193%2040.0072V37.7686H31.1677V40.122C30.8807%2040.1794%2030.5363%2040.2368%2030.2493%2040.3516C29.5031%2040.5812%2028.9292%2040.8682%2028.4126%2041.27C27.896%2041.6717%2027.4942%2042.0735%2027.2646%2042.5901C26.9776%2043.1067%2026.8628%2043.6807%2026.8628%2044.2547C26.8628%2044.9435%2027.035%2045.5749%2027.4368%2046.0915C27.7812%2046.6081%2028.2978%2047.0673%2028.9866%2047.4691C29.6753%2047.8708%2030.4215%2048.2152%2031.3973%2048.5022C32.0861%2048.7318%2032.6601%2048.9614%2033.0619%2049.191C33.4637%2049.4206%2033.8081%2049.7076%2033.9803%2049.9946C34.1525%2050.2816%2034.2673%2050.626%2034.2673%2050.9704C34.2673%2051.3722%2034.1525%2051.7166%2033.9229%2052.0036C33.6933%2052.2906%2033.3489%2052.5202%2032.8897%2052.6924C32.4305%2052.8646%2031.9139%2052.922%2031.2825%2052.922C30.7659%2052.922%2030.2493%2052.8646%2029.7901%2052.8072C29.331%2052.6924%2028.8718%2052.5776%2028.4126%2052.4628C28.0108%2052.348%2027.609%2052.1758%2027.2646%2052.0036L26.5758%2054.2421C26.8628%2054.4143%2027.2646%2054.5865%2027.7238%2054.7013C28.183%2054.8161%2028.6996%2054.9309%2029.2736%2055.0457C29.8475%2055.1031%2030.4215%2055.1605%2030.9955%2055.1605H31.1103V57.4565H33.0619V54.9883C33.2915%2054.9309%2033.5211%2054.8735%2033.7507%2054.8161C34.5543%2054.5865%2035.1857%2054.2422%2035.7023%2053.8404C36.2188%2053.4386%2036.6206%2052.9794%2036.8502%2052.4054C37.0798%2051.8888%2037.252%2051.3148%2037.252%2050.6834C37.252%2049.9946%2037.0798%2049.3632%2036.7928%2048.8466C36.5058%2048.3874%2036.0466%2047.9282%2035.4153%2047.5265Z'%20fill='%231D2428'/%3e%3c/svg%3e";
const __vite_glob_0_50 = "data:image/svg+xml,%3csvg%20width='30'%20height='26'%20viewBox='0%200%2057%2050'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.1247%2030.0416H26.5473C28.3439%2032.7628%2031.428%2034.577%2034.9278%2034.577H12.1247C10.8724%2034.577%209.85693%2033.5616%209.85693%2032.3093C9.85693%2031.057%2010.8724%2030.0416%2012.1247%2030.0416Z'%20fill='%23E63060'/%3e%3cpath%20d='M7.60683%2026.8315C6.35454%2026.8315%205.33911%2025.8161%205.33911%2024.5638C5.33911%2023.3115%206.35454%2022.2961%207.60683%2022.2961H25.1867C25.0229%2023.0217%2024.9322%2023.7827%2024.9322%2024.5638C24.9322%2025.3449%2025.0229%2026.1058%2025.1867%2026.8315H7.60683Z'%20fill='%23A735DF'/%3e%3cpath%20d='M3.07143%2019.0834C1.81914%2019.0834%200.803711%2018.068%200.803711%2016.8157C0.803711%2015.5635%201.81914%2014.548%203.07143%2014.548H34.9278C34.8547%2014.548%2034.764%2014.548%2034.691%2014.548H34.6355C34.5624%2014.548%2034.4894%2014.548%2034.3987%2014.548H34.381C34.308%2014.548%2034.2349%2014.548%2034.1643%2014.5657H34.1291C34.056%2014.5657%2033.9829%2014.5833%2033.8922%2014.5833H33.8569C33.7839%2014.5833%2033.7309%2014.6009%2033.6579%2014.6009H33.6226C33.5495%2014.6186%2033.4765%2014.6186%2033.4059%2014.6362H33.3505C33.2043%2014.6538%2033.0607%2014.6916%2032.9146%2014.7093L32.8591%2014.7269C32.7861%2014.7446%2032.7332%2014.7622%2032.6601%2014.7622L32.6047%2014.7798L32.4409%2014.8151L32.3854%2014.8327C32.3124%2014.8504%2032.2595%2014.868%2032.1864%2014.8882L32.1511%2014.9058C32.0957%2014.9235%2032.0428%2014.9411%2031.9873%2014.9612L31.9143%2014.9789L31.7505%2015.0343L31.6774%2015.052C31.6043%2015.0696%2031.5514%2015.0872%2031.4784%2015.125L31.4431%2015.1427L31.2969%2015.1981L31.2239%2015.2334C31.1684%2015.251%2031.1155%2015.2888%2031.0601%2015.3064L30.987%2015.3417L30.861%2015.3972L30.788%2015.4324C30.7325%2015.4501%2030.6796%2015.4879%2030.6242%2015.5055L30.5511%2015.5408L30.4428%2015.5962L30.3168%2015.6693L30.2084%2015.7247L30.1177%2015.7801L30.027%2015.8356L29.901%2015.9086L29.828%2015.9641L29.7373%2016.0195L29.6113%2016.0926L29.5206%2016.148L29.4651%2016.1833C29.3568%2016.2564%2029.2283%2016.3471%2029.1199%2016.4201L29.1023%2016.4378C29.0292%2016.4932%2028.9561%2016.5461%2028.8831%2016.6016L28.8654%2016.6192C28.7571%2016.7099%2028.6286%2016.8006%2028.5202%2016.8913L28.5026%2016.909C27.7769%2017.5263%2027.1243%2018.252%2026.5977%2019.0683H3.12686L3.07143%2019.0834Z'%20fill='%236433F9'/%3e%3cpath%20d='M45.5055%2024.5638C45.5055%2018.7232%2040.771%2013.9861%2034.9279%2013.9861C29.0847%2013.9861%2024.3502%2018.7206%2024.3502%2024.5638C24.3502%2030.4069%2029.0847%2035.1414%2034.9279%2035.1414C40.771%2035.1414%2045.5055%2030.4044%2045.5055%2024.5638ZM25.9477%2024.5638C25.9477%2019.5924%2029.9742%2015.5836%2034.9279%2015.5836C39.8992%2015.5836%2043.908%2019.6101%2043.908%2024.5638C43.908%2029.5351%2039.8816%2033.5439%2034.9279%2033.5439C29.9565%2033.5439%2025.9477%2029.515%2025.9477%2024.5638Z'%20fill='%23210F59'/%3e%3cpath%20d='M54.6116%2010.6677L37.0872%200.599055C35.709%20-0.199685%2034.1291%20-0.199685%2032.7332%200.599055L15.2088%2010.6677C15.045%2010.7584%2014.8812%2010.8668%2014.7376%2010.9751H23.1005L34.8372%204.24504C34.8548%204.24504%2034.9102%204.20976%2034.9279%204.20976C34.9455%204.20976%2035.0009%204.2274%2035.0186%204.24504L52.543%2014.3137C52.5606%2014.3137%2052.5984%2014.349%2052.616%2014.3691C52.6337%2014.4044%2052.6337%2014.4598%2052.6337%2014.4775V34.6702C52.6337%2034.7055%2052.6337%2034.7609%2052.616%2034.7786C52.616%2034.7962%2052.5606%2034.8139%2052.543%2034.834L35.0186%2044.9027C35.0009%2044.9027%2034.9455%2044.938%2034.9279%2044.938C34.9102%2044.938%2034.8548%2044.9203%2034.8372%2044.9027L23.1005%2038.1726H14.7351C14.8812%2038.2809%2032.7307%2048.5487%2032.7307%2048.5487C34.109%2049.3474%2035.6888%2049.3474%2037.0847%2048.5487L54.6091%2038.48C56.005%2037.6636%2056.8038%2036.2854%2056.8038%2034.6702V14.4775C56.8063%2012.8624%2056.0101%2011.4639%2054.6116%2010.6677Z'%20fill='%23210F59'/%3e%3cpath%20d='M34.9278%2028.754C37.242%2028.754%2039.118%2026.878%2039.118%2024.5638C39.118%2022.2496%2037.242%2020.3735%2034.9278%2020.3735C32.6136%2020.3735%2030.7375%2022.2496%2030.7375%2024.5638C30.7375%2026.878%2032.6136%2028.754%2034.9278%2028.754Z'%20fill='%23210F59'/%3e%3c/svg%3e";
const __vite_glob_0_51 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='16'%20height='19'%20viewBox='0%20-13%20256%20256'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20preserveAspectRatio='xMidYMid'%3e%3cg%3e%3cpath%20d='M5.888,166.405103%20L90.88,20.9%20C101.676138,27.2558621%20156.115862,57.3844138%20164.908138,63.1135172%20L79.9161379,208.627448%20C70.6206897,220.906621%20-5.888,185.040138%205.888,166.396276%20L5.888,166.405103%20Z'%20fill='%23FBBC04'%3e%3c/path%3e%3cpath%20d='M250.084224,166.401789%20L165.092224,20.9055131%20C153.210293,1.13172%20127.619121,-6.05393517%20106.600638,5.62496138%20C85.582155,17.3038579%2079.182155,42.4624786%2091.0640861,63.1190303%20L176.056086,208.632961%20C187.938017,228.397927%20213.52919,235.583582%20234.547672,223.904686%20C254.648086,212.225789%20261.966155,186.175582%20250.084224,166.419444%20L250.084224,166.401789%20Z'%20fill='%234285F4'%3e%3c/path%3e%3cellipse%20fill='%2334A853'%20cx='42.6637241'%20cy='187.924414'%20rx='42.6637241'%20ry='41.6044138'%3e%3c/ellipse%3e%3c/g%3e%3c/svg%3e";
const __vite_glob_0_52 = "data:image/svg+xml,%3csvg%20width='16'%20height='19'%20viewBox='0%200%2016%2019'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15.875%2012.9062V1.09375C15.875%200.636719%2015.4883%200.25%2015.0312%200.25H3.5C1.63672%200.25%200.125%201.76172%200.125%203.625V14.875C0.125%2016.7383%201.63672%2018.25%203.5%2018.25H15.0312C15.4883%2018.25%2015.875%2017.8984%2015.875%2017.4062V16.8438C15.875%2016.5977%2015.7344%2016.3516%2015.5586%2016.2109C15.3828%2015.6484%2015.3828%2014.1016%2015.5586%2013.5742C15.7344%2013.4336%2015.875%2013.1875%2015.875%2012.9062ZM4.625%204.96094C4.625%204.85547%204.69531%204.75%204.83594%204.75H12.2891C12.3945%204.75%2012.5%204.85547%2012.5%204.96094V5.66406C12.5%205.80469%2012.3945%205.875%2012.2891%205.875H4.83594C4.69531%205.875%204.625%205.80469%204.625%205.66406V4.96094ZM4.625%207.21094C4.625%207.10547%204.69531%207%204.83594%207H12.2891C12.3945%207%2012.5%207.10547%2012.5%207.21094V7.91406C12.5%208.05469%2012.3945%208.125%2012.2891%208.125H4.83594C4.69531%208.125%204.625%208.05469%204.625%207.91406V7.21094ZM13.5195%2016H3.5C2.86719%2016%202.375%2015.5078%202.375%2014.875C2.375%2014.2773%202.86719%2013.75%203.5%2013.75H13.5195C13.4492%2014.3828%2013.4492%2015.4023%2013.5195%2016Z'%20fill='%23338EEF'/%3e%3c/svg%3e";
const __vite_glob_0_53 = "" + new URL("../../assets/icon-memberpress-ObZq7Mz3.svg", import.meta.url).href;
const __vite_glob_0_54 = "" + new URL("../../assets/icon-mi-COe6NJ5l.svg", import.meta.url).href;
const __vite_glob_0_55 = "" + new URL("../../assets/icon-optinmonster-WMF7vG3B.svg", import.meta.url).href;
const __vite_glob_0_56 = "" + new URL("../../assets/icon-prettylinks-CONBnp_w.svg", import.meta.url).href;
const __vite_glob_0_57 = "data:image/svg+xml,%3csvg%20width='27'%20height='21'%20viewBox='0%200%2027%2021'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M26.4999%2010.3544C26.4622%2013.8973%2025.4069%2016.724%2023.2962%2019.1361C22.9193%2019.5884%2022.4671%2020.003%2022.0148%2020.3799C21.6002%2020.7568%2020.9972%2020.7568%2020.658%2020.3799C20.3188%2019.9653%2020.3941%2019.4%2020.8464%2019.0231C21.7886%2018.2316%2022.5424%2017.327%2023.1455%2016.2717C24.05%2014.7264%2024.5777%2013.0681%2024.6531%2011.259C24.8038%208.13075%2023.8239%205.45479%2021.751%203.15572C21.4494%202.8542%2021.1102%202.55268%2020.8087%202.25116C20.3941%201.87426%2020.3188%201.27123%2020.658%200.894329C20.9972%200.479743%2021.5625%200.479743%2022.0148%200.894329C24.4269%202.96727%2025.8591%205.60555%2026.3868%208.73379C26.4622%209.37451%2026.4622%2010.0152%2026.4999%2010.3544Z'%20fill='%233B43FF'/%3e%3cpath%20d='M0.833252%2010.6563C0.908631%206.73658%202.37853%203.45758%205.35601%200.856986C5.7706%200.480089%206.37363%200.517779%206.67515%200.894676C7.01436%201.27157%206.93898%201.87461%206.52439%202.21381C4.48915%203.98524%203.2077%206.17124%202.79311%208.8472C2.22777%2012.3523%203.17001%2015.4429%205.54446%2018.0812C5.84598%2018.4204%206.22288%2018.7596%206.56208%2019.0611C6.97667%2019.438%207.01436%2020.0033%206.67515%2020.3802C6.33594%2020.7571%205.7706%2020.7571%205.35601%2020.4179C2.71774%2018.1566%201.21015%2015.2544%200.908631%2011.787C0.908631%2011.5986%200.870942%2011.4101%200.870942%2011.2217C0.833252%2011.0332%200.833252%2010.8448%200.833252%2010.6563Z'%20fill='%233B43FF'/%3e%3cpath%20d='M4.48926%2010.6183C4.56464%207.82924%205.58226%205.49248%207.73057%203.64568C8.18285%203.26879%208.67281%203.30648%209.04971%203.72106C9.38891%204.09796%209.35122%204.58793%208.89895%205.00251C7.88133%205.94475%207.05216%207.03775%206.63757%208.39458C5.84609%2011.1459%206.41143%2013.5958%208.37129%2015.7064C8.55974%2015.9325%208.78588%2016.121%208.97433%2016.3471C9.31354%2016.6863%209.35122%2017.214%209.04971%2017.5532C8.74819%2017.9301%208.14516%2018.0054%207.80595%2017.6662C7.2406%2017.1386%206.71295%2016.6109%206.22298%2016.0079C5.20536%2014.6511%204.64002%2013.1058%204.52695%2011.3721C4.52695%2011.259%204.48926%2011.1459%204.48926%2010.9952C4.48926%2010.8821%204.48926%2010.769%204.48926%2010.6183Z'%20fill='%233B43FF'/%3e%3cpath%20d='M22.8441%2010.6559C22.7687%2013.3696%2021.7511%2015.6686%2019.7158%2017.5154C19.4143%2017.817%2019.0374%2017.9677%2018.6228%2017.817C18.0198%2017.5531%2017.869%2016.8747%2018.3213%2016.3471C18.849%2015.744%2019.452%2015.1787%2019.9043%2014.5003C21.7134%2011.7112%2021.2988%207.90458%2018.9244%205.53013C18.7359%205.34168%2018.5475%205.15323%2018.359%204.96478C18.0198%204.62558%2017.9821%204.09792%2018.2836%203.75871C18.6228%203.38182%2019.1505%203.30644%2019.5651%203.60796C20.3189%204.21099%2020.9596%204.92709%2021.4496%205.75627C22.2411%207.03772%2022.731%208.43223%2022.8064%209.93982C22.8064%2010.166%2022.8064%2010.3921%2022.8441%2010.6559Z'%20fill='%233B43FF'/%3e%3cpath%20d='M19.1126%2010.4298C19.1126%2012.3143%2018.4719%2013.6334%2017.2659%2014.7641C16.8513%2015.1787%2016.2482%2015.1787%2015.909%2014.7641C15.5698%2014.3872%2015.5698%2013.8219%2016.0221%2013.445C16.7759%2012.7289%2017.2659%2011.862%2017.3035%2010.8067C17.3412%209.78906%2017.0397%208.9222%2016.3613%208.16841C16.2482%208.01765%2016.0975%207.90458%2015.9844%207.79151C15.6075%207.41461%2015.5698%206.88696%2015.909%206.51006C16.2482%206.13317%2016.8136%206.09548%2017.2282%206.47237C17.8689%207.03772%2018.3589%207.71613%2018.6981%208.50762C18.9996%209.18603%2019.1503%209.90213%2019.1126%2010.4298Z'%20fill='%233B43FF'/%3e%3cpath%20d='M10.5949%206.20856C11.1226%206.20856%2011.3864%206.39701%2011.5748%206.7739C11.7633%207.1508%2011.6502%207.5277%2011.3487%207.79152C10.8587%208.28149%2010.4442%208.77145%2010.218%209.44987C9.76574%2010.8821%2010.0673%2012.1258%2011.0472%2013.2188C11.1226%2013.3319%2011.2356%2013.4073%2011.3487%2013.5204C11.7256%2013.9349%2011.7633%2014.4626%2011.3864%2014.8395C11.0472%2015.1787%2010.4818%2015.2164%2010.1049%2014.8772C9.1627%2014.048%208.52198%2013.0681%208.33353%2011.8243C7.95663%209.78907%208.52198%208.01766%2010.0296%206.62314C10.218%206.35932%2010.4818%206.28394%2010.5949%206.20856Z'%20fill='%233B43FF'/%3e%3cpath%20d='M13.6101%2012.4274C12.5925%2012.4274%2011.801%2011.6359%2011.801%2010.6183C11.801%209.60064%2012.6302%208.80916%2013.6478%208.80916C14.6654%208.80916%2015.4569%209.60064%2015.4569%2010.6183C15.4569%2011.6736%2014.6654%2012.4274%2013.6101%2012.4274Z'%20fill='%233B43FF'/%3e%3c/svg%3e";
const __vite_glob_0_58 = "" + new URL("../../assets/icon-rafflepress-BENUGiPx.svg", import.meta.url).href;
const __vite_glob_0_59 = "" + new URL("../../assets/icon-searchwp-DSobd2yu.svg", import.meta.url).href;
const __vite_glob_0_60 = "" + new URL("../../assets/icon-seedprod-y7aXvxCG.png", import.meta.url).href;
const __vite_glob_0_61 = "" + new URL("../../assets/icon-semrush-BKcP2fo0.svg", import.meta.url).href;
const __vite_glob_0_62 = "data:image/svg+xml,%3csvg%20width='20'%20height='27'%20viewBox='0%200%2020%2027'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9.21929%207.57103C7.42115%206.763%205.5482%205.55629%203.79986%204.99458C4.42104%206.47603%204.94533%208.05435%205.48787%209.61446C4.40573%2010.4276%203.14172%2011.0589%201.93412%2011.7467C2.96176%2012.7625%204.41714%2013.3505%205.57671%2014.2343C4.64789%2015.3804%202.82301%2016.5716%202.37834%2017.6103C4.30119%2017.3694%206.54182%2016.9788%208.33085%2016.8996C8.72397%2018.8756%208.92671%2021.042%209.48582%2022.8521C10.3184%2020.4567%2011.0712%2017.9815%2012.0623%2015.7446C13.5917%2016.3772%2015.4557%2017.1486%2016.9486%2017.5215C15.9011%2016.0518%2014.9451%2014.4906%2014.0168%2012.9016C15.3905%2011.9061%2016.7799%2010.9264%2018.1036%209.88094C16.2327%209.70856%2014.2941%209.60366%2012.3288%209.52561C12.0165%207.49835%2012.0985%205.07678%2011.618%203.21774C10.891%204.74145%2010.0331%206.13417%209.21929%207.57103ZM10.1077%2024.3624C9.86062%2025.4199%2010.6747%2025.8537%2010.5519%2026.4946C9.74812%2026.2176%209.14344%2026.0754%208.06432%2026.2281C8.09808%2025.403%208.84015%2025.2863%208.68623%2024.2736C-2.81332%2022.9662%20-2.83642%202.18672%208.59738%200.907827C22.8936%20-0.69127%2023.3422%2023.995%2010.1077%2024.3624'%20fill='%23E34F0E'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M11.618%203.21777C12.0985%205.07681%2012.0164%207.49839%2012.3288%209.52559C14.2941%209.60369%2016.2326%209.70854%2018.1036%209.88097C16.7799%2010.9264%2015.3905%2011.9062%2014.0168%2012.9016C14.9451%2014.4906%2015.9011%2016.0518%2016.9486%2017.5215C15.4556%2017.1486%2013.5917%2016.3772%2012.0622%2015.7446C11.0712%2017.9815%2010.3184%2020.4567%209.48578%2022.8521C8.92667%2021.042%208.72393%2018.8756%208.33081%2016.8996C6.54178%2016.9788%204.30115%2017.3694%202.37831%2017.6103C2.82297%2016.5716%204.64784%2015.3805%205.57667%2014.2343C4.41708%2013.3505%202.96172%2012.7625%201.93408%2011.7467C3.14169%2011.0589%204.40567%2010.4277%205.48782%209.61444C4.94528%208.05439%204.42102%206.47606%203.79982%204.99462C5.54814%205.55632%207.42111%206.76304%209.21925%207.57106C10.0331%206.1342%2010.891%204.74148%2011.618%203.21777Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0'%3e%3crect%20width='19.6532'%20height='25.6667'%20fill='white'%20transform='translate(0.041748%200.833328)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
const __vite_glob_0_63 = "" + new URL("../../assets/icon-thirstyaffiliates-CcID5F-x.png", import.meta.url).href;
const __vite_glob_0_64 = "data:image/png;base64,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";
const __vite_glob_0_65 = "" + new URL("../../assets/icon-wpforms-BN6tBu2J.svg", import.meta.url).href;
const __vite_glob_0_66 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABmCAMAAAADH2QXAAAAV1BMVEUAAABQn+Iuf75Qn+JQn+Iuf76svcmsvclQn+L///+LpLesvckuf743iMhzsujc7PmKv+xMm97o8vvz+f2izPDQ5fd/uepcpeSt0vGWxe652fNnrObF3/Xl1C/0AAAACHRSTlMA7OajHEnmSn/UIZcAAAF/SURBVGje7dkNb4IwEAbgFlCvWymVb3D//3fu2oUQiRGh1wzNvYmE5kwfyxFsgniYU6KTU0BhNYnWOgkorEa7bC98KpClEpbRLoAJK8g0w/lx+lgAEplIISYAqZBxASkgLgAPgGuu/5Jf9xTWgVxPyfcU1gE9Z3vhECug7gFtGGAAgIHNgC3V05Q2DLBqNTYIKNeBMghQL4SBKUVTKMw8LkiByuBoUHNGAEsJjMubqgYwlEDrh300oPKjacrGmvZGC4yuA/jxjR3AhRYwOJ1bRY3nPdADpb/+LcANBx1ANxhaoHc/frT+GhV4/FGKtgcGptSq8YxqiYDlA7PzN1Tb9EAJ1DCnUZa+yTeAVmGqDmDAIzlgsK3TUmp03Bo6ymdR1RSLR2hR4em7/R+8KfDKruLY+6IXdnZH35sywAADDDBwDEBC1EiRQtSkIou6BJnNLyjo419QLPJNkLsJPw84h89/fgpcgoXzRezM112efJEBBhhggAEGGGCAgX8BfgF9zfCNw+tX7wAAAABJRU5ErkJggg==";
const __vite_glob_0_67 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABmCAMAAAADH2QXAAABAlBMVEUAAABQn+LW4upQn+JQn+JQn+JQn+JQn+LW4upQn+JQn+LW4upQn+JQn+JQn+JQn+JQn+JQn+JQn+JQn+JQn+JQn+JQn+JQn+JQn+JQn+JQn+JQn+LW4upQn+Ksvcn///+vv8uyws1SoOLT4OnF091WouLO2+PH1d69zNa3x9K6ydS0xNCw1O/L2OFNnuDC0dvAztjQ3eZqreTI1t9ZpOL5/P7r9PqdxueLvOZ5t+VjqeRWpOCdyuyoy+d1suT1+v3m8fjb7PfO5fTF4POo0O6hzezL3enK3OmKwOiCvOdwsuRmrOHz+fu52fG+3PDI2+nD2OmtzuiYw+aIu+VeqOGYxumXbKjeAAAAHHRSTlMA9PEaFPz4z612TycFzHHalI9ZKWlm7be2JeyNLqjzBwAAA2ZJREFUaN7s2OlSo0AQAGAwh+LmMPHend62sCj/pPKDIiYhpzExmnitq+//KkLUKmZ6EIbhp98DdBfdPT2Aoa3YbBzXj8rlo/pxo1k0clasVYFTreWZo/DHBMLcK+QUvmKZIGValTzin25DrO19/fi7JnzD3NWNf1iCb5UO9eIfQKIDrfqUIFFJo0r7svr3J0OhD5k7XZHNT7uDd+IsZZ1WCyRaiAMQWBnPr6xALuLEI8O6OdO/draYkv+yAl0hzhwQ7YXxFcOzGweoO0Rs2SAqB5tvhynqyjuMeAtUzTC2mCIXqDkG+kBVDYMpWgLlYaDjgkRBOcFI2uHA9BUkmsoJekCsMPRobwCvoZxgTB/gEkPTRSvwsAbOiXICH0QLjJoDp66cgJyCAUZNB8JhjiS4OPsb6+yCfSIFusaoNQgiCbj4JENcgj5GzchZVktAS+TcYwRdqL+VS+STLR1Bt0Vdd0z7D8Fszhcfk3rZBtGJ9kGzQ84MY7ZRI8uqoPzNE1znsiqWILHqhNtuAFSBNDmxz27MfYPDpHUtxKcZ4i+ct7DDNlA11QTyK9MJT/MKQHZlKpZIful7V4iPbQDppc+UPZFHsBHRgw362sLUvYDgVd5hsIxsCc7FQbrFe65A3Ksjy+BZKNJwspYV6DQIT5qcrs//7LSv7wpjyi3tbpoPEJ0ErGun/IRSL9FXlZyUH4Esq2c33Wcsy+z8xQGpMvchzjQ89ZzkXwlMy03XTfoZwnQtR72x79m25497o6JBsFwZPwne2y+jFYlBGIoufSrMLwxiUSRRxIr//2+7YKdbGmde5oZhoHlrhXvI1Zh4AT4DCH6NyS4cS9UANDb/sXg0wC9dWSAwABeNDHIwQE1mFAkFqHbc1jII4A72MxHxrg8CxN2S5jqx/SFtQG2yfzhSDklR14cAtg04KTpYHXihD74qUgf4uxIgbHV71wIUkQAYQB3g1AB8dmg1p3DvAXoV8wtAeA/QReILQNbOIGvvQcWeIgnA1EF56p7FVrJcSaC7qDwzz2NuU3lYsqgzbD9om37EdTTjB/omI3syt4c9+y8CTxULUyE+fDvoXCQj6E52NuvOpqmqTtdm1X0fFKf2wkmRSv7SN9oFuAAfB0xI/WkAmJGAeQC4TcAEbj8jwgxCTPNI/xcIan5QyH2lWAAAAABJRU5ErkJggg==";
const __vite_glob_0_68 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAABmCAMAAACa572iAAAB0VBMVEUAAABQn+JQn+KMttlQn+KsvclQn+JQn+KsvcmsvcmsvcmsvcmsvcnW4uqsvcmsvclQn+KsvclQn+KsvcnW4upQn+JQn+K90+XW4upQn+KsvcnW4upQn+KsvclQn+LW4uqsvcmsvcnW4uqsvclQn+LW4uqsvclQn+KsvcmsvcnW4upQn+KsvcnW4upQn+KsvcnW4uqsvcmsvclQn+KsvcmsvclQn+KsvcnW4uqsvcnW4uq1xdDW4upQn+JQn+KsvcmsvcmsvcnW4uqsvcmsvcmsvcmsvclQn+LW4uqsvcmsvcnW4urW4urW4uq9zNbW4upQn+KsvcnW4uqsvclQn+LW4uqsvcmsvclQn+LW4uqsvcnW4uqsvclQn+KsvcmsvcmsvcnW4uqsvclQn+KsvclQn+KsvcmsvclQn+LW4upQn+LW4urW4urW4upQn+JQn+LW4uqsvcnW4uqsvcnW4urW4urW4urW4urW4upQn+KIsdPW4urW4urW4urW4urW4upQn+LW4upQn+JQn+JQn+KsvcnW4uqsvcnW4upQn+KsvclQn+LW4upfpN58rdaZt86rvclSoOFjpd1sqNuku8xZouB2rNiDsNWRtNFzq9h5rNcaIjehAAAAinRSTlMAabQCIv5m/PZpVbUj+/vxwzkR7mBeMQbs6+TZ08vHppMoIBQM9uvn29LOpaGZj4BmUUZBPywaGhQRDwnx8N/e1ca8uKadmZV3cE0zKhkM483Cwb28rq6phn98e3RwZ2NbQ0I4MSweD+ze19PHtbOckYuKh3BqUkk48tK4n5OMiHhVVU9KQzk0MSjF3zbcAAAEo0lEQVRo3u2XZ1cTQRSGX12DMYQESDQQQAhRBAFBiooiihRpIoiAFJFq7733OglNsf5aYZOdZPfuZnez+eIxz6c9M+c8O3PvzJ0ZJMH2lpA2LRmwyLtQYt7CGjd1/JthjWwdf+E/7t8Ja5zT8Z+DNXZlJx7+LlhEqM8ojMoqMyJUSrHPqBeQAjZHfZsQYVPc2kz70/60P+1P+9P+/9S/q0XDv4cc7pauKNyfITXsQwr4slXS1SPCnNSwdQHWOcvvOgJpyhZgle18sDsgscCntN1ycvdIqpOIsU9q3JMLa3BTfq7GXy2xg0SCRs0CQjZJLu1IaXLpxCw88XLzSZhpYi7rptg52TFUXmZ3efyt7Q7EcZIml5PLU3xLR99gZ3F06sWAxm4OCSliMnJ4DndKhqtb1CiUugcSp9gu90+BlzGjbEIimJxtUoAvG/YfPZCE/1bIOJXm/XMhM9Sb9QsDpvyFWim+1F2h8LtLAgDOh8xxHjGCkzXRRXhk3MMotnbngaOhdb7/WVo06H8SS/FB/7ojsxFA3TGmjv3paii0urTG2MoPsyn2tUYG2eG8Z2OaLC/+XhM/Vr6ZTHEnDwMzxJrBEF31iXoHM8vyasgQr8Xge5hpfhrcxRtFNpOZZ+Wr4TXaw5Jh2Zj/LITjLCmMraF8ktwUTwCD2gqbx860WTSUYGgtnorugABcnM60WQnQANqYGn4HJD6pJ2jluxH/PjjLGWUwiBj9Q2r+pZARFoCmGjdT4DkoL9gVxP7L2Pq/iQ2a7in+0A05jS5Tdk7+Aak+s3jKjkBBp6zfaH3O5zdIJ4unBEpyaOj1yY6dL3UsHgcIbpPFbWtL5XsBnP2K6xqhNb6/CmaZlvkbQZDV2HaYRH/8RdbG/0Hmn6aPljKSf1NclPk7Sf+8rH8SZmmUFTF3EApKZP5xmCPQLtPTAATtitrqEGAYZ5WLFP79kDHKlByX9sjhB8NeiHwcHitVfwpRXI745NYwFUbFi9lEczgc7hXvlafD4aznh1RXHsXWwUtoj8YB3QCU7g1vcKa0t+9Ql/iZN0N3vjr20QsNjTmOkmNMgwvA9TBh92GyM5PDFgD2Un+W0l+XpL8NwBvqv62eAPPMAioTyKIJzrElox/BOo+zwkrug1DFzGN3AhCuqeT3FPE3+c25+YvPK0lvdHlv50W/X4AwazpCmfB1VVdfiRhP94obuTg6gerqu8o58A1anvBPx1zSRxBjsZR+hoivgDcVqx9PZVNCj0dbX3Uk0BYJ/jwwTGUPeFMBefIOMua607RxEmjtN79Y83rK14dRB+AMl9VKkj7e1AzC/GxQOisrGMVd0x8tdjkN4u3oBJd5JUVpbBEhIXUjCnt5dxMUFHPZS0R5yJtOQweyGgkTXJYXrThCLGTPrPtLr8US7BP1d2N/fGTJz3klLZfavj6vVIquQ8Ky/1BzmDIDA7jJUaJKLdUXQw966LicUEG7Puvj9Mfrt0GD3jDhPgzR7xjvaGstKhoauTMVgBYnqD+vH6mjIEw5hdTxKFL0r3gnxmpvROLfhVRySozQQ3HD7d7YCY+RYmZOZFVHF2tzgddH+v8CoAfi/0AbqdkAAAAASUVORK5CYII=";
const __vite_glob_0_69 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAABfCAMAAAC5kuvHAAAAWlBMVEUAAACtvcitvcitvcitvciduM2tvcitvcitvcitvcitvchQn+KtvchQn+JQn+JQn+KtvcitvcitvchQn+JQn+JQn+JQn+JQn+JQn+JQn+JQn+JQn+KtvchQn+KLGAvfAAAAHHRSTlMAIu53RBG7qogzme7dIpkzzGZVzKqIZnfdu0RVXT0ICgAAAsdJREFUaN7tmd1ymzAUhAEjMMYCJ/wT6f1fs4QWH4OwN3StmV70uzMzWRF5vaszCg6ShYFPMhOpwCOpMR+BP0JjzDXwRRgnZuKc+dii8BaZO1Hyltd9/BSbRyLFe+pqssePp0f5mPCU6KXbByLPe+o6Ca3/8fOiH/OeCue3TVcLfCz6Gecpld7MnWtyX+OyPPvkPJWZFaflefKtMr8t8hT+agX5kiMTnVR4mR5BT+EFXPngfFbzrlw+gacOLAA21fUURnZWttrF9ZSP93c9JeA/A7+cjaeOcJvePA6/VwGmE08d258knq2Sgv1xPIUSmScLQSJ7OAFIIns7AUgi8ycAmMj8CQAmMn8CwImMAScAkMgHQGl9IuRBWh9INN22+kBaH0zkcbATw/gXaY3fX3W9/UPfKZjWBxO5LOyKogRpfSiR28o6VC1I658msm5yu0veaJTWGF3bF9Q64Chz+5K85PQLCyg4/coCqn9E/0n11k/3Xf9eugYlDKq3eCI/+UbNCxSghEH1Ns/kJ77sRAdKGFRvuy8ve9eCEgbV+7UvL1s3ghIG1asXmwz78laDEkbVWy2/omZXvkcljKq3uZuw2ZG3DShhWL2lmKRx5e0IShhXVy4p1jjyOSphXL2FlQW6jbwtUAnj9y+dHBZ5O8ISxtVbywJb+QqXMB6GSmmSbSKVYGT62TBUywJr+ZoZmQQtXSjy8tvlaZcF2lUddIwmbpk6eBtq73zleIGYT3VuN/SKmE/xOSgv3zyf6n719vrt86kaRH5QPubTLrczeedpPlXNXCnKx3wq89f/+RRAz6cIej7FsPMphp1PMdR8KmmKyUJQjSBNAcz9C4C/f8Hw9y8ufu5fBD/3L+IVP/cv4hU/9y/iFU/3L65X+PsX4BX6/gV4hb5/AV7h719eeoW/fwFeAYlJtysP6RW+XXkIr9DtykN55RdZztdXJmO7xAAAAABJRU5ErkJggg==";
const __vite_glob_0_70 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABmBAMAAADG74kWAAAAFVBMVEXW4urW4urW4uoAAADW4uqsvclQn+ITLWFyAAAABHRSTlPsoxwAEnMmfgAAAIFJREFUWMPt2LEJgDAUBNCvOICFAwhu4AQKP06QbCDuP4J9sPCKwOm/KwOvusCHs3V0IN1is0PpbcLAbgMGNnMwvwGp1MmPj7EBYXGEgLA4QkBYHCFI5VVybEBYHCEgLE5AQEBAIAQgPIqE4LjqnAJtwNe+RlMAz0XwIAVPXvCodgNhA6kmkI3HfAAAAABJRU5ErkJggg==";
const __vite_glob_0_71 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABmCAMAAAADH2QXAAAA+VBMVEUAAABQn+JQn+LW4upQn+LW4upQn+JQn+LW4upQn+JQn+JQn+JQn+JQn+JQn+JQn+JQn+JQn+JQn+LW4upQn+JQn+JQn+JQn+JQn+JQn+JQn+JQn+JQn+JQn+JQn+LW4upQn+Ksvcn////L2OGvv8vAzti0xNDG1N7T4OhXo+NPmtzC0duKvObI1t+3x9LL3emqzOhVoOJPneCaxOZrrOSGrtfI2urQ3eZ1suRjqeOkwN+9zNb6+/3i6fK/0ue3zOSxx+HH1d6YuNtVmtlbmtV7pdN3o9PW4u/D2Omgx+e7z+TO2+OuxeGTtNnv8/rY4/DT4Oycu9x6qdmToCJeAAAAH3RSTlMA8xrwz612TycF9sxxE5SPWSn58+1pZhbb2Le2JfGNzELbBwAAAsdJREFUaN7tmF1f2jAUh1OwKIKCiDCdW0J5LRQo410UmeLm1L1+/w+zWrefLSdpmya9YOtzBxf/p+ScnJAiYcr53NlpsVAonp7l8mUkmYNshrjIZA8kxifeKwSwf5iQFJ9OKYSKkkrLyD/fIUx2jsTzd98RD5Rd0fwS8aEkln9CfDkRWh8SAIFVOlKCCJTQlU4z++fDeODspbDdmiIsJkviJBVy/zIX6EK7dS+Svaf31CTmwiAMfmor4ubwOZ8zHvcHzOfX1ptzyZp8KuZkyM6/Al9mEUryCkb0/llpmvYJfJ1BCHPSp+dfaxZtAkhwC0xq/oNm8ZVA8twCg/n8Vo9CctyCGSV/Yuc/EApvuQVzkNFe2vmXa5rgDbdAB/k/tBfBL+rEcwg+1ipMak38B5D/WXOzsR0cAmc+NAABM3/p7NYCt0B3538H+U/ESdEhaPouESyyBliBIou0KVRdCLep4Sl4Et9oJqHRvrTzb+CokDTs7hj5JAH2gUedPcb1lWYxJt7j2sr3NrAPnDVrmGa5BOwj8/r1+cGRCfYBe4mYfXT7mg8PfczNBMy7G/u0hCiJUAJYBUY+SaFwgtZos0fv6NeQdEgBvncv0rcxoaGcIwuwDwLV2eT4+w7aNNDQ/hLkAiIi8DeUEBA0gy6RjakHvATisNyPgl1jcWhawwGhsu+6iGMBJobu/yoBC9EfjvxehmBR+qYxm+uDgT6fGWYZAbBUUCyIBf+UYFr1QIKg7j23W2IC/9OnIyyoeFPfTkGtt6gvFo3IBPWXyjajqkEV40gFCxyx4BHbtFqdiAT4mU4jsi5q2I9fqUQrqMYChqDR7Xardg26Fj35gh52ErmgEbWgErFguo1dFAtiQSyISFDzFogf+nVPQW0q/X7waB84fz9txQ0nFsSC/0mQxBI5RhBVpkBFkD2JPyG5h2gG9VjS+qi0/N+iC9OxZrJwlgAAAABJRU5ErkJggg==";
const __vite_glob_0_72 = "data:image/png;base64,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";
const __vite_glob_0_73 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABlCAMAAACFixa5AAAA8FBMVEUAAADW4urW4urW4urW4urW4urW4urW4urW4urW4urW4urW4urW4urW4urW4urW4urW4urW4urW4urW4urW4urW4urW4urW4urW4urW4urW4urW4urW4urW4urW4urW4urW4urW4urW4urW4urW4urW4urW4urW4urW4urW4urW4urW4urW4urW4urW4urW4urW4urW4urW4uqsvclQn+KwwczT4erK1+DR3+rH2+m91ulkqeNbpeN2suRnq+PJ3OmKvOZ7teViqON4s+R0seRWouPC0dvL3emOvuaAt+WXwuZuruRgqOO6ydSuzujL2OKT9JW9AAAAMnRSTlMA4dIH+kUD8u3kDNZoShiYfeiQg2I/DsiIJhRPLfTexcG8s65vIBza0KReuYx3WFU2dMplGNoAAAPgSURBVGje7ZnZetowEEaHesMsBrOvIWwhpOk2UFqaNE3a0CZd3/9tataxIwnZRL7o15wbjC7+g6XxSJ+B8Gj1crOUyWReNY16CtSivSp0bfST7GQ0UEY9jRxOT0ARlQRySauaqDco4IUiQRcFdBQJnqGAxJPgSfCfCMxsX0cRfQMeSSNv415GUZqqlh28dMBHKm+hFDuoGJYGZRO4lG1E1HOkaCYwFGmD7ji3GngNHFptXGEV113Y6WNoxo31FGzvuM0xNI5wi5sxAbJJjIBdBjBLNn13mGLpBm66WcRo6MXsaaCTP1z7IiomBwEMVM4Z+HBcVI41BKKHMdChx6GEcUBnAieJUZndXU79XP5GFr21EYwxMt+nD/iJHI43LQKjczF9CPJ4uRJUMTqfwwmOtEMfgbtwAix5gud4ALOP4QRpgBYexOxLKAEakMMDDTehBDmwUcb7DzOu4T6MIA0WSvhwOb2Y87y3YQQj6MryF8vHaM7Plwv6kJXne3yeC/LliwwFyfxMeYb3Icu0AB6ZpCSfDEz+1c0+QXKwPf4khfmEb6Vnu/xvu0tOfL5CR4qiJc4nA5u/W4xLQTwpztvC/Ivt56ftQ0z5nuHH8vpaFE+c6IL8u9kNGZh8z3C/WFzPgl2U4n0CQf61ry1cfQpcC7GAgWnbV5TvN8yZfC4OEIKdn/ID876g2doH7/SbxwD3lB8wsPnv3k4mb99hgCaw1DgN/5qzxVDFfl3HevmeQXSsI3LMyeT2O2cTo/w/m9jJCgyQCSHwz8HXXX+grvF++cujCGoowkvaGih/9muyR3AmX2TCS9gabqnrefkBgXyRB0gEa2NChvvFjzlZxQIDWF4hQbXBTZAL6sDS4gUcKNA1YEkpFBwBi3mmSwS0MFKBm2VXII0oEdDCCAVENahoniLKBNJBscKoIioXkOKki6hWQBwPASojjE+AdgOKGKcACzCKV2CDFa8AIR2vIAH5eAU1cPR4BNRWx3EKnlObjkdQBo9xfIL+ulewlUqNky6lgyz6ZmN7gQzU+ulSPsiW0BrtFGPhKLXbjnWMAb3M/FOmlhoQ5jEq51nwnXkSFWPVIUAWA1RtjIjbYd6mid8tuyXTiThpxw68tAMbzUPM3m71zyvL74VIC2ouj25FfeczgaFS3fSnFqwxEqELfluQ9c2v7DSAgzaouolelgZStTaGoF301YvRs91uyYSQnOR0lKAXHHgMw8LeAk6eD+GxaGdChVXS/oF/Ap8ETwIlCLfskSLBGAX0FQkMFFAGReSQyzmowuT1besFKKRiDHLP0661SnbTvULGSEEspKLm/gXsGeljiPFFoAAAAABJRU5ErkJggg==";
const __vite_glob_0_74 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAb1BMVEUAAADS4OzV4u3V4u3V4u3V4u3V4u3V4u3V4u3V4u3V4u2KpLj///+ZsMOvwtHK2eWPqLunvMvZ4ujP3OfJ1d+juMmVrcDB0d+5y9mrv86gt8ics8WRqr39/f7g5+3F1eK8zdr19/nm7PC0x9bu8vUoV3toAAAACnRSTlMA/sgG0G70G2/R2f3kkAAAAf5JREFUaN7t2ttO4zAUheHthhbGizhJc2iObSm8/zMOqlPcNGbCDvbFSP5vkfpJINaWKhNRtN3spId2m21Enz0/SW89PRNFPj7fCBFtpde2tJFe25CQXhMkPReAAAQgAAEIwBogSaTJPaBSIFVS5wFocK2ROufACWMnKb0A3Q2IpfQB1Piq9gGI3gC98AAo3KXcAwkmJc6Bcgq0roEDHjo4BqpHoHILvGPWu0sgT+dAmjsEGljK3AEJrJ2cAZ0d6FwBZ4wV+2sFxs6OgB666nUsNpPkAlB4BCrGJBHnL3wDUjNJDoDMAIP+/AFflcsAZ4TeNPC2MEk8IIbpQwMfMMW/BWrcddHAZWGSOICYjNBRA8fJJIlfAQr37TWwx33NAsAZoVwD+cL1ZAAtJhUaKDjXkxh30gIsTxJx7mStgTPnehLnTjYaUHhI/Qtg3cky+6y0X08+kOHHZWuAE+aVx2E4lqzrSZw72QzXMW0wK2YD5k7a1nRezQVEj1nZ61iGWb1gAgrz1A2w/pAHJLAU34AOlhIWUMLW3sz1vJYDHGCtv1zvTQVrBwbQ4ZtUUSh8U8cAsCrxYyBfB+RLgCnFilLGr0itARQDkC3Ytbz/5LqMWbX1//KNVwBkAAIQACkDEAB+JKTXdt6fPXh/uOH56cmfyP/jGaLoxdfzn5eI6C98inUQTOHx8wAAAABJRU5ErkJggg==";
const __vite_glob_0_75 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAANCAYAAACdKY9CAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJKSURBVHgBjdJbSFMBHMfx/7lMT7qdk5s7IsvWdIqZ6UFNJC+Yl4EGQUkYItHN8NZl7KESohUUVKCst8QoYkTFlLzlhWHZispSK7NWyjbdZmPJ5tbuLk9ZBD0U+H35v3xe/vADAEDgr15nZ3PgPymLi3E0o9F4XJim5P7GtfEpvIJHNYrJE6UXDXF/4MdKec3qrU2pakNS6+YuhULhQL98z3tvR26C58OKgY7aVJjWd/bUT8OuwtGsvSXJuICKQPEyLJZpTvjutI4UURqgiNm7NqE+I1EvXNDu60rShr2mM5K8etOK22H2OrCsCXUbGnD0PgD8a2B0uvKKTySBzVJqC8IsHR3cVhHNCgia3F2N0wKxnuUR4wiCsL8eLj8wxuyM0Q3l5nTTfDwIQhcNVL4HXK6Aqq9Dfu/2xpJoHhmViaEIiTyT1dMzQl0yKjqoI9e5kbStQ0ByMfBhcaCeqQO3n5i1hxgVB/NP8jiRDtzjXIoUb6fPR0h6EONwA9gIHsQXDQNfhMMR8j5Q9nHpp88uN8rEmJjSt1bMshDrSywoa0mNnxKI06fAZZEBTuwCPrMIaMQiPNEavvnZ5fl0WaqnKUnEYK3XhIVBc4GCR6yHDdIvkFw+BwSXghc3xOGBnonOEVdmg+Ly41uNEg7fGeKb8ahIulqSpwH7Ozl4pTtg2aOBN7rWO2NW69UuatrC4qFsJbSjKE5wM5sGX0H7oZu2+f7DbNBSFXqqOj3QnK7M+dcsjOc6Tz6sOEbCy+v7W56runvVF8rzYQ39AJVT15Tcu/1IAAAAAElFTkSuQmCC";
const __vite_glob_0_76 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFUSURBVHgB7ZZLTsMwEIbH4x4gKhfgCGHbgpQbACcIXSAFVtyA9BaRWJCjpGpVsSNHyAWoskceMw04SkIfkcgDRL6NrYnl+T32PwrAf0dUA9bk1pZS2tACSqk4XT/FewWMz71HHnxoF3+zCubfBFiTexuRXqEDiNSZqcTIBKUkW+tcVsjKFtAgmsDhfd0sF2RXXBZQRChYvK2DEBrk5MIDPqBbjSP0zCBgEDCqs2g89UJjIW4iWe/gV33Dr/p5OxcEM+MabmafZmYrb5bB7Njef6MChBCxUl2MKQ0J8imzOUKSf/iKkarXyGoJSJdZecNSbBVEPETVtXXKXmRwwSDg99rQmt65iNqBptBwaqZKUnpQAKG4RNBXZef/NH8+S+Ed8//CnVcgtslbQcQE4jp9CRITOdaI5tz7fWgR7DP5IQGdJN8noLPkuwR0mryE5TxYMNADH3ARc14ho9yDAAAAAElFTkSuQmCC";
const __vite_glob_0_77 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPySURBVHgB7VdNbts4FH6k7OwG8OwKzCSjnGCcAwxinWDSE8Q5QZNlkQRRkCZdpjlB3RO0OYHcv3XdE4R1u+iuWnRVR3x9j6IsipIdueiufYBhiqTe95HvVwC/ugj4AQmTOLyFIBQgQwCdIkD6FbJJGsUprCitCdxLHofdIHsgUOwwhwXbFAoYz7LZ6ecoVtBC7iTQS+LeH0H3UiAMYQUhIqM2RJYS+Ds5G0gpnzMPZzoFhBeA+B5BpLkS5PU+SLEN1dtRqPXBx+j4xSIMuWhh483FLoEnDrjSWkfT7cM/p4PDvQzEuNirASfT6GhIa5uoYY/32qVQ0AE2Xl7srkRgPTnbgQxHcwCtr1j5p+h4XMwFoHeEhKf8k0LOAT5GhyPeSy+dlhpxxLfZigA7G7G+hBL9lID3YUWZRsexS4JNyf50J4FuoE+gsCMpMIoc4ZOsv7pISOPJfFLAkOfuUXg2kLiyj8aZfbyKE/Lp16S+sY/KXKUjbBqROyULOSMqUpCiEH3IfSX9pmdbvudvvDy/KQ5F65vuumw4vRFyplPw2VrTIOJYkqLp4Gjrw+Ao4jFNT5hEN1h76r9HPrRXjDsQVMxZIUCxPrBDxc7kroW5/cKcHV4pJ+vxGNneCEpoXbOzdV6zn3zh/0YCVQAY+0osYA4aBNv+Osc6hae5FWgSjdcF1ObbR//UCFBu7883U5JpVqKf8Z9A3Ge7rifnQ9/xlsikGMy+4WaNgHCyHVKBadIw5XAsvTrkHLAmuzdE5h2TgSVSZM0cC8MaARr2oIUwCaklJRrk21B2us9k+Fba3UhJplMy1BRS0jJcTkZFDxX9DXkcUuhquN0n73rAjzYKohqkqRfCYsGcgCyZdFS5W/wLLYXJ8K1QFNw3ryIOwuS87+/DoNTJvUONgD2VsnR3fAV/kVK+Yv41pdQAOnOlt1APRTfE3calmoq1LkKl5xePLswU5I4aNqVU3YF5QepAptw166ChefBCvJKKjT2XpuLzITubfeQUPMlPh0UqNpXTL15uKuasqRalYmOG3LsNHyowlZNydpQatghwzIBsb/5Z8JTePaiBv3584px+pLw6UeuIOCNqim0o8oKU8fS/h7W6sJGcxfOKqOF6Gh3W/MaAax0X56PTRz6BWjnmlKutR+fKdWxPsVgEfKmB8+2V4MCtmWroDxf2hJ69DTeukEWR4lDLuA8E0x0pZbsl20fye2EJDnt+cbuTQE7C1P9L8BtNar1F5jWlHOdowrfSwPJtuq3cSgRY8kyXkb3FLqwi5HASZwfqjo+V1h8mDhG/9XZBFd33tYTsifpZHybNZOIel++8gsoe1xFOPm1Bf4sr3wE9GgLudi+ragAAAABJRU5ErkJggg==";
const __vite_glob_0_78 = "data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_2674_115)'%3e%3cpath%20d='M5.40329%207.60831C5.56004%207.76542%205.77756%207.85551%205.99986%207.85551C6.22179%207.85551%206.43932%207.76542%206.59642%207.60831L9.33788%204.86704C9.66746%204.53765%209.66746%204.00334%209.33788%203.67393C9.0083%203.34435%208.474%203.34435%208.14477%203.67393V3.67377L6.84361%204.9749V0.895508C6.84361%200.4295%206.46568%200.0517578%205.99986%200.0517578C5.53369%200.0517578%205.15611%200.4295%205.15611%200.895508V4.97471L3.85533%203.67393C3.52575%203.34435%202.99145%203.34435%202.66222%203.67377C2.33264%204.00334%202.33264%204.53765%202.66222%204.86706L5.40329%207.60831Z'%20fill='%230E54DA'/%3e%3cpath%20d='M11.0966%208.98047H7.8142C7.50108%209.67115%206.80747%2010.1523%206%2010.1523C5.19248%2010.1523%204.4989%209.67115%204.18617%208.98047H0.903797C0.404672%208.98047%200%209.38495%200%209.88394V11.0455C0%2011.5447%200.404672%2011.9492%200.903797%2011.9492H11.0965C11.5957%2011.9492%2012%2011.5447%2012%2011.0455V9.88394C12%209.38495%2011.5957%208.98047%2011.0966%208.98047Z'%20fill='%230E54DA'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_2674_115'%3e%3crect%20width='12'%20height='12'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
const __vite_glob_0_79 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAARCAYAAADUryzEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEJSURBVHgB3VPBbcMwDDxSbgEDfWQEb9Cu0BGMLqBu0L6Dou0j6BjVAkVW6AgZQSP450cSsrIaubErB0jyy31IUbwTJVKECSy+WhtMtVv6+UPpcnnFlAAxfY5CLpfHOBMXIEDJ+Vi2lQhsv8H0up+oou/JXzPcW136zu+7sAktMyPS4KS/vSbIuRTvr/BSl98KfcRhNIrNfTp9cIWExbK1hH8z0JPn9c1qUFkmMSeSJUeB0chGiPKKjcx2IpEs26uKSe5GfF9kRhYGGl7H2K2sa4Z64utbA3G5gif/AkRcgcIpqAn+01TawUEKXbFBaY8sz4htTPaoSewqiRa/FrO46l48BCqcAob/ASVTXz+pYfYFAAAAAElFTkSuQmCC";
const __vite_glob_0_80 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAApCAYAAABHomvIAAACCklEQVR4Xt2YDVHDQBCFiwMkFAdIiANAAXXQOiAOKiEoABS0DqgDzgF1wGNfLmnSbf7ur2H4ZnZg7ufdy27uknSx+K8AyCTWEu8SRuKIBv5/qPpyiUzPT4IsdCvxUhlwxUgUEkutGwyssW17tUAKxDIKW0afjI1hJJ71ek4gbtb62Op1R4Et6V4JpYQb6lb76KWacG322kcnuE5Z+xgutwxY6RkzsNG+SqRjCbuzfOFON7rRA+pc3o/S+KpHOmBQicJeaOixdF5qWNEQHpReyMXWNFlEuGDW2IuiR/K2oNG9jmQnMasXw+CxFst0jwcpDJKMYrlu9SCVwQ3F+M4WSiqDHxSL8VhLZdBQLPTMIqkMHikWA23wHpFMxjJ4dlDXwD4AVgg4xmKVOJe40QbbSP8j3NcqS2x0qyd8TbvDgFG4H2kHTopxzLSh3hM6jErbRo0dozxmXCdNxcBmrMxq9ZdtLuQ0mOnWBBi4338kq1PvMzk1pn1vuN6816BoG+Rn5l9jeTJYmZzza07TZK9lkFn81iNn4As6ezVId+S4MPx7DeYt9fCHe40M3OmZV2CnffQCez9+aoWEMCGXH+tjwJb7R4nFhNrTytoH7Pscd1ZseGJ0/w7jCuyLZ4E42SyzBp+SjoHGKDM61SzHMZgxPlLjG+sC9i2IC77BbigaaJvhRbBvzbF6/lR+AZUZR/bIaO1IAAAAAElFTkSuQmCC";
const __vite_glob_0_81 = "data:image/svg+xml,%3csvg%20width='45'%20height='45'%20viewBox='0%200%2045%2045'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.5%2045C34.9264%2045%2045%2034.9264%2045%2022.5C45%2010.0736%2034.9264%200%2022.5%200C10.0736%200%200%2010.0736%200%2022.5C0%2034.9264%2010.0736%2045%2022.5%2045Z'%20fill='%23338EEF'/%3e%3cpath%20d='M22.4999%2041.3893C32.9322%2041.3893%2041.3893%2032.9322%2041.3893%2022.4999C41.3893%2012.0676%2032.9322%203.6106%2022.4999%203.6106C12.0676%203.6106%203.6106%2012.0676%203.6106%2022.4999C3.6106%2032.9322%2012.0676%2041.3893%2022.4999%2041.3893Z'%20fill='white'/%3e%3cpath%20d='M20.9043%2028.0949L19.7931%2011.584C19.6923%2010.0895%2020.8228%208.79649%2022.3173%208.6957C23.8119%208.59491%2025.1049%209.72535%2025.2057%2011.2199C25.2136%2011.3375%2025.2126%2011.4694%2025.2057%2011.584L24.0945%2028.0949C23.9028%2030.0742%2021.093%2030.0692%2020.9038%2028.0949H20.9043Z'%20fill='%23338EEF'/%3e%3cpath%20d='M22.4997%2036.3104C23.7221%2036.3104%2024.7131%2035.3194%2024.7131%2034.097C24.7131%2032.8745%2023.7221%2031.8835%2022.4997%2031.8835C21.2772%2031.8835%2020.2863%2032.8745%2020.2863%2034.097C20.2863%2035.3194%2021.2772%2036.3104%2022.4997%2036.3104Z'%20fill='%23338EEF'/%3e%3c/svg%3e";
const __vite_glob_0_82 = "data:image/svg+xml,%3csvg%20width='10'%20height='14'%20viewBox='0%200%2010%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.71432%200H5.28646C5.33323%200.00817959%205.38%200.019631%205.42677%200.0245388C5.80092%200.0638008%206.16884%200.140689%206.50557%200.310824C7.98503%201.06007%208.82999%202.26738%208.883%204.02599C8.89391%204.39898%208.67254%204.65091%208.31709%204.66564C8.13937%204.67382%207.96165%204.67382%207.78393%204.66564C7.46746%204.65091%207.26011%204.44315%207.22426%204.1127C7.21802%204.0538%207.22426%203.99327%207.21334%203.93602C7.15566%203.66773%207.13228%203.38144%207.02627%203.13442C6.61158%202.15287%205.72297%201.65228%204.67379%201.77661C3.67761%201.89439%202.80458%202.87594%202.78743%203.9262C2.77184%204.9192%202.7812%205.91221%202.77964%206.90684C2.77964%206.93302%202.78276%206.95919%202.78588%207.00009H2.94333C4.99649%207.00009%207.04965%207.00009%209.10125%207.00009C9.64222%207.00009%209.9961%207.35672%209.99766%207.90966C10.0008%209.63719%2010.0008%2011.3647%209.99766%2013.0906C9.99766%2013.6272%209.64845%2013.9969%209.14023%2013.9985C6.3793%2014.0018%203.61992%2013.9985%200.858991%2013.9985C0.565905%2013.9985%200.322706%2013.884%200.157456%2013.6288C0.0857432%2013.5192%200.0514459%2013.3851%200%2013.2607V7.73789C0.00779484%207.71826%200.0171486%207.69699%200.0233845%207.67736C0.163692%207.21603%200.439629%207.00173%200.897965%207.00009C0.965001%207.00009%201.0336%207.00009%201.1131%207.00009C1.1131%206.92975%201.1131%206.87576%201.1131%206.82178C1.1131%205.93347%201.11778%205.04681%201.1131%204.1585C1.10687%203.19658%201.35786%202.32627%201.9378%201.57375C2.48811%200.862128%203.16626%200.346815%204.02681%200.129237C4.25286%200.0719804%204.48515%200.0425339%204.71588%200H4.71432Z'%20fill='white'/%3e%3c/svg%3e";
const __vite_glob_0_83 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='12'%20height='13'%20fill='none'%3e%3cpath%20fill='%23777'%20fill-rule='evenodd'%20d='M6.4%202.146%202.352%206.302a3.153%203.153%200%201%200%204.46%204.46v-.001l3.946-3.937a.63.63%200%200%201%20.89.893l-3.945%203.936a4.415%204.415%200%200%201-6.246-6.24l4.048-4.156a3.153%203.153%200%200%201%204.463%204.456L5.92%209.869a1.892%201.892%200%200%201-2.676-2.675L7.397%203.04a.63.63%200%201%201%20.892.892L4.136%208.086a.63.63%200%200%200%20.89.894l4.047-4.156A1.892%201.892%200%200%200%206.4%202.146Z'%20clip-rule='evenodd'/%3e%3c/svg%3e";
const __vite_glob_0_84 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFhSURBVHgB7ZQxTsMwFIZ/O5WALWJGKEcoEgOCDu0NGNkKA6JMiBOQ3iAbAZZcgRO0SDRiYOAIEQeozMSEjS0QCqnjpMXOQn4pspI4/r48Pxlo89/jwVE2e6Orje3dqbzw/vr8gCYFFFwO4fdt3yRhXaAAR5WEdYG1rZ03QsgRQNZRQ4LCUvze2YW/NwpYevfCOR8AgmmmhcUHVgRU2SlIRD1MKiTGxW8JLMCR/zOBjH9gwJ7izN8/7VJKJxLjK/j8MQ6tCpQ03KIE6fTns+tIt8bKAkU4F/xSNt+QgHSLEqZ1VuqBBTjHCZvdRgJIfiYRBPDIYdVaSwto4Wmc+AfnQ9WIualjVlL2fJbaAiOciCQP1zXcnwRcwGsLuILXEnAJrxRwDTcKNAEvFWgKrhVoEq6iO4jCpuAqnbIXQoh7lt44havotkB8GSCT9ZnK8dgVXIUa1ALXcLPA7ziBt2mj8gl4LPy9kQIEWgAAAABJRU5ErkJggg==";
const __vite_glob_0_85 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVBAMAAABbObilAAAAElBMVEUAAABQn+JQn+JQn+JQn+JQn+KxowiZAAAABXRSTlMARO4idxyyls4AAAAySURBVAjXYwABoyADBhgQDRWgKttQUFDQNdQRSBowqIbCgAJDKBwEIIsjq6eFe5D9CwCWPRV/mairZAAAAABJRU5ErkJggg==";
const __vite_glob_0_86 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2026.5.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2050%2050'%20style='enable-background:new%200%200%2050%2050;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%238898AB;}%20.st1{fill:%234987D7;}%20%3c/style%3e%3cg%3e%3cpath%20class='st0'%20d='M29.4,4.7c0.2,0.1,0.5,0.1,0.7,0.2c1.9,0.6,3.3,2.3,3.3,4.4c0,3,0,6.1,0,9.1c0,0.8-0.5,1.4-1.3,1.4%20c-0.7,0-1.3-0.6-1.3-1.4c0-2.9,0-5.8,0-8.8c0-1.6-0.8-2.4-2.4-2.4c-6.3,0-12.6,0-18.9,0C8,7.2,7.2,8.1,7.2,9.6c0,8.6,0,17.1,0,25.7%20c0,1.6,0.8,2.4,2.4,2.4c4.2,0,8.5,0,12.7,0c0.2,0,0.3,0,0.5,0c0.6,0.1,1.1,0.7,1,1.3c0,0.6-0.6,1.1-1.2,1.2c-0.1,0-0.3,0-0.4,0%20c-4.2,0-8.4,0-12.7,0c-2.7,0-4.6-1.8-4.9-4c0,0,0-0.1-0.1-0.1c0-9.2,0-18.3,0-27.5c0-0.1,0.1-0.2,0.1-0.3C5.1,6.9,6,5.7,7.5,5.1%20c0.4-0.2,0.8-0.3,1.2-0.4C15.6,4.7,22.5,4.7,29.4,4.7z'/%3e%3cpath%20class='st1'%20d='M25,29.7c0-1.2,0-2.4,0-3.6c0-0.7,0.3-1.1,1-1.4c2.9-1,5.7-2,8.6-2.9c0.3-0.1,0.7-0.1,1.1,0%20c2.9,1,5.8,1.9,8.7,2.9c0.7,0.2,1,0.6,1,1.4c0,2,0,4.1,0,6.1c0.1,3.4-1.1,6.2-3.4,8.7c-1.7,1.9-3.8,3.3-6,4.4%20c-0.5,0.2-0.9,0.2-1.4,0c-3-1.5-5.6-3.4-7.5-6.2c-1.3-1.9-1.9-4-1.9-6.3C25,31.6,25,30.6,25,29.7z%20M27.5,30.1c0,0.8,0,1.7,0,2.5%20c0,1.4,0.3,2.8,1,4c1.5,2.7,3.8,4.5,6.4,5.9c0.1,0.1,0.3,0,0.4,0c1.8-1,3.5-2.1,4.8-3.7c1.7-1.9,2.7-4.2,2.6-6.8%20c-0.1-1.6,0-3.2,0-4.8c0-0.3-0.1-0.4-0.4-0.5c-2.3-0.8-4.7-1.6-7-2.4c-0.2-0.1-0.4-0.1-0.5,0c-2.4,0.8-4.7,1.6-7.1,2.4%20c-0.3,0.1-0.3,0.2-0.3,0.5C27.5,28.2,27.5,29.2,27.5,30.1z'/%3e%3cpath%20class='st0'%20d='M19.1,18.2c2.6,0,5.3,0,7.9,0c0.9,0,1.6,0.7,1.3,1.6c-0.1,0.5-0.4,0.8-0.9,0.9c-0.2,0-0.4,0.1-0.5,0.1%20c-5.2,0-10.4,0-15.6,0c-0.3,0-0.6-0.1-0.9-0.2c-0.5-0.2-0.7-0.8-0.6-1.4c0.1-0.6,0.6-0.9,1.2-1c0.1,0,0.3,0,0.4,0%20C13.9,18.2,16.5,18.2,19.1,18.2z'/%3e%3cpath%20class='st0'%20d='M15.6,27.6c-1.5,0-3,0-4.5,0c-0.8,0-1.4-0.5-1.4-1.3c0-0.8,0.6-1.3,1.4-1.3c3,0,6,0,9,0c0.8,0,1.4,0.5,1.4,1.3%20c0,0.7-0.6,1.3-1.4,1.3C18.7,27.6,17.2,27.6,15.6,27.6z'/%3e%3cpath%20class='st0'%20d='M14.8,14c-1.3,0-2.6,0-3.9,0c-0.6,0-1-0.3-1.1-0.8c-0.2-0.5-0.1-1,0.3-1.3c0.2-0.2,0.6-0.4,0.9-0.4%20c2.5,0,5,0,7.5,0c0.8,0,1.3,0.6,1.3,1.3c0,0.7-0.6,1.2-1.3,1.3C17.3,14,16.1,14,14.8,14C14.8,14,14.8,14,14.8,14z'/%3e%3cpath%20class='st1'%20d='M34.6,34.5c0.8-1,1.5-2,2.2-3c0.6-0.8,1.3-1.7,1.9-2.5c0.5-0.6,1.3-0.8,1.8-0.3c0.6,0.4,0.7,1.2,0.2,1.8%20c-1.7,2.2-3.3,4.4-5,6.7c-0.5,0.7-1.4,0.8-2,0.1c-1.1-1.1-2.2-2.2-3.3-3.3c-0.5-0.5-0.5-1.3,0-1.8c0.5-0.5,1.3-0.5,1.8,0%20C33,32.9,33.8,33.7,34.6,34.5z'/%3e%3c/g%3e%3c/svg%3e";
const __vite_glob_0_87 = "data:image/png;base64,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";
const __vite_glob_0_88 = "data:image/svg+xml,%3csvg%20width='146'%20height='146'%20viewBox='0%200%20146%20146'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='14'%20y='23.1475'%20width='115.957'%20height='106.017'%20rx='10'%20fill='%23CDDCE9'/%3e%3crect%20x='30.5652'%20y='51.8613'%20width='58'%20height='9'%20rx='4.5'%20fill='%239DAFBF'/%3e%3crect%20x='30.5652'%20y='68.8613'%20width='76'%20height='9'%20rx='4.5'%20fill='%239DAFBF'/%3e%3crect%20x='30.5652'%20y='85.8613'%20width='57'%20height='9'%20rx='4.5'%20fill='%239DAFBF'/%3e%3cpath%20d='M132.736%2015.8642L132.735%2015.8632C129.302%2012.4266%20122.595%2012.5716%20117.699%2017.4598L132.736%2015.8642ZM132.736%2015.8642L136.135%2019.2618L132.736%2015.8642ZM48.1736%2086.9698L117.698%2017.4608L136.136%2019.2629C139.573%2022.7043%20139.43%2029.4088%20134.541%2034.2918L134.54%2034.2927L64.821%20103.99L42.6248%20112.107L42.6209%20112.108C40.9551%20112.72%2039.9482%20111.894%2039.7399%20110.937C39.6428%20110.418%2039.6917%20109.883%2039.8813%20109.391L39.8873%20109.375L39.8931%20109.36L48.1736%2086.9698Z'%20fill='%23509FE2'%20stroke='white'%20stroke-width='5'/%3e%3c/svg%3e";
const __vite_glob_0_89 = "data:image/svg+xml,%3csvg%20width='18'%20height='19'%20viewBox='0%200%2018%2019'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M17.7059%202.00551C17.182%201.47571%2016.6547%200.949325%2016.1274%200.422943L15.9516%200.247424C15.6222%20-0.0814546%2015.3793%20-0.0828641%2015.0509%200.245545L15.049%200.247476C11.7801%203.51635%208.51121%206.78523%205.24656%2010.0588C5.13521%2010.1702%205.04125%2010.3182%204.99004%2010.4666C4.81253%2010.9831%204.64049%2011.5016%204.46846%2012.0201C4.33358%2012.4266%204.1987%2012.8331%204.06119%2013.2386C3.98226%2013.4712%203.96675%2013.6821%204.15609%2013.8653C4.33792%2014.042%204.54699%2014.0204%204.76734%2013.9466C5.09281%2013.8371%205.4187%2013.7289%205.74458%2013.6206L5.74479%2013.6206L5.74494%2013.6205C6.33625%2013.4241%206.92754%2013.2277%207.51629%2013.0239C7.67885%2012.9675%207.84188%2012.8665%207.96357%2012.7453C11.2096%209.50723%2014.4505%206.26402%2017.6899%203.01987C17.7678%202.94203%2017.8358%202.85436%2017.9038%202.76669C17.9355%202.72578%2017.9673%202.68486%2018%202.64495V2.36352C17.9693%202.32565%2017.9394%202.28684%2017.9095%202.24801L17.9095%202.24793C17.8449%202.16395%2017.7802%202.07988%2017.7064%202.00504L17.7059%202.00551ZM16.6319%202.66609C13.5451%205.75473%2010.4583%208.84337%207.36783%2011.9282C7.27856%2012.0175%207.15688%2012.0889%207.03707%2012.1312C6.66031%2012.2644%206.28061%2012.3892%205.90099%2012.5141C5.77693%2012.5549%205.65287%2012.5957%205.52893%2012.6367C5.48541%2012.651%205.44125%2012.663%205.38542%2012.6781L5.38539%2012.6781C5.35864%2012.6853%205.32922%2012.6932%205.29589%2012.7025C5.34804%2012.546%205.39938%2012.3913%205.45022%2012.2382L5.45022%2012.2382C5.61143%2011.7527%205.76755%2011.2826%205.92828%2010.8143C5.94538%2010.7645%205.98956%2010.7224%206.03193%2010.682C6.04193%2010.6725%206.05182%2010.663%206.06124%2010.6536C9.15928%207.55369%2012.2578%204.45519%2015.3568%201.35668C15.3881%201.3253%2015.4217%201.29565%2015.4493%201.27133C15.4597%201.26216%2015.4693%201.25374%2015.4775%201.24627C15.9036%201.671%2016.3227%202.08914%2016.7601%202.52561C16.752%202.53452%2016.7423%202.54561%2016.7314%202.55813L16.7314%202.55815C16.7042%202.58919%2016.6694%202.62907%2016.6319%202.66656V2.66609ZM15.9868%209.43065C15.9558%209.19292%2015.765%209.02378%2015.5245%209.01392C15.1961%209.00029%2015.0001%209.22205%2014.9997%209.61388C14.9994%2011.1925%2014.9995%2012.7711%2014.9996%2014.3497L14.9997%2016.7177V16.9953H1.01248V3.00859H1.33008C3.98648%203.00859%206.64241%203.00859%209.29881%203.00718C9.41485%203.00718%209.53513%203.00343%209.64648%202.9743C9.86307%202.91792%209.99415%202.72764%209.99321%202.50259C9.99227%202.27707%209.85978%202.09055%209.64319%202.03323C9.54687%202.00786%209.44257%202.00176%209.34203%202.00176C6.45166%202.00035%203.56081%202.00035%200.670442%202.00082C0.16303%202.00035%200%202.16572%200%202.67643V17.3294C0%2017.8528%200.160211%2018.013%200.685947%2018.013H15.3107C15.8411%2018.013%2015.9957%2017.8589%2015.9957%2017.3308V9.68812L15.9958%209.65017V9.65016C15.9961%209.57664%2015.9964%209.50279%2015.9868%209.43065ZM1.99535%2015.1996C1.99628%2014.9746%202.12878%2014.7876%202.34537%2014.7303C2.44215%2014.7049%202.54598%2014.6988%202.64652%2014.6988H4.66631C4.67054%2014.6983%204.67383%2014.6979%204.67852%2014.6979C5.41617%2014.6976%206.15402%2014.6977%206.89181%2014.6978C7.26067%2014.6978%207.62952%2014.6979%207.99832%2014.6979H11.3181C11.3199%2014.6979%2011.3215%2014.698%2011.3231%2014.6982C11.3255%2014.6985%2011.3277%2014.6988%2011.3303%2014.6988H13.3501C13.4507%2014.6988%2013.555%2014.7049%2013.6513%2014.7303C13.8679%2014.7876%2014.0004%2014.9741%2014.0013%2015.1996C14.0022%2015.4247%2013.8711%2015.615%2013.6546%2015.6714C13.5432%2015.7005%2013.4229%2015.7042%2013.3069%2015.7042C12.4254%2015.7052%2011.544%2015.7052%2010.6626%2015.7052H10.6599H10.658H7.99832H5.33863H5.33675C4.89558%2015.7049%204.45442%2015.7048%204.01325%2015.7047C3.57208%2015.7046%203.13092%2015.7045%202.68975%2015.7042C2.57323%2015.7042%202.45343%2015.7005%202.34208%2015.6714C2.12502%2015.615%201.99441%2015.4242%201.99535%2015.1996Z'%20fill='%23210F59'/%3e%3c/svg%3e";
const __vite_glob_0_90 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAYFBMVEUAAAD/zE3/zE3/zE3/zE3/zE3/zE3/zE3/zE3/zE3/zE3/zE3/zE3/zE3/zE1mRQDuvkTSpDZ7VwqgeB2bdBqvhiV+Wgx2Uwj4xkn3xUnfsD3KnTKziSeLZhOFYRBnRgD04bLqAAAADnRSTlMALPrz8dvSp6SXYxMNONmrFGwAAADrSURBVDjLhZPploMgDIVjqQjY3hS12r3v/5bDjFGH0gPfH+4JS0IW2mid0QpQ2riWUqpmh5VdU1HMweIDe4iu10io/z1y3OML++N6X/aTE5X4l/dT6jkOCyHF/jmAcAIS+eukET1wJ/ZTx4MYG6JW8uOZuZ9lH6SXjLXkMHMO1m6WXZBnMTsy+QOGNHIuoEkhFyQUxX9LJaEAKWRRpJFFk0EWQw7C/YaV2x2CW1ONx3vwVwSufng/sKR6K9ZlZOZpHKewjJelWFG5nyw8t3LHDeP71zS9eo8FW2y5UtMW2748OOXRKw9vcfx/ACZnLYWsWc2gAAAAAElFTkSuQmCC";
const __vite_glob_0_91 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAPCAYAAADtc08vAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEQSURBVHgBlVLBccIwENyTPXnwSEwHooLYFYRnxlXQgekgpgNaSAe8eOSTuAI5lUAyDHxAx2mwAcEgj3fGPtne3VufBASwMuNkZd51iKNCHyMamIjUtzPqbfBv8okU7S6FwbS3AQgf5yWh6GWw+c2LpnuLpHl338cNKVZUMEMzkBJIIwDh1AReS6p6b3ezWEIkIp6eUndDOKm7i2Yc4alSw2xZy8MMPeE0z9nX4tz0z+QlXQ2uS/ySLcsm0QViMg9N/Fbs4O2Cgl2gA4R97WuuYEFplwEj0g8NiOjNJ2N9ayCc14cGIklaoftXy9vRge2ImT8vpuyljD05UyWlstjOh9lP293ViRy4UoFKWXszOAInrGJHik+ELQAAAABJRU5ErkJggg==";
const __vite_glob_0_92 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMWSURBVHgB7VhNdtowEB6p2WTT4E1J2i7gBiY9QOkJmpwg5ARNTlA4QZIb0BOUnqD0AkU3iBf9SdlAumg3wdMZYTu26h8JnPfIe3zv8ZCENPo8mvk0GGCL9SCgJsy++0cgwdedEJT3Qo2gBuxAXZBwJIQ44abYwSF91UJQwobj8ROcXfsNeCDY2C4lePvr8L3YFZPZT78FVQhhhIgD/oR38KlqOttk27xH2TxRRo4260fdgNpvvAMVQA3Q5IT4TM2WJiFEf6/5dZA3t9CDYRimyWuDdRw320iTi/ZqF80vJEje6vNxxX1qf/Daal64MXll9s336btb9iBsg21l7B6oXtH8SqGmDfsx4TxSUsh3KLAHCCapgDw1Ju8M8kIjstsqI2dFsAi308MLDPHMZm5ZjFWuBUfoGNrVMeQ7LlX4lxKtJEzy4CzU/5ETMCdPXuECjyme2iixwxmfjrMIPq39CI5w8qAhPYxS+THlhMGJlxfPaxPUm0kxSSVDQEfWqTqyKCQmCUn2+B9s2x61yxF305mqPWexSSQrp8kA29iFHljCmmBcSkUYu9wqNHfMaxJbIN7artX1IIsrEcjcifTUXzKxIigxMPoNsPKuNcFriFg3sZXC7MY/M0mTtl55TTWKC9YW8BGmICUExg6NVNtJKpI1IsfWsu/Tb93MWAhaBTa+Hlx68AmJ6AIzSo8LUMbcAOJMRGeRphORrylslh1h2OZSTWKQGYv2d5GZYZIoJBWN5sQDB8xvOteQlFc43GuqU5t1Lkc8TFoUQ3ERYYOoKG3F/TCKLxs43STkBb4VunFfSuw9faZKN/s9fXVCFc0wNRQ09idtsIRTkqTrQwbVtEP2Tt5fAr5BuOIxyGmBBwe4VzM/SLOkuDCGA7zDY++l0oE9m/q+QLqDDTlxvYcZzjLjPVeXVL2cG8MtUoL7zF5oUb8nx/cv4LkruZUIJiSptLKdTw/U8fbVJayAlYXa8S62nmti++pjXWw8wbXeD5JwY8rSPKlyBGVwKotJmFfep773g0tCjahdGx5JubUizKtvi03EP4Pxe2b0nrwUAAAAAElFTkSuQmCC";
const __vite_glob_0_93 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAllBMVEUAAADV4u3V4u3V4u3V4u3V4u3V4u3V4u3V4u3V4u3V4u3V4u2KpLj///+etMW0xdKqvs6ascPG1eKww9PO3OmVrb+LpbnR3+qRqr3U4ezA0d60x9atwdGPqLyNp7rT4Oy8ztzBztmiuMnx9PfJ2OXW4ObL2ua3ytilu8v7/P31+PnT3eXC0t/r8PPo7fHe5uvR2+OftscAs3DjAAAAC3RSTlMABtDHbvQb+ctt0f3LxK8AAAIoSURBVGje7drZbqMwFIBh05Au4wPBYPa1TPak2/u/3NAME6lzSMHGvqjk/zJI/sTiSLZMCLHsxZJqaLmwLdJ1f0e1dXdPiIXGVypY5Ilq7YksqNYW5IFq7YFQzRnAAAYwgAEMIAxwP2t2TbZOKWo+wHdtCH0VK3zFQPYRwdfCgqsDMgYDVUWsBuAt3ChpVABZCbfbx7OBPILvYnwmUMBI4XYWEMBoIZ8BNDAhVksD6wqm5MkCKf78g83bOUS/ZpJAjkZ6d7qOLnoNtRQQowmwci69ROjGpAD8Bb05f0O3UMYSQF0i4LUHPHQllwAaQJ16IMSTQQJoMeAenM/eAbcWBtIKcN6xG38zdCUXBnwYqvRWLgzVCgM5CBUKAx6giudLq0GhFgXwO2ZOX2fjuCiAH7X7Dxi8hbVuwJ8PJEelQAtYYL8VPiIPBvoGiEWBXAxIqChwFgNcYSCOhIBAGKCuEOCLAzs0yPPmcAFeTwy/AmEAPyPmXDuhvykJgO7RTL62ga9FWxlgHU0GPCoO4LlWvjh9h/9ec8XlgDiBaeVUDqAZTMpNZQFawIQSTqWBtIXRKn/OAqT+GB3/PG8Jle5Hno8/e5UZRHA7tlWwTvZDuFFUpEpW+nVQwlDMV7ZXEQ8QbqZ0t6Vu9glci1iw1bBfxJs88Dwv2PkppT9zx8sAnxnAAAag1AAGEE/3oYGl/mMPNtWarfnoyS9L++GZLst+1HP859G2CPkDRZCgO+Q/ERIAAAAASUVORK5CYII=";
const __vite_glob_0_94 = "data:image/svg+xml,%3csvg%20width='15'%20height='16'%20viewBox='0%200%2015%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.0778%2011.2184L8.95375%202.31975C8.80533%202.06593%208.59305%201.85539%208.33801%201.70908C8.08297%201.56276%207.79407%201.48578%207.50004%201.48578C7.20601%201.48578%206.91711%201.56276%206.66207%201.70908C6.40703%201.85539%206.19474%202.06593%206.04633%202.31975L0.922303%2011.2184C0.778291%2011.4647%200.702393%2011.7449%200.702393%2012.0302C0.702393%2012.3155%200.778291%2012.5957%200.922303%2012.842C1.06907%2013.0971%201.28107%2013.3085%201.53653%2013.4547C1.79199%2013.6008%202.08173%2013.6763%202.37601%2013.6735H12.6241C12.9181%2013.6761%2013.2076%2013.6005%2013.4629%2013.4544C13.7181%2013.3083%2013.9299%2013.0969%2014.0766%2012.842C14.2208%2012.5958%2014.2969%2012.3157%2014.2971%2012.0304C14.2973%2011.745%2014.2216%2011.4648%2014.0778%2011.2184ZM12.859%2012.1383C12.8352%2012.1789%2012.8008%2012.2123%2012.7596%2012.235C12.7183%2012.2577%2012.6717%2012.2688%2012.6246%2012.2672H2.37601C2.32896%2012.2688%202.28234%2012.2577%202.24108%2012.235C2.19983%2012.2123%202.16547%2012.1789%202.14164%2012.1383C2.12143%2012.1054%202.11072%2012.0676%202.11072%2012.029C2.11072%2011.9904%202.12143%2011.9526%202.14164%2011.9197L7.26566%203.02111C7.29104%202.98206%207.32577%202.94996%207.3667%202.92774C7.40763%202.90552%207.45346%202.89389%207.50004%202.89389C7.54661%202.89389%207.59245%202.90552%207.63338%202.92774C7.67431%202.94996%207.70904%202.98206%207.73441%203.02111L12.8579%2011.9197C12.8782%2011.9525%2012.8891%2011.9903%2012.8894%2012.0289C12.8896%2012.0674%2012.8791%2012.1053%2012.859%2012.1383ZM6.79691%208.28283V6.40783C6.79691%206.22135%206.87099%206.04251%207.00285%205.91065C7.13471%205.77879%207.31356%205.70471%207.50004%205.70471C7.68652%205.70471%207.86536%205.77879%207.99722%205.91065C8.12908%206.04251%208.20316%206.22135%208.20316%206.40783V8.28283C8.20316%208.46931%208.12908%208.64816%207.99722%208.78002C7.86536%208.91188%207.68652%208.98596%207.50004%208.98596C7.31356%208.98596%207.13471%208.91188%207.00285%208.78002C6.87099%208.64816%206.79691%208.46931%206.79691%208.28283ZM8.43754%2010.6266C8.43754%2010.812%208.38255%2010.9933%208.27954%2011.1474C8.17653%2011.3016%208.03011%2011.4218%207.8588%2011.4927C7.6875%2011.5637%207.499%2011.5822%207.31714%2011.5461C7.13528%2011.5099%206.96824%2011.4206%206.83713%2011.2895C6.70601%2011.1584%206.61672%2010.9913%206.58055%2010.8095C6.54438%2010.6276%206.56294%2010.4391%206.6339%2010.2678C6.70486%2010.0965%206.82502%209.95009%206.97919%209.84708C7.13336%209.74407%207.31462%209.68908%207.50004%209.68908C7.74868%209.68908%207.98713%209.78786%208.16295%209.96367C8.33877%2010.1395%208.43754%2010.3779%208.43754%2010.6266Z'%20fill='%23FEB72F'/%3e%3c/svg%3e";
const __vite_glob_0_95 = "data:image/png;base64,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";
const __vite_glob_0_96 = "data:image/png;base64,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";
const __vite_glob_0_97 = "" + new URL("../../assets/logo-formidable-forms-BXGgG_Pj.png", import.meta.url).href;
const __vite_glob_0_98 = "data:image/png;base64,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";
const __vite_glob_0_99 = "" + new URL("../../assets/logo-wp-forms-BVfgY4Md.png", import.meta.url).href;
const __vite_glob_0_100 = "data:image/png;base64,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";
const __vite_glob_0_101 = "" + new URL("../../assets/memberpress-CXCdB84n.png", import.meta.url).href;
const __vite_glob_0_102 = "" + new URL("../../assets/mi-and-pl-logo-DJQ06oSp.svg", import.meta.url).href;
const __vite_glob_0_103 = "data:image/png;base64,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";
const __vite_glob_0_104 = "" + new URL("../../assets/charitable-logo-DHu2whGR.png", import.meta.url).href;
const __vite_glob_0_105 = "" + new URL("../../assets/membermouse-logo-BfPOOXow.png", import.meta.url).href;
const __vite_glob_0_106 = "" + new URL("../../assets/rewardswp-rewards-widget-promo-Do7LAdUj.png", import.meta.url).href;
const __vite_glob_0_107 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20id='WishList_Member'%20x='0px'%20y='0px'%20viewBox='0%200%20190%2077.5'%20style='enable-background:new%200%200%20190%2077.5;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%231E7FC0;}%20.st1{fill:%23333333;}%20%3c/style%3e%3ctitle%3eWishListMember-logo-dark%3c/title%3e%3cg%20id='member'%3e%3cpath%20class='st0'%20d='M70.8,74.1c0-1.1-0.1-2.3-0.1-3.6h0c-0.3,1.1-0.6,2.4-1,3.4l-1.1,3.4h-1.5l-1-3.4c-0.3-1-0.6-2.3-0.8-3.4h0%20c0,1.2-0.1,2.5-0.1,3.6L65,77.4h-1.8l0.6-8.8h2.6l0.9,2.9c0.3,1,0.5,2.1,0.7,3.1h0c0.2-1,0.5-2.2,0.8-3.1l0.9-2.9h2.6l0.5,8.8h-1.9%20L70.8,74.1z'%3e%3c/path%3e%3cpath%20class='st0'%20d='M82.2,73.7H79v2.1h3.6v1.6H77v-8.8h5.4v1.6H79v1.8h3.2L82.2,73.7z'%3e%3c/path%3e%3cpath%20class='st0'%20d='M94,74.1c0-1.1-0.1-2.3-0.1-3.6h0c-0.3,1.1-0.6,2.4-1,3.4l-1.1,3.4h-1.5l-0.9-3.4c-0.3-1-0.6-2.3-0.8-3.4h0%20c0,1.2-0.1,2.5-0.1,3.6l-0.2,3.3h-1.8l0.6-8.8h2.6l0.9,2.9c0.3,1,0.5,2.1,0.7,3.1h0c0.2-1,0.5-2.2,0.8-3.1l0.9-2.9h2.6l0.5,8.8%20h-1.9L94,74.1z'%3e%3c/path%3e%3cpath%20class='st0'%20d='M100.2,68.8c0.8-0.1,1.7-0.2,2.6-0.2c1.2,0,2,0.1,2.6,0.5c0.6,0.3,1.1,1,1,1.7c0,0.8-0.4,1.5-1.4,1.9v0%20c1,0.2,1.7,1.1,1.7,2.1c0,0.7-0.3,1.4-0.9,1.9c-0.6,0.5-1.7,0.8-3.4,0.8c-0.7,0-1.4,0-2.1-0.1L100.2,68.8z%20M102.1,72.1h0.6%20c1,0,1.6-0.4,1.6-1.1c0-0.6-0.5-1-1.4-1c-0.3,0-0.6,0-0.8,0.1V72.1z%20M102.1,76c0.3,0,0.5,0,0.8,0c0.9,0,1.7-0.4,1.7-1.3%20c0-0.9-0.8-1.2-1.8-1.2h-0.7L102.1,76z'%3e%3c/path%3e%3cpath%20class='st0'%20d='M115.9,73.7h-3.2v2.1h3.6v1.6h-5.6v-8.8h5.4v1.6h-3.4v1.8h3.2L115.9,73.7z'%3e%3c/path%3e%3cpath%20class='st0'%20d='M120.2,68.8c0.9-0.1,1.8-0.2,2.6-0.2c1.3,0,2.2,0.2,2.8,0.7c0.5,0.4,0.8,1.1,0.8,1.8c0,1-0.6,1.8-1.5,2.1v0%20c0.6,0.2,0.9,0.8,1.2,1.6c0.2,0.8,0.4,1.7,0.7,2.5h-2c-0.3-0.7-0.5-1.3-0.6-2c-0.2-1.1-0.6-1.4-1.4-1.4h-0.6v3.4h-2L120.2,68.8z%20M122.2,72.5h0.8c1,0,1.6-0.5,1.6-1.3s-0.5-1.2-1.5-1.2c-0.3,0-0.6,0-0.9,0.1V72.5z'%3e%3c/path%3e%3c/g%3e%3cg%20id='WishList'%3e%3cpath%20class='st1'%20d='M8.9,59.9L0,22.4h9.1l2.9,15.4c0.8,4.5,1.6,9.3,2.2,13.1h0.1c0.6-4.1,1.5-8.6,2.4-13.2l3.2-15.3h9l3,15.8%20c0.8,4.4,1.4,8.4,2,12.5h0.1c0.6-4.2,1.4-8.5,2.2-13l3-15.3h8.6l-9.7,37.5H29l-3.2-16.1C25,40,24.4,36.4,24,32.2h-0.1%20c-0.6,4.2-1.2,7.8-2.1,11.5l-3.6,16.1H8.9z'%3e%3c/path%3e%3cpath%20class='st1'%20d='M50.4,59.9V32.6h8.5v27.2H50.4z'%3e%3c/path%3e%3cpath%20class='st1'%20d='M63.8,52.5c2.2,1.2,4.7,1.9,7.2,2c2.6,0,3.6-0.9,3.6-2.2s-0.9-2.1-4-3.1C65,47.3,62.9,44.2,63,41%20C63,35.9,67.3,32,74,32c3.2,0,6,0.7,7.7,1.6l-1.5,5.8c-1.8-0.9-3.8-1.5-5.9-1.5c-2.1,0-3.2,0.8-3.2,2.2c0,1.3,1.1,2,4.4,3.1%20c5.2,1.8,7.3,4.4,7.4,8.4c0,5.1-4,8.8-11.8,8.8c-3.5,0-6.7-0.8-8.8-1.9L63.8,52.5z'%3e%3c/path%3e%3cpath%20class='st1'%20d='M85.5,20.4h8.5v15.5h0.1c0.9-1.2,2-2.1,3.3-2.8c1.4-0.7,2.9-1.1,4.4-1.1c5.4,0,9.5,3.7,9.5,11.9v15.9h-8.5v-15%20c0-3.6-1.2-6-4.4-6c-1.9,0-3.6,1.2-4.2,3c-0.2,0.6-0.3,1.2-0.3,1.8v16.1h-8.5V20.4z'%3e%3c/path%3e%3cpath%20class='st1'%20d='M114.1,22.4h8.5v30.3h14.9v7.1h-23.3V22.4z'%3e%3c/path%3e%3cpath%20class='st1'%20d='M140.1,59.9V32.6h8.5v27.2H140.1z'%3e%3c/path%3e%3cpath%20class='st1'%20d='M152.8,52.5c1.5,0.9,4.8,2,7.2,2c2.6,0,3.6-0.9,3.6-2.2c0-1.4-0.9-2.1-4-3.1c-5.7-1.9-7.8-4.9-7.8-8.1%20c0-5.1,4.3-8.9,11.1-8.9c3.2,0,6,0.7,7.7,1.6l-1.5,5.8c-1.8-0.9-3.8-1.5-5.9-1.5c-2.1,0-3.2,0.8-3.2,2.2c0,1.3,1.1,2,4.4,3.1%20c5.2,1.8,7.3,4.4,7.4,8.4c0,5.1-4,8.8-11.8,8.8c-3.5,0-6.7-0.8-8.8-1.9L152.8,52.5z'%3e%3c/path%3e%3cpath%20class='st1'%20d='M183.9,24.9v7.8h6.1v6.2h-6.1v9.9c0,3.3,0.8,4.8,3.3,4.8c0.8,0,1.7-0.1,2.5-0.3l0.1,6.4%20c-1.1,0.4-3.1,0.7-5.5,0.7c-2.7,0-5-1-6.4-2.4c-1.6-1.6-2.3-4.2-2.3-8.1V38.9H172v-6.2h3.6v-5.8L183.9,24.9z'%3e%3c/path%3e%3c/g%3e%3cpath%20id='bounce'%20class='st0'%20d='M148.8,24.9c0,2.6-2.1,4.8-4.8,4.8c0,0,0,0,0,0c-2.8,0-4.8-2.5-4.8-4.7c0-2.9,2.4-5,4.9-4.9%20C146.5,19.9,148.8,22.2,148.8,24.9z%20M136.9,22.4c0,0-43.2-40.6-81.4,4.7c0,0-13.1-27-42.6-26.7c0,0,25.4-4.8,42.8,20.9%20c0,0,37.9-44.8,86.4-3.7C142.2,17.5,137.3,17.2,136.9,22.4z'%3e%3c/path%3e%3c/svg%3e";
const __vite_glob_0_108 = "" + new URL("../../assets/popular-products-bg-DGc7Vr5u.jpg", import.meta.url).href;
const __vite_glob_0_109 = "" + new URL("../../assets/popular-products-browser-BlyRAAm4.jpg", import.meta.url).href;
const __vite_glob_0_110 = "data:image/png;base64,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";
const __vite_glob_0_111 = "data:image/png;base64,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";
const __vite_glob_0_112 = "" + new URL("../../assets/theme-icons-Bp8c8B8G.png", import.meta.url).href;
const __vite_glob_0_113 = "" + new URL("../../assets/theme-preview-beta-BQP5wRCQ.png", import.meta.url).href;
const __vite_glob_0_114 = "" + new URL("../../assets/theme-preview-image-2-8ut-7vzL.jpg", import.meta.url).href;
const __vite_glob_0_115 = "" + new URL("../../assets/theme-preview-image-Du73yHJK.jpg", import.meta.url).href;
const __vite_glob_0_116 = "data:image/jpeg;base64,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";
const __vite_glob_0_117 = "" + new URL("../../assets/theme-products-2-B6VA5RVe.jpg", import.meta.url).href;
const __vite_glob_0_118 = "" + new URL("../../assets/theme-products-3-DOsrRHWQ.jpg", import.meta.url).href;
const __vite_glob_0_119 = "" + new URL("../../assets/theme-products-4-CojNbWYE.jpg", import.meta.url).href;
const __vite_glob_0_120 = "" + new URL("../../assets/theme-products-5-CsY2njtT.jpg", import.meta.url).href;
const __vite_glob_0_121 = "" + new URL("../../assets/theme-products-6-CvgwDkIc.jpg", import.meta.url).href;
const __vite_glob_0_122 = "" + new URL("../../assets/theme-products-7-BcGvEFHc.jpg", import.meta.url).href;
const __vite_glob_0_123 = "" + new URL("../../assets/theme-products-8-BjDTGZfl.jpg", import.meta.url).href;
const __vite_glob_0_124 = "" + new URL("../../assets/theme-widget-1-DocKd3_n.jpg", import.meta.url).href;
const __vite_glob_0_125 = "" + new URL("../../assets/theme-widget-2-Fe5eNsT3.jpg", import.meta.url).href;
const __vite_glob_0_126 = "" + new URL("../../assets/theme-widget-3-DdfI88iG.jpg", import.meta.url).href;
const __vite_glob_0_127 = "" + new URL("../../assets/theme-widget-4-CDuJt5xU.jpg", import.meta.url).href;
const __vite_glob_0_128 = "" + new URL("../../assets/theme-widget-5-3tXH4Mu7.jpg", import.meta.url).href;
const __vite_glob_0_129 = "" + new URL("../../assets/theme-widget-6-CB-hOUaa.jpg", import.meta.url).href;
const __vite_glob_0_130 = "" + new URL("../../assets/theme-widget-7-DJMvonAM.jpg", import.meta.url).href;
const __vite_glob_0_131 = "" + new URL("../../assets/theme-widget-8-DUkCJs1D.jpg", import.meta.url).href;
const __vite_glob_0_132 = "" + new URL("../../assets/pretty-links-logo-white-C6bLj4eu.svg", import.meta.url).href;
const __vite_glob_0_133 = "data:image/png;base64,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";
const __vite_glob_0_134 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAViSURBVHgBrVdrbFRFFP5m5m67i4W20WKi1VRFBcNji5AIiKKgRgux/jAVFORRIFGQH0SjhChQxBgkig8gIKASNYhIUSiWiMQfIIqCBluFVCgSrAUKfdh2u7v3Hs/usvfe3bl9qSdpOvPNmfN9c2bnzFyBf2Ed04cMNAy1WJCY1HKmRgqJ7SYiS3K/DNWilyZ64xyeWTjCp/A8EYq5q2IYC7DHLWCLhFiWXdlc09OYPRJAMwrvJoUV3Bxtg336AveUoJEFyINfQFyqdwetIoiZLOT77mJ3KYDmDB1OpF4FYYKbWEyYAoyfAiuQhYa2DojWJqjyd6D2fwRcOufMB7YjGn4uZ1/HyV4J4BXnwRBlZFlzIISwiZkUMfLY6tks3ouYADtYUwPkV1tg7NnIQpyMSODdaCSyPPfr0OluBVDpsCdIiFUg0T8x2+AVTwaKSm3ipKULsIMyufrsDaiKjW64ln8jy3IrWzZ7CqBZwTFMvIGbgxLEKpHqollM3A9e1pkAO3jDn1A73oLaky7EKs6tbP3ZFhAtHVYiSX7MvYSg6wdCzFgK5N98WR3BPFwJq+oQj90K3/jJngLU/q0QZ34F3RSEOabYEXLuDHwrJvPYCRtjvsf67m3aGie0ZhVWM/UgZAYgYql+YFo8AwkWPuGr50P9cgCCMeK+eOF9iAHBFAHy+GH4FhU52bmjCJEFa4EMv40ZO96E+uQ1Ps+hmKwjfEpulzS9wB8nj0ElC4EHZzjkbGbFJhjVh+LkcZ/Y/4v1er5bm1O68tDuePrdFn3kGUTmrrzco+E0Kj8gYWRl2x7Z/bW44tgBDUNbi441ntcg+V2F7peVazf/zmnMkjADGTZiKF2AS59tTRd0v0aPrPTN1THDoQu3m5kSFHFYpS4A1w7QIGo67yFAx6hgsIa5OaQkJdNG9cC3jdIwzwz8dUrDrOA4fa50So/f78WYbgNHAHn5qVidToa0LaC862AV3qv7CYcydhYklCB0Z3cWp8aIRjQX+cfxlL758NPwNoeOwiAJy7CcQctzihj3aGoZbjwHam6IXzyC2yLUCkRcFZEvKWv0JHjzOwL8PmEZ7eEO8geUNphiMfL7pgI719h+0acSN3PGhTrNPVo8D5Sd5x3Lcji4hpEMZCpn2VzlPOecOILo5+tSMCNwRfzPywwWKrl4eRo5dMQZkJARh9X03gJzzUIY5D3maW3N8L0+13tBLsxP0pQI94k6kvQJdPIYDH5w9Nou1kGeOtalgCZTsAC/6QgwTc9AKdbvKmDoWM3NGHk/5NXXp4K1VZofXHSBDF+EM9Bg/3yp3aPGu55Y8dvy5XKI+auBh2bacMbEUvQp+xRZ6w9z6c6xcdF8SQsXOzVJqzt9MSTFe7Uhrk0/xpEPykC71qeehrQ2hdoSTbcwK/H7oNgl5d5Gy1mt4GOqtq2CsWlxEqoeXI2wkRjFK1wCtnEggZ3rQN/uhljAV2l/TqnPuTxi97i5tISrXD5UzRF+gfgSMF/ZxK8f81QVqNWVRV9mInzNT/C9PZ8fJMliRVGCejFBnYRmD7uFLLGHH6E32gHGcgW88hqgfA06M/d3QbpFn1wGUV8LVbnZziTn8CiUNSenou2HFAGOkMKpfOJ4JgrQA+tKQEpcgbMcd17u3pZyN65dRmLD0S3CitzFytbifzBecZRjrYKSQ9LJ43xdTp4eLLAMLOe36uOd+XSZAcIuJni2396W3zpz6dmn2exgkLeQj4cY2RMBJOgbaYlFTHwQ3VivPk7bS4fekEHyJc7ItOQT3hFAHUTiQ97TlV2t+D8JSFp8axSW8OSJLWd/520WW1XULMva11rf21j/AIy+MigkDqyHAAAAAElFTkSuQmCC";
const __vite_glob_0_135 = "" + new URL("../../assets/rcp-CSXRrTgu.png", import.meta.url).href;
const __vite_glob_0_136 = "" + new URL("../../assets/reports-upsell-bg-Ce6isHlL.png", import.meta.url).href;
const __vite_glob_0_137 = "" + new URL("../../assets/bg-ai-insights-em-oFvF6FhV.png", import.meta.url).href;
const __vite_glob_0_138 = "" + new URL("../../assets/bg-ai-insights-Dz0Vrjwp.png", import.meta.url).href;
const __vite_glob_0_139 = "" + new URL("../../assets/bg-cart-abandonment@2x-CY5dDLOX.png", import.meta.url).href;
const __vite_glob_0_140 = "" + new URL("../../assets/bg-conversations-ai-em-hYbhIFTi.png", import.meta.url).href;
const __vite_glob_0_141 = "" + new URL("../../assets/bg-conversations-ai-CGVtajpe.png", import.meta.url).href;
const __vite_glob_0_142 = "" + new URL("../../assets/bg-countries-DLn_BDC3.png", import.meta.url).href;
const __vite_glob_0_143 = "" + new URL("../../assets/bg-dimensions-Ce3cqC0p.png", import.meta.url).href;
const __vite_glob_0_144 = "" + new URL("../../assets/bg-dimensions@2x-Dygf0shE.png", import.meta.url).href;
const __vite_glob_0_145 = "" + new URL("../../assets/bg-ecommerce-coupons-4jHQ_ezT.png", import.meta.url).href;
const __vite_glob_0_146 = "" + new URL("../../assets/bg-ecommerce-coupons@2x-D9yDcdG9.png", import.meta.url).href;
const __vite_glob_0_147 = "" + new URL("../../assets/bg-ecommerce-product-sales-yHMKveM2.png", import.meta.url).href;
const __vite_glob_0_148 = "" + new URL("../../assets/bg-ecommerce-product-sales@2x-Cn07L8ZY.png", import.meta.url).href;
const __vite_glob_0_149 = "" + new URL("../../assets/bg-ecommerce-purchases-by-location-BmdZbgBZ.png", import.meta.url).href;
const __vite_glob_0_150 = "" + new URL("../../assets/bg-ecommerce-refunds-by-geo-CF8FERm4.png", import.meta.url).href;
const __vite_glob_0_151 = "" + new URL("../../assets/bg-ecommerce-refunds-DxdhP2e9.png", import.meta.url).href;
const __vite_glob_0_152 = "" + new URL("../../assets/bg-ecommerce-spend-by-day-DIonvSx0.png", import.meta.url).href;
const __vite_glob_0_153 = "" + new URL("../../assets/bg-ecommerce-spend-by-hour-q1WFcc3y.png", import.meta.url).href;
const __vite_glob_0_154 = "" + new URL("../../assets/bg-ecommerce-CSsv5T3y.png", import.meta.url).href;
const __vite_glob_0_155 = "" + new URL("../../assets/bg-ecommerce@2x-DqQIAx_E.png", import.meta.url).href;
const __vite_glob_0_156 = "" + new URL("../../assets/bg-engagement-pages-DHCNXcIr.png", import.meta.url).href;
const __vite_glob_0_157 = "" + new URL("../../assets/bg-engagement-pages@2x-Cy1-nvFe.png", import.meta.url).href;
const __vite_glob_0_158 = "" + new URL("../../assets/bg-forms-D88OVto6.png", import.meta.url).href;
const __vite_glob_0_159 = "" + new URL("../../assets/bg-forms@2x-DDCVkM3t.png", import.meta.url).href;
const __vite_glob_0_160 = "" + new URL("../../assets/bg-media-upsell-DnlL8gmw.svg", import.meta.url).href;
const __vite_glob_0_161 = "" + new URL("../../assets/bg-publisher-54sZqopu.png", import.meta.url).href;
const __vite_glob_0_162 = "" + new URL("../../assets/bg-publisher@2x-DV7AEtV1.png", import.meta.url).href;
const __vite_glob_0_163 = "" + new URL("../../assets/bg-queries-m7JyFwyd.png", import.meta.url).href;
const __vite_glob_0_164 = "" + new URL("../../assets/bg-queries@2x-hMqBKeO_.png", import.meta.url).href;
const __vite_glob_0_165 = "" + new URL("../../assets/bg-realtime-BaCu7kOE.png", import.meta.url).href;
const __vite_glob_0_166 = "" + new URL("../../assets/bg-realtime@2x-Bj4r4U3g.png", import.meta.url).href;
const __vite_glob_0_167 = "" + new URL("../../assets/bg-sitespeed-WMXhJeY5.png", import.meta.url).href;
const __vite_glob_0_168 = "" + new URL("../../assets/bg-sitespeed@2x-DwC9jlLe.png", import.meta.url).href;
const __vite_glob_0_169 = "" + new URL("../../assets/bg-traffic-ai-BccoVVrZ.jpeg", import.meta.url).href;
const __vite_glob_0_170 = "" + new URL("../../assets/bg-traffic-campaigns-CSLYRffe.png", import.meta.url).href;
const __vite_glob_0_171 = "" + new URL("../../assets/bg-traffic-campaigns@2x-BEsLG5lW.png", import.meta.url).href;
const __vite_glob_0_172 = "" + new URL("../../assets/bg-traffic-landing-page-Cjie3IXW.png", import.meta.url).href;
const __vite_glob_0_173 = "" + new URL("../../assets/bg-traffic-landing-page@2x-Do5N_DFy.png", import.meta.url).href;
const __vite_glob_0_174 = "" + new URL("../../assets/bg-traffic-overview-B6RFcNAg.png", import.meta.url).href;
const __vite_glob_0_175 = "" + new URL("../../assets/bg-traffic-overview@2x-W3v8TZRO.png", import.meta.url).href;
const __vite_glob_0_176 = "" + new URL("../../assets/bg-traffic-source-medium-DZqysmXj.png", import.meta.url).href;
const __vite_glob_0_177 = "" + new URL("../../assets/bg-traffic-source-medium@2x-BEWmnm2N.png", import.meta.url).href;
const __vite_glob_0_178 = "" + new URL("../../assets/bg-traffic-technology-CRCRYkFO.png", import.meta.url).href;
const __vite_glob_0_179 = "" + new URL("../../assets/bg-traffic-technology@2x-pzDGfzkl.png", import.meta.url).href;
const __vite_glob_0_180 = "" + new URL("../../assets/bg-traffic-CKOi-xGN.png", import.meta.url).href;
const __vite_glob_0_181 = "" + new URL("../../assets/bg-traffic@2x-DFMSQGX_.png", import.meta.url).href;
const __vite_glob_0_182 = "" + new URL("../../assets/bg-user-journey-CpHFTtAb.svg", import.meta.url).href;
const __vite_glob_0_183 = "data:image/svg+xml,%3csvg%20width='16'%20height='17'%20viewBox='0%200%2016%2017'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20y='0.5'%20width='16'%20height='16'%20rx='8'%20fill='%23F7F3FE'/%3e%3cpath%20d='M11%207.75C11.1354%207.75%2011.25%207.80208%2011.3438%207.90625C11.4479%208%2011.5%208.11458%2011.5%208.25V8.75C11.5%208.88542%2011.4479%209.00521%2011.3438%209.10938C11.25%209.20312%2011.1354%209.25%2011%209.25H8.75V11.5C8.75%2011.6354%208.69792%2011.75%208.59375%2011.8438C8.5%2011.9479%208.38542%2012%208.25%2012H7.75C7.61458%2012%207.49479%2011.9479%207.39062%2011.8438C7.29688%2011.75%207.25%2011.6354%207.25%2011.5V9.25H5C4.86458%209.25%204.74479%209.20312%204.64062%209.10938C4.54688%209.00521%204.5%208.88542%204.5%208.75V8.25C4.5%208.11458%204.54688%208%204.64062%207.90625C4.74479%207.80208%204.86458%207.75%205%207.75H7.25V5.5C7.25%205.36458%207.29688%205.25%207.39062%205.15625C7.49479%205.05208%207.61458%205%207.75%205H8.25C8.38542%205%208.5%205.05208%208.59375%205.15625C8.69792%205.25%208.75%205.36458%208.75%205.5V7.75H11Z'%20fill='%236527F5'/%3e%3c/svg%3e";
const __vite_glob_0_184 = "data:image/svg+xml,%3csvg%20width='16'%20height='17'%20viewBox='0%200%2016%2017'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20y='0.5'%20width='16'%20height='16'%20rx='8'%20fill='%23EAFAEE'/%3e%3cpath%20d='M11%207.75H8.75V5.5C8.75%205.23438%208.51562%205%208.25%205H7.75C7.46875%205%207.25%205.23438%207.25%205.5V7.75H5C4.71875%207.75%204.5%207.98438%204.5%208.25V8.75C4.5%209.03125%204.71875%209.25%205%209.25H7.25V11.5C7.25%2011.7812%207.46875%2012%207.75%2012H8.25C8.51562%2012%208.75%2011.7812%208.75%2011.5V9.25H11C11.2656%209.25%2011.5%209.03125%2011.5%208.75V8.25C11.5%207.98438%2011.2656%207.75%2011%207.75Z'%20fill='%2346BF40'/%3e%3c/svg%3e";
const __vite_glob_0_185 = "" + new URL("../../assets/custom-events-report-screen-D5UtywA8.png", import.meta.url).href;
const __vite_glob_0_186 = "" + new URL("../../assets/ecommerce-funnel-DbIAlAAe.png", import.meta.url).href;
const __vite_glob_0_187 = "" + new URL("../../assets/ecommerce-funnel@2x-BfPSZdMV.png", import.meta.url).href;
const __vite_glob_0_188 = "" + new URL("../../assets/exceptions-report-BYAZOdma.png", import.meta.url).href;
const __vite_glob_0_189 = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%200.25C3.71875%200.25%200.25%203.75%200.25%208C0.25%2012.2812%203.71875%2015.75%208%2015.75C12.25%2015.75%2015.75%2012.2812%2015.75%208C15.75%203.75%2012.25%200.25%208%200.25ZM8%203.6875C8.71875%203.6875%209.3125%204.28125%209.3125%205C9.3125%205.75%208.71875%206.3125%208%206.3125C7.25%206.3125%206.6875%205.75%206.6875%205C6.6875%204.28125%207.25%203.6875%208%203.6875ZM9.75%2011.625C9.75%2011.8438%209.5625%2012%209.375%2012H6.625C6.40625%2012%206.25%2011.8438%206.25%2011.625V10.875C6.25%2010.6875%206.40625%2010.5%206.625%2010.5H7V8.5H6.625C6.40625%208.5%206.25%208.34375%206.25%208.125V7.375C6.25%207.1875%206.40625%207%206.625%207H8.625C8.8125%207%209%207.1875%209%207.375V10.5H9.375C9.5625%2010.5%209.75%2010.6875%209.75%2010.875V11.625Z'%20fill='white'/%3e%3c/svg%3e";
const __vite_glob_0_190 = "data:image/svg+xml,%3csvg%20width='13'%20height='15'%20viewBox='0%200%2013%2015'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11.3125%207.75H4.53125V4.93359C4.53125%203.86719%205.37891%202.96484%206.47266%202.9375C7.56641%202.9375%208.46875%203.83984%208.46875%204.90625V5.34375C8.46875%205.72656%208.74219%206%209.125%206H10C10.3555%206%2010.6562%205.72656%2010.6562%205.34375V4.90625C10.6562%202.60938%208.76953%200.75%206.47266%200.75C4.17578%200.777344%202.34375%202.66406%202.34375%204.96094V7.75H1.6875C0.949219%207.75%200.375%208.35156%200.375%209.0625V13.4375C0.375%2014.1758%200.949219%2014.75%201.6875%2014.75H11.3125C12.0234%2014.75%2012.625%2014.1758%2012.625%2013.4375V9.0625C12.625%208.35156%2012.0234%207.75%2011.3125%207.75Z'%20fill='white'/%3e%3c/svg%3e";
const __vite_glob_0_191 = "" + new URL("../../assets/social-media-report-BEm-c88m.png", import.meta.url).href;
const __vite_glob_0_192 = "" + new URL("../../assets/social-media-report@2x-CcLLHYek.png", import.meta.url).href;
const __vite_glob_0_193 = "" + new URL("../../assets/charitable-jZ8z8e4W.png", import.meta.url).href;
const __vite_glob_0_194 = "" + new URL("../../assets/easy-BvW_B_Ta.png", import.meta.url).href;
const __vite_glob_0_195 = "" + new URL("../../assets/givewp-C405d0U0.png", import.meta.url).href;
const __vite_glob_0_196 = "" + new URL("../../assets/lifterlms-a1S06NYR.png", import.meta.url).href;
const __vite_glob_0_197 = "" + new URL("../../assets/memberhouse-BJdHvZB4.png", import.meta.url).href;
const __vite_glob_0_198 = "" + new URL("../../assets/memberpress-D3zMNxUg.png", import.meta.url).href;
const __vite_glob_0_199 = "" + new URL("../../assets/restrict-x0XNKniw.png", import.meta.url).href;
const __vite_glob_0_200 = "" + new URL("../../assets/wishlistmember-logo 1-Dtdt0jIO.png", import.meta.url).href;
const __vite_glob_0_201 = "" + new URL("../../assets/woocom-CGR3qW2E.png", import.meta.url).href;
const __vite_glob_0_202 = "data:image/svg+xml,%3csvg%20width='101'%20height='53'%20viewBox='0%200%20101%2053'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_15653_6002)'%3e%3cpath%20d='M4.87516%2011.8474C10.7298%2010.3451%2016.5859%208.83737%2022.4405%207.33513C24.5001%206.65996%2026.5977%206.12434%2028.7188%205.71859C29.433%205.58519%2030.1591%205.89107%2030.3661%206.6579C30.5513%207.35426%2030.1366%208.18411%2029.427%208.36587C27.3711%208.89461%2025.3152%209.42336%2023.2593%209.95211C20.0344%2011.0034%2016.921%2012.396%2013.9627%2014.094C22.8624%2013.8458%2031.8239%2013.932%2040.5105%2015.8744C45.5205%2016.9947%2050.4464%2018.7711%2054.8736%2021.4145C56.0849%2022.1407%2057.2918%2022.9719%2058.4001%2023.9191C60.7722%2023.4486%2063.2657%2023.546%2065.6926%2024.0328C68.1141%2024.5183%2070.4631%2025.3504%2072.7598%2026.2516C75.1087%2027.1721%2077.4183%2028.2004%2079.6697%2029.3433C84.2016%2031.6484%2088.4803%2034.4243%2092.4829%2037.5826C93.4743%2038.3639%2094.4464%2039.1756%2095.4021%2040.0066C95.9468%2040.4836%2095.8792%2041.4505%2095.3943%2041.9557C94.848%2042.5216%2094.0483%2042.456%2093.4982%2041.9776C86.541%2035.9146%2078.4525%2031.1325%2069.7968%2028.0781C66.9455%2027.0687%2063.83%2026.1973%2060.759%2026.3453C61.8539%2027.7193%2062.7%2029.2823%2063.1467%2031.0425C64.0575%2034.65%2062.6932%2038.8828%2059.6971%2041.1015C58.187%2042.2137%2056.2082%2042.6209%2054.4191%2042.1636C52.4197%2041.6577%2050.7642%2040.1327%2049.7987%2038.303C48.8032%2036.4125%2048.4385%2034.1371%2048.9916%2032.0227C49.5458%2029.9262%2050.8287%2028.0597%2052.4771%2026.7004C53.355%2025.9787%2054.2885%2025.3951%2055.263%2024.9401C54.867%2024.6607%2054.4682%2024.3924%2054.0743%2024.1489C50.168%2021.6993%2045.8195%2020.0312%2041.3698%2018.9086C32.0261%2016.5484%2022.2604%2016.5901%2012.6573%2016.8861C12.0592%2016.9022%2011.4649%2016.9252%2010.8654%2016.9468C13.4258%2019.5431%2015.9901%2022.1463%2018.5505%2024.7426C19.7672%2025.9772%2017.8687%2027.9496%2016.6481%2026.7081C12.5232%2022.5219%208.39686%2018.3413%204.27196%2014.1551C3.58031%2013.4514%203.88362%2012.1035%204.86837%2011.8515L4.87516%2011.8474ZM57.3173%2026.9986C54.1733%2028.1122%2051.1559%2031.0091%2051.4279%2034.5691C51.5534%2036.1578%2052.3956%2037.8023%2053.642%2038.7675C54.7611%2039.6291%2056.1379%2039.8264%2057.4361%2039.2901C57.4186%2039.2914%2057.6988%2039.1577%2057.772%2039.1177C57.9334%2039.0239%2058.0908%2038.9232%2058.2443%2038.8156C58.3978%2038.7079%2058.2875%2038.8032%2058.4728%2038.6389C58.6349%2038.4982%2058.7877%2038.3491%2058.9381%2038.1876C59.3822%2037.7073%2059.7387%2037.1688%2060.0791%2036.4494C60.2431%2036.1028%2060.2724%2036.0338%2060.4058%2035.5849C60.5248%2035.1914%2060.6156%2034.7964%2060.6865%2034.3903C60.7592%2033.9552%2060.7726%2032.8446%2060.6978%2032.3832C60.3449%2030.2169%2059.1481%2028.3981%2057.6253%2026.8897C57.5254%2026.9228%2057.4201%2026.9545%2057.3187%2026.9931L57.3173%2026.9986Z'%20fill='%2310529D'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_15653_6002'%3e%3crect%20width='29'%20height='96'%20fill='white'%20transform='matrix(0.250639%20-0.968081%20-0.968081%20-0.250639%2092.9358%2052.1357)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
const __vite_glob_0_203 = "" + new URL("../../assets/overview-upsell-cta-chart-with-charlie-L7ZsqcRa.png", import.meta.url).href;
const __vite_glob_0_204 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAaCAMAAAB1owf/AAAAWlBMVEUAAABcwKVcwKVcwKVcwKVcwKVcwKVcwKVcwKVcwKVcwKVcwKVcwKVcwKVcwKVcwKVcwKVcwKVcwKVcwKVcwKVcwKVcwKVcwKVcwKVcwKVcwKVcwKVcwKVcwKXnJVaBAAAAHXRSTlMADloG+qFg0bOrm1RNGJCAd3FoRe/Zyci8kjIuLCxb7jsAAACJSURBVCjP3cpbFsIgDEXRC8G29mVrfWvmP00DcREtHYHnI0A2sB7T5LEVnZh52RLHkv8DeblCnhTnnc/DSlquZXWQd+1+ZIwrwoWlqzORv7EBS4jnjbLMCUYAfaKGPlIlaIFMO5UuKGidUhp6BYwsAULOhxVYldFewagAowxFxwiNQkkKZf38DW9jKhaFyDomEwAAAABJRU5ErkJggg==";
const __vite_glob_0_205 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAaCAMAAAB1owf/AAAAXVBMVEUAAADYNjjYNjjYNjjYNjjYNjjYNjjYNjjYNjjYNjjYNjjYNjjYNjjYNjjYNjjYNjjYNjjYNjjYNjjYNjjYNjjYNjjYNjjYNjjYNjjYNjjYNjjYNjjYNjjYNjjYNjjip09rAAAAHnRSTlMA8IciAeKVlnAwD/bp1ci5on1URtyyl2dhPzccFQOiNcZVAAAAg0lEQVQoz9XNWQ6DMAxFUUNCmwBl7Dx4/8tsjCAvQd4A98OWdT5MaOr74UtaLTOPqhRByuNL7fxefs9ZoOPmlYsdmB3RLdzFOxV759BMHQv5REqWJjKV7NZEGRc4WVqpMqu4CBtdP4s8IoAujQwACAFAAI3OABAgJ4BGgJzkuVrt0+sPB0gVjZ7FTpgAAAAASUVORK5CYII=";
const __vite_glob_0_206 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAaCAMAAAB1owf/AAAAWlBMVEUAAABcwKVcwKVcwKVcwKVcwKVcwKVcwKVcwKVcwKVcwKVcwKVcwKVcwKVcwKVcwKVcwKVcwKVcwKVcwKVcwKVcwKVcwKVcwKVcwKVcwKVcwKVcwKVcwKVcwKXnJVaBAAAAHXRSTlMA8Icj45jrlzD20bqkfXJkV0sUD9zWxbaLcT43HO3asg8AAACASURBVCjP3clJFsIgEADRisRA5slZuf81ReQ1UZILpBa1+SyaDeup3OotsPa4AUIJCCUQKYVIERKKcC7dKqEIp1fmfugDRcgVXui+JFAogtB60nDxYBDh5mng6p49WQj6IyNTZcsHP0JjbQfMd8Of0I9IIqEdSOGkXZWhrpsJ6Q1+nBSNjDcDLgAAAABJRU5ErkJggg==";
const __vite_glob_0_207 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAMAAAAc9R5vAAAAV1BMVEUAAADYNjjYNjjYNjjYNjjYNjjYNjjYNjjYNjjYNjjYNjjYNjjYNjjYNjjYNjjYNjjYNjjYNjjYNjjYNjjYNjjYNjjYNjjYNjjYNjjYNjjYNjjYNjjYNjhHHlCMAAAAHHRSTlMALTzj+N0V79kkHNVD0U5IIBnqy8K3VTcSB704vhc5cQAAAJRJREFUKM/VjUkSwyAMBIeACRhsvC+J/v/ORErZcOADmYOm1F0lIccH51HJoIl0xbQNfaOHKhdT4ZKmLfnoiGrGOirixpsH3p8ySmM7+Zp4bvIrWOaH8MkrrofXlzlmOaHwE1ATd2fx4jZvXAK7/FmgmUdkgWj4hFSPUqA3ZBIQ1w2FELMm5GTB+XOxV8S5EM3nvX4AV4MVrf6KAvgAAAAASUVORK5CYII=";
const __vite_glob_0_208 = "data:image/png;base64,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";
const __vite_glob_0_209 = "data:image/png;base64,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";
const __vite_glob_0_210 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2026.5.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2025%2025'%20style='enable-background:new%200%200%2025%2025;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%236528f5;}%20%3c/style%3e%3cpath%20class='st0'%20d='M22.6,0.3H2.4c-1,0-1.9,0.8-1.9,1.9v16.3c0,1,0.8,1.9,1.9,1.9h2.5v3.6c0,0.7,0.9,1.1,1.4,0.6l4.9-4.2h11.4%20c1,0,1.9-0.8,1.9-1.9V2.1C24.5,1.1,23.6,0.3,22.6,0.3z%20M15.4,10.3c-1.7,1.7-3.4,3.4-5.1,5.1c-0.2,0.2-2.3,0.8-3.2,0.9%20c-0.5,0.2-0.8,0-0.6-0.6c0.2-0.9,0.6-3.2,0.8-3.4c1.7-1.9,3.5-3.5,5.4-5.4c0.9,1.1,2,2.2,2.9,3.2L15.4,10.3z%20M18.7,7.4%20c-0.4,0.4-1.6,1.5-1.8,1.6c-1.1-1.2-2-2.1-3.1-3.2c0.6-0.6,1.1-1.1,1.7-1.5c0.5-0.3,1.2-0.3,1.7,0.2c0.5,0.5,0.9,0.9,1.3,1.3%20C19.1,6.3,19.3,6.7,18.7,7.4z'/%3e%3c/svg%3e";
const __vite_glob_0_211 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2026.5.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2025%2025'%20style='enable-background:new%200%200%2025%2025;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%232579C0;}%20%3c/style%3e%3cpath%20class='st0'%20d='M22.6,0.3H2.4c-1,0-1.9,0.8-1.9,1.9v16.3c0,1,0.8,1.9,1.9,1.9h2.5v3.6c0,0.7,0.9,1.1,1.4,0.6l4.9-4.2h11.4%20c1,0,1.9-0.8,1.9-1.9V2.1C24.5,1.1,23.6,0.3,22.6,0.3z%20M15.4,10.3c-1.7,1.7-3.4,3.4-5.1,5.1c-0.2,0.2-2.3,0.8-3.2,0.9%20c-0.5,0.2-0.8,0-0.6-0.6c0.2-0.9,0.6-3.2,0.8-3.4c1.7-1.9,3.5-3.5,5.4-5.4c0.9,1.1,2,2.2,2.9,3.2L15.4,10.3z%20M18.7,7.4%20c-0.4,0.4-1.6,1.5-1.8,1.6c-1.1-1.2-2-2.1-3.1-3.2c0.6-0.6,1.1-1.1,1.7-1.5c0.5-0.3,1.2-0.3,1.7,0.2c0.5,0.5,0.9,0.9,1.3,1.3%20C19.1,6.3,19.3,6.7,18.7,7.4z'/%3e%3c/svg%3e";
const __vite_glob_0_212 = "data:image/svg+xml,%3csvg%20width='14'%20height='8'%20viewBox='0%200%2014%208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0.256282%200.228747C0.59799%20-0.0762491%201.15201%20-0.0762491%201.49372%200.228747L7%205.14345L12.5063%200.228747C12.848%20-0.0762491%2013.402%20-0.0762491%2013.7437%200.228747C14.0854%200.533743%2014.0854%201.02824%2013.7437%201.33324L7.61872%206.80018C7.27701%207.10518%206.72299%207.10518%206.38128%206.80018L0.256282%201.33324C-0.0854272%201.02824%20-0.0854272%200.533743%200.256282%200.228747Z'%20fill='%23777777'/%3e%3c/svg%3e";
const __vite_glob_0_213 = "data:image/svg+xml,%3csvg%20width='14'%20height='8'%20viewBox='0%200%2014%208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0.256282%200.256282C0.59799%20-0.0854272%201.15201%20-0.0854272%201.49372%200.256282L7%205.76256L12.5063%200.256282C12.848%20-0.0854272%2013.402%20-0.0854272%2013.7437%200.256282C14.0854%200.59799%2014.0854%201.15201%2013.7437%201.49372L7.61872%207.61872C7.27701%207.96043%206.72299%207.96043%206.38128%207.61872L0.256282%201.49372C-0.0854272%201.15201%20-0.0854272%200.59799%200.256282%200.256282Z'%20fill='%23777777'/%3e%3c/svg%3e";
const __vite_glob_0_214 = "data:image/svg+xml,%3csvg%20width='10'%20height='14'%20viewBox='0%200%2010%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.71432%200H5.28646C5.33323%200.00817959%205.38%200.019631%205.42677%200.0245388C5.80092%200.0638008%206.16884%200.140689%206.50557%200.310824C7.98503%201.06007%208.82999%202.26738%208.883%204.02599C8.89391%204.39898%208.67254%204.65091%208.31709%204.66564C8.13937%204.67382%207.96165%204.67382%207.78393%204.66564C7.46746%204.65091%207.26011%204.44315%207.22426%204.1127C7.21802%204.0538%207.22426%203.99327%207.21334%203.93602C7.15566%203.66773%207.13228%203.38144%207.02627%203.13442C6.61158%202.15287%205.72297%201.65228%204.67379%201.77661C3.67761%201.89439%202.80458%202.87594%202.78743%203.9262C2.77184%204.9192%202.7812%205.91221%202.77964%206.90684C2.77964%206.93302%202.78276%206.95919%202.78588%207.00009H2.94333C4.99649%207.00009%207.04965%207.00009%209.10125%207.00009C9.64222%207.00009%209.9961%207.35672%209.99766%207.90966C10.0008%209.63719%2010.0008%2011.3647%209.99766%2013.0906C9.99766%2013.6272%209.64845%2013.9969%209.14023%2013.9985C6.3793%2014.0018%203.61992%2013.9985%200.858991%2013.9985C0.565905%2013.9985%200.322706%2013.884%200.157456%2013.6288C0.0857432%2013.5192%200.0514459%2013.3851%200%2013.2607V7.73789C0.00779484%207.71826%200.0171486%207.69699%200.0233845%207.67736C0.163692%207.21603%200.439629%207.00173%200.897965%207.00009C0.965001%207.00009%201.0336%207.00009%201.1131%207.00009C1.1131%206.92975%201.1131%206.87576%201.1131%206.82178C1.1131%205.93347%201.11778%205.04681%201.1131%204.1585C1.10687%203.19658%201.35786%202.32627%201.9378%201.57375C2.48811%200.862128%203.16626%200.346815%204.02681%200.129237C4.25286%200.0719804%204.48515%200.0425339%204.71588%200H4.71432Z'%20fill='white'/%3e%3c/svg%3e";
const __vite_glob_0_215 = "data:image/svg+xml,%3csvg%20width='12'%20height='13'%20viewBox='0%200%2012%2013'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M6.4005%202.14599L2.35281%206.30195C1.12142%207.53334%201.12138%209.52977%202.35277%2010.7611C3.58415%2011.9925%205.58062%2011.9925%206.812%2010.7611L6.81252%2010.7606L10.7586%206.82382C11.0052%206.57784%2011.4045%206.57831%2011.6505%206.82487C11.8964%207.07144%2011.896%207.47073%2011.6494%207.71672L7.70385%2011.653C7.70375%2011.6531%207.70394%2011.6529%207.70385%2011.653C5.97989%2013.3766%203.18476%2013.3768%201.46092%2011.653C-0.261994%209.93008%20-0.263015%207.13732%201.45786%205.41313L5.50588%201.25683C6.73726%200.0254478%208.73377%200.0254867%209.96515%201.25687C11.1955%202.48722%2011.1965%204.48138%209.96824%205.71301L5.92019%209.86934C5.18136%2010.6082%203.98344%2010.6081%203.24461%209.8693C2.50578%209.13047%202.50578%207.93259%203.24461%207.19376L7.39781%203.04056C7.64409%202.79429%208.04338%202.79429%208.28966%203.04056C8.53594%203.28684%208.53594%203.68613%208.28966%203.93241L4.13646%208.08561C3.89018%208.33188%203.89018%208.73118%204.13646%208.97745C4.38192%209.22291%204.77939%209.22373%205.02585%208.97989L9.07327%204.82422C9.8121%204.08539%209.81214%202.88755%209.07331%202.14872C8.33539%201.4108%207.13955%201.40989%206.4005%202.14599Z'%20fill='%23777777'/%3e%3c/svg%3e";
const __vite_glob_0_216 = "data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%207.41142C0%207.13823%200%206.86422%200%206.59102C0.00822957%206.54247%200.018105%206.49475%200.0255117%206.4462C0.0691284%206.14503%200.09464%205.83975%200.158831%205.54269C0.524223%203.86157%201.38751%202.48491%202.7569%201.44728C4.46043%200.157022%206.37874%20-0.270869%208.47069%200.165251C10.1454%200.514147%2011.5066%201.39132%2012.5476%202.74494C13.6718%204.20635%2014.14%205.87019%2013.9639%207.70189C13.8216%209.18552%2013.2447%2010.4964%2012.2563%2011.6146C11.1725%2012.8407%209.82117%2013.6043%208.20735%2013.8915C7.944%2013.9384%207.67654%2013.9647%207.41155%2014.0001H6.59106C6.55567%2013.9927%206.52111%2013.9804%206.48572%2013.9779C5.39037%2013.9006%204.36579%2013.5879%203.43091%2013.0152C1.61711%2011.9035%200.500358%2010.3013%200.10863%208.20549C0.0600758%207.94299%200.0353871%207.67639%200%207.41142Z'%20fill='%23EAFAEE'/%3e%3cpath%20d='M7.50227%207.4993C7.50227%207.93231%207.50227%208.34785%207.50227%208.76414C7.50227%208.99128%207.50303%209.21842%207.50227%209.44556C7.49999%209.77753%207.29507%2010.0016%206.99605%2010.0001C6.70309%209.9986%206.49894%209.77525%206.49818%209.45012C6.49666%208.80668%206.49818%208.16325%206.49818%207.50006C6.4496%207.50006%206.40558%207.50006%206.36157%207.50006C5.73999%207.50006%205.11765%207.50234%204.49607%207.49854C4.23802%207.49702%204.03842%207.31319%204.00427%207.06174C3.97315%206.83308%204.11507%206.59986%204.33896%206.53149C4.42169%206.50642%204.51276%206.49959%204.59928%206.49883C5.17457%206.49579%205.75061%206.49731%206.32589%206.49731H6.49742C6.49742%206.44717%206.49742%206.40311%206.49742%206.35905C6.49742%205.7536%206.4959%205.14815%206.49742%204.54269C6.49818%204.27074%206.64541%204.0717%206.87841%204.01549C7.20552%203.93648%207.49696%204.17046%207.49999%204.52598C7.50454%205.06382%207.50151%205.60242%207.50151%206.14103C7.50151%206.25422%207.50151%206.36665%207.50151%206.49883C7.55843%206.49883%207.607%206.49883%207.65558%206.49883C8.24832%206.49883%208.8403%206.49807%209.43304%206.49883C9.70778%206.49883%209.89448%206.61885%209.97037%206.8346C10.0865%207.16733%209.84818%207.49778%209.48389%207.50006C8.87445%207.50386%208.26501%207.50082%207.65633%207.50158C7.6108%207.50158%207.56526%207.50158%207.50227%207.50158V7.4993Z'%20fill='%2340A88D'/%3e%3c/svg%3e";
const __vite_glob_0_217 = "data:image/svg+xml,%3csvg%20width='16'%20height='12'%20viewBox='0%200%2016%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1%207L5%2011L15%201'%20stroke='%23393F4C'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
const __vite_glob_0_218 = "data:image/svg+xml,%3csvg%20width='18'%20height='19'%20viewBox='0%200%2018%2019'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M17.7059%202.00551C17.182%201.47571%2016.6547%200.949325%2016.1274%200.422943L15.9516%200.247424C15.6222%20-0.0814546%2015.3793%20-0.0828641%2015.0509%200.245545L15.049%200.247476C11.7801%203.51635%208.51121%206.78523%205.24656%2010.0588C5.13521%2010.1702%205.04125%2010.3182%204.99004%2010.4666C4.81253%2010.9831%204.64049%2011.5016%204.46846%2012.0201C4.33358%2012.4266%204.1987%2012.8331%204.06119%2013.2386C3.98226%2013.4712%203.96675%2013.6821%204.15609%2013.8653C4.33792%2014.042%204.54699%2014.0204%204.76734%2013.9466C5.09281%2013.8371%205.4187%2013.7289%205.74458%2013.6206L5.74479%2013.6206L5.74494%2013.6205C6.33625%2013.4241%206.92754%2013.2277%207.51629%2013.0239C7.67885%2012.9675%207.84188%2012.8665%207.96357%2012.7453C11.2096%209.50723%2014.4505%206.26402%2017.6899%203.01987C17.7678%202.94203%2017.8358%202.85436%2017.9038%202.76669C17.9355%202.72578%2017.9673%202.68486%2018%202.64495V2.36352C17.9693%202.32565%2017.9394%202.28684%2017.9095%202.24801L17.9095%202.24793C17.8449%202.16395%2017.7802%202.07988%2017.7064%202.00504L17.7059%202.00551ZM16.6319%202.66609C13.5451%205.75473%2010.4583%208.84337%207.36783%2011.9282C7.27856%2012.0175%207.15688%2012.0889%207.03707%2012.1312C6.66031%2012.2644%206.28061%2012.3892%205.90099%2012.5141C5.77693%2012.5549%205.65287%2012.5957%205.52893%2012.6367C5.48541%2012.651%205.44125%2012.663%205.38542%2012.6781L5.38539%2012.6781C5.35864%2012.6853%205.32922%2012.6932%205.29589%2012.7025C5.34804%2012.546%205.39938%2012.3913%205.45022%2012.2382L5.45022%2012.2382C5.61143%2011.7527%205.76755%2011.2826%205.92828%2010.8143C5.94538%2010.7645%205.98956%2010.7224%206.03193%2010.682C6.04193%2010.6725%206.05182%2010.663%206.06124%2010.6536C9.15928%207.55369%2012.2578%204.45519%2015.3568%201.35668C15.3881%201.3253%2015.4217%201.29565%2015.4493%201.27133C15.4597%201.26216%2015.4693%201.25374%2015.4775%201.24627C15.9036%201.671%2016.3227%202.08914%2016.7601%202.52561C16.752%202.53452%2016.7423%202.54561%2016.7314%202.55813L16.7314%202.55815C16.7042%202.58919%2016.6694%202.62907%2016.6319%202.66656V2.66609ZM15.9868%209.43065C15.9558%209.19292%2015.765%209.02378%2015.5245%209.01392C15.1961%209.00029%2015.0001%209.22205%2014.9997%209.61388C14.9994%2011.1925%2014.9995%2012.7711%2014.9996%2014.3497L14.9997%2016.7177V16.9953H1.01248V3.00859H1.33008C3.98648%203.00859%206.64241%203.00859%209.29881%203.00718C9.41485%203.00718%209.53513%203.00343%209.64648%202.9743C9.86307%202.91792%209.99415%202.72764%209.99321%202.50259C9.99227%202.27707%209.85978%202.09055%209.64319%202.03323C9.54687%202.00786%209.44257%202.00176%209.34203%202.00176C6.45166%202.00035%203.56081%202.00035%200.670442%202.00082C0.16303%202.00035%200%202.16572%200%202.67643V17.3294C0%2017.8528%200.160211%2018.013%200.685947%2018.013H15.3107C15.8411%2018.013%2015.9957%2017.8589%2015.9957%2017.3308V9.68812L15.9958%209.65017V9.65016C15.9961%209.57664%2015.9964%209.50279%2015.9868%209.43065ZM1.99535%2015.1996C1.99628%2014.9746%202.12878%2014.7876%202.34537%2014.7303C2.44215%2014.7049%202.54598%2014.6988%202.64652%2014.6988H4.66631C4.67054%2014.6983%204.67383%2014.6979%204.67852%2014.6979C5.41617%2014.6976%206.15402%2014.6977%206.89181%2014.6978C7.26067%2014.6978%207.62952%2014.6979%207.99832%2014.6979H11.3181C11.3199%2014.6979%2011.3215%2014.698%2011.3231%2014.6982C11.3255%2014.6985%2011.3277%2014.6988%2011.3303%2014.6988H13.3501C13.4507%2014.6988%2013.555%2014.7049%2013.6513%2014.7303C13.8679%2014.7876%2014.0004%2014.9741%2014.0013%2015.1996C14.0022%2015.4247%2013.8711%2015.615%2013.6546%2015.6714C13.5432%2015.7005%2013.4229%2015.7042%2013.3069%2015.7042C12.4254%2015.7052%2011.544%2015.7052%2010.6626%2015.7052H10.6599H10.658H7.99832H5.33863H5.33675C4.89558%2015.7049%204.45442%2015.7048%204.01325%2015.7047C3.57208%2015.7046%203.13092%2015.7045%202.68975%2015.7042C2.57323%2015.7042%202.45343%2015.7005%202.34208%2015.6714C2.12502%2015.615%201.99441%2015.4242%201.99535%2015.1996Z'%20fill='%23210F59'/%3e%3c/svg%3e";
const __vite_glob_0_219 = "" + new URL("../../assets/logo-em-Dwc2Jt52.svg", import.meta.url).href;
const __vite_glob_0_220 = "" + new URL("../../assets/logo-mi-CN6yrjqJ.svg", import.meta.url).href;
const __vite_glob_0_221 = "" + new URL("../../assets/logo-uncanny-Bx5rB0v5.svg", import.meta.url).href;
const __vite_glob_0_222 = "data:image/svg+xml,%3csvg%20width='54'%20height='47'%20viewBox='0%200%2054%2047'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M53.9989%2013.9778V15.2382C53.9609%2015.4077%2053.9006%2015.574%2053.8879%2015.7457C53.6342%2019.1624%2052.2977%2022.1147%2049.9007%2024.5459C42.7075%2031.8447%2035.4816%2039.1109%2028.2652%2046.3855C27.4553%2047.2015%2026.5174%2047.2047%2025.716%2046.396C18.5112%2039.133%2011.2768%2031.8995%204.12284%2024.588C0.451728%2020.8365%20-0.732501%2016.289%200.429523%2011.1855C1.83897%204.99751%206.94912%200.55631%2013.2668%200.0561758C16.9728%20-0.237587%2020.3489%200.753205%2023.227%203.13279C24.426%204.12464%2025.4939%205.27442%2026.6031%206.37261C26.896%206.66322%2027.0863%206.65901%2027.3697%206.36735C28.2494%205.46184%2029.1111%204.53212%2030.0543%203.69505C33.5921%200.556311%2037.7401%20-0.59242%2042.3766%200.285711C48.1497%201.37969%2052.6339%206.0262%2053.6627%2011.8099C53.7906%2012.529%2053.8879%2013.2545%2054%2013.9768L53.9989%2013.9778Z'%20fill='%23DC3232'%20/%3e%3c/svg%3e";
const __vite_glob_0_223 = "data:image/svg+xml,%3csvg%20width='19'%20height='17'%20viewBox='0%200%2019%2017'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.44%201.14117L11.6605%205.69668L11.7809%205.94383L12.0542%205.97449L17.2575%206.5583L13.4307%209.90717L13.2106%2010.0999L13.2707%2010.3862L14.2938%2015.2589L9.67405%2012.8118L9.44%2012.6878L9.20596%2012.8118L4.58621%2015.2589L5.60933%2010.3862L5.66945%2010.0999L5.44928%209.90717L1.62255%206.5583L6.82585%205.97449L7.09908%205.94383L7.21955%205.69668L9.44%201.14117Z'%20stroke='%23AFB3BE'/%3e%3c/svg%3e";
const __vite_glob_0_224 = "data:image/svg+xml,%3csvg%20width='18'%20height='17'%20viewBox='0%200%2018%2017'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9%200L11.6699%205.47761L18%206.18785L13.32%2010.2834L14.5623%2016.2L9%2013.2536L3.43769%2016.2L4.68%2010.2834L0%206.18785L6.33009%205.47761L9%200Z'%20fill='%23F4B400'/%3e%3c/svg%3e";
const __vite_glob_0_225 = "" + new URL("../../assets/site-speed-blur-DoVih4Q8.png", import.meta.url).href;
const __vite_glob_0_226 = "data:image/svg+xml,%3csvg%20width='17'%20height='17'%20viewBox='0%200%2017%2017'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.10547%201.54468L10.0208%205.9109L10.135%206.17105L10.4169%206.20619L15.0104%206.77886L11.5969%2010.098L11.4043%2010.2853L11.4542%2010.5493L12.3539%2015.3103L8.35909%2012.9591L8.10547%2012.8098L7.85185%2012.9591L3.85708%2015.3103L4.75677%2010.5493L4.80666%2010.2853L4.61403%2010.098L1.2005%206.77886L5.79407%206.20619L6.07597%206.17105L6.1901%205.9109L8.10547%201.54468Z'%20stroke='%23B7C9D9'/%3e%3c/svg%3e";
const __vite_glob_0_227 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGwSURBVHgBzVXNVQIxEJ5ED9xkL/o8GTrIVgB2oBWAFYAV+KzAFrACpQKwAtMBe/ApeMmehPfUHWfCj8guOgsXv/eym01m5pu/ZAH+E/yLbfAoo7NfRlhr3UREQ9OBVEdJBclzo5Qa8hwnGEU1l0r0NAhB3l8tPyrQEetJBSk1jcVcadX2Q1uV6IkIKD0teplvNqhSFGcSXREB5b5dsNYUqBYXOYRfAU6BIW8tpeSmSA4BL+nh4BNSeIekqPDKv1qrsmDAzNcM7IaEBhOlVLdrHR06hxn25oYN7A5Dw1J0vejYDZYpCpGg6ocC7gJFnmd4zsZnnyuYH6Y+bB9JQmk5JePJYuFHF/EGC8Asj2Xh1o3nCJYkE4ypD+9BCDJ8Szo544UEgYTaDTF7ACkUuE13k96so+sgRQaNTVu/nGS0IITaU/VSBP7JsnGTtxQOUJJbp9ae+PgEpASwBznvlcIuvmGNO4WLur4/nYbukxHQ3b8acmi/gyN3wYXkTqHRwg/qtJVotAZ5zdJR/JiOY+9H9s8fi3+2HZYlnSFIwDdpOrZ3fKpBCJal0ZX+hLZGEcEXYnO+tK6wqL8AAAAASUVORK5CYII=";
const __vite_glob_0_228 = "data:image/svg+xml,%3csvg%20width='17'%20height='17'%20viewBox='0%200%2017%2017'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.88672%200.300049L11.26%205.71003L16.8867%206.41151L12.7267%2010.4565L13.831%2016.3L8.88672%2013.39L3.94244%2016.3L5.04672%2010.4565L0.886719%206.41151L6.51347%205.71003L8.88672%200.300049Z'%20fill='%23F4B400'/%3e%3c/svg%3e";
const __vite_glob_0_229 = "" + new URL("../../assets/syed-BxTRPvLD.png", import.meta.url).href;
const __vite_glob_0_230 = "" + new URL("../../assets/theme-products-5-CsY2njtT.jpg", import.meta.url).href;
const __vite_glob_0_231 = "" + new URL("../../assets/theme-products-6-CvgwDkIc.jpg", import.meta.url).href;
const __vite_glob_0_232 = "" + new URL("../../assets/theme-products-7-BcGvEFHc.jpg", import.meta.url).href;
const __vite_glob_0_233 = "" + new URL("../../assets/theme-products-8-BjDTGZfl.jpg", import.meta.url).href;
const __vite_glob_0_234 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAIRQTFRFAAAA1Nfe09fe1dff09ff0tfe0dXd09je09ff1Njf09Td0tbcz9fbz8/f09je0tfc0tjf1Nje19fXz8/Pz9fX09fd0dfdDl2vDlyvDlyxDlyvDluvDlytDlyvDVyvDVysDFyrEGCvDlyvDlyuDluvDlquDl2vDl2vEGCvEFCvCFivDlyvL0miRwAAACx0Uk5TAN//f3/fgO+/j5BQQBDPoI/PIBAggIDf/39/34Dvv1BAEM+gj5CP7yAQIICE4JwzAAABEElEQVR4nKWQCU/EIBCFH9UC67G1XqAF1FZdV////7Mc07K9YuIjIRPex7zJAEGsKBiSzopM5+nR18jqUWtAybnYBCQg/wEIKXfAhZRleL0cJ7qKACeWB+B6T36FRWAgKopgUt4AOylFCo5EtTGkJ8ifAszf9e2+uqt9xRIgOGcRiPH1ffR9y8mqs1oUYaiH3H/MAIESYljXoPK0QzkDopTWasWK0r3+DDzpTM8LgD7RGtAYYzcBBzgCXsZ+r4vAW0t+lzpY596BD+ea2JeIjiIMpZkUHIkOq0AgyO8BFSI+nTv0gPKf26+2O4Y2ajZkjG+/jy0tZhEIsv0hwBqjpoBFA6tnq27G+tCfBvjJffMLAwgkWFxoOwcAAAAASUVORK5CYII=";
const __vite_glob_0_235 = "" + new URL("../../assets/prettylinks-illustration-mi-DQmg-MF9.svg", import.meta.url).href;
const __vite_glob_0_236 = "data:image/png;base64,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";
const __vite_glob_0_237 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKUAAAAHCAYAAABp/40/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHJSURBVHgB7ZhNTsMwEIVn3AqVFe4JyBVYsmONAHEDuAIngCNwFI7ArkJC4giUE8QgJBBqZxgn/m1TgUQqGjVv0cSeiRvJn58nRuiIyqcjPfrU2rdnMCv8PQMVaS6DCm2lcI8RdDYYs4aFPmYuYIUQcGXst2Lg6aoYIk4bHjASMCFH2kT8GuNsEDnGQWVjDGEY2ruHd8vjb7AQ1qCPyXlhr3P60qxUNfkeHGYUILDqwwHux6dqKGTytPzo+IJYQK/WlC6OfDHU9xn8Cfgp9B74dcGeQelh8i60CFLuOg4i5zACj+3X0Gsr5WFvAp3n/FInOciVXGlQwd4EOL4/nl3QnG6hB6rXvwunaoA3+PZw+uxdb9P109YT8vzKdCKgLC6FppFOk48+zHNSjYwZH9wb+INKtws1a7YcU2ISRMEoVFL2VJIdC2Xnig/EOeSq/GGXixq7ZThGoDwpoeWXjvCg2LWffGfltl7hui+HxdUsRGLvOwGAcceK9E1XWBxS74Or92vVpVoGfwZ+Cn0o2QpoWZYdLCfHl1IrXts/WIZpASSpCSh88fnC1zlMC27Sq5uyJyMQTkac6ydOr/xpiIc8Of1IAWfrkoRX37Hg4bWWRg4HAAAAAElFTkSuQmCC";
const __vite_glob_0_238 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATMAAAAJCAYAAABezsshAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIsSURBVHgB7ZpBTgIxFED/r8ToQh1OoB7BlXGna03kCN7AeALjDbyBV2Dn1p3s9Ah4AoobCTL9/hkgMO3v4KAJjP63gvZPaWD6+NNfBOVHfDy3DqT2EYzEdgInto/7TLQPN3AfyiBKACEpDQGOofKY4HMBs/hK1/wmPOdulXiesOU524VxBBYwHofc7xz14x/jumKHIYtuQxy3AQ3xmu2TttiuVANhjem9nCZbg6SwkHxJkEkTcFiIIeL3WGwzBvfIX+yCAGILftWLWvl/iCKPyhqDWErpLRyUZYtki0Oa4FpfvIMta5tHT4v/JFaIKLNFEhEF4mUVQSbhiUOSBv9IhTEURVlrLK/johjRk6qQAQeS9QUrZLfzco2JNZdZJq/GcOeWJ3YFmn0oilIbsJvC6KZ5/NjOZfbeOX9ge16BoihKDUkdnJn8lYpMUZQaYxBajcnr7PlTHy+XIFZtC/YOZj2R9siG7QQXq55NMcZyUPkGrXMWzGa1TdwVb/z2ItXiKG6Y8Hex+F42fL87F40zQhFpnmh1uaSqTEQH4liAYrtSjfwxs9+5uEeEa1gzKJfsEhuMWUmdvIXNm4zOq+KM8So5sQVfg2qO8reQRS4f+QHhyI8RjvrIEg4lG4oXE1zjhCd1o8NJAaCVmMHnPedql9MJ+xlHQSLfqFAEmYSfOQjSaOp5G0WpDVnhELxTD4FsvQxYynhDwRZFSvmpB5q7ZiZWQnpFcne7XAD4AhaLADIbxR8GAAAAAElFTkSuQmCC";
const __vite_glob_0_239 = "" + new URL("../../assets/bg-ai-insights-em-oFvF6FhV.png", import.meta.url).href;
const __vite_glob_0_240 = "" + new URL("../../assets/bg-ai-insights-Dz0Vrjwp.png", import.meta.url).href;
const __vite_glob_0_241 = "" + new URL("../../assets/bg-cart-abandonment@2x-CY5dDLOX.png", import.meta.url).href;
const __vite_glob_0_242 = "" + new URL("../../assets/bg-conversations-ai-em-hYbhIFTi.png", import.meta.url).href;
const __vite_glob_0_243 = "" + new URL("../../assets/bg-conversations-ai-CGVtajpe.png", import.meta.url).href;
const __vite_glob_0_244 = "" + new URL("../../assets/bg-countries-DLn_BDC3.png", import.meta.url).href;
const __vite_glob_0_245 = "" + new URL("../../assets/bg-dimensions-Ce3cqC0p.png", import.meta.url).href;
const __vite_glob_0_246 = "" + new URL("../../assets/bg-dimensions@2x-Dygf0shE.png", import.meta.url).href;
const __vite_glob_0_247 = "" + new URL("../../assets/bg-ecommerce-coupons-4jHQ_ezT.png", import.meta.url).href;
const __vite_glob_0_248 = "" + new URL("../../assets/bg-ecommerce-coupons@2x-D9yDcdG9.png", import.meta.url).href;
const __vite_glob_0_249 = "" + new URL("../../assets/bg-ecommerce-product-sales-yHMKveM2.png", import.meta.url).href;
const __vite_glob_0_250 = "" + new URL("../../assets/bg-ecommerce-product-sales@2x-Cn07L8ZY.png", import.meta.url).href;
const __vite_glob_0_251 = "" + new URL("../../assets/bg-ecommerce-purchases-by-location-BmdZbgBZ.png", import.meta.url).href;
const __vite_glob_0_252 = "" + new URL("../../assets/bg-ecommerce-refunds-by-geo-CF8FERm4.png", import.meta.url).href;
const __vite_glob_0_253 = "" + new URL("../../assets/bg-ecommerce-refunds-DxdhP2e9.png", import.meta.url).href;
const __vite_glob_0_254 = "" + new URL("../../assets/bg-ecommerce-spend-by-day-DIonvSx0.png", import.meta.url).href;
const __vite_glob_0_255 = "" + new URL("../../assets/bg-ecommerce-spend-by-hour-q1WFcc3y.png", import.meta.url).href;
const __vite_glob_0_256 = "" + new URL("../../assets/bg-ecommerce-CSsv5T3y.png", import.meta.url).href;
const __vite_glob_0_257 = "" + new URL("../../assets/bg-ecommerce@2x-DqQIAx_E.png", import.meta.url).href;
const __vite_glob_0_258 = "" + new URL("../../assets/bg-engagement-pages-DHCNXcIr.png", import.meta.url).href;
const __vite_glob_0_259 = "" + new URL("../../assets/bg-engagement-pages@2x-Cy1-nvFe.png", import.meta.url).href;
const __vite_glob_0_260 = "" + new URL("../../assets/bg-forms-D88OVto6.png", import.meta.url).href;
const __vite_glob_0_261 = "" + new URL("../../assets/bg-forms@2x-DDCVkM3t.png", import.meta.url).href;
const __vite_glob_0_262 = "" + new URL("../../assets/bg-media-upsell-DnlL8gmw.svg", import.meta.url).href;
const __vite_glob_0_263 = "" + new URL("../../assets/bg-publisher-54sZqopu.png", import.meta.url).href;
const __vite_glob_0_264 = "" + new URL("../../assets/bg-publisher@2x-DV7AEtV1.png", import.meta.url).href;
const __vite_glob_0_265 = "" + new URL("../../assets/bg-queries-m7JyFwyd.png", import.meta.url).href;
const __vite_glob_0_266 = "" + new URL("../../assets/bg-queries@2x-hMqBKeO_.png", import.meta.url).href;
const __vite_glob_0_267 = "" + new URL("../../assets/bg-realtime-BaCu7kOE.png", import.meta.url).href;
const __vite_glob_0_268 = "" + new URL("../../assets/bg-realtime@2x-Bj4r4U3g.png", import.meta.url).href;
const __vite_glob_0_269 = "" + new URL("../../assets/bg-sitespeed-WMXhJeY5.png", import.meta.url).href;
const __vite_glob_0_270 = "" + new URL("../../assets/bg-sitespeed@2x-DwC9jlLe.png", import.meta.url).href;
const __vite_glob_0_271 = "" + new URL("../../assets/bg-traffic-ai-BccoVVrZ.jpeg", import.meta.url).href;
const __vite_glob_0_272 = "" + new URL("../../assets/bg-traffic-campaigns-CSLYRffe.png", import.meta.url).href;
const __vite_glob_0_273 = "" + new URL("../../assets/bg-traffic-campaigns@2x-BEsLG5lW.png", import.meta.url).href;
const __vite_glob_0_274 = "" + new URL("../../assets/bg-traffic-landing-page-Cjie3IXW.png", import.meta.url).href;
const __vite_glob_0_275 = "" + new URL("../../assets/bg-traffic-landing-page@2x-Do5N_DFy.png", import.meta.url).href;
const __vite_glob_0_276 = "" + new URL("../../assets/bg-traffic-overview-B6RFcNAg.png", import.meta.url).href;
const __vite_glob_0_277 = "" + new URL("../../assets/bg-traffic-overview@2x-W3v8TZRO.png", import.meta.url).href;
const __vite_glob_0_278 = "" + new URL("../../assets/bg-traffic-source-medium-DZqysmXj.png", import.meta.url).href;
const __vite_glob_0_279 = "" + new URL("../../assets/bg-traffic-source-medium@2x-BEWmnm2N.png", import.meta.url).href;
const __vite_glob_0_280 = "" + new URL("../../assets/bg-traffic-technology-CRCRYkFO.png", import.meta.url).href;
const __vite_glob_0_281 = "" + new URL("../../assets/bg-traffic-technology@2x-pzDGfzkl.png", import.meta.url).href;
const __vite_glob_0_282 = "" + new URL("../../assets/bg-traffic-CKOi-xGN.png", import.meta.url).href;
const __vite_glob_0_283 = "" + new URL("../../assets/bg-traffic@2x-DFMSQGX_.png", import.meta.url).href;
const __vite_glob_0_284 = "" + new URL("../../assets/bg-user-journey-CpHFTtAb.svg", import.meta.url).href;
const __vite_glob_0_285 = "data:image/svg+xml,%3csvg%20width='16'%20height='17'%20viewBox='0%200%2016%2017'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20y='0.5'%20width='16'%20height='16'%20rx='8'%20fill='%23F7F3FE'/%3e%3cpath%20d='M11%207.75C11.1354%207.75%2011.25%207.80208%2011.3438%207.90625C11.4479%208%2011.5%208.11458%2011.5%208.25V8.75C11.5%208.88542%2011.4479%209.00521%2011.3438%209.10938C11.25%209.20312%2011.1354%209.25%2011%209.25H8.75V11.5C8.75%2011.6354%208.69792%2011.75%208.59375%2011.8438C8.5%2011.9479%208.38542%2012%208.25%2012H7.75C7.61458%2012%207.49479%2011.9479%207.39062%2011.8438C7.29688%2011.75%207.25%2011.6354%207.25%2011.5V9.25H5C4.86458%209.25%204.74479%209.20312%204.64062%209.10938C4.54688%209.00521%204.5%208.88542%204.5%208.75V8.25C4.5%208.11458%204.54688%208%204.64062%207.90625C4.74479%207.80208%204.86458%207.75%205%207.75H7.25V5.5C7.25%205.36458%207.29688%205.25%207.39062%205.15625C7.49479%205.05208%207.61458%205%207.75%205H8.25C8.38542%205%208.5%205.05208%208.59375%205.15625C8.69792%205.25%208.75%205.36458%208.75%205.5V7.75H11Z'%20fill='%236527F5'/%3e%3c/svg%3e";
const __vite_glob_0_286 = "data:image/svg+xml,%3csvg%20width='16'%20height='17'%20viewBox='0%200%2016%2017'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20y='0.5'%20width='16'%20height='16'%20rx='8'%20fill='%23EAFAEE'/%3e%3cpath%20d='M11%207.75H8.75V5.5C8.75%205.23438%208.51562%205%208.25%205H7.75C7.46875%205%207.25%205.23438%207.25%205.5V7.75H5C4.71875%207.75%204.5%207.98438%204.5%208.25V8.75C4.5%209.03125%204.71875%209.25%205%209.25H7.25V11.5C7.25%2011.7812%207.46875%2012%207.75%2012H8.25C8.51562%2012%208.75%2011.7812%208.75%2011.5V9.25H11C11.2656%209.25%2011.5%209.03125%2011.5%208.75V8.25C11.5%207.98438%2011.2656%207.75%2011%207.75Z'%20fill='%2346BF40'/%3e%3c/svg%3e";
const __vite_glob_0_287 = "" + new URL("../../assets/custom-events-report-screen-DRoz-NBh.png", import.meta.url).href;
const __vite_glob_0_288 = "" + new URL("../../assets/ecommerce-funnel-DbIAlAAe.png", import.meta.url).href;
const __vite_glob_0_289 = "" + new URL("../../assets/ecommerce-funnel@2x-BfPSZdMV.png", import.meta.url).href;
const __vite_glob_0_290 = "" + new URL("../../assets/exceptions-report-BYAZOdma.png", import.meta.url).href;
const __vite_glob_0_291 = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%200.25C3.71875%200.25%200.25%203.75%200.25%208C0.25%2012.2812%203.71875%2015.75%208%2015.75C12.25%2015.75%2015.75%2012.2812%2015.75%208C15.75%203.75%2012.25%200.25%208%200.25ZM8%203.6875C8.71875%203.6875%209.3125%204.28125%209.3125%205C9.3125%205.75%208.71875%206.3125%208%206.3125C7.25%206.3125%206.6875%205.75%206.6875%205C6.6875%204.28125%207.25%203.6875%208%203.6875ZM9.75%2011.625C9.75%2011.8438%209.5625%2012%209.375%2012H6.625C6.40625%2012%206.25%2011.8438%206.25%2011.625V10.875C6.25%2010.6875%206.40625%2010.5%206.625%2010.5H7V8.5H6.625C6.40625%208.5%206.25%208.34375%206.25%208.125V7.375C6.25%207.1875%206.40625%207%206.625%207H8.625C8.8125%207%209%207.1875%209%207.375V10.5H9.375C9.5625%2010.5%209.75%2010.6875%209.75%2010.875V11.625Z'%20fill='white'/%3e%3c/svg%3e";
const __vite_glob_0_292 = "data:image/svg+xml,%3csvg%20width='13'%20height='15'%20viewBox='0%200%2013%2015'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11.3125%207.75H4.53125V4.93359C4.53125%203.86719%205.37891%202.96484%206.47266%202.9375C7.56641%202.9375%208.46875%203.83984%208.46875%204.90625V5.34375C8.46875%205.72656%208.74219%206%209.125%206H10C10.3555%206%2010.6562%205.72656%2010.6562%205.34375V4.90625C10.6562%202.60938%208.76953%200.75%206.47266%200.75C4.17578%200.777344%202.34375%202.66406%202.34375%204.96094V7.75H1.6875C0.949219%207.75%200.375%208.35156%200.375%209.0625V13.4375C0.375%2014.1758%200.949219%2014.75%201.6875%2014.75H11.3125C12.0234%2014.75%2012.625%2014.1758%2012.625%2013.4375V9.0625C12.625%208.35156%2012.0234%207.75%2011.3125%207.75Z'%20fill='white'/%3e%3c/svg%3e";
const __vite_glob_0_293 = "" + new URL("../../assets/social-media-report-BEm-c88m.png", import.meta.url).href;
const __vite_glob_0_294 = "" + new URL("../../assets/social-media-report@2x-CcLLHYek.png", import.meta.url).href;
const __vite_glob_0_295 = "" + new URL("../../assets/testimonial-avatar-2-DB0r_FKc.png", import.meta.url).href;
const __vite_glob_0_296 = "" + new URL("../../assets/testimonial-avatar-BKwcm7oS.jpeg", import.meta.url).href;
const __vite_glob_0_297 = "" + new URL("../../assets/welcome-mascot-fQ-PwOf4.png", import.meta.url).href;
const __vite_glob_0_298 = "" + new URL("../../assets/welcome-video-image-1nUiOJg9.jpg", import.meta.url).href;
const __vite_glob_0_299 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAM1BMVEUAAABhXZthXZthXZthXZthXZthXZthXZthXZthXZthXZthXZthXZthXZthXZthXZthXZvL+tLtAAAAEHRSTlMAgEC/YJ8g388w73AQUK+PCjI/1wAAAVxJREFUaN7tltFugzAMRec4CbSU1v//tXMWjwV5IApBCqrPAwpXVxyEBeTLMAzD2IUjcvMECRcqe/DABKIAjOcgQqKjDhJRV3aAVID5lgucqrQlwfmFhCkIEgRdUb6tkt90CkACUJU3JSjciUAgunPQE6EEXOt1RdgiOTyT5iQ3V3Dj4OFKHqryjgSOskFynDYkDBz54Ln8LpnEJNskHtfxNSRA68CVJG55BiZZkIxPRBx4ccPEczxB8qIf+hRkXtUlMQmQDz4FiD0vY22JIxr4SRFBCjgeOK4uyemfxFWRyHUmiaAled20JALEQhIA4D+JFM+YyXj64AGgP10i7+WJkiE7MFaXPPLu17koW+B43a/w2ZIAS4SL/eNXgcts7kzyOZIAewmbJUdoSTIHCdWZzmY0I/FQ0lGnznRW4rfd+zGwGYlifSYak5jEJCYxScYki3jwcjQMwzBq8A1quFFfpiEy9wAAAABJRU5ErkJggg==";
const __vite_glob_0_300 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAYFBMVEUAAABhXZthXZthXZthXZthXZthXZthXZthXZthXZthXZthXZthXZthXZthXZthXZthXZthXZthXZthXZthXZthXZthXZthXZthXZthXZthXZthXZthXZthXZthXZthXZvupssYAAAAH3RSTlMAzqUOZLFaI9uHTwUxevNsvDoY6ICqmEHTcsUKSCyQ4Lja+QAAAqRJREFUaN7t2NlyozAQQNFmsVhkg0BsNtj9/385YcKkxWLF4KYqqeE8p3wpWrakwOFw+CJrv6iiqwhgN7Gb4KApcthDdkNTEnnATVY4pTPg5SlcIIBT6yCur7TeKuVoGlWC/zx/YzIN8Q0pUEQ/nX6E73BkgCR6NsQE9cVfYTz0DGIkSQ6L0v4PV5AJGlyACxoKWORiCGt0OHlyFw3Ns4gDa1TjqQM0aApYIs5o6gDSaRqjI1giejT1AS2GK0dEjqY+yIxFbI/4oc0DPnkL61Uar6uyR65oQU+dzN9MiuRij3SuTQqDkB5aCHEGgDxB4rMMXk1+uSZflJolkuLkM2s0JJIlEqApp6nT6CyR/GxD3+QbEj1dLzFwrK7x61HjqeMNmCJwMr8VLpqy7yJBbHM2pkIPHwk0PcASWanGZUoyRkDgEscDzghkycLUWvg+kkU2AkaCE47pFHosq4vUt8lRmDNCglSFiKidqqOJ882EOEP9iByR/y4iz10OhljM3d+KdJWDH7QqWjoFzRVvRDxjp9PdPpFOL/1gBQu8zZEYR5J6h8F7GnuPOG+z1MEkgx0iZZ9ozsMSK6jBGIn/NlqYqU5zYmOknJ+c+FdX+Owse3Lm0m0Rz7hX1uJLzjUTOrLdZ4fqmCtCJzZvFvFZI2eauxmpAeSSbRE5XM96RdlT+CHnXV0OIt7k5OamgTdSTf6j0PYfrvrYZS5bHaF7h/mD5dL7Yxo8XWwj+ZlUdD9ji9AdXZcX/6ES7N35I0E4Hy//Ht9WaNBinz0eatqAyxx4I6TNUrfR6uH3m5dlj/8Vh7vfHolPFix7vP1iyre6hLNG+oNnckR+TCRCzGGrHDGCF9wRy8DbJigRA3iFwncoeEmu3mm8/Krvwt9G3OFwOBwOK/wB8KDVf+6OtUEAAAAASUVORK5CYII=";
const __vite_glob_0_301 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAM1BMVEUAAABhXZthXZthXZthXZthXZthXZthXZthXZthXZthXZthXZthXZthXZthXZthXZthXZvL+tLtAAAAEHRSTlMAv4AQQO+fYDAg38+vUHCP/kkt8AAAAuVJREFUaN7tmduWpCAMRUO43zT//7VTQWpKLVkt0zhP7IdeS209cBIS6IbJZDKZTI7kVZxAB2ORgi5YYSiJLskwEE+k7fmeIYowEHVpTSAaLGIeF5EcZeVhh8tpsF2wEmPP2abgARUHFSQquTAYbxMRQkUQrVnCeNRRBJgpMkWmyJHlf4ggUd6JOHiCRKR2ghaeQO8sytxgHsASpUODkTCecHDIfLJgbNjDcWsxPvReE6lTFwujDUsckT0yDN/cKSLtT7dG93gZLuKMgw3Dy91PJDKjF/sXbuxu2GFuTFD/yjCpKtCGDUtDDgvLD6vnN4bRG/FDj9Ee+pFot7IRELGmlVxa8xE8im6cJkpSYl3Pkf1wnKxtw5Z/0Hih+SfWkVIgJspWB9C+W4MVmFBezfWirZKIYr+GK+44qGTxupK2qSI1EXbW88hfPx2qXLGlNeLc11q4sPq34BpLAi/yk60EAwyT4b2CpSGKK6IJpPHzrKNGt+GSZ7fYGF9nJ7ZYmFZh728thghZQ+/eWYqKYPmCxC9CV2vRHEMZ9CGQln3Cv25lugRvHj0xliKB56K3kiqZmjDLpmHh7ixKSKQWcKTcMcSkdtF3t+uukGApf4dKggvlebtBL/dEot/MgTN5Sx7XFlE3g/L+gojf4apfaIssvSIXH/pRxBCpHpGkL8ywDZHeXT73wuw5hh5OWB6mW7Apku5uwYjRHtx3ngjNQu3sMrc7l3hvTsK5RCgeZmyu6xyp43TnbFm4+TR1GbUvO4utzSziSF3D94nl183hHZnI7o9W9E3InVs65KGTkVDxr4ti5jtU5qyQbO/uXbutZ2l0JRymWmFHnd/8x1zFVotA9Ld7GY7XANQ+gn5ZRUIrd2lKMAKzqaiEcjc/Y+T70TgV5EVpFBRs4qs8SOMrdYoKUqVoDFVZzW4vrDEO1mAVnT//AtBEj/xRyMltXWvxopZE7+EJNFUMPIetKsHBZDKZTCZN/gBVxTMQO6CX7wAAAABJRU5ErkJggg==";
const __vite_glob_0_302 = "data:image/png;base64,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";
const __vite_glob_0_303 = "data:image/png;base64,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";
const __vite_glob_0_304 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAANlBMVEUAAABhXZthXZthXZthXZthXZthXZthXZthXZthXZthXZthXZthXZthXZthXZthXZthXZthXZuRwO53AAAAEXRSTlMAgNMVCyHu5nRFpqyKO7Npmr5mhbcAAAEhSURBVGje7dfbasMwEIRhWZasxOd5/5ctKaRDu41b6A40zs6lDP5s/iulWOyHLWvDx9q6JME6fNnF31hg5v8vq0VWd6RZpGlStK3czsr2iex8ke1+ugmRcj8tQoTH/x/Bt+sOP8EukOdEzGsM8vhpIGdCHi+QsyK/WSCBBPIyyDINey9G6gBg1iIlA0DWIiMg/5MLbhuqErnifdckROrAC70CYXSMSYUwei5ChNF1CKPrEEbXIYyuQxhdiDC6G1LHNvcH0V2QHUDuD6J7IA2gwuhT8kRmUDHRvZA+UzHRHRCrMLoXYhVGd0eoMLo7QmVidG+ECqMLECqMLkCodEmFUJmSCqGSiwahMre9nvbqEEgggWiQvy6Q50RisVgsdrq9Af5teS7UZtMfAAAAAElFTkSuQmCC";
const __vite_glob_0_305 = "data:image/png;base64,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";
const __vite_glob_0_306 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAgVBMVEUAAABgX5lgX5lgX5lgX5lgX5lgX5lgX5lgX5lgX5lgX5lgX5lgX5lgX5lgX5lgX5lgX5lgX5lgX5lgX5lgX5lgX5lgX5lgX5lgX5lgX5lgX5lgX5lgX5lgX5lgX5lgX5lgX5lgX5lgX5lgX5lgX5lgX5lgX5lgX5lgX5lgX5lgX5nATxYeAAAAKnRSTlMADfKABeuGpi0PCST15bIg+rkW18c033s+KM5d7m1iV0+ekkc6GpiOaHPZgCbNAAADgklEQVRo3u2Z6W6jMBCAB+NwHwEacmdzJ533f8CtHTuGlCDHBCm74vvTVkj+mMMzlYCBgYE+OW0uWTEiJF649iGAPviTjLHC6Hx8v2KBv0gm8E7mGTbivDOMCCXjURkTZflKQZ/AaiTP2cPp/cjp4RRQas2X+1KWZqKdDRebidgRNt5wq5Wmyy8RmqYlJfiEKQBcRRQzeOAa3V7kBDokmIVWIwAwQc65KQG3jitAB0QfnkFjEVIT9JayvZ6EwjMura1KC2RMtCTW03IhI4Fn5BGvVzfJDn8gVssVQsasi8Tn4+oKP6zt5qR8iVC1JVYVX7ZvzB8hXvgkhgdmyMi1JQ6pUlDW3D/YPKaI//SiJTzAa7/RlQRYYwFAV+yXkEdCuOQLoxwU96GzM4xkLy5iAUry5yaHeXIAyZG/kWFNqGgd9y4RkdmwiSpdG7AuXgXG3bXmZyrJBTm8oY71oqQmEpXubym51oqWgYQvNE9XEtpVZmLIr6VkecIqXk0y0ZTQEVbZP0ayyesbvnYdPTPJTtzFS3MkapaUbHXlZuk6AGzFG4tIwK2SiGuZs9FTms+ulG9xKiROADUs9kC8SWYugZKnRYyVMRnVWBXccuYLx/AyWvIAlz/CBnyQo+doOFbIDOCA96Ku7V+s7xe2BJMBKYdeLENpRgYyBdNIWMrXbYvvXpGxD6Y1yam8OyO/ffva5jteNGjbJD+iaPJuEkhug7cxlsNYZLOrJIiRUTac9C3/l+0sgTASAzN/SFUmJ6XrdZbARFjIRR1GtwkqiNdZAl6JgmL//eewXU7dGAWLSFi6SiDPsJnx1hOxGG3G8P73lj3axE2OzAOLSIuehJaoKKm4iGI1+k78S8H1nrLoSPz6hFWbcjHhvbxJiMpT4citPl9Ji4aERa4g1j19zm4JN/zZ2jnvdnt7mYJCWQwk2sxH0tKTJN3ULAYSqw3gnPgIDpXlVYlD2nBAbDqLWWJpeVESYDuB2P0+1Cw9RGLJm5wKS9RDTYREWeIeuktKpKVM+5IoS5FDb+mSlqkP0F/hFf20cF3ykZG8XpP3T+F/SRLabYRGEj9CRcTXbxsjaiIJ6g3ajwRsorChh3Rxag3aQ+ENMI9EH0OJQ17BAfPu0if42EherMlHd9d/IKFgCkX0NSU+mOIjUv3PTWaEGSbaH87MIan+J0BDxu4cBgYGBgY+jL9tSRnKpKBuYgAAAABJRU5ErkJggg==";
const __vite_glob_0_307 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAM1BMVEUAAABhW51hW51hW51hW51hW51hW51hW51hW51hW51hW51hW51hW51hW51hW51hW51hW52pZCvGAAAAEHRSTlMAgEDvEJ9gMM9Q368gv49wMr3HGwAAAwlJREFUaN7tl9ty5CAMREHiji/9/1+7RngWe7MzrmBnH7Y4D0mZOAjUjSXUYDAYDAaDwf/EgkJQP8oMwajnMdqpCjBrC5ASvJ3UU7gE1CgeWNUE6PrEgH5mU1RT5CWcbIKRZX8BG8k9kSoAbAH2VXcRJu0xcgLwRJRQdHYAR5uAeRvRAGdnUTaUgSd0WSVVFpVlG4mohE2P9IyfJ5lZosyayrINrZaBtMWg4oQnCCKBsu5kpGh9GZRsPZWvN3AR6Q4xVnvlkq+/Q0CqC/BrnxYMtlGcGvw7f2fxtl9Sp5MtClximI9vcUIhdZx9AkLenXq9lrD90l1ncFLGZfA5hic6D2SEdXNY6vBZlGRvmOkg0xJQSJbaoLwg0tkeSTieVbZozP7skirdt9F/fPuIS+51JNKi1dGznrewpquM7J+q9jTT77zhmJ3I7anDYNzWel47yXNL7XLz0yi003aI6ptLXFct7Cdkul6/xW2yuWhMeH9PfxsLWD0DDOSrxgTzJDW9xyhUnF8OZvwsRqL9KPreIMow8mcxXq7sYQ+iMtK7VPEhiL8VZAG/FV2Wr1+nYOkQfg+SPlVlL6JEieFUtybrRQ8TxV4MWPo2ZW4qPR9KEfqIZtzk2pkizU3ypK6ZSHAtaRFApBMB0HR4sWG+2dCHQwkL07lyNgct5YT3IR3XqRy7ZsNablsQJtWD532eFgVplYY7Zpz/tnReU6iV1PMXgSEs5lyqe/quWOb5UgYSdr7cSCN3lGDDte+M9vSvftUbdNpEdqZmM/Z0RDpaxtUCvRwMF9F1iUh44S7sseN7lK9L3A3woTy414Z7mGuy/QdJ/Wuf0YqC/bj3CTOlZXiEDMiOzB+7qH9jdZu2Wge2blI7tCRRyhXj3mefx0OQz5dPELSswD6TLd7vBtiY5c69EYqvnsqXAWD3mk+zTGnB0UjcqMuPB4IsECQrq1wMQz3c1O5c95lmiVEgWXdRo+Bqa/MQlIISZH6JJGjW6kFMu3gXpsPw81gUWP0opAtODQaDwWAwGPwjfgH3i0XNTMmXjwAAAABJRU5ErkJggg==";
const __vite_glob_0_308 = "data:image/svg+xml,%3csvg%20width='58'%20height='57'%20viewBox='0%200%2058%2057'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.7175%202.06507C14.948%208.90662%2017.3512%2015.3086%2020.7295%2020.8432C24.1265%2026.4242%2028.4566%2031.1651%2033.4684%2034.7021C36.2725%2036.6869%2039.296%2038.295%2042.4715%2039.4238C43.429%2039.768%2042.8445%2041.6113%2041.8869%2041.2671C36.0019%2039.1167%2030.6755%2035.5205%2026.1169%2030.8695C21.6189%2026.2376%2017.9424%2020.4868%2015.3458%2014.064C13.8952%2010.4392%2012.8108%206.60587%2012.0808%202.60095C11.9236%201.415%2013.5183%200.90638%2013.7175%202.06507Z'%20fill='%23338EEF'/%3e%3cpath%20d='M17.0246%2036.0939C25.7877%2040.0884%2035.736%2041.5622%2045.3266%2040.2509C45.0619%2041.1725%2044.7413%2042.0593%2044.4766%2042.9809C39.2581%2036.541%2034.9676%2029.3606%2031.9054%2021.7047C31.5699%2020.8742%2031.7787%2019.9177%2032.5882%2019.4914C33.3069%2019.0861%2034.4659%2019.3437%2034.8015%2020.1742C37.8007%2027.5578%2041.8467%2034.508%2046.8766%2040.7526C47.5612%2041.6457%2047.3738%2043.3142%2046.0266%2043.4825C35.5426%2044.8572%2024.8962%2043.2582%2015.2253%2038.8523C14.4293%2038.5108%2014.282%2037.2544%2014.7004%2036.584C15.2793%2035.7808%2016.1728%2035.7175%2017.0246%2036.0939Z'%20fill='%23338EEF'/%3e%3c/svg%3e";
const __vite_glob_0_309 = "" + new URL("../../assets/wpforms-Cuk4Z7aO.png", import.meta.url).href;
const __vite_glob_0_310 = "" + new URL("../../assets/woo-insights-ecommerce-report-image-COB42oRo.png", import.meta.url).href;
const __vite_glob_0_311 = "" + new URL("../../assets/woo-insights-save-60-badge-DPP-r2r1.svg", import.meta.url).href;
const __vite_glob_0_312 = "" + new URL("../../assets/woo-insights-sessions-revenue-CnxsdiTy.png", import.meta.url).href;
const __vite_glob_0_313 = "" + new URL("../../assets/woocommerce-DV6kDMP6.png", import.meta.url).href;
const __vite_glob_0_314 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAYOSURBVHgB1VdZbBNXFD0zYzt2bMd24jjO5pIFQkM2QIQsBUUlSBQQhZAUqYUoRKWt2g/UVuoHX/xUqB8tFRJFQkKCItRKSAlfhVZVVShbgbClSYAEUBKy2Y6X2LHxMjO94yyEOIvjn6rXGvstd+4979z37n0G/mNhEKeU72pcAcgqXiJ06WHrWSviFBZxSGX9/u0yjv2nID/jjIbjHlU2NBUjTlkygMOHD7NCmD/63s5aefPeHVhV9IZBFMSvEKcsGcDFB0+rdDptfllJAUZdTihkCui1mr0Vu5s+QRzCLUW5bGeTXsEx364tXbkiPzcLfp8fuTmZCAQD6O0d2ZhduFqpXLbhhqPnFh+rzZgBVDc0F3AQr2WYU8u31FYiUaWESpVIvyosz30DWZmmhP5Baw3Le7bmFC1v7evs9MViN6ZTUL7rsxSW8d5dU1pgadi5CYIgzq0oijj90y/oedZ/2901/lZn5/ngYrZj2gMsO34kOyuNnNfO71wShkHT+9tg0GvXJRWqP0cMsigAafUCzze9+85GxCIsy2Lr5iqIvHCwoaFh0RAvCkDGjh9K0mrk4yEv7nQ8QDAcmld3bNyDW+33oNElgJOx6f2C5qPF7C8IoKqu6WtBFL+g2GPP29uQlKiB3emYV3/EbsMKSw62lG/AMouZNph4fP3uxua4AFTUN9WJDA4xFNcr1+/hWe8ALOZMBIMT+0qlSIAlzQKLKYtygRySXoDm8jIsuHT5b/T2jUhqDAv2REXd/jVLAlDT0KCBiOMRBZYBz/O0wUUIohCJsYyToSS/GOkp6Ug3ZqIkr4hWSx/SJcYgCoJ0ICKgSBTExEkaYGIG4OcTPyZts9ROUMhRta4UK3OXweVxQyGXw6DRweOyguloAUtP6KUHGpUaSoUCzjE31pcVYy2FbfrEMFhbUf/h9pgB0GDTVNvnD6CxfisRIqBvaACaxER43Fbo/voOip4rkNOj+uMbhAIeqJVqPOp7igJKTFXrSmjRwrRNRgzvjwnA+roPsoi7oqm+ROWdx+34ofUcZBRrDW1Epd8G33BvhOqAz4OgfQCC9TmMhuRIfTj68ymM+T0UulcAiIVNNTU1stn+ogYYTlGNGclGSrkrc/PRT6vXJ+kiY06VGfmp2WQzDJlCCbs3gIAxHzKRR2F+AUKhEIExEOCZaYBJ8ibnWIA/ny3IAHjRNLObkpIU2YDpqWlQJSgnFwN064vgG3PAOdyHwbxaomqi/ug02ggTEltqteo100oGqbPdRQOYNWJM1tNmEqLUXOZiDHoCcMiT4csoipqX3klNMWAxiQoBy8MmzgBhMOgiDMwWRuAxXP2pdE4j7bkAGFN06O0fmh4LIRCVxaIYYEKK69MdcmxM1kXOvt3pnZhnpLwwAYiXq8BzikmHr0DaRr3g6J2UZN0My6JXNTr4fLa/qGLR/6TNnV1YuodcpUrVzTMexqibh9sbRJpRA9eYH4EQD5VSjjDtcin5SKCG7Z4IU9LOv9sxiO7nVrR3PIbPN3ktEJlfr168cG62v6gQTPLwI30dkVoavQEqrQ48Ufr71W4qMhx0WiXyLMnoG3REEpOZgPX0OuH1+iMgNDo9ZAmAmt6z2WwTVLM4PZenORNRkB0/QYbskjGtVisBIgMckuhoqekoBngW97uG4PEDdncQ97qGITDyiGMtAZYYkR61RjtF/8PNRcsuzOVrzno91NkZyC5aPUBmdrMcB1Na+uuoaTlyKkbSHEd1QWpP5v1XHFL/SVcH3Ru9YVZk6s6e+L4/ZgCSvOi83579Zpne5XRUhOgOYDKZEatIzN29fRM26zABEQ9ebznTMp/ugjeWF133f7OsKktyOZ2VdusI9MkpSJhMRnOJxIzTYcftm9fgdjl4YvDLGy1nji3kI6ZLaUVd4x6GYY/R2TYZjSaYMzKhp2ynVKqoSInw+31wjo5icKAfY26XRH83BP7AjdazlxezHfN/w+odzVpRLhyg076POC6lus9MJShp5RTyMHVvkslToV7Fuba2k6FY7Mb157Rq1z6TyMnKCUA6oRBYjul7CcWttvMn3fi/yb/Ib0a0qVXkWQAAAABJRU5ErkJggg==";
const wpconsentFeatureImage = "" + new URL("../../assets/wpconsent-page-feature-image-ry1szA4S.png", import.meta.url).href;
const __vite_glob_0_316 = "" + new URL("../../assets/wpconsent-promo-banner-lZdTUIfp.svg", import.meta.url).href;
const __vite_glob_0_317 = "data:image/png;base64,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";
const __vite_glob_0_318 = "" + new URL("../../assets/behavior-funnel-Bqu0VQSD.png", import.meta.url).href;
const __vite_glob_0_319 = "" + new URL("../../assets/behavior-section-bg-C1O08P4E.png", import.meta.url).href;
const __vite_glob_0_320 = "" + new URL("../../assets/dashboard-preview-B7S76NX3.png", import.meta.url).href;
const __vite_glob_0_321 = "" + new URL("../../assets/devices-summary-left-icon-gX_b0Ok3.svg", import.meta.url).href;
const __vite_glob_0_322 = "" + new URL("../../assets/devices-summary-right-icon-BoEqE0Bn.svg", import.meta.url).href;
const __vite_glob_0_323 = "" + new URL("../../assets/ecommerce-cart-image-Ci8PdgXd.svg", import.meta.url).href;
const __vite_glob_0_324 = "" + new URL("../../assets/em-behavior-section-bg-DvwjdNKA.png", import.meta.url).href;
const __vite_glob_0_325 = "" + new URL("../../assets/em-dashboard-preview-BOd2zFLo.png", import.meta.url).href;
const __vite_glob_0_326 = "data:image/svg+xml,%3csvg%20width='87'%20height='105'%20viewBox='0%200%2087%20105'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.68652%2051.4427L21.1286%2051.5326L19.8779%2043.7679L6.00109%2043.6126L8.68652%2051.4427ZM15.4049%2071.0419L24.2841%2071.1454L23.0565%2063.5087L12.7944%2063.4379L15.4049%2071.0419ZM60.5953%2063.7663L50.9626%2063.7009L49.5361%2071.4315L57.3417%2071.5282L60.5953%2063.7663ZM54.5718%2044.1726L53.1658%2051.7642L65.6024%2051.8583L68.7538%2044.3374L54.5718%2044.1726ZM35.8951%2051.643L35.9864%2043.9546L22.3957%2043.7992L23.6465%2051.549L35.8951%2051.643ZM35.7561%2063.5973L25.573%2063.5292L26.8006%2071.1713L35.6662%2071.2762L35.7561%2063.5973ZM38.2426%2063.6109L38.1513%2071.3048L47.0115%2071.4043L48.4448%2063.6845L38.2426%2063.6109ZM50.6534%2051.7479L52.0513%2044.1426L38.4633%2043.9832L38.3789%2051.6566L50.6534%2051.7479ZM50.1751%2054.3352L38.3475%2054.2439L38.2712%2061.1367L48.8985%2061.2103L50.1751%2054.3352ZM64.5165%2054.4374L52.6889%2054.3489L51.4163%2061.228L61.639%2061.2961L64.5165%2054.4374ZM21.5455%2054.1227L9.57349%2054.0382L11.9496%2060.9555L22.6559%2061.0263L21.5455%2054.1227ZM25.1711%2061.0468L35.7902%2061.1203L35.861%2054.2276L24.0661%2054.139L25.1711%2061.0468ZM0.593445%2039.7064C1.19975%2038.863%202.17118%2038.3902%203.2489%2038.3984L70.9201%2039.1805L75.1806%2029.0573C75.7732%2027.6444%2077.2583%2026.6689%2078.787%2026.6825L87%2026.782L86.9401%2031.9566L79.6113%2031.8681L55.734%2088.7213C55.1413%2090.1369%2053.6535%2091.1138%2052.1166%2091.0961L17.9513%2090.6996L18.0017%2085.5222L51.2978%2085.9105L55.1727%2076.677L14.3762%2076.207C12.8107%2076.1906%2011.3079%2075.1061%2010.8092%2073.6251L0.187424%2042.633C-0.164093%2041.6138%20-0.0169449%2040.547%200.593445%2039.7064Z'%20fill='%23F35C7A'/%3e%3cpath%20d='M26.6084%2092.7408C29.8293%2092.7776%2032.4085%2095.4194%2032.3717%2098.6376C32.3349%20101.853%2029.6985%20104.428%2026.4667%20104.394C23.2458%20104.352%2020.6667%20101.717%2020.7035%2098.5013C20.7457%2095.2832%2023.3821%2092.704%2026.6084%2092.7408Z'%20fill='%23F35C7A'/%3e%3cpath%20d='M46.243%2092.9697C49.4625%2093.0038%2052.043%2095.6429%2052.0089%2098.8611C51.9722%20102.079%2049.3358%20104.661%2046.1094%20104.616C42.8858%20104.582%2040.3121%20101.943%2040.3462%2098.7275C40.3857%2095.5121%2043.0221%2092.9302%2046.243%2092.9697Z'%20fill='%23F35C7A'/%3e%3cpath%20d='M20.1926%203.92098C21.6273%201.69334%2023.9408%200.35267%2026.8919%200.0461136C27.1957%200.0120519%2027.4955%20-0.00429784%2027.8129%200.00115205C31.076%200.0515634%2034.4972%202.03668%2036.045%205.34885C37.7045%202.08165%2041.191%200.219147%2044.4596%200.272284C44.7798%200.276371%2045.0836%200.303621%2045.3915%200.343132C48.3208%200.754598%2050.588%202.16884%2051.9518%204.44008C53.565%207.12006%2053.7121%2010.7946%2052.3551%2014.5224C49.4231%2022.5214%2036.6744%2030.4156%2036.1308%2030.7508C36.1254%2030.7562%2036.1077%2030.7467%2036.1022%2030.7562C36.0968%2030.7698%2036.0886%2030.7726%2036.079%2030.778C35.9523%2030.8407%2035.8243%2030.8638%2035.7003%2030.8638C35.6689%2030.8693%2035.6485%2030.8802%2035.6376%2030.8802C35.4809%2030.8802%2035.3256%2030.8407%2035.1893%2030.7671C35.1893%2030.7671%2035.1784%2030.7467%2035.1635%2030.7412C35.158%2030.7331%2035.1444%2030.7331%2035.1417%2030.7331C34.6117%2030.3815%2022.1328%2022.0963%2019.4623%2013.9815C18.217%2010.2115%2018.4868%206.55055%2020.1926%203.92098Z'%20fill='%23BC2967'/%3e%3cpath%20d='M26.9859%200.95506C30.9139%200.547681%2036.0545%203.70316%2035.9891%209.34788L35.6485%2029.958C35.6117%2029.9375%2022.9339%2021.5652%2020.3411%2013.6955C18.2225%207.27284%2020.7594%201.6145%2026.9859%200.95506Z'%20fill='%23DB3D8C'/%3e%3cpath%20d='M35.9863%209.37352C36.0735%203.707%2041.3327%200.715016%2045.2539%201.26137C51.4504%202.11564%2053.8116%207.853%2051.4926%2014.2048C48.6233%2021.9927%2035.6485%2029.9632%2035.6485%2029.9632V29.9577L35.9891%209.34763C35.9891%209.35308%2035.9863%209.36126%2035.9863%209.37352Z'%20fill='%23BC2967'/%3e%3c/svg%3e";
const __vite_glob_0_327 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAAEhCAYAAAAK6P5BAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA8LSURBVHgB7d1dbFRlHsfx58x0mNJKO2zoVoHQBhADMdALkHBB7SZCNjEmKnKxCWY12cvNai83rhFjjJfsS/ZuLzRrsheouEFvhES3XBBeNlsbA4qWUGKrWKJtsWU67czZ8z/lDOeczrQzs//BfabfTzI658yLJsyP5+U85/k7pgZHj53IpJJzTxqTfNR1Cz2OcTKuMd0GWIEcx3mzqZoPvPaX432O67xi3Hyf6ya8M658jf9PYCWrKEjFABVMnwGwyJJBki5cU7LgBch9Mf5a18YOs23zA6ZzXca0t7WaTFuLAVaKoUsj5uTpi8XjskF649iJ7nwif8Lrt/UE59LplHmkZ6v3eNA0e88BLCgZJAlRIVH42IQmELZtXm8O9u7yWh9aHiBuUZCCELnG7Q7OHejd6bdCAEqLBEnGROEQSVfu2ad7TWdHxgAoLxE+kImFcEtEiIDKFIP0+l9P9Bj37uycdOcIEVCZuy3SfOFE8HTn9i7GREAV/CC9/ud3nwt36Xr37jAAKucHyQvRr4MT0hoxxQ1UJyHT3V6S+oITtEZA9RKFZKEvOJBlP7RGQPWka/docCBr5wBULxGeZJAFqACqlwgvSpVV3ACqJ127YjPErRBAbRIGwP+MIAEKCBKggCABCggSoIAgAQoIEqCAIAEKCBKggCABCggSoIAgAQoIEqCAIAEKCBKggCABCggSoIAgAQoIEqCAIAEKCBKggCABCggSoIAgAQoIEqCAIAEKCBKggCABCggSoIAgAQoIEqCAIAEKCBKggCABCggSoIAgAQoIEqCAIAEKCBKggCABCggSoIAgAQoIEqCAIAEKCBKggCABCggSoIAgAQoIEqCAIAEKCBKggCABCggSoIAgAQoIEqCAIAEKCBKggCABCggSoIAgAQoIEqCAIAEKCBKggCABCggSoIAgAQoIEqCAIAEKCBKggCABCggSoIAgAQoIEqCAIAEKCBKggCABCggSoIAgAQoIEqCAIAEKCBKggCABCggSoIAgAQoIEqCAIAEKCBKggCABCggSoIAgAQoIEqCAIAEKCBKggCABCggSoIAgAQoIEqCAIAEKCBKggCABCggSoIAgAQoIEqCAIAEKmkyDuDE+4T0mTTaX848za1pNe1uL6ezIGKDerA5SdnbOXBj8ypwb/NLMes9LkTD17t1hNm3oMBnvOVAP1gbpvBeggXOXygYoMDk1Y06euugH6uD+XWbblvVGmwRaWkTUpmtjh7GdlUE6c+6yH6JqSKCOf3jWb532791uNF0ZHjMnT180qM1LvztkbGddkMqFyJ13TO77pClkF+ZPmtbkTWptftH75LPN6ZTZ07PVAFqsCtLI1+OLQiQBmhlZZbLX06Yw50ReS64umPT6nGndMhs5/9HAp96YaR0TEVBjVZBOnv535DjvtT6TF1pN/nbpWXw5PzPcbHLfpUxmz7Rxmtzia6cGhsyRQ72mHiTc87e4slBOqZ6C7awJ0hdXx7xxznTk3NR/WsqGKGz+VtJMfbbatPfMFM+NjI77LVw9BrqzXnBvef89lNZxcNI0Gmv+2pQBfVh2bJUfkEpJqzT3Q/TvjStXxwygwZogjYzejBxnx1KmWtnR6GfkAi6gwZogxbt1c99X3yuNt0g3bnLtBzqsCJJcAwqrZFxUSvxz2WUu5gKVsiJI6XS0SybT2rUIz9qJ5nT13UOgFCuCJD/4eJhSP5s31Yp/pn1NqwE0WDP93eVdQL1y9Zvi8aq181WPk9I/j3blOjvaTT2kvP83uW6FlcOaIO3c3h0J0uqunD8FXul4SZYMNa+fi31nl6kH6XrW2v2EnayZtZMLp+HunYx32ndPV/SDlfe09UQnLGQ1eCOsOsb/B2uCJOMkuQ0iTAIiYWpenyv/Oe+1tft+XBS4Jx7bbQAtVq2127mjy3zrXfuRm/kCEpA1D982LVtmTW68aaGrN++Y5J2uXHymTshtFJqtkXzXkafrs24PdrDuNoqDvbv8m/mGLo9EzkugVm/KLft5CZHck6RJuont3H27olm5RPmJA7urvjlPxlcHeneqhwgQ1t5qLoHY5c3kyf1J8dYpTAK0y5ude6TnQVoN1I3Vm59IMKR1OuB19+SWCFk7N3lrYXaufU2L6VyX8ccvrGBAvTXEdlwSlIe2rPcfwE+B2zgBBQQJUECQAAUECVBAkAAFBAlQQJAABQQJUECQAAUECVBAkAAFDVP6Usg+dcFedbL+jsWquFesD5Ks+pY9vGVjlInYbqxStqVzXbvZv3cHZS9RV9YGaWJqxnxw+qIfpHIWCjRP+PcryY5BBAr1YmWQJDxSxnK2ii2HJUxSyuXw4/soMAZ11k02SHmXt98bKBkiKfBVyC48SpE9xOWzFE6GNqtaJOnOfXRmaNH5uR+SZnq42eRvJSPlL5s35PzdhZLNd7fikskIac1+86vH1CYjpKWT2raoTSPswGRVkM6cu7SovMv0cNovb1lKdnSV/2jZko3UkZWW6fzgl2oboUxOziw5VkPjs6ZrJ61RfJOTpUIUJu+Rgs1hsjceZV2gxZogSQsSJsWOKwlRQN4rxZsDWX9vvGsG0GBN1+76aLTrdPt62lRDJiJue63SfQ9l737n1zf9bbq0BWM2lJbZ3XiVOqwJUrzeqxRXrpb/mVCQvq1T6cv87WRNpTlhLyu6dvGxjD/NPeeYasVLwMRLagK1WlGLVkttqA9osLL0pQSilkJeqbZ85Fh2YgU0WNMi3R/70cfLWFYiHaujxLo7aLEmSJs2roscN2/KmUSq8q6atGCptdEWaRtbHEOJNVNLMk193ruIGqyxk2C0ejNwtz5bXdHnpfRluDsoG/DXq4asBHxVDVXXYS9rgiTjpEd6tkbWtElZS/nR/vh5c9mizEH9WCnGHFbPOkmrOub8B1YOqy52SKs0dPl6ZL2d/GDb78t7F0GbzOxYqhgoCU7KaxVKlb+UUi/1ao2wMlkVJGmVnn261/z9vYFImKTVSa7OLVmUOeDXVKIQM5RZd/ldglAqTJWQluiZx/ep7+UgU/OaxZ1hHyvXsUiYfvvcL++Uvby+bKDkh967d3td1tUJipzB6gVhMmEgj6FLC7eR37g5WZzV81uJDevMts3raS1Qdw2xsnLnji7/AfxU2CASUECQAAUECVBAkAAFBAlQQJAABQQJUECQAAUECVBAkAAFBAlQQJAABQ2xaDUofzkyerO4+ltutZCyl6z+xr1gdZBkMxS5J6lU0TGpJysBk/dIqOR2C24vR71YGaRK6seGydbEJ08tvP9A7y6qnUOddWOkiTvlK2sp7CX1lf72j9PURYI661qkt0vs1SCb6mfHUib3fZOZv5U0iSbXJFYX/N1YZRehMGmd3vngrDlySK/cotSk/cIbo6E29dwa7V6xrPTl5UUhklpEU4OtkeoU/jaQXqCkjMvM8OJ97eS2dKnYt6dnq9EgJWeoIVu7RgiSVaUvZWIhbNYLysSF+5Ys8SL73E1caPVbqjD5Lrp40GJNkK7HxkRSxnL6i8qq4knXb2qwxf93QEIUrwII1Mqart3Q59FCzDPD6bLbFJci75XSly2h6uYyrpHrTNrm/W4lFfvKCf8ZNApr/rS/HY+WqayltGTuhybTYu7+IdYy81cJCRI1ZMtrxCBZU/oyfNFVumjVtEaB+anoOGmWMRKUWBGk+A++lvqxIjxGEkw2QIsVQWqPVdaTTfOrKTIWiJd2aadiH5RYM2vX3tYaOU7GQlGJeJAyse8EamVNkLZtfiBy3FrDgDU+yGURK7RYE6SHYtPUqbXzpqWr8jBJ8OKV0Ls2cHsFdFgz/S33FMkPfyR0EVVqyIqZkfSSn5UQtWzJRs5Ja1SvMZIUPKuk6Bkah1Wrv584sNsv1xImYVrz8O2SxY/lXGbP9KIQBfcnAVqsuvwelK1858OzkfNBCxBcX5IZPakbG68dKySIhx/fx4wdVFl3P5JUxpPylekSN+dJcGRmLtFcKBsiKZvZ2ZExgCYrF4RJmO7veMycrOIuWRljSWtWj5aIQmewdmWlBOKI17pIkOTOV1mAGl8BIS3QLm9SgQ1QUG/WL1H2Z/OktTELS37kxr90epW/LwN7M+Beaai1/n54GP/gJ8AGkYACggQoIEiAAoIEKCBIgAKCBCggSIACggQoIEiAAoIEKCBIgAKCBCggSIACggQoIEiAAoIEKCBIgAKCBCggSIACggQoIEiAAoIEKCBIgAKCBCggSIACggQoIEiAAoIEKCBIgAKCBCggSIACggQoIEiAAoIEKCBIgAKCBCggSIACggQoIEiAAoIEKCBIgAKCBCggSIACggQoIEiAAoIEKCBIgAKCBCggSIACggQoIEiAAoIEKIgEKTs7ZwAsL5vLFZ8XXHcy4RhzrfgiQQIqEs2KO5EwjjMYHH53c8IAWN6N8VBWCs5gwmuWRoLjka/HDYDl3bg5FTqSFqngvl98cXzSAFjaxNSMmZyaLh6+3H/4k0TeNEnXzm+nRkbHaZWAZVy5Oho6cv8l/0wc7X9KQvTP4PTQ5REDoLzzg8PF504h4ffo/Olvt+C+GbwgQZKmC8BiQ5dGit06xzjXXuo/9KY894MkfTzv7CfBmz84ddEAiJIGZuD85bsnCubV4GnxgqyTT/YHz2WsdGHwKwPgrjPnLpVsjUQxSC/1PzXoGvOn4PijgU8ZLwF3nDl3OZKHQsHtD78eWSL08gvPvBju4p3ywnRleMwAK5mEaMBrjQLenMKrL/c/8374PYsWrSbzyeel2ZLnsgzi+Idn/S8CVhr5/Z8aGIqEyHGc9705haPx9y4K0u/7n7qWKCR+EYRJyBed9CYgmM3DSiHXU99+d8Cb6v4yfHpwLp94vtT7nXJf9MaxE92FROFj17jd4fM7t3eZ/Xt3mExbiwEajQTojDczt2hhQsF96w/9h58r97myQQq8duz4USfhvBI/37Wxw2zb/IDpXJcx7W2tBAvWka6bPL4bn/Bnqq9c/cbrdU3H3zbhhehVL0R/XOq7lg2SKNc6AQ3Nm3iTOQMZ7iz/1ip4rVNfIpl4wXXdJw3QmCa8y0BvyWJuf6FChaoKUsBvoUyhz024fd43dDmu6fb+490GsMuEI103xxn0byfywiOLuO+sP63KfwE1GfQ4VC7G+AAAAABJRU5ErkJggg==";
const __vite_glob_0_328 = "" + new URL("../../assets/em-google-performance-bar-left-icon-Dhe9nwji.png", import.meta.url).href;
const __vite_glob_0_329 = "" + new URL("../../assets/em-hero-image-C8H-yg5V.jpg", import.meta.url).href;
const __vite_glob_0_330 = "" + new URL("../../assets/em-thankyou-bg-Bmhmoyy_.png", import.meta.url).href;
const __vite_glob_0_331 = "" + new URL("../../assets/form-insights-bar-left-icon-CYSAcDYA.svg", import.meta.url).href;
const __vite_glob_0_332 = "" + new URL("../../assets/google-performance-bar-left-icon-7ZPbul8K.svg", import.meta.url).href;
const __vite_glob_0_333 = "" + new URL("../../assets/hero-image-LP6tVZa-.jpg", import.meta.url).href;
const __vite_glob_0_334 = "" + new URL("../../assets/thankyou-bg-CXOBcxig.png", import.meta.url).href;
const __vite_glob_0_335 = "data:image/svg+xml,%3csvg%20width='685'%20height='164'%20viewBox='0%200%20685%20164'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20style='opacity:%2020%25;'%3e%3crect%20width='33.3515'%20height='62.476'%20transform='matrix(-1%207.59524e-08%201.00625e-07%201%20424.282%20101.524)'%20fill='%23FBFCFF'/%3e%3crect%20width='33.3515'%20height='62.476'%20transform='matrix(-1%207.59524e-08%201.00625e-07%201%20684.909%20101.524)'%20fill='%23FBFCFF'/%3e%3crect%20width='33.3515'%20height='126.904'%20transform='matrix(-1%207.59524e-08%201.00625e-07%201%20380.823%2037.0957)'%20fill='%23FBFCFF'/%3e%3crect%20width='33.3515'%20height='126.904'%20transform='matrix(-1%207.59524e-08%201.00625e-07%201%20641.451%2037.0955)'%20fill='%23FBFCFF'/%3e%3crect%20width='33.3515'%20height='103.476'%20transform='matrix(-1%207.59524e-08%201.00625e-07%201%20337.366%2060.5242)'%20fill='%23FBFCFF'/%3e%3crect%20width='33.3515'%20height='103.476'%20transform='matrix(-1%207.59524e-08%201.00625e-07%201%20597.993%2060.5242)'%20fill='%23FBFCFF'/%3e%3crect%20width='33.3515'%20height='163.999'%20transform='matrix(-1%207.59524e-08%201.00625e-07%201%20293.907%200)'%20fill='%23FBFCFF'/%3e%3crect%20width='33.3515'%20height='163.999'%20transform='matrix(-1%207.59524e-08%201.00625e-07%201%20554.535%200)'%20fill='%23FBFCFF'/%3e%3crect%20width='34.3621'%20height='46.857'%20transform='matrix(-1%207.59524e-08%201.00625e-07%201%20251.459%20117.143)'%20fill='%23FBFCFF'/%3e%3crect%20width='34.3621'%20height='46.857'%20transform='matrix(-1%207.59524e-08%201.00625e-07%201%20512.087%20117.143)'%20fill='%23FBFCFF'/%3e%3crect%20width='34.3621'%20height='62.476'%20transform='matrix(-1%207.59524e-08%201.00625e-07%201%20208.001%20101.524)'%20fill='%23FBFCFF'/%3e%3crect%20width='34.3621'%20height='62.476'%20transform='matrix(-1%207.59524e-08%201.00625e-07%201%20468.63%20101.524)'%20fill='%23FBFCFF'/%3e%3crect%20width='33.3515'%20height='126.904'%20transform='matrix(-1%207.59524e-08%201.00625e-07%201%20164.543%2037.0957)'%20fill='%23FBFCFF'/%3e%3crect%20width='33.3515'%20height='103.476'%20transform='matrix(-1%207.59524e-08%201.00625e-07%201%20121.085%2060.5242)'%20fill='%23FBFCFF'/%3e%3crect%20width='33.3515'%20height='163.999'%20transform='matrix(-1%207.59524e-08%201.00625e-07%201%2077.6274%200)'%20fill='%23FBFCFF'/%3e%3crect%20width='33.3515'%20height='46.857'%20transform='matrix(-1%207.59524e-08%201.00625e-07%201%2034.1694%20117.143)'%20fill='%23FBFCFF'/%3e%3c/svg%3e";
const __vite_glob_0_336 = "" + new URL("../../assets/yir-dashboard-p7UBxo-j.png", import.meta.url).href;
const __vite_glob_0_337 = "" + new URL("../../assets/yir-em-dashboard-BXpJSk1K.png", import.meta.url).href;
const __vite_glob_0_338 = "" + new URL("../../assets/yir-em-hero-ERYG3vtb.svg", import.meta.url).href;
const __vite_glob_0_339 = "data:image/svg+xml,%3csvg%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M21.6607%201.71423H2.58929C1.71155%201.71423%201%202.42578%201%203.30352V16.0178C1%2016.8955%201.71155%2017.6071%202.58929%2017.6071H21.6607C22.5384%2017.6071%2023.25%2016.8955%2023.25%2016.0178V3.30352C23.25%202.42578%2022.5384%201.71423%2021.6607%201.71423Z'%20stroke='%23DC3FD6'%20stroke-width='1.69524'%20stroke-linejoin='round'/%3e%3cpath%20d='M14.5088%2020.7856L14.1115%2017.6071H10.1383L9.74097%2020.7856H14.5088Z'%20fill='%23DC3FD6'%20stroke='%23DC3FD6'%20stroke-width='1.69524'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M18.6873%2022.5H5.56226'%20stroke='%23DC3FD6'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M1%2013.6339V16.0178C1.00118%2016.439%201.169%2016.8425%201.46679%2017.1403C1.76459%2017.4381%202.16814%2017.6059%202.58929%2017.6071H21.6607C22.0818%2017.6059%2022.4854%2017.4381%2022.7832%2017.1403C23.081%2016.8425%2023.2488%2016.439%2023.25%2016.0178V13.6339H1ZM12.125%2016.8125C11.9678%2016.8125%2011.8142%2016.7659%2011.6835%2016.6786C11.5528%2016.5912%2011.451%2016.4671%2011.3908%2016.3219C11.3307%2016.1767%2011.315%2016.017%2011.3456%2015.8628C11.3763%2015.7087%2011.452%2015.5671%2011.5631%2015.4559C11.6742%2015.3448%2011.8158%2015.2691%2011.97%2015.2385C12.1241%2015.2078%2012.2839%2015.2235%2012.4291%2015.2837C12.5743%2015.3438%2012.6984%2015.4457%2012.7857%2015.5764C12.873%2015.707%2012.9196%2015.8607%2012.9196%2016.0178C12.9196%2016.2286%2012.8359%2016.4307%2012.6869%2016.5797C12.5379%2016.7288%2012.3357%2016.8125%2012.125%2016.8125Z'%20fill='%23DC3FD6'/%3e%3c/svg%3e";
const __vite_glob_0_340 = "data:image/svg+xml,%3csvg%20width='16'%20height='27'%20viewBox='0%200%2016%2027'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.6%200H2.4C1.08%200%200%201.13906%200%202.53125V24.4688C0%2025.8609%201.08%2027%202.4%2027H13.6C14.92%2027%2016%2025.8609%2016%2024.4688V2.53125C16%201.13906%2014.92%200%2013.6%200ZM4.8%201.26562H11.2V2.10938H4.8V1.26562ZM8%2025.3125C7.57565%2025.3125%207.16869%2025.1347%206.86863%2024.8182C6.56857%2024.5018%206.4%2024.0726%206.4%2023.625C6.4%2023.1774%206.56857%2022.7482%206.86863%2022.4318C7.16869%2022.1153%207.57565%2021.9375%208%2021.9375C8.42435%2021.9375%208.83131%2022.1153%209.13137%2022.4318C9.43143%2022.7482%209.6%2023.1774%209.6%2023.625C9.6%2024.0726%209.43143%2024.5018%209.13137%2024.8182C8.83131%2025.1347%208.42435%2025.3125%208%2025.3125ZM14.4%2020.25H1.6V3.375H14.4V20.25Z'%20fill='%236528F5'/%3e%3c/svg%3e";
const __vite_glob_0_341 = "data:image/svg+xml,%3csvg%20width='20'%20height='26'%20viewBox='0%200%2020%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%203C0%201.625%201.125%200.5%202.5%200.5H17.5C18.163%200.5%2018.7989%200.763392%2019.2678%201.23223C19.7366%201.70107%2020%202.33696%2020%203V23C20%2023.663%2019.7366%2024.2989%2019.2678%2024.7678C18.7989%2025.2366%2018.163%2025.5%2017.5%2025.5H2.5C1.83696%2025.5%201.20107%2025.2366%200.732233%2024.7678C0.263392%2024.2989%200%2023.663%200%2023V3ZM2.5%203V20.5H17.5V3H2.5ZM10%2024.25C10.3315%2024.25%2010.6495%2024.1183%2010.8839%2023.8839C11.1183%2023.6495%2011.25%2023.3315%2011.25%2023C11.25%2022.6685%2011.1183%2022.3505%2010.8839%2022.1161C10.6495%2021.8817%2010.3315%2021.75%2010%2021.75C9.66848%2021.75%209.35054%2021.8817%209.11612%2022.1161C8.8817%2022.3505%208.75%2022.6685%208.75%2023C8.75%2023.3315%208.8817%2023.6495%209.11612%2023.8839C9.35054%2024.1183%209.66848%2024.25%2010%2024.25Z'%20fill='%2309A9BF'/%3e%3c/svg%3e";
const __vite_glob_0_342 = "data:image/svg+xml,%3csvg%20width='81'%20height='81'%20viewBox='0%200%2081%2081'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='40.5'%20cy='40.5'%20r='38'%20fill='%236528F5'%20stroke='%23F0EAFE'%20stroke-width='5'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M47.084%2064L33.6472%2064L33.6472%2053.2282C29.6386%2050.8991%2026.9288%2046.577%2026.9288%2041.6053C26.9288%2034.1927%2032.953%2028.1685%2040.3656%2028.1685C47.7783%2028.1685%2053.8024%2034.1927%2053.8024%2041.6053C53.8024%2046.5769%2051.0927%2050.8991%2047.084%2053.2282L47.084%2064ZM38.126%2059.5212L38.126%2050.6529L35.8865%2049.354C33.1095%2047.7416%2031.4076%2044.7855%2031.4076%2041.6054C31.4076%2036.6562%2035.4162%2032.6476%2040.3654%2032.6476C45.3146%2032.6476%2049.3233%2036.6562%2049.3233%2041.6054C49.3233%2044.7855%2047.5989%2047.7416%2044.8444%2049.354L42.6049%2050.6529L42.6049%2059.5212L38.126%2059.5212ZM58.2816%2043.957L65%2043.957L65%2039.478L58.2816%2039.478L58.2816%2043.957ZM59.2894%2025.8396L56.1317%2022.682L52.1231%2026.713L55.2807%2029.8707L59.2894%2025.8396ZM42.6049%2023.8018L38.126%2023.8018L38.126%2017.0834L42.6049%2017.0834L42.6049%2023.8018ZM22.4497%2043.957L15.7313%2043.957L15.7313%2039.478L22.4497%2039.478L22.4497%2043.957ZM24.6221%2022.6594L28.6307%2026.6904L25.4955%2029.8257L21.4645%2025.817L24.6221%2022.6594Z'%20fill='%23FEFEFF'/%3e%3c/svg%3e";
const __vite_glob_0_343 = "data:image/svg+xml,%3csvg%20width='264'%20height='228'%20viewBox='0%200%20264%20228'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M132%20182.697L213.576%20227.225L191.928%20143.301L264%2086.8348L169.092%2079.5526L132%200.403809L94.908%2079.5526L0%2086.8348L72.072%20143.301L50.424%20227.225L132%20182.697Z'%20fill='%232B1769'/%3e%3c/svg%3e";
const __vite_glob_0_344 = "data:image/svg+xml,%3csvg%20width='67'%20height='67'%20viewBox='0%200%2067%2067'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M35.3182%200.708315C53.4066%201.71884%2067.3012%2017.2809%2066.2907%2035.4197C65.2802%2053.5081%2049.7182%2067.4028%2031.5793%2066.3417C13.491%2065.3312%20-0.403725%2049.7691%200.606796%2031.6303C1.66785%2013.5419%2017.1794%20-0.352733%2035.3182%200.708315Z'%20fill='%23D3E8EF'/%3e%3cpath%20d='M8.48922%2049.7697C5.1545%2044.6161%203.33556%2038.4014%203.68924%2031.7824C4.44713%2018.6962%2013.4913%208.03517%2025.466%204.75098C26.426%2016.0688%2027.4365%2027.1846%2028.4976%2038.6035C24.506%2040.2203%2014.1987%2045.374%208.48922%2049.7697Z'%20fill='white'/%3e%3cpath%20d='M35.824%204.34634C51.5881%205.25581%2063.6638%2018.7463%2062.7038%2034.5104C62.5522%2036.7336%2062.1986%2038.9062%2061.5923%2040.9272C61.6428%2040.4725%2061.6933%2040.0178%2061.6933%2039.5125C62.7038%2021.2221%2048.7586%205.55897%2030.4682%204.49792H30.3166C32.085%204.34634%2033.9545%204.24529%2035.824%204.34634Z'%20fill='white'/%3e%3cpath%20d='M61.592%2050.5273C60.9857%2051.5378%2060.3289%2052.4978%2059.6215%2053.4073L49.9205%2039.9673L27.588%2049.2641L14.6533%2022.5358L1.66808%2025.0116C2.02177%2023.799%202.37544%2022.5863%202.83018%2021.4242L16.4722%2018.7969L29.1543%2045.0199L50.9816%2035.9252L61.592%2050.5273Z'%20fill='%236F4BBB'/%3e%3cpath%20d='M50.88%2031.1762C47.1411%2030.9741%2043.9579%2033.8036%2043.7558%2037.5425C43.5537%2041.2814%2046.3832%2044.4646%2050.1221%2044.6667C53.861%2044.8688%2057.0442%2042.0393%2057.2463%2038.3004C57.4989%2034.612%2054.6189%2031.4288%2050.88%2031.1762Z'%20fill='%231EC185'/%3e%3cpath%20d='M28.8009%2040.4223C25.062%2040.2202%2021.8788%2043.0497%2021.6767%2046.7886C21.4746%2050.5275%2024.3041%2053.7107%2028.043%2053.9128C31.7819%2054.1149%2034.9651%2051.2854%2035.1672%2047.5465C35.4198%2043.8075%2032.5398%2040.6244%2028.8009%2040.4223Z'%20fill='%23FF893A'/%3e%3c/svg%3e";
const __vite_glob_0_345 = "data:image/svg+xml,%3csvg%20width='50'%20height='50'%20viewBox='0%200%2050%2050'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cellipse%20cx='25'%20cy='25'%20rx='25'%20ry='25'%20fill='transparent'/%3e%3cpath%20d='M26.4%2017.8H24V19C24%2019.3183%2024.1264%2019.6235%2024.3515%2019.8486C24.5765%2020.0736%2024.8817%2020.2%2025.2%2020.2C25.5183%2020.2%2025.8235%2020.0736%2026.0485%2019.8486C26.2736%2019.6235%2026.4%2019.3183%2026.4%2019V17.8Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M18%2013V15.4H19.2V19C19.2%2020.5913%2019.8321%2022.1174%2020.9574%2023.2426C22.0826%2024.3679%2023.6087%2025%2025.2%2025C23.6087%2025%2022.0826%2025.6321%2020.9574%2026.7574C19.8321%2027.8826%2019.2%2029.4087%2019.2%2031V34.6H18V37H32.4V34.6H31.2V31C31.2%2029.4087%2030.5679%2027.8826%2029.4426%2026.7574C28.3174%2025.6321%2026.7913%2025%2025.2%2025C25.9879%2025%2026.7681%2024.8448%2027.4961%2024.5433C28.2241%2024.2417%2028.8855%2023.7998%2029.4426%2023.2426C29.9998%2022.6855%2030.4417%2022.0241%2030.7433%2021.2961C31.0448%2020.5681%2031.2%2019.7879%2031.2%2019V15.4H32.4V13H18ZM21.6%2015.4H28.8V19C28.8%2019.9548%2028.4207%2020.8705%2027.7456%2021.5456C27.0705%2022.2207%2026.1548%2022.6%2025.2%2022.6C24.2452%2022.6%2023.3295%2022.2207%2022.6544%2021.5456C21.9793%2020.8705%2021.6%2019.9548%2021.6%2019V15.4ZM21.6%2031V34.6H28.8V31C28.8%2030.0452%2028.4207%2029.1295%2027.7456%2028.4544C27.0705%2027.7793%2026.1548%2027.4%2025.2%2027.4C24.2452%2027.4%2023.3295%2027.7793%2022.6544%2028.4544C21.9793%2029.1295%2021.6%2030.0452%2021.6%2031Z'%20fill='white'/%3e%3c/svg%3e";
const __vite_glob_0_346 = "data:image/svg+xml,%3csvg%20width='36'%20height='36'%20viewBox='0%200%2036%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M26.1667%203.56203C25.6804%203.56203%2025.2141%203.37439%2024.8703%203.04038C24.5265%202.70638%2024.3333%202.25337%2024.3333%201.78102C24.3333%201.30866%2024.5265%200.855652%2024.8703%200.521647C25.2141%200.187642%2025.6804%200%2026.1667%200H33.5C33.9862%200%2034.4525%200.187642%2034.7964%200.521647C35.1402%200.855652%2035.3333%201.30866%2035.3333%201.78102V8.90508C35.3333%209.37743%2035.1402%209.83044%2034.7964%2010.1644C34.4525%2010.4984%2033.9862%2010.6861%2033.5%2010.6861C33.0138%2010.6861%2032.5475%2010.4984%2032.2036%2010.1644C31.8598%209.83044%2031.6667%209.37743%2031.6667%208.90508V6.08039L21.0462%2016.3978C20.7024%2016.7317%2020.2361%2016.9193%2019.75%2016.9193C19.2639%2016.9193%2018.7976%2016.7317%2018.4538%2016.3978L13.3333%2011.4234L3.6295%2020.8503C3.28373%2021.1748%202.82062%2021.3543%202.33993%2021.3502C1.85924%2021.3462%201.39941%2021.1589%201.0595%2020.8286C0.719585%2020.4984%200.526775%2020.0517%200.522598%2019.5848C0.518421%2019.1178%200.70321%2018.6679%201.03717%2018.332L12.0372%207.6459C12.381%207.31201%2012.8472%207.12444%2013.3333%207.12444C13.8195%207.12444%2014.2857%207.31201%2014.6295%207.6459L19.75%2012.6203L29.0743%203.56203H26.1667ZM4.16667%2028.4962V33.8393C4.16667%2034.3116%203.97351%2034.7646%203.6297%2035.0987C3.28588%2035.4327%202.81956%2035.6203%202.33333%2035.6203C1.8471%2035.6203%201.38079%2035.4327%201.03697%2035.0987C0.693154%2034.7646%200.5%2034.3116%200.5%2033.8393V28.4962C0.5%2028.0239%200.693154%2027.5709%201.03697%2027.2369C1.38079%2026.9029%201.8471%2026.7152%202.33333%2026.7152C2.81956%2026.7152%203.28588%2026.9029%203.6297%2027.2369C3.97351%2027.5709%204.16667%2028.0239%204.16667%2028.4962ZM13.3333%2021.3722C13.3333%2020.8998%2013.1402%2020.4468%2012.7964%2020.1128C12.4525%2019.7788%2011.9862%2019.5912%2011.5%2019.5912C11.0138%2019.5912%2010.5475%2019.7788%2010.2036%2020.1128C9.85982%2020.4468%209.66667%2020.8998%209.66667%2021.3722V33.8393C9.66667%2034.3116%209.85982%2034.7646%2010.2036%2035.0987C10.5475%2035.4327%2011.0138%2035.6203%2011.5%2035.6203C11.9862%2035.6203%2012.4525%2035.4327%2012.7964%2035.0987C13.1402%2034.7646%2013.3333%2034.3116%2013.3333%2033.8393V21.3722ZM20.6667%2023.1532C21.1529%2023.1532%2021.6192%2023.3408%2021.963%2023.6748C22.3068%2024.0088%2022.5%2024.4619%2022.5%2024.9342V33.8393C22.5%2034.3116%2022.3068%2034.7646%2021.963%2035.0987C21.6192%2035.4327%2021.1529%2035.6203%2020.6667%2035.6203C20.1804%2035.6203%2019.7141%2035.4327%2019.3703%2035.0987C19.0265%2034.7646%2018.8333%2034.3116%2018.8333%2033.8393V24.9342C18.8333%2024.4619%2019.0265%2024.0088%2019.3703%2023.6748C19.7141%2023.3408%2020.1804%2023.1532%2020.6667%2023.1532ZM31.6667%2016.0291C31.6667%2015.5568%2031.4735%2015.1038%2031.1297%2014.7698C30.7859%2014.4358%2030.3196%2014.2481%2029.8333%2014.2481C29.3471%2014.2481%2028.8808%2014.4358%2028.537%2014.7698C28.1932%2015.1038%2028%2015.5568%2028%2016.0291V33.8393C28%2034.3116%2028.1932%2034.7646%2028.537%2035.0987C28.8808%2035.4327%2029.3471%2035.6203%2029.8333%2035.6203C30.3196%2035.6203%2030.7859%2035.4327%2031.1297%2035.0987C31.4735%2034.7646%2031.6667%2034.3116%2031.6667%2033.8393V16.0291Z'%20fill='%236F4BBB'/%3e%3c/svg%3e";
const __vite_glob_0_347 = "data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.3333%206.66667V0H15C23.2833%200%2030%206.71667%2030%2015C30%2023.2833%2023.2833%2030%2015%2030C6.70003%2030%200%2023.2833%200%2015C0%2010.0833%202.36663%205.75%206.01665%203.01667V2.98333L17.35%2014.3167L15%2016.6667L5.9667%207.63333C4.31672%209.63333%203.33333%2012.2%203.33333%2015C3.33333%2021.45%208.55%2026.6667%2015%2026.6667C21.45%2026.6667%2026.6667%2021.45%2026.6667%2015C26.6667%209.11667%2022.3167%204.28333%2016.6667%203.46667V6.66667H13.3333ZM15%2025C14.0833%2025%2013.3333%2024.25%2013.3333%2023.3333C13.3333%2022.4167%2014.0833%2021.6667%2015%2021.6667C15.9167%2021.6667%2016.6667%2022.4167%2016.6667%2023.3333C16.6667%2024.25%2015.9167%2025%2015%2025ZM25%2015C25%2014.0833%2024.25%2013.3333%2023.3333%2013.3333C22.4167%2013.3333%2021.6667%2014.0833%2021.6667%2015C21.6667%2015.9167%2022.4167%2016.6667%2023.3333%2016.6667C24.25%2016.6667%2025%2015.9167%2025%2015ZM6.66667%2016.6667C5.75002%2016.6667%205%2015.9167%205%2015C5%2014.0833%205.75002%2013.3333%206.66667%2013.3333C7.58332%2013.3333%208.33333%2014.0833%208.33333%2015C8.33333%2015.9167%207.58332%2016.6667%206.66667%2016.6667Z'%20fill='%2309A9BF'/%3e%3c/svg%3e";
const __vite_glob_0_348 = "data:image/svg+xml,%3csvg%20width='31'%20height='31'%20viewBox='0%200%2031%2031'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M11.6429%2015.5C14.1243%2015.5%2016.1429%2013.4814%2016.1429%2011C16.1429%208.51857%2014.1243%206.5%2011.6429%206.5C9.16145%206.5%207.14288%208.51857%207.14288%2011C7.14288%2013.4814%209.16145%2015.5%2011.6429%2015.5ZM11.6429%209.07143C12.71%209.07143%2013.5715%209.93286%2013.5715%2011C13.5715%2012.0671%2012.71%2012.9286%2011.6429%2012.9286C10.5757%2012.9286%209.71431%2012.0671%209.71431%2011C9.71431%209.93286%2010.5757%209.07143%2011.6429%209.07143ZM6.20431%2021.9286H11.7072C11.6686%2022.1343%2011.6429%2022.3529%2011.6429%2022.5714V24.5H2.64288V22.5714C2.64288%2019.5757%208.63431%2018.0714%2011.6429%2018.0714C12.3629%2018.0714%2013.25%2018.1614%2014.1886%2018.3286C13.2757%2018.9457%2012.5172%2019.7171%2012.08%2020.6557C12.0093%2020.6557%2011.9354%2020.6525%2011.8615%2020.6493C11.7875%2020.6461%2011.7136%2020.6429%2011.6429%2020.6429C9.67574%2020.6429%207.47717%2021.2857%206.20431%2021.9286ZM21.2857%2018.7143C18.92%2018.7143%2014.2143%2020.0129%2014.2143%2022.5714V24.5H28.3572V22.5714C28.3572%2020.0129%2023.6515%2018.7143%2021.2857%2018.7143ZM24.5%2013.5714C24.5%2014.78%2023.8186%2015.8214%2022.8415%2016.3743C22.3786%2016.6314%2021.8515%2016.7857%2021.2857%2016.7857C20.72%2016.7857%2020.1929%2016.6314%2019.73%2016.3743C18.7529%2015.8214%2018.0715%2014.78%2018.0715%2013.5714C18.0715%2011.7971%2019.5115%2010.3571%2021.2857%2010.3571C23.06%2010.3571%2024.5%2011.7971%2024.5%2013.5714Z'%20fill='%23DC3FD6'/%3e%3c/svg%3e";
const __vite_glob_0_349 = "data:image/svg+xml,%3csvg%20width='65'%20height='65'%20viewBox='0%200%2065%2065'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='32'%20cy='32'%20r='30'%20fill='%236528F5'/%3e%3cpath%20d='M64.5346%2032.2673C64.5346%2014.4503%2050.0919%200%2032.2673%200C14.4427%200%200%2014.4427%200%2032.2673C0%2050.092%2014.4427%2064.5346%2032.2673%2064.5346C50.0919%2064.5346%2064.5346%2050.0843%2064.5346%2032.2673ZM4.87315%2032.2673C4.87315%2017.1021%2017.1559%204.87315%2032.2673%204.87315C47.4325%204.87315%2059.6615%2017.1559%2059.6615%2032.2673C59.6615%2047.4325%2047.3787%2059.6615%2032.2673%2059.6615C17.1021%2059.6615%204.87315%2047.371%204.87315%2032.2673Z'%20fill='white'/%3e%3cpath%20d='M32.2674%2045.0497C39.3269%2045.0497%2045.0498%2039.3268%2045.0498%2032.2673C45.0498%2025.2077%2039.3269%2019.4849%2032.2674%2019.4849C25.2079%2019.4849%2019.485%2025.2077%2019.485%2032.2673C19.485%2039.3268%2025.2079%2045.0497%2032.2674%2045.0497Z'%20fill='white'/%3e%3c/svg%3e";
const __vite_glob_0_350 = "" + new URL("../../assets/yir-icon-world-CwfbI13I.svg", import.meta.url).href;
const __vite_glob_0_351 = "" + new URL("../../assets/yir-map-bg-CKEdtzdG.svg", import.meta.url).href;
const __vite_glob_0_352 = "" + new URL("../../assets/yir-mi-hero-DPm5eoml.svg", import.meta.url).href;
const __vite_glob_0_353 = "data:image/svg+xml,%3csvg%20width='29'%20height='28'%20viewBox='0%200%2029%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.5717%2022.1742L23.3267%2027.4584L21.0034%2017.4992L28.7384%2010.7984L18.5525%209.93425L14.5717%200.541748L10.5909%209.93425L0.405029%2010.7984L8.14003%2017.4992L5.8167%2027.4584L14.5717%2022.1742Z'%20fill='%23F2994A'/%3e%3c/svg%3e";
const __vite_glob_0_354 = "data:image/svg+xml,%3csvg%20width='51'%20height='41'%20viewBox='0%200%2051%2041'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.1%2041C3.6975%2041%202.49645%2040.4977%201.49685%2039.4932C0.497254%2038.4887%20-0.00169567%2037.2827%204.32937e-06%2035.875V5.125C4.32937e-06%203.71563%200.499804%202.50869%201.4994%201.50419C2.499%200.499691%203.6992%20-0.00170398%205.1%204.3506e-06H45.9C47.3025%204.3506e-06%2048.5035%200.502254%2049.5031%201.50675C50.5027%202.51125%2051.0017%203.71734%2051%205.125V35.875C51%2037.2844%2050.5002%2038.4913%2049.5006%2039.4958C48.501%2040.5003%2047.3008%2041.0017%2045.9%2041H5.1ZM5.1%2035.875H31.875V26.9062H5.1V35.875ZM36.975%2035.875H45.9V12.8125H36.975V35.875ZM5.1%2021.7812H31.875V12.8125H5.1V21.7812Z'%20fill='white'/%3e%3c/svg%3e";
const __vite_glob_0_0 = "" + new URL("../../assets/header-bar-charlie-monsterinsights-T4DE_Hn_.png", import.meta.url).href;
const __vite_glob_0_1 = "" + new URL("../../assets/overview-charlie-monsterinsights-BK_88RxT.png", import.meta.url).href;
const __vite_glob_0_2 = "" + new URL("../../assets/popup-button-charlie-monsterinsights-DjMmgC9c.png", import.meta.url).href;
const __vite_glob_0_3 = "" + new URL("../../assets/license-modal-agency-monsterinsights-CJIr97N2.gif", import.meta.url).href;
const __vite_glob_0_4 = "" + new URL("../../assets/license-modal-plus-monsterinsights-BqpwvtKI.gif", import.meta.url).href;
const __vite_glob_0_5 = "" + new URL("../../assets/license-modal-pro-monsterinsights-DOSf_9L0.gif", import.meta.url).href;
const logoAgency = "" + new URL("../../assets/logo-monsterinsights-agency-D_g3Ka4m.svg", import.meta.url).href;
const logoPlus = "" + new URL("../../assets/logo-monsterinsights-plus-CQ8cmXAv.svg", import.meta.url).href;
const logoPro = "" + new URL("../../assets/logo-monsterinsights-pro-DFpEr1k8.svg", import.meta.url).href;
const logoStandard = "" + new URL("../../assets/logo-monsterinsights-DHwCZrg_.png", import.meta.url).href;
const logoStandard2x = "" + new URL("../../assets/logo-monsterinsights@2x-Dzlx8UQP.png", import.meta.url).href;
const __vite_glob_0_11 = "" + new URL("../../assets/monsterinsights-logo-DUOPAFcb.svg", import.meta.url).href;
const __vite_glob_0_12 = "" + new URL("../../assets/monsterinsights-addons-upsell-logo-DE5_WyLu.svg", import.meta.url).href;
const __vite_glob_0_13 = "" + new URL("../../assets/monsterinsights-aioseo-sPgRSjfv.jpg", import.meta.url).href;
const __vite_glob_0_14 = "" + new URL("../../assets/monsterinsights-report-ecommerce-B_2lR7XO.png", import.meta.url).href;
const __vite_glob_0_15 = "" + new URL("../../assets/monsterinsights-setup-checklist-site-note-ByMJoe2K.png", import.meta.url).href;
const __vite_glob_0_16 = "" + new URL("../../assets/sample-image-monsterinsights-BioGsEoh.png", import.meta.url).href;
const __vite_glob_0_17 = "" + new URL("../../assets/monsterinsights-onboarding-logo-Bw42tMDx.svg", import.meta.url).href;
const __vite_glob_0_18 = "" + new URL("../../assets/woo-insights-hero-image-monsterinsights-Dm_gOLua.png", import.meta.url).href;
const images$1 = /* @__PURE__ */ Object.assign({
  "/src/assets/img/ai-charlie/header-bar-charlie-monsterinsights.png": __vite_glob_0_0,
  "/src/assets/img/ai-charlie/overview-charlie-monsterinsights.png": __vite_glob_0_1,
  "/src/assets/img/ai-charlie/popup-button-charlie-monsterinsights.png": __vite_glob_0_2,
  "/src/assets/img/license-modal-agency-monsterinsights.gif": __vite_glob_0_3,
  "/src/assets/img/license-modal-plus-monsterinsights.gif": __vite_glob_0_4,
  "/src/assets/img/license-modal-pro-monsterinsights.gif": __vite_glob_0_5,
  "/src/assets/img/logo-monsterinsights-agency.svg": logoAgency,
  "/src/assets/img/logo-monsterinsights-plus.svg": logoPlus,
  "/src/assets/img/logo-monsterinsights-pro.svg": logoPro,
  "/src/assets/img/logo-monsterinsights.png": logoStandard,
  "/src/assets/img/logo-monsterinsights@2x.png": logoStandard2x,
  "/src/assets/img/logo/monsterinsights-logo.svg": __vite_glob_0_11,
  "/src/assets/img/monsterinsights-addons-upsell-logo.svg": __vite_glob_0_12,
  "/src/assets/img/monsterinsights-aioseo.jpg": __vite_glob_0_13,
  "/src/assets/img/monsterinsights-report-ecommerce.png": __vite_glob_0_14,
  "/src/assets/img/monsterinsights-setup-checklist-site-note.png": __vite_glob_0_15,
  "/src/assets/img/sample-image-monsterinsights.png": __vite_glob_0_16,
  "/src/assets/img/wizard-onboarding/monsterinsights-onboarding-logo.svg": __vite_glob_0_17,
  "/src/assets/img/woo-insights-hero-image-monsterinsights.png": __vite_glob_0_18
});
const sharedImages = /* @__PURE__ */ Object.assign({
  "/src/assets/img/about-icon-addons-em.png": __vite_glob_0_0$1,
  "/src/assets/img/about-icon-addons.png": __vite_glob_0_1$1,
  "/src/assets/img/about-icon-check.svg": __vite_glob_0_2$1,
  "/src/assets/img/about-icon-connect.png": __vite_glob_0_3$1,
  "/src/assets/img/about-icon-ecommerce.png": __vite_glob_0_4$1,
  "/src/assets/img/about-icon-gdpr.png": __vite_glob_0_5$1,
  "/src/assets/img/about-icon-guide.png": __vite_glob_0_6,
  "/src/assets/img/about-team.jpg": __vite_glob_0_7,
  "/src/assets/img/affiliates-promo-logo.png": __vite_glob_0_8,
  "/src/assets/img/aioseo-client-logo-1.svg": __vite_glob_0_9,
  "/src/assets/img/aioseo-client-logo-10.svg": __vite_glob_0_10,
  "/src/assets/img/aioseo-client-logo-11.svg": __vite_glob_0_11$1,
  "/src/assets/img/aioseo-client-logo-12.svg": __vite_glob_0_12$1,
  "/src/assets/img/aioseo-client-logo-2.svg": __vite_glob_0_13$1,
  "/src/assets/img/aioseo-client-logo-3.svg": __vite_glob_0_14$1,
  "/src/assets/img/aioseo-client-logo-4.svg": __vite_glob_0_15$1,
  "/src/assets/img/aioseo-client-logo-5.svg": __vite_glob_0_16$1,
  "/src/assets/img/aioseo-client-logo-6.svg": __vite_glob_0_17$1,
  "/src/assets/img/aioseo-client-logo-7.svg": __vite_glob_0_18$1,
  "/src/assets/img/aioseo-client-logo-8.svg": __vite_glob_0_19,
  "/src/assets/img/aioseo-client-logo-9.svg": __vite_glob_0_20,
  "/src/assets/img/aioseo-screen-1.svg": __vite_glob_0_21,
  "/src/assets/img/aioseo-screen-2.svg": __vite_glob_0_22,
  "/src/assets/img/arrow-down.svg": __vite_glob_0_23,
  "/src/assets/img/arrow-right.svg": __vite_glob_0_24,
  "/src/assets/img/badge-dark.svg": __vite_glob_0_25,
  "/src/assets/img/badge-light.svg": __vite_glob_0_26,
  "/src/assets/img/charlie-ai.svg": __vite_glob_0_27,
  "/src/assets/img/charlie-front.svg": __vite_glob_0_28,
  "/src/assets/img/charlie-with-heart.svg": __vite_glob_0_29,
  "/src/assets/img/charlie.png": __vite_glob_0_30,
  "/src/assets/img/check.svg": __vite_glob_0_31,
  "/src/assets/img/chris.png": __vite_glob_0_32,
  "/src/assets/img/easy-affiliate-logo.png": __vite_glob_0_33,
  "/src/assets/img/easy-digital-downloads.png": __vite_glob_0_34,
  "/src/assets/img/ecommerce-report.png": __vite_glob_0_35,
  "/src/assets/img/edd-xsell-banner.svg": __vite_glob_0_36,
  "/src/assets/img/em-ai-insights.svg": __vite_glob_0_37,
  "/src/assets/img/em-logo-lg.png": __vite_glob_0_38,
  "/src/assets/img/em-logo.svg": __vite_glob_0_39,
  "/src/assets/img/em-pl-logo.svg": __vite_glob_0_40,
  "/src/assets/img/flags.png": __vite_glob_0_41,
  "/src/assets/img/give-wp.png": __vite_glob_0_42,
  "/src/assets/img/givewp.png": __vite_glob_0_43,
  "/src/assets/img/google-ads-welcome.png": welcomeImage,
  "/src/assets/img/growth-tools-icons/icon-advancedcoupons.svg": __vite_glob_0_45,
  "/src/assets/img/growth-tools-icons/icon-aioseo.svg": __vite_glob_0_46,
  "/src/assets/img/growth-tools-icons/icon-constantcontact.svg": __vite_glob_0_47,
  "/src/assets/img/growth-tools-icons/icon-easyaffiliate.svg": __vite_glob_0_48,
  "/src/assets/img/growth-tools-icons/icon-edd.svg": __vite_glob_0_49,
  "/src/assets/img/growth-tools-icons/icon-em.svg": __vite_glob_0_50,
  "/src/assets/img/growth-tools-icons/icon-google-ads.svg": __vite_glob_0_51,
  "/src/assets/img/growth-tools-icons/icon-guide.svg": __vite_glob_0_52,
  "/src/assets/img/growth-tools-icons/icon-memberpress.svg": __vite_glob_0_53,
  "/src/assets/img/growth-tools-icons/icon-mi.svg": __vite_glob_0_54,
  "/src/assets/img/growth-tools-icons/icon-optinmonster.svg": __vite_glob_0_55,
  "/src/assets/img/growth-tools-icons/icon-prettylinks.svg": __vite_glob_0_56,
  "/src/assets/img/growth-tools-icons/icon-pushengage.svg": __vite_glob_0_57,
  "/src/assets/img/growth-tools-icons/icon-rafflepress.svg": __vite_glob_0_58,
  "/src/assets/img/growth-tools-icons/icon-searchwp.svg": __vite_glob_0_59,
  "/src/assets/img/growth-tools-icons/icon-seedprod.png": __vite_glob_0_60,
  "/src/assets/img/growth-tools-icons/icon-semrush.svg": __vite_glob_0_61,
  "/src/assets/img/growth-tools-icons/icon-smashballoon.svg": __vite_glob_0_62,
  "/src/assets/img/growth-tools-icons/icon-thirstyaffiliates.png": __vite_glob_0_63,
  "/src/assets/img/growth-tools-icons/icon-wp-simple-pay.png": __vite_glob_0_64,
  "/src/assets/img/growth-tools-icons/icon-wpforms.svg": __vite_glob_0_65,
  "/src/assets/img/icon-addon-ads.png": __vite_glob_0_66,
  "/src/assets/img/icon-addon-amp.png": __vite_glob_0_67,
  "/src/assets/img/icon-addon-dimensions.png": __vite_glob_0_68,
  "/src/assets/img/icon-addon-eu-compliance.png": __vite_glob_0_69,
  "/src/assets/img/icon-addon-forms.png": __vite_glob_0_70,
  "/src/assets/img/icon-addon-instant-articles.png": __vite_glob_0_71,
  "/src/assets/img/icon-addon-media.png": __vite_glob_0_72,
  "/src/assets/img/icon-addon-performance.png": __vite_glob_0_73,
  "/src/assets/img/icon-alert.png": __vite_glob_0_74,
  "/src/assets/img/icon-celebrate-small.png": __vite_glob_0_75,
  "/src/assets/img/icon-chat.png": __vite_glob_0_76,
  "/src/assets/img/icon-dollar.png": __vite_glob_0_77,
  "/src/assets/img/icon-download-prettylinks.svg": __vite_glob_0_78,
  "/src/assets/img/icon-download.png": __vite_glob_0_79,
  "/src/assets/img/icon-em-watch.png": __vite_glob_0_80,
  "/src/assets/img/icon-exception-report.svg": __vite_glob_0_81,
  "/src/assets/img/icon-lock.svg": __vite_glob_0_82,
  "/src/assets/img/icon-media.svg": __vite_glob_0_83,
  "/src/assets/img/icon-pen.png": __vite_glob_0_84,
  "/src/assets/img/icon-plus.png": __vite_glob_0_85,
  "/src/assets/img/icon-privacy-guard.svg": __vite_glob_0_86,
  "/src/assets/img/icon-scroll-tracking.png": __vite_glob_0_87,
  "/src/assets/img/icon-site-notes-settings.svg": __vite_glob_0_88,
  "/src/assets/img/icon-site-notes.svg": __vite_glob_0_89,
  "/src/assets/img/icon-smile.png": __vite_glob_0_90,
  "/src/assets/img/icon-star.png": __vite_glob_0_91,
  "/src/assets/img/icon-tip.png": __vite_glob_0_92,
  "/src/assets/img/icon-warning.png": __vite_glob_0_93,
  "/src/assets/img/icon-warning.svg": __vite_glob_0_94,
  "/src/assets/img/lifter-lms.png": __vite_glob_0_95,
  "/src/assets/img/lifterlms.png": __vite_glob_0_96,
  "/src/assets/img/logo-formidable-forms.png": __vite_glob_0_97,
  "/src/assets/img/logo-gravity.png": __vite_glob_0_98,
  "/src/assets/img/logo-wp-forms.png": __vite_glob_0_99,
  "/src/assets/img/mascot.png": __vite_glob_0_100,
  "/src/assets/img/memberpress.png": __vite_glob_0_101,
  "/src/assets/img/mi-and-pl-logo.svg": __vite_glob_0_102,
  "/src/assets/img/optinmonster.png": __vite_glob_0_103,
  "/src/assets/img/plugins/charitable-logo.png": __vite_glob_0_104,
  "/src/assets/img/plugins/membermouse-logo.png": __vite_glob_0_105,
  "/src/assets/img/plugins/rewardswp-rewards-widget-promo.png": __vite_glob_0_106,
  "/src/assets/img/plugins/wishlistmember-logo.svg": __vite_glob_0_107,
  "/src/assets/img/popular-posts/popular-products-bg.jpg": __vite_glob_0_108,
  "/src/assets/img/popular-posts/popular-products-browser.jpg": __vite_glob_0_109,
  "/src/assets/img/popular-posts/theme-icons-products.png": __vite_glob_0_110,
  "/src/assets/img/popular-posts/theme-icons-widget.png": __vite_glob_0_111,
  "/src/assets/img/popular-posts/theme-icons.png": __vite_glob_0_112,
  "/src/assets/img/popular-posts/theme-preview-beta.png": __vite_glob_0_113,
  "/src/assets/img/popular-posts/theme-preview-image-2.jpg": __vite_glob_0_114,
  "/src/assets/img/popular-posts/theme-preview-image.jpg": __vite_glob_0_115,
  "/src/assets/img/popular-posts/theme-products-1.jpg": __vite_glob_0_116,
  "/src/assets/img/popular-posts/theme-products-2.jpg": __vite_glob_0_117,
  "/src/assets/img/popular-posts/theme-products-3.jpg": __vite_glob_0_118,
  "/src/assets/img/popular-posts/theme-products-4.jpg": __vite_glob_0_119,
  "/src/assets/img/popular-posts/theme-products-5.jpg": __vite_glob_0_120,
  "/src/assets/img/popular-posts/theme-products-6.jpg": __vite_glob_0_121,
  "/src/assets/img/popular-posts/theme-products-7.jpg": __vite_glob_0_122,
  "/src/assets/img/popular-posts/theme-products-8.jpg": __vite_glob_0_123,
  "/src/assets/img/popular-posts/theme-widget-1.jpg": __vite_glob_0_124,
  "/src/assets/img/popular-posts/theme-widget-2.jpg": __vite_glob_0_125,
  "/src/assets/img/popular-posts/theme-widget-3.jpg": __vite_glob_0_126,
  "/src/assets/img/popular-posts/theme-widget-4.jpg": __vite_glob_0_127,
  "/src/assets/img/popular-posts/theme-widget-5.jpg": __vite_glob_0_128,
  "/src/assets/img/popular-posts/theme-widget-6.jpg": __vite_glob_0_129,
  "/src/assets/img/popular-posts/theme-widget-7.jpg": __vite_glob_0_130,
  "/src/assets/img/popular-posts/theme-widget-8.jpg": __vite_glob_0_131,
  "/src/assets/img/pretty-links-logo-white.svg": __vite_glob_0_132,
  "/src/assets/img/prettylinks-ad-bg.png": __vite_glob_0_133,
  "/src/assets/img/rafflepress.png": __vite_glob_0_134,
  "/src/assets/img/rcp.png": __vite_glob_0_135,
  "/src/assets/img/reports-upsell-bg.png": __vite_glob_0_136,
  "/src/assets/img/reports/lite-modals/bg-ai-insights-em.png": __vite_glob_0_137,
  "/src/assets/img/reports/lite-modals/bg-ai-insights.png": __vite_glob_0_138,
  "/src/assets/img/reports/lite-modals/bg-cart-abandonment@2x.png": __vite_glob_0_139,
  "/src/assets/img/reports/lite-modals/bg-conversations-ai-em.png": __vite_glob_0_140,
  "/src/assets/img/reports/lite-modals/bg-conversations-ai.png": __vite_glob_0_141,
  "/src/assets/img/reports/lite-modals/bg-countries.png": __vite_glob_0_142,
  "/src/assets/img/reports/lite-modals/bg-dimensions.png": __vite_glob_0_143,
  "/src/assets/img/reports/lite-modals/bg-dimensions@2x.png": __vite_glob_0_144,
  "/src/assets/img/reports/lite-modals/bg-ecommerce-coupons.png": __vite_glob_0_145,
  "/src/assets/img/reports/lite-modals/bg-ecommerce-coupons@2x.png": __vite_glob_0_146,
  "/src/assets/img/reports/lite-modals/bg-ecommerce-product-sales.png": __vite_glob_0_147,
  "/src/assets/img/reports/lite-modals/bg-ecommerce-product-sales@2x.png": __vite_glob_0_148,
  "/src/assets/img/reports/lite-modals/bg-ecommerce-purchases-by-location.png": __vite_glob_0_149,
  "/src/assets/img/reports/lite-modals/bg-ecommerce-refunds-by-geo.png": __vite_glob_0_150,
  "/src/assets/img/reports/lite-modals/bg-ecommerce-refunds.png": __vite_glob_0_151,
  "/src/assets/img/reports/lite-modals/bg-ecommerce-spend-by-day.png": __vite_glob_0_152,
  "/src/assets/img/reports/lite-modals/bg-ecommerce-spend-by-hour.png": __vite_glob_0_153,
  "/src/assets/img/reports/lite-modals/bg-ecommerce.png": __vite_glob_0_154,
  "/src/assets/img/reports/lite-modals/bg-ecommerce@2x.png": __vite_glob_0_155,
  "/src/assets/img/reports/lite-modals/bg-engagement-pages.png": __vite_glob_0_156,
  "/src/assets/img/reports/lite-modals/bg-engagement-pages@2x.png": __vite_glob_0_157,
  "/src/assets/img/reports/lite-modals/bg-forms.png": __vite_glob_0_158,
  "/src/assets/img/reports/lite-modals/bg-forms@2x.png": __vite_glob_0_159,
  "/src/assets/img/reports/lite-modals/bg-media-upsell.svg": __vite_glob_0_160,
  "/src/assets/img/reports/lite-modals/bg-publisher.png": __vite_glob_0_161,
  "/src/assets/img/reports/lite-modals/bg-publisher@2x.png": __vite_glob_0_162,
  "/src/assets/img/reports/lite-modals/bg-queries.png": __vite_glob_0_163,
  "/src/assets/img/reports/lite-modals/bg-queries@2x.png": __vite_glob_0_164,
  "/src/assets/img/reports/lite-modals/bg-realtime.png": __vite_glob_0_165,
  "/src/assets/img/reports/lite-modals/bg-realtime@2x.png": __vite_glob_0_166,
  "/src/assets/img/reports/lite-modals/bg-sitespeed.png": __vite_glob_0_167,
  "/src/assets/img/reports/lite-modals/bg-sitespeed@2x.png": __vite_glob_0_168,
  "/src/assets/img/reports/lite-modals/bg-traffic-ai.jpeg": __vite_glob_0_169,
  "/src/assets/img/reports/lite-modals/bg-traffic-campaigns.png": __vite_glob_0_170,
  "/src/assets/img/reports/lite-modals/bg-traffic-campaigns@2x.png": __vite_glob_0_171,
  "/src/assets/img/reports/lite-modals/bg-traffic-landing-page.png": __vite_glob_0_172,
  "/src/assets/img/reports/lite-modals/bg-traffic-landing-page@2x.png": __vite_glob_0_173,
  "/src/assets/img/reports/lite-modals/bg-traffic-overview.png": __vite_glob_0_174,
  "/src/assets/img/reports/lite-modals/bg-traffic-overview@2x.png": __vite_glob_0_175,
  "/src/assets/img/reports/lite-modals/bg-traffic-source-medium.png": __vite_glob_0_176,
  "/src/assets/img/reports/lite-modals/bg-traffic-source-medium@2x.png": __vite_glob_0_177,
  "/src/assets/img/reports/lite-modals/bg-traffic-technology.png": __vite_glob_0_178,
  "/src/assets/img/reports/lite-modals/bg-traffic-technology@2x.png": __vite_glob_0_179,
  "/src/assets/img/reports/lite-modals/bg-traffic.png": __vite_glob_0_180,
  "/src/assets/img/reports/lite-modals/bg-traffic@2x.png": __vite_glob_0_181,
  "/src/assets/img/reports/lite-modals/bg-user-journey.svg": __vite_glob_0_182,
  "/src/assets/img/reports/lite-modals/bullet-em.svg": __vite_glob_0_183,
  "/src/assets/img/reports/lite-modals/bullet.svg": __vite_glob_0_184,
  "/src/assets/img/reports/lite-modals/custom-events-report-screen.png": __vite_glob_0_185,
  "/src/assets/img/reports/lite-modals/ecommerce-funnel.png": __vite_glob_0_186,
  "/src/assets/img/reports/lite-modals/ecommerce-funnel@2x.png": __vite_glob_0_187,
  "/src/assets/img/reports/lite-modals/exceptions-report.png": __vite_glob_0_188,
  "/src/assets/img/reports/lite-modals/icon-info.svg": __vite_glob_0_189,
  "/src/assets/img/reports/lite-modals/icon-lock.svg": __vite_glob_0_190,
  "/src/assets/img/reports/lite-modals/social-media-report.png": __vite_glob_0_191,
  "/src/assets/img/reports/lite-modals/social-media-report@2x.png": __vite_glob_0_192,
  "/src/assets/img/reports/overview/ecommerce-logo/charitable.png": __vite_glob_0_193,
  "/src/assets/img/reports/overview/ecommerce-logo/easy.png": __vite_glob_0_194,
  "/src/assets/img/reports/overview/ecommerce-logo/givewp.png": __vite_glob_0_195,
  "/src/assets/img/reports/overview/ecommerce-logo/lifterlms.png": __vite_glob_0_196,
  "/src/assets/img/reports/overview/ecommerce-logo/memberhouse.png": __vite_glob_0_197,
  "/src/assets/img/reports/overview/ecommerce-logo/memberpress.png": __vite_glob_0_198,
  "/src/assets/img/reports/overview/ecommerce-logo/restrict.png": __vite_glob_0_199,
  "/src/assets/img/reports/overview/ecommerce-logo/wishlistmember-logo 1.png": __vite_glob_0_200,
  "/src/assets/img/reports/overview/ecommerce-logo/woocom.png": __vite_glob_0_201,
  "/src/assets/img/reports/overview/overview-upsell-cta-arrow.svg": __vite_glob_0_202,
  "/src/assets/img/reports/overview/overview-upsell-cta-chart-with-charlie.png": __vite_glob_0_203,
  "/src/assets/img/reports/report-arrow-down-green.png": __vite_glob_0_204,
  "/src/assets/img/reports/report-arrow-down-red.png": __vite_glob_0_205,
  "/src/assets/img/reports/report-arrow-up-green.png": __vite_glob_0_206,
  "/src/assets/img/reports/report-arrow-up-red.png": __vite_glob_0_207,
  "/src/assets/img/restrict-content-pro.png": __vite_glob_0_208,
  "/src/assets/img/seedprod.png": __vite_glob_0_209,
  "/src/assets/img/site-notes-trigger-icon-em.svg": __vite_glob_0_210,
  "/src/assets/img/site-notes-trigger-icon.svg": __vite_glob_0_211,
  "/src/assets/img/site-notes/arrow-down.svg": __vite_glob_0_212,
  "/src/assets/img/site-notes/icon-bottom.svg": __vite_glob_0_213,
  "/src/assets/img/site-notes/icon-lock.svg": __vite_glob_0_214,
  "/src/assets/img/site-notes/icon-media.svg": __vite_glob_0_215,
  "/src/assets/img/site-notes/icon-plus.svg": __vite_glob_0_216,
  "/src/assets/img/site-notes/icon-selected.svg": __vite_glob_0_217,
  "/src/assets/img/site-notes/icon-site-notes.svg": __vite_glob_0_218,
  "/src/assets/img/site-notes/integration/logo-em.svg": __vite_glob_0_219,
  "/src/assets/img/site-notes/integration/logo-mi.svg": __vite_glob_0_220,
  "/src/assets/img/site-notes/integration/logo-uncanny.svg": __vite_glob_0_221,
  "/src/assets/img/site-notes/integration/logo-wp-event.svg": __vite_glob_0_222,
  "/src/assets/img/site-notes/star-empty.svg": __vite_glob_0_223,
  "/src/assets/img/site-notes/star.svg": __vite_glob_0_224,
  "/src/assets/img/site-speed-blur.png": __vite_glob_0_225,
  "/src/assets/img/star-empty.svg": __vite_glob_0_226,
  "/src/assets/img/star.png": __vite_glob_0_227,
  "/src/assets/img/star.svg": __vite_glob_0_228,
  "/src/assets/img/syed.png": __vite_glob_0_229,
  "/src/assets/img/theme-products-5.jpg": __vite_glob_0_230,
  "/src/assets/img/theme-products-6.jpg": __vite_glob_0_231,
  "/src/assets/img/theme-products-7.jpg": __vite_glob_0_232,
  "/src/assets/img/theme-products-8.jpg": __vite_glob_0_233,
  "/src/assets/img/tools-prettylinks-icons.png": __vite_glob_0_234,
  "/src/assets/img/tools/prettylinks-illustration-mi.svg": __vite_glob_0_235,
  "/src/assets/img/trustpulse.png": __vite_glob_0_236,
  "/src/assets/img/underline-small.png": __vite_glob_0_237,
  "/src/assets/img/underline.png": __vite_glob_0_238,
  "/src/assets/img/upsell/bg-ai-insights-em.png": __vite_glob_0_239,
  "/src/assets/img/upsell/bg-ai-insights.png": __vite_glob_0_240,
  "/src/assets/img/upsell/bg-cart-abandonment@2x.png": __vite_glob_0_241,
  "/src/assets/img/upsell/bg-conversations-ai-em.png": __vite_glob_0_242,
  "/src/assets/img/upsell/bg-conversations-ai.png": __vite_glob_0_243,
  "/src/assets/img/upsell/bg-countries.png": __vite_glob_0_244,
  "/src/assets/img/upsell/bg-dimensions.png": __vite_glob_0_245,
  "/src/assets/img/upsell/bg-dimensions@2x.png": __vite_glob_0_246,
  "/src/assets/img/upsell/bg-ecommerce-coupons.png": __vite_glob_0_247,
  "/src/assets/img/upsell/bg-ecommerce-coupons@2x.png": __vite_glob_0_248,
  "/src/assets/img/upsell/bg-ecommerce-product-sales.png": __vite_glob_0_249,
  "/src/assets/img/upsell/bg-ecommerce-product-sales@2x.png": __vite_glob_0_250,
  "/src/assets/img/upsell/bg-ecommerce-purchases-by-location.png": __vite_glob_0_251,
  "/src/assets/img/upsell/bg-ecommerce-refunds-by-geo.png": __vite_glob_0_252,
  "/src/assets/img/upsell/bg-ecommerce-refunds.png": __vite_glob_0_253,
  "/src/assets/img/upsell/bg-ecommerce-spend-by-day.png": __vite_glob_0_254,
  "/src/assets/img/upsell/bg-ecommerce-spend-by-hour.png": __vite_glob_0_255,
  "/src/assets/img/upsell/bg-ecommerce.png": __vite_glob_0_256,
  "/src/assets/img/upsell/bg-ecommerce@2x.png": __vite_glob_0_257,
  "/src/assets/img/upsell/bg-engagement-pages.png": __vite_glob_0_258,
  "/src/assets/img/upsell/bg-engagement-pages@2x.png": __vite_glob_0_259,
  "/src/assets/img/upsell/bg-forms.png": __vite_glob_0_260,
  "/src/assets/img/upsell/bg-forms@2x.png": __vite_glob_0_261,
  "/src/assets/img/upsell/bg-media-upsell.svg": __vite_glob_0_262,
  "/src/assets/img/upsell/bg-publisher.png": __vite_glob_0_263,
  "/src/assets/img/upsell/bg-publisher@2x.png": __vite_glob_0_264,
  "/src/assets/img/upsell/bg-queries.png": __vite_glob_0_265,
  "/src/assets/img/upsell/bg-queries@2x.png": __vite_glob_0_266,
  "/src/assets/img/upsell/bg-realtime.png": __vite_glob_0_267,
  "/src/assets/img/upsell/bg-realtime@2x.png": __vite_glob_0_268,
  "/src/assets/img/upsell/bg-sitespeed.png": __vite_glob_0_269,
  "/src/assets/img/upsell/bg-sitespeed@2x.png": __vite_glob_0_270,
  "/src/assets/img/upsell/bg-traffic-ai.jpeg": __vite_glob_0_271,
  "/src/assets/img/upsell/bg-traffic-campaigns.png": __vite_glob_0_272,
  "/src/assets/img/upsell/bg-traffic-campaigns@2x.png": __vite_glob_0_273,
  "/src/assets/img/upsell/bg-traffic-landing-page.png": __vite_glob_0_274,
  "/src/assets/img/upsell/bg-traffic-landing-page@2x.png": __vite_glob_0_275,
  "/src/assets/img/upsell/bg-traffic-overview.png": __vite_glob_0_276,
  "/src/assets/img/upsell/bg-traffic-overview@2x.png": __vite_glob_0_277,
  "/src/assets/img/upsell/bg-traffic-source-medium.png": __vite_glob_0_278,
  "/src/assets/img/upsell/bg-traffic-source-medium@2x.png": __vite_glob_0_279,
  "/src/assets/img/upsell/bg-traffic-technology.png": __vite_glob_0_280,
  "/src/assets/img/upsell/bg-traffic-technology@2x.png": __vite_glob_0_281,
  "/src/assets/img/upsell/bg-traffic.png": __vite_glob_0_282,
  "/src/assets/img/upsell/bg-traffic@2x.png": __vite_glob_0_283,
  "/src/assets/img/upsell/bg-user-journey.svg": __vite_glob_0_284,
  "/src/assets/img/upsell/bullet-em.svg": __vite_glob_0_285,
  "/src/assets/img/upsell/bullet.svg": __vite_glob_0_286,
  "/src/assets/img/upsell/custom-events-report-screen.png": __vite_glob_0_287,
  "/src/assets/img/upsell/ecommerce-funnel.png": __vite_glob_0_288,
  "/src/assets/img/upsell/ecommerce-funnel@2x.png": __vite_glob_0_289,
  "/src/assets/img/upsell/exceptions-report.png": __vite_glob_0_290,
  "/src/assets/img/upsell/icon-info.svg": __vite_glob_0_291,
  "/src/assets/img/upsell/icon-lock.svg": __vite_glob_0_292,
  "/src/assets/img/upsell/social-media-report.png": __vite_glob_0_293,
  "/src/assets/img/upsell/social-media-report@2x.png": __vite_glob_0_294,
  "/src/assets/img/welcome/testimonial-avatar-2.png": __vite_glob_0_295,
  "/src/assets/img/welcome/testimonial-avatar.jpeg": __vite_glob_0_296,
  "/src/assets/img/welcome/welcome-mascot.png": __vite_glob_0_297,
  "/src/assets/img/welcome/welcome-video-image.jpg": __vite_glob_0_298,
  "/src/assets/img/wizard-onboarding/addon-icon-ads.png": __vite_glob_0_299,
  "/src/assets/img/wizard-onboarding/addon-icon-amp.png": __vite_glob_0_300,
  "/src/assets/img/wizard-onboarding/addon-icon-dimensions.png": __vite_glob_0_301,
  "/src/assets/img/wizard-onboarding/addon-icon-ecommerce.png": __vite_glob_0_302,
  "/src/assets/img/wizard-onboarding/addon-icon-eu-compliance.png": __vite_glob_0_303,
  "/src/assets/img/wizard-onboarding/addon-icon-forms.png": __vite_glob_0_304,
  "/src/assets/img/wizard-onboarding/addon-icon-media.png": __vite_glob_0_305,
  "/src/assets/img/wizard-onboarding/addon-icon-page-insights.png": __vite_glob_0_306,
  "/src/assets/img/wizard-onboarding/addon-icon-performance.png": __vite_glob_0_307,
  "/src/assets/img/wizard-onboarding/onboarding-success-button-arrow.svg": __vite_glob_0_308,
  "/src/assets/img/wizard-onboarding/wpforms.png": __vite_glob_0_309,
  "/src/assets/img/woo-insights-ecommerce-report-image.png": __vite_glob_0_310,
  "/src/assets/img/woo-insights-save-60-badge.svg": __vite_glob_0_311,
  "/src/assets/img/woo-insights-sessions-revenue.png": __vite_glob_0_312,
  "/src/assets/img/woocommerce.png": __vite_glob_0_313,
  "/src/assets/img/wp-mail-smtp.png": __vite_glob_0_314,
  "/src/assets/img/wpconsent-page-feature-image.png": wpconsentFeatureImage,
  "/src/assets/img/wpconsent-promo-banner.svg": __vite_glob_0_316,
  "/src/assets/img/wpforms.png": __vite_glob_0_317,
  "/src/assets/img/year-in-review/behavior-funnel.png": __vite_glob_0_318,
  "/src/assets/img/year-in-review/behavior-section-bg.png": __vite_glob_0_319,
  "/src/assets/img/year-in-review/dashboard-preview.png": __vite_glob_0_320,
  "/src/assets/img/year-in-review/devices-summary-left-icon.svg": __vite_glob_0_321,
  "/src/assets/img/year-in-review/devices-summary-right-icon.svg": __vite_glob_0_322,
  "/src/assets/img/year-in-review/ecommerce-cart-image.svg": __vite_glob_0_323,
  "/src/assets/img/year-in-review/em-behavior-section-bg.png": __vite_glob_0_324,
  "/src/assets/img/year-in-review/em-dashboard-preview.png": __vite_glob_0_325,
  "/src/assets/img/year-in-review/em-ecommerce-cart-image.svg": __vite_glob_0_326,
  "/src/assets/img/year-in-review/em-form-insights-bar-left-icon.png": __vite_glob_0_327,
  "/src/assets/img/year-in-review/em-google-performance-bar-left-icon.png": __vite_glob_0_328,
  "/src/assets/img/year-in-review/em-hero-image.jpg": __vite_glob_0_329,
  "/src/assets/img/year-in-review/em-thankyou-bg.png": __vite_glob_0_330,
  "/src/assets/img/year-in-review/form-insights-bar-left-icon.svg": __vite_glob_0_331,
  "/src/assets/img/year-in-review/google-performance-bar-left-icon.svg": __vite_glob_0_332,
  "/src/assets/img/year-in-review/hero-image.jpg": __vite_glob_0_333,
  "/src/assets/img/year-in-review/thankyou-bg.png": __vite_glob_0_334,
  "/src/assets/img/yir-bar-chart-bg.svg": __vite_glob_0_335,
  "/src/assets/img/yir-dashboard.png": __vite_glob_0_336,
  "/src/assets/img/yir-em-dashboard.png": __vite_glob_0_337,
  "/src/assets/img/yir-em-hero.svg": __vite_glob_0_338,
  "/src/assets/img/yir-em-icon-desktop-small.svg": __vite_glob_0_339,
  "/src/assets/img/yir-em-icon-mobile-small.svg": __vite_glob_0_340,
  "/src/assets/img/yir-em-icon-tablet-small.svg": __vite_glob_0_341,
  "/src/assets/img/yir-em-icon-tip.svg": __vite_glob_0_342,
  "/src/assets/img/yir-em-purple-star.svg": __vite_glob_0_343,
  "/src/assets/img/yir-icon-bar-chart.svg": __vite_glob_0_344,
  "/src/assets/img/yir-icon-behavior.svg": __vite_glob_0_345,
  "/src/assets/img/yir-icon-chart.svg": __vite_glob_0_346,
  "/src/assets/img/yir-icon-em-sessions.svg": __vite_glob_0_347,
  "/src/assets/img/yir-icon-em-visitors.svg": __vite_glob_0_348,
  "/src/assets/img/yir-icon-point.svg": __vite_glob_0_349,
  "/src/assets/img/yir-icon-world.svg": __vite_glob_0_350,
  "/src/assets/img/yir-map-bg.svg": __vite_glob_0_351,
  "/src/assets/img/yir-mi-hero.svg": __vite_glob_0_352,
  "/src/assets/img/yir-star.svg": __vite_glob_0_353,
  "/src/assets/img/yir-time-spent-table-icon.svg": __vite_glob_0_354
});
const images = { ...sharedImages, ...images$1 };
const devOrigin = "";
const getImageUrl = (path) => {
  const key = Object.keys(images).find((k) => k.endsWith(path));
  return key ? devOrigin + images[key] : "";
};
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ;
      else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
const entries = Object.entries, setPrototypeOf = Object.setPrototypeOf, isFrozen = Object.isFrozen, getPrototypeOf = Object.getPrototypeOf, getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
let freeze = Object.freeze, seal = Object.seal, create = Object.create;
let _ref = typeof Reflect !== "undefined" && Reflect, apply = _ref.apply, construct = _ref.construct;
if (!freeze) {
  freeze = function freeze2(x) {
    return x;
  };
}
if (!seal) {
  seal = function seal2(x) {
    return x;
  };
}
if (!apply) {
  apply = function apply2(func, thisArg) {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }
    return func.apply(thisArg, args);
  };
}
if (!construct) {
  construct = function construct2(Func) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    return new Func(...args);
  };
}
const arrayForEach = unapply(Array.prototype.forEach);
const arrayLastIndexOf = unapply(Array.prototype.lastIndexOf);
const arrayPop = unapply(Array.prototype.pop);
const arrayPush = unapply(Array.prototype.push);
const arraySplice = unapply(Array.prototype.splice);
const arrayIsArray = Array.isArray;
const stringToLowerCase = unapply(String.prototype.toLowerCase);
const stringToString = unapply(String.prototype.toString);
const stringMatch = unapply(String.prototype.match);
const stringReplace = unapply(String.prototype.replace);
const stringIndexOf = unapply(String.prototype.indexOf);
const stringTrim = unapply(String.prototype.trim);
const numberToString = unapply(Number.prototype.toString);
const booleanToString = unapply(Boolean.prototype.toString);
const bigintToString = typeof BigInt === "undefined" ? null : unapply(BigInt.prototype.toString);
const symbolToString = typeof Symbol === "undefined" ? null : unapply(Symbol.prototype.toString);
const objectHasOwnProperty = unapply(Object.prototype.hasOwnProperty);
const objectToString = unapply(Object.prototype.toString);
const regExpTest = unapply(RegExp.prototype.test);
const typeErrorCreate = unconstruct(TypeError);
function unapply(func) {
  return function(thisArg) {
    if (thisArg instanceof RegExp) {
      thisArg.lastIndex = 0;
    }
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }
    return apply(func, thisArg, args);
  };
}
function unconstruct(Func) {
  return function() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }
    return construct(Func, args);
  };
}
function addToSet(set, array) {
  let transformCaseFunc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : stringToLowerCase;
  if (setPrototypeOf) {
    setPrototypeOf(set, null);
  }
  if (!arrayIsArray(array)) {
    return set;
  }
  let l = array.length;
  while (l--) {
    let element = array[l];
    if (typeof element === "string") {
      const lcElement = transformCaseFunc(element);
      if (lcElement !== element) {
        if (!isFrozen(array)) {
          array[l] = lcElement;
        }
        element = lcElement;
      }
    }
    set[element] = true;
  }
  return set;
}
function cleanArray(array) {
  for (let index = 0; index < array.length; index++) {
    const isPropertyExist = objectHasOwnProperty(array, index);
    if (!isPropertyExist) {
      array[index] = null;
    }
  }
  return array;
}
function clone(object) {
  const newObject = create(null);
  for (const _ref2 of entries(object)) {
    var _ref3 = _slicedToArray(_ref2, 2);
    const property = _ref3[0];
    const value = _ref3[1];
    const isPropertyExist = objectHasOwnProperty(object, property);
    if (isPropertyExist) {
      if (arrayIsArray(value)) {
        newObject[property] = cleanArray(value);
      } else if (value && typeof value === "object" && value.constructor === Object) {
        newObject[property] = clone(value);
      } else {
        newObject[property] = value;
      }
    }
  }
  return newObject;
}
function stringifyValue(value) {
  switch (typeof value) {
    case "string": {
      return value;
    }
    case "number": {
      return numberToString(value);
    }
    case "boolean": {
      return booleanToString(value);
    }
    case "bigint": {
      return bigintToString ? bigintToString(value) : "0";
    }
    case "symbol": {
      return symbolToString ? symbolToString(value) : "Symbol()";
    }
    case "undefined": {
      return objectToString(value);
    }
    case "function":
    case "object": {
      if (value === null) {
        return objectToString(value);
      }
      const valueAsRecord = value;
      const valueToString = lookupGetter(valueAsRecord, "toString");
      if (typeof valueToString === "function") {
        const stringified = valueToString(valueAsRecord);
        return typeof stringified === "string" ? stringified : objectToString(stringified);
      }
      return objectToString(value);
    }
    default: {
      return objectToString(value);
    }
  }
}
function lookupGetter(object, prop) {
  while (object !== null) {
    const desc = getOwnPropertyDescriptor(object, prop);
    if (desc) {
      if (desc.get) {
        return unapply(desc.get);
      }
      if (typeof desc.value === "function") {
        return unapply(desc.value);
      }
    }
    object = getPrototypeOf(object);
  }
  function fallbackValue() {
    return null;
  }
  return fallbackValue;
}
function isRegex(value) {
  try {
    regExpTest(value, "");
    return true;
  } catch (_unused) {
    return false;
  }
}
const html$1 = freeze(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]);
const svg$1 = freeze(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]);
const svgFilters = freeze(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]);
const svgDisallowed = freeze(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]);
const mathMl$1 = freeze(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]);
const mathMlDisallowed = freeze(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]);
const text = freeze(["#text"]);
const html = freeze(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]);
const svg = freeze(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]);
const mathMl = freeze(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]);
const xml = freeze(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]);
const MUSTACHE_EXPR = seal(/{{[\w\W]*|^[\w\W]*}}/g);
const ERB_EXPR = seal(/<%[\w\W]*|^[\w\W]*%>/g);
const TMPLIT_EXPR = seal(/\${[\w\W]*/g);
const DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]+$/);
const ARIA_ATTR = seal(/^aria-[\-\w]+$/);
const IS_ALLOWED_URI = seal(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
);
const IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
const ATTR_WHITESPACE = seal(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
);
const DOCTYPE_NAME = seal(/^html$/i);
const CUSTOM_ELEMENT = seal(/^[a-z][.\w]*(-[.\w]+)+$/i);
const NODE_TYPE = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  // Deprecated
  entityNode: 6,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12
  // Deprecated
};
const getGlobal = function getGlobal2() {
  return typeof window === "undefined" ? null : window;
};
const _createTrustedTypesPolicy = function _createTrustedTypesPolicy2(trustedTypes, purifyHostElement) {
  if (typeof trustedTypes !== "object" || typeof trustedTypes.createPolicy !== "function") {
    return null;
  }
  let suffix = null;
  const ATTR_NAME = "data-tt-policy-suffix";
  if (purifyHostElement && purifyHostElement.hasAttribute(ATTR_NAME)) {
    suffix = purifyHostElement.getAttribute(ATTR_NAME);
  }
  const policyName = "dompurify" + (suffix ? "#" + suffix : "");
  try {
    return trustedTypes.createPolicy(policyName, {
      createHTML(html2) {
        return html2;
      },
      createScriptURL(scriptUrl) {
        return scriptUrl;
      }
    });
  } catch (_) {
    console.warn("TrustedTypes policy " + policyName + " could not be created.");
    return null;
  }
};
const _createHooksMap = function _createHooksMap2() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
};
function createDOMPurify() {
  let window2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getGlobal();
  const DOMPurify = (root) => createDOMPurify(root);
  DOMPurify.version = "3.4.8";
  DOMPurify.removed = [];
  if (!window2 || !window2.document || window2.document.nodeType !== NODE_TYPE.document || !window2.Element) {
    DOMPurify.isSupported = false;
    return DOMPurify;
  }
  let document2 = window2.document;
  const originalDocument = document2;
  const currentScript = originalDocument.currentScript;
  window2.DocumentFragment;
  const HTMLTemplateElement = window2.HTMLTemplateElement, Node2 = window2.Node, Element2 = window2.Element, NodeFilter = window2.NodeFilter, _window$NamedNodeMap = window2.NamedNodeMap;
  _window$NamedNodeMap === void 0 ? window2.NamedNodeMap || window2.MozNamedAttrMap : _window$NamedNodeMap;
  window2.HTMLFormElement;
  const DOMParser = window2.DOMParser, trustedTypes = window2.trustedTypes;
  const ElementPrototype = Element2.prototype;
  const cloneNode = lookupGetter(ElementPrototype, "cloneNode");
  const remove2 = lookupGetter(ElementPrototype, "remove");
  const getNextSibling = lookupGetter(ElementPrototype, "nextSibling");
  const getChildNodes = lookupGetter(ElementPrototype, "childNodes");
  const getParentNode = lookupGetter(ElementPrototype, "parentNode");
  const getShadowRoot = lookupGetter(ElementPrototype, "shadowRoot");
  const getAttributes = lookupGetter(ElementPrototype, "attributes");
  const getNodeType = Node2 && Node2.prototype ? lookupGetter(Node2.prototype, "nodeType") : null;
  const getNodeName = Node2 && Node2.prototype ? lookupGetter(Node2.prototype, "nodeName") : null;
  if (typeof HTMLTemplateElement === "function") {
    const template = document2.createElement("template");
    if (template.content && template.content.ownerDocument) {
      document2 = template.content.ownerDocument;
    }
  }
  let trustedTypesPolicy;
  let emptyHTML = "";
  let IN_POLICY_CREATE_HTML = 0;
  const _createTrustedHTML = function _createTrustedHTML2(html2) {
    if (IN_POLICY_CREATE_HTML > 0) {
      throw typeErrorCreate('The configured TRUSTED_TYPES_POLICY.createHTML must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose createHTML wraps DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
    }
    IN_POLICY_CREATE_HTML++;
    try {
      return trustedTypesPolicy.createHTML(html2);
    } finally {
      IN_POLICY_CREATE_HTML--;
    }
  };
  const _document = document2, implementation = _document.implementation, createNodeIterator = _document.createNodeIterator, createDocumentFragment = _document.createDocumentFragment, getElementsByTagName = _document.getElementsByTagName;
  const importNode = originalDocument.importNode;
  let hooks = _createHooksMap();
  DOMPurify.isSupported = typeof entries === "function" && typeof getParentNode === "function" && implementation && implementation.createHTMLDocument !== void 0;
  const MUSTACHE_EXPR$1 = MUSTACHE_EXPR, ERB_EXPR$1 = ERB_EXPR, TMPLIT_EXPR$1 = TMPLIT_EXPR, DATA_ATTR$1 = DATA_ATTR, ARIA_ATTR$1 = ARIA_ATTR, IS_SCRIPT_OR_DATA$1 = IS_SCRIPT_OR_DATA, ATTR_WHITESPACE$1 = ATTR_WHITESPACE, CUSTOM_ELEMENT$1 = CUSTOM_ELEMENT;
  let IS_ALLOWED_URI$1 = IS_ALLOWED_URI;
  let ALLOWED_TAGS = null;
  const DEFAULT_ALLOWED_TAGS = addToSet({}, [...html$1, ...svg$1, ...svgFilters, ...mathMl$1, ...text]);
  let ALLOWED_ATTR = null;
  const DEFAULT_ALLOWED_ATTR = addToSet({}, [...html, ...svg, ...mathMl, ...xml]);
  let CUSTOM_ELEMENT_HANDLING = Object.seal(create(null, {
    tagNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    attributeNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: false
    }
  }));
  let FORBID_TAGS = null;
  let FORBID_ATTR = null;
  const EXTRA_ELEMENT_HANDLING = Object.seal(create(null, {
    tagCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    attributeCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    }
  }));
  let ALLOW_ARIA_ATTR = true;
  let ALLOW_DATA_ATTR = true;
  let ALLOW_UNKNOWN_PROTOCOLS = false;
  let ALLOW_SELF_CLOSE_IN_ATTR = true;
  let SAFE_FOR_TEMPLATES = false;
  let SAFE_FOR_XML = true;
  let WHOLE_DOCUMENT = false;
  let SET_CONFIG = false;
  let FORCE_BODY = false;
  let RETURN_DOM = false;
  let RETURN_DOM_FRAGMENT = false;
  let RETURN_TRUSTED_TYPE = false;
  let SANITIZE_DOM = true;
  let SANITIZE_NAMED_PROPS = false;
  const SANITIZE_NAMED_PROPS_PREFIX = "user-content-";
  let KEEP_CONTENT = true;
  let IN_PLACE = false;
  let USE_PROFILES = {};
  let FORBID_CONTENTS = null;
  const DEFAULT_FORBID_CONTENTS = addToSet({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let DATA_URI_TAGS = null;
  const DEFAULT_DATA_URI_TAGS = addToSet({}, ["audio", "video", "img", "source", "image", "track"]);
  let URI_SAFE_ATTRIBUTES = null;
  const DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]);
  const MATHML_NAMESPACE = "http://www.w3.org/1998/Math/MathML";
  const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
  const HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
  let NAMESPACE = HTML_NAMESPACE;
  let IS_EMPTY_INPUT = false;
  let ALLOWED_NAMESPACES = null;
  const DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [MATHML_NAMESPACE, SVG_NAMESPACE, HTML_NAMESPACE], stringToString);
  let MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, ["mi", "mo", "mn", "ms", "mtext"]);
  let HTML_INTEGRATION_POINTS = addToSet({}, ["annotation-xml"]);
  const COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, ["title", "style", "font", "a", "script"]);
  let PARSER_MEDIA_TYPE = null;
  const SUPPORTED_PARSER_MEDIA_TYPES = ["application/xhtml+xml", "text/html"];
  const DEFAULT_PARSER_MEDIA_TYPE = "text/html";
  let transformCaseFunc = null;
  let CONFIG = null;
  const formElement = document2.createElement("form");
  const isRegexOrFunction = function isRegexOrFunction2(testValue) {
    return testValue instanceof RegExp || testValue instanceof Function;
  };
  const _parseConfig = function _parseConfig2() {
    let cfg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (CONFIG && CONFIG === cfg) {
      return;
    }
    if (!cfg || typeof cfg !== "object") {
      cfg = {};
    }
    cfg = clone(cfg);
    PARSER_MEDIA_TYPE = // eslint-disable-next-line unicorn/prefer-includes
    SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? DEFAULT_PARSER_MEDIA_TYPE : cfg.PARSER_MEDIA_TYPE;
    transformCaseFunc = PARSER_MEDIA_TYPE === "application/xhtml+xml" ? stringToString : stringToLowerCase;
    ALLOWED_TAGS = objectHasOwnProperty(cfg, "ALLOWED_TAGS") && arrayIsArray(cfg.ALLOWED_TAGS) ? addToSet({}, cfg.ALLOWED_TAGS, transformCaseFunc) : DEFAULT_ALLOWED_TAGS;
    ALLOWED_ATTR = objectHasOwnProperty(cfg, "ALLOWED_ATTR") && arrayIsArray(cfg.ALLOWED_ATTR) ? addToSet({}, cfg.ALLOWED_ATTR, transformCaseFunc) : DEFAULT_ALLOWED_ATTR;
    ALLOWED_NAMESPACES = objectHasOwnProperty(cfg, "ALLOWED_NAMESPACES") && arrayIsArray(cfg.ALLOWED_NAMESPACES) ? addToSet({}, cfg.ALLOWED_NAMESPACES, stringToString) : DEFAULT_ALLOWED_NAMESPACES;
    URI_SAFE_ATTRIBUTES = objectHasOwnProperty(cfg, "ADD_URI_SAFE_ATTR") && arrayIsArray(cfg.ADD_URI_SAFE_ATTR) ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES), cfg.ADD_URI_SAFE_ATTR, transformCaseFunc) : DEFAULT_URI_SAFE_ATTRIBUTES;
    DATA_URI_TAGS = objectHasOwnProperty(cfg, "ADD_DATA_URI_TAGS") && arrayIsArray(cfg.ADD_DATA_URI_TAGS) ? addToSet(clone(DEFAULT_DATA_URI_TAGS), cfg.ADD_DATA_URI_TAGS, transformCaseFunc) : DEFAULT_DATA_URI_TAGS;
    FORBID_CONTENTS = objectHasOwnProperty(cfg, "FORBID_CONTENTS") && arrayIsArray(cfg.FORBID_CONTENTS) ? addToSet({}, cfg.FORBID_CONTENTS, transformCaseFunc) : DEFAULT_FORBID_CONTENTS;
    FORBID_TAGS = objectHasOwnProperty(cfg, "FORBID_TAGS") && arrayIsArray(cfg.FORBID_TAGS) ? addToSet({}, cfg.FORBID_TAGS, transformCaseFunc) : clone({});
    FORBID_ATTR = objectHasOwnProperty(cfg, "FORBID_ATTR") && arrayIsArray(cfg.FORBID_ATTR) ? addToSet({}, cfg.FORBID_ATTR, transformCaseFunc) : clone({});
    USE_PROFILES = objectHasOwnProperty(cfg, "USE_PROFILES") ? cfg.USE_PROFILES && typeof cfg.USE_PROFILES === "object" ? clone(cfg.USE_PROFILES) : cfg.USE_PROFILES : false;
    ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false;
    ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false;
    ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false;
    ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false;
    SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false;
    SAFE_FOR_XML = cfg.SAFE_FOR_XML !== false;
    WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false;
    RETURN_DOM = cfg.RETURN_DOM || false;
    RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false;
    RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false;
    FORCE_BODY = cfg.FORCE_BODY || false;
    SANITIZE_DOM = cfg.SANITIZE_DOM !== false;
    SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false;
    KEEP_CONTENT = cfg.KEEP_CONTENT !== false;
    IN_PLACE = cfg.IN_PLACE || false;
    IS_ALLOWED_URI$1 = isRegex(cfg.ALLOWED_URI_REGEXP) ? cfg.ALLOWED_URI_REGEXP : IS_ALLOWED_URI;
    NAMESPACE = typeof cfg.NAMESPACE === "string" ? cfg.NAMESPACE : HTML_NAMESPACE;
    MATHML_TEXT_INTEGRATION_POINTS = objectHasOwnProperty(cfg, "MATHML_TEXT_INTEGRATION_POINTS") && cfg.MATHML_TEXT_INTEGRATION_POINTS && typeof cfg.MATHML_TEXT_INTEGRATION_POINTS === "object" ? clone(cfg.MATHML_TEXT_INTEGRATION_POINTS) : addToSet({}, ["mi", "mo", "mn", "ms", "mtext"]);
    HTML_INTEGRATION_POINTS = objectHasOwnProperty(cfg, "HTML_INTEGRATION_POINTS") && cfg.HTML_INTEGRATION_POINTS && typeof cfg.HTML_INTEGRATION_POINTS === "object" ? clone(cfg.HTML_INTEGRATION_POINTS) : addToSet({}, ["annotation-xml"]);
    const customElementHandling = objectHasOwnProperty(cfg, "CUSTOM_ELEMENT_HANDLING") && cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING === "object" ? clone(cfg.CUSTOM_ELEMENT_HANDLING) : create(null);
    CUSTOM_ELEMENT_HANDLING = create(null);
    if (objectHasOwnProperty(customElementHandling, "tagNameCheck") && isRegexOrFunction(customElementHandling.tagNameCheck)) {
      CUSTOM_ELEMENT_HANDLING.tagNameCheck = customElementHandling.tagNameCheck;
    }
    if (objectHasOwnProperty(customElementHandling, "attributeNameCheck") && isRegexOrFunction(customElementHandling.attributeNameCheck)) {
      CUSTOM_ELEMENT_HANDLING.attributeNameCheck = customElementHandling.attributeNameCheck;
    }
    if (objectHasOwnProperty(customElementHandling, "allowCustomizedBuiltInElements") && typeof customElementHandling.allowCustomizedBuiltInElements === "boolean") {
      CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = customElementHandling.allowCustomizedBuiltInElements;
    }
    if (SAFE_FOR_TEMPLATES) {
      ALLOW_DATA_ATTR = false;
    }
    if (RETURN_DOM_FRAGMENT) {
      RETURN_DOM = true;
    }
    if (USE_PROFILES) {
      ALLOWED_TAGS = addToSet({}, text);
      ALLOWED_ATTR = create(null);
      if (USE_PROFILES.html === true) {
        addToSet(ALLOWED_TAGS, html$1);
        addToSet(ALLOWED_ATTR, html);
      }
      if (USE_PROFILES.svg === true) {
        addToSet(ALLOWED_TAGS, svg$1);
        addToSet(ALLOWED_ATTR, svg);
        addToSet(ALLOWED_ATTR, xml);
      }
      if (USE_PROFILES.svgFilters === true) {
        addToSet(ALLOWED_TAGS, svgFilters);
        addToSet(ALLOWED_ATTR, svg);
        addToSet(ALLOWED_ATTR, xml);
      }
      if (USE_PROFILES.mathMl === true) {
        addToSet(ALLOWED_TAGS, mathMl$1);
        addToSet(ALLOWED_ATTR, mathMl);
        addToSet(ALLOWED_ATTR, xml);
      }
    }
    EXTRA_ELEMENT_HANDLING.tagCheck = null;
    EXTRA_ELEMENT_HANDLING.attributeCheck = null;
    if (objectHasOwnProperty(cfg, "ADD_TAGS")) {
      if (typeof cfg.ADD_TAGS === "function") {
        EXTRA_ELEMENT_HANDLING.tagCheck = cfg.ADD_TAGS;
      } else if (arrayIsArray(cfg.ADD_TAGS)) {
        if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
          ALLOWED_TAGS = clone(ALLOWED_TAGS);
        }
        addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
      }
    }
    if (objectHasOwnProperty(cfg, "ADD_ATTR")) {
      if (typeof cfg.ADD_ATTR === "function") {
        EXTRA_ELEMENT_HANDLING.attributeCheck = cfg.ADD_ATTR;
      } else if (arrayIsArray(cfg.ADD_ATTR)) {
        if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
          ALLOWED_ATTR = clone(ALLOWED_ATTR);
        }
        addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
      }
    }
    if (objectHasOwnProperty(cfg, "ADD_URI_SAFE_ATTR") && arrayIsArray(cfg.ADD_URI_SAFE_ATTR)) {
      addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
    }
    if (objectHasOwnProperty(cfg, "FORBID_CONTENTS") && arrayIsArray(cfg.FORBID_CONTENTS)) {
      if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
        FORBID_CONTENTS = clone(FORBID_CONTENTS);
      }
      addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS, transformCaseFunc);
    }
    if (objectHasOwnProperty(cfg, "ADD_FORBID_CONTENTS") && arrayIsArray(cfg.ADD_FORBID_CONTENTS)) {
      if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
        FORBID_CONTENTS = clone(FORBID_CONTENTS);
      }
      addToSet(FORBID_CONTENTS, cfg.ADD_FORBID_CONTENTS, transformCaseFunc);
    }
    if (KEEP_CONTENT) {
      ALLOWED_TAGS["#text"] = true;
    }
    if (WHOLE_DOCUMENT) {
      addToSet(ALLOWED_TAGS, ["html", "head", "body"]);
    }
    if (ALLOWED_TAGS.table) {
      addToSet(ALLOWED_TAGS, ["tbody"]);
      delete FORBID_TAGS.tbody;
    }
    if (cfg.TRUSTED_TYPES_POLICY) {
      if (typeof cfg.TRUSTED_TYPES_POLICY.createHTML !== "function") {
        throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      }
      if (typeof cfg.TRUSTED_TYPES_POLICY.createScriptURL !== "function") {
        throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      }
      const previousTrustedTypesPolicy = trustedTypesPolicy;
      trustedTypesPolicy = cfg.TRUSTED_TYPES_POLICY;
      try {
        emptyHTML = _createTrustedHTML("");
      } catch (error) {
        trustedTypesPolicy = previousTrustedTypesPolicy;
        throw error;
      }
    } else {
      if (trustedTypesPolicy === void 0 && cfg.TRUSTED_TYPES_POLICY !== null) {
        trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, currentScript);
      }
      if (trustedTypesPolicy && typeof emptyHTML === "string") {
        emptyHTML = _createTrustedHTML("");
      }
    }
    if ((hooks.uponSanitizeElement.length > 0 || hooks.uponSanitizeAttribute.length > 0) && ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
      ALLOWED_TAGS = clone(ALLOWED_TAGS);
    }
    if (hooks.uponSanitizeAttribute.length > 0 && ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
      ALLOWED_ATTR = clone(ALLOWED_ATTR);
    }
    if (freeze) {
      freeze(cfg);
    }
    CONFIG = cfg;
  };
  const ALL_SVG_TAGS = addToSet({}, [...svg$1, ...svgFilters, ...svgDisallowed]);
  const ALL_MATHML_TAGS = addToSet({}, [...mathMl$1, ...mathMlDisallowed]);
  const _checkValidNamespace = function _checkValidNamespace2(element) {
    let parent = getParentNode(element);
    if (!parent || !parent.tagName) {
      parent = {
        namespaceURI: NAMESPACE,
        tagName: "template"
      };
    }
    const tagName = stringToLowerCase(element.tagName);
    const parentTagName = stringToLowerCase(parent.tagName);
    if (!ALLOWED_NAMESPACES[element.namespaceURI]) {
      return false;
    }
    if (element.namespaceURI === SVG_NAMESPACE) {
      if (parent.namespaceURI === HTML_NAMESPACE) {
        return tagName === "svg";
      }
      if (parent.namespaceURI === MATHML_NAMESPACE) {
        return tagName === "svg" && (parentTagName === "annotation-xml" || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
      }
      return Boolean(ALL_SVG_TAGS[tagName]);
    }
    if (element.namespaceURI === MATHML_NAMESPACE) {
      if (parent.namespaceURI === HTML_NAMESPACE) {
        return tagName === "math";
      }
      if (parent.namespaceURI === SVG_NAMESPACE) {
        return tagName === "math" && HTML_INTEGRATION_POINTS[parentTagName];
      }
      return Boolean(ALL_MATHML_TAGS[tagName]);
    }
    if (element.namespaceURI === HTML_NAMESPACE) {
      if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
        return false;
      }
      if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
        return false;
      }
      return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
    }
    if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && ALLOWED_NAMESPACES[element.namespaceURI]) {
      return true;
    }
    return false;
  };
  const _forceRemove = function _forceRemove2(node) {
    arrayPush(DOMPurify.removed, {
      element: node
    });
    try {
      getParentNode(node).removeChild(node);
    } catch (_) {
      remove2(node);
    }
  };
  const _removeAttribute = function _removeAttribute2(name, element) {
    try {
      arrayPush(DOMPurify.removed, {
        attribute: element.getAttributeNode(name),
        from: element
      });
    } catch (_) {
      arrayPush(DOMPurify.removed, {
        attribute: null,
        from: element
      });
    }
    element.removeAttribute(name);
    if (name === "is") {
      if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
        try {
          _forceRemove(element);
        } catch (_) {
        }
      } else {
        try {
          element.setAttribute(name, "");
        } catch (_) {
        }
      }
    }
  };
  const _initDocument = function _initDocument2(dirty) {
    let doc2 = null;
    let leadingWhitespace = null;
    if (FORCE_BODY) {
      dirty = "<remove></remove>" + dirty;
    } else {
      const matches2 = stringMatch(dirty, /^[\r\n\t ]+/);
      leadingWhitespace = matches2 && matches2[0];
    }
    if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && NAMESPACE === HTML_NAMESPACE) {
      dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + "</body></html>";
    }
    const dirtyPayload = trustedTypesPolicy ? _createTrustedHTML(dirty) : dirty;
    if (NAMESPACE === HTML_NAMESPACE) {
      try {
        doc2 = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
      } catch (_) {
      }
    }
    if (!doc2 || !doc2.documentElement) {
      doc2 = implementation.createDocument(NAMESPACE, "template", null);
      try {
        doc2.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
      } catch (_) {
      }
    }
    const body = doc2.body || doc2.documentElement;
    if (dirty && leadingWhitespace) {
      body.insertBefore(document2.createTextNode(leadingWhitespace), body.childNodes[0] || null);
    }
    if (NAMESPACE === HTML_NAMESPACE) {
      return getElementsByTagName.call(doc2, WHOLE_DOCUMENT ? "html" : "body")[0];
    }
    return WHOLE_DOCUMENT ? doc2.documentElement : body;
  };
  const _createNodeIterator = function _createNodeIterator2(root) {
    return createNodeIterator.call(
      root.ownerDocument || root,
      root,
      // eslint-disable-next-line no-bitwise
      NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT | NodeFilter.SHOW_PROCESSING_INSTRUCTION | NodeFilter.SHOW_CDATA_SECTION,
      null
    );
  };
  const _scrubTemplateExpressions2 = function _scrubTemplateExpressions(node) {
    var _node$querySelectorAl, _node$querySelectorAl2;
    node.normalize();
    const walker = createNodeIterator.call(
      node.ownerDocument || node,
      node,
      // eslint-disable-next-line no-bitwise
      NodeFilter.SHOW_TEXT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_CDATA_SECTION | NodeFilter.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let currentNode = walker.nextNode();
    while (currentNode) {
      let data = currentNode.data;
      arrayForEach([MUSTACHE_EXPR$1, ERB_EXPR$1, TMPLIT_EXPR$1], (expr) => {
        data = stringReplace(data, expr, " ");
      });
      currentNode.data = data;
      currentNode = walker.nextNode();
    }
    const templates = (_node$querySelectorAl = (_node$querySelectorAl2 = node.querySelectorAll) === null || _node$querySelectorAl2 === void 0 ? void 0 : _node$querySelectorAl2.call(node, "template")) !== null && _node$querySelectorAl !== void 0 ? _node$querySelectorAl : [];
    arrayForEach(Array.from(templates), (tmpl) => {
      if (_isDocumentFragment(tmpl.content)) {
        _scrubTemplateExpressions2(tmpl.content);
      }
    });
  };
  const _isClobbered = function _isClobbered2(element) {
    const realTagName = getNodeName ? getNodeName(element) : null;
    if (typeof realTagName !== "string") {
      return false;
    }
    if (transformCaseFunc(realTagName) !== "form") {
      return false;
    }
    return typeof element.nodeName !== "string" || typeof element.textContent !== "string" || typeof element.removeChild !== "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    element.attributes !== getAttributes(element) || typeof element.removeAttribute !== "function" || typeof element.setAttribute !== "function" || typeof element.namespaceURI !== "string" || typeof element.insertBefore !== "function" || typeof element.hasChildNodes !== "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    element.nodeType !== getNodeType(element) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
    // "childNodes" shadows the prototype getter. Direct reads of
    // form.childNodes from a clobbered form return the named child
    // instead of the real NodeList, so any walk that reads it directly
    // skips the form's real children. Compare the direct read to the
    // cached Node.prototype getter — when the form's named-property
    // getter intercepts the read, the two values differ and we flag
    // the form. This catches every clobbering child type (input,
    // select, etc.) regardless of whether the named child happens to
    // carry a numeric .length, which a typeof-based probe would miss
    // (e.g. HTMLSelectElement.length is a defined unsigned-long).
    element.childNodes !== getChildNodes(element);
  };
  const _isDocumentFragment = function _isDocumentFragment2(value) {
    if (!getNodeType || typeof value !== "object" || value === null) {
      return false;
    }
    try {
      return getNodeType(value) === NODE_TYPE.documentFragment;
    } catch (_) {
      return false;
    }
  };
  const _isNode = function _isNode2(value) {
    if (!getNodeType || typeof value !== "object" || value === null) {
      return false;
    }
    try {
      return typeof getNodeType(value) === "number";
    } catch (_) {
      return false;
    }
  };
  function _executeHooks(hooks2, currentNode, data) {
    arrayForEach(hooks2, (hook) => {
      hook.call(DOMPurify, currentNode, data, CONFIG);
    });
  }
  const _sanitizeElements = function _sanitizeElements2(currentNode) {
    let content = null;
    _executeHooks(hooks.beforeSanitizeElements, currentNode, null);
    if (_isClobbered(currentNode)) {
      _forceRemove(currentNode);
      return true;
    }
    const tagName = transformCaseFunc(getNodeName ? getNodeName(currentNode) : currentNode.nodeName);
    _executeHooks(hooks.uponSanitizeElement, currentNode, {
      tagName,
      allowedTags: ALLOWED_TAGS
    });
    if (SAFE_FOR_XML && currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && regExpTest(/<[/\w!]/g, currentNode.innerHTML) && regExpTest(/<[/\w!]/g, currentNode.textContent)) {
      _forceRemove(currentNode);
      return true;
    }
    if (SAFE_FOR_XML && currentNode.namespaceURI === HTML_NAMESPACE && tagName === "style" && _isNode(currentNode.firstElementChild)) {
      _forceRemove(currentNode);
      return true;
    }
    if (currentNode.nodeType === NODE_TYPE.progressingInstruction) {
      _forceRemove(currentNode);
      return true;
    }
    if (SAFE_FOR_XML && currentNode.nodeType === NODE_TYPE.comment && regExpTest(/<[/\w]/g, currentNode.data)) {
      _forceRemove(currentNode);
      return true;
    }
    if (FORBID_TAGS[tagName] || !(EXTRA_ELEMENT_HANDLING.tagCheck instanceof Function && EXTRA_ELEMENT_HANDLING.tagCheck(tagName)) && !ALLOWED_TAGS[tagName]) {
      if (!FORBID_TAGS[tagName] && _isBasicCustomElement(tagName)) {
        if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) {
          return false;
        }
        if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName)) {
          return false;
        }
      }
      if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
        const parentNode = getParentNode(currentNode);
        const childNodes = getChildNodes(currentNode);
        if (childNodes && parentNode) {
          const childCount = childNodes.length;
          for (let i = childCount - 1; i >= 0; --i) {
            const childClone = cloneNode(childNodes[i], true);
            parentNode.insertBefore(childClone, getNextSibling(currentNode));
          }
        }
      }
      _forceRemove(currentNode);
      return true;
    }
    const nt = getNodeType ? getNodeType(currentNode) : currentNode.nodeType;
    if (nt === NODE_TYPE.element && !_checkValidNamespace(currentNode)) {
      _forceRemove(currentNode);
      return true;
    }
    if ((tagName === "noscript" || tagName === "noembed" || tagName === "noframes") && regExpTest(/<\/no(script|embed|frames)/i, currentNode.innerHTML)) {
      _forceRemove(currentNode);
      return true;
    }
    if (SAFE_FOR_TEMPLATES && currentNode.nodeType === NODE_TYPE.text) {
      content = currentNode.textContent;
      arrayForEach([MUSTACHE_EXPR$1, ERB_EXPR$1, TMPLIT_EXPR$1], (expr) => {
        content = stringReplace(content, expr, " ");
      });
      if (currentNode.textContent !== content) {
        arrayPush(DOMPurify.removed, {
          element: currentNode.cloneNode()
        });
        currentNode.textContent = content;
      }
    }
    _executeHooks(hooks.afterSanitizeElements, currentNode, null);
    return false;
  };
  const _isValidAttribute = function _isValidAttribute2(lcTag, lcName, value) {
    if (FORBID_ATTR[lcName]) {
      return false;
    }
    if (SANITIZE_DOM && (lcName === "id" || lcName === "name") && (value in document2 || value in formElement)) {
      return false;
    }
    const nameIsPermitted = ALLOWED_ATTR[lcName] || EXTRA_ELEMENT_HANDLING.attributeCheck instanceof Function && EXTRA_ELEMENT_HANDLING.attributeCheck(lcName, lcTag);
    if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR$1, lcName)) ;
    else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR$1, lcName)) ;
    else if (!nameIsPermitted || FORBID_ATTR[lcName]) {
      if (
        // First condition does a very basic check if a) it's basically a valid custom element tagname AND
        // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
        _isBasicCustomElement(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName, lcTag)) || // Alternative, second condition checks if it's an `is`-attribute, AND
        // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        lcName === "is" && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value))
      ) ;
      else {
        return false;
      }
    } else if (URI_SAFE_ATTRIBUTES[lcName]) ;
    else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE$1, ""))) ;
    else if ((lcName === "src" || lcName === "xlink:href" || lcName === "href") && lcTag !== "script" && stringIndexOf(value, "data:") === 0 && DATA_URI_TAGS[lcTag]) ;
    else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA$1, stringReplace(value, ATTR_WHITESPACE$1, ""))) ;
    else if (value) {
      return false;
    } else ;
    return true;
  };
  const RESERVED_CUSTOM_ELEMENT_NAMES = addToSet({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]);
  const _isBasicCustomElement = function _isBasicCustomElement2(tagName) {
    return !RESERVED_CUSTOM_ELEMENT_NAMES[stringToLowerCase(tagName)] && regExpTest(CUSTOM_ELEMENT$1, tagName);
  };
  const _sanitizeAttributes = function _sanitizeAttributes2(currentNode) {
    _executeHooks(hooks.beforeSanitizeAttributes, currentNode, null);
    const attributes = currentNode.attributes;
    if (!attributes || _isClobbered(currentNode)) {
      return;
    }
    const hookEvent = {
      attrName: "",
      attrValue: "",
      keepAttr: true,
      allowedAttributes: ALLOWED_ATTR,
      forceKeepAttr: void 0
    };
    let l = attributes.length;
    while (l--) {
      const attr = attributes[l];
      const name = attr.name, namespaceURI = attr.namespaceURI, attrValue = attr.value;
      const lcName = transformCaseFunc(name);
      const initValue = attrValue;
      let value = name === "value" ? initValue : stringTrim(initValue);
      hookEvent.attrName = lcName;
      hookEvent.attrValue = value;
      hookEvent.keepAttr = true;
      hookEvent.forceKeepAttr = void 0;
      _executeHooks(hooks.uponSanitizeAttribute, currentNode, hookEvent);
      value = hookEvent.attrValue;
      if (SANITIZE_NAMED_PROPS && (lcName === "id" || lcName === "name") && stringIndexOf(value, SANITIZE_NAMED_PROPS_PREFIX) !== 0) {
        _removeAttribute(name, currentNode);
        value = SANITIZE_NAMED_PROPS_PREFIX + value;
      }
      if (SAFE_FOR_XML && regExpTest(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, value)) {
        _removeAttribute(name, currentNode);
        continue;
      }
      if (lcName === "attributename" && stringMatch(value, "href")) {
        _removeAttribute(name, currentNode);
        continue;
      }
      if (hookEvent.forceKeepAttr) {
        continue;
      }
      if (!hookEvent.keepAttr) {
        _removeAttribute(name, currentNode);
        continue;
      }
      if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(/\/>/i, value)) {
        _removeAttribute(name, currentNode);
        continue;
      }
      if (SAFE_FOR_TEMPLATES) {
        arrayForEach([MUSTACHE_EXPR$1, ERB_EXPR$1, TMPLIT_EXPR$1], (expr) => {
          value = stringReplace(value, expr, " ");
        });
      }
      const lcTag = transformCaseFunc(currentNode.nodeName);
      if (!_isValidAttribute(lcTag, lcName, value)) {
        _removeAttribute(name, currentNode);
        continue;
      }
      if (trustedTypesPolicy && typeof trustedTypes === "object" && typeof trustedTypes.getAttributeType === "function") {
        if (namespaceURI) ;
        else {
          switch (trustedTypes.getAttributeType(lcTag, lcName)) {
            case "TrustedHTML": {
              value = _createTrustedHTML(value);
              break;
            }
            case "TrustedScriptURL": {
              value = trustedTypesPolicy.createScriptURL(value);
              break;
            }
          }
        }
      }
      if (value !== initValue) {
        try {
          if (namespaceURI) {
            currentNode.setAttributeNS(namespaceURI, name, value);
          } else {
            currentNode.setAttribute(name, value);
          }
          if (_isClobbered(currentNode)) {
            _forceRemove(currentNode);
          } else {
            arrayPop(DOMPurify.removed);
          }
        } catch (_) {
          _removeAttribute(name, currentNode);
        }
      }
    }
    _executeHooks(hooks.afterSanitizeAttributes, currentNode, null);
  };
  const _sanitizeShadowDOM2 = function _sanitizeShadowDOM(fragment) {
    let shadowNode = null;
    const shadowIterator = _createNodeIterator(fragment);
    _executeHooks(hooks.beforeSanitizeShadowDOM, fragment, null);
    while (shadowNode = shadowIterator.nextNode()) {
      _executeHooks(hooks.uponSanitizeShadowNode, shadowNode, null);
      _sanitizeElements(shadowNode);
      _sanitizeAttributes(shadowNode);
      if (_isDocumentFragment(shadowNode.content)) {
        _sanitizeShadowDOM2(shadowNode.content);
      }
      const shadowNodeType = getNodeType ? getNodeType(shadowNode) : shadowNode.nodeType;
      if (shadowNodeType === NODE_TYPE.element) {
        const innerSr = getShadowRoot ? getShadowRoot(shadowNode) : shadowNode.shadowRoot;
        if (_isDocumentFragment(innerSr)) {
          _sanitizeAttachedShadowRoots2(innerSr);
          _sanitizeShadowDOM2(innerSr);
        }
      }
    }
    _executeHooks(hooks.afterSanitizeShadowDOM, fragment, null);
  };
  const _sanitizeAttachedShadowRoots2 = function _sanitizeAttachedShadowRoots(root) {
    const nodeType = getNodeType ? getNodeType(root) : root.nodeType;
    if (nodeType === NODE_TYPE.element) {
      const sr = getShadowRoot ? getShadowRoot(root) : root.shadowRoot;
      if (_isDocumentFragment(sr)) {
        _sanitizeAttachedShadowRoots2(sr);
        _sanitizeShadowDOM2(sr);
      }
    }
    const childNodes = getChildNodes ? getChildNodes(root) : root.childNodes;
    if (!childNodes) {
      return;
    }
    const snapshot = [];
    arrayForEach(childNodes, (child) => {
      arrayPush(snapshot, child);
    });
    for (const child of snapshot) {
      _sanitizeAttachedShadowRoots2(child);
    }
    if (nodeType === NODE_TYPE.element) {
      const rootName = getNodeName ? getNodeName(root) : null;
      if (typeof rootName === "string" && transformCaseFunc(rootName) === "template") {
        const content = root.content;
        if (_isDocumentFragment(content)) {
          _sanitizeAttachedShadowRoots2(content);
        }
      }
    }
  };
  DOMPurify.sanitize = function(dirty) {
    let cfg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let body = null;
    let importedNode = null;
    let currentNode = null;
    let returnNode = null;
    IS_EMPTY_INPUT = !dirty;
    if (IS_EMPTY_INPUT) {
      dirty = "<!-->";
    }
    if (typeof dirty !== "string" && !_isNode(dirty)) {
      dirty = stringifyValue(dirty);
      if (typeof dirty !== "string") {
        throw typeErrorCreate("dirty is not a string, aborting");
      }
    }
    if (!DOMPurify.isSupported) {
      return dirty;
    }
    if (!SET_CONFIG) {
      _parseConfig(cfg);
    }
    DOMPurify.removed = [];
    if (typeof dirty === "string") {
      IN_PLACE = false;
    }
    if (IN_PLACE) {
      const nn = getNodeName ? getNodeName(dirty) : dirty.nodeName;
      if (typeof nn === "string") {
        const tagName = transformCaseFunc(nn);
        if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
          throw typeErrorCreate("root node is forbidden and cannot be sanitized in-place");
        }
      }
      if (_isClobbered(dirty)) {
        throw typeErrorCreate("root node is clobbered and cannot be sanitized in-place");
      }
      _sanitizeAttachedShadowRoots2(dirty);
    } else if (_isNode(dirty)) {
      body = _initDocument("<!---->");
      importedNode = body.ownerDocument.importNode(dirty, true);
      if (importedNode.nodeType === NODE_TYPE.element && importedNode.nodeName === "BODY") {
        body = importedNode;
      } else if (importedNode.nodeName === "HTML") {
        body = importedNode;
      } else {
        body.appendChild(importedNode);
      }
      _sanitizeAttachedShadowRoots2(importedNode);
    } else {
      if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && // eslint-disable-next-line unicorn/prefer-includes
      dirty.indexOf("<") === -1) {
        return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? _createTrustedHTML(dirty) : dirty;
      }
      body = _initDocument(dirty);
      if (!body) {
        return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : "";
      }
    }
    if (body && FORCE_BODY) {
      _forceRemove(body.firstChild);
    }
    const nodeIterator = _createNodeIterator(IN_PLACE ? dirty : body);
    while (currentNode = nodeIterator.nextNode()) {
      _sanitizeElements(currentNode);
      _sanitizeAttributes(currentNode);
      if (_isDocumentFragment(currentNode.content)) {
        _sanitizeShadowDOM2(currentNode.content);
      }
    }
    if (IN_PLACE) {
      if (SAFE_FOR_TEMPLATES) {
        _scrubTemplateExpressions2(dirty);
      }
      return dirty;
    }
    if (RETURN_DOM) {
      if (SAFE_FOR_TEMPLATES) {
        _scrubTemplateExpressions2(body);
      }
      if (RETURN_DOM_FRAGMENT) {
        returnNode = createDocumentFragment.call(body.ownerDocument);
        while (body.firstChild) {
          returnNode.appendChild(body.firstChild);
        }
      } else {
        returnNode = body;
      }
      if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmode) {
        returnNode = importNode.call(originalDocument, returnNode, true);
      }
      return returnNode;
    }
    let serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
    if (WHOLE_DOCUMENT && ALLOWED_TAGS["!doctype"] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) {
      serializedHTML = "<!DOCTYPE " + body.ownerDocument.doctype.name + ">\n" + serializedHTML;
    }
    if (SAFE_FOR_TEMPLATES) {
      arrayForEach([MUSTACHE_EXPR$1, ERB_EXPR$1, TMPLIT_EXPR$1], (expr) => {
        serializedHTML = stringReplace(serializedHTML, expr, " ");
      });
    }
    return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? _createTrustedHTML(serializedHTML) : serializedHTML;
  };
  DOMPurify.setConfig = function() {
    let cfg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _parseConfig(cfg);
    SET_CONFIG = true;
  };
  DOMPurify.clearConfig = function() {
    CONFIG = null;
    SET_CONFIG = false;
  };
  DOMPurify.isValidAttribute = function(tag, attr, value) {
    if (!CONFIG) {
      _parseConfig({});
    }
    const lcTag = transformCaseFunc(tag);
    const lcName = transformCaseFunc(attr);
    return _isValidAttribute(lcTag, lcName, value);
  };
  DOMPurify.addHook = function(entryPoint, hookFunction) {
    if (typeof hookFunction !== "function") {
      return;
    }
    arrayPush(hooks[entryPoint], hookFunction);
  };
  DOMPurify.removeHook = function(entryPoint, hookFunction) {
    if (hookFunction !== void 0) {
      const index = arrayLastIndexOf(hooks[entryPoint], hookFunction);
      return index === -1 ? void 0 : arraySplice(hooks[entryPoint], index, 1)[0];
    }
    return arrayPop(hooks[entryPoint]);
  };
  DOMPurify.removeHooks = function(entryPoint) {
    hooks[entryPoint] = [];
  };
  DOMPurify.removeAllHooks = function() {
    hooks = _createHooksMap();
  };
  return DOMPurify;
}
var purify = createDOMPurify();
const getMiGlobal = (key, defaultValue = null) => {
  return typeof window !== "undefined" && window.monsterinsights && typeof window.monsterinsights === "object" && Object.hasOwn(window.monsterinsights, key) ? window.monsterinsights[key] : defaultValue;
};
const getMonsterInsightsUrl = (type, id, fallbackUrl) => {
  if (typeof window !== "undefined" && window.monsterinsights) {
    if (typeof window.monsterinsights.getUrl === "function") {
      try {
        const url = window.monsterinsights.getUrl(type, id, fallbackUrl);
        if (url) {
          return url;
        }
      } catch (_e) {
      }
    }
    if (window.monsterinsights.utils && typeof window.monsterinsights.utils.getUrl === "function") {
      try {
        const url = window.monsterinsights.utils.getUrl(type, id, fallbackUrl);
        if (url) {
          return url;
        }
      } catch (_e) {
      }
    }
  }
  return fallbackUrl || "#";
};
const getWidgetSupportForType = (support, displayType) => {
  if (!support) {
    return { metrics: [], dimensions: [] };
  }
  const result = {
    metrics: [],
    dimensions: []
  };
  if (support.metrics) {
    if (Array.isArray(support.metrics)) {
      result.metrics = support.metrics;
    } else if (typeof support.metrics === "object" && displayType) {
      result.metrics = support.metrics[displayType] || [];
    }
  }
  if (support.dimensions) {
    if (Array.isArray(support.dimensions)) {
      result.dimensions = support.dimensions;
    } else if (typeof support.dimensions === "object" && displayType) {
      result.dimensions = support.dimensions[displayType] || [];
    }
  }
  return result;
};
const isPro = () => {
  return false;
};
const getTheme = () => {
  const productName = "MonsterInsights";
  {
    return productName.toLowerCase();
  }
};
const isNetworkAdmin = () => {
  return getMiGlobal("network", false);
};
function addQueryArg(uri, key, value) {
  let hash = "";
  const separator = uri.indexOf("?") !== -1 ? "&" : "?";
  const re2 = new RegExp(`([?&])${key}=.*?(&|#|$)`, "i");
  if (uri.match(re2)) {
    return uri.replace(re2, `$1${key}=${value}$2`);
  } else {
    if (uri.indexOf("#") !== -1) {
      hash = uri.replace(/.*#/, "#");
      uri = uri.replace(/#.*/, "");
    }
    return `${uri + separator + key}=${value}${hash}`;
  }
}
function getUrl(medium, campaign, url) {
  const source = "liteplugin", default_url = "lite/", content = getMiGlobal("plugin_version", "1.0.0");
  medium = medium ? medium : "defaultmedium";
  campaign = campaign ? campaign : "defaultcampaign";
  url = url ? url : `https://www.monsterinsights.com/${default_url}`;
  url = addQueryArg(url, "utm_source", source);
  url = addQueryArg(url, "utm_medium", medium);
  url = addQueryArg(url, "utm_campaign", campaign);
  url = addQueryArg(url, "utm_content", content);
  return url;
}
function getUpgradeUrl(medium, campaign, url) {
  return getUrl(medium, campaign, url);
}
let nextId = 0;
const timers = /* @__PURE__ */ new Map();
const state = /* @__PURE__ */ reactive({
  /** @type {Array<{id:number,type:string,title:string,message:string,dismissible:boolean,sticky:boolean}>} */
  toasts: []
});
function add(opts = {}) {
  const {
    type = "info",
    title = "",
    message = "",
    html: html2 = "",
    timer = 3e3,
    dismissible = true
  } = opts;
  const id = ++nextId;
  const sticky = !timer || timer <= 0 || type === "loading";
  state.toasts.push({ id, type, title, message, html: html2, dismissible, sticky });
  if (!sticky) {
    timers.set(id, setTimeout(() => dismiss(id), timer));
  }
  return id;
}
function update(id, opts = {}) {
  const toast = state.toasts.find((t) => t.id === id);
  if (!toast) {
    return add(opts);
  }
  Object.assign(toast, opts);
  clearTimer(id);
  const sticky = !opts.timer || opts.timer <= 0 || toast.type === "loading";
  toast.sticky = sticky;
  if (!sticky) {
    timers.set(id, setTimeout(() => dismiss(id), opts.timer));
  }
  return id;
}
function dismiss(id) {
  clearTimer(id);
  const i = state.toasts.findIndex((t) => t.id === id);
  if (i !== -1) {
    state.toasts.splice(i, 1);
  }
}
function dismissAll() {
  state.toasts.forEach((t) => {
    clearTimer(t.id);
  });
  state.toasts.splice(0, state.toasts.length);
}
function clearTimer(id) {
  if (timers.has(id)) {
    clearTimeout(timers.get(id));
    timers.delete(id);
  }
}
function useToastStore() {
  return { state, add, update, dismiss, dismissAll };
}
export {
  logoStandard2x as $,
  createTextVNode as A,
  withModifiers as B,
  watch as C,
  withCtx as D,
  createBlock as E,
  Fragment as F,
  withKeys as G,
  createPinia as H,
  inject as I,
  onUnmounted as J,
  renderSlot as K,
  reactive as L,
  provide as M,
  isNetworkAdmin as N,
  getMonsterInsightsUrl as O,
  vModelSelect as P,
  Teleport as Q,
  zo as R,
  Go as S,
  Transition as T,
  useToastStore as U,
  shallowReactive as V,
  shallowRef as W,
  defineComponent as X,
  h as Y,
  isPro as Z,
  logoStandard as _,
  createBaseVNode as a,
  onUpdated as a0,
  storeToRefs as a1,
  resolveDirective as a2,
  useSlots as a3,
  createSlots as a4,
  resolveDynamicComponent as a5,
  TransitionGroup as a6,
  Wo as a7,
  getWidgetSupportForType as a8,
  onErrorCaptured as a9,
  Ro as aA,
  onBeforeMount as aB,
  getCurrentInstance as aC,
  toRefs as aD,
  watchEffect as aE,
  vModelCheckbox as aF,
  vModelDynamic as aG,
  welcomeImage as aH,
  tryOnMounted as aI,
  whenever as aJ,
  useClipboard as aK,
  useDebounceFn as aL,
  useLocalStorage as aM,
  onClickOutside as aN,
  pushScopeId as aO,
  popScopeId as aP,
  wpconsentFeatureImage as aQ,
  addQueryArg as aR,
  isRef as aS,
  vModelRadio as aT,
  NOOP as aa,
  extend as ab,
  isString as ac,
  NO as ad,
  isSymbol as ae,
  isBuiltInDirective as af,
  capitalize as ag,
  camelize as ah,
  EMPTY_OBJ as ai,
  isObject$1 as aj,
  toHandlerKey as ak,
  isArray as al,
  isOn as am,
  isReservedProp as an,
  isVoidTag as ao,
  isHTMLTag as ap,
  isSVGTag as aq,
  isMathMLTag as ar,
  parseStringStyle as as,
  makeMap as at,
  generateCodeFrame as au,
  runtimeDom_esmBundler as av,
  shared_esmBundler as aw,
  vShow as ax,
  mergeProps as ay,
  getUpgradeUrl as az,
  createVNode as b,
  createElementBlock as c,
  createApp as d,
  getTheme as e,
  renderList as f,
  getImageUrl as g,
  createStaticVNode as h,
  normalizeClass as i,
  ref as j,
  getMiGlobal as k,
  defineStore as l,
  computed as m,
  normalizeStyle as n,
  openBlock as o,
  getUrl as p,
  purify as q,
  resolveComponent as r,
  createCommentVNode as s,
  toDisplayString as t,
  unref as u,
  vModelText as v,
  withDirectives as w,
  nextTick as x,
  onMounted as y,
  onBeforeUnmount as z
};
