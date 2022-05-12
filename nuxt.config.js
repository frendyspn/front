
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: "/viho/js/jquery-3.5.1.min.js", body: true },
      { src: "/viho/js/icons/feather-icon/feather.min.js", body: true },
      { src: "/viho/js/icons/feather-icon/feather-icon.js", body: true },
      { src: "/viho/js/sidebar-menu.js", body: true },
      { src: "/viho/js/bootstrap/popper.min.js", body: true },
      { src: "/viho/js/bootstrap/bootstrap.min.js", body: true },
      { src: "/viho/js/chart/chartist/chartist.js", body: true },
      { src: "/viho/js/chart/chartist/chartist-plugin-tooltip.js", body: true },
      { src: "/viho/js/chart/knob/knob.min.js", body: true },
      { src: "/viho/js/chart/knob/knob-chart.js", body: true },
      { src: "/viho/js/chart/apex-chart/apex-chart.js", body: true },
      { src: "/viho/js/chart/apex-chart/stock-prices.js", body: true },
      { src: "/viho/js/prism/prism.min.js", body: true },
      { src: "/viho/js/clipboard/clipboard.min.js", body: true },
      { src: "/viho/js/counter/jquery.waypoints.min.js", body: true },
      { src: "/viho/js/counter/jquery.counterup.min.js", body: true },
      { src: "/viho/js/counter/counter-custom.js", body: true },
      { src: "/viho/js/custom-card/custom-card.js", body: true },
      { src: "/viho/js/notify/bootstrap-notify.min.js", body: true },
      { src: "/viho/js/vector-map/jquery-jvectormap-2.0.2.min.js", body: true },
      { src: "/viho/js/vector-map/map/jquery-jvectormap-world-mill-en.js", body: true },
      { src: "/viho/js/vector-map/map/jquery-jvectormap-us-aea-en.js", body: true },
      { src: "/viho/js/vector-map/map/jquery-jvectormap-uk-mill-en.js", body: true },
      { src: "/viho/js/vector-map/map/jquery-jvectormap-au-mill.js", body: true },
      { src: "/viho/js/vector-map/map/jquery-jvectormap-chicago-mill-en.js", body: true },
      { src: "/viho/js/vector-map/map/jquery-jvectormap-in-mill.js", body: true },
      { src: "/viho/js/vector-map/map/jquery-jvectormap-asia-mill.js", body: true },
      { src: "/viho/js/dashboard/default.js", body: true },
      { src: "/viho/js/notify/index.js", body: true },
      { src: "/viho/js/datepicker/date-picker/datepicker.js", body: true },
      { src: "/viho/js/datepicker/date-picker/datepicker.en.js", body: true },
      { src: "/viho/js/datepicker/date-picker/datepicker.custom.js", body: true },
      
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/viho/css/fontawesome.css',
    '@/assets/viho/css/icofont.css',
    '@/assets/viho/css/themify.css',
    '@/assets/viho/css/flag-icon.css',
    '@/assets/viho/css/feather-icon.css',
    '@/assets/viho/css/animate.css',
    '@/assets/viho/css/chartist.css',
    '@/assets/viho/css/date-picker.css',
    '@/assets/viho/css/prism.css',
    '@/assets/viho/css/vector-map.css',
    '@/assets/viho/css/bootstrap.css',
    '@/assets/viho/css/style.css',
    '@/assets/viho/css/color-1.css',
    '@/assets/viho/css/responsive.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/axios.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    'bootstrap-vue/nuxt'
  ],
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/login', method: 'post', propertyName: 'data' },
          logout: { url: '/logout', method: 'post' },
          user: { url: '/users/login', method: 'get', propertyName: 'data' }
        },
        tokenRequired: true,
        tokenType: 'Bearer '
      }
    }
  },
  axios: {
    baseURL: 'http://localhost/projectcoid/porto/aplikasi-ekspedisi-lumen-6/public/'
  },
  router: {
    middleware: ['auth']
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
