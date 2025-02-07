/* eslint-disable object-curly-newline */
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import Basemap from '@arcgis/core/Basemap';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import Compass from '@arcgis/core/widgets/Compass';
import ScaleBar from '@arcgis/core/widgets/ScaleBar';
import Search from '@arcgis/core/widgets/Search';
import { BottomSheetService } from '../services/bottom-sheet.service';

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
})
export class MapComponent implements OnInit, OnDestroy {
  @ViewChild('mapView', { static: true }) mapViewDiv: ElementRef | undefined;

  public mapView: any;

  constructor(private readonly bottomSheetService: BottomSheetService) {}

  ngOnInit(): void {
    this.initializeMap();
  }

  ngOnDestroy(): void {
    if (this.mapView) {
      this.mapView.destroy();
    }
  }

  initializeMap(): void {
    const webMap = new Map({
      basemap: 'satellite', // Change the basemap as needed
    });

    this.mapView = new MapView({
      container: this.mapViewDiv?.nativeElement, // Reference the map container in the template
      map: webMap,
      center: [64, 41], // Set the map center (longitude, latitude)
      zoom: 6, // Set zoom level
    });

    this.initiliazeWidgets();
    this.initializeSubscriptions();
  }

  initiliazeWidgets(): void {
    const searchWidget = new Search({
      view: this.mapView,
    });

    // Add the search widget to the top right corner of the view
    this.mapView.ui.add(searchWidget, {
      position: 'top-right',
    });

    // Create the ScaleBar widget
    const scaleBar = new ScaleBar({
      view: this.mapView,
      unit: 'dual', // Options: "metric", "imperial", or "dual"
    });

    // Add the ScaleBar widget to the view
    this.mapView.ui.add(scaleBar, 'bottom-left');

    // Create the Compass widget
    const compass = new Compass({
      view: this.mapView,
    });

    this.mapView.ui.add(compass, 'top-left');
  }

  initializeSubscriptions(): void {
    this.bottomSheetService.selectedBasemapObs.subscribe((basemap: Basemap) => {
      if (this.mapView) {
        this.mapView.map.basemap = basemap;
      }
    });
  }
}
