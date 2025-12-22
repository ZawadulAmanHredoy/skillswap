import { useEffect, useState } from "react";
import SkillCard from "../Skills/SkillCard";

export default function PopularSkills(){
  const [skills, setSkills] = useState([]);
  useEffect(()=>{ fetch("/skills.json").then(r=>r.json()).then(setSkills); },[]);
  return (
    <section className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Popular Skills</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {skills.slice(0,6).map(s => <SkillCard key={s.skillId} skill={s} />)}
      </div>
    </section>
  );
}
