"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[186],{26:function(n,e,r){r.d(e,{Df:function(){return s},TP:function(){return f},XT:function(){return o},tx:function(){return v},zv:function(){return p}});var t=r(861),u=r(757),a=r.n(u),c=r(340);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i={headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwM2ExZGQxNDMyZGY5YjY4NmQzMDYzNmIxYmZlZGVmNiIsInN1YiI6IjY1NzU4ZTQ4YzYwMDZkMDExZjBkOTRhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EugJ-N1349adCMLGTH7afk_3FlznGp4An5rFeQfUHL4"},params:{language:"en-US"}},s=function(){var n=(0,t.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"trending/movie/day",n.next=3,c.Z.get("trending/movie/day",i);case 3:return e=n.sent,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,t.Z)(a().mark((function n(e){var r,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="search/movie?query=".concat(e,"&include_adult=false"),n.next=3,c.Z.get(r,i);case 3:return t=n.sent,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(a().mark((function n(e){var r,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="movie/".concat(e),n.next=3,c.Z.get(r,i);case 3:return t=n.sent,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(a().mark((function n(e){var r,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="movie/".concat(e,"/credits"),n.next=3,c.Z.get(r,i);case 3:return t=n.sent,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,t.Z)(a().mark((function n(e){var r,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="movie/".concat(e,"/reviews?page=1"),n.next=3,c.Z.get(r,i);case 3:return t=n.sent,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},186:function(n,e,r){r.r(e);var t=r(861),u=r(439),a=r(757),c=r.n(a),i=r(26),s=r(791),o=r(689),f=r(184);e.default=function(){var n=(0,o.UO)().id,e=(0,s.useState)([]),r=(0,u.Z)(e,2),a=r[0],p=r[1],v=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,i.tx)(e);case 3:r=n.sent,p(r.data.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}();return(0,s.useEffect)((function(){v(n)}),[n]),(0,f.jsx)("div",{children:(0,f.jsx)("ul",{children:0===a.length?(0,f.jsx)("div",{children:"We don't have any reviews for this movie."}):a.map((function(n){return(0,f.jsxs)("li",{children:[(0,f.jsxs)("strong",{children:["Author: ",n.author]}),(0,f.jsx)("p",{children:n.content})]},n.id)}))})})}}}]);
//# sourceMappingURL=186.f0a76fbc.chunk.js.map