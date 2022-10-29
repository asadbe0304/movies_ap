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

movies.splice(10);

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

let year = [];
let rate = [];


function renderMovies() {

    allMovies.forEach((e) => {
        if (!year.includes(e.year)) {
            year.push(e.year);
        }
        if (!rate.includes(e.rating)) {
            rate.push(e.rating);
        }
        const clone = $('template').content.cloneNode(true);
        clone.querySelector('img').src = e.smallImg;
        clone.querySelector('.card-title').textContent = e.title;
        clone.querySelector('.card-text').textContent = "Description: " + e.summary
        clone.querySelector('.date').textContent = 'Date: ' + e.year + ' - year'
        clone.querySelector('.rate').textContent = 'Rating Imdb: ' + e.rating
        clone.querySelector('.cate').textContent = 'Category: ' + e.category
        clone.querySelector('.time').textContent = e.time
        // clone.querySelector('.blink').innerHTML = `<a href="${e.yotube}"  class="btn blink bg-danger text-dark fw-bold" target=_blank>Youtube Watch</a>`
        clone.querySelector('.card__inner').innerHTML = `
        <a href="${e.yotube}"  class="btn blink bg-danger text-dark fw-bold" target=_blank>Youtube Watch</a>
        <a data-id="${e.id}"  class="btn btn-dark text-white fw-bold read" target=_blank>Read</a>`
        $('.hero__right').appendChild(clone)
    })

}

renderMovies();

year.sort()
year.forEach((e) => {
    const option = document.createElement('option');
    option.innerHTML = e;
    $('.date').appendChild(option)
})

rate.sort()
rate.forEach((e) => {
    const option = document.createElement('option');
    option.innerHTML = e;
    $('.rate').appendChild(option)
})

function dynamicCategory() {

    let category = [];
    allMovies.forEach((e) => {
        e.category.forEach((e) => {
            if (!category.includes(e)) {
                category.push(e);
            }
        });
    });
    category.sort()
    category.forEach((e) => {
        const option = document.createElement('option');
        option.innerHTML = e;
        $('.form-control').appendChild(option)
    })
}

dynamicCategory();


const findFilm = (str, rat, ctg) => {

    return allMovies.filter((e) => {
        return e.title.match(str) && e.rating >= rat && e.category.includes(ctg);

    })
}


$('.btn-search').addEventListener('click', () => {
    $('.hero__right').innerHTML = ` <div class="lds-ring">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
</div>`

    const searchVal = $('#film-name').value.toLowerCase().trim();
    const rating = $('.rate').value;
    const catg = $('.category').value;
    const searchText = new RegExp(searchVal, 'gi');
    const searchresult = findFilm(searchText, rating, catg);
    console.log(searchresult);

    setTimeout(() => {
        $('.hero__right').innerHTML = ""
        renderSearchResult(searchresult);
        $('.result').innerHTML = `<h2 class="text-danger fw-bold">${searchresult.length} information found</h2>`
    }, 2000);

})
//  find film end//


function renderSearchResult(data = []) {
    data.forEach((e) => {
        if (!year.includes(e.year)) {
            year.push(e.year);
        }
        if (!rate.includes(e.rating)) {
            rate.push(e.rating);
        }
        const clone = $('template').content.cloneNode(true);
        clone.querySelector('img').src = e.smallImg;
        clone.querySelector('.card-title').textContent = e.title;
        clone.querySelector('.card-text').textContent = "Description: " + e.summary
        clone.querySelector('.date').textContent = 'Date: ' + e.year + ' - year'
        clone.querySelector('.rate').textContent = 'Rating Imdb: ' + e.rating
        clone.querySelector('.cate').textContent = 'Category: ' + e.category
        clone.querySelector('.time').textContent = e.time
        clone.querySelector('.card-footer').innerHTML = `
        <a href="${e.yotube}"  class="btn blink bg-danger text-dark fw-bold" target=_blank>Youtube Watch</a>
        <a data-id="${e.id}"  class="btn btn-dark text-white fw-bold read" target=_blank>Read</a>`
        $('.hero__right').appendChild(clone)
    })

}



/// dark mode rejimi============
const elDarkBtn = $('.dark__img');
const elBody = $('body');

elDarkBtn.addEventListener('click', (e) => {
    elBody.classList.toggle('dark')
    elDarkBtn.classList.toggle('img_root')
})
//  ! dark mode end 

// ! window scrool header fixed ===============
window.onscroll = function () {
    myFunction()
};

let header = $(".header");

let sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

//  modal decsription
$$('.read').forEach((event) => {
    event.addEventListener('click', (evt) => {

        $('.modal-description').classList.add('d-flex');

        $('.btn-primary').addEventListener('click', (e) => {

            $('.modal-description').classList.remove('d-flex');

        })
    })
})

//  modal description end 

// saved bookmark film 
$('.hero__bookmark').addEventListener('click', (e)=>{
    $('.hero__bookmark').classList.toggle('bookmark-show')
    $('.card__saved').classList.toggle("card__saved--show")
})