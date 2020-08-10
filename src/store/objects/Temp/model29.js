import { Model } from '@vuex-orm/core'

export class Model29 extends Model {
    static entity = 'model29'
    static apiPath = 'model29';
    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(null)
        }
    }
}
