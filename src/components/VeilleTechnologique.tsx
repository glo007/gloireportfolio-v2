import Title from "./Title";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Rss, Search, BookOpen, Quote, TrendingUp, ShieldAlert, Bot, Eye } from "lucide-react";
import { FaLinkedin, FaYoutube, FaGithub } from "react-icons/fa6";
import { useState } from "react";

import imgOpenAI     from "../assets/techno/openai-old-logo.webp";
import imgGemini     from "../assets/techno/gemini-logo_brandlogos.net_fwajr-512x512.png";
import imgTensorFlow from "../assets/techno/Tensorflow_logo.svg.png";
import imgPytorch    from "../assets/techno/pytorch-logo.png";
import imgReact      from "../assets/techno/react.png";
import imgNext       from "../assets/techno/next-js.webp";
import imgTS         from "../assets/techno/typescript.svg";

/* ── Données ─────────────────────────────────────────── */

const pushSources = [
  { icon: <Rss className="w-4 h-4" />, tool: "Feedly", desc: "Flux RSS : Vercel Blog, OpenAI Blog, L'Usine Digitale" },
  { icon: <Search className="w-4 h-4" />, tool: "Google Alerts", desc: "Mots-clés : «GitHub Copilot security», «React 19», «LLM web dev»" },
  { icon: <BookOpen className="w-4 h-4" />, tool: "Newsletters", desc: "TLDR, React Status, Console.dev — reçues chaque semaine" },
];

const pullSources = [
  { icon: <FaLinkedin className="text-[#0a66c2]" />, tool: "LinkedIn", desc: "Suivi de Theo (t3.gg), Fireship, équipes Vercel & Anthropic" },
  { icon: <FaYoutube className="text-[#ff0000]" />, tool: "YouTube / Podcasts", desc: "Underscore_, Fireship, Syntax.fm, Bip Bip Infos" },
  { icon: <FaGithub />, tool: "GitHub Releases", desc: "Watch sur React, Next.js, LangChain — suivi des changelogs" },
];

const synthesis = [
  {
    icon: <Bot className="w-5 h-5 text-accent" />,
    title: "L'IA générative comme copilote du développeur",
    content:
      "GitHub Copilot, Cursor et Codeium ont transformé la façon d'écrire du code. Une étude GitHub (2023) montre que 88 % des développeurs utilisant Copilot déclarent être plus productifs. Ces outils génèrent des fonctions complètes, suggèrent des tests unitaires et expliquent le code existant. Mais ils introduisent aussi des vulnérabilités si l'on ne relit pas le code généré — environ 40 % du code Copilot contient des failles de sécurité selon une étude de Stanford.",
    color: "#00b5ff",
    date: "2023–2025",
  },
  {
    icon: <ShieldAlert className="w-5 h-5 text-purple-400" />,
    title: "IA générative et cybersécurité du code",
    content:
      "L'IA génère du code rapidement, mais sans vérification rigoureuse, elle reproduit des patterns vulnérables (injections SQL, XSS, mauvaise gestion des tokens). Des outils comme Snyk Code et SonarQube intègrent désormais l'IA pour détecter ces failles automatiquement. Dans mon projet Diploma Gate Guardian, j'ai appliqué ces principes : validation stricte des entrées, tokens JWT sécurisés, et revue systématique du code généré.",
    color: "#a855f7",
    date: "2024",
  },
  {
    icon: <Eye className="w-5 h-5 text-emerald-400" />,
    title: "Vision par ordinateur intégrée aux interfaces web",
    content:
      "TensorFlow.js et MediaPipe permettent désormais d'exécuter des modèles de vision directement dans le navigateur, sans serveur. Des applications comme Google Meet (flou d'arrière-plan), ou des sites e-commerce (try-on virtuel) utilisent cette technologie. Mon projet FaceTracking-Python m'a donné les bases de l'OpenCV et de la détection de points du visage — des compétences directement transposables au web avec MediaPipe.",
    color: "#10b981",
    date: "2024–2025",
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-amber-400" />,
    title: "Les LLMs transforment l'UX des applications web",
    content:
      "L'intégration d'API comme OpenAI, Anthropic ou Mistral dans les applications web crée une nouvelle catégorie d'interfaces conversationnelles. Next.js 14 avec le AI SDK de Vercel facilite le streaming de réponses LLM en temps réel. Mon application GloireBoungAI (React Native + OpenAI API) est un exemple concret : reconnaissance vocale → traitement LLM → synthèse vocale, un cycle complet d'IA interactive.",
    color: "#f59e0b",
    date: "2024–2025",
  },
];

const tools = [
  { name: "OpenAI",      image: imgOpenAI },
  { name: "Gemini",      image: imgGemini },
  { name: "TensorFlow",  image: imgTensorFlow },
  { name: "PyTorch",     image: imgPytorch },
  { name: "React",       image: imgReact },
  { name: "Next.js",     image: imgNext },
  { name: "TypeScript",  image: imgTS },
];

/* ── Composant ───────────────────────────────────────── */

const VeilleTechnologique = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="VeilleTechnologique" className="section-alt py-24 px-6 md:px-[8%]">
      <div className="max-w-7xl mx-auto">
        <Title
          title="Veille Technologique"
          subtitle="BTS SIO SLAM — Mise à jour continue sur les évolutions du secteur."
        />

        {/* ── Problématique ── */}
        <motion.div
          className="relative rounded-2xl overflow-hidden mb-14 p-8 md:p-10"
          style={{ background: "linear-gradient(135deg, rgba(0,181,255,0.08) 0%, rgba(124,58,237,0.10) 100%)", border: "1px solid rgba(0,181,255,0.2)" }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 pointer-events-none"
               style={{ background: "radial-gradient(circle, #00b5ff, transparent)", transform: "translate(30%,-30%)" }} />
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">Sujet & Problématique</p>
          <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-snug mb-4">
            L'IA générative appliquée au développement web :<br />
            <span className="gradient-text">sécurité, assistance au code et interfaces intelligentes</span>
          </h3>
          <p className="text-white/55 text-base leading-relaxed max-w-3xl">
            Comment l'intelligence artificielle générative transforme-t-elle les pratiques de développement web en 2024–2025,
            et quels sont ses impacts sur la qualité, la sécurité du code et l'expérience utilisateur ?
            Ce sujet fait directement écho à mes projets chez <span className="text-accent font-semibold">42Consulting</span> (authentification sécurisée),
            à mon application <span className="text-accent font-semibold">GloireBoungAI</span> (OpenAI API) et à mon projet <span className="text-accent font-semibold">FaceTracking</span> (vision par ordinateur).
          </p>
        </motion.div>

        {/* ── Méthode Push / Pull ── */}
        <div className="mb-14">
          <motion.p
            className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Méthode de veille — Push &amp; Pull
          </motion.p>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Push */}
            <motion.div
              className="glass-card p-6"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-5">
                <div className="w-7 h-7 rounded-md flex items-center justify-center"
                     style={{ background: "rgba(0,181,255,0.15)", border: "1px solid rgba(0,181,255,0.3)" }}>
                  <Rss className="w-3.5 h-3.5 text-accent" />
                </div>
                <h4 className="font-bold text-white text-sm">Flux Push — l'info vient à moi</h4>
              </div>
              <div className="flex flex-col gap-4">
                {pushSources.map((s, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                         style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                      <span className="text-accent">{s.icon}</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{s.tool}</p>
                      <p className="text-white/45 text-xs leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Pull */}
            <motion.div
              className="glass-card p-6"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-5">
                <div className="w-7 h-7 rounded-md flex items-center justify-center"
                     style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)" }}>
                  <Search className="w-3.5 h-3.5 text-purple-400" />
                </div>
                <h4 className="font-bold text-white text-sm">Flux Pull — je vais chercher l'info</h4>
              </div>
              <div className="flex flex-col gap-4">
                {pullSources.map((s, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 text-lg"
                         style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                      {s.icon}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{s.tool}</p>
                      <p className="text-white/45 text-xs leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Synthèse (Accordéon) ── */}
        <div className="mb-14">
          <motion.p
            className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Synthèse des grandes évolutions (2023–2025)
          </motion.p>
          <div className="flex flex-col gap-3">
            {synthesis.map((item, i) => (
              <motion.div
                key={i}
                className={`veille-item ${openIndex === i ? "open" : ""}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <button className="veille-header w-full text-left" onClick={() => toggle(i)}>
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                         style={{ background: `${item.color}18`, border: `1px solid ${item.color}35` }}>
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm text-white/85 truncate pr-2">{item.title}</p>
                      <p className="text-xs mt-0.5" style={{ color: item.color }}>{item.date}</p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex-shrink-0 ml-2"
                  >
                    <ChevronDown className="w-4 h-4 text-white/40" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      key="body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 pt-1 text-sm text-white/55 leading-relaxed border-t border-white/5">
                        {item.content}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Analyse personnelle + Outils ── */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Analyse — 2/3 */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
              Mon analyse personnelle
            </p>
            <div className="glass-card p-7 relative overflow-hidden">
              <Quote className="absolute top-4 right-5 w-12 h-12 text-accent/10" />
              <p className="text-white/70 text-sm leading-relaxed mb-5">
                Cette veille m'a permis de comprendre que l'IA n'est pas un remplacement du développeur,
                mais un <span className="text-white font-semibold">multiplicateur de compétences</span>.
                Chez 42Consulting, j'ai utilisé GitHub Copilot pour accélérer l'écriture des endpoints Node.js,
                tout en appliquant une revue systématique pour éviter les failles de sécurité dans
                l'authentification des documents.
              </p>
              <p className="text-white/70 text-sm leading-relaxed mb-5">
                Mon projet <span className="text-accent font-semibold">FaceTracking-Python</span> m'a ouvert les yeux
                sur le potentiel de la vision par ordinateur. Aujourd'hui, des librairies comme <span className="text-white font-semibold">MediaPipe</span> permettent
                d'embarquer ces capacités directement dans le navigateur avec TensorFlow.js — une évolution
                que je compte explorer dans mes prochains projets web.
              </p>
              <p className="text-white/70 text-sm leading-relaxed">
                La question que je me pose désormais : <span className="text-white font-semibold italic">
                "Comment cette technologie va-t-elle changer ma façon de coder demain ?"
                </span> — L'IA générative va exiger des développeurs SLAM une double compétence :
                maîtriser les outils IA ET comprendre leurs limites en matière de sécurité.
              </p>

              <div className="mt-6 pt-5 border-t border-white/6 flex flex-wrap gap-2">
                {["GitHub Copilot", "OpenAI API", "TensorFlow.js", "MediaPipe", "LangChain", "Vercel AI SDK"].map((tag) => (
                  <span key={tag} className="tech-badge">{tag}</span>
                ))}
              </div>
            </div>

            {/* Perspectives */}
            <div className="mt-6 glass-card p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Perspectives d'avenir</p>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { title: "Agents autonomes", desc: "Des LLMs capables d'exécuter des tâches complexes sans intervention humaine (LangGraph, AutoGen)." },
                  { title: "IA embarquée (Edge)", desc: "Des modèles IA légers directement dans le navigateur ou sur appareil mobile, sans cloud." },
                  { title: "Réglementation IA", desc: "L'AI Act européen impose transparence et audit des systèmes IA — opportunité pour la sécurité SLAM." },
                ].map((p, i) => (
                  <div key={i} className="rounded-xl p-4"
                       style={{ background: "rgba(0,181,255,0.04)", border: "1px solid rgba(0,181,255,0.1)" }}>
                    <p className="text-white font-semibold text-sm mb-1">{p.title}</p>
                    <p className="text-white/45 text-xs leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Outils — 1/3 */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
              Technologies suivies
            </p>
            <div className="grid grid-cols-3 lg:grid-cols-2 gap-3">
              {tools.map((tool, i) => (
                <motion.div
                  key={i}
                  className="skill-chip"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <img src={tool.image} alt={tool.name} className="w-9 h-9 object-contain rounded-lg" />
                  <span className="text-xs text-white/50 text-center">{tool.name}</span>
                </motion.div>
              ))}
            </div>

            {/* Organisation */}
            <div className="mt-6 glass-card p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Organisation</p>
              <div className="flex flex-col gap-3">
                {[
                  { tool: "Notion", use: "Tableau Date / Source / Résumé / Avis" },
                  { tool: "Pocket", use: "Sauvegarde articles à lire" },
                  { tool: "GitHub Stars", use: "Suivi des repos clés" },
                ].map((o, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-white font-semibold text-xs">{o.tool}</span>
                    <span className="text-white/40 text-xs">{o.use}</span>
                    {i < 2 && <div className="mt-3 h-px bg-white/5" />}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VeilleTechnologique;
