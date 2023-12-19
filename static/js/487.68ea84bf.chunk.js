"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[487],{26:function(e,n,r){r.d(n,{Df:function(){return o},TP:function(){return l},XT:function(){return u},tx:function(){return v},zv:function(){return d}});var t=r(861),i=r(757),a=r.n(i),s=r(340);s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c={headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwM2ExZGQxNDMyZGY5YjY4NmQzMDYzNmIxYmZlZGVmNiIsInN1YiI6IjY1NzU4ZTQ4YzYwMDZkMDExZjBkOTRhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EugJ-N1349adCMLGTH7afk_3FlznGp4An5rFeQfUHL4"}},o=function(){var e=(0,t.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"trending/movie/day?language=en-US",e.next=3,s.Z.get("trending/movie/day?language=en-US",c);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,t.Z)(a().mark((function e(n){var r,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="search/movie?query=".concat(n,"&include_adult=false&language=en-US"),e.next=3,s.Z.get(r,c);case 3:return t=e.sent,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(a().mark((function e(n){var r,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="movie/".concat(n,"?language=en-US"),e.next=3,s.Z.get(r,c);case 3:return t=e.sent,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(a().mark((function e(n){var r,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="movie/".concat(n,"/credits?language=en-US"),e.next=3,s.Z.get(r,c);case 3:return t=e.sent,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,t.Z)(a().mark((function e(n){var r,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="movie/".concat(n,"/reviews?language=en-US&page=1"),e.next=3,s.Z.get(r,c);case 3:return t=e.sent,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},487:function(e,n,r){r.r(n),r.d(n,{default:function(){return j}});var t=r(861),i=r(439),a=r(757),s=r.n(a),c=r(26),o=r(791),u=r(689),l=r(87),d=r(128),v="ChosenMovie_movieContainer__HQ5Sw",p="ChosenMovie_moviePoster__7jrmJ",h=r(184),f=function(e,n){return(0,h.jsx)(h.Fragment,{children:void 0!==e.movie.id&&(0,h.jsxs)("div",{className:v,children:[(0,h.jsx)("div",{children:e.movie.poster_path?(0,h.jsx)("img",{className:p,src:"https://image.tmdb.org/t/p/w300".concat(e.movie.poster_path),alt:e.movie.title}):(0,h.jsx)("p",{children:"No poster provided."})}),(0,h.jsxs)("div",{children:[(0,h.jsxs)("h2",{children:[e.movie.title," (",e.movie.release_date.split("-")[0],")"]}),(0,h.jsxs)("p",{children:["User Score: ",Math.round(10*e.movie.vote_average),"%"]}),(0,h.jsx)("h3",{children:"Overview"}),(0,h.jsx)("p",{children:e.movie.overview}),(0,h.jsx)("h4",{children:"Genres"}),(0,h.jsx)("p",{children:e.genres.length&&e.genres.map((function(e){return e.name+" "}))})]})]})})},m="MovieInfo_additionalInfContainer__vGnpz",x=function(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:m,children:[(0,h.jsx)("p",{children:"Additional information"}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)(l.rU,{to:"cast",children:"Cast"})},"cast"),(0,h.jsx)("li",{children:(0,h.jsx)(l.rU,{to:"reviews",children:"Reviews"})},"reviews")]})]}),(0,h.jsx)("div",{children:(0,h.jsx)(o.Suspense,{fallback:(0,h.jsx)("div",{children:"Loading information..."}),children:(0,h.jsx)(u.j3,{})})})]})},g="MovieDetails_backLink__dzd-p",j=function(){var e,n,r=(0,u.UO)().id,a=(0,o.useState)({}),v=(0,i.Z)(a,2),p=v[0],m=v[1],j=(0,o.useState)([]),w=(0,i.Z)(j,2),_=w[0],Z=w[1],k=null!==(e=null===(n=(0,u.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/",b=function(){var e=(0,t.Z)(s().mark((function e(n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,c.TP)(n);case 3:r=e.sent,m(r.data),Z(r.data.genres),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){b(r)}),[r]),(0,h.jsxs)("main",{children:[(0,h.jsxs)(l.rU,{className:g,to:k,children:[(0,h.jsx)(d.jTe,{size:"12"})," Go back"]}),(0,h.jsx)(f,{movie:p,genres:_}),(0,h.jsx)(x,{})]})}}}]);
//# sourceMappingURL=487.68ea84bf.chunk.js.map