/* eslint-disable import/no-cycle */
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import Basemap from '@arcgis/core/Basemap';
import { BottomSheetService } from '../../services/bottom-sheet.service';
import { BaseBottomSheetComponent } from '../base-bottom-sheet/base-bottom-sheet.component';
import { BasemapCollection } from '../basemaps';

@Component({
  selector: 'app-basemaps',
  imports: [BaseBottomSheetComponent, MatListModule, CommonModule],
  templateUrl: './basemaps.component.html',
  styleUrl: './basemaps.component.scss',
})
export class BasemapsComponent implements OnInit {
  private readonly BASEMAP_COLLECTION = BasemapCollection;

  public basemapCollection: Basemap[] = [];

  constructor(private readonly bottomSheetService: BottomSheetService) {}

  ngOnInit(): void {
    Promise.all(this.BASEMAP_COLLECTION.map((basemap) => basemap.load()))
      .then((loadedBasemaps: Basemap[]) => {
        this.basemapCollection = loadedBasemaps; // Assign the loaded basemaps to the array
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error('Error loading basemaps:', error);
      });
  }

  public setBasemap(map: Basemap): void {
    this.bottomSheetService.setSelectedBasemap(map);
    this.bottomSheetService.closeActiveBottomSheet();
  }
}
