window.onload = function () {
    let article1 = document.querySelector('.article_1');
    let article2 = document.querySelector('.article_2');
    let article3 = document.querySelector('.article_3');
    let article4 = document.querySelector('.article_4');
    let article5 = document.querySelector('.article_5');

    let buttonTrip = document.getElementById('button_trip');
    let buttonCity = document.getElementById('button_city');
    let buttonBook = document.getElementById('button_book');
    let buttonPhoto = document.getElementById('button_photo');
    let buttonRecipe = document.getElementById('button_recipe');
    let allThemes = document.getElementById('all_themes');

    let list = document.querySelector('.list');
    let buttonChoose = document.querySelector('.choose_topic');

    buttonChoose.onclick = function () {
        list.classList.toggle('active');
        list.classList.toggle('inactive');
        buttonChoose.classList.toggle('bottom_border_button_active');
        buttonChoose.classList.toggle('bottom_border_button_inactive');
    }



    let handleClick = function (select_article, select_button) {
        let articles = document.querySelectorAll('.article');

        for (let article of articles) {
            article.classList.toggle('black_white_background');
        }
        select_article.classList.toggle('black_white_background');

        let buttons = document.querySelectorAll('.list_of_tags_button');
        for (let button of buttons) {
            button.classList.remove('active_button');
        }
        select_button.classList.add('active_button')
        list.classList.remove('active');
        list.classList.add('inactive');
        buttonChoose.classList.remove('bottom_border_button_active');
        buttonChoose.classList.add('bottom_border_button_inactive');
    }

    buttonTrip.onclick = function () {
        handleClick(article1, buttonTrip)

    }

    buttonCity.onclick = function () {
        handleClick(article2, buttonCity)
    }
    buttonBook.onclick = function () {
        handleClick(article3, buttonBook)
    }
    buttonPhoto.onclick = function () {
        handleClick(article4, buttonPhoto)

    }
    buttonRecipe.onclick = function () {
        handleClick(article5, buttonRecipe)
    }
    allThemes.onclick = function () {
        handleClear(allThemes)
    }


}


