<template>
  <div class="perne">
      <div class="klienti mb-15">
          <h2 class="qs primary--text pa-0 ma-0 s25">Kujdesi ndaj klientëve</h2>
          <p class="qs secondary--text pa-0 ma-0">Faleminderit që keni zgjedhur eblej.al për të bërë blerjet tuaja për pajisje teknologjike. Ne jemi të lumtur që keni zgjedhur dyqanin tonë online dhe jemi vazhdimisht në gatishmëri që tu ndihmojmë që blerja juaj në platformën tonë tu lërë përshtypje sa më të mirë.</p>
          <p class="qs primary--text pa-0 ma-0 mt-2 s20">Për tu njoftuar më shumë me eblej.al, ju lutem lexoni informatat në vijim.</p>
      </div>
      <!--
      <b-collapse
            aria-id="contentIdForA11y2"
            class="panel width80"
            animation="slide"
            id="termat"
            v-model="isOpen1">
            <template #trigger>
                <div
                    class="panel-heading"
                    role="button"
                    aria-controls="contentIdForA11y2">
                    <strong>Termat dhe Kushtet</strong>
                </div>
            </template>
            <div class="pellets secondary--text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br/>
                Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
            </div>
      </b-collapse>
      -->
      <b-collapse
            aria-id="contentIdForA11y2"
            class="panel width80"
            animation="slide"
            id="kthimi"
            v-model="isOpen2">
            <template #trigger>
                <div
                    class="panel-heading"
                    role="button"
                    aria-controls="contentIdForA11y2">
                    <strong>Politikat e kthimit</strong>
                </div>
            </template>
            <div class="pellets secondary--text">
                Procedura e kthimit të mallit bëhet nëpërmjet postierit që keni marrë porosinë. <br/>
                Ju mund të provoni artikullin dhe nëse nuk ju pëlqen, keni problem me numrin e këpucës, problem me masën e veshjes apo artikulli nuk është në gjendjen e njëjtë me atë të paraqitur në foto, jeni të lutur ta ktheni atë.<br/>
                Për artikullin që ju dëshironi të ndërroni numër ose ngjyrë ju do të paguani sërish koston e transportit.<br/>
                Për artikullin që ju dëshironi ta ndërroni me një artikull që kushton më shumë ju do të paguani diferencën (artikulli 2 – artikulli 1) dhe koston e transportit.<br/>
                Getat, Çantat, Kuletat, Kapelet, Artikujt Partywear, Mbathjet Intimo, Korset, Bizhuteritë, Parfumet, Syzet, Produktet e kujdesit të këpucëve as nuk kthehen dhe as nuk ndërrohen.<br/>
                Rroba banjot do të ndërrohen por jo kthehen!<br/>
                Ndërrimin e artikujve në numër/ngjyrë/model ose kthimin e tyre duhet ta bëni brenda një afati prej 14 ditësh kalendarike nga data e blerjes së artikujve. Artikujt duhet të kenë etiketën ose paketimin përkatës dhe të mos jenë përdorur ose dëmtuar. Gjithashtu artikujt duhet të jenë të shoqëruar me kuponin origjinal tatimor që vërteton blerjen e artikujve. Pa kupon tatimor origjinal nuk kryhet procedura e ndërrimit ose kthimit.
            </div>
      </b-collapse>  
      <b-collapse
            aria-id="contentIdForA11y2"
            class="panel width80"
            animation="slide"
            id="qa"
            v-model="isOpen3">
            <template #trigger>
                <div
                    class="panel-heading"
                    role="button"
                    aria-controls="contentIdForA11y2">
                    <strong>Pyetje & pergjigje të shpeshta</strong>
                </div>
            </template>
            <div class="pellets secondary--text">
                A kryeni dërgesa jashtë Shqipërisë? <br/>
                Jo, faqja e blerjeve online nuk kryen dërgesa jashtë territorit të Republikës së Shqipërisë!<br/><br/>

                Në çfarë rastesh mund të kthehet një artikull?<br/>
                Artikulli mund të kthehet në ato raste kur:<br/>
                a) Nuk ju pëlqen;<br/>
                b) Artikulli nuk ju bën;<br/>
                c) Nuk është i njëjtë me atë që është shfaqur në foto<br/>
                d) Në rast se artikulli ka probleme lehtësisht të evidentueshme, si ngjyra, shqepje, lidhëset etj.<br/><br/>

                Për sa kohë vjen porosia?<br/>
                Porosia vjen tek ju:<br/>
                Brenda Tiranës: Kohëzgjatja e procesit: brenda 24 orëve të ditës së punës.<br/>
                Jashtë Tiranës: Kohëzgjatja e procesit: 24-48 orë të ditës së punës. Pra në rast se porosia bëhet ditën e hëne ajo vjen të martën ose të mërkurën dhe në rast se porosia bëhet ditën e premte ajo vjen të hënën ose të martën për arsye se dita e shtunë dhe ajo e dielë konsiderohen si ditë pushimi nga posta.
<br/><br/>
                Si të kontaktoj me postierin?<br/>
                Ju lutem na kontaktoni ne dhe më pas ne do të kontaktojmë me postierin për çdo vonesë të mallit tuaj.<br/><br/>

                Cila është metoda e pagesës?<br/>
                Metoda e pagesës është e thjeshtë dhe mjaft praktike. BlejAlb ofron pagesa me kartë krediti apo debiti, ose bëhet ME PARA NË DORE (CASH) në momentin e marrjes së mallit!
            </div>
      </b-collapse>  
  </div>
</template>

<script>
export default {
    mounted() {
        this.$nextTick(() => {
            if(this.$route.hash == 'kthimi'){
                const el = document.querySelector("#"+this.$route.hash);

                this.isOpen2 = true;

                el && el.scrollIntoView(); 
            } else if(this.$route.hash == 'qa'){
                const el = document.querySelector("#"+this.$route.hash);

                this.isOpen3 = true;

                el && el.scrollIntoView(); 
            }
        })
    },
    data(){
        return{
            isOpen1: false,
            isOpen2: false,
            isOpen3: false,
        }
    },
    head(){
        return{
            title: 'Kujdesi ndaj klientit',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Kujdesi ndaj klientit'
                }
            ]
        }
    }
}
</script>

<style scoped>
.perne{
    background-color: white;
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100vw;
    padding: 25px 0 35px;
}
.klienti{
    background-color: white;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}
.pellets{
    width: 70%;
    padding: 15px 25px 15px 25px;
    font-family: 'qs';
}
.width80{
    width: 70%;
}
</style>