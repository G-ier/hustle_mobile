<template>
  <div class="about">
      <div class="about-content">
          <div class="writings">
            <h1 class="a-title">Risi ne teknologji</h1>
            <p class="a-starter">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus accusamus, natus molestiae eius illo deserunt rem. Quidem saepe nihil vero doloribus quas tenetur veritatis ab facere, hic qui quaerat tempora!</p>
          </div>
      </div>
      <div class="beide">
          <div class="quality">
                <div class="writings">
                    <h1 class="a-title-2">Persona pergjegjes</h1>
                    <p class="a-middle">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, impedit nisi laudantium minus harum vitae nemo repudiandae laborum excepturi quas quaerat totam in sunt magnam vel dolorum repellendus consequuntur optio.</p>
                </div>
            </div>
            <div class="end">
                <div class="writings">
                    <h1 class="a-title">Deshtimi nuk eshte pjese e planit!</h1>
                    <p class="a-starter">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, libero eum! Ipsum delectus, reiciendis quisquam laboriosam alias architecto quis provident reprehenderit laudantium in exercitationem excepturi, perspiciatis eos dolorum aut quod labore corporis eius nam facilis.</p>
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