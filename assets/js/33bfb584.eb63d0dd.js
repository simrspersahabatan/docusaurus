"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[57998],{15995:(e,n,r)=>{r.d(n,{A:()=>l});var t=r(62540);r(63696);var s=r(11750);function l({children:e,hidden:n,className:r}){return(0,t.jsx)("div",{role:"tabpanel",className:(0,s.A)("tabItem_pnkT",r),hidden:n,children:e})}},27446:(e,n,r)=>{r.d(n,{A:()=>v});var t=r(62540),s=r(63696),l=r(11750),i=r(7846),a=r(49519),o=r(96439),u=r(19739),c=r(66904),d=r(79244);function p(e){var n,r;return null!==(r=null===(n=s.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,s.isValidElement)(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))||void 0===n?void 0:n.filter(Boolean))&&void 0!==r?r:[]}function h({value:e,tabValues:n}){return n.some(n=>n.value===e)}var m=r(10709);function f(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.forEach(function(n){var t;t=r[n],n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t})}return e}function g(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r.push.apply(r,t)}return r})(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}),e}function b({className:e,block:n,selectedValue:r,selectValue:s,tabValues:a}){let o=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.a_)(),c=e=>{let n=e.currentTarget,t=a[o.indexOf(n)].value;t!==r&&(u(n),s(t))},d=e=>{var n,r;let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{let r=o.indexOf(e.currentTarget)+1;t=null!==(n=o[r])&&void 0!==n?n:o[0];break}case"ArrowLeft":{let n=o.indexOf(e.currentTarget)-1;t=null!==(r=o[n])&&void 0!==r?r:o[o.length-1]}}null==t||t.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},e),children:a.map(({value:e,label:n,attributes:s})=>(0,t.jsx)("li",g(f({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:e=>o.push(e),onKeyDown:d,onClick:c},s),{className:(0,l.A)("tabs__item","tabItem_AQgk",null==s?void 0:s.className,{"tabs__item--active":r===e}),children:null!=n?n:e}),e))})}function j({lazy:e,children:n,selectedValue:r}){let i=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){let e=i.find(e=>e.props.value===r);return e?(0,s.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:i.map((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r}))})}function x(e){let n=function(e){let{defaultValue:n,queryString:r=!1,groupId:t}=e,l=function(e){let{values:n,children:r}=e;return(0,s.useMemo)(()=>{let e=null!=n?n:p(r).map(({props:{value:e,label:n,attributes:r,default:t}})=>({value:e,label:n,attributes:r,default:t}));return!function(e){let n=(0,c.XI)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,r])}(e),[i,m]=(0,s.useState)(()=>(function({defaultValue:e,tabValues:n}){var r;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!h({value:e,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}let t=null!==(r=n.find(e=>e.default))&&void 0!==r?r:n[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:n,tabValues:l})),[f,g]=function({queryString:e=!1,groupId:n}){let r=(0,a.W6)(),t=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n});return[(0,u.aZ)(t),(0,s.useCallback)(e=>{var n,s;if(!t)return;let l=new URLSearchParams(r.location.search);l.set(t,e),r.replace((n=function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.forEach(function(n){var t;t=r[n],n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t})}return e}({},r.location),s=s={search:l.toString()},Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):(function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r.push.apply(r,t)}return r})(Object(s)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(s,e))}),n))},[t,r])]}({queryString:r,groupId:t}),[b,j]=function({groupId:e}){let n=e?`docusaurus.tab.${e}`:null,[r,t]=(0,d.Dv)(n);return[r,(0,s.useCallback)(e=>{n&&t.set(e)},[n,t])]}({groupId:t}),x=(()=>{let e=null!=f?f:b;return h({value:e,tabValues:l})?e:null})();return(0,o.A)(()=>{x&&m(x)},[x]),{selectedValue:i,selectValue:(0,s.useCallback)(e=>{if(!h({value:e,tabValues:l}))throw Error(`Can't select invalid tab value=${e}`);m(e),g(e),j(e)},[g,j,l]),tabValues:l}}(e);return(0,t.jsxs)("div",{className:(0,l.A)("tabs-container","tabList_Qoir"),children:[(0,t.jsx)(b,f({},n,e)),(0,t.jsx)(j,f({},n,e))]})}function v(e){let n=(0,m.A)();return(0,t.jsx)(x,g(f({},e),{children:p(e.children)}),String(n))}},69141:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>u,toc:()=>d});var t=r(62540),s=r(43023),l=r(27446),i=r(15995);let a={sidebar_position:1,slug:"/api/misc/@docusaurus/eslint-plugin"},o="\u{1F4E6} eslint-plugin",u={id:"api/misc/eslint-plugin/README",title:"\u{1F4E6} eslint-plugin",description:"ESLint is a tool that statically analyzes your code and reports problems or suggests best practices through editor hints and command line. Docusaurus provides an ESLint plugin to enforce best Docusaurus practices.",source:"@site/docs/api/misc/eslint-plugin/README.mdx",sourceDirName:"api/misc/eslint-plugin",slug:"/api/misc/@docusaurus/eslint-plugin",permalink:"/docs/api/misc/@docusaurus/eslint-plugin",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/misc/eslint-plugin/README.mdx",tags:[],version:"current",lastUpdatedBy:"ozaki",lastUpdatedAt:1724949723e3,sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/api/misc/@docusaurus/eslint-plugin"},sidebar:"api",previous:{title:"\u{1F4E6} create-docusaurus",permalink:"/docs/api/misc/create-docusaurus"},next:{title:"no-html-links",permalink:"/docs/api/misc/@docusaurus/eslint-plugin/no-html-links"}},c={},d=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Recommended config",id:"recommended-config",level:3},{value:"Manual config",id:"manual-config",level:3},{value:"Supported configs",id:"supported-configs",level:2},{value:"Supported rules",id:"supported-rules",level:2},{value:"Example configuration",id:"example-configuration",level:2}];function p(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"-eslint-plugin",children:"\u{1F4E6} eslint-plugin"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://eslint.org/",children:"ESLint"})," is a tool that statically analyzes your code and reports problems or suggests best practices through editor hints and command line. Docusaurus provides an ESLint plugin to enforce best Docusaurus practices."]}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(l.A,{groupId:"npm2yarn",children:[(0,t.jsx)(i.A,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install --save-dev @docusaurus/eslint-plugin\n"})})}),(0,t.jsx)(i.A,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn add --dev @docusaurus/eslint-plugin\n"})})}),(0,t.jsx)(i.A,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm add --save-dev @docusaurus/eslint-plugin\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.h3,{id:"recommended-config",children:"Recommended config"}),"\n",(0,t.jsxs)(n.p,{children:["Add ",(0,t.jsx)(n.code,{children:"plugin:@docusaurus/recommended"})," to the ",(0,t.jsx)(n.code,{children:"extends"})," section of your ",(0,t.jsx)(n.code,{children:".eslintrc"})," configuration file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title=".eslintrc"',children:'{\n  "extends": ["plugin:@docusaurus/recommended"]\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["This will enable the ",(0,t.jsx)(n.code,{children:"@docusaurus"})," eslint plugin and use the ",(0,t.jsx)(n.code,{children:"recommended"})," config. See ",(0,t.jsx)(n.a,{href:"#supported-rules",children:"Supported rules"})," below for a list of rules that this will enable."]}),"\n",(0,t.jsx)(n.h3,{id:"manual-config",children:"Manual config"}),"\n",(0,t.jsx)(n.p,{children:"For more fine-grained control, you can also enable the plugin manually and configure the rules you want to use directly:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title=".eslintrc"',children:'{\n  "plugins": ["@docusaurus"],\n  "rules": {\n    "@docusaurus/string-literal-i18n-messages": "error",\n    "@docusaurus/no-untranslated-text": "warn"\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"supported-configs",children:"Supported configs"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Recommended: recommended rule set for most Docusaurus sites that should be extended from."}),"\n",(0,t.jsxs)(n.li,{children:["All: ",(0,t.jsx)(n.strong,{children:"all"})," rules enabled. This will change between minor versions, so you should not use this if you want to avoid unexpected breaking changes."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"supported-rules",children:"Supported rules"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/api/misc/@docusaurus/eslint-plugin/no-untranslated-text",children:(0,t.jsx)(n.code,{children:"@docusaurus/no-untranslated-text"})})}),(0,t.jsx)(n.td,{children:"Enforce text labels in JSX to be wrapped by translate calls"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/api/misc/@docusaurus/eslint-plugin/string-literal-i18n-messages",children:(0,t.jsx)(n.code,{children:"@docusaurus/string-literal-i18n-messages"})})}),(0,t.jsx)(n.td,{children:"Enforce translate APIs to be called on plain text labels"}),(0,t.jsx)(n.td,{children:"\u2705"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/api/misc/@docusaurus/eslint-plugin/no-html-links",children:(0,t.jsx)(n.code,{children:"@docusaurus/no-html-links"})})}),(0,t.jsxs)(n.td,{children:["Ensures @docusaurus/Link is used instead of ",(0,t.jsx)(n.code,{children:"<a>"})," tags"]}),(0,t.jsx)(n.td,{children:"\u2705"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/api/misc/@docusaurus/eslint-plugin/prefer-docusaurus-heading",children:(0,t.jsx)(n.code,{children:"@docusaurus/prefer-docusaurus-heading"})})}),(0,t.jsxs)(n.td,{children:["Ensures @theme/Heading is used instead of ",(0,t.jsx)(n.code,{children:"<hn>"})," tags for headings"]}),(0,t.jsx)(n.td,{children:"\u2705"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"\u2705 = recommended"}),"\n",(0,t.jsx)(n.h2,{id:"example-configuration",children:"Example configuration"}),"\n",(0,t.jsx)(n.p,{children:"Here's an example configuration:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title=".eslintrc.js"',children:"module.exports = {\n  extends: ['plugin:@docusaurus/recommended'],\n  rules: {\n    '@docusaurus/no-untranslated-text': [\n      'warn',\n      {ignoredStrings: ['\xb7', '\u2014', '\xd7']},\n    ],\n  },\n};\n"})})]})}function h(e={}){let{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},43023:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>a});var t=r(63696);let s={},l=t.createContext(s);function i(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);