"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[27076],{600354:(e,a,t)=>{var i,r;t.r(a),t.d(a,{default:()=>s});let n={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PinTypeIdentifier_pin",selections:[{alias:null,args:null,concreteType:"Attribution",kind:"LinkedField",name:"attribution",plural:!1,selections:[i={alias:null,args:null,concreteType:"Embed",kind:"LinkedField",name:"embed",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"type",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PinCarouselData",kind:"LinkedField",name:"carouselData",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"index",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"entityId",storageKey:null},{alias:null,args:null,concreteType:"PinCarouselSlot",kind:"LinkedField",name:"carouselSlots",plural:!0,selections:r=[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}],storageKey:null},i,{alias:null,args:null,concreteType:"RichPinGridData",kind:"LinkedField",name:"richSummary",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"typeName",storageKey:null},{alias:null,args:null,concreteType:"RichPinProductMetadata",kind:"LinkedField",name:"products",plural:!0,selections:[{alias:null,args:null,concreteType:"LabelInfo",kind:"LinkedField",name:"labelInfo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"labels",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"OfferSummary",kind:"LinkedField",name:"offerSummary",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"maxPrice",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"price",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"storyPinDataId",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"shouldOpenInStream",storageKey:null},{alias:null,args:null,concreteType:"Video",kind:"LinkedField",name:"videos",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"duration",storageKey:null},{alias:null,args:null,concreteType:"VideoList",kind:"LinkedField",name:"videoList",plural:!1,selections:r,storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"promoter",plural:!1,selections:r,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isDownstreamPromotion",storageKey:null},{alias:null,args:null,concreteType:"ProductMetadataV2",kind:"LinkedField",name:"productPinData",plural:!1,selections:[{alias:null,args:null,concreteType:"ItemMetadata",kind:"LinkedField",name:"items",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"additionalImagesLength",storageKey:null}],storageKey:null}],storageKey:null},{alias:"imageSpec_orig",args:[{kind:"Literal",name:"spec",value:"orig"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:r,storageKey:'images(spec:"orig")'},{alias:null,args:null,concreteType:"StoryPinData",kind:"LinkedField",name:"storyPinData",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"staticPageCount",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"totalVideoDuration",storageKey:null}],storageKey:null}],type:"Pin",abstractKey:null};n.hash="80b7e3dc9560d77c9c21fddd19c4e32f";let s=n},670295:(e,a,t)=>{t.r(a),t.d(a,{default:()=>r});let i={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useReactionCounts_pin",selections:[{alias:null,args:null,concreteType:"ReactionCountModel",kind:"LinkedField",name:"reactionCountsData",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"reactionCount",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"reactionType",storageKey:null}],storageKey:null}],type:"Pin",abstractKey:null};i.hash="35057abf870764ec0d5898c8093c1574";let r=i},894043:(e,a,t)=>{t.d(a,{Z:()=>s}),t(167912);var i,r=t(986631);let n=void 0!==i?i:i=t(670295),s=e=>{let a=(0,r.Z)(n,e);return a?.reactionCountsData?a.reactionCountsData.reduce((e,{reactionCount:a,reactionType:t})=>({...e,...t?{[t]:a}:{}}),{}):null}},481177:(e,a,t)=>{t.d(a,{Z:()=>i});let i={AMP_TRACKING_DOMAIN:"amp.pinterest.com",BoardPrivacy:{SECRET:"secret",PUBLIC:"public",PROTECTED:"protected"},BoardType:{PROTECTED:"protected"},BulkAction:{MOVE:"bulkMove",COPY:"bulkCopy",CREATE_SECTION:"bulkCreateSection",DELETE:"bulkDelete"},MAX_CHARS_FOR_BOARD_PIN_DESCRIPTION:500,MAX_CHARS_FOR_BOARD_TITLE:50,MAX_CHARS_FOR_FIRST_NAME:30,MAX_FETCH_NUM_FOLLOWERS_PER_PAGE:50,MAX_STORED_VISITED_PIN_PAGES:10,VIDEO_IFRAME_ID:"video-iframe"}},704666:(e,a,t)=>{t.d(a,{Z:()=>p});var i=t(934378),r=t(88682),n=t(238299);let s={campaignFilter:"all",adGroupFilter:"all",adFilter:"all"},l=e=>{let a={};return e&&(a={objectiveTypes:[e]}),a},o=e=>{let{campaignId:a,objectiveType:t,partialCreate:i,catalogsFeedId:n,managedClientId:s,catalogId:l,productGroupId:o,resumeLastDraft:d}=e,u={};return a&&i&&(u.campaignId=a),t&&(u.objectiveType=t),"CATALOG_SALES"===t&&n&&(u.catalogsFeedId=n),l&&(u.catalogId=l),o&&(u.productGroupId=o),s&&(u.managedClientId=s),d&&(u.resumeLastDraft=!0),(0,r.Z)("/ads/create/",u)},d=e=>{let{campaignToolPreference:a,...t}=e;return(0,r.Z)("/automated/ads/create/",t)},u={overview:()=>"/",reporting:e=>{let a=e.objectiveType||null;delete e.objectiveType;let t={...e,...l(a)};return(0,r.Z)("/reporting/campaigns/",t)},reportingAdGroup:e=>{let{campaignId:a,objectiveType:t,showAllEntities:i,adGroupId:n,message:o}=e,d={campaignIds:[a],...i?s:{},...l(t),...n?{adGroupIds:[n]}:{},message:o};return(0,r.Z)("/reporting/adgroups/",d)},campaign:e=>{let{id:a,objectiveType:t}=e;return(0,r.Z)("/reporting/adgroups/",{campaignIds:[a],...l(t)})},editCampaign:e=>e.isAutomatedCampaign?u.editAutomated({campaignId:e.id,view:"campaign"}):u.editV2({campaignId:e.id,view:"campaign"}),adgroup:e=>{let{id:a,objectiveType:t,showAllEntities:i,pinPromotionId:n,campaignId:o}=e;return"TEMPORARY_SHOPPING"===t||"CATALOG_SALES"===t?(0,r.Z)("/reporting/productgroups/",{adGroupIds:[a],...l(t)}):(0,r.Z)("/reporting/ads/",{adGroupIds:[a],...l(t),...i?s:{},...n?{pinPromotionIds:[n]}:{},...o?{campaignIds:[o]}:{}})},editAdGroup:e=>e.isAutomatedCampaign?u.editAutomated({campaignId:e.id,view:"campaign"}):u.editV2({adGroupId:e.id,view:"adgroup"}),pinPromotion:e=>{let{id:a,adFilter:t}=e;return(0,r.Z)("/reporting/ads/",{pinPromotionIds:[a],...t?{adFilter:t}:{}})},editPinPromotion:e=>{let a=e.isCreatingPins?{isCreatingPins:!0}:{},t=e.pinPromotionId?{pinPromotionId:e.pinPromotionId}:{};return u.editV2({adGroupId:e.adGroupId,view:"ad",...t,...a})},productGroup:e=>{let{id:a,name:t}=e;return(0,r.Z)("/reporting/productgroups/",{productGroupIds:[a],name:t})},campaigns:()=>"/reporting/campaigns/",adgroups:()=>"/reporting/adgroups/",ads:()=>"/reporting/ads/",bulkEdit:e=>{let{entity_level:a,ids:t}=e;return(0,r.Z)("/ads/bulk_edit/",{entity_level:a,ids:t})},productgroups:()=>"/reporting/productgroups/",productitems:()=>"/reporting/productitems/",campaignNegativeKeywords:()=>"/reporting/campaignNegativeKeywords/",campaignSearchQueries:()=>"/reporting/campaignSearchQueries/",adGroupNegativeKeywords:()=>"/reporting/adGroupNegativeKeywords/",adGroupPositiveKeywords:()=>"/reporting/adGroupPositiveKeywords/",adGroupSearchQueries:()=>"/reporting/adGroupSearchQueries/",ad:e=>u.pinPromotion(e),createPreferred:e=>{switch(e.campaignToolPreference){case n.km.ADS_MANAGER:return o(e);case n.km.AUTOMATED_CAMPAIGN:return d(e);default:return(0,r.Z)("/ads/campaign_mode/",e.managedClientId?{managedClientId:e.managedClientId}:void 0)}},campaignMode:e=>(0,r.Z)("/ads/campaign_mode/",e.managedClientId?{managedClientId:e.managedClientId}:void 0),create:o,createAutomated:d,editV2:e=>(0,r.Z)("/ads/edit/",e),editAutomated:e=>(0,r.Z)("/automated/ads/edit/",e),editDraftCampaign:e=>(0,r.Z)("/ads/edit_draft/",{campaignId:e.campaignId,view:"campaign"}),duplicateCampaign:e=>(0,r.Z)("/ads/duplicate/",e),audiences:e=>(0,r.Z)("/audiences/",e.managedClientId?{managedClientId:e.managedClientId}:void 0),audience_debug:()=>"/audience_debug/",prepaid_spend_campaign_breakdown:()=>"/billing/prepaid_spend_campaign_breakdown/",billing:e=>{let{page:a,subSection:t,nextStepUrl:n}=e;switch(a){case i.kM.BILLING_HISTORY:return"/billing/history/";case i.kM.ORDER_LINES:return"/billing/order_lines/";case i.kM.PROMOTIONS:return"/billing/promotions/";case i.kM.DOCUMENTS:return"/billing/documents/";case i.kM.TAX_DOCUMENTS:return"/billing/tax_documents/";case i.kM.PREPAID_CAMPAIGN_SPEND:return"/billing/prepaid_campaign_spend_summary/";default:let s={};return t&&(s.section=t),n&&(s.next_step_link_url=n),(0,r.Z)("/billing/",s)}},bulk:e=>{let{subSection:a,page:t,jobStarted:n}=e||{};switch(t){case i.fm.UPLOAD_TEMPLATE:return(0,r.Z)("/bulk_editor/upload_template/",{section:a});case i.fm.DOWNLOAD_TEMPLATE:return(0,r.Z)("/bulk_editor/download_template/",{section:a});case i.fm.HISTORY:return(0,r.Z)("/bulk_editor/history/",{section:a,job_started:n});case i.fm.BULK_ID_LIBRARY:return(0,r.Z)("/bulk_editor/bulk_id_library/",{section:a});case i.fm.RESOURCES:return(0,r.Z)("/bulk_editor/resources/",{section:a});default:return"/bulk_editor/"}},history:e=>(0,r.Z)("/history/",e),shopping:e=>u.reporting(l("TEMPORARY_SHOPPING")),pinterest_tag:e=>{let{page:a,subSection:t,platform:n,source:s,origin:l}=e;switch(a){case i.qp.PINTEREST_EVENTS_OVERVIEW_BEFORE_SETUP:return"/conversions/events-overview/";case i.qp.PINTEREST_EVENT_HISTORY:if(s)return(0,r.Z)("/conversions/event-history/",{source:s});return"/conversions/event-history/";case i.qp.CONVERSION_HEALTH:return"/conversions/health/";case i.qp.PINTEREST_TEST_EVENTS:return(0,r.Z)("/conversions/test-events/",{subPage:t,platform:n});case i.qp.PINTEREST_TAG:return(0,r.Z)("/conversions/tag/",{subPage:t,platform:n});case i.qp.PINTEREST_TAG_MANUAL_SETUP_FLOW:let o=(0,r.Z)("/conversions/tag_manual_setup/",{origin:l});if(n)return(0,r.Z)(o,{platform:n,source:s});return o;case i.qp.PINTEREST_TAG_HEALTH:return"/conversions/tag-health/";case i.qp.CONVERSION_UPLOAD:return(0,r.Z)("/conversions/upload/",{subPage:t});case i.qp.UPLOAD_HISTORY:return(0,r.Z)("/conversions/history/",{subPage:t});case i.qp.PCA_UPLOAD_HISTORY:return(0,r.Z)("/conversions/pca_history/",{subPage:t});case i.qp.PCA_UPLOAD:return(0,r.Z)("/conversions/pca_upload/",{subPage:t});case i.qp.CONVERSIONS_API_MANUAL_SETUP_FLOW:if(s||l)return(0,r.Z)("/conversions/api_manual_setup/",{source:s,origin:l});return"/conversions/api_manual_setup/";case i.qp.CONVERSIONS_API_PARTNER_SETUP_FLOW:if(s||l)return(0,r.Z)("/conversions/api_partner_setup/",{source:s,origin:l});return"/conversions/api_partner_setup/";case i.qp.CONVERSIONS_API_ACCESS_TOKEN:return"/conversions/access_token/";case i.qp.PINTEREST_SETUP_API:return"/conversions/setup-api/";case i.qp.CONVERSIONS_API_DEDUPLICATION:return"/conversions/deduplication/";case i.qp.PAYLOAD_HELPER:return"/conversions/payload-helper/";case i.qp.CONVERSIONS:return"/conversions/";case i.qp.NOCODE_CONVERSIONS_API_SETUP_FLOW:return"/conversions/pinterest_capi_connect/";case i.qp.PINTEREST_EVENT_HISTORY_CAPI_TAB:return"/conversions/event-history/#conversionsAPI";case i.qp.PINTEREST_EVENTS_OVERVIEW_CAPI_TAB:return"/conversions/events-overview/#conversionsAPI";default:return"/conversions/tag/"}},"pin-builder":e=>(0,r.Z)("/pin-builder/",e),purchases:()=>u.reporting(l("PURCHASE")),awareness_reserved:()=>u.reporting(l("IMPRESSION")),engagement:()=>u.reporting(l("BILLABLE_ENGAGEMENT")),videos:()=>u.reporting(l("TEMPORARY_BIDDED_CPM_VIDEO")),videos_reserved:()=>u.reporting(l("TEMPORARY_IMPRESSION_VIDEO")),videos_cpv:()=>u.reporting(l("TEMPORARY_MRC_CPV_VIDEO")),conversions:()=>u.reporting(l("WEB_CONVERSION")),accounts_manager:()=>"/accounts_manager/",reporting_preferences:e=>(0,r.Z)("/reporting/preferences/",e),report_builder:e=>(0,r.Z)("/report-center/builder/",e),report_history:e=>(0,r.Z)("/report-center/history/",e),report_unsubscribe:e=>(0,r.Z)("/report-center/unsubscribe/",e),report_download:e=>(0,r.Z)("/report-center/download/",e),awareness:()=>u.reporting(l("AWARENESS")),traffic:()=>u.reporting(l("TRAFFIC")),app_installs:()=>u.reporting(l("APP_INSTALL")),catalog_sales:()=>u.reporting(l("CATALOG_SALES")),web_conversion:()=>u.reporting(l("WEB_CONVERSION")),video_view:()=>u.reporting(l("VIDEO_VIEW")),quick_promote:e=>(0,r.Z)("/quick-promote/",e),quick_promote_on_www:()=>"/advertiser/quick-promote/",recommendations:e=>(0,r.Z)("/recommendations/",e),catalog_view:()=>"/product-catalogs/data-source",campaign_insights:e=>`/campaign-insights/${e.campaignId}/`,product_group_reporting:e=>`/campaign-insights/${e.campaignId}/product-group/${e.productGroupId}`,media_planner:e=>(0,r.Z)("/media_planner/",e),ad_spend_optimizer:e=>(0,r.Z)("/msot-optimizer/",e)},p=u},549629:(e,a,t)=>{t.d(a,{Q:()=>o,Z:()=>d});var i=t(667294),r=t(587703),n=t(525364),s=t(996523),l=t(5859);function o(e,a){let{setViewContextData:t}=(0,n.sV)(),{requestIdentifier:o}=(0,l.B)(),d=(0,r.Z)(),{viewData:u}=(0,n.SU)();(0,i.useEffect)(()=>{e&&(t({viewType:e.view_type??1,viewParameter:e.view_parameter,viewData:e.view_data?(0,s.Z)(u,e.view_data):u,component:e.component,element:e.element,objectIdStr:e.object_id_str,auxData:e.aux_data,clientTrackingParams:e.clientTrackingParams}),d({...e,event_type:13,request_identifier:o}))},[a])}function d(e){let{children:a,log:t}=e;return o(t),a||null}},839391:(e,a,t)=>{t.d(a,{L:()=>i,Z:()=>n});let{Provider:i,useHook:r}=(0,t(342513).Z)("ExperienceContext"),n=r},172203:(e,a,t)=>{t.d(a,{Z:()=>c});var i=t(667294),r=t(545007),n=t(442279),s=t(839391),l=t(5859),o=t(953565);let d=(0,n.P1)(e=>e.experiences,(e,a)=>a,(e,a)=>e[a]),u=(e,a,t={})=>(0,o.nP)(`${e}.${a}`,{sampleRate:1,tags:t}),p=(e,a)=>"function"==typeof a?a(e):a,c=(e,a={},t=!1)=>{let[n,o]=(0,i.useReducer)(p,a),{isBot:c}=(0,l.B)(),{fetchExperienceForPlacements:g,mountPlacement:m,triggerExperimentsForPlacement:_,unmountPlacement:y}=(0,s.Z)();(0,i.useDebugValue)(`Placement Hook ID - ${e}`),(0,i.useEffect)(()=>{let a={...n},i=t&&a?.advertiser_id?{advertiserId:a.advertiser_id}:void 0;return m(e,a,i),()=>{y(e)}},[]),(0,i.useEffect)(()=>{Object.keys(n).length>0&&g([e],c,n)},[n]);let b=(0,r.v9)(a=>d(a,e)),A=(0,r.v9)(a=>a.experiencesMulti[e]),h=b?b.triggerable_placed_exps:[];return(0,i.useEffect)(()=>{u("experienceservice","placementHookExperimentTrigger.1",{platform:"web",placement_id:e,...h}),_(e,n)},[JSON.stringify(h)]),{experience:b,experiencesMulti:A,setExtraContext:o}}},735922:(e,a,t)=>{t.d(a,{Z:()=>y}),t(167912);var i,r=t(883119),n=t(419075),s=t(205841),l=t(986631),o=t(140017),d=t(558273),u=t(340523),p=t(785893);let c={borderRadius:"18px",fontSize:"10px",fontWeight:"600",height:"24px",lineHeight:"24px"},g={sm:{...c,padding:"0 6px"},lg:{...c,padding:"4px 8px"},xl:{...c,height:"32px",padding:"4px"}};function m({backgroundColor:e,identifier:a,size:t="sm"}){let i=g[t];return(0,p.jsx)(r.xu,{dangerouslySetInlineStyle:{__style:{...i,backgroundColor:e?"pine"===e?"#0FA573":"#fff":"rgba(255, 255, 255, 0.8)",color:"pine"===e?"#fff":"#111"}},"data-test-id":"PinTypeIdentifier",display:"inlineBlock",children:a})}let _=void 0!==i?i:i=t(600354);function y({allowProductCarousel:e,allowShoppingPriceIndicator:a,pinKey:t,pinOwner:i,shoppingLabelColor:c,showUserIndicator:g,size:y="sm",surface:b}){let A=(0,o.ZP)(),h=(0,l.Z)(_,t),E=!!h?.carouselData?.entityId,I=(h?.embed||h?.attribution?.embed)?.type==="gif",f=h?.richSummary?.typeName==="product",P=!!h?.storyPinDataId,S=!!h?.videos?.videoList,v=!!h?.promoter&&!h.isDownstreamPromotion,{checkExperiment:T}=(0,u.F)();if(g&&i){let{image_small_url:e,full_name:a=""}=i;return m({identifier:(0,p.jsxs)(r.kC,{alignItems:"center",justifyContent:"between",children:[e&&(0,p.jsx)(s.qE,{name:a,size:"xs",src:e}),(0,p.jsx)(r.xu,{alignItems:"center",display:"flex",marginStart:1,children:(0,p.jsx)(r.JO,{accessibilityLabel:A._('Pin', 'pin.pinTypeIdentifier.taggedProduct', 'identifier that shows the pin type'),color:"default",icon:"tag",inline:!0,size:14})})]}),size:"xl",backgroundColor:"white"})}if(I)return m({identifier:"GIF",size:y});if(P&&h?.shouldOpenInStream!==!1){let e=h?.storyPinData?.staticPageCount??0,a=h?.storyPinData?.totalVideoDuration??0;if(v&&T("ads_iad_dweb").anyEnabled||["ShoppingGridSmallCarousel","VisualInspirationFocusPin","VisualInspirationPin","VisualInspirationShoppingPin"].includes(b||"")||0===a&&e<=1)return null;{let t=a+e*d.oN;return m({identifier:(0,n.Z)(t),size:y})}}if(S){let{videos:e}=h??{},a=e?.duration??0;return m({identifier:(0,n.Z)(a),size:y})}if(f){let e=h?.richSummary&&h.richSummary.products&&h.richSummary.products[0]&&h.richSummary.products[0].offerSummary;if(a){let a=e&&(e.price||e.maxPrice);return a?m({identifier:a,size:y}):null}if(!c)return null;{let e=(h?.richSummary?.products?.[0]||{}).labelInfo?.labels?.[0];return e?m({identifier:e,backgroundColor:c,size:y}):null}}if(e){let e=h?.productPinData&&h.productPinData.items&&h.productPinData.items[0],a=(h?.imageSpec_orig?1:0)+(e?.additionalImagesLength??0),t=h?.carouselData?.index??0;return m({identifier:`${t+1}/${a}`,size:y})}if(E){let e=h?.carouselData?.carouselSlots??[],a=h?.carouselData?.index??0;return m({identifier:`${a+1}/${e.length}`,size:y})}return null}},934441:(e,a,t)=>{t.d(a,{GY:()=>I,Jg:()=>E,fW:()=>f});var i=t(184508),r=t(147916),n=t(167361),s=t(697031),l=t(404247),o=t(836866),d=t(620668),u=t(86119),p=t(753873),c=t(873774),g=t(479197),m=t(110099),_=t(244892),y=t(485846),b=t(461471),A=t(662502),h=t(239784);let E=["goodIdea","love","thanks","wow","haha"],I={7:"goodIdea",1:"love",13:"thanks",11:"wow",5:"haha"},f=(e,a,t="darkGray")=>{let E={default:{staticAsset:"white"===t?g:c},goodIdea:{staticAsset:n,animatedAsset:i,gridAsset:r,label:a._('Good idea', 'Reaction label to tell a creator that their pin is a good idea', 'Reaction label to tell a creator that their pin is a good idea'),htmlStyle:`
    @keyframes play90 {
        0% {
        background-position: 0px 0px;
        }
        100% {
        background-position: -3600px 0px;
        }
    }
    `,animationStyle:"play90 3000ms steps(90) infinite forwards",type:7},haha:{staticAsset:o,animatedAsset:s,gridAsset:l,label:a._('Haha', 'Reaction label to tell a creator that the pinner laughed because of their pin', 'Reaction label to tell a creator that the pinner laughed because of their pin'),htmlStyle:`
    @keyframes play60 {
        0% {
        background-position: 0px 0px;
        }
        100% {
        background-position: -2400px 0px;
        }
    }
    `,animationStyle:"play60 2000ms steps(60) infinite forwards",type:5},love:{staticAsset:p,animatedAsset:d,gridAsset:u,label:a._('Love', 'Reaction label to tell a creator that the pinner loved their pin', 'Reaction label to tell a creator that the pinner loved their pin'),htmlStyle:`
    @keyframes play90 {
        0% {
        background-position: 0px 0px;
        }
        100% {
        background-position: -3600px 0px;
        }
    }
    `,animationStyle:"play90 3000ms steps(90) infinite forwards",type:1},thanks:{staticAsset:y,animatedAsset:m,gridAsset:_,label:a._('Thanks', 'Reaction label to tell a creator thank you', 'Reaction label to tell a creator thank you'),htmlStyle:`
    @keyframes play60 {
        0% {
        background-position: 0px 0px;
        }
        100% {
        background-position: -2400px 0px;
        }
    }
    `,animationStyle:"play60 2000ms steps(60) infinite forwards",type:13},wow:{staticAsset:h,animatedAsset:b,gridAsset:A,label:a._('Wow', 'Reaction label to tell a creator that the pinner was wowed by their pin', 'Reaction label to tell a creator that the pinner was wowed by their pin'),htmlStyle:`
    @keyframes play90 {
        0% {
        background-position: 0px 0px;
        }
        100% {
        background-position: -3600px 0px;
        }
    }
    `,animationStyle:"play90 3000ms steps(90) infinite forwards",type:11}};return E[e]||E.default}},325362:(e,a,t)=>{t.d(a,{Z:()=>i});function i(e){return e.replace(/[_.-](\w|$)/g,(e,a)=>a.toUpperCase())}},598228:(e,a,t)=>{t.d(a,{Ag:()=>n,C0:()=>o,L1:()=>c,Vi:()=>s,YD:()=>p,kS:()=>r,oo:()=>l,p3:()=>g,vC:()=>d,vI:()=>u});var i=t(244413);let r="https://www.pinterest.com/business/hub/",n="https://www.pinterest.com/homefeed/",s="www.pinterest.com",l="https://help.pinterest.com",o=`${(0,i.Z)({site:"www"})}`,d=(0,i.Z)({site:"developers"}),u=`${(0,i.Z)({site:"sterling"})}`,p=`${(0,i.Z)({site:"analytics"})}`,c=`${(0,i.Z)({site:"trends"})}`,g=`${(0,i.Z)({site:"www",path:"/product-catalogs/data-source/?advertiserId="})}`},446653:(e,a,t)=>{t.d(a,{r:()=>E,K:()=>h});var i=t(667294),r=t(342513),n=t(340523),s=t(757640),l=t(149722),o=t(998577),d=t(573810),u=t(325362);let p=e=>{let a={};for(let t in e)Object.prototype.hasOwnProperty.call(e,t)&&("object"!=typeof e[t]||null===e[t]||Array.isArray(e[t])?a[(0,u.Z)(t)]=e[t]:a[(0,u.Z)(t)]=p(e[t]));return a},c=(e,a)=>{let t=[];for(let i in e)i!==a&&t.push({id:i,...p(e[i])});let i=t.sort(({user:{businessName:e}},{user:{businessName:a}})=>e.localeCompare(a)),r=new Map;for(let e of i)r.set(e.id,e);return r},g={profiles:new Map,headerVisible:!1,orbacVisibility:!1,activeProfile:void 0,disableProfileChanger:!1},m=(e,a)=>{switch(a.type){case"LOAD_PROFILES":return{...e,profiles:a.payload};case"SET_ACTIVE_PROFILE":return{...e,activeProfile:a.payload};case"TOGGLE_HEADER_VISIBILITY":return{...e,headerVisible:a.payload};case"TOGGLE_ORBAC_VISIBILITY":return{...e,orbacVisibility:a.payload};case"TOGGLE_DISABLE_PROFILE_CHANGER":return{...e,disableProfileChanger:a.payload};default:return e}},_=({dispatch:e,isEnabled:a,state:t})=>{let{orbacVisibility:r,disableProfileChanger:n,headerVisible:s}=t,l=(0,i.useCallback)(t=>{a&&e({type:"SET_ACTIVE_PROFILE",payload:t})},[a,e]);return{changeProfile:l,toggleORBACVisibility:(0,i.useCallback)(t=>{a&&e({type:"TOGGLE_ORBAC_VISIBILITY",payload:t??!r})},[a,e,r]),toggleDisableProfileChanger:(0,i.useCallback)(t=>{a&&e({type:"TOGGLE_DISABLE_PROFILE_CHANGER",payload:t??!n})},[a,e,n]),toggleHeaderVisibility:(0,i.useCallback)(t=>{a&&e({type:"TOGGLE_HEADER_VISIBILITY",payload:t??!s})},[a,e,s])}},y=e=>{let[a,t]=(0,i.useReducer)(m,g),r=_({dispatch:t,isEnabled:e,state:a}),{activeProfile:n,orbacVisibility:s}=a;return(0,i.useEffect)(()=>{let e=(0,d.qn)("orbacActiveProfile",!1);e&&t({type:"SET_ACTIVE_PROFILE",payload:e})},[]),(0,i.useEffect)(()=>{let e=(0,d.qn)("orbacVisibilty",!1);e&&t({type:"TOGGLE_ORBAC_VISIBILITY",payload:e})},[]),(0,i.useEffect)(()=>{(0,d.Nh)("orbacVisibility",s)},[s]),(0,i.useEffect)(()=>{(0,d.Nh)("orbacActiveProfile",n)},[n]),{state:a,actions:r,receiveProfiles:(0,i.useCallback)((e,a)=>{t({type:"LOAD_PROFILES",payload:c(e,a)})},[t])}};var b=t(785893);let{Provider:A,useMaybeHook:h}=(0,r.Z)("RoleBasedAccessControlContext"),E=({children:e})=>{let a;let{checkExperiment:t}=(0,n.F)(),r=(0,l.Z)(),d=!!(r.isAuth&&r.isPartner&&t("web_m10n_business_access_orbac_www").anyEnabled),{state:u,actions:p,receiveProfiles:c}=y(d),{activeProfile:g,headerVisible:m,profiles:_=[]}=u,h=_?Array.from(_.values()):[],E=(0,o.Z)(h),I=!!r.isAuth&&h.length>0&&E,f=r.isAuth?r.id:"",P=r.isAuth?r.username:"",{changeProfile:S,toggleORBACVisibility:v,toggleDisableProfileChanger:T,toggleHeaderVisibility:k}=p;(0,i.useEffect)(()=>{if(d){if("string"==typeof E){S(E);return}g||S(f)}},[E,f,d,S,g]),(0,i.useEffect)(()=>{d&&(I&&!m&&k(!0),!I&&m&&k(!1))},[k,I,d,m,_]);let{data:O}=(0,s.Z)(d?{name:"ApiResource",options:{url:"/vx/business_access/profiles/",disable_auth_failure_redirect:!0}}:null),w=O?.profiles;r&&r.isAuth&&u.activeProfile===r.id?a={id:r.id,permissions:["OWNER"],user:{username:P,businessName:r.fullName,imgUrl:r.imageSmallUrl}}:g&&u.profiles&&(a=u.profiles.get(g)),(0,i.useEffect)(()=>{w&&c(w,f)},[c,w,f]);let R=u.profiles?Array.from(u.profiles.values()):[];return(0,b.jsx)(A,{value:{profiles:R,headerVisible:u.headerVisible,activeProfile:a,changeProfile:S,toggleORBACVisibility:v,toggleDisableProfileChanger:T,toggleHeaderVisibility:k},children:e})}},785059:(e,a,t)=>{t.d(a,{Z:()=>s});var i=t(340523),r=t(446653),n=t(998577);let s=()=>{let{checkExperiment:e}=(0,i.F)(),a=(0,r.K)(),{activeProfile:t}=a||{},s=e("web_m10n_business_access_orbac_www").anyEnabled,l=(0,n.Z)(a?.profiles||[]),{anyEnabled:o}=e("useorbacroutematcher_in_useorbacactingas");return s&&(!o||l)&&t&&(t.viewerMeetsMfaRequirement||(t.permissions||[]).includes("OWNER"))?t:Object.freeze({})}},998577:(e,a,t)=>{t.d(a,{Z:()=>o});var i=t(616550),r=t(741983),n=t(340523),s=t(149722),l=t(19447);let o=e=>{let a=(0,i.TH)(),t=(0,s.Z)(),o=(0,l.S6)(),{anyEnabled:d}=(0,n.F)().checkExperiment("web_m10n_business_access_orbac_www"),u=(0,i.$B)("/:username"),p=u?.params?.username,c=(0,i.$B)("/pin/:id"),g=!!c?.params?.id&&o(c.params.id)?.pinner?.id;if((0,r.ej)(a))return!1;if((0,r.RU)(a))return!0;if((0,r.mY)(a))return d;let m=e.concat(t.isAuth?{user:{username:t.username},id:t.id}:{}).find(e=>{let{user:a={},id:t}=e||{},{username:i}=a;return(!!i&&!!p||!!g&&!!t)&&(i===p||g===t)});return!!m&&m.id}},199677:(e,a,t)=>{t.d(a,{D3:()=>p,DX:()=>d,Fk:()=>i,KY:()=>c,Ms:()=>r,N1:()=>g,_P:()=>o,gJ:()=>n,lJ:()=>l,nl:()=>s,q6:()=>u});let i=(e,a)=>{let t=e&&e.isAuth?e.fullName:"";return e&&a&&a.user&&a.user.businessName&&(t=a.user.businessName),t},r=(e,a)=>{let t=e&&e.isAuth?e.username:"";return e&&a&&a.user&&a.user.username&&(t=a.user.username),t},n=(e,a)=>{let t=e&&e.isAuth?e.imageMediumUrl:"";return e&&a&&a.user&&a.user.imgUrl&&(t=a.user.imgUrl),t},s=(e,a)=>!!(a&&a.user&&e&&e.isAuth&&a.id!==e.id?a.user.eligibleForStlTool:e&&e.isAuth&&e.eligibleForStlTool),l=(e,a)=>e&&e.isAuth&&a&&a.id&&a.id!==e.id?a.id:"",o=(e,a,t)=>t&&t.user&&a&&a.isAuth&&t.id!==a.id?t.user.merchantId:e.advertiser?.merchant_id,d=(e,a,t)=>t&&t.user&&e.isAuth&&t.id!==e.id?t.user.scheduledPinCount||0:e.isAuth&&a&&a.scheduled_pin_count||0,u=(e,a,t)=>!!(e&&e.isAuth&&t&&t.id&&t.id!==e.id&&t.id===a),p=(e,a,t)=>!!(u(e,a,t)||e&&e.isAuth&&a===e.id),c=(e,a,t)=>p(e,a&&a.owner&&a.owner.id||"",t);function g(e,a,t){return p(e,a?a.id:"",t)}},238299:(e,a,t)=>{var i;t.d(a,{TT:()=>n,UM:()=>s,km:()=>r});let r=((i={}).ADS_MANAGER="ADS_MANAGER",i.AUTOMATED_CAMPAIGN="AUTOMATED_CAMPAIGN",i),n=e=>Object.values(r).includes(e),s=(e,a)=>{let t=e.checkExperiment("adv_growth_campaign_tool_preference",{dangerouslySkipActivation:a?.skipActivation||!1});return"prod"===t.group||"enabled"===t.group||"employees"===t.group}},184508:e=>{e.exports="https://s.pinimg.com/webapp/goodIdeaAnimated-5de05cb7.svg"},147916:e=>{e.exports="https://s.pinimg.com/webapp/goodIdeaGrid-e3e37a7f.svg"},167361:e=>{e.exports="https://s.pinimg.com/webapp/goodIdeaStatic-855554b0.svg"},697031:e=>{e.exports="https://s.pinimg.com/webapp/hahaAnimated-df9cb2fa.svg"},404247:e=>{e.exports="https://s.pinimg.com/webapp/hahaGrid-7945c718.svg"},836866:e=>{e.exports="https://s.pinimg.com/webapp/hahaStatic-28ee6e1e.svg"},620668:e=>{e.exports="https://s.pinimg.com/webapp/loveAnimated-ccd5b808.svg"},86119:e=>{e.exports="https://s.pinimg.com/webapp/loveGrid-1ec7b8e4.svg"},753873:e=>{e.exports="https://s.pinimg.com/webapp/loveStatic-31fc2a99.svg"},873774:e=>{e.exports="https://s.pinimg.com/webapp/reactionHeartOutline-24ab75a6.svg"},479197:e=>{e.exports="https://s.pinimg.com/webapp/reactionHeartOutlineWhite-61cdbdb7.svg"},110099:e=>{e.exports="https://s.pinimg.com/webapp/thanksAnimated-6831daf3.svg"},244892:e=>{e.exports="https://s.pinimg.com/webapp/thanksGrid-b3cf8b93.svg"},485846:e=>{e.exports="https://s.pinimg.com/webapp/thanksStatic-51f19932.svg"},461471:e=>{e.exports="https://s.pinimg.com/webapp/wowAnimated-b776449f.svg"},662502:e=>{e.exports="https://s.pinimg.com/webapp/wowGrid-9e62e75a.svg"},239784:e=>{e.exports="https://s.pinimg.com/webapp/wowStatic-d966adbd.svg"}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/27076-eb6fd2e63a568067.mjs.map