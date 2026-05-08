import {
  LayoutDashboard,
  BarChart3,
  Wallet,
  Receipt,
  Settings,
  LogOut
} from "lucide-react";

function Sidebar() {

  return (

    <aside className="w-64 min-h-screen bg-slate-900 border-r border-slate-800 p-6">

      {/* LOGO */}
      <div className="mb-10">

        <h1 className="text-3xl font-bold text-indigo-500">
          Zynk
        </h1>

        <p className="text-slate-400 text-sm">
          Finance Dashboard
        </p>

      </div>



      {/* MENU */}
      <nav>

        <ul className="space-y-4">

          <li>
            <a
              href="#"
              className="flex items-center gap-3 text-slate-300 hover:text-white hover:bg-slate-800 p-3 rounded-lg transition"
            >
              <LayoutDashboard size={20} />

              Dashboard
            </a>
          </li>



          <li>
            <a
              href="#"
              className="flex items-center gap-3 text-slate-300 hover:text-white hover:bg-slate-800 p-3 rounded-lg transition"
            >
              <BarChart3 size={20} />

              Analytics
            </a>
          </li>



          <li>
            <a
              href="#"
              className="flex items-center gap-3 text-slate-300 hover:text-white hover:bg-slate-800 p-3 rounded-lg transition"
            >
              <Wallet size={20} />

              Finance
            </a>
          </li>



          <li>
            <a
              href="#"
              className="flex items-center gap-3 text-slate-300 hover:text-white hover:bg-slate-800 p-3 rounded-lg transition"
            >
              <Receipt size={20} />

              Transactions
            </a>
          </li>



          <li>
            <a
              href="#"
              className="flex items-center gap-3 text-slate-300 hover:text-white hover:bg-slate-800 p-3 rounded-lg transition"
            >
              <Settings size={20} />

              Settings
            </a>
          </li>

        </ul>

      </nav>



      {/* BOTÃO LOGOUT */}
      <div className="mt-20">

        <button
          className="
            flex items-center gap-3
            text-red-400
            hover:bg-red-500/10
            p-3 rounded-lg
            transition
            w-full
          "
        >

          <LogOut size={20} />

          Logout

        </button>

      </div>

    </aside>
  )
}

export default Sidebar