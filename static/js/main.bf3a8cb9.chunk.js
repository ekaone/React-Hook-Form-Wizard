(this["webpackJsonprhf-wizard-form"]=this["webpackJsonprhf-wizard-form"]||[]).push([[0],{24:function(e,t,a){e.exports=a(37)},29:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(14),o=a.n(r),l=(a(29),a(10)),u=a(2),s=a(4),i=a(11),m=a(16),h=Object(m.b)({name:"root",initialState:{base:"small",crust:"classic_thin",sauce:"no_sauce",cheese:"no_cheese"},reducers:{chooseBase:function(e,t){e.base=t.payload},chooseCrust:function(e,t){e.crust=t.payload},chooseSauce:function(e,t){e.sauc=t.payload},chooseCheese:function(e,t){e.cheese=t.payload}}}),b=h.reducer,p=h.actions,E=p.chooseBase,f=p.chooseCheese,d=p.chooseCrust,v=p.chooseSauce,O=function(){var e=Object(s.b)(),t=Object(u.e)(),a=Object(s.c)((function(e){return e.base})),n=Object(i.a)({defaultValues:{base:a}}),r=n.register,o=n.handleSubmit;return c.a.createElement("form",{onSubmit:o((function(a){e(E(a.base)),t.push("./step2")}))},c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"base"},"Pick base:"),c.a.createElement("select",{id:"base",name:"base",ref:r},c.a.createElement("option",{value:"small"},"Small"),c.a.createElement("option",{value:"medium"},"Medium"),c.a.createElement("option",{value:"large"},"Large"))),c.a.createElement("button",null,"Next"))},j=function(){var e=Object(s.b)(),t=Object(u.e)(),a=Object(s.c)((function(e){return e.crust})),n=Object(i.a)({defaultValues:{crust:a}}),r=n.register,o=n.handleSubmit;return c.a.createElement("form",{onSubmit:o((function(a){e(d(a.crust)),t.push("./step3")}))},c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"crust"},"Pick crust:"),c.a.createElement("select",{id:"crust",name:"crust",ref:r},c.a.createElement("option",{value:"classic_thin"},"Classic Thin"),c.a.createElement("option",{value:"deep_pan"},"Deep Pan"),c.a.createElement("option",{value:"filled_crust"},"Filled Crust"))),c.a.createElement("button",null,"Next"))},S=function(){var e=Object(s.b)(),t=Object(u.e)(),a=Object(s.c)((function(e){return e.cheese})),n=Object(i.a)({defaultValues:{cheese:a}}),r=n.register,o=n.handleSubmit;return c.a.createElement("form",{onSubmit:o((function(a){e(f(a.cheese)),t.push("./step4")}))},c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"cheese"},"Pick cheese:"),c.a.createElement("select",{id:"cheese",name:"cheese",ref:r},c.a.createElement("option",{value:"no_cheese"},"No Cheese"),c.a.createElement("option",{value:"mozarella"},"Mozarella"),c.a.createElement("option",{value:"parmigiano"},"Parmigiano"))),c.a.createElement("button",null,"Next"))},g=function(){var e=Object(s.b)(),t=Object(u.e)(),a=Object(s.c)((function(e){return e.sauce})),n=Object(i.a)({defaultValues:{sauce:a}}),r=n.register,o=n.handleSubmit;return c.a.createElement("form",{onSubmit:o((function(a){e(v(a.sauce)),t.push("./result")}))},c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"sauce"},"Pick Sauce:"),c.a.createElement("select",{id:"sauce",name:"sauce",ref:r},c.a.createElement("option",{value:"no_sauce"},"No Sauce"),c.a.createElement("option",{value:"tomato"},"Tomato"),c.a.createElement("option",{value:"spicy_tomato"},"Spicy Tomato"))),c.a.createElement("button",null,"Complete"))},w=function(){var e=Object(s.c)((function(e){return e}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("pre",null,JSON.stringify(e,null,2)),c.a.createElement(l.b,{to:"/"},"Start over"))};a(36);var y=function(){return c.a.createElement(l.a,null,c.a.createElement(u.a,{exact:!0,path:"/",component:O}),c.a.createElement(u.a,{path:"/step2",component:j}),c.a.createElement(u.a,{path:"/step3",component:S}),c.a.createElement(u.a,{path:"/step4",component:g}),c.a.createElement(u.a,{path:"/result",component:w}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _=Object(m.a)({reducer:b});o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(s.a,{store:_},c.a.createElement(y,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.bf3a8cb9.chunk.js.map