<template>
<div>
  <div class="q-pa-md" style="max-width: 100%">
    <q-input v-model="searchMaterial" label="Search subject" hint="Type your subject"/><br>
    <div class="text-h4">List of Core Subjects</div><hr>
    <q-list bordered separator>
      <q-item clickable v-ripple v-for="thatSubject of subjectsFilter" :key="thatSubject.id" :to="{ path: '/corevue/' + thatSubject.subjectcode }">
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

import axios from 'axios';

export default {
  data() {
    return {
      countSubject: [
        {
            "subjectcode": "ELS",
            "subject_description": "Earth and Life Science 1",
            "num_of_hours": null,
            "subject_type": "Core Subject",
            "vuefile": "Core",
            "cur_dur": "Core/ELS"
        },
        {
            "subjectcode": "GENMATH",
            "subject_description": "General Mathematics 1",
            "num_of_hours": null,
            "subject_type": "Core Subject",
            "vuefile": "Core",
            "cur_dur": "Core/GENMATH"
        },
        {
            "subjectcode": "FIL1",
            "subject_description": "Komunikasyon at Pananaliksik sa Wika at Kulturang Pilipino",
            "num_of_hours": null,
            "subject_type": "Core Subject",
            "vuefile": "Core",
            "cur_dur": "Core/FIL1"
        },
        {
            "subjectcode": "ORALCOM",
            "subject_description": "Oral Communication",
            "num_of_hours": null,
            "subject_type": "Core Subject",
            "vuefile": "Core",
            "cur_dur": "Core/ORALCOM"
        },
        {
            "subjectcode": "PERDEV",
            "subject_description": "Personality Development",
            "num_of_hours": null,
            "subject_type": "Core Subject",
            "vuefile": "Core",
            "cur_dur": "Core/PERDEV"
        },
        {
            "subjectcode": "PHILO",
            "subject_description": "Introduction to Philosophy of the Human Person",
            "num_of_hours": null,
            "subject_type": "Core Subject",
            "vuefile": "Core",
            "cur_dur": "Core/PHILO"
        },
        {
            "subjectcode": "UCSP",
            "subject_description": "Understanding Culture, Society and Politics",
            "num_of_hours": null,
            "subject_type": "Core Subject",
            "vuefile": "Core",
            "cur_dur": "Core/UCSP"
        },
        {
            "subjectcode": "DRR",
            "subject_description": "Disaster Readiness and Risk Reduction",
            "num_of_hours": null,
            "subject_type": "Core Subject",
            "vuefile": "Core",
            "cur_dur": "Core/DRR"
        },
        {
            "subjectcode": "PE1",
            "subject_description": "Physical Education 1",
            "num_of_hours": null,
            "subject_type": "Core Subject",
            "vuefile": "Core",
            "cur_dur": "Core/PE1"
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
  }
  /*created: function() {
    axios
      .get("https://jerickalmeda.com/ici_repo_phpapi/api/subject/view_subjects.php", {
          params: {
              subjecttype: 'Core Subject',
          }
      })

      .then(response => {
          (
          console.log(response),
          this.countSubject = response.data.subjects_array)
          })
      .catch(error => console.log(error))
  }*/
}
</script>
<style lang="sass" scoped> 
.my-card
  width: 100%
  max-width: 250px
</style>