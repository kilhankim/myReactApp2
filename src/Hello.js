import React from 'react'
import request from 'superagent'

export class Hello extends React.Component{
  constructor (props) {
    super(props)
    this.state = { email : '', password : '', jump : ''}
  }



  render() {

    return (
      <h1> Login Success </h1>
    )
  }

}
