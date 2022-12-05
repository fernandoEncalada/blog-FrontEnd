export default {
    name: 'publication',
    component: () => import(/* webpackChunkName: "publication" */ '@/modules/publications/layouts/PublicationLayout.vue'),
    children: [
        {
            path: '',
            name: 'no-publication',
            component: () => import('@/modules/publications/views/NoPublicationSelected.vue')
        },
        {
            path: ':id',
            name: 'publicationView',
            component: () => import('@/modules/publications/views/PublicationView.vue')
        }
    ]

}