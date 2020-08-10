import { Model } from '@vuex-orm/core'

export class Model40 extends Model {
    static entity = 'model40'
    static apiPath = 'model40';
    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(null)
        }
    }
}
