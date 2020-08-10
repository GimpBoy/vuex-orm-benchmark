import { Model } from '@vuex-orm/core'

export class Model39 extends Model {
    static entity = 'model39'
    static apiPath = 'model39';
    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(null)
        }
    }
}

