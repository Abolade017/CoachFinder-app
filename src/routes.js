import {defineAsyncComponent} from 'vue';
// import CoachDetails from  "./components/pages/Coaches/CoachesDetail.vue";
import CoachList from  "./components/pages/Coaches/CoachesList.vue";
//import CoachReg from  "./components/pages/Coaches/CoachRegistration.vue";
//import Contact from  "./components/pages/Requests/ContactCoach.vue";
// import Request from  "./components/pages/Requests/Requests.vue";
import notFound from  "./components/pages/notFound.vue";
// import UserAuth from  "./components/pages/auth/UserAuth.vue";
//asynchronousComponent

const CoachDetails = defineAsyncComponent(() => import("./components/pages/Coaches/CoachesDetail.vue"));
const CoachReg = defineAsyncComponent(() => import("./components/pages/Coaches/CoachRegistration.vue")); 
const Contact = defineAsyncComponent(() => import("./components/pages/Requests/ContactCoach.vue")); 
const Request = defineAsyncComponent(() => import("./components/pages/Requests/Requests.vue")); 
const UserAuth = defineAsyncComponent(() => import("./components/pages/auth/UserAuth.vue")); 
const routes= [
    { path: "/", redirect: "/coaches" },
    { path: "/coaches", component: CoachList },
    {
      path: "/coaches/:id",
      component: CoachDetails,
      props:true,
      children: [{ path: "contact",  component: Contact }],
    },
    { path: "/register", component: CoachReg, meta:{requiresAuth: true} },
    { path: "/requests", component: Request, meta:{requiresAuth: true} },
    {path: "/auth", component: UserAuth, meta:{requiresUnauth: true} },
    { path: "/:notFound(.*)", component: notFound }
   ];
  
   

export default routes;