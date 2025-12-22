import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function SkillDetails() {
  const { id } = useParams();
  const [skill, setSkill] = useState(null);

  useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find(
          (s) => String(s.skillId) === String(id)
        );
        setSkill(found || null);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    toast.success("Session booked successfully!");
  };

  if (!skill) {
    return (
      <div className="container-page section">
        <div className="surface p-8">
          <h2 className="text-xl font-bold">Skill not found</h2>
          <p className="mt-2 opacity-70">
            The skill id in the URL is: <span className="font-semibold">{id}</span>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="section">
      <div className="container-page">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="surface overflow-hidden">
            <img
              src={skill.image}
              alt={skill.skillName}
              className="w-full h-[320px] sm:h-[420px] object-cover"
            />
          </div>

          <div className="surface p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="badge badge-primary badge-outline rounded-full">
                {skill.category}
              </span>
              <span className="badge badge-ghost rounded-full">⭐ {skill.rating}</span>
              <span className="badge badge-ghost rounded-full">
                Slots: {skill.slotsAvailable}
              </span>
            </div>

            <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
              {skill.skillName}
            </h1>
            <p className="mt-3 opacity-75 leading-relaxed">{skill.description}</p>

            <div className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
              <div className="p-4 rounded-2xl bg-base-200/40">
                <p className="opacity-70">Provider</p>
                <p className="font-semibold">{skill.providerName}</p>
              </div>
              <div className="p-4 rounded-2xl bg-base-200/40">
                <p className="opacity-70">Email</p>
                <p className="font-semibold break-all">{skill.providerEmail}</p>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm opacity-70">Session price</p>
              <p className="text-3xl font-extrabold">${skill.price}</p>
            </div>

            <div className="soft-divider my-6" />

            <form onSubmit={handleSubmit} className="space-y-3">
              <h3 className="text-lg font-bold">Book Session</h3>

              <input
                name="name"
                required
                placeholder="Name"
                className="input input-bordered w-full rounded-xl"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Email"
                className="input input-bordered w-full rounded-xl"
              />
              <button className="btn btn-primary w-full rounded-xl">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
