(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{RkZP:function(e,t,a){"use strict";a("pIFo");var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),o=(a("PDAf"),function(e){var t=e.url,a=e.children;return r.a.createElement(l.Link,{to:"/tags/"+t.toLowerCase(),className:"tag-link"},a)});t.a=function(e){var t,a=e.maxTags,n=e.node;return t=a?n.frontmatter.tags.slice(0,a):n.frontmatter.tags,r.a.createElement("section",{className:"article-tags"},r.a.createElement("span",{className:"tags-list-start"},"Tags:")," ",t.map((function(e){return r.a.createElement(o,{url:e.replace(/\s/g,"-")},e)})))}},yZlL:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return p}));a("SRfc"),a("Z2Ku"),a("L9s1"),a("91GP");var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),o=a("6Gk8"),c=a("Bl7J"),i=a("vrFN"),s=a("RkZP"),m=a("p3AD");var u=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,n=a.previous,u=a.next;return r.a.createElement(c.a,{location:this.props.location,title:t},r.a.createElement(i.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt}),r.a.createElement("article",null,r.a.createElement("header",null,r.a.createElement("h1",{style:{marginTop:Object(m.a)(1),marginBottom:0,fontFamily:"'Prata'"}},e.frontmatter.title),r.a.createElement("p",{style:Object.assign({},Object(m.b)(-.2),{display:"block",marginBottom:Object(m.a)(1)})},e.frontmatter.date)),r.a.createElement("section",{dangerouslySetInnerHTML:{__html:e.html}}),r.a.createElement(s.a,{node:e}),e.frontmatter.citations?r.a.createElement("div",null,r.a.createElement("div",null,"Sources:"),r.a.createElement("br",null),r.a.createElement("ol",null,e.frontmatter.citations.map((function(e){if(e.includes("http"))return r.a.createElement("li",null,r.a.createElement("cite",null,r.a.createElement("a",{href:e},e)));var t=e.match(/(.*\([\d]{4}\)\.)\s+(.*)/);return r.a.createElement("li",null,t[1]," ",r.a.createElement("cite",null,t[2]))})))):"",r.a.createElement("hr",{style:{marginBottom:Object(m.a)(1)}}),r.a.createElement("footer",null,r.a.createElement(o.a,null))),r.a.createElement("nav",null,r.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},r.a.createElement("li",null,n&&r.a.createElement(l.Link,{to:n.fields.slug,rel:"prev"},"← ",n.frontmatter.title)),r.a.createElement("li",null,u&&r.a.createElement(l.Link,{to:u.fields.slug,rel:"next"},u.frontmatter.title," →")))))},n}(r.a.Component);t.default=u;var p="2981514392"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-cb75d09e01c1ed2e84b9.js.map