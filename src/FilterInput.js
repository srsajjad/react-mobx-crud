import React, { Component } from 'react'
import Store from './Store'

class ListInput extends Component {
  handleFilterForm (e) {
    e.preventDefault()
  }

  handleFilterChange (e) {
    Store.filterItem = e.target.value
    Store.filterArr = Store.listArr.filter(n =>
      n.inputItem.startsWith(Store.filterItem)
    )
  }

  render () {
    return (
      <form onSubmit={this.handleFilterForm.bind(this)}>
        <label htmlFor='filterItem'>
          <span>Filter Your Items : </span>
          <input
            id='filterItem'
            onChange={this.handleFilterChange.bind(this)}
          />
        </label>
      </form>
    )
  }
}

export default ListInput
