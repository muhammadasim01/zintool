import Link from "next/link";
import { FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white px-6 py-4 mt-6">
      <div className="container mx-auto ">
        <div className="flex flex-col space-y-3">
          <div className="flex items-center space-x-6 mb-8 sm:mb-0">
            <p className="text-xl font-bold">Follow us</p>
            <FaYoutube />
            <FaTwitter />
            <FaFacebook />
          </div>
          <div className="flex flex-wrap justify-between">
            <div className="mb-4 sm:mb-0 mr-4">
              <h6 className="font-bold text-gray-700 mb-2">Internal Links</h6>
              <ul>
                <li className="text-gray-600 hover:text-gray-900">
                  Documentaries
                </li>
                <li className="text-gray-600 hover:text-gray-900">Themes</li>
                <li className="text-gray-600 hover:text-gray-900">
                  Chrome casts
                </li>
              </ul>
            </div>
            <div className="mb-4 sm:mb-0 mr-4">
              <h6 className="font-bold text-gray-700 mb-2">Enterprise</h6>
              <ul>
                <li className="text-gray-600 hover:text-gray-900">
                  Download Chrome Browser
                </li>
                <li className="text-gray-600 hover:text-gray-900">
                  Chrome Browser for Enterprise
                </li>
                <li className="text-gray-600 hover:text-gray-900">
                  Chrome Browser Devices
                </li>
                <li className="text-gray-600 hover:text-gray-900">ChromeOS</li>
                <li className="text-gray-600 hover:text-gray-900">
                  Google Cloud
                </li>
                <li className="text-gray-600 hover:text-gray-900">
                  Google Workspace
                </li>
              </ul>
            </div>
            <div className="mb-4 sm:mb-0 mr-4">
              <h6 className="font-bold text-gray-700 mb-2">Internal Links</h6>
              <ul>
                <li className="text-gray-600 hover:text-gray-900">
                  Documentaries
                </li>
                <li className="text-gray-600 hover:text-gray-900">Themes</li>
                <li className="text-gray-600 hover:text-gray-900">
                  Chrome casts
                </li>
              </ul>
            </div>
            <div className="mb-4 sm:mb-0 mr-4">
              <h6 className="font-bold text-gray-700 mb-2">Enterprise</h6>
              <ul>
                <li className="text-gray-600 hover:text-gray-900">
                  Download Chrome Browser
                </li>
                <li className="text-gray-600 hover:text-gray-900">
                  Chrome Browser for Enterprise
                </li>
                <li className="text-gray-600 hover:text-gray-900">
                  Chrome Browser Devices
                </li>
                <li className="text-gray-600 hover:text-gray-900">ChromeOS</li>
                <li className="text-gray-600 hover:text-gray-900">
                  Google Cloud
                </li>
                <li className="text-gray-600 hover:text-gray-900">
                  Google Workspace
                </li>
              </ul>
            </div>
            <div className="mb-4 sm:mb-0 mr-4">
              <h6 className="font-bold text-gray-700 mb-2">Internal Links</h6>
              <ul>
                <li className="text-gray-600 hover:text-gray-900">
                  Documentaries
                </li>
                <li className="text-gray-600 hover:text-gray-900">Themes</li>
                <li className="text-gray-600 hover:text-gray-900">
                  Chrome casts
                </li>
              </ul>
            </div>
            <div className="mb-4 sm:mb-0 mr-4">
              <h6 className="font-bold text-gray-700 mb-2">Enterprise</h6>
              <ul>
                <li className="text-gray-600 hover:text-gray-900">
                  Download Chrome Browser
                </li>
                <li className="text-gray-600 hover:text-gray-900">
                  Chrome Browser for Enterprise
                </li>
                <li className="text-gray-600 hover:text-gray-900">
                  Chrome Browser Devices
                </li>
                <li className="text-gray-600 hover:text-gray-900">ChromeOS</li>
                <li className="text-gray-600 hover:text-gray-900">
                  Google Cloud
                </li>
                <li className="text-gray-600 hover:text-gray-900">
                  Google Workspace
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-600 text-sm mt-4  flex flex-col md:flex-row items-center">
          <div className="flex items-center space-x-2 mr-5">
            <span className="text-2xl font-bold">Similar </span>
            <span className="bg-black p-2 text-white rounded-lg"> Watch</span>
          </div>{" "}
          <div className="flex items-center  flex-wrap">
            <Link href="#" className="hover:text-gray-900 mr-3 mb-3 md:mb-0 ">
              Privacy Policy
            </Link>{" "}
            <Link href="#" className="hover:text-gray-900 mr-3 mb-3 md:mb-0">
              Terms and conditions
            </Link>{" "}
            <Link href="#" className="hover:text-gray-900 mr-3 mb-3 md:mb-0">
              About us
            </Link>{" "}
            <Link href="#" className="hover:text-gray-900 mr-3 mb-3 md:mb-0">
              EULA
            </Link>{" "}
            <Link href="#" className="hover:text-gray-900 mr-3 mb-3 md:mb-0">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
