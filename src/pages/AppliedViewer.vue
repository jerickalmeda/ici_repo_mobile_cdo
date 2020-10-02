<template>
<div>
  <div class="q-pa-md">
    <div class="q-gutter-y-md" style="max-width: 100%" v-for="course of selectedSubject" :key="course.id">
        <div class="text-h4">{{course.name}}</div><hr>
      <q-card>
        <q-tabs
          v-model="tab"
          indicator-color="blue"
          align="justify"
        >
          <q-tab name="materials" label="Materials" />
          <q-tab name="videos" label="Videos" />
          <q-tab name="handouts" label="Handouts" />
        </q-tabs>

        <q-tab-panels v-model="tab" active animated class="text-black">
          <q-tab-panel name="materials">
            <div class="text-h6">Materials</div>
              <q-list padding bordered class="rounded-borders">
                <q-expansion-item v-for="material of course.material" :key="material.id"
                  dense
                  dense-toggle
                  expand-separator
                  group="materialgroup"
                  :label="material.subject_desc"
                >
                <q-list dense bordered padding class="rounded-borders">
                  <q-item clickable v-ripple v-for="file of material.file" :key="file.id" :to="{ path: '/materialApplied/' + course.type + '/'+ material.subject_code + '/' + file.split('-')[0] + '/' + file}">
                    <q-item-section>
                      {{ file }}
                    </q-item-section>
                  </q-item>

                </q-list>
                </q-expansion-item>
              </q-list>
          </q-tab-panel>

          <q-tab-panel name="videos">
            <div class="text-h6">Videos</div>
              <q-list padding bordered class="rounded-borders">
                <q-expansion-item v-for="material of course.material" :key="material.id"
                  dense
                  dense-toggle
                  expand-separator
                  group="materialgroup"
                  :label="material.subject_desc"
                >
                <q-list dense bordered padding class="rounded-borders">
                  <q-item clickable v-ripple v-for="file of material.file" :key="file.id" :to="{ path: '/appliedvideo/'+ course.type + '/' + material.subject_code + '/' + file.split('-')[0] + '/' + file + '/video.mp4'}">
                    <q-item-section>
                      {{ file }}
                    </q-item-section>
                  </q-item>

                </q-list>
                </q-expansion-item>
              </q-list>
          </q-tab-panel>
          <q-tab-panel name="handouts">
            <div class="text-h6">Handouts</div>
              <q-list padding bordered class="rounded-borders">
                <q-expansion-item v-for="material of course.handout" :key="material.id"
                  dense
                  dense-toggle
                  expand-separator
                  group="materialgroup"
                  :label="material.subject_desc"
                >
                <q-list dense bordered padding class="rounded-borders">
                  <q-item clickable v-ripple v-for="file of material.file" :key="file.id" :to="{ path: '/handoutApplied/' + course.type + '/'+ material.subject_code + '/' + file.split('-')[0] + '/' + file}">
                    <q-item-section>
                      {{ file }}
                    </q-item-section>
                  </q-item>

                </q-list>
                </q-expansion-item>
              </q-list>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
  
    
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
        <q-btn :to="{ path: '/Applied' }" clickable name="back" label="Back to Applied Subjects" ></q-btn>
      </q-tabs>
    </q-footer>

</div>
</template>

<script>

import axios from 'axios';

export default {
  data() {
    return {
      searchMaterial: "",
      selectedSubject: [],
      courseCode: null,
      tab: 'mails'
    }
  },
  created: function() {
    axios
      .get("statics/jsons/Applied/" + this.$route.params.subjectCode + ".json", {
      })

      .then(response => {
          (
          console.log(response),
          this.selectedSubject = response.data.course)
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