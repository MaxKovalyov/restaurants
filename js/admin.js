function editNews() {
    let element = $(this).parent().parent();
    let date = $(element).find('#date').text();
    let description = $(element).find('#description').text();
    let content = $(element).find('#content').text();
    $('#form-news').find('#date').val(date);
    $('#form-news').find('#description').val(description);
    $('#form-news').find('#content').val(content);
}

function removeNews() {
    $(this).parent().parent().remove();
}