import { useEffect, useState } from "react";

import { fetchTransactions } from "../../api/financeApi";

function TransactionsTable() {

    const [transactions, setTransactions] = useState([]);

const [loading, setLoading] = useState(true);



useEffect(() => {

  async function loadTransactions() {

    const data = await fetchTransactions();

    setTransactions(data);

    setLoading(false);

  }

  loadTransactions();

}, []);

if (loading) {

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

      <div className="animate-pulse space-y-4">

        <div className="h-6 bg-slate-800 rounded w-1/3"></div>

        <div className="h-16 bg-slate-800 rounded"></div>

        <div className="h-16 bg-slate-800 rounded"></div>

        <div className="h-16 bg-slate-800 rounded"></div>

      </div>

    </div>

  )
}

  return (

    <div
      className="
        bg-slate-900
        border border-slate-800
        rounded-2xl
        p-6
        mt-8
        overflow-x-auto
      "
    >

      {/* TÍTULO */}
      <div className="mb-6">

        <h2 className="text-2xl font-bold text-white">
          Transações Recentes
        </h2>

        <p className="text-slate-400">
          Últimas movimentações financeiras
        </p>

      </div>



      {/* TABELA */}
      <table className="w-full">

        <thead>

          <tr className="border-b border-slate-800">

            <th className="text-left py-4 text-slate-400">
              Nome
            </th>

            <th className="text-left py-4 text-slate-400">
              Data
            </th>

            <th className="text-left py-4 text-slate-400">
              Valor
            </th>

            <th className="text-left py-4 text-slate-400">
              Status
            </th>

          </tr>

        </thead>



        <tbody>

          {transactions.map((transaction) => (

            <tr
              key={transaction.id}
              className="
                border-b border-slate-800
                hover:bg-slate-800/40
                transition
              "
            >

              <td className="py-5 text-white font-medium">
                {transaction.name}
              </td>

              <td className="py-5 text-slate-400">
                {transaction.date}
              </td>

              <td
                className={`
                  py-5 font-semibold
                  ${
                    transaction.amount.includes("+")
                      ? "text-green-400"
                      : "text-red-400"
                  }
                `}
              >
                {transaction.amount}
              </td>

              <td className="py-5">

                <span
                  className={`
                    px-3 py-1 rounded-full text-sm

                    ${
                      transaction.status === "Recebido"
                        ? "bg-green-500/10 text-green-400"

                        : transaction.status === "Pendente"
                        ? "bg-yellow-500/10 text-yellow-400"

                        : "bg-indigo-500/10 text-indigo-400"
                    }
                  `}
                >

                  {transaction.status}

                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  )
}

export default TransactionsTable