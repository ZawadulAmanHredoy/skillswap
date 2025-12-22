export default function HowItWorks(){
  const steps = [
    {t:"Browse listings", d:"Filter by category and rating"},
    {t:"Pick a provider", d:"Check reviews & price"},
    {t:"Book a session", d:"Pay or swap skills—up to you!"}
  ];
  return (
    <section className="max-w-6xl mx-auto p-4" data-aos="fade-up">
      <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
      <div className="grid sm:grid-cols-3 gap-4">
        {steps.map((s,i)=>(
          <div key={i} className="p-6 bg-base-200 rounded-xl">
            <div className="text-lg font-semibold">{s.t}</div>
            <p className="opacity-70">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
