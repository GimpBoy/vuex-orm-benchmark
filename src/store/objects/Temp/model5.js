import { Model } from '@vuex-orm/core'

export class Model5 extends Model {
    static entity = 'model5'
    static apiPath = 'model5';
    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(null)
        }
    }
}
