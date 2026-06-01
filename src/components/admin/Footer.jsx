import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
return(
            <div id="Footer" className="flex justify-center gap-5 text-gray-400 text-lg py-2">

            <FaFacebookF />
            <FaXTwitter />
            <FaInstagram />
            <FaYoutube />
            <FaLinkedinIn />

          </div>
)
}