(this["webpackJsonpklay-market"]=this["webpackJsonpklay-market"]||[]).push([[0],{420:function(e){e.exports=JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"tokenOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"},{"name":"tokenURI","type":"string"}],"name":"mintWithTokenURI","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"id","type":"uint256"},{"name":"uri","type":"string"}],"name":"setTokenUri","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"tokenURIs","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"owner","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"ownedTokens","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]')},431:function(e,s,t){},432:function(e,s,t){var a={"./caver-abi/src/index.js":132,"./caver-account/src/index.js":81,"./caver-contract/src/index.js":95,"./caver-core-helpers/src/index.js":41,"./caver-core-method/src/index.js":70,"./caver-core-requestmanager/caver-providers-http/src/index.js":322,"./caver-core-requestmanager/caver-providers-ipc/src/index.js":326,"./caver-core-requestmanager/caver-providers-ws/src/index.js":321,"./caver-core-requestmanager/src/index.js":319,"./caver-core-subscriptions/src/index.js":122,"./caver-core/src/index.js":57,"./caver-ipfs/src/index.js":330,"./caver-kct/src/index.js":394,"./caver-klay/caver-klay-accounts/src/index.js":397,"./caver-klay/caver-klay-personal/src/index.js":400,"./caver-klay/src/index.js":401,"./caver-middleware/src/index.js":211,"./caver-net/src/index.js":253,"./caver-rpc/src/index.js":402,"./caver-rtm/src/index.js":128,"./caver-transaction/src/index.js":403,"./caver-utils/iban/src/index.js":314,"./caver-utils/promievent/src/index.js":313,"./caver-utils/src/index.js":10,"./caver-validator/src/index.js":404,"./caver-wallet/src/index.js":233};function n(e){var s=r(e);return t(s)}function r(e){if(!t.o(a,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=r,e.exports=n,n.id=432},434:function(e,s){},442:function(e,s){},444:function(e,s){},454:function(e,s){},456:function(e,s){},481:function(e,s){},487:function(e,s){},489:function(e,s){},507:function(e,s){},610:function(e,s){},616:function(e,s){},628:function(e,s){},629:function(e,s){},884:function(e){e.exports=JSON.parse("{}")},885:function(e){e.exports=JSON.parse("{}")},905:function(e,s,t){},909:function(e,s,t){},913:function(e,s,t){},914:function(e,s,t){},915:function(e,s,t){},916:function(e,s,t){},917:function(e,s,t){},918:function(e,s,t){},919:function(e,s,t){},920:function(e,s,t){},921:function(e,s,t){"use strict";t.r(s);var a=t(1),n=t.n(a),r=t(417),c=t.n(r),i=(t(431),t(46)),o=t(83),l=t(20),j=t(418),d=t(257),b=t.n(d),m=(t(884),t(420)),p=(t(885),"0x0181A30610574b14f21470BDfAdAb9d2d5ECC80B"),u={headers:[{name:"Authorization",value:"Basic S0FTS1VFWTBXWTUzSUowUEszUjUyRDZSOkNkVW5GQ2RhWUxqXzVsdVJGWXd3aGQyWTRhdUt4ZUlKWE9HOEN1aEo="},{name:"x-chain-id",value:"8217"}]},h=new b.a(new b.a.providers.HttpProvider("https://node-api.klaytnapi.com/v1/klaytn",u)),O=(new h.contract(m,p),function(e){return h.rpc.klay.getBalance(e).then((function(e){var s=h.utils.convertFromPeb(h.utils.hexToNumberString(e));return console.log("BALANCE: ".concat(s)),s}))}),x=t(91),g=t.n(x),f="https://a2a-api.klipwallet.com/v2/a2a/prepare",N="KLAY_MARKET",v=!(window.screen.width>=1200),y=function(e,s){return"QR"===e?"https://klipwallet.com/?target=/a2a?request_key=".concat(s):"kakaotalk://klipwallet/open?url=https://klipwallet.com/?target=/a2a?request_key=".concat(s)},I=(t(904),t(905),t(954)),k=t(952),T=t(933),w=t(953),C=t(934),F=t(0);function S(){var e=Object(a.useState)("0"),s=Object(l.a)(e,2),t=s[0],n=s[1],r=Object(a.useState)("0x0000000000000000"),c=Object(l.a)(r,2),d=c[0],b=c[1],m=Object(a.useState)(""),p=Object(l.a)(m,2),u=p[0],h=p[1],x=Object(a.useState)("DEFAULT"),S=Object(l.a)(x,2),L=S[0],_=S[1],E=Object(a.useState)(!1),P=Object(l.a)(E,2),R=P[0],U=P[1],A=Object(a.useState)(""),B=Object(l.a)(A,2),D=B[0],W=B[1],H=Object(a.useState)({title:"Modal",buttonName:"close",onClick:function(){}}),K=Object(l.a)(H,2),M=K[0],J=K[1],V=function(){var e=Object(o.a)(Object(i.a)().mark((function e(s,t){var a;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("/auth/register",{walletAddress:s,username:t}).catch((function(e){e.response&&alert("server error")}));case 2:(a=e.sent)&&a.data&&a.data.username&&(alert(a.data.username),h(a.data.username),U(!1));case 4:case"end":return e.stop()}}),e)})));return function(s,t){return e.apply(this,arguments)}}(),q=function(){!function(e,s){g.a.post(f,{bapp:{name:N},type:"auth"}).then((function(t){var a=t.data.request_key;v?window.location.href=y("android",a):e(y("QR",a));var n=setInterval((function(){g.a.get("https://a2a-api.klipwallet.com/v2/a2a/result?request_key=".concat(a)).then((function(t){t.data.result&&(console.log("[result] ".concat(JSON.stringify(t.data.result))),s(t.data.result.klaytn_address),clearInterval(n),e("DEFAULT"))}))}),1e3)}))}(_,function(){var e=Object(o.a)(Object(i.a)().mark((function e(s){var t,a;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("/auth/login",{walletAddress:s}).catch((function(e){e.response&&404===e.response.status?alert("\ud68c\uc6d0\uac00\uc785\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."):e.response&&alert("server error")}));case 2:return t=e.sent,b(s),e.next=6,O(s);case 6:a=e.sent,n(a),t&&t.data&&t.data.username?(h(t.data.username),U(!1)):J({title:"Register",buttonName:"sign up",onClick:function(e,s){V(e,s)}});case 9:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}()),J({title:"Login",buttonName:"close",onClick:function(){U(!1)}})};return Object(a.useEffect)((function(){q(),U(!0)}),[]),Object(F.jsx)("div",{className:"App",children:Object(F.jsxs)("div",{style:{backgroundColor:"black",padding:10},children:[Object(F.jsxs)("div",{style:{fontSize:30,fontWeight:"bold",paddingLeft:5,marginTop:10},children:[u," \uc9c0\uac11"]}),Object(F.jsx)("br",{}),Object(F.jsx)(I.a,{variant:"balance",style:{backgroundColor:"#f40075",fontSize:25},onClick:q,children:t}),Object(F.jsxs)(k.a,{centered:!0,size:"sm",show:R,onHide:function(){U(!1)},children:[Object(F.jsx)(k.a.Header,{style:{display:"flex",justifyContent:"center",alignItems:"center",border:0,opacity:.8},children:Object(F.jsx)(k.a.Title,{children:M.title})}),Object(F.jsxs)(k.a.Body,{style:{border:0,opacity:.8},children:[Object(F.jsx)(T.a,{style:{backgroundColor:"white",width:200,height:200,padding:10},children:Object(F.jsx)(j.a,{value:L,size:180,style:{margin:"auto"}})}),"Register"===M.title?Object(F.jsx)(w.a,{style:{padding:20},children:Object(F.jsxs)(w.a.Group,{className:"mb-1",controlId:"exampleForm.ControlInput1",children:[Object(F.jsx)(w.a.Label,{children:"Wallet address"}),Object(F.jsx)(w.a.Control,{type:"wallet",placeholder:d,autoFocus:!0,disabled:!0}),Object(F.jsx)(w.a.Label,{children:"User name"}),Object(F.jsx)(w.a.Control,{type:"name",placeholder:"",onChange:function(e){return W(e.target.value)},autoFocus:!0})]})}):null]}),Object(F.jsx)(k.a.Footer,{style:{display:"flex",justifyContent:"center",alignItems:"center",border:0,opacity:.8},children:Object(F.jsx)(C.a,{variant:"primary",onClick:function(){M.onClick(d,D),U(!1)},style:{backgroundColor:"#810034",borderColor:"#810034"},children:M.buttonName})})]})]})})}t(909);var L=t(935),_=t(936),E=t(937),P=t(938);function R(){return Object(F.jsxs)("div",{className:"topbarContainer",children:[Object(F.jsx)("div",{className:"topbarLeft",children:Object(F.jsx)("span",{className:"logo",children:"Lamasocial"})}),Object(F.jsx)("div",{className:"topbarCenter",children:Object(F.jsxs)("div",{className:"searchbar",children:[Object(F.jsx)(L.a,{className:"searchIcon"}),Object(F.jsx)("input",{placeholder:"Search for friend, post or video",className:"searchInput"})]})}),Object(F.jsxs)("div",{className:"topbarRight",children:[Object(F.jsxs)("div",{className:"topbarLinks",children:[Object(F.jsx)("span",{className:"topbarLink",children:"Homepage"}),Object(F.jsx)("span",{className:"topbarLink",children:"Timeline"})]}),Object(F.jsxs)("div",{className:"topbarIcons",children:[Object(F.jsxs)("div",{className:"topbarIconItem",children:[Object(F.jsx)(_.a,{}),Object(F.jsx)("span",{className:"topbarIconBadge",children:"1"})]}),Object(F.jsxs)("div",{className:"topbarIconItem",children:[Object(F.jsx)(E.a,{}),Object(F.jsx)("span",{className:"topbarIconBadge",children:"2"})]}),Object(F.jsxs)("div",{className:"topbarIconItem",children:[Object(F.jsx)(P.a,{}),Object(F.jsx)("span",{className:"topbarIconBadge",children:"1"})]})]}),Object(F.jsx)("img",{src:"/assets/person/1.jpeg",alt:"",className:"topbarImg"})]})]})}t(913);var U=t(939),A=t(940),B=t(941),D=t(942),W=t(943),H=t(944),K=t(945),M=t(946),J=[{id:1,profilePicture:"assets/person/1.jpeg",username:"Safak Kocaoglu"},{id:2,profilePicture:"assets/person/2.jpeg",username:"Janell Shrum"},{id:3,profilePicture:"assets/person/3.jpeg",username:"Alex Durden"},{id:4,profilePicture:"assets/person/4.jpeg",username:"Dora Hawks"},{id:5,profilePicture:"assets/person/5.jpeg",username:"Thomas Holden"},{id:6,profilePicture:"assets/person/6.jpeg",username:"Shirley Beauchamp"},{id:7,profilePicture:"assets/person/7.jpeg",username:"Travis Bennett"},{id:8,profilePicture:"assets/person/8.jpeg",username:"Kristen Thomas"},{id:9,profilePicture:"assets/person/9.jpeg",username:"Gary Duty"},{id:10,profilePicture:"assets/person/10.jpeg",username:"Safak Kocaoglu"}],V=[{id:1,desc:"Love For All, Hatred For None.",photo:"assets/post/1.jpeg",date:"5 mins ago",userId:1,like:32,comment:9},{id:2,photo:"assets/post/2.jpeg",date:"15 mins ago",userId:2,like:2,comment:1},{id:3,desc:"Every moment is a fresh beginning.",photo:"assets/post/3.jpeg",date:"1 hour ago",userId:3,like:61,comment:2},{id:4,photo:"assets/post/4.jpeg",date:"4 hours ago",userId:4,like:7,comment:3},{id:5,photo:"assets/post/5.jpeg",date:"5 hours ago",userId:5,like:23,comment:5},{id:6,photo:"assets/post/6.jpeg",date:"1 day ago",userId:6,like:44,comment:6},{id:7,desc:"Never regret anything that made you smile.",photo:"assets/post/7.jpeg",date:"2 days ago",userId:7,like:52,comment:3},{id:8,photo:"assets/post/8.jpeg",date:"3 days ago",userId:8,like:15,comment:1},{id:9,desc:"Change the world by being yourself.",photo:"assets/post/9.jpeg",date:"5 days ago",userId:9,like:11,comment:2},{id:10,photo:"assets/post/10.jpeg",date:"1 week ago",userId:10,like:104,comment:12}];t(914);function q(e){var s=e.user,t=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_PUBLIC_FOLDER;return Object(F.jsxs)("li",{className:"sidebarFriend",children:[Object(F.jsx)("img",{className:"sidebarFriendImg",src:t+s.profilePicture,alt:""}),Object(F.jsx)("span",{className:"sidebarFriendName",children:s.username})]})}function z(){return Object(F.jsx)("div",{className:"sidebar",children:Object(F.jsxs)("div",{className:"sidebarWrapper",children:[Object(F.jsxs)("ul",{className:"sidebarList",children:[Object(F.jsxs)("li",{className:"sidebarListItem",children:[Object(F.jsx)(U.a,{className:"sidebarIcon"}),Object(F.jsx)("span",{className:"sidebarListItemText",children:"Feed"})]}),Object(F.jsxs)("li",{className:"sidebarListItem",children:[Object(F.jsx)(E.a,{className:"sidebarIcon"}),Object(F.jsx)("span",{className:"sidebarListItemText",children:"Chats"})]}),Object(F.jsxs)("li",{className:"sidebarListItem",children:[Object(F.jsx)(A.a,{className:"sidebarIcon"}),Object(F.jsx)("span",{className:"sidebarListItemText",children:"Videos"})]}),Object(F.jsxs)("li",{className:"sidebarListItem",children:[Object(F.jsx)(B.a,{className:"sidebarIcon"}),Object(F.jsx)("span",{className:"sidebarListItemText",children:"Groups"})]}),Object(F.jsxs)("li",{className:"sidebarListItem",children:[Object(F.jsx)(D.a,{className:"sidebarIcon"}),Object(F.jsx)("span",{className:"sidebarListItemText",children:"Bookmarks"})]}),Object(F.jsxs)("li",{className:"sidebarListItem",children:[Object(F.jsx)(W.a,{className:"sidebarIcon"}),Object(F.jsx)("span",{className:"sidebarListItemText",children:"Questions"})]}),Object(F.jsxs)("li",{className:"sidebarListItem",children:[Object(F.jsx)(H.a,{className:"sidebarIcon"}),Object(F.jsx)("span",{className:"sidebarListItemText",children:"Jobs"})]}),Object(F.jsxs)("li",{className:"sidebarListItem",children:[Object(F.jsx)(K.a,{className:"sidebarIcon"}),Object(F.jsx)("span",{className:"sidebarListItemText",children:"Events"})]}),Object(F.jsxs)("li",{className:"sidebarListItem",children:[Object(F.jsx)(M.a,{className:"sidebarIcon"}),Object(F.jsx)("span",{className:"sidebarListItemText",children:"Courses"})]})]}),Object(F.jsx)("button",{className:"sidebarButton",children:"Show More"}),Object(F.jsx)("hr",{className:"sidebarHr"}),Object(F.jsx)("ul",{className:"sidebarFriendList",children:J.map((function(e){return Object(F.jsx)(q,{user:e},e.id)}))})]})})}t(915);var G=t(947);function Q(e){var s=e.post,t=Object(a.useState)(s.like),n=Object(l.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(!1),o=Object(l.a)(i,2),j=o[0],d=o[1],b=(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_PUBLIC_FOLDER,function(){c(j?r-1:r+1),d(!j)});return Object(F.jsx)("div",{className:"post",children:Object(F.jsxs)("div",{className:"postWrapper",children:[Object(F.jsxs)("div",{className:"postTop",children:[Object(F.jsxs)("div",{className:"postTopLeft",children:[Object(F.jsx)("img",{className:"postProfileImg",src:J.filter((function(e){return e.id===(null===s||void 0===s?void 0:s.userId)}))[0].profilePicture,alt:""}),Object(F.jsx)("span",{className:"postUsername",children:J.filter((function(e){return e.id===(null===s||void 0===s?void 0:s.userId)}))[0].username}),Object(F.jsx)("span",{className:"postDate",children:s.date})]}),Object(F.jsx)("div",{className:"postTopRight",children:Object(F.jsx)(G.a,{})})]}),Object(F.jsxs)("div",{className:"postCenter",children:[Object(F.jsx)("span",{className:"postText",children:null===s||void 0===s?void 0:s.desc}),Object(F.jsx)("img",{className:"postImg",src:s.photo,alt:""})]}),Object(F.jsxs)("div",{className:"postBottom",children:[Object(F.jsxs)("div",{className:"postBottomLeft",children:[Object(F.jsx)("img",{className:"likeIcon",src:"assets/like.png",onClick:b,alt:""}),Object(F.jsx)("img",{className:"likeIcon",src:"assets/heart.png",onClick:b,alt:""}),Object(F.jsxs)("span",{className:"postLikeCounter",children:[r," people like it"]})]}),Object(F.jsx)("div",{className:"postBottomRight",children:Object(F.jsxs)("span",{className:"postCommentText",children:[s.comment," comments"]})})]})]})})}t(916);var X=t(948),Y=t(949),Z=t(950),$=t(951);function ee(){return Object(F.jsx)("div",{className:"share",children:Object(F.jsxs)("div",{className:"shareWrapper",children:[Object(F.jsxs)("div",{className:"shareTop",children:[Object(F.jsx)("img",{className:"shareProfileImg",src:"/assets/person/1.jpeg",alt:""}),Object(F.jsx)("input",{placeholder:"What's in your mind Safak?",className:"shareInput"})]}),Object(F.jsx)("hr",{className:"shareHr"}),Object(F.jsxs)("div",{className:"shareBottom",children:[Object(F.jsxs)("div",{className:"shareOptions",children:[Object(F.jsxs)("div",{className:"shareOption",children:[Object(F.jsx)(X.a,{htmlColor:"tomato",className:"shareIcon"}),Object(F.jsx)("span",{className:"shareOptionText",children:"Photo or Video"})]}),Object(F.jsxs)("div",{className:"shareOption",children:[Object(F.jsx)(Y.a,{htmlColor:"blue",className:"shareIcon"}),Object(F.jsx)("span",{className:"shareOptionText",children:"Tag"})]}),Object(F.jsxs)("div",{className:"shareOption",children:[Object(F.jsx)(Z.a,{htmlColor:"green",className:"shareIcon"}),Object(F.jsx)("span",{className:"shareOptionText",children:"Location"})]}),Object(F.jsxs)("div",{className:"shareOption",children:[Object(F.jsx)($.a,{htmlColor:"goldenrod",className:"shareIcon"}),Object(F.jsx)("span",{className:"shareOptionText",children:"Feelings"})]})]}),Object(F.jsx)("button",{className:"shareButton",children:"Share"})]})]})})}t(917);function se(){return Object(F.jsx)("div",{className:"feed",children:Object(F.jsxs)("div",{className:"feedWrapper",children:[Object(F.jsx)(ee,{}),V.map((function(e){return Object(F.jsx)(Q,{post:e},e.id)}))]})})}t(918),t(919);function te(e){var s=e.user;Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_PUBLIC_FOLDER;return Object(F.jsxs)("li",{className:"rightbarFriend",children:[Object(F.jsxs)("div",{className:"rightbarProfileImgContainer",children:[Object(F.jsx)("img",{className:"rightbarProfileImg",src:s.profilePicture,alt:""}),Object(F.jsx)("span",{className:"rightbarOnline"})]}),Object(F.jsx)("span",{className:"rightbarUsername",children:s.username})]})}function ae(e){var s=e.profile,t=function(){return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)("div",{className:"birthdayContainer",children:[Object(F.jsx)("img",{className:"birthdayImg",src:"assets/gift.png",alt:""}),Object(F.jsxs)("span",{className:"birthdayText",children:[Object(F.jsx)("b",{children:"Pola Foster"})," and ",Object(F.jsx)("b",{children:"3 other friends"})," have a birhday today."]})]}),Object(F.jsx)("img",{className:"rightbarAd",src:"assets/ad.png",alt:""}),Object(F.jsx)("h4",{className:"rightbarTitle",children:"Online Friends"}),Object(F.jsx)("ul",{className:"rightbarFriendList",children:J.map((function(e){return Object(F.jsx)(te,{user:e},e.id)}))})]})},a=function(){return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("h4",{className:"rightbarTitle",children:"User information"}),Object(F.jsxs)("div",{className:"rightbarInfo",children:[Object(F.jsxs)("div",{className:"rightbarInfoItem",children:[Object(F.jsx)("span",{className:"rightbarInfoKey",children:"City:"}),Object(F.jsx)("span",{className:"rightbarInfoValue",children:"New York"})]}),Object(F.jsxs)("div",{className:"rightbarInfoItem",children:[Object(F.jsx)("span",{className:"rightbarInfoKey",children:"From:"}),Object(F.jsx)("span",{className:"rightbarInfoValue",children:"Madrid"})]}),Object(F.jsxs)("div",{className:"rightbarInfoItem",children:[Object(F.jsx)("span",{className:"rightbarInfoKey",children:"Relationship:"}),Object(F.jsx)("span",{className:"rightbarInfoValue",children:"Single"})]})]}),Object(F.jsx)("h4",{className:"rightbarTitle",children:"User friends"}),Object(F.jsxs)("div",{className:"rightbarFollowings",children:[Object(F.jsxs)("div",{className:"rightbarFollowing",children:[Object(F.jsx)("img",{src:"assets/person/1.jpeg",alt:"",className:"rightbarFollowingImg"}),Object(F.jsx)("span",{className:"rightbarFollowingName",children:"John Carter"})]}),Object(F.jsxs)("div",{className:"rightbarFollowing",children:[Object(F.jsx)("img",{src:"assets/person/2.jpeg",alt:"",className:"rightbarFollowingImg"}),Object(F.jsx)("span",{className:"rightbarFollowingName",children:"John Carter"})]}),Object(F.jsxs)("div",{className:"rightbarFollowing",children:[Object(F.jsx)("img",{src:"assets/person/3.jpeg",alt:"",className:"rightbarFollowingImg"}),Object(F.jsx)("span",{className:"rightbarFollowingName",children:"John Carter"})]}),Object(F.jsxs)("div",{className:"rightbarFollowing",children:[Object(F.jsx)("img",{src:"assets/person/4.jpeg",alt:"",className:"rightbarFollowingImg"}),Object(F.jsx)("span",{className:"rightbarFollowingName",children:"John Carter"})]}),Object(F.jsxs)("div",{className:"rightbarFollowing",children:[Object(F.jsx)("img",{src:"assets/person/5.jpeg",alt:"",className:"rightbarFollowingImg"}),Object(F.jsx)("span",{className:"rightbarFollowingName",children:"John Carter"})]}),Object(F.jsxs)("div",{className:"rightbarFollowing",children:[Object(F.jsx)("img",{src:"assets/person/6.jpeg",alt:"",className:"rightbarFollowingImg"}),Object(F.jsx)("span",{className:"rightbarFollowingName",children:"John Carter"})]})]})]})};return Object(F.jsx)("div",{className:"rightbar",children:Object(F.jsx)("div",{className:"rightbarWrapper",children:s?Object(F.jsx)(a,{}):Object(F.jsx)(t,{})})})}t(920);function ne(){return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(R,{}),Object(F.jsxs)("div",{className:"homeContainer",children:[Object(F.jsx)(z,{}),Object(F.jsx)(se,{}),Object(F.jsx)(ae,{})]})]})}var re=t(423),ce=t(22);var ie=function(){return Object(F.jsx)(re.a,{children:Object(F.jsxs)(ce.d,{children:[Object(F.jsx)(ce.b,{path:"/",element:Object(F.jsx)(ce.a,{to:"/market"})}),Object(F.jsx)(ce.b,{path:"/home",element:Object(F.jsx)(ne,{})}),Object(F.jsx)(ce.b,{path:"/market",element:Object(F.jsx)(S,{})})]})})},oe=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,955)).then((function(s){var t=s.getCLS,a=s.getFID,n=s.getFCP,r=s.getLCP,c=s.getTTFB;t(e),a(e),n(e),r(e),c(e)}))};c.a.createRoot(document.getElementById("root")).render(Object(F.jsx)(n.a.StrictMode,{children:Object(F.jsx)(ie,{})})),oe()}},[[921,1,2]]]);
//# sourceMappingURL=main.f27c53af.chunk.js.map