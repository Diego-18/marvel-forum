import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import DetailView from "../views/DetailView.vue";

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	// {
	// 	path: "/detail",
	// 	name: "detail",
	// 	props: true,
	// 	// component: () => import("../views/DetailView.vue"),
	// 	component: DetailView,
	// },
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
