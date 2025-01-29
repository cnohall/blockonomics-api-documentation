---
sidebar_position: 7
---

# Checkouts - Temp Products

Checkouts provide a dynamic way to collect charges from customers and add custom data to your products. This is achieved by creating temporary products via API which can be shown via payment button/link/widget. Key Points about Temporary Products:

- **Inheritance**: Temporary products automatically inherit all fields from their parent products. You can create a parent product via the <a href="https://www.blockonomics.co/dashboard#/link" target="_blank">Buttons</a> feature
- **Auto-deletion**: Temporary products are deleted after 7 days. However, orders received via the temporary product will remain in the system.

### Definition
**POST** `https://www.blockonomics.co/api/create_temp_product`

#### Request body:
```json
{
  "parent_uid": "<uid of parent product>",
  "product_name": "<name (Optional)>",
  "product_description": "<description (Optional)>",
  "value": "<price of product (Optional)>",
  "extra_data": "<custom data (Optional)>"
}
```
#### Headers
```http
Authorization: Bearer APIKey
```

#### Example1 (Cart Checkout)

You have a custom website or e-commerce store. At checkout, you want the customer to pay the cart value in bitcoin.

```bash
curl -H 'Authorization: Bearer 2cDNOlCN985d7Rx3atSDOlmMeYaxzho2uPmHheIw4eU' \
    -d '{"parent_uid": "b5c04c7c395011ea", "product_name": "Order #412", "product_description": "1 Red T-shirt\n2 Khaki Trousers", "value": 500}' \
    https://www.blockonomics.co/api/create_temp_product
```

#### Example 2: Customized Product

Create a customized product with the selected color/add-ons.

```bash
curl -H 'Authorization: Bearer 2cDNOlCN985d7Rx3atSDOlmMeYaxzho2uPmHheIw4eU' \
    -d '{"parent_uid": "b5c04c7c395011ea", "product_description": "Redmi 32GB (Yellow)", "value": 412}' \
    https://www.blockonomics.co/api/create_temp_product
```

#### Example 3: Attach Custom Data

Attach customer user ID or special notes to the product.

```bash
curl -H 'Authorization: Bearer 2cDNOlCN985d7Rx3atSDOlmMeYaxzho2uPmHheIw4eU' \
    -d '{"parent_uid": "b5c04c7c395011ea", "extra_data": "user_id-19120"}' \
    https://www.blockonomics.co/api/create_temp_product
```

### Displaying Checkout

The API will return a temporary product `uid` like this: `f7570454529a11e7-1ee5f340`. You can use this `uid` to set up a payment button, link, or widget.

### Payment Button
```html
<a href="" class="blockoPayBtn" data-toggle="modal" data-uid="f7570454529a11e7-1ee5f340">
    <img width=160 src="https://www.blockonomics.co/img/pay_with_bitcoin_medium.png">
</a>
```
### Payment Link
```html
<a href="" class="blockoPayBtn" data-toggle="modal" data-uid="f7570454529a11e7-1ee5f340">
    <img width=160 src="https://www.blockonomics.co/img/pay_with_bitcoin_medium.png">
</a>
```
### Payment Widget
```html
<script src="https://blockonomics.co/js/pay_widget.js"></script>
<script>
    function pay() {
        Blockonomics.widget({
            msg_area: 'payment_area',
            uid: 'f7570454529a11e7-1ee5f340',
            email: 'customer@email.com'
        });
    }
</script>

