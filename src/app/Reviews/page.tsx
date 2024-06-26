// src/pages/terms.tsx

import React from "react";
import MaxWidthWrapper from "../../components/MaxWidthWrapper"; // Adjust the import path as necessary
import Link from "next/link";

const TermsOfService = () => {
  return (
    <MaxWidthWrapper>
      <div className="py-10 px-5">
        <h1 className="text-3xl font-bold text-orange-500">
          Terms of Service🤞
        </h1>
        <em> &quot; This is random information from chatgpt &quot;</em>
        <section className="mt-8">
          <h2 className="text-xl font-semibold ">1. Introduction</h2>
          <p className="mt-2 text-gray-700">
            Welcome to our website. By accessing and using this website, you
            agree to comply with and be bound by the following terms and
            conditions of use, which together with our{" "}
            <Link href="/privacyPolicy" className="text-orange-500 underline">
              privacy policy
            </Link>{" "}
            govern our relationship with you in relation to this website.
          </p>
        </section>
        <section className="mt-8">
          <h2 className="text-xl font-semibold">2. Use of the Website</h2>
          <p className="mt-2 text-gray-700">
            You agree to use the website only for lawful purposes and in a way
            that does not infringe the rights of, restrict or inhibit anyone
            else's use and enjoyment of the website.
          </p>
        </section>
        <section className="mt-8">
          <h2 className="text-xl font-semibold">3. Privacy Policy</h2>
          <p className="mt-2 text-gray-700">
            Our privacy policy, which sets out how we will use your information,
            can be found at [Privacy Policy]. By using this website, you consent
            to the processing described therein and warrant that all data
            provided by you is accurate.
          </p>
        </section>
        <section className="mt-8">
          <h2 className="text-xl font-semibold">4. Changes to the Terms</h2>
          <p className="mt-2 text-gray-700">
            We may revise these terms of use at any time by amending this page.
            You are expected to check this page from time to time to take notice
            of any changes we made, as they are binding on you.
          </p>
        </section>
        <section className="mt-8">
          <h2 className="text-xl font-semibold">5. Contact Information</h2>
          <p className="mt-2 text-gray-700">
            If you have any questions about these Terms, please contact us at{" "}
            <span className="font-2xl font-bold">perfectThreads@gmail.com</span>
          </p>
        </section>
      </div>
    </MaxWidthWrapper>
  );
};

export default TermsOfService;
