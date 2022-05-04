<template >
  <q-page>
    <HomeComp/>


  </q-page>
</template>


<script>

import { ref } from 'vue';
import HomeComp from 'src/components/HomeComp'
export default {
  components:{
    HomeComp,

},
    setup() {
        return {
            slide: ref("style"),
            lorem: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo."
        };
    },
}
</script>


<style scoped>

</style>
