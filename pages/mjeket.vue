<template>
  <div class="mjeket">
    <h1 class="mjeket-title qs">Doktoret tane</h1>
    <div class="main-con">
      <v-sheet class="mx-auto main-slide" max-width="90%" color="transparent">
              <v-slide-group :show-arrows="false">
                  <v-slide-item v-for="item in messages" :key="item.name">
                      <v-card height="210" width="300" class="ma-3 py-4 cardy" color="white">
                          <v-row justify="start" align="center" class="ml-4"><v-avatar size="60"><v-img v-src="item.avatar"></v-img></v-avatar><v-card-title class="qs blue--text text--darken-4">{{item.name}}</v-card-title></v-row> 
                          <v-card-title class="qs blue--text text--darken-4">{{item.title}}</v-card-title>
                          <v-card-text class="qs blue--text text--darken-4">{{item.excerpt}}</v-card-text>
                      </v-card>
                  </v-slide-item>
              </v-slide-group>
          </v-sheet>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      messages: [
        {
          avatar: 'https://scontent.ftia12-1.fna.fbcdn.net/v/t1.0-9/35399168_2090624841262130_3423546563677388800_n.jpg?_nc_cat=106&_nc_sid=730e14&_nc_ohc=zwLQsrxuWHoAX_ol8BP&_nc_ht=scontent.ftia12-1.fna&oh=34c8f2cf64d27feb029c54c4483fde2e&oe=5F7AB1DB',
          name: 'Dr. Artan Isaraj',
          title: 'Pediater',
          excerpt: 'PhD + Specializime jashte vendit',
          desc: 'Dr. Artani eshte nje nga te vetmit doktor shqiptar te cilet kujdesen per cdo femije si te ishte i tyri. Nder pacientet e tij te vegjel, asnje nuk ka patur komplikime te metejshme pas fillimit te trajtimit nga Dr. Artani dhe te gjithe e konsiderojne ate si nje ikon shume te dashur.'
        },
        {
          avatar: 'https://scontent.ftia12-1.fna.fbcdn.net/v/t1.0-9/12036428_10207912150064756_3360961615953495277_n.jpg?_nc_cat=111&_nc_sid=174925&_nc_ohc=qPnQ8aNg8_AAX8b3_tr&_nc_oc=AQnoxitl5-J8WIWQyDIy0HyMTzLv6bsMyLh1pn2tuR0Yn2uMV1G4sr-zUfEZBeUOMgg&_nc_ht=scontent.ftia12-1.fna&oh=9d481f2ee9a3b896ec81c11a8cd5d849&oe=5F7D49B5',
          name: 'Dr. Sokol Isaraj',
          title: 'Kirurg plastik',
          excerpt: ' PhD + Specializime jashte vendit',
          desc: 'I vleresuar nga cdo pacient dhe cdo person qe e njeh profesionalisht si dhe personalisht me fjalet me te mira, Dr. Sokol Isaraj eshte padyshim kirurgu me i mire plastik ne Shqiperi, madje ndoshta dhe ne tere Ballkanin. Mijera pacient dhe asnje rast i paperfunduar me sukses jane thjesht 2 nga statistikat qe flasin per nivelin profesional te Dr. Sokolit.'

        },
        {
          avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
          name: 'Dr. Denis Kosovrasti',
          title: 'Kirurg vaskular',
          excerpt: 'PhD + Specializime jashte vendit',
          desc: 'Dr. Artani eshte nje nga te vetmit doktor shqiptar te cilet kujdesen per cdo femije si te ishte i tyri. Nder pacientet e tij te vegjel, asnje nuk ka patur komplikime te metejshme pas fillimit te trajtimit nga Dr. Artani.'
        },
        {
          avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
          name: 'Dr. Odeta Hoxhaj',
          title: 'Gjinekologe',
          excerpt: 'PhD + Specializime jashte vendit',
          desc: 'Dr. Artani eshte nje nga te vetmit doktor shqiptar te cilet kujdesen per cdo femije si te ishte i tyri. Nder pacientet e tij te vegjel, asnje nuk ka patur komplikime te metejshme pas fillimit te trajtimit nga Dr. Artani.'
        },
        {
          avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
          name: 'Dr. Arketa Pllumi',
          title: 'Kardiologe',
          excerpt: 'PhD + Specializime jashte vendit',
          desc: 'Dr. Artani eshte nje nga te vetmit doktor shqiptar te cilet kujdesen per cdo femije si te ishte i tyri. Nder pacientet e tij te vegjel, asnje nuk ka patur komplikime te metejshme pas fillimit te trajtimit nga Dr. Artani.'
        },
        {
          avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
          name: 'Dr. Adela',
          title: 'Hematologe',
          excerpt: 'PhD + Specializime jashte vendit',
          desc: 'Dr. Artani eshte nje nga te vetmit doktor shqiptar te cilet kujdesen per cdo femije si te ishte i tyri. Nder pacientet e tij te vegjel, asnje nuk ka patur komplikime te metejshme pas fillimit te trajtimit nga Dr. Artani.'
        },
        {
          avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
          name: 'Dr. Mirela Rista',
          title: 'Gjinekologe',
          excerpt: 'PhD + Specializime jashte vendit',
          desc: 'Dr. Artani eshte nje nga te vetmit doktor shqiptar te cilet kujdesen per cdo femije si te ishte i tyri. Nder pacientet e tij te vegjel, asnje nuk ka patur komplikime te metejshme pas fillimit te trajtimit nga Dr. Artani.'
        },
        {
          avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
          name: 'Dr. Gerond Kusi',
          title: 'Endokrinolog',
          excerpt: 'PhD + Specializime jashte vendit',
          desc: 'Dr. Artani eshte nje nga te vetmit doktor shqiptar te cilet kujdesen per cdo femije si te ishte i tyri. Nder pacientet e tij te vegjel, asnje nuk ka patur komplikime te metejshme pas fillimit te trajtimit nga Dr. Artani.'
        },
        {
          avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
          name: 'Dr. Ledio Collaku',
          title: 'Reumatolog',
          excerpt: 'PhD + Specializime jashte vendit',
          desc: 'Dr. Artani eshte nje nga te vetmit doktor shqiptar te cilet kujdesen per cdo femije si te ishte i tyri. Nder pacientet e tij te vegjel, asnje nuk ka patur komplikime te metejshme pas fillimit te trajtimit nga Dr. Artani.'
        },
        {
          avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
          name: 'Dr. Anila Kalleshi',
          title: 'Dietologe',
          excerpt: 'PhD + Specializime jashte vendit',
          desc: 'Dr. Artani eshte nje nga te vetmit doktor shqiptar te cilet kujdesen per cdo femije si te ishte i tyri. Nder pacientet e tij te vegjel, asnje nuk ka patur komplikime te metejshme pas fillimit te trajtimit nga Dr. Artani.'
        },
        {
          avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
          name: 'Dr. Suela Sallavaci',
          title: 'ORL',
          excerpt: 'PhD + Specializime jashte vendit',
          desc: 'Dr. Artani eshte nje nga te vetmit doktor shqiptar te cilet kujdesen per cdo femije si te ishte i tyri. Nder pacientet e tij te vegjel, asnje nuk ka patur komplikime te metejshme pas fillimit te trajtimit nga Dr. Artani.'
        },
        {
          avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
          name: 'Dr. Nardi Kola',
          title: 'Kirurg plastik',
          excerpt: 'PhD + Specializime jashte vendit',
          desc: 'Dr. Artani eshte nje nga te vetmit doktor shqiptar te cilet kujdesen per cdo femije si te ishte i tyri. Nder pacientet e tij te vegjel, asnje nuk ka patur komplikime te metejshme pas fillimit te trajtimit nga Dr. Artani.'
        },
        {
          avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
          name: 'Dr. Besmir Grizhja',
          title: 'Kirurg vaskular',
          excerpt: 'PhD + Specializime jashte vendit',
          desc: 'Dr. Artani eshte nje nga te vetmit doktor shqiptar te cilet kujdesen per cdo femije si te ishte i tyri. Nder pacientet e tij te vegjel, asnje nuk ka patur komplikime te metejshme pas fillimit te trajtimit nga Dr. Artani.'
        },
        {
          avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
          name: 'Dr. Elvira Cela',
          title: 'Lab specialist',
          excerpt: 'PhD + Specializime jashte vendit',
          desc: 'Dr. Artani eshte nje nga te vetmit doktor shqiptar te cilet kujdesen per cdo femije si te ishte i tyri. Nder pacientet e tij te vegjel, asnje nuk ka patur komplikime te metejshme pas fillimit te trajtimit nga Dr. Artani.'
        },
      ],
    }),
    head(){
      return{
        titleTemplate: "Mjeket | Klinika Fertility",
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Mjeket me te mire, vetem ne Kliniken Fertility.'
          }
        ]
      }
    }
  }
</script>

<style scoped>
.mjeket{
    height: 100vh;
    width: 100%;
    background: #1e65b8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   
}
.main-con{
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main-slide{
  width: 90%;
}
.expansions{
  width: 70%;
}
.expansion{
  width: 100%;
}
.mjeket-title{
    font-size: 30px;
    color: white;
    text-align: center;
    position: absolute;
    top: 8vh;
}
@media screen and (max-width: 650px) {
    .mjeket{
        height: 120vh;
        width: 100%;
        background: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-image: url(../assets/img/balls2.png);
        background-size: cover;
    }
    .expansions{
      width: 90%;
    }
}
</style>