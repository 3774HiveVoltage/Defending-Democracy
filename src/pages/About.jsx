import React from 'react';

const AboutPage = () => {
  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] border border-white/10 bg-zinc-950/80 p-8 shadow-2xl">
        <div className="max-w-4xl space-y-6">
          <p className="text-sm uppercase tracking-[0.32em] text-red-400">About Defending Democracy</p>
          <h1 className="text-4xl font-black uppercase tracking-tight text-white">A movement for youth-led civic action</h1>
          <p className="text-lg leading-relaxed text-gray-300">
            Defending Democracy connects young people with projects that protect rights, strengthen communities, and build a healthier future. Using this platform, we make civic engagement easy to explore, understand, and join.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[1.5rem] border border-white/10 bg-black/50 p-6">
              <h2 className="text-xl font-semibold text-white">Who we are</h2>
              <p className="mt-3 text-sm leading-6 text-gray-300">
                A network of young volunteers, organizers, and educators who believe every voice matters. We support local and international efforts that fight for equity and strengthen democracy.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-black/50 p-6">
              <h2 className="text-xl font-semibold text-white">What we do</h2>
              <p className="mt-3 text-sm leading-6 text-gray-300">
                We bring together causes, stories, and learning resources so students and young people can discover opportunities by issue, by region, and by impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: 'Our mission',
            description: 'Build an easy way for youth to find civic projects, support democratic values, and take action on issues that matter.',
          },
          {
            title: 'Why it matters',
            description: 'Democracy works when more people participate. We help young leaders turn awareness into action and connection into real change.',
          },
          {
            title: 'How to join',
            description: 'Explore activities, choose an issue, and connect to projects or resources that match your interests and experience level.',
          },
        ].map((block) => (
          <div key={block.title} className="rounded-[1.5rem] border border-white/10 bg-black/50 p-6">
            <h3 className="text-xl font-semibold text-white">{block.title}</h3>
            <p className="mt-3 text-sm leading-6 text-gray-300">{block.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default AboutPage;
