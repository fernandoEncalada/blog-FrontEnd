
// export const myAction = ( state ) => {

// }

export const setPublications = ( state, publications ) => {
    state.publications = []
    state.publications = [ ...state.publications, ...publications ]
    state.isLoading = false
}

export const updatePublication = ( state, publication ) => {
    const idx = state.publications.map( p => p.id ).indexOf( publication.id )
    state.publications[idx] = publication
}

export const addPublication = ( state, publication ) => {
    state.publications = [ publication, ...state.publications ]
}

export const deletePulication = ( state, id ) => {
    state.publications = state.publications.filter(publication => publication.id !== id)
}