import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      content: 'connectmaheenk@gmail.com',
      link: 'mailto:connectmaheenk@gmail.com',
    },
    {
      icon: FaPhone,
      title: 'Phone',
      content: '+91 7899275871',
      link: 'tel:+917899275871',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      content: 'Bengaluru, Karnataka',
      link: 'https://maps.google.com/?q=Bengaluru,Karnataka',
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="section-header">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Get in Touch</h2>
          <p className="text-muted text-lg">Let's discuss your next project</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            {contactInfo.map((info) => (
              <a
                key={info.title}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="glass-effect p-6 rounded-2xl hover:border-primary transition-all duration-300 hover:shadow-glow">
                  <div className="flex items-center">
                    <div className="p-4 rounded-xl bg-primary-light text-primary mr-6 cyber-glow">
                      <info.icon className="text-2xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1 text-gradient">{info.title}</h3>
                      <p className="text-muted">{info.content}</p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div>
            <form onSubmit={handleSubmit} className="glass-effect p-8 rounded-2xl">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gradient">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg glass-effect border ${
                      errors.name ? 'border-red-500' : 'border-primary/20'
                    } focus:outline-none focus:border-primary focus:shadow-glow text-white placeholder:text-gray-400`}
                    required
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gradient">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg glass-effect border ${
                      errors.email ? 'border-red-500' : 'border-primary/20'
                    } focus:outline-none focus:border-primary focus:shadow-glow text-white placeholder:text-gray-400`}
                    required
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gradient">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg glass-effect border ${
                      errors.subject ? 'border-red-500' : 'border-primary/20'
                    } focus:outline-none focus:border-primary focus:shadow-glow text-white placeholder:text-gray-400`}
                    required
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gradient">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-4 py-2 rounded-lg glass-effect border ${
                      errors.message ? 'border-red-500' : 'border-primary/20'
                    } focus:outline-none focus:border-primary focus:shadow-glow text-white placeholder:text-gray-400`}
                    required
                    maxLength={500}
                  />
                  <div className="flex justify-between items-center mt-1">
                    {errors.message && (
                      <p className="text-red-500 text-sm">{errors.message}</p>
                    )}
                    <p className="text-sm text-muted text-right">
                      {formData.message.length}/500
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-dark transition-all duration-300 disabled:opacity-50 cyber-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>

              {submitStatus && (
                <div
                  className={`mt-4 p-4 rounded-lg glass-effect ${
                    submitStatus === 'success' ? 'border-green-500' : 'border-red-500'
                  } border text-white`}
                >
                  {submitStatus === 'success'
                    ? 'Message sent successfully!'
                    : 'Failed to send message. Please try again.'}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 