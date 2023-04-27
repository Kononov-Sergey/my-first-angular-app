import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AddInputService {
  addValue = '';

  setSearchValue(value: string) {
    this.addValue = value;
  }
}
