
import profileImage from '../assets/profile.png'; // Ensure the path is correct

const Home = () => {
  return (
    <div className="section flex flex-col items-center text-center">
      <img
        src={profileImage}
        alt="Ahmed Jamil"
        className="rounded-full w-40 h-40 object-cover mb-6 border-4 border-[var(--color-accent)] transition-transform transform hover:scale-105"
      />
      <h1 className="section-heading text-5xl font-extrabold tracking-wide mb-4">
        Ahmed Jamil
      </h1>
      <p className="section-paragraph max-w-lg mb-8">
        Enthusiastic BSSE student with a passion for web development, game development, and Android app development. Skilled in Blender, Canva, Photoshop, and eager to explore emerging technologies. Committed to continuous learning and innovation.
      </p>
      <a
        href="#contact"
        className="px-8 py-4 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-secondary)] text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out inline-block"
      >
        Contact Me
      </a>
    </div>
  );
};

export default Home;
