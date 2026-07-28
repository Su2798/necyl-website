import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', age: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      return;
    }
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', age: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
    
    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <div className="py-16 container mx-auto px-4 max-w-5xl min-h-screen">
      <SectionHeading title={t('contact.title')} />
      
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Contact Form Section */}
        <div className="flex-1 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          {status === 'success' && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg flex items-center gap-3 animate-in fade-in">
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              {t('contact.form.success')}
            </div>
          )}
          {status === 'error' && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg flex items-center gap-3 animate-in fade-in">
               <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
              {t('contact.form.error')}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">{t('contact.form.name')} <span className="text-red-500">*</span></label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-shadow" placeholder="e.g. Aung Aung" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">{t('contact.form.email')} <span className="text-red-500">*</span></label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-shadow" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">{t('contact.form.phone')}</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-shadow" placeholder="+95 9..." />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">{t('contact.form.age')}</label>
              <input type="number" name="age" value={formData.age} onChange={handleChange} className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-shadow" min="3" max="99" placeholder="Student's Age" />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">{t('contact.form.message')} <span className="text-red-500">*</span></label>
              <textarea name="message" value={formData.message} onChange={handleChange} required rows="5" className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-shadow resize-none" placeholder="How can we help you?"></textarea>
            </div>
            
            <Button type="submit" className="w-full py-3 text-lg shadow-md hover:shadow-lg">{t('contact.form.submit')}</Button>
          </form>
        </div>

        {/* Info & Map Section */}
        <div className="lg:w-1/3 space-y-8">
          <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 shadow-sm">
            <h3 className="font-bold text-blue-900 mb-6 text-2xl">Get in Touch</h3>
            <div className="space-y-5 text-gray-700 text-lg">
              <p className="flex items-start gap-3">
                <span className="text-2xl">📍</span> 
                <span>{t('contact.info.address')}</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-2xl">📧</span> 
                <a href={`mailto:${t('contact.info.email')}`} className="hover:text-orange-500 transition-colors">{t('contact.info.email')}</a>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-2xl">📞</span> 
                <a href={`tel:${t('contact.info.phone')}`} className="hover:text-orange-500 transition-colors">{t('contact.info.phone')}</a>
              </p>
            </div>
          </div>
          
          {/* Interactive Google Map */}
          <div className="h-72 rounded-2xl overflow-hidden border-4 border-white shadow-md relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122212.72408991444!2d96.06173099905953!3d16.883713066341295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1949e223e196b%3A0x56fbd271f8080bb4!2sYangon%2C%20Myanmar%20(Burma)!5e0!3m2!1sen!2sus!4v1714424361556!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="NECYL Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;