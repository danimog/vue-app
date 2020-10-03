<template>
  <div>
    <b-table
      :items="items"
      :fields="fields"
      striped
      responsive="sm"
      style="max-width: 800px; margin: 0 auto;"
    >
      <template v-slot:cell(paese)="row">
        <div style="display:flex; justify-content: space-between;">
          <div>
            <h5>{{ row.item.paese }}</h5>
          </div>
          <div>
            <b-button size="sm" @click="row.toggleDetails" class="mr-2">
              <b-icon icon="arrow-right-circle"></b-icon>
            </b-button>
          </div>
        </div>
      </template>

      <template v-slot:row-details="row">
        Paese selezionato: {{ row.item.paese }}
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: [{ key: "paese", label: "Seleziona il paese" }],
      items: [
        { paese: "Monterosso" },
        { paese: "Vernazza" },
        { paese: "Corniglia" },
        { paese: "Manarola" },
        { paese: "Riomaggiore" },
        { paese: "Tramonti" }
      ]
    };
  }
};
</script>
