(function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):e.IntlPolyfill=r()})(this,function(){"use strict"
var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},r=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103
return function(r,t,n,a){var i=r&&r.defaultProps,o=arguments.length-3
if(t||0===o||(t={}),t&&i)for(var s in i)void 0===t[s]&&(t[s]=i[s])
else t||(t=i||{})
if(1===o)t.children=a
else if(o>1){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+3]
t.children=l}return{$$typeof:e,type:r,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}}(),t=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}(),n=function(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e},a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]
for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},i="undefined"==typeof global?self:global,o=function(){return function(e,r){if(Array.isArray(e))return e
if(Symbol.iterator in Object(e))return function(e,r){var t=[],n=!0,a=!1,i=void 0
try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(t.push(o.value),!r||t.length!==r);n=!0);}catch(e){a=!0,i=e}finally{try{!n&&s.return&&s.return()}finally{if(a)throw i}}return t}(e,r)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=Object.freeze({jsx:r,asyncToGenerator:function(e){return function(){var r=e.apply(this,arguments)
return new Promise(function(e,t){return function n(a,i){try{var o=r[a](i),s=o.value}catch(e){return void t(e)}if(!o.done)return Promise.resolve(s).then(function(e){return n("next",e)},function(e){return n("throw",e)})
e(s)}("next")})}},classCallCheck:function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")},createClass:t,defineEnumerableProperties:function(e,r){for(var t in r){var n=r[t]
n.configurable=n.enumerable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,t,n)}return e},defaults:function(e,r){for(var t=Object.getOwnPropertyNames(r),n=0;n<t.length;n++){var a=t[n],i=Object.getOwnPropertyDescriptor(r,a)
i&&i.configurable&&void 0===e[a]&&Object.defineProperty(e,a,i)}return e},defineProperty:n,get:function e(r,t,n){null===r&&(r=Function.prototype)
var a=Object.getOwnPropertyDescriptor(r,t)
if(void 0===a){var i=Object.getPrototypeOf(r)
return null===i?void 0:e(i,t,n)}if("value"in a)return a.value
var o=a.get
if(void 0!==o)return o.call(n)},inherits:function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r)
e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)},interopRequireDefault:function(e){return e&&e.__esModule?e:{default:e}},interopRequireWildcard:function(e){if(e&&e.__esModule)return e
var r={}
if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t])
return r.default=e,r},newArrowCheck:function(e,r){if(e!==r)throw new TypeError("Cannot instantiate an arrow function")},objectDestructuringEmpty:function(e){if(null==e)throw new TypeError("Cannot destructure undefined")},objectWithoutProperties:function(e,r){var t={}
for(var n in e)r.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
return t},possibleConstructorReturn:function(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!r||"object"!=typeof r&&"function"!=typeof r?e:r},selfGlobal:i,set:function e(r,t,n,a){var i=Object.getOwnPropertyDescriptor(r,t)
if(void 0===i){var o=Object.getPrototypeOf(r)
null!==o&&e(o,t,n,a)}else if("value"in i&&i.writable)i.value=n
else{var s=i.set
void 0!==s&&s.call(a,n)}return n},slicedToArray:o,slicedToArrayLoose:function(e,r){if(Array.isArray(e))return e
if(Symbol.iterator in Object(e)){for(var t,n=[],a=e[Symbol.iterator]();!(t=a.next()).done&&(n.push(t.value),!r||n.length!==r););return n}throw new TypeError("Invalid attempt to destructure non-iterable instance")},taggedTemplateLiteral:function(e,r){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))},taggedTemplateLiteralLoose:function(e,r){return e.raw=r,e},temporalRef:function(e,r,t){if(e===t)throw new ReferenceError(r+" is not defined - temporal dead zone")
return e},temporalUndefined:{},toArray:function(e){return Array.isArray(e)?e:Array.from(e)},toConsumableArray:function(e){if(Array.isArray(e)){for(var r=0,t=Array(e.length);r<e.length;r++)t[r]=e[r]
return t}return Array.from(e)},typeof:e,extends:a,instanceof:function(e,r){return null!=r&&"undefined"!=typeof Symbol&&r[Symbol.hasInstance]?r[Symbol.hasInstance](e):e instanceof r}}),l=function(){var e=function(){}
try{return Object.defineProperty(e,"a",{get:function(){return 1}}),Object.defineProperty(e,"prototype",{writable:!1}),1===e.a&&e.prototype instanceof Object}catch(e){return!1}}(),c=!l&&!Object.prototype.__defineGetter__,u=Object.prototype.hasOwnProperty,g=l?Object.defineProperty:function(e,r,t){"get"in t&&e.__defineGetter__?e.__defineGetter__(r,t.get):(!u.call(e,r)||"value"in t)&&(e[r]=t.value)},f=Array.prototype.indexOf||function(e){if(!this.length)return-1
for(var r=arguments[1]||0,t=this.length;r<t;r++)if(this[r]===e)return r
return-1},m=Object.create||function(e,r){var t=void 0
function n(){}n.prototype=e,t=new n
for(var a in r)u.call(r,a)&&g(t,a,r[a])
return t},v=Array.prototype.slice,d=Array.prototype.concat,h=Array.prototype.push,p=Array.prototype.join,y=Array.prototype.shift,b=Function.prototype.bind||function(e){var r=this,t=v.call(arguments,1)
return r.length,function(){return r.apply(e,d.call(t,v.call(arguments)))}},w=m(null),x=Math.random()
function j(e){for(var r in e)(e instanceof j||u.call(e,r))&&g(this,r,{value:e[r],enumerable:!0,writable:!0,configurable:!0})}j.prototype=m(null)
function z(){g(this,"length",{writable:!0,value:0}),arguments.length&&h.apply(this,v.call(arguments))}z.prototype=m(null)
function D(){if(w.disableRegExpRestore)return function(){}
for(var e={lastMatch:RegExp.lastMatch||"",leftContext:RegExp.leftContext,multiline:RegExp.multiline,input:RegExp.input},r=!1,t=1;t<=9;t++)r=(e["$"+t]=RegExp["$"+t])||r
return function(){var t=/[.?*+^$[\]\\(){}|-]/g,n=e.lastMatch.replace(t,"\\$&"),a=new z
if(r)for(var i=1;i<=9;i++){var o=e["$"+i]
o?(o=o.replace(t,"\\$&"),n=n.replace(o,"("+o+")")):n="()"+n,h.call(a,n.slice(0,n.indexOf("(")+1)),n=n.slice(n.indexOf("(")+1)}var s=p.call(a,"")+n
s=s.replace(/(\\\(|\\\)|[^()])+/g,function(e){return"[\\s\\S]{"+e.replace("\\","").length+"}"})
var l=new RegExp(s,e.multiline?"gm":"g")
l.lastIndex=e.leftContext.length,l.exec(e.input)}}function k(e){if(null===e)throw new TypeError("Cannot convert null or undefined to object")
return"object"===(void 0===e?"undefined":s.typeof(e))?e:Object(e)}function O(e){return"number"==typeof e?e:Number(e)}function F(e){var r=function(e){var r=O(e)
return isNaN(r)?0:0===r||-0===r||r===1/0||r===-1/0?r:r<0?-1*Math.floor(Math.abs(r)):Math.floor(Math.abs(r))}(e)
return r<=0?0:r===1/0?Math.pow(2,53)-1:Math.min(r,Math.pow(2,53)-1)}function S(e){return u.call(e,"__getInternalProperties")?e.__getInternalProperties(x):m(null)}var E="(?:[a-z0-9]{5,8}|\\d[a-z0-9]{3})",L="[0-9a-wy-z](?:-[a-z0-9]{2,8})+",P="x(?:-[a-z0-9]{1,8})+",N=RegExp("^(?:(?:[a-z]{2,3}(?:-[a-z]{3}(?:-[a-z]{3}){0,2})?|[a-z]{4}|[a-z]{5,8})(?:-[a-z]{4})?(?:-(?:[a-z]{2}|\\d{3}))?(?:-(?:[a-z0-9]{5,8}|\\d[a-z0-9]{3}))*(?:-[0-9a-wy-z](?:-[a-z0-9]{2,8})+)*(?:-x(?:-[a-z0-9]{1,8})+)?|"+P+"|(?:(?:en-GB-oed|i-(?:ami|bnn|default|enochian|hak|klingon|lux|mingo|navajo|pwn|tao|tay|tsu)|sgn-(?:BE-FR|BE-NL|CH-DE))|(?:art-lojban|cel-gaulish|no-bok|no-nyn|zh-(?:guoyu|hakka|min|min-nan|xiang))))$","i"),T=RegExp("^(?!x).*?-("+E+")-(?:\\w{4,8}-(?!x-))*\\1\\b","i"),_=RegExp("^(?!x).*?-([0-9a-wy-z])-(?:\\w+-(?!x-))*\\1\\b","i"),M=RegExp("-"+L,"ig"),I=void 0
var A={tags:{"art-lojban":"jbo","i-ami":"ami","i-bnn":"bnn","i-hak":"hak","i-klingon":"tlh","i-lux":"lb","i-navajo":"nv","i-pwn":"pwn","i-tao":"tao","i-tay":"tay","i-tsu":"tsu","no-bok":"nb","no-nyn":"nn","sgn-BE-FR":"sfb","sgn-BE-NL":"vgt","sgn-CH-DE":"sgg","zh-guoyu":"cmn","zh-hakka":"hak","zh-min-nan":"nan","zh-xiang":"hsn","sgn-BR":"bzs","sgn-CO":"csn","sgn-DE":"gsg","sgn-DK":"dsl","sgn-ES":"ssp","sgn-FR":"fsl","sgn-GB":"bfi","sgn-GR":"gss","sgn-IE":"isg","sgn-IT":"ise","sgn-JP":"jsl","sgn-MX":"mfs","sgn-NI":"ncs","sgn-NL":"dse","sgn-NO":"nsl","sgn-PT":"psr","sgn-SE":"swl","sgn-US":"ase","sgn-ZA":"sfs","zh-cmn":"cmn","zh-cmn-Hans":"cmn-Hans","zh-cmn-Hant":"cmn-Hant","zh-gan":"gan","zh-wuu":"wuu","zh-yue":"yue"},subtags:{BU:"MM",DD:"DE",FX:"FR",TP:"TL",YD:"YE",ZR:"CD",heploc:"alalc97",in:"id",iw:"he",ji:"yi",jw:"jv",mo:"ro",ayx:"nun",bjd:"drl",ccq:"rki",cjr:"mom",cka:"cmr",cmk:"xch",drh:"khk",drw:"prs",gav:"dev",hrr:"jal",ibi:"opa",kgh:"kml",lcq:"ppr",mst:"mry",myt:"mry",sca:"hle",tie:"ras",tkk:"twm",tlw:"weo",tnf:"prs",ybd:"rki",yma:"lrr"},extLang:{aao:["aao","ar"],abh:["abh","ar"],abv:["abv","ar"],acm:["acm","ar"],acq:["acq","ar"],acw:["acw","ar"],acx:["acx","ar"],acy:["acy","ar"],adf:["adf","ar"],ads:["ads","sgn"],aeb:["aeb","ar"],aec:["aec","ar"],aed:["aed","sgn"],aen:["aen","sgn"],afb:["afb","ar"],afg:["afg","sgn"],ajp:["ajp","ar"],apc:["apc","ar"],apd:["apd","ar"],arb:["arb","ar"],arq:["arq","ar"],ars:["ars","ar"],ary:["ary","ar"],arz:["arz","ar"],ase:["ase","sgn"],asf:["asf","sgn"],asp:["asp","sgn"],asq:["asq","sgn"],asw:["asw","sgn"],auz:["auz","ar"],avl:["avl","ar"],ayh:["ayh","ar"],ayl:["ayl","ar"],ayn:["ayn","ar"],ayp:["ayp","ar"],bbz:["bbz","ar"],bfi:["bfi","sgn"],bfk:["bfk","sgn"],bjn:["bjn","ms"],bog:["bog","sgn"],bqn:["bqn","sgn"],bqy:["bqy","sgn"],btj:["btj","ms"],bve:["bve","ms"],bvl:["bvl","sgn"],bvu:["bvu","ms"],bzs:["bzs","sgn"],cdo:["cdo","zh"],cds:["cds","sgn"],cjy:["cjy","zh"],cmn:["cmn","zh"],coa:["coa","ms"],cpx:["cpx","zh"],csc:["csc","sgn"],csd:["csd","sgn"],cse:["cse","sgn"],csf:["csf","sgn"],csg:["csg","sgn"],csl:["csl","sgn"],csn:["csn","sgn"],csq:["csq","sgn"],csr:["csr","sgn"],czh:["czh","zh"],czo:["czo","zh"],doq:["doq","sgn"],dse:["dse","sgn"],dsl:["dsl","sgn"],dup:["dup","ms"],ecs:["ecs","sgn"],esl:["esl","sgn"],esn:["esn","sgn"],eso:["eso","sgn"],eth:["eth","sgn"],fcs:["fcs","sgn"],fse:["fse","sgn"],fsl:["fsl","sgn"],fss:["fss","sgn"],gan:["gan","zh"],gds:["gds","sgn"],gom:["gom","kok"],gse:["gse","sgn"],gsg:["gsg","sgn"],gsm:["gsm","sgn"],gss:["gss","sgn"],gus:["gus","sgn"],hab:["hab","sgn"],haf:["haf","sgn"],hak:["hak","zh"],hds:["hds","sgn"],hji:["hji","ms"],hks:["hks","sgn"],hos:["hos","sgn"],hps:["hps","sgn"],hsh:["hsh","sgn"],hsl:["hsl","sgn"],hsn:["hsn","zh"],icl:["icl","sgn"],ils:["ils","sgn"],inl:["inl","sgn"],ins:["ins","sgn"],ise:["ise","sgn"],isg:["isg","sgn"],isr:["isr","sgn"],jak:["jak","ms"],jax:["jax","ms"],jcs:["jcs","sgn"],jhs:["jhs","sgn"],jls:["jls","sgn"],jos:["jos","sgn"],jsl:["jsl","sgn"],jus:["jus","sgn"],kgi:["kgi","sgn"],knn:["knn","kok"],kvb:["kvb","ms"],kvk:["kvk","sgn"],kvr:["kvr","ms"],kxd:["kxd","ms"],lbs:["lbs","sgn"],lce:["lce","ms"],lcf:["lcf","ms"],liw:["liw","ms"],lls:["lls","sgn"],lsg:["lsg","sgn"],lsl:["lsl","sgn"],lso:["lso","sgn"],lsp:["lsp","sgn"],lst:["lst","sgn"],lsy:["lsy","sgn"],ltg:["ltg","lv"],lvs:["lvs","lv"],lzh:["lzh","zh"],max:["max","ms"],mdl:["mdl","sgn"],meo:["meo","ms"],mfa:["mfa","ms"],mfb:["mfb","ms"],mfs:["mfs","sgn"],min:["min","ms"],mnp:["mnp","zh"],mqg:["mqg","ms"],mre:["mre","sgn"],msd:["msd","sgn"],msi:["msi","ms"],msr:["msr","sgn"],mui:["mui","ms"],mzc:["mzc","sgn"],mzg:["mzg","sgn"],mzy:["mzy","sgn"],nan:["nan","zh"],nbs:["nbs","sgn"],ncs:["ncs","sgn"],nsi:["nsi","sgn"],nsl:["nsl","sgn"],nsp:["nsp","sgn"],nsr:["nsr","sgn"],nzs:["nzs","sgn"],okl:["okl","sgn"],orn:["orn","ms"],ors:["ors","ms"],pel:["pel","ms"],pga:["pga","ar"],pks:["pks","sgn"],prl:["prl","sgn"],prz:["prz","sgn"],psc:["psc","sgn"],psd:["psd","sgn"],pse:["pse","ms"],psg:["psg","sgn"],psl:["psl","sgn"],pso:["pso","sgn"],psp:["psp","sgn"],psr:["psr","sgn"],pys:["pys","sgn"],rms:["rms","sgn"],rsi:["rsi","sgn"],rsl:["rsl","sgn"],sdl:["sdl","sgn"],sfb:["sfb","sgn"],sfs:["sfs","sgn"],sgg:["sgg","sgn"],sgx:["sgx","sgn"],shu:["shu","ar"],slf:["slf","sgn"],sls:["sls","sgn"],sqk:["sqk","sgn"],sqs:["sqs","sgn"],ssh:["ssh","ar"],ssp:["ssp","sgn"],ssr:["ssr","sgn"],svk:["svk","sgn"],swc:["swc","sw"],swh:["swh","sw"],swl:["swl","sgn"],syy:["syy","sgn"],tmw:["tmw","ms"],tse:["tse","sgn"],tsm:["tsm","sgn"],tsq:["tsq","sgn"],tss:["tss","sgn"],tsy:["tsy","sgn"],tza:["tza","sgn"],ugn:["ugn","sgn"],ugy:["ugy","sgn"],ukl:["ukl","sgn"],uks:["uks","sgn"],urk:["urk","ms"],uzn:["uzn","uz"],uzs:["uzs","uz"],vgt:["vgt","sgn"],vkk:["vkk","ms"],vkt:["vkt","ms"],vsi:["vsi","sgn"],vsl:["vsl","sgn"],vsv:["vsv","sgn"],wuu:["wuu","zh"],xki:["xki","sgn"],xml:["xml","sgn"],xmm:["xmm","ms"],xms:["xms","sgn"],yds:["yds","sgn"],ysl:["ysl","sgn"],yue:["yue","zh"],zib:["zib","sgn"],zlm:["zlm","ms"],zmi:["zmi","ms"],zsl:["zsl","sgn"],zsm:["zsm","ms"]}}
function R(e){for(var r=e.length;r--;){var t=e.charAt(r)
t>="a"&&t<="z"&&(e=e.slice(0,r)+t.toUpperCase()+e.slice(r+1))}return e}function q(e){return!!N.test(e)&&(!T.test(e)&&!_.test(e))}function C(e){for(var r=void 0,t=void 0,n=1,a=(t=(e=e.toLowerCase()).split("-")).length;n<a;n++)if(2===t[n].length)t[n]=t[n].toUpperCase()
else if(4===t[n].length)t[n]=t[n].charAt(0).toUpperCase()+t[n].slice(1)
else if(1===t[n].length&&"x"!==t[n])break;(r=(e=p.call(t,"-")).match(M))&&r.length>1&&(r.sort(),e=e.replace(RegExp("(?:"+M.source+")+","i"),p.call(r,""))),u.call(A.tags,e)&&(e=A.tags[e])
for(var i=1,o=(t=e.split("-")).length;i<o;i++)u.call(A.subtags,t[i])?t[i]=A.subtags[t[i]]:u.call(A.extLang,t[i])&&(t[i]=A.extLang[t[i]][0],1===i&&A.extLang[t[1]][1]===t[0]&&(t=v.call(t,i++),o-=1))
return p.call(t,"-")}var G=/^[A-Z]{3}$/
var Z=/-u(?:-[0-9a-z]{2,8})+/gi
function B(e){if(void 0===e)return new z
for(var r=new z,t=k(e="string"==typeof e?[e]:e),n=F(t.length),a=0;a<n;){var i=String(a)
if(i in t){var o=t[i]
if(null===o||"string"!=typeof o&&"object"!==(void 0===o?"undefined":s.typeof(o)))throw new TypeError("String or Object type expected")
var l=String(o)
if(!q(l))throw new RangeError("'"+l+"' is not a structurally valid language tag")
l=C(l),-1===f.call(r,l)&&h.call(r,l)}a++}return r}function U(e,r){for(var t=r;t;){if(f.call(e,t)>-1)return t
var n=t.lastIndexOf("-")
if(n<0)return
n>=2&&"-"===t.charAt(n-2)&&(n-=2),t=t.substring(0,n)}}function $(e,r){for(var t=0,n=r.length,a=void 0,i=void 0,o=void 0;t<n&&!a;)i=r[t],a=U(e,o=String(i).replace(Z,"")),t++
var s=new j
if(void 0!==a){if(s["[[locale]]"]=a,String(i)!==String(o)){var l=i.match(Z)[0],c=i.indexOf("-u-")
s["[[extension]]"]=l,s["[[extensionIndex]]"]=c}}else s["[[locale]]"]=I
return s}function K(e,r,t,n,a){if(0===e.length)throw new ReferenceError("No locale data has been provided for this object yet.")
var i=void 0
"lookup"===t["[[localeMatcher]]"]?i=$(e,r):i=$(e,r)
var o=i["[[locale]]"],s=void 0,l=void 0
if(u.call(i,"[[extension]]")){var c=i["[[extension]]"]
l=(s=String.prototype.split.call(c,"-")).length}var g=new j
g["[[dataLocale]]"]=o
for(var m="-u",v=0,d=n.length;v<d;){var h=n[v],p=a[o][h],y=p[0],b="",w=f
if(void 0!==s){var x=w.call(s,h)
if(-1!==x)if(x+1<l&&s[x+1].length>2){var z=s[x+1];-1!==w.call(p,z)&&(b="-"+h+"-"+(y=z))}else{-1!==w(p,"true")&&(y="true")}}if(u.call(t,"[["+h+"]]")){var D=t["[["+h+"]]"];-1!==w.call(p,D)&&D!==y&&(y=D,b="")}g["[["+h+"]]"]=y,m+=b,v++}if(m.length>2){var k=o.indexOf("-x-")
if(-1===k)o+=m
else{o=o.substring(0,k)+m+o.substring(k)}o=C(o)}return g["[[locale]]"]=o,g}function Y(e,r){for(var t=r.length,n=new z,a=0;a<t;){var i=r[a]
void 0!==U(e,String(i).replace(Z,""))&&h.call(n,i),a++}return v.call(n)}function H(e,r,t){var n=void 0,a=void 0
if(void 0!==t&&void 0!==(n=(t=new j(k(t))).localeMatcher)&&"lookup"!==(n=String(n))&&"best fit"!==n)throw new RangeError('matcher should be "lookup" or "best fit"')
void 0===n||"best fit"===n?a=Y(e,r):a=Y(e,r)
for(var i in a)u.call(a,i)&&g(a,i,{writable:!1,configurable:!1,value:a[i]})
return g(a,"length",{writable:!1}),a}function W(e,r,t,n,a){var i=e[r]
if(void 0!==i){if(i="boolean"===t?Boolean(i):"string"===t?String(i):i,void 0!==n&&-1===f.call(n,i))throw new RangeError("'"+i+"' is not an allowed value for `"+r+"`")
return i}return a}function X(e,r,t,n,a){var i=e[r]
if(void 0!==i){if(i=Number(i),isNaN(i)||i<t||i>n)throw new RangeError("Value is not a number or outside accepted range")
return Math.floor(i)}return a}var V={}
Object.defineProperty(V,"getCanonicalLocales",{enumerable:!1,configurable:!0,writable:!0,value:function(e){for(var r=B(e),t=[],n=r.length,a=0;a<n;)t[a]=r[a],a++
return t}})
var J={BHD:3,BYR:0,XOF:0,BIF:0,XAF:0,CLF:4,CLP:0,KMF:0,DJF:0,XPF:0,GNF:0,ISK:0,IQD:3,JPY:0,JOD:3,KRW:0,KWD:3,LYD:3,OMR:3,PYG:0,RWF:0,TND:3,UGX:0,UYI:0,VUV:0,VND:0}
function Q(){var e=arguments[0],r=arguments[1]
return this&&this!==V?function(e,r,t){var n=S(e),a=D()
if(!0===n["[[initializedIntlObject]]"])throw new TypeError("`this` object has already been initialized as an Intl object")
g(e,"__getInternalProperties",{value:function(){if(arguments[0]===x)return n}}),n["[[initializedIntlObject]]"]=!0
var i=B(r)
t=void 0===t?{}:k(t)
var o=new j,s=W(t,"localeMatcher","string",new z("lookup","best fit"),"best fit")
o["[[localeMatcher]]"]=s
var l=w.NumberFormat["[[localeData]]"],u=K(w.NumberFormat["[[availableLocales]]"],i,o,w.NumberFormat["[[relevantExtensionKeys]]"],l)
n["[[locale]]"]=u["[[locale]]"],n["[[numberingSystem]]"]=u["[[nu]]"],n["[[dataLocale]]"]=u["[[dataLocale]]"]
var f=u["[[dataLocale]]"],m=W(t,"style","string",new z("decimal","percent","currency"),"decimal")
n["[[style]]"]=m
var v=W(t,"currency","string")
if(void 0!==v&&!function(e){var r=R(String(e))
return!1!==G.test(r)}(v))throw new RangeError("'"+v+"' is not a valid currency code")
if("currency"===m&&void 0===v)throw new TypeError("Currency code is required when style is currency")
var d=void 0
"currency"===m&&(v=v.toUpperCase(),n["[[currency]]"]=v,d=void 0!==J[h=v]?J[h]:2)
var h
var p=W(t,"currencyDisplay","string",new z("code","symbol","name"),"symbol")
"currency"===m&&(n["[[currencyDisplay]]"]=p)
var y=X(t,"minimumIntegerDigits",1,21,1)
n["[[minimumIntegerDigits]]"]=y
var b=X(t,"minimumFractionDigits",0,20,"currency"===m?d:0)
n["[[minimumFractionDigits]]"]=b
var O="currency"===m?Math.max(b,d):"percent"===m?Math.max(b,0):Math.max(b,3),F=X(t,"maximumFractionDigits",b,20,O)
n["[[maximumFractionDigits]]"]=F
var E=t.minimumSignificantDigits,L=t.maximumSignificantDigits
void 0===E&&void 0===L||(E=X(t,"minimumSignificantDigits",1,21,1),L=X(t,"maximumSignificantDigits",E,21,21),n["[[minimumSignificantDigits]]"]=E,n["[[maximumSignificantDigits]]"]=L)
var P=W(t,"useGrouping","boolean",void 0,!0)
n["[[useGrouping]]"]=P
var N=l[f].patterns[m]
n["[[positivePattern]]"]=N.positivePattern,n["[[negativePattern]]"]=N.negativePattern,n["[[boundFormat]]"]=void 0,n["[[initializedNumberFormat]]"]=!0,c&&(e.format=ee.call(e))
return a(),e}(k(this),e,r):new V.NumberFormat(e,r)}g(V,"NumberFormat",{configurable:!0,writable:!0,value:Q}),g(V.NumberFormat,"prototype",{writable:!1})
w.NumberFormat={"[[availableLocales]]":[],"[[relevantExtensionKeys]]":["nu"],"[[localeData]]":{}},g(V.NumberFormat,"supportedLocalesOf",{configurable:!0,writable:!0,value:b.call(function(e){if(!u.call(this,"[[availableLocales]]"))throw new TypeError("supportedLocalesOf() is not a constructor")
var r=D(),t=arguments[1],n=this["[[availableLocales]]"],a=B(e)
return r(),H(n,a,t)},w.NumberFormat)}),g(V.NumberFormat.prototype,"format",{configurable:!0,get:ee})
function ee(){var e=null!==this&&"object"===s.typeof(this)&&S(this)
if(!e||!e["[[initializedNumberFormat]]"])throw new TypeError("`this` value for format() is not an initialized Intl.NumberFormat object.")
if(void 0===e["[[boundFormat]]"]){var r=function(e){return te(this,Number(e))},t=b.call(r,this)
e["[[boundFormat]]"]=t}return e["[[boundFormat]]"]}Object.defineProperty(V.NumberFormat.prototype,"formatToParts",{configurable:!0,enumerable:!1,writable:!0,value:function(){var e=arguments.length<=0||void 0===arguments[0]?void 0:arguments[0],r=null!==this&&"object"===s.typeof(this)&&S(this)
if(!r||!r["[[initializedNumberFormat]]"])throw new TypeError("`this` value for formatToParts() is not an initialized Intl.NumberFormat object.")
return function(e,r){for(var t=re(e,r),n=[],a=0,i=0;t.length>i;i++){var o=t[i],s={}
s.type=o["[[type]]"],s.value=o["[[value]]"],n[a]=s,a+=1}return n}(this,Number(e))}})
function re(e,r){var t=S(e),n=t["[[dataLocale]]"],a=t["[[numberingSystem]]"],i=w.NumberFormat["[[localeData]]"][n],o=i.symbols[a]||i.symbols.latn,s=void 0
!isNaN(r)&&r<0?(r=-r,s=t["[[negativePattern]]"]):s=t["[[positivePattern]]"]
for(var l=new z,c=s.indexOf("{",0),g=0,f=0,m=s.length;c>-1&&c<m;){if(-1===(g=s.indexOf("}",c)))throw new Error
if(c>f){var v=s.substring(f,c)
h.call(l,{"[[type]]":"literal","[[value]]":v})}var d=s.substring(c+1,g)
if("number"===d)if(isNaN(r)){var p=o.nan
h.call(l,{"[[type]]":"nan","[[value]]":p})}else if(isFinite(r)){"percent"===t["[[style]]"]&&isFinite(r)&&(r*=100)
var b=void 0
b=u.call(t,"[[minimumSignificantDigits]]")&&u.call(t,"[[maximumSignificantDigits]]")?ne(r,t["[[minimumSignificantDigits]]"],t["[[maximumSignificantDigits]]"]):ae(r,t["[[minimumIntegerDigits]]"],t["[[minimumFractionDigits]]"],t["[[maximumFractionDigits]]"]),ie[a]?function(){var e=ie[a]
b=String(b).replace(/\d/g,function(r){return e[r]})}():b=String(b)
var x=void 0,j=void 0,D=b.indexOf(".",0)
if(D>0?(x=b.substring(0,D),j=b.substring(D+1,D.length)):(x=b,j=void 0),!0===t["[[useGrouping]]"]){var k=o.group,O=[],F=i.patterns.primaryGroupSize||3,E=i.patterns.secondaryGroupSize||F
if(x.length>F){var L=x.length-F,P=L%E,N=x.slice(0,P)
for(N.length&&h.call(O,N);P<L;)h.call(O,x.slice(P,P+E)),P+=E
h.call(O,x.slice(L))}else h.call(O,x)
if(0===O.length)throw new Error
for(;O.length;){var T=y.call(O)
h.call(l,{"[[type]]":"integer","[[value]]":T}),O.length&&h.call(l,{"[[type]]":"group","[[value]]":k})}}else h.call(l,{"[[type]]":"integer","[[value]]":x})
if(void 0!==j){var _=o.decimal
h.call(l,{"[[type]]":"decimal","[[value]]":_}),h.call(l,{"[[type]]":"fraction","[[value]]":j})}}else{var M=o.infinity
h.call(l,{"[[type]]":"infinity","[[value]]":M})}else if("plusSign"===d){var I=o.plusSign
h.call(l,{"[[type]]":"plusSign","[[value]]":I})}else if("minusSign"===d){var A=o.minusSign
h.call(l,{"[[type]]":"minusSign","[[value]]":A})}else if("percentSign"===d&&"percent"===t["[[style]]"]){var R=o.percentSign
h.call(l,{"[[type]]":"literal","[[value]]":R})}else if("currency"===d&&"currency"===t["[[style]]"]){var q=t["[[currency]]"],C=void 0
"code"===t["[[currencyDisplay]]"]?C=q:"symbol"===t["[[currencyDisplay]]"]?C=i.currencies[q]||q:"name"===t["[[currencyDisplay]]"]&&(C=q),h.call(l,{"[[type]]":"currency","[[value]]":C})}else{var G=s.substring(c,g)
h.call(l,{"[[type]]":"literal","[[value]]":G})}f=g+1,c=s.indexOf("{",f)}if(f<m){var Z=s.substring(f,m)
h.call(l,{"[[type]]":"literal","[[value]]":Z})}return l}function te(e,r){for(var t=re(e,r),n="",a=0;t.length>a;a++){n+=t[a]["[[value]]"]}return n}function ne(e,r,t){var n=t,a=void 0,i=void 0
if(0===e)a=p.call(Array(n+1),"0"),i=0
else{i=function(e){if("function"==typeof Math.log10)return Math.floor(Math.log10(e))
var r=Math.round(Math.log(e)*Math.LOG10E)
return r-(Number("1e"+r)>e)}(Math.abs(e))
var o=Math.round(Math.exp(Math.abs(i-n+1)*Math.LN10))
a=String(Math.round(i-n+1<0?e*o:e/o))}if(i>=n)return a+p.call(Array(i-n+1+1),"0")
if(i===n-1)return a
if(i>=0?a=a.slice(0,i+1)+"."+a.slice(i+1):i<0&&(a="0."+p.call(Array(1-(i+1)),"0")+a),a.indexOf(".")>=0&&t>r){for(var s=t-r;s>0&&"0"===a.charAt(a.length-1);)a=a.slice(0,-1),s--
"."===a.charAt(a.length-1)&&(a=a.slice(0,-1))}return a}function ae(e,r,t,n){var a=n,i=Math.pow(10,a)*e,o=0===i?"0":i.toFixed(0),s=void 0,l=(s=o.indexOf("e"))>-1?o.slice(s+1):0
l&&(o=o.slice(0,s).replace(".",""),o+=p.call(Array(l-(o.length-1)+1),"0"))
var c=void 0
if(0!==a){var u=o.length
if(u<=a){o=p.call(Array(a+1-u+1),"0")+o,u=a+1}var g=o.substring(0,u-a)
o=g+"."+o.substring(u-a,o.length),c=g.length}else c=o.length
for(var f=n-t;f>0&&"0"===o.slice(-1);)o=o.slice(0,-1),f--
if("."===o.slice(-1)&&(o=o.slice(0,-1)),c<r){o=p.call(Array(r-c+1),"0")+o}return o}var ie={arab:["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"],arabext:["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"],bali:["᭐","᭑","᭒","᭓","᭔","᭕","᭖","᭗","᭘","᭙"],beng:["০","১","২","৩","৪","৫","৬","৭","৮","৯"],deva:["०","१","२","३","४","५","६","७","८","९"],fullwide:["０","１","２","３","４","５","６","７","８","９"],gujr:["૦","૧","૨","૩","૪","૫","૬","૭","૮","૯"],guru:["੦","੧","੨","੩","੪","੫","੬","੭","੮","੯"],hanidec:["〇","一","二","三","四","五","六","七","八","九"],khmr:["០","១","២","៣","៤","៥","៦","៧","៨","៩"],knda:["೦","೧","೨","೩","೪","೫","೬","೭","೮","೯"],laoo:["໐","໑","໒","໓","໔","໕","໖","໗","໘","໙"],latn:["0","1","2","3","4","5","6","7","8","9"],limb:["᥆","᥇","᥈","᥉","᥊","᥋","᥌","᥍","᥎","᥏"],mlym:["൦","൧","൨","൩","൪","൫","൬","൭","൮","൯"],mong:["᠐","᠑","᠒","᠓","᠔","᠕","᠖","᠗","᠘","᠙"],mymr:["၀","၁","၂","၃","၄","၅","၆","၇","၈","၉"],orya:["୦","୧","୨","୩","୪","୫","୬","୭","୮","୯"],tamldec:["௦","௧","௨","௩","௪","௫","௬","௭","௮","௯"],telu:["౦","౧","౨","౩","౪","౫","౬","౭","౮","౯"],thai:["๐","๑","๒","๓","๔","๕","๖","๗","๘","๙"],tibt:["༠","༡","༢","༣","༤","༥","༦","༧","༨","༩"]}
g(V.NumberFormat.prototype,"resolvedOptions",{configurable:!0,writable:!0,value:function(){var e=void 0,r=new j,t=["locale","numberingSystem","style","currency","currencyDisplay","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","useGrouping"],n=null!==this&&"object"===s.typeof(this)&&S(this)
if(!n||!n["[[initializedNumberFormat]]"])throw new TypeError("`this` value for resolvedOptions() is not an initialized Intl.NumberFormat object.")
for(var a=0,i=t.length;a<i;a++)u.call(n,e="[["+t[a]+"]]")&&(r[t[a]]={value:n[e],writable:!0,configurable:!0,enumerable:!0})
return m({},r)}})
var oe=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g,se=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,le=/[rqQASjJgwWIQq]/,ce=["era","year","month","day","weekday","quarter"],ue=["hour","minute","second","hour12","timeZoneName"]
function ge(e){for(var r=0;r<ue.length;r+=1)if(e.hasOwnProperty(ue[r]))return!1
return!0}function fe(e){for(var r=0;r<ce.length;r+=1)if(e.hasOwnProperty(ce[r]))return!1
return!0}function me(e,r){for(var t={_:{}},n=0;n<ce.length;n+=1)e[ce[n]]&&(t[ce[n]]=e[ce[n]]),e._[ce[n]]&&(t._[ce[n]]=e._[ce[n]])
for(var a=0;a<ue.length;a+=1)r[ue[a]]&&(t[ue[a]]=r[ue[a]]),r._[ue[a]]&&(t._[ue[a]]=r._[ue[a]])
return t}function ve(e){return e.pattern12=e.extendedPattern.replace(/'([^']*)'/g,function(e,r){return r||"'"}),e.pattern=e.pattern12.replace("{ampm}","").replace(se,""),e}function de(e,r){switch(e.charAt(0)){case"G":return r.era=["short","short","short","long","narrow"][e.length-1],"{era}"
case"y":case"Y":case"u":case"U":case"r":return r.year=2===e.length?"2-digit":"numeric","{year}"
case"Q":case"q":return r.quarter=["numeric","2-digit","short","long","narrow"][e.length-1],"{quarter}"
case"M":case"L":return r.month=["numeric","2-digit","short","long","narrow"][e.length-1],"{month}"
case"w":return r.week=2===e.length?"2-digit":"numeric","{weekday}"
case"W":return r.week="numeric","{weekday}"
case"d":return r.day=2===e.length?"2-digit":"numeric","{day}"
case"D":case"F":case"g":return r.day="numeric","{day}"
case"E":return r.weekday=["short","short","short","long","narrow","short"][e.length-1],"{weekday}"
case"e":return r.weekday=["numeric","2-digit","short","long","narrow","short"][e.length-1],"{weekday}"
case"c":return r.weekday=["numeric",void 0,"short","long","narrow","short"][e.length-1],"{weekday}"
case"a":case"b":case"B":return r.hour12=!0,"{ampm}"
case"h":case"H":return r.hour=2===e.length?"2-digit":"numeric","{hour}"
case"k":case"K":return r.hour12=!0,r.hour=2===e.length?"2-digit":"numeric","{hour}"
case"m":return r.minute=2===e.length?"2-digit":"numeric","{minute}"
case"s":return r.second=2===e.length?"2-digit":"numeric","{second}"
case"S":case"A":return r.second="numeric","{second}"
case"z":case"Z":case"O":case"v":case"V":case"X":case"x":return r.timeZoneName=e.length<4?"short":"long","{timeZoneName}"}}function he(e,r){if(!le.test(r)){var t={originalPattern:r,_:{}}
return t.extendedPattern=r.replace(oe,function(e){return de(e,t._)}),e.replace(oe,function(e){return de(e,t)}),ve(t)}}var pe={second:{numeric:"s","2-digit":"ss"},minute:{numeric:"m","2-digit":"mm"},year:{numeric:"y","2-digit":"yy"},day:{numeric:"d","2-digit":"dd"},month:{numeric:"L","2-digit":"LL",narrow:"LLLLL",short:"LLL",long:"LLLL"},weekday:{narrow:"ccccc",short:"ccc",long:"cccc"}}
var ye=m(null,{narrow:{},short:{},long:{}})
function be(e,r,t,n,a){var i=e[r]&&e[r][t]?e[r][t]:e.gregory[t],o={narrow:["short","long"],short:["long","narrow"],long:["short","narrow"]},s=u.call(i,n)?i[n]:u.call(i,o[n][0])?i[o[n][0]]:i[o[n][1]]
return null!==a?s[a]:s}function we(){var e=arguments[0],r=arguments[1]
return this&&this!==V?function(e,r,t){var a=S(e),i=D()
if(!0===a["[[initializedIntlObject]]"])throw new TypeError("`this` object has already been initialized as an Intl object")
g(e,"__getInternalProperties",{value:function(){if(arguments[0]===x)return a}}),a["[[initializedIntlObject]]"]=!0
var o=B(r)
t=je(t,"any","date")
var s=new j,l=W(t,"localeMatcher","string",new z("lookup","best fit"),"best fit")
s["[[localeMatcher]]"]=l
var m=w.DateTimeFormat,v=m["[[localeData]]"],d=K(m["[[availableLocales]]"],o,s,m["[[relevantExtensionKeys]]"],v)
a["[[locale]]"]=d["[[locale]]"],a["[[calendar]]"]=d["[[ca]]"],a["[[numberingSystem]]"]=d["[[nu]]"],a["[[dataLocale]]"]=d["[[dataLocale]]"]
var h=d["[[dataLocale]]"],p=t.timeZone
if(void 0!==p&&"UTC"!==(p=R(p)))throw new RangeError("timeZone is not supported.")
a["[[timeZone]]"]=p,s=new j
for(var y in xe)if(u.call(xe,y)){var b=W(t,y,"string",xe[y])
s["[["+y+"]]"]=b}var k=void 0,O=v[h],F=function(e){if("[object Array]"===Object.prototype.toString.call(e))return e
return function(e){var r=e.availableFormats,t=e.timeFormats,n=e.dateFormats,a=[],i=void 0,o=void 0,s=void 0,l=void 0,c=void 0,u=[],g=[]
for(i in r)r.hasOwnProperty(i)&&(s=he(i,o=r[i]))&&(a.push(s),ge(s)?g.push(s):fe(s)&&u.push(s))
for(i in t)t.hasOwnProperty(i)&&(s=he(i,o=t[i]))&&(a.push(s),u.push(s))
for(i in n)n.hasOwnProperty(i)&&(s=he(i,o=n[i]))&&(a.push(s),g.push(s))
for(l=0;l<u.length;l+=1)for(c=0;c<g.length;c+=1)o="long"===g[c].month?g[c].weekday?e.full:e.long:"short"===g[c].month?e.medium:e.short,(s=me(g[c],u[l])).originalPattern=o,s.extendedPattern=o.replace("{0}",u[l].extendedPattern).replace("{1}",g[c].extendedPattern).replace(/^[,\s]+|[,\s]+$/gi,""),a.push(ve(s))
return a}(e)}(O.formats)
if(l=W(t,"formatMatcher","string",new z("basic","best fit"),"best fit"),O.formats=F,"basic"===l)k=function(e,r){var t=-1/0,n=void 0,a=0,i=r.length
for(;a<i;){var o=r[a],s=0
for(var l in xe)if(u.call(xe,l)){var c=e["[["+l+"]]"],g=u.call(o,l)?o[l]:void 0
if(void 0===c&&void 0!==g)s-=20
else if(void 0!==c&&void 0===g)s-=120
else{var m=["2-digit","numeric","narrow","short","long"],v=f.call(m,c),d=f.call(m,g),h=Math.max(Math.min(d-v,2),-2)
2===h?s-=6:1===h?s-=3:-1===h?s-=6:-2===h&&(s-=8)}}s>t&&(t=s,n=o),a++}return n}(s,F)
else{var E=W(t,"hour12","boolean")
s.hour12=void 0===E?O.hour12:E,k=function(e,r){var t=[]
for(var a in xe)u.call(xe,a)&&void 0!==e["[["+a+"]]"]&&t.push(a)
if(1===t.length){var i=function(e,r){if(pe[e]&&pe[e][r]){var t
return t={originalPattern:pe[e][r],_:n({},e,r),extendedPattern:"{"+e+"}"},n(t,e,r),n(t,"pattern12","{"+e+"}"),n(t,"pattern","{"+e+"}"),t}}(t[0],e["[["+t[0]+"]]"])
if(i)return i}var o=-1/0,s=void 0,l=0,c=r.length
for(;l<c;){var g=r[l],m=0
for(var v in xe)if(u.call(xe,v)){var d=e["[["+v+"]]"],h=u.call(g,v)?g[v]:void 0,p=u.call(g._,v)?g._[v]:void 0
if(d!==p&&(m-=2),void 0===d&&void 0!==h)m-=20
else if(void 0!==d&&void 0===h)m-=120
else{var y=["2-digit","numeric","narrow","short","long"],b=f.call(y,d),w=f.call(y,h),x=Math.max(Math.min(w-b,2),-2)
w<=1&&b>=2||w>=2&&b<=1?x>0?m-=6:x<0&&(m-=8):x>1?m-=3:x<-1&&(m-=6)}}g._.hour12!==e.hour12&&(m-=1),m>o&&(o=m,s=g),l++}return s}(s,F)}for(var L in xe)if(u.call(xe,L)&&u.call(k,L)){var P=k[L]
P=k._&&u.call(k._,L)?k._[L]:P,a["[["+L+"]]"]=P}var N=void 0,T=W(t,"hour12","boolean")
if(a["[[hour]]"])if(T=void 0===T?O.hour12:T,a["[[hour12]]"]=T,!0===T){var _=O.hourNo0
a["[[hourNo0]]"]=_,N=k.pattern12}else N=k.pattern
else N=k.pattern
a["[[pattern]]"]=N,a["[[boundFormat]]"]=void 0,a["[[initializedDateTimeFormat]]"]=!0,c&&(e.format=ze.call(e))
return i(),e}(k(this),e,r):new V.DateTimeFormat(e,r)}g(V,"DateTimeFormat",{configurable:!0,writable:!0,value:we}),g(we,"prototype",{writable:!1})
var xe={weekday:["narrow","short","long"],era:["narrow","short","long"],year:["2-digit","numeric"],month:["2-digit","numeric","narrow","short","long"],day:["2-digit","numeric"],hour:["2-digit","numeric"],minute:["2-digit","numeric"],second:["2-digit","numeric"],timeZoneName:["short","long"]}
function je(e,r,t){if(void 0===e)e=null
else{var n=k(e)
e=new j
for(var a in n)e[a]=n[a]}e=m(e)
var i=!0
return"date"!==r&&"any"!==r||void 0===e.weekday&&void 0===e.year&&void 0===e.month&&void 0===e.day||(i=!1),"time"!==r&&"any"!==r||void 0===e.hour&&void 0===e.minute&&void 0===e.second||(i=!1),!i||"date"!==t&&"all"!==t||(e.year=e.month=e.day="numeric"),!i||"time"!==t&&"all"!==t||(e.hour=e.minute=e.second="numeric"),e}w.DateTimeFormat={"[[availableLocales]]":[],"[[relevantExtensionKeys]]":["ca","nu"],"[[localeData]]":{}},g(V.DateTimeFormat,"supportedLocalesOf",{configurable:!0,writable:!0,value:b.call(function(e){if(!u.call(this,"[[availableLocales]]"))throw new TypeError("supportedLocalesOf() is not a constructor")
var r=D(),t=arguments[1],n=this["[[availableLocales]]"],a=B(e)
return r(),H(n,a,t)},w.NumberFormat)}),g(V.DateTimeFormat.prototype,"format",{configurable:!0,get:ze})
function ze(){var e=null!==this&&"object"===s.typeof(this)&&S(this)
if(!e||!e["[[initializedDateTimeFormat]]"])throw new TypeError("`this` value for format() is not an initialized Intl.DateTimeFormat object.")
if(void 0===e["[[boundFormat]]"]){var r=function(){var e=arguments.length<=0||void 0===arguments[0]?void 0:arguments[0]
return ke(this,void 0===e?Date.now():O(e))},t=b.call(r,this)
e["[[boundFormat]]"]=t}return e["[[boundFormat]]"]}Object.defineProperty(V.DateTimeFormat.prototype,"formatToParts",{enumerable:!1,writable:!0,configurable:!0,value:function(){var e=arguments.length<=0||void 0===arguments[0]?void 0:arguments[0],r=null!==this&&"object"===s.typeof(this)&&S(this)
if(!r||!r["[[initializedDateTimeFormat]]"])throw new TypeError("`this` value for formatToParts() is not an initialized Intl.DateTimeFormat object.")
return function(e,r){for(var t=De(e,r),n=[],a=0;t.length>a;a++){var i=t[a]
n.push({type:i.type,value:i.value})}return n}(this,void 0===e?Date.now():O(e))}})
function De(e,r){if(!isFinite(r))throw new RangeError("Invalid valid date passed to format")
var t=e.__getInternalProperties(x)
D()
for(var n=t["[[locale]]"],a=new V.NumberFormat([n],{useGrouping:!1}),i=new V.NumberFormat([n],{minimumIntegerDigits:2,useGrouping:!1}),o=function(e,r,t){var n=new Date(e),a="get"+(t||"")
return new j({"[[weekday]]":n[a+"Day"](),"[[era]]":+(n[a+"FullYear"]()>=0),"[[year]]":n[a+"FullYear"](),"[[month]]":n[a+"Month"](),"[[day]]":n[a+"Date"](),"[[hour]]":n[a+"Hours"](),"[[minute]]":n[a+"Minutes"](),"[[second]]":n[a+"Seconds"](),"[[inDST]]":!1})}(r,t["[[calendar]]"],t["[[timeZone]]"]),s=t["[[pattern]]"],l=new z,c=0,u=s.indexOf("{"),g=0,f=t["[[dataLocale]]"],m=w.DateTimeFormat["[[localeData]]"][f].calendars,v=t["[[calendar]]"];-1!==u;){var d=void 0
if(-1===(g=s.indexOf("}",u)))throw new Error("Unclosed pattern")
u>c&&h.call(l,{type:"literal",value:s.substring(c,u)})
var p=s.substring(u+1,g)
if(xe.hasOwnProperty(p)){var y=t["[["+p+"]]"],b=o["[["+p+"]]"]
if("year"===p&&b<=0?b=1-b:"month"===p?b++:"hour"===p&&!0===t["[[hour12]]"]&&0===(b%=12)&&!0===t["[[hourNo0]]"]&&(b=12),"numeric"===y)d=te(a,b)
else if("2-digit"===y)(d=te(i,b)).length>2&&(d=d.slice(-2))
else if(y in ye)switch(p){case"month":d=be(m,v,"months",y,o["[["+p+"]]"])
break
case"weekday":try{d=be(m,v,"days",y,o["[["+p+"]]"])}catch(e){throw new Error("Could not find weekday data for locale "+n)}break
case"timeZoneName":d=""
break
case"era":try{d=be(m,v,"eras",y,o["[["+p+"]]"])}catch(e){throw new Error("Could not find era data for locale "+n)}break
default:d=o["[["+p+"]]"]}h.call(l,{type:p,value:d})}else if("ampm"===p){d=be(m,v,"dayPeriods",o["[[hour]]"]>11?"pm":"am",null),h.call(l,{type:"dayPeriod",value:d})}else h.call(l,{type:"literal",value:s.substring(u,g+1)})
c=g+1,u=s.indexOf("{",c)}return g<s.length-1&&h.call(l,{type:"literal",value:s.substr(g+1)}),l}function ke(e,r){for(var t=De(e,r),n="",a=0;t.length>a;a++){n+=t[a].value}return n}g(V.DateTimeFormat.prototype,"resolvedOptions",{writable:!0,configurable:!0,value:function(){var e=void 0,r=new j,t=["locale","calendar","numberingSystem","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName"],n=null!==this&&"object"===s.typeof(this)&&S(this)
if(!n||!n["[[initializedDateTimeFormat]]"])throw new TypeError("`this` value for resolvedOptions() is not an initialized Intl.DateTimeFormat object.")
for(var a=0,i=t.length;a<i;a++)u.call(n,e="[["+t[a]+"]]")&&(r[t[a]]={value:n[e],writable:!0,configurable:!0,enumerable:!0})
return m({},r)}})
var Oe=V.__localeSensitiveProtos={Number:{},Date:{}}
Oe.Number.toLocaleString=function(){if("[object Number]"!==Object.prototype.toString.call(this))throw new TypeError("`this` value must be a number for Number.prototype.toLocaleString()")
return te(new Q(arguments[0],arguments[1]),this)},Oe.Date.toLocaleString=function(){if("[object Date]"!==Object.prototype.toString.call(this))throw new TypeError("`this` value must be a Date instance for Date.prototype.toLocaleString()")
var e=+this
if(isNaN(e))return"Invalid Date"
var r=arguments[0],t=arguments[1]
return ke(new we(r,t=je(t,"any","all")),e)},Oe.Date.toLocaleDateString=function(){if("[object Date]"!==Object.prototype.toString.call(this))throw new TypeError("`this` value must be a Date instance for Date.prototype.toLocaleDateString()")
var e=+this
if(isNaN(e))return"Invalid Date"
var r=arguments[0],t=arguments[1]
return ke(new we(r,t=je(t,"date","date")),e)},Oe.Date.toLocaleTimeString=function(){if("[object Date]"!==Object.prototype.toString.call(this))throw new TypeError("`this` value must be a Date instance for Date.prototype.toLocaleTimeString()")
var e=+this
if(isNaN(e))return"Invalid Date"
var r=arguments[0],t=arguments[1]
return ke(new we(r,t=je(t,"time","time")),e)},g(V,"__applyLocaleSensitivePrototypes",{writable:!0,configurable:!0,value:function(){g(Number.prototype,"toLocaleString",{writable:!0,configurable:!0,value:Oe.Number.toLocaleString}),g(Date.prototype,"toLocaleString",{writable:!0,configurable:!0,value:Oe.Date.toLocaleString})
for(var e in Oe.Date)u.call(Oe.Date,e)&&g(Date.prototype,e,{writable:!0,configurable:!0,value:Oe.Date[e]})}}),g(V,"__addLocaleData",{value:function(e){if(!q(e.locale))throw new Error("Object passed doesn't identify itself with a valid language tag");(function(e,r){if(!e.number)throw new Error("Object passed doesn't contain locale data for Intl.NumberFormat")
var t=void 0,n=[r],a=r.split("-")
a.length>2&&4===a[1].length&&h.call(n,a[0]+"-"+a[2])
for(;t=y.call(n);)h.call(w.NumberFormat["[[availableLocales]]"],t),w.NumberFormat["[[localeData]]"][t]=e.number,e.date&&(e.date.nu=e.number.nu,h.call(w.DateTimeFormat["[[availableLocales]]"],t),w.DateTimeFormat["[[localeData]]"][t]=e.date)
void 0===I&&(i=r,I=i)
var i})(e,e.locale)}})
if(g(V,"__disableRegExpRestore",{value:function(){w.disableRegExpRestore=!0}}),"undefined"==typeof Intl)try{window.Intl=V,V.__applyLocaleSensitivePrototypes()}catch(e){}return V})
