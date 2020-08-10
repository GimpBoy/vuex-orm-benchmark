import { Model } from '@vuex-orm/core'

export class Model36 extends Model {
    static entity = 'model36'
    static apiPath = 'model36';
    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(null)
        }
    }
}

