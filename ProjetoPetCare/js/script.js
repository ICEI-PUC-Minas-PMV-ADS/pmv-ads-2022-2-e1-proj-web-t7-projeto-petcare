$(".card").owlCarousel({
  margin: 20,
  loop: true,
  autoplayTimeOut: 2000,
  autoplayHoverPauser: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    500: {
      items: 2,
      nav: false,
    },
    1440: {
      items: 3,
      nav: false,
    },
  },
});

$(".btn").click(function () {
  $(".menu-mobile").slideToggle("show");
});

const balanceDisplay = document.querySelector("#balance");
const form = document.querySelector("#form");
const inputEmailName = document.querySelector("#text");
const inputEmailAmount = document.querySelector("#amount");

const localStorageEmail = JSON.parse(localStorage.getItem("Email"));

let transactions =
  localStorage.getItem("email") !== null ? localStorageEmail : [];

const removeEmail = (ID) => {
  dummyEmail = dummyEmail.filter((email) => email.id !== ID);
  Init();
};

const addEmailIntoDOM = (email) => {
  const operador = email.amount < 0 ? "-" : "+";
  const CSSClass = email.amount < 0 ? "minus" : "plus";
  const amountWithoutOperator = Math.abs(email.amount);
  const li = document.createElement("li");

  li.classList.add(CSSClass);
  li.innerHTML = "";
};

const updateLocalStorage = () => {
  localStorage.getItem("email", JSON.stringify(email));
};
