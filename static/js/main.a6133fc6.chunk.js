(this.webpackJsonpsim_tp3_4k2_2021=this.webpackJsonpsim_tp3_4k2_2021||[]).push([[0],{180:function(t,e,a){"use strict";a.r(e);var n=a(2),r=a.n(n),i=a(63),c=a.n(i),s=(a(71),a.p,a(72),a(6)),l=a(1),o=function t(e,a,n){var r=this,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.95;Object(l.a)(this,t),this.generarIntervalos=function(){if(!r.generador&&r.muestra.length>0)for(var t=1/r.numIntervalos,e=0;e<r.numIntervalos;e++){var a=parseFloat((e*t).toFixed(4)),n=parseFloat(((e+1)*t).toFixed(4)),i=parseFloat(((a+n)/2).toFixed(4));r.data.push({min:a,max:n,mc:i})}else if(r.generador&&r.muestra.length)for(var c=r.generador.getLimites(r.muestra),l=Object(s.a)(c,2),o=l[0],d=(l[1]-o)/r.numIntervalos,u=0;u<r.numIntervalos;u++){var h=null;h=0===u?parseFloat(o.toFixed(4)):r.data[u-1].max;var b=parseFloat((h+d).toFixed(4)),j=parseFloat(((h+b)/2).toFixed(4));r.data.push({min:h,max:b,mc:j})}else r.data=[]},this.contarFrecuenciaMuestra=function(t,e){for(var a=0,n=0;n<r.muestra.length;n++)r.muestra[n]>=t&&r.muestra[n]<e&&(a+=1);return a},this.calcularFrecuenciaEsperada=function(t,e){if(r.generador){var a=r.generador.getDensidad(t);return parseFloat((a*e*r.muestra.length).toFixed(4))}return parseFloat((r.muestra.length/r.numIntervalos).toFixed(4))},this.calcularColumnas=function(){r.data.forEach((function(t,e){var a=r.contarFrecuenciaMuestra(t.min,t.max),n=r.calcularFrecuenciaEsperada(t.mc,t.max-t.min),i=parseFloat((a-n).toFixed(4)),c=parseFloat(Math.pow(i,2).toFixed(4)),s=0!=n?parseFloat((c/n).toFixed(4)):0,l=0==e?s:parseFloat((r.data[e-1].c+s).toFixed(4));t.fo=a,t.fe=n,t.col1=i,t.col2=c,t.col3=s,t.c=l}))},this.getGradosDeLibertad=function(){return r.numIntervalos-1},this.calcularChiCuadrado=function(){r.generarIntervalos(),r.calcularColumnas()},this.verificarChiCuadrado=function(){return{}},this.numIntervalos=e,this.muestra=a,this.confianza=i,this.generador=n,this.data=[]},d=a(4),u=a(3),h=a(5),b=function t(e,a,n){var r=this;Object(l.a)(this,t),this.calcularRandom=function(){return parseFloat((r.a+Math.random()*(r.b-r.a)).toFixed(4))},this.getMedia=function(){return parseFloat(((r.a+r.b)/2).toFixed(4))},this.getVarianza=function(){return parseFloat((Math.pow(r.b-r.a,2)/12).toFixed(4))},this.getDensidad=function(){return parseFloat((1/(r.b-r.a)).toFixed(4))},this.getLimites=function(){return[r.a,r.b]},this.getGradosLibertad=function(){return r.k-1},this.a=e,this.b=a,this.k=n},j=function t(e,a){var n=this;Object(l.a)(this,t),this.calcularRandom=function(){return parseFloat(-1/n.lambda*Math.log(1-Math.random()).toFixed(4))},this.getMedia=function(){return parseFloat((1/n.lambda).toFixed(4))},this.getVarianza=function(){return parseFloat((1/Math.pow(n.lambda,2)).toFixed(4))},this.getDensidad=function(t){return parseFloat((n.lambda*Math.pow(Math.E,-1*n.lambda*t)).toFixed(4))},this.getLimites=function(){return[0,1]},this.getGradosLibertad=function(){return n.k-2},this.lambda=e,this.k=a},O=function t(e,a,n){var r=this;Object(l.a)(this,t),this.getMedia=function(){return r.media},this.getVarianza=function(){return parseFloat(Math.pow(r.desviacion,2).toFixed(4))},this.getDensidad=function(t){return parseFloat(1/(r.desviacion*Math.sqrt(2*Math.PI))*Math.pow(Math.E,-.5*Math.pow((t-r.media)/r.desviacion,2)).toFixed(4))},this.getLimites=function(t){return[Math.min.apply(Math,Object(h.a)(t)),Math.max.apply(Math,Object(h.a)(t))]},this.getGradosLibertad=function(){return r.k-3},this.media=e,this.desviacion=a,this.k=n},x=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).calcularRandom=function(){t.convolucion;var e=Math.random(),a=Math.random();return[parseFloat((Math.sqrt(-2*Math.log(e))*Math.cos(2*Math.PI*a)*t.desviacion+t.media).toFixed(4)),parseFloat((Math.sqrt(-2*Math.log(e))*Math.sin(2*Math.PI*a)*t.desviacion+t.media).toFixed(4))]},t}return a}(O),f=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).generarDatosMuestraUniforme=function(){for(var t=[],e=0,a=0;a<12;a++){var n=Math.random();t.push(n),e+=n}return[t,e]},t.calcularRandom=function(){var e=t.generarDatosMuestraUniforme(),a=Object(s.a)(e,2),n=(a[0],a[1]);return parseFloat(((n-6)*t.desviacion+t.media).toFixed(4))},t}return a}(O),p=function t(e,a){var n=this;Object(l.a)(this,t),this.calcularRandom=function(){var t=1,e=-1,a=Math.pow(Math.E,-1*n.lambda);do{t*=Math.random(),e+=1}while(t>=a);return e},this.getMedia=function(){return parseFloat(n.lambda.toFixed(4))},this.getVarianza=function(){return parseFloat(n.lambda.toFixed(4))},this.getDensidad=function(t){return parseFloat((Math.pow(n.lambda,t)*Math.pow(Math.E,-1*n.lambda)/n.factorialize(t)).toFixed(4))},this.factorialize=function(t){if(0===t||1===t)return 1;for(var e=t-1;e>=1;e--)t*=e;return t},this.getLimites=function(t){return[Math.min.apply(Math,Object(h.a)(t)),Math.max.apply(Math,Object(h.a)(t))]},this.getGradosLibertad=function(){return n.k-2},this.lambda=e,this.k=a},m=a(66),v=a(0),g=function(){var t=Object(n.useState)(10),e=Object(s.a)(t,2),a=e[0],r=e[1],i=Object(n.useState)(0),c=Object(s.a)(i,2),l=c[0],d=c[1],u=Object(n.useState)([]),h=Object(s.a)(u,2),O=h[0],g=h[1],F=Object(n.useState)(),M=Object(s.a)(F,2),C=M[0],y=M[1],E=Object(n.useState)([]),w=Object(s.a)(E,2),I=w[0],k=w[1],L=Object(n.useState)({}),S=Object(s.a)(L,2),N=S[0],A=S[1],R=Object(n.useState)(1),D=Object(s.a)(R,2),G=D[0],P=D[1],z=Object(n.useState)(),B=Object(s.a)(z,2),T=B[0],_=B[1],V=Object(n.useState)(),q=Object(s.a)(V,2),J=q[0],U=q[1],W=Object(n.useState)(),X=Object(s.a)(W,2),K=X[0],H=X[1],Q=Object(n.useState)(),Y=Object(s.a)(Q,2),Z=Y[0],$=Y[1],tt=Object(n.useState)(),et=Object(s.a)(tt,2),at=et[0],nt=et[1],rt=Object(n.useState)(null),it=Object(s.a)(rt,2),ct=it[0],st=it[1];return Object(n.useEffect)((function(){switch(d(0),y(null),G){case 1:st(T&&J?new b(T,J,a):null);break;case 2:st(at?new j(at,a):null);break;case 3:st(K&&Z?new x(K,Z,a):null);break;case 4:st(at?new p(at,a):null);break;case 5:st(K&&Z?new f(K,Z,a):null);break;default:st(null)}}),[G,T,J,K,Z,at]),Object(n.useEffect)((function(){var t=new o(a,O,ct);t.calcularChiCuadrado(),y(t)}),[O,a]),Object(n.useEffect)((function(){g(function(){var t=[];if(ct)if(3===G)for(var e=0;e<l;e+=2){var a=ct.calcularRandom(),n=Object(s.a)(a,2),r=n[0],i=n[1];t.push(r),t.push(i)}else for(var c=0;c<l;c++){var o=ct.calcularRandom();t.push(o)}return t}())}),[l]),Object(n.useEffect)((function(){C&&k(C.data)}),[C]),Object(n.useEffect)((function(){var t={labels:[],datasets:[{label:"FO",data:[],backgroundColor:["rgba(255, 99, 132, 0.2)"],borderColor:["rgba(255, 99, 132, 1)"],borderWidth:1},{label:"FE",data:[],backgroundColor:["rgba(54, 162, 235, 0.2)"],borderColor:["rgba(54, 162, 235, 1)"],borderWidth:1}]};I.forEach((function(e){t.labels.push(e.mc),t.datasets[0].data.push(e.fo),t.datasets[1].data.push(e.fe)})),A(t)}),[I]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h1",{children:"TRABAJO PR\xc1CTICO N#3"}),Object(v.jsxs)("div",{style:{width:"48%",display:"inline-block",verticalAlign:"top",textAlign:"right"},children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{children:"K:"}),Object(v.jsx)("input",{type:"number",value:a,onChange:function(t){r(Number.parseInt(t.target.value))}})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{children:"N:"}),Object(v.jsx)("input",{type:"number",value:l,onChange:function(t){d(Number.parseInt(t.target.value))}})]})]}),Object(v.jsxs)("div",{style:{width:"50%",display:"inline-block",verticalAlign:"top",textAlign:"left",marginLeft:"1em"},children:[Object(v.jsx)("label",{children:"Tipo Generador:"}),Object(v.jsxs)("select",{onChange:function(t){P(Number.parseInt(t.target.value))},children:[Object(v.jsx)("option",{value:"1",children:"UNIFORME"}),Object(v.jsx)("option",{value:"2",children:"EXPONENCIAL"}),Object(v.jsx)("option",{value:"3",children:"NORMAL (Box-Muller)"}),Object(v.jsx)("option",{value:"5",children:"NORMAL (Convoluci\xf3n)"}),Object(v.jsx)("option",{value:"4",children:"POISSON"})]}),1===G&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{children:"A:"}),Object(v.jsx)("input",{type:"number",value:T,onChange:function(t){_(Number.parseInt(t.target.value))}})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{children:"B:"}),Object(v.jsx)("input",{type:"number",value:J,onChange:function(t){U(Number.parseInt(t.target.value))}})]})]}),(3===G||5===G)&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{children:"\xb5:"}),Object(v.jsx)("input",{type:"number",value:K,onChange:function(t){H(Number.parseInt(t.target.value))}})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{children:"\u03b4:"}),Object(v.jsx)("input",{type:"number",value:Z,onChange:function(t){var e=Number.parseFloat(t.target.value);$(e)}})]})]}),(2===G||4===G)&&Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{children:"\u03bb:"}),Object(v.jsx)("input",{type:"number",value:at,onChange:function(t){nt(Number.parseInt(t.target.value))}})]})}),ct&&Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{children:"GRADOS DE LIBERTAD (v):"}),Object(v.jsx)("input",{type:"number",disabled:!0,value:ct.getGradosLibertad()})]})})]}),Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{style:{width:"48%",display:"inline-block",verticalAlign:"top"},children:[Object(v.jsx)("h2",{children:"Muestra"}),Object(v.jsxs)("table",{children:[Object(v.jsxs)("thead",{children:[Object(v.jsx)("th",{children:"i"}),Object(v.jsx)("th",{children:"Xi"})]}),Object(v.jsx)("tbody",{children:O.map((function(t,e){return Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:e+1}),Object(v.jsx)("td",{children:t})]})}))})]})]}),Object(v.jsxs)("div",{style:{width:"50%",display:"inline-block",marginLeft:"1em"},children:[Object(v.jsxs)("table",{children:[Object(v.jsxs)("thead",{children:[Object(v.jsx)("th",{children:"i"}),Object(v.jsx)("th",{children:"Min"}),Object(v.jsx)("th",{children:"Max"}),Object(v.jsx)("th",{children:"MC"}),Object(v.jsx)("th",{children:"FO"}),Object(v.jsx)("th",{children:"FE"}),Object(v.jsx)("th",{children:"FO-FE"}),Object(v.jsx)("th",{children:"(FO-FE)^2"}),Object(v.jsx)("th",{children:"(FO-FE)^2/FE"}),Object(v.jsx)("th",{children:"C = \u03a3 (FO-FE)^2/FE "})]}),Object(v.jsx)("tbody",{children:I.map((function(t,e){return Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:e+1}),Object(v.jsx)("td",{children:t.min}),Object(v.jsx)("td",{children:t.max}),Object(v.jsx)("td",{children:t.mc}),Object(v.jsx)("td",{children:t.fo}),Object(v.jsx)("td",{children:t.fe}),Object(v.jsx)("td",{children:t.col1}),Object(v.jsx)("td",{children:t.col2}),Object(v.jsx)("td",{children:t.col3}),Object(v.jsx)("td",{children:t.c})]})}))})]}),Object(v.jsx)(m.a,{data:N})]})]})]})};var F=function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(g,{})})},M=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,181)).then((function(e){var a=e.getCLS,n=e.getFID,r=e.getFCP,i=e.getLCP,c=e.getTTFB;a(t),n(t),r(t),i(t),c(t)}))};c.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(F,{})}),document.getElementById("root")),M()},71:function(t,e,a){},72:function(t,e,a){}},[[180,1,2]]]);
//# sourceMappingURL=main.a6133fc6.chunk.js.map