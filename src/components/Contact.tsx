import { Mail, Send, MapPin, Phone } from "lucide-react";
import { FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { useState } from "react";
import { motion } from "framer-motion";
import Title from "./Title";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ msg: string; ok: boolean } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);
    try {
      const res = await fetch("https://formspree.io/f/xpwpyljy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus({ msg: "Message envoyé avec succès. Merci !", ok: true });
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({ msg: "Erreur lors de l'envoi. Réessayez.", ok: false });
      }
    } catch {
      setStatus({ msg: "Erreur réseau. Réessayez plus tard.", ok: false });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="Contact" className="py-24 px-6 md:px-[8%]" style={{ background: "#080e1c" }}>
      <div className="max-w-7xl mx-auto">
        <Title title="Contact" subtitle="Une question, une opportunité ? Écrivez-moi." />

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left — Info */}
          <motion.div
            className="lg:w-80 flex flex-col gap-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="glass-card p-6">
              <h3 className="text-white font-bold text-base mb-5">Informations</h3>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                       style={{ background: "rgba(0,181,255,0.12)", border: "1px solid rgba(0,181,255,0.25)" }}>
                    <Mail className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs mb-0.5">Email</p>
                    <a href="mailto:boungoubryan@icloud.com"
                       className="text-white text-sm hover:text-accent transition-colors">
                      boungoubryan@icloud.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                       style={{ background: "rgba(0,181,255,0.12)", border: "1px solid rgba(0,181,255,0.25)" }}>
                    <MapPin className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs mb-0.5">Localisation</p>
                    <p className="text-white text-sm">91300 Massy, France</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                       style={{ background: "rgba(0,181,255,0.12)", border: "1px solid rgba(0,181,255,0.25)" }}>
                    <Phone className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs mb-0.5">Disponibilité</p>
                    <p className="text-white text-sm">Alternance · Stage</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="glass-card p-6">
              <h3 className="text-white font-bold text-base mb-4">Réseaux sociaux</h3>
              <div className="flex gap-3">
                <a href="https://www.linkedin.com/in/gloire-bryan-boungou-mbimi-b31b072b9"
                   target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="https://x.com/gloire_bryan"
                   target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="X">
                  <FaXTwitter />
                </a>
                <a href="https://www.instagram.com/gloire_bryan"
                   target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="glass-card p-8">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/50 text-xs font-medium mb-1.5 block">Nom complet</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Votre nom"
                      value={form.name}
                      onChange={handleChange}
                      className="input-modern"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-white/50 text-xs font-medium mb-1.5 block">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="votre@email.com"
                      value={form.email}
                      onChange={handleChange}
                      className="input-modern"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-white/50 text-xs font-medium mb-1.5 block">Sujet</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Objet de votre message"
                    value={form.subject}
                    onChange={handleChange}
                    className="input-modern"
                    required
                  />
                </div>

                <div>
                  <label className="text-white/50 text-xs font-medium mb-1.5 block">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Décrivez votre projet ou votre demande..."
                    value={form.message}
                    onChange={handleChange}
                    className="input-modern resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-gradient justify-center ${isSubmitting ? "opacity-60 cursor-not-allowed" : ""}`}
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                </button>

                {status && (
                  <p className={`text-sm text-center font-medium ${status.ok ? "text-emerald-400" : "text-red-400"}`}>
                    {status.msg}
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
