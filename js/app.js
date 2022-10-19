"use strict";


const elModal = document.querySelector(".modal-mobile");

const elList = document.querySelector('.list__inner')

const elArrow = document.querySelector('.arrow')

$('.btn').addEventListener('click', () => {
    $('.modal-mobile').classList.add("swipe")
    // $('.line2').style.display="none"
})
$('.mobile').addEventListener('click', () => {
    $('.modal-mobile').classList.remove("swipe")
})

$(".drop").addEventListener("click", () => {
    elList.classList.toggle('d-block');
    elArrow.classList.toggle('rotate')
    console.log(elArrow);
})

movies.splice(50);

// ============= NORMLIZE MOVIES ==========////

const allMovies = movies.map((e) => {
    return {
        title: e.title,
        year: e.year,
        category: e.categories,
        id: e.imdbId,
        rating: e.imdbRating,
        time: `${Math.trunc(e.runtime / 60)} hours ${e.runtime % 60} minut`,
        lang: e.language,
        yotube: `https://www.youtube.com/embed/${e.youtubeId}`,
        summary: e.summary,
        smallImg: e.smallThumbnail,
        largeImg: e.bigThumbnail,
    };
});

console.log(allMovies);


allMovies.forEach((e) => {
    const clone = $('#template').content.cloneNode(true);
    clone.querySelector('img').src = e.largeImg;
    clone.querySelector('.card-title').textContent = e.title;
    clone.querySelector('.card-text').textContent = "Description: " + e.summary
    clone.querySelector('.date').textContent = 'Date: ' + e.year + ' - year'
    clone.querySelector('.rate').textContent = 'Rating Imdb: ' + e.rating
    clone.querySelector('.cate').textContent = 'Category: ' + e.category
    clone.querySelector('.time').textContent = e.time
    $('.hero__right').appendChild(clone)
})


// ============= NORMLIZE MOVIES END ==========////
// EXTRA PLUGINS//

// (function () {
//     const date = new Date();
//     const time = `${date.getFullYear()}`;
//     $("#copy").innerHTML = time;
// })();