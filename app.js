const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (scrollY > 50) {
    header.classList.add("header_down");
  } else if (scrollY === 0) {
    header.classList.remove("header_down");
  }
});

const secItems = document.querySelector(".sec-item");
secItems.style.transition = `transform 2s ease-in-out 0s`;

function galery() {
  setTimeout(() => {
    secItems.style.transform = `translateX(-12.5%)`;
  }, 3000);

  setTimeout(() => {
    secItems.style.transform = `translateX(-25%)`;
  }, 8000);

  setTimeout(() => {
    secItems.style.transform = `translateX(-37.5%)`;
  }, 13000);

  setTimeout(() => {
    secItems.style.transform = `translateX(-50%)`;
  }, 18000);

  setTimeout(() => {
    secItems.style.transform = `translateX(-62.5%)`;
  }, 23000);

  setTimeout(() => {
    secItems.style.transform = `translateX(-75%)`;
  }, 28000);

  setTimeout(() => {
    secItems.style.transform = `translateX(-87.5%)`;
  }, 33000);
}

galery();

setInterval(() => {
  secItems.style.transform = `translateX(0%)`;
  galery();
}, 38000);

// SCROLL

const animItems = document.querySelectorAll("._anim-items");

if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHight = animItem.offsetHeight;
      const animItemOffSet = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHight / animStart;

      if (animItemHight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        pageYOffset > animItemOffSet - animItemPoint &&
        pageYOffset < animItemOffSet + animItemHight
      ) {
        animItem.classList.add("_active");
      } else {
        if (!animItem.classList.contains("_anim-no-hide")) {
          animItem.classList.remove("_active");
        }
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
  setTimeout(() => {
    animOnScroll();
  }, 300);
}

// Calculate Logic

const sample = document.getElementById("samples");
const calcBtn = document.getElementById("calc");
const grams = document.getElementById("grams");
const price = document.getElementById("price");

function goldPrice() {
  if (sample.value === "375") {
    const total = grams.value * 21.61;
    out(total);
    console.log(total);
  } else if (sample.value === "583") {
    const total = grams.value * 33.64;
    out(total);
    console.log(total);
  } else if (sample.value === "585") {
    const total = grams.value * 36.93;
    out(total);
    console.log(total);
  } else if (sample.value === "750") {
    const total = grams.value * 47.46;
    out(total);
    console.log(total);
  } else if (sample.value === "958") {
    const total = grams.value * 55.12;
    out(total);
    console.log(total);
  } else if (sample.value === "999") {
    const total = grams.value * 56.07;
    out(total);
    console.log(total);
  }
  console.log(grams.value);
  console.log(sample.value);
}

function out(totals) {
  price.textContent = totals + "$";
}

calcBtn.addEventListener("click", goldPrice);

const opnBtn = document.getElementById("opn_btn");
const calc = document.querySelector(".calc");
const calcItems = document.querySelector(".calc-items");
const secTree = document.getElementById("sec-3");

let testBtnCalc = false;

function openCalc() {
  if (!testBtnCalc) {
    calc.style.transform = "scale(1)";
    secTree.classList.add("padd-sec-3");
    setTimeout(() => {
      calc.classList.add("open_calc");
    }, 500);
    setTimeout(() => {
      calcItems.classList.add("open_calc-items");
    }, 700);
    testBtnCalc = true;
    opnBtn.textContent = "Close Calculate";
    console.log(testBtnCalc);
  } else {
    calcItems.classList.remove("open_calc-items");
    setTimeout(() => {
      calc.classList.remove("open_calc");
    }, 700);
    setTimeout(() => {
      secTree.classList.remove("padd-sec-3");
    }, 1200);
    setTimeout(() => {
      calc.style.transform = "scale(0)";
    }, 1200);
    opnBtn.textContent = "Open Calculate";
    testBtnCalc = false;
  }
}

function sampOpenCalc() {
  if (!testBtnCalc) {
    calc.style.transform = "scale(1)";
    secTree.classList.add("padd-sec-3");
    setTimeout(() => {
      calc.classList.add("open_calc");
    }, 500);
    setTimeout(() => {
      calcItems.classList.add("open_calc-items");
    }, 700);
    testBtnCalc = true;
    console.log(testBtnCalc);
  }
}

opnBtn.addEventListener("click", () => {
  openCalc();
});

const sampOne = document.getElementById("samp-one");
const sampTwo = document.getElementById("samp-two");
const sampTree = document.getElementById("samp-tree");
const sampFour = document.getElementById("samp-four");
const sampFive = document.getElementById("samp-five");
const sampSix = document.getElementById("samp-six");

sampOne.addEventListener("click", () => {
  sample.value = "375";
  opnBtn.textContent = "Close Calculate";
  sampOpenCalc();
});

sampTwo.addEventListener("click", () => {
  sample.value = "583";
  opnBtn.textContent = "Close Calculate";
  sampOpenCalc();
});

sampTree.addEventListener("click", () => {
  sample.value = "585";
  opnBtn.textContent = "Close Calculate";
  sampOpenCalc();
});

sampFour.addEventListener("click", () => {
  sample.value = "750";
  opnBtn.textContent = "Close Calculate";
  sampOpenCalc();
});

sampFive.addEventListener("click", () => {
  sample.value = "958";
  opnBtn.textContent = "Close Calculate";
  sampOpenCalc();
});

sampSix.addEventListener("click", () => {
  sample.value = "999";
  opnBtn.textContent = "Close Calculate";
  sampOpenCalc();
});

// Contact us

const firstName = document.getElementById("name");
const email = document.getElementById("email");
const text = document.getElementById("text");

const sendBtn = document.getElementById("send_btn");
const sendMessage = document.querySelector(".messageSend");

sendBtn.addEventListener("click", () => {
  const formObj = {
    firstName: firstName.value,
    email: email.value,
    text: text.value,
  };

  if (
    firstName.value.trim() === "" ||
    email.value.trim() === "" ||
    text.value.trim() === ""
  ) {
    return;
  } else if (email.value.includes("@")) {
    sendMessage.classList.add("messageSendOpen");
    sendMessage.textContent = `${firstName.value}, your message has been sent`;
    firstName.value = "";
    email.value = "";
    text.value = "";
    setTimeout(() => {
      sendMessage.classList.remove("messageSendOpen");
    }, 3000);
  }

  console.log(formObj);
});

// BtnUP

const btnUp = document.querySelector(".up__btn");

window.addEventListener("scroll", () => {
  if (scrollY > 200) {
    btnUp.classList.add("open_up-btn");
  } else {
    btnUp.classList.remove("open_up-btn");
  }
});

// MobileBtn

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".mobile__menu");

const itemMenuOne = document.getElementById("one");
const itemMenuTwo = document.getElementById("two");
const itemMenuTree = document.getElementById("tree");
const itemMenuFour = document.getElementById("four");

let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    setTimeout(() => {
      menu.classList.add("open_menu");
    }, 100);
    setTimeout(() => {
      itemMenuOne.classList.add("open_menu-items");
    }, 700);
    setTimeout(() => {
      itemMenuTwo.classList.add("open_menu-items");
    }, 800);
    setTimeout(() => {
      itemMenuTree.classList.add("open_menu-items");
    }, 900);
    setTimeout(() => {
      itemMenuFour.classList.add("open_menu-items");
    }, 1000);
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    setTimeout(() => {
      itemMenuFour.classList.remove("open_menu-items");
    }, 100);
    setTimeout(() => {
      itemMenuTree.classList.remove("open_menu-items");
    }, 200);
    setTimeout(() => {
      itemMenuTwo.classList.remove("open_menu-items");
    }, 300);
    setTimeout(() => {
      itemMenuOne.classList.remove("open_menu-items");
    }, 400);
    setTimeout(() => {
      menu.classList.remove("open_menu");
    }, 600);
    menuOpen = false;
  }
});

window.addEventListener("scroll", () => {
  if (scrollY > 50) {
    menuBtn.classList.remove("open");
    setTimeout(() => {
      itemMenuFour.classList.remove("open_menu-items");
    }, 100);
    setTimeout(() => {
      itemMenuTree.classList.remove("open_menu-items");
    }, 200);
    setTimeout(() => {
      itemMenuTwo.classList.remove("open_menu-items");
    }, 300);
    setTimeout(() => {
      itemMenuOne.classList.remove("open_menu-items");
    }, 400);
    setTimeout(() => {
      menu.classList.remove("open_menu");
    }, 600);
    menuOpen = false;
  }
});
