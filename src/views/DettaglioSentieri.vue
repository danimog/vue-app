<template>
    <div class="container">
        <section class="menu">
            <b-navbar toggleable type="light" variant="light">
                <b-navbar-brand href="#">APPv3</b-navbar-brand>
                <b-navbar-toggle target="navbar-toggle-collapse">
                <template v-slot:default="{ expanded }">
                    <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
                    <b-icon v-else icon="chevron-bar-down"></b-icon>
                </template>
                </b-navbar-toggle>
                <b-collapse id="navbar-toggle-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item href="#">Link 1</b-nav-item>
                    <b-nav-item href="#">Link 2</b-nav-item>
                    <b-nav-item href="#" disabled>Disabled</b-nav-item>
                </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </section>
        <section class="header">
            <b-row>
                <!-- <b-col cols="3"><b>{{sentieri.sent}}</b></b-col> -->
                <b-col cols="3"><b>{{path.data.features[12].sent}}</b></b-col>
                <!-- <b-col cols="9" class="text-left"><b>{{sentieri.d_tpp}}</b></b-col> -->
                <b-col cols="9" class="text-left"><b>{{path.data.features[12].d_tpp}}</b></b-col>
            </b-row>
            <b-row class="mt-3">
                <b-col cols="12" style="display:flex; justify-content: space-around;">
                    <div>
                    <!-- il v-if legge nuovamente il dato df_s (che forse potrebbe essere messo in una variabile) per caricare le icone -->
                    <img class="img-fluid headerIcon" alt="difficolta"
                      v-if="path.data.features[12].df_s == 'EE'" src="../assets/images/icons/card/difficolta/difficolta_EE.svg"
                    />
                    <img class="img-fluid headerIcon" alt="difficolta"
                      v-else-if="path.data.features[12].df_s == 'E'" src="../assets/images/icons/card/difficolta/difficolta_E.svg"
                    />
                    <img class="img-fluid headerIcon" alt="difficolta"
                      v-else-if ="path.data.features[12].df_s == 'T'" src="../assets/images/icons/card/difficolta/difficolta_T.svg" 
                    />
                  </div>
                    <div><img class="img-fluid headerIcon" alt="sac_scale" src="../assets/images/icons/card/altimetria/costa_mezzacosta.svg" /></div>
                    <div><img class="img-fluid headerIcon" alt="dislivello" src="../assets/images/icons/card/dislivello/dislivello2.svg" /></div>
                    <div><img class="img-fluid headerIcon" alt="difficolta" src="../assets/images/icons_w/lunghezza.png" /><p> {{ path.data.features[12].sv_l }} m</p></div>
                  <!-- in alcuni casi nel json non c'è il dato .dslv - lo controllo e se non esiste non visualizzo il div -->
                    <div><span v-if="path.data.features[12].dslv > 0"><img class="img-fluid headerIcon" alt="difficolta" src="../assets/images/icons_w/altimetria.png" /><p> {{ path.data.features[12].dslv }} m+</p></span></div>
                    <div><img class="img-fluid headerIcon" alt="difficolta" src="../assets/images/icons_w/time_a.png" /><p> {{ path.data.features[12].t_a }} </p></div>
                    <div><img class="img-fluid headerIcon" alt="difficolta" src="../assets/images/icons_w/time_ritorno.png" /><p> {{ path.data.features[12].t_r }}</p></div>
               
                </b-col>
            </b-row>
        </section>
        <section class="descrizione">
          <div v-for="(det,ix) in detail.data.features" :key=ix>
            
            <span 
              v-if="det.sent == path.data.features[12].sent"
              v-html="det.tx" class="text-left">
            >
            </span>
            
          </div>
            <ul>
            <div v-for="(nodo, index) in nodiPath" :key=index>
              <div v-for="(n,i) in nodo.features" :key=i>
                <li v-if="n.properties.c_s == path.data.features[12].sent">
                  <b>{{n.properties.nm_t}}</b>
                  <span>
                  <img class="img-fluid headerIcon" alt="difficolta"
                      v-if="n.properties.sac == 'EE'" src="../assets/images/icons/card/difficolta/difficolta_EE.svg"
                  />
                  <img class="img-fluid headerIcon" alt="difficolta"
                    v-else-if="n.properties.sac == 'E'" src="../assets/images/icons/card/difficolta/difficolta_E.svg"
                  />
                  <img class="img-fluid headerIcon" alt="difficolta"
                    v-else-if ="n.properties.sac == 'T'" src="../assets/images/icons/card/difficolta/difficolta_T.svg" 
                  />
                  incl: {{n.properties.incl}} |
                  <img class="img-fluid headerIcon" alt="difficolta" src="../assets/images/icons_w/lunghezza.png" /> {{n.properties.l_3m}} m
                  <img class="img-fluid headerIcon" alt="difficolta" src="../assets/images/icons_w/altimetria.png" /> {{n.properties.dsl}} m+
                <br>
                {{n.properties.tx}}
                </span>  
                </li>
              </div>
              <!-- <li v-if="nodo.properties.c_s == path.data.features[12].sent">
                <b>{{nodo.properties.nm_t}}</b> | 
                <span>
                  <img class="img-fluid headerIcon" alt="difficolta"
                      v-if="nodo.properties.sac == 'EE'" src="../assets/images/icons/card/difficolta/difficolta_EE.svg"
                  />
                  <img class="img-fluid headerIcon" alt="difficolta"
                    v-else-if="nodo.properties.sac == 'E'" src="../assets/images/icons/card/difficolta/difficolta_E.svg"
                  />
                  <img class="img-fluid headerIcon" alt="difficolta"
                    v-else-if ="nodo.properties.sac == 'T'" src="../assets/images/icons/card/difficolta/difficolta_T.svg" 
                  />
                  
                  incl: {{nodo.properties.incl}} |
                  <img class="img-fluid headerIcon" alt="difficolta" src="../assets/images/icons_w/lunghezza.png" /> {{nodo.properties.l_3m}} m
                  <img class="img-fluid headerIcon" alt="difficolta" src="../assets/images/icons_w/altimetria.png" /> {{nodo.properties.dsl}} m+
                <br>
                {{nodo.properties.tx}}
                </span>
              </li> -->
            </div>
            </ul>
        </section>
    </div>
</template>

<script>
import axios from 'axios';
import listaSentieri from "../assets/json/sentieri.json";
import dettaglioSentiero from "../assets/json/testi.json";
import nodiTratte from "../assets/json/nodi_tratte.json";

export default {
  data() {
    return { 
        sentieri: listaSentieri[0],
        dettaglio: dettaglioSentiero[31],
        nodi: nodiTratte,
        path: null,
        detail: null,
        nodiPath: null
    };
  },
  mounted () {
    axios
      .get('http://maps.t5t.it/jsdata/elenco_sentieri.json')
      .then(response => (this.path = response)),
    axios
      .get('http://maps.t5t.it/jsdata/testi.json.it')
      .then(response => (this.detail = response)),
    axios
      .get('http://maps.t5t.it/jsdata/nodi_tratte_iti_testi.json.it')
      .then(response => (this.nodiPath = response))
  }

};
</script>

<style scoped>
.header{
    margin-top: 1rem;
}

.descrizione{
    text-align: left;
}

.headerIcon {
  height: 32px;
  width: 32px;
  padding: 0;
  margin: 0 2px;
}
</style>
