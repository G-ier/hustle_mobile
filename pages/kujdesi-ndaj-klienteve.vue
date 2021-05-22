<template>
  <div class="perne">
      <div class="klienti mb-15">
          <h2 class="qs primary--text pa-0 ma-0 s25">Kujdesi ndaj klientëve</h2>
          <p class="qs secondary--text pa-0 ma-0">Faleminderit që keni zgjedhur Amazon për të bërë blerjet tuaja për pajisje teknologjike. Ne jemi të lumtur që keni zgjedhur dyqanin tonë online dhe jemi vazhdimisht në gatishmëri që tu ndihmojmë që blerja juaj në platformën tonë tu lërë përshtypje sa më të mirë.</p>
          <p class="qs primary--text pa-0 ma-0 mt-2 s20">Për tu njoftuar më shumë me amazon.com, ju lutem lexoni informatat në vijim.</p>
      </div>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br/>
                Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br/>
                Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
            </div>
      </b-collapse>  
  </div>
</template>

<script>
export default {
    mounted() {
        this.$nextTick(() => {
            if(this.$route.hash == 'termat'){
                const el = document.getElementById(this.$route.hash);
                console.log("anchorssssssssssssssss")
                this.isOpen1 = true;

                el.scrollIntoView(); 
                window.scrollBy(0, -100);
            } else if(this.$route.hash == 'kthimi'){
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