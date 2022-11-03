"use strict";

const elModal = document.querySelector(".modal-mobile");
const elList = document.querySelector('.list__inner')
const elArrow = document.querySelector('.arrow')

function mobileMenu() {
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
}

mobileMenu();

movies.splice(20);
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
        const clone = createElement('div', 'cards', `
        <div class="card border-0">
        <img src="${e.smallImg}" class="card-img-top" alt="...">
        <span class="d-block fw-bold text-danger time p-3">${e.time}</span>
        <div class="card-body">
        <h5 class="card-title fw-bold">${e.title}</h5>
            <p class="card-text">${e.summary}</p>
            <p class="cate fw-bold">${e.year}</p>
            <p class="date fw-bold">${e.rating}</p>
            <div class="star__rating rate d-flex py-2 gap-1">
                <img class="star" src="./images/ic.png" alt="">
                <img class="star" src="./images/ic.png" alt="">
                <img class="star" src="./images/ic.png" alt="">
                <img class="star" src="./images/ic.png" alt="">
                <img class="star" src="./images/ic.png" alt="">
                </div>
                <div class="card-footer">
                <div class="card__inner">
                <a href="${e.yotube}"  class="btn blink bg-danger text-dark" target=_blank>Youtube Watch</a>
                <a data-id="${e.id}"  class="btn btn-dark text-white read" target=_blank>Read</a>
                </div>
                <img class="saved-mark bookmark" data-bookmark=${e.id} src="./images/bookmark.png" width="32" height="32" alt="">
                </div>
                </div>
                </div>`)
        clone.dataset.moieId = e.id;
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
    // const search = localStorage.setItem('search', e.target.value);
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

        const clone = createElement('div', 'cards', `
        <div class="card border-0">
        <img src="${e.smallImg}" class="card-img-top" alt="...">
        <span class="d-block fw-bold text-danger time p-3">${e.time}</span>
        <div class="card-body">
            <h5 class="card-title fw-bold">${e.title}</h5>
            <p class="card-text">${e.summary}</p>
            <p class="cate fw-bold">${e.year}</p>
            <p class="date fw-bold">${e.rating}</p>
            <div class="star__rating rate d-flex py-2 gap-1">
                <img class="star" src="./images/ic.png" alt="">
                <img class="star" src="./images/ic.png" alt="">
                <img class="star" src="./images/ic.png" alt="">
                <img class="star" src="./images/ic.png" alt="">
                <img class="star" src="./images/ic.png" alt="">
            </div>
            <div class="card-footer">
                <div class="card__inner">
                <a href="${e.yotube}"  class="btn blink bg-danger text-dark" target=_blank>Youtube Watch</a>
                <a data-id="${e.id}"  class="btn btn-dark text-white read" target=_blank>Read</a>
                </div>
                <img class="saved-mark bookmark" data-bookmark=${e.id} src="./images/bookmark.png" width="32" height="32" alt="">
            </div>
        </div>
    </div>`)
        $('.hero__right').appendChild(clone)
    })
}
//! dark mode start============
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
// !window onscroll header fixed end=========
// ! modal decsription claos =============

$('.btn-primary').addEventListener('click', (e) => {

    $('.modal-description').classList.add('d-none');
})

function modalDesc(id) {
    $('.modal-film').innerHTML = "";
    const filmItem = allMovies.filter((e) => {
        return e.id === id;
    })
    const data = filmItem[0]
    const modal = createElement('div', 'film-content', ` <div class="modal-desc">
    <img class="mod-img" src="${data.smallImg}" width="250" height="250"
    alt="Modal read film img">
        <div class="card-captions">
            <h1 class="fw-bold">
            ${data.title}
            </h1>
        <p>
        ${data.summary}
        </p>
        </div>
    </div>
    `)
    $('.modal-film').appendChild(modal)
}
//!  modal description end  ===
//! saved bookmark film start

$('.open__saved').addEventListener('click', (e) => {
    $('.hero__bookmark').classList.add('bookmark-show')
    $('.card__saved').classList.add("card__saved--show")
})
$('#close-saved').addEventListener('click', (e) => {
    $('.hero__bookmark').classList.remove('bookmark-show')
    $('.card__saved').classList.remove("card__saved--show")
})

// ! bookmark saved result function  start============================================

const bookmarks = [];

function addBookmark(id) {
    $(".card__saved").innerHTML = "";

    const elfilm = allMovies.filter(element => {
        return element.id === id
    })
    if (!bookmarks.includes(elfilm[0])) {
        bookmarks.push(elfilm[0])
    } else {
        alert('Added to again')
    }

    if (bookmarks.length > 0) {

        bookmarks.forEach((e) => {
            const item = createElement('div', 'cards-info', `
            <img class="saved-img" src="${e.smallImg}" width="100" height="100"> 
            <div class="card-cap">
            <h3 class="card__caption">
            ${e.title}
            </h3>
            <a href="${e.yotube}" class="text-white bg-danger p-2 border-0 rounded-2 mx-2" target="_blank">Watch</a>
            <img class="trash" src="./images/trash-can.png" width="32" height="32" alt="">
            </div>
        `)
            $(".card__saved").appendChild(item);
            console.log(bookmarks);
            $('.count-film').innerHTML = bookmarks.length
        })
    }
}

window.addEventListener("click", (e) => {
    if (e.target.classList.contains("read")) {
        $(".modal-description").classList.remove("d-none");
        modalDesc(e.target.getAttribute("data-id"));
    }
    // // --------------BOOKMARK -------------------
    if (e.target.classList.contains('bookmark')) {
        addBookmark(e.target.getAttribute("data-bookmark"))
    }
});

// !multi language===========

// function multiLanguage() {
//     const lang = {
//         uz: {
//             home: "Bosh sahifa",
//             film: "Biz haqimizda",
//             watch: "Ko'rmoq",
//             category: "Katetgoriyalar",
//             trailer: "Trailer"
//         },
//         eng: {
//             home: "Bosh sahifa",
//             film: "Biz haqimizda",
//             watch: "Ko'rmoq",
//             category: "Katetgoriyalar",
//             trailer: "Trailer"
//         }
//     }

//     localStorage.setItem('language', JSON.stringify(lang));
// }

// multiLanguage()


// $('#lang').addEventListener('click', (e) => {
//     const langs = JSON.parse(localStorage.getItem('language'))
//     localStorage.setItem("selectedLanguage", e.target.value);
//     selectLang(langs[e.target.value])
// })
// // const langText = $$('#lang');
// // langText.forEach((e) => {
// //     e.addEventListener('click', (e) => {
// //     })
// // })

// function selectLang(selectedLanguage) {
//     console.log(selectedLanguage);

//     const navItem = $$('.list__item--link   ');

//     let array = []

//     for (let key in selectedLanguage) {
//         array.push(selectedLanguage[key])
//         console.log(array);
//     }
//     navItem.forEach((e, i,a) => {
//         e.textContent = array[i]
//         // console.log(e);
//     })
//     console.log(array);

// }

// (
//     function () {
//         let select = localStorage.getItem('selectedLanguage')
//         let langs = JSON.parse(localStorage.getItem('language'))
//         console.log(select);
//         console.log(langs);
//         const selected = langs[select];

//         selectLang(selected)
//     }()
// )