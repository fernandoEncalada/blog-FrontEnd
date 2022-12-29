import publicationApi from "@/api/publicationApi"

export const loadCategories = async ({ commit }) => {
    
    const { data } = await publicationApi.get('/categories')

    if( !data ){
        commit('setCategories', [] )
        return
    }

    let categories = []
    categories = data
    commit('setCategories', categories)
}

// export const updatePublication = async ({ commit }, publication) => {
//     const { title, description, content } = publication
//     const publicationToSave = { title, description, content }

//     const resp = await publicationApi.put(`/publications/${publication.id}`, publicationToSave)
//     console.log(resp);
//     commit('updatePublication', { ...publication })

// }

// export const createPublication = async ({ commit }, publication) =>{
//     const { title, description, content, comments } = publication
//     const publicationToSave = { title, description, content, comments }

//     const { data } = await publicationApi.post('/publications/2', publicationToSave)
    
//     publicationToSave.id = data.id
//     commit('addPublication', publicationToSave)
//     return data.id
// }

// export const deletePublication = async ({ commit }, id) => {

//     await publicationApi.delete(`/publications/${id}`)

//     commit('deletePulication', id)

// }