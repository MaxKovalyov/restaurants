function editNews() {
    let element = $(this).parent().parent();
    let date = $(element).find('#date').text();
    let description = $(element).find('#description').text();
    let content = $(element).find('#content').text();
    $('#form').find('#date').val(date);
    $('#form').find('#description').val(description);
    CKEDITOR.instances['content'].setData(content);
}

function removeNews() {
    $(this).parent().parent().remove();
}

function editCategory() {
    let element = $(this).parent().parent();
    let category = $(element).find('#category').text();
    $('#form').find('#category').val(category);
}

function removeCategory() {
    $(this).parent().parent().remove();
}

function editMenu() {
    let element = $(this).parent().parent();
    let name = $(element).find('#name').text();
    let cost = $(element).find('#cost').text();
    let category = $(element).find('#category').text();
    $('#form').find('#name').val(name);
    $('#form').find('#cost').val(cost);
    $('#form').find('#category').val(category);
}

function removeMenu() {
    $(this).parent().parent().remove();
}

function editRestaurant() {
    let element = $(this).parent().parent();
    let name = $(element).find('#name').text();
    let address = $(element).find('#address').text();
    $('#form').find('#name').val(name);
    $('#form').find('#address').val(address);
}

function removeRestaurant() {
    $(this).parent().parent().remove();
}

function removeReview() {
    $(this).parent().parent().remove();
}

function editTableOrder() {
    let element = $(this).parent().parent();
    let date = $(element).find('#date').text();
    let restaurant = $(element).find('#restaurant').text();
    let fio = $(element).find('#fio').text();
    let guests = $(element).find('#guests').text();
    let phone = $(element).find('#phone').text();
    let content = $(element).find('#content').text();
    $('#form').find('#date').val(date);
    $('#form').find('#restaurant').val(restaurant);
    $('#form').find('#fio').val(fio);
    $('#form').find('#guests').val(guests);
    $('#form').find('#phone').val(phone);
    CKEDITOR.instances['content'].setData(content);
}

function removeTableOrder() {
    $(this).parent().parent().remove();
}

function editEventOrder() {
    let element = $(this).parent().parent();
    let date = $(element).find('#date').text();
    let restaurant = $(element).find('#restaurant').text();
    let fio = $(element).find('#fio').text();
    let guests = $(element).find('#guests').text();
    let phone = $(element).find('#phone').text();
    let content = $(element).find('#content').text();
    let cost = $(element).find('#cost').text();
    $('#form').find('#date').val(date);
    $('#form').find('#restaurant').val(restaurant);
    $('#form').find('#fio').val(fio);
    $('#form').find('#guests').val(guests);
    $('#form').find('#phone').val(phone);
    $('#form').find('#cost').val(cost);
    CKEDITOR.instances['content'].setData(content);
}

function removeEventOrder() {
    $(this).parent().parent().remove();
}