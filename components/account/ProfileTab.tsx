export default function ProfileTab() {
  return (
    <div className="account-tab-content">
      <h2>Informações Pessoais</h2>
      <div className="profile-info">
        <p><strong>Nome:</strong> Luigi Rechine</p>
        <p><strong>Email:</strong> luigi@email.com</p>
        <p><strong>Telefone:</strong> (85) 99999-8888</p>
        <p><strong>CPF:</strong> 000.000.000-00</p>
      </div>
      <button className="edit-btn">Editar Perfil</button>
    </div>
  );
}