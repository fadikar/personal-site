(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[7],{175:function(t,e,i){"use strict";i.r(e);var n=i(0),s=(i(1),i(5)),a=i(21),r=i(73),o=i.n(r),c=function(t){var e=t.data;return Object(n.jsx)("div",{className:"cell-container",children:Object(n.jsxs)("article",{className:"mini-post",children:[Object(n.jsxs)("header",{children:[Object(n.jsx)("h3",{children:Object(n.jsx)("a",{href:e.link,children:e.title})}),Object(n.jsx)("time",{className:"published",children:o()(e.date).format("MMMM, YYYY")})]}),Object(n.jsx)("a",{href:e.link,className:"image",children:Object(n.jsx)("img",{src:"".concat("").concat(e.image),alt:e.title})}),Object(n.jsx)("div",{className:"description",children:Object(n.jsx)("p",{children:e.desc})})]})})},u=[{title:"Machine learning synthetic spectra for probabilistic redshift estimation: SYTH-Z ",subtitle:"Photometric redshift estimation",link:"https://arxiv.org/abs/2111.12118",image:"/images/projects/fig1c-1.png",date:"2021-11-23",desc:"Photometric redshift estimation algorithms are often based on representative data from observational campaigns. Data-driven methods of this type are subject to a number of potential deficiencies, such as sample bias and incompleteness. Motivated by these considerations, we propose using physically motivated synthetic spectral energy distributions in redshift estimation."},{title:"Scalable Statistical Inference of Photometric Redshift via Data Subsampling",subtitle:"Photometric redshift estimation",link:"https://arxiv.org/abs/2103.16041v2",image:"/images/projects/hyperrec_all_2d.png",date:"2021-03-30",desc:"We develop a data-driven statistical modeling framework that combines the uncertainties from an ensemble of statistical models learned on smaller subsets of data carefully chosen to account for imbalances in the input space. "},{title:"Forecasting influenza activity using machine-learned mobility map",subtitle:"Flu forecasting",link:"https://www.nature.com/articles/s41467-021-21018-5",image:"/images/projects/nature_amm.png",date:"2021-02-09",desc:"In this work, we focus on a machine-learned anonymized mobility map (AMM) aggregated over hundreds of millions of smartphones and evaluate its utility in forecasting epidemics. We factor AMM into a metapopulation model to retrospectively forecast influenza in the USA and Australia"},{title:"Stochastic agent-based model calibration for Ebola",subtitle:"Ebola challenge",link:"https://epubs.siam.org/doi/abs/10.1137/17M1161233",image:"/images/projects/holdout.png",date:"2018-12-13",desc:"We develop a strategy to emulate and calibrate a stochastic agent-based model based on quantile kriging inside a Bayesian framework, where the agent-based model simulates an Ebola epidemic in West Africa."},{title:"Optimizing spatial allocation of seasonal influenza vaccine under temporal constraints",subtitle:"Vaccination strategy",link:"https://doi.org/10.1371/journal.pcbi.1007111",image:"/images/projects/plos_vaccine.png",date:"2019-09-16",desc:"Annual vaccination campaigns continue to be one of the prime measures which help alleviate the burden of seasonal influenza. Due to production and logistic constraints, there is a need for prioritization policies associated with vaccine deployment. While there is general consensus on age-based or risk-based prioritization, spatial optimization of vaccine allocation has not yet been explored in sufficient detail. In order to do this, we develop a mechanistic model of influenza spread across the United States, and propose a greedy mechanism for spatial optimization. We test the methodology on different realistic scenarios with temporal constraints on vaccine production."}];e.default=function(){return Object(n.jsx)(a.a,{title:"Projects",description:"Learn about Arindam Fadikar's projects.",children:Object(n.jsxs)("article",{className:"post",id:"projects",children:[Object(n.jsx)("header",{children:Object(n.jsxs)("div",{className:"title",children:[Object(n.jsx)("h2",{"data-testid":"heading",children:Object(n.jsx)(s.b,{to:"/projects",children:"Projects"})}),Object(n.jsx)("p",{children:"A selection of projects that resulted in publications."})]})}),u.map((function(t){return Object(n.jsx)(c,{data:t},t.title)}))]})})}},73:function(t,e,i){t.exports=function(){"use strict";var t="millisecond",e="second",i="minute",n="hour",s="day",a="week",r="month",o="quarter",c="year",u="date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},f=function(t,e,i){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(i)+t},m={s:f,z:function(t){var e=-t.utcOffset(),i=Math.abs(e),n=Math.floor(i/60),s=i%60;return(e<=0?"+":"-")+f(n,2,"0")+":"+f(s,2,"0")},m:function t(e,i){if(e.date()<i.date())return-t(i,e);var n=12*(i.year()-e.year())+(i.month()-e.month()),s=e.clone().add(n,r),a=i-s<0,o=e.clone().add(n+(a?-1:1),r);return+(-(n+(i-s)/(a?s-o:o-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(l){return{M:r,y:c,w:a,d:s,D:u,h:n,m:i,s:e,ms:t,Q:o}[l]||String(l||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},p="en",g={};g[p]=h;var $=function(t){return t instanceof M},b=function(t,e,i){var n;if(!t)return p;if("string"==typeof t)g[t]&&(n=t),e&&(g[t]=e,n=t);else{var s=t.name;g[s]=t,n=s}return!i&&n&&(p=n),n||!i&&p},v=function(t,e){if($(t))return t.clone();var i="object"==typeof e?e:{};return i.date=t,i.args=arguments,new M(i)},y=m;y.l=b,y.i=$,y.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var M=function(){function h(t){this.$L=b(t.locale,null,!0),this.parse(t)}var f=h.prototype;return f.parse=function(t){this.$d=function(t){var e=t.date,i=t.utc;if(null===e)return new Date(NaN);if(y.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(l);if(n){var s=n[2]-1||0,a=(n[7]||"0").substring(0,3);return i?new Date(Date.UTC(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)):new Date(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return y},f.isValid=function(){return!("Invalid Date"===this.$d.toString())},f.isSame=function(t,e){var i=v(t);return this.startOf(e)<=i&&i<=this.endOf(e)},f.isAfter=function(t,e){return v(t)<this.startOf(e)},f.isBefore=function(t,e){return this.endOf(e)<v(t)},f.$g=function(t,e,i){return y.u(t)?this[e]:this.set(i,t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,o){var l=this,d=!!y.u(o)||o,h=y.p(t),f=function(t,e){var i=y.w(l.$u?Date.UTC(l.$y,e,t):new Date(l.$y,e,t),l);return d?i:i.endOf(s)},m=function(t,e){return y.w(l.toDate()[t].apply(l.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(e)),l)},p=this.$W,g=this.$M,$=this.$D,b="set"+(this.$u?"UTC":"");switch(h){case c:return d?f(1,0):f(31,11);case r:return d?f(1,g):f(0,g+1);case a:var v=this.$locale().weekStart||0,M=(p<v?p+7:p)-v;return f(d?$-M:$+(6-M),g);case s:case u:return m(b+"Hours",0);case n:return m(b+"Minutes",1);case i:return m(b+"Seconds",2);case e:return m(b+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(a,o){var l,d=y.p(a),h="set"+(this.$u?"UTC":""),f=(l={},l[s]=h+"Date",l[u]=h+"Date",l[r]=h+"Month",l[c]=h+"FullYear",l[n]=h+"Hours",l[i]=h+"Minutes",l[e]=h+"Seconds",l[t]=h+"Milliseconds",l)[d],m=d===s?this.$D+(o-this.$W):o;if(d===r||d===c){var p=this.clone().set(u,1);p.$d[f](m),p.init(),this.$d=p.set(u,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},f.set=function(t,e){return this.clone().$set(t,e)},f.get=function(t){return this[y.p(t)]()},f.add=function(t,o){var u,l=this;t=Number(t);var d=y.p(o),h=function(e){var i=v(l);return y.w(i.date(i.date()+Math.round(e*t)),l)};if(d===r)return this.set(r,this.$M+t);if(d===c)return this.set(c,this.$y+t);if(d===s)return h(1);if(d===a)return h(7);var f=(u={},u[i]=6e4,u[n]=36e5,u[e]=1e3,u)[d]||1,m=this.$d.getTime()+t*f;return y.w(m,this)},f.subtract=function(t,e){return this.add(-1*t,e)},f.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var i=t||"YYYY-MM-DDTHH:mm:ssZ",n=y.z(this),s=this.$locale(),a=this.$H,r=this.$m,o=this.$M,c=s.weekdays,u=s.months,l=function(t,n,s,a){return t&&(t[n]||t(e,i))||s[n].substr(0,a)},h=function(t){return y.s(a%12||12,t,"0")},f=s.meridiem||function(t,e,i){var n=t<12?"AM":"PM";return i?n.toLowerCase():n},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:y.s(o+1,2,"0"),MMM:l(s.monthsShort,o,u,3),MMMM:l(u,o),D:this.$D,DD:y.s(this.$D,2,"0"),d:String(this.$W),dd:l(s.weekdaysMin,this.$W,c,2),ddd:l(s.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(a),HH:y.s(a,2,"0"),h:h(1),hh:h(2),a:f(a,r,!0),A:f(a,r,!1),m:String(r),mm:y.s(r,2,"0"),s:String(this.$s),ss:y.s(this.$s,2,"0"),SSS:y.s(this.$ms,3,"0"),Z:n};return i.replace(d,(function(t,e){return e||m[t]||n.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(t,u,l){var d,h=y.p(u),f=v(t),m=6e4*(f.utcOffset()-this.utcOffset()),p=this-f,g=y.m(this,f);return g=(d={},d[c]=g/12,d[r]=g,d[o]=g/3,d[a]=(p-m)/6048e5,d[s]=(p-m)/864e5,d[n]=p/36e5,d[i]=p/6e4,d[e]=p/1e3,d)[h]||p,l?g:y.a(g)},f.daysInMonth=function(){return this.endOf(r).$D},f.$locale=function(){return g[this.$L]},f.locale=function(t,e){if(!t)return this.$L;var i=this.clone(),n=b(t,e,!0);return n&&(i.$L=n),i},f.clone=function(){return y.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},h}(),j=M.prototype;return v.prototype=j,[["$ms",t],["$s",e],["$m",i],["$H",n],["$W",s],["$M",r],["$y",c],["$D",u]].forEach((function(t){j[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),v.extend=function(t,e){return t.$i||(t(e,M,v),t.$i=!0),v},v.locale=b,v.isDayjs=$,v.unix=function(t){return v(1e3*t)},v.en=g[p],v.Ls=g,v.p={},v}()}}]);
//# sourceMappingURL=7.c000abcf.chunk.js.map