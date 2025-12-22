import { useEffect, useState } from "react";
import SkillCard from "../Skills/SkillCard";

export default function PopularSkills(){
  const [skills, setSkills] = useState([]);
  useEffect(()=>{ fetch("/skills.json").then(r=>r.json()).then(setSkills); },[]);

  return (
    <section id="popular" className="section">
      <div className="container-page">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
          <div>
            <h2 className="section-title">Popular Skills</h2>
            <p className="section-subtitle">Top picks from your local community.</p>
          </div>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {skills.slice(0, 6).map((s) => (
            <SkillCard key={s.skillId} skill={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
