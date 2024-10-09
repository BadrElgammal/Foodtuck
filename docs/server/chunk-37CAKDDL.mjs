import './polyfills.server.mjs';
import{B as G,C as q,D as W,E as $,H as Q,L as X,O as x,P as Y,Q as K,R as J,a as E,b as v,c as d,d as a,e as D,f as O,g as m,h as N,i as I,j as R,k as T,l as t,m as o,n as h,o as e,p as f,q as l,v as F,y as U,z}from"./chunk-CHIN4FRB.mjs";import{a as u,h as S}from"./chunk-5XUXGTUW.mjs";var U0=new v("Ng Glyph Config");var z0=new v("NgGlyphsToken");function l0(r){return r==null?"":/^\d+$/.test(r)?`${r}px`:r}var h0=new v("Ng Icon Pre Processor"),d0=new v("Ng Icon Post Processor");function c0(){return d(h0,{optional:!0})??(r=>r)}function v0(){return d(d0,{optional:!0})??(()=>{})}var w0=new v("Ng Icon Logger"),b=class{log(i){console.log(i)}warn(i){console.warn(i)}error(i){console.error(i)}};function g0(){return d(w0,{optional:!0})??new b}var p0=new v("Ng Icon Config"),m0={size:"1em"};function u0(){return d(p0,{optional:!0})??m0}var k0=new v("Ng Icon Loader Token");var M0=new v("Ng Icon Cache Token");function f0(){return d(k0,{optional:!0})}function x0(){return d(M0,{optional:!0})}function _(r){return[{provide:P,useFactory:(i=d(P,{optional:!0,skipSelf:!0}))=>u(u({},i?.reduce((n,s)=>u(u({},n),s),{})),r),multi:!0}]}var P=new v("Icons Token");function _0(){return d(P,{optional:!0})??[]}function C0(r){return typeof r=="string"?Promise.resolve(r):E(r)?r.toPromise():r}function y0(r){return r.replace(/([^a-zA-Z0-9])+(.)?/g,(i,n,s)=>s?s.toUpperCase():"").replace(/[^a-zA-Z\d]/g,"").replace(/^([A-Z])/,i=>i.toLowerCase())}var C=(()=>{class r{constructor(){this.config=u0(),this.icons=_0(),this.loader=f0(),this.cache=x0(),this.preProcessor=c0(),this.postProcessor=v0(),this.injector=d(O),this.renderer=d(R),this.platform=d(I),this.elementRef=d(N),this.logger=g0(),this.name=m(),this.svg=m(),this.size=m(this.config.size,{transform:l0}),this.strokeWidth=m(this.config.strokeWidth),this.color=m(this.config.color),U(()=>this.updateIcon())}ngOnDestroy(){this.svgElement=void 0}updateIcon(){return S(this,null,function*(){let n=this.name(),s=this.svg();if(s!==void 0){this.setSvg(s);return}if(n===void 0)return;let c=y0(n);for(let g of[...this.icons].reverse())if(g[c]){this.setSvg(g[c]);return}if(this.loader){let g=yield this.requestIconFromLoader(n);if(g!==null){this.setSvg(g);return}}this.logger.warn(`No icon named ${n} was found. You may need to import it using the withIcons function.`)})}setSvg(n){if(G(this.platform)){this.elementRef.nativeElement.innerHTML=n,this.elementRef.nativeElement.setAttribute("data-ng-icon-ssr","");return}if(this.elementRef.nativeElement.hasAttribute("data-ng-icon-ssr")&&(this.elementRef.nativeElement.removeAttribute("data-ng-icon-ssr"),this.svgElement=this.elementRef.nativeElement.querySelector("svg")??void 0,this.elementRef.nativeElement.innerHTML===n)||(this.svgElement&&this.renderer.removeChild(this.elementRef.nativeElement,this.svgElement),n===""))return;let s=this.renderer.createElement("template");this.renderer.setProperty(s,"innerHTML",this.preProcessor(n)),this.svgElement=s.content.firstElementChild,this.postProcessor(this.svgElement),this.renderer.appendChild(this.elementRef.nativeElement,this.svgElement)}requestIconFromLoader(n){return new Promise(s=>{D(this.injector,()=>S(this,null,function*(){if(this.cache){let M=this.cache.get(n);if(typeof M=="string"){s(M);return}if(M instanceof Promise){let a0=yield M;s(a0);return}}let c=C0(this.loader(n));this.cache?.set(n,c);let g=yield c;this.cache?.set(n,g),s(g)}))})}static{this.\u0275fac=function(s){return new(s||r)}}static{this.\u0275cmp=a({type:r,selectors:[["ng-icon"]],hostVars:6,hostBindings:function(s,c){s&2&&T("--ng-icon__stroke-width",c.strokeWidth())("--ng-icon__size",c.size())("color",c.color())},inputs:{name:[1,"name"],svg:[1,"svg"],size:[1,"size"],strokeWidth:[1,"strokeWidth"],color:[1,"color"]},standalone:!0,features:[l],decls:0,vars:0,template:function(s,c){},styles:["[_nghost-%COMP%]{display:inline-block;width:var(--ng-icon__size, 1em);height:var(--ng-icon__size, 1em);line-height:initial;vertical-align:initial;overflow:hidden}[_nghost-%COMP%]     svg{width:inherit;height:inherit;vertical-align:inherit}"],changeDetection:0})}}return r})();var t0='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-slot="icon" style="stroke-width:var(--ng-icon__stroke-width, 1.5)"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg>';var o0='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-slot="icon" style="stroke-width:var(--ng-icon__stroke-width, 1.5)"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path></svg>';var e0='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-slot="icon" style="stroke-width:var(--ng-icon__stroke-width, 1.5)"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path></svg>';var n0='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-slot="icon" style="stroke-width:var(--ng-icon__stroke-width, 1.5)"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"></path></svg>';var y=class r{static \u0275fac=function(n){return new(n||r)};static \u0275cmp=a({type:r,selectors:[["app-nav"]],standalone:!0,features:[f([],[_({heroMagnifyingGlass:o0,heroUser:n0,heroShoppingCart:e0})]),l],decls:35,vars:0,consts:[[1,"position-fixed","vw-100","navbar","navbar-dark","navbar-expand-lg","bg-black"],[1,"container-fluid","container"],[1,"text-white"],[1,""],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler","order-1","border-warning","text-warning"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse","order-2"],[1,"navbar-nav","me-auto","mb-2","mb-lg-0","mx-auto"],[1,"nav-item"],["routerLink","/home","routerLinkActive","active",1,"nav-link"],["routerLink","/menu","routerLinkActive","active",1,"nav-link"],["routerLink","/blog","routerLinkActive","active",1,"nav-link"],["routerLink","/pages","routerLinkActive","active",1,"nav-link"],["routerLink","/about","routerLinkActive","active",1,"nav-link"],["routerLink","/shop","routerLinkActive","active",1,"nav-link"],["routerLink","/Contact","routerLinkActive","active",1,"nav-link"],[1,"icons","order-xxl-3","order-xl-3","order-lg-3"],["name","heroMagnifyingGlass",1,"icon","text-white"],["name","heroUser",1,"icon","text-white"],["name","heroShoppingCart",1,"icon","text-white"]],template:function(n,s){n&1&&(t(0,"nav",0)(1,"div",1)(2,"h2",2),e(3,"Food"),t(4,"span",3),e(5,"tuck"),o()(),t(6,"button",4),h(7,"span",5),o(),t(8,"div",6)(9,"ul",7)(10,"li",8)(11,"a",9),e(12,"Home"),o()(),t(13,"li",8)(14,"a",10),e(15,"Menu"),o()(),t(16,"li",8)(17,"a",11),e(18,"Blog"),o()(),t(19,"li",8)(20,"a",12),e(21,"Pages"),o()(),t(22,"li",8)(23,"a",13),e(24,"About"),o()(),t(25,"li",8)(26,"a",14),e(27,"Shop"),o()(),t(28,"li",8)(29,"a",15),e(30,"Contact"),o()()()(),t(31,"div",16),h(32,"ng-icon",17)(33,"ng-icon",18)(34,"ng-icon",19),o()()())},dependencies:[C,x,Y],styles:[`nav[_ngcontent-%COMP%]{height:70px;z-index:999}.active[_ngcontent-%COMP%], span[_ngcontent-%COMP%]{color:#ff9f0d}.navbar-collapse[_ngcontent-%COMP%]{background-color:#000000e6;padding:10px}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#ff9f0d}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{color:#ff9f0d}nav[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{width:20px;height:20px;margin:0 5px;cursor:pointer}nav[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover{color:#ff9f0d!important}.navbar-toggler-icon[_ngcontent-%COMP%]{background-image:url("data:image/svg+xml;charset=UTF8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='rgb(255, 159, 13)' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E")}`]})};var A=class r{static \u0275fac=function(n){return new(n||r)};static \u0275cmp=a({type:r,selectors:[["app-footer"]],standalone:!0,features:[f([],[_({heroClock:t0})]),l],decls:98,vars:0,consts:[[1,"bg-black","text-white","py-4","py-5"],[1,"container"],[1,"text1","d-flex","justify-content-around","align-items-center","flex-wrap","mb-4","py-5"],[1,"part1"],[1,"input-group","mb-3"],["type","text","placeholder","Enter Your Email","aria-label","Recipient's email","aria-describedby","button-addon2",1,"form-control","text-white"],["type","button","id","button-addon2",1,"btn","btn-outline-warning","bg-white"],[1,"row","justify-content-between"],[1,"col-md-3","part"],[1,"d-flex"],["name","heroClock",1,"icon","d-flex","justify-content-center","align-items-center"],[1,"col-md-2","part"],[1,"list-unstyled"],["href","#",1,"text-white","text-decoration-none"],[1,"col-md-4","part"],[1,"d-flex","mb-3"],["src","assets/images/unsplash_CLMpC9UhyTo.jpg","alt","Post 1","width","60","height","60",1,"me-2","img-fluid"],["src","assets/images/unsplash_CLMpC9UhyTo.jpg","alt","Post 2","width","60","height","60",1,"me-2","img-fluid"],["src","assets/images/unsplash_CLMpC9UhyTo.jpg","alt","Post 3","width","60","height","60",1,"me-2","img-fluid"]],template:function(n,s){n&1&&(t(0,"footer",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h2")(5,"span"),e(6,"St"),o(),e(7,"ill You Need Our Support?"),o(),t(8,"p"),e(9,"Don\u2019t wait, make a smart & logical quote here. It\u2019s pretty easy."),o()(),t(10,"div",4),h(11,"input",5),t(12,"button",6),e(13,"Subscribe Now"),o()()(),t(14,"div",7)(15,"div",8)(16,"h3"),e(17,"About Us"),o(),t(18,"p"),e(19,"Corporate clients and leisure travelers rely on us for safe, professional chauffeured car service worldwide."),o(),t(20,"div",9),h(21,"ng-icon",10),t(22,"div")(23,"p")(24,"strong"),e(25,"Opening Hours:"),o()(),t(26,"p"),e(27,"Mon - Sat: 8.00 - 6.00"),h(28,"br"),e(29,"Sunday: Closed"),o()()()(),t(30,"div",11)(31,"h3"),e(32,"Useful Links"),o(),t(33,"ul",12)(34,"li")(35,"a",13),e(36,"About"),o()(),t(37,"li")(38,"a",13),e(39,"News"),o()(),t(40,"li")(41,"a",13),e(42,"Partners"),o()(),t(43,"li")(44,"a",13),e(45,"Team"),o()(),t(46,"li")(47,"a",13),e(48,"Menu"),o()(),t(49,"li")(50,"a",13),e(51,"Contact"),o()()()(),t(52,"div",11)(53,"h3"),e(54,"Help?"),o(),t(55,"ul",12)(56,"li")(57,"a",13),e(58,"FAQ"),o()(),t(59,"li")(60,"a",13),e(61,"Terms & Conditions"),o()(),t(62,"li")(63,"a",13),e(64,"Reporting"),o()(),t(65,"li")(66,"a",13),e(67,"Documentation"),o()(),t(68,"li")(69,"a",13),e(70,"Support Policy"),o()(),t(71,"li")(72,"a",13),e(73,"Privacy"),o()()()(),t(74,"div",14)(75,"h3"),e(76,"Recent Posts"),o(),t(77,"div",15),h(78,"img",16),t(79,"div")(80,"p"),e(81,"Is fast food good for your body?"),o(),t(82,"p"),e(83,"February 28, 2022"),o()()(),t(84,"div",15),h(85,"img",17),t(86,"div")(87,"p"),e(88,"Change your food habit with organic food"),o(),t(89,"p"),e(90,"February 28, 2022"),o()()(),t(91,"div",9),h(92,"img",18),t(93,"div")(94,"p"),e(95,"Do you like fast food for your life?"),o(),t(96,"p"),e(97,"February 28, 2022"),o()()()()()()())},dependencies:[C],styles:["footer[_ngcontent-%COMP%]{padding:100px 0}.input-group[_ngcontent-%COMP%]{max-width:350px}footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#ff9f0d}footer[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]{max-width:300px}footer[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#ff9f0d;border-color:#ff9f0d}footer[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:#fff!important}footer[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#ff9f0d!important;color:#fff}footer[_ngcontent-%COMP%]   .text1[_ngcontent-%COMP%]{border-bottom:2px solid #FF9F0D;margin-bottom:50px}footer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-bottom:30px}footer[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{width:60px;height:60px;padding:15px;background-color:#ff9f0d;margin-right:20px}footer[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]{width:350px}footer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50px}footer[_ngcontent-%COMP%]   .part[_ngcontent-%COMP%]{padding-left:30px}footer[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:10px 0}footer[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#ff9f0d!important}"]})};var B=class r{title="project";static \u0275fac=function(n){return new(n||r)};static \u0275cmp=a({type:r,selectors:[["app-root"]],standalone:!0,features:[l],decls:3,vars:0,template:function(n,s){n&1&&h(0,"app-nav")(1,"router-outlet")(2,"app-footer")},dependencies:[X,y,A]})};var k=class r{static \u0275fac=function(n){return new(n||r)};static \u0275cmp=a({type:r,selectors:[["app-home"]],standalone:!0,features:[l],decls:20,vars:0,consts:[[1,"container-fluid","vw-100","vh-100","position-relative"],["src","assets/images/unsplash_qom5MPOER-I.png","alt","Error",1,"bg-image"],[1,"overlay","d-flex","align-items-center","position-absolute","w-100","h-100"],[1,"container","d-flex","justify-content-between","align-items-center","flex-wrap","w-100"],[1,"text-section","d-flex","align-items-center","col-md-5","col-sm-12"],[1,"line"],[1,"text-content","w-100","ms-3"],[1,"font"],["routerLink","/menu"],[1,"btn"],[1,"image-section","col-md-6","col-sm-12"],["src","assets/images/food_image_no_bg.png","alt","food image",1,"img-fluid"]],template:function(n,s){n&1&&(t(0,"div",0),h(1,"img",1),t(2,"div",2)(3,"div",3)(4,"div",4),h(5,"div",5),t(6,"div",6)(7,"p",7),e(8,"Its Quick & Amusing!"),o(),t(9,"h1")(10,"span"),e(11,"Th"),o(),e(12,"e Art of speedfood Quality"),o(),t(13,"p"),e(14,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue"),o(),t(15,"a",8)(16,"button",9),e(17,"See Menu"),o()()()(),t(18,"div",10),h(19,"img",11),o()()()())},dependencies:[x],styles:[".container-fluid[_ngcontent-%COMP%]{position:relative;padding:0}.bg-image[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;position:absolute;top:0;left:0}.overlay[_ngcontent-%COMP%]{background-color:#000000b3;padding:70px 20px}.line[_ngcontent-%COMP%]{height:400px;width:2px;background-color:#fff;margin-right:15px}.font[_ngcontent-%COMP%]{font-family:Dancing Script,cursive;color:#ff9f0d;font-size:25px}h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#ff9f0d}.img-fluid[_ngcontent-%COMP%]{max-width:100%;height:auto}.text-section[_ngcontent-%COMP%]{color:#fff}.text-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#ff9f0d;color:#fff;padding:10px 20px;border:none;border-radius:20px;margin-top:10px;cursor:pointer}.text-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#ff8000}"]})};var j=class r{static \u0275fac=function(n){return new(n||r)};static \u0275cmp=a({type:r,selectors:[["app-menu"]],standalone:!0,features:[l],decls:3,vars:0,consts:[[1,"contaner","vh-100","vw-100","bg-gradient","d-flex","justify-content-center","align-items-center"]],template:function(n,s){n&1&&(t(0,"div",0)(1,"h1"),e(2,"Menu page"),o()())}})};var Z=class r{static \u0275fac=function(n){return new(n||r)};static \u0275cmp=a({type:r,selectors:[["app-shop"]],standalone:!0,features:[l],decls:3,vars:0,consts:[[1,"contaner","vh-100","vw-100","bg-warning","d-flex","justify-content-center","align-items-center"]],template:function(n,s){n&1&&(t(0,"div",0)(1,"h1"),e(2,"Shop page"),o()())}})};var V=class r{static \u0275fac=function(n){return new(n||r)};static \u0275cmp=a({type:r,selectors:[["app-not-found"]],standalone:!0,features:[l],decls:3,vars:0,consts:[[1,"contaner","vh-100","vw-100","bg-danger","d-flex","justify-content-center","align-items-center"]],template:function(n,s){n&1&&(t(0,"div",0)(1,"h1"),e(2,"404 Error Not Found Page"),o()())}})};var H=class r{static \u0275fac=function(n){return new(n||r)};static \u0275cmp=a({type:r,selectors:[["app-blog"]],standalone:!0,features:[l],decls:3,vars:0,consts:[[1,"contaner","vh-100","vw-100","bg-secondary","d-flex","justify-content-center","align-items-center"]],template:function(n,s){n&1&&(t(0,"div",0)(1,"h1"),e(2,"Blog Page"),o()())}})};var L=class r{static \u0275fac=function(n){return new(n||r)};static \u0275cmp=a({type:r,selectors:[["app-about"]],standalone:!0,features:[l],decls:3,vars:0,consts:[[1,"contaner","vh-100","vw-100","bg-info","d-flex","justify-content-center","align-items-center"]],template:function(n,s){n&1&&(t(0,"div",0)(1,"h1"),e(2,"About Page"),o()())}})};var r0=[{path:"",component:k},{path:"home",component:k},{path:"menu",component:j},{path:"blog",component:H},{path:"about",component:L},{path:"shop",component:Z},{path:"**",component:V}];var i0={providers:[q(),F({eventCoalescing:!0}),K(r0,J()),$()]};var A0={providers:[Q()]},s0=z(i0,A0);var B0=()=>W(B,s0),P1=B0;export{P1 as a};
