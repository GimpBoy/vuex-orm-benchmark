import { Model } from '@vuex-orm/core'

export class Model14 extends Model {
    static entity = 'model14'
    static apiPath = 'model14';
    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(null)
        }
    }
}
