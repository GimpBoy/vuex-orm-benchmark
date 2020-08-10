import { Model } from '@vuex-orm/core'

export class Model11 extends Model {
    static entity = 'model11'
    static apiPath = 'model11';
    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(null)
        }
    }
}
