<template>
<div>
  <div class="q-pa-md" style="max-width:100%">
    <div v-for="thatSubject of countSubject" :key="thatSubject.id">
      Subject Code: {{ thatSubject.subjectcode }} <br>
      Subject Description: {{thatSubject.subject_description}} <br>
      Vuefile: {{thatSubject.vuefile}} <br>
      Subject Type: {{thatSubject.subject_type}}<br>
      Current Directory: {{thatSubject.cur_dir}}<br>
      <q-list bordered separator >
        <!-- :to="{ path: '/subjects/' + thatSubject.cur_dir + '/' + thisFile}" -->
        <q-item clickable v-ripple v-for="thisFile of thatSubject.file" :key="thisFile.id" @click="downloadItem(thatSubject.cur_dir+'/'+thisFile)">
          <q-item-section avatar>
            <q-avatar color="teal" icon="arrow_circle_down" />
          </q-item-section>
          <q-item-section>
            <q-item-label> {{thisFile.replace('.pdf','')}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
  <q-footer bordered class="text-primary">
    <q-tabs caps active-color="success" indicator-color="transparent" class="text-white">
      <q-btn :to="{ path: '/subjecttype' }" clickable name="back" label="Back to Subject Type" ></q-btn>
      <q-btn @click="goPreviousLink" clickable name="backtosublist" label="Back to Subject list" ></q-btn>
    </q-tabs>
  </q-footer>
</div>
</template>

<script>

import axios from 'axios';

export default {
  data() {
    return {
      subjectCode: null,
      countSubject: [],
      filesArr: [],
      masterlink: 'https://jerickalmeda.com/ici_repo_phpapi/store'
    }
  },
  created: function() {
    axios
      .get("statics/jsons/" + this.$route.params.subjectCode, {
          
      })

      .then(response => {
          (this.countSubject = response.data.subjects_array)
          })
      .catch(error => console.log(error))
  },
  methods: {
    goPreviousLink: function () {
      this.$router.go(-1) 
    },
    downloadItem(theFile){
      var thaturl = this.masterlink+'/'+theFile
      axios({
        url: thaturl,
        responseType: 'blob',
      }).then((response) => {
        var fileUrl = window.URL.createObjectURL(new Blob([response.data]));
        var fileLink = document.createElement('a');
        fileLink.href = fileUrl;
        fileLink.setAttribute('download', theFile);
        fileLink.click();
        console.log(response);
      })
    }
  },
}
</script>
<style lang="sass" scoped>
</style>