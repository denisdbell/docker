webpackJsonp([24],{1337:function(n,e,t){"use strict";var r=t(0),u=t(9),o=t(2065),i=function(){function n(){}return n}();i=__decorate([r.NgModule({imports:[u.CommonModule,o.routing],declarations:[]}),__metadata("design:paramtypes",[])],i),e.MiscellaneousModule=i},2065:function(n,e,t){"use strict";var r=t(33);e.routes=[{path:"",redirectTo:"blank"},{path:"blank",loadChildren:function(){return t.e(59).then(t.bind(null,2050)).then(function(n){return n.BlankModule})}},{path:"ckeditor",loadChildren:function(){return t.e(52).then(t.bind(null,2052)).then(function(n){return n.CkeditorModule})}},{path:"email-template",loadChildren:function(){return t.e(58).then(t.bind(null,2054)).then(function(n){return n.EmailTemplateModule})}},{path:"error404",loadChildren:function(){return t.e(57).then(t.bind(null,2056)).then(function(n){return n.Error404Module})}},{path:"error500",loadChildren:function(){return t.e(56).then(t.bind(null,2058)).then(function(n){return n.Error500Module})}},{path:"invoice",loadChildren:function(){return t.e(55).then(t.bind(null,2060)).then(function(n){return n.InvoiceModule})}},{path:"pricing-tables",loadChildren:function(){return t.e(54).then(t.bind(null,2062)).then(function(n){return n.PricingTablesModule})}},{path:"search",loadChildren:function(){return t.e(53).then(t.bind(null,2064)).then(function(n){return n.SearchModule})}}],e.routing=r.RouterModule.forChild(e.routes)}});