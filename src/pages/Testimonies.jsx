import React from 'react';

const testimonials = [
  {
    name: 'Maya',
    role: 'Youth Organizer',
    quote: 'Joining the local clean-up helped me meet other activists and take real steps toward civic change.',
  },
  {
    name: 'Tariq',
    role: 'Student Leader',
    quote: 'I learned how to turn my passion for voting rights into an action plan in my community.',
  },
  {
    name: 'Ana',
    role: 'Volunteer',
    quote: 'Defending Democracy made it easier to find meaningful events and resources that matched my values.',
  },
];

const TestimoniesPage = () => {
  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] border border-white/10 bg-zinc-950/80 p-8 shadow-2xl">
        <p className="text-sm uppercase tracking-[0.32em] text-red-400">Testimonies</p>
        <h1 className="mt-3 text-4xl font-black uppercase tracking-tight text-white">Voices from the movement</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-300">
          Real students and organizers share what working for democracy feels like, and how youth-led action is changing communities.
        </p>
      </section>

      <div className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((item) => (
          <div key={item.name} className="rounded-[1.75rem] border border-white/10 bg-black/50 p-6">
            <p className="text-lg font-semibold text-white">“{item.quote}”</p>
            <p className="mt-4 text-sm uppercase tracking-[0.24em] text-red-400">{item.role}</p>
            <p className="text-sm font-semibold text-gray-300">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimoniesPage;
