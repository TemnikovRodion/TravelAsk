// Функция фильтрации данных
function filterData(data, countries, starsList, typesButtons, priceSlider) {
    // Фильтрация по стране  и диапазону цен
    data = filterByCountry(data, countries, priceSlider);
    
    // Фильтрация по звездам
    data = filterByStars(data, starsList);

    // Фильтрация по типу
    data = filterByTypes(data, typesButtons);

    // Фильтрация по ценам
    data = filterByPrices(data, priceSlider);

    return data;
} // filterData

// Фильтрация по стране
function filterByCountry(data, countries) {
    if(countries.val() === "") return data;

    return data.filter(i => i.country === countries.val()) 
} // filterByCountry

// Фильтрация по звездам
function filterByStars(data, starsList) {
    // Генерация массива со звездами
    let stars = [];
    $.each(starsList.children("li"), function(i, item) {
        if($(item).children("input").prop("checked") == true) stars.push(i);
    })

    if(stars.length === 0) return data;

    return data.filter(i => stars.includes(i.stars));
} // filterByStars

// Фильтрация по типам
function filterByTypes(data, typesButtons) {
    // Генерация массива с типами
    let types = [];
    $.each(typesButtons.children(".button"), function(i, item) {
        if($(item).hasClass("active")) types.push($(item).text());
    })

    if(types.length === 0) return data;

    return data.filter(i => types.includes(i.type));
} // filterByTypes

// Фильтрация по диапазону цен
function filterByPrices(data, priceSlider) {
    let min_price = priceSlider.slider("option", "values")[0];
    let max_price = priceSlider.slider("option", "values")[1];

    return data.filter(i => i.min_price >= min_price && i.min_price <= max_price) 
} // filterByPrices