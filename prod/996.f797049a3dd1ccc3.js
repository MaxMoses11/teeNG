"use strict";(self.webpackChunkKZ22=self.webpackChunkKZ22||[]).push([[996],{6996:(A,p,s)=>{s.r(p),s.d(p,{CatalogModule:()=>x});var n=s(6895),c=s(646),a=s(8505),t=s(8256),h=s(529);let d=(()=>{class r{constructor(e){this.http=e}getProducts(){return this.http.get("https://testologia.site/tea")}getProduct(e){return this.http.get(`https://testologia.site/tea?id=${e}`)}}return r.\u0275fac=function(e){return new(e||r)(t.LFG(h.eN))},r.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();var g=s(3763);let m=(()=>{class r{transform(e){return e.length>150?e.slice(0,150)+"...":e}}return r.\u0275fac=function(e){return new(e||r)},r.\u0275pipe=t.Yjl({name:"decorateProductDescription",type:r,pure:!0}),r})();const f=function(r){return["/catalog",r]};function v(r,o){if(1&r&&(t.TgZ(0,"div",5)(1,"div",6),t._UZ(2,"img",7),t.TgZ(3,"div",8)(4,"h5",9),t._uU(5),t.qZA(),t.TgZ(6,"p",10),t._uU(7),t.ALo(8,"decorateProductDescription"),t.qZA(),t.TgZ(9,"a",11),t._uU(10,"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"),t.qZA()()()()),2&r){const e=o.$implicit;t.xp6(2),t.s9C("src",e.image,t.LSH),t.xp6(3),t.Oqu(e.title),t.xp6(2),t.Oqu(t.lcZ(8,4,e.description)),t.xp6(2),t.Q6J("routerLink",t.VKq(6,f,e.id))}}function b(r,o){1&r&&(t.TgZ(0,"div",12)(1,"div",13)(2,"span",14),t._uU(3,"Loading..."),t.qZA()()())}const S=function(r){return{product:r}};function P(r,o){if(1&r&&(t.TgZ(0,"div",3)(1,"div",4),t._UZ(2,"img",5),t.TgZ(3,"a",6),t._uU(4,"\u041a\u0443\u043f\u0438\u0442\u044c"),t.qZA()(),t.TgZ(5,"div",7)(6,"p",8),t._uU(7),t.qZA(),t.TgZ(8,"p",9),t._uU(9),t.qZA(),t.TgZ(10,"p",10),t._uU(11),t.qZA()()()),2&r){const e=t.oxw();t.xp6(2),t.s9C("src",e.product.image,t.LSH),t.xp6(1),t.Q6J("queryParams",t.VKq(5,S,e.product.title)),t.xp6(4),t.Oqu(e.product.title),t.xp6(2),t.Oqu(e.product.description),t.xp6(2),t.hij("\u0426\u0435\u043d\u0430: ",e.product.price," \u0440\u0443\u0431/\u043a\u0433")}}function Z(r,o){1&r&&(t.TgZ(0,"div",11)(1,"div",12)(2,"span",13),t._uU(3,"Loading..."),t.qZA()()())}const y=[{path:"",component:(()=>{class r{constructor(e,i,u){this.productService=e,this.router=i,this.searchService=u,this.subscriptionProducts=null,this.subscriptionSubject=null,this.subscriptionSearch=null,this.productsElement=null,this.productsTitleElement=null,this.searchString="",this.products=[],this.loading=!1}ngOnInit(){this.productsElement=document.getElementById("products"),this.productsTitleElement=document.getElementById("products-title"),this.searchService.searchString?(this.searchString=this.searchService.searchString,this.searchInCatalog(this.searchString)):this.getProductsInCatalog(),this.subscriptionSubject=this.searchService.searchProducts.subscribe(e=>{this.searchInCatalog(e)})}searchInCatalog(e){this.loading=!0;let i=!0;e||(i=!1),this.subscriptionSearch=this.searchService.searchInCatalog(e).pipe((0,a.b)(()=>{this.loading=!1})).subscribe({next:u=>{this.productsElement&&i?this.showSearchResult(u,e):(this.products=u,this.productsTitleElement.innerText="\u041d\u0430\u0448\u0438 \u0447\u0430\u0439\u043d\u044b\u0435 \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u0438")},error:()=>{this.router.navigate(["/"]).then()}})}getProductsInCatalog(){this.loading=!0,this.subscriptionProducts=this.productService.getProducts().pipe((0,a.b)(()=>{this.loading=!1})).subscribe({next:e=>{this.products=e},error:()=>{this.router.navigate(["/"]).then()}})}showSearchResult(e,i){this.products=[];for(let u in e)this.products.push(e[u]);this.productsTitleElement&&(this.productsTitleElement.innerText=this.products.length>0?`\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u043f\u043e\u0438\u0441\u043a\u0430 \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 "${i}"`:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e")}ngOnDestroy(){this.subscriptionProducts?.unsubscribe(),this.subscriptionSubject?.unsubscribe(),this.subscriptionSearch?.unsubscribe(),this.searchString="",this.searchService.searchString=""}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(d),t.Y36(c.F0),t.Y36(g.o))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-catalog"]],decls:6,vars:2,consts:[[1,"container","mb-4","mb-lg-5"],["id","products-title",1,"text-center","mb-4","mb-lg-5","fw-bold"],["id","products",1,"row","row-cols-1","row-cols-md-2","row-cols-xl-3","row-gap-4"],["class","col mb-4",4,"ngFor","ngForOf"],["class","popup",4,"ngIf"],[1,"col","mb-4"],[1,"card","h-100","align-items-center"],["alt","\u0422\u043e\u0432\u0430\u0440 1",1,"card-img-top","w-75",3,"src"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[1,"btn","btn-primary","w-100","hvr-grow-shadow",3,"routerLink"],[1,"popup"],["role","status",1,"spinner-border","text-primary"],[1,"visually-hidden"]],template:function(e,i){1&e&&(t.TgZ(0,"section",0)(1,"h2",1),t._uU(2,"\u041d\u0430\u0448\u0438 \u0447\u0430\u0439\u043d\u044b\u0435 \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u0438"),t.qZA(),t.TgZ(3,"div",2),t.YNc(4,v,11,8,"div",3),t.qZA(),t.YNc(5,b,4,0,"div",4),t.qZA()),2&e&&(t.xp6(4),t.Q6J("ngForOf",i.products),t.xp6(1),t.Q6J("ngIf",i.loading))},dependencies:[n.sg,n.O5,c.yS,m]}),r})()},{path:":id",component:(()=>{class r{constructor(e,i,u){this.activatedRoute=e,this.productService=i,this.router=u,this.subscriptionProduct=null,this.loading=!1,this.product={description:"",id:0,image:"",price:0,title:""}}ngOnInit(){this.activatedRoute.params.subscribe(e=>{e.id&&(this.loading=!0,this.subscriptionProduct=this.productService.getProduct(+e.id).pipe((0,a.b)(()=>{this.loading=!1})).subscribe({next:i=>{this.product=i},error:()=>{this.router.navigate(["/"]).then()}}))})}ngOnDestroy(){this.subscriptionProduct?.unsubscribe()}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(c.gz),t.Y36(d),t.Y36(c.F0))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-product"]],decls:3,vars:2,consts:[[1,"container"],["class","row",4,"ngIf"],["class","popup",4,"ngIf"],[1,"row"],[1,"col-3"],["alt","\u0422\u043e\u0432\u0430\u0440 1",1,"card-img-top","w-100",3,"src"],["routerLink","/order",1,"btn","btn-primary","w-100","hvr-grow-shadow",3,"queryParams"],[1,"col-9"],[1,"h4","text-uppercase"],[1,"fs-6"],[1,"fs-4"],[1,"popup"],["role","status",1,"spinner-border","text-primary"],[1,"visually-hidden"]],template:function(e,i){1&e&&(t.TgZ(0,"section",0),t.YNc(1,P,12,7,"div",1),t.YNc(2,Z,4,0,"div",2),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",0!==i.product.id),t.xp6(1),t.Q6J("ngIf",i.loading))},dependencies:[n.O5,c.yS]}),r})()}];let l=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[c.Bz.forChild(y),c.Bz]}),r})();var T=s(4466);let x=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[n.ez,c.Bz,l,T.m,l]}),r})()}}]);