const cartContent = document.querySelector('.product-column')
const scroll = document.querySelector('body')
const cart = document.querySelector('.cart')
const row = document.querySelector('.store_conteiner')
const row2 = document.querySelector('.store_conteiner.top-selling')
const finalPrice = document.querySelector('.final-price')
const countUnits = document.querySelector('.counter_num-of-units')
const btnClearCart = document.querySelector('.clear-cart')
const counterCart = document.querySelector('.cart-count')
const headerCounterCart = document.querySelector('.counterCart')

const formatPriceToDollar = new Intl.NumberFormat("en", {
	style: "currency",
	currency: 'USD',
})

function renderProductsNew() {

	productsNew.forEach(item => {

		if (!cartContent) {
			row.innerHTML +=
			`
		  <div class="store_card">
        <a href=""><img class="card-img" src="${item.img}" alt="" /></a>
        <div class="store_card_content">
          <div class="store_card_content-text">
            <h1 class="card-title">${item.title}</h1>
            <div class="coast">${formatPriceToDollar.format(item.price)}</div>
          </div>
          <div class="store_card_button" onclick="addToCart(${item.id})">Add to cart</div>
        </div>
		  	<div class="store_card_button hidden" onclick="addToCart(${item.id})">Add to cart</div>
      </div>
		`}

	});

}

renderProductsNew()

function renderProductsTopSelling() {
	productsTopSelling.forEach(item => {
		if (!cartContent)
			row2.innerHTML +=
				`
		  <div class="store_card">
        <a href=""><img class="card-img" src="${item.img}" alt="" /></a>
        <div class="store_card_content">
          <div class="store_card_content-text">
            <h1 class="card-title">${item.title}</h1>
            <div class="coast">${formatPriceToDollar.format(item.price)}</div>
          </div>
          <div class="store_card_button" onclick="addToCart1(${item.id})">Add to cart</div>
        </div>
		  <div class="store_card_button hidden" onclick="addToCart1(${item.id})">Add to cart</div>
      </div>
		`
	});

}

renderProductsTopSelling()

let cartArray = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(id) {
	if (cartArray.some((item) => item.id === id)) {
		changeNumOfUnits('plus', id)
	} else {
		const item = productsNew.find((product) => product.id === id)
		cartArray.push(item)
	}
	console.log(cartArray);
	updateCart()
}

function addToCart1(id) {
	if (cartArray.some((item) => item.id === id)) {
		changeNumOfUnits('plus', id)
	} else {
		const item1 = productsTopSelling.find((product) => product.id === id)
		cartArray.push(item1)
	}
	console.log(cartArray);
	updateCart()
}




function updateCart() {
	renderCartItems();
	renderSubtotal();
	counterOnCart()
	localStorage.setItem('cart', JSON.stringify(cartArray))
}


function renderSubtotal() {
	const delivery = document.querySelector('.green.delivery')
	let totalPrice = 0, totalItems = 0
	cartArray.forEach(item => {
		totalPrice += item.price
		totalItems += item.counter
	})
	if (cartContent) {
		if (totalPrice < 1500) {
			finalPrice.innerHTML = formatPriceToDollar.format(totalPrice + 100)
			delivery.innerHTML = '$100';
		} else {
			finalPrice.innerHTML = formatPriceToDollar.format(totalPrice)
			delivery.innerHTML = 'free';
		}
		countUnits.innerHTML = totalItems
	}
	localStorage.setItem('cart', JSON.stringify(cartArray))
}

renderSubtotal()

function renderCartItems() {
	if (cartContent) {
		cartContent.innerHTML = '';
	}
	cartArray.forEach(item => {
		if (cartContent) {
			cartContent.innerHTML +=
				`
						<div class="cart_card" data-id="${item.id}">
							<div class="cart_card_container">
								<div class="cart_card_content">
									// <img onclick="deleteItem(${item.id})" class="trashcan-hidden" src="./icons/cart.svg" alt="">
									<div class="img_container"><a href=""> <img class="imgCart" src="${item.img}" alt=""> </a></div>
									<div class="common-container">
										<div class="counter-container">
											<div class="key-minus" onclick="changeNumOfUnits('minus', ${item.id})">-</div>
											<div class="counter-value">${item.counter}</div>
											<div class="key-plus" onclick="changeNumOfUnits('plus', ${item.id})">+</div>
										</div>
										<div class="container">
											<div>
												<div class="coast">${formatPriceToDollar.format(item.price)}</div>
												<div class="previous-coast">${formatPriceToDollar.format(item.price)}</div>
											</div>

										</div>
									</div>

								</div>
								<div class="cart_card_content-text">
									<div class="cart_header">
										<div>${item.title}</div>
									</div>
									<div class="cart_subtitle">
										<div class="cart_subtitle-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero eius itaque velit
											soluta. Architecto
											quaerat laboriosam </div>

										// <img onclick="deleteItem(${item.id})" class="trashcan" src="./icons/cart.svg" alt="">
									</div>
								</div>
		`
		}

	})
}

renderCartItems()


function changeNumOfUnits(action, id) {
	cartArray = cartArray.map((item) => {
		let counter = item.counter
		let counterPrice = item.counterPrice
		let price = item.price
		let oldPrice = item.oldPrice
		let counterOldPrice = item.counterOldPrice
		if (item.id === id) {
			if (action === 'minus' && counter > 1) {
				counter--
				price = item.price - counterPrice
				oldPrice = item.oldPrice - counterOldPrice
			} else if (action === 'plus' && counter < item.instock) {
				counter++
				price = item.price + counterPrice
				oldPrice = item.oldPrice + counterOldPrice
			}
		}
		return {
			...item,
			counter,
			counterPrice,
			price,
			oldPrice
		}
	})
	updateCart();
}

function deleteItem(id) {
	cartArray = cartArray.filter((item) => item.id !== id)
	updateCart();
	counterOnCart()
}

function clearCart() {
	if (cartContent) {
		btnClearCart.addEventListener('click', () => {
			localStorage.removeItem('cart')
			cartContent.innerHTML = '';
			counterCart.style.display = 'none'
			headerCounterCart.style.display = 'none'
			cartHeader.style.display = 'none'
			cartOrder.style.display = 'none'
			cartEmpty.classList.remove('hiddenCart')
		})
	}
}
clearCart()
const cartHeader = document.querySelector('.cart_main-header');
const cartOrder = document.querySelector('.cart_making-an-order');
const hidden = document.querySelector('.hiddenCart')
const cartEmpty = document.querySelector('.cart_empty')

function counterOnCart() {
	if (cartArray.length === 0) {
		counterCart.style.display = 'none'
	} else {
		counterCart.style.display = 'block'
		counterCart.innerHTML = cartArray.length
	}
	if (cartContent) {
		if (cartArray.length === 0) {
			cartHeader.style.display = 'none'
			headerCounterCart.style.display = 'none'
			cartOrder.style.display = 'none'
			cartEmpty.classList.remove('hiddenCart')
		} else {
			headerCounterCart.innerHTML = cartArray.length
			headerCounterCart.style.display = 'block'
			cartOrder.style.display = 'flex'
			cartHeader.style.display = 'flex'
			headerCounterCart.style.display = 'block'
			cartEmpty.classList.add('hiddenCart')
		}

	}
}

counterOnCart()
