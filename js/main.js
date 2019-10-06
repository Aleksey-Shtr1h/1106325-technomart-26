

var write_us_link = document.querySelector(".contacts-info-btn");
var write_us_choice = document.querySelector(".modal-write-us");

var close_btn_form = write_us_choice.querySelector(".modal-close");
var login_input_form = write_us_choice.querySelector("[name=modal-user-login]")

write_us_link.addEventListener('click', function(evt) {
  evt.preventDefault();
  write_us_choice.classList.add('modal-show');
  login_input_form.focus()
});

close_btn_form.addEventListener('click', function(evt) {
  evt.preventDefault();
  write_us_choice.classList.remove('modal-show');
});


// var buy_btn_link = document.querySelector(".item-btn-buy");
// var add_cart_choice = document.querySelector(".modal-add-cart");

// var close_btn_form = add_cart_choice.querySelector(".modal-close");

// buy_btn_link.addEventListener('click', function(evt) {
//   evt.preventDefault();
//   add_cart_choice.classList.add('modal-show');
// });

// close_btn_form.addEventListener('click', function(evt) {
//   evt.preventDefault();
//   add_cart_choice.classList.remove('modal-show');
// });
