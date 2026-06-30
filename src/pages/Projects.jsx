import React, { useState } from 'react';

const sampleProjects = [
  {
    name: 'Youth Voter Mobilization',
    category: 'Voting',
    location: 'United States',
    summary: 'A campaign to register students and bring voter education to campuses.',
  },
  {
    name: 'Community Clean-Up',
    category: 'Environmental',
    location: 'Local',
    summary: 'Volunteer crews restore parks, collect waste, and advocate for cleaner public spaces.',
  },
  {
    name: 'Equality Dialogue Series',
    category: 'Gender Equality',
    location: 'Global',
    summary: 'Virtual roundtables connecting youth leaders across borders to discuss equity and justice.',
  },
  {
    name: 'Rights Awareness Workshop',
    category: 'Civil Rights',
    location: 'Regional',
    summary: 'Practical sessions on voting rights, protest safety, and digital civic participation.',
  },
];

const categoryOptions = ['All', 'Voting', 'Environmental', 'Gender Equality', 'Civil Rights'];

const ProjectsPage = () => {
  const [category, setCategory] = useState('All');

  const filteredProjects = sampleProjects.filter((project) => category === 'All' || project.category === category);

  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] border border-white/10 bg-zinc-950/80 p-8 shadow-2xl">
        <p className="text-sm uppercase tracking-[0.32em] text-red-400">Projects</p>
        <h1 className="mt-3 text-4xl font-black uppercase tracking-tight text-white">Explore community-led action</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-300">
          Browse featured projects from the sketch notes. Each program is designed to be accessible, impactful, and connected to the issues young people care about most.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {categoryOptions.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setCategory(option)}
              className={`rounded-full border px-4 py-2 text-sm transition ${category === option ? 'border-red-500 bg-red-600 text-white' : 'border-white/10 bg-white/5 text-gray-300 hover:border-white/20 hover:bg-white/10'}`}
            >
              {option}
            </button>
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <div key={project.name} className="rounded-[1.75rem] border border-white/10 bg-black/50 p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-red-400">{project.category}</p>
                <h2 className="mt-3 text-2xl font-semibold text-white">{project.name}</h2>
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.22em] text-gray-300">{project.location}</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-300">{project.summary}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProjectsPage;
