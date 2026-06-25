$('.header__navbar-btn').on('click', function () {
  $(this).toggleClass('active')
  $('.header__navbar-list').stop(true, true).slideToggle(300)
})

// Закрывать меню при клике на ссылку
$('.header__navbar-link').on('click', function () {
  $('.header__navbar-btn').removeClass('active')
  $('.header__navbar-list').slideUp(300)
})
