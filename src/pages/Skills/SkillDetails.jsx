import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function SkillDetails(){
  const { id } = useParams();
  const [skill, setSkill] = useState(null);

  useEffect(()=>{
    fetch("/skills.json").then(r=>r.json()).then(data=>{
      setSkill(data.find(s => String(s.skillId) === id));
    });
  },[id]);

  if (!skill) return <div className="p-6">Loading…</div>;

  const handleSubmit = (e)=>{
    e.preventDefault();
    e.target.reset();
    toast.success("Session booked successfully!");
  }

  return (
    <div className="max-w-5xl mx-auto p-4 grid lg:grid-cols-2 gap-6" data-aos="fade-up">
      <img src={skill.image} alt={skill.skillName} className="rounded-xl w-full object-cover"/>
      <div>
        <h1 className="text-3xl font-bold">{skill.skillName}</h1>
        <p className="opacity-70 mt-2">{skill.description}</p>
        <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
          <div>Provider: <b>{skill.providerName}</b></div>
          <div>Category: <b>{skill.category}</b></div>
          <div>Rating: ⭐ {skill.rating}</div>
          <div>Slots: {skill.slotsAvailable}</div>
          <div className="col-span-2">Email: {skill.providerEmail}</div>
          <div className="col-span-2 text-xl font-semibold mt-2">${skill.price}</div>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-3">
          <h3 className="text-lg font-semibold">Book Session</h3>
          <input name="name" required placeholder="Name" className="input input-bordered w-full"/>
          <input name="email" type="email" required placeholder="Email" className="input input-bordered w-full"/>
          <button className="btn btn-primary w-full">Submit</button>
        </form>
      </div>
    </div>
  );
}
