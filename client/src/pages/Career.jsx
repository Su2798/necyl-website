import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  MapPin, Clock, Briefcase, ChevronDown, ChevronUp,
  Mail, Users, Star, Heart, BookOpen, Award,
} from 'lucide-react';
import Button from '../components/Button';

const BENEFIT_ICONS = [
  <BookOpen size={28} />,
  <Users size={28} />,
  <Heart size={28} />,
  <Award size={28} />,
  <Star size={28} />,
  <Briefcase size={28} />,
];

function getTagStyle(tag) {
  if (!tag) return null;
  const upper = tag.toLowerCase();
  if (upper === 'hot' || tag === '\u1021\u101b\u1031\u1038\u1000\u103c\u102e\u1038') {
    return 'bg-orange-100 text-orange-700';
  }
  if (upper === 'new' || tag === '\u1021\u101e\u1005\u103a') {
    return 'bg-blue-100 text-blue-700';
  }
  return 'bg-gray-100 text-gray-600';
}

const JobCard = ({ job, t }) => {
  const [open, setOpen] = useState(false);
  const applyMailTo = "mailto:hr@necyl.com?subject=" + encodeURIComponent("Application for " + job.title);
  const tagStyle = getTagStyle(job.tag);

  return (
    <div className={`bg-white rounded-3xl border transition-all duration-300 overflow-hidden ${open ? 'border-blue-300 shadow-xl' : 'border-gray-100 shadow-sm hover:shadow-lg hover:border-blue-200'}`}>
      {/* Card Header */}
      <div className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
          {/* Left info */}
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-orange-500 bg-orange-50 px-3 py-1 rounded-full">
                {job.department}
              </span>
              {job.tag && tagStyle && (
                <span className={`text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full ${tagStyle}`}>
                  {job.tag}
                </span>
              )}
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-3">{job.title}</h3>
            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1.5"><MapPin size={14} className="text-orange-400" /> {job.location}</span>
              <span className="flex items-center gap-1.5"><Clock size={14} className="text-orange-400" /> {job.type}</span>
              <span className="flex items-center gap-1.5"><Briefcase size={14} className="text-orange-400" /> {job.level}</span>
            </div>
            <p className="mt-4 text-gray-600 leading-relaxed text-sm md:text-base">{job.summary}</p>
            <p className="mt-3 text-blue-700 font-semibold text-sm">{job.salary}</p>
          </div>

          {/* Right actions */}
          <div className="flex md:flex-col items-center gap-3 shrink-0">
            <a
              href={applyMailTo}
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2.5 rounded-xl transition-colors text-sm whitespace-nowrap shadow-md hover:shadow-lg"
            >
              <Mail size={15} /> {t('career.applyNow')}
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-1.5 text-blue-700 hover:text-blue-900 font-medium text-sm transition-colors"
            >
              {open
                ? <><ChevronUp size={16} /> {t('career.less')}</>
                : <><ChevronDown size={16} /> {t('career.viewDetails')}</>}
            </button>
          </div>
        </div>
      </div>

      {/* Expandable Details */}
      {open && (
        <div className="px-6 md:px-8 pb-8 border-t border-gray-100 pt-6 grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
              <Briefcase size={16} className="text-orange-500" /> {t('career.responsibilities')}
            </h4>
            <ul className="space-y-2">
              {(job.responsibilities || []).map((r, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
              <Star size={16} className="text-orange-500" /> {t('career.requirements')}
            </h4>
            <ul className="space-y-2">
              {(job.requirements || []).map((r, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

const Career = () => {
  const { t } = useTranslation();

  const jobs = t('career.jobs', { returnObjects: true }) || [];
  const benefits = t('career.benefits', { returnObjects: true }) || [];
  const stats = t('career.stats', { returnObjects: true }) || [];
  const steps = t('career.howToApplySteps', { returnObjects: true }) || [];

  const filterAll = t('career.filterAll');
  const deptTeaching = t('career.deptTeaching');
  const deptAdmin = t('career.deptAdmin');
  const deptMarketing = t('career.deptMarketing');

  const departments = [
    { key: 'all', label: filterAll },
    { key: 'teaching', label: deptTeaching },
    { key: 'admin', label: deptAdmin },
    { key: 'marketing', label: deptMarketing },
  ];

  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all'
    ? jobs
    : jobs.filter(j => {
        if (filter === 'teaching') return j.department === deptTeaching || j.department === 'Teaching';
        if (filter === 'admin') return j.department === deptAdmin || j.department === 'Administration';
        if (filter === 'marketing') return j.department === deptMarketing || j.department === 'Marketing';
        return true;
      });

  const countFor = (key) => {
    if (key === 'all') return jobs.length;
    return jobs.filter(j => {
      if (key === 'teaching') return j.department === deptTeaching || j.department === 'Teaching';
      if (key === 'admin') return j.department === deptAdmin || j.department === 'Administration';
      if (key === 'marketing') return j.department === deptMarketing || j.department === 'Marketing';
      return false;
    }).length;
  };

  return (
    <div className="bg-white">

      {/* ── Hero Banner ── */}
      <section className="bg-blue-900 text-white py-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-400 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-400 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 max-w-7xl relative text-center">
          <span className="inline-block text-orange-400 text-sm font-bold uppercase tracking-widest mb-4">
            {t('career.joinTeam')}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
            {t('career.heroTitle')}
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
            {t('career.intro')}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-8 text-center">
            {stats.map((s, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-white">{s.num}</div>
                <div className="text-blue-300 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── Why Work With Us ── */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12">
            <span className="text-orange-500 text-sm font-bold uppercase tracking-widest">{t('career.whyTitle')}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mt-2">{t('career.whySubtitle')}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 mb-4 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  {BENEFIT_ICONS[i] || <Briefcase size={28} />}
                </div>
                <h3 className="font-bold text-blue-900 text-lg mb-2">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open Positions ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-10">
            <span className="text-orange-500 text-sm font-bold uppercase tracking-widest">{t('career.openPositions')}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mt-2">{t('career.currentOpportunities')}</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">{t('career.positionsSubtitle')}</p>
          </div>

          {/* Department filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {departments.map(d => (
              <button
                key={d.key}
                onClick={() => setFilter(d.key)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  filter === d.key
                    ? 'bg-blue-900 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-800'
                }`}
              >
                {d.label} ({countFor(d.key)})
              </button>
            ))}
          </div>

          {/* Job cards */}
          <div className="space-y-5">
            {filtered.map(job => <JobCard key={job.id} job={job} t={t} />)}
          </div>
        </div>
      </section>

      {/* ── How To Apply ── */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-orange-400 text-sm font-bold uppercase tracking-widest">{t('career.readyToApply')}</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">{t('career.howToApplyTitle')}</h2>
              <div className="space-y-5">
                {steps.map((s, i) => (
                  <div key={i} className="flex gap-5 items-start">
                    <div className="w-10 h-10 rounded-full bg-orange-500 text-white font-bold text-sm flex items-center justify-center shrink-0">
                      {s.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{s.title}</h4>
                      <p className="text-blue-300 text-sm mt-0.5">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-800 rounded-3xl p-8 border border-blue-700">
              <h3 className="text-xl font-bold mb-2">{t('career.noRole')}</h3>
              <p className="text-blue-300 text-sm mb-6 leading-relaxed">
                {t('career.noRoleDesc')}
              </p>
              <a
                href="mailto:hr@necyl.com?subject=Speculative%20Application%20-%20NECYL"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl transition-colors shadow-lg"
              >
                <Mail size={18} /> {t('career.emailHR')}
              </a>
              <div className="mt-6 pt-6 border-t border-blue-700">
                <p className="text-blue-400 text-xs">📧 hr@necyl.com</p>
                <p className="text-blue-400 text-xs mt-1">📞 +95 9 123 456 789</p>
                <p className="text-blue-400 text-xs mt-1">⏰ {t('career.contactHours')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Career;
