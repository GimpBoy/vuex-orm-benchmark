import { Model } from '@vuex-orm/core'

export class Model15 extends Model {
    static entity = 'model15'
    static apiPath = 'model15';
    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(null)
        }
    }
}

