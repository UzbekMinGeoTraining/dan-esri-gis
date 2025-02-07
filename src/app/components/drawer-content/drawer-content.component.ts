import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BottomSheetService } from '../services/bottom-sheet.service';

@Component({
  selector: 'app-drawer-content',
  imports: [MatButtonModule],
  templateUrl: './drawer-content.component.html',
  styleUrl: './drawer-content.component.scss',
})
export class DrawerContentComponent {
  constructor(private readonly bottomSheetService: BottomSheetService) {}

  public toggleBottomSheet(): void {
    this.bottomSheetService.openBasemapBottomSheet();
  }
}
