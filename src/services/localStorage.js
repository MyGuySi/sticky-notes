// @flow

import type { DataSource, DataSourceLoadCallback } from '../types';

class LocalStorageService implements DataSource {
  key: string;

  constructor (key: string) {
    this.key = key;
  }

  load (callback: DataSourceLoadCallback) {
    const dataString = window.localStorage.getItem('notes');
    let data = JSON.parse(dataString);
    if (!data) {
      data = [];
    }
    callback(data);
  }

  save (data: Object) {
    const dataString = JSON.stringify(data);
    window.localStorage.setItem('notes', dataString);
  }
}

export default LocalStorageService;