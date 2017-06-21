import { observable } from 'mobx'

let Store = {
  listArr: [],
  inputItem: null,
  filterItem: null,
  filterArr: [],
  trackNumber: -1
}

export default observable(Store)
