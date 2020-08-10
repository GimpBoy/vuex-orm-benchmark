import { Model } from '@vuex-orm/core'

export class Model41 extends Model {
    static entity = 'model41'
    static apiPath = 'model41';
    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(null)
        }
    }
}

