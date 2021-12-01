const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      // { path: "", component: () => import("pages/Index.vue") },
      { path: "", component: () => import("pages/Home.vue") },
      { path: "/chapter_1", component: () => import("pages/Chapter1.vue") },
      { path: "/chapter_2", component: () => import("pages/Chapter2.vue") },
      { path: "/chapter_3", component: () => import("pages/Chapter3.vue") },
      { path: "/chapter_4", component: () => import("pages/Chapter4.vue") },
      { path: "/chapter_5", component: () => import("pages/Chapter5.vue") },
      { path: "/chapter_6", component: () => import("pages/Chapter6.vue") },
      { path: "/chapter_7", component: () => import("pages/Chapter7.vue") },
      { path: "/chapter_8", component: () => import("pages/Chapter8.vue") },
      { path: "/chapter_9", component: () => import("pages/Chapter9.vue") },
      { path: "/chapter_10", component: () => import("pages/Chapter10.vue") },
      { path: "/chapter_11", component: () => import("pages/Chapter11.vue") },
      { path: "/chapter_12", component: () => import("pages/Chapter12.vue") },
      { path: "/chapter_13", component: () => import("pages/Chapter13.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
