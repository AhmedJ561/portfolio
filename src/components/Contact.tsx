import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="section flex flex-col items-center text-center">
      <h1 className="section-heading text-5xl font-extrabold tracking-wide mb-6">
        Contact Me
      </h1>
      <p className="section-paragraph max-w-lg mb-8">
        Feel free to reach out to me! I'm always open to discussing new projects, creative ideas, or opportunities to collaborate.
      </p>
      <a
        href="mailto:ahmedjamil561@gmail.com"
        className="px-8 py-4 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-secondary)] text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out inline-block mb-8"
      >
        Send Email
      </a>
      <div className="contact-info space-y-4 mb-8">
        <p className="text-[var(--color-secondary)] text-lg">
          <strong className="text-[var(--color-accent)]">Email:</strong> ahmedjamil561@gmail.com
        </p>
        <p className="text-[var(--color-secondary)] text-lg">
          <strong className="text-[var(--color-accent)]">Phone:</strong> +92336-9266-340
        </p>
        <p className="text-[var(--color-secondary)] text-lg">
          <strong className="text-[var(--color-accent)]">Address:</strong> H 421, st 98, G-9/4, Islamabad, Pakistan
        </p>
      </div>
      <div className="social-media flex space-x-6">
        <a
          href="https://www.linkedin.com/in/ahmed-jamil-a30975280/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-accent)] hover:text-[var(--color-secondary)] transition-colors duration-300"
        >
          <FaLinkedin size={32} />
        </a>
        <a
          href="https://github.com/AhmedJ561"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-accent)] hover:text-[var(--color-secondary)] transition-colors duration-300"
        >
          <FaGithub size={32} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
