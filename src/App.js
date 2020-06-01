// @flow

import type { Note, NoteColor } from './types';
import type { DataSource } from './types';
import React, { Component } from 'react';
import NoteBoard from './components/NoteBoard';
import LocalStorageService from './services/localStorage';

const notesDataSource: DataSource = new LocalStorageService('notes');

type State = {
  isLoading: bool,
  notes: Array<Note>
}

class App extends Component<{}, State> {
  timer: IntervalID;

  state = {
    isLoading: true,
    notes: []
  }

  componentDidMount () {
    notesDataSource.load(notes => {
      this.setState({
        isLoading: false,
        notes
      });
    });
  }

  componentWillUnmount () {
    clearInterval(this.timer);
  }

  saveNote = (text: string, color: NoteColor) => {
    const note = {
      text,
      color,
      timestamp: Date.now()
    }
    let notes = [...this.state.notes];
    notes.push(note);
    this.setState({ notes });
    notesDataSource.save(notes);
  }

  clearNotes = () => {
    if (window.confirm("Are you sure you want to clear all notes?")) {
      this.setState({ notes: [] });
      notesDataSource.save([]);
    }
  }

  render() {
    if (this.state.isLoading) {
      return <p>Loading...</p>
    }

    return (
      <NoteBoard
        title="The Sticky Board"
        notes={this.state.notes}
        onCreateNote={this.saveNote}
        onClickClearNotes={this.clearNotes}
      />
    );
  }
}

export default App;
