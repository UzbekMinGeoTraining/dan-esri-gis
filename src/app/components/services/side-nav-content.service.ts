import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { LayerType } from '../enums/layer-type.enum';
import { ViewType } from '../enums/view-type.enum';

@Injectable({
  providedIn: 'root',
})
export class SidenavContentService {
  private readonly mapViewSrc = new BehaviorSubject<ViewType>(ViewType.MAP_VIEW);

  public mapViewObs = this.mapViewSrc.asObservable();

  private readonly toggleLayerSrc = new Subject<Array<LayerType>>();

  public toggleLayerObs = this.toggleLayerSrc.asObservable();

  public setMapViewType(view: ViewType): void {
    this.mapViewSrc.next(view);
  }

  public getMapViewType(): ViewType {
    return this.mapViewSrc.getValue();
  }

  public toggleLayer(layers: Array<LayerType>): void {
    this.toggleLayerSrc.next(layers);
  }
}

// export interface Layer {
//   layer: LayerType;
//   active: boolean;
// }
