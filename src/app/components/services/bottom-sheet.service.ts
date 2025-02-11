/* eslint-disable max-len */
/* eslint-disable import/no-cycle */
import { Injectable } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import Basemap from '@arcgis/core/Basemap';
import { BehaviorSubject } from 'rxjs';
import { BasemapsComponent } from '../bottom-sheet/basemaps/basemaps.component';
import { StorageKey } from '../enums/storage-key';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class BottomSheetService {
  private readonly defaultBasemap = this.getDefaultBasemapId();

  private readonly selectedBasemapSrc = new BehaviorSubject<Basemap>(Basemap.fromId(this.defaultBasemap));

  // eslint-disable-next-line @typescript-eslint/member-ordering
  public selectedBasemapObs = this.selectedBasemapSrc.asObservable();

  constructor(
    public bottomSheet: MatBottomSheet,
    private readonly localStorageService: LocalStorageService,
  ) {}

  public openBasemapBottomSheet(): void {
    this.bottomSheet.open(BasemapsComponent);
  }

  public closeActiveBottomSheet(): void {
    this.bottomSheet.dismiss();
  }

  public setSelectedBasemap(basemap: Basemap): void {
    this.localStorageService.setValueInStorage(StorageKey.BASE_MAP, basemap.id);
    this.selectedBasemapSrc.next(basemap);
  }

  public getSelectedBasemap(): Basemap {
    return this.selectedBasemapSrc.getValue();
  }

  private getDefaultBasemapId(): string {
    return this.localStorageService.getValueFromStorage(StorageKey.BASE_MAP)
      ? (this.localStorageService.getValueFromStorage(StorageKey.BASE_MAP) as string)
      : 'satellite';
  }
}
