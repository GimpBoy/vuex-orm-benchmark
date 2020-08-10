import { Model } from '@vuex-orm/core'

export class Model38 extends Model {
    static entity = 'model38'
    static apiPath = 'model38';
    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(null)
        }
    }
}
