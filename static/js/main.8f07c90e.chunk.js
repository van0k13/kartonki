(this.webpackJsonpkartonki=this.webpackJsonpkartonki||[]).push([[0],{13:function(e,t,n){e.exports={uniCardsDeckWrapper:"uniCardsDeck_uniCardsDeckWrapper__3s82f",mainListWrapper:"uniCardsDeck_mainListWrapper__9Pt5w",mainList:"uniCardsDeck_mainList__1uF9i",buttonsInTheList:"uniCardsDeck_buttonsInTheList__--3H8",loading:"uniCardsDeck_loading__1fvb3"}},15:function(e,t,n){e.exports={uniCardsWrapper:"uniCards_uniCardsWrapper__2U9Xb",mainListWrapper:"uniCards_mainListWrapper__11Wk1",mainList:"uniCards_mainList__2BJJo",buttonsInTheList:"uniCards_buttonsInTheList__1seOh"}},24:function(e,t,n){e.exports={App:"App_App__LKvuZ"}},41:function(e,t,n){},42:function(e,t,n){e.exports={inputWrapper:"Input_inputWrapper__2iRGF"}},43:function(e,t,n){e.exports={buttonWrapper:"Button_buttonWrapper__11CDY"}},44:function(e,t,n){e.exports={loadingProgress:"Loading_loadingProgress__25Q2Y"}},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){e.exports={headerWrapper:"header_headerWrapper__1bHj-"}},52:function(e,t,n){e.exports=n(81)},57:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(20),s=n.n(c),u=(n(57),n(24)),o=n.n(u),i=n(4),l=n(17),d=n(1),p=n.n(d),m=n(5),f=n(6),E="registr_reducer/REGISTRATE_ERROR",v="auth_reducer/LOGIN_ERROR",b="auth_reducer/LOGIN_SUCCESS",g="auth_reducer/IS_LOADING",h="auth_reducer/SET_TOKEN",k="cards_reducer/EDIT_CARD",w="cards_reducer/DELETE_CARD",O="cards_reducer/CREATE_CARD",S="cardsDeck_reducer/GET_DECKS",j="cardsDeck_reducer/CREATE_DECK",_=n(39),C=n.n(_).a.create({baseURL:"https://cards-nya-back.herokuapp.com/1.0/"}),P={loginizationAPI:function(){var e=Object(m.a)(p.a.mark((function e(t,n,a){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.post("/auth/login",{email:t,password:n,rememberMe:a});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),registrationAPI:function(){var e=Object(m.a)(p.a.mark((function e(t,n){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.post("/auth/register",{email:t,password:n});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),passwordRecoverAPI:function(){var e=Object(m.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.post("/auth/forgot",{email:t,html1:"<a href='https://van0k13.github.io/kartonki/#/recover-password",html2:"'>reset-password-link</a>"});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setNewPasswordAPI:function(){var e=Object(m.a)(p.a.mark((function e(t,n){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.post("/auth/set-new-password",{password:t,resetPasswordToken:n});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},N={getCardsDecks:function(){var e=Object(m.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.get("/cards/pack?token=".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),addNewCardsDeck:function(){var e=Object(m.a)(p.a.mark((function e(t,n){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.post("/cards/pack",{cardsPack:t,token:n});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),updateCardsDeck:function(){var e=Object(m.a)(p.a.mark((function e(t,n){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.put("/cards/pack",{cardsPack:t,token:n});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),deleteCardsDeck:function(){var e=Object(m.a)(p.a.mark((function e(t,n){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.delete("/cards/pack?token=".concat(t,"&id=").concat(n));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},R={id:"",authSuccess:!1,myName:"",errorMessage:"",token:"",isLoading:!1},D=function(e){return{type:g,value:e}},y=function(e){return{type:h,token:e}},x=function(e){return{type:v,errorMessage:e}},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(f.a)({},e,{authSuccess:t.loginSuccess,myName:t.myName,token:t.token,id:t.id});case v:return Object(f.a)({},e,{errorMessage:t.errorMessage});case g:return Object(f.a)({},e,{isLoading:t.value});case h:return Object(f.a)({},e,{token:t.token});default:return e}},W=n(40),T={success:!1,message:""},A=function(e,t){return function(){var n=Object(m.a)(p.a.mark((function n(a){var r;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a(D(!0)),n.next=4,P.setNewPasswordAPI(e,t);case 4:(r=n.sent).error?a(M(r.error)):a(I(r.success)),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),a(M(n.t0.response.data.error));case 11:a(D(!1));case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},I=function(e){return{type:"NEW_PASSWORD_SUCCESS",recoverSuccess:e}},M=function(e){return{type:"NEW_PASSWORD_ERROR",errorMessage:e}},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_PASSWORD_SUCCESS":return Object(f.a)({},e,{success:t.recoverSuccess,message:"Successful!"});case"NEW_PASSWORD_ERROR":return Object(f.a)({},e,{message:t.errorMessage});default:return e}},U={},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FIRST_ACTION":case"SECOND_ACTION":default:return e}},B={success:!1,message:""},q=function(e){return{type:"PASSWORD_RECOVER_SUCCESS",recoverSuccess:e}},z=function(e){return{type:"PASSWORD_RECOVER_ERROR",errorMessage:e}},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PASSWORD_RECOVER_SUCCESS":return Object(f.a)({},e,{success:t.recoverSuccess,message:"\u0423\u0441\u043f\u0435\u0448\u043d\u043e! \u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0441\u0432\u043e\u0439 email."});case"PASSWORD_RECOVER_ERROR":return Object(f.a)({},e,{message:t.errorMessage});default:return e}},V={message:"",registeredSuccess:!1},J=function(e){return{type:E,errorMessage:e}},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"registr_reducer/REGISTRATE_SUCCESS":return Object(f.a)({},e,{message:"successich",registeredSuccess:t.registeredSuccess});case E:return Object(f.a)({},e,{message:t.errorMessage});default:return e}},H=[{id:"1",name:"card 1",score:0,question:"question 1",answer:"answer"},{id:"2",name:"card 2",score:0,question:"question 2",answer:"answer"},{id:"3",name:"card 3",score:0,question:"question 3",answer:"answer"}],Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(f.a)({},e,{item:t.item});case w:case O:return Object(f.a)({},e);default:return e}},X=n(51),Z={decks:[]},$=function(e){return{type:S,decks:e}},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(f.a)({},e,{decks:t.decks});case j:return Object(f.a)({},e,{decks:[t.cardsDeck].concat(Object(X.a)(e.decks))});case"cardsDeck_reducer/DELETE_DECK":return Object(f.a)({},e);default:return e}},te=Object(l.c)({auth:L,newPass:F,profile:G,recoverPass:K,registr:Y,cards:Q,decks:ee}),ne=Object(l.d)(te,Object(l.a)(W.a)),ae=n(7),re=n(14),ce=n(3),se=n(41),ue=n.n(se),oe=n(42),ie=n.n(oe),le=function(e){var t=e.inputPlaceholder,n=e.value,a=e.checked,c=e.inputType,s=e.inputOnChange,u=e.inputOnChangeChecked;return r.a.createElement("div",{className:ie.a.inputWrapper},r.a.createElement("input",{onChange:function(e){s?s(e.currentTarget.value):u&&u(e.currentTarget.checked)},placeholder:t,value:n,checked:a,type:c}))},de=n(43),pe=n.n(de),me=function(e){var t=e.buttonOnClick,n=e.buttonName,a=e.buttonOnClickBoolean,c=e.booleanValue;return r.a.createElement("div",{className:pe.a.buttonWrapper},r.a.createElement("button",{onClick:function(){t?t():a&&a(c)}},n||"submit"))},fe=n(44),Ee=n.n(fe),ve=function(){var e=Object(a.useState)("."),t=Object(ce.a)(e,2),n=t[0],c=t[1],s=Object(i.c)((function(e){return e.auth.isLoading}));return r.a.createElement("div",null,r.a.createElement("span",{className:Ee.a.loadingProgress},s&&"LOADING"+(setTimeout((function(){n.length<5?c(n+"."):c(".")}),1e3),n)))},be=function(e){var t=e.login,n=e.password,a=e.setPassword,c=e.setLogin,s=e.setRememberMe,u=e.signIn,o=e.rememberMe,i=e.loginError,l=e.isLoading;return r.a.createElement("div",{className:ue.a.loginizationWrapper},r.a.createElement("h2",null,"Loginization Page"),r.a.createElement("div",null,r.a.createElement(le,{inputOnChange:c,inputType:"text",value:t,inputPlaceholder:"login or email"})),r.a.createElement("div",null,r.a.createElement(le,{inputType:"password",value:n,inputOnChange:a,inputPlaceholder:"your password"})),r.a.createElement("div",null,r.a.createElement(le,{inputType:"checkbox",checked:o,inputOnChangeChecked:s})),r.a.createElement("div",null,r.a.createElement(me,{buttonName:"Sign In",buttonOnClick:u})),l&&r.a.createElement(ve,null),i?r.a.createElement("span",null,"loginError"):null)},ge=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.auth})),n=t.authSuccess,c=t.errorMessage,s=t.isLoading,u=Object(a.useState)(""),o=Object(ce.a)(u,2),l=o[0],d=o[1],f=Object(a.useState)(""),E=Object(ce.a)(f,2),v=E[0],g=E[1],h=Object(a.useState)(!1),k=Object(ce.a)(h,2),w=k[0],O=k[1];return r.a.createElement(r.a.Fragment,null,n?r.a.createElement(re.a,{to:Qe}):r.a.createElement(be,{setLogin:d,setPassword:g,setRememberMe:O,loginError:c,login:l,password:v,rememberMe:w,signIn:function(){e(function(e,t,n){return function(){var a=Object(m.a)(p.a.mark((function a(r){var c;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,r(D(!0)),a.next=4,P.loginizationAPI(e,t,n);case 4:(c=a.sent).error?r(x(c.error)):r((s=c.success,u=c.name,o=c.token,i=c._id,{type:b,loginSuccess:s,myName:u,token:o,id:i})),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),r(x(a.t0.response.data.error));case 11:r(D(!1));case 12:case"end":return a.stop()}var s,u,o,i}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()}(l,v,w))},isLoading:s}))},he=function(){return r.a.createElement(ge,null)},ke=n(46),we=n.n(ke),Oe=function(){return r.a.createElement("div",{className:we.a.profileWrappe},r.a.createElement("h2",null,"Profile Page"))},Se=n(47),je=n.n(Se),_e=function(e){var t=e.login,n=e.password,a=e.repeatingPassword,c=e.setPassword,s=e.setLogin,u=e.setRepeatingPassword,o=e.registerMe,i=e.similar,l=e.wrongRepeatingPassword,d=e.messageFromServer,p=e.isLoading;return r.a.createElement("div",{className:je.a.registrationWrapper},r.a.createElement("h2",null,"Registration Page"),r.a.createElement("div",null,r.a.createElement(le,{inputOnChange:s,inputType:"text",value:t,inputPlaceholder:"login or email"})),r.a.createElement("div",null,r.a.createElement(le,{inputType:"password",value:n,inputOnChange:c,inputPlaceholder:"your password"})),r.a.createElement("div",null,r.a.createElement(le,{inputType:"password",value:a,inputOnChange:u,inputPlaceholder:"repeat your password"}),!i&&r.a.createElement("span",null,"password does not match!")),r.a.createElement("div",null,r.a.createElement(me,{buttonOnClick:i?o:l,buttonName:"Sign Up"}),p&&r.a.createElement(ve,null),r.a.createElement("span",null,d)))},Ce=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.registr})),n=t.registeredSuccess,c=t.message,s=Object(i.c)((function(e){return e.auth})).isLoading,u=Object(a.useState)(""),o=Object(ce.a)(u,2),l=o[0],d=o[1],f=Object(a.useState)(""),E=Object(ce.a)(f,2),v=E[0],b=E[1],g=Object(a.useState)(""),h=Object(ce.a)(g,2),k=h[0],w=h[1],O=Object(a.useState)(!1),S=Object(ce.a)(O,2),j=S[0],_=S[1];Object(a.useEffect)((function(){_(!(k!==v||!k))}),[k,v]);return r.a.createElement(r.a.Fragment,null,n?r.a.createElement(re.a,{to:He}):r.a.createElement(_e,{setLogin:d,setPassword:b,login:l,password:v,repeatingPassword:k,setRepeatingPassword:w,similar:j,registerMe:function(){e(function(e,t){return function(){var n=Object(m.a)(p.a.mark((function n(a){var r;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a(D(!0)),n.next=4,P.registrationAPI(e,t);case 4:(r=n.sent).error?a(J(r.error)):a({type:"registr_reducer/REGISTRATE_SUCCESS",registeredSuccess:r.success}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),a(J(n.t0.response.data.error));case 11:a(D(!1));case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()}(l,v))},messageFromServer:c,wrongRepeatingPassword:function(){e(J("wrong credentials"))},isLoading:s}))},Pe=function(){return r.a.createElement(Ce,null)},Ne=n(48),Re=n.n(Ne),De=function(e){var t=e.newPassword,n=e.isLoading,a=e.setNewPassword,c=e.newPasswordRepeat,s=e.setNewPasswordRepeat,u=e.differentPassword,o=e.getDataFromServer,i=e.responseStatusMessage;return r.a.createElement("div",{className:Re.a.newPasswordWrapper},r.a.createElement("h2",null,"New Password Page"),r.a.createElement("div",null,r.a.createElement(le,{inputType:"password",value:t,inputOnChange:a,inputPlaceholder:"New password"})),r.a.createElement("div",null,r.a.createElement(le,{inputType:"password",value:c,inputOnChange:s,inputPlaceholder:"Repeat new password"})),r.a.createElement("div",null,r.a.createElement("span",null,u),r.a.createElement(me,{buttonName:"set new password",buttonOnClick:o}),n&&r.a.createElement(ve,null),r.a.createElement("span",null,i)))},ye=Object(re.g)((function(e){var t=Object(i.b)(),n=Object(a.useState)(!1),c=Object(ce.a)(n,2),s=c[0],u=c[1],o=Object(a.useState)(""),l=Object(ce.a)(o,2),d=l[0],f=l[1],E=Object(a.useState)(""),v=Object(ce.a)(E,2),b=v[0],g=v[1],h=Object(a.useState)(""),k=Object(ce.a)(h,2),w=k[0],O=k[1],S=Object(i.c)((function(e){return e.newPass.message})),j=Object(i.c)((function(e){return e.auth.isLoading}));Object(a.useEffect)((function(){d===b&&b?(u(!0),O("")):(u(!1),O("Enter similar pass"))}),[d,b]);var _=e.match.params.token,C=function(){var e=Object(m.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s&&t(A(d,_));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(De,{newPassword:d,setNewPassword:f,newPasswordRepeat:b,setNewPasswordRepeat:g,responseStatusMessage:S,getDataFromServer:C,similar:s,differentPassword:w,isLoading:j})})),xe=function(){return r.a.createElement(ye,null)},Le=n(49),We=n.n(Le),Te=function(e){var t=e.putUserEmail,n=e.userEmail,a=e.responseStatusMessage,c=e.getDataFromServer,s=e.isLoading;return r.a.createElement("div",{className:We.a.pswdRecoverWrapper},r.a.createElement("h2",null,"Password Recovering Page"),r.a.createElement("div",null,r.a.createElement(le,{inputType:"email",value:n,inputOnChange:t,inputPlaceholder:"email"}),r.a.createElement("span",null," ",a," ")),r.a.createElement("div",null,r.a.createElement(me,{buttonName:"Recover",buttonOnClick:c})),s&&r.a.createElement(ve,null))},Ae=function(){var e=Object(a.useState)(""),t=Object(ce.a)(e,2),n=t[0],c=t[1],s=Object(i.c)((function(e){return e.recoverPass})),u=s.success,o=s.message,l=Object(i.c)((function(e){return e.auth.isLoading})),d=Object(i.b)();return r.a.createElement(Te,{userEmail:n,putUserEmail:c,responseStatus:u,getDataFromServer:function(){var e;d((e=n,function(){var t=Object(m.a)(p.a.mark((function t(n){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(D(!0)),t.next=4,P.passwordRecoverAPI(e);case 4:(a=t.sent).error?n(z(a.error)):n(q(a.success)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),n(z(t.t0.response.data.error));case 11:n(D(!1));case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()))},responseStatusMessage:o,isLoading:l})},Ie=function(){return r.a.createElement(Ae,null)},Me=n(15),Fe=n.n(Me),Ue=function(){return r.a.createElement("div",{className:Fe.a.uniCardsWrapper},r.a.createElement("h2",null,"UniCards"),r.a.createElement(le,{inputPlaceholder:"item name"}),r.a.createElement(me,{buttonName:"search"}),r.a.createElement("div",{className:Fe.a.mainListWrapper},r.a.createElement(me,{buttonName:"add new Item"}),r.a.createElement("div",{className:Fe.a.mainList},r.a.createElement("div",{className:Fe.a.itemName},"Question"),r.a.createElement("div",{className:Fe.a.itemScore},"Item score"),r.a.createElement("div",{className:Fe.a.buttonsInTheList},r.a.createElement(me,{buttonName:"edit"}),r.a.createElement(me,{buttonName:"delete"})))))},Ge=function(){return r.a.createElement(Ue,null)},Be=function(){return r.a.createElement(Ge,null)},qe=n(13),ze=n.n(qe),Ke=function(e){var t=e.id,n=e.name,c=e.grade,s=e.deleteDeck,u=Object(a.useState)(!1),o=Object(ce.a)(u,2),i=o[0],l=o[1];return r.a.createElement("div",{className:ze.a.mainList},i?r.a.createElement(r.a.Fragment,null," ",r.a.createElement(le,{value:n})," ",r.a.createElement(le,{value:c})," "):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:ze.a.itemName},"Name: ",n," "),r.a.createElement("div",{className:ze.a.itemScore},"Grade:",c," ")),r.a.createElement("div",{className:ze.a.buttonsInTheList},r.a.createElement(me,{buttonName:"edit",buttonOnClickBoolean:function(){return l(!i)}}),r.a.createElement(me,{buttonName:"delete",buttonOnClick:function(){return s(t)}})))},Ve=function(e){var t=e.decks,n=e.newDeckinputField,a=e.deleteDeck,c=e.createNewDeck,s=e.setNewDeckinputField,u=e.setDeckName,o=e.deckName,i=t.map((function(e){return r.a.createElement(Ke,{name:e.name,key:e._id,id:e._id,grade:e.grade,deleteDeck:a})}));return r.a.createElement("div",{className:ze.a.uniCardsWrapper},r.a.createElement("h2",null,"UniCardsDeck"),r.a.createElement(le,{inputPlaceholder:"item name"}),r.a.createElement(me,{buttonName:"search"}),r.a.createElement("div",{className:ze.a.mainListWrapper},r.a.createElement(me,{buttonOnClickBoolean:function(){return s(!n)},buttonName:"Add new Deck"}),r.a.createElement("div",{className:ze.a.loading},r.a.createElement(ve,null)),n&&r.a.createElement(r.a.Fragment,null,r.a.createElement(le,{inputPlaceholder:"Enter your Deck's name",inputType:"text",value:o,inputOnChange:u}),r.a.createElement(me,{buttonName:"Add",buttonOnClick:c})),i))},Je=function(){var e=Object(i.b)(),t=Object(a.useState)(!1),n=Object(ce.a)(t,2),c=n[0],s=n[1],u=Object(a.useState)(""),o=Object(ce.a)(u,2),l=o[0],d=o[1];Object(a.useEffect)((function(){e(function(e){return function(){var t=Object(m.a)(p.a.mark((function t(n){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(D(!0)),t.next=4,N.getCardsDecks(e);case 4:a=t.sent,n($(a.cardPacks)),n(y(a.token)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),n(D(!1));case 12:n(D(!1));case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}(f))}),[]);var f=Object(i.c)((function(e){return e.auth.token})),E=Object(i.c)((function(e){return e.decks.decks})),v=Object(i.c)((function(e){return e.auth.id}));return r.a.createElement(Ve,{createNewDeck:function(){e(function(e,t){return function(){var n=Object(m.a)(p.a.mark((function n(a){var r;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a(D(!0)),n.next=4,N.addNewCardsDeck(e,t);case 4:!0===(r=n.sent).success&&a((c=r.newCardsPack,{type:j,cardsDeck:c})),a(y(r.token)),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),a(D(!1));case 12:a(D(!1));case 13:case"end":return n.stop()}var c}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()}({user_id:v,name:l},f)),d("")},decks:E,newDeckinputField:c,setNewDeckinputField:s,deckName:l,setDeckName:d,deleteDeck:function(t){e(function(e,t){return function(){var n=Object(m.a)(p.a.mark((function n(a){var r,c;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a(D(!0)),n.next=4,N.deleteCardsDeck(e,t);case 4:if(r=n.sent,a(y(r.token)),!r.success){n.next=12;break}return n.next=9,N.getCardsDecks(r.token);case 9:c=n.sent,a($(c.cardPacks)),a(y(c.token));case 12:n.next=17;break;case 14:n.prev=14,n.t0=n.catch(0),a(D(!1));case 17:a(D(!1));case 18:case"end":return n.stop()}}),n,null,[[0,14]])})));return function(e){return n.apply(this,arguments)}}()}(f,t))}})},Ye=function(){return r.a.createElement(Je,null)},He="/auth",Qe="/profile",Xe=function(){return r.a.createElement(re.d,null,r.a.createElement(re.b,{path:He,render:function(){return r.a.createElement(he,null)}}),r.a.createElement(re.b,{path:"/new-password:token",render:function(){return r.a.createElement(xe,null)}}),r.a.createElement(re.b,{path:Qe,render:function(){return r.a.createElement(Oe,null)}}),r.a.createElement(re.b,{path:"/recover-password",render:function(){return r.a.createElement(Ie,null)}}),r.a.createElement(re.b,{path:"/registration",render:function(){return r.a.createElement(Pe,null)}}),r.a.createElement(re.b,{path:"/cards",render:function(){return r.a.createElement(Be,null)}}),r.a.createElement(re.b,{path:"/cards-deck",render:function(){return r.a.createElement(Ye,null)}}),r.a.createElement(re.b,{exact:!0,path:"/",render:function(){return r.a.createElement(re.a,{to:He})}}),r.a.createElement(re.b,{render:function(){return r.a.createElement("div",null,"404 BAD GATEWAY")}}))},Ze=n(50),$e=n.n(Ze),et=function(e){var t=e.setLinks,n=e.links;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:$e.a.headerWrapper},n?r.a.createElement(r.a.Fragment,null,r.a.createElement(me,{buttonName:"hide links",buttonOnClickBoolean:function(){t(!n)}}),r.a.createElement(ae.b,{to:He},"LoginizationPage"),r.a.createElement(ae.b,{to:"/new-password:token"},"NewPasswordPage"),r.a.createElement(ae.b,{to:Qe},"ProfilePage"),r.a.createElement(ae.b,{to:"/recover-password"},"PasswordRecoveringPage"),r.a.createElement(ae.b,{to:"/registration"},"RegistrationPage"),r.a.createElement(ae.b,{to:"/cards"},"Cards"),r.a.createElement(ae.b,{to:"/cards-deck"},"Card's Deck")):r.a.createElement(me,{buttonName:"show links",buttonOnClickBoolean:function(){t(!n)}})))},tt=function(){var e=Object(a.useState)(!0),t=Object(ce.a)(e,2),n=t[0],c=t[1];return r.a.createElement(et,{setLinks:c,links:n})},nt=function(){return r.a.createElement("div",{className:o.a.App},r.a.createElement(tt,null),r.a.createElement(Xe,null))},at=function(){return r.a.createElement(ae.a,null,r.a.createElement(i.a,{store:ne},r.a.createElement(nt,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(at,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[52,1,2]]]);
//# sourceMappingURL=main.8f07c90e.chunk.js.map