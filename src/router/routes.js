const routes = [{
        path: '/',
        component: () =>
            import ('layouts/MyLayout.vue'),
        children: [
            { path: '', component: () =>
                    import ('pages/Index.vue') },
        ],
    },
    {
        path: '/recetas',
        component: () =>
            import ('layouts/MyLayout.vue'),
        children: [
            { path: '', component: () =>
                    import ('pages/ListaRecetas.vue') },
        ],
    },
    {
        path: '/crear-receta',
        component: () =>
            import ('layouts/MyLayout.vue'),
        children: [
            { path: '', component: () =>
                    import ('pages/CrearReceta.vue') },
        ],
    },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
    routes.push({
        path: '*',
        component: () =>
            import ('pages/Error404.vue'),
    });
}

export default routes;