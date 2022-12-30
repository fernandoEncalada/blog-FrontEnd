
// export const myAction = ( state ) => {

// }

export const setCategories = ( state, categories ) => {
    state.categories = []
    state.categories = [ ...state.categories, ...categories ]
}

// export const updatePublication = ( state, publication ) => {
//     const idx = state.publications.map( p => p.id ).indexOf( publication.id )
//     state.publications[idx] = publication
// }

export const addCategory = ( state, category ) => {
    state.categories = [ category, ...state.categories ]
}

// export const deletePulication = ( state, id ) => {
//     state.publications = state.publications.filter(publication => publication.id !== id)
// }