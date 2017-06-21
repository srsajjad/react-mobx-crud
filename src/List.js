import React, { Component } from 'react'
import Store from './Store'

class List extends Component {
  constructor (props) {
    super()
    this.state = {
      editing: false
    }
  }

  handleDelete () {
    let temp = this.props.trackNumber

    Store.listArr = Store.listArr.filter(n => {
      return n.trackNumber !== temp
    })

    Store.filterArr = Store.filterArr.filter(n => {
      return n.trackNumber !== temp
    })
  }

  handleEdit () {
    this.setState({
      editing: true
    })
  }

  handleSubmit (e) {
    e.preventDefault()

    let temp = this.props.trackNumber

    Store.listArr.forEach(n => {
      if (n.trackNumber === temp) n.inputItem = this.newInput.value
    })

    Store.filterArr.forEach(n => {
      if (n.trackNumber === temp) n.inputItem = this.newInput.value
    })

    this.setState({
      editing: false
    })
  }

  render () {
    if (!this.state.editing) {
      return (
        <div>
          <li>
            <span>{this.props.listItem}</span>
            {' '}
            <button onClick={this.handleDelete.bind(this)}>X</button>
            {' '}
            <button onClick={this.handleEdit.bind(this)}>edit</button>
            {' '}
          </li>
          <br />
        </div>
      )
    } else {
      return (
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            ref={input => {
              this.newInput = input
            }}
            defaultValue={this.props.listItem}
          />
        </form>
      )
    }
  }
}

export default List
