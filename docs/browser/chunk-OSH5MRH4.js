import{b as C,f as h}from"./chunk-MBVOWLUI.js";import{a as g}from"./chunk-BP73DJTS.js";function e(s,t,r){return!!v(s,t,r)}function n(s,t,r){return v(s,t,r)}function v(s,t,r){return s&&s.hasOwnProperty(t)?s[t]:r}var S={name:"supportsName",size:"supportsSize",contentType:"supportsContentType",keywords:"supportsKeywords",exifInfo:"supportsExifInfo"};function Q(s){let t=s?.supportedSpatialAggregationStatistics?.map(r=>r.toLowerCase());return{envelope:!!t?.includes("envelopeaggregate"),centroid:!!t?.includes("centroidaggregate"),convexHull:!!t?.includes("convexhullaggregate")}}function d(s,t){return!!s?.supportedOperationsWithCacheHint?.map(p=>p.toLowerCase())?.includes(t.toLowerCase())}function f(s){let t=s?.supportedStatisticTypes?.map(r=>r.toLowerCase());return{count:!!t?.includes("count"),sum:!!t?.includes("sum"),min:!!t?.includes("min"),max:!!t?.includes("max"),avg:!!t?.includes("avg"),var:!!t?.includes("var"),stddev:!!t?.includes("stddev"),percentileContinuous:!!t?.includes("percentile_continuous"),percentileDiscrete:!!t?.includes("percentile_discrete"),envelope:!!t?.includes("envelopeaggregate"),centroid:!!t?.includes("centroidaggregate"),convexHull:!!t?.includes("convexhullaggregate")}}function O(s,t){return{analytics:x(s),attachment:R(s),data:F(s),metadata:B(s),operations:T(s.capabilities,s,t),query:D(s,t),queryBins:b(s),queryRelated:E(s),queryTopFeatures:w(s),editing:M(s)}}function x(s){return{supportsCacheHint:d(s.advancedQueryCapabilities,"queryAnalytics")}}function R(s){let t=s.attachmentProperties,r={supportsName:!1,supportsSize:!1,supportsContentType:!1,supportsKeywords:!1,supportsExifInfo:!1,supportsCacheHint:d(s.advancedQueryCapabilities,"queryAttachments"),supportsResize:e(s,"supportsAttachmentsResizing",!1)};return t&&Array.isArray(t)&&t.forEach(p=>{let o=S[p.name];o&&(r[o]=!!p.isEnabled)}),r}function F(s){return{isVersioned:e(s,"isDataVersioned",!1),isBranchVersioned:e(s,"isDataBranchVersioned",!1),supportsAttachment:e(s,"hasAttachments",!1),supportsM:e(s,"hasM",!1),supportsZ:e(s,"hasZ",!1)}}function B(s){return{supportsAdvancedFieldProperties:e(s,"supportsFieldDescriptionProperty",!1)}}function T(s,t,r){let p=s?s.toLowerCase().split(",").map(A=>A.trim()):[],o=r?C(r):null,y=p.includes(o!=null&&o.serverType==="MapServer"?"data":"query"),u=p.includes("editing")&&!t.datesInUnknownTimezone,a=u&&p.includes("create"),i=u&&p.includes("delete"),c=u&&p.includes("update"),m=p.includes("changetracking"),l=t.advancedQueryCapabilities;return u&&!(a||i||c)&&(a=i=c=!0),{supportsCalculate:e(t,"supportsCalculate",!1),supportsTruncate:e(t,"supportsTruncate",!1),supportsValidateSql:e(t,"supportsValidateSql",!1),supportsAdd:a,supportsDelete:i,supportsEditing:u,supportsChangeTracking:m,supportsQuery:y,supportsQueryAnalytics:e(l,"supportsQueryAnalytic",!1),supportsQueryAttachments:e(l,"supportsQueryAttachments",!1),supportsQueryBins:e(l,"supportsQueryBins",!1),supportsQueryTopFeatures:e(l,"supportsTopFeaturesQuery",!1),supportsResizeAttachments:e(t,"supportsAttachmentsResizing",!1),supportsSync:p.includes("sync"),supportsUpdate:c,supportsExceedsLimitStatistics:e(t,"supportsExceedsLimitStatistics",!1),supportsAsyncConvert3D:e(t,"supportsAsyncConvert3D",!1)}}function D(s,t){let r=s.advancedQueryCapabilities,p=s.ownershipBasedAccessControlForFeatures,o=s.archivingInfo,y=s.currentVersion,u=t?.includes("MapServer"),a=!u||y>=g("mapserver-pbf-version-support"),i=h(t),c=new Set((s.supportedQueryFormats??"").split(",").map(m=>m.toLowerCase().trim()));return{maxRecordCount:n(s,"maxRecordCount",void 0),maxRecordCountFactor:n(s,"maxRecordCountFactor",void 0),standardMaxRecordCount:n(s,"standardMaxRecordCount",void 0),supportedSpatialAggregationStatistics:Q(r),supportsCacheHint:e(r,"supportsQueryWithCacheHint",!1)||d(r,"query"),supportsCentroid:e(r,"supportsReturningGeometryCentroid",!1),supportsCompactGeometry:i,supportsDefaultSpatialReference:e(r,"supportsDefaultSR",!1),supportsDisjointSpatialRelationship:e(r,"supportsDisjointSpatialRel",!1),supportsDistance:e(r,"supportsQueryWithDistance",!1),supportsDistinct:e(r,"supportsDistinct",s.supportsAdvancedQueries),supportsExtent:e(r,"supportsReturningQueryExtent",!1),supportsFormatPBF:a&&c.has("pbf"),supportsFullTextSearch:e(r,"supportsFullTextSearch",!1),supportsGeometryProperties:e(r,"supportsReturningGeometryProperties",!1),supportsHavingClause:e(r,"supportsHavingClause",!1),supportsHistoricMoment:e(o,"supportsQueryWithHistoricMoment",!1),supportsMaxRecordCountFactor:e(r,"supportsMaxRecordCountFactor",!1),supportsOrderBy:e(r,"supportsOrderBy",s.supportsAdvancedQueries),supportsPagination:e(r,"supportsPagination",!1),supportsPercentileStatistics:e(r,"supportsPercentileStatistics",!1),supportsQuantization:e(s,"supportsCoordinatesQuantization",!1),supportsQuantizationEditMode:e(s,"supportsQuantizationEditMode",!1),supportsQueryByAnonymous:e(p,"allowAnonymousToQuery",!0),supportsQueryByOthers:e(p,"allowOthersToQuery",!0),supportsQueryGeometry:e(s,"supportsReturningQueryGeometry",!1),supportsResultType:e(r,"supportsQueryWithResultType",!1),supportsSpatialAggregationStatistics:e(r,"supportsSpatialAggregationStatistics",!1),supportsSqlExpression:e(r,"supportsSqlExpression",!1),supportsStandardizedQueriesOnly:e(s,"useStandardizedQueries",!1),supportsStatistics:e(r,"supportsStatistics",s.supportsStatistics),supportsTopFeaturesQuery:e(r,"supportsTopFeaturesQuery",!1),tileMaxRecordCount:n(s,"tileMaxRecordCount",void 0)}}function E(s){let t=s.advancedQueryCapabilities,r=e(t,"supportsAdvancedQueryRelated",!1);return{supportsPagination:e(t,"supportsQueryRelatedPagination",!1),supportsCount:r,supportsOrderBy:r,supportsCacheHint:d(t,"queryRelated")}}function w(s){return{supportsCacheHint:d(s.advancedQueryCapabilities,"queryTopFilter")}}function b(s){let t=s?s.queryBinsCapabilities:void 0;return{supportsDate:e(t,"supportsDateBin",!1),supportsFixedInterval:e(t,"supportsFixedIntervalBin",!1),supportsAutoInterval:e(t,"supportsAutoIntervalBin",!1),supportsFixedBoundaries:e(t,"supportsFixedBoundariesBin",!1),supportedStatistics:f(t)}}function M(s){let t=s.ownershipBasedAccessControlForFeatures,r=s?s.advancedEditingCapabilities:void 0;return{supportsGeometryUpdate:e(s,"allowGeometryUpdates",!0),supportsGlobalId:e(s,"supportsApplyEditsWithGlobalIds",!1),supportsReturnServiceEditsInSourceSpatialReference:e(s,"supportsReturnServiceEditsInSourceSR",!1),supportsRollbackOnFailure:e(s,"supportsRollbackOnFailureParameter",!1),supportsUpdateWithoutM:e(s,"allowUpdateWithoutMValues",!1),supportsUploadWithItemId:e(s,"supportsAttachmentsByUploadId",!1),supportsDeleteByAnonymous:e(t,"allowAnonymousToDelete",!0),supportsDeleteByOthers:e(t,"allowOthersToDelete",!0),supportsUpdateByAnonymous:e(t,"allowAnonymousToUpdate",!0),supportsUpdateByOthers:e(t,"allowOthersToUpdate",!0),supportsAsyncApplyEdits:e(r,"supportsAsyncApplyEdits",!1),zDefault:n(s,"zDefault",void 0)}}function P(s){return{operations:{supportsAppend:e(s,"supportsAppend",!1),supportsCoverageQuery:s?.playbackInfo?.klv["0601"]??!1,supportsExportClip:e(s,"supportsExportClip",!1),supportsExportFrameset:e(s,"supportsExportFrameset",!1),supportsMensuration:e(s,"supportsMensuration",!1),supportsUpdate:e(s,"supportsUpdate",!1)}}}export{O as a,P as b};
