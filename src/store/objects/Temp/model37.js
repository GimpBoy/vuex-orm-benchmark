import { Model } from '@vuex-orm/core'

export class Model37 extends Model {
    static entity = 'model37'
    static apiPath = 'model37';
    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(null)
        }
    }
}
