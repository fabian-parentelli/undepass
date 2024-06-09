function confirmOrder(products, order) {

    const subtotal = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
    const commission = subtotal * 0.1;
    const total = subtotal + commission;
    
    const htmlContent = `
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                display: flex;
                flex-direction: column;
                align-items: center;
                background-color: #f0f0f0;
            }
            header {
                text-align: center;
                margin-top: 20px;
            }
            h1 {
                font-size: 3em;
                margin-bottom: 10px;
            }
            .logo {
                width: 50px;
                height: 50px;
                background: url('https://res.cloudinary.com/dtjzfz2ex/image/upload/v1716739355/background/ooskvh6gw21heoutge7t.png') no-repeat center center;
                background-size: cover;
                background-color: black;
                border-radius: 50%;
            }
            .product-table {
                width: 80%;
                margin-top: 20px;
                border-collapse: collapse;
            }
            .product-table th, .product-table td {
                border: 1px solid #ddd;
                padding: 8px;
            }
            .product-table th {
                background-color: #4CAF50;
                color: white;
            }
            .total-row {
                font-weight: bold;
            }
            .message {
                font-size: 1.5em;
                margin: 20px;
                text-align: center;
            }
        </style>
        <header>
            <h1>UnderPass</h1>
            <div class="logo"></div>
        </header>
        <div class="message">
            Hola ${order.name}, hemos recibido tu orden, ya falta poco para confirmarla solo debes de hacer el pago.
        </div>
        <table class="product-table">
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Descripción</th>
                    <th>Imagen</th>
                    <th>Subtotal</th>
                </tr>
            </thead>
            <tbody>
                ${products.map(product => {
                    const subtotal = product.price * product.quantity;
                    return `
                        <tr>
                            <td>${product.name}</td>
                            <td>${product.quantity}</td>
                            <td>${product.price.toFixed(2)}</td>
                            <td>${product.description}</td>
                            <td><img src="${product.img}" alt="${product.name}" style="width: 50px; height: 50px; background-color: black; border-radius: 50%;"></td>
                            <td>${subtotal.toFixed(2)}</td>
                        </tr>
                    `;
                }).join('')}
            </tbody>
            <tfoot>
                <tr class="total-row">
                    <td colspan="5">Total (sin comisión)</td>
                    <td>${subtotal.toFixed(2)}</td>
                </tr>
                <tr class="total-row">
                    <td colspan="5">Comisión (10%)</td>
                    <td>${commission.toFixed(2)}</td>
                </tr>
                <tr class="total-row">
                    <td colspan="5">Total (incluyendo comisión)</td>
                    <td>${total.toFixed(2)}</td>
                </tr>
            </tfoot>
        </table>
    `;

    return htmlContent;
}

export default confirmOrder;