import { Model } from '@vuex-orm/core'

export class Model12 extends Model {
    static entity = 'model12'
    static apiPath = 'model12';
    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(null)
        }
    }
}
