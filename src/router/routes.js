const routes = [{
        path: '/',
        component: () =>
            import ('layouts/MyLayout.vue'),
        children: [{
            path: '',
            component: () =>
                import ('pages/Index.vue')
        }, ],
    },

    {
        path: '/crear-receta',
        component: () =>
            import ('layouts/MyLayout.vue'),
        children: [{
            path: '',
            component: () =>
                import ('pages/CrearReceta.vue')
        }, ],
    },

    {
        path: '/ver-receta/:id',
        component: () =>
            import ('layouts/MyLayout.vue'),
        children: [{
            path: '',
            component: () =>
                import ('pages/VerReceta.vue')
        }, ],
    },

    {
        path: '/mis-recetas',
        component: () =>
            import ('layouts/MyLayout.vue'),
        children: [{
            path: '',
            component: () =>
                import ('pages/MisRecetas.vue')
        }, ],
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