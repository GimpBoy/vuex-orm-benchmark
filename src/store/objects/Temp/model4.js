import { Model } from '@vuex-orm/core'

export class Model4 extends Model {
    static entity = 'model4'
    static apiPath = 'model4';
    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(null)
        }
    }
}

