import { Model } from '@vuex-orm/core'

export class Model43 extends Model {
    static entity = 'model43'
    static apiPath = 'model43';
    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(null)
        }
    }
}

