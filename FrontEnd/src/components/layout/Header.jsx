function Header() {
    return (
        <div className="ml-55 flex flex-col p-3">
            <header className="flex items-center justify-between  text-black">
                
                <div className="items-center p-2">
                    <h1 className="text-[24px] mb-2 font-bold">DashBoard</h1>
                    <p>Visão geral das vendas</p>
                </div>

                <div className="flex items-center justify-center text-right mr-5">
                    <p className="mr-2">Data:</p>
                    <input type="date" name="data" id="idData" className="border border-black rounded-md p-2 mr-4" />

                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Novo Produto
                    </button>
                </div>

            </header>
        </div>
    )
}

export default Header;