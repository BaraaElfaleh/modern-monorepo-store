
function App() {


  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="relative group">
        
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
        
        {/* الكارت الرئيسي */}
        <div className="relative px-8 py-10 bg-slate-900 ring-1 ring-slate-800 rounded-2xl leading-none flex items-center justify-center flex-col gap-6">
          
          {/* أيقونة متحركة */}
          <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center border border-blue-500/20">
            <span className="text-4xl animate-bounce">🚀</span>
          </div>

          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">
              Tailwind <span className="text-cyan-400">v4.0</span> is Active!
            </h1>
            <p className="text-slate-400 font-medium">
              Monorepo + React + Vite + PostCSS
            </p>
          </div>

          
          <button className="px-6 py-2 rounded-full bg-cyan-500 text-slate-950 font-bold hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl shadow-cyan-500/20">
            It works!
          </button>

        </div>
      </div>
    </div>
  )
}

export default App
