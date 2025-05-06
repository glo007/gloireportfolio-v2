import { Mail, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Envoi du formulaire via Formspree
      const response = await fetch("https://formspree.io/f/xpwpyljy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatusMessage("Votre message a bien été envoyé. Merci !");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatusMessage("Erreur lors de l'envoi. Essayez à nouveau.");
      }
    } catch (error) {
      setStatusMessage("Erreur réseau. Essayez plus tard.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="Contact" className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl">
        <h2 className="text-3xl font-bold text-center text-accent mb-6">Contactez-moi</h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            value={form.name}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={form.email}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Sujet"
            value={form.subject}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
          <textarea
            name="message"
            rows={4}
            placeholder="Votre message"
            value={form.message}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
            required
          />
          <button 
            type="submit" 
            className={`btn btn-accent flex items-center justify-center w-full ${isSubmitting ? 'cursor-not-allowed opacity-50' : ''}`} 
            disabled={isSubmitting}
          >
            <Send className="w-5 h-5 mr-2" /> {isSubmitting ? 'Envoi...' : 'Envoyer'}
          </button>
        </form>

        {statusMessage && (
          <div className={`mt-4 text-center ${statusMessage.includes("Erreur") ? 'text-red-500' : 'text-green-500'}`}>
            <p>{statusMessage}</p>
          </div>
        )}

        <div className="text-center mt-4">
          <p className="text-gray-600">Ou envoyez-moi un email directement :</p>
          <a href="mailto:boungoubryan@icloud.com" className="text-accent font-semibold flex items-center justify-center">
            <Mail className="w-5 h-5 mr-2" /> boungoubryan@icloud.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
