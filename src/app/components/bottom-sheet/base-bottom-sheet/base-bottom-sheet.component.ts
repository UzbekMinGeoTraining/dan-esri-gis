/* eslint-disable import/no-cycle */
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BottomSheetService } from '../../services/bottom-sheet.service';

@Component({
  selector: 'app-base-bottom-sheet',
  imports: [MatIconModule, CommonModule],
  templateUrl: './base-bottom-sheet.component.html',
  styleUrl: './base-bottom-sheet.component.scss',
})
export class BaseBottomSheetComponent {
  @Input() title = '';

  @Input() closeDefault = true;

  @Input() closeMarker = false;

  constructor(private readonly bottomSheetService: BottomSheetService) {}

  public close(): void {
    this.bottomSheetService.closeActiveBottomSheet();
  }

  public closeMarkerSheet(): void {
    this.bottomSheetService.closeActiveBottomSheet();
  }
}
