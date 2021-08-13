<template>
  <div class="centeredshit">
      <p class="primary--text qs s20">Loading...</p>
  </div>
</template>

<script>
export default {
    mounted(){
        this.$router.push({path:"/checkout"});
    }
}
</script>

<style>
.centeredshit{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>