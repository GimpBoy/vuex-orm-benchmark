import { Model } from '@vuex-orm/core'

export class Model48 extends Model {
    static entity = 'model48'
    static apiPath = 'model48';
    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(null)
        }
    }
}

