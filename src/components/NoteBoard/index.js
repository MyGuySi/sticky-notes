// @flow

import type { Note, NoteColor } from '../../types';
import React, { Component } from 'react';
import moment from 'moment';
import selectRandom from '../../utils/selectRandom';
import noteColors from '../../data/noteColors';
import Stack from '../Stack';
import Heading from '../Heading';
import AddNote from '../AddNote';
import StickyNote from '../StickyNote';
import Button from '../Button';
import KeyboardShortcut from '../KeyboardShortcut';
import styles from './styles.module.css';
import NewNote from '../NewNote';

type Props = {
  title: string,
  notes: Array<Note>,
  onCreateNote: (text: string, color: NoteColor) => void,
  onClickClearNotes: () => void
}

type State = {
  isComposingNew: bool,
  newText: string,
  newColor: NoteColor
}

class NoteBoard extends Component<Props, State> {
  timer: IntervalID;

  constructor (props: Props) {
    super(props);
    this.state = {
      isComposingNew: false,
      newText: '',
      newColor: selectRandom(noteColors)
    }
  }

  componentDidMount () {
    this.timer = setInterval(() => {
      this.forceUpdate();
    }, 60000);
  }

  componentWillUnmount () {
    clearInterval(this.timer);
  }

  save = () => {
    const { newText, newColor } = this.state;
    if (newText === '') {
      return;
    }
    this.props.onCreateNote(newText, newColor);
    this.cancel();
  }

  cancel = () => {
    this.setState({
      isComposingNew: false,
      newText: '',
      newColor: selectRandom(noteColors)
    });
  }

  handleClearShortcut = () => {
    if (this.state.isComposingNew) {
      return;
    }
    this.props.onClickClearNotes();
  }

  render() {
    const sortedNotes = this.props.notes.sort((a, b) => {
      return (a.timestamp > b.timestamp) ? 1 : -1
    });

    return (
      <Stack>
        <KeyboardShortcut value='c' handler={this.handleClearShortcut} />
        <Heading>{this.props.title}</Heading>
        <div className={styles.grid}>
          {this.state.isComposingNew ? (
            <NewNote
              text={this.state.newText}
              color={this.state.newColor}
              onChangeText={text => this.setState({ newText: text })}
              onClickSave={this.save}
              onClickCancel={this.cancel}
            />
          ) : (
            <AddNote
              isNotesEmpty={sortedNotes.length === 0}
              onClickAdd={() => this.setState({ isComposingNew: true })}
            />
          )}
          {sortedNotes.reverse().map((note, i) => {
            const dateString = moment(note.timestamp).fromNow();
            return (
              <StickyNote color={note.color} key={note.timestamp + i}>
                <div className={styles.item}>
                  <p className={styles.message}>{note.text}</p>
                  <p className={styles.date}>{dateString}</p>
                </div>
              </StickyNote>
            )}
          )}
        </div>
        {sortedNotes.length > 0 && (
          <Button
            onClick={this.props.onClickClearNotes}
            data-testid='clear-button'
          >
            Clear all notes (c)
          </Button>
        )}
      </Stack>
    )
  }
}

export default NoteBoard;