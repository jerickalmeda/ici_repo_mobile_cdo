<template>
<div>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card v-for="thatSubject of countSubject" :key="thatSubject.id" class="my-card" v-bind:to="'/' + thatSubject.vuefile">
      <q-card-section class="bg-primary text-white">
        <a clickable :href="'#/' + thatSubject.vuefile" style="text-decoration:none;color:white;"><div clickable class="text-h6">{{thatSubject.subject_type}}s</div></a>
        <small > {{thatSubject.NUMSUBJ}} subjects </small>
      </q-card-section>

      <q-separator />

      <q-card-actions align="left">
        <q-btn flat v-bind:to="'/' + thatSubject.vuefile">View Subjects</q-btn>
      </q-card-actions>
    </q-card>
  </div>
  
</div>
</template>

<script>

import axios from 'axios';

export default {
  data() {
    return {
      countSubject: [
        {
            "NUMSUBJ": "1",
            "subject_type": "Applied Track Subject",
            "vuefile": "Applied"
        },
        {
            "NUMSUBJ": "5",
            "subject_type": "Core Subject",
            "vuefile": "Core"
        },
        {
            "NUMSUBJ": "71",
            "subject_type": "Specialized Subject",
            "vuefile": "SSCourse"
        }
      ]  
    }
  },
  /*mounted() {
    axios
      .get("https://jerickalmeda.com/ici_repo_phpapi/api/subject/count_subject.php")
      .then(response => {
        this.countSubject = response.data.subject_type
        })
      .catch(error => console.log(error))
  }*/
}
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
</style>