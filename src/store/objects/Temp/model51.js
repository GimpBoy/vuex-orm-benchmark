import { Model } from '@vuex-orm/core'

export class Model51 extends Model {
    static entity = 'model51'
    static apiPath = 'model51';
    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(null)
        }
    }
}

