<template>
  <div class="q-pa-md " style="width:100%;height:auto">
    <center>
    </center>
  <!--<q-page class="flex flex-center">
    <q-pdfviewer 
      v-model="show"
      type="html5"
      src="https://awseducate.furinongko.id/labs/ec2hol.pdf"
      content-class="absolute"
    ></q-pdfviewer>
  </q-page>
  -->
  <!-- To be deleted below -->
  <div v-for="(thisMaterials, index) in materialFiles" :key="thisMaterials.id" :name="index" style="text-align:center;" id="allowfullscreen">
			<img :src="thisMaterials.material" style="width:100%" class="slideview"> <br><hr>
	</div>
	<!--<carousel :navigation-enabled="true" :paginationEnabled="false" :navigationClickTargetSize="0" :per-page="1" :mouse-drag="true" :touchDrag="true" :adjustableHeight="false" :centerMode="false" id="allowfullscreen">
		<slide v-for="(thisMaterials, index) in materialFiles" :key="thisMaterials.id" :name="index" style="text-align:center;">
			<img :src="thisMaterials.material" style="height: 400px" class="slideview">
		</slide>
	</carousel>-->
    
  </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios';
import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel);
export default {
  data () {
    return {
      show: true,
      subjectCode: this.$route.params.subjectCode,
      materialFile: this.$route.params.materialFile,
      type: this.$route.params.subjectType,
      materialFiles: [],  
      isFullScreenBtnShow: true,
      src: ''
    }
  },
  computed: {
    updatedSrc() {
      if(process.env.MODE === 'electron') {
        return '/' + this.src
      }
      return this.src
    }
  },
  created: function() {
    axios
      .get("statics/subjecttype/Specialized/" +  this.$route.params.courseCode + "/" + this.$route.params.subjectCode + "/" + this.$route.params.week.split(" ").join("") + "/" + "material.json", {
          
      })

      .then(response => {
		  (this.materialFiles = response.data.material),
		  console.log(response.data)
          })
	  .catch(error => console.log(error))
	
	this.windowHeight = window.innerHeight + 'px'
  },
  methods: {
    toggle (e) {
      //const target = e.target.parentNode.parentNode.parentNode
      const target = document.getElementById("allowfullscreen").parentNode
      this.$q.fullscreen.toggle(target)
        .then(() => {
          // code nga ma force into full screen ang output sa slides
        })
        .catch((err) => {
          alert(err)
          // uh, oh, error!!
           console.error(err)
        })
    }
  }
}
</script>
<style>
@media screen and (max-width: 800px) {
  .slideview {
    width: 100%; /* The width is 100%, when the viewport is 800px or smaller */
  }
}
</style>
