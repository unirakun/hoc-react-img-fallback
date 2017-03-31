import React from 'react'

export default (Component, Fallback) => class extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      error: false,
    }
  }

  onError = () => {
    this.setState(state => ({ ...state, error: true }))
  }

  render() {
    if (this.state.error) return <Fallback {...this.props} />
    return <Component {...this.props} onError={this.onError} />
  }
}
