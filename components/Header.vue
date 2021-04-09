<template>
  <nav>
      <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      temporary
      color="red darken-4"
    >
      <v-img :aspect-ratio="16/9" class="bg-secondary">

      </v-img>
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
          <v-list-item to="/kategorite/elektronike/lojra" router exact active-class="white--text">
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
          <v-list-item to="/kategorite/kancelari/lojra" router exact active-class="white--text">
            <v-list-item-action>
                <v-icon>mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="v-fsm">Video-Lojra</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/kategorite/kancelari/makina" router exact active-class="white--text">
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
              <v-list-item-title class="v-fsm">Elektronike</v-list-item-title>
          </template>
          <v-list-item to="/kategorite/libra/" router exact active-class="white--text">
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
          <v-list-item to="/kategorite/kozmetike/" router exact active-class="white--text">
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
          <v-list-item to="/kategorite/moblije/dyshek" router exact active-class="white--text">
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
      <v-list-item to="/account" router exact>
        <v-list-item-action>
            <v-icon>mdi-login</v-icon>
        </v-list-item-action>
        <v-list-item-content>
            <v-list-item-title class="v-fsm">Faqja e klientit</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item to="/account/register" router exact>
        <v-list-item-action>
            <v-icon>mdi-account-plus</v-icon>
        </v-list-item-action>
        <v-list-item-content>
            <v-list-item-title class="v-fsm">Behu shites</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item to="/rreth-nesh" router exact>
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
      :height="height"
      elevation="6"
    >
      <v-skeleton-loader
        class="mx-auto"
        max-width="300"
        type="card"
        loading
      ></v-skeleton-loader>
      <div class="embed">
        <div class="elem-row">
          <PreHeader />
        </div>
        <div class="main-row">
          <div class="burger-div">
            <div class="inner-burger pt-1">
              <v-btn icon class="btn-c-o menu-btn ml-2" @click.stop="drawer = !drawer" height="30" width="30">
                <v-icon color="white" size="28">mdi-menu</v-icon>
              </v-btn>
            </div>
          </div>
          <v-spacer class="spacer-1"></v-spacer>
          <v-toolbar-title><nuxt-link to="/" class="btn-c-o"><svg
          class="svg-logo"
          xmlns:osb="http://www.openswatchbook.org/uri/2009/osb"
          xmlns:dc="http://purl.org/dc/elements/1.1/"
          xmlns:cc="http://creativecommons.org/ns#"
          xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
          xmlns:svg="http://www.w3.org/2000/svg"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
          xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
          width="30"
          height="30"
          viewBox="0 0 7.9374997 7.9374997"
          version="1.1"
          id="svg8"
          inkscape:version="1.0.1 (3bc2e813f5, 2020-09-07)"
          sodipodi:docname="logo.svg">
          <defs
            id="defs2">
            <linearGradient
              id="linearGradient2852"
              osb:paint="solid">
              <stop
                style="stop-color:#1e65b8;stop-opacity:1;"
                offset="0"
                id="stop2850" />
            </linearGradient>
            <linearGradient
              id="linearGradient865"
              osb:paint="solid">
              <stop
                style="stop-color:#2c5aa0;stop-opacity:1;"
                offset="0"
                id="stop863" />
            </linearGradient>
          </defs>
          <sodipodi:namedview
            id="base"
            pagecolor="#ffffff"
            bordercolor="#666666"
            borderopacity="1.0"
            inkscape:pageopacity="0.0"
            inkscape:pageshadow="2"
            inkscape:zoom="7.9195959"
            inkscape:cx="2.6324468"
            inkscape:cy="33.372111"
            inkscape:document-units="mm"
            inkscape:current-layer="layer1"
            inkscape:document-rotation="0"
            showgrid="false"
            inkscape:window-width="1431"
            inkscape:window-height="1030"
            inkscape:window-x="96"
            inkscape:window-y="0"
            inkscape:window-maximized="0"
            units="px" />
          <metadata
            id="metadata5">
            <rdf:RDF>
              <cc:Work
                rdf:about="">
                <dc:format>image/svg+xml</dc:format>
                <dc:type
                  rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
                <dc:title></dc:title>
              </cc:Work>
            </rdf:RDF>
          </metadata>
          <g
            inkscape:label="Layer 1"
            inkscape:groupmode="layer"
            id="layer1"
            transform="translate(-71.534172,-111.45987)">
            <path
              style="fill:#1e65b8;fill-opacity:1;stroke:#1e65b8;stroke-width:0;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
              d="m 72.641565,116.58345 c -1.043791,0.48503 -0.971296,1.88872 0.01848,2.33031 0.922955,0.31512 1.761957,-0.42682 2.328349,-1.10967 -0.619757,-0.7322 -1.466453,-1.60196 -2.346827,-1.22064 z"
              id="path16"
              sodipodi:nodetypes="cccc" />
            <path
              style="fill:#1e65b8;fill-opacity:1;stroke-width:0.0184867"
              d="m 72.876851,118.94763 c -0.455792,-0.0914 -0.828951,-0.4689 -0.93502,-0.94605 -0.04019,-0.18077 -0.02731,-0.48329 0.02715,-0.63758 0.130345,-0.36939 0.426898,-0.67334 0.774029,-0.79335 0.18119,-0.0627 0.512405,-0.0622 0.697452,0.002 0.325869,0.11137 0.643735,0.32509 1.003877,0.67504 0.180102,0.17499 0.502157,0.53773 0.502157,0.5656 0,0.0122 -0.139285,0.16118 -0.309522,0.33105 -0.422201,0.42131 -0.733803,0.63415 -1.104117,0.75419 -0.120091,0.0389 -0.191178,0.0489 -0.378819,0.0535 -0.127043,0.003 -0.251775,0.002 -0.277185,-0.004 z"
              id="path20" />
            <path
              style="fill:#2c5aa0;stroke-width:0.0130722"
              d="m 72.813296,118.9235 c -0.433025,-0.11347 -0.791399,-0.5124 -0.871389,-0.96996 -0.0233,-0.13329 -0.01906,-0.36355 0.0091,-0.49385 0.05447,-0.25213 0.264518,-0.55696 0.499193,-0.72439 0.104653,-0.0748 0.247263,-0.14602 0.344294,-0.17222 0.118431,-0.032 0.36759,-0.0389 0.507844,-0.0145 0.343035,0.0603 0.753403,0.32244 1.189059,0.75991 0.217622,0.2185 0.437732,0.47215 0.437732,0.50441 0,0.0296 -0.434987,0.46738 -0.614416,0.61839 -0.369871,0.31132 -0.71534,0.47881 -1.043909,0.50607 -0.223985,0.0185 -0.34794,0.0149 -0.457497,-0.014 z"
              id="path28" />
            <path
              style="fill:#1e65b8;fill-opacity:1;stroke:#1e65b8;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
              d="m 72.813296,118.9235 c -0.432387,-0.11331 -0.791328,-0.51198 -0.870947,-0.96733 -0.02479,-0.14179 -0.01864,-0.38289 0.01317,-0.51627 0.09826,-0.41198 0.51459,-0.81974 0.909067,-0.89042 0.196942,-0.0352 0.46369,-0.015 0.627049,0.0479 0.416381,0.15991 0.857112,0.51511 1.343669,1.08286 0.05159,0.0603 0.0938,0.11991 0.0938,0.13268 0,0.0297 -0.434588,0.46719 -0.614415,0.61854 -0.369872,0.31133 -0.715341,0.47878 -1.043907,0.50605 -0.223988,0.0185 -0.347945,0.0149 -0.457499,-0.014 z"
              id="path30" />
            <path
              style="fill:#2c5aa0;stroke-width:0.0631345"
              d=""
              id="path32"
              transform="scale(0.26458333)" />
            <path
              style="fill:#2c5aa0;stroke-width:0.0631345"
              d=""
              id="path34"
              transform="scale(0.26458333)" />
            <path
              style="fill:#2c5aa0;stroke-width:0.0631345"
              d=""
              id="path36"
              transform="scale(0.26458333)" />
            <path
              style="fill:#2c5aa0;stroke-width:0.0631345"
              d=""
              id="path38"
              transform="scale(0.26458333)" />
            <path
              style="font-variation-settings:normal;opacity:1;vector-effect:none;fill:#1e65b8;fill-opacity:1;stroke:#1e65b8;stroke-width:0;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;stop-color:#000000;stop-opacity:1"
              d="m 74.527094,114.45155 c 0.113218,-0.43275 0.511554,-0.79199 0.966533,-0.87168 0.141662,-0.0247 0.382575,-0.0187 0.515837,0.0132 0.411605,0.0984 0.81904,0.51504 0.88965,0.90985 0.03527,0.19711 0.01494,0.46407 -0.04776,0.62758 -0.159792,0.41673 -0.514677,0.85783 -1.081954,1.3448 -0.06016,0.0515 -0.119807,0.0939 -0.132568,0.0939 -0.02965,0 -0.466771,-0.43495 -0.618006,-0.61493 -0.311061,-0.37019 -0.478391,-0.71595 -0.505624,-1.0448 -0.01856,-0.22418 -0.01481,-0.34824 0.01388,-0.4579 z"
              id="path30-9" />
            <path
              style="font-variation-settings:normal;opacity:1;vector-effect:none;fill:#1e65b8;fill-opacity:1;stroke:#1e65b8;stroke-width:0;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;stop-color:#000000;stop-opacity:1"
              d="m 78.282654,116.67659 c 0.432389,0.11332 0.79133,0.51199 0.870948,0.96734 0.02479,0.14181 0.01864,0.38292 -0.01318,0.51629 -0.09826,0.41196 -0.514591,0.81975 -0.909067,0.8904 -0.196944,0.0352 -0.463693,0.015 -0.627052,-0.0479 -0.416379,-0.15993 -0.85711,-0.51511 -1.343667,-1.08286 -0.05159,-0.0603 -0.0938,-0.11993 -0.0938,-0.1327 0,-0.0297 0.434587,-0.46715 0.614414,-0.61851 0.36987,-0.31133 0.715342,-0.47881 1.043909,-0.50605 0.223986,-0.0185 0.347944,-0.0149 0.457501,0.014 z"
              id="path30-8" />
          </g>
          </svg>
          <span class="ersteSpan white--text qs ml-1">COMPANY LOGO</span></nuxt-link></v-toolbar-title>
          <v-spacer />
          <div class="link-holder">
            <div class="links ">
              <v-btn class="qs btn-c-o blue--text" text @mouseenter="drop1 = true; keep1 = true; drop2 = false; keep2 = false; drop3 = false; keep3 = false;" @mouseleave="drop = false"><nuxt-link to="/sherbimet" class="qs btn-c-o black--text" :class="{'blue--text text--darken-4': keep1}">Sherbimet mjekesore</nuxt-link></v-btn>
              <v-btn class="qs btn-c-o blue--text" text @mouseenter="drop4 = false; keep4 = false; drop3 = false; keep3 = true; drop2 = false; keep2 = false; drop1 = false; keep1 = false;" @mouseleave="drop3 = false; keep3 = false; drop2 = false; keep2 = false; drop1 = false; keep1 = false;"><nuxt-link to="/rreth-nesh/" class="qs btn-c-o black--text" :class="{'blue--text text--darken-4': keep3}">Rreth nesh</nuxt-link></v-btn>
            </div>
            <div class="dropdown" :class="{'dropshow': drop1 == true, 'dropshow': keep1 == true}" @mouseleave="keep1 = false">
              <div class="s1" :class="{'ON': keep1}">
                <div class="center-spaz-1">
                  <div class="content-block">
                    <h4 class="cb-title">Pediatri</h4>
                    <ul class="cb-links">
                      <li class="cb-link"><nuxt-link to="/sherbimet/pediatri" class="btn-c-o qs"><span class="linkus">Shikoni sherbimin</span></nuxt-link></li>
                      <li class="cb-link"><nuxt-link to="/sherbimet/pediatri/paketat" class="btn-c-o qs"><span class="linkus">Shikoni paketat</span></nuxt-link></li>
                      <li class="cb-link"><nuxt-link to="/rezervo" class="btn-c-o qs white--text"><span class="linkus">Rezervo tani</span></nuxt-link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="s2" :class="{'ON': keep1}">
                <div class="center-spaz-1">
                  <div class="content-block">
                    <h4 class="cb-title">Kirurgji plastike</h4>
                    <ul class="cb-links">
                      <li class="cb-link"><nuxt-link to="/sherbimet/kirurgji-plastike" class="btn-c-o qs"><span class="linkus">Shikoni sherbimin</span></nuxt-link></li>
                      <li class="cb-link"><nuxt-link to="/sherbimet/kirurgji-plastike/paketat" class="btn-c-o qs"><span class="linkus">Shikoni paketat</span></nuxt-link></li>
                      <li class="cb-link"><nuxt-link to="/rezervo" class="btn-c-o qs white--text"><span class="linkus">Rezervo tani</span></nuxt-link></li>
                    </ul>
                  </div> 
                </div>
              </div>
              <div class="s2" :class="{'ON': keep1}">
                <div class="center-spaz-1">
                  <div class="content-block">
                    <h4 class="cb-title">Kirurgji vaskulare</h4>
                    <ul class="cb-links">
                      <li class="cb-link"><nuxt-link to="/sherbimet/kirurgji-vaskulare" class="btn-c-o qs"><span class="linkus">Shikoni sherbimin</span></nuxt-link></li>
                      <li class="cb-link"><nuxt-link to="/sherbimet/kirurgji-vaskulare/paketat" class="btn-c-o qs"><span class="linkus">Shikoni paketat</span></nuxt-link></li>
                      <li class="cb-link"><nuxt-link to="/rezervo" class="btn-c-o qs white--text"><span class="linkus">Rezervo tani</span></nuxt-link></li>                </ul>
                  </div>
                </div>
              </div>
              <div class="s2" :class="{'ON': keep1}">
                <div class="center-spaz-1">
                  <div class="content-block">
                    <h4 class="cb-title">Kardiologji</h4>
                    <ul class="cb-links">
                      <li class="cb-link"><nuxt-link to="/sherbimet/kardiologji" class="btn-c-o qs"><span class="linkus">Shikoni sherbimin</span></nuxt-link></li>
                      <li class="cb-link"><nuxt-link to="/sherbimet/kardiologji/paketat" class="btn-c-o qs"><span class="linkus">Shikoni paketat</span></nuxt-link></li>
                      <li class="cb-link"><nuxt-link to="/rezervo" class="btn-c-o qs white--text"><span class="linkus">Rezervo tani</span></nuxt-link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="s2" :class="{'ON': keep1}">
                <div class="center-spaz-1">
                  <div class="content-block">
                    <h4 class="cb-title">Laborator</h4>
                    <ul class="cb-links">
                      <li class="cb-link"><nuxt-link to="/sherbimet/kardiologji" class="btn-c-o qs"><span class="linkus">Shikoni sherbimin</span></nuxt-link></li>
                      <li class="cb-link"><nuxt-link to="/sherbimet/kardiologji/paketat" class="btn-c-o qs"><span class="linkus">Shikoni paketat</span></nuxt-link></li>
                      <li class="cb-link"><nuxt-link to="/rezervo" class="btn-c-o qs white--text"><span class="linkus">Rezervo tani</span></nuxt-link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="s2" :class="{'ON': keep1}">
                <div class="center-spaz-1">
                  <div class="content-block">
                    <h4 class="cb-title">Hematologji</h4>
                    <ul class="cb-links">
                      <li class="cb-link"><nuxt-link to="/sherbimet/hematologji" class="btn-c-o qs"><span class="linkus">Shikoni sherbimin</span></nuxt-link></li>
                      <li class="cb-link"><nuxt-link to="/sherbimet/hematologji/paketat" class="btn-c-o qs"><span class="linkus">Shikoni paketat</span></nuxt-link></li>
                      <li class="cb-link"><nuxt-link to="/rezervo" class="btn-c-o qs white--text"><span class="linkus">Rezervo tani</span></nuxt-link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="s2" :class="{'ON': keep1}">
                <div class="center-spaz-1">
                  <div class="content-block">
                    <h4 class="cb-title">Endokrinologji</h4>
                    <ul class="cb-links">
                      <li class="cb-link"><nuxt-link to="/sherbimet/endokrinologji" class="btn-c-o qs"><span class="linkus">Shikoni sherbimin</span></nuxt-link></li>
                      <li class="cb-link"><nuxt-link to="/sherbimet/endokrinologji/paketat" class="btn-c-o qs"><span class="linkus">Shikoni paketat</span></nuxt-link></li>
                      <li class="cb-link"><nuxt-link to="/rezervo" class="btn-c-o qs white--text"><span class="linkus">Rezervo tani</span></nuxt-link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="s2" :class="{'ON': keep1}">
                <div class="center-spaz-1">
                  <div class="content-block">
                    <h4 class="cb-title">Gjinekologji</h4>
                    <ul class="cb-links">
                      <li class="cb-link"><nuxt-link to="/sherbimet/gjinekologji" class="btn-c-o qs"><span class="linkus">Shikoni sherbimin</span></nuxt-link></li>
                      <li class="cb-link"><nuxt-link to="/sherbimet/gjinekologji/paketat" class="btn-c-o qs"><span class="linkus">Shikoni paketat</span></nuxt-link></li>
                      <li class="cb-link"><nuxt-link to="/rezervo" class="btn-c-o qs white--text"><span class="linkus">Rezervo tani</span></nuxt-link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="s2" :class="{'ON': keep1}">
                <div class="center-spaz-1">
                  <div class="content-block">
                    <h4 class="cb-title">Dietologji</h4>
                    <ul class="cb-links">
                      <li class="cb-link"><nuxt-link to="/sherbimet/dietologji" class="btn-c-o qs"><span class="linkus">Shikoni sherbimin</span></nuxt-link></li>
                      <li class="cb-link"><nuxt-link to="/sherbimet/dietologji/paketat" class="btn-c-o qs"><span class="linkus">Shikoni paketat</span></nuxt-link></li>
                      <li class="cb-link"><nuxt-link to="/rezervo" class="btn-c-o qs white--text"><span class="linkus">Rezervo tani</span></nuxt-link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="s2" :class="{'ON': keep1}">
                <div class="center-spaz-1">
                  <div class="content-block">
                    <h4 class="cb-title">O.R.L</h4>
                    <ul class="cb-links">
                      <li class="cb-link"><nuxt-link to="/sherbimet/ORL" class="btn-c-o qs"><span class="linkus">Shikoni sherbimin</span></nuxt-link></li>
                      <li class="cb-link"><nuxt-link to="/sherbimet/ORL/paketat" class="btn-c-o qs"><span class="linkus">Shikoni paketat</span></nuxt-link></li>
                      <li class="cb-link"><nuxt-link to="/rezervo" class="btn-c-o qs white--text"><span class="linkus">Rezervo tani</span></nuxt-link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <v-spacer class="spacer-2"></v-spacer>
          <div class="burger-div">
            <div class="inner-burger">
              <v-btn class="qs" icon @click.stop="cartush" width="0" height="0">
                <v-icon color="white">
                  mdi-cart
                </v-icon>
              </v-btn>
            </div>
          </div>
        </div>
        <div class="final-row">
          <div class="good-row">
            <div class="searchy">
              <div class="qs custom-searchy">
                <v-text-field placeholder="Kerko per produkte" class="custom-text-field" color="black" v-model="searchQ" clearable solo dense light rounded height="38" @click:clear="() => {answer = false; searchQ = '';}" @input="changeType" @blur="()=>{answer = false; searchQ = '';}"></v-text-field>
              </div>
              <button class="btn-c-o qs searchy-btn" @click="searchGo"><v-icon color="white">mdi-magnify</v-icon></button>
            </div>
            <div class="results" v-if="answer == true">
              <div class="listings">
                <div class="tile" v-for="ting in sToShow.slice(0, 4)" :key="ting.emri">
                  <p class="qs search-p-result" @click="sendTo(ting.veni)">{{ting.emri}}</p>
                </div>
                <div class="dontchange" style="display: flex; justify-content: center; align-items: center;">
                  <v-btn small class="white--text rounded-lg" color="secondary" @click="sendToMore">More</v-btn>
                </div>
              </div>
            </div>
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
            <v-list-item-title>Cart</v-list-item-title>
            <v-list-item-subtitle>Manage your items</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
      <v-list
        dense
        rounded
      >
          <v-list-item v-for="cartItem in cart" :key="cartItem.prodEmri">
            <v-row justify="start" align="center">
              <v-col cols="8" align-self="center">
                <v-list-item-title class="qs pb-1"><span class="qs s14">{{cartItem.prodEmri}}: {{cartItem.prodTimes}}</span></v-list-item-title>
              </v-col>
              <v-col cols="2">
                <v-btn icon width="25" height="25" @click="updateCart(cartItem.prodEmri, - 1)">
                  <v-icon color="white" size="20">mdi-minus</v-icon>
                </v-btn>
              </v-col>
              <v-col cols="2">
                <v-btn icon width="25" height="25" @click="updateCart(cartItem.prodEmri, 1)">
                  <v-icon color="white" size="20">mdi-plus</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block color="white" class="qs red--text text--darken-4" nuxt to="/checkout">
            Checkout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Gradient from '../assets/img/tilda-gradient.png'
import menuLogo from '../assets/img/HBC.png'
import PreHeader from './PreHeader';
import Cookies from 'js-cookie';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
export default {
    components: {
      PreHeader,
    },
    data(){
        return{
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
        }
    },
    methods: {
      cartush: async function(){
        this.cart = this.$store.state.users.cart;
        
        this.cartD = true;
      },
      searchOnCheck: function(){
        if(this.searchOn == false){
          this.searchOn = true;
        } else {
          this.searchOn = false;
        }
      },
      searchGo: async function(){
        await this.$store.dispatch("users/search", this.searchQ);

        this.answer = true;

        if(this.$store.state.users.red == null){
          this.$router.push({ path: '/search', query: { search: this.searchQ } });
        } else {
          this.$router.push({ path: this.$store.state.users.red });
        }

      },
      sendToMore: function(){
        this.answer = false;

        this.$router.push({ path: '/search', query: { search: this.searchQ } });
      },
      changeType: async function (){
        await this.$store.dispatch("users/change", this.searchQ);

        this.sToShow = this.$store.state.users.result;
        this.answer = true;
        console.log(this.answer);
        console.log(this.sToShow);
      },
      updateCart: async function(cartEmri, cartTimes){

        var cartW = Cookies.get("cartToken");

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
        console.log(JSON.parse(cartToJSONIFY));
      },
      sendTo: function(veni){
        this.$router.push({name: veni});
      }
    },
    mounted(){
      this.height = window.innerHeight * 0.19;
    }
}
</script>

<style>
.results{
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-radius: 15px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 30vh;
  transition: 0.3s;
}
.search-p-result{
  cursor: pointer;
}
.listings{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 90%;
}
.tile{
  font-size: 13px;
  color: black;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 3px;
  margin-top: 10px;
  background-color: white;
  transition: 0.3s;
}
.tile p{
  text-align: center;
  padding: 5px 0 5px 10px;
  margin: 0;
}
.tile:hover{
  font-size: 13px;
  display: flex;
  justify-content: flex-start;
  background-color: gray;
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
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
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
  justify-content: center;
  align-items: center;
  width: 95vw;
  height: 32%;
}
.burger-div{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 100%;
}
.inner-burger{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 50%;
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
  width: 95%;
}
.custom-searchy{
  border-bottom-left-radius: 15px;
  border-top-left-radius: 15px;
  padding: 7px 15px 7px 16px;
  background-color: white;
  width: 100%;
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
  width: 100%;
  height: 45px;
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
  width: 67vw;
}
.searchy-btn{
  border-bottom-right-radius: 15px;
  border-top-right-radius: 15px;
  background-color: #363f4e;
  padding: 7px 16px 7px 15px;
}
.toolbar-s{
  position: absolute;
  z-index: -10;
  top: 100%;
  left: 0;
  width: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
}
.toolbar-show{
  width: 100%;
  z-index: 10;
}
.dropdown{
  position: absolute;
  width: 100%;
  height: 0vh;
  background-color: rgba(30, 101, 184, 0.9);
  left: 0;
  top: 7.9vh;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  align-items: center;
  transition: 0.5s;
  padding: 0 0 0 0;
}
.dropshow{
  height: 70vh;
  padding: 10px 0 10px 0;
}
.dropoff{
  height: 0px;
}
.dropshow-2{
  height: 50vh;
  padding: 10px 0 10px 0;
}
.s1{
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
}
.s2{
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
}
.ON{
 display: flex;
 animation: menuIntro 0.5s;
}
.OFF{
  animation: menuOutro 0.5s;
}
.OFF-2{
  display: none;
}
.center-spaz-1{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.center-spaz-2{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.content-block{
  padding: 10px 0 10px 0;

}
.cb-title{
  font-family: 'fr';
  color: white;
  font-size:25px;
  margin-bottom: 15px;
}
.cb-links{
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
}
.v-application ul {
  padding-left: 0;
}
.cb-link{
  text-decoration: none;
  color: white;
  font-family: 'fr';
  font-size: 18px;
}
.linkus{
  color: white;
}
.linkus:hover{
  color: #f1f1f1;
}
.ersteSpan{
    color: white;
    font-size: 1.6em;
}
.zweiteSpan{
    color: #2cc9cb;
    font-size: 1.4em;
}
.link-holder{
  width: 45vw;
}
.links{
  display: flex;
  position: relative;
  left: 4%;
  justify-content: space-between;
  align-items: center;
  width: 90%;
}
.spacer-1{
  display: none;
}
.link{
  margin-top: 5px;
  font-size: 18px;
  color: black;
  text-decoration: none;
  text-align: center;
}
.link:hover{
  color: #2cc9cb;
}
.link:active{
  color: #2cc9cb;
}
.search-input{
  padding-bottom: 3px;
  padding-right: 30px;
  font-family: 'bl';
  outline: none;
  text-align: center;
  width: 0vw;
}
.search{
  height: 90%;
  width: 0vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.menu-btn{
  display: none;
}
.link-holder{
  display: block;
}
.search-btn{
  display: none;
}
.spacer-2{
  display: block;
}
@media only screen and (max-width: 650px){
  .ersteSpan{
      color: 	#1e65b8;
      font-size: 32px;
      font-weight: bold;
  }
  .zweiteSpan{
      color: #2cc9cb;
      font-size: 25px;
  }
  .links-holder{
    display: none;
  }
  .svg-logo{
    display: none;
  }
  .spacer-1{
    display: block;
  }
  .spacer-2{
    display: none;
  }
  .search-input{
    display: none;
  }
  .menu-btn{
    display: block;
  }
  .link-holder{
    display: none;
  }
  .search-btn{
    display: block;
  }
}
@media only screen and (min-width: 650px){
  .links-holder{
    display: none;
  }
  .spacer-1{
    display: block;
  }
  .spacer-2{
    display: none;
  }
  .search-input{
    display: none;
  }
  .menu-btn{
    display: block;
  }
  .link-holder{
    display: none;
  }
  .search-btn{
    display: block;
  }
}
@media only screen and (min-width: 1000px){
  .spacer-1{
    display: none;
  }
  .search-input{
    display: block;
  }
  .menu-btn{
    display: none;
  }
  .link-holder{
    display: flex;
  }
  .link-holder{
    width: 45vw;
  }
  .search-btn{
    display: none;
  }
  .spacer-2{
    display: block;
  }
  .search-input{
    padding-bottom: 3px;
    margin-right: 30px;
    font-family: 'bl';
    outline: none;
    text-align: center;
    width: 2vw;
  }
}
@media only screen and (min-width: 1200px){
  .spacer-1{
    display: none;
  }
  .menu-btn{
    display: none;
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
    display: block;
  }
  .search-input{
    display: block;
    padding-bottom: 3px;
    font-family: 'bl';
    outline: none;
    text-align: center;
    width: 0vw;
  }
}
</style>