


export default async function SuccessPage({ params }) {

  const { orderId } = await params;

  console.log('order id', orderId)
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

  const order = await fetch(`${baseUrl}/api/payment-success?orderId=${orderId}`) // Make sure this endpoint matches your backend
    .then((res) => res.json())
    .catch((err) => console.error('Failed to fetch order', err));
    


  if (!order) return <p>Loading order...</p>;

  return (
    <div>
      <h1>Order Successful!</h1>
      <p>Order ID: {order.id}</p>
      <p>Amount: ${order.amount_received / 100}</p> {/* Amount is in cents, so divide by 100 */}
      <p>Status: {order.status}</p>
    </div>
  );
};

