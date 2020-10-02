<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          ICI Repository
        </q-toolbar-title>

        <div></div>
      </q-toolbar>

    </q-header>
    <q-drawer
        v-model="leftDrawerOpen"
       
        :width="300"
        :breakpoint="1023"
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Navigation
        </q-item-label>
        <q-item
          v-for="nav in navs"
          v-bind:key="nav.id" 
          :to="nav.to" 
          clickable exact>
          <q-item-section avatar>
            <q-icon :name="nav.icon"></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ nav.label }}</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="statics/ici_logo.png" style="height: 145px">
          <div class="absolute-bottom text-subtitle2">
            Iligan Computer Institute
          </div>
        </q-img>
      </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout> 
</template>

<script>


export default {

  data () {
    return {
      leftDrawerOpen: true,
      navs: [
        {
          label: 'Home',
          icon: 'home',
          to: '/'
        },
        /*{
          label: 'My ICI',
          icon: 'perm_contact_calendar',
          to: '/myici'
        },*/
        {
          label: 'Subjects',
          icon: 'subject',
          to: '/subjecttype'
        },
        /*{
          label: 'Leave a feedback?',
          icon: 'settings',
          to: '/settings'
        },*/
      ]
    }
  }
}
</script>
