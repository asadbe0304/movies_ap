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

movies.splice(100);

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


// console.log(allMovies);


allMovies.forEach((e) => {
    if (!year.includes(e.year)) {
        year.push(e.year);
    }
    if (!rate.includes(e.rating)) {
        rate.push(e.rating);
    }

    // console.log(category);

    // category.push(e.category)
    console.log(year);
    const clone = $('template').content.cloneNode(true);
    clone.querySelector('img').src = e.smallImg;
    clone.querySelector('.card-title').textContent = e.title;
    clone.querySelector('.card-text').textContent = "Description: " + e.summary
    clone.querySelector('.date').textContent = 'Date: ' + e.year + ' - year'
    clone.querySelector('.rate').textContent = 'Rating Imdb: ' + e.rating
    clone.querySelector('.cate').textContent = 'Category: ' + e.category
    clone.querySelector('.time').textContent = e.time
    clone.querySelector('.blink').innerHTML = `<a href="${e.yotube}"  class="btn blink bg-danger text-dark fw-bold" target=_blank>Youtube Watch</a>`
    $('.hero__right').appendChild(clone)
})

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
    // console.log(searchVal);

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

        // console.log(category);

        // category.push(e.category)
        console.log(year);
        const clone = $('template').content.cloneNode(true);
        clone.querySelector('img').src = e.smallImg;
        clone.querySelector('.card-title').textContent = e.title;
        clone.querySelector('.card-text').textContent = "Description: " + e.summary
        clone.querySelector('.date').textContent = 'Date: ' + e.year + ' - year'
        clone.querySelector('.rate').textContent = 'Rating Imdb: ' + e.rating
        clone.querySelector('.cate').textContent = 'Category: ' + e.category
        clone.querySelector('.time').textContent = e.time
        clone.querySelector('.blink').innerHTML = `<a href="${e.yotube}"  class="btn blink bg-danger text-dark fw-bold" target=_blank>Youtube Watch</a>`
        $('.hero__right').appendChild(clone)
    })

}



/// dark mode rejimi============
const elDarkBtn = $('.dark__img');
const elBody = $('body');
// console.log(elBody);
// console.log(elDarkBtn);

elDarkBtn.addEventListener('click', (e) => {
    elBody.classList.toggle('dark')
    elDarkBtn.classList.toggle('img_root')
    // elDarkBtn.setAttribute.add( 'style','transform:rotateX(180deg')
    // elDarkBtn.setAttribute.remove( 'style','transform:rotateX(180deg')
})
//  ! dark mode end 

// ! window scrool header fixed ===============
window.onscroll = function () {
    myFunction()
};

let  header = $(".header");

let sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// ============= NORMLIZE MOVIES END ==========////
// EXTRA PLUGINS//

// (function () {
//     const date = new Date();
//     const time = `${date.getFullYear()}`;
//     $("#copy").innerHTML = time;
// })();