"use strict";(self.webpackChunkvision_camera=self.webpackChunkvision_camera||[]).push([[997],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),d=n,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return a?r.createElement(h,s(s({ref:t},p),{},{components:a})):r.createElement(h,s({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8215:function(e,t,a){var r=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},6396:function(e,t,a){a.d(t,{Z:function(){return u}});var r=a(7462),n=a(7294),o=a(2389),s=a(9443);var i=function(){var e=(0,n.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=a(3616),c=a(6010),p="tabItem_vU9c";function m(e){var t,a,o,s=e.lazy,m=e.block,u=e.defaultValue,d=e.values,h=e.groupId,g=e.className,f=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,l.lx)(k,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===u?u:null!=(t=null!=u?u:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(o=f[0])?void 0:o.props.value;if(null!==N&&!k.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=i(),w=b.tabGroupChoices,y=b.setTabGroupChoices,P=(0,n.useState)(N),C=P[0],F=P[1],S=[],x=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var I=w[h];null!=I&&I!==C&&k.some((function(e){return e.value===I}))&&F(I)}var O=function(e){var t=e.currentTarget,a=S.indexOf(t),r=k[a].value;r!==C&&(x(t),F(r),null!=h&&y(h,r))},T=function(e){var t,a=null;switch(e.key){case"ArrowRight":var r=S.indexOf(e.currentTarget)+1;a=S[r]||S[0];break;case"ArrowLeft":var n=S.indexOf(e.currentTarget)-1;a=S[n]||S[S.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":m},g)},k.map((function(e){var t=e.value,a=e.label,o=e.attributes;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return S.push(e)},onKeyDown:T,onFocus:O,onClick:O},o,{className:(0,c.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":C===t})}),null!=a?a:t)}))),s?(0,n.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function u(e){var t=(0,o.Z)();return n.createElement(m,(0,r.Z)({key:String(t)},e))}},1352:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return u},toc:function(){return d},default:function(){return g}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),s=a(6396),i=a(8215),l=a(4996),c=["components"],p={id:"frame-processors",title:"Frame Processors",sidebar_label:"Frame Processors"},m=void 0,u={unversionedId:"guides/frame-processors",id:"guides/frame-processors",title:"Frame Processors",description:"What are frame processors?",source:"@site/docs/guides/FRAME_PROCESSORS.mdx",sourceDirName:"guides",slug:"/guides/frame-processors",permalink:"/react-native-vision-camera/docs/guides/frame-processors",editUrl:"https://github.com/mrousavy/react-native-vision-camera/edit/main/docs/docs/guides/FRAME_PROCESSORS.mdx",tags:[],version:"current",frontMatter:{id:"frame-processors",title:"Frame Processors",sidebar_label:"Frame Processors"},sidebar:"visionSidebar",previous:{title:"Taking Photos/Recording Videos",permalink:"/react-native-vision-camera/docs/guides/capturing"},next:{title:"Overview",permalink:"/react-native-vision-camera/docs/guides/frame-processors-plugins-overview"}},d=[{value:"What are frame processors?",id:"what-are-frame-processors",children:[],level:3},{value:"Interacting with Frame Processors",id:"interacting-with-frame-processors",children:[],level:3},{value:"Using Frame Processor Plugins",id:"using-frame-processor-plugins",children:[],level:3},{value:"Selecting a Format for a Frame Processor",id:"selecting-a-format-for-a-frame-processor",children:[],level:3},{value:"Benchmarks",id:"benchmarks",children:[],level:3},{value:"Avoiding Frame-drops",id:"avoiding-frame-drops",children:[],level:3},{value:"ESLint react-hooks plugin",id:"eslint-react-hooks-plugin",children:[],level:3},{value:"Technical",id:"technical",children:[{value:"Frame Processors",id:"frame-processors",children:[],level:4},{value:"Frame Processor Plugins",id:"frame-processor-plugins",children:[],level:4},{value:"The <code>Frame</code> object",id:"the-frame-object",children:[],level:4}],level:3},{value:"Disabling Frame Processors",id:"disabling-frame-processors",children:[{value:"Android",id:"android",children:[],level:4},{value:"iOS",id:"ios",children:[],level:4},{value:"\ud83d\ude80 Next section: Zooming (or creating a Frame Processor Plugin)",id:"-next-section-zooming-or-creating-a-frame-processor-plugin",children:[],level:4}],level:3}],h={toc:d};function g(e){var t=e.components,a=(0,n.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",null,(0,o.kt)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"283",height:"535",style:{float:"right"}},(0,o.kt)("image",{href:(0,l.Z)("img/frame-processors.gif"),x:"18",y:"33",width:"247",height:"469"}),(0,o.kt)("image",{href:(0,l.Z)("img/frame.png"),width:"283",height:"535"}))),(0,o.kt)("h3",{id:"what-are-frame-processors"},"What are frame processors?"),(0,o.kt)("p",null,"Frame processors are functions that are written in JavaScript (or TypeScript) which can be used to ",(0,o.kt)("strong",{parentName:"p"},'process frames the camera "sees"'),".\nInside those functions you can call ",(0,o.kt)("strong",{parentName:"p"},"Frame Processor Plugins"),", which are high performance native functions specifically designed for certain use-cases."),(0,o.kt)("p",null,"For example, you might want to create a ",(0,o.kt)("a",{parentName:"p",href:"https://apps.apple.com/us/app/not-hotdog/id1212457521"},"Hotdog/Not Hotdog detector app")," ",(0,o.kt)("strong",{parentName:"p"},"without writing any native code"),", while still ",(0,o.kt)("strong",{parentName:"p"},"achieving native performance"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'function App() {\n  const frameProcessor = useFrameProcessor((frame) => {\n    \'worklet\'\n    const isHotdog = detectIsHotdog(frame)\n    console.log(isHotdog ? "Hotdog!" : "Not Hotdog.")\n  }, [])\n\n  return (\n    <Camera\n      {...cameraProps}\n      frameProcessor={frameProcessor}\n    />\n  )\n}\n')),(0,o.kt)("p",null,"Frame processors are by far not limited to Hotdog detection, other examples include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"AI")," for ",(0,o.kt)("strong",{parentName:"li"},"facial recognition")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"AI")," for ",(0,o.kt)("strong",{parentName:"li"},"object detection")),(0,o.kt)("li",{parentName:"ul"},"Using ",(0,o.kt)("strong",{parentName:"li"},"Tensorflow"),", ",(0,o.kt)("strong",{parentName:"li"},"MLKit Vision"),", ",(0,o.kt)("strong",{parentName:"li"},"Apple Vision")," or other libraries"),(0,o.kt)("li",{parentName:"ul"},"Creating ",(0,o.kt)("strong",{parentName:"li"},"realtime video-chats")," using ",(0,o.kt)("strong",{parentName:"li"},"WebRTC")," to directly send the camera frames over the network"),(0,o.kt)("li",{parentName:"ul"},"Creating scanners for ",(0,o.kt)("strong",{parentName:"li"},"QR codes"),", ",(0,o.kt)("strong",{parentName:"li"},"Barcodes")," or even custom codes such as ",(0,o.kt)("strong",{parentName:"li"},"Snapchat's SnapCodes")," or ",(0,o.kt)("strong",{parentName:"li"},"Apple's AppClips")),(0,o.kt)("li",{parentName:"ul"},"Creating ",(0,o.kt)("strong",{parentName:"li"},"snapchat-like filters"),", e.g. draw a dog-mask filter over the user's face"),(0,o.kt)("li",{parentName:"ul"},"Creating ",(0,o.kt)("strong",{parentName:"li"},"color filters")," with depth-detection")),(0,o.kt)("p",null,"Because they are written in JS, Frame Processors are ",(0,o.kt)("strong",{parentName:"p"},"simple"),", ",(0,o.kt)("strong",{parentName:"p"},"powerful"),", ",(0,o.kt)("strong",{parentName:"p"},"extensible")," and ",(0,o.kt)("strong",{parentName:"p"},"easy to create")," while still running at ",(0,o.kt)("strong",{parentName:"p"},"native performance"),". (Frame Processors can run up to ",(0,o.kt)("strong",{parentName:"p"},"1000 times a second"),"!) Also, you can use ",(0,o.kt)("strong",{parentName:"p"},"fast-refresh")," to quickly see changes while developing or publish ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/react-native-code-push"},"over-the-air updates")," to tweak the Hotdog detector's sensitivity in live apps without pushing a native update."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Frame Processors require ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-reanimated"},(0,o.kt)("strong",{parentName:"a"},"react-native-reanimated"))," 2.2.0 or higher. Also make sure to add"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import 'react-native-reanimated'\n")),(0,o.kt)("p",{parentName:"div"},"to the top of the file when using ",(0,o.kt)("inlineCode",{parentName:"p"},"useFrameProcessor"),"."))),(0,o.kt)("h3",{id:"interacting-with-frame-processors"},"Interacting with Frame Processors"),(0,o.kt)("p",null,"Since Frame Processors run in ",(0,o.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-reanimated/docs/worklets"},(0,o.kt)("strong",{parentName:"a"},"Worklets")),", you can directly use JS values such as React state:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'// can be controlled with a Slider\nconst [sensitivity, setSensitivity] = useState(0.4)\n\nconst frameProcessor = useFrameProcessor((frame) => {\n  \'worklet\'\n  const isHotdog = detectIsHotdog(frame, sensitivity)\n  console.log(isHotdog ? "Hotdog!" : "Not Hotdog.")\n}, [sensitivity])\n')),(0,o.kt)("p",null,"You can also easily read from, and assign to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-reanimated/docs/shared-values"},(0,o.kt)("strong",{parentName:"a"},"Shared Values"))," to create smooth, 60 FPS animations."),(0,o.kt)("p",null,"In this example, we detect a cat in the frame - if a cat was found, we assign the ",(0,o.kt)("inlineCode",{parentName:"p"},"catBounds")," Shared Value to the coordinates of the cat (relative to the screen) which we can then use in a ",(0,o.kt)("inlineCode",{parentName:"p"},"useAnimatedStyle")," hook to position the red rectangle surrounding the cat. This updates in realtime on the UI Thread, and can also be smoothly animated with ",(0,o.kt)("inlineCode",{parentName:"p"},"withSpring")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"withTiming"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{6}","{6}":!0},"// represents position of the cat on the screen \ud83d\udc08\nconst catBounds = useSharedValue({ top: 0, left: 0, right: 0, bottom: 0 })\n\n// continously sets 'catBounds' to the cat's coordinates on screen\nconst frameProcessor = useFrameProcessor((frame) => {\n  'worklet'\n  catBounds.value = scanFrameForCat(frame)\n}, [catBounds])\n\n// uses 'catBounds' to position the red rectangle on screen.\n// smoothly updates on UI thread whenever 'catBounds' is changed\nconst boxOverlayStyle = useAnimatedStyle(() => ({\n  position: 'absolute',\n  borderWidth: 1,\n  borderColor: 'red',\n  ...catBounds.value\n}), [catBounds])\n\nreturn (\n  <View>\n    <Camera {...cameraProps} frameProcessor={frameProcessor} />\n    // draws a red rectangle on the screen which surrounds the cat\n    <Reanimated.View style={boxOverlayStyle} />\n  </View>\n)\n")),(0,o.kt)("p",null,"And you can also call back to the React-JS thread by using ",(0,o.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-reanimated/docs/api/runOnJS"},(0,o.kt)("inlineCode",{parentName:"a"},"runOnJS")),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{9}","{9}":!0},"const onQRCodeDetected = useCallback((qrCode: string) => {\n  navigation.push(\"ProductPage\", { productId: qrCode })\n}, [])\n\nconst frameProcessor = useFrameProcessor((frame) => {\n  'worklet'\n  const qrCodes = scanQRCodes(frame)\n  if (qrCodes.length > 0) {\n    runOnJS(onQRCodeDetected)(qrCodes[0])\n  }\n}, [onQRCodeDetected])\n")),(0,o.kt)("h3",{id:"using-frame-processor-plugins"},"Using Frame Processor Plugins"),(0,o.kt)("p",null,"Frame Processor Plugins are distributed through npm. To install the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/vision-camera-image-labeler"},(0,o.kt)("strong",{parentName:"a"},"vision-camera-image-labeler"))," plugin, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i vision-camera-image-labeler\ncd ios && pod install\n")),(0,o.kt)("p",null,"Then add it to your ",(0,o.kt)("inlineCode",{parentName:"p"},"babel.config.js"),". For the Image Labeler, this will be ",(0,o.kt)("inlineCode",{parentName:"p"},"__labelImage"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"{6}","{6}":!0},"module.exports = {\n  plugins: [\n    [\n      'react-native-reanimated/plugin',\n      {\n        globals: ['__labelImage'],\n      },\n    ],\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You have to restart metro-bundler for changes in the ",(0,o.kt)("inlineCode",{parentName:"p"},"babel.config.js")," file to take effect."))),(0,o.kt)("p",null,"That's it! \ud83c\udf89 Now you can use it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const frameProcessor = useFrameProcessor((frame) => {\n  'worklet'\n  const labels = labelImage(frame)\n  // ...\n}, [])\n")),(0,o.kt)("p",null,"Check out ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/frame-processor-plugin-list"},(0,o.kt)("strong",{parentName:"a"},"Frame Processor community plugins"))," to discover plugins, or ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/frame-processors-plugins-overview"},(0,o.kt)("strong",{parentName:"a"},"start creating a plugin yourself")),"!"),(0,o.kt)("h3",{id:"selecting-a-format-for-a-frame-processor"},"Selecting a Format for a Frame Processor"),(0,o.kt)("p",null,"When running frame processors, it is often important to choose an appropriate ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/formats"},"format"),". Here are some general tips to consider:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you are running heavy AI/ML calculations in your frame processor, make sure to ",(0,o.kt)("a",{parentName:"li",href:"/docs/guides/formats"},"select a format")," that has a lower resolution to optimize it's performance."),(0,o.kt)("li",{parentName:"ul"},"Sometimes a frame processor plugin only works with specific ",(0,o.kt)("a",{parentName:"li",href:"/docs/api/interfaces/CameraDeviceFormat#pixelformat"},"pixel formats"),". Some plugins (like MLKit) don't work with ",(0,o.kt)("inlineCode",{parentName:"li"},"x420"),".")),(0,o.kt)("h3",{id:"benchmarks"},"Benchmarks"),(0,o.kt)("p",null,"Frame Processors are ",(0,o.kt)("em",{parentName:"p"},"really")," fast. I have used ",(0,o.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/ml-kit/ios/label-images"},"MLKit Vision Image Labeling")," to label 4k Camera frames in realtime, and measured the following results:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fully natively (written in pure Objective-C, no React interaction at all), I have measured an average of ",(0,o.kt)("strong",{parentName:"li"},"68ms")," per call."),(0,o.kt)("li",{parentName:"ul"},"As a Frame Processor Plugin (written in Objective-C, called through a JS Frame Processor function), I have measured an average of ",(0,o.kt)("strong",{parentName:"li"},"69ms")," per call.")),(0,o.kt)("p",null,"This means that ",(0,o.kt)("strong",{parentName:"p"},"the Frame Processor API only takes ~1ms longer than a fully native implementation"),", making it ",(0,o.kt)("strong",{parentName:"p"},"the fastest and easiest way to run any sort of Frame Processing in React Native"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"All measurements are recorded on an iPhone 11 Pro, benchmarked total execution time of the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/avfoundation/avcapturevideodataoutputsamplebufferdelegate/1385775-captureoutput"},(0,o.kt)("inlineCode",{parentName:"a"},"captureOutput"))," function by using ",(0,o.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/corefoundation/1543542-cfabsolutetimegetcurrent"},(0,o.kt)("inlineCode",{parentName:"a"},"CFAbsoluteTimeGetCurrent")),". Running smaller images (lower than 4k resolution) is much quicker and many algorithms can even run at 60 FPS.")),(0,o.kt)("h3",{id:"avoiding-frame-drops"},"Avoiding Frame-drops"),(0,o.kt)("p",null,"Frame Processors will be ",(0,o.kt)("strong",{parentName:"p"},"synchronously")," called for each frame the Camera sees and have to finish executing before the next frame arrives, otherwise the next frame(s) will be dropped. For a frame rate of ",(0,o.kt)("strong",{parentName:"p"},"30 FPS"),", you have about ",(0,o.kt)("strong",{parentName:"p"},"33ms")," to finish processing frames. Use ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/CameraProps#frameprocessorfps"},(0,o.kt)("inlineCode",{parentName:"a"},"frameProcessorFps"))," to throttle the frame processor's FPS. For a QR Code Scanner, ",(0,o.kt)("strong",{parentName:"p"},"5 FPS")," (200ms) might suffice, while a object tracking AI might run at the same frame rate as the Camera itself (e.g. ",(0,o.kt)("strong",{parentName:"p"},"60 FPS")," (16ms))."),(0,o.kt)("h3",{id:"eslint-react-hooks-plugin"},"ESLint react-hooks plugin"),(0,o.kt)("p",null,"If you are using the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/eslint-plugin-react-hooks"},"react-hooks ESLint plugin"),", make sure to add ",(0,o.kt)("inlineCode",{parentName:"p"},"useFrameProcessor")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"additionalHooks")," inside your ESLint config. (See ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/eslint-plugin-react-hooks#advanced-configuration"},'"advanced configuration"'),")"),(0,o.kt)("h3",{id:"technical"},"Technical"),(0,o.kt)("h4",{id:"frame-processors"},"Frame Processors"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Frame Processors")," are JS functions that will be ",(0,o.kt)("strong",{parentName:"p"},"workletized")," using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-reanimated"},"react-native-reanimated"),". They are created on a ",(0,o.kt)("strong",{parentName:"p"},"parallel camera thread")," using a separate JavaScript Runtime (",(0,o.kt)("em",{parentName:"p"},'"VisionCamera JS-Runtime"'),") and are ",(0,o.kt)("strong",{parentName:"p"},"invoked synchronously")," (using JSI) without ever going over the bridge. In a ",(0,o.kt)("strong",{parentName:"p"},"Frame Processor")," you can write normal JS code, call back to the React-JS Thread (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"setState"),"), use ",(0,o.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-reanimated/docs/shared-values"},"Shared Values")," and call ",(0,o.kt)("strong",{parentName:"p"},"Frame Processor Plugins"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-vision-camera/blob/cf68a4c6476d085ec48fc424a53a96962e0c33f9/example/src/CameraPage.tsx#L199-L203"},(0,o.kt)("strong",{parentName:"a"},"the example Frame Processor")))),(0,o.kt)("h4",{id:"frame-processor-plugins"},"Frame Processor Plugins"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Frame Processor Plugins")," are native functions (written in Objective-C, Swift, C++, Java or Kotlin) that are injected into the VisionCamera JS-Runtime. They can be ",(0,o.kt)("strong",{parentName:"p"},"synchronously called")," from your JS Frame Processors (using JSI) without ever going over the bridge. Because VisionCamera provides an easy-to-use plugin API, you can easily create a ",(0,o.kt)("strong",{parentName:"p"},"Frame Processor Plugin")," yourself. Some examples include ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/ml-kit/vision/barcode-scanning"},"Barcode Scanning"),", ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/ml-kit/vision/face-detection"},"Face Detection"),", ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/ml-kit/vision/image-labeling"},"Image Labeling"),", ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/ml-kit/vision/text-recognition"},"Text Recognition")," and more."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Learn how to ",(0,o.kt)("a",{parentName:"p",href:"frame-processors-plugins-overview"},(0,o.kt)("strong",{parentName:"a"},"create Frame Processor Plugins")),", or check out the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-vision-camera/blob/main/example/ios/Frame%20Processor%20Plugins/Example%20Plugin%20(Swift)/ExamplePluginSwift.swift"},(0,o.kt)("strong",{parentName:"a"},"example Frame Processor Plugin for iOS"))," or ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-vision-camera/blob/main/example/android/app/src/main/java/com/mrousavy/camera/example/ExampleFrameProcessorPlugin.java"},(0,o.kt)("strong",{parentName:"a"},"Android")),".")),(0,o.kt)("h4",{id:"the-frame-object"},"The ",(0,o.kt)("inlineCode",{parentName:"h4"},"Frame")," object"),(0,o.kt)("p",null,"The Frame Processor gets called with a ",(0,o.kt)("inlineCode",{parentName:"p"},"Frame")," object, which is a ",(0,o.kt)("strong",{parentName:"p"},"JSI HostObject"),". It holds a reference to the native (C++) Frame Image Buffer (~10 MB in size) and exposes properties such as ",(0,o.kt)("inlineCode",{parentName:"p"},"width"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"height"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"bytesPerRow")," and more to JavaScript so you can synchronously access them. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Frame")," object can be passed around in JS, as well as returned from- and passed to a native ",(0,o.kt)("strong",{parentName:"p"},"Frame Processor Plugin"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"See ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/mrousavy/status/1412300883149393921"},(0,o.kt)("strong",{parentName:"a"},"this tweet"))," for more information.")),(0,o.kt)("h3",{id:"disabling-frame-processors"},"Disabling Frame Processors"),(0,o.kt)("p",null,"The Frame Processor API spawns a secondary JavaScript Runtime which consumes a small amount of extra CPU and RAM. Additionally, compile time increases since Frame Processors are written in native C++. If you're not using Frame Processors at all, you can disable them:"),(0,o.kt)(s.Z,{groupId:"environment",defaultValue:"rn",values:[{label:"React Native",value:"rn"},{label:"Expo",value:"expo"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"rn",mdxType:"TabItem"},(0,o.kt)("h4",{id:"android"},"Android"),(0,o.kt)("p",null,"Inside your ",(0,o.kt)("inlineCode",{parentName:"p"},"gradle.properties")," file, add the ",(0,o.kt)("inlineCode",{parentName:"p"},"disableFrameProcessors")," flag:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"disableFrameProcessors=true\n")),(0,o.kt)("p",null,"Then, clean and rebuild your project."),(0,o.kt)("h4",{id:"ios"},"iOS"),(0,o.kt)("p",null,"Inside your ",(0,o.kt)("inlineCode",{parentName:"p"},"project.pbxproj"),", find the ",(0,o.kt)("inlineCode",{parentName:"p"},"GCC_PREPROCESSOR_DEFINITIONS")," group and add the flag:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt",metastring:"{3}","{3}":!0},'GCC_PREPROCESSOR_DEFINITIONS = (\n  "DEBUG=1",\n  "VISION_CAMERA_DISABLE_FRAME_PROCESSORS=1",\n  "$(inherited)",\n);\n')),(0,o.kt)("p",null,"Make sure to add this to your Debug-, as well as your Release-configuration.")),(0,o.kt)(i.Z,{value:"expo",mdxType:"TabItem"},(0,o.kt)("p",null,"Inside your Expo config (",(0,o.kt)("inlineCode",{parentName:"p"},"app.json"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"app.config.json")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"app.config.js"),"), add the ",(0,o.kt)("inlineCode",{parentName:"p"},"disableFrameProcessors")," flag:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "my app",\n  "plugins": [\n    [\n      "react-native-vision-camera",\n      {\n        // ...\n        "disableFrameProcessors": true\n      }\n    ]\n  ]\n}\n')))),(0,o.kt)("br",null),(0,o.kt)("h4",{id:"-next-section-zooming-or-creating-a-frame-processor-plugin"},"\ud83d\ude80 Next section: ",(0,o.kt)("a",{parentName:"h4",href:"/docs/guides/zooming"},"Zooming")," (or ",(0,o.kt)("a",{parentName:"h4",href:"/docs/guides/frame-processors-plugins-overview"},"creating a Frame Processor Plugin"),")"))}g.isMDXComponent=!0}}]);