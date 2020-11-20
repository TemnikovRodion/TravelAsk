// Функция формиования списка отелей
function createHotelsList(data) {
    $("main").html("");

    $.each(data, function (i, item) {
        var listItem =
            `<section class="card">
                <div class="card_image">
                    <img src="../img/hotel${item.id}.png">
                </div>
                
                <div class="card_content">
                    <p class="card_location">
                        ${item.address}
                    </p>
                    <h3 class="card_name">
                        ${item.name}
                    </h3>
                    <p class="card_rating">
                        ${getStartList(item.stars)}
                        <span class="card_name_description">${item.type}</span>
                    </p>
                    <p class="card_description">
                        ${item.description}
                    </p>
                </div>

                <div class="card_review">
                    <div class="card_review_rating">
                        <i class="far fa-star"></i>
                        Нет оценок.
                    </div>

                    <div class="last_review">
                        ${item.last_review}
                    </div>

                    <div class="card_price">
                        от ${item.min_price} &#8381;
                        <button class="card_reserve">Забронировать</button>
                    </div>
                </div>
            </section>`

        $("main").append(listItem);
    })
} // function

// Функция получения блока с звездами
function getStartList(starsCount) {
    switch (starsCount) {
        case 1:
            return `<i class="fas fa-star"></i>
                    <span class="card_rating_description">${starsCount} звезда</span>`;

        case 2:
            return `<i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <span class="card_rating_description">${starsCount} звезды</span>`;

        case 3:
            return `<i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <span class="card_rating_description">${starsCount} звезды</span>`;

        case 4:
            return `<i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <span class="card_rating_description">${starsCount} звезды</span>`;

        case 5:
            return `<i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <span class="card_rating_description">${starsCount} звезд</span>`;
    }
} // getStartList

// Функция очистки всех полей фильтров
function clearFilters(countries, starsList, types, priceSlider) {
    // Обнуление текста в поле ввода стран
    countries.val("");

    // Обнуление всех чекбоксов по звездам
    let listItems = starsList.children("li");
    $.each(listItems, function (i, item) {
        $(item).children("input").prop("checked", false);
    })

    // Обнуление кнопок
    types.children(".button").removeClass("active");

    // Обнуление значения слайдера
    let minSliderValue = priceSlider.slider("option", "min");
    let maxSliderValue = priceSlider.slider("option", "max");

    priceSlider.slider("option", "values", [minSliderValue, maxSliderValue]);
} // clearFilters