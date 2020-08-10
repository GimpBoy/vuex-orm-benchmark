import { Model } from '@vuex-orm/core'

export class Model30 extends Model {
    static entity = 'model30'
    static apiPath = 'model30';
    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(null)
        }
    }
}

