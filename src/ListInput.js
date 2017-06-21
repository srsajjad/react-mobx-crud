import React, { Component } from 'react'
import Store from './Store'

class ListInput extends Component {
  handleInputForm (e) {
    e.preventDefault()

    if (Store.inputItem !== null && Store.inputItem.trim() !== '') {
      Store.trackNumber++
      let obj = {
        trackNumber: Store.trackNumber,
        inputItem: Store.inputItem
      }
      Store.listArr.push(obj)
      Store.filterArr.push(obj)
      Store.inputItem = ''
      e.target[0].value = ''
    }
  }

  handleChange (e) {
    Store.inputItem = e.target.value
  }

  render () {
    return (
      <form onSubmit={this.handleInputForm.bind(this)}>
        <label htmlFor='inputItem'>
          <span>List Your Items : </span>
          <input id='inputItem' onChange={this.handleChange.bind(this)} />
        </label>
      </form>
    )
  }
}

export default ListInput
