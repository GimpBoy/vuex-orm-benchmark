import { Model } from '@vuex-orm/core'

export class Model26 extends Model {
    static entity = 'model26'
    static apiPath = 'model26';
    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(null)
        }
    }
}
