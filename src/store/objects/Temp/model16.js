import { Model } from '@vuex-orm/core'

export class Model16 extends Model {
    static entity = 'model16'
    static apiPath = 'model16';
    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(null)
        }
    }
}
