import{p as e}from"./chunk-AOA5JMXK.js";import{a as m}from"./chunk-PYQRTZNZ.js";function t(n,i,a){if(n==null||a==null)return!1;let x=!0;return u[0]=n.xmin!=null?n.xmin:0,u[1]=n.ymin!=null?n.ymin:0,u[2]=n.zmin!=null?n.zmin:0,x=x&&e(u,n.spatialReference,0,i,a,0),u[0]=n.xmax!=null?n.xmax:0,u[1]=n.ymax!=null?n.ymax:0,u[2]=n.zmax!=null?n.zmax:0,x=x&&e(u,n.spatialReference,0,i,a,3),n.xmin==null&&(i[0]=-1/0),n.ymin==null&&(i[1]=-1/0),n.zmin==null&&(i[2]=-1/0),n.xmax==null&&(i[3]=1/0),n.ymax==null&&(i[4]=1/0),n.zmax==null&&(i[5]=1/0),x}function o(n,i,a){if(n==null||a==null)return!1;let x=!0;return u[0]=n.xmin!=null?n.xmin:0,u[1]=n.ymin!=null?n.ymin:0,u[2]=n.zmin!=null?n.zmin:0,x=x&&e(u,n.spatialReference,0,u,a,0),i[0]=u[0],i[1]=u[1],u[0]=n.xmax!=null?n.xmax:0,u[1]=n.ymax!=null?n.ymax:0,u[2]=n.zmax!=null?n.zmax:0,x=x&&e(u,n.spatialReference,0,u,a,0),i[2]=u[0],i[3]=u[1],n.xmin==null&&(i[0]=-1/0),n.ymin==null&&(i[1]=-1/0),n.xmax==null&&(i[2]=1/0),n.ymax==null&&(i[3]=1/0),x}var u=m();export{t as a,o as b};
