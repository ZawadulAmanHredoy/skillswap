export default function TopRated(){
  const items = [
    {name:"Maya Singh", skill:"Portrait Photography", rating:4.9},
    {name:"Alex Martin", skill:"Guitar", rating:4.8},
    {name:"Nadia Rahman", skill:"Yoga", rating:4.7},
  ];
  return (
    <section className="max-w-6xl mx-auto p-4" data-aos="fade-up">
      <h2 className="text-2xl font-semibold mb-4">Top Rated Providers</h2>
      <div className="grid sm:grid-cols-3 gap-4">
        {items.map((i,idx)=>(
          <div key={idx} className="p-4 rounded-xl bg-base-200">
            <div className="font-semibold">{i.name}</div>
            <div className="opacity-70">{i.skill}</div>
            <div>⭐ {i.rating}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
