import { Model } from '@vuex-orm/core'

export class Model35 extends Model {
    static entity = 'model35'
    static apiPath = 'model35';
    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(null)
        }
    }
}

