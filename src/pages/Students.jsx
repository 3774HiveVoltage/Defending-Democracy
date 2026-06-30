import React from 'react';

const studentCards = [
  {
    title: 'DD Database',
    description: 'A searchable guide to student-centered programs and civic resources.',
  },
  {
    title: 'Teaching Resources',
    description: 'Lesson plans, toolkits, and tips for educators and campus organizers.',
  },
  {
    title: 'Student Stories',
    description: 'Profiles of youth leaders who used civic action to create change.',
  },
];

const StudentsPage = () => {
  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] border border-white/10 bg-zinc-950/80 p-8 shadow-2xl">
        <p className="text-sm uppercase tracking-[0.32em] text-red-400">For students</p>
        <h1 className="mt-3 text-4xl font-black uppercase tracking-tight text-white">Opportunities for every level</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-300">
          Whether you are in high school, college, or a community group, discover programs that fit your schedule, interests, and goals.
        </p>
      </section>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {studentCards.map((card) => (
          <div key={card.title} className="rounded-[1.75rem] border border-white/10 bg-black/50 p-6">
            <h2 className="text-2xl font-semibold text-white">{card.title}</h2>
            <p className="mt-3 text-sm leading-6 text-gray-300">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentsPage;
