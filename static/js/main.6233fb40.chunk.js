(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,n,t){},30:function(e,n,t){e.exports=t.p+"static/media/wallet.5f578ddf.svg"},44:function(e,n,t){e.exports=t(65)},49:function(e,n,t){},65:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(12),i=t.n(r),c=(t(49),t(20)),s=t.n(c),u=t(23),l=t(28),d=t(17),m=t(41),p=t(29),E=t(40),v=t(30),f=t.n(v),w=(t(26),t(81)),h=t(80),g={getAddress:function(){return new Promise(function(e){window.addEventListener("ICONEX_RELAY_RESPONSE",function n(t){var a=t.detail,o=a.type,r=a.payload;"RESPONSE_ADDRESS"===o&&e(r),window.removeEventListener("ICONEX_RELAY_RESPONSE",n)}),window.dispatchEvent(new CustomEvent("ICONEX_RELAY_REQUEST",{detail:{type:"REQUEST_ADDRESS"}}))})},sendTransaction:function(e){return new Promise(function(n){window.addEventListener("ICONEX_RELAY_RESPONSE",function e(t){var a=t.detail,o=a.type,r=a.payload;"RESPONSE_JSON-RPC"===o&&n(r.result),window.removeEventListener("ICONEX_RELAY_RESPONSE",e)}),window.dispatchEvent(new CustomEvent("ICONEX_RELAY_REQUEST",{detail:{type:"REQUEST_JSON-RPC",payload:e}}))})}},A=t(16),S=t.n(A),C=new A.HttpProvider(window.PROVIDER_URL),N=new S.a(C),y=A.IconBuilder.CallBuilder,R=A.IconBuilder.CallTransactionBuilder,O={iconService:N,callBuild:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.from,t=e.methodName,a=e.to,o=e.params,r=void 0===o?{}:o;return(new y).from(n).to(a).method(t).params(r).build()},sendTxBuild:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.from,t=e.to,a=e.methodName,o=e.params,r=void 0===o?{}:o,i=e.networkId,c=void 0===i?window.NID:i,s=e.stepLimit,u=void 0===s?"0x493e0":s,l=e.value,d=void 0===l?"0x0":l;return{jsonrpc:"2.0",method:"icx_sendTransaction",params:(new R).nid(c).from(n).to(t).stepLimit(u).value(d).timestamp("0x".concat((1e3*(new Date).getTime()).toString(16))).method(a).params(r).version("0x3").build(),id:1}}},_=function(e){function n(){var e,t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(p.a)(n)).call.apply(e,[this].concat(o)))).state={curAmount:0,login:!1,myAddress:""},t.funcLogin=function(){var e=Object(u.a)(s.a.mark(function e(n){var a,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.getAddress();case 2:return a=e.sent,console.log(a),e.next=6,O.iconService.call(O.callBuild({methodName:"get_account",params:{address:a},to:window.CONTRACT_ADDRESS})).execute();case 6:o=e.sent,console.log("funcLogin curAmount",o),t.setState({myAddress:a,login:!0,curAmount:Number(o)||1e5});case 9:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),t.funcConfirm=function(){var e=Object(u.a)(s.a.mark(function e(n){var a,o,r,i,c,u;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=O.sendTxBuild,o=t.state,r=o.curAmount,i=o.myAddress,console.log("funcConfirm",r,i),c=a({from:i,to:window.CONTRACT_ADDRESS,methodName:"set_account",params:{balance:A.IconConverter.toHex(Number(r))}}),e.next=6,g.sendTransaction(c);case 6:u=e.sent,console.log("tx",u,typeof u),u?alert("\uc794\uace0\uac00 "+Number(r)+"\uc73c\ub85c \ub4f1\ub85d\ub418\uc5c8\uc2b5\ub2c8\ub2e4."):alert("\uc794\uace0 \ub4f1\ub85d\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4. \u3160.\u3160");case 9:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),t.funcChange=function(e){var n=t.state,a=n.curAmount;n.myAddress;t.setState({curAmount:e.target.value}),console.log("funcChange","BB",e.target.value,a,"AA",t.state.curAmount)},t}return Object(E.a)(n,e),Object(d.a)(n,[{key:"render",value:function(){var e=this.state,n=(e.curAmount,e.login);e.myAddress;return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:f.a,className:"App-logo",alt:"logo"}),o.a.createElement("p",{className:"P-logo"},"How much do I have in my wallet?"),o.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},n?o.a.createElement(o.a.Fragment,null,o.a.createElement(w.a,{inputProps:{"aria-label":"Description"},style:{margin:20,color:"#BDBDBD"},name:"curAmount",value:this.state.curAmount,onChange:this.funcChange}),o.a.createElement(h.a,{variant:"contained",color:"primary",onClick:this.funcConfirm},"Confirm")):o.a.createElement(h.a,{variant:"contained",color:"primary",onClick:this.funcLogin},"Connect to My Account"))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[44,1,2]]]);
//# sourceMappingURL=main.6233fb40.chunk.js.map