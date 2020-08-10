import { Model } from '@vuex-orm/core'

export class Model31 extends Model {
    static entity = 'model31'
    static apiPath = 'model31';
    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(null)
        }
    }
}

