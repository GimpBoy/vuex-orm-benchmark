import { Model } from '@vuex-orm/core'

export class Model20 extends Model {
    static entity = 'model20'
    static apiPath = 'model20';
    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(null)
        }
    }
}

