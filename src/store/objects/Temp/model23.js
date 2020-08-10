import { Model } from '@vuex-orm/core'

export class Model23 extends Model {
    static entity = 'model23'
    static apiPath = 'model23';
    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(null)
        }
    }
}
