import React from "react";
//link
import {Link} from "react-scroll";
//icons
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
//motion 
import {motion} from 'framer-motion';
//variants
import {fadeIn} from '../variants';

const Footer = () => {
  return (
    <footer className=" text-accent py-8">
      <div className="container mx-auto px-4">
        <motion.div
         variants={fadeIn('up', 0.2)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once: false, amount: 0.3}} 
        className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Me</h3>
            <p className="text-sm text-gray-400">
              We are dedicated to delivering the best service to our clients and
              helping them grow through our expertise.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm text-gray-400">
            <li className="mb-2">
              <Link 
               smooth= {true}
               to='home'
               className="cursor-pointer hover:text-accent">
                Home
              </Link>
              </li>
              <li className="mb-2">
              <Link 
               smooth= {true}
               spy={true}
               to='about'
               className="cursor-pointer hover:text-accent">
                About
              </Link>
              </li>
              <li className="mb-2">
              <Link 
               smooth= {true}
               spy={true}
               to='services'
               className="cursor-pointer hover:text-accent">
                Services
              </Link>
              </li>
              <li className="mb-2">
              <Link 
               smooth= {true}
               to='contact'
               className="cursor-pointer hover:text-accent">
                Contact
              </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
            <div className="flex flex-col space-y-2 ">
              <a href="https://web.facebook.com/profile.php?id=100007011017594" aria-label="Facebook" target="_blank" rel="noopener noreferrer"
              className=" text-gray-400 hover:text-accent">
                <FaFacebook />
              </a>
              <a href="https://www.linkedin.com/in/ramyar-redar-607b67316/" aria-label="Linkedin" target="_blank" rel="noopener noreferrer"
              className=" text-gray-400 hover:text-accent">
              <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/ram_yar_redar/m" aria-label="Instagram" target="_blank" rel="noopener noreferrer"
              className=" text-gray-400 hover:text-accent">
                <FaInstagram />
              </a>
              <a href="https://github.com/ram-yar-dev" aria-label="Github" target="_blank" rel="noopener noreferrer"
              className=" text-gray-400 hover:text-accent">
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm text-gray-400">
              Mardin, Erbil, Iraq (Kurdistan)
            </p>
            <p className="text-sm text-gray-400">Phone: +964-750 725-1151</p>
            <p className="text-sm text-gray-400">Email: ramyar.redar.12@gmail.com</p>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8"></div>

        {/* Copyright Section */}
        <motion.div
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
         className="flex justify-between items-center mt-6">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Ramyar Redar. All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            <a href="/terms" className="text-sm text-gray-400 hover:underline">
              Terms of Service
            </a>
            <a href="/privacy" className="text-sm text-gray-400 hover:underline">
              Privacy Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
