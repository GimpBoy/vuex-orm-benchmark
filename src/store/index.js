import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import * as models from './objects/index'

Vue.use(Vuex)

const database = new VuexORM.Database()
for (let model  in models) {
  if (model !== 'props') {
    database.register(models[model]);
  }
}
const store = new Vuex.Store({
  plugins: [VuexORM.install(database)]
})

export default store
