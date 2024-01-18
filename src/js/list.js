window.onload = function () {

    let list = document.querySelector('.list');
    let buttonChoose = document.querySelector('.choose_topic');

    buttonChoose.onclick = function () {
        list.classList.toggle('active');
        list.classList.toggle('inactive');
        buttonChoose.classList.toggle('bottom_border_button_active');
        buttonChoose.classList.toggle('bottom_border_button_inactive');
    }

    let sum = function (parametrX, parametrY) {
        let summ = parametrX + parametrY;
        console.log(parametrX);
        return summ;
    }
    console.log(sum(5, 6));

    let handleClick = function (id) {
        console.log(id);
    }


    let buttonTrip = document.querySelector('.button_trip');
    let buttonCity = document.querySelector('.button_city');
    let buttonBook = document.querySelector('.button_book');
    let buttonPhoto = document.querySelector('.button_photo');
    let buttonRecipe = document.querySelector('.button_recipe');

    let article1 = document.querySelector('.article_1');
    let article2 = document.querySelector('.article_2');
    let article3 = document.querySelector('.article_3');
    let article4 = document.querySelector('.article_4');
    let article5 = document.querySelector('.article_5');

    buttonTrip.onclick = function () {
        // article2.classList.toggle('black_white_background');
        // article3.classList.toggle('black_white_background');
        // article4.classList.toggle('black_white_background');
        // article5.classList.toggle('black_white_background');
        buttonTrip.addEventListener("click", handleClick(buttonTrip.id))
        // handleClick(buttonTrip.id)
    }
    buttonCity.onclick = function () {
        article1.classList.toggle('black_white_background');
        article3.classList.toggle('black_white_background');
        article4.classList.toggle('black_white_background');
        article5.classList.toggle('black_white_background');

    }
    buttonBook.onclick = function () {
        article1.classList.toggle('black_white_background');
        article2.classList.toggle('black_white_background');
        article4.classList.toggle('black_white_background');
        article5.classList.toggle('black_white_background');

    }
    buttonPhoto.onclick = function () {
        article1.classList.toggle('black_white_background');
        article2.classList.toggle('black_white_background');
        article3.classList.toggle('black_white_background');
        article5.classList.toggle('black_white_background');

    }
    buttonRecipe.onclick = function () {
        article1.classList.toggle('black_white_background');
        article2.classList.toggle('black_white_background');
        article3.classList.toggle('black_white_background');
        article4.classList.toggle('black_white_background');

    }
}
