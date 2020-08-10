import { Model } from '@vuex-orm/core'

export class Model3 extends Model {
    static entity = 'model3'
    static apiPath = 'model3';
    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(null)
        }
    }
}
