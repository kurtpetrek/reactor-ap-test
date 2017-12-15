import React from "react";

import Banner from "./../components/Banner";
import WhatWeDo from "./../components/WhatWeDo";
import HomeFeatureSection from "./../components/HomeFeatureSection";
import ImageGallery from "./../components/ImageGallery";
import NewsletterSubscribe from "./../components/NewsletterSubscribe";
import Footer from "./../components/Footer";

export default () => {
  return (
    <div>
      <Banner />
      <WhatWeDo />
      <HomeFeatureSection />
      <ImageGallery />
      <NewsletterSubscribe />
      <Footer />
    </div>
  );
};
