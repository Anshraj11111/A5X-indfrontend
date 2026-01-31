export default function FeedbackCard({ data }) {
  return (
    <div className="bg-[#0b0f19] p-5 rounded-xl border border-white/10">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-semibold">{data.name}</h4>
        <span className="text-yellow-400">
          {"⭐".repeat(data.rating)}
        </span>
      </div>

      <p className="text-gray-400 text-sm">
        {data.message}
      </p>
    </div>
  );
}