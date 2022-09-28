document.addEventListener('DOMContentLoaded', () => {

    // Мінімум

    // Створи масив «Список покупок». Кожен елемент масиву є об'єктом, 
    // який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, 
    // сума. Написати кілька функцій для роботи з таким масивом:
    // Виводити весь список на екран таким чином, щоб спочатку йшли продукти, 
    // що ще не придбані, а потім - ті, що вже придбали.
    // Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.

    const PRODUCTS = [
        {
            name: 'Strawberry',
            quantity: 2,
            price: 55,
            bought: true,
            sum() {
                return this.quantity * this.price;
            },
        },
        {
            name: 'Apples',
            quantity: 1,
            price: 35,
            bought: true,
            sum: this.quantity * this.price,
        },
        {
            name: 'Bananas',
            quantity: 1,
            price: 30,
            bought: false,
            sum: 30,
        },
        {
            name: 'Bread',
            quantity: 1,
            price: 15,
            bought: false,
            sum: 15,
        },
        {
            name: 'Butter',
            quantity: 2,
            price: 45,
            bought: true,
            sum: 90,

        }

    ];


    // 1. Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.

    PRODUCTS.sort((a, b) => a.bought < b.bought ? -1 : 1);
    console.log(PRODUCTS);

    // 2. Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.

    let markProduct = (name) => {
        for (let key of PRODUCTS) {
            if (key.name == name) {
                key.bought = true;
            }
        }
        return PRODUCTS;
    };

    console.log(markProduct('Bread'));

    // Норма 
    // 3. Видалення продукту зі списку (видалення повинно проводитися шляхом 
    // створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)

    function deleteProduct(name) {
        let newProducts = PRODUCTS.filter(PRODUCTS => PRODUCTS.name !== name)
        return newProducts;
    };
    console.log(deleteProduct('Bananas'));

    // 4. Додавання покупки в список. Враховуй, що при додаванні покупки в уже існуючий  
    // список продуктів, необхідно збільшувати кількість в існуючій покупці, 
    // а не додавати нову. При цьому також повинна змінитися сума, 
    // наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.

    function addProducts(name, quantity, price, bought) {
        let newProduct = {
            name: name,
            quantity: quantity,
            price: price,
            bought: bought,
            sum: quantity * price,
        };
        for (let key of PRODUCTS) {
            if (key.name == name) {
                key.quantity = key.quantity + PRODUCTS.quantity;
                key.sum = key.sum + PRODUCTS.sum;
                return PRODUCTS;
            }
            else {
                PRODUCTS.push(newProduct);
                return PRODUCTS;
            }
        }
    };
    addProducts('Milk', 2, 60, false);
    addProducts('Strawberry', 3, 55, true);
    console.log(PRODUCTS);

    // Максимум

    // 1.Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
    // 2.Підрахунок суми всіх (не) придбаних продуктів.
    // 3.Показання продуктів в залежності від суми, (від більшого до меншого / 
    // від меншого до більшого, в залежності від параметра функції, який вона приймає)

});