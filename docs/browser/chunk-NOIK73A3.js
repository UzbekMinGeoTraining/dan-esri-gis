import{a as d}from"./chunk-AAVC4ZRS.js";import{a as c}from"./chunk-UFJ62PBU.js";import{a as y}from"./chunk-QN72YLVS.js";import{a as h,b as u}from"./chunk-M2536OUN.js";import"./chunk-IVZ2RXL2.js";import{b as f}from"./chunk-G54NHNUC.js";import{a as m}from"./chunk-4IUQ56CO.js";import{a as n}from"./chunk-2K35ZAGK.js";import"./chunk-E3DN7XQP.js";import"./chunk-4RJTDUBN.js";import"./chunk-MTRBRBPC.js";import"./chunk-A7GYEEN6.js";import"./chunk-WUZAEWWX.js";import"./chunk-ACVF7Z7X.js";import"./chunk-SVK2E2V5.js";import"./chunk-PA5IAWXD.js";import"./chunk-AR3SF3CU.js";import"./chunk-WP7QHDBV.js";import"./chunk-MNOCKVQA.js";import"./chunk-ZMNG2DP3.js";import"./chunk-BALLTG2E.js";import"./chunk-5DAF2FXI.js";import"./chunk-U3ETEC6R.js";import"./chunk-GNKF5TIB.js";import"./chunk-VPH54J3G.js";import"./chunk-GB5RQL32.js";import"./chunk-HVNUIUKO.js";import"./chunk-Y5M2SONX.js";import"./chunk-Q6ZVH4MK.js";import"./chunk-OL43UY3L.js";import"./chunk-H2QMNAXT.js";import"./chunk-GKUDWGVQ.js";import"./chunk-NZ7WSL6F.js";import"./chunk-RRDM7P6F.js";import"./chunk-AYOI2Y26.js";import"./chunk-IH2TDIRR.js";import"./chunk-3FCM74ZB.js";import"./chunk-ZGDQY5ZD.js";import"./chunk-QH2MD2O2.js";import"./chunk-6EZNY6L4.js";import"./chunk-7XLHE26H.js";import"./chunk-MBVOWLUI.js";import"./chunk-EN6CTWVM.js";import"./chunk-LVPMJTA6.js";import"./chunk-CY477QBZ.js";import"./chunk-EJO53FLN.js";import"./chunk-XXR5OT24.js";import"./chunk-4XIZVPNF.js";import"./chunk-NNETCWLJ.js";import"./chunk-EPTSNNZF.js";import{r as p}from"./chunk-FW33MEBA.js";import"./chunk-RM6CXOHZ.js";import"./chunk-AOA5JMXK.js";import"./chunk-TWW3KW7Z.js";import"./chunk-2HUIJUS4.js";import"./chunk-MBJHSEMD.js";import"./chunk-K72LO6P2.js";import"./chunk-2R4SNL6O.js";import"./chunk-MXOOOTCV.js";import"./chunk-7D4IYTAJ.js";import"./chunk-TSNWBMBA.js";import"./chunk-GLWPOGYF.js";import"./chunk-YFBPRKIN.js";import"./chunk-P2YRCTWM.js";import"./chunk-OFZ6SV37.js";import"./chunk-LAJXTVEO.js";import"./chunk-YSOJWUIW.js";import"./chunk-Q5WFUDPQ.js";import"./chunk-DPZGANVI.js";import"./chunk-T7BKG6V3.js";import"./chunk-R6VC74T7.js";import"./chunk-6WKJD7BM.js";import"./chunk-3CR7P5WT.js";import"./chunk-QNZSBADV.js";import"./chunk-PYQRTZNZ.js";import"./chunk-S4PLWG55.js";import"./chunk-DZAY272R.js";import"./chunk-GYH7NDHH.js";import"./chunk-S3UQHW42.js";import"./chunk-VQHENXDQ.js";import"./chunk-VWF5VUO3.js";import"./chunk-HRP5LYWJ.js";import"./chunk-BIVFGNT6.js";import"./chunk-7PEPFLZH.js";import"./chunk-BRVOQZDM.js";import"./chunk-3M7VXIQH.js";import"./chunk-TBYT66N3.js";import"./chunk-5PTS4JDF.js";import"./chunk-MUI46NAG.js";import"./chunk-N27U3N2T.js";import"./chunk-4R5NBZMW.js";import"./chunk-NDYVXEZ5.js";import"./chunk-CMMPCPP5.js";import"./chunk-4DLSYLKE.js";import"./chunk-VPXBKZQM.js";import"./chunk-ZTKK3KB7.js";import"./chunk-GZXWFBZI.js";import"./chunk-B7IARA3F.js";import"./chunk-IZVEJCCI.js";import"./chunk-TEY6TKJV.js";import"./chunk-4M6XQSBA.js";import"./chunk-2JF6YUJG.js";import{Q as o}from"./chunk-GGZQ5GCM.js";import{U as l}from"./chunk-TFUPB3ZG.js";import"./chunk-ANPNMGFG.js";import{a as r}from"./chunk-BMVJCP2M.js";import"./chunk-GMC3I5VG.js";import"./chunk-WGF2T2BG.js";import"./chunk-YZP43POT.js";import"./chunk-VEDIBGHD.js";import{t as a}from"./chunk-3IBUFXWY.js";import"./chunk-BP73DJTS.js";import{g as s}from"./chunk-JEGVIFEP.js";var i=class extends m(c(y(n))){constructor(){super(...arguments),this.type="tile-3d",this._popupHighlightHelper=null}get imageFormatIsOpaque(){return this.layer.tileInfo.format==="jpg"}get hasMixedImageFormats(){return this.layer.tileInfo.format==="mixed"}get tileInfo(){return this.layer.tileInfo}initialize(){if(this.layer.type==="web-tile"){let e=this.layer.fullExtent?.spatialReference,t=this.layer.tileInfo?.spatialReference;if(e==null||t==null||!p(e,t)){let g=this.layer.originOf("fullExtent")==="defaults"||this.layer.fullExtent==null?"SceneView requires fullExtent to be specified by the user on WebTileLayer":"SceneView requires fullExtent to be specified in the same spatial reference as tileInfo on WebTileLayer";this.addResolvingPromise(Promise.reject(new a("layerview:incompatible-fullextent",g)))}}h(this,this.layer)&&(this._popupHighlightHelper=new u({createFetchPopupFeaturesQueryGeometry:(e,t)=>f(e,t,this.view),layerView:this,updatingHandles:this._updatingHandles})),this._addTilingSchemeMatchPromise()}destroy(){this._popupHighlightHelper?.destroy()}fetchTile(e,t){return s(this,null,function*(){return d(this,e,t)})}fetchPopupFeaturesAtLocation(e,t){return s(this,null,function*(){return this._popupHighlightHelper?.fetchPopupFeaturesAtLocation(e,t)??[]})}doRefresh(){return s(this,null,function*(){this.suspended||this.emit("data-changed")})}};r([o()],i.prototype,"imageFormatIsOpaque",null),r([o()],i.prototype,"hasMixedImageFormats",null),r([o()],i.prototype,"layer",void 0),r([o()],i.prototype,"tileInfo",null),i=r([l("esri.views.3d.layers.TileLayerView3D")],i);var q=i;export{q as default};
