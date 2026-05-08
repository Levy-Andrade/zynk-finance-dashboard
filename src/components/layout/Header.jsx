import {
  Search,
  Bell
} from "lucide-react";

function Header() {

  return (

    <header
      className="
        w-full
        h-24
        bg-slate-900
        border-b border-slate-800
        px-8
        flex
        items-center
        justify-between
      "
    >

      {/* TEXTO */}
      <div>

        <h2 className="text-3xl font-bold text-white">
          Dashboard
        </h2>

        <p className="text-slate-400">
          Bem-vindo de volta, Levy 👋
        </p>

      </div>



      {/* ÁREA DIREITA */}
      <div className="flex items-center gap-6">

        {/* BUSCA */}
        <div
          className="
            flex items-center gap-3
            bg-slate-800
            px-4 py-3
            rounded-xl
            w-80
          "
        >

          <Search size={18} className="text-slate-400" />

          <input
            type="text"
            placeholder="Buscar..."
            className="
              bg-transparent
              outline-none
              text-white
              w-full
              placeholder:text-slate-500
            "
          />

        </div>



        {/* NOTIFICAÇÃO */}
        <button
          className="
            bg-slate-800
            p-3
            rounded-xl
            hover:bg-slate-700
            transition
            relative
          "
        >

          <Bell size={20} className="text-white" />



          {/* BOLINHA */}
          <span
            className="
              absolute
              top-2
              right-2
              w-2
              h-2
              bg-indigo-500
              rounded-full
            "
          ></span>

        </button>



        {/* PERFIL */}
        <div className="flex items-center gap-3">

          <img
            src="https://i.pravatar.cc/100"
            alt="Perfil"
            className="
              w-12
              h-12
              rounded-full
              border-2 border-indigo-500
            "
          />



          <div>

            <h3 className="text-white font-semibold">
              Levy Andrade
            </h3>

            <p className="text-slate-400 text-sm">
              Full Stack Developer
            </p>

          </div>

        </div>

      </div>

    </header>
  )
}

export default Header