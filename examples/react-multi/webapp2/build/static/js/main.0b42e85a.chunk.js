(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(21)},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),o=n(4),a=n.n(o),c=n(5),s=n(6),d=n(10),u=n(7),p=n(1),w=n(11),h=n(2),l=n.n(h),b=n(8),g=n(9),f=n.n(g),m=(n(20),"https://precor.github.io"),v=function(){var e=Object(b.a)(l.a.mark(function e(t){var n,i,r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t?"https://picsum.photos/id/".concat(t,"/").concat(window.innerWidth,"/").concat(window.innerHeight,"/"):"https://picsum.photos/".concat(window.innerWidth,"/").concat(window.innerHeight,"/"));case 2:return n=e.sent,i=n.url.split("/")[4],e.next=6,n.blob();case 6:return r=e.sent,e.abrupt("return",{id:i,imageUrl:URL.createObjectURL(r)});case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),k=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(d.a)(this,Object(u.a)(t).call(this,e))).displayNewPhoto=function(){v().then(function(e){return n.setState(e)})},n.photoClicked=function(){n.send("photoClicked",[n.state.id],!1)},n.webApiBridge=new f.a,n.webApiBridge.ipc=window.parent,n.webApiBridge.origin=m,n.webApiBridge.targetOrigin=m,n.send=n.webApiBridge.send.bind(n.webApiBridge),n.webApiBridge.apis=[Object(p.a)(n)],window.addEventListener("message",function(e){return n.webApiBridge.onMessage(e,e.data)}),n.state={},n.displayNewPhoto(),window.onresize=function(){v(n.state.id).then(function(e){return n.setState(e)})},n}return Object(w.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){console.log("render webapp2");var e=this.state.imageUrl;return e?r.a.createElement("img",{src:e,alt:"",onClick:this.photoClicked}):null}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.0b42e85a.chunk.js.map