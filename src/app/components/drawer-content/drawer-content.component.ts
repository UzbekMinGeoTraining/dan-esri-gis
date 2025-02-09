import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ViewType } from '../enums/view-type.enum';
import { BottomSheetService } from '../services/bottom-sheet.service';
import { SidenavContentService } from '../services/side-nav-content.service';

@Component({
  selector: 'app-drawer-content',
  imports: [MatButtonModule, MatButtonToggleModule],
  templateUrl: './drawer-content.component.html',
  styleUrl: './drawer-content.component.scss',
})
export class DrawerContentComponent {
  public viewTypeToggle;

  public VIEW_TYPE = ViewType;

  constructor(
    private readonly bottomSheetService: BottomSheetService,
    private readonly sideNavContentService: SidenavContentService,
  ) {
    this.viewTypeToggle = this.sideNavContentService.getMapViewType();
  }

  public toggleBottomSheet(): void {
    this.bottomSheetService.openBasemapBottomSheet();
  }

  public toggleViewType(event: ViewType): void {
    this.sideNavContentService.setMapViewType(event);
  }
}
