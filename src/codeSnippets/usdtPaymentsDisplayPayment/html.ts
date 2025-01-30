export const usdtPaymentsDisplayPaymentHtml = `<!-- Include Component JS -->
<script src="https://blockonomics.co/js/web3-payment.js"></script>

<!-- Use the Component in your HTML -->
<web3-payment
    order_amount=10
    receive_address="USDT_RECEIVE_ADDRESS"
    redirect_url="/payment.php?order_id=ORDER_ID"
    testnet=1
></web3-payment>
`;