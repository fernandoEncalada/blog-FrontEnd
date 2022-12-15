
// export const myGetter = ( state ) => {
//  return state
// }

export const getPublicationsByTerm = ( state ) => ( term = '') => {
    if( term.length === 0 ) return state.publications

    return state.publications.filter( publication => publication.content.toLowerCase().includes( term.toLowerCase()))
}

export const getPublicationById = ( state ) => ( id = 0) => {
    id = parseInt(id)
    
    const publication = state.publications.find( publication => publication.id === id)

    if( !publication ) return

    return { ...publication }
}