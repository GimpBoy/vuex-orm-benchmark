import { Model } from '@vuex-orm/core'

export class Model1 extends Model {
    static entity = 'model1'
    static apiPath = 'model1';
    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(null)
        }
    }
}
