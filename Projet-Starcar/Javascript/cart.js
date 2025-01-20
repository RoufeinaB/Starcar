/** Pris depuis un Tailwind CSS */

new Vue({
    el: "#app",
    data: {
        products: [
            {
                name: "BMW M4 Compétition",
                description: "Full Option",
                price: 56.490,
                quantity: 1,
                image: "src/image/BMW.png",
            },
            {
                name: "Option",
                description: "Ajout d'une option",
                price: 29.99,
                quantity: 2,
                image: "https://via.placeholder.com/150",
            },
        ],
        promoCode: "",
        discount: 0,
    },
    computed: {
        itemCount() {
            return this.products.reduce((acc, product) => acc + product.quantity, 0);
        },
        subTotal() {
            return this.products.reduce((acc, product) => acc + product.price * product.quantity, 0);
        },
        tax() {
            return this.subTotal * 0.1; // Assuming a 10% tax rate
        },
        discountPrice() {
            return this.subTotal * (this.discount / 100);
        },
        totalPrice() {
            return this.subTotal - this.discountPrice + this.tax;
        },
    },
    methods: {
        updateQuantity(index, event) {
            const value = parseInt(event.target.value);
            this.products[index].quantity = value > 0 ? value : 1;
        },
        checkQuantity(index, event) {
            if (event.target.value <= 0) this.products[index].quantity = 1;
        },
        removeItem(index) {
            this.products.splice(index, 1);
        },
        shopNow() {
            window.location.href = "Catalogue.html";
        },
    },
    filters: {
        currencyFormatted(value) {
            return `$${value.toFixed(2)}`;
        },
    },
});
