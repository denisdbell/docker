webpackJsonp([69],{1740:function(n,a,e){"use strict";var s=e(0),i=e(157),r=e(1424),t=function(){function n(n){this.jsonApiService=n}return n.prototype.ngOnInit=function(){var n=this;this.jsonApiService.fetch("/graphs/morris.json").subscribe(function(a){return n.morrisDemoData=a})},n.prototype.barColorsDemo=function(n,a,e){if("bar"===e){return"rgb("+Math.ceil(150*n.y/8)+",0,0)"}return"#000"},n.prototype.percentageFormat=function(n){return n+"%"},n.prototype.dateFormat=function(n){return n.getMonth()+1+"/"+n.getDate()+"/"+n.getFullYear()},n}();t=__decorate([r.FadeInTop(),s.Component({selector:"sa-morris-charts",template:e(2389)}),__metadata("design:paramtypes",["function"==typeof(o=void 0!==i.JsonApiService&&i.JsonApiService)&&o||Object])],t),a.MorrisChartsComponent=t;var o},2068:function(n,a,e){"use strict";var s=e(0),i=e(9),r=e(2069),t=e(1740),o=e(1398),d=e(2218),c=function(){function n(){}return n}();c=__decorate([s.NgModule({imports:[i.CommonModule,r.morrisChartsRouting,o.SmartadminModule,d.MorrisGraphModule],declarations:[t.MorrisChartsComponent]}),__metadata("design:paramtypes",[])],c),a.MorrisChartsModule=c},2069:function(n,a,e){"use strict";var s=e(33),i=e(1740);a.morrisChartsRoutes=[{path:"",component:i.MorrisChartsComponent}],a.morrisChartsRouting=s.RouterModule.forChild(a.morrisChartsRoutes)},2217:function(n,a,e){"use strict";var s=e(0),i=function(){function n(n){this.el=n}return n.prototype.ngAfterContentInit=function(){var n=this;e.e(87).then(e.bind(null,2569)).then(function(){return e.e(99).then(e.bind(null,2295))}).then(function(){switch(a.element=n.el.nativeElement.children[0],a.data=n.data,n.type){case"area":Morris.Area(a);break;case"bar":Morris.Bar(a);break;case"line":Morris.Line(a);break;case"donut":Morris.Donut(a)}});var a=this.options||{}},n}();__decorate([s.Input(),__metadata("design:type",Object)],i.prototype,"data",void 0),__decorate([s.Input(),__metadata("design:type",Object)],i.prototype,"options",void 0),__decorate([s.Input(),__metadata("design:type",String)],i.prototype,"type",void 0),i=__decorate([s.Component({selector:"sa-morris-graph",template:'\n     <div class="chart no-padding" ></div>\n  ',styles:[]}),__metadata("design:paramtypes",["function"==typeof(r=void 0!==s.ElementRef&&s.ElementRef)&&r||Object])],i),a.MorrisGraphComponent=i;var r},2218:function(n,a,e){"use strict";var s=e(0),i=e(9),r=e(2217),t=function(){function n(){}return n}();t=__decorate([s.NgModule({imports:[i.CommonModule],declarations:[r.MorrisGraphComponent],exports:[r.MorrisGraphComponent]}),__metadata("design:paramtypes",[])],t),a.MorrisGraphModule=t},2389:function(n,a){n.exports='<div id="content">\n  <div class="row">\n    <sa-big-breadcrumbs icon="bar-chart-o" [items]="[\'Graphs\', \'Morris Charts\']" class="col-xs-12 col-sm-7 col-md-7 col-lg-4"></sa-big-breadcrumbs>\n    <sa-stats></sa-stats>\n  </div>\n  <sa-widgets-grid>\n    <div class="row" *ngIf="morrisDemoData">\n\n      <article class="col-sm-12 col-md-12 col-lg-12">\n        <sa-widget editbutton={false}>\n          <header>\n            <span class="widget-icon"> <i class="fa fa-bar-chart-o"></i> </span>\n            <h2>Sales Graphs</h2>\n          </header>\n          <div>\n            <div class="widget-body no-padding">\n              <sa-morris-graph [data]="morrisDemoData.sales"\n                               type="area"\n                               [options]="{\n                              xkey: \'period\',\n                              ykeys: [\'iphone\', \'ipad\', \'itouch\'],\n                              labels: [\'iPhone\', \'iPad\', \'iPod Touch\'],\n                              pointSize: [2],\n                              hideHover: \'auto\'\n                           }"\n              ></sa-morris-graph>\n            </div>\n          </div>\n        </sa-widget>\n\n      </article>\n\n\n      <article class="col-xs-12 col-sm-6">\n\n        <sa-widget editbutton={false}>\n          <header>\n            <span class="widget-icon"> <i class="fa fa-bar-chart-o"></i> </span>\n\n            <h2>Area Graph</h2>\n          </header>\n\n          <div>\n            <div class="widget-body no-padding">\n              <sa-morris-graph [data]="morrisDemoData[\'area-demo\']"\n                               type="area"\n                               [options]="{\n                              xkey: \'x\',\n                              ykeys: [\'y\', \'z\'],\n                              labels: [\'Y\', \'Z\']\n\n              }"></sa-morris-graph>\n            </div>\n          </div>\n        </sa-widget>\n\n      </article>\n\n\n      <article class="col-xs-12 col-sm-6">\n\n        <sa-widget editbutton={false}>\n          <header>\n            <span class="widget-icon"> <i class="fa fa-bar-chart-o"></i> </span>\n\n            <h2>Bar Graph</h2>\n          </header>\n\n          <div>\n            <div class="widget-body no-padding">\n              <sa-morris-graph [data]="morrisDemoData[\'bar-demo\']"\n                               type="bar"\n                               [options]="{\n                              xkey: \'x\',\n                              ykeys: \'y\',\n                              labels: \'Y\',\n                              barColors: barColorsDemo\n\n              }"></sa-morris-graph>\n\n            </div>\n          </div>\n        </sa-widget>\n\n      </article>\n\n\n      <article class="col-xs-12 col-sm-6">\n\n        <sa-widget editbutton={false}>\n          <header>\n            <span class="widget-icon"> <i class="fa fa-bar-chart-o"></i> </span>\n\n            <h2>Normal Bar Graph</h2>\n          </header>\n\n          <div>\n            <div class="widget-body no-padding">\n\n              <sa-morris-graph [data]="morrisDemoData[\'normal-bar-demo\']"\n                               type="bar"\n                               [options]="{\n                              xkey: \'x\',\n                              ykeys: [\'y\', \'z\', \'a\'],\n                              labels: [\'Y\', \'Z\', \'A\']\n\n              }"></sa-morris-graph>\n\n\n            </div>\n          </div>\n        </sa-widget>\n\n      </article>\n\n\n      <article class="col-xs-12 col-sm-6">\n\n        <sa-widget editbutton={false}>\n          <header>\n            <span class="widget-icon"> <i class="fa fa-bar-chart-o"></i> </span>\n\n            <h2>Stacked Bar Graph</h2>\n          </header>\n          <div>\n            <div class="widget-body no-padding">\n\n              <sa-morris-graph [data]="morrisDemoData[\'stacked-bar-demo\']"\n                               type="bar"\n                               [options]="{\n                              xkey: \'x\',\n                              ykeys: [\'y\', \'z\', \'a\'],\n                              labels: [\'Y\', \'Z\', \'A\'],\n                              staked: true\n\n              }"></sa-morris-graph>\n\n            </div>\n          </div>\n        </sa-widget>\n\n      </article>\n\n\n      <article class="col-xs-12 col-sm-6">\n\n        <sa-widget editbutton={false}>\n          <header>\n            <span class="widget-icon"> <i class="fa fa-bar-chart-o"></i> </span>\n\n            <h2>Year Graph</h2>\n          </header>\n\n          <div>\n            <div class="widget-body no-padding">\n              <sa-morris-graph [data]="morrisDemoData[\'line-year-demo\']"\n                               type="line"\n                               [options]="{\n                              xkey: \'period\',\n                              ykeys: [\'licensed\', \'sorned\'],\n                              labels: [\'Licensed\', \'SORN\']\n              }"></sa-morris-graph>\n\n            </div>\n          </div>\n        </sa-widget>\n\n      </article>\n\n      <article class="col-xs-12 col-sm-6">\n\n        <sa-widget editbutton={false}>\n          <header>\n            <span class="widget-icon"> <i class="fa fa-bar-chart-o"></i> </span>\n\n            <h2>Donut Graph</h2>\n          </header>\n\n          <div>\n            <div class="widget-body no-padding">\n              <sa-morris-graph [data]="morrisDemoData[\'donut-demo\']"\n                               type="donut"\n                               [options]="{\n                              formater: percentageFormat\n              }"></sa-morris-graph>\n\n            </div>\n          </div>\n        </sa-widget>\n\n      </article>\n\n      <article class="col-xs-12 col-sm-6">\n\n        <sa-widget editbutton={false}>\n          <header>\n            <span class="widget-icon"> <i class="fa fa-bar-chart-o"></i> </span>\n\n            <h2>Time Graph</h2>\n          </header>\n\n          <div>\n            <div class="widget-body no-padding">\n\n              <sa-morris-graph [data]="morrisDemoData[\'line-time-demo\']"\n                               type="line"\n                               [options]="{\n                              xkey: \'period\',\n                              ykeys: [\'licensed\', \'sorned\'],\n                              labels: [\'Licensed\', \'SORN\'],\n                              events: [\'2011-04\', \'2011-08\']\n              }"></sa-morris-graph>\n\n            </div>\n          </div>\n        </sa-widget>\n\n      </article>\n\n      <article class="col-xs-12 col-sm-6">\n\n        <sa-widget editbutton={false}>\n          <header>\n            <span class="widget-icon"> <i class="fa fa-bar-chart-o"></i> </span>\n\n            <h2>Line Graph A</h2>\n          </header>\n\n          <div>\n            <div class="widget-body no-padding">\n              <sa-morris-graph [data]="morrisDemoData[\'line-graph-a-demo\']"\n                               type="line"\n                               [options]="{\n                              xkey: \'period\',\n                              ykeys: [\'a\'],\n                              labels: [\'Series A\'],\n                              units: \'%\'\n              }"></sa-morris-graph>\n\n            </div>\n          </div>\n        </sa-widget>\n\n      </article>\n\n      <article class="col-xs-12 col-sm-6">\n\n        <sa-widget editbutton={false}>\n          <header>\n            <span class="widget-icon"> <i class="fa fa-bar-chart-o"></i> </span>\n\n            <h2>Line Graph B</h2>\n          </header>\n\n          <div>\n            <div class="widget-body no-padding">\n              <sa-morris-graph [data]="morrisDemoData[\'line-graph-b-demo\']"\n                               type="line"\n                               [options]="{\n                              xkey: \'period\',\n                              ykeys: [\'licensed\', \'sorned\', \'other\'],\n                              labels: [\'Licensed\', \'SORN\', \'Other\'],\n                              xLabels: \'day\',\n                              xLabelFormat: dateFormat\n              }"></sa-morris-graph>\n            </div>\n          </div>\n        </sa-widget>\n\n      </article>\n\n      <article class="col-xs-12 col-sm-6">\n\n        <sa-widget editbutton={false}>\n          <header>\n            <span class="widget-icon"> <i class="fa fa-bar-chart-o"></i> </span>\n\n            <h2>No Grid Graph</h2>\n          </header>\n\n          <div>\n            <div class="widget-body no-padding">\n              <sa-morris-graph [data]="morrisDemoData[\'no-grid-demo\']"\n                               type="line"\n                               [options]="{\n                              xkey: \'period\',\n                              ykeys: [\'licensed\', \'sorned\'],\n                              labels: [\'Licensed\', \'SORN\'],\n                              grid: false\n              }"></sa-morris-graph>\n\n\n            </div>\n          </div>\n        </sa-widget>\n\n      </article>\n\n      <article class="col-xs-12 col-sm-12">\n\n        <sa-widget editbutton={false}>\n          <header>\n            <span class="widget-icon"> <i class="fa fa-bar-chart-o"></i> </span>\n\n            <h2>Line Graph C</h2>\n          </header>\n\n          <div>\n            <div class="widget-body no-padding">\n              <sa-morris-graph [data]="morrisDemoData[\'line-graph-c-demo\']"\n                               type="line"\n                               [options]="{\n                              xkey: \'elapsed\',\n                              ykeys: [\'value\'],\n                              labels: [\'value\'],\n                              parseTime: false\n              }"></sa-morris-graph>\n            </div>\n          </div>\n        </sa-widget>\n\n      </article>\n\n\n    </div>\n  </sa-widgets-grid>\n</div>\n'}});