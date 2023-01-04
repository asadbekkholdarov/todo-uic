import { createRouter, createWebHistory } from "vue-router";
import OptionView from "../views/OptionView.vue";
import CompositionView from "./../views/CompositionView";
const routes = [
  {
    path: "/",
    name: "option",
    component: OptionView,
  },
  {
    path: "/composition",
    name: "composition",
    component: CompositionView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
