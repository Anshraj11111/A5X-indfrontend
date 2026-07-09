export default function FeedbackCard({ data }) {
  return (
    <div className="bg-[#0b0f19] p-6 rounded-xl border border-white/10 hover:border-cyan-400/30 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4 className="font-semibold text-white text-lg">{data.name}</h4>
          <span className="text-gray-500 text-xs">
            {new Date(data.createdAt).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </span>
        </div>
        <div className="flex text-yellow-400">
          {"★".repeat(data.rating)}
          <span className="text-gray-600 ml-1">
            {"★".repeat(5 - data.rating)}
          </span>
        </div>
      </div>

      <p className="text-gray-300 text-sm leading-relaxed">
        "{data.message}"
      </p>
      
      <div className="mt-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400/20 to-cyan-400/5 border border-cyan-400/20 flex items-center justify-center">
            <svg className="w-4 h-4 text-cyan-400/60" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
          <span className="text-gray-400 text-xs">Verified Customer</span>
        </div>
      </div>
    </div>
  );
}