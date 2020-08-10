import { Model } from '@vuex-orm/core'

export class Model42 extends Model {
    static entity = 'model42'
    static apiPath = 'model42';
    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(null)
        }
    }
}

