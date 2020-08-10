import { Model } from '@vuex-orm/core'

export class Model50 extends Model {
    static entity = 'model50'
    static apiPath = 'model50';
    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(null)
        }
    }
}

