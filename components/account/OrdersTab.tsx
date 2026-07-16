export default function OrdersTab() {
  const orders = [
    { id: "EC-12345678", date: "12/07/2026", status: "Entregue", total: 849.80 },
    { id: "EC-87654321", date: "05/07/2026", status: "Em trânsito", total: 549.90 },
  ];

  return (
    <div className="account-tab-content">
      <h2>Meus Pedidos</h2>
      {orders.map(order => (
        <div key={order.id} className="order-card">
          <div>
            <strong>Pedido {order.id}</strong>
            <p>{order.date} • {order.status}</p>
          </div>
          <div className="order-total">R$ {order.total.toFixed(2)}</div>
        </div>
      ))}
    </div>
  );
}