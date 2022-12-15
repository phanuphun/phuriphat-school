import { createRouter , createWebHistory } from 'vue-router'
import MsgAlert from '../services/msgAlert'
import authService from '../services/auth'

const _msgAlert = new MsgAlert()
const _auth = new authService()

const router = createRouter({
    history : createWebHistory(),
    routes: [
        // default redirect
        { path: '/' , component: () => import('../views/finalProject/Main/DashBoard.vue')} ,

        { path: '/dashBoard' , component: () => import('../views/finalProject/Main/DashBoard.vue')} ,
        { path: '/recycle' , component: () => import('../views/finalProject/Main/Recycle.vue')} ,

        // check backend
        { path: '/testBackend/login' , component:() => import('../views/RPTS_Check_Backend/LoginPage.vue')},

        // test component
        { path: '/test/test_calendar' , component: () => import('../views/test/Test_Calendar.vue')} ,
        { path: '/test/Test_DataTableManual' , component: () => import('../views/test/Test_DataTableManual.vue')} ,
        { path: '/test/test_sweetAlert' , component: () => import('../views/test/Test_sweetAlert.vue')} ,

        // page not found 404
        { path: '/:pathMatch(.*)*' , component: ()=> import ('../views/finalProject/ErrorPage/PageNotFound404.vue')} ,
    ],
    scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return { top: 0 }
    },
})

// route guard
router.beforeEach((to,from)=>{
    // console.log(_auth.isLoggedIn());
    if(to.path.startsWith('/testBackend/login') && _auth.isLoggedIn() === true){
        router.push('/')
        return false
    }
    if(!to.path.startsWith('/testBackend/login') && _auth.isLoggedIn() === false) {
        _msgAlert.confirm('กรุณาเข้าสู่ระบบก่อน','error').then((isConfirmed)=>{
            if(isConfirmed){
                router.push('/testBackend/login')
            }
        })
        return false
    }
})

export default router
