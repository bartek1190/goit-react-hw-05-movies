"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[936],{26:function(n,e,r){r.d(e,{Df:function(){return s},TP:function(){return f},XT:function(){return o},tx:function(){return l},zv:function(){return p}});var t=r(861),a=r(757),u=r.n(a),c=r(340);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i={headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwM2ExZGQxNDMyZGY5YjY4NmQzMDYzNmIxYmZlZGVmNiIsInN1YiI6IjY1NzU4ZTQ4YzYwMDZkMDExZjBkOTRhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EugJ-N1349adCMLGTH7afk_3FlznGp4An5rFeQfUHL4"}},s=function(){var n=(0,t.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"trending/movie/day?language=en-US",n.next=3,c.Z.get("trending/movie/day?language=en-US",i);case 3:return e=n.sent,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,t.Z)(u().mark((function n(e){var r,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="search/movie?query=".concat(e,"&include_adult=false&language=en-US"),n.next=3,c.Z.get(r,i);case 3:return t=n.sent,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(u().mark((function n(e){var r,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="movie/".concat(e,"?language=en-US"),n.next=3,c.Z.get(r,i);case 3:return t=n.sent,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(u().mark((function n(e){var r,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="movie/".concat(e,"/credits?language=en-US"),n.next=3,c.Z.get(r,i);case 3:return t=n.sent,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(u().mark((function n(e){var r,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="movie/".concat(e,"/reviews?language=en-US&page=1"),n.next=3,c.Z.get(r,i);case 3:return t=n.sent,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},936:function(n,e,r){r.r(e),r.d(e,{default:function(){return v}});var t=r(861),a=r(439),u=r(757),c=r.n(u),i=r(26),s=r(791),o=r(87),f="Home_container__w+u63",p="Home_movieLink__73jZE",l=r(184),v=function(){var n=(0,s.useState)([]),e=(0,a.Z)(n,2),r=e[0],u=e[1],v=function(){var n=(0,t.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,i.Df)();case 3:e=n.sent,u(e.data.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();return(0,s.useEffect)((function(){v()}),[]),(0,l.jsx)("main",{children:(0,l.jsxs)("div",{className:f,children:[(0,l.jsx)("h2",{children:"Trending today"}),(0,l.jsx)("ul",{children:r.map((function(n){return(0,l.jsx)("li",{children:(0,l.jsx)(o.rU,{className:p,to:"movies/".concat(n.id),children:n.title})},n.id)}))})]})})}}}]);
//# sourceMappingURL=936.1c0c8376.chunk.js.map