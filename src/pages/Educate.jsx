import React from 'react';

const resourceCards = [
  {
    title: 'Civic Learning',
    subtitle: 'DD Database',
    description: 'Search guides, reports, and classroom-ready content for youth civic engagement.',
  },
  {
    title: 'Teaching materials',
    subtitle: 'Embedded lessons',
    description: 'Resources for educators who want to bring democracy, protest, and rights into the classroom.',
  },
  {
    title: 'Topic exploration',
    subtitle: 'Research & tools',
    description: 'Dive deeper into each issue with curated readings, videos, and downloadable guides.',
  },
];

const EducatePage = () => {
  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] border border-white/10 bg-zinc-950/80 p-8 shadow-2xl">
        <p className="text-sm uppercase tracking-[0.32em] text-red-400">Educate</p>
        <h1 className="mt-3 text-4xl font-black uppercase tracking-tight text-white">Learn more, take action</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-300">
          A place for teaching resources, toolkits, and deeper context on the issues that shape youth civic engagement around the world.
        </p>
      </section>

      <div className="grid gap-6 lg:grid-cols-3">
        {resourceCards.map((resource) => (
          <div key={resource.title} className="rounded-[1.75rem] border border-white/10 bg-black/50 p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-red-400">{resource.subtitle}</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">{resource.title}</h2>
            <p className="mt-3 text-sm leading-6 text-gray-300">{resource.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducatePage;
