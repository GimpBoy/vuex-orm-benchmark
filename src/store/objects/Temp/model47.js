import { Model } from '@vuex-orm/core'

export class Model47 extends Model {
    static entity = 'model47'
    static apiPath = 'model47';
    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(null)
        }
    }
}

