import { Model } from '@vuex-orm/core'

export class Model2 extends Model {
    static entity = 'model2'
    static apiPath = 'model2';
    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(null)
        }
    }
}
