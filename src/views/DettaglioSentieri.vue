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
                <b-col cols="3"><b>{{sentieri.sent}}</b></b-col>
                <b-col cols="9" class="text-left"><b>{{sentieri.d_tpp}}</b></b-col>
            </b-row>
            <b-row class="mt-3">
                <b-col cols="12" style="display:flex; justify-content: space-around;">
                    <div>
                    <!-- il v-if legge nuovamente il dato df_s (che forse potrebbe essere messo in una variabile) per caricare le icone -->
                    <img class="img-fluid headerIcon" alt="difficolta"
                      v-if="sentieri.df_s == 'EE'" src="../assets/images/icons/card/difficolta/difficolta_EE.svg"
                    />
                    <img class="img-fluid headerIcon" alt="difficolta"
                      v-else-if="sentieri.df_s == 'E'" src="../assets/images/icons/card/difficolta/difficolta_E.svg"
                    />
                    <img class="img-fluid headerIcon" alt="difficolta"
                      v-else-if ="sentieri.df_s == 'T'" src="../assets/images/icons/card/difficolta/difficolta_T.svg" 
                    />
                  </div>
                    <div><img class="img-fluid headerIcon" alt="sac_scale" src="../assets/images/icons/card/altimetria/costa_mezzacosta.svg" /></div>
                    <div><img class="img-fluid headerIcon" alt="dislivello" src="../assets/images/icons/card/dislivello/dislivello2.svg" /></div>
                    <div><img class="img-fluid headerIcon" alt="difficolta" src="../assets/images/icons_w/lunghezza.png" /><p> {{ sentieri.sv_l }} m</p></div>
                  <!-- in alcuni casi nel json non c'è il dato .dslv - lo controllo e se non esiste non visualizzo il div -->
                    <div><span v-if="sentieri.dslv > 0"><img class="img-fluid headerIcon" alt="difficolta" src="../assets/images/icons_w/altimetria.png" /><p> {{ sentieri.dslv }} m+</p></span></div>
                    <div><img class="img-fluid headerIcon" alt="difficolta" src="../assets/images/icons_w/time_a.png" /><p> {{ sentieri.t_a }} </p></div>
                    <div><img class="img-fluid headerIcon" alt="difficolta" src="../assets/images/icons_w/time_ritorno.png" /><p> {{ sentieri.t_r }}</p></div>
               
                </b-col>
            </b-row>
        </section>
        <section class="descrizione">
            <img class="img-fluid headerIcon" alt="descrizione sentiero" src="../assets/images/icons/sentiero/descrizione_sentieri/descrizione.svg" />
            <span v-html="dettaglio.tx" class="text-left"></span>
        </section>
    </div>
</template>

<script>
import listaSentieri from "../assets/json/sentieri.json";
import dettaglioSentiero from "../assets/json/testi.json";

export default {
  data() {
    return { 
        sentieri: listaSentieri[0],
        dettaglio: dettaglioSentiero[31]
    };
  }
};
</script>

<style scoped>
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
