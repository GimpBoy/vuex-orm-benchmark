import { Model } from '@vuex-orm/core'

export class Model28 extends Model {
    static entity = 'model28'
    static apiPath = 'model28';
    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(null)
        }
    }
}

