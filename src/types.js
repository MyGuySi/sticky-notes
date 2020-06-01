// @flow

export type NoteColor = 'pink' | 'cyan' | 'yellow';

export type Note = {
  text: string,
  color: NoteColor,
  timestamp: number
}

export type DataSourceLoadCallback = (data: Object) => void
export interface DataSource {
  load (callback: DataSourceLoadCallback): void,
  save (data: Object): void
}