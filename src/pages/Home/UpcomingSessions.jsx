export default function UpcomingSessions(){
  const list = [
    { title: "Yoga in the Park", when: "Sat 10:00", where: "Ramna Park", tag: "Wellness" },
    { title: "Street Photography Walk", when: "Sun 16:00", where: "Hatirjheel", tag: "Creative" },
    { title: "Beginner JS Clinic", when: "Fri 19:30", where: "Online", tag: "Tech" },
  ];

  return (
    <section className="section" data-aos="fade-up">
      <div className="container-page">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
          <div>
            <h2 className="section-title">Upcoming Local Sessions</h2>
            <p className="section-subtitle">Quick community events you can join this week.</p>
          </div>
          <span className="badge badge-ghost rounded-full">New</span>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((x, i) => (
            <div key={i} className="surface p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="text-lg font-extrabold tracking-tight line-clamp-1">
                    {x.title}
                  </h3>
                  <p className="mt-1 text-sm opacity-70">
                    {x.when} • {x.where}
                  </p>
                </div>

                <span className="badge badge-primary badge-outline rounded-full">
                  {x.tag}
                </span>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl bg-base-200/40 p-4">
                  <p className="opacity-70">Mode</p>
                  <p className="font-semibold">{x.where === "Online" ? "Online" : "In-person"}</p>
                </div>
                <div className="rounded-2xl bg-base-200/40 p-4">
                  <p className="opacity-70">Seats</p>
                  <p className="font-semibold">Limited</p>
                </div>
              </div>

              <button className="btn btn-ghost w-full rounded-xl mt-5">
                Get Reminder
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
