import { Link } from "react-router-dom";
export default function SkillCard({skill}){
  return (
    <div className="card bg-base-100 shadow hover:shadow-lg transition" data-aos="fade-up">
      <figure><img src={skill.image} alt={skill.skillName} className="h-48 w-full object-cover"/></figure>
      <div className="card-body">
        <h3 className="card-title">{skill.skillName}</h3>
        <p className="text-sm opacity-70">{skill.providerName}</p>
        <div className="flex justify-between text-sm">
          <span>⭐ {skill.rating}</span>
          <span className="font-semibold">${skill.price}</span>
        </div>
        <div className="card-actions justify-end">
          <Link className="btn btn-primary btn-sm" to={`/skill/${skill.skillId}`}>View Details</Link>
        </div>
      </div>
    </div>
  );
}
