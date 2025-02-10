import Basemap from '@arcgis/core/Basemap';

export const BasemapCollection: Array<Basemap> = [
  Basemap.fromId('satellite'),
  Basemap.fromId('topo'),
  Basemap.fromId('navigation-3d'),
  Basemap.fromId('osm'),
  Basemap.fromId('gray-vector'),
  Basemap.fromId('streets-vector'),
  Basemap.fromId('terrain'),
];
