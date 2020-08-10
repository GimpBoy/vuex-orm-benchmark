import { Model } from '@vuex-orm/core'

export class Model22 extends Model {
    static entity = 'model22'
    static apiPath = 'model22';
    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(null)
        }
    }
}
