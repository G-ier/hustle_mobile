<template>
  <nav>
      <v-navigation-drawer
      :v-model="false"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      temporary
      color="red darken-4"
    >
      <v-img :aspect-ratio="16/9" class="bg-secondary">

      </v-img>
      <v-list-item to="/" router exact active-class="white--text">
        <v-list-item-action>
            <v-icon>mdi-circle</v-icon>
        </v-list-item-action>
        <v-list-item-content>
            <v-list-item-title class="v-fsm">Faqja kryesore</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-group prepend-icon="mdi-page-previous-outline" :value="false" color="white">
        <template v-slot:activator>
            <v-list-item-title class="v-fsm">Kategorite</v-list-item-title>
        </template>
        <v-list-group sub-group color="white">
          <template v-slot:activator>
              <v-list-item-title class="v-fsm">Elektronike</v-list-item-title>
          </template>
          <v-list-item to="/kategorite/elektronike/tv-dhe-video" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">TV dhe Video</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/kategorite/elektronike/audio-shtepiake" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Audio-shtepiake</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/kategorite/elektronike/kamera" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Kamera, Foto, Video</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/kategorite/elektronike/telefon" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Telefon & Aksesore</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/kategorite/elektronike/video-lojra" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Video-Lojra</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/kategorite/elektronike/makina" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Elektronike Makinash</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-group sub-group color="white">
          <template v-slot:activator>
              <v-list-item-title class="v-fsm">Kancelari</v-list-item-title>
          </template>
          <v-list-item to="/kategorite/kancelari/zyra" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Produkte zyrash</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/kategorite/kancelari/shkollore" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Produkte shkollore</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/kategorite/kancelari/printer" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Printer</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/kategorite/kancelari/projektor" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Projektor</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-group sub-group color="white">
          <template v-slot:activator>
              <v-list-item-title class="v-fsm">Libra</v-list-item-title>
          </template>
          <v-list-item to="/kategorite/libra/libra/" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Libra</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-group sub-group color="white">
          <template v-slot:activator>
              <v-list-item-title class="v-fsm">Kompjutera/Teknologji</v-list-item-title>
          </template>
          <v-list-item to="/kategorite/computers/computers" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Kompjutera dhe tableta</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/kategorite/computers/monitor" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Monitor</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/kategorite/computers/pjese" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Pjese kompjuterash</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/kategorite/computers/aksesore" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Aksesore</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-group sub-group color="white">
          <template v-slot:activator>
              <v-list-item-title class="v-fsm">Kozmetike</v-list-item-title>
          </template>
          <v-list-item to="/kategorite/kozmetike/kozmetike/" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Kozmetike</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-group sub-group color="white">
          <template v-slot:activator>
              <v-list-item-title class="v-fsm">Lodra/Femijje</v-list-item-title>
          </template>
          <v-list-item to="/kategorite/lodra/lodra" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Lodra</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/kategorite/lodra/bebe" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Bebe</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-group sub-group color="white">
          <template v-slot:activator>
              <v-list-item-title class="v-fsm">Sport</v-list-item-title>
          </template>
          <v-list-item to="/kategorite/sport/palester" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Palester & Fitness</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/kategorite/sport/gjueti" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Gjueti/Peshkim</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/kategorite/sport/atletike" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Rroba atletike</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/kategorite/sport/golf" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Golf</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-group sub-group color="white">
          <template v-slot:activator>
              <v-list-item-title class="v-fsm">Mobilje/Garden</v-list-item-title>
          </template>
          <v-list-item to="/kategorite/mobilje/shtepiake" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Shtepiake</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/kategorite/mobilje/kuzhina" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Kuzhina</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/kategorite/mobilje/dyshek" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Dyshek & Banje</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/kategorite/mobilje/outdoor" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Kopesht & Outdoor</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/kategorite/mobilje/kafshesh" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Produkte kafshesh</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/kategorite/mobilje/vegla" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Vegla pune</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-group sub-group color="white">
          <template v-slot:activator>
              <v-list-item-title class="v-fsm">Rroba dhe fashion</v-list-item-title>
          </template>
          <v-list-item to="/kategorite/fashion/meshkuj" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Meshkuj</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/kategorite/fashion/femra" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Femra</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list-group>
      <v-list-item to="/account/me" router exact active-class="white--text">
        <v-list-item-action>
            <v-icon>mdi-login</v-icon>
        </v-list-item-action>
        <v-list-item-content>
            <v-list-item-title class="v-fsm">Faqja e klientit</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item to="/account/register" router exact active-class="white--text">
        <v-list-item-action>
            <v-icon>mdi-account-plus</v-icon>
        </v-list-item-action>
        <v-list-item-content>
            <v-list-item-title class="v-fsm">Behu shites</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item to="/rreth-nesh" router exact active-class="white--text">
        <v-list-item-action>
            <v-icon>mdi-information-outline</v-icon>
        </v-list-item-action>
        <v-list-item-content>
            <v-list-item-title class="v-fsm">Rreth nesh</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      dark
      color="primary"
      height="70"
      elevation="6"
      class="app-bar-rose"
      
    >
      
      <div class="embed">
            <v-toolbar-title>
                <nuxt-link to="/" class="btn-c-o"><span class="ersteSpan white--text qs">LOGO</span></nuxt-link>
            </v-toolbar-title>
            <div class="inner-burger-2">
                <v-btn text class="btn-c-o menu-btn qs ml-2" @click.stop="drawer = !drawer" >
                    <p class="qs pa-0 ma-0">Shop</p>
                    <v-icon>mdi-chevron-down</v-icon>
                </v-btn>
            </div>
            <v-menu
              v-model="drawer"
              :close-on-content-click="false"
              nudge-bottom="70"
              offset-y
              light
              class="rounded-0"
              :min-width="maxwidth"
            >

              <div class="induldge">
                <div class="centered">
                  <div class="guldge">
                    <v-btn text class="secondary--text btn-c-o" @click="openElektronike">
                      <p class="qs pa-0 ma-0">Elektronike</p>
                      <v-icon size="20">mdi-chevron-right</v-icon>
                    </v-btn>
                    <v-btn text class="secondary--text btn-c-o" @click="openKancelari">
                      <p class="qs pa-0 ma-0">Kancelari</p>
                      <v-icon size="20">mdi-chevron-right</v-icon>
                    </v-btn>
                    <v-btn text class="secondary--text btn-c-o" @click="openLibra">
                      <p class="qs pa-0 ma-0">Libra</p>
                      <v-icon size="20">mdi-chevron-right</v-icon>
                    </v-btn>
                    <v-btn text class="secondary--text btn-c-o" @click="openKompjutera">
                      <p class="qs pa-0 ma-0">Kompjutera/Teknologji</p>
                      <v-icon size="20">mdi-chevron-right</v-icon>
                    </v-btn>
                    <v-btn text class="secondary--text btn-c-o" @click="openKozmetike">
                      <p class="qs pa-0 ma-0">Kozmetike</p>
                      <v-icon size="20">mdi-chevron-right</v-icon>
                    </v-btn>
                    <v-btn text class="secondary--text btn-c-o" @click="openLodra">
                      <p class="qs pa-0 ma-0">Lodra/Femije</p>
                      <v-icon size="20">mdi-chevron-right</v-icon>
                    </v-btn>
                    <v-btn text class="secondary--text btn-c-o" @click="openSport">
                      <p class="qs pa-0 ma-0">Sport</p>
                      <v-icon size="20">mdi-chevron-right</v-icon>
                    </v-btn>
                    <v-btn text class="secondary--text btn-c-o" @click="openMobilje">
                      <p class="qs pa-0 ma-0">Mobilje/Garden</p>
                      <v-icon size="20">mdi-chevron-right</v-icon>
                    </v-btn>
                    <v-btn text class="secondary--text btn-c-o" @click="openFashion">
                      <p class="qs pa-0 ma-0">Rroba dhe fashion</p>
                      <v-icon size="20">mdi-chevron-right</v-icon>
                    </v-btn>
                  </div>
                  <div class="klav">
                    <div class="riot" v-if="burner == 'Elektronike'">
                      <v-btn text class="secondary--text btn-c-o" to="/kategorite/elektronike/tv-dhe-video" @click="drawer = false">
                        <p class="qs pa-0 ma-0">TV dhe Video</p>
                      </v-btn>
                      <v-btn text class="secondary--text btn-c-o" to="/kategorite/elektronike/audio-shtepiake" @click="drawer = false">
                        <p class="qs pa-0 ma-0">Audio Shtepiake</p>
                      </v-btn>
                      <v-btn text class="secondary--text btn-c-o" to="/kategorite/elektronike/kamera" @click="drawer = false">
                        <p class="qs pa-0 ma-0">Kamera dhe Foto</p>
                      </v-btn>
                      <v-btn text class="secondary--text btn-c-o" to="/kategorite/elektronike/telefon" @click="drawer = false">
                        <p class="qs pa-0 ma-0">Telefona</p>
                      </v-btn>
                      <v-btn text class="secondary--text btn-c-o" to="/kategorite/elektronike/video-lojra" @click="drawer = false">
                        <p class="qs pa-0 ma-0">Video Lojra</p>
                      </v-btn>
                      <v-btn text class="secondary--text btn-c-o" to="/kategorite/elektronike/makina" @click="drawer = false">
                        <p class="qs pa-0 ma-0">Elektronike makinash</p>
                      </v-btn>
                    </div>
                    <div class="riot" v-if="burner == 'Kancelari'">
                      <v-btn text class="secondary--text btn-c-o" to="/kategorite/kancelari/zyra" @click="drawer = false">
                        <p class="qs pa-0 ma-0">Produkte zyrash</p>
                      </v-btn>
                      <v-btn text class="secondary--text btn-c-o" to="/kategorite/kancelari/shkollore" @click="drawer = false">
                        <p class="qs pa-0 ma-0">Produkte shkollore</p>
                      </v-btn>
                      <v-btn text class="secondary--text btn-c-o" to="/kategorite/kancelari/printer" @click="drawer = false">
                        <p class="qs pa-0 ma-0">Printer</p>
                      </v-btn>
                      <v-btn text class="secondary--text btn-c-o" to="/kategorite/kancelari/projektor" @click="drawer = false">
                        <p class="qs pa-0 ma-0">Projektor</p>
                      </v-btn>
                    </div>
                    <div class="riot" v-if="burner == 'Libra'">
                      <v-btn text class="secondary--text btn-c-o" to="/kategorite/libra/libra" @click="drawer = false">
                        <p class="qs pa-0 ma-0">Libra</p>
                      </v-btn>
                    </div>
                    <div class="riot" v-if="burner == 'Kompjutera'">
                      <v-btn text class="secondary--text btn-c-o" to="/kategorite/computers/computers" @click="drawer = false">
                        <p class="qs pa-0 ma-0">Kompjutera dhe tableta</p>
                      </v-btn>
                      <v-btn text class="secondary--text btn-c-o" to="/kategorite/computers/monitor" @click="drawer = false">
                        <p class="qs pa-0 ma-0">Monitora</p>
                      </v-btn>
                      <v-btn text class="secondary--text btn-c-o" to="/kategorite/computers/pjese" @click="drawer = false">
                        <p class="qs pa-0 ma-0">Pjese kompjuterash</p>
                      </v-btn>
                      <v-btn text class="secondary--text btn-c-o" to="/kategorite/computers/aksesore" @click="drawer = false">
                        <p class="qs pa-0 ma-0">Aksesore</p>
                      </v-btn>
                    </div>
                    <div class="riot" v-if="burner == 'Kozmetike'">
                      <v-btn text class="secondary--text btn-c-o" to="/kategorite/kozmetike/kozmetike" @click="drawer = false">
                        <p class="qs pa-0 ma-0">Kozmetike</p>
                      </v-btn>
                    </div>
                    <div class="riot" v-if="burner == 'Lodra'">
                      <v-btn text class="secondary--text btn-c-o" to="/kategorite/lodra/lodra" @click="drawer = false">
                        <p class="qs pa-0 ma-0">Lodra</p>
                      </v-btn>
                      <v-btn text class="secondary--text btn-c-o" to="/kategorite/lodra/bebe" @click="drawer = false">
                        <p class="qs pa-0 ma-0">Bebe</p>
                      </v-btn>
                    </div>
                    <div class="riot" v-if="burner == 'Sport'">
                      <v-btn text class="secondary--text btn-c-o" to="/kategorite/sport/palester" @click="drawer = false">
                        <p class="qs pa-0 ma-0">Palester & Fitness</p>
                      </v-btn>
                      <v-btn text class="secondary--text btn-c-o" to="/kategorite/sport/gjueti" @click="drawer = false">
                        <p class="qs pa-0 ma-0">Gjueti/Peshkim</p>
                      </v-btn>
                      <v-btn text class="secondary--text btn-c-o" to="/kategorite/sport/atletike" @click="drawer = false">
                        <p class="qs pa-0 ma-0">Rroba atletike</p>
                      </v-btn>
                      <v-btn text class="secondary--text btn-c-o" to="/kategorite/sport/golf" @click="drawer = false">
                        <p class="qs pa-0 ma-0">Golf</p>
                      </v-btn>
                    </div>
                    <div class="riot" v-if="burner == 'Mobilje'">
                      <v-btn text class="secondary--text btn-c-o" to="/kategorite/mobilje/shtepiake" @click="drawer = false">
                        <p class="qs pa-0 ma-0">Shtepiake</p>
                      </v-btn>
                      <v-btn text class="secondary--text btn-c-o" to="/kategorite/mobilje/kuzhina" @click="drawer = false">
                        <p class="qs pa-0 ma-0">Kuzhina</p>
                      </v-btn>
                      <v-btn text class="secondary--text btn-c-o" to="/kategorite/mobilje/dyshek" @click="drawer = false">
                        <p class="qs pa-0 ma-0">Dyshek & Banje</p>
                      </v-btn>
                      <v-btn text class="secondary--text btn-c-o" to="/kategorite/mobilje/outdoor" @click="drawer = false">
                        <p class="qs pa-0 ma-0">Kopsht & Outdoor</p>
                      </v-btn>
                      <v-btn text class="secondary--text btn-c-o" to="/kategorite/mobilje/kafshesh" @click="drawer = false">
                        <p class="qs pa-0 ma-0">Produkte kafshesh</p>
                      </v-btn>
                      <v-btn text class="secondary--text btn-c-o" to="/kategorite/mobilje/vegla" @click="drawer = false">
                        <p class="qs pa-0 ma-0">Vegla pune</p>
                      </v-btn>
                    </div>
                    <div class="riot" v-if="burner == 'Fashion'">
                      <v-btn text class="secondary--text btn-c-o" to="/kategorite/fashion/femra" @click="drawer = false">
                        <p class="qs pa-0 ma-0">Femra</p>
                      </v-btn>
                      <v-btn text class="secondary--text btn-c-o" to="/kategorite/fashion/meshkuj" @click="drawer = false">
                        <p class="qs pa-0 ma-0">Meshkuj</p>
                      </v-btn>
                    </div>
                  </div>
                </div>
              </div>
            </v-menu>
            
          <v-spacer class="spacer-1"></v-spacer>
          <div class="good-row">
            <div class="searchy">
              <b-field position="is-centered">
                  <div class="searchable" id="kerkimi">
                    <v-icon color="secondary" class="pt-1">mdi-magnify</v-icon>
                    <input type="search" id="kerkimi-1" v-model="searchQ" class="searchable-1 btn-c-o" placeholder="Kerkoni produkte..." @focus="changeBorder" @input="changeType" @blur="antiBlur">
                  </div>
                  <button class="buttonable btn-c-o" id="butoni" @click="searchGo">Kerko</button>
              </b-field>
            </div>
            <div class="results" v-if="answer == true" ref="karuci" @mouseenter="itsover = true" @mouseleave="itsover = false" @mouseout="mouseOut">
              <div class="listings" v-if="sToShow.length > 0">
                <div class="tile" v-for="ting in sToShow.slice(0, 4)" :key="ting.id">
                  <v-btn class="qs secondary--text btn-c-o" text nuxt @click="itsover = false; answer = false; itemPressed(ting.red, ting.emri)">{{ting.emri}}</v-btn>
                </div>
              </div>
              <div class="listings" v-if="sToShow.length == 0 || sToShow == null">
                <div class="tile">
                  <p class="qs btn-c-o secondary--text">No result.</p>
                </div>
              </div>
            </div>
          </div>
          <v-spacer />
          
          <v-spacer class="spacer-2"></v-spacer>
          <div class="burger-div-2">
            <div class="inner-burger">
              <v-menu
                  bottom
                  left
                  light
                  class="index-upper-2"
              >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        dark
                        icon
                        v-bind="attrs"
                        v-on="on"
                        width="0"
                        height="0"
                        class="nofx px-0 btn-c-o qs"
                    >
                        <img :src="langLogo" alt="english version" width="18" height="18">
                        <v-icon size="12" color="white" class="pr-2">mdi-chevron-down</v-icon>
                    </v-btn>
                  </template>

                  <v-list >
                  <v-list-item
                      v-for="(item, i) in items1"
                      :key="i"
                      @click="() => {
                          langLogo = item.flag;
                      }"
                  >
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
              <b-dropdown
                            v-model="navigation"
                            position="is-bottom-left"
                            append-to-body
                            aria-role="menu"
                          >
                            <template #trigger>
                                <v-btn class="qs" icon width="10" height="10">
                                    <v-icon color="white">
                                    mdi-account
                                    </v-icon>
                                </v-btn>
                            </template>


                            <b-dropdown-item custom aria-role="menuitem">
                                Status: <b>{{user}}</b>
                            </b-dropdown-item>
                            <hr class="dropdown-divider">
                            <b-dropdown-item value="faqja" aria-role="menuitem" @click="gotoPage('/account')">
                                <b-icon icon="home"></b-icon>
                                Faqja juaj
                            </b-dropdown-item>
                            <b-dropdown-item value="favs" aria-role="menuitem" @click="gotoPage('/favorites')">
                                <b-icon icon="heart"></b-icon>
                                Lista e deshirave
                            </b-dropdown-item>
                            <b-dropdown-item value="product" aria-role="menuitem" @click="gotoPageWithParam('account-me-create')" v-if="role == 'seller'">
                                <b-icon icon="plus"></b-icon>
                                Krijo produkt
                            </b-dropdown-item>
                            <b-dropdown-item value="products" aria-role="menuitem" @click="gotoPageWithParam('account-me-edit')" v-if="role == 'seller'">
                                <b-icon icon="pen"></b-icon>
                                Edito produkte
                            </b-dropdown-item>
                            <b-dropdown-item value="bought" aria-role="menuitem" @click="gotoPageWithParam('account-me-orders')" v-if="role == 'seller' || role == 'buyer'">
                                <b-icon icon="book-open"></b-icon>
                                Blerjet tuaja
                            </b-dropdown-item>
                            <hr class="dropdown-divider" aria-role="menuitem">
                            <b-dropdown-item value="settings" v-if="user != 'Not logged in.'" @click="gotoPage('/account/me/settings')">
                                <b-icon icon="mdi-settings"></b-icon>
                                Settings
                            </b-dropdown-item>
                            <b-dropdown-item value="logout" aria-role="menuitem" @click="gotoPage('/account')" v-if="user == 'Not logged in.'">
                                <b-icon icon="login" size="25"></b-icon>
                                Login
                            </b-dropdown-item>
                            <b-dropdown-item value="logout" aria-role="menuitem" @click="logout" v-if="user != 'Not logged in.'">
                                <b-icon icon="logout"></b-icon>
                                Logout
                            </b-dropdown-item>
              </b-dropdown>
              <v-btn class="qs" icon @click.stop="cartush" width="10" height="10">
                <v-icon color="white">
                  mdi-cart
                </v-icon>
              </v-btn>

            </div>
          </div>
        </div>
    </v-app-bar>
    <v-navigation-drawer
      v-model="cartD"
      fixed
      temporary
      right
      color="primary"
    >
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>Shporta</v-list-item-title>
            <v-list-item-subtitle>Max.10</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
      <v-list
        dense
        rounded
      >
          <v-list-item v-for="cartItem in cart" :key="cartItem.prodEmri">
            <v-row justify="start" align="center" style="transition: 0.3s">
              <v-col cols="2" align-self="center">
                <v-avatar rounded color="secondary" size="30">
                  <v-img :src="cartItem.photo"></v-img>
                </v-avatar>
              </v-col>
              <v-col cols="6" align-self="center">
                <v-list-item-title class="qs pb-0"><span class="qs s14">{{cartItem.name}}</span></v-list-item-title>
              </v-col>
              <v-col cols="2">
                <v-list-item-title class="qs pb-0"><span class="qs s14">{{cartItem.quantity}}</span></v-list-item-title>
              </v-col>
              <v-col cols="2">
                <v-btn icon width="25" height="25" @click="updateCart(cartItem.name, 1)">
                  <v-icon color="white" size="20">mdi-plus</v-icon>
                </v-btn>
                <v-btn icon width="25" height="25" @click="updateCart(cartItem.name, -1)">
                  <v-icon color="white" size="20">mdi-minus</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-list-item>
      </v-list>
      <template v-slot:append v-if="checkoutAval">
        <div class="pa-2">
          <p class="qs">Totali: {{sumOfAll}} ALL</p>
          <v-btn block color="white" class="qs red--text text--darken-4" nuxt to="/checkout">
            Checkout
          </v-btn>
         </div>
      </template>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import uklogo from '../assets/img/united-kingdom.png';
import allogo from '../assets/img/albania.png';
import Gradient from '../assets/img/tilda-gradient.png'
import menuLogo from '../assets/img/HBC.png'
import Cookies from 'js-cookie';
import Cookie from 'js-cookie';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
export default {
    data(){
        return{
            items1: [
                { title: 'English', flag: uklogo},
                { title: 'Shqip', flag: allogo},
            ],
            langLogo: uklogo,
            borderChanged: false,
            navigation: false,
            searchQ: '',
            searchOn: false,
            height: null,
            background: Gradient,
            menuLogo: menuLogo,
            answer: false,
            clipped: false,
            drawer: false,
            fixed: false,
            items: [
                {
                icon: 'mdi-apps',
                title: 'Faqja kryesore',
                to: '/'
                },
                {
                icon: 'mdi-chart-bubble',
                title: 'Doktoret',
                to: '/inspire'
                },
                {
                icon: 'mdi-chart-bubble',
                title: 'Teknologjia jone',
                to: '/inspire'
                },
                {
                icon: 'mdi-chart-bubble',
                title: 'Rreth nesh',
                to: '/inspire'
                }
            ],
            maxwidth: 0,
            miniVariant: false,
            right: true,
            cart: false,
            drop1: false,
            drop2: false,
            drop3: false,
            drop4: false,
            keep1: false,
            keep2: false,
            keep3: false,
            keep4: false,
            sToShow: [],
            cart: this.$store.state.users.cart,
            cartD: false,
            itsover: false,
            user: this.$store.state.users.user ? this.$store.state.users.user.email : "Not logged in.",
            role: this.$store.state.users.role ? this.$store.state.users.role : null,
            burner: "Elektronike"
        }
    },
    methods: {
      cartush: function(){
        this.cart = this.$store.state.users.cart;
        
        this.cartD = true;
      },
      gotoPage: function(pageSlug){
          console.log("stuff");
          this.$router.push({path: pageSlug});
      },
      gotoPageWithParam: function(pageName){
          const cookie = Cookie.get("user");
          const cook = JSON.parse(cookie);
          this.$router.push({name: pageName, query: {name: cook.username.toLowerCase()}});
      },
      searchOnCheck: function(){
        if(this.searchOn == false){
          this.searchOn = true;
        } else {
          this.searchOn = false;
        }
      },
      searchGo: function(){

        const redItem = this.sToShow[0];
        this.$router.push({ path: "/search", query: {search: redItem.emri} });

      },
      itemPressed: function(red, emri){
        this.$router.push({ path: "/search", query: {search: emri} });
      },
      sendToMore: function(){
        this.answer = false;

        this.$router.push({ path: '/search', query: { search: this.searchQ } });
      },
      changeType: async function (){
        await this.$store.dispatch("users/change", this.searchQ ? this.searchQ : "");

        this.sToShow = this.$store.state.users.result;
        this.answer = true;
        console.log(this.answer);
        console.log(this.sToShow);
      },
      logout: async function(){
        await this.$store.dispatch("users/logout");
        
        this.user = this.$store.state.users.user ? this.$store.state.users.user.email : "Not logged in.";
        this.role = this.$store.state.users.role ? this.$store.state.users.role : null;

        this.$router.push({path: '/'});
      },
      updateCart: async function(cartEmri, cartTimes){

        var cartW = Cookies.get("cart_hustle");

        if(cartW){
          var cartR = JSON.parse(cartW);
        } else {
          var cartR = [];
        }

        const cartNewDetails = {
          cartEmri: cartEmri,
          cartTimes: cartTimes,
          currentCart: cartR
        }
        await this.$store.dispatch("users/updateCart", cartNewDetails);

        this.cart = this.$store.state.users.cart;
      },
      getCart: function (){
        
        var cartToJSONIFY = Cookies.get('cartToken');
        this.cart = JSON.parse(cartToJSONIFY);
        this.cartD = true;
      },
      sendTo: function(veni){
        this.$router.push({path: veni});
      },
      antiBlur: function (){
        if(this.itsover == true){
          console.log("itsover" + this.itsover);
        } else {
          this.answer = false;
          this.searchQ = "";
        }
          var x = document.getElementById('kerkimi');
          var z = document.getElementById('kerkimi-1');
          var y = document.getElementById('butoni');
          
          x.style.backgroundColor = "#f2f2f2";
          z.style.backgroundColor = "#f2f2f2";
          
      },
      mouseOut: function (){
        const wholeBody = document.getElementById("wholeBody");
        wholeBody.addEventListener("click", () => {
          this.answer = false;
          this.itsover = false;
        });
      },
      changeBorder: function (){
        var x = document.getElementById('kerkimi');
        var z = document.getElementById('kerkimi-1');
          var y = document.getElementById('butoni');
          
          x.style.backgroundColor = "white";
          z.style.backgroundColor = "white";
          
      },
      openElektronike: function(){
        this.burner = "Elektronike";
        this.navigation = false;
      },
      openKancelari: function(){
        this.burner = "Kancelari";
        this.navigation = false;
      },
      openLibra: function(){
        this.burner = "Libra";
        this.navigation = false;
      },
      openKompjutera: function(){
        this.burner = "Kompjutera";
        this.navigation = false;
      },
      openKozmetike: function(){
        this.burner = "Kozmetike";
        this.navigation = false;
      },
      openLodra: function(){
        this.burner = "Lodra";
        this.navigation = false;
      },
      openSport: function(){
        this.burner = "Sport";
        this.navigation = false;
      },
      openMobilje: function(){
        this.burner = "Mobilje";
        this.navigation = false;
      },
      openFashion: function(){
        this.burner = "Fashion";
        this.navigation = false;
      },
    },
    computed: {
      checkoutAval(){
        if((Cookies.get("cart_hustle") == "[]" || !Cookies.get("cart_hustle")) && this.$store.state.users.cart == []){
          return false;
        } if((Cookies.get("cart_hustle") == "[]" || !Cookies.get("cart_hustle")) || this.$store.state.users.cart == []) {
          return false;
        } else {
          return true;
        }
      },
      sumOfAll(){
        var total = 0;
        this.cart.forEach(element => {
          total += (parseInt(element.amount)*parseInt(element.quantity));
        });
        return total;
      }
    },
    mounted(){
      this.height = window.innerHeight * 0.14;
      this.maxwidth = window.innerWidth;
    }
}
</script>

<style scoped>
@media only screen and (min-width: 850px){
  .induldge{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
  }
  .centered{
    height: 90%;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: 15px 0 15px 0;
  }
  .guldge{
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-right: 1px solid #f2f2f2;
  }
  .klav{
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  .riot{
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .searchable{
    border-radius: 5px;
    border-bottom-right-radius: 0px;
    border-top-right-radius: 0px;
    background-color: #f2f2f2;
    border: 1px solid #edf2f7;
    padding: 4px 6px 4px 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s;
  }
  .searchable-1{
    background-color: #f2f2f2;
    border: none;
    padding: 0px 96px 0px 10px;
    transition: 0.4s;
  }
  .searchable-1:focus + .searchable {
    background-color: #f2f2f2;

    border-radius: 5px;
    padding: 0px 96px 0px 5 px;
  }
  .buttonable{
    border-radius: 7px;
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
    padding: 8px 16px 8px 16px;
    background-color: #363f4e;
    transition: 0.4s;

  }
  .buttonable:hover{
    border-radius: 5px;
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
    padding: 8px 16px 8px 16px;
    background-color: #73839e;
  }
  .app-bar-rose{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .header-height{
    padding: 15px 0 15px 0;
  }
  .miniature{
    font-size: 13px;
    color: darkgray;
  }
  .spacer-1{
    display: flex;
  }
  .menu-btn{
    display: flex;
  }
  .link-holder{
    display: flex;
  }
  .link-holder{
    width: 35vw;
  }
  .search-btn{
    display: none;
  }
  .spacer-2{
    display: none;
  }
  .search-input{
    display: block;
    padding-bottom: 3px;
    font-family: 'bl';
    outline: none;
    text-align: center;
    width: 0vw;
  }
  .results{
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border-radius: 5px;
    background-color: white;
    position: absolute;
    top: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: scroll;
    width: 505px;
    min-height: 300px;
    transition: 0.3s;
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
  }
  .results::-webkit-scrollbar{
    display: none;
  }
  .search-p-result{
    cursor: pointer;
    width: 100%;
  }
  .search-p-result:hover{
    background-color: white;
  }
  .listings{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 95%;

  }
  .tile{
    font-size: 13px;
    color: black;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 3px;
    margin-top: 10px;
    background-color: white;
    transition: 0.3s;
    height: 50px;
  }
  .tile p{
    text-align: center;
    padding: 5px 0 5px 10px;
    margin: 0;
  }
  
  .dontchange{
    font-size: 13px;
    color: black;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px;
    margin-top: 6px;
    background-color: white;
    transition: 0.3s;
  }
  .embed{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 850px;
    
  }
  .elem-row{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 23%;
  }
  .main-row{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
  }
  .burger-div{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 5px 3px 0 ;
    height: 100%;
  }
   .burger-div-2{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 5px 0 0 ;
    height: 100%;
    width: 105px;
  }
  .inner-burger{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50%;
  }
  .inner-burger-2{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 36px;
    height: 36px;
  }
  .final-row{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 45%;
    width: 95vw;
  }
  .searchy{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 450px;
    height: 44px;
  }
  .custom-searchy{
    border-bottom-left-radius: 15px;
    border-top-left-radius: 15px;
    padding: 7px 15px 7px 16px;
    background-color: white;
    width: 450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 38px;
  }
  .custom-searchy:focus{
    outline: none;
    text-decoration: none;
  }
  .good-row{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 450px;
    height: 44px;
  }
  .custom-text-field.v-text-field.v-text-field--enclosed .v-input__control {
    height: 38px;
  }
  .custom-text-field.v-text-field.v-text-field--enclosed .v-input__control input{
    font-size: 17px;
    padding: 0 0 1px 0;
  }
  .custom-text-field.v-text-field--solo:not(.v-text-field--solo-flat) > .v-input__control > .v-input__slot {
    box-shadow: none;
    padding: 0;
    margin: 0;
    width: 430px;
  }
  .searchy-btn{
    border-bottom-right-radius: 15px;
    border-top-right-radius: 15px;
    background-color: #363f4e;
    padding: 7px 16px 7px 15px;
  }
  .ersteSpan{
    padding: 0;
    margin: 0;
  }
}
@media only screen and (min-width: 1250px){
  .app-bar-rose{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .header-height{
    padding: 15px 0 15px 0;
  }
  .miniature{
    font-size: 13px;
    color: darkgray;
  }
  .spacer-1{
    display: flex;
  }
  .menu-btn{
    display: flex;
  }
  .link-holder{
    display: flex;
  }
  .link-holder{
    width: 35vw;
  }
  .search-btn{
    display: none;
  }
  .spacer-2{
    display: none;
  }
  .search-input{
    display: block;
    padding-bottom: 3px;
    font-family: 'bl';
    outline: none;
    text-align: center;
    width: 0vw;
  }
  .results{
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border-radius: 5px;
    background-color: white;
    position: absolute;
    top: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: scroll;
    width: 505px;
    min-height: 300px;
    transition: 0.3s;
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
  }
  .results::-webkit-scrollbar{
    display: none;
  }
  .search-p-result{
    cursor: pointer;
    width: 100%;
  }
  .search-p-result:hover{
    background-color: white;
  }
  .listings{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 95%;

  }
  .tile{
    font-size: 13px;
    color: black;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 3px;
    margin-top: 10px;
    background-color: white;
    transition: 0.3s;
    height: 50px;
  }
  .tile p{
    text-align: center;
    padding: 5px 0 5px 10px;
    margin: 0;
  }
  
  .dontchange{
    font-size: 13px;
    color: black;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px;
    margin-top: 6px;
    background-color: white;
    transition: 0.3s;
  }
  .embed{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 1200px;
    
  }
  .elem-row{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 23%;
  }
  .main-row{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
  }
  .burger-div{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 5px 3px 0 ;
    height: 100%;
  }
   .burger-div-2{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 5px 0 0 ;
    height: 100%;
    width: 105px;
  }
  .inner-burger{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50%;
  }
  .inner-burger-2{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 36px;
    height: 36px;
  }
  .final-row{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 45%;
    width: 95vw;
  }
  .searchy{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 450px;
    height: 44px;
  }
  .custom-searchy{
    border-bottom-left-radius: 15px;
    border-top-left-radius: 15px;
    padding: 7px 15px 7px 16px;
    background-color: white;
    width: 450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 38px;
  }
  .custom-searchy:focus{
    outline: none;
    text-decoration: none;
  }
  .good-row{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 450px;
    height: 44px;
  }
  .custom-text-field.v-text-field.v-text-field--enclosed .v-input__control {
    height: 38px;
  }
  .custom-text-field.v-text-field.v-text-field--enclosed .v-input__control input{
    font-size: 17px;
    padding: 0 0 1px 0;
  }
  .custom-text-field.v-text-field--solo:not(.v-text-field--solo-flat) > .v-input__control > .v-input__slot {
    box-shadow: none;
    padding: 0;
    margin: 0;
    width: 430px;
  }
  .searchy-btn{
    border-bottom-right-radius: 15px;
    border-top-right-radius: 15px;
    background-color: #363f4e;
    padding: 7px 16px 7px 15px;
  }
  .ersteSpan{
    padding: 0;
    margin: 0;
  }
}
</style>