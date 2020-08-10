import { Model } from '@vuex-orm/core'

export class Model7 extends Model {
    static entity = 'model7'
    static apiPath = 'model7';
    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(null)
        }
    }
}
