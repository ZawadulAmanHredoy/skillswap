export default function UpcomingSessions(){
  const list = [
    {title:"Yoga in the Park", when:"Sat 10:00", where:"Ramna Park"},
    {title:"Street Photography Walk", when:"Sun 16:00", where:"Hatirjheel"},
    {title:"Beginner JS Clinic", when:"Fri 19:30", where:"Online"}
  ];
  return (
    <section className="max-w-6xl mx-auto p-4" data-aos="fade-up">
      <h2 className="text-2xl font-semibold mb-4">Upcoming Local Sessions</h2>
      <div className="grid sm:grid-cols-3 gap-4">
        {list.map((x,i)=>(
          <div className="p-6 rounded-xl bg-base-200" key={i}>
            <div className="font-semibold">{x.title}</div>
            <div className="opacity-70">{x.when} • {x.where}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
