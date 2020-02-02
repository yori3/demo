//タブ
/* tab切替メニュー */
const tabLen = $('.tabItem').length;
for (i = 0; i < tabLen; i++) {
  tabChange(i);
}

function tabChange(index) {
  $('.tabItem:nth-child(' + (index + 1) + ')').on('click', function (e) {
    e.preventDefault();
    $('.tabItem.tabItem-current').removeClass('tabItem-current');
    $(this).addClass('tabItem-current');
    $('.tabBlock.tabBlock-show').removeClass('tabBlock-show');
    $('.tabBlock:nth-child(' + (index + 1) + ')').addClass('tabBlock-show');
  });
}