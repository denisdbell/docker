webpackJsonp([22],{1331:function(t,n,e){"use strict";var o=e(0),r=e(9),u=e(1974),i=e(1973),l=function(){function t(){}return t}();l=__decorate([o.NgModule({imports:[r.CommonModule,u.routing],declarations:[i.AuthComponent]}),__metadata("design:paramtypes",[])],l),n.AuthModule=l},1973:function(t,n,e){"use strict";var o=e(0),r=function(){function t(){}return t.prototype.ngOnInit=function(){},t}();r=__decorate([o.Component({selector:"app-auth",template:"<router-outlet></router-outlet>"}),__metadata("design:paramtypes",[])],r),n.AuthComponent=r},1974:function(t,n,e){"use strict";var o=e(33);n.routes=[{path:"login",loadChildren:function(){return e.e(35).then(e.bind(null,1970)).then(function(t){return t.LoginModule})}},{path:"register",loadChildren:function(){return e.e(33).then(e.bind(null,1972)).then(function(t){return t.RegisterModule})}},{path:"forgot-password",loadChildren:function(){return e.e(78).then(e.bind(null,1966)).then(function(t){return t.ForgotModule})}},{path:"locked",loadChildren:function(){return e.e(66).then(e.bind(null,1968)).then(function(t){return t.LockedModule})}}],n.routing=o.RouterModule.forChild(n.routes)}});