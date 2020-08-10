import { Model } from '@vuex-orm/core'

export class Model13 extends Model {
    static entity = 'model13'
    static apiPath = 'model13';
    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(null)
        }
    }
}
