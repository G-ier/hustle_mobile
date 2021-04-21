<template>
  <div class="main">
      <p class="qs">Hooray!</p>
  </div>
</template>

<script>
export default {
    head(){
        return{
            title: "Success - hustle",
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
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 100vw;
    min-height: 71vh;
}
</style>