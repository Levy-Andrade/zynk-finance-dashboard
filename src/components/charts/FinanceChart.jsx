import {

  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip

} from "recharts";

import { financeData } from "../../data/mockData";

function FinanceChart() {

  return (

    <div
      className="
        bg-slate-900
        border border-slate-800
        rounded-2xl
        p-6
        mt-8
      "
    >

      {/* TÍTULO */}
      <div className="mb-6">

        <h2 className="text-2xl font-bold text-white">
          Visão Financeira
        </h2>

        <p className="text-slate-400">
          Receitas vs despesas dos últimos meses
        </p>

      </div>



      {/* GRÁFICO */}
      <div className="w-full h-96">

        <ResponsiveContainer>

          <BarChart data={financeData}>

            <XAxis
              dataKey="month"
              stroke="#94a3b8"
            />



            <YAxis
              stroke="#94a3b8"
            />



            <Tooltip />



            {/* RECEITAS */}
            <Bar
              dataKey="receitas"
              fill="#6366f1"
              radius={[6, 6, 0, 0]}
            />



            {/* DESPESAS */}
            <Bar
              dataKey="despesas"
              fill="#ef4444"
              radius={[6, 6, 0, 0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  )
}

export default FinanceChart