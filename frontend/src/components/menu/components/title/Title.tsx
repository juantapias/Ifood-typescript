import React from 'react';

interface ITitleProps {
  title: string
}

export class Title extends React.Component<ITitleProps, any> {

  render () {
    return (
      <h1>{this.props.title}</h1>
    )
  }
}

export default Title;