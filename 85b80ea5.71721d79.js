(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{132:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(2),b=(a(0),a(175));a(176),a(177);const r={title:"Hiding HUD with SetHUDVisible",author:"Noya",steamId:"76561198046984233",date:"07.02.2015"},l={id:"panorama/hiding-hud-with-sethudvisible",title:"Hiding HUD with SetHUDVisible",description:"There's a function currently missing from the API page: SetHUDVisible(int, bool) which I want to document here.",source:"@site/_articles/panorama/hiding-hud-with-sethudvisible.md",permalink:"/panorama/hiding-hud-with-sethudvisible",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/panorama/hiding-hud-with-sethudvisible.md",sidebar:"docs",previous:{title:"DOTAScenePanel",permalink:"/panorama/dotascenepanel"},next:{title:"Asset File Type Reference",permalink:"/assets/asset-file-type-reference"}},c=[],i={rightToc:c};function p({components:e,...t}){return Object(b.b)("wrapper",Object(n.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(b.b)("p",null,"There's a function currently missing from the API page: SetHUDVisible(int, bool) which I want to document here."),Object(b.b)("p",null,"Credits to BMD for this list:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"HUD Component"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"int value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DOTA_HUD_VISIBILITY_TOP_TIMEOFDAY"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DOTA_HUD_VISIBILITY_TOP_HEROES"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DOTA_HUD_VISIBILITY_TOP_SCOREBOARD"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DOTA_HUD_VISIBILITY_ACTION_PANEL"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"3")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DOTA_HUD_VISIBILITY_ACTION_MINIMAP"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DOTA_HUD_VISIBILITY_INVENTORY_PANEL"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"5")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DOTA_HUD_VISIBILITY_INVENTORY_SHOP"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"6")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DOTA_HUD_VISIBILITY_INVENTORY_ITEMS"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"7")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DOTA_HUD_VISIBILITY_INVENTORY_QUICKBUY"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"8")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DOTA_HUD_VISIBILITY_INVENTORY_COURIER"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"9")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DOTA_HUD_VISIBILITY_INVENTORY_PROTECT"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"10")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DOTA_HUD_VISIBILITY_INVENTORY_GOLD"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"11")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DOTA_HUD_VISIBILITY_SHOP_SUGGESTEDITEMS"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"12")))),Object(b.b)("p",null,"Note that changing it once doesn't let you change it back without restarting tools, so this shouldn't be used to manipulate the HUD after the game loads."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Usage")),Object(b.b)("p",null,"Somewhere in a game started event, I used ",Object(b.b)("inlineCode",{parentName:"p"},"player_connect_full")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-lua"}),"mode = GameRules:GetGameModeEntity()\nmode:SetHUDVisible(hud_component_value, false)\n")),Object(b.b)("br",null),Object(b.b)("h4",{id:"dota_hud_visibility_top_timeofday"},"DOTA_HUD_VISIBILITY_TOP_TIMEOFDAY"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-lua"}),"mode:SetHUDVisible(0, false)\n")),Object(b.b)("p",null,Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"http://puu.sh/fAOer/20a271530e.jpg"}),"http://puu.sh/fAOer/20a271530e.jpg")," "),Object(b.b)("br",null),Object(b.b)("h4",{id:"dota_hud_visibility_top_heroes"},"DOTA_HUD_VISIBILITY_TOP_HEROES"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-lua"}),"mode:SetHUDVisible(1, false)\n")),Object(b.b)("p",null,Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"http://puu.sh/fAOiv/1035acf865.jpg"}),"http://puu.sh/fAOiv/1035acf865.jpg")," "),Object(b.b)("br",null),Object(b.b)("h4",{id:"dota_hud_visibility_top_scoreboard"},"DOTA_HUD_VISIBILITY_TOP_SCOREBOARD"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-lua"}),"mode:SetHUDVisible(2, false)\n")),Object(b.b)("p",null,Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"http://puu.sh/fAOpV/887d94d3b1.jpg"}),"http://puu.sh/fAOpV/887d94d3b1.jpg")," "),Object(b.b)("br",null),Object(b.b)("h4",{id:"dota_hud_visibility_action_panel"},"DOTA_HUD_VISIBILITY_ACTION_PANEL"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-lua"}),"mode:SetHUDVisible(3, false) \n")),Object(b.b)("p",null,Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"http://puu.sh/fAOuF/dfe961a286.jpg"}),"http://puu.sh/fAOuF/dfe961a286.jpg")," "),Object(b.b)("p",null,"\ud83d\udc1b Hiding the action panel has this issue: ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"http://puu.sh/fAOSh/9fc90dc654.jpg"}),"http://puu.sh/fAOSh/9fc90dc654.jpg")),Object(b.b)("br",null),Object(b.b)("h4",{id:"dota_hud_visibility_action_minimap"},"DOTA_HUD_VISIBILITY_ACTION_MINIMAP"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-lua"}),"mode:SetHUDVisible(4, false)\n")),Object(b.b)("p",null,Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"http://puu.sh/fAOBz/e1018a097b.jpg"}),"http://puu.sh/fAOBz/e1018a097b.jpg")," "),Object(b.b)("br",null),Object(b.b)("h4",{id:"dota_hud_visibility_inventory_panel"},"DOTA_HUD_VISIBILITY_INVENTORY_PANEL"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-lua"}),"mode:SetHUDVisible(5, false) \n")),Object(b.b)("p",null,Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"http://puu.sh/fAPiT/e6b2af6fd8.jpg"}),"http://puu.sh/fAPiT/e6b2af6fd8.jpg")," "),Object(b.b)("br",null),Object(b.b)("h4",{id:"dota_hud_visibility_inventory_shop"},"DOTA_HUD_VISIBILITY_INVENTORY_SHOP"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-lua"}),"mode:SetHUDVisible(6, false) \n")),Object(b.b)("p",null,Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"http://puu.sh/fAP4b/4159ddae39.jpg"}),"http://puu.sh/fAP4b/4159ddae39.jpg")," "),Object(b.b)("br",null),Object(b.b)("h4",{id:"dota_hud_visibility_inventory_items"},"DOTA_HUD_VISIBILITY_INVENTORY_ITEMS"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-lua"}),"mode:SetHUDVisible(7, false) \n")),Object(b.b)("p",null," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"http://puu.sh/g9Ywi/56095d4467.jpg"}),"http://puu.sh/g9Ywi/56095d4467.jpg")),Object(b.b)("br",null),Object(b.b)("h4",{id:"dota_hud_visibility_inventory_quickbuy"},"DOTA_HUD_VISIBILITY_INVENTORY_QUICKBUY"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-lua"}),"mode:SetHUDVisible(8, false) \n")),Object(b.b)("p",null," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"http://puu.sh/fAOQx/7ff8fddbc1.jpg"}),"http://puu.sh/fAOQx/7ff8fddbc1.jpg")),Object(b.b)("br",null),Object(b.b)("h4",{id:"dota_hud_visibility_inventory_courier"},"DOTA_HUD_VISIBILITY_INVENTORY_COURIER"),Object(b.b)("p",null,":success: This one is fairly useful if your map doesn't use courier."),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-lua"}),"mode:SetHUDVisible(9, false) \n")),Object(b.b)("p",null,Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"http://puu.sh/g9YoK/096d9a4a95.jpg"}),"http://puu.sh/g9YoK/096d9a4a95.jpg")),Object(b.b)("br",null),Object(b.b)("h4",{id:"dota_hud_visibility_inventory_protect"},"DOTA_HUD_VISIBILITY_INVENTORY_PROTECT"),Object(b.b)("p",null,"\u2753 Nothing changed?"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-lua"}),"mode:SetHUDVisible(10, false) \n")),Object(b.b)("p",null,Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"http://puu.sh/fAPAp/5e003ec96f.jpg"}),"http://puu.sh/fAPAp/5e003ec96f.jpg")," "),Object(b.b)("br",null),Object(b.b)("h4",{id:"dota_hud_visibility_inventory_gold"},"DOTA_HUD_VISIBILITY_INVENTORY_GOLD"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-lua"}),"mode:SetHUDVisible(11, false) \n")),Object(b.b)("p",null,Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"http://puu.sh/fAPEV/8b3e7d0808.jpg"}),"http://puu.sh/fAPEV/8b3e7d0808.jpg")," "),Object(b.b)("p",null,"muh shekels are gone! :biblethump: "),Object(b.b)("br",null),Object(b.b)("h4",{id:"dota_hud_visibility_shop_suggesteditems"},"DOTA_HUD_VISIBILITY_SHOP_SUGGESTEDITEMS"),Object(b.b)("p",null,":success: This one actually disables that mostly useless window, unlike ",Object(b.b)("inlineCode",{parentName:"p"},"SetRecommendedItemsDisabled(bool)")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-lua"}),"mode:SetHUDVisible(12, false) \n")),Object(b.b)("p",null,Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"http://puu.sh/fAPKp/6e8f843dda.jpg"}),"http://puu.sh/fAPKp/6e8f843dda.jpg")),Object(b.b)("br",null),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"For a more flexible HUD manipulation, Flash Scaleform tutorials will be coming SOON(TM)")))}p.isMDXComponent=!0},175:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return j}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var p=b.a.createContext({}),u=function(e){var t=b.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},O=function(e){var t=u(e.components);return b.a.createElement(p.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},s=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),O=u(a),s=n,j=O["".concat(l,".").concat(s)]||O[s]||o[s]||r;return a?b.a.createElement(j,c(c({ref:t},p),{},{components:a})):b.a.createElement(j,c({ref:t},p))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var p=2;p<r;p++)l[p]=a[p];return b.a.createElement.apply(null,l)}return b.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},176:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0),b=a.n(n);function r({id:e,aspectRatio:t=4/3}){return b.a.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},b.a.createElement("iframe",{src:"https://gfycat.com/ifr/"+e,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},177:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0),b=a.n(n);function r({id:e,playlistId:t,aspectRatio:a=16/9}){const n=void 0!==t?"https://www.youtube.com/embed/videoseries?list="+t:"https://www.youtube.com/embed/"+e;return b.a.createElement("p",{style:{position:"relative",paddingBottom:1/a*100+"%"}},b.a.createElement("iframe",{src:n,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}}}]);