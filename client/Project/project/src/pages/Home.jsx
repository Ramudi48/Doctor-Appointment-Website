import { Link } from 'react-router-dom';
import image from '../assets/image.png';

function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to MedCare</h1>
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Left Side: Content */}
        <div className="bg-white rounded-lg shadow-md p-8 flex-1">
          <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">General Consultation</h3>
              <p className="text-gray-600 mb-4">
                Book an appointment with our experienced general practitioners for routine check-ups
                and medical consultations.
              </p>
              <Link
                to="/book"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Book Now
              </Link>
            </div>
            
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={image}
            alt="MedCare Services"
            className="max-w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;