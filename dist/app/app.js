const $box_social = document.querySelector(".profile__box");
const $buttton_share = document.querySelector(".profile__share");
$buttton_share.addEventListener("click", () =>
  $box_social.classList.toggle("profile__box--active")
);
