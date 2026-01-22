import Image from "next/image";

const mockRecipes = [
  {
    id: 1,
    title: "Creamy Garlic Pasta",
    description: "A simple, comforting weeknight pasta ready in 25 minutes.",
    category: "Dinner",
    difficulty: "Easy",
    cookTime: 25,
    image: "/window.svg",
  },
  {
    id: 2,
    title: "Berry Overnight Oats",
    description: "Healthy make-ahead breakfast with oats, yogurt, and berries.",
    category: "Breakfast",
    difficulty: "Easy",
    cookTime: 10,
    image: "/globe.svg",
  },
  {
    id: 3,
    title: "One-Pan Lemon Chicken",
    description: "Juicy chicken with roasted veggies in a bright lemon sauce.",
    category: "Dinner",
    difficulty: "Medium",
    cookTime: 35,
    image: "/file.svg",
  },
];

const filters = {
  categories: ["All", "Breakfast", "Lunch", "Dinner", "Dessert", "Snack"],
  difficulties: ["All", "Easy", "Medium", "Hard"],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 text-xl">
              🥘
            </span>
            <div>
              <p className="text-sm font-semibold tracking-tight text-amber-700">
                Recipe Sharing Platform
              </p>
              <p className="text-xs text-neutral-500">
                Share what you cook. Discover what others love.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <button className="hidden rounded-full border border-neutral-200 px-3 py-1.5 text-neutral-700 hover:bg-neutral-50 sm:inline-flex">
              Log in
            </button>
            <button className="rounded-full bg-amber-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-amber-600">
              Share a recipe
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <section className="mb-8 flex flex-col gap-6 rounded-2xl bg-gradient-to-r from-amber-50 via-orange-50 to-rose-50 px-5 py-8 sm:px-8 sm:py-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
              Cook, Capture, Share
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
              A calm place to keep and share your favorite recipes.
            </h1>
            <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
              Save your go-to dishes, add photos, and browse recipes from other
              home cooks. We&apos;ll connect this to Supabase next so everything
              stays in sync.
            </p>
            <div className="flex flex-wrap gap-3 pt-1 text-sm text-neutral-700">
              <div className="inline-flex items-center gap-1 rounded-full bg-white/80 px-3 py-1 shadow-sm ring-1 ring-amber-100">
                <span className="text-xs">✨</span>
                Simple, clean interface
              </div>
              <div className="inline-flex items-center gap-1 rounded-full bg-white/80 px-3 py-1 shadow-sm ring-1 ring-amber-100">
                <span className="text-xs">📸</span>
                Recipe photos
              </div>
              <div className="inline-flex items-center gap-1 rounded-full bg-white/80 px-3 py-1 shadow-sm ring-1 ring-amber-100">
                <span className="text-xs">🍳</span>
                Organized by meal & difficulty
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-1 justify-center lg:mt-0">
            <div className="relative h-40 w-64 overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-neutral-100 sm:h-48 sm:w-80">
              <div className="flex items-center justify-between border-b px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-8 w-8 rounded-full bg-amber-100" />
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-neutral-900">
                      Creamy Garlic Pasta
                    </p>
                    <p className="text-[10px] text-neutral-500">
                      25 min • Easy • Dinner
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-medium text-amber-700">
                  New
                </span>
              </div>
              <div className="flex h-full items-center justify-center bg-neutral-50">
                <Image
                  src="/window.svg"
                  alt="Recipe preview"
                  width={96}
                  height={96}
                  className="opacity-80"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex-1">
            <label className="block text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
              Browse recipes
            </label>
            <div className="mt-2 flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-amber-400">
              <span className="text-neutral-400">🔍</span>
              <input
                type="text"
                placeholder="Search by recipe name (static for now)"
                className="w-full border-none bg-transparent text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:ring-0"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-2 sm:pt-6">
            <select className="min-w-[130px] rounded-full border border-neutral-200 bg-white px-3 py-2 text-xs text-neutral-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400">
              {filters.categories.map((category) => (
                <option key={category}>{category}</option>
              ))}
            </select>
            <select className="min-w-[130px] rounded-full border border-neutral-200 bg-white px-3 py-2 text-xs text-neutral-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400">
              {filters.difficulties.map((difficulty) => (
                <option key={difficulty}>{difficulty}</option>
              ))}
            </select>
          </div>
        </section>

        <section aria-label="Recipe feed" className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-neutral-900 sm:text-base">
              Popular recipes
            </h2>
            <p className="text-xs text-neutral-500">
              Showing static examples • Supabase coming next
            </p>
          </div>

          <div className="grid gap-4 pt-1 sm:grid-cols-2 lg:grid-cols-3">
            {mockRecipes.map((recipe) => (
              <article
                key={recipe.id}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-neutral-100 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="relative h-36 w-full bg-neutral-100 sm:h-40">
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    className="object-contain p-4 opacity-80 transition group-hover:opacity-100"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-t-2xl bg-gradient-to-t from-black/15 via-transparent opacity-60" />
                  <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur">
                    <span>{recipe.category}</span>
                    <span className="h-1 w-1 rounded-full bg-white/60" />
                    <span>{recipe.difficulty}</span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-2 px-4 pb-4 pt-3">
                  <h3 className="text-sm font-semibold text-neutral-900 line-clamp-2">
                    {recipe.title}
                  </h3>
                  <p className="line-clamp-2 text-xs text-neutral-500">
                    {recipe.description}
                  </p>
                  <div className="mt-auto flex items-center justify-between pt-1 text-xs text-neutral-500">
                    <span>⏱ {recipe.cookTime} min</span>
                    <button className="text-xs font-medium text-amber-700 hover:text-amber-800">
                      View recipe
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-dashed border-neutral-200 bg-neutral-50 px-4 py-3 text-xs text-neutral-500 sm:text-sm">
            This is a static preview of the recipe feed. Once Supabase is wired
            up, recipes, filters, and search will be fully dynamic.
          </div>
        </section>
      </main>
    </div>
  );
}
