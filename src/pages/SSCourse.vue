<template>
<div>
  <div class="q-pa-md" style="max-width:100%">
    <div class="text-h4">List of Courses</div><hr>
      <q-list bordered separator >
        <!-- :to="{ path: '/subjects/' + thatSubject.cur_dir + '/' + thisFile}" -->
        <q-item clickable v-ripple v-for="course of course_list" :key="course.id" :to="{ path: '/Specialized/' + course.code }">
          <q-item-section avatar>
            <q-avatar icon="done" />
          </q-item-section>
          <q-item-section>
            <q-item-label> {{ course.name }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
  </div>
  <q-footer bordered class="text-primary">
    <q-tabs caps active-color="success" indicator-color="transparent" class="text-white">
      <q-btn :to="{ path: '/subjecttype' }" clickable name="back" label="Back to Subject Type" ></q-btn>
    </q-tabs>
  </q-footer>
</div>
</template>

<script>

export default {
  data() {
    return {
        course_list: [
            {
                "name": "Accounting, Business and Management",
                "track": "Academic",
                "code": "ABM"
            },
            {
                "name": "Computer Engineering",
                "track": "Technical Vocational Livelihood",
                "code" : "CE"
            },
            {
                "name": "Culinary Arts",
                "track": "Technical Vocational Livelihood",
                "code": "CA"
            },
            {
                "name": "Electrical Installation and Maintenance",
                "track": "Technical Vocational Livelihood",
                "code": "EIM"
            },
            {
                "name": "Hotel and Restaurant Management",
                "track": "Technical Vocational Livelihood",
                "code": "HRM"
            },
            {
                "name": "Humanities and Social Sciences",
                "track": "HUMSS",
                "code": "HUMSS"
            },
            {
                "name": "Information Technology",
                "track": "Technical Vocational Livelihood",
                "code": "IT"
            },
            {
                "name": "Office Management",
                "track": "Technical Vocational Livelihood",
                "code": "OM"
            },
            {
                "name": "Practical Nursing",
                "track": "Technical Vocational Livelihood",
                "code": "PN"
            }
        ]
    }
  },
  methods: {
    goPreviousLink: function () {
      this.$router.go(-1) 
    },
  },
}
</script>
<style lang="sass" scoped>
</style>