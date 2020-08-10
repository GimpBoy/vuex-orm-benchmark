import { Model } from '@vuex-orm/core'

export class Model34 extends Model {
    static entity = 'model34'
    static apiPath = 'model34';
    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(null)
        }
    }
}

