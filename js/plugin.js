//  universal selector

const $ = function (selector) {
    return document.querySelector(selector)
}

/// unversall all selector
const $$ = function (selector) {
    return document.querySelectorAll(selector)
}

//  ! createElement======
const createElement = function (tagName, className, content) {
    const newElement = document.createElement(tagName);
    if (className) {
        newElement.setAttribute('class', className);
    }

    if (content) {
        newElement.innerHTML = content
    }
    return newElement;
}