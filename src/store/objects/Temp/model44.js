import { Model } from '@vuex-orm/core'

export class Model44 extends Model {
    static entity = 'model44'
    static apiPath = 'model44';
    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(null)
        }
    }
}

