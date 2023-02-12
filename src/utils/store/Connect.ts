import Store from '~src/utils/store/Store'
import { Component } from '~src/utils/Component'
import { TypeOf } from '~src/utils/mydash/ts'

export default function connect<T>(
  Class: TypeOf<Component>,
  mapStateToProps: (...args: any) => any
) {
  return class extends Class {
    constructor(props = {}) {
      const store = new Store()

      super({ ...props, ...mapStateToProps(store.getState()) })

      store.on(Store.EVENT_UPDATE, () => {
        this.setProps({ ...mapStateToProps(store.getState()) })
      })
    }
  } as T
}
