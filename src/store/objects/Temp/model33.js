import { Model } from '@vuex-orm/core'

export class Model33 extends Model {
    static entity = 'model33'
    static apiPath = 'model33';
    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(null)
        }
    }
}

