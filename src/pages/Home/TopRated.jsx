export default function TopRated(){
  const items = [
    { name: "Maya Singh", skill: "Portrait Photography", rating: 4.9, avatar: "https://i.pravatar.cc/120?img=32" },
    { name: "Alex Martin", skill: "Guitar", rating: 4.8, avatar: "https://i.pravatar.cc/120?img=12" },
    { name: "Nadia Rahman", skill: "Yoga", rating: 4.7, avatar: "https://i.pravatar.cc/120?img=56" },
  ];

  return (
    <section className="section" data-aos="fade-up">
      <div className="container-page">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
          <div>
            <h2 className="section-title">Top Rated Providers</h2>
            <p className="section-subtitle">Trusted locals with consistently great reviews.</p>
          </div>
          <div className="text-sm opacity-70">
            Updated weekly
          </div>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((i, idx) => (
            <div key={idx} className="surface p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="avatar">
                  <div className="w-14 rounded-2xl ring-1 ring-base-200">
                    <img src={i.avatar} alt={i.name} />
                  </div>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-extrabold tracking-tight truncate">{i.name}</p>
                    <span className="badge badge-primary badge-outline rounded-full">
                      ⭐ {i.rating}
                    </span>
                  </div>
                  <p className="text-sm opacity-70 truncate">{i.skill}</p>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl bg-base-200/40 p-4">
                  <p className="opacity-70">Specialty</p>
                  <p className="font-semibold truncate">{i.skill}</p>
                </div>
                <div className="rounded-2xl bg-base-200/40 p-4">
                  <p className="opacity-70">Status</p>
                  <p className="font-semibold">Available</p>
                </div>
              </div>

              <button className="btn btn-ghost w-full rounded-xl mt-5">
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
