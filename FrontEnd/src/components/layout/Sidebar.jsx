function Sidebar() {
    const menuItems = [
        { name: 'DashBoard', link: '#DashBoard' },
        { name: 'Produtos', link: '#products' },
        { name: 'Movimentações', link: '#Movimentacoes' },
        { name: 'Contact', link: '#contact' },
    ];

  return (
    <aside className="fixed top-0 left-0 h-screen w-55 bg-gray-800 text-white p-4 z-10">
      <h2 className="text-xl font-bold">DashBoard</h2>

      <ul className="mt-4">
        {menuItems.map((item, index) => (
            <li key={index} className="mb-2">
                <a href={item.link} className="block p-2 rounded hover:bg-amber-600">{item.name}</a>
            </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
