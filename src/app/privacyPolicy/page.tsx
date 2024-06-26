// src/pages/privacy-policy.tsx

import React from "react";
import MaxWidthWrapper from "../../components/MaxWidthWrapper"; // Adjust the import path as necessary

const PrivacyPolicy = () => {
  return (
    <MaxWidthWrapper>
      <div className="py-10 px-5">
        <h1 className="text-3xl font-bold text-orange-500">Privacy Policy🙌</h1>

        <em className="opacity-60">
          {" "}
          &quot; This is random information from chatgpt &quot;
        </em>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">1. Introduction</h2>
          <p className="mt-2 text-gray-700">
            This privacy policy sets out how we use and protect any information
            that you give us when you use this website.
          </p>
        </section>
        <section className="mt-8">
          <h2 className="text-xl font-semibold">2. Information Collection</h2>
          <p className="mt-2 text-gray-700">
            We may collect the following information: [Details of Information
            Collection].
          </p>
        </section>
        <section className="mt-8">
          <h2 className="text-xl font-semibold">3. Use of Information</h2>
          <p className="mt-2 text-gray-700">
            We require this information to understand your needs and provide you
            with a better service, and in particular for the following reasons:
            [Details of Use].
          </p>
        </section>
        <section className="mt-8">
          <h2 className="text-xl font-semibold ">4. Security</h2>
          <p className="mt-2 text-gray-700">
            We are committed to ensuring that your information is secure. In
            order to prevent unauthorised access or disclosure, we have put in
            place suitable physical, electronic and managerial procedures to
            safeguard and secure the information we collect online.
          </p>
        </section>
      </div>
    </MaxWidthWrapper>
  );
};

export default PrivacyPolicy;
