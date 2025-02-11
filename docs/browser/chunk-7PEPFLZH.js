import{a as X}from"./chunk-BRVOQZDM.js";import{e as tt,y as M}from"./chunk-N27U3N2T.js";import{a as b}from"./chunk-4R5NBZMW.js";import{a as Z}from"./chunk-NDYVXEZ5.js";import{a as x}from"./chunk-ZTKK3KB7.js";import{a as W}from"./chunk-B7IARA3F.js";import{d as w,h as k,k as Y}from"./chunk-TEY6TKJV.js";import{f as K,h as G}from"./chunk-2JF6YUJG.js";import{Q as r,S as N}from"./chunk-GGZQ5GCM.js";import{B as _,U as f}from"./chunk-TFUPB3ZG.js";import{a as e}from"./chunk-BMVJCP2M.js";import{k as E,l as J,n as F,o as V}from"./chunk-GMC3I5VG.js";import{b as Q,d as z}from"./chunk-WGF2T2BG.js";import{b as R,k as B,t as m}from"./chunk-3IBUFXWY.js";import{a as O,b as T,g as S}from"./chunk-JEGVIFEP.js";var A;function et(t){return A&&!A.destroyed||(A=t()),A}var $,lt=new W({avgRating:"avg-rating",numRatings:"num-ratings",numComments:"num-comments",numViews:"num-views"}),v=$=class extends N{constructor(t){super(t),this.categories=null,this.disableExtraQuery=!1,this.extent=null,this.filter=null,this.num=10,this.query=null,this.sortField=null,this.start=1}get sortOrder(){return this._get("sortOrder")||"asc"}set sortOrder(t){t!=="asc"&&t!=="desc"||this._set("sortOrder",t)}clone(){return new $({categories:this.categories?R(this.categories):null,disableExtraQuery:this.disableExtraQuery,extent:this.extent?this.extent.clone():null,filter:this.filter,num:this.num,query:this.query,sortField:this.sortField,sortOrder:this.sortOrder,start:this.start})}toRequestOptions(t,o){let s=[];this.categories&&(s=this.categories.map(u=>Array.isArray(u)?JSON.stringify(u):u));let a="";if(this.extent){let u=tt(this.extent,Z.WGS84);u!=null&&(a=`${u.xmin},${u.ymin},${u.xmax},${u.ymax}`)}let l=this.query;!this.disableExtraQuery&&t.extraQuery&&(l="("+l+")"+t.extraQuery);let n={categories:s,bbox:a,q:l,filter:this.filter,num:this.num,sortField:null,sortOrder:null,start:this.start};return this.sortField&&(n.sortField=this.sortField.split(",").map(u=>lt.toJSON(u.trim())).join(","),n.sortOrder=this.sortOrder),{query:O(O({},o),n)}}};e([r()],v.prototype,"categories",void 0),e([r()],v.prototype,"disableExtraQuery",void 0),e([r({type:M})],v.prototype,"extent",void 0),e([r()],v.prototype,"filter",void 0),e([r()],v.prototype,"num",void 0),e([r()],v.prototype,"query",void 0),e([r()],v.prototype,"sortField",void 0),e([r()],v.prototype,"sortOrder",null),e([r()],v.prototype,"start",void 0),v=$=e([f("esri.portal.PortalQueryParams")],v);var g=v;var H,h=H=class extends G{constructor(t){super(t),this.access=null,this.created=null,this.description=null,this.id=null,this.isInvitationOnly=!1,this.modified=null,this.owner=null,this.portal=null,this.snippet=null,this.sortField=null,this.sortOrder=null,this.sourceJSON=null,this.tags=null,this.title=null}get thumbnailUrl(){let t=this.url,o=this.thumbnail;return t&&o&&this.portal?this.portal?.normalizeUrl(`${t}/info/${o}?f=json`):null}get url(){let t=this.portal?.restUrl;return t?t+"/community/groups/"+this.id:null}fetchCategorySchema(t){return this.portal.request(this.url+"/categorySchema",t).then(o=>{let s=o.categorySchema||[];return s.some(a=>a.source==="contentCategorySetsGroupQuery.LivingAtlas")?this._fetchCategorySchemaSet("LivingAtlas",t):s})}fetchMembers(t){return this.portal.request(this.url+"/users",t)}getThumbnailUrl(t){let o=this.thumbnailUrl;return o&&t&&(o+=`&w=${t}`),o}toJSON(){throw new m("internal:not-yet-implemented","PortalGroup.toJSON is not yet implemented")}static fromJSON(t){if(!t)return null;if(t.declaredClass)throw new Error("JSON object is already hydrated");let o=new H({sourceJSON:t});return o.read(t),o}queryItems(t,o){let s=_(g,t),a=this.portal;return parseFloat(a.currentVersion)>5?(s=s||new g,a.queryPortal(`/content/groups/${this.id}/search`,s,"PortalItem",o)):(s=s?s.clone():new g,s.query="group:"+this.id+(s.query?" "+s.query:""),a.queryItems(s,o))}_fetchCategorySchemaSet(t,o){let s=this.portal;return s.fetchSelf(s.authMode,!0,o).then(a=>{let l=a.contentCategorySetsGroupQuery;if(l){let n=new g({disableExtraQuery:!0,num:1,query:l});return s.queryGroups(n,o)}throw new m("portal-group:fetchCategorySchema","contentCategorySetsGroupQuery value not found")}).then(a=>{if(a.total){let l=a.results[0],n=new g({num:1,query:`typekeywords:"${t}"`});return l.queryItems(n,o)}throw new m("portal-group:fetchCategorySchema","contentCategorySetsGroupQuery group not found")}).then(a=>a.total?a.results[0].fetchData("json",o).then(l=>{let n=l?.categorySchema;return n?.length?n:[]}):[])}};e([r()],h.prototype,"access",void 0),e([r({type:Date})],h.prototype,"created",void 0),e([r()],h.prototype,"description",void 0),e([r()],h.prototype,"id",void 0),e([r()],h.prototype,"isInvitationOnly",void 0),e([r({type:Date})],h.prototype,"modified",void 0),e([r()],h.prototype,"owner",void 0),e([r()],h.prototype,"portal",void 0),e([r()],h.prototype,"snippet",void 0),e([r()],h.prototype,"sortField",void 0),e([r()],h.prototype,"sortOrder",void 0),e([r()],h.prototype,"sourceJSON",void 0),e([r()],h.prototype,"tags",void 0),e([r()],h.prototype,"thumbnail",void 0),e([r({readOnly:!0})],h.prototype,"thumbnailUrl",null),e([r()],h.prototype,"title",void 0),e([r({readOnly:!0})],h.prototype,"url",null),h=H=e([f("esri.portal.PortalGroup")],h);var I=h;var q=class extends N{constructor(t){super(t),this.nextQueryParams=null,this.queryParams=null,this.results=null,this.total=null}};e([r()],q.prototype,"nextQueryParams",void 0),e([r()],q.prototype,"queryParams",void 0),e([r()],q.prototype,"results",void 0),e([r()],q.prototype,"total",void 0),q=e([f("esri.portal.PortalQueryResult")],q);var rt=q;var P=class extends G{constructor(t){super(t),this.created=null,this.id=null,this.portal=null,this.title=null,this.username=null}get url(){let t=this.portal?.restUrl;return t?`${t}/content/users/${this.username}/${this.id}`:null}toJSON(){throw new m("internal:not-yet-implemented","PortalFolder.toJSON is not yet implemented")}};e([r({type:Date})],P.prototype,"created",void 0),e([r()],P.prototype,"id",void 0),e([r()],P.prototype,"portal",void 0),e([r()],P.prototype,"title",void 0),e([r({readOnly:!0})],P.prototype,"url",null),e([r()],P.prototype,"username",void 0),P=e([f("esri.portal.PortalFolder")],P);var ot=P;var j,d=j=class extends G{constructor(t){super(t),this.access=null,this.created=null,this.culture=null,this.description=null,this.email=null,this.fullName=null,this.modified=null,this.orgId=null,this.portal=null,this.preferredView=null,this.privileges=null,this.region=null,this.role=null,this.roleId=null,this.sourceJSON=null,this.units=null,this.username=null,this.userLicenseTypeId=null,this.userType=null}get thumbnailUrl(){let t=this.url,o=this.thumbnail;return t&&o?this.portal.normalizeUrl(`${t}/info/${o}?f=json`):null}get userContentUrl(){let t=this.portal?.restUrl;return t?`${t}/content/users/${this.username}`:null}get url(){let t=this.portal?.restUrl;return t?`${t}/community/users/${this.username}`:null}addItem(t){let o=t&&t.item,s=t?.data,a=t?.folder,l={method:"post"};o&&(l.query=o.createPostQuery(),s!=null&&(typeof s=="string"?l.query.text=s:typeof s=="object"&&(l.query.text=JSON.stringify(s))));let n=this.userContentUrl;return a&&(n+="/"+(typeof a=="string"?a:a.id)),this.portal.request(n+"/addItem",l).then(u=>(o.id=u.id,o.portal=this.portal,o.loaded?o.reload():o.load()))}deleteItem(t,o=!1){return S(this,null,function*(){let s=this.userContentUrl;t.ownerFolder&&(s+="/"+t.ownerFolder);let a=o?{permanentDelete:!0}:{};yield this.portal.request(s+`/items/${t.id}/delete`,{method:"post",query:a}),t.id=null,t.portal=null})}deleteItems(t,o=!1){return S(this,null,function*(){t=t.slice();let s=this.userContentUrl+"/deleteItems",a=[],l=t.map(n=>n.id);if(l.length){let n={method:"post",query:{items:l.join(","),permanentDelete:o}},u=yield this.portal.request(s,n);for(let p of u.results){let y=t.find(at=>p.itemId===at.id),D=p.success,C=null;D?(y.id=null,y.portal=null):p.error&&(C=new m("portal:delete-item-failed",p.error.message,p.error)),a.push({item:y,success:D,error:C})}}return a})}fetchFolders(){let t={query:{num:1}};return this.portal.request(this.userContentUrl??"",t).then(o=>{let s;return s=o&&o.folders?o.folders.map(a=>{let l=ot.fromJSON(a);return l.portal=this.portal,l}):[],s})}fetchGroups(){return this.portal.request(this.url??"").then(t=>{let o;return o=t&&t.groups?t.groups.map(s=>{let a=I.fromJSON(s);return a.portal=this.portal,a}):[],o})}fetchItems(t){return S(this,null,function*(){t??={};let o=this.userContentUrl??"";t.folder&&(o+="/"+t.folder.id);let{default:s}=yield import("./chunk-KDHDCAC7.js"),a={folders:!1,inRecycleBin:!!t.inRecycleBin||null,foldersContent:!(t.folder||!t.includeSubfolderItems)||null,num:t.num||10,start:t.start||1,sortField:t.sortField||"created",sortOrder:t.sortOrder||"asc"},l=yield this.portal.request(o,{query:a}),n;return l?.items?(n=l.items.map(u=>{let p=s.fromJSON(u);return p.portal=this.portal,p}),yield Promise.all(n.map(u=>u.load())),{items:n,nextStart:l.nextStart,total:l.total}):{items:[],nextStart:-1,total:0}})}fetchTags(){return this.portal.request(this.url+"/tags").then(t=>t.tags)}getThumbnailUrl(t){let o=this.thumbnailUrl;return o&&t&&(o+=`&w=${t}`),o}queryFavorites(t){return this.favGroupId?(this._favGroup||(this._favGroup=new I({id:this.favGroupId,portal:this.portal})),this._favGroup.queryItems(t)):Promise.reject(new m("internal:unknown","Unknown internal error",{internalError:"Unknown favGroupId"}))}restoreItem(t,o){return S(this,null,function*(){let s=this.userContentUrl,a=o?{folderID:typeof o=="string"?o:o.id}:null;yield this.portal.request(s+`/items/${t.id}/restore`,{method:"post",query:a})})}toJSON(){throw new m("internal:not-yet-implemented","PortalUser.toJSON is not yet implemented")}static fromJSON(t){if(!t)return null;if(t.declaredClass)throw new Error("JSON object is already hydrated");let o=new j({sourceJSON:t});return o.read(t),o}};e([r()],d.prototype,"access",void 0),e([r({type:Date})],d.prototype,"created",void 0),e([r()],d.prototype,"culture",void 0),e([r()],d.prototype,"description",void 0),e([r()],d.prototype,"email",void 0),e([r()],d.prototype,"favGroupId",void 0),e([r()],d.prototype,"fullName",void 0),e([r({type:Date})],d.prototype,"modified",void 0),e([r()],d.prototype,"orgId",void 0),e([r()],d.prototype,"portal",void 0),e([r()],d.prototype,"preferredView",void 0),e([r()],d.prototype,"privileges",void 0),e([r()],d.prototype,"region",void 0),e([r()],d.prototype,"role",void 0),e([r()],d.prototype,"roleId",void 0),e([r()],d.prototype,"sourceJSON",void 0),e([r()],d.prototype,"thumbnail",void 0),e([r({readOnly:!0})],d.prototype,"thumbnailUrl",null),e([r()],d.prototype,"units",void 0),e([r({readOnly:!0})],d.prototype,"userContentUrl",null),e([r({readOnly:!0})],d.prototype,"url",null),e([r()],d.prototype,"username",void 0),e([r()],d.prototype,"userLicenseTypeId",void 0),e([r()],d.prototype,"userType",void 0),d=j=e([f("esri.portal.PortalUser")],d);var L=d;var c,U,st={PortalGroup:()=>Promise.resolve({default:I}),PortalItem:()=>import("./chunk-KDHDCAC7.js"),PortalUser:()=>Promise.resolve({default:L})},i=c=class extends K(X){constructor(t){super(t),this._esriIdCredentialCreateHandle=null,this.access=null,this.allSSL=!1,this.authMode="auto",this.authorizedCrossOriginDomains=null,this.basemapGalleryGroupQuery=null,this.basemapGalleryGroupQuery3D=null,this.bingKey=null,this.canListApps=!1,this.canListData=!1,this.canListPreProvisionedItems=!1,this.canProvisionDirectPurchase=!1,this.canSearchPublic=!0,this.canShareBingPublic=!1,this.canSharePublic=!1,this.canSignInArcGIS=!1,this.canSignInIDP=!1,this.colorSetsGroupQuery=null,this.commentsEnabled=!1,this.created=null,this.culture=null,this.customBaseUrl=null,this.default3DBasemapQuery=null,this.defaultBasemap=null,this.defaultDevBasemap=null,this.defaultExtent=null,this.defaultVectorBasemap=null,this.description=null,this.devBasemapGalleryGroupQuery=null,this.eueiEnabled=null,this.featuredGroups=null,this.featuredItemsGroupQuery=null,this.galleryTemplatesGroupQuery=null,this.layoutGroupQuery=null,this.livingAtlasGroupQuery=null,this.hasCategorySchema=!1,this.hasClassificationSchema=!1,this.helperServices=null,this.homePageFeaturedContent=null,this.homePageFeaturedContentCount=null,this.httpPort=null,this.httpsPort=null,this.id=null,this.ipCntryCode=null,this.isPortal=!1,this.isReadOnly=!1,this.layerTemplatesGroupQuery=null,this.maxTokenExpirationMinutes=null,this.modified=null,this.name=null,this.portalHostname=null,this.portalMode=null,this.portalProperties=null,this.region=null,this.recycleBinEnabled=!1,this.rotatorPanels=null,this.showHomePageDescription=!1,this.sourceJSON=null,this.supportsHostedServices=!1,this.symbolSetsGroupQuery=null,this.templatesGroupQuery=null,this.units=null,this.url=B.portalUrl,this.urlKey=null,this.user=null,this.use3dBasemaps=!0,this.useDefault3dBasemap=!1,this.useStandardizedQuery=!1,this.useVectorBasemaps=!1,this.vectorBasemapGalleryGroupQuery=null}normalizeCtorArgs(t){return typeof t=="string"?{url:t}:t}destroy(){it.unregister(this),this.defaultBasemap=Q(this.defaultBasemap),this.defaultDevBasemap=Q(this.defaultDevBasemap),this.defaultVectorBasemap=Q(this.defaultVectorBasemap),this._esriIdCredentialCreateHandle=z(this._esriIdCredentialCreateHandle)}readAuthorizedCrossOriginDomains(t){if(t)for(let o of t)B.request.trustedServers.includes(o)||B.request.trustedServers.push(o);return t}readDefaultBasemap(t){return this._readBasemap(t)}readDefaultDevBasemap(t){return this._readBasemap(t)}readDefaultVectorBasemap(t){return this._readBasemap(t)}get extraQuery(){let t=this.user?.orgId,o=!t||this.canSearchPublic;return this.id&&!o?` AND orgid:${this.id}`:null}get hasAPIKey(){return k(this.url)}get isOrganization(){return!!this.access}get itemPageUrl(){return this.url?`${this.url}/home/item.html`:null}get restUrl(){let t=this.url;if(t){let o=t.indexOf("/sharing");t=o>0?t.slice(0,o):this.url.replace(/\/+$/,""),t+="/sharing/rest"}return t}get thumbnailUrl(){let t=this.restUrl,o=this.thumbnail;return t&&o?this._normalizeSSL(t+"/portals/self/resources/"+o):null}readUrlKey(t){return t&&t.toLowerCase()}readUser(t){let o=null;return t&&(o=L.fromJSON(t),o.portal=this),o}load(t){let o=import("./chunk-5J2IWPLU.js").then(({default:s})=>{J(t),U=s}).then(()=>this.sourceJSON?this.sourceJSON:this.fetchSelf(this.authMode,!1,t)).then(s=>{if(!this.hasAPIKey&&w){let a=w;this.credential=a.findCredential(this.restUrl),this.credential||this.authMode!==c.AUTH_MODE_AUTO&&this.authMode!==c.AUTH_MODE_NO_PROMPT||(this._esriIdCredentialCreateHandle?.remove(),this._esriIdCredentialCreateHandle=a.on("credential-create",nt(new WeakRef(this))),it.register(this,this._esriIdCredentialCreateHandle,this))}this.sourceJSON=s,this.read(s)});return this.addResolvingPromise(o),Promise.resolve(this)}createElevationLayers(){return S(this,null,function*(){yield this.load();let t=this._getHelperService("defaultElevationLayers"),o=(yield import("./chunk-TNMPMD3A.js")).default;return t?t.map(s=>new o({id:s.id,url:s.url})):[]})}fetchBasemaps(t,o){return S(this,null,function*(){let s=yield this._fetchBasemaps(t,o);if(o?.include3d===!0&&this.use3dBasemaps!==!1){let a=yield this._fetchBasemaps3D(t,o);s.unshift(...a)}return s})}fetchDefault3DBasemap(t){return S(this,null,function*(){if(!this.useDefault3dBasemap||!this.default3DBasemapQuery||this.default3DBasemapQuery==="none")return null;let o=new g;o.query=this.default3DBasemapQuery,o.disableExtraQuery=!0;let s=(yield this.queryItems(o,t)).results.find(a=>a.type==="Web Scene");return s?new U({portalItem:s}):null})}fetchCategorySchema(t){return this.hasCategorySchema?this.request(this.restUrl+"/portals/self/categorySchema",t).then(o=>o.categorySchema):F(t)?Promise.reject(E()):Promise.resolve([])}fetchFeaturedGroups(t){let o=this.featuredGroups,s=new g({num:100,sortField:"title"});if(o?.length){let a=[];for(let l of o)a.push(`(title:"${l.title}" AND owner:${l.owner})`);return s.query=a.join(" OR "),this.queryGroups(s,t).then(l=>l.results)}return F(t)?Promise.reject(E()):Promise.resolve([])}fetchRegions(t){let o=this.user?.culture||this.culture||x();return this.request(this.restUrl+"/portals/regions",T(O({},t),{query:{culture:o}}))}fetchSettings(t){let o=this.user?.culture||this.culture||x();return this.request(this.restUrl+"/portals/self/settings",T(O({},t),{query:{culture:o}}))}static getDefault(){return et(()=>new c)}queryGroups(t,o){return this.queryPortal("/community/groups",t,"PortalGroup",o)}queryItems(t,o){return this.queryPortal("/search",t,"PortalItem",o)}queryUsers(t,o){return t.sortField||(t.sortField="username"),this.queryPortal("/community/users",t,"PortalUser",o)}fetchSelf(t=this.authMode,o=!1,s){let a=this.restUrl+"/portals/self",l=O({authMode:t,query:{culture:x().toLowerCase()},withCredentials:!0},s);return l.authMode==="auto"&&(l.authMode="no-prompt"),o&&(l.query.default=!0),this.request(a,l)}queryPortal(t,o,s,a){let l=_(g,o),n=u=>this.request(this.restUrl+t,O(O({},l.toRequestOptions(this)),a)).then(p=>{let y=l.clone();return y.start=p.nextStart,new rt({nextQueryParams:y,queryParams:l,total:p.total,results:c._resultsToTypedArray(u,{portal:this},p,a)})}).then(p=>Promise.all(p.results.map(y=>typeof y.when=="function"?y.when():p)).then(()=>p,y=>(V(y),p)));return s&&st[s]?st[s]().then(({default:u})=>(J(a),n(u))):n()}signIn(){if(this.hasAPIKey)return this.load().then(()=>{if(!this.user)throw new m("portal:not-authenticated","Unable to authenticate user. Portal.user is missing")});if(this.authMode===c.AUTH_MODE_ANONYMOUS||this.authMode===c.AUTH_MODE_NO_PROMPT&&!w)return Promise.reject(new m("portal:invalid-auth-mode",`Current "authMode"' is "${this.authMode}"`));if(this.loadStatus==="failed")return Promise.reject(this.loadError);let t=o=>Promise.resolve().then(()=>this.loadStatus==="not-loaded"?(o||(this.authMode="immediate"),this.load().then(()=>null)):this.loadStatus==="loading"?this.load().then(()=>this.credential?null:(this.credential=o,this.fetchSelf("immediate"))):this.user&&this.credential===o?null:(this.credential=o,this.fetchSelf("immediate"))).then(s=>{s&&(this.sourceJSON=s,this.read(s))});return w?w.getCredential(this.restUrl,{prompt:this.authMode!==c.AUTH_MODE_NO_PROMPT}).then(o=>t(o)):t(this.credential)}normalizeUrl(t){let o=this.credential?.token;return this._normalizeSSL(o?t+(t.includes("?")?"&":"?")+"token="+o:t)}requestToTypedArray(t,o,s){return this.request(t,o).then(a=>{let l=c._resultsToTypedArray(s,{portal:this},a);return Promise.all(l.map(n=>typeof n.when=="function"?n.when():a)).then(()=>l,()=>l)})}request(t,o={}){let s=O({f:"json"},o.query),{authMode:a=this.authMode===c.AUTH_MODE_ANONYMOUS||this.authMode===c.AUTH_MODE_NO_PROMPT?this.authMode:"auto",body:l=null,cacheBust:n=!1,method:u="auto",responseType:p="json",signal:y}=o,D={authMode:a,body:l,cacheBust:n,method:u,query:s,responseType:p,timeout:0,signal:y};return o.withCredentials&&(D.withCredentials=!0),Y(this._normalizeSSL(t),D).then(C=>C.data)}toJSON(){throw new m("internal:not-yet-implemented","Portal.toJSON is not yet implemented")}static fromJSON(t){if(!t)return null;if(t.declaredClass)throw new Error("JSON object is already hydrated");return new c({sourceJSON:t})}_getHelperService(t){let o=this.helperServices&&this.helperServices[t];if(!o)throw new m("portal:service-not-found",`The \`helperServices\` do not include an entry named "${t}"`);return o}_fetchBasemaps(t,o){return S(this,null,function*(){let s=new g;s.query=t||(this.hasAPIKey?this.devBasemapGalleryGroupQuery:this.useVectorBasemaps?this.vectorBasemapGalleryGroupQuery:this.basemapGalleryGroupQuery),s.disableExtraQuery=!0;let a=yield this.queryGroups(s,o);if(!a.total)return[];let l=a.results[0];s.num=100,s.query='type:"Web Map" -type:"Web Application"',s.sortField=l.sortField||"name",s.sortOrder=l.sortOrder||"desc";let n=yield l.queryItems(s,o);return n.total?n.results.filter(u=>u.type==="Web Map").map(u=>new U({portalItem:u})):[]})}_fetchBasemaps3D(t,o){return S(this,null,function*(){let s=t||this.basemapGalleryGroupQuery3D;if(!s)return[];let a=new g({query:s,disableExtraQuery:!0}),l=yield this.queryGroups(a,o);if(!l.total)return[];let n=l.results[0];a.num=100,a.query='type:"Web Scene"',a.sortField=n.sortField||"name",a.sortOrder=n.sortOrder||"desc";let u=yield n.queryItems(a,o);return u.total?u.results.filter(p=>p.type==="Web Scene").map(p=>new U({portalItem:p})):[]})}_normalizeSSL(t){return t.replace(/^http:/i,"https:").replace(":7080",":7443")}_readBasemap(t){if(t){let o=U.fromJSON(t);return o.portalItem={portal:this},o}return null}static _resultsToTypedArray(t,o,s,a){let l;if(s){let n=a!=null?a.signal:null;l=s.listings||s.notifications||s.userInvitations||s.tags||s.items||s.groups||s.comments||s.provisions||s.results||s.relatedItems||s,(t||o)&&(l=l.map(u=>{let p=Object.assign(t?t.fromJSON(u):u,o);return typeof p.load=="function"&&p.load(n),p}))}else l=[];return l}};i.AUTH_MODE_ANONYMOUS="anonymous",i.AUTH_MODE_AUTO="auto",i.AUTH_MODE_IMMEDIATE="immediate",i.AUTH_MODE_NO_PROMPT="no-prompt",e([r()],i.prototype,"access",void 0),e([r()],i.prototype,"allSSL",void 0),e([r()],i.prototype,"authMode",void 0),e([r()],i.prototype,"authorizedCrossOriginDomains",void 0),e([b("authorizedCrossOriginDomains")],i.prototype,"readAuthorizedCrossOriginDomains",null),e([r()],i.prototype,"basemapGalleryGroupQuery",void 0),e([r({json:{name:"3DBasemapGalleryGroupQuery"}})],i.prototype,"basemapGalleryGroupQuery3D",void 0),e([r()],i.prototype,"bingKey",void 0),e([r()],i.prototype,"canListApps",void 0),e([r()],i.prototype,"canListData",void 0),e([r()],i.prototype,"canListPreProvisionedItems",void 0),e([r()],i.prototype,"canProvisionDirectPurchase",void 0),e([r()],i.prototype,"canSearchPublic",void 0),e([r()],i.prototype,"canShareBingPublic",void 0),e([r()],i.prototype,"canSharePublic",void 0),e([r()],i.prototype,"canSignInArcGIS",void 0),e([r()],i.prototype,"canSignInIDP",void 0),e([r()],i.prototype,"colorSetsGroupQuery",void 0),e([r()],i.prototype,"commentsEnabled",void 0),e([r({type:Date})],i.prototype,"created",void 0),e([r()],i.prototype,"credential",void 0),e([r()],i.prototype,"culture",void 0),e([r()],i.prototype,"currentVersion",void 0),e([r()],i.prototype,"customBaseUrl",void 0),e([r()],i.prototype,"default3DBasemapQuery",void 0),e([r()],i.prototype,"defaultBasemap",void 0),e([b("defaultBasemap")],i.prototype,"readDefaultBasemap",null),e([r()],i.prototype,"defaultDevBasemap",void 0),e([b("defaultDevBasemap")],i.prototype,"readDefaultDevBasemap",null),e([r({type:M})],i.prototype,"defaultExtent",void 0),e([r()],i.prototype,"defaultVectorBasemap",void 0),e([b("defaultVectorBasemap")],i.prototype,"readDefaultVectorBasemap",null),e([r()],i.prototype,"description",void 0),e([r()],i.prototype,"devBasemapGalleryGroupQuery",void 0),e([r()],i.prototype,"eueiEnabled",void 0),e([r({readOnly:!0})],i.prototype,"extraQuery",null),e([r()],i.prototype,"featuredGroups",void 0),e([r()],i.prototype,"featuredItemsGroupQuery",void 0),e([r()],i.prototype,"galleryTemplatesGroupQuery",void 0),e([r()],i.prototype,"layoutGroupQuery",void 0),e([r()],i.prototype,"livingAtlasGroupQuery",void 0),e([r({readOnly:!0})],i.prototype,"hasAPIKey",null),e([r()],i.prototype,"hasCategorySchema",void 0),e([r()],i.prototype,"hasClassificationSchema",void 0),e([r()],i.prototype,"helpBase",void 0),e([r()],i.prototype,"helperServices",void 0),e([r()],i.prototype,"helpMap",void 0),e([r()],i.prototype,"homePageFeaturedContent",void 0),e([r()],i.prototype,"homePageFeaturedContentCount",void 0),e([r()],i.prototype,"httpPort",void 0),e([r()],i.prototype,"httpsPort",void 0),e([r()],i.prototype,"id",void 0),e([r()],i.prototype,"ipCntryCode",void 0),e([r({readOnly:!0})],i.prototype,"isOrganization",null),e([r()],i.prototype,"isPortal",void 0),e([r()],i.prototype,"isReadOnly",void 0),e([r({readOnly:!0})],i.prototype,"itemPageUrl",null),e([r()],i.prototype,"layerTemplatesGroupQuery",void 0),e([r()],i.prototype,"maxTokenExpirationMinutes",void 0),e([r({type:Date})],i.prototype,"modified",void 0),e([r()],i.prototype,"name",void 0),e([r()],i.prototype,"portalHostname",void 0),e([r()],i.prototype,"portalMode",void 0),e([r()],i.prototype,"portalProperties",void 0),e([r()],i.prototype,"region",void 0),e([r()],i.prototype,"recycleBinEnabled",void 0),e([r({readOnly:!0})],i.prototype,"restUrl",null),e([r()],i.prototype,"rotatorPanels",void 0),e([r()],i.prototype,"showHomePageDescription",void 0),e([r()],i.prototype,"sourceJSON",void 0),e([r()],i.prototype,"staticImagesUrl",void 0),e([r({json:{name:"2DStylesGroupQuery"}})],i.prototype,"stylesGroupQuery2d",void 0),e([r({json:{name:"stylesGroupQuery"}})],i.prototype,"stylesGroupQuery3d",void 0),e([r()],i.prototype,"supportsHostedServices",void 0),e([r()],i.prototype,"symbolSetsGroupQuery",void 0),e([r()],i.prototype,"templatesGroupQuery",void 0),e([r()],i.prototype,"thumbnail",void 0),e([r({readOnly:!0})],i.prototype,"thumbnailUrl",null),e([r()],i.prototype,"units",void 0),e([r()],i.prototype,"url",void 0),e([r()],i.prototype,"urlKey",void 0),e([b("urlKey")],i.prototype,"readUrlKey",null),e([r()],i.prototype,"user",void 0),e([b("user")],i.prototype,"readUser",null),e([r()],i.prototype,"use3dBasemaps",void 0),e([r()],i.prototype,"useDefault3dBasemap",void 0),e([r()],i.prototype,"useStandardizedQuery",void 0),e([r()],i.prototype,"useVectorBasemaps",void 0),e([r()],i.prototype,"vectorBasemapGalleryGroupQuery",void 0),i=c=e([f("esri.portal.Portal")],i);var Ae=i,it=new FinalizationRegistry(t=>{t.remove()});function nt(t){let o=w;return()=>{let s=t.deref();s&&o.findCredential(s.restUrl)&&s.signIn().catch(()=>{})}}export{g as a,L as b,Ae as c};
