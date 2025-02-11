/* eslint-disable object-curly-newline */
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import Basemap from '@arcgis/core/Basemap';
import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer';
import Map from '@arcgis/core/Map';
import SimpleRenderer from '@arcgis/core/renderers/SimpleRenderer';
import SimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol';
import MapView from '@arcgis/core/views/MapView';
import SceneView from '@arcgis/core/views/SceneView';
import Compass from '@arcgis/core/widgets/Compass';
import Legend from '@arcgis/core/widgets/Legend';
import Search from '@arcgis/core/widgets/Search';
import { LayerType } from '../enums/layer-type.enum';
import { ViewType } from '../enums/view-type.enum';
import { ApiService } from '../services/api.service';
import { BottomSheetService } from '../services/bottom-sheet.service';
import { DataService } from '../services/data.service';
import { SidenavContentService } from '../services/side-nav-content.service';

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
})
export class MapComponent implements OnInit, OnDestroy {
  @ViewChild('mapView', { static: true }) mapViewDiv: ElementRef | undefined;

  private mapView!: MapView | SceneView;

  private map!: Map;

  private reservoirs!: GeoJSONLayer;

  private canals!: GeoJSONLayer;

  private pumpingStations!: GeoJSONLayer;

  private dataLoaded = false;

  constructor(
    private readonly bottomSheetService: BottomSheetService,
    private readonly sideNavContentService: SidenavContentService,
    private readonly dataService: DataService,
    private readonly apiService: ApiService,
  ) {
    // constructor called first
  }

  ngOnInit(): void {
    this.map = new Map({
      basemap: this.bottomSheetService.getSelectedBasemap(), // Default basemap
      ground: 'world-elevation',
    });
    // ngOnInit called after constructor
    this.initializeSubscriptions();
  }

  ngOnDestroy(): void {
    if (this.mapView) {
      this.mapView.destroy();
    }
  }

  private initializeMapView(): void {
    this.mapView = new MapView({
      container: this.mapViewDiv?.nativeElement,
      map: this.map,
      center: [64, 41],
      zoom: 6,
    });
  }

  private initializeSceneView(): void {
    this.mapView = new SceneView({
      container: this.mapViewDiv?.nativeElement,
      map: this.map,
      center: [64, 41],
      zoom: 6,
    });
  }

  private initialiazeWidgets(): void {
    const searchWidget = new Search({
      view: this.mapView,
    });

    // Add the search widget to the top right corner of the view
    this.mapView.ui.add(searchWidget, {
      position: 'top-right',
    });

    // const scaleBar = new ScaleBar({
    //   view: this.mapView,
    //   unit: 'dual', // Options: "metric", "imperial", or "dual"
    // });

    // Add the ScaleBar widget to the view
    // this.mapView.ui.add(scaleBar, 'bottom-left');

    // Create the Compass widget
    const compass = new Compass({
      view: this.mapView,
    });

    this.mapView.ui.add(compass, 'top-left');

    const legend = new Legend({
      view: this.mapView,
    });
    this.mapView.ui.add(legend, {
      position: 'bottom-right',
    });
  }

  private initializeSubscriptions(): void {
    this.bottomSheetService.selectedBasemapObs.subscribe((basemap: Basemap) => {
      if (this.mapView) {
        this.mapView.map.basemap = basemap;
      }
    });

    this.sideNavContentService.mapViewObs.subscribe((viewType: ViewType) => {
      if (viewType === ViewType.MAP_VIEW) {
        this.initializeMapView();
      } else if (viewType === ViewType.SCENE_VIEW) {
        this.initializeSceneView();
      }
      this.initialiazeWidgets();
    });

    this.sideNavContentService.toggleLayerObs.subscribe((layers: Array<LayerType>) => {
      // Load data if not already
      if (!this.dataLoaded) {
        this.initilizeData();
      }
      this.pumpingStations.visible = layers.includes(LayerType.PUMPING_STATIONS);
      this.canals.visible = layers.includes(LayerType.CANALS);
      this.reservoirs.visible = layers.includes(LayerType.RESERVOIRS);
    });
  }

  private initilizeData() {
    this.dataLoaded = true;
    this.pumpingStations = this.dataService.initilizePumpingStationData();
    this.initializeReservoirData();
    this.canals = this.dataService.initializeCanalData();
    setTimeout(() => {
      this.map.addMany([this.pumpingStations, this.reservoirs, this.canals]);
    }, 1000);
  }

  public initializeReservoirData(): void {
    this.apiService
      .getReservoirData()
      .toPromise()
      .then((geojsonData: any) => {
        const blob = new Blob([JSON.stringify(geojsonData)], { type: 'application/json' });
        const geojsonUrl = URL.createObjectURL(blob); // Convert data to a URL
        this.reservoirs = new GeoJSONLayer({
          url: geojsonUrl,
          renderer: new SimpleRenderer({
            symbol: new SimpleFillSymbol({
              color: [0, 0, 255, 0.4], // Blue fill with 40% opacity
              outline: {
                color: [0, 0, 255],
                width: 2,
              },
            }),
          }),
        });
      });
  }
}
