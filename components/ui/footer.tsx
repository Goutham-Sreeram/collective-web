"use client";

import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

export function FooterComponent() {
  return (
    <Footer container className="bg-blue-600 text-white" style={{ fontFamily: 'Cal Sans, sans-serif' ,  backgroundColor: '#222222' }}>
      <div className="w-full">
        <div className="grid w-full gap-8 sm:flex sm:justify-between md:grid-cols-1">
          <div>
            <FooterBrand
              href="https://flowbite.com"
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Flowbite Logo"
              name="Flowbite"
              className="text-white"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <FooterTitle title="about" className="text-white" />
              <FooterLinkGroup col>
                <FooterLink href="#" className="text-white hover:text-gray-200">Flowbite</FooterLink>
                <FooterLink href="#" className="text-white hover:text-gray-200">Tailwind CSS</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Follow us" className="text-white" />
              <FooterLinkGroup col>
                <FooterLink href="#" className="text-white hover:text-gray-200">Github</FooterLink>
                <FooterLink href="#" className="text-white hover:text-gray-200">Discord</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Legal" className="text-white" />
              <FooterLinkGroup col>
                <FooterLink href="#" className="text-white hover:text-gray-200">Privacy Policy</FooterLink>
                <FooterLink href="#" className="text-white hover:text-gray-200">Terms &amp; Conditions</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider className="my-6 border-gray-400" />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="#" by="Flowbite™" year={2022} className="text-white" />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon href="#" icon={BsFacebook} className="text-white hover:text-gray-200" />
            <FooterIcon href="#" icon={BsInstagram} className="text-white hover:text-gray-200" />
            <FooterIcon href="#" icon={BsTwitter} className="text-white hover:text-gray-200" />
            <FooterIcon href="#" icon={BsGithub} className="text-white hover:text-gray-200" />
            <FooterIcon href="#" icon={BsDribbble} className="text-white hover:text-gray-200" />
          </div>
        </div>
      </div>
    </Footer>
  );
}