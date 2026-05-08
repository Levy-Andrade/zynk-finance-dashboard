import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import TransactionsTable from "./components/tables/TransactionsTable";
import StatsCard from "./components/cards/StatsCard";
import FinanceChart from "./components/charts/FinanceChart";

import {
  DollarSign,
  TrendingUp,
  Wallet,
  CreditCard
} from "lucide-react";

function App() {

  return (

    <div className="flex bg-slate-950 min-h-screen">

      {/* SIDEBAR */}
      <Sidebar />



      {/* CONTEÚDO */}
      <div className="flex-1">

        <Header />



        {/* ÁREA PRINCIPAL */}
        <main className="p-8">

          {/* GRID DOS CARDS */}
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              xl:grid-cols-4
              gap-6
            "
          >

            {/* CARD 1 */}
            <StatsCard
              title="Receita Total"
              value="R$ 45.890"
              percentage="+12%"
              positive={true}
              icon={<DollarSign size={28} />}
            />



            {/* CARD 2 */}
            <StatsCard
              title="Despesas"
              value="R$ 12.540"
              percentage="-4%"
              positive={false}
              icon={<CreditCard size={28} />}
            />



            {/* CARD 3 */}
            <StatsCard
              title="Lucro"
              value="R$ 33.350"
              percentage="+18%"
              positive={true}
              icon={<Wallet size={28} />}
            />



            {/* CARD 4 */}
            <StatsCard
              title="Crescimento"
              value="+24%"
              percentage="+6%"
              positive={true}
              icon={<TrendingUp size={28} />}
            />

          </div>

          <FinanceChart />

            <TransactionsTable />

        </main>

      </div>

    </div>
  )
}

export default App