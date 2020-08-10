import { Model } from '@vuex-orm/core'

export class Model49 extends Model {
    static entity = 'model49'
    static apiPath = 'model49';
    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(null)
        }
    }
}

