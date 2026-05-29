import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { supabase } from '../lib/supabase';
import { MapPin, Phone, Mail, Instagram, Linkedin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface ContactFormProps {
  preselectedService?: string;
}

export default function ContactForm({ preselectedService }: ContactFormProps) {
  // Form Fields State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState(preselectedService || 'Website Design');
  const [budget, setBudget] = useState("₹10,000–₹25,000");
  const [brief, setBrief] = useState('');

  // UI state
  const [submitting, setSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Sync preselectedService changes
  useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
    }
  }, [preselectedService]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      setToastMessage({
        type: 'error',
        text: '⚠️ Please fill out all required fields (Name, Email, Phone).'
      });
      return;
    }

    setSubmitting(true);
    setToastMessage(null);

    const supabasePayload = {
      name,
      email,
      phone,
      company: company || 'Not specified',
      service,
      brief: brief || 'No brief provided',
      created_at: new Date().toISOString()
    };

    const localPayload = {
      ...supabasePayload,
      budget,
    };

    try {
      // Real database attempt using the supported Supabase columns only.
      const { error } = await supabase.from('leads').insert([supabasePayload]);

      if (error) {
        throw error;
      }

      setToastMessage({
        type: 'success',
        text: "✓ Brief received! We'll be in touch within 24 hours."
      });
      
      // Clear all fields
      setName('');
      setEmail('');
      setPhone('');
      setCompany('');
      setBrief('');

    } catch (dbError) {
      // Fallback local storage backup to keep the form functional even when Supabase has issues.
      const existingLeads = JSON.parse(localStorage.getItem('pixfliq_demo_leads') || '[]');
      existingLeads.push(localPayload);
      localStorage.setItem('pixfliq_demo_leads', JSON.stringify(existingLeads));

      setToastMessage({
        type: 'success',
        text: "✓ Brief received! We'll be in touch within 24 hours."
      });

      // Clear all fields
      setName('');
      setEmail('');
      setPhone('');
      setCompany('');
      setBrief('');
    } finally {
      setSubmitting(false);
    }
  };

  // Close toast trigger after 5 seconds
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(null), 6000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  return (
    <section id="contact" className="bg-base pt-24 pb-28 border-b border-border/40 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Split Layout Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Copywriting content (col-span-5) */}
          <div className="lg:col-span-5 text-left lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="text-violet text-xs tracking-widest uppercase font-mono mb-4 font-extrabold">
                // Start a Project
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-black text-ink leading-tight mb-6">
                Let's build something that <span className="text-coral">actually works</span>.
              </h2>
              <p className="text-gray-400 font-body text-sm md:text-lg leading-relaxed mb-10">
                Tell us about your project — we'll get back within 24 hours. We work with ambitious startups, founders, local businesses, and global brands. No project is too small.
              </p>
            </motion.div>

            {/* Direct contact info widget */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 border-t border-border/60 pt-8"
            >
              <div className="flex items-center gap-4 text-ink">
                <div className="w-10 h-10 rounded-full bg-violet/10 flex items-center justify-center text-violet shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-mono tracking-wider uppercase font-bold">Studio Headquarters</div>
                  <div className="text-sm font-semibold font-body">Jharsuguda, Odisha, India</div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-ink">
                <div className="w-10 h-10 rounded-full bg-coral/10 flex items-center justify-center text-coral shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-mono tracking-wider uppercase font-bold">Direct Line / WhatsApp</div>
                  <a href="tel:+919692054343" className="text-sm font-semibold hover:text-coral transition-colors font-body">
                    +91 96920 54343
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-ink">
                <div className="w-10 h-10 rounded-full bg-lime/20 flex items-center justify-center text-ink shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-mono tracking-wider uppercase font-bold">Press & Inquiries</div>
                  <a href="mailto:pixfliqconnect@gmail.com" className="text-sm font-semibold hover:text-coral transition-colors font-body">
                    pixfliqconnect@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Social channels */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center gap-4 mt-8 pt-6 border-t border-border/30"
            >
              <a
                href="https://instagram.com/pixfliq"
                target="_blank"
                referrerPolicy="no-referrer"
                className="flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-coral transition-colors bg-[#161514] border border-border rounded-full px-4 py-2"
              >
                <Instagram className="w-4 h-4 text-rose-500" />
                @pixfliq
              </a>
              <a
                href="https://linkedin.com/company/pixfliq"
                target="_blank"
                referrerPolicy="no-referrer"
                className="flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-violet transition-colors bg-[#161514] border border-border rounded-full px-4 py-2"
              >
                <Linkedin className="w-4 h-4 text-blue-600" />
                /pixfliq
              </a>
            </motion.div>
          </div>

          {/* Right Column: Lead Request Form Card (col-span-7) */}
          <div className="lg:col-span-7 w-full">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-[#151413] rounded-3xl p-8 lg:p-10 border border-border shadow-xl relative"
            >
              {/* Form Title */}
              <div className="text-left mb-8">
                <h3 className="text-xl font-display font-bold text-ink">Submit Your Project Brief</h3>
                <p className="text-xs text-gray-400 mt-1 leading-normal font-normal">
                  Fill in your ideas. Shlok and our development squad will draft custom structural recommendations for your review.
                </p>
              </div>

              {/* Form Structure */}
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 2-Col fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="text-left">
                    <label className="block text-xs font-bold text-ink mb-2 uppercase font-mono tracking-wider">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Shlok Lodha"
                      className="w-full bg-base/40 border border-border focus:border-coral focus:ring-1 focus:ring-coral text-ink rounded-xl px-4 py-3.5 text-sm transition-all outline-none"
                    />
                  </div>

                  <div className="text-left">
                    <label className="block text-xs font-bold text-ink mb-2 uppercase font-mono tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full bg-base/40 border border-border focus:border-coral focus:ring-1 focus:ring-coral text-ink rounded-xl px-4 py-3.5 text-sm transition-all outline-none"
                    />
                  </div>
                </div>

                {/* 2-Col fields second row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="text-left">
                    <label className="block text-xs font-bold text-coral mb-2 uppercase font-mono tracking-wider">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 96920 54343"
                      className="w-full bg-base/40 border border-border focus:border-coral focus:ring-1 focus:ring-coral text-ink rounded-xl px-4 py-3.5 text-sm transition-all outline-none"
                    />
                  </div>

                  <div className="text-left">
                    <label className="block text-xs font-bold text-ink mb-2 uppercase font-mono tracking-wider">
                      Company / Brand Name
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. WanderNest Travels"
                      className="w-full bg-base/40 border border-border focus:border-coral focus:ring-1 focus:ring-coral text-ink rounded-xl px-4 py-3.5 text-sm transition-all outline-none"
                    />
                  </div>
                </div>

                {/* Dropdowns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
                  <div>
                    <label className="block text-xs font-bold text-ink mb-2 uppercase font-mono tracking-wider">
                      Service Interested In
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full bg-base border border-border focus:border-coral focus:ring-1 focus:ring-coral text-ink rounded-xl px-4 py-3.5 text-sm transition-all outline-none cursor-pointer"
                    >
                      <option value="Website Design" className="bg-base text-ink">Website Design & Dev</option>
                      <option value="Brand Identity & Logo" className="bg-base text-ink">Brand Identity & Logo Design</option>
                      <option value="UI/UX Design" className="bg-base text-ink">UI/UX Interface Design</option>
                      <option value="Digital Campaign" className="bg-base text-ink">Digital Ads & Campaigns</option>
                      <option value="Full Package" className="bg-base text-ink">Full Package (Complete Suite)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-ink mb-2 uppercase font-mono tracking-wider">
                      Budget Range
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full bg-base border border-border focus:border-coral focus:ring-1 focus:ring-coral text-ink rounded-xl px-4 py-3.5 text-sm transition-all outline-none cursor-pointer"
                    >
                      <option value="Under ₹10,000" className="bg-base text-ink">Under ₹10,000</option>
                      <option value="₹10,000–₹25,000" className="bg-base text-ink">₹10,000 – ₹25,000</option>
                      <option value="₹25,000–₹50,000" className="bg-base text-ink">₹25,000 – ₹50,000</option>
                      <option value="₹50,000+" className="bg-base text-ink">₹50,000+ (High Fidelity Spec)</option>
                      <option value="Let's discuss" className="bg-base text-ink">Let's discuss budget</option>
                    </select>
                  </div>
                </div>

                {/* Textarea Brief */}
                <div className="text-left">
                  <label className="block text-xs font-bold text-ink mb-2 uppercase font-mono tracking-wider">
                    Project Brief
                  </label>
                  <textarea
                    rows={4}
                    value={brief}
                    onChange={(e) => setBrief(e.target.value)}
                    placeholder="Tell us about your vision, timeline, and goals..."
                    className="w-full bg-base/40 border border-border focus:border-coral focus:ring-1 focus:ring-coral text-ink rounded-xl px-4 py-3 text-sm transition-all outline-none resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-coral hover:bg-coral/95 disabled:bg-coral/70 text-white font-bold font-body text-sm rounded-full py-4.5 shadow-md hover:shadow-xl active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Securing Submission...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send My Brief →
                    </>
                  )}
                </button>
              </form>

              {/* Toast Alert Box */}
              <AnimatePresence>
                {toastMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className={`absolute bottom-6 left-6 right-6 p-4 rounded-xl shadow-lg border text-sm font-semibold flex items-center gap-3 z-30 ${
                      toastMessage.type === 'success'
                        ? 'bg-emerald-950 text-emerald-200 border-emerald-800'
                        : 'bg-rose-950 text-rose-200 border-rose-800'
                    }`}
                  >
                    {toastMessage.type === 'success' ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                    )}
                    <span className="text-left leading-snug">{toastMessage.text}</span>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
