const product = {
    plainBurger: {
        name: "GAMBURGER",
        price: 10000,
        amount: 0,
        kkal: 250,
        get Sum() {
            return this.price * this.amount
        },
        get kkalSum() {
            return this.kkal * this.amount
        }
    },
    freshBurger: {
        name: "GAMBURGER FRESH",
        price: 20500,
        amount: 0,
        kkal: 400,
        get Sum() {
            return this.price * this.amount
        },
        get kkalSum() {
            return this.kkal * this.amount
        }
    },
    freshCombo: {
        name: "FRESH COMBO",
        price: 31900,
        amount: 0,
        kkal: 650,
        get Sum() {
            return this.price * this.amount
        },
        get kkalSum() {
            return this.kkal * this.amount
        }
    },
}

const btn = document.querySelectorAll('.main__product-btn'),
    foto = document.querySelectorAll('.main__product-info')

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        plusOrMinus(this)
    })
}

function plusOrMinus(el) {
    const parent = el.closest('.main__product'),
        parentId = parent.getAttribute('id'),
        num = parent.querySelector('.main__product-num'),
        price = parent.querySelector('.main__product-price span'),
        kkal = parent.querySelector('.main__product-kcall span'),
        attribute = el.getAttribute('data-symbol')

    if (attribute == '+' && product[parentId].amount < 10) {
        product[parentId].amount++
    } else if (attribute == '-' && product[parentId].amount > 0) {
        product[parentId].amount--
    }

    num.innerHTML = product[parentId].amount
    price.innerHTML = product[parentId].Sum
    kkal.innerHTML = product[parentId].kkalSum
}

for (let f = 0; f < foto.length; f++) {
    foto[f].addEventListener('dblclick', function () {
        photo(this)
    })
}

function photo(na) {
    const dblfoto = na.querySelector('.main__product-img'),
        fotoAt = dblfoto.getAttribute('src'),
        view = document.querySelector('.view'),
        xBtn = document.querySelector('.view__close span')

    view.querySelector('img').setAttribute('src', fotoAt)
    view.classList.add('active')
    xBtn.addEventListener('click', () => view.classList.remove('active'))
    // console.log(fotoAt);
}


function time() {
    const sec = document.querySelector('.header__timer-extra')
    if (sec.innerHTML < 10) {
        sec.innerHTML++
        setTimeout(() => {
            time()
        }, 10);
    }
    else if (sec.innerHTML < 40) {
        sec.innerHTML++
        setTimeout(() => {
            time()
        }, 60);
    }
    else if (sec.innerHTML < 60) {
        sec.innerHTML++
        setTimeout(() => {
            time()
        }, 100);
    }
    else if (sec.innerHTML < 80) {
        sec.innerHTML++
        setTimeout(() => {
            time()
        }, 160);
    }
    else if (sec.innerHTML < 100) {
        sec.innerHTML++
        setTimeout(() => {
            time()
        }, 240);
    }
    // console.log(sec)
}
time()

function random(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

const count = document.querySelector('.header__timer-extra')

function color() {
    let r = random(0, 255)
    let g = random(0, 255)
    let b = random(0, 255)
    return `rgb(${r},${g},${b})`
}
setInterval(() => {
    count.style.color = color()
}, 400);