<template>
<div>
  <div class="q-pa-md" style="max-width: 100%">
    <q-input v-model="searchMaterial" label="Search subject" hint="Type your subject"/><br>
    <div class="text-h4">List of Specialized Subjects</div><hr>
    <q-list bordered separator>
      <q-item clickable v-ripple v-for="thatSubject of subjectsFilter" :key="thatSubject.id" :to="{ path: '/subjects/' + thatSubject.subjectcode + '.json' }">
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
            "subjectcode": "SS8-ABM",
            "subject_description": "Applied Economics",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS8-ABM"
        },
        {
            "subjectcode": "SS1-PROG",
            "subject_description": "Apply program development approach – html5, css3",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS1-PROG"
        },
        {
            "subjectcode": "SS3-PROG",
            "subject_description": "Apply programming skills in a second language.PHP1",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS3-PROG"
        },
        {
            "subjectcode": "SS5-PROG",
            "subject_description": "Apply programming skills in a second language.PHP2. Collect, analyze and organize information – database",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS5-PROG"
        },
        {
            "subjectcode": "SS7-CSS",
            "subject_description": "AutoCAD",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS7-CSS"
        },
        {
            "subjectcode": "SS7-EIM",
            "subject_description": "Basic Electronics",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS7-EIM"
        },
        {
            "subjectcode": "SS5-BPP",
            "subject_description": "Bread and Pastry Fundamentals",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS5-BPP"
        },
        {
            "subjectcode": "SS9-ABM",
            "subject_description": "Business Enterprise Simulation",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS9-ABM"
        },
        {
            "subjectcode": "SS5-ABM",
            "subject_description": "Business Ethics and Social Responsibility",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS5-ABM"
        },
        {
            "subjectcode": "SS4-ABM",
            "subject_description": "Business Finance",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS4-ABM"
        },
        {
            "subjectcode": "SS1-ABM",
            "subject_description": "Business Math",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS1-ABM"
        },
        {
            "subjectcode": "SS8-BAR",
            "subject_description": "Cocktails and Non-alcoholic Services",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS8-BAR"
        },
        {
            "subjectcode": "SS6-COK",
            "subject_description": "Cold Meals",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS6-COK"
        },
        {
            "subjectcode": "SS8-HUMSS",
            "subject_description": "Community Engagement, Solidarity, and Citizenship",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS8-HUMSS"
        },
        {
            "subjectcode": "SS1-COK",
            "subject_description": "Cookery Fundamentals",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS1-COK"
        },
        {
            "subjectcode": "SS8-COK",
            "subject_description": "Cooking Designs and Application",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS8-COK"
        },
        {
            "subjectcode": "SS7-HUMSS",
            "subject_description": "Creative Nonfiction",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS7-HUMSS"
        },
        {
            "subjectcode": "SS5-HUMSS",
            "subject_description": "Creative Writing / Malikhaing Pagsulat",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS5-HUMSS"
        },
        {
            "subjectcode": "SS6-VGD",
            "subject_description": "Design booth and product/window display",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS6-VGD"
        },
        {
            "subjectcode": "SS2-VGD",
            "subject_description": "Develop designs for print media",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS2-VGD"
        },
        {
            "subjectcode": "SS4-VGD",
            "subject_description": "Develop designs for product packaging",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS4-VGD"
        },
        {
            "subjectcode": "SS4-HUMSS",
            "subject_description": "Disciplines and Ideas in the Applied Social Sciences",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS4-HUMSS"
        },
        {
            "subjectcode": "SS2-HUMSS",
            "subject_description": "Disciplines and Ideas in the Social Sciences",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS2-HUMSS"
        },
        {
            "subjectcode": "SS4-FBS",
            "subject_description": "Food and Beverage Service Procedures",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS4-FBS"
        },
        {
            "subjectcode": "SS7-FBS",
            "subject_description": "Food and Beverage Service Procedures",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS7-FBS"
        },
        {
            "subjectcode": "SS2-ABM",
            "subject_description": "Fundamentals of Accounting, Business and Management 1",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS2-ABM"
        },
        {
            "subjectcode": "SS3-ABM",
            "subject_description": "Fundamentals of Accounting, Business and Management 2",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS3-ABM"
        },
        {
            "subjectcode": "SS1-HSK",
            "subject_description": "Housekeeping Services for Guests",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS1-HSK"
        },
        {
            "subjectcode": "SS2-CSS",
            "subject_description": "Install And Configure Computer Network",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS2-CSS"
        },
        {
            "subjectcode": "SS5-EIM",
            "subject_description": "Install electrical protective devices for distribution",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS5-EIM"
        },
        {
            "subjectcode": "SS1-EIM",
            "subject_description": "Introduction to EIM/ OSH and Hand tools",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS1-EIM"
        },
        {
            "subjectcode": "SS1-HUMSS",
            "subject_description": "Introduction to World Religions and Belief Systems",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS1-HUMSS"
        },
        {
            "subjectcode": "SS5-CSS",
            "subject_description": "Maintain Computer System And Networks (Review)",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS5-CSS"
        },
        {
            "subjectcode": "SS8-EIM",
            "subject_description": "Mensuration and Calculation",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS8-EIM"
        },
        {
            "subjectcode": "OJT",
            "subject_description": "On The Job Training",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/OJT"
        },
        {
            "subjectcode": "SS4-BAR",
            "subject_description": "Operate Bar",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS4-BAR"
        },
        {
            "subjectcode": "SS6-ABM",
            "subject_description": "Organization and Management",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS6-ABM"
        },
        {
            "subjectcode": "SS7-BPP",
            "subject_description": "Pastries and Desserts",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS7-BPP"
        },
        {
            "subjectcode": "SS1-CSS",
            "subject_description": "Perform Computer Operations",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS1-CSS"
        },
        {
            "subjectcode": "SS8-CSS",
            "subject_description": "Perform Mensuration And Calculation - Special Project",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS8-CSS"
        },
        {
            "subjectcode": "SS3-HUMSS",
            "subject_description": "Philippine Politics and Governance",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS3-HUMSS"
        },
        {
            "subjectcode": "SS3-COK",
            "subject_description": "Poultry, Game, Seafood Products, Salads and Sandwiches",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS3-COK"
        },
        {
            "subjectcode": "SS7-ABM",
            "subject_description": "Principles of Marketing",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS7-ABM"
        },
        {
            "subjectcode": "SS6-BAR",
            "subject_description": "Provide Wine service",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS6-BAR"
        },
        {
            "subjectcode": "SS2-FBS",
            "subject_description": "Restaurant and Dining Room Services",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS2-FBS"
        },
        {
            "subjectcode": "SS5-FBS",
            "subject_description": "Restaurant and Dining Room Services",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS5-FBS"
        },
        {
            "subjectcode": "SS2-EIM",
            "subject_description": "Rough-in and Cabling Services",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS2-EIM"
        },
        {
            "subjectcode": "SS3-CSS",
            "subject_description": "Setup Computer Networks",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS3-CSS"
        },
        {
            "subjectcode": "SS6-CSS",
            "subject_description": "Setup Linux Server",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS6-CSS"
        },
        {
            "subjectcode": "SS4-CSS",
            "subject_description": "Setup Windows Server",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS4-CSS"
        },
        {
            "subjectcode": "SS4-EIM",
            "subject_description": "Single phase wiring installation/Troubleshooting",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS4-EIM"
        },
        {
            "subjectcode": "SS7-PROG",
            "subject_description": "Special Project - PROG",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS7-PROG"
        },
        {
            "subjectcode": "SS8-VGD",
            "subject_description": "Special Project - VGD",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS8-VGD"
        },
        {
            "subjectcode": "SS1-Merge",
            "subject_description": "Special Subject 1",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS1-Merge"
        },
        {
            "subjectcode": "SS2-Merge",
            "subject_description": "Special Subject 2",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS2-Merge"
        },
        {
            "subjectcode": "SS1",
            "subject_description": "Specialized Subject 1",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS1"
        },
        {
            "subjectcode": "SS10",
            "subject_description": "Specialized Subject 10",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS10"
        },
        {
            "subjectcode": "SS2",
            "subject_description": "Specialized Subject 2",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS2"
        },
        {
            "subjectcode": "SS3",
            "subject_description": "Specialized Subject 3",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS3"
        },
        {
            "subjectcode": "SS4",
            "subject_description": "Specialized Subject 4",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS4"
        },
        {
            "subjectcode": "SS5",
            "subject_description": "Specialized Subject 5",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS5"
        },
        {
            "subjectcode": "SS6",
            "subject_description": "Specialized Subject 6",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS6"
        },
        {
            "subjectcode": "SS7",
            "subject_description": "Specialized Subject 7",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS7"
        },
        {
            "subjectcode": "SS8",
            "subject_description": "Specialized Subject 8",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS8"
        },
        {
            "subjectcode": "SS2-BAR",
            "subject_description": "SS2-BAR",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS2-BAR"
        },
        {
            "subjectcode": "SS6-EIM",
            "subject_description": "Technical Drawing and Plan",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS6-EIM"
        },
        {
            "subjectcode": "SS3-EIM",
            "subject_description": "Terminate/connect electrical and electronic circuit (CCTV/Fire Alarm)",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS3-EIM"
        },
        {
            "subjectcode": "SS6-HUMSS",
            "subject_description": "Trends, Networks, and Critical Thinking in the 21st Century Culture",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS6-HUMSS"
        },
        {
            "subjectcode": "SS3-HSK",
            "subject_description": "Valet and Laundry Services",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS3-HSK"
        },
        {
            "subjectcode": "SS9",
            "subject_description": "Work Immersion",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS9"
        },
        {
            "subjectcode": "SS9-HUMSS",
            "subject_description": "Work Immersion",
            "num_of_hours": null,
            "subject_type": "Specialized Subject",
            "vuefile": "Specialized",
            "cur_dur": "subjecttype/Specialized/SS9-HUMSS"
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
  created: function() {
    axios
      .get("https://jerickalmeda.com/ici_repo_phpapi/api/subject/view_subjects.php", {
          params: {
              subjecttype: 'Specialized Subject',
          }
      })

      .then(response => {
          (
          console.log(response),
          this.countSubject = response.data.subjects_array)
          })
      .catch(error => console.log(error))
  }
}
</script>
<style lang="sass" scoped> 
.my-card
  width: 100%
  max-width: 250px
</style>