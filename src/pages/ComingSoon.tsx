import Logo from "../assets/Deraigo-White.svg";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const ComingSoon = () => {
  return (
    <div className="min-h-screen flex flex-col pb-12 items-center justify-center text-center px-4 bg-black">
      <div className="max-w-2xl mx-auto">
        {/* Logo */}
        <div className="mb-8">
          <img src={Logo} alt="Deraigo Logo" className="w-32 mx-auto" />
        </div>

        {/* Coming Soon Text */}
        <h4 className="text-xl md:text-xl font-medium mb-8 tracking-widest text-white uppercase">
          Website Coming Soon
        </h4>

        {/* Messages */}
        <div className="space-y-6 mb-10 text-white text-left">
          <p className="text-lg md:text-xl leading-relaxed">
            We sincerely apologize for the inconvenience caused due to our
            website not being ready yet. We understand this may have caused
            trouble, and we truly appreciate your patience.
          </p>

          <p className="text-lg md:text-xl leading-relaxed">
            Our team is working hard behind the scenes to bring you something
            amazing.
          </p>

          <p className="text-lg md:text-xl">
            <span className="text-green-400 font-semibold">
              DERAIGO has officially launched!
            </span>
            We now offer a complete range of premium quality gym wear and sports
            wear – everything you need is available now.
          </p>

          <p className="text-lg md:text-xl">
            In the meantime, place your orders through our{" "}
            <span className="text-pink-400 font-semibold">Instagram</span> or{" "}
            <span className="text-green-400 font-semibold">WhatsApp</span>.
            Thank you for your support!
          </p>
        </div>

        {/* Social Media Links */}
         <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="flex justify-center space-x-6 mb-10"
        >
          <a
            href="https://www.facebook.com/profile.php?id=61573790370919"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:scale-110 transition transform duration-300"
            aria-label="Facebook"
          >
            <FaFacebook className="text-2xl text-blue-500" />
          </a>
          <a
            href="https://www.instagram.com/deraigo.official"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:scale-110 transition transform duration-300"
            aria-label="Instagram"
          >
            <FaInstagram className="text-2xl text-pink-500" />
          </a>
          <a
            href="https://wa.me/923157041545"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:scale-110 transition transform duration-300"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="text-2xl text-green-400" />
          </a>
        </motion.div>

        {/* WhatsApp Order Button */}
         <motion.a
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          href="https://wa.me/923157041545"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 px-10 py-4 rounded-full text-lg font-bold transition duration-300 shadow-[0_0_20px_rgba(34,197,94,0.7)] hover:shadow-[0_0_40px_rgba(34,197,94,1)]"
        >
          <FaWhatsapp className="mr-3 text-xl" />
          Order Now on WhatsApp
        </motion.a>
      </div>
    </div>
  );
};

export default ComingSoon;
