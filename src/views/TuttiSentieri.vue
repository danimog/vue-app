<template>
  <div id="home" class="container">
    
    <div class="mt-3 mb-3">
      <b-container fluid="sm">
        <b-row class="riga">
          <b-card-group deck>
            <b-card
              class="mycard"
              v-for="sentiero in sentieri.data.features"
              :key="sentiero.sent"
            > <!-- il v-for cicla i "sentieri" letti dal json andando a prendere la voce corretta -->
              <template v-slot:header>
                <!-- template header: la classe è modificata in base al dato letto dal valore di df_s -->
                <div
                  style="display: flex; justify-content: space-around;"
                  :class="{
                    headerCardEE: sentiero.df_s == 'EE',
                    headerCardE: sentiero.df_s == 'E',
                    headerCardT: sentiero.df_s == 'T',
                    headerCardClosed : sentiero.chiuso == '1'
                  }"
                >
                
                <div v-if="sentiero.chiuso != '1'" style="display:flex; justify-content:space-around; width: 100%">
                  <div>
                  <span class="textHeader"> {{ sentiero.sent }} </span>
                  </div>
                  <div>
                    <!-- le icone saranno da rendere dinamiche -->
                      <img class="img-fluid headerIcon" alt="running" src="../assets/images/icons/card/attivita/running_bianco.svg" />
                      <img class="img-fluid headerIcon" alt="family" src="../assets/images/icons/card/attivita/family_bianco.svg" />
                      <img class="img-fluid headerIcon" alt="biking" src="../assets/images/icons/card/attivita/biking_bianco.svg" />
                    <!-- fine icone dinamiche -->
                  </div>
                  <div>
                    <!-- il v-if legge nuovamente il dato df_s (che forse potrebbe essere messo in una variabile) per caricare le icone -->
                    <img class="img-fluid headerIcon" alt="difficolta"
                      v-if="sentiero.df_s == 'EE'" src="../assets/images/icons/card/difficolta/difficolta_EE.svg"
                    />
                    <img class="img-fluid headerIcon" alt="difficolta"
                      v-else-if="sentiero.df_s == 'E'" src="../assets/images/icons/card/difficolta/difficolta_E.svg"
                    />
                    <img class="img-fluid headerIcon" alt="difficolta"
                      v-else-if ="sentiero.df_s == 'T'" src="../assets/images/icons/card/difficolta/difficolta_T.svg" 
                    />
                  </div>
                </div>
                <div v-else>
                    <span class="m-3" style="font-size: smaller; font-weight: bold;">Attenzione: SENTIERO CHIUSO!</span> 
                    <b-icon icon="exclamation-circle"></b-icon>
                  </div>
                </div>
              </template>
              <b-card-text>
                <h6>{{ sentiero.d_tpp }}</h6>
                  <!-- new Intl.NumberFormat('it-IT', { maximumSignificantDigits: 2 }).format({{sentiero.sv_l}}) -->
                <!-- <p>
                  <img class="img-fluid headerIcon" alt="difficolta" src="../assets/images/icons_w/lunghezza.png" /> {{ sentiero.sv_l }} m
                  <span v-if="sentiero.dslv > 0"><img class="img-fluid headerIcon" alt="difficolta" src="../assets/images/icons_w/altimetria.png" /> {{ sentiero.dslv }} m+</span>
                  <img class="img-fluid headerIcon" alt="difficolta" src="../assets/images/icons_w/time_a.png" /> {{ sentiero.t_a }} 
                  <img class="img-fluid headerIcon" alt="difficolta" src="../assets/images/icons_w/time_ritorno.png" /> {{ sentiero.t_r }}
                </p> -->
                <div class="my-card-text">
                  <div><img class="img-fluid headerIcon" alt="sac_scale" src="../assets/images/icons/card/altimetria/costa_mezzacosta.svg" /></div>
                  <div><img class="img-fluid headerIcon" alt="dislivello" src="../assets/images/icons/card/dislivello/dislivello2.svg" /></div>
                  <div><img class="img-fluid headerIcon" alt="difficolta" src="../assets/images/icons_w/lunghezza.png" /><p> {{ sentiero.sv_l }} m</p></div>
                  <!-- in alcuni casi nel json non c'è il dato .dslv - lo controllo e se non esiste non visualizzo il div -->
                  <div><span v-if="sentiero.dslv > 0"><img class="img-fluid headerIcon" alt="difficolta" src="../assets/images/icons_w/altimetria.png" /><p> {{ sentiero.dslv }} m+</p></span></div>
                  <div><img class="img-fluid headerIcon" alt="difficolta" src="../assets/images/icons_w/time_a.png" /><p> {{ sentiero.t_a }} </p></div>
                  <div><img class="img-fluid headerIcon" alt="difficolta" src="../assets/images/icons_w/time_ritorno.png" /><p> {{ sentiero.t_r }}</p></div>
                </div>
                
              </b-card-text>
              <!-- <template v-slot:footer>
                <div
                  :class="{
                    footerCardClose: sentiero.chiuso == '1'
                  }"
                >
                <h6 v-if="sentiero.chiuso == '1' "><strong>Attenzione: SENTIERO CHIUSO!</strong></h6>
                </div>
              </template> -->
            </b-card>
          </b-card-group>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
// import listaSentieri from "../assets/json/sentieri.json";
// sentieri: listaSentieri,
import axios from 'axios';

export default {
  data() {
    return {
      
      sentieri: null
    };
  },
  mounted () {
    axios
      .get('http://maps.t5t.it/jsdata/elenco_sentieri.json')
      .then(response => (this.sentieri = response))
  }
};
</script>

<style scoped>
p{
  margin-bottom: 0;
  padding-bottom: 5px;
}

h5{
  margin-bottom: 1rem;
}

/* cambiare i colori in base a quanto previsto dal disegno grafico */
.coloreEE {
  /* color: orange; */
  color: #F7AA16;
}
.coloreE {
  /* color: green; */
  color: #3A8480;
}
.coloreT {
  /* color: lightskyblue; */
  color: #65ABCE;
}

.card-deck .card {
  flex: 1 0 30%;
  margin: 1em;
}

.card-header {
  padding: 0%;
}

.card-body{
  padding: .3em;
  font-size: 11px;
  font-weight: 700;
}

.card-footer {
  padding: 0%;
}

.textHeader{
  background-color: white;
  color: black;
  font-size: 12px;
  font-weight: bold;
}

.textHeader::before{
  content:"\00a0 \00a0 \00a0 \00a0";
  background-color: red;
}

.textHeader::after{
  content:"\00a0 \00a0 \00a0 \00a0";
  background-color: red;
}

.headerCardT {
  /* background-color: lightskyblue; */
  background-color: #65ABCE;

  padding: 5px;
  margin: 0%;
}

.headerCardE {
  /* background-color: green; */
  background-color: #3A8480;


  padding: 5px;
  margin: 0%;
}

.headerCardEE {
  /* background-color: orange; */
  background-color: #F7AA16;

  padding: 5px;
  margin: 0%;
}

.headerCardClosed{
  background-color: black;
  color: white;
  padding: 5px;
  margin: 0%;
}

.headerIcon {
  height: 32px;
  width: 32px;
  padding: 0;
  margin: 0 2px;
}

.my-card-text{
  display: flex;
  justify-content: space-around;
}

.footerCardClose {
  background-color: red;
  color: whitesmoke;
  font-weight: 900;
  padding: 5px;
  margin: 0%;
}

</style>
