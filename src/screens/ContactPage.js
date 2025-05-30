import React, { useState } from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaChevronDown, FaChevronRight, FaInstagram, FaSteam, FaDiscord } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
  const [isContactsOpen, setIsContactsOpen] = useState(false);
  const [isSocialOpen, setIsSocialOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });
    try {
      const result = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          date: getCurrentDate(),
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully! I will get back to you soon.'
        });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
      console.error('Email send error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Get current date in the format "Thu 21 Apr"
  const getCurrentDate = () => {
    const date = new Date();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`;
  };

  return (
    <div className="h-full bg-[#011627] text-white">
      <div className="flex flex-col md:flex-row h-full">
        {/* Left sidebar - becomes top menu on mobile */}
        <div className="w-full md:w-[205px] md:border-r border-[#1E2D3D]">
          {/* Contacts dropdown */}
          <div 
            className="flex items-center h-[45px] border-b border-[#1E2D3D] cursor-pointer"
            onClick={() => setIsContactsOpen(!isContactsOpen)}
          >
            <div className="w-full px-4 flex items-center justify-between">
              <span className="text-[#607B96]">contacts</span>
              <span className="md:hidden">
                {isContactsOpen ? <FaChevronDown /> : <FaChevronRight />}
              </span>
            </div>
          </div>
          <div className={`${isContactsOpen ? 'block' : 'hidden'} md:block p-4 border-b md:border-b-0 border-[#1E2D3D]`}>
            <div className="mb-4">
              <div className="flex items-start gap-2 text-[#607B96] mb-2">
                <span className="mt-1">📧</span>
                <div>
                  <a href="mailto:radu.andrei.taica@gmail.com" className="hover:text-white whitespace-normal">
                    radu.andrei.
                    <br />
                    taica@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2 text-[#607B96]">
                <span>📱</span>
                <a href="tel:+40736012875" className="hover:text-white">+40736012875</a>
              </div>
            </div>
          </div>

          {/* Find me also in dropdown */}
          <div 
            className="flex items-center h-[45px] border-b border-[#1E2D3D] cursor-pointer"
            onClick={() => setIsSocialOpen(!isSocialOpen)}
          >
            <div className="w-full px-4 flex items-center justify-between">
              <span className="text-[#607B96]">find-me-on</span>
              <span className="md:hidden">
                {isSocialOpen ? <FaChevronDown /> : <FaChevronRight />}
              </span>
            </div>
          </div>
          <div className={`${isSocialOpen ? 'block' : 'hidden'} md:block p-4`}>
            <div className="space-y-2">
              <a href="https://www.instagram.com/radutaica" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#607B96] hover:text-white transition-colors duration-200 group">
                <FaInstagram className="text-pink-500 group-hover:scale-110 transition-transform" />
                <span className="border-b border-transparent group-hover:border-white">Instagram</span>
              </a>
              <a href="https://steamcommunity.com/profiles/76561198041583922/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#607B96] hover:text-white transition-colors duration-200 group">
                <FaSteam className="text-blue-400 group-hover:scale-110 transition-transform" />
                <span className="border-b border-transparent group-hover:border-white">Steam</span>
              </a>
              <a href="https://discord.com/users/172601259864489984" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#607B96] hover:text-white transition-colors duration-200 group">
                <FaDiscord className="text-indigo-400 group-hover:scale-110 transition-transform" />
                <span className="border-b border-transparent group-hover:border-white">Discord</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main content area */}
        <div className="flex-1 flex flex-col">
          <div className="h-[45px] border-b border-[#1E2D3D] flex items-center px-4">
          </div>

          <div className="flex-1 flex flex-col lg:flex-row">
            {/* Contact form */}
            <div className="flex-1 p-8 lg:border-r border-[#1E2D3D]">
              <form onSubmit={handleSubmit} className="max-w-xl">
                <div className="mb-6">
                  <label className="block text-[#607B96] mb-2">_name:</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#011221] border border-[#1E2D3D] rounded p-2 text-white focus:outline-none focus:border-[#607B96] [&:-webkit-autofill]:[-webkit-text-fill-color:white] [&:-webkit-autofill]:shadow-[0_0_0_30px_#011221_inset] [&:-webkit-autofill]:hover:[-webkit-text-fill-color:white] [&:-webkit-autofill]:focus:[-webkit-text-fill-color:white]"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-[#607B96] mb-2">_email:</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#011221] border border-[#1E2D3D] rounded p-2 text-white focus:outline-none focus:border-[#607B96] [&:-webkit-autofill]:[-webkit-text-fill-color:white] [&:-webkit-autofill]:shadow-[0_0_0_30px_#011221_inset] [&:-webkit-autofill]:hover:[-webkit-text-fill-color:white] [&:-webkit-autofill]:focus:[-webkit-text-fill-color:white]"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-[#607B96] mb-2">_message:</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full bg-[#011221] border border-[#1E2D3D] rounded p-2 text-white focus:outline-none focus:border-[#607B96]"
                    placeholder="your message here..."
                  />
                </div>
                {submitStatus.message && (
                  <div className={`mb-4 p-2 rounded ${
                    submitStatus.type === 'success' ? 'bg-green-900/50 text-green-300' : 'bg-red-900/50 text-red-300'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-[#1C2B3A] text-[#FFFFFF] px-4 py-2 rounded transition-colors ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#263B4D]'
                  }`}
                >
                  {isSubmitting ? 'sending...' : 'submit-message'}
                </button>
              </form>
            </div>

            {/* Code snippet - hidden on mobile */}
            <div className="hidden lg:block flex-1 p-8 bg-[#011221] font-mono">
              <div className="text-[#607B96]">
                <div className="mb-4">
                  <span className="text-[#C98BDF]">const</span>{" "}
                  <span className="text-[#5565E8]">button</span> ={" "}
                  <span className="text-[#5565E8]">document</span>.
                  <span className="text-[#5565E8]">querySelector</span>(
                  <span className="text-[#FEA55F]">'#sendBtn'</span>);
                </div>

                <div className="mb-4">
                  <span className="text-[#C98BDF]">const</span>{" "}
                  <span className="text-[#5565E8]">message</span> = {"{"}
                  <div className="pl-4">
                    <div>
                      <span className="text-[#5565E8]">name</span>:{" "}
                      <span className="text-[#FEA55F]">"{formData.name || ''}"</span>,
                    </div>
                    <div>
                      <span className="text-[#5565E8]">email</span>:{" "}
                      <span className="text-[#FEA55F]">"{formData.email || ''}"</span>,
                    </div>
                    <div>
                      <span className="text-[#5565E8]">message</span>:{" "}
                      <span className="text-[#FEA55F]">"{formData.message || ''}"</span>,
                    </div>
                    <div>
                      <span className="text-[#5565E8]">date</span>:{" "}
                      <span className="text-[#FEA55F]">"{getCurrentDate()}"</span>
                    </div>
                  </div>
                  {"}"}
                </div>

                <div>
                  <span className="text-[#5565E8]">button</span>.
                  <span className="text-[#5565E8]">addEventListener</span>(
                  <span className="text-[#FEA55F]">'click'</span>, () {'=>'} {'{'}
                  <div className="pl-4">
                    <span className="text-[#5565E8]">form</span>.
                    <span className="text-[#5565E8]">send</span>(message);
                  </div>
                  {'}'})
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
