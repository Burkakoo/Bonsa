import { useEffect, useRef, useState } from 'react';
import {
  BookOpen,
  Download,
  Facebook,
  FileText,
  GraduationCap,
  Mail,
  MessageCircleMore,
  MapPin,
  Phone,
  Send,
  Shapes,
  Twitter,
  Users,
  Users2,
} from 'lucide-react';

const profileImage = new URL('../cv-profile.jpg', import.meta.url).href;
const cvPdf = new URL('../Blue Simple Professional CV Resume_20240905_174607_0000.pdf', import.meta.url).href;
const aspireCertificate = new URL('../photo_2026-04-07_19-16-22.jpg', import.meta.url).href;
const careCertificate = new URL('../photo_2026-04-07_19-16-38.jpg', import.meta.url).href;
const gbvCertificate = new URL('../photo_2026-04-07_19-16-51.jpg', import.meta.url).href;
const conflictCertificate = new URL('../photo_2026-04-07_19-16-58.jpg', import.meta.url).href;
const whatsappNumber = '251914103830';
const telegramUsername = 'Aldebran1';

const stats = [
  {
    value: '24 Nov 2024',
    label: 'Started as Lecturer, Borana University',
  },
  {
    value: '3.83 / 4.0',
    label: 'LL.B CGPA from Wollega University',
  },
  {
    value: '79 / 100',
    label: 'National Exit Exam score',
  },
];

const professionalFocus = [
  {
    icon: FileText,
    label: 'Legal research and writing',
  },
  {
    icon: GraduationCap,
    label: 'Human rights scholarship',
  },
  {
    icon: Users,
    label: 'Teaching and mentorship',
  },
  {
    icon: Shapes,
    label: 'Leadership and innovation',
  },
];

const focusAreas = [
  {
    icon: BookOpen,
    title: 'Research & Publications',
    description:
      'Driven by a deep interest in human rights law and social justice. Currently focusing on:',
    items: [
      'International Human Rights Law',
      'Constitutional Law & Governance',
      'Legal Ethics and Advocacy',
    ],
  },
  {
    icon: Users2,
    title: 'Teaching & Mentorship',
    description:
      'Serving as a Lecturer at Borana University, committed to shaping the next generation of legal minds.',
    items: [
      'Legal Research Methodology',
      'Introductory Law & Jurisprudence',
      'Clinical Legal Education',
    ],
  },
];

const experience = [
  {
    date: '24 November 2024 - Present',
    title: 'Lecturer',
    org: 'Borana University',
    description:
      'Teaching, mentoring, and contributing to academic work while expanding my expertise through advanced study in human rights law.',
  },
  {
    date: 'Nov 2022 - July 2024',
    title: 'Innovation Leader',
    org: 'Wallaga University GADAO Club',
    description:
      'Served as the Leader of Innovation for three years, helping drive creative thinking, student engagement, and collaborative problem-solving initiatives.',
  },
  {
    date: 'Dec 2023 - March 2024',
    title: 'Legal Internship',
    org: 'Ginir Woreda Court',
    description:
      'Worked on real cases in the role of judge, and provided free legal consultancy and related legal services.',
  },
  {
    date: 'Leadership Experience',
    title: 'Official Campus Ambassador',
    org: 'International Model United Nations (IMUN)',
    description:
      'Represented campus initiatives and supported student engagement through the IMUN internship and ambassador platform.',
  },
];

const skills = [
  'Legal Councillor',
  'Legal Writing',
  'Researcher',
  'Essayist',
  'Team Work',
  'Leadership',
];

const languages = [
  'English - Fluent',
  'Afaan Oromoo - Native',
  'Amharic - Fluent',
];

const highlights = [
  'Secured a CGPA of 3.83/4.0 from Wollega University.',
  'Second-best performer in the entire school of law during the National Exit Exam.',
  'Leader of Innovation for 3 years at WU GADAO Club.',
  'Certified in Aspire Leaders Program (2025).',
];

const certificates = [
  {
    date: 'March 2025',
    title: '2025 Aspire Leaders Program',
    description: 'Completed through Aspire Institute.',
    image: aspireCertificate,
    ariaLabel: '2025 Aspire Leaders Program certificate awarded to Bonsa Mohammed',
  },
  {
    date: '24 August 2024',
    title: 'Becoming a Climate-Smart Organisation',
    description: 'CARE Climate & Resilience Academy certificate.',
    image: careCertificate,
    ariaLabel: 'CARE Climate and Resilience Academy certificate awarded to Bonsa Mohammed',
  },
  {
    date: '24 July 2024',
    title: 'Initial Support to Survivors of Gender-Based Violence (GBV)',
    description: 'IOM, UNHCR, UNFPA, and UNICEF certificate.',
    image: gbvCertificate,
    ariaLabel:
      'Certificate of completion for How to provide initial support to survivors of gender-based violence awarded to Bonsa Hussen Mohammed',
  },
  {
    date: '5 January 2024',
    title: 'Conflict Management and Resolution',
    description: 'Atingi eLearning platform certificate. Certificate ID: 32409439 28BM.',
    image: conflictCertificate,
    ariaLabel:
      'Atingi certificate of completion for Conflict Management and Resolution awarded to Bonsa Mohammed',
  },
];

function RevealSection({ as: Tag = 'section', className = '', children, ...props }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const classes = ['reveal', visible ? 'visible' : '', className].filter(Boolean).join(' ');

  return (
    <Tag ref={ref} className={classes} {...props}>
      {children}
    </Tag>
  );
}

function SectionHeading({ eyebrow, title, note }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {note ? <p className="section-note">{note}</p> : null}
    </div>
  );
}

function StatCard({ value, label }) {
  return (
    <article className="stat-card">
      <span className="stat-value">{value}</span>
      <span className="stat-label">{label}</span>
    </article>
  );
}

function CertificateCard({ certificate }) {
  return (
    <article
      className="certificate-card"
      style={{ '--certificate-image': `url(${certificate.image})` }}
      aria-label={certificate.ariaLabel}
    >
      <div className="certificate-copy">
        <p className="card-kicker">Certificate</p>
        <p className="certificate-date">{certificate.date}</p>
        <h3>{certificate.title}</h3>
        <p>{certificate.description}</p>
      </div>
    </article>
  );
}

function ContactForm() {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');
  const [feedback, setFeedback] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;

    setFormValues((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function buildMessage() {
    const name = formValues.name.trim();
    const email = formValues.email.trim();
    const message = formValues.message.trim();

    return [
      'Hello Bonsa H. Mohammed,',
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      'Message:',
      message,
    ].join('\n');
  }

  function handleChannelOpen(event, channel) {
    event.preventDefault();

    const form = event.currentTarget.form;

    if (!form.reportValidity()) {
      return;
    }

    const messageText = buildMessage();

    if (channel === 'whatsapp') {
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageText)}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      setStatus('whatsapp');
      setFeedback('WhatsApp opened with your message. Press send in WhatsApp to deliver it directly.');
      return;
    }

    const telegramUrl = `https://t.me/${telegramUsername}?text=${encodeURIComponent(messageText)}`;
    window.open(telegramUrl, '_blank', 'noopener,noreferrer');
    setStatus('telegram');
    setFeedback('Telegram opened a direct message draft for @Aldebran1. Press send in Telegram to deliver it.');
  }

  return (
    <form className="contact-form">
      <p className="form-note">
        Write your message once, then send it through WhatsApp or Telegram.
      </p>
      <div className="input-group">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Bonsa H. Mohammed"
          value={formValues.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="you@example.com"
          value={formValues.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          placeholder="How can I help you?"
          value={formValues.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <div className="channel-actions">
        <button type="button" className="button button-whatsapp full-width" onClick={(event) => handleChannelOpen(event, 'whatsapp')}>
          <MessageCircleMore />
          <span>Send to WhatsApp</span>
        </button>
        <button type="button" className="button button-telegram full-width" onClick={(event) => handleChannelOpen(event, 'telegram')}>
          <Send />
          <span>Send to Telegram</span>
        </button>
      </div>
      {feedback ? (
        <p className={`form-status form-status-${status}`} aria-live="polite">
          {feedback}
        </p>
      ) : null}
    </form>
  );
}

function App() {
  return (
    <>
      <div className="ambient ambient-left" aria-hidden="true"></div>
      <div className="ambient ambient-right" aria-hidden="true"></div>

      <header className="topbar">
        <a className="brand" href="#top">
          Bonsa H. Mohammed
        </a>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#credentials">Credentials</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top" className="page">
        <RevealSection className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Lecturer at Borana University</p>
            <h1>Bonsa H. Mohammed</h1>
            <p className="hero-tagline">
              Lecturer, lawyer, researcher, and Master of Laws in Human Rights candidate.
            </p>
            <p className="lead">
              I am Bonsa H. Mohammed, a lecturer, lawyer, and researcher with a strong foundation in
              legal writing, academic excellence, and public service. I began serving as a Lecturer
              at Borana University on <strong>24 November 2024</strong> and I am currently studying
              a <strong>Master of Laws in Human Rights</strong>.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href={cvPdf}>
                <Download />
                <span>Download CV</span>
              </a>
              <a className="button button-secondary" href="mailto:bonbiladenii@gmail.com">
                <Mail />
                <span>Email Me</span>
              </a>
            </div>

            <div className="stat-grid">
              {stats.map((stat) => (
                <StatCard key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </div>
          </div>

          <aside className="identity-panel">
            <div className="profile-frame">
              <img src={profileImage} alt="Bonsa H. Mohammed" className="profile-image" />
              <div className="profile-status">
                <span className="status-dot"></span>
                <span>Available for Research</span>
              </div>
            </div>
            <p className="panel-title">Professional Focus</p>
            <ul className="focus-list">
              {professionalFocus.map(({ icon: Icon, label }) => (
                <li key={label}>
                  <Icon />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
            <div className="panel-note">
              <MapPin />
              <div>
                <span>Based in</span>
                <strong>Oromia, Ethiopia</strong>
              </div>
            </div>
          </aside>
        </RevealSection>

        <RevealSection id="about" className="section">
          <SectionHeading eyebrow="About" title="Profile" />
          <div className="section-card profile-card">
            <p>
              A dedicated and high-achieving legal professional with a First Degree in Law (LL.B)
              and an impressive CGPA of 3.83 out of 4. I demonstrated strong academic performance by
              scoring 79 out of 100 on the National Exit Exam and ranking as the second-best
              performer in my school.
            </p>
            <p>
              My background combines legal research, essay writing, teamwork, volunteerism, and
              leadership. I enjoy building knowledge, supporting communities, and contributing
              thoughtfully to legal education and human rights work.
            </p>
          </div>
        </RevealSection>

        <RevealSection id="focus-areas" className="section">
          <SectionHeading eyebrow="Expertise" title="Academic & Legal Focus" />
          <div className="credentials-grid">
            {focusAreas.map(({ icon: Icon, title, description, items }) => (
              <article key={title} className="section-card">
                <div className="card-icon">
                  <Icon />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <ul className="simple-list">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </RevealSection>

        <RevealSection id="experience" className="section">
          <SectionHeading eyebrow="Experience" title="Work and Leadership Journey" />
          <div className="timeline">
            {experience.map((item) => (
              <article key={`${item.date}-${item.title}`} className="timeline-item">
                <div className="timeline-date">{item.date}</div>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p className="timeline-org">{item.org}</p>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </RevealSection>

        <RevealSection id="credentials" className="section">
          <SectionHeading
            eyebrow="Credentials"
            title="Education, Skills, and Certifications"
            note="Certificates are shown from newest to oldest."
          />

          <div className="credentials-grid">
            <article className="section-card">
              <h3>Education</h3>
              <p className="card-kicker">Current Study</p>
              <p>
                <strong>Master of Laws in Human Rights</strong>{' '}
                <span className="muted">In Progress</span>
              </p>
              <p className="card-kicker">Completed Degree</p>
              <p>
                <strong>LL.B Degree</strong>
              </p>
              <p>Wollega University</p>
              <p className="muted">2019 - 2024</p>
              <p className="muted">CGPA: 3.83 / 4.0</p>
            </article>

            <article className="section-card">
              <h3>Core Skills</h3>
              <div className="chip-wrap">
                {skills.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </article>

            <article className="section-card">
              <h3>Languages</h3>
              <ul className="simple-list">
                {languages.map((language) => (
                  <li key={language}>{language}</li>
                ))}
              </ul>
            </article>

            <article className="section-card highlight-card">
              <h3>Professional Highlights</h3>
              <div className="stat-grid solo-stat">
                <StatCard value="Top 2%" label="National Exit Exam Rank" />
              </div>
              <ul className="simple-list">
                {highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          </div>

          <div className="certificate-grid">
            {certificates.map((certificate) => (
              <CertificateCard key={certificate.title} certificate={certificate} />
            ))}
          </div>
        </RevealSection>

        <RevealSection id="contact" className="section">
          <SectionHeading eyebrow="Contact" title="Let's Connect" />

          <div className="contact-grid">
            <article className="section-card contact-card">
              <h3>Direct Contact</h3>
              <p>
                <Phone />
                <strong>Phone:</strong> <a href="tel:+251914103830">+251 914 103 830</a>
              </p>
              <p>
                <MessageCircleMore />
                <strong>WhatsApp:</strong> <a href="https://wa.me/251914103830" target="_blank" rel="noreferrer">Chat on WhatsApp</a>
              </p>
              <p>
                <Send />
                <strong>Telegram:</strong> <a href="https://t.me/Aldebran1" target="_blank" rel="noreferrer">@Aldebran1</a>
              </p>
              <p>
                <Facebook />
                <strong>Facebook:</strong>{' '}
                <a href="https://www.facebook.com/bonsa.hussen.375835" target="_blank" rel="noreferrer">
                  bonsa.hussen.375835
                </a>
              </p>
              <p>
                <Twitter />
                <strong>X:</strong>{' '}
                <a href="https://x.com/bonsa_h" target="_blank" rel="noreferrer">
                  @bonsa_h
                </a>
              </p>
              <p>
                <Mail />
                <strong>Email:</strong>{' '}
                <a href="mailto:bonbiladenii@gmail.com">bonbiladenii@gmail.com</a>
              </p>
              <p>
                <MapPin />
                <strong>Location:</strong> Ginir City, Oromia, Ethiopia
              </p>
            </article>

            <article className="section-card contact-form-card">
              <h3>Send a Message</h3>
              <ContactForm />
            </article>
          </div>
        </RevealSection>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Bonsa H. Mohammed | Lecturer, Lawyer, Researcher</p>
      </footer>
    </>
  );
}

export default App;
