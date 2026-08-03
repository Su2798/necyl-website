import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '../components/Button';

const ProgrammeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  // Fetch the list of programmes
  const programmes = t('programmes.list', { returnObjects: true });
  
  // Find the specific programme based on the ID from the URL
  const programme = programmes.find((p) => p.id.toString() === id);

  if (!programme) return <div className="py-20 text-center">Programme not found.</div>;

  return (
    <div className="py-20 container mx-auto px-6 max-w-4xl">
      <button onClick={() => navigate('/programmes')} className="mb-6 text-orange-600 font-bold hover:underline">
        ← Back to Programmes
      </button>
      
      <h1 className="text-5xl font-bold text-navy mb-6">{programme.title}</h1>
      <div className="bg-blue-50 p-6 rounded-2xl mb-8">
        <p className="text-gray-700 leading-relaxed text-lg">{programme.desc}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="border p-4 rounded-xl">
          <p className="text-xs uppercase font-bold text-gray-500">{t('programmes.level')}</p>
          <p className="font-bold text-navy">{programme.level}</p>
        </div>
        <div className="border p-4 rounded-xl">
          <p className="text-xs uppercase font-bold text-gray-500">{t('programmes.duration')}</p>
          <p className="font-bold text-orange-600">{programme.duration}</p>
        </div>
      </div>
      
      <Button onClick={() => navigate('/contact')}>Enquire Now</Button>
    </div>
  );
};

export default ProgrammeDetail;