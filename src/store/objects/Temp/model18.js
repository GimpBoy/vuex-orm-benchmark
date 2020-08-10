import { Model } from '@vuex-orm/core'

export class Model18 extends Model {
    static entity = 'model18'
    static apiPath = 'model18';
    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(null)
        }
    }
}
