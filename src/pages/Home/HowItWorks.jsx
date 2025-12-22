export default function HowItWorks(){
  const steps = [
    { t: "Browse listings", d: "Filter by category, rating, and price to find the right match." },
    { t: "Pick a provider", d: "Check the details and choose the best local teacher for you." },
    { t: "Book a session", d: "Submit a quick form and you’re ready to learn." },
  ];

  return (
    <section id="how" className="section" data-aos="fade-up">
      <div className="container-page">
        <div className="mb-6">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">A simple flow designed for speed and clarity.</p>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-3">
          {steps.map((s, i) => (
            <div key={i} className="surface p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <div className="h-11 w-11 rounded-2xl bg-primary/10 text-primary flex items-center justify-center font-extrabold">
                    {i + 1}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-extrabold tracking-tight">{s.t}</h3>
                  <p className="mt-2 opacity-70 leading-relaxed">{s.d}</p>

                  <div className="mt-4 flex items-center gap-2 text-sm">
                    <span className="badge badge-ghost rounded-full">Fast</span>
                    <span className="badge badge-ghost rounded-full">Local</span>
                    <span className="badge badge-ghost rounded-full">Simple</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 surface p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-lg sm:text-xl font-extrabold tracking-tight">Ready to start learning?</p>
              <p className="opacity-70 mt-1">Explore popular skills and book a session in minutes.</p>
            </div>
            <a href="#popular" className="btn btn-primary rounded-xl">
              Explore Skills
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
