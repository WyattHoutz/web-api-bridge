(window.webpackJsonpparent=window.webpackJsonpparent||[]).push([[0],{23:function(e,i,t){e.exports=t(51)},50:function(e,i,t){},51:function(e,i,t){"use strict";t.r(i);var n=t(0),a=t.n(n),r=t(16),o=t.n(r),s=t(21),p=t(17),c=t(20),l=t(18),u=t(3),d=t(22),b=t(1),g=t(19),f=t.n(g),h=function(e){return{webApiBridge:e.webApiBridge,apis:e.apis,findApiOfType:function(e){return this.webApiBridge.apis.find(function(i){return i instanceof y[e]})}}},m=function(e,i){return function(t,n,a){return i[t]?e(t,n,a):(console.log("".concat(t," was not registered")),null)}},w=function e(){Object(b.a)(this,e)};w.instances=[],w.add=function(e){return w.instances.push(e)},w.executeOnType=function(e,i){w.instances.forEach(function(t){var n=t.findApiOfType(e);n&&i(n)})};var y={Common:function e(){var i=this;Object(b.a)(this,e),this.setSend=function(e){i.send=m(e,i.outgoingCalls)},this.displayBlur=function(e){i.send("displayBlur",[e],!1)},this.displayGrayscale=function(e){i.send("displayGrayscale",[e],!1)},this.outgoingCalls={displayBlur:null,displayGrayscale:null}},Api1:function e(){var i=this;Object(b.a)(this,e),this.setSend=function(e){i.send=m(e,i.outgoingCalls)},this.photoSelected=function(e){i.send("photoSelected",[e],!1)},this.outgoingCalls={photoSelected:null}},Api2:function e(){var i=this;Object(b.a)(this,e),this.setSend=function(e){i.send=m(e,i.outgoingCalls)},this.photoClicked=function(e){w.executeOnType("Api1",function(i){return i.photoSelected(e)}),w.executeOnType("Api2",function(e){e!==i&&e.displayNewPhoto()})},this.displayNewPhoto=function(){i.send("displayNewPhoto",null,!1)},this.outgoingCalls={displayNewPhoto:null}},Api3:function e(){Object(b.a)(this,e),this.setSend=function(){},this.setGrayscale=function(e){w.executeOnType("Common",function(i){return i.displayGrayscale(e)})},this.setBlur=function(e){w.executeOnType("Common",function(i){return i.displayBlur(e)})}}},A=function(e){function i(e){var t;Object(b.a)(this,i),(t=Object(c.a)(this,Object(l.a)(i).call(this,e))).messageListener=function(e){e&&e.source===t.webApiBridge.target&&t.webApiBridge.onMessage(e,e.data)},t.startApis=function(){return new Promise(function(e){return e({type:t.type,apis:t.apis})})},t.registerCallback=function(e,i){return new Promise(function(n){var a=t.webApiBridge.apis.find(function(i){return void 0!==i.outgoingCalls[e]});if(!a)throw new Error("registerCallback failed, ".concat(e," does not exist"));a.outgoingCalls[e]=i,n()})},t.setIframe=function(e){e&&!t.iframe&&(t.iframe=e,t.webApiBridge.target=e.contentWindow)};var n=e.src,a=e.type,r=e.apis,o=new URL(n);t.type=a,t.apis=r,t.webApiBridge=new f.a,t.webApiBridge.origin=o.origin,t.webApiBridge.targetOrigin=o.origin;var s=t.webApiBridge.send.bind(t.webApiBridge);return w.add(h({webApiBridge:t.webApiBridge,apis:r})),window.addEventListener("message",t.messageListener),t.webApiBridge.apis=r.map(function(e){var i=new y[e];return i.setSend(s),i}),t.webApiBridge.apis.push(Object(u.a)(t)),t}return Object(d.a)(i,e),Object(p.a)(i,[{key:"componentWillUnmount",value:function(){this.webApiBridge.apis.forEach(function(e){var i=e;i.outgoingCalls&&Object.keys(i.outgoingCalls).forEach(function(e){i.outgoingCalls[e]=null})}),window.removeEventListener("message",this.messageListener)}},{key:"render",value:function(){var e=this,i=this.props,t=i.src,n=(i.type,i.apis,Object(s.a)(i,["src","type","apis"]));return console.log("render iframe: ".concat(t)),a.a.createElement("iframe",Object.assign({src:t,title:t,ref:function(i){e.setIframe(i)},scrolling:"no"},n))}}]),i}(a.a.Component),v=(t(50),{src:"https://precor.github.io/web-api-bridge/examples/webapp-library/webapp1/build/",type:"LibType1",apis:["Common","Api1"]}),B=[{src:"https://precor.github.io/web-api-bridge/examples/webapp-library/webapp1/build/",type:"LibType2",apis:["Common","Api2","Api3"]},{src:"https://precor.github.io/web-api-bridge/examples/webapp-library/webapp1/build/",type:"LibType2",apis:["Common","Api2"]},{src:"https://precor.github.io/web-api-bridge/examples/webapp-library/webapp2/build/",type:"LibType2",apis:["Common","Api2"]},{src:"https://precor.github.io/web-api-bridge/examples/webapp-library/webapp2/build/",type:"LibType2",apis:["Common","Api2"]}],C=function(){return console.log("render parent"),a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement(A,{className:"fullscreen-iframe",src:v.src,type:v.type,apis:v.apis})),a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"row"},B.map(function(e,i){var t=e.src,n=e.type,r=e.apis;return a.a.createElement(A,{className:"image-select",key:"LibType2_".concat(i),src:t,type:n,apis:r})})),a.a.createElement("div",{className:"overlay-text"},"Click on one of the 4 photos")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.ad08994d.chunk.js.map