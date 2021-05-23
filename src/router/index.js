import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/absens/Home.vue'
import Createabsens from '../views/absens/Createabsens.vue'
import Editabsens from '../views/absens/Editabsens.vue'
import Index from '../views/mahasiswas/Index.vue'
import Createmahasiswas from '../views/mahasiswas/Createmahasiswas.vue'
import Editmahasiswas from '../views/mahasiswas/Editmahasiswas.vue'
import Jwl from '../views/jadwals/Jwl.vue'
import Createjadwals from '../views/jadwals/Createjadwals.vue'
import Editjadwals from '../views/jadwals/Editjadwals.vue'
import Konsis from '../views/kontrakmatakuliahs/Konsis.vue'
import Createkontrakmatakuliahs from '../views/kontrakmatakuliahs/Createkontrakmatakuliahs.vue'
import Editkontrakmatakuliahs from '../views/kontrakmatakuliahs/Editkontrakmatakuliahs.vue'
import Matkul from '../views/matakuliahs/Matkul.vue'
import Creatematakuliahs from '../views/matakuliahs/Creatematakuliahs.vue'
import Editmatakuliahs from '../views/matakuliahs/Editmatakuliahs.vue'
import Smt from '../views/semesters/Smt.vue'
import Createsemesters from '../views/semesters/Createsemesters.vue'
import Editsemesters from '../views/semesters/Editsemesters.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/createabsens',
    name: 'Createabsens',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createabsens
  },
  {
    path: '/editabsens/:id',
    name: 'Editabsens',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editabsens
  },
  {
    path:'/jadwals',
    name: 'Jwl',
    component: Jwl
  },
  {
    path: '/createjadwals',
    name: 'Createjadwals',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createjadwals
  },
  {
    path: '/editjadwals/:id',
    name: 'Editjadwals',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editjadwals
  },
  {
    path: '/mahasiswas',
    name: 'Index',
    component: Index
  },
  {
    path: '/createmahasiswas',
    name: 'Createmahasiswas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createmahasiswas
  },
  {
    path: '/editmahasiswas/:id',
    name: 'Editmahasiswas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editmahasiswas
  },
  {
    path: '/Kontrakmatakuliahs',
    name: 'Konsis',
    component: Konsis
  },
  {
    path: '/createkontrakmatakuliahs',
    name: 'Createkontrakmatakuliahs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createkontrakmatakuliahs
  },
  {
    path: '/editkontrakmatakuliahs/:id',
    name: 'Editkontrakmatakuliahs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editkontrakmatakuliahs
  },
  {
    path: '/matakuliahs',
    name: 'Matkul',
    component: Matkul
  },
  {
    path: '/creatematakuliahs',
    name: 'Creatematakuliahs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Creatematakuliahs
  },
  {
    path: '/editmatakuliahs/:id',
    name: 'Editmatakuliahs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editmatakuliahs
  },
  {
    path: '/semesters',
    name: 'Smt',
    component: Smt
  },
  {
    path: '/createsemesters',
    name: 'Createsemesters',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createsemesters
  },
  {
    path: '/editsemesters/:id',
    name: 'Editsemesters',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editsemesters
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
