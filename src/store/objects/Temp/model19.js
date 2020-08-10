import { Model } from '@vuex-orm/core'

export class Model19 extends Model {
    static entity = 'model19'
    static apiPath = 'model19';
    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(null)
        }
    }
}
