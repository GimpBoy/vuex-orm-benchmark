import { Model } from '@vuex-orm/core'

export class Model27 extends Model {
    static entity = 'model27'
    static apiPath = 'model27';
    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(null)
        }
    }
}
