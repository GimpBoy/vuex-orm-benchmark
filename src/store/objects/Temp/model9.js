import { Model } from '@vuex-orm/core'

export class Model9 extends Model {
    static entity = 'model9'
    static apiPath = 'model9';
    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(null)
        }
    }
}
