import Logo from "../assets/Deraigo-White.svg";
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const ComingSoon = () => {
  return (
    <div className="min-h-screen flex flex-col pb-12 items-center justify-center text-center px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-2xl mx-auto">
        {/* Logo */}
        <div className="mb-8">
          <img src={Logo} alt="Deraigo Logo" className="w-64 mx-auto" />
        </div>
        
        {/* Coming Soon Text */}
        <h4 className="text-xl md:text-2xl font-medium mb-8 tracking-widest text-gray-300 uppercase">
          Coming Soon
        </h4>

        {/* Messages */}
        <div className="space-y-6 mb-10 text-gray-300">
          <p className="text-lg md:text-xl leading-relaxed">
            We sincerely apologize for the inconvenience caused due to our website
            not being ready yet. We understand this may have caused trouble, and we
            truly appreciate your patience.
          </p>

          <p className="text-lg md:text-xl leading-relaxed">
            Our team is working hard behind the scenes to bring you something
            amazing. DERAIGO is launching soon with premium quality sports underwear
            and gym wear that you'll love.
          </p>

          <p className="text-lg md:text-xl leading-relaxed">
            In the meantime, you can place your orders through our social media
            pages or WhatsApp. Thank you again for your support – we can't wait to
            share our journey with you!
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-10">
          <a
            href="https://facebook.com/DraivonOfficial"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full transition duration-300"
            aria-label="Facebook"
          >
            <FaFacebook className="text-2xl" />
          </a>
          <a
            href="https://instagram.com/DraivonOfficial"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-600 hover:bg-pink-700 text-white p-4 rounded-full transition duration-300"
            aria-label="Instagram"
          >
            <FaInstagram className="text-2xl" />
          </a>
          <a
            href="https://wa.me/923157041545"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full transition duration-300"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="text-2xl" />
          </a>
        </div>

        {/* WhatsApp Order Button */}
        <a
          href="https://wa.me/923157041545"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition duration-300 shadow-lg"
        >
          <FaWhatsapp className="mr-3 text-xl" />
          Order Now on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ComingSoon;