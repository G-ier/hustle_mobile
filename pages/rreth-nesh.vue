<template>
  <div class="about">
      <div class="about-content">
          <div class="writings">
            <h1 class="a-title">BlejAlb</h1>
            <p class="a-starter">BlejAlb si faqe lindi në Maj 2021 por si koncept, portali ynë i porosive online ishte diskutuar prej shumë kohesh. Arsyeja kryesore e hapjes së faqes ishte shërbimi sa më i shpejtë ndaj klientit, dhe nje menyre e re se si mund ti sherbehet klientit pa pasur ai nevoje te dale nga shtepia.</p>
          </div>
      </div>
      <div class="beide">
          <div class="quality">
                <div class="writings">
                    <h1 class="a-title-2">Per njerezit</h1>
                    <p class="a-middle">Tani porosit vetëm me një klikim dhe në vijmë te ju. Thënë këtë, kryem analizat tona të tregut dhe vumë re se në disa qytete e në shumë fshatra të Shqipërisë, nuk kishte dyqane fizike, të cilat mund t’i plotësonin nevojat banorëve atje, prandaj menduam t’ua dërgonim produktet që ata donin pikërisht në shtëpitë e tyre, kudoqofshin ato nëpër Shqipëri.</p>
                </div>
            </div>
            <div class="end">
                <div class="writings">
                    <h1 class="a-title">Kocepti jone</h1>
                    <p class="a-starter">Koncepti i platformes se BlejAlb eshte te jete nje pike takimi midis shitesit dhe bleresit nje treg ku te dy palet do gjejne ate cfare kerkojne dhe cfare u ka munguar deri me sot. Shitesit do kene mundesi te kene nje dyqan online ku mund te paraqisin produktet qe ata shesin dhe kane mundesi ta promovojne produktin e tyre nepermjet platformes sone. Nderkohe bleresi ka mundesi te zgjedhe midis shume opsionesh qe shitesit ofrojne. Ne garantojme pagesen e sigurt qofte Cash ose me ane te Credit Cards, transportin, dhe sherbimin ne kohe rekord tek klienti.</p>
                </div>
            </div>
      </div>
  </div>
</template>

<script>
export default {
    head(){
        return{
            title: 'Rreth nesh',
            meta: [
                {
                    name: 'description',
                    content: 'Informacione dhe detaje mbi eblej'
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
    color: white;
    margin-bottom: 20px;
}
.a-middle{
    font-family: 'qs';
    font-size: 18px;
    color: white;
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