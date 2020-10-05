<template>
  <div id="home" class="container">
    <div class="mt-3 mb-3">
      <b-container fluid="sm">
        <b-row class="riga">
          <b-card-group deck>
            <b-card
              class="mycard"
              v-for="sentiero in sentieri"
              :key="sentiero.sent"
            >
              <template v-slot:header>
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
                    <span class="m-3" style="font-size: smaller;">Attenzione: SENTIERO CHIUSO!</span> 
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

                  <div><img class="img-fluid headerIcon" alt="difficolta" src="../assets/images/icons_w/lunghezza.png" /> {{ sentiero.sv_l }} m</div>
                  <div><span v-if="sentiero.dslv > 0"><img class="img-fluid headerIcon" alt="difficolta" src="../assets/images/icons_w/altimetria.png" /> {{ sentiero.dslv }} m+</span></div>
                  <div><img class="img-fluid headerIcon" alt="difficolta" src="../assets/images/icons_w/time_a.png" /> {{ sentiero.t_a }} </div>
                  <div><img class="img-fluid headerIcon" alt="difficolta" src="../assets/images/icons_w/time_ritorno.png" /> {{ sentiero.t_r }}</div>
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
import listaSentieri from "../assets/json/sentieri.json";

export default {
  data() {
    return {
      sentieri: listaSentieri
    };
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

.coloreEE {
  color: orange;
}
.coloreE {
  color: green;
}
.coloreT {
  color: lightskyblue;
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
  background-color: lightskyblue;
  padding: 5px;
  margin: 0%;
}

.headerCardE {
  background-color: green;
  padding: 5px;
  margin: 0%;
}

.headerCardEE {
  background-color: orange;
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
  justify-content: center;
}

.footerCardClose {
  background-color: red;
  color: whitesmoke;
  font-weight: 900;
  padding: 5px;
  margin: 0%;
}

</style>
