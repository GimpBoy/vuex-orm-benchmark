import { Model } from '@vuex-orm/core'

export class Model46 extends Model {
    static entity = 'model46'
    static apiPath = 'model46';
    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(null)
        }
    }
}

