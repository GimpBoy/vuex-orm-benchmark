<template>
  <div class="home">
    <label>Number of Records:   </label>
    <select v-model.number="numRecords">
      <option value=10>10</option>
      <option value=100>100</option>
      <option value=500>500</option>
      <option value=1000>1000</option>
    </select>
    <br/>
    <label>Times to run query.all():   </label>

    <select v-model.number="numLookups">
      <option value=1>1</option>
      <option value=5>5</option>
      <option value=15>15</option>
      <option value=25>25</option>
      <option value=50>50</option>
    </select>
    <br/>
    <button @click="runTest">Run Test</button>
    <div v-if="running">Running Test ...</div>
    <div v-else>
      Test Results...
      <div >Total Records: {{ results.length }}</div>
      <div >Time To Load: {{ loadTime }}</div>
      <div >Time To Lookup: {{ lookupTime }}</div>
    </div>

  </div>
</template>

<script>

  import { TestModel } from "../store/objects";

  export default {
    name: 'Home',
    data(){
      return {
        numRecords: 100,
        numLookups: 25,

        running:false,
        loadTime: null,
        lookupTime: null,
      }
    },
    components: {
    },
    computed:{
      results(){
        return TestModel.all();
      },
    },
    methods:{
      runTest(){
        this.running = true;
        this.loadTime = this.lookupTime = null;
        TestModel.deleteAll();
        setTimeout(() => {
          {
            let startLoading = Date.now();
            Array(this.numRecords).fill(0).forEach( (a,i) => {
              TestModel.insert(
                      { data: {
                          id: i+1,
                          name: 'doug' } }
              );
            });
            this.loadTime =  Date.now() - startLoading;

            let startTest = Date.now();

            Array(this.numLookups)
                    .fill(0).forEach( ()  => { console.log(TestModel.all().length) });

            this.lookupTime =  Date.now() - startTest;

            this.running = false;
          }
        }, 100);




      }
    },
    mounted() {

    }
  }
</script>
