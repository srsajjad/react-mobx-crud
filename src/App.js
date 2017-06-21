import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Store from './Store'
import List from './List'
import ListInput from './ListInput'
import FilterInput from './FilterInput'

class App extends Component {
  render () {
    return (
      <div>
        <ListInput />
        <br />
        <FilterInput />
        <ul>
          {Store.filterArr.map((n, i) => (
            <List listItem={n.inputItem} key={i} trackNumber={n.trackNumber} />
          ))}
        </ul>
      </div>
    )
  }
}

export default observer(App)
