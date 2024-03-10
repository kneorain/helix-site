import{j as u}from"./jsx-runtime.BoiYzbTN.js";import{r as t}from"./index.LHP-L4Pl.js";import{c as P}from"./utils.xgzLAuTe.js";import{$ as _e,c as ie,I as Te}from"./index.CQwpXyFd.js";import{c as T,_ as C,$ as Ie,f as F,h as Pe,a as De,b as se,i as j,d as R,e as L,g as G,j as Ae}from"./createLucideIcon.BPW5lmR4.js";import{$ as je}from"./index.C3GvvkrT.js";import{$ as ce,C as ke}from"./chevron-down.aNf8jdIe.js";function Fe(e){const n=t.useRef({value:e,previous:e});return t.useMemo(()=>(n.current.value!==e&&(n.current.previous=n.current.value,n.current.value=e),n.current.previous),[e])}const Oe=t.forwardRef((e,n)=>t.createElement(T.span,C({},e,{ref:n,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}))),Se=Oe,O="NavigationMenu",[q,ue,Le]=ce(O),[U,Ve,Ke]=ce(O),[Q,xt]=Ie(O,[Le,Ke]),[ze,_]=Q(O),[Ge,Ue]=Q(O),We=t.forwardRef((e,n)=>{const{__scopeNavigationMenu:o,value:r,onValueChange:a,defaultValue:i,delayDuration:s=200,skipDelayDuration:v=300,orientation:l="horizontal",dir:M,...c}=e,[$,N]=t.useState(null),x=F(n,p=>N(p)),b=Pe(M),g=t.useRef(0),w=t.useRef(0),E=t.useRef(0),[I,f]=t.useState(!0),[m="",d]=De({prop:r,onChange:p=>{const A=p!=="",V=v>0;A?(window.clearTimeout(E.current),V&&f(!1)):(window.clearTimeout(E.current),E.current=window.setTimeout(()=>f(!0),v)),a?.(p)},defaultProp:i}),h=t.useCallback(()=>{window.clearTimeout(w.current),w.current=window.setTimeout(()=>d(""),150)},[d]),y=t.useCallback(p=>{window.clearTimeout(w.current),d(p)},[d]),D=t.useCallback(p=>{m===p?window.clearTimeout(w.current):g.current=window.setTimeout(()=>{window.clearTimeout(w.current),d(p)},s)},[m,d,s]);return t.useEffect(()=>()=>{window.clearTimeout(g.current),window.clearTimeout(w.current),window.clearTimeout(E.current)},[]),t.createElement(Be,{scope:o,isRootMenu:!0,value:m,dir:b,orientation:l,rootNavigationMenu:$,onTriggerEnter:p=>{window.clearTimeout(g.current),I?D(p):y(p)},onTriggerLeave:()=>{window.clearTimeout(g.current),h()},onContentEnter:()=>window.clearTimeout(w.current),onContentLeave:h,onItemSelect:p=>{d(A=>A===p?"":p)},onItemDismiss:()=>d("")},t.createElement(T.nav,C({"aria-label":"Main","data-orientation":l,dir:b},c,{ref:x})))}),Be=e=>{const{scope:n,isRootMenu:o,rootNavigationMenu:r,dir:a,orientation:i,children:s,value:v,onItemSelect:l,onItemDismiss:M,onTriggerEnter:c,onTriggerLeave:$,onContentEnter:N,onContentLeave:x}=e,[b,g]=t.useState(null),[w,E]=t.useState(new Map),[I,f]=t.useState(null);return t.createElement(ze,{scope:n,isRootMenu:o,rootNavigationMenu:r,value:v,previousValue:Fe(v),baseId:se(),dir:a,orientation:i,viewport:b,onViewportChange:g,indicatorTrack:I,onIndicatorTrackChange:f,onTriggerEnter:j(c),onTriggerLeave:j($),onContentEnter:j(N),onContentLeave:j(x),onItemSelect:j(l),onItemDismiss:j(M),onViewportContentChange:t.useCallback((m,d)=>{E(h=>(h.set(m,d),new Map(h)))},[]),onViewportContentRemove:t.useCallback(m=>{E(d=>d.has(m)?(d.delete(m),new Map(d)):d)},[])},t.createElement(q.Provider,{scope:n},t.createElement(Ge,{scope:n,items:w},s)))},He="NavigationMenuList",Xe=t.forwardRef((e,n)=>{const{__scopeNavigationMenu:o,...r}=e,a=_(He,o),i=t.createElement(T.ul,C({"data-orientation":a.orientation},r,{ref:n}));return t.createElement(T.div,{style:{position:"relative"},ref:a.onIndicatorTrackChange},t.createElement(q.Slot,{scope:o},a.isRootMenu?t.createElement(ve,{asChild:!0},i):i))}),Ye="NavigationMenuItem",[qe,le]=Q(Ye),Qe=t.forwardRef((e,n)=>{const{__scopeNavigationMenu:o,value:r,...a}=e,i=se(),s=r||i||"LEGACY_REACT_AUTO_VALUE",v=t.useRef(null),l=t.useRef(null),M=t.useRef(null),c=t.useRef(()=>{}),$=t.useRef(!1),N=t.useCallback((b="start")=>{if(v.current){c.current();const g=W(v.current);g.length&&J(b==="start"?g:g.reverse())}},[]),x=t.useCallback(()=>{if(v.current){const b=W(v.current);b.length&&(c.current=ct(b))}},[]);return t.createElement(qe,{scope:o,value:s,triggerRef:l,contentRef:v,focusProxyRef:M,wasEscapeCloseRef:$,onEntryKeyDown:N,onFocusProxyEnter:N,onRootContentClose:x,onContentFocusOutside:x},t.createElement(T.li,C({},a,{ref:n})))}),te="NavigationMenuTrigger",Je=t.forwardRef((e,n)=>{const{__scopeNavigationMenu:o,disabled:r,...a}=e,i=_(te,e.__scopeNavigationMenu),s=le(te,e.__scopeNavigationMenu),v=t.useRef(null),l=F(v,s.triggerRef,n),M=pe(i.baseId,s.value),c=ge(i.baseId,s.value),$=t.useRef(!1),N=t.useRef(!1),x=s.value===i.value;return t.createElement(t.Fragment,null,t.createElement(q.ItemSlot,{scope:o,value:s.value},t.createElement(st,{asChild:!0},t.createElement(T.button,C({id:M,disabled:r,"data-disabled":r?"":void 0,"data-state":Z(x),"aria-expanded":x,"aria-controls":c},a,{ref:l,onPointerEnter:R(e.onPointerEnter,()=>{N.current=!1,s.wasEscapeCloseRef.current=!1}),onPointerMove:R(e.onPointerMove,S(()=>{r||N.current||s.wasEscapeCloseRef.current||$.current||(i.onTriggerEnter(s.value),$.current=!0)})),onPointerLeave:R(e.onPointerLeave,S(()=>{r||(i.onTriggerLeave(),$.current=!1)})),onClick:R(e.onClick,()=>{i.onItemSelect(s.value),N.current=x}),onKeyDown:R(e.onKeyDown,b=>{const w={horizontal:"ArrowDown",vertical:i.dir==="rtl"?"ArrowLeft":"ArrowRight"}[i.orientation];x&&b.key===w&&(s.onEntryKeyDown(),b.preventDefault())})})))),x&&t.createElement(t.Fragment,null,t.createElement(Se,{"aria-hidden":!0,tabIndex:0,ref:s.focusProxyRef,onFocus:b=>{const g=s.contentRef.current,w=b.relatedTarget,E=w===v.current,I=g?.contains(w);(E||!I)&&s.onFocusProxyEnter(E?"start":"end")}}),i.viewport&&t.createElement("span",{"aria-owns":c})))}),de="NavigationMenuIndicator",Ze=t.forwardRef((e,n)=>{const{forceMount:o,...r}=e,a=_(de,e.__scopeNavigationMenu),i=!!a.value;return a.indicatorTrack?je.createPortal(t.createElement(L,{present:o||i},t.createElement(et,C({},r,{ref:n}))),a.indicatorTrack):null}),et=t.forwardRef((e,n)=>{const{__scopeNavigationMenu:o,...r}=e,a=_(de,o),i=ue(o),[s,v]=t.useState(null),[l,M]=t.useState(null),c=a.orientation==="horizontal",$=!!a.value;t.useEffect(()=>{var x;const g=(x=i().find(w=>w.value===a.value))===null||x===void 0?void 0:x.ref.current;g&&v(g)},[i,a.value]);const N=()=>{s&&M({size:c?s.offsetWidth:s.offsetHeight,offset:c?s.offsetLeft:s.offsetTop})};return B(s,N),B(a.indicatorTrack,N),l?t.createElement(T.div,C({"aria-hidden":!0,"data-state":$?"visible":"hidden","data-orientation":a.orientation},r,{ref:n,style:{position:"absolute",...c?{left:0,width:l.size+"px",transform:`translateX(${l.offset}px)`}:{top:0,height:l.size+"px",transform:`translateY(${l.offset}px)`},...r.style}})):null}),k="NavigationMenuContent",tt=t.forwardRef((e,n)=>{const{forceMount:o,...r}=e,a=_(k,e.__scopeNavigationMenu),i=le(k,e.__scopeNavigationMenu),s=F(i.contentRef,n),v=i.value===a.value,l={value:i.value,triggerRef:i.triggerRef,focusProxyRef:i.focusProxyRef,wasEscapeCloseRef:i.wasEscapeCloseRef,onContentFocusOutside:i.onContentFocusOutside,onRootContentClose:i.onRootContentClose,...r};return a.viewport?t.createElement(nt,C({forceMount:o},l,{ref:s})):t.createElement(L,{present:o||v},t.createElement(fe,C({"data-state":Z(v)},l,{ref:s,onPointerEnter:R(e.onPointerEnter,a.onContentEnter),onPointerLeave:R(e.onPointerLeave,S(a.onContentLeave)),style:{pointerEvents:!v&&a.isRootMenu?"none":void 0,...l.style}})))}),nt=t.forwardRef((e,n)=>{const o=_(k,e.__scopeNavigationMenu),{onViewportContentChange:r,onViewportContentRemove:a}=o;return G(()=>{r(e.value,{ref:n,...e})},[e,n,r]),G(()=>()=>a(e.value),[e.value,a]),null}),K="navigationMenu.rootContentDismiss",fe=t.forwardRef((e,n)=>{const{__scopeNavigationMenu:o,value:r,triggerRef:a,focusProxyRef:i,wasEscapeCloseRef:s,onRootContentClose:v,onContentFocusOutside:l,...M}=e,c=_(k,o),$=t.useRef(null),N=F($,n),x=pe(c.baseId,r),b=ge(c.baseId,r),g=ue(o),w=t.useRef(null),{onItemDismiss:E}=c;t.useEffect(()=>{const f=$.current;if(c.isRootMenu&&f){const m=()=>{var d;E(),v(),f.contains(document.activeElement)&&((d=a.current)===null||d===void 0||d.focus())};return f.addEventListener(K,m),()=>f.removeEventListener(K,m)}},[c.isRootMenu,e.value,a,E,v]);const I=t.useMemo(()=>{const m=g().map(A=>A.value);c.dir==="rtl"&&m.reverse();const d=m.indexOf(c.value),h=m.indexOf(c.previousValue),y=r===c.value,D=h===m.indexOf(r);if(!y&&!D)return w.current;const p=(()=>{if(d!==h){if(y&&h!==-1)return d>h?"from-end":"from-start";if(D&&d!==-1)return d>h?"to-start":"to-end"}return null})();return w.current=p,p},[c.previousValue,c.value,c.dir,g,r]);return t.createElement(ve,{asChild:!0},t.createElement(_e,C({id:b,"aria-labelledby":x,"data-motion":I,"data-orientation":c.orientation},M,{ref:N,onDismiss:()=>{var f;const m=new Event(K,{bubbles:!0,cancelable:!0});(f=$.current)===null||f===void 0||f.dispatchEvent(m)},onFocusOutside:R(e.onFocusOutside,f=>{var m;l();const d=f.target;(m=c.rootNavigationMenu)!==null&&m!==void 0&&m.contains(d)&&f.preventDefault()}),onPointerDownOutside:R(e.onPointerDownOutside,f=>{var m;const d=f.target,h=g().some(D=>{var p;return(p=D.ref.current)===null||p===void 0?void 0:p.contains(d)}),y=c.isRootMenu&&((m=c.viewport)===null||m===void 0?void 0:m.contains(d));(h||y||!c.isRootMenu)&&f.preventDefault()}),onKeyDown:R(e.onKeyDown,f=>{const m=f.altKey||f.ctrlKey||f.metaKey;if(f.key==="Tab"&&!m){const y=W(f.currentTarget),D=document.activeElement,p=y.findIndex(ye=>ye===D),V=f.shiftKey?y.slice(0,p).reverse():y.slice(p+1,y.length);if(J(V))f.preventDefault();else{var h;(h=i.current)===null||h===void 0||h.focus()}}}),onEscapeKeyDown:R(e.onEscapeKeyDown,f=>{s.current=!0})})))}),me="NavigationMenuViewport",ot=t.forwardRef((e,n)=>{const{forceMount:o,...r}=e,i=!!_(me,e.__scopeNavigationMenu).value;return t.createElement(L,{present:o||i},t.createElement(rt,C({},r,{ref:n})))}),rt=t.forwardRef((e,n)=>{const{__scopeNavigationMenu:o,children:r,...a}=e,i=_(me,o),s=F(n,i.onViewportChange),v=Ue(k,e.__scopeNavigationMenu),[l,M]=t.useState(null),[c,$]=t.useState(null),N=l?l?.width+"px":void 0,x=l?l?.height+"px":void 0,b=!!i.value,g=b?i.value:i.previousValue;return B(c,()=>{c&&M({width:c.offsetWidth,height:c.offsetHeight})}),t.createElement(T.div,C({"data-state":Z(b),"data-orientation":i.orientation},a,{ref:s,style:{pointerEvents:!b&&i.isRootMenu?"none":void 0,"--radix-navigation-menu-viewport-width":N,"--radix-navigation-menu-viewport-height":x,...a.style},onPointerEnter:R(e.onPointerEnter,i.onContentEnter),onPointerLeave:R(e.onPointerLeave,S(i.onContentLeave))}),Array.from(v.items).map(([E,{ref:I,forceMount:f,...m}])=>{const d=g===E;return t.createElement(L,{key:E,present:f||d},t.createElement(fe,C({},m,{ref:Ae(I,h=>{d&&h&&$(h)})})))}))}),at="FocusGroup",ve=t.forwardRef((e,n)=>{const{__scopeNavigationMenu:o,...r}=e,a=_(at,o);return t.createElement(U.Provider,{scope:o},t.createElement(U.Slot,{scope:o},t.createElement(T.div,C({dir:a.dir},r,{ref:n}))))}),ne=["ArrowRight","ArrowLeft","ArrowUp","ArrowDown"],it="FocusGroupItem",st=t.forwardRef((e,n)=>{const{__scopeNavigationMenu:o,...r}=e,a=Ve(o),i=_(it,o);return t.createElement(U.ItemSlot,{scope:o},t.createElement(T.button,C({},r,{ref:n,onKeyDown:R(e.onKeyDown,s=>{if(["Home","End",...ne].includes(s.key)){let l=a().map($=>$.ref.current);if([i.dir==="rtl"?"ArrowRight":"ArrowLeft","ArrowUp","End"].includes(s.key)&&l.reverse(),ne.includes(s.key)){const $=l.indexOf(s.currentTarget);l=l.slice($+1)}setTimeout(()=>J(l)),s.preventDefault()}})})))});function W(e){const n=[],o=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const a=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||a?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;o.nextNode();)n.push(o.currentNode);return n}function J(e){const n=document.activeElement;return e.some(o=>o===n?!0:(o.focus(),document.activeElement!==n))}function ct(e){return e.forEach(n=>{n.dataset.tabindex=n.getAttribute("tabindex")||"",n.setAttribute("tabindex","-1")}),()=>{e.forEach(n=>{const o=n.dataset.tabindex;n.setAttribute("tabindex",o)})}}function B(e,n){const o=j(n);G(()=>{let r=0;if(e){const a=new ResizeObserver(()=>{cancelAnimationFrame(r),r=window.requestAnimationFrame(o)});return a.observe(e),()=>{window.cancelAnimationFrame(r),a.unobserve(e)}}},[e,o])}function Z(e){return e?"open":"closed"}function pe(e,n){return`${e}-trigger-${n}`}function ge(e,n){return`${e}-content-${n}`}function S(e){return n=>n.pointerType==="mouse"?e(n):void 0}const $e=We,be=Xe,ut=Qe,xe=Je,we=Ze,he=tt,Ne=ot,Ee=t.forwardRef(({className:e,children:n,...o},r)=>u.jsxs($e,{ref:r,className:P("relative z-10 flex max-w-max flex-1 items-center justify-center",e),...o,children:[n,u.jsx(Re,{})]}));Ee.displayName=$e.displayName;const Ce=t.forwardRef(({className:e,...n},o)=>u.jsx(be,{ref:o,className:P("group flex flex-1 list-none items-center justify-center space-x-1",e),...n}));Ce.displayName=be.displayName;const z=ut,Me=ie("group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"),H=t.forwardRef(({className:e,children:n,...o},r)=>u.jsxs(xe,{ref:r,className:P(Me(),"group",e),...o,children:[n," ",u.jsx(ke,{className:"relative top-[1px] ml-1 size-3 transition duration-200 group-data-[state=open]:rotate-180","aria-hidden":"true"})]}));H.displayName=xe.displayName;const X=t.forwardRef(({className:e,...n},o)=>u.jsx(he,{ref:o,className:P("left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",e),...n}));X.displayName=he.displayName;const Re=t.forwardRef(({className:e,...n},o)=>u.jsx("div",{className:P("absolute left-0 top-full flex justify-center"),children:u.jsx(Ne,{className:P("origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",e),ref:o,...n})}));Re.displayName=Ne.displayName;const lt=t.forwardRef(({className:e,...n},o)=>u.jsx(we,{ref:o,className:P("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",e),...n,children:u.jsx("div",{className:"relative top-[60%] size-2 rotate-45 rounded-tl-sm bg-border shadow-md"})}));lt.displayName=we.displayName;const dt=ie("inline-flex items-center border px-2.5 py-0.5 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"},radius:{default:"rounded-none",sm:"rounded-sm",md:"rounded-md",lg:"rounded-lg",full:"rounded-full"}},defaultVariants:{variant:"default"}});function oe({className:e,variant:n,radius:o,...r}){return u.jsx("div",{className:P(dt({variant:n,radius:o}),e),...r})}const ee={infosNav:[{title:"Menu",items:[{title:"Features",href:"/#features",description:"Take a closer look at the project's features."},{title:"Twitter (@miickasmt)",href:"https://twitter.com/miickasmt",description:"Follow me to get the latest updates and news.",external:!0},{title:"Source Code",href:"https://github.com/mickasmt/astro-nomy",description:"You want to star the repository ? Let's get started!",external:!0}]}],examplesNav:[{title:"Examples",items:[{title:"Blog",href:"/blog",description:"A Markdown/MDX blog built using Content Collections."},{title:"Docs",href:"/docs/getting-started",description:"A Markdown/MDX documentation site built using Content Collections."},{title:"Authentification",href:"/login",description:"Login and register pages for authentification.",disabled:!0},{title:"Dashboard",href:"/#dashboard",description:"A dashboard panel after authentification.",disabled:!0},{title:"Ecommerce",href:"/#examples/ecommerce",description:"Different pages of an ecommerce app fetching data from an API.",disabled:!0},{title:"Social Media",href:"/#examples/social-media",description:"Different components & pages of an social media app.",disabled:!0}]}],links:[{title:"FAQ",href:"/faq"},{title:"About",href:"/about"}]},re=ee.infosNav[0],ae=ee.examplesNav[0];function wt(){return u.jsx(Ee,{children:u.jsxs(Ce,{children:[u.jsxs(z,{children:[u.jsx(H,{children:re.title}),u.jsx(X,{children:u.jsxs("ul",{className:"grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]",children:[u.jsx("li",{className:"row-span-3",children:u.jsxs("a",{className:"flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md",href:"/",children:[u.jsx(Te.logo,{className:"size-8"}),u.jsx("div",{className:"mb-2 mt-3 text-lg font-medium",children:"Astronomy"}),u.jsx("p",{className:"text-sm leading-tight text-muted-foreground",children:"Modern application with differents sections examples built using shadcn/ui."})]})}),re.items?.map(e=>u.jsx(Y,{...e},e.title))]})})]}),u.jsxs(z,{children:[u.jsx(H,{children:ae.title}),u.jsx(X,{children:u.jsx("ul",{className:"grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ",children:ae.items?.map(e=>u.jsx(Y,{...e},e.title))})})]}),u.jsx(z,{children:ee.links.map(e=>u.jsx("a",{href:e.href,className:Me(),children:e.title},e.href))})]})})}const Y=({title:e,href:n,description:o,launched:r,disabled:a,external:i})=>{const s=i?"_blank":void 0;return u.jsx("li",{children:u.jsxs("a",{href:a?void 0:n,target:s,className:P("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",a?"text-muted-foreground hover:bg-transparent hover:text-muted-foreground":""),children:[u.jsxs("div",{className:"text-sm font-medium leading-none",children:[u.jsx("span",{className:"mr-2",children:e}),a?u.jsx(oe,{variant:"secondary",radius:"sm",className:"h-5 px-1.5 text-xs font-medium",children:"SOON"}):null,r?u.jsx(oe,{radius:"sm",className:"h-5 px-1.5 text-xs font-medium",children:"NEW"}):null]}),u.jsx("p",{className:"line-clamp-2 text-sm leading-snug text-muted-foreground",children:o})]})})};Y.displayName="ListItem";export{wt as MainNavigationMenu};