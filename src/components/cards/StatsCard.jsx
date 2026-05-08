function StatsCard({

  title,
  value,
  percentage,
  icon,
  positive

}) {

  return (

    <div
      className="
        bg-slate-900
        p-6
        rounded-2xl
        border border-slate-800
        hover:border-indigo-500
        transition
      "
    >

      {/* TOPO */}
      <div className="flex items-center justify-between mb-5">

        <div>

          <p className="text-slate-400 text-sm">
            {title}
          </p>

          <h2 className="text-3xl font-bold text-white mt-2">
            {value}
          </h2>

        </div>



        {/* ÍCONE */}
        <div
          className="
            bg-indigo-500/10
            p-4
            rounded-xl
            text-indigo-500
          "
        >

          {icon}

        </div>

      </div>



      {/* PORCENTAGEM */}
      <div>

        <span
          className={`
            text-sm font-medium
            ${positive
              ? "text-green-400"
              : "text-red-400"
            }
          `}
        >

          {percentage}

        </span>

        <span className="text-slate-500 text-sm ml-2">
          em relação ao mês passado
        </span>

      </div>

    </div>
  )
}

export default StatsCard