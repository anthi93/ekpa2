const Home= {template:'<div class="home"><h1>This is home page</h1></div>'}
const Education= {template:'<div class="education"><h1> This is education page</h1></div> '}
const University={template: '<div class="university"><h1>This is education page</h1></div>'}

const routes=[
    {path:'/', component: Home},
    {path: '/', component:Education},
    {path: '/', component:University}

]

const router =new VueRouter({
    routes
})

const app = new Vue({
    router
}).$mount('#my-app')
