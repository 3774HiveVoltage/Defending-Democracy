import React from 'react';

const issues = [
  { title: 'Environmentalism', detail: 'Protect land, clean streets, and promote sustainable civic projects.' },
  { title: 'Voting', detail: 'Mobilize young people, host voter education drives, and strengthen turnout.' },
  { title: 'Gender Equality', detail: 'Support inclusive leadership and equal opportunity for all genders.' },
  { title: 'Racial Equality', detail: 'Build solidarity, confront bias, and invest in equitable policy change.' },
  { title: 'Civil Rights', detail: 'Defend free expression, protest rights, and access to fair representation.' },
  { title: 'Education', detail: 'Create resources that teach civic engagement and democratic values.' },
];

const IssuesPage = () => {
  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] border border-white/10 bg-zinc-950/80 p-8 shadow-2xl">
        <p className="text-sm uppercase tracking-[0.32em] text-red-400">Issues</p>
        <h1 className="mt-3 text-4xl font-black uppercase tracking-tight text-white">The topics we focus on</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-300">
          These issue areas come from the page notes and guide the work we feature. Each one is a space where youth can take concrete action and lead local change.
        </p>
      </section>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
        <div className="grid gap-6 sm:grid-cols-2">
          {issues.map((issue) => (
            <div key={issue.title} className="rounded-[1.75rem] border border-white/10 bg-black/50 p-6">
              <h2 className="text-xl font-semibold text-white">{issue.title}</h2>
              <p className="mt-3 text-sm leading-6 text-gray-300">{issue.detail}</p>
            </div>
          ))}
        </div>

        <div className="rounded-[1.75rem] border border-white/10 bg-black/50 p-6">
          <h2 className="text-xl font-semibold text-white">Issue categories</h2>
          <ul className="mt-4 space-y-3 text-gray-300">
            <li>Environmentalism</li>
            <li>Gender Equality</li>
            <li>Racial Equality</li>
            <li>Voting Rights</li>
            <li>Civil Engagement</li>
            <li>Education</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IssuesPage;
