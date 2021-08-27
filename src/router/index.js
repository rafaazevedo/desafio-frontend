import Vue from "vue";
import VueRouter from "vue-router";
import Film from "../views/Film.vue";
import FilmItem from "../views/FilmItem.vue";
Vue.use(VueRouter);

const routes = [
  // Rota da lista de filmes
  {
    path: "/",
    name: "film",
    component: Film
  },
  // Rota de detalhes dos filmes
  {
    path: "/films/:id",
    name: "filmItem",
    component: FilmItem
  }
];

const router = new VueRouter({
  routes
});

export default router;
