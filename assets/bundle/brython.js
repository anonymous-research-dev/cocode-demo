!function(t){var n={};function e(r){if(n[r])return n[r].exports;var s=n[r]={i:r,l:!1,exports:{}};return t[r].call(s.exports,s,s.exports,e),s.l=!0,s.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var s in t)e.d(r,s,function(n){return t[n]}.bind(null,s));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/static/web/",e(e.s=415)}({415:function(t,n,e){t.exports=e(656)},656:function(t,n,e){"use strict";e.r(n);var r="\nasync function init(data) {\n    self.window = self\n    self.staticUrl = data.staticUrl\n    self.print = msg => postMessage({\n        type: 'stdout',\n        value: msg,\n    })\n    self.printErr = msg => postMessage({\n        type: 'stderr',\n        value: msg,\n    })\n    self.sendMsg = (type, msg) => postMessage({\n        type,\n        value: msg\n    })\n    importScripts(\n        self.staticUrl + 'brython/brython.js',\n        self.staticUrl + 'brython/brython_stdlib.js',\n        self.staticUrl + 'brython/brython_modules.js',\n    )\n    const paths = []\n    if (data.cwdUrl) {\n        paths.push(data.cwdUrl)\n    }\n    self.__BRYTHON__.brython({\n        pythonpath: [\n            ...paths,\n            self.staticUrl + 'brython',\n            self.staticUrl + 'brython/site-packages',\n        ],\n        debug: 1, // 10\n    })\n    self.__BRYTHON__._run_script({\n        name: '__main__',\n        src: 'import cocode.stdio',\n    })\n}\n\nfunction run(data) {\n    const code = self.__BRYTHON__._run_script({\n        name: data.name || '__main__',\n        src: data.src,\n    })\n    postMessage({\n        type: 'done',\n        value: code,\n    })\n}\n\nonmessage = ({ data }) => {\n    switch (data.type) {\n        case 'init':\n            init(data)\n            break\n        case 'run':\n            run(data)\n            break\n        default:\n            break\n    }\n}";window.BrythonRunner=class{constructor(t={}){this.eventTarget=new EventTarget,this.brythonWorker=function(){let t;window.URL=window.URL||window.webkitURL;try{t=new Blob([r],{type:"application/javascript"})}catch(n){window.BlobBuilder=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder,(t=new BlobBuilder).append(r),t=t.getBlob()}return new Worker(URL.createObjectURL(t))}();const n={};n.staticUrl=this.getAbsUrl(__COCODE__.staticUrl),t.cwdUrl&&(this.cwdUrl=t.cwdUrl,n.cwdUrl=this.getAbsUrl(t.cwdUrl)),this.brythonWorker.postMessage({type:"init",...n}),this.brythonWorker.onmessage=t=>this.handleMessage(t)}getAbsUrl(t){return t.startsWith("http://")||t.startsWith("https://")?t:t.startsWith("/")?window.location.origin+t:window.location.href+t}handleMessage(t){switch(t.data.type){case"done":this.done(t.data.value);break;default:this.dispatch(t.data.type,t.data)}}run(t){return new Promise(n=>{this.done=t=>n(t),this.brythonWorker.postMessage({type:"run",src:t})})}close(){this.brythonWorker.terminate()}on(t,n){this.eventTarget.addEventListener(t,n)}dispatch(t,n,e){const r=new Event(t,e?{cancelable:!0}:{});return Object.assign(r,{detail:n}),this.eventTarget.dispatchEvent(r)}}}});
//# sourceMappingURL=brython.js.map