import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ViewType } from '../enums/view-type.enum';

@Injectable({
  providedIn: 'root',
})
export class SidenavContentService {
  private readonly mapViewSrc = new BehaviorSubject<ViewType>(ViewType.MAP_VIEW);

  // eslint-disable-next-line @typescript-eslint/member-ordering
  public mapViewObs = this.mapViewSrc.asObservable();

  public setMapViewType(view: ViewType): void {
    this.mapViewSrc.next(view);
  }

  public getMapViewType(): ViewType {
    return this.mapViewSrc.getValue();
  }
}
