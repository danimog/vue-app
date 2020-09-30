<template>
  <div>
    <b-table 
      responsive
      :items="sentieri" 
      :fields="fields"
      :tbody-tr-class="rowClass"
    >
      
    </b-table>
  </div>
</template>

<script>
import listaSentieri from "../assets/json/sentieri.json";

export default {
  data() {
    return {
      fields: ['sent', 'sgnv', 'df_s', 'd_tpp', 'chiuso'],
      sentieri: listaSentieri
    };
  },
  methods: {
    rowClass(item, type) {
        if (!item || type !== 'row') return
        if (item.chiuso === '1') return 'table-danger'
        if (item.df_s === 'EE') return 'table-warning'
        if (item.df_s === 'E') return 'table-success'
        if (item.df_s === 'T') return 'table-info'
        
      }
  }
};
</script>