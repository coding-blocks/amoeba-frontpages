import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar, faAngleUp, faAngleDown, faLock, faPlayCircle, faChartPie, faSearch, faGraduationCap, faVideo, faSuitcase, faSlash, faBell, faShoppingCart,faFileExcel,faFileCode,faFileWord, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

[
  faStar, faAngleUp, faAngleDown, faLock, faPlayCircle,
  faChartPie, faSearch, faGraduationCap, faVideo, faSuitcase,
  faBell, faShoppingCart,faFileExcel,faFileCode,faFileWord, faExclamationTriangle
]
  .forEach(icon => library.add(icon))

Vue.component('FaIcon', FontAwesomeIcon)

