var a=function(){return a=Object.assign||function(a){for(var n,e=1,t=arguments.length;e<t;e++)for(var r in n=arguments[e])Object.prototype.hasOwnProperty.call(n,r)&&(a[r]=n[r]);return a},a.apply(this,arguments)};function n(a,n,e,t){return new(e||(e=Promise))((function(r,i){function o(a){try{l(t.next(a))}catch(a){i(a)}}function u(a){try{l(t.throw(a))}catch(a){i(a)}}function l(a){var n;a.done?r(a.value):(n=a.value,n instanceof e?n:new e((function(a){a(n)}))).then(o,u)}l((t=t.apply(a,n||[])).next())}))}function e(a,n){var e,t,r,i,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(u){return function(l){return function(u){if(e)throw new TypeError("Generator is already executing.");for(;i&&(i=0,u[0]&&(o=0)),o;)try{if(e=1,t&&(r=2&u[0]?t.return:u[0]?t.throw||((r=t.return)&&r.call(t),0):t.next)&&!(r=r.call(t,u[1])).done)return r;switch(t=0,r&&(u=[2&u[0],r.value]),u[0]){case 0:case 1:r=u;break;case 4:return o.label++,{value:u[1],done:!1};case 5:o.label++,t=u[1],u=[0];continue;case 7:u=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==u[0]&&2!==u[0])){o=0;continue}if(3===u[0]&&(!r||u[1]>r[0]&&u[1]<r[3])){o.label=u[1];break}if(6===u[0]&&o.label<r[1]){o.label=r[1],r=u;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(u);break}r[2]&&o.ops.pop(),o.trys.pop();continue}u=n.call(a,o)}catch(a){u=[6,a],t=0}finally{e=r=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,l])}}}function t(a){for(var n=[],e=0,t=0;t<a.length;t++){var i=a.charCodeAt(t);128>i?n[e++]=i:(2048>i?n[e++]=i>>6|192:(55296==(64512&i)&&t+1<a.length&&56320==(64512&a.charCodeAt(t+1))?(i=65536+((1023&i)<<10)+(1023&a.charCodeAt(++t)),n[e++]=i>>18|240,n[e++]=i>>12&63|128):n[e++]=i>>12|224,n[e++]=i>>6&63|128),n[e++]=63&i|128)}var o=0;for(e=0;e<n.length;e++)o+=n[e],o=r(o,"+-a^+6");return o=r(o,"+-3^+b+-f"),0>(o^=0)&&(o=2147483648+(2147483647&o)),(o%=1e6).toString()+"."+o.toString()}var r=function(a,n){for(var e=0;e<n.length-2;e+=3){var t=n.charAt(e+2);t="a"<=t?t.charCodeAt(0)-87:Number(t),t="+"==n.charAt(e+1)?a>>>t:a<<t,a="+"==n.charAt(e)?a+t:a^t}return a},i={client:"gtx",from:"auto",to:"en",hl:"en",tld:"com"};function o(n,e){var r=a(a({},i),e),o={client:r.client,sl:r.from,tl:r.to,hl:r.hl,ie:"UTF-8",oe:"UTF-8",otf:"1",ssel:"0",tsel:"0",kc:"7",q:n,tk:t(n)},u=new URLSearchParams(o);return["at","bd","ex","ld","md","qca","rw","rm","ss","t"].forEach((function(a){return u.append("dt",a)})),"https://translate.google.".concat(r.tld,"/translate_a/single?").concat(u)}var u={auto:"Automatic",af:"Afrikaans",sq:"Albanian",am:"Amharic",ar:"Arabic",hy:"Armenian",az:"Azerbaijani",eu:"Basque",be:"Belarusian",bn:"Bengali",bs:"Bosnian",bg:"Bulgarian",ca:"Catalan",ceb:"Cebuano",ny:"Chichewa",zh:"Chinese Simplified","zh-cn":"Chinese Simplified","zh-tw":"Chinese Traditional",co:"Corsican",hr:"Croatian",cs:"Czech",da:"Danish",nl:"Dutch",en:"English",eo:"Esperanto",et:"Estonian",tl:"Filipino",fi:"Finnish",fr:"French",fy:"Frisian",gl:"Galician",ka:"Georgian",de:"German",el:"Greek",gu:"Gujarati",ht:"Haitian Creole",ha:"Hausa",haw:"Hawaiian",he:"Hebrew",iw:"Hebrew",hi:"Hindi",hmn:"Hmong",hu:"Hungarian",is:"Icelandic",ig:"Igbo",id:"Indonesian",ga:"Irish",it:"Italian",ja:"Japanese",jw:"Javanese",kn:"Kannada",kk:"Kazakh",km:"Khmer",rw:"Kinyarwanda",ko:"Korean",ku:"Kurdish (Kurmanji)",ky:"Kyrgyz",lo:"Lao",la:"Latin",lv:"Latvian",lt:"Lithuanian",lb:"Luxembourgish",mk:"Macedonian",mg:"Malagasy",ms:"Malay",ml:"Malayalam",mt:"Maltese",mi:"Maori",mr:"Marathi",mn:"Mongolian",my:"Myanmar (Burmese)",ne:"Nepali",no:"Norwegian",or:"Odia (Oriya)",ps:"Pashto",fa:"Persian",pl:"Polish",pt:"Portuguese",pa:"Punjabi",ro:"Romanian",ru:"Russian",sm:"Samoan",gd:"Scots Gaelic",sr:"Serbian",st:"Sesotho",sn:"Shona",sd:"Sindhi",si:"Sinhala",sk:"Slovak",sl:"Slovenian",so:"Somali",es:"Spanish",su:"Sundanese",sw:"Swahili",sv:"Swedish",tg:"Tajik",ta:"Tamil",tt:"Tatar",te:"Telugu",th:"Thai",tr:"Turkish",tk:"Turkmen",uk:"Ukrainian",ur:"Urdu",ug:"Uyghur",uz:"Uzbek",vi:"Vietnamese",cy:"Welsh",xh:"Xhosa",yi:"Yiddish",yo:"Yoruba",zu:"Zulu"},l=function(a){return Boolean(u[a])};function s(a,n){void 0===n&&(n=!1);var e={text:"",pronunciation:"",from:{language:{didYouMean:!1,iso:""},text:{autoCorrected:!1,value:"",didYouMean:!1}}};if(a[0].forEach((function(a){a[0]?e.text+=a[0]:a[2]&&(e.pronunciation+=a[2])})),a[2]===a[8][0][0]?e.from.language.iso=a[2]:(e.from.language.didYouMean=!0,e.from.language.iso=a[8][0][0]),a[7]&&a[7][0]){var t=a[7][0];t=(t=t.replace(/<b><i>/g,"[")).replace(/<\/i><\/b>/g,"]"),e.from.text.value=t,!0===a[7][5]?e.from.text.autoCorrected=!0:e.from.text.didYouMean=!0}return n&&(e.raw=a),e}var c="",h=function(a){return c=a,f};function f(a,t){return void 0===t&&(t={}),n(this,void 0,void 0,(function(){var n,r;return e(this,(function(e){switch(e.label){case 0:return n=o(a,t),[4,fetch("".concat(c).concat(n))];case 1:if(!(r=e.sent()).ok)throw new Error("Request failed");return[4,r.json()];case 2:return[2,s(e.sent(),t.raw)]}}))}))}export{f as default,o as generateRequestUrl,l as isSupported,s as normaliseResponse,h as setCORS,f as translate};
//# sourceMappingURL=esm.js.map