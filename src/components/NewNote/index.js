// @flow

import type { NoteColor } from '../../types';
import React, { Component, createRef } from 'react';
import StickyNote from '../StickyNote';
import Stack from '../Stack';
import Input from '../Input';
import KeyboardShortcut from '../KeyboardShortcut';
import Button from '../Button';

type Props = {
  text: string,
  color: NoteColor,
  onChangeText: (text: string) => void,
  onClickSave: () => void,
  onClickCancel: () => void
}

class NewNote extends Component<Props> {
  inputEl: { current: null | HTMLInputElement }

  constructor (props: Props) {
    super(props);
    this.inputEl = createRef();
  }

  componentDidMount () {
    if (this.inputEl.current) {
      this.inputEl.current.focus();
    }
  }

  onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.onClickSave();
  }

  onReset = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.onClickCancel();
  }

  render () {
    return (
      <StickyNote color={this.props.color}>
        <KeyboardShortcut value='Escape' handler={this.props.onClickCancel} />
        <form onSubmit={this.onSubmit} onReset={this.onReset} data-testid='new-form'>
          <Stack>
            <Input
              ref={this.inputEl}
              placeholder='Type your message...'
              value={this.props.text}
              onChange={e => this.props.onChangeText(e.target.value)}
              data-testid='text-input'
            />
            <Stack direction='row'>
              <Button
                isPrimary
                type="submit"
                disabled={this.props.text === ''}
                data-testid='save-button'
              >
                Save (Enter)
              </Button>
              <Button
                type="reset"
                data-testid='cancel-button'
              >
                Cancel (Esc)
              </Button>
            </Stack>
          </Stack>
        </form>
      </StickyNote>
    )
  }
}

export default NewNote;