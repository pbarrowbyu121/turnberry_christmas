const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      // { path: "", component: () => import("pages/Index.vue") },
      { path: "", component: () => import("pages/Home.vue") },
      { path: "/chapter_1", component: () => import("pages/Chapter1.vue") },
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