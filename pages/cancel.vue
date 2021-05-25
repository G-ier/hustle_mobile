<template>
  <div class="main">
      <p class="qs pa-0 ma-0 secondary--text">Shporta juaj eshte bosh :(, por mos u ndjeni keq</p>
      <v-btn text class="primary--text btn-c-o qs rounded-lg mt-6" nuxt to="/worthit">Vazhdoni kerkimin tuaj...</v-btn>
  </div>
</template>

<script>
export default {
    head(){
        return{
            title: "Shporta bosh",
            meta: [
                {
                    name: "description",
                    hid: "descfription",
                    content: "skrrrrr"
                }
            ]
        }
    }
}
</script>

<style>
.main{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    width: 100vw;
    height: 80vh;
    padding: 25px 0 25px 0;
    background-image: url("https://image.freepik.com/free-vector/woman-giving-comfort-support-friend_74855-5301.jpg");
    background-position: center;
}
@media only screen and (max-width: 700px){
    .main{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        background-color: white;
        width: 100vw;
        height: 80vh;
        padding: 25px 0 25px 0;
        background-image: url("https://image.freepik.com/free-vector/portrait-man-woman-with-facepalm-gestures_10045-635.jpg");
        background-size: contain;
        background-position: center;
    }
}
</style>