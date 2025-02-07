import { Injectable } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import Basemap from '@arcgis/core/Basemap';
import { BehaviorSubject } from 'rxjs';
import { BasemapsComponent } from '../bottom-sheet/basemaps/basemaps.component';
// eslint-disable-next-line import/no-cycle

@Injectable({
  providedIn: 'root',
})
export class BottomSheetService {
  private readonly selectedBasemapSrc = new BehaviorSubject<Basemap>(Basemap.fromId('satellite'));

  // eslint-disable-next-line @typescript-eslint/member-ordering
  public selectedBasemapObs = this.selectedBasemapSrc.asObservable();

  constructor(public bottomSheet: MatBottomSheet) {}

  public openBasemapBottomSheet(): void {
    this.bottomSheet.open(BasemapsComponent);
  }

  public closeActiveBottomSheet(): void {
    this.bottomSheet.dismiss();
  }

  public setSelectedBasemap(basemap: Basemap): void {
    this.selectedBasemapSrc.next(basemap);
  }

  public getSelectedBasemap(): Basemap {
    return this.selectedBasemapSrc.getValue();
  }
}
