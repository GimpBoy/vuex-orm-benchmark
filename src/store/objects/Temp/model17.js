import { Model } from '@vuex-orm/core'

export class Model17 extends Model {
    static entity = 'model17'
    static apiPath = 'model17';
    static fields() {
        return {
            id: this.attr(null),
            name: this.attr(null)
        }
    }
}

