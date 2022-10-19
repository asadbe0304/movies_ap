//  universal selector

const $ =function(selector){
    return document.querySelector(selector)
}

/// unversall all selector
const $$ =function(selector){
    return document.querySelectorAll(selector)
}