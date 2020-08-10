import { Model } from '@vuex-orm/core'

export class Model8 extends Model {
    static entity = 'model8'
    static apiPath = 'model8';
    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(null)
        }
    }
}
