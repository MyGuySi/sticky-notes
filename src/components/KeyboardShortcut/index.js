// @flow

import { Component } from 'react';

type Props = {
  value: string,
  handler: () => void,
  blockEvent?: bool
}

class KeyboardShortcut extends Component<Props> {
  componentDidMount () {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === this.props.value) {
      if (this.props.blockEvent) {
        e.preventDefault();
      }
      this.props.handler();
    }
  }

  render() {
    return null;
  }
}

export default KeyboardShortcut;