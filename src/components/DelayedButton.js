
import React, {Component} from 'react';

export default class DelayedButton extends Component {

  clickHandler = (event) => {
    event.persist();
    // const target = event;
    setTimeout(() => {
      this.props.onDelayedClick(event)}, this.props.delay)
  }

  render() {
    return(
      <button onClick={event => {
        this.clickHandler(event)
      }}>
        Delayed Event Log
      </button>
    )
  }
}


