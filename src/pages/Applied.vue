<template>
<div>
  <div class="q-pa-md" style="max-width: 100%">
    <q-input v-model="searchMaterial" label="Search subject" hint="Type your subject"/><br>
    <div class="text-h4">List of Applied Track Subjects</div><hr>
    <q-list bordered separator>
      <q-item clickable v-ripple  v-for="thatSubject of subjectsFilter" :key="thatSubject.id" :to="{ path: '/appliedvue/' + thatSubject.subjectcode }">
        <q-item-section>
          <q-item-label>{{thatSubject.subject_description}}</q-item-label>
          <q-item-label caption>View Subject</q-item-label>
        </q-item-section>
      </q-item>

    </q-list>
    <!--<q-card v-for="thatSubject of countSubject" :key="thatSubject.id" class="my-card">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">{{thatSubject.subject_description}}</div>
        <small > {{thatSubject.num_of_hours}} hours </small>
      </q-card-section>

      <q-separator />

      <q-card-actions align="right">
        <q-btn flat v-bind:to="'/subjects?subjecttype=' + thatSubject.subject_type">View Subjects</q-btn>
      </q-card-actions>
    </q-card>-->
    <q-footer bordered class="text-primary">
      <q-tabs caps active-color="success" indicator-color="transparent" class="text-white">
        <q-btn :to="{ path: '/subjecttype' }" clickable name="back" label="Back" ></q-btn>
      </q-tabs>
    </q-footer>
  </div>
  
</div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios';

export default {
  data() {
    return {
      countSubject: [
        {
            "subjectcode": "EMTECH",
            "subject_description": "Empowerment Technologies",
            "num_of_hours": null,
            "subject_type": "Applied Track Subject",
            "vuefile": "Applied",
            "cur_dur": "Applied/EMTECH"
        }
      ],
      searchMaterial: ""
    }
  },
  computed: {
    subjectsFilter: function() {
       var searchSubject = this.searchMaterial;
       return this.countSubject.filter(function(el) {
         return el.subject_description.toLowerCase().indexOf(searchSubject.toLowerCase()) !== -1;
       });
    }
  },
  /*created: function() {
    axios
      .get("https://jerickalmeda.com/ici_repo_phpapi/api/subject/view_subjects.php", {
          params: {
              subjecttype: 'Applied Track Subject',
          }
      })

      .then(response => {
          (
          console.log(response),
          this.countSubject = response.data.subjects_array)
          })
      .catch(error => console.log(error))
  }
  */
}
</script>
<style lang="sass" scoped> 
.my-card
  width: 100%
  max-width: 250px
</style>