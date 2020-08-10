import { Model } from '@vuex-orm/core'

export class Model25 extends Model {
    static entity = 'model25'
    static apiPath = 'model25';
    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(null)
        }
    }
}
