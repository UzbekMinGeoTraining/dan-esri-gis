/* eslint-disable class-methods-use-this */

import { Injectable } from '@angular/core';
import { StorageKey } from '../enums/storage-key';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  public getValueFromStorage(key: StorageKey): string | null {
    return localStorage.getItem(key);
  }

  public setValueInStorage(key: StorageKey, value: string): void {
    localStorage.setItem(key, value);
  }

  public removeItemFromStorage(key: StorageKey): void {
    localStorage.removeItem(key);
  }
}
