<template>
  <div class="q-pa-md" style="width:100%;height:auto">
    <q-card class="my-card  orientation-portrait">
      <q-card-section>
        <div class="text-h6 text-center">This video is best viewed in landscape mode. </div>
      </q-card-section>
    </q-card><br>
    <q-media-player
          type="video"
          :source="this.materialComplete"
          mobile-mode
          dense
          poster="statics/ici_logo.png"
      />
  </div>
</template>
<script>
import Vue from 'vue';
import axios from 'axios';
import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel);
export default {
  data () {
    return {
	  subjectCode: this.$route.params.subjectCode,
	  materialFile: this.$route.params.materialFile,
	  type: this.$route.params.subjectType,
	  videoCore: [],  
      materialComplete: "statics/subjecttype/" +  this.$route.params.subjectType + "/" + this.$route.params.subjectCode + "/" + this.$route.params.week.split(" ").join("") + "/video.mp4"
    }
  },
  created: function() {
    axios
      .get("statics/subjecttype/" +  this.$route.params.subjectType + "/" + this.$route.params.subjectCode + "/" + this.$route.params.week.split(" ").join("") + "/" + "video.json", {
          
      })

      .then(response => {
		  (this.materialFiles = response.data.videos),
		  console.log(response.data)
          })
	  .catch(error => console.log(error))
	
	this.windowHeight = window.innerHeight + 'px'
  },
}
</script>
<style>
@media screen and (max-width: 800px) {
  .slideview {
    width: 100%; /* The width is 100%, when the viewport is 800px or smaller */
  }
}
</style>
