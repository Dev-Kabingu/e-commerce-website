"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[40964],{549359:(e,t,n)=>{var a;n.r(t),n.d(t,{default:()=>l});let r={fragment:{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useFragmentWithoutSuspenseDONOTUSENoOpQuery",selections:a=[{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"__id",storageKey:null}]}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[],kind:"Operation",name:"useFragmentWithoutSuspenseDONOTUSENoOpQuery",selections:a},params:{cacheID:"9d9a0b4361770e7457fb22c606b3e5f1",id:null,metadata:{},name:"useFragmentWithoutSuspenseDONOTUSENoOpQuery",operationKind:"query",text:null}};r.hash="de96be885f09f9032378528575433b38";let l=r;!function(e){if("query"===e.params.operationKind){if(window.__pwsCacheRelayConcreteRequest)window.__pwsCacheRelayConcreteRequest(e);else{let t=[e.params.name,e.params.id].join(":");window.__PWS_RELAY_CONCRETE_REQUEST_CACHE__=window.__PWS_RELAY_CONCRETE_REQUEST_CACHE__||{},window.__PWS_RELAY_CONCRETE_REQUEST_CACHE__[t]=e}}}(r.default||r)},200309:(e,t,n)=>{n.d(t,{Z:()=>a});function a(e,t){throw Error(t??`Unexpected value: ${JSON.stringify(e)}`)}},381458:(e,t,n)=>{n.d(t,{Z:()=>_,G:()=>g});var a=n(441143),r=n.n(a),l=n(244311),i=n(698681),o=n(226618);let u="undefined"!=typeof WeakSet,s="undefined"!=typeof WeakMap,c=function e(t,n){if(t===n||"object"!=typeof t||t instanceof Set||t instanceof Map||u&&t instanceof WeakSet||s&&t instanceof WeakMap||!t||"object"!=typeof n||n instanceof Set||n instanceof Map||u&&n instanceof WeakSet||s&&n instanceof WeakMap||!n)return n;let a=!1,r=Array.isArray(t)?t:null,l=Array.isArray(n)?n:null;if(r&&l)a=l.reduce((t,n,a)=>{let i=e(r[a],n);return i!==l[a]&&(l[a]=i),t&&i===r[a]},!0)&&r.length===l.length;else if(!r&&!l){let r=(0,o.G5)(n);if(r&&(0,o.I9)(t,r),t===n)a=!0;else{let r=Object.keys(t),l=Object.keys(n);a=l.reduce((a,r)=>{let l=e(t[r],n[r]);return l!==n[r]&&(n[r]=l),a&&l===t[r]},!0)&&r.length===l.length}}return a?t:n};var d=n(589209),p=n(333739),f=n(953565);let g=Symbol("inlineFragmentSpread"),y=({conditionContext:e,fragmentName:t,mutableOutput:n,parentType:a,selections:l,legacyData:u,paginationInfo:s,refetchInfo:c})=>{l.forEach(l=>{switch(l.kind){case"ScalarField":{let{alias:e,name:t}=l;n[e??t]=(0,i.mC)(t,a,u);break}case"LinkedField":{let{alias:o,name:d,concreteType:p,plural:f,selections:g}=l,m=o??d,_=(0,i.LJ)(u,a,l);if(null==_){n[m]=_;return}if(f){let a=(0,i.cG)({untypedInput:_,concreteType:p}),l=n[m];r()(!l||Array.isArray(l),"plural data must be an array"),n[m]=a?.filter(Boolean).map((n,a)=>{let r=l?.[a]??{};return y({conditionContext:e,fragmentName:t,mutableOutput:r,parentType:p,selections:g,legacyData:n,refetchInfo:c,paginationInfo:s}),r})}else{r()("object"==typeof _,`Value for ${d} must be an object${p?` with type ${p}`:""}, but a ${typeof _} is given`);let a=n[m]??{};n[m]=a,y({conditionContext:e,fragmentName:t,mutableOutput:a,parentType:p,selections:g,legacyData:_,refetchInfo:c,paginationInfo:s})}break}case"InlineFragment":{let{abstractKey:a,type:o,selections:d}=l;if(r()(null!=o&&null===a,"We only support using inline fragment to refine to concrete types for now. Contact @jackhsu or @robertbalicki"),null==u)break;let p=(0,i.uC)(u);null!=p&&(0,i.Z1)(o,p)&&y({conditionContext:e,fragmentName:t,mutableOutput:n,parentType:o,selections:d,legacyData:u,paginationInfo:s,refetchInfo:c});break}case"Condition":{let{condition:r,selections:i}=l,o=!0;"isAuth"===r?o=e.isAuth===l.passingValue:"isDesktop"===r&&(o=e.isDesktop===l.passingValue),o&&y({conditionContext:e,fragmentName:t,mutableOutput:n,parentType:a,selections:i,legacyData:u,paginationInfo:s,refetchInfo:c});break}case"FragmentSpread":(0,o.I9)(n,{kind:"LegacyData",singularLegacyData:u,refetchInfo:c,paginationInfo:s});break;case"ClientExtension":y({conditionContext:e,fragmentName:t,mutableOutput:n,parentType:a,selections:l.selections,legacyData:u,paginationInfo:s,refetchInfo:c});break;case"InlineDataFragmentSpread":{let t={},{selections:r,name:i}=l;y({conditionContext:e,fragmentName:i,mutableOutput:t,parentType:a,selections:r,legacyData:u,paginationInfo:s,refetchInfo:c}),n[g]||(n[g]={}),n[g][i]=t;break}case"Defer":case"Stream":case"ActorChange":case"FlightField":case"ModuleImport":case"RelayResolver":case"RequiredField":case"RelayLiveResolver":case"AliasedFragmentSpread":case"ClientEdgeToClientObject":case"ClientEdgeToServerObject":case"AliasedInlineFragmentSpread":throw Error(`The selection type '${l.kind}' is not supported yet. Contact @jackhsu or @robertbalicki`);default:throw Error(`Unexpected selection type '${l.kind}'`)}})},m=new Set;function _({conditionContext:e,fragment:t,legacyData:n,paginationInfo:a,refetchInfo:o,stableReferencesExperimentStatus:u}){let s;let g=(0,l.getFragment)(t);try{s=function({conditionContext:e,fragment:t,legacyData:n,paginationInfo:a,refetchInfo:l}){if(null==t.abstractKey){let e=null!=n?(0,i.uC)(n):null;null!=e&&r()((0,i.Z1)(t.type,e),`fragment data type '${t.type}' does not match legacy data type '${e}'. See http://pinch.pinadmin.com/fragment-data-type-does-not-match-legacy-data-type.`)}let o={};return y({conditionContext:e,fragmentName:t.name,mutableOutput:o,parentType:t.type,selections:t.selections,legacyData:n,paginationInfo:a,refetchInfo:l}),o}({conditionContext:e,fragment:g,legacyData:n,paginationInfo:a,refetchInfo:o})}catch(t){throw m.has(g.name)||(m.add(g.name),(0,f.nP)("autoLegacyAdapter.erroredReadResults",{sampleRate:1,tags:{fragmentName:g.name,rootId:n.id,rootType:n.type,url:window.location.href,isAuth:e.isAuth}})),t}let _=n.id;if(!u?.shouldCalculateStableReferences||!_)return s;let[S,h]=(0,p.lg)(()=>(function({cacheKey:e,data:t}){let n=(0,d.aL)(e),a=t;if(null!=n){let r=c(n.data,t);r!==n.data&&(0,d.ax)(e,{count:n.count,data:r}),a=r}else(0,d.ax)(e,{count:0,data:t});return(0,d.U5)(e),setTimeout(()=>(0,d.H8)(e),3e4),a})({cacheKey:(0,d._0)(g,n.id),data:s}));return((0,f.LY)("autoLegacyAdapter.stableReferences.duration",h,{sampleRate:.1,tags:{fragmentName:g.name}}),u?.shouldUseStableReferences)?S:s}},698681:(e,t,n)=>{n.d(t,{Cs:()=>y,LJ:()=>b,Z1:()=>A,cG:()=>E,mC:()=>C,uC:()=>D});var a=n(441143),r=n.n(a);let l={vDASHHEVCSLCONTROL:"V_DASH_HEVC_SL_CONTROL",vHLSHEVC2SEC:"V_HLS_HEVC_2_SEC",vHLSHEVCSLCONTROL:"V_HLS_HEVC_SL_CONTROL",vHLSSINGLEFILECMAFEXP:"V_HLS_SINGLE_FILE_CMAF_EXP",vHLSSINGLEFILECONTROL:"V_HLS_SINGLE_FILE_CONTROL",vHLSSINGLEFILETSEXP:"V_HLS_SINGLE_FILE_TS_EXP",vHLSSLCONTROL:"V_HLS_SL_CONTROL",vHLSV3:"V_HLSV3",vHLSV3EXP:"V_HLSV3_EXP",vHLSV3MOBILE:"V_HLSV3_MOBILE",vHLSV3WEB:"V_HLSV3_WEB",vHLSV4:"V_HLSV4",vLOWBITRATEEXPHLSHEVCCONTROL:"V_LOW_BITRATE_EXP_HLS_HEVC_CONTROL",vLOWBITRATEEXPHLSHEVCLOB:"V_LOW_BITRATE_EXP_HLS_HEVC_LOB",vLOWBITRATEEXPHLSHEVCLQS:"V_LOW_BITRATE_EXP_HLS_HEVC_LQS"},i=/(\d\d0P)(\d\d0K)/,o=/QVBR(8|10)/,u=/(EXP\d?|ADSHQ|AVC|DASH|MANI|HIGHQUAL|HEVC|HLS|H265|H264|720P?|MP4|ENABLED|CONTROL|PROD|T\d|Q?VBR\d*|AUTOABR|MEDIACONVERT|QUALITY|REARRANGED|REMHIGHRES|VISIONULAR|480$|640$|V2$|\dSEC$|\d\d0P\d\d0K$)/g,s=/^v/,c=e=>l[e]??e.replace(u,"_$1").replace(i,"$1_$2").replace(o,"QVBR_$1").replace("ADSHQ","ADS_HQ").replace("HIGHQUAL","HIGH_QUAL").replace("REMHIGHRES","REM_HIGH_RES").replace(s,"V"),d=/[A-Z]/g,p=e=>e.replace(d,e=>`_${e.toLowerCase()}`),f=/^_/,g=e=>e.replace(f,""),y=e=>g(p(e)),m=["actionOptions","feedbackText","selectedItem","savedInfo","undoCallbackProps"],_=["boardId","localPinId","showFeedback","showFeedbackOverlay","sectionId","subTitle","viewType","viewParameter"],S=(e,t)=>{if(_.includes(e))return e;switch(e){case"entityId":return"id";case"__id":return r()(t.node_id,"node_id is missing. Please only select the __id field on objects which have an id field."),"node_id";default:return y(e)}},h=e=>"StoryPinPage"===e||"StoryPinImageBlock"===e,L=(e,t,n)=>{if(h(n)){if("images"===e)return"image";if("imagesAdjusted"===e)return"image_adjusted"}if("PinTagChipImagesPerSpec"===n&&"image"===e)return"images";if("VideoDetail"===t)return c(e);if(m.includes(e))return e;switch(e){case"reactionCountsData":return"reaction_counts";case"videoData":return"video";case"formattedCloseupDescription":return"formatted_description";case"annotationsWithLinksArray":return"annotations_with_links";default:return y(e)}},k=(e,t)=>{switch(e){case"reactionType":return"string"==typeof t?Number(t):t;case"campaignId":case"pinPromotionId":return"number"==typeof t?String(t):t;default:return t}},C=(e,t,n)=>"Video"===t&&"duration"===e?n?.duration!=null?n.duration:Object.values(n?.video_list||{}).find(e=>e?.duration!=null)?.duration:"__typename"===e?t:k(e,n?.[S(e,n)]),E=({untypedInput:e,concreteType:t})=>{if(!e)return null;switch(r()("object"==typeof e,"legacy data must be an object"),t){case"AnnotationsWithLinks":return Object.entries(e).map(([e,t])=>({name:t.name,url:t.url}));case"ReactionCountModel":return Object.entries(e).map(([e,t])=>({reaction_type:e,reaction_count:t}));case"PinThroughProperties":case"ThroughProperties":case"TrackingParamsMap":return Object.entries(e).map(([e,t])=>({key:e,data:t}));default:if(Array.isArray(e))return e;return Object.entries(e).map(([e,t])=>({key:e,value:t}))}},I=({args:e,name:t})=>{let n=e.find(e=>e.name===t);return n&&"string"==typeof n.value?n.value:null},b=(e,t,n)=>{let{args:a,name:l}=n;if("PinTagChipImagesPerSpec"===t&&"image"===l)return e?.images?.["750x"];let i=e?.[L(l,n.concreteType,t)];if(!i)return i;let o=I({args:a??[],name:"spec"});if(o){if(r()("object"==typeof i,"value must be an object"),h(t)){let{dominant_color:e,images:t}=i;if(!t)return t;r()("object"==typeof t,"images must be an object");let n=t["orig"===o?"originals":o];return n&&e?{...n,dominant_color:e}:n}return i[o]}return i},R={HeadingBlock:"StoryPinHeadingBlock",IngredientBlock:"StoryPinIngredientBlock",InstantContentURLNavigateAction:"InstantContentActionUrlNavigate",InstantContentHeaderBlock:"InstantContentHeader",InstantContentParagraphBlock:"InstantContentParagraph",InstantContentTextBlock:"InstantContentText",InstantContentHeadingBlock:"InstantContentHeading",InstantContentImageBlock:"InstantContentImage",InstantContentVideoBlock:"InstantContentVideo",InstantContentTableBlock:"InstantContentTable",InstantContentGroupBlock:"InstantContentGroup",InstantContentOrderedListBlock:"InstantContentOrderedList",InstantContentUnorderedListBlock:"InstantContentUnorderedList",InstantContentSectionBlock:"InstantContentSection",InstantContentSeparatorBlock:"InstantContentSeparator",InstantContentUserBlock:"InstantContentUser",InstantContentWebBlock:"InstantContentWeb",InstantContentPromotedWebBlock:"InstantContentPromotedWeb",LinkBlock:"StoryPinLinkBlock",ParagraphBlock:"StoryPinParagraphBlock",SupplyBlock:"StoryPinSupplyBlock",TextBlock:"StoryPinTextBlock",DescriptionString:"FormattedDescriptionParagraphComponent",DescriptionHeader:"FormattedDescriptionHeaderComponent",DescriptionPoints:"FormattedDescriptionPointsComponent",DescriptionStringBold:"FormattedDescriptionBoldComponent",DescriptionTable:"FormattedDescriptionTableComponent",DescriptionSpecs:"FormattedDescriptionSpecsComponent",RichPinProductMetadata:"RichProductMetadata"},A=(e,t)=>(R[e]??e).toLowerCase()===t,P={0:"StoryPinParagraphBlock",1:"StoryPinHeadingBlock",2:"StoryPinImageBlock",3:"StoryPinVideoBlock",4:"StoryPinLinkBlock",5:"StoryPinIngredientBlock",6:"StoryPinSupplyBlock",7:"StoryPinListBlock",8:"StoryPinKeyValueBlock",9:"StoryPinTextBlock",11:"StoryPinMusicBlock",12:"StoryPinMentionStickerBlock",13:"StoryPinProductStickerBlock",14:"StoryPinStaticStickerBlock",15:"StoryPinAnimatedStickerBlock",16:"StoryPinCommentReplyBlock",17:"StoryPinVirtualTryOnMakeupStickerBlock",18:"StoryPinAdBlock",19:"StoryPinGenericInteractiveStickerBlock"},O=/_/g,D=e=>"string"==typeof e.type?e.type.replace(O,"").toLowerCase():"number"==typeof e.block_type?P[e.block_type].toLowerCase():void 0},91402:(e,t,n)=>{n.d(t,{gP:()=>r,jc:()=>i,oy:()=>l});var a=n(226618);function r(e){if(Array.isArray(e)){let t=e[0];if(null==t)return{kind:"PluralLegacy",data:[],paginationInfo:null,refetchInfo:null};if(null!=t.__fragments)return{kind:"GraphQL",data:e};let n=(0,a.G5)(t);if(null!=n)return{kind:"PluralLegacy",data:e.map(e=>(e=>{let t=(0,a.Be)(e);if("LegacyData"===t.kind)return t.singularLegacyData;throw Error("Unexpected plural object")})(e)),paginationInfo:n.paginationInfo,refetchInfo:n.refetchInfo};throw Error("Expected either __fragments or [legacyDataSymbol]")}let t=(0,a.G5)(e);if(null!=t&&"LegacyData"===t.kind){let{singularLegacyData:e,refetchInfo:n,paginationInfo:a}=t;return{kind:"SingularLegacy",data:e,refetchInfo:n,paginationInfo:a}}if(e.__fragments)return{kind:"GraphQL",data:e};if("graphqlRef"===e.type)return{kind:"GraphQL",data:e.data};if("deprecated"===e.type){let{data:t}=e;return Array.isArray(t)?{kind:"PluralLegacy",data:t,refetchInfo:null,paginationInfo:null}:{kind:"SingularLegacy",data:t,refetchInfo:null,paginationInfo:null}}throw Error("Invalid value")}function l(e){return r(e).kind}function i(e){let t=(0,a.G5)(e);return null!=t&&"LegacyData"===t.kind&&null!=t.singularLegacyData?{type:"deprecated",data:t.singularLegacyData}:e.__fragments?{type:"graphqlRef",data:e}:e}},226618:(e,t,n)=>{n.d(t,{Be:()=>l,G5:()=>r,I9:()=>i});let a=Symbol("legacyData");function r(e){return e[a]}function l(e){return e[a]}function i(e,t){return e[a]=t,e}},333739:(e,t,n)=>{n.d(t,{qH:()=>R,tx:()=>A,lg:()=>L,Zm:()=>_,HF:()=>I,sr:()=>b,O7:()=>S,V4:()=>E});var a=n(545007),r=n(381458);function l(e){return null==e?"null or undefined":Array.isArray(e)?"Array":typeof e}function i(e,t,n){return"Manual"===t?{path:e,message:`Value found only in legacy adapter, where it had type ${l(n)}. (Or it was null in the auto-legacy adapter.)`,kind:"MissingInLegacy"}:{path:e,message:`Value found only in auto-legacy adapter, where it had type ${l(n)}. (Or it was null in the legacy adapter.)`,kind:"MissingInAutoLegacy"}}function o(e,t,n){let a=l(t),r=l(n);return{path:e,message:`Found item of type ${a} in the legacy adapter result, and an item of type ${r} in the auto-legacy result.`,kind:"Type"}}var u=n(226618),s=n(582008),c=n(340523),d=n(5859),p=n(554786),f=n(19447),g=n(953565);let y={},m=new Set;function _(e,t,{useGraphQLAdapter:n,useLegacyAdapter:a,renderStrategy__DO_NOT_USE:r}){if("deprecated"===t.type)return{data:a(t.data),childDataKey__DEPRECATED:t};let l=(0,s.h)(e,t.data,r??null);return{data:n(l),childDataKey__DEPRECATED:{type:"graphqlRef",data:l}}}let S=()=>{let{isAuthenticated:e}=(0,d.B)();return{isAuth:!!e,isDesktop:(0,p.HG)()}};function h(){return"undefined"!=typeof performance?performance.now():Date.now()}function L(e){let t=h();return[e(),h()-t]}let k=new Map;function C(e,t,n,a){let r=k.get(a);if(r){if(!r.has(t)){let[a,l]=L(e);return r.add(t),(0,g.LY)(t,l,{sampleRate:n.isParallel?1:.1,tags:n}),a}}else{let[r,l]=L(e);return k.set(a,new Set([t])),(0,g.LY)(t,l,{sampleRate:n.isParallel?1:.1,tags:n}),r}return e()}function E(e,t){let{checkExperiment:n}=(0,c.F)(),{isAuthenticated:a}=(0,d.B)(),{group:s,anyEnabled:p}=n(a?"web_graphql_auto_legacy_adapters_auth":"web_graphql_auto_legacy_adapters_unauth"),f=S();return s.includes("parallel")?n=>{let a=C(()=>(0,u.I9)(t(n),{kind:"LegacyData",singularLegacyData:n,refetchInfo:null,paginationInfo:null}),"autoLegacyAdapter.legacyTiming",{isParallel:!0,fragmentName:e.name},e.name);return"object"==typeof window&&function(e,t,n,a){let u;try{u=C(()=>(0,r.Z)({conditionContext:t,fragment:e,legacyData:n,refetchInfo:null,paginationInfo:null}),"autoLegacyAdapter.autoLegacyTiming",{fragmentName:e.name,isParallel:!0},e.name)}catch{return}try{var s;let t=(s=u,function e(t,n,a){let r=[],u=Object.keys(n),s=Object.keys(a);for(let s of u){let u=n[s],c=a[s];r.push(...function t(n,a,r){return null!=a&&null==r?[i(n,"Manual",a)]:a===r||null==a&&null==r?[]:Array.isArray(a)?Array.isArray(r)?function(e,n,a){if(n.length!==a.length)return[{path:e,message:`legacyResult is an array of length ${n.length}; autoLegacyResult is an array of length ${a.length}`,kind:"Length"}];let r=[];for(let l=0;l<n.length;l+=1){let i=n[l],o=a[l];r.push(...t(`${e}[]`,i,o))}return r}(n,a,r):[o(n,a,r)]:"object"==typeof a?"object"==typeof r&&null!==r&&null!==a?e(n,a,r):[o(n,a,r)]:[typeof a!=typeof r?o(n,a,r):{path:n,message:`Found items of type ${l(a)}, but their values did not match.`,kind:"Value"}]}(`${t}.${s}`,u,c))}for(let e of s){let l=n[e],o=a[e];null!=o&&null==l&&r.push(i(`${t}.${e}`,"Auto",o))}return r}("",a,s));if(t.length>0){window.SHOULD_LOG_ADAPTER_DIFFERENCES&&console.warn({differences:t,fragment:e.name}),y[e.name]=y[e.name]??new Set;let n=y[e.name];for(let a of t)n.has(a.path)||(n.add(a.path),(0,g.nP)("autoLegacyAdapter.inconsistentReadResults",{sampleRate:1,tags:{fragmentName:e.name,path:a.path,kind:a.kind}}))}}catch(t){m.has(e.name)||(m.add(e.name),window.SHOULD_LOG_ADAPTER_DIFFERENCES&&console.warn(`comparing results threw for fragment ${e.name}`),(0,g.nP)("autoLegacyAdapter.erroredCompareResults",{sampleRate:1,tags:{fragmentName:e.name}}))}}(e,f,n,a),a}:p?t=>C(()=>(0,r.Z)({conditionContext:f,fragment:e,legacyData:t,refetchInfo:null,paginationInfo:null}),"autoLegacyAdapter.autoLegacyTiming",{fragmentName:e.name,isParallel:!1},e.name):n=>C(()=>(0,u.I9)(t(n),{kind:"LegacyData",singularLegacyData:n,refetchInfo:null,paginationInfo:null}),"autoLegacyAdapter.legacyTiming",{fragmentName:e.name,isParallel:!1},e.name)}function I(e,t,n){let r;switch(n.type){case"article":r=e=>{let t=(0,a.v9)(({articles:t})=>t[e]);return t?n.useLegacyAdapter(t):null};break;case"story":r=e=>{let t=(0,a.v9)(({stories:t})=>t[e]);return t?n.useLegacyAdapter(t):null};break;default:r=e=>{let t=(0,f.S6)()(e);return t?n.useLegacyAdapter(t):null}}return _(e,t,{useGraphQLAdapter:n.useGraphQLAdapter,useLegacyAdapter:r,renderStrategy__DO_NOT_USE:n.renderStrategy__DO_NOT_USE??null})}function b(e,t,n){let a=E(e,n.useLegacyAdapter);return I(e,t,{...n,useGraphQLAdapter:e=>e,useLegacyAdapter:a})}let R=void 0,A={" $fragmentSpreads":R," $fragmentType":void 0}},589209:(e,t,n)=>{n.d(t,{H8:()=>s,Ly:()=>o,U5:()=>u,_0:()=>p,aL:()=>c,ax:()=>d,w3:()=>f});var a=n(340523),r=n(5859),l=n(953565);let i=new Map;function o(e){let t=(0,a.F)(),{isAuthenticated:n}=(0,r.B)();if(!e)return{shouldCalculateStableReferences:!1,shouldUseStableReferences:!1};switch(t.checkExperiment(n?"auth_web_gql_ala_cache":"unauth_web_gql_ala_cache").group){case"control":default:return{shouldCalculateStableReferences:!1,shouldUseStableReferences:!1};case"enabled":return{shouldCalculateStableReferences:!0,shouldUseStableReferences:!0};case"enabled_only_calculation":return{shouldCalculateStableReferences:!0,shouldUseStableReferences:!1}}}function u(e){let t=i.get(e);t&&i.set(e,{count:t.count+1,data:t.data})}function s(e){let t=i.get(e);if(!t){let t=e.split("/")[0];throw(0,l.nP)("autoLegacyAdapter.stableReferences.cacheItemMissing",{sampleRate:1,tags:{fragmentName:t}}),Error(`Item with key ${e} not found in cache`)}if(1===t.count){i.delete(e);return}i.set(e,{count:t.count-1,data:t.data})}function c(e){return i.get(e)}function d(e,t){i.set(e,t)}function p(e,t){return`${e.name}/${t}`}function f(e,t,n){let a=t?.id;return a?{key:p(e,a),data:n}:null}},986631:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(422578),r=n(244311),l=n(200309),i=n(91402),o=n(667294),u=n(381458),s=n(333739),c=n(589209),d=n(953565);let p=function(e,t,n,a){let r=(0,c.Ly)(n),l=(0,s.O7)(),i=(0,o.useMemo)(()=>{if(t?.kind==="SingularLegacy"&&a(t)){let{data:n,refetchInfo:a,paginationInfo:i}=t,o=(0,u.Z)({conditionContext:l,fragment:e,legacyData:n,paginationInfo:i,refetchInfo:a,stableReferencesExperimentStatus:r});return{itemsToRetain:[{legacyData:n,graphQLShapedData:o}],autoLegacyAdapterData:[o]}}if(t?.kind==="PluralLegacy"){let{data:n,refetchInfo:a,paginationInfo:i}=t,o=[],s=[];return n.forEach(t=>{let c=(0,u.Z)({conditionContext:l,fragment:e,legacyData:t,paginationInfo:i,refetchInfo:a,stableReferencesExperimentStatus:r});o?.push(c),s?.push({legacyData:n,graphQLShapedData:c})}),{itemsToRetain:s,autoLegacyAdapterData:o}}return null},[t?.data]);return!function({items:e,shouldCalculateStableReferences:t}){(0,o.useEffect)(()=>{if(e&&t)return e.forEach(e=>{let{key:t,data:n}=e;if(!(0,c.aL)(t)){let e=t.split("/")[0];(0,d.nP)("autoLegacyAdapter.stableReferences.useRetainWhileMounted.cacheItemMissing",{sampleRate:1,tags:{fragmentName:e}}),(0,c.ax)(t,{count:0,data:n})}(0,c.U5)(t)}),()=>{e.forEach(({key:e})=>(0,c.H8)(e))}},[e?.map(({key:e})=>e).join(","),t])}({items:i?.itemsToRetain?.map(({legacyData:t,graphQLShapedData:n})=>c.w3(e,t,n)).filter(e=>null!=e),shouldCalculateStableReferences:r.shouldCalculateStableReferences}),i?.autoLegacyAdapterData},f=function(e,t){let n=t?(0,i.gP)(t):null,o=n?.kind==="SingularLegacy"||n?.kind==="PluralLegacy",u=p((0,r.getFragment)(e),n,o,()=>!0);if(null===t||null==n)return null;switch(n.kind){case"SingularLegacy":return u?.[0];case"PluralLegacy":return u;case"GraphQL":return(0,a.useFragment)(e,n.data);default:return(0,l.Z)(n,"Unexpected case")}}},582008:(e,t,n)=>{n.d(t,{P:()=>d,h:()=>p});var a,r=n(667294),l=n(422578),i=n(244311),o=n(91402),u=n(986631);function s(e,t,r){return r.lookup({kind:"SingularReaderSelector",dataID:t.__id,isWithinUnmatchedTypeRefinement:!1,node:(0,i.getFragment)(e),owner:{identifier:Math.random()+"",node:(0,i.getRequest)(void 0!==a?a:a=n(549359)),variables:t.__fragmentOwner.variables,cacheConfig:null},variables:t.__fragmentOwner.variables})}function c(e,t,n){switch(n??"SuspendOnMissingData"){case"SuspendOnMissingData":default:return(0,l.useFragment)(e,t);case"RenderWithMissingData":{let n=(0,l.useRelayEnvironment)();if(null==t)return null;return s(e,t,n).data}case"RenderWithMissingDataAndSubscribe":return function(e,t){let n=t?.__fragmentOwner.identifier,a=(0,l.useRelayEnvironment)(),[i,o]=(0,r.useState)(()=>({fragmentRefIdentifier:n,snapshot:null!=t?s(e,t,a):null}));return i.fragmentRefIdentifier!==n&&o({fragmentRefIdentifier:n,snapshot:null!=t?s(e,t,a):null}),(0,r.useEffect)(()=>{if(null!=i.snapshot){let e=a.subscribe(i.snapshot,e=>{o({fragmentRefIdentifier:n,snapshot:e})});return()=>e.dispose()}},[n]),i.snapshot?.data??null}(e,t)}}let d=function(e,t,n){if(null==t)return null;let a=(0,o.gP)(t);return"GraphQL"===a.kind?c(e,a.data,n):(0,u.Z)(e,t)},p=c}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/40964-5a995acd2d758629.mjs.map