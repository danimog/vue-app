<template>
  <div class="my-tabella" style="margin: 0 auto;">
    <b-table 
      responsive
      :items="sentieri"  
      :fields="fields"
      :tbody-tr-class="rowClass"
    > <!-- items e fields prendono i campi da data() -->
      <template v-slot:cell(d_tpp)="data">
        {{ data.value.toUpperCase() }}
      </template>

      <template v-slot:cell(sent)>
        <img class="img-fluid headerIcon" alt="running" src="../assets/images/icons/card/attivita/running_nero.svg" />
        <img class="img-fluid headerIcon" alt="family" src="../assets/images/icons/card/attivita/family_nero.svg" />
        <img class="img-fluid headerIcon" alt="biking" src="../assets/images/icons/card/attivita/biking_nero.svg" />
      </template>
      
    </b-table>
  </div>
</template>

<script>
import listaSentieri from "../assets/json/sentieri.json";

export default {
  data() {
    return { 
      fields: [{ key: 'sgnv', label: 'Sentiero' }, { key: 'df_s', label: 'Difficoltà' }, { key: 'd_tpp', label: 'Nome sentiero' }, {key:'sent', label:'Utilizzo'}],
      sentieri: listaSentieri
    };
  },
  methods: {
    rowClass(item, type) {
        if (!item || type !== 'row') return
        if (item.chiuso === '1') return 'my-table-danger'
        if (item.df_s === 'EE') return 'my-table-warning'
        if (item.df_s === 'E') return 'my-table-success'
        if (item.df_s === 'T') return 'my-table-info' 
      }
  }
};
</script>

<style scoped>

.headerIcon {
  height: 32px;
  width: 32px;
  padding: 0;
  margin: 0 2px;
}

@media only screen and (max-width: 600px) {
  .my-tabella{
    width: 100%;
    font-size: 12px;
  }  
}

/* se il dispositivo è oltre i 601px la tabella è solo il 70% della larghezza */
@media only screen and (min-width: 601px) {
  .my-tabella{
    width: 70%;
  }  
}



</style>