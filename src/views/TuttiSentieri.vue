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
                  :class="{
                    headerCardEE: sentiero.df_s == 'EE',
                    headerCardE: sentiero.df_s == 'E',
                    headerCardT: sentiero.df_s == 'T'
                  }"
                >
                <!-- le icone saranno da rendere dinamiche -->
                  <img class="img-fluid headerIcon" alt="hiking" src="../assets/images/icons_w/hiking.png" />
                  <img class="img-fluid headerIcon" alt="biking" src="../assets/images/icons_w/biking.png" />
                <!-- fine icone dinamiche -->
                  <img class="img-fluid headerIcon" alt="difficolta"
                    v-if="sentiero.df_s == 'EE'" src="../assets/images/icons_w/difficolta_EE.png"
                  />
                  <img class="img-fluid headerIcon" alt="difficolta"
                    v-else-if="sentiero.df_s == 'E'" src="../assets/images/icons_w/difficolta_E.png"
                  />
                  <img class="img-fluid headerIcon" alt="difficolta"
                    v-else-if ="sentiero.df_s == 'T'" src="../assets/images/icons_w/difficolta_T.png" 
                  />
                </div>
              </template>
              <b-card-text>
                  <h5>{{ sentiero.d_tpp }}</h5>
                  <!-- <p
                    :class="{
                      coloreEE: sentiero.df_s == 'EE',
                      coloreE: sentiero.df_s == 'E',
                      coloreT: sentiero.df_s == 'T'
                    }"
                  >
                    Difficoltà: {{ sentiero.df_s }}
                  </p> -->
                  <!-- new Intl.NumberFormat('it-IT', { maximumSignificantDigits: 2 }).format({{sentiero.sv_l}}) -->

                  <p>
                    <img class="img-fluid headerIcon" alt="difficolta" src="../assets/images/icons_w/lunghezza.png" /> {{ sentiero.sv_l }} m
                    <span v-if="sentiero.dslv > 0"><img class="img-fluid headerIcon" alt="difficolta" src="../assets/images/icons_w/altimetria.png" /> {{ sentiero.dslv }} m+</span>
                    <img class="img-fluid headerIcon" alt="difficolta" src="../assets/images/icons_w/time_a.png" /> {{ sentiero.t_a }} 
                    <img class="img-fluid headerIcon" alt="difficolta" src="../assets/images/icons_w/time_ritorno.png" /> {{ sentiero.t_r }}
                  </p>
              </b-card-text>
              <template v-slot:footer>
                <div
                  :class="{
                    footerCardClose: sentiero.chiuso == '1'
                  }"
                >
                <h6 v-if="sentiero.chiuso == '1' ">Attenzione: SENTIERO CHIUSO!</h6>
                </div>
              </template>
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
  margin: 0.5em;
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

.headerIcon {
  max-height: 32px;
  padding: 0;
  margin: 0 5px;
}

.footerCardClose {
  background-color: red;
  color: whitesmoke;
  font-weight: 900;
  padding: 5px;
  margin: 0%;
}

</style>
