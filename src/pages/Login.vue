<template>
  <div class="q-pa-md">

    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h5 class="text-h5">Login to continue</h5>
        <q-form
          @submit="onSubmit"
          @reset="onReset"
          class="q-gutter-md"
        >
          <q-input
            filled
            v-model="lrn"
            label="Learners Reference Number *"
            hint="E.g: 123456789011"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type your LRN']"
          />

          <q-input
            filled
            type="name"
            v-model="lastname"
            label="Your lastname *"
            hint="eg. dela Cruz"
            lazy-rules
            :rules="[
              val => val !== null && val !== '' || 'Please type your lastname',
              val => val && val.length > 0 || 'Please type in your lastname'
            ]"
          />

          <div>
            <q-btn label="Login" type="submit" color="primary"/>
            <q-btn label="Forgot login" color="primary" flat class="q-ml-sm" />
          </div>
      </q-form>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      lrn: '',
      lastname: ''
    }
  },
  methods: {
    login() {
      console.log(this.lrn)
      console.log(this.lastname)
    }
  },
}
</script>