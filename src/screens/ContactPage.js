import React, { useState } from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      // Replace these with your actual EmailJS credentials
      const result = await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          date: getCurrentDate(),
        },
        'YOUR_PUBLIC_KEY'
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
    <div className="h-[73.5vh] bg-[#011627] text-white">
      <div className="flex h-full">
        {/* Left sidebar */}
        <div className="w-[250px] border-r border-[#1E2D3D]">
          <div className="flex items-center h-[45px] px-4 border-b border-[#1E2D3D]">
            <span className="text-[#607B96]">contacts</span>
          </div>
          <div className="p-4">
            <div className="mb-4">
              <div className="flex items-start gap-2 text-[#607B96] mb-2">
                <span className="mt-1">📧</span>
                <div>
                  <a href="mailto:radu.andrei.taica@gmail.com" className="hover:text-white whitespace-normal">
                    radu.andrei.taica@
                    <br />
                    gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2 text-[#607B96]">
                <span>📱</span>
                <a href="tel:+40736012875" className="hover:text-white">+40736012875</a>
              </div>
            </div>
            <div>
              <div className="text-[#607B96] mb-2">find-me-also-in:</div>
              <div className="space-y-2">
                <a href="#" className="flex items-center gap-2 text-[#607B96] hover:text-white">
                  <span>▶</span>
                  <span>YouTube</span>
                </a>
                <a href="#" className="flex items-center gap-2 text-[#607B96] hover:text-white">
                  <span>▶</span>
                  <span>dev.to</span>
                </a>
                <a href="#" className="flex items-center gap-2 text-[#607B96] hover:text-white">
                  <span>▶</span>
                  <span>Instagram</span>
                </a>
                <a href="#" className="flex items-center gap-2 text-[#607B96] hover:text-white">
                  <span>▶</span>
                  <span>Twitch</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main content area */}
        <div className="flex-1 flex flex-col">
          <div className="h-[45px] border-b border-[#1E2D3D] flex items-center px-4">
          </div>

          <div className="flex-1 flex">
            {/* Contact form */}
            <div className="flex-1 p-8 border-r border-[#1E2D3D]">
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

            {/* Code snippet */}
            <div className="flex-1 p-8 bg-[#011221] font-mono">
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

      {/* Footer */}
      <div className="h-[50px] border-t border-[#1E2D3D] flex items-center justify-between px-4">
        <div className="flex items-center gap-2 text-[#607B96]">
          <span>find me in:</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white">
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
        <a href="#" className="text-[#607B96] hover:text-white flex items-center gap-2">
          <span>@username</span>
          <FaGithub className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
