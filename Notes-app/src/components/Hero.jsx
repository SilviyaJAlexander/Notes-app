import { Link } from 'react-router-dom';
import image from '../assets/image.webp';
const Hero = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat text-white py-32 px-4 text-center" 
             style={{  backgroundImage: `url(${image})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
      
      <div className="relative container mx-auto">
        <h2 className="text-4xl font-bold mb-4">Welcome to Notes App</h2>
        <p className="text-lg mb-8">Your personal space to create, edit, and organize notes with ease.</p>
        {/* <Link to="/add-note" className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded">
          Get Started
        </Link>*/}
      </div>
    </section>
  );
};

export default Hero;
