import React, { Component } from 'react'
import cx from 'classnames'
import styles from './Link.scss'

export default class Link extends Component {
  constructor(props) {
    super(props)

    this.onClickHandler = (event) => this.props.onClick(event)
  }

  render() {
    let classes = cx(
      styles.link,
      styles[this.props.context],
      {[`${styles.decorated}`]: this.props.decorated}
    )

    return (
      <a href="" className={classes} onClick={this.onClickHandler}>{this.props.children}</a>
    )
  }
}

Link.defaultProps = {
  context: 'default',
  decorated: false,
  onClick: (event) => {event.preventDefault()}
}

Link.propTypes = {
  context: React.PropTypes.oneOf(['default', 'error']),
  decorated: React.PropTypes.bool,
  onClick: React.PropTypes.func,
}