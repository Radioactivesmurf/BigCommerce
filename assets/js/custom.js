window.onload = () => {
    function createCart() {
        function postData(url = '', cartItems = {}) {
            return fetch(url, {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(cartItems),
            })
                .then(response => response.json());
        }
        postData('/api/storefront/cart', {
            lineItems: [
                {
                    quantity: 2,
                    productId: 111,
                },

                {
                    quantity: 1,
                    product_id: 93,
                    option_selections: [
                        {
                            option_id: 111,
                            option_value: 7,
                        },
                        {
                            option_id: 112,
                            option_value: 95,
                        },
                    ],
                },

                {
                    quantity: 2,
                    productId: 107,
                },
            ],
        },
        );
    }
    document.getElementById('2').onclick = (e) => {
        e.preventDefault();
        createCart();
    };
};
