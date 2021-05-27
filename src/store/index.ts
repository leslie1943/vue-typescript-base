import Vue from 'vue'
import Vuex, { Store } from 'vuex'

import PersonModule from './modules/person'
Vue.use(Vuex)

export type AppState = {
  person: PersonModule
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const createStore = (options: {
  isLogger?: boolean
  initialState?: Partial<AppState>
}): Store<AppState> => {
  const store = new Vuex.Store({
    modules: {
      person: PersonModule
    },
    state: {
      errors: []
    }
  })

  return store
}

export default createStore({ isLogger: true, initialState: {} })
