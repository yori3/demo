//初期値
$('.selectBox__output').each(function () {
  const defaultText = $(this).next('.selectBox__selector').children('.selectBox__selectorItem:first-child').text()
  $(this).text(defaultText);
})
$('.selectBox__output').on('click', function (e) {
  e.stopPropagation();
  if ($(this).hasClass('open')) {
    $(this).next('.selectBox__selector').slideUp();
  } else {
    $(this).next('.selectBox__selector').slideDown();
  }
  $(this).toggleClass('open');
});

$('.selectBox__selectorItem').on('click', function () {
  const selectVal = $(this).data('select');
  const selectText = $(this).text();
  $(this).parent('.selectBox__selector').prev('.selectBox__output').text(selectText);
  $(this).parent('.selectBox__selector').slideUp();
  $(this).parents('.selectBox__output').slideDown();
  $(this).parent('.selectBox__selector').next('select').val(selectVal);
});