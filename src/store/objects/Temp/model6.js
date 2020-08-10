import { Model } from '@vuex-orm/core'

export class Model6 extends Model {
    static entity = 'model6'
    static apiPath = 'model6';
    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(null)
        }
    }
}
