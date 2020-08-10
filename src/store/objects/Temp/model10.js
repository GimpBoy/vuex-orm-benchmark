import { Model } from '@vuex-orm/core'

export class Model10 extends Model {
    static entity = 'model10'
    static apiPath = 'model10';
    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(null)
        }
    }
}
