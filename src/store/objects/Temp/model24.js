import { Model } from '@vuex-orm/core'

export class Model24 extends Model {
    static entity = 'model24'
    static apiPath = 'model24';
    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(null)
        }
    }
}

