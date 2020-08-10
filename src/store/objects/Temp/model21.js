import { Model } from '@vuex-orm/core'

export class Model21 extends Model {
    static entity = 'model21'
    static apiPath = 'model21';
    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(null)
        }
    }
}

