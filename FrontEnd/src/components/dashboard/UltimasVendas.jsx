
function UltimasVendas() {
    const movimentacoes = [
        {
            title: 'Data',
            value: '01/01/2024',
        },
        {
            title: 'Produto',
            value: 'Fone Bluetooth',
        },
        {
            title: 'Tipo',
            value: 'Venda',
        },
        {
            title: 'Qtd',
            value: 'R$ 100,00',
        },
        {
            title: 'Valor',
            value: 'R$ 100,00',
        },
        {
            title: 'Lucro / Perda',
            value: 'R$ 50,00',
        }
    ]

    return(<>
        <div className="flex flex-col bg-white shadow-xs  shadow-black rounded-lg p-5 m-2">
            <h1 className="font-bold text-[20px] mb-5">
                Ultimas Movimentações
            </h1>
            <div className="flex"> {/* <-- Aqui está o segredo */}
                {movimentacoes.map((item, index) => (
                    <div key={index} className="w-full">
                    <div className="flex flex-col justify-between ">
                        <h3 className="text-[15px] text-gray-600 ml-3 pb-2">{item.title}</h3>
                        <hr />
                        <p className="text-[16px] pt-3 pb-3 ml-3">{item.value}</p>
                        <hr />
                    </div>
                    </div>
                ))}
            </div>

        </div>
    </>)
}

export default UltimasVendas