
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: '', 
        component: () => import('pages/Index.vue') 
      },
      {
        path: '/myici',
        component: () => import('pages/MyICI.vue')
      },
      {
        path: '/subjecttype',
        component: () => import('pages/SubjectType.vue')
      },
      {
        path: '/subjects/:subjectCode',
        component: () => import('pages/Subjects.vue')
      },
      {
        path: '/appliedvue/:subjectCode',
        component: () => import('pages/AppliedViewer.vue')
      },
      {
        path: '/corevue/:subjectCode',
        component: () => import('pages/CoreViewer.vue')
      },
      {
        path: '/settings',
        component: () => import('pages/Settings.vue')
      },
      {
        path: '/specialized/:courseCode',
        component: () => import('pages/Specialized.vue')
      },
      {
        path: '/core',
        component: () => import('pages/Core.vue')
      },
      {
        path: '/applied',
        component: () => import('pages/Applied.vue')
      },
      {
        path: '/changelog',
        component: () => import("pages/Changelog.vue")
      },
      {
        path: '/material/:subjectType/:courseCode/:subjectCode/:week/:materialFile',
        component: () => import("pages/Material.vue")
      },
      {
        path: '/materialHandout/:subjectType/:courseCode/:subjectCode/:week/:materialFile',
        component: () => import("pages/MaterialSS.vue")
      },
      {
        path: '/materialApplied/:subjectType/:subjectCode/:week/:materialFile',
        component: () => import("pages/MaterialApplied.vue")
      },
      {
        path: '/materialCore/:subjectType/:subjectCode/:week/:materialFile',
        component: () => import("pages/MaterialCore.vue")
      },
      {
        path: '/handoutCore/:subjectType/:subjectCode/:week/:materialFile',
        component: () => import("pages/HandoutCore.vue")
      },
      {
        path: '/handoutApplied/:subjectType/:subjectCode/:week/:materialFile',
        component: () => import("pages/HandoutApplied.vue")
      },
      {
        path: '/SSCourse',
        component: () => import("pages/SSCourse.vue")
      },
      {
        path: '/video/:subjectType/:subjectCode/:week/:materialFile/:videoFile',
        component: () => import("pages/Video.vue")
      },
      {
        path: '/appliedvideo/:subjectType/:subjectCode/:week/:materialFile/:videoFile',
        component: () => import("pages/AppliedVideo.vue")
      },
      {
        path: '/ssvideo/:subjectType/:courseCode/:subjectCode/:week/:materialFile/:videoFile',
        component: () => import("pages/SpecializedVideo.vue")
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
