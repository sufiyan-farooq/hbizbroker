"use client"
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import CTASection from '@/components/CTASection';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    emailUpdates: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
     

      {/* Hero Section */}
      <section    style={{
        background: "linear-gradient(135deg, #18222e, #273e4e, #345564, #355969)",
      }} className=" text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
  <h3 className="text-3xl font-bold mb-8 relative inline-block" style={{ fontFamily: "PoppinMedium" }}>
            <span className="text-white">
              CONTACT WITH US
            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-gradient-to-r from-[#387b8c] to-[#387b8c] rounded-full"></div>
          </h3>
          <p               style={{ fontFamily: "PoppinRegular" }}
 className="text-xl md:text-2xl text-gray-300 mb-8">
            DROP US A LINE!
          </p>
          <p               style={{ fontFamily: "PoppinRegular" }}
 className="text-lg text-gray-400 max-w-2xl mx-auto">
            Ready to get started? Let's discuss your healthcare business needs and explore how we can help you succeed.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <h2               style={{ fontFamily: "PoppinMedium" }}
 className="text-3xl font-bold text-slate-800 mb-8">GET STARTED TODAY</h2>
              <p               style={{ fontFamily: "PoppinRegular" }}
 className="text-gray-600 mb-8">
                Are you thinking about selling or purchasing a healthcare business? We offer a broad range of services to fit your needs. Send us a message today, and we can start you on a path to success.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div               style={{ fontFamily: "PoppinRegular" }}
>
                  < label className="block text-sm font-medium text-gray-700 mb-2">
                    Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#387b8c] focus:border-[#387b8c] transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div               style={{ fontFamily: "PoppinRegular" }}
>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#387b8c] focus:border-[#387b8c] transition-colors"
                    placeholder="Enter your email"
                  />
                </div>

                <div               style={{ fontFamily: "PoppinRegular" }}
>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#387b8c] focus:border-[#387b8c] transition-colors resize-none"
                    placeholder="Tell us about your healthcare business needs..."
                  />
                </div>
<div style={{ fontFamily: "PoppinRegular" }} className="flex items-center space-x-3">
  <label htmlFor="emailUpdates" className="flex items-center space-x-2 cursor-pointer">
    <input
      type="checkbox"
      id="emailUpdates" 
      name="emailUpdates"
      checked={formData.emailUpdates}
      onChange={handleChange}
      className="w-4 h-4 text-[#387b8c] border-gray-300 rounded focus:ring-[#387b8c]"
    />
    <span className="text-sm text-gray-600">
      Sign up for our email list for updates, promotions, and more.
    </span>
  </label>
</div>

                <button                          style={{ fontFamily: "PoppinMedium" }}


                  type="submit"
                  className="w-full cursor-pointer bg-[#5a9dae] duration-500 hover:bg-[#387b8c] text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>SEND</span>
                </button>

                <p               style={{ fontFamily: "PoppinRegular" }}
 className="text-xs text-gray-500 text-center">
                  This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Business Info Card */}
              
             <div
  data-aos="flip-right"
  data-aos-delay="1000"
  className="bg-slate-800 text-white rounded-3xl p-8 shadow-lg max-w-md w-full relative overflow-hidden h-fit flex flex-col justify-between"
>
  {/* Decorative circles */}
  <div className="absolute top-0 left-2.5 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#5a9dae] rounded-full opacity-10"></div>
  <div className="absolute -bottom-10 -right-30 w-60 h-60 bg-[#5a9dae] rounded-full opacity-10"></div>

  {/* Content */}
  <div>
    <h3
      style={{ fontFamily: "PoppinMedium" }}
      className="text-2xl font-bold mb-6 text-center"
    >
      HEALTHCARE BIZ BROKERS
    </h3>

    <div className="space-y-6">
      <div className="flex items-start space-x-4">
        <MapPin className="w-6 h-6 text-[#5a9dae] mt-1 flex-shrink-0" />
        <div style={{ fontFamily: "PoppinMedium" }}>
          <p className="font-medium">Address</p>
          <p className="text-gray-300">
            1650 Walnut St., Pasadena, CA 91106, USA
          </p>
        </div>
      </div>

      <div className="flex items-start space-x-4">
        <Mail className="w-6 h-6 text-[#5a9dae] mt-1 flex-shrink-0" />
        <div style={{ fontFamily: "PoppinMedium" }}>
          <p className="font-medium">Email</p>
          <a
            href="mailto:info@HealthcareBizBrokers.com"
            className="text-[#5a9dae] transition-colors"
          >
            info@HealthcareBizBrokers.com
          </a>
        </div>
      </div>

      <div className="flex items-start space-x-4">
        <Phone className="w-6 h-6 text-[#5a9dae] mt-1 flex-shrink-0" />
        <div style={{ fontFamily: "PoppinMedium" }}>
          <p className="font-medium">Phone</p>
          <a
            style={{ fontFamily: "PoppinMedium" }}
            href="tel:+18187317773"
            className="text-[#5a9dae] transition-colors"
          >
            (818) 731-7773
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

              {/* Hours Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h3               style={{ fontFamily: "PoppinMedium" }}
 className="text-2xl font-bold mb-6 text-slate-800 flex items-center">
                  <Clock className="w-6 h-6 mr-3 text-[#387b8c]" />
                  HOURS
                </h3>
                
                <div className="space-y-3">
                  <div                style={{ fontFamily: "PoppinRegular" }}
 className="flex  justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-700">Mon</span>
                    <span className="text-gray-600">09:00 am – 05:00 pm</span>
                  </div>
                  <div               style={{ fontFamily: "PoppinRegular" }}
 className="flex  justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-700">Tue</span>
                    <span className="text-gray-600">09:00 am – 05:00 pm</span>
                  </div>
                  <div               style={{ fontFamily: "PoppinRegular" }}
 className="flex  justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-700">Wed</span>
                    <span className="text-gray-600">09:00 am – 05:00 pm</span>
                  </div>
                  <div               style={{ fontFamily: "PoppinRegular" }}
 className="flex  justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-700">Thu</span>
                    <span className="text-gray-600">09:00 am – 05:00 pm</span>
                  </div>
                  <div               style={{ fontFamily: "PoppinRegular" }}
 className="flex  justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-700">Fri</span>
                    <span className="text-gray-600">09:00 am – 05:00 pm</span>
                  </div>
                  <div               style={{ fontFamily: "PoppinRegular" }}
 className="flex  justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-700">Sat</span>
                    <span className="text-red-500">Closed</span>
                  </div>
                 <div               style={{ fontFamily: "PoppinRegular" }}
 className="flex  justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-700">Sat</span>
                    <span className="text-red-500">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
    <CTASection/>

  
    </div>
  );
};

export default ContactPage;