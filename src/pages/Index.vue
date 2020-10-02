<template>
  <div class="q-pa-md q-gutter-sm">
    <q-banner class="bg-primary text-white">
      <div class="text-h6">How to use this app?</div>
      <div class="text-body">
        Click on <strong> Subjects </strong> then you will see <strong>Applied</strong>, <strong>Core</strong> and <strong>your Course</strong>
      </div>
      <div class="text-body">
        Each content has Materials, Videos and Handouts to get you started in your learning journey.
      </div>
      <p></p>
      <p class="text-body">This app updated every 1-2 weeks, ask your adviser for details.</p>
      <p></p>
      <p class="text-body">This app is only exclusive to Iligan Computer Institute students.</p>
      <p></p>
      <p class="text-body">Contact your adviser if you have a concern/suggestion or message Sir Jerick Carlo Almeda on Facebook as this app is continuously worked in progress so some contents are not available.</p>
    </q-banner>
    <q-banner inline-actions class="text-white bg-red">
      <p></p>
      <p class="text-h6">App Changelog</p>
      <ul>
        <li> -- Version: 1.0.29 -- 
          <ul>
            <li> App covers Week 5 and Week 6 Lessons</li>
            <li> App built for Grade 11 - ICI: Bugo Branch </li>
            <li> Some videos not yet uploaded </li>
            <li> Pinch-to-zoom enabled in Handouts view </li>
            <li> Minimum Android Requirements: Android 7.0 </li>
          </ul>
        </li>
      </ul>
    </q-banner>
  </div>
</template>
<script>
export default {
  computed: {
    touch () {
      return this.$q.platform.has.touch ? 'has' : 'does not have'
    },
    currentURL () {
      return window.location
    }
  }
}
</script>