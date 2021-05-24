const header = document.querySelector("header");
const headerItemsMain = document.querySelector(".header_main--items");
const headerItems = document.querySelector(".header__items");
const headerItem = document.querySelector(".header__item");

const home = document.getElementById("home");

let i = 0;

function imgOne() {
  newItem = document.createElement("div");
  newItem.className = "home_item-one";
  newItem.innerHTML = `
  <h1>
    Learn the story<br />
    of the gold metal
  </h1>
  <a href="#sec-2">History</a>
  `;
  setTimeout(() => {
    newItem.classList.add("open-item-gallery");
  }, 50);
  document.getElementById("two").classList.remove("active");
  document.getElementById("tree").classList.remove("active");
  document.getElementById("four").classList.remove("active");
  document.getElementById("one").classList.add("active");

  home.append(newItem);
}

function imgTwo() {
  newItem = document.createElement("div");
  newItem.className = "home_item-two";
  newItem.innerHTML = `
  <h1>
    Calculate how much you<br />
    can earn on gold
  </h1>
  <a href="#sec-3">Calculate now</a>
  `;
  setTimeout(() => {
    newItem.classList.add("open-item-gallery");
  }, 50);
  document.getElementById("one").classList.remove("active");
  document.getElementById("tree").classList.remove("active");
  document.getElementById("four").classList.remove("active");
  document.getElementById("two").classList.add("active");

  home.append(newItem);
}

function imgTree() {
  newItem = document.createElement("div");
  newItem.className = "home_item-tree";
  newItem.innerHTML = `
  <h1>
    Contact us for more<br />
    information on gold
  </h1>
  <a href="#sec-4">Contact us</a>
  `;
  setTimeout(() => {
    newItem.classList.add("open-item-gallery");
  }, 50);
  document.getElementById("one").classList.remove("active");
  document.getElementById("two").classList.remove("active");
  document.getElementById("four").classList.remove("active");
  document.getElementById("tree").classList.add("active");

  home.append(newItem);
}

function imgFour() {
  newItem = document.createElement("div");
  newItem.className = "home_item-four";
  newItem.innerHTML = `
  <h1>
    Since the discovery of gold,<br />
    people have mined <br />about 160 tons of gold.
  </h1>
  `;
  setTimeout(() => {
    newItem.classList.add("open-item-gallery");
  }, 50);
  document.getElementById("one").classList.remove("active");
  document.getElementById("two").classList.remove("active");
  document.getElementById("tree").classList.remove("active");
  document.getElementById("four").classList.add("active");

  home.append(newItem);
}

imgOne();

document.getElementById("one").addEventListener("click", () => {
  imgOne();

  i = 0;
});

document.getElementById("two").addEventListener("click", () => {
  imgTwo();

  i = 1;
});

document.getElementById("tree").addEventListener("click", () => {
  imgTree();

  i = 2;
});

document.getElementById("four").addEventListener("click", () => {
  imgFour();

  i = 3;
});

document.getElementById("btn_right").addEventListener("click", () => {
  if (i === 0) {
    imgTwo();
    i++;
  } else if (i === 1) {
    imgTree();
    i++;
  } else if (i === 2) {
    imgFour();
    i++;
  } else if (i === 3) {
    imgOne();
    i = 0;
  }

  console.log(i);
});

document.getElementById("btn_left").addEventListener("click", () => {
  if (i === 0) {
    imgFour();
    i = 3;
  } else if (i === 1) {
    imgOne();
    i--;
  } else if (i === 2) {
    imgTwo();
    i--;
  } else if (i === 3) {
    imgTree();
    i--;
  }

  console.log(i);
});

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

grams.oninput = function () {
  if (this.value.length > 8) this.value = this.value.substr(0, 8);
};

function specialText(element, event) {
  if (
    event.keyCode == 187 ||
    event.keyCode == 189 ||
    event.keyCode == 109 ||
    event.keyCode == 107
  ) {
    return false;
  }
}

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
  price.textContent = Math.floor(totals * 100) / 100 + "$";
}

calcBtn.addEventListener("click", goldPrice);

const opnBtn = document.getElementById("opn_btn");
const calc = document.querySelector(".calc");
const calcItems = document.querySelector(".calc-items");
const secTree = document.getElementById("sec-3");

let testBtnCalc = false;

function openCalc() {
  if (!testBtnCalc) {
    setTimeout(() => {
      calc.classList.add("open_calc");
    }, 500);
    setTimeout(() => {
      calcItems.classList.add("open_calc-items");
    }, 700);
    setTimeout(() => {
      testBtnCalc = true;
    }, 1200);
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
      testBtnCalc = false;
    }, 1200);
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
  opnBtn.disabled = true;
  opnBtn.style.opacity = "0";
});

const sampOne = document.getElementById("samp-one");
const sampTwo = document.getElementById("samp-two");
const sampTree = document.getElementById("samp-tree");
const sampFour = document.getElementById("samp-four");
const sampFive = document.getElementById("samp-five");
const sampSix = document.getElementById("samp-six");

sampOne.addEventListener("click", () => {
  sample.value = "375";
  opnBtn.disabled = true;
  opnBtn.style.opacity = "0";
  sampOpenCalc();
  calc.scrollIntoView((top = false));
});

sampTwo.addEventListener("click", () => {
  sample.value = "583";
  opnBtn.disabled = true;
  opnBtn.style.opacity = "0";
  sampOpenCalc();
  calc.scrollIntoView((top = false));
});

sampTree.addEventListener("click", () => {
  sample.value = "585";
  opnBtn.disabled = true;
  opnBtn.style.opacity = "0";
  sampOpenCalc();
  calc.scrollIntoView((top = false));
});

sampFour.addEventListener("click", () => {
  sample.value = "750";
  opnBtn.disabled = true;
  opnBtn.style.opacity = "0";
  sampOpenCalc();
  calc.scrollIntoView((top = false));
});

sampFive.addEventListener("click", () => {
  sample.value = "958";
  opnBtn.disabled = true;
  opnBtn.style.opacity = "0";
  sampOpenCalc();
  calc.scrollIntoView((top = false));
});

sampSix.addEventListener("click", () => {
  sample.value = "999";
  opnBtn.disabled = true;
  opnBtn.style.opacity = "0";
  sampOpenCalc();
  calc.scrollIntoView((top = false));
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

const itemMenuOne = document.getElementById("one-item");
const itemMenuTwo = document.getElementById("two-item");
const itemMenuTree = document.getElementById("tree-item");
const itemMenuFour = document.getElementById("four-item");

let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    mobileMenuOpen();
    menu.classList.remove("close_menu", "open_menu");
  } else if (menuOpen === true) {
    mobileMenuClose();
  }
});

function openCloseMenu(element, action, clsName, time) {
  if (!action) {
    setTimeout(() => {
      element.classList.remove(clsName);
    }, time);
  } else {
    setTimeout(() => {
      element.classList.add(clsName);
    }, time);
  }
}

function mobileMenuOpen() {
  openCloseMenu(menuBtn, true, "open", 0);
  openCloseMenu(menu, true, "open_menu", 100);
  openCloseMenu(itemMenuOne, true, "open_menu-items", 700);
  openCloseMenu(itemMenuTwo, true, "open_menu-items", 800);
  openCloseMenu(itemMenuTree, true, "open_menu-items", 900);
  openCloseMenu(itemMenuFour, true, "open_menu-items", 1000);

  menuOpen = true;
}

function mobileMenuClose() {
  openCloseMenu(menuBtn, false, "open", 0);
  openCloseMenu(itemMenuFour, false, "open_menu-items", 100);
  openCloseMenu(itemMenuTree, false, "open_menu-items", 200);
  openCloseMenu(itemMenuTwo, false, "open_menu-items", 300);
  openCloseMenu(itemMenuOne, false, "open_menu-items", 400);
  openCloseMenu(menu, true, "close_menu", 600);

  menuOpen = false;
}


window.addEventListener("scroll", () => {
  if (scrollY > 50 && menuOpen === true) {
    mobileMenuClose();
  }
});
