
function StatCard() {
    const valores = [
        {
            title: 'Faturamento',
            value: 'R$ 10.000,00',
            icon: 'fa-solid fa-dollar-sign',
        }, 
        {
            title: 'Lucro',
            value: 'R$ 5.000,00',
            icon: 'fa-solid fa-chart-line',
        },
        {
            title: 'Despesas',
            value: 'R$ 2.000,00',
            icon: 'fa-solid fa-money-bill-wave',
        },
        {
            title: 'Produtos Cadastrados',
            value: '150',
            icon: 'fa-solid fa-users',
        }
    ]

    return (
        <>
            <div>
                <div className="flex flex-wrap"> {/* <-- Aqui está o segredo */}
                    {valores.map((item, index) => (
                        <div key={index} className="flex w-60 bg-white shadow-xs  shadow-black rounded-lg p-5 m-2 items-center">
                        <div className="flex flex-col">
                            <i className={item.icon}></i>
                            <h3 className="text-[15px] text-gray-600">{item.title}</h3>
                            <p className="text-[24px] font-bold">{item.value}</p>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default StatCard;