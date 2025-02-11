import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { LayerType } from '../enums/layer-type.enum';
import { ViewType } from '../enums/view-type.enum';
import { BottomSheetService } from '../services/bottom-sheet.service';
import { SidenavContentService } from '../services/side-nav-content.service';

@Component({
  selector: 'app-drawer-content',
  imports: [MatButtonModule, MatButtonToggleModule, MatChipsModule],
  templateUrl: './drawer-content.component.html',
  styleUrl: './drawer-content.component.scss',
})
export class DrawerContentComponent {
  public viewTypeToggle;

  public VIEW_TYPE = ViewType;

  public LAYER_TYPE = LayerType;

  public activeLayers: Array<LayerType>;

  constructor(
    private readonly bottomSheetService: BottomSheetService,
    private readonly sideNavContentService: SidenavContentService,
  ) {
    this.viewTypeToggle = this.sideNavContentService.getMapViewType();
    this.activeLayers = this.sideNavContentService.getSelectedLayers();
    console.debug(this.activeLayers);
  }

  public toggleBottomSheet(): void {
    this.bottomSheetService.openBasemapBottomSheet();
  }

  public toggleViewType(event: ViewType): void {
    this.sideNavContentService.setMapViewType(event);
  }

  public toggleLayer(event: Array<LayerType>): void {
    this.sideNavContentService.toggleLayer(event);
  }
}
