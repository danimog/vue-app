<template>
  <div class="about">
    <h1>Lista dei sentieri</h1>
    <div class="sentieri">
      <div class="mt-3 mb-3">
        <b-container fluid="sm">
          <b-row class="riga">
            <b-card-group columns>
              <b-card
                header="featured"
                header-tag="header"
                footer="Card Footer"
                footer-tag="footer"
                title="SVA 590 | Monterosso - S. Antonio Mesco"
              >
                <template v-slot:header>
                  <div class="headerCardClose">
                    <img
                      class="img-fluid headerIcon"
                      alt="hiking"
                      src="../assets/images/icons_w/hiking.png"
                    />
                    <img
                      class="img-fluid headerIcon"
                      alt="biking"
                      src="../assets/images/icons_w/biking.png"
                    />

                    <img
                      class="img-fluid headerIcon"
                      alt="biking"
                      src="../assets/images/icons_w/difficolta_EE.png"
                    />
                  </div>
                </template>
                <b-card-text>
                  <div style="display:flex; justify-content: center; ">
                    <div>
                      <img
                        class="img-fluid headerIcon"
                        alt="scale"
                        src="../assets/images/icons_w/scale_media.png"
                      />
                    </div>
                    <div>
                      <img
                        class="img-fluid headerIcon"
                        alt="lunghezza"
                        src="../assets/images/icons_w/lunghezza.png"
                      />
                      <h6>2.650m</h6>
                    </div>
                    <div>
                      <img
                        class="img-fluid headerIcon"
                        alt="altimetria"
                        src="../assets/images/icons_w/altimetria.png"
                      />
                      <h6>+312m</h6>
                    </div>
                    <div>
                      <img
                        class="img-fluid headerIcon"
                        alt="andata"
                        src="../assets/images/icons_w/time_andata.png"
                      />
                      <h6>1h45'</h6>
                    </div>
                    <div>
                      <img
                        class="img-fluid headerIcon"
                        alt="ritorno"
                        src="../assets/images/icons_w/time_ritorno.png"
                      />
                      <h6>1h15'</h6>
                    </div>
                  </div>
                </b-card-text>
                <template v-slot:footer>
                  <div class="footerCardClose">
                    <em>SENTIERO CHIUSO!</em>
                  </div>
                </template>
              </b-card>

              <!-- secondo sentiero -->
              <b-card title="SVA 591 | S. Antonio Mesco - Levanto" header-tag="header" footer-tag="footer">
                <template v-slot:header>
                  <div class="headerCardE">
                    <img class="img-fluid headerIcon" alt="hiking" src="../assets/images/icons_w/hiking.png" />
                    <img class="img-fluid headerIcon" alt="biking" src="../assets/images/icons_w/biking.png" />
                    <img class="img-fluid headerIcon" alt="biking" src="../assets/images/icons_w/difficolta_EE.png" />
                  </div>
                </template>
                <b-card-text>
                  <div style="display:flex; justify-content: center; ">
                    <div>
                      <img class="img-fluid headerIcon" alt="scale" src="../assets/images/icons_w/scale_media.png" />
                    </div>
                    <div>
                      <img class="img-fluid headerIcon" alt="lunghezza" src="../assets/images/icons_w/lunghezza.png" />
                      <h6>2.650m</h6>
                    </div>
                    <div>
                      <img class="img-fluid headerIcon" alt="altimetria" src="../assets/images/icons_w/altimetria.png" />
                      <h6>+312m</h6>
                    </div>
                    <div>
                      <img class="img-fluid headerIcon" alt="andata" src="../assets/images/icons_w/time_andata.png" />
                      <h6>1h45'</h6>
                    </div>
                    <div>
                      <img class="img-fluid headerIcon" alt="ritorno" src="../assets/images/icons_w/time_ritorno.png" />
                      <h6>1h15'</h6>
                    </div>
                  </div>
                </b-card-text>
                <template v-slot:footer>
                  <div class="footerCard">
                    <em>Avviso</em>
                  </div>
                </template>
              </b-card>
<!-- FINE secondo sentiero -->

<!-- terzo sentiero -->
              <b-card title="SVA 592 | Monterosso - Vernazza" header-tag="header" footer-tag="footer">
                <template v-slot:header>
                  <div class="headerCardEE">
                    <img class="img-fluid headerIcon" alt="hiking" src="../assets/images/icons_w/hiking.png" />
                    <img class="img-fluid headerIcon" alt="biking" src="../assets/images/icons_w/biking.png" />
                    <img class="img-fluid headerIcon" alt="biking" src="../assets/images/icons_w/difficolta_EE.png" />
                  </div>
                </template>
                <b-card-text>
                  <div style="display:flex; justify-content: center; ">
                    <div>
                      <img class="img-fluid headerIcon" alt="scale" src="../assets/images/icons_w/scale_media.png" />
                    </div>
                    <div>
                      <img class="img-fluid headerIcon" alt="lunghezza" src="../assets/images/icons_w/lunghezza.png" />
                      <h6>2.650m</h6>
                    </div>
                    <div>
                      <img class="img-fluid headerIcon" alt="altimetria" src="../assets/images/icons_w/altimetria.png" />
                      <h6>+312m</h6>
                    </div>
                    <div>
                      <img class="img-fluid headerIcon" alt="andata" src="../assets/images/icons_w/time_andata.png" />
                      <h6>1h45'</h6>
                    </div>
                    <div>
                      <img class="img-fluid headerIcon" alt="ritorno" src="../assets/images/icons_w/time_ritorno.png" />
                      <h6>1h15'</h6>
                    </div>
                  </div>
                </b-card-text>
                <!-- <template v-slot:footer>
                  <div class="footerCard">
                    <em>SENTIERO CHIUSO!</em>
                  </div>
                </template> -->
              </b-card>
<!-- FINE terzo sentiero-->

            </b-card-group>
          </b-row>
        </b-container>
      </div>
    </div>
  </div>
</template>

<style scoped>
h6{
  font-size: 9px;
  font-weight: 700;
}
.card-header {
  padding: 0%;
}
.headerCardClose {
  background-color: red;
  padding: 5px;
  margin: 0%;
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

.card-footer {
  padding: 0%;
}
.footerCardClose {
  background-color: red;
  color: white;
  padding: 5px;
  margin: 0%;
}

.footerCard {
  background-color:white;
  color: darkgrey;
  padding: 5px;
  margin: 0%;
}

.headerIcon {
  max-height: 32px;
  padding: 0;
  margin: 0 5px;
}
</style>
