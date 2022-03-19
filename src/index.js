import './style.css';
import html from './index.html';

const home = document.getElementById('home');

let i = 0;
let newItem;

const createImage = (cls, inrHTML) => {
  newItem = document.createElement('div');
  newItem.className = cls;
  newItem.innerHTML = inrHTML;
  setTimeout(() => {
    newItem.classList.add('open-item-gallery');
  }, 50);

  home.append(newItem);
};

const imgOne = () => {
  createImage(
    'home_item-one',
    `<h1>
      Learn the story<br />
      of the gold metal
     </h1>
     <a href="#sec-2">History</a>
    `
  );

  document.getElementById('two').classList.remove('active');
  document.getElementById('three').classList.remove('active');
  document.getElementById('four').classList.remove('active');
  document.getElementById('one').classList.add('active');
};

const imgTwo = () => {
  createImage(
    'home_item-two',
    `<h1>
        Calculate how much you<br />
        can earn on gold
    </h1>
    <a href="#sec-3">Calculate now</a>
    `
  );
  document.getElementById('one').classList.remove('active');
  document.getElementById('three').classList.remove('active');
  document.getElementById('four').classList.remove('active');
  document.getElementById('two').classList.add('active');
};

const imgThree = () => {
  createImage(
    'home_item-three',
    `<h1>
        Contact us for more<br />
        information on gold
     </h1>
     <a href="#sec-4">Contact us</a>
    `
  );
  document.getElementById('one').classList.remove('active');
  document.getElementById('two').classList.remove('active');
  document.getElementById('four').classList.remove('active');
  document.getElementById('three').classList.add('active');
};

const imgFour = () => {
  createImage(
    'home_item-four',
    `<h1>
        Since the discovery of gold,<br />
        people have mined <br />about 160 tons of gold.
     </h1>
    `
  );
  document.getElementById('one').classList.remove('active');
  document.getElementById('two').classList.remove('active');
  document.getElementById('three').classList.remove('active');
  document.getElementById('four').classList.add('active');
};

imgOne();

const sliderBtn = document.querySelector('.home-items');
const sliderBtnItems = sliderBtn.querySelectorAll('li');

const sliderItemArray = [
  {
    title: 'one',
    startFunc() {
      imgOne();
    },
    meter: 0,
  },
  {
    title: 'two',
    startFunc() {
      imgTwo();
    },
    meter: 1,
  },
  {
    title: 'three',
    startFunc() {
      imgThree();
    },
    meter: 2,
  },
  {
    title: 'four',
    startFunc() {
      imgFour();
    },
    meter: 3,
  },
];

sliderBtnItems.forEach((el) => {
  el.addEventListener('click', () => {
    const sliderItem = el.querySelector('span');
    for (let item of sliderItemArray) {
      if (sliderItem.id === item.title) {
        item.startFunc();
        i = item.meter;
      }
    }
  });
});

document.getElementById('btn_right').addEventListener('click', () => {
  if (i === 0) {
    imgTwo();
    i++;
  } else if (i === 1) {
    imgThree();
    i++;
  } else if (i === 2) {
    imgFour();
    i++;
  } else if (i === 3) {
    imgOne();
    i = 0;
  }
});

document.getElementById('btn_left').addEventListener('click', () => {
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
    imgThree();
    i--;
  }
});

// SCROLL

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);

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
        animItem.classList.add('_active');
      } else {
        if (!animItem.classList.contains('_anim-no-hide')) {
          animItem.classList.remove('_active');
        }
      }
    }
  }

  const offset = (el) => {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  };
  setTimeout(() => {
    animOnScroll();
  }, 300);
}

// Calculate Logic

const calcItems = document.querySelector('.calc-items');

const sample = document.getElementById('samples');
const calcBtn = document.getElementById('calc');
const grams = document.getElementById('grams');
const price = document.getElementById('price');

grams.oninput = function () {
  if (this.value.length > 8) this.value = this.value.substr(0, 8);
};

const sampleItemsInfo = [
  { title: '375', coefficient: 21.61 },
  { title: '583', coefficient: 33.64 },
  { title: '585', coefficient: 36.93 },
  { title: '750', coefficient: 47.46 },
  { title: '958', coefficient: 55.12 },
  { title: '999', coefficient: 56.07 },
];

const goldPrice = () => {
  for (let key of sampleItemsInfo) {
    if (sample.value === key.title) {
      const total = grams.value * key.coefficient;
      out(total);
    }
  }
};

const out = (totals) => {
  price.textContent = Math.floor(totals * 100) / 100 + '$';
};

calcBtn.addEventListener('click', goldPrice);

const opnBtn = document.getElementById('opn_btn');
const calc = document.querySelector('.calc');

const openCalc = () => {
  opnBtn.disabled = true;
  opnBtn.style.opacity = '0';

  setTimeout(() => {
    calc.classList.add('open_calc');
  }, 500);
  setTimeout(() => {
    calcItems.classList.add('open_calc-items');
  }, 700);
};

opnBtn.addEventListener('click', () => {
  openCalc();
});

const sampleValue = (sampleNumber) => {
  sample.value = sampleNumber;
  calc.scrollIntoView((top = false));
};

const sampItems = document.querySelectorAll('.sec-3__items');

for (let el of sampItems) {
  const sampItem = el.querySelectorAll('li');
  for (let item of sampItem) {
    item.addEventListener('click', () => {
      const title = item.querySelector('h2');
      sampleValue(title.id);
      openCalc();
    });
  }
}

// Contact us

const firstName = document.getElementById('name');
const email = document.getElementById('email');
const text = document.getElementById('text');

const sendBtn = document.getElementById('send_btn');
const sendMessage = document.querySelector('.messageSend');

sendBtn.addEventListener('click', () => {
  const formObj = {
    firstName: firstName.value,
    email: email.value,
    text: text.value,
  };

  if (
    firstName.value.trim() === '' ||
    email.value.trim() === '' ||
    text.value.trim() === ''
  ) {
    return;
  } else if (email.value.includes('@')) {
    sendMessage.classList.add('messageSendOpen');
    sendMessage.textContent = `${firstName.value}, your message has been sent`;
    firstName.value = '';
    email.value = '';
    text.value = '';
    setTimeout(() => {
      sendMessage.classList.remove('messageSendOpen');
    }, 3000);
  }
});

// BtnUP

const btnUp = document.querySelector('.up__btn');

window.addEventListener('scroll', () => {
  if (scrollY > 200) {
    btnUp.classList.add('open_up-btn');
  } else {
    btnUp.classList.remove('open_up-btn');
  }
});

// MobileBtn

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.mobile__menu');

const itemMenuOne = document.getElementById('one-item');
const itemMenuTwo = document.getElementById('two-item');
const itemMenuThree = document.getElementById('three-item');
const itemMenuFour = document.getElementById('four-item');

let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    mobileMenuOpen();
    menu.classList.remove('close_menu', 'open_menu');
  } else if (menuOpen === true) {
    mobileMenuClose();
  }
});

const openCloseMenu = (element, action, clsName, time) => {
  if (!action) {
    setTimeout(() => {
      element.classList.remove(clsName);
    }, time);
  } else {
    setTimeout(() => {
      element.classList.add(clsName);
    }, time);
  }
};

const mobileMenuOpen = () => {
  openCloseMenu(menuBtn, true, 'open', 0);
  openCloseMenu(menu, true, 'open_menu', 100);
  openCloseMenu(itemMenuOne, true, 'open_menu-items', 700);
  openCloseMenu(itemMenuTwo, true, 'open_menu-items', 800);
  openCloseMenu(itemMenuThree, true, 'open_menu-items', 900);
  openCloseMenu(itemMenuFour, true, 'open_menu-items', 1000);

  menuOpen = true;
};

const mobileMenuClose = () => {
  openCloseMenu(menuBtn, false, 'open', 0);
  openCloseMenu(itemMenuFour, false, 'open_menu-items', 100);
  openCloseMenu(itemMenuThree, false, 'open_menu-items', 200);
  openCloseMenu(itemMenuTwo, false, 'open_menu-items', 300);
  openCloseMenu(itemMenuOne, false, 'open_menu-items', 400);
  openCloseMenu(menu, true, 'close_menu', 600);

  menuOpen = false;
};

window.addEventListener('scroll', () => {
  if (scrollY > 50 && menuOpen === true) {
    mobileMenuClose();
  }
});
