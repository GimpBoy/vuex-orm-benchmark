import { Model } from '@vuex-orm/core'

export class Model32 extends Model {
    static entity = 'model32'
    static apiPath = 'model32';
    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(null)
        }
    }
}

