(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{464:function(module,exports,__webpack_require__){__webpack_require__(465),__webpack_require__(621),__webpack_require__(622),__webpack_require__(829),__webpack_require__(830),__webpack_require__(833),__webpack_require__(834),__webpack_require__(832),__webpack_require__(831),__webpack_require__(835),__webpack_require__(836),module.exports=__webpack_require__(820)},532:function(module,exports){},622:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(327)},820:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(327).configure)([__webpack_require__(821),__webpack_require__(822)],module,!1)}).call(this,__webpack_require__(184)(module))},821:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=821},822:function(module,exports,__webpack_require__){var map={"./components/Button/Button.stories.tsx":837,"./components/Sidebar/Sidebar.stories.tsx":838};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=822},824:function(module,exports,__webpack_require__){var api=__webpack_require__(415),content=__webpack_require__(825);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},825:function(module,exports,__webpack_require__){(exports=__webpack_require__(416)(!1)).push([module.i,".storybook-button {\n    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    font-weight: 700;\n    border: 0;\n    border-radius: 3em;\n    cursor: pointer;\n    display: inline-block;\n    line-height: 1;\n}\n.storybook-button--primary {\n    color: white;\n    background-color: red;\n}\n.storybook-button--secondary {\n    color: #ccc;\n    background-color: transparent;\n    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n}\n.storybook-button--small {\n    font-size: 12px;\n    padding: 10px 16px;\n}\n.storybook-button--medium {\n    font-size: 14px;\n    padding: 11px 20px;\n}\n.storybook-button--large {\n    font-size: 16px;\n    padding: 12px 24px;\n}",""]),module.exports=exports},827:function(module,exports,__webpack_require__){var api=__webpack_require__(415),content=__webpack_require__(828);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},828:function(module,exports,__webpack_require__){(exports=__webpack_require__(416)(!1)).push([module.i,'.sidebar-panel {\n    height: 100%;\n}\n\n.hamburger {\n    display: block;\n    padding-bottom: 10px;\n    position: relative;\n    top: -12px;\n}\n\nlabel {\n    display: flex;\n    flex-direction: column;\n    width: 30px;\n    cursor: pointer;\n    justify-content: center;\n}\n\nspan {\n    background: blue; /*var(--hub);*/\n    border-radius: 10px;\n    height: 3px;\n    margin: 3px 0;\n    transition: .4s cubic-bezier(0.68, -0.6, 0.32, 1.6);\n}\n\ninput[type="checkbox"] {\n    display: none;\n}\n\n\n.brand-logo {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n}\nimg {\n    margin-right: 10px;\n}\n\n.name {\n    color: red; /*var(--text);*/\n    font-weight: 600;\n    font-size: 18px;\n}\n\n.version {\n    color: black; /*var(--text-light);*/\n    font-size: 10px;\n    font-weight: 400;\n    margin-left: 5px;\n}\n',""]),module.exports=exports},836:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__(16),__webpack_require__(38),__webpack_require__(45),__webpack_require__(816),__webpack_require__(35),__webpack_require__(36),__webpack_require__(817),__webpack_require__(818),__webpack_require__(819);var client_api=__webpack_require__(843),esm=__webpack_require__(5),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.b)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.c)(loader,!1)}));case"parameters":return Object(client_api.d)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.d)(v,!1);default:return console.log(key+" was not supported :( !")}}))},837:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary})),__webpack_require__.d(__webpack_exports__,"Secondary",(function(){return Secondary}));__webpack_require__(8),__webpack_require__(414),__webpack_require__(0),__webpack_require__(41),__webpack_require__(824);var jsx_runtime=__webpack_require__(34),Button_Button=function Button(_ref){var _ref$primary=_ref.primary,primary=void 0===_ref$primary||_ref$primary,backgroundColor=_ref.backgroundColor,_ref$size=_ref.size,size=void 0===_ref$size?"medium":_ref$size,onClick=_ref.onClick,label=_ref.label,mode=primary?"storybook-button--primary":"storybook-button--secondary";return Object(jsx_runtime.jsx)("button",{type:"button",className:["storybook-button","storybook-button--".concat(size),mode].join(" "),style:backgroundColor?{backgroundColor:backgroundColor}:{},onClick:onClick,children:label})};Button_Button.displayName="Button";var components_Button_Button=Button_Button;try{Button_Button.displayName="Button",Button_Button.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Button",props:{primary:{defaultValue:{value:"true"},description:"Is this the principal call to action on the page?",name:"primary",required:!1,type:{name:"boolean"}},backgroundColor:{defaultValue:null,description:"What background color to use",name:"backgroundColor",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"How large should the button be?",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Button contents",name:"label",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button_Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Components/Button",component:components_Button_Button,argTypes:{backgroundColor:{control:"color"}}};var Button_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(components_Button_Button,Object.assign({},args))};Button_stories_Template.displayName="Template";var Primary=Button_stories_Template.bind({});Primary.args={label:"Primary Button 😃",size:"large"};var Secondary=Button_stories_Template.bind({});Secondary.args=Object.assign({},Primary.args,{primary:!1,label:"Secondary Button 😇"}),Primary.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Primary.parameters),Secondary.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Secondary.parameters)},838:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Version",(function(){return Version}));__webpack_require__(8),__webpack_require__(414),__webpack_require__(0),__webpack_require__(827);var jsx_runtime=__webpack_require__(34),Sidebar_Sidebar=function Sidebar(_ref){var _ref$logo=_ref.logo,logo=void 0===_ref$logo?"images/header-minimal-logo-36x36.png":_ref$logo,_ref$title=_ref.title,title=void 0===_ref$title?"Kerberos.io":_ref$title,_ref$version=_ref.version,version=void 0===_ref$version?"v1.0":_ref$version;_ref.mobile;return Object(jsx_runtime.jsx)("div",{className:"sidebar-panel",children:Object(jsx_runtime.jsxs)("div",{className:"brand",children:[Object(jsx_runtime.jsx)("div",{className:"hamburger",children:Object(jsx_runtime.jsxs)("label",{for:"close",children:[Object(jsx_runtime.jsx)("input",{type:"checkbox",id:"close"}),Object(jsx_runtime.jsx)("span",{}),Object(jsx_runtime.jsx)("span",{}),Object(jsx_runtime.jsx)("span",{})]})}),Object(jsx_runtime.jsxs)("a",{className:"brand-logo",children:[Object(jsx_runtime.jsx)("img",{src:logo}),Object(jsx_runtime.jsxs)("div",{className:"name",children:[title,Object(jsx_runtime.jsx)("span",{className:"version",children:version})]})]})]})})};Sidebar_Sidebar.displayName="Sidebar";var components_Sidebar_Sidebar=Sidebar_Sidebar;try{Sidebar_Sidebar.displayName="Sidebar",Sidebar_Sidebar.__docgenInfo={description:"",displayName:"Sidebar",props:{logo:{defaultValue:{value:"images/header-minimal-logo-36x36.png"},description:"",name:"logo",required:!1,type:{name:"string"}},title:{defaultValue:{value:"Kerberos.io"},description:"",name:"title",required:!1,type:{name:"string"}},version:{defaultValue:{value:"v1.0"},description:"",name:"version",required:!1,type:{name:"string"}},mobile:{defaultValue:{value:"false"},description:"",name:"mobile",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Sidebar/Sidebar.tsx#Sidebar"]={docgenInfo:Sidebar_Sidebar.__docgenInfo,name:"Sidebar",path:"src/components/Sidebar/Sidebar.tsx#Sidebar"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Components/Sidebar",component:components_Sidebar_Sidebar};var Sidebar_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(components_Sidebar_Sidebar,Object.assign({},args))};Sidebar_stories_Template.displayName="Template";var Default=Sidebar_stories_Template.bind({});Default.args={title:"Kerberos.io",version:"v1.0"};var Version=Sidebar_stories_Template.bind({});Version.args=Object.assign({},Default.args,{version:"v2.0"}),Default.parameters=Object.assign({storySource:{source:"(args) => <Sidebar {...args} />"}},Default.parameters),Version.parameters=Object.assign({storySource:{source:"(args) => <Sidebar {...args} />"}},Version.parameters)}},[[464,2,3]]]);