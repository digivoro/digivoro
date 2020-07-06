const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: "sobremi", component: () => import("pages/SobreMi.vue") },
      { path: "trabajos", component: () => import("pages/Trabajos.vue") },
      { path: "contacto", component: () => import("pages/Contacto.vue") }
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
