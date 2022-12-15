import publicationApi from "@/api/publicationApi"

// export const myAction = async ({ commit }) => {



// }

export const loadPublications = async ({ commit }) => {
    
    const { data } = await publicationApi.get('/publications?page=0&size=100&sortBy=id&sortDir=asc')

    if( !data ){
        commit('setPublications', [] )
        return
    }

    let publications = []
    publications = data.content
    commit('setPublications', publications)
}

export const updatePublication = async ({ commit }, publication) => {
    const { title, description, content } = publication
    const publicationToSave = { title, description, content }

    const resp = await publicationApi.put(`/publications/${publication.id}`, publicationToSave)
    console.log(resp);
    commit('updatePublication', { ...publication })

}

export const createPublication = async ({ commit }, publication) =>{
    const { title, description, content, comments } = publication
    const publicationToSave = { title, description, content, comments }

    const { data } = await publicationApi.post('/publications/2', publicationToSave)
    
    publicationToSave.id = data.id
    commit('addPublication', publicationToSave)
    return data.id
}

export const deletePublication = async ({ commit }, id) => {

    await publicationApi.delete(`/publications/${id}`)

    commit('deletePulication', id)

}