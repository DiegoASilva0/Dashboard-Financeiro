import './index.css'
import Sidebar from './components/layout/Sidebar'
import Header from './components/layout/Header';
import StatCard from './components/dashboard/StatCard';
import UltimasVendas from './components/dashboard/UltimasVendas';

function App() {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <Sidebar />

      <div className="flex flex-col flex-1 overflow-y-auto">
        <Header />
        
        <main className="ml-55 flex-1">
          <StatCard />

          <UltimasVendas />
        </main>
      </div>

    </div>
  )
}

export default App;