"use strict";(self.webpackChunk_04_country_app=self.webpackChunk_04_country_app||[]).push([[78],{5078:(ie,C,a)=>{a.r(C),a.d(C,{CountriesModule:()=>te});var c=a(4755),h=a(1328),e=a(1902),v=a(262),Z=a(9646),u=a(8505),A=a(4004),S=a(3144);let g=(()=>{class n{constructor(t){this.http=t,this.apiUrl="https://restcountries.com/v3.1",this.cacheStore={byCapital:{term:"",countries:[]},byCountries:{term:"",countries:[]},byRegion:{countries:[]}},this.loadFromLocalStorage()}saveToLocalStorage(){localStorage.setItem("cacheStore",JSON.stringify(this.cacheStore))}loadFromLocalStorage(){localStorage.getItem("cacheStore")&&(this.cacheStore=JSON.parse(localStorage.getItem("cacheStore")))}getCountriesRequest(t){return this.http.get(t).pipe((0,v.K)(()=>(0,Z.of)([])))}searchByCapital(t){return this.getCountriesRequest(`${this.apiUrl}/capital/${t}`).pipe((0,u.b)(r=>this.cacheStore.byCapital={term:t,countries:r}),(0,u.b)(()=>this.saveToLocalStorage()))}searchByCountry(t){return this.getCountriesRequest(`${this.apiUrl}/name/${t}`).pipe((0,u.b)(r=>this.cacheStore.byCountries={term:t,countries:r}),(0,u.b)(()=>this.saveToLocalStorage()))}searchCountryByAlphaCode(t){return this.http.get(`${this.apiUrl}/alpha/${t}`).pipe((0,A.U)(r=>r.length?r[0]:null),(0,v.K)(()=>(0,Z.of)(null)))}searchByRegion(t){return this.getCountriesRequest(`${this.apiUrl}/region/${t}`).pipe((0,u.b)(r=>this.cacheStore.byRegion={region:t,countries:r}),(0,u.b)(()=>this.saveToLocalStorage()))}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(S.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),y=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["shared-loading-spinner"]],decls:22,vars:0,consts:[[1,"spinner-container","bg-dark"],["width","58","height","58","viewBox","0 0 58 58","xmlns","http://www.w3.org/2000/svg"],["fill","none","fill-rule","evenodd"],["transform","translate(2 1)","stroke","#FFF","stroke-width","1.5"],["cx","42.601","cy","11.462","r","5","fill-opacity","1","fill","#fff"],["attributeName","fill-opacity","begin","0s","dur","1.3s","values","1;0;0;0;0;0;0;0","calcMode","linear","repeatCount","indefinite"],["cx","49.063","cy","27.063","r","5","fill-opacity","0","fill","#fff"],["attributeName","fill-opacity","begin","0s","dur","1.3s","values","0;1;0;0;0;0;0;0","calcMode","linear","repeatCount","indefinite"],["cx","42.601","cy","42.663","r","5","fill-opacity","0","fill","#fff"],["attributeName","fill-opacity","begin","0s","dur","1.3s","values","0;0;1;0;0;0;0;0","calcMode","linear","repeatCount","indefinite"],["cx","27","cy","49.125","r","5","fill-opacity","0","fill","#fff"],["attributeName","fill-opacity","begin","0s","dur","1.3s","values","0;0;0;1;0;0;0;0","calcMode","linear","repeatCount","indefinite"],["cx","11.399","cy","42.663","r","5","fill-opacity","0","fill","#fff"],["attributeName","fill-opacity","begin","0s","dur","1.3s","values","0;0;0;0;1;0;0;0","calcMode","linear","repeatCount","indefinite"],["cx","4.938","cy","27.063","r","5","fill-opacity","0","fill","#fff"],["attributeName","fill-opacity","begin","0s","dur","1.3s","values","0;0;0;0;0;1;0;0","calcMode","linear","repeatCount","indefinite"],["cx","11.399","cy","11.462","r","5","fill-opacity","0","fill","#fff"],["attributeName","fill-opacity","begin","0s","dur","1.3s","values","0;0;0;0;0;0;1;0","calcMode","linear","repeatCount","indefinite"],["cx","27","cy","5","r","5","fill-opacity","0","fill","#fff"],["attributeName","fill-opacity","begin","0s","dur","1.3s","values","0;0;0;0;0;0;0;1","calcMode","linear","repeatCount","indefinite"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"span"),e._uU(2,"Buscando"),e.qZA(),e.O4$(),e.TgZ(3,"svg",1)(4,"g",2)(5,"g",3)(6,"circle",4),e._UZ(7,"animate",5),e.qZA(),e.TgZ(8,"circle",6),e._UZ(9,"animate",7),e.qZA(),e.TgZ(10,"circle",8),e._UZ(11,"animate",9),e.qZA(),e.TgZ(12,"circle",10),e._UZ(13,"animate",11),e.qZA(),e.TgZ(14,"circle",12),e._UZ(15,"animate",13),e.qZA(),e.TgZ(16,"circle",14),e._UZ(17,"animate",15),e.qZA(),e.TgZ(18,"circle",16),e._UZ(19,"animate",17),e.qZA(),e.TgZ(20,"circle",18),e._UZ(21,"animate",19),e.qZA()()()()())},styles:[".spinner-container[_ngcontent-%COMP%]{align-items:center;background-color:#000;border-radius:40px;box-shadow:0 3px 5px #0006;bottom:15px;color:#fff;display:flex;padding:5px 10px;position:fixed;right:15px}span[_ngcontent-%COMP%]{margin-left:5px;margin-right:5px}"]}),n})();var U=a(7579),q=a(727);class B extends q.w0{constructor(i,t){super()}schedule(i,t=0){return this}}const f={setInterval(n,i,...t){const{delegate:o}=f;return o?.setInterval?o.setInterval(n,i,...t):setInterval(n,i,...t)},clearInterval(n){const{delegate:i}=f;return(i?.clearInterval||clearInterval)(n)},delegate:void 0};var w=a(8737);const b={now:()=>(b.delegate||Date).now(),delegate:void 0};class d{constructor(i,t=d.now){this.schedulerActionCtor=i,this.now=t}schedule(i,t=0,o){return new this.schedulerActionCtor(this,i).schedule(o,t)}}d.now=b.now;const O=new class P extends d{constructor(i,t=d.now){super(i,t),this.actions=[],this._active=!1}flush(i){const{actions:t}=this;if(this._active)return void t.push(i);let o;this._active=!0;do{if(o=i.execute(i.state,i.delay))break}while(i=t.shift());if(this._active=!1,o){for(;i=t.shift();)i.unsubscribe();throw o}}}(class I extends B{constructor(i,t){super(i,t),this.scheduler=i,this.work=t,this.pending=!1}schedule(i,t=0){var o;if(this.closed)return this;this.state=i;const r=this.id,s=this.scheduler;return null!=r&&(this.id=this.recycleAsyncId(s,r,t)),this.pending=!0,this.delay=t,this.id=null!==(o=this.id)&&void 0!==o?o:this.requestAsyncId(s,this.id,t),this}requestAsyncId(i,t,o=0){return f.setInterval(i.flush.bind(i,this),o)}recycleAsyncId(i,t,o=0){if(null!=o&&this.delay===o&&!1===this.pending)return t;null!=t&&f.clearInterval(t)}execute(i,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const o=this._execute(i,t);if(o)return o;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(i,t){let r,o=!1;try{this.work(i)}catch(s){o=!0,r=s||new Error("Scheduled action threw falsy error")}if(o)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){const{id:i,scheduler:t}=this,{actions:o}=t;this.work=this.state=this.scheduler=null,this.pending=!1,(0,w.P)(o,this),null!=i&&(this.id=this.recycleAsyncId(t,i,null)),this.delay=null,super.unsubscribe()}}});var R=a(4482),F=a(5403);let _=(()=>{class n{constructor(){this.debounce=new U.x,this.placeholder="",this.initialValue="",this.onValue=new e.vpe,this.onDebounce=new e.vpe}ngOnInit(){this.debounceSubscription=this.debounce.pipe(function J(n,i=O){return(0,R.e)((t,o)=>{let r=null,s=null,l=null;const T=()=>{if(r){r.unsubscribe(),r=null;const p=s;s=null,o.next(p)}};function ne(){const p=l+n,x=i.now();if(x<p)return r=this.schedule(void 0,p-x),void o.add(r);T()}t.subscribe((0,F.x)(o,p=>{s=p,l=i.now(),r||(r=i.schedule(ne,n),o.add(r))},()=>{T(),o.complete()},void 0,()=>{s=r=null}))})}(800)).subscribe(t=>this.onDebounce.emit(t))}ngOnDestroy(){this.debounceSubscription?.unsubscribe()}searchTerm(t){this.onValue.emit(t)}onKeyPress(t){this.debounce.next(t)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["shared-search-box"]],inputs:{placeholder:"placeholder",initialValue:"initialValue"},outputs:{onValue:"onValue",onDebounce:"onDebounce"},decls:2,vars:2,consts:[["type","text",1,"form-control",3,"placeholder","value","keyup.enter","keyup"],["txtInput",""]],template:function(t,o){if(1&t){const r=e.EpF();e.TgZ(0,"input",0,1),e.NdJ("keyup.enter",function(){e.CHM(r);const l=e.MAs(1);return e.KtG(o.searchTerm(l.value))})("keyup",function(){e.CHM(r);const l=e.MAs(1);return e.KtG(o.onKeyPress(l.value))}),e.qZA()}2&t&&e.Q6J("placeholder",o.placeholder)("value",o.initialValue)}}),n})();function L(n,i){1&n&&(e.TgZ(0,"div",2),e._uU(1," No hay pa\xedses que mostrar\n"),e.qZA())}const N=function(n){return["/countries/by",n]};function M(n,i){if(1&n&&(e.TgZ(0,"tr")(1,"th",6),e._uU(2),e.qZA(),e.TgZ(3,"th"),e._uU(4),e.qZA(),e.TgZ(5,"th"),e._UZ(6,"img",7),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.ALo(13,"number"),e.qZA(),e.TgZ(14,"td")(15,"a",8),e._uU(16,"Info"),e.qZA()()()),2&n){const t=i.$implicit,o=i.index;e.xp6(2),e.Oqu(o+1),e.xp6(2),e.Oqu(t.flag),e.xp6(2),e.Q6J("src",t.flags.svg,e.LSH)("alt",t.name.common),e.xp6(2),e.Oqu(t.name.common),e.xp6(2),e.Oqu(t.capital),e.xp6(2),e.Oqu(e.lcZ(13,8,t.population)),e.xp6(3),e.Q6J("routerLink",e.VKq(10,N,t.cca3))}}function V(n,i){if(1&n&&(e.TgZ(0,"table",3)(1,"thead")(2,"tr")(3,"th",4),e._uU(4,"#"),e.qZA(),e.TgZ(5,"th",4),e._uU(6,"Icon"),e.qZA(),e.TgZ(7,"th",4),e._uU(8,"Bandera"),e.qZA(),e.TgZ(9,"th",4),e._uU(10,"Nombre"),e.qZA(),e.TgZ(11,"th",4),e._uU(12,"Capital"),e.qZA(),e.TgZ(13,"th",4),e._uU(14,"Poblaci\xf3n"),e.qZA(),e.TgZ(15,"th",4),e._uU(16,"#"),e.qZA()()(),e.TgZ(17,"tbody"),e.YNc(18,M,17,12,"tr",5),e.qZA()()),2&n){const t=e.oxw();e.xp6(18),e.Q6J("ngForOf",t.countries)}}let m=(()=>{class n{constructor(){this.countries=[]}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["country-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],["elseTable",""],[1,"alert","alert-warning","text-center"],[1,"table","table-hover"],["scope","col"],[4,"ngFor","ngForOf"],["scope","row"],["height","15","width","20",3,"src","alt"],[3,"routerLink"]],template:function(t,o){if(1&t&&(e.YNc(0,L,2,0,"div",0),e.YNc(1,V,19,1,"ng-template",null,1,e.W1O)),2&t){const r=e.MAs(2);e.Q6J("ngIf",!o.countries.length)("ngIfElse",r)}},dependencies:[c.sg,c.O5,h.rH,c.JJ]}),n})();function Q(n,i){1&n&&e._UZ(0,"shared-loading-spinner")}let E=(()=>{class n{constructor(t){this.countriesService=t,this.countriesByCapital=[],this.isLoading=!1,this.initialValue=""}ngOnInit(){this.countriesByCapital=this.countriesService.cacheStore.byCapital.countries,this.initialValue=this.countriesService.cacheStore.byCapital.term}searchByCapital(t){this.isLoading=!0,this.countriesService.searchByCapital(t).subscribe(o=>{this.countriesByCapital=o,this.isLoading=!1})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-by-capital-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col"],["placeholder","B\xfasqueda por capital",3,"initialValue","onDebounce"],[4,"ngIf"],[3,"countries"]],template:function(t,o){1&t&&(e.TgZ(0,"h2"),e._uU(1,"Por Capital"),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"div",0)(4,"div",1)(5,"shared-search-box",2),e.NdJ("onDebounce",function(s){return o.searchByCapital(s)}),e.qZA()()(),e.TgZ(6,"div",0)(7,"div",1),e._UZ(8,"hr"),e.YNc(9,Q,1,0,"shared-loading-spinner",3),e._UZ(10,"country-table",4),e.qZA()()),2&t&&(e.xp6(5),e.Q6J("initialValue",o.initialValue),e.xp6(4),e.Q6J("ngIf",o.isLoading),e.xp6(1),e.Q6J("countries",o.countriesByCapital))},dependencies:[c.O5,y,_,m]}),n})();function Y(n,i){1&n&&e._UZ(0,"shared-loading-spinner")}let D=(()=>{class n{constructor(t){this.countriesService=t,this.countriesByCountry=[],this.isLoading=!1,this.initialValue=""}ngOnInit(){this.countriesByCountry=this.countriesService.cacheStore.byCountries.countries,this.initialValue=this.countriesService.cacheStore.byCountries.term}searchByCountry(t){this.isLoading=!0,this.countriesService.searchByCountry(t).subscribe(o=>{this.countriesByCountry=o,this.isLoading=!1})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-by-country-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col"],["placeholder","B\xfasqueda por pa\xeds",3,"initialValue","onValue"],[4,"ngIf"],[3,"countries"]],template:function(t,o){1&t&&(e.TgZ(0,"h2"),e._uU(1,"Por Pa\xeds"),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"div",0)(4,"div",1)(5,"shared-search-box",2),e.NdJ("onValue",function(s){return o.searchByCountry(s)}),e.qZA()()(),e.TgZ(6,"div",0)(7,"div",1),e._UZ(8,"hr"),e.YNc(9,Y,1,0,"shared-loading-spinner",3),e._UZ(10,"country-table",4),e.qZA()()),2&t&&(e.xp6(5),e.Q6J("initialValue",o.initialValue),e.xp6(4),e.Q6J("ngIf",o.isLoading),e.xp6(1),e.Q6J("countries",o.countriesByCountry))},dependencies:[c.O5,y,_,m]}),n})();const $=function(n){return{active:n}};function k(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"button",6),e.NdJ("click",function(){const s=e.CHM(t).$implicit,l=e.oxw();return e.KtG(l.searchByRegion(s))}),e._uU(1),e.qZA()}if(2&n){const t=i.$implicit,o=e.oxw();e.Q6J("ngClass",e.VKq(2,$,o.selectedRegion===t)),e.xp6(1),e.hij(" ",t," ")}}function K(n,i){1&n&&e._UZ(0,"shared-loading-spinner")}let j=(()=>{class n{constructor(t){this.countriesService=t,this.countriesByRegion=[],this.regions=["Africa","Americas","Asia","Europe","Oceania"],this.isLoading=!1}ngOnInit(){this.countriesByRegion=this.countriesService.cacheStore.byRegion.countries,this.selectedRegion=this.countriesService.cacheStore.byRegion.region}searchByRegion(t){this.isLoading=!0,this.selectedRegion=t,this.countriesService.searchByRegion(t).subscribe(o=>{this.countriesByRegion=o,this.isLoading=!1})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-by-region-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col","text-center"],["class","btn mx-2 btn-outline-primary",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"col"],[4,"ngIf"],[3,"countries"],[1,"btn","mx-2","btn-outline-primary",3,"ngClass","click"]],template:function(t,o){1&t&&(e.TgZ(0,"h2"),e._uU(1,"Por Pa\xeds"),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"div",0)(4,"div",1),e.YNc(5,k,2,4,"button",2),e.qZA()(),e.TgZ(6,"div",0)(7,"div",3),e._UZ(8,"hr"),e.YNc(9,K,1,0,"shared-loading-spinner",4),e._UZ(10,"country-table",5),e.qZA()()),2&t&&(e.xp6(5),e.Q6J("ngForOf",o.regions),e.xp6(4),e.Q6J("ngIf",o.isLoading),e.xp6(1),e.Q6J("countries",o.countriesByRegion))},dependencies:[c.mk,c.sg,c.O5,y,m]}),n})();var X=a(3900);function H(n,i){1&n&&(e.TgZ(0,"div",2),e._uU(1," Espere por favor "),e.qZA())}function z(n,i){if(1&n&&(e.TgZ(0,"div")(1,"div",3)(2,"div",4)(3,"h2"),e._uU(4,"Pa\xeds: "),e.TgZ(5,"strong"),e._uU(6),e.qZA()()()(),e.TgZ(7,"div",3)(8,"div",5)(9,"h3"),e._uU(10,"Bandera"),e.qZA(),e._UZ(11,"img",6),e.qZA(),e.TgZ(12,"div",7)(13,"h3"),e._uU(14,"Informaci\xf3n"),e.qZA(),e.TgZ(15,"ul",8)(16,"li",9)(17,"strong"),e._uU(18,"Poblaci\xf3n: "),e.qZA(),e._uU(19),e.ALo(20,"number"),e.qZA(),e.TgZ(21,"li",9)(22,"strong"),e._uU(23,"C\xf3digo: "),e.qZA(),e._uU(24),e.qZA()()()(),e.TgZ(25,"div",10)(26,"div",7)(27,"h3"),e._uU(28,"Traducciones"),e.qZA(),e.TgZ(29,"div",11)(30,"div",12),e._uU(31),e.qZA(),e.TgZ(32,"div",12),e._uU(33),e.qZA(),e.TgZ(34,"div",12),e._uU(35),e.qZA(),e.TgZ(36,"div",12),e._uU(37),e.qZA(),e.TgZ(38,"div",12),e._uU(39),e.qZA(),e.TgZ(40,"div",12),e._uU(41),e.qZA(),e.TgZ(42,"div",12),e._uU(43),e.qZA(),e.TgZ(44,"div",12),e._uU(45),e.qZA()()()()()),2&n){const t=e.oxw();e.xp6(6),e.Oqu(t.country.name.common),e.xp6(5),e.Q6J("src",t.country.flags.svg,e.LSH)("alt",t.country.name.common),e.xp6(8),e.hij("",e.lcZ(20,13,t.country.population)," "),e.xp6(5),e.hij("",t.country.cca3," "),e.xp6(7),e.Oqu(t.country.translations.ara.common),e.xp6(2),e.Oqu(t.country.translations.deu.common),e.xp6(2),e.Oqu(t.country.translations.fin.common),e.xp6(2),e.Oqu(t.country.translations.hrv.common),e.xp6(2),e.Oqu(t.country.translations.ita.common),e.xp6(2),e.Oqu(t.country.translations.jpn.common),e.xp6(2),e.Oqu(t.country.translations.per.common),e.xp6(2),e.Oqu(t.country.translations.por.common)}}const G=[{path:"by-capital",component:E},{path:"by-country",component:D},{path:"by-region",component:j},{path:"by/:id",component:(()=>{class n{constructor(t,o,r){this.activatedRoute=t,this.router=o,this.countriesService=r}ngOnInit(){this.activatedRoute.params.pipe((0,X.w)(({id:t})=>this.countriesService.searchCountryByAlphaCode(t))).subscribe(t=>t?this.country=t:this.router.navigateByUrl(""))}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(h.gz),e.Y36(h.F0),e.Y36(g))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-country-page"]],decls:3,vars:2,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"alert","alert-info"],[1,"row"],[1,"col-12"],[1,"col-4"],[1,"img-thumbnail",3,"src","alt"],[1,"col"],[1,"list-group"],[1,"list-group-item"],[1,"row","mt-2"],[1,"d-flex","flex-wrap"],[1,"badge","bg-primary","m-1"]],template:function(t,o){if(1&t&&(e.YNc(0,H,2,0,"ng-template",null,0,e.W1O),e.YNc(2,z,46,15,"div",1)),2&t){const r=e.MAs(1);e.xp6(2),e.Q6J("ngIf",o.country)("ngIfElse",r)}},dependencies:[c.O5,c.JJ]}),n})()},{path:"**",redirectTo:"by-capital"}];let W=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[h.Bz.forChild(G),h.Bz]}),n})();var ee=a(4466);let te=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.ez,W,ee.m]}),n})()}}]);