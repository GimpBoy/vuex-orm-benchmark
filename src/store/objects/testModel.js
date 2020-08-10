import { Model } from '@vuex-orm/core'

export class TestModel extends Model {
    static entity = 'test';
    static apiPath = 'test';
    static fields() {
        return {
            id: this.number(0),

            name: this.string('')
        }
    }
}
