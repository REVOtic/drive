(this.webpackJsonpdrive=this.webpackJsonpdrive||[]).push([[0],{221:function(e,t,n){"use strict";(function(e){n(2),n(253);var a=n(30),r=n(240),c=n(27),i=n(62),s=n(24),o=n(232),u=n(233),d=n(234),l=n(235),f=n(241),p=n(236),j=n(238),b=n(239),h=n(6);e.WebSocket=n(556),t.a=function(){var e=Object(c.c)(a.d);return Object(h.jsx)("div",{className:"app",children:Object(h.jsx)(i.a,{children:e?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(f.a,{}),Object(h.jsxs)(s.c,{children:[Object(h.jsx)(s.a,{exact:!0,path:"/photos",children:Object(h.jsx)(o.a,{})}),Object(h.jsx)(s.a,{exact:!0,path:"/docs",children:Object(h.jsx)(u.a,{})}),Object(h.jsx)(s.a,{exact:!0,path:"/audios",children:Object(h.jsx)(d.a,{})}),Object(h.jsx)(s.a,{exact:!0,path:"/videos",children:Object(h.jsx)(l.a,{})}),Object(h.jsx)(s.a,{exact:!0,path:"/upload",children:Object(h.jsx)(p.a,{})}),Object(h.jsx)(s.a,{exact:!0,path:"/profile",children:Object(h.jsx)(b.a,{})}),Object(h.jsx)(s.a,{path:"/",children:Object(h.jsx)(j.a,{})})]})]}):Object(h.jsx)(r.a,{})})})}}).call(this,n(29))},232:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(28),i=n(26),s=n(43),o=n(32),u=n(23),d=n(2),l=n(27),f=n(30),p=n(80),j=(n(280),n(6));t.a=function(){var e=Object(l.c)(f.d),t=Object(d.useState)(),n=Object(i.a)(t,2),a=n[0],b=n[1],h=s.a.fromString(e.identity),O={key:"bziihv26ota7bqegjxhd3coas4q",secret:"ba3po7yxlfklng63e46aemq3cfodtgsyn5rududq"},m=function(){var e=Object(c.a)(r.a.mark((function e(t,n){var a,c,i,s,d;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.withKeyInfo(t);case 2:return a=e.sent,e.next=5,a.getToken(n);case 5:return e.sent,c=new o.b("ftype").eq("image"),e.next=9,a.listThreads();case 9:return i=e.sent,s=u.b.fromString(i[0].id.toString()),e.next=13,a.find(s,"data",c);case 13:d=e.sent,b(d.map((function(e){return{file:e.file,desc:e.description,date:e.date,ftype:e.ftype,name:e.name,id:e._id}})));case 15:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){m(O,h)}),[O]),Object(j.jsx)("div",{className:"docs",children:Object(j.jsx)("div",{className:"cards",children:null===a||void 0===a?void 0:a.map((function(e){return Object(j.jsx)(p.a,{filehash:e.file,filename:e.name.substr(0,21)+"...",date:e.date,desc:e.desc.substr(0,28)+"...",id:e.id,ftype:e.ftype},e.id)}))})})}},233:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(28),i=n(26),s=n(43),o=n(32),u=n(23),d=n(2),l=n(27),f=n(30),p=n(80),j=(n(281),n(6));t.a=function(){var e=Object(l.c)(f.d),t=Object(d.useState)(),n=Object(i.a)(t,2),a=n[0],b=n[1],h=s.a.fromString(e.identity),O={key:"bziihv26ota7bqegjxhd3coas4q",secret:"ba3po7yxlfklng63e46aemq3cfodtgsyn5rududq"},m=function(){var e=Object(c.a)(r.a.mark((function e(t,n){var a,c,i,s,d;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.withKeyInfo(t);case 2:return a=e.sent,e.next=5,a.getToken(n);case 5:return e.sent,c=new o.b("ftype").eq("document"),e.next=9,a.listThreads();case 9:return i=e.sent,s=u.b.fromString(i[0].id.toString()),e.next=13,a.find(s,"data",c);case 13:d=e.sent,b(d.map((function(e){return{file:e.file,desc:e.description,date:e.date,ftype:e.ftype,name:e.name,id:e._id}})));case 15:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){m(O,h)}),[O]),Object(j.jsx)("div",{className:"docs",children:Object(j.jsx)("div",{className:"cards",children:null===a||void 0===a?void 0:a.map((function(e){return Object(j.jsx)(p.a,{filehash:e.file,filename:e.name.substr(0,21)+"...",date:e.date,desc:e.desc.substr(0,28)+"...",id:e.id,ftype:e.ftype},e.id)}))})})}},234:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(28),i=n(26),s=n(43),o=n(32),u=n(23),d=n(2),l=n(27),f=n(30),p=(n(282),n(6));t.a=function(){var e=Object(l.c)(f.d),t=Object(d.useState)([]),n=Object(i.a)(t,2),a=n[0],j=n[1],b=s.a.fromString(e.identity),h={key:"bziihv26ota7bqegjxhd3coas4q",secret:"ba3po7yxlfklng63e46aemq3cfodtgsyn5rududq"},O=function(){var e=Object(c.a)(r.a.mark((function e(t,n){var a,c,i,s,d;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.withKeyInfo(t);case 2:return a=e.sent,e.next=5,a.getToken(n);case 5:return e.sent,c=new o.b("ftype").eq("audio"),e.next=9,a.listThreads();case 9:return i=e.sent,s=u.b.fromString(i[0].id.toString()),e.next=13,a.find(s,"data",c);case 13:d=e.sent,j(d.map((function(e){return{file:e.file,desc:e.description,date:e.date,ftype:e.ftype,name:e.name,id:e._id}})));case 15:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){O(h,b)}),[h]),Object(p.jsx)("div",{className:"audios",children:a.map((function(e){return Object(p.jsxs)("div",{id:e.id,className:"audiofile",children:[Object(p.jsx)("audio",{controls:!0,preload:"true",children:Object(p.jsx)("source",{src:"https://ipfs.infura.io/ipfs/".concat(e.file),type:""})}),Object(p.jsxs)("div",{className:"audio__info",children:[Object(p.jsxs)("div",{className:"audio__meta",children:[Object(p.jsx)("h4",{children:e.name.substr(0,20)}),Object(p.jsx)("span",{children:e.date})]}),Object(p.jsxs)("div",{className:"audio__footer",children:[Object(p.jsx)("p",{children:e.desc.substr(0,29)+"..."})," ",Object(p.jsx)("a",{href:"https://ipfs.infura.io/ipfs/".concat(e.file),children:"View"})]})]})]})}))})}},235:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(28),i=n(26),s=n(43),o=n(32),u=n(23),d=n(2),l=n(27),f=n(30),p=n(80),j=(n(283),n(6));t.a=function(){var e=Object(l.c)(f.d),t=Object(d.useState)(),n=Object(i.a)(t,2),a=n[0],b=n[1],h=s.a.fromString(e.identity),O={key:"bziihv26ota7bqegjxhd3coas4q",secret:"ba3po7yxlfklng63e46aemq3cfodtgsyn5rududq"},m=function(){var e=Object(c.a)(r.a.mark((function e(t,n){var a,c,i,s,d;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.withKeyInfo(t);case 2:return a=e.sent,e.next=5,a.getToken(n);case 5:return e.sent,c=new o.b("ftype").eq("video"),e.next=9,a.listThreads();case 9:return i=e.sent,s=u.b.fromString(i[0].id.toString()),e.next=13,a.find(s,"data",c);case 13:d=e.sent,b(d.map((function(e){return{file:e.file,desc:e.description,date:e.date,ftype:e.ftype,name:e.name,id:e._id}})));case 15:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){m(O,h)}),[O]),Object(j.jsx)("div",{className:"videos",children:Object(j.jsx)("div",{className:"cards",children:null===a||void 0===a?void 0:a.map((function(e){return Object(j.jsx)(p.a,{filehash:e.file,filename:e.name.substr(0,21)+"...",date:e.date,desc:e.desc.substr(0,28)+"...",id:e.id,ftype:e.ftype},e.id)}))})})}},236:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(28),i=n(26),s=n(2),o=n(27),u=n(30),d=n(24),l=(n(286),n(559)),f=n(237),p=n.n(f),j=n(56),b=n(6),h=(n(2),n(287)({host:"ipfs.infura.io",port:5001,protocol:"https"}));t.a=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],f=Object(s.useState)(""),O=Object(i.a)(f,2),m=O[0],v=O[1],x=Object(s.useState)([]),g=Object(i.a)(x,2),y=(g[0],g[1],Object(s.useState)("")),N=Object(i.a)(y,2),S=N[0],w=N[1],E=Object(s.useState)(""),T=Object(i.a)(E,2),_=T[0],k=T[1],A=Object(s.useState)(""),I=Object(i.a)(A,2),C=I[0],q=I[1],H=null,R=Object(s.useState)(null),D=Object(i.a)(R,2),P=D[0],L=D[1],G=Object(o.c)(u.d),W=j.b.fromString(G.identity),U=Object(d.f)(),Y={key:m.env.REACT_APP_KEY,secret:m.env.REACT_APP_SECRET},z={title:"Drive Data",type:"object",required:["_id"],properties:{_id:{type:"string",description:"The instance's id."},user:{type:"string",description:"The user's identity"},file:{description:"The hashed value of file",type:"string"},ftype:{description:"The type of file being uploaded",type:"string"},name:{description:"The name of the file uploaded",type:"string"},description:{description:"The description of the file",type:"string"},date:{description:"The date of the file",type:"string"}}};function M(e,t,n){return K.apply(this,arguments)}function K(){return(K=Object(c.a)(r.a.mark((function e(t,n,a){var c,i,s,o,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.withKeyInfo(n);case 2:return c=e.sent,e.next=5,c.getToken(a);case 5:return e.sent,i={user:G.identity,file:P,ftype:H,name:S,description:_,date:C,id:""},e.next=9,c.listThreads();case 9:if(0!==(s=e.sent).length){e.next=17;break}return o=j.c.fromRandom(),e.next=14,c.newDB(o,"data");case 14:return console.log("new thread created"),e.next=17,c.newCollection(o,{name:"data",schema:t});case 17:return e.next=19,c.listThreads();case 19:return s=e.sent,u=j.c.fromString(s[0].id.toString()),e.next=23,c.create(u,"data",[i]);case 23:console.log("Data Added Successfully");case 24:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var F=function(){var e=Object(c.a)(r.a.mark((function e(t){var n,a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(i.a)(t,1),a=n[0],e.prev=1,e.next=4,h.add(a);case 4:c=e.sent,L(c.cid.toString()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:v("");case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M(z,Y,W);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(h)return Object(b.jsx)("div",{className:"upload",children:Object(b.jsx)("div",{className:"upload__form",children:Object(b.jsxs)("form",{id:"capture-media",onSubmit:function(e){e.preventDefault(),console.log(n),"jpg"===n||"png"===n||"jpeg"===n||"gif"===n?H="image":"mp4"===n||"mov"===n||"wmv"===n?H="video":"doc"===n||"pdf"===n||"docx"===n?H="document":"mp3"!==n&&"wav"!==n||(H="audio"),P&&S&&_&&C&&(V(),U.push("/"))},className:"ui form",children:[Object(b.jsxs)("div",{className:"upload__formLeft",style:{backgroundImage:P?"url(https://ipfs.infura.io/ipfs/".concat(P,")"):"none"},children:[Object(b.jsx)("input",{className:"input",type:"file",accept:"jpg, jpeg, png, pdf, mp3, mp4",name:"input-file",id:"input-file",onChange:function(e){v("Wait till we process the file"),e.stopPropagation(),e.preventDefault(),F(e.target.files);var t=String(e.target.files[0].name.split(".").pop()).toLowerCase();a(t)},required:!0}),Object(b.jsxs)(l.a,{id:"icon-button",onClick:function(e){return document.getElementById("input-file").click()},children:[" ",Object(b.jsx)(p.a,{})]}),Object(b.jsxs)("h4",{children:[P?"File Processed Successfully":m," "]})]}),Object(b.jsxs)("div",{className:"upload__formRight",children:[Object(b.jsx)("input",{className:"input",value:S,placeholder:"Name of your file",onChange:function(e){return w(e.target.value)},type:"text",name:"name",id:"file-name",required:!0}),Object(b.jsx)("input",{className:"input",value:_,placeholder:"A description of your file",onChange:function(e){return k(e.target.value)},type:"text",name:"desc",id:"description",required:!0}),Object(b.jsx)("input",{className:"ui input",type:"date",onChange:function(e){return q(e.target.value)},required:!0}),Object(b.jsx)("button",{className:"ui button",type:"submit",children:" Upload "})]})]})})})}},238:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(28),i=n(26),s=n(2),o=n(27),u=n(30),d=(n(554),n(56)),l=n(80),f=n(6);t.a=function(){var e=Object(o.c)(u.d),t=Object(s.useState)(),n=Object(i.a)(t,2),a=n[0],p=n[1],j=d.b.fromString(e.identity),b={key:"bziihv26ota7bqegjxhd3coas4q",secret:"ba3po7yxlfklng63e46aemq3cfodtgsyn5rududq"},h=function(){var t=Object(c.a)(r.a.mark((function t(n,a){var c,i,s,o,u;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.withKeyInfo(n);case 2:return c=t.sent,t.next=5,c.getToken(a);case 5:return t.sent,i=new d.d("user").eq(e.identity),t.next=9,c.listThreads();case 9:return s=t.sent,o=d.c.fromString(s[0].id.toString()),t.next=13,c.find(o,"data",i);case 13:u=t.sent,p(u.map((function(e){return{file:e.file,desc:e.description,date:e.date,ftype:e.ftype,name:e.name,id:e._id}})));case 15:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();return Object(s.useEffect)((function(){h(b,j)}),[b]),Object(f.jsx)("div",{className:"homepage",children:Object(f.jsx)("div",{className:"cards",children:null===a||void 0===a?void 0:a.map((function(e){return Object(f.jsx)(l.a,{filehash:e.file,filename:e.name.substr(0,21)+"...",date:e.date,desc:e.desc.substr(0,28)+"...",id:e.id,ftype:e.ftype},e.id)}))})})}},239:function(e,t,n){"use strict";var a=n(2),r=n(27),c=n(30),i=(n(555),n(6));t.a=function(){return Object(r.c)(c.d),Object(r.b)(),Object(a.useEffect)((function(){return function(){}}),[]),Object(i.jsx)("div",{className:"profile"})}},240:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(28),i=n(7),s=n(8),o=n(4),u=(n(2),n(56)),d=n(576),l=n(63),f=n(575),p=(n(258),n.p+"static/media/metamask.b818f2bb.png"),j=n(27),b=n(30),h=n(6),O=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return n}((function e(t){Object(o.a)(this,e),this.value=t,this._type=void 0}));t.a=function(){var e=Object(j.b)(),t=function(){var e=Object(c.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.ethereum){e.next=2;break}throw new Error("Ethereum is not connected. Please download Metamask from https://metamask.io/download.html");case 2:return console.debug("Initializing web3 provider..."),t=new d.a.Web3Provider(window.ethereum),n=t.getSigner(),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n=function(){var e=Object(c.a)(r.a.mark((function e(){var n,a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:return n=e.sent,e.next=5,window.ethereum.request({method:"eth_requestAccounts"});case 5:if(0!==(a=e.sent).length){e.next=8;break}throw new Error("No account is provided. Please provide an account to this application.");case 8:return c=new O(a[0]),e.abrupt("return",{address:c,signer:n});case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=function(){var t=Object(c.a)(r.a.mark((function t(){var a,c,i,s,o,f;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n();case 2:return a=t.sent,r=a.address,p="drive",c="******************************************************************************** \nREAD THIS MESSAGE CAREFULLY. \nDO NOT SHARE THIS SIGNED MESSAGE WITH ANYONE OR THEY WILL HAVE READ AND WRITE \nACCESS TO THIS APPLICATION. \nDO NOT SIGN THIS MESSAGE IF THE FOLLOWING IS NOT TRUE OR YOU DO NOT CONSENT \nTO THE CURRENT APPLICATION HAVING ACCESS TO THE FOLLOWING APPLICATION. \n******************************************************************************** \nThe Ethereum address used by this application is: \n\n"+r.value+"\n\n\nBy signing this message, you authorize the current application to use the \nfollowing app associated with the above address: \n\n"+p+"\n\n\nThe hash of your non-recoverable, private, non-persisted password or secret \nphrase is: \n\n\n\n\n******************************************************************************** \nONLY SIGN THIS MESSAGE IF YOU CONSENT TO THE CURRENT PAGE ACCESSING THE KEYS \nASSOCIATED WITH THE ABOVE ADDRESS AND APPLICATION. \nAGAIN, DO NOT SHARE THIS SIGNED MESSAGE WITH ANYONE OR THEY WILL HAVE READ AND \nWRITE ACCESS TO THIS APPLICATION. \n******************************************************************************** \n",t.next=6,a.signer.signMessage(c);case 6:if(i=t.sent,null!==(s=d.b.keccak256(i))){t.next=10;break}throw new Error("No account is provided. Please provide an account to this application.");case 10:if(32===(o=s.replace("0x","").match(/.{2}/g).map((function(e){return l.a.from("0x"+e).toNumber()}))).length){t.next=13;break}throw new Error("Hash of signature is not the correct size! Something went wrong!");case 13:return f=u.b.fromRawEd25519Seed(Uint8Array.from(o)),e(Object(b.b)({identity:f.toString()})),t.abrupt("return",f);case 16:case"end":return t.stop()}var r,p}),t)})));return function(){return t.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"login",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("img",{src:p,alt:""}),Object(h.jsx)("div",{className:"login__form",children:Object(h.jsx)(f.a,{onClick:a,children:"Login with Metamask"})})]})})}},241:function(e,t,n){"use strict";n(2),n(284);var a=n(62),r=n.p+"static/media/earth.0be09407.png",c=n(30),i=n(575),s=n(577),o=n(27),u=n(6);t.a=function(){var e=Object(o.c)(c.d),t=Object(o.b)();return Object(u.jsxs)("div",{className:"navbar",children:[Object(u.jsx)("div",{className:"navbar__left",children:Object(u.jsx)(a.b,{className:"navbar__navlink",activeClassName:"navbar__active",to:"/photos",children:Object(u.jsx)("img",{src:r,width:"70px",alt:""})})}),Object(u.jsxs)("div",{className:"navbar__center",children:[Object(u.jsx)(a.b,{className:"navbar__navlink",activeClassName:"navbar__active",to:"/photos",children:"Photos"}),Object(u.jsx)(a.b,{className:"navbar__navlink",activeClassName:"navbar__active",to:"/docs",children:"Docs"}),Object(u.jsx)(a.b,{className:"navbar__navlink",activeClassName:"navbar__active",to:"/audios",children:"Audios"}),Object(u.jsx)(a.b,{className:"navbar__navlink",activeClassName:"navbar__active",to:"/videos",children:"Videos"}),Object(u.jsx)(a.b,{className:"navbar__navlink",activeClassName:"navbar__active",to:"/upload",children:"Upload"})]}),Object(u.jsxs)("div",{className:"navbar__right",children:[Object(u.jsx)(i.a,{onClick:function(){return t(Object(c.c)())},children:"Logout"}),Object(u.jsx)(a.b,{to:"/profile",children:Object(u.jsx)(s.a,{src:e.photoUrl,sizes:"17px"})})]})]})}},252:function(e,t,n){},253:function(e,t,n){},258:function(e,t,n){},264:function(e,t){},279:function(e,t,n){},280:function(e,t,n){},281:function(e,t,n){},282:function(e,t,n){},283:function(e,t,n){},284:function(e,t,n){},286:function(e,t,n){},30:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return o}));var a=n(125),r=Object(a.b)({name:"user",initialState:{user:null},reducers:{login:function(e,t){e.user=t.payload},logout:function(e){e.user=null}}}),c=function(e){return e.user.user},i=r.actions,s=i.login,o=i.logout;t.a=r.reducer},321:function(e,t){},329:function(e,t){},351:function(e,t){},352:function(e,t){},554:function(e,t,n){},555:function(e,t,n){},558:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),c=n(77),i=n.n(c),s=(n(252),n(221)),o=n(125),u=n(30),d=Object(o.a)({reducer:{user:u.a}}),l=n(27);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var f=n(6);i.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(l.a,{store:d,children:Object(f.jsx)(s.a,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},80:function(e,t,n){"use strict";n(2),n(279);var a=n(6);t.a=function(e){var t=e.id,n=e.filehash,r=e.filename,c=e.date,i=e.desc,s=e.ftype;return"audio"!==s?Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("div",{className:"card__mainContent",children:"image"===s?Object(a.jsx)("img",{src:"https://ipfs.infura.io/ipfs/"+n,alt:""},t):"video"===s?Object(a.jsx)("video",{preload:"true",controls:!0,children:Object(a.jsx)("source",{src:"https://ipfs.infura.io/ipfs/"+n})},t):"document"===s?Object(a.jsx)("embed",{src:"https://ipfs.infura.io/ipfs/"+n,width:"100px",height:"200px"},t):null}),Object(a.jsxs)("div",{className:"content",children:[Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)("h4",{children:r}),Object(a.jsx)("span",{className:"meta",children:c})]}),Object(a.jsxs)("div",{className:"description",children:[Object(a.jsx)("p",{children:i})," ",Object(a.jsx)("a",{target:"_blank",href:"https://ipfs.infura.io/ipfs/".concat(n),children:"View"})]})]})]},t):null}}},[[558,1,2]]]);
//# sourceMappingURL=main.22e23312.chunk.js.map