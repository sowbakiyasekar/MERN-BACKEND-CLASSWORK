import { useEffect, useMemo, useState } from "react";
import { news } from "../data/news";
import { loadSavedNewsIds, saveSavedNewsIds } from "../utils/savedNews";
import BorderGlow from "../components/ui/BorderGlow";

const SavedNews = () => {
  const [savedIds, setSavedIds] = useState(() => loadSavedNewsIds());

  useEffect(() => {
    saveSavedNewsIds(savedIds);
  }, [savedIds]);

  const savedNews = useMemo(
    () => news.filter((item) => savedIds.includes(item.id)),
    [savedIds]
  );

  const handleRemove = (id) => {
    setSavedIds((prev) => prev.filter((savedId) => savedId !== id));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Saved News</h1>
        <p className="text-sm text-slate-400">Review the articles you saved for later.</p>
      </div>

      {savedNews.length === 0 ? (
        <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-8 text-center">
          <p className="text-slate-300">No saved news yet. Save some articles from the home page.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedNews.map((item) => (
            <BorderGlow
              key={item.id}
              edgeSensitivity={30}
              glowColor="40 80 80"
              backgroundColor="#111827"
              borderRadius={24}
              glowRadius={28}
              glowIntensity={1.2}
              coneSpread={20}
              animated={false}
              colors={["#c084fc", "#f472b6", "#38bdf8"]}
              className="w-full"
            >
              <div className="border rounded-lg shadow p-4 bg-slate-950/70 backdrop-blur-sm">
                <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded" />
                <h2 className="text-xl font-bold mt-3">{item.title}</h2>
                <p className="text-gray-400">{item.genre}</p>
                <p className="text-sm text-gray-500">{item.date}</p>
                <button
                  type="button"
                  className="mt-4 rounded-full border border-pink-500 bg-pink-500/10 px-4 py-2 text-sm text-pink-300 hover:bg-pink-500/20"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove from saved
                </button>
              </div>
            </BorderGlow>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedNews;
