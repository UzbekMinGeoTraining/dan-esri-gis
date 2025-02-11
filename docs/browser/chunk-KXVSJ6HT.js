import{e as G,f as j}from"./chunk-DAAL3W2C.js";import{h as B}from"./chunk-DGD6TNOG.js";import{a as U}from"./chunk-HVNUIUKO.js";import{b as L}from"./chunk-CY477QBZ.js";import{b as $}from"./chunk-VDNXTMSC.js";import{E as T}from"./chunk-7D4IYTAJ.js";import{q as y,r as k}from"./chunk-LAJXTVEO.js";import{c as E}from"./chunk-VQHENXDQ.js";import{m as S,p as R,r as f,u as O}from"./chunk-4DLSYLKE.js";import{D as v}from"./chunk-4M6XQSBA.js";import{E as I}from"./chunk-GMC3I5VG.js";import{b as F,r as A,t as s}from"./chunk-3IBUFXWY.js";import{a as w,g as m}from"./chunk-JEGVIFEP.js";function z(e){return e?.applyEdits!=null}function x(e){return typeof e=="object"&&e!=null&&"objectId"in e&&!!e.objectId}function ye(e){return e.every(x)}function N(e){return typeof e=="object"&&e!=null&&"globalId"in e&&!!e.globalId}function ge(e){return e.every(N)}function be(i,d,h){return m(this,arguments,function*(e,t,r,a={}){let n,u="gdbVersion"in e?e.gdbVersion:null,p=a.gdbVersion??u;if(j(e)&&e.url)n=G(e.url,e.layerId,p,a.returnServiceEditsOption==="original-and-current-features");else{n=I(),n.promise.then(o=>{(o.addedFeatures.length||o.updatedFeatures.length||o.deletedFeatures.length||o.addedAttachments.length||o.updatedAttachments.length||o.deletedAttachments.length)&&e.emit("edits",o)});let l={result:n.promise};e.emit("apply-edits",l)}try{let{results:l,edits:o}=yield Z(e,t,r,a),c=C=>C.filter(q=>!q.error).map(F),b={edits:o,addedFeatures:c(l.addFeatureResults),updatedFeatures:c(l.updateFeatureResults),deletedFeatures:c(l.deleteFeatureResults),addedAttachments:c(l.addAttachmentResults),updatedAttachments:c(l.updateAttachmentResults),deletedAttachments:c(l.deleteAttachmentResults),exceededTransferLimit:!1,historicMoment:l.editMoment?new Date(l.editMoment):null,globalIdToObjectId:a.globalIdToObjectId};return l.editedFeatureResults?.length&&(b.editedFeatures=l.editedFeatureResults),n.resolve(b),l}catch(l){throw n.reject(l),l}})}function Z(e,t,r,a){return m(this,null,function*(){if(yield e.load(),!z(t))throw new s(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!k(e))throw new s(`${e.type}-layer:editing-disabled`,"Editing is disabled for layer",{layer:e});let{edits:i,options:d}=yield _(e,r,a);return i.addFeatures?.length||i.updateFeatures?.length||i.deleteFeatures?.length||i.addAttachments?.length||i.updateAttachments?.length||i.deleteAttachments?.length?{edits:i,results:yield t.applyEdits(i,d)}:{edits:i,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}})}function _(e,t,r){return m(this,null,function*(){let a=y(e),i=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),d=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments),h=e.infoFor3D!=null;if(ee(t,a,r,!!i,!!d,`${e.type}-layer`),!a.data.isVersioned&&r?.gdbVersion)throw new s(`${e.type}-layer:invalid-parameter`,"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!a.editing.supportsRollbackOnFailure&&r?.rollbackOnFailureEnabled)throw new s(`${e.type}-layer:invalid-parameter`,"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");let n=w({},r);if(n.rollbackOnFailureEnabled!=null||a.editing.supportsRollbackOnFailure||(n.rollbackOnFailureEnabled=!0),n.rollbackOnFailureEnabled||n.returnServiceEditsOption!=="original-and-current-features"||(n.rollbackOnFailureEnabled===!1&&A.getLogger("esri.layers.graphics.editingSupport").warn(`${e.type}-layer:invalid-parameter`,"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true, but 'rollBackOnFailure' was set to false. 'rollBackOnFailure' has been overwritten and set to true."),n.rollbackOnFailureEnabled=!0),!a.editing.supportsReturnServiceEditsInSourceSpatialReference&&n.returnServiceEditsInSourceSR)throw new s(`${e.type}-layer:invalid-parameter`,"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");if(n.returnServiceEditsInSourceSR&&n.returnServiceEditsOption!=="original-and-current-features")throw new s(`${e.type}-layer:invalid-parameter`,"'returnServiceEditsInSourceSR' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");let u=Y(t,a,`${e.type}-layer`),p=r?.globalIdUsed||h,l=e.fields.filter(o=>o.type==="big-integer"||o.type==="oid"&&(o.length||0)>=8);if(p){let{globalIdField:o}=e;if(o==null)throw new s(`${e.type}-layer:invalid-parameter`,"Layer does not specify a global id field.");u.addFeatures.forEach(c=>K(c,o))}return u.addFeatures.forEach(o=>X(o,e,p,l)),u.updateFeatures.forEach(o=>J(o,e,p,l)),u.deleteFeatures.forEach(o=>H(o,e,p,l)),u.addAttachments.forEach(o=>V(o,e)),u.updateAttachments.forEach(o=>V(o,e)),h&&(yield te(u,e)),{edits:yield P(u),options:n}})}function g(e,t,r,a){if(r){if("attributes"in e&&!e.attributes[t.globalIdField])throw new s(`${t.type}-layer:invalid-parameter`,`Feature should have '${t.globalIdField}' when 'globalIdUsed' is true`);if(!("attributes"in e)&&!e.globalId)throw new s(`${t.type}-layer:invalid-parameter`,"`'globalId' of the feature should be passed when 'globalIdUsed' is true")}if(a.length&&"attributes"in e)for(let i of a){let d=e.attributes[i.name];if(d!==void 0&&!T(i,d))throw new s(`${t.type}-layer:invalid-parameter`,`Big-integer field '${i.name}' of the feature must be less than ${Number.MAX_SAFE_INTEGER}`,{feature:e})}if("geometry"in e&&e.geometry!=null){if(e.geometry.hasZ&&t.capabilities?.data.supportsZ===!1)throw new s(`${t.type}-layer:z-unsupported`,"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&t.capabilities?.data.supportsM===!1)throw new s(`${t.type}-layer:m-unsupported`,"Layer does not support m values while feature has m values.")}}function D(e,t){if("geometry"in e&&e.geometry?.type==="mesh"&&t.infoFor3D!=null&&t.spatialReference!=null){let{geometry:r}=e,{spatialReference:a,vertexSpace:i}=r,d=t.spatialReference,h=i.type==="local",n=R(d),u=S(d,a),p=u||f(d)&&(f(a)||O(a));if(!(h&&n&&p||!h&&!n&&u))throw new s(`${t.type}-layer:mesh-unsupported`,`Uploading a mesh with a ${i.type} vertex space and a spatial reference wkid:${a.wkid} to a layer with a spatial reference wkid:${d.wkid} is not supported.`)}}function X(e,t,r,a){g(e,t,r,a),D(e,t)}function H(e,t,r,a){g(e,t,r,a)}function J(e,t,r,a){g(e,t,r,a),D(e,t);let i=y(t);if("geometry"in e&&e.geometry!=null&&!i?.editing.supportsGeometryUpdate)throw new s(`${t.type}-layer:unsupported-operation`,"Layer does not support geometry updates.")}function V(e,t){let{feature:r,attachment:a}=e;if(!r||"attributes"in r&&!r.attributes[t.globalIdField])throw new s(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in r)&&!r.globalId)throw new s(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to 'globalId' of the parent feature");if(!a.globalId)throw new s(`${t.type}-layer:invalid-parameter`,"Attachment should have 'globalId'");if(!a.data&&!a.uploadId)throw new s(`${t.type}-layer:invalid-parameter`,"Attachment should have 'data' or 'uploadId'");if(!(a.data instanceof File&&a.data.name)&&!a.name)throw new s(`${t.type}-layer:invalid-parameter`,"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!t.capabilities?.editing.supportsUploadWithItemId&&a.uploadId)throw new s(`${t.type}-layer:invalid-parameter`,"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if(typeof a.data=="string"){let i=v(a.data);if(i&&!i.isBase64)throw new s(`${t.type}-layer:invalid-parameter`,"Attachment 'data' should be a Blob, File or Base64 encoded string")}}function K(e,t){let{attributes:r}=e;r[t]==null&&(r[t]=$())}function P(e){return m(this,null,function*(){let t=e.addFeatures??[],r=e.updateFeatures??[],a=t.concat(r).map(n=>n.geometry),i=yield L(a),d=t.length,h=r.length;return i.slice(0,d).forEach((n,u)=>t[u].geometry=n),i.slice(d,d+h).forEach((n,u)=>r[u].geometry=n),e})}function Q(e){return{addFeatures:Array.from(e?.addFeatures??[]),updateFeatures:Array.from(e?.updateFeatures??[]),deleteFeatures:e&&E.isCollection(e.deleteFeatures)?e.deleteFeatures.toArray():e.deleteFeatures||[],addAttachments:e.addAttachments||[],updateAttachments:e.updateAttachments||[],deleteAttachments:e.deleteAttachments||[]}}function Y(e,t,r){let a=Q(e);if(a.addFeatures?.length&&!t.operations.supportsAdd)throw new s(`${r}:unsupported-operation`,"Layer does not support adding features.");if(a.updateFeatures?.length&&!t.operations.supportsUpdate)throw new s(`${r}:unsupported-operation`,"Layer does not support updating features.");if(a.deleteFeatures?.length&&!t.operations.supportsDelete)throw new s(`${r}:unsupported-operation`,"Layer does not support deleting features.");return a.addFeatures=a.addFeatures.map(M),a.updateFeatures=a.updateFeatures.map(M),a.addAssetFeatures=[],a}function ee(e,t,r,a,i,d){if(!e||!a&&!i)throw new s(`${d}:missing-parameters`,"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!t.editing.supportsGlobalId&&r?.globalIdUsed)throw new s(`${d}:invalid-parameter`,"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!t.editing.supportsGlobalId&&i)throw new s(`${d}:invalid-parameter`,"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if(!r?.globalIdUsed&&i)throw new s(`${d}:invalid-parameter`,"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true")}function M(e){let t=new U;return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}function te(e,t){return m(this,null,function*(){let{infoFor3D:r}=t;if(r==null)return;if(!B(r))throw new s(`${t.type}-layer:binary-gltf-asset-not-supported`,"3DObjectFeatureLayer requires binary glTF (.glb) support for updating mesh geometry.");e.addAssetFeatures??=[];let{addAssetFeatures:a}=e;for(let i of e.addFeatures??[])W(i)&&a.push(i);for(let i of e.updateFeatures??[])W(i)&&a.push(i)})}function W(e){return e?.geometry?.type==="mesh"}function we(e,t,r,a){if(!z(t))throw new s(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!t.uploadAssets)throw new s(`${e.type}-layer:no-asset-upload-support`,"Layer source does not support uploadAssets capability",{layer:e});return t.uploadAssets(r,a)}export{x as a,ye as b,N as c,ge as d,be as e,P as f,Q as g,Y as h,ee as i,M as j,we as k};
