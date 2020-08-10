import { Model } from '@vuex-orm/core'

export class Model45 extends Model {
    static entity = 'model45'
    static apiPath = 'model45';
    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(null)
        }
    }
}

