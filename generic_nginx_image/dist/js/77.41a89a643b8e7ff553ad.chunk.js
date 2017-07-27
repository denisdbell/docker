webpackJsonp([77],{1424:function(n,t,e){"use strict";function s(){function n(n){for(var t=0,e=n;t<e.length;t++){e[t]}}var t=window.Reflect;return function(e){var s=t.getOwnMetadata("annotations",e);s&&n(s)}}t.FadeInTop=s},1707:function(n,t,e){"use strict";var s=e(0),d=e(1424),a=function(){function n(){}return n.prototype.ngOnInit=function(){},n}();a=__decorate([d.FadeInTop(),s.Component({selector:"sa-general-view",template:e(2328)}),__metadata("design:paramtypes",[])],a),t.GeneralViewComponent=a},1972:function(n,t,e){"use strict";var s=e(0),d=e(33),a=e(1707),i=[{path:"",component:a.GeneralViewComponent}],l=function(){function n(){}return n}();l=__decorate([s.NgModule({imports:[d.RouterModule.forChild(i)],exports:[d.RouterModule],providers:[]}),__metadata("design:paramtypes",[])],l),t.GeneralViewRoutingModule=l},1973:function(n,t,e){"use strict";var s=e(0),d=e(9),a=e(1972),i=e(1707),l=e(711),r=e(1413),c=function(){function n(){}return n}();c=__decorate([s.NgModule({imports:[d.CommonModule,a.GeneralViewRoutingModule,l.SmartadminLayoutModule,r.StatsModule],declarations:[i.GeneralViewComponent]}),__metadata("design:paramtypes",[])],c),t.GeneralViewModule=c},2328:function(n,t){n.exports='<div id="content">\n\n  <div class="row">\n    <sa-big-breadcrumbs [items]="[\'Other Pages\', \'Forum Layout\']" icon="picture-o" class="col-xs-12 col-sm-7 col-md-7 col-lg-4"></sa-big-breadcrumbs>\n    <sa-stats></sa-stats>\n  </div>\n  \x3c!-- end row --\x3e\n  \x3c!-- row --\x3e\n  <div class="row">\n    <div class="col-sm-12">\n      <div class="well">\n        <table class="table table-striped table-forum">\n          <thead>\n          <tr>\n            <th colspan="2">Introduction</th>\n            <th class="text-center hidden-xs hidden-sm" style="width: 100px;">Topics</th>\n            <th class="text-center hidden-xs hidden-sm" style="width: 100px;">Posts</th>\n            <th class="hidden-xs hidden-sm" style="width: 200px;">Last Post</th>\n          </tr>\n          </thead>\n          <tbody>\n          \x3c!-- TR --\x3e\n          <tr>\n            <td class="text-center" style="width: 40px;"><i class="fa fa-globe fa-2x text-muted"></i></td>\n            <td>\n              <h4><a [routerLink]="[\'../topic-view\']">\n                Hello, welcome to SmartAdmin Forum!\n              </a>\n                <small>You can introduce yourself here</small>\n              </h4>\n            </td>\n            <td class="text-center hidden-xs hidden-sm">\n              <a href="">431</a>\n            </td>\n            <td class="text-center hidden-xs hidden-sm">\n              <a href="">1342</a>\n            </td>\n            <td class="hidden-xs hidden-sm">by\n              <a href="">John Doe</a>\n              <br>\n              <small><i>January 1, 2014</i></small>\n            </td>\n          </tr>\n          \x3c!-- end TR --\x3e\n          \x3c!-- TR --\x3e\n          <tr>\n            <td class="text-center" style="width: 40px;"><i class="fa fa-microphone fa-2x text-muted"></i></td>\n            <td>\n              <h4><a [routerLink]="[\'../topic-view\']">\n                News &amp; Announcements\n              </a>\n                <small>Latest news and reports</small>\n              </h4>\n            </td>\n            <td class="text-center hidden-xs hidden-sm">\n              <a href="">431</a>\n            </td>\n            <td class="text-center hidden-xs hidden-sm">\n              <a href="">1342</a>\n            </td>\n            <td class="hidden-xs hidden-sm">by\n              <a href="">John Doe</a>\n              <br>\n              <small><i>January 1, 2014</i></small>\n            </td>\n          </tr>\n          \x3c!-- end TR --\x3e\n          \x3c!-- TR --\x3e\n          <tr>\n            <td class="text-center" style="width: 40px;"><i class="fa fa-pencil fa-2x text-muted"></i></td>\n            <td>\n              <h4><a [routerLink]="[\'../topic-view\']">\n                Forum Rules\n              </a>\n                <small>Please read carefully our forum rules before you post</small>\n              </h4>\n            </td>\n            <td class="text-center hidden-xs hidden-sm">\n              <a href="">431</a>\n            </td>\n            <td class="text-center hidden-xs hidden-sm">\n              <a href="">1342</a>\n            </td>\n            <td class="hidden-xs hidden-sm">by\n              <a href="">John Doe</a>\n              <br>\n              <small><i>January 1, 2014</i></small>\n            </td>\n          </tr>\n          \x3c!-- end TR --\x3e\n          </tbody>\n        </table>\n        <table class="table table-striped table-forum">\n          <thead>\n          <tr>\n            <th colspan="2">Projects</th>\n            <th class="text-center hidden-xs hidden-sm" style="width: 100px;">Topics</th>\n            <th class="text-center hidden-xs hidden-sm" style="width: 100px;">Posts</th>\n            <th class="hidden-xs hidden-sm" style="width: 200px;">Last Post</th>\n          </tr>\n          </thead>\n          <tbody>\n          \x3c!-- TR --\x3e\n          <tr>\n            <td class="text-center" style="width: 40px;"><i class="fa fa-table fa-2x text-muted"></i></td>\n            <td>\n              <h4><a [routerLink]="[\'../topic-view\']">\n                Business Requirement Docs\n              </a>\n                <small>Latest BRD docs</small>\n              </h4>\n            </td>\n            <td class="text-center hidden-xs hidden-sm">\n              <a href="">431</a>\n            </td>\n            <td class="text-center hidden-xs hidden-sm">\n              <a href="">1342</a>\n            </td>\n            <td class="hidden-xs hidden-sm">by\n              <a href="">John Doe</a>\n              <br>\n              <small><i>January 1, 2014</i></small>\n            </td>\n          </tr>\n          \x3c!-- end TR --\x3e\n          \x3c!-- TR --\x3e\n          <tr>\n            <td class="text-center" style="width: 40px;"><i class="fa fa-bar-chart-o fa-2x text-muted"></i></td>\n            <td>\n              <h4><a [routerLink]="[\'../topic-view\']">\n                Project Discussions\n              </a>\n                <small>Post all project related topics here</small>\n              </h4>\n            </td>\n            <td class="text-center hidden-xs hidden-sm">\n              <a href="">431</a>\n            </td>\n            <td class="text-center hidden-xs hidden-sm">\n              <a href="">1342</a>\n            </td>\n            <td class="hidden-xs hidden-sm">by\n              <a href="">John Doe</a>\n              <br>\n              <small><i>January 1, 2014</i></small>\n            </td>\n          </tr>\n          \x3c!-- end TR --\x3e\n          \x3c!-- TR --\x3e\n          <tr>\n            <td class="text-center" style="width: 40px;"><i class="fa fa-user fa-2x text-muted"></i></td>\n            <td>\n              <h4><a [routerLink]="[\'../topic-view\']">\n                Clients\n              </a>\n                <small>Client forum posts</small>\n              </h4>\n            </td>\n            <td class="text-center hidden-xs hidden-sm">\n              <a href="">431</a>\n            </td>\n            <td class="text-center hidden-xs hidden-sm">\n              <a href="">1342</a>\n            </td>\n            <td class="hidden-xs hidden-sm">by\n              <a href="">John Doe</a>\n              <br>\n              <small><i>January 1, 2014</i></small>\n            </td>\n          </tr>\n          \x3c!-- end TR --\x3e\n          \x3c!-- TR --\x3e\n          <tr>\n            <td class="text-center" style="width: 40px;"><i class="fa fa-dollar fa-2x text-muted"></i></td>\n            <td>\n              <h4><a [routerLink]="[\'../topic-view\']">\n                Budget Meetings\n              </a>\n                <small>Project budget discussions</small>\n              </h4>\n            </td>\n            <td class="text-center hidden-xs hidden-sm">\n              <a href="">431</a>\n            </td>\n            <td class="text-center hidden-xs hidden-sm">\n              <a href="">1342</a>\n            </td>\n            <td class="hidden-xs hidden-sm">by\n              <a href="">John Doe</a>\n              <br>\n              <small><i>January 1, 2014</i></small>\n            </td>\n          </tr>\n          \x3c!-- end TR --\x3e\n          </tbody>\n        </table>\n        <table class="table table-striped table-forum">\n          <thead>\n          <tr>\n            <th colspan="2">Support</th>\n            <th class="text-center hidden-xs hidden-sm" style="width: 100px;">Topics</th>\n            <th class="text-center hidden-xs hidden-sm" style="width: 100px;">Posts</th>\n            <th class="hidden-xs hidden-sm" style="width: 200px;">Last Post</th>\n          </tr>\n          </thead>\n          <tbody>\n          \x3c!-- TR --\x3e\n          <tr>\n            <td class="text-center" style="width: 40px;"><i class="fa fa-book fa-2x text-muted"></i></td>\n            <td>\n              <h4><a [routerLink]="[\'../topic-view\']">\n                How to...\n              </a>\n                <small>Maecenas nec odio et</small>\n              </h4>\n            </td>\n            <td class="text-center hidden-xs hidden-sm">\n              <a href="">431</a>\n            </td>\n            <td class="text-center hidden-xs hidden-sm">\n              <a href="">1342</a>\n            </td>\n            <td class="hidden-xs hidden-sm">by\n              <a href="">John Doe</a>\n              <br>\n              <small><i>January 1, 2014</i></small>\n            </td>\n          </tr>\n          \x3c!-- end TR --\x3e\n          \x3c!-- TR --\x3e\n          <tr>\n            <td class="text-center" style="width: 40px;"><i class="fa fa-question-circle fa-2x text-muted"></i></td>\n            <td>\n              <h4><a [routerLink]="[\'../topic-view\']">\n                Questions and FAQs\n              </a>\n                <small>Luctus pulvinar hendrerit id lorem</small>\n              </h4>\n            </td>\n            <td class="text-center hidden-xs hidden-sm">\n              <a href="">431</a>\n            </td>\n            <td class="text-center hidden-xs hidden-sm">\n              <a href="">1342</a>\n            </td>\n            <td class="hidden-xs hidden-sm">by\n              <a href="">John Doe</a>\n              <br>\n              <small><i>January 1, 2014</i></small>\n            </td>\n          </tr>\n          \x3c!-- end TR --\x3e\n          \x3c!-- TR --\x3e\n          <tr>\n            <td class="text-center" style="width: 40px;"><i class="fa fa-user-md fa-2x text-muted"></i></td>\n            <td>\n              <h4><a [routerLink]="[\'../topic-view\']">\n                User Guideline\n              </a>\n                <small>Cras dapibus vivamus elementum semper nisi</small>\n              </h4>\n            </td>\n            <td class="text-center hidden-xs hidden-sm">\n              <a href="">431</a>\n            </td>\n            <td class="text-center hidden-xs hidden-sm">\n              <a href="">1342</a>\n            </td>\n            <td class="hidden-xs hidden-sm">by\n              <a href="">John Doe</a>\n              <br>\n              <small><i>January 1, 2014</i></small>\n            </td>\n          </tr>\n          \x3c!-- end TR --\x3e\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n  \x3c!-- end row --\x3e\n  \x3c!-- row --\x3e\n  <div class="row">\n    \x3c!-- a blank row to get started --\x3e\n  </div>\n  \x3c!-- end row --\x3e\n</div>\n'}});