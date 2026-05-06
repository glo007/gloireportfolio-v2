# 📋 COMPTE-RENDU — ÉPREUVE E5 BTS SIO
### Gloire Bryan BOUNGOU MBIMI

---

## 🗂️ VUE D'ENSEMBLE

9 projets répartis en 2 domaines :

| Domaine | Projets | Nb |
|---|---|---|
| **SLAM** (Développement) | Diploma Gate Guardian, JS Projects, FaceTracking, ToDoList, Bataille Aérienne, Morpion | 6 |
| **SISR** (Réseau/Infra) | Analyse Trafic Réseau, Services DHCP/DNS, Maquettage Infra | 3 |

---

## 📁 FICHE PAR PROJET

---

### 1. 🔵 Diploma Gate Guardian
**Contexte :** Alternance chez 42Consulting  
**Type :** Application Web Fullstack  
**Stack :** React · Node.js · Express · MongoDB · JWT

**Ce qui a été réalisé :**
- Plateforme de vérification d'authenticité des diplômes
- Un établissement génère un code unique par diplôme
- Un vérificateur saisit le code → le système retourne les infos du diplômé + statut de validité
- Base de données MongoDB + API sécurisée avec JWT

**À dire en présentation :**
> *"Ce projet répond à une vraie problématique métier : comment éviter les faux diplômes ? J'ai conçu l'architecture de A à Z, du backend avec authentification JWT jusqu'au front React. C'est le projet le plus représentatif de mon alternance."*

---

### 2. 🟡 JavaScript Projects
**Contexte :** Scolaire / autonomie  
**Type :** Collection de 6 mini-apps web  
**Stack :** HTML5 · CSS3 · JavaScript ES6+ · Fetch API

**Ce qui a été réalisé :**
- Calculatrice, quiz dynamique, gestionnaire de tâches, horloge analogique, convertisseur de devises
- Manipulation du DOM, événements, API Fetch, LocalStorage, animations CSS

**À dire en présentation :**
> *"Ces projets m'ont permis de consolider les bases du JavaScript pur, sans framework. Chaque app cible une compétence précise : manipulation du DOM, appels API asynchrones, persistance locale."*

---

### 3. 🟢 FaceTracking Python
**Contexte :** Personnel / exploration IA  
**Type :** Vision par ordinateur temps réel  
**Stack :** Python 3 · OpenCV · NumPy · Haar Cascade

**Ce qui a été réalisé :**
- Détection et suivi de visage en temps réel depuis la webcam
- Identification des points clés (yeux, bouche, nez) via Haar Cascade Classifiers
- Flux vidéo traité avec OpenCV

**À dire en présentation :**
> *"Ce projet m'a introduit à la Computer Vision. J'ai utilisé des classifiers pré-entraînés de Haar pour détecter les traits du visage en temps réel. C'est une porte d'entrée vers l'IA appliquée."*

---

### 4. 🟣 Gloire ToDoList
**Contexte :** Personnel  
**Type :** Application mobile iOS  
**Stack :** React Native · Expo · AsyncStorage · Xcode

**Ce qui a été réalisé :**
- App mobile de gestion de tâches en React Native
- Ajout / suppression / édition / marquage de tâches
- Filtrage par statut, persistance avec AsyncStorage
- Testée sur simulateur iOS (Xcode)

**À dire en présentation :**
> *"J'ai appliqué mes connaissances React au mobile avec React Native. Le défi était la persistance locale avec AsyncStorage et la gestion d'état entre les composants. J'ai testé sur simulateur iOS."*

---

### 5. 🔷 Bataille Aérienne
**Contexte :** Scolaire  
**Type :** Jeu vidéo 2D  
**Stack :** Python 3 · Tkinter · POO · Canvas

**Ce qui a été réalisé :**
- Jeu inspiré de Space Invaders, entièrement en Python
- Moteur de collision, système de score, animations
- Niveaux de difficulté progressifs
- Interface graphique avec Canvas Tkinter

**À dire en présentation :**
> *"Ce projet m'a appris les fondamentaux de la programmation orientée objet : héritage, encapsulation, événements. Le moteur de collision et la boucle de jeu sont gérés entièrement via Canvas Tkinter."*

---

### 6. 🔴 Jeu du Morpion (Tic-Tac-Toe)
**Contexte :** Scolaire  
**Type :** Jeu avec IA  
**Stack :** Python 3 · Tkinter · Minimax · POO

**Ce qui a été réalisé :**
- Mode 2 joueurs ET mode contre l'IA
- IA basée sur l'algorithme **Minimax** (imbattable en mode difficile)
- Détection du gagnant, matchs nuls, historique des scores

**À dire en présentation :**
> *"Le point fort de ce projet est l'implémentation de l'algorithme Minimax. Il explore toutes les combinaisons possibles pour garantir le meilleur coup. L'IA est théoriquement imbattable — c'est ma première implémentation d'un algorithme d'IA décisionnelle."*

---

### 7. 🟩 Analyse de Trafic Réseau *(SISR)*
**Contexte :** SISR / infrastructure  
**Type :** Diagnostic réseau  
**Stack :** Wireshark · Protocoles TCP/IP · Sécurité Réseau

**Ce qui a été réalisé :**
- Capture et analyse de trames réseau avec Wireshark
- Étude des protocoles HTTP, DNS, TCP
- Identification d'anomalies de sécurité
- Diagnostic de problèmes de connectivité

**À dire en présentation :**
> *"Wireshark m'a permis de comprendre concrètement ce qui circule sur le réseau. J'ai analysé des échanges DNS, des handshakes TCP, et identifié des paquets suspects. C'est essentiel pour diagnostiquer des pannes ou détecter des intrusions."*

---

### 8. 🟡 Services Réseau Windows/Linux *(SISR)*
**Contexte :** Infrastructure multi-OS  
**Type :** Administration réseau  
**Stack :** Windows Server · Linux · DHCP · DNS

**Ce qui a été réalisé :**
- Installation et configuration de serveurs DHCP (adressage automatique)
- Mise en place DNS (résolution de noms)
- Environnement mixte Windows Server + Linux
- Optimisation de la gestion du parc informatique

**À dire en présentation :**
> *"J'ai déployé les deux services fondamentaux d'un réseau d'entreprise : le DHCP pour l'attribution automatique des adresses IP et le DNS pour la résolution des noms. Le défi était d'assurer la compatibilité entre les clients Windows et Linux."*

---

### 9. 🔵 Maquettage d'infrastructure *(SISR)*
**Contexte :** Infrastructure réseau entreprise  
**Type :** Simulation / architecture réseau  
**Stack :** Cisco Packet Tracer · Routage · Adressage IP

**Ce qui a été réalisé :**
- Simulation complète d'un réseau d'entreprise avec Cisco Packet Tracer
- Conception de l'architecture logique ET physique
- Routage inter-VLAN, adressage IP, topologie LAN

**À dire en présentation :**
> *"Packet Tracer m'a permis de concevoir une infrastructure réseau d'entreprise sans matériel physique. J'ai défini le plan d'adressage, configuré les routeurs et les switchs, et simulé les flux pour valider l'architecture avant tout déploiement réel."*

---

## 🎤 STRUCTURE DE LA PRÉSENTATION ORALE

### ⏱️ Timing conseillé (20-25 min)

| Phase | Durée | Contenu |
|---|---|---|
| **Introduction** | 2 min | Présentation, parcours BTS SIO SLAM, alternance |
| **Tableau de synthèse** | 1 min | Vue d'ensemble des 9 projets |
| **Projets SLAM** | 10 min | Insister sur Diploma Gate Guardian + 2-3 autres |
| **Projets SISR** | 5 min | Les 3 projets réseau |
| **Fil rouge** | 3 min | Apprentissages, progression, compétences acquises |
| **Questions** | 5 min | Réponses aux questions du jury |

---

## 💡 CONSEILS CLÉS

### 🚀 Accroche d'introduction
> *"J'ai réalisé 9 projets au cours de mon BTS SIO, allant du développement web fullstack à l'administration réseau, en passant par l'intelligence artificielle et le développement mobile. Mon projet phare est Diploma Gate Guardian, développé en situation réelle pendant mon alternance chez 42Consulting."*

### 🔗 Relier les projets aux compétences BTS SIO

| Bloc | Compétence | Projets associés |
|---|---|---|
| B1 | Support et assistance | Services Réseau, Analyse trafic, Stage ARPCE |
| B2 | Développement | Diploma Gate Guardian, JS Projects, ToDoList, FaceTracking |
| B3 | Cybersécurité | JWT (Diploma GG), Analyse Wireshark |
| B4 | Gestion de projet | Architecture fullstack, Maquettage infra |

### ⚠️ Questions pièges à préparer

| Question du jury | Réponse clé |
|---|---|
| *"Pourquoi JWT et pas des sessions ?"* | JWT est stateless, idéal pour une API REST, pas besoin de stocker côté serveur |
| *"Comment fonctionne Minimax ?"* | Arbre de décision récursif, minimise les pertes de l'adversaire à chaque coup |
| *"Différence entre DHCP et DNS ?"* | DHCP attribue les adresses IP automatiquement, DNS résout les noms de domaine en IP |
| *"Qu'apporte React Native vs le web ?"* | Composants natifs, meilleures performances, accès aux capteurs du téléphone |
| *"Comment sécurises-tu MongoDB ?"* | Authentification JWT, validation des entrées, variables d'environnement pour les secrets |

### ✅ Les 3 projets à mettre en avant en priorité

1. **Diploma Gate Guardian** — le plus complet, contexte professionnel réel, architecture fullstack
2. **Jeu du Morpion** — démontre la maîtrise algorithmique avec Minimax
3. **Maquettage d'infrastructure** — prouve la polyvalence SLAM + SISR

---

*Document généré pour la préparation à l'épreuve E5 — BTS SIO SLAM 2025/2026*
