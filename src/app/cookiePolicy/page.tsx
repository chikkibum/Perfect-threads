// src/pages/cookie-policy.tsx

import React from "react";
import MaxWidthWrapper from "../../components/MaxWidthWrapper"; // Adjust the import path as necessary

const CookiePolicy = () => {
  return (
    <MaxWidthWrapper>
      <div className="py-10 px-5">
        <h1 className="text-3xl font-bold text-orange-500">Cookie Policy🍪</h1>
        <em className="opacity-60">
          &quot;This is random information from chatgpt&quot;
        </em>
        <section className="mt-8">
          <h2 className="text-xl font-semibold ">1. What Are Cookies</h2>
          <p className="mt-2 text-gray-700">
            As is common practice with almost all professional websites this
            site uses cookies, which are tiny files that are downloaded to your
            computer, to improve your experience. This page describes what
            information they gather, how we use it and why we sometimes need to
            store these cookies. We will also share how you can prevent these
            cookies from being stored however this may downgrade or &apos;break&apos;
            certain elements of the sites functionality.
          </p>
        </section>
        <section className="mt-8">
          <h2 className="text-xl font-semibold ">2. How We Use Cookies</h2>
          <p className="mt-2 text-gray-700">
            We use cookies for a variety of reasons detailed below.
            Unfortunately in most cases there are no industry standard options
            for disabling cookies without completely disabling the functionality
            and features they add to this site. It is recommended that you leave
            on all cookies if you are not sure whether you need them or not in
            case they are used to provide a service that you use.
          </p>
        </section>
        <section className="mt-8">
          <h2 className="text-xl font-semibold ">3. Disabling Cookies</h2>
          <p className="mt-2 text-gray-700">
            You can prevent the setting of cookies by adjusting the settings on
            your browser (see your browser Help for how to do this). Be aware
            that disabling cookies will affect the functionality of this and
            many other websites that you visit. Disabling cookies will usually
            result in also disabling certain functionality and features of the
            this site. Therefore it is recommended that you do not disable
            cookies.
          </p>
        </section>
        <section className="mt-8">
          <h2 className="text-xl font-semibold ">4. More Information</h2>
          <p className="mt-2 text-gray-700">
            Hopefully that has clarified things for you and as was previously
            mentioned if there is something that you aren&apos;t sure whether you
            need or not it&apos;s usually safer to leave cookies enabled in case it
            does interact with one of the features you use on our site. However
            if you are still looking for more information then you can contact
            us through one of our preferred contact methods.
          </p>
        </section>
      </div>
    </MaxWidthWrapper>
  );
};

export default CookiePolicy;
