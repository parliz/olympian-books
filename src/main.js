import {
	createApp
} from 'vue'
// import {
// 	createPinia
// } from 'pinia'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/style.css'
import {
	createWebHistory,
	createRouter
} from 'vue-router'
import MainPage from './pages/MainPage.vue'
import CartPage from './pages/CartPage.vue'
import CatalogPage from './pages/CatalogPage.vue'

const routes = [{
		path: '/',
		name: 'MainPage',
		component: MainPage
	},
	{
		path: '/cart',
		name: 'Cart',
		component: CartPage
	},
	{
		path: '/catalog',
		name: 'Catalog',
		component: CatalogPage
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

const app = createApp(App)
// const pinia = createPinia()

// Импорт и регистрация Bootstrap компонентов
import {
	Modal
} from 'bootstrap'

app.config.globalProperties.$modal = Modal


app.use(router)
// app.use(pinia)
app.mount('#app')
