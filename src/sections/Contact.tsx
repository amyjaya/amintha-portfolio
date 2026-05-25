import React, { useState } from 'react';

import { motion } from 'framer-motion';

import {
  Mail,
  Phone,
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

import { SectionHeader } from '../components/SectionHeader';
import { Button } from '../components/Button';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '../components/Card';

import { SocialLinks } from '../components/SocialLinks';

import { profile } from '../content/profile';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function Contact() {

  const [formData, setFormData] =
    useState<FormData>({
      name: '',
      email: '',
      message: ''
    });

  const [errors, setErrors] =
    useState<FormErrors>({});

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [submitStatus, setSubmitStatus] =
    useState<'success' | 'error' | null>(
      null
    );

  const validateForm = () => {

    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (
      !/\S+@\S+\.\S+/.test(formData.email)
    ) {
      newErrors.email = 'Invalid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {

      const subject =
        `Message from ${formData.name}`;

      const body =
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;

      const mailtoUrl =
        `mailto:${profile.links.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      window.location.href = mailtoUrl;

      setSubmitStatus('success');

      setFormData({
        name: '',
        email: '',
        message: ''
      });

    } catch {

      setSubmitStatus('error');

    } finally {

      setIsSubmitting(false);

    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {

    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (
      errors[name as keyof FormErrors]
    ) {

      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  return (
    <section
      id="contact"
      className="
        relative
        py-32
        overflow-hidden

        bg-gradient-to-b
        from-white
        to-slate-50

        dark:from-[#0B0F19]
        dark:to-[#111827]
      "
    >

      {/* Background Glow */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2

          w-[700px]
          h-[700px]

          bg-violet-500/10
          blur-[140px]
          rounded-full

          pointer-events-none
        "
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <SectionHeader
          title="Get In Touch"
          subtitle="Open to internships, collaborations and exciting opportunities"
        />

        <div
          className="
            grid
            lg:grid-cols-2
            gap-16
            items-start
          "
        >

          {/* LEFT SIDE */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-10"
          >

            <div className="space-y-6">

              <h3
                className="
                  text-4xl
                  font-bold
                  tracking-tight

                  text-slate-900
                  dark:text-white
                "
              >
                Let’s Build Something Amazing
              </h3>

              <p
                className="
                  text-lg
                  leading-relaxed

                  text-slate-600
                  dark:text-slate-300
                "
              >
                I’m always interested in
                innovative projects,
                internships and meaningful
                collaborations.
              </p>

            </div>

            {/* Contact Cards */}
            <div className="space-y-5">

              {/* Email */}
              <div
                className="
                  flex
                  items-center
                  gap-5

                  p-6
                  rounded-3xl

                  border
                  border-slate-200/70
                  dark:border-white/10

                  bg-white/70
                  dark:bg-white/[0.03]

                  backdrop-blur-2xl

                  shadow-[0_10px_40px_rgba(15,23,42,0.06)]
                "
              >

                <div
                  className="
                    w-14
                    h-14

                    rounded-2xl

                    bg-gradient-to-br
                    from-violet-500
                    to-indigo-500

                    flex
                    items-center
                    justify-center

                    shadow-[0_10px_30px_rgba(124,58,237,0.25)]
                  "
                >

                  <Mail className="w-6 h-6 text-white" />

                </div>

                <div>

                  <p
                    className="
                      text-sm
                      font-medium
                      text-slate-500
                      dark:text-slate-400
                    "
                  >
                    Email
                  </p>

                  <a
                    href={`mailto:${profile.links.email}`}
                    className="
                      text-lg
                      font-semibold

                      text-slate-900
                      dark:text-white

                      hover:text-violet-600
                      dark:hover:text-violet-400

                      transition-colors
                    "
                  >
                    {profile.links.email}
                  </a>

                </div>

              </div>

              {/* Phone */}
              <div
                className="
                  flex
                  items-center
                  gap-5

                  p-6
                  rounded-3xl

                  border
                  border-slate-200/70
                  dark:border-white/10

                  bg-white/70
                  dark:bg-white/[0.03]

                  backdrop-blur-2xl

                  shadow-[0_10px_40px_rgba(15,23,42,0.06)]
                "
              >

                <div
                  className="
                    w-14
                    h-14

                    rounded-2xl

                    bg-gradient-to-br
                    from-violet-500
                    to-indigo-500

                    flex
                    items-center
                    justify-center

                    shadow-[0_10px_30px_rgba(124,58,237,0.25)]
                  "
                >

                  <Phone className="w-6 h-6 text-white" />

                </div>

                <div>

                  <p
                    className="
                      text-sm
                      font-medium
                      text-slate-500
                      dark:text-slate-400
                    "
                  >
                    Phone
                  </p>

                  <a
                    href={`tel:${profile.links.phone}`}
                    className="
                      text-lg
                      font-semibold

                      text-slate-900
                      dark:text-white

                      hover:text-violet-600
                      dark:hover:text-violet-400

                      transition-colors
                    "
                  >
                    {profile.links.phone}
                  </a>

                </div>

              </div>

            </div>

            {/* Social */}
            <div className="pt-4">

              <h4
                className="
                  text-lg
                  font-semibold
                  mb-4

                  text-slate-900
                  dark:text-white
                "
              >
                Find me online
              </h4>

              <SocialLinks />

            </div>

          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.15
            }}
          >

            <Card
              className="
                border
                border-slate-200/70
                dark:border-white/10

                bg-white/70
                dark:bg-white/[0.03]

                backdrop-blur-2xl

                shadow-[0_20px_60px_rgba(15,23,42,0.08)]
              "
            >

              <CardHeader>

                <CardTitle
                  className="
                    text-3xl
                    font-bold

                    text-slate-900
                    dark:text-white
                  "
                >
                  Send a Message
                </CardTitle>

              </CardHeader>

              <CardContent>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >

                  {/* Inputs */}
                  {[
                    {
                      id: 'name',
                      type: 'text',
                      placeholder: 'Your name'
                    },
                    {
                      id: 'email',
                      type: 'email',
                      placeholder:
                        'your@email.com'
                    }
                  ].map(field => (

                    <div key={field.id}>

                      <input
                        type={field.type}
                        id={field.id}
                        name={field.id}
                        value={
                          formData[
                            field.id as keyof FormData
                          ] as string
                        }
                        onChange={handleInputChange}
                        placeholder={
                          field.placeholder
                        }
                        className="
                          w-full
                          px-5
                          py-4

                          rounded-2xl

                          border
                          border-slate-200
                          dark:border-white/10

                          bg-white/70
                          dark:bg-white/[0.03]

                          text-slate-900
                          dark:text-white

                          placeholder:text-slate-400

                          backdrop-blur-xl

                          focus:outline-none
                          focus:ring-2
                          focus:ring-violet-500

                          transition-all
                        "
                      />

                    </div>
                  ))}

                  {/* Textarea */}
                  <div>

                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project..."
                      className="
                        w-full
                        px-5
                        py-4

                        rounded-2xl

                        border
                        border-slate-200
                        dark:border-white/10

                        bg-white/70
                        dark:bg-white/[0.03]

                        text-slate-900
                        dark:text-white

                        placeholder:text-slate-400

                        backdrop-blur-xl

                        resize-none

                        focus:outline-none
                        focus:ring-2
                        focus:ring-violet-500

                        transition-all
                      "
                    />

                  </div>

                  {/* Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="
                      w-full
                      h-14
                    "
                  >

                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}

                  </Button>

                  {/* Success */}
                  {submitStatus === 'success' && (

                    <div
                      className="
                        flex
                        items-center
                        gap-2

                        text-green-500
                      "
                    >

                      <CheckCircle className="w-5 h-5" />

                      <span>
                        Message sent successfully!
                      </span>

                    </div>
                  )}

                  {/* Error */}
                  {submitStatus === 'error' && (

                    <div
                      className="
                        flex
                        items-center
                        gap-2

                        text-red-500
                      "
                    >

                      <AlertCircle className="w-5 h-5" />

                      <span>
                        Something went wrong.
                      </span>

                    </div>
                  )}

                </form>

              </CardContent>

            </Card>

          </motion.div>

        </div>
      </div>
    </section>
  );
}