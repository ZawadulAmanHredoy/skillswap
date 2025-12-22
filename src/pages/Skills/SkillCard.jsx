import { Link } from "react-router-dom";

export default function SkillCard({ skill }) {
  const { skillId, skillName, providerName, price, rating, image, category } = skill;

  return (
    <div className="surface overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative">
        <img src={image} alt={skillName} className="h-48 w-full object-cover" />
        <div className="absolute top-3 left-3">
          <span className="badge badge-primary badge-outline rounded-full">
            {category}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold leading-snug line-clamp-1">{skillName}</h3>
        <p className="mt-1 text-sm opacity-70 line-clamp-1">by {providerName}</p>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-sm opacity-70">Price</p>
            <p className="text-xl font-extrabold">${price}</p>
          </div>
          <div className="text-right">
            <p className="text-sm opacity-70">Rating</p>
            <p className="font-semibold">⭐ {rating}</p>
          </div>
        </div>

        {/* ✅ Important: Link is the clickable element */}
        <div className="mt-5">
          <Link
            to={`/skill/${skillId}`}
            className="btn btn-primary w-full rounded-xl"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
