export default {
    name: 'publications',
    component: () => import(/* webpackChunkName: "publication" */ '@/modules/publications/layouts/PublicationLayout.vue'),
    children: [
        {
            path: 'no-publication',
            name: 'no-publication',
            component: () => import('@/modules/publications/views/NoPublicationSelected.vue')
        },
        // {
        //     path: '',
        //     name: 'publications',
        //     component: () => import(/* webpackChunkName: "publication" */ '@/modules/publications/layouts/PublicationLayout.vue'),
        // },
        {
            path: '',
            name: 'publicationList',
            component: () => import(/* webpackChunkName: "publication" */ '@/modules/publications/components/PublicationList.vue'),
        },
        {
            path: ':id',
            name: 'publicationView',
            component: () => import('@/modules/publications/views/PublicationView.vue'),
            props: ( route ) => {
                return {
                    id: route.params.id
                }
            }
        }
    ]

}