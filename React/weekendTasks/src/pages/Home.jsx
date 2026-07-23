import { useEffect, useMemo, useState } from "react";
import BorderGlow from "../components/ui/BorderGlow";
import NavBar from "../components/NavBar";
import { news } from "../data/news";
import { loadSavedNewsIds, saveSavedNewsIds } from "../utils/savedNews";

// const Home = () => {

//     const tasks = [
//         {id: 1,title: "Debounced Search",concept: "AbortController",route: "/debounced-search"},
//         {id: 2,title: "Infinite Scroll",concept: "Intersection Observer",route: "/infinite-scroll"},
//         {id: 3,title: "Multi Step Form",concept: "useReducer",route: "/multi-step-form"},
//         {id: 4,title: "Shopping Cart",concept: "Context API • useReducer",route: "/shopping-cart"}
//     ];

//     return (
//         <>
//             <NavBar />
const Home = () => {
  const [savedIds, setSavedIds] = useState(() => loadSavedNewsIds());

  useEffect(() => {
    saveSavedNewsIds(savedIds);
  }, [savedIds]);

  const toggleSaved = (id) => {
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((savedId) => savedId !== id) : [...prev, id]
    );
  };

  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");
  const [sortDate, setSortDate] = useState("");
  const [sortTitle, setSortTitle] = useState("");
  const [filterDate, setFilterDate] = useState("");
  {
    id: 1,
    title: "AI Revolution Begins",
    genre: "Technology",
    date: "2026-07-21",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995"
  },
  {
    id: 2,
    title: "India Wins Series",
    genre: "Sports",
    date: "2026-07-18",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e"
  },
  {
    id: 3,
    title: "Stock Market Rises",
    genre: "Business",
    date: "2026-07-20",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3"
  },
  {
    id: 4,
    title: "New Health Guidelines",
    genre: "Health",
    date: "2026-07-15",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d"
  },
  {
    id: 5,
    title: "Movie Breaks Records",
    genre: "Entertainment",
    date: "2026-07-17",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba"
  },
];
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");
  const [sortDate, setSortDate] = useState("");
  const [sortTitle, setSortTitle] = useState("");
  const [filterDate, setFilterDate] = useState("");

  const filteredNews = useMemo(() => {
    let data = [...news];

    if (search) {
      data = data.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (genre !== "All") {
      data = data.filter(item => item.genre === genre);
    }

    if (sortDate === "latest") {
      data.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortDate === "oldest") {
      data.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    if (sortTitle === "az") {
      data.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortTitle === "za") {
      data.sort((a, b) => b.title.localeCompare(a.title));
    }

    if (filterDate) {
  data = data.filter(item => item.date === filterDate);
}

    return data;
  }, [search, genre, sortDate, sortTitle,filterDate]);

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      {/* Search & Filters */}
      <NavBar />
      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          placeholder="Search news..."
          className="border p-2 rounded bg-slate-900 text-white outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2 rounded bg-slate-900 text-white outline-none"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option>All</option>
          <option>Technology</option>
          <option>Sports</option>
          <option>Business</option>
          <option>Health</option>
          <option>Entertainment</option>
        </select>

        <input
          type="date"
          className="border p-2 rounded bg-slate-900 text-white outline-none"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
        />

        <select
          className="border p-2 rounded bg-slate-900 text-white outline-none"
          value={sortDate}
          onChange={(e) => setSortDate(e.target.value)}
        >
          <option value="">Date</option>
          <option value="latest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>

        <select
          className="border p-2 rounded bg-slate-900 text-white outline-none"
          value={sortTitle}
          onChange={(e) => setSortTitle(e.target.value)}
        >
          <option value="">Title</option>
          <option value="az">A - Z</option>
          <option value="za">Z - A</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNews.map((item) => {
          const isSaved = savedIds.includes(item.id);
          return (
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
                  className={`mt-4 rounded-full px-4 py-2 text-sm transition ${isSaved ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500' : 'bg-sky-500/20 text-sky-300 border border-sky-500 hover:bg-sky-500/30'}`}
                  onClick={() => toggleSaved(item.id)}
                >
                  {isSaved ? 'Saved' : 'Save'}
                </button>
              </div>
            </BorderGlow>
          );
        })}
      </div>
    </div>
  );
}
export default Home