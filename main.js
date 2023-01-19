const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true,
            details: ['50% cotton', '30% wool', '20% polyester']
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id);
        },
        removeCartItem() {
            this.cart.pop();
        }
    }
})
