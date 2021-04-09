<template>
  <div class="about">
      <div class="about-content">
          <div class="writings">
            <h1 class="a-title">Risi ne teknologji</h1>
            <p class="a-starter">Klinika jone ka pershtatur teknologjine me te re te fushes duke sjelle ne fushen mjekesore shqiptare nje risi te nevojitur. Cdo pajisje ose medikament i perdorur importohet nga prodhues gjerman, italian si dhe se fundmi amerikan. Perparesite e nje teknologjie te re jane realisht te dukshme dhe rrisin paresisht kualitetin e trajtimeve e po ashtu efikasitetin e tyre. Arritja jone me e cmuar ne fushen e teknoligjise eshte <span style="font-weight: bold">perdorimi per here te pare ne Shqiperi i pajisjes VASER</span>, e cila i jep njerezve qe probleme dhjamin mundesi te pahasura me pare. VASER nuk eshte e vetmja pajisje qe vjen per here te pare ne Shqiperi, duke qene se laboratori yne i analizave perdor shume aparatura dhe mjete te reja per mjekesine shqiptare.</p>
          </div>
      </div>
      <div class="beide">
          <div class="quality">
                <div class="writings">
                    <h1 class="a-title-2">Mjeket te cileve mund tu besosh shendetin</h1>
                    <p class="a-middle">Pervec <span style="font-weight: bold">arsimimit dhe aftesive te shkelqyera te mjekeve</span>, te cilet jane te akredituar ne shkollat me te mira shqiptare dhe italiane, <span style="font-weight: bold">kujdesi i detajuar drejt pacientit dhe marredhenieve me te</span> eshte nje faktor thelbesor qe i ben mjeket tane te jene me te vecantit ne fushen e tyre. Ne kliniken tone perfshihen vetem dege ne te cilat doktor te kalibrit me te arte, te cilet vene <span style="font-weight: bold">shendetin e pacienteve para cdo perfitimi ose thjeshtesie</span>, mund te punojne.</p>
                </div>
            </div>
            <div class="end">
                <div class="writings">
                    <h1 class="a-title">Deshtimi nuk eshte pjese e planit!</h1>
                    <p class="a-starter">Ne fushen e mjekesise kostoja e gabimeve eshte shume larte, prandaj ne kliniken tone vendi per gabimin nuk ekziston. Nder mbi qindra vizita, rezultatet e deshiruara nga doktoret dhe pacientet jane arritur, duke rezutuar keshtu vetem ne pacient te lumtur. Cdokush brenda dyerve te klinikes sone e kupton ndikimin e nje trajtimi ose operacioni mbi jeten e nje pacienti, duke cuar keshtu ne nje ambient unik profesional te dedikuar arritjes se suksesit mjekesor. Para cdo trajtimi kryhen seanca konsultimi per te gjetur zgjidhjen me efektive te problemit si per te siguruar qe pacientit i nevojitet realisht nje operacion apo nje trajtim i lehte.</p>
                </div>
            </div>
      </div>
  </div>
</template>

<script>
export default {
    head(){
        return{
            title: 'Rreth nesh | Fertility',
            meta: [
                {
                    name: 'description',
                    content: 'Informacione dhe detaje mbi kliniken Fertility'
                }
            ]
        }
    }
}
</script>

<style scoped>
.about{
    min-height: 100vh;
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.about-content{
    height: 105vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(../assets/img/about.png);
    background-size: cover;
    padding-bottom: 100px;
    background-color: #1e65b8;
}
.beide{
    height: 220vh;
    background-image: url(../assets/img/about4.png);
    background-size: cover;
    background-position-y: bottom;
}
.quality{
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
}
.end{
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 115px;
}
.writings{
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.a-title{
    font-family: 'qs';
    font-size: 35px;
    color: #1e65b8;
    margin-bottom: 20px;
}
.a-starter{
    font-family: 'qs';
    font-size: 18px;
    color: #1e65b8;
}
.a-title-2{
    font-family: 'qs';
    font-size: 35px;
    color: #1e65b8;
    margin-bottom: 20px;
}
.a-middle{
    font-family: 'qs';
    font-size: 18px;
    color: #1e65b8;
}
@media only screen and (max-width: 650px) {
    .about-content{
        height: 180vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-image: url(../assets/img/about2.png);
        background-size: cover;
    }
    .beide{
        height: 320vh;
        background-image: url(../assets/img/about5.png);
        background-size: cover;
        background-position-x: right;
    }
    .quality{
        height: 140vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-bottom: 20px;
    }
    .end{
        height: 180vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .a-title{
        color: white;
        font-family: 'qs';
        font-size: 35px;
    }
    .a-starter{
        font-family: 'qs';
        font-size: 18px;
        color: white;
        width: 80%;
    }
    .writings{
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}
</style>