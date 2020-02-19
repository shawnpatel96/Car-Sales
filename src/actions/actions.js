

export const addFeature = addfeature =>{
    return { 
        type: "ADD_FEATURE", 
        payload: addfeature}
}

export const removeFeature = removefeature =>{
    return {
        type: "REMOVE_FEATURE",
        payload: removefeature
    }
}