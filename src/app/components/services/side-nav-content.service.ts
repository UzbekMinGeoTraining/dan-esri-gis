/* eslint-disable @typescript-eslint/indent */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LayerType } from '../enums/layer-type.enum';
import { StorageKey } from '../enums/storage-key';
import { ViewType } from '../enums/view-type.enum';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class SidenavContentService {
  private readonly activeLayers = this.getSelectedLayers();

  private readonly mapViewSrc = new BehaviorSubject<ViewType>(ViewType.MAP_VIEW);

  public mapViewObs = this.mapViewSrc.asObservable();

  private readonly toggleLayerSrc = new BehaviorSubject<Array<LayerType>>(this.activeLayers);

  public toggleLayerObs = this.toggleLayerSrc.asObservable();

  constructor(private readonly localStorageService: LocalStorageService) {}

  public setMapViewType(view: ViewType): void {
    this.mapViewSrc.next(view);
  }

  public getMapViewType(): ViewType {
    return this.mapViewSrc.getValue();
  }

  public toggleLayer(layers: Array<LayerType>): void {
    this.localStorageService.setValueInStorage(StorageKey.ACTIVE_LAYERS, JSON.stringify(layers));
    this.toggleLayerSrc.next(layers);
  }

  public getSelectedLayers(): Array<LayerType> {
    // eslint-disable-next-line max-len
    return this.localStorageService.getValueFromStorage(StorageKey.ACTIVE_LAYERS)
      ? (JSON.parse(
          this.localStorageService.getValueFromStorage(StorageKey.ACTIVE_LAYERS) as string,
        ) as Array<LayerType>)
      : [LayerType.RESERVOIRS, LayerType.CANALS, LayerType.PUMPING_STATIONS];
  }
}
