import VueRouter from 'vue-router'
// import{ IndexPage, FooPage,  BazPage, CarsPage, SingleCarPage } from  './pages/mainPages' 
import IndexPage from './pages/Index'
import CarsPage from './pages/Cars'
import SingleCarPage from './pages/SingleCarPage'
import CarFull from './pages/CarFull'
import ErrorPage from './pages/Error404'

export default new VueRouter ({
    routes : [
        { 
            path: '/',
            menuTitle: 'Home' ,
            component: IndexPage 
        },
        { 
            path: '/cars',
            menuTitle: 'Cars' ,
            component: CarsPage 
        },
        { 
            path: '/car/:id',
            component: SingleCarPage,
            children: [
                {
                    path: 'full',
                    component: CarFull,
                    name:'CarFull', 
                    beforeEnter(to, from, next){
                        // router guard
                        const userAuth = true
                        next(userAuth)
                    }
                }
            ]
        },
        { 
            path: '/movies',
            component: () => import("./pages/MoviesList.vue"),
            menuTitle: 'Movies' ,
        },
        { 
            path: '/movie/:id',
            component: () => import("./pages/MovieSingle.vue"),
            children: [
                {
                    path: 'detail',
                    component: () => import("./pages/MovieDetail.vue"),
                }
            ]
        },
        { 
            path: '/none',
            redirect: '/'
        },
        { 
            path: '*',
            component: ErrorPage,
        },
    ],
    mode: 'history', // remove hash #
    scrollBehavior( to, from, savedPosition ){
        // from, savedPosition
        if(savedPosition) {
            return savedPosition
        }

        if(to.hash) {
            return {
                selector: to.hash
            }
        }
        return {
            x:0,
            y:0
        }
    }
})