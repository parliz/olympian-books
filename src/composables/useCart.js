import {
	ref,
	computed
} from 'vue'

// Состояние корзины
const cartItems = ref([])

export function useCart() {
	// Добавить в корзину
	const addToCart = (book, quantity = 1) => {
		const existingItem = cartItems.value.find(item => item.id === book.id)

		if (existingItem) {
			existingItem.quantity += quantity
		} else {
			cartItems.value.push({
				...book,
				quantity,
				addedAt: new Date().toISOString()
			})
		}

		// Сохраняем в localStorage
		saveToLocalStorage()
	}

	// Удалить из корзины
	const removeFromCart = (bookId) => {
		cartItems.value = cartItems.value.filter(item => item.id !== bookId)
		saveToLocalStorage()
	}

	// Изменить количество
	const updateQuantity = (bookId, quantity) => {
		if (quantity <= 0) {
			removeFromCart(bookId)
			return
		}

		const item = cartItems.value.find(item => item.id === bookId)
		if (item) {
			item.quantity = quantity
			saveToLocalStorage()
		}
	}

	// Очистить корзину
	const clearCart = () => {
		cartItems.value = []
		saveToLocalStorage()
	}

	// Итоговая стоимость
	const totalPrice = computed(() => {
		return cartItems.value.reduce((sum, item) => {
			return sum + (item.price * item.quantity)
		}, 0)
	})

	// Количество товаров
	const totalItems = computed(() => {
		return cartItems.value.reduce((sum, item) => sum + item.quantity, 0)
	})

	// Сохранение в localStorage
	const saveToLocalStorage = () => {
		localStorage.setItem('cart', JSON.stringify(cartItems.value))
	}

	// Загрузка из localStorage
	const loadFromLocalStorage = () => {
		const savedCart = localStorage.getItem('cart')
		if (savedCart) {
			cartItems.value = JSON.parse(savedCart)
		}
	}

	// Инициализация (загружаем из localStorage при создании)
	loadFromLocalStorage()

	return {
		cartItems: computed(() => cartItems.value),
		addToCart,
		removeFromCart,
		updateQuantity,
		clearCart,
		totalPrice,
		totalItems
	}
}
