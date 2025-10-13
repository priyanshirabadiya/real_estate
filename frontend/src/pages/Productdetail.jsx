import React from 'react';
import Topbar from '../components/common/Topbar';
import Navbar from '../components/common/Navbar';
import PropertyHeader from '../components/productdetail/PropertyHeader';
import PropertySection from '../components/productdetail/PropertySection';
import DescriptionSection from '../components/productdetail/DescriptionSection';
import AddressSection from '../components/productdetail/AddressSection';
import PropertyDetailsSection from '../components/productdetail/PropertyDetails';
import FloorPlans from '../components/productdetail/FloorPlans';
import VideoSection from '../components/productdetail/VideoSection';
import ReviewForm from '../components/productdetail/ReviewForm';
import Footer from '../components/common/footer';
export default function ProductDetail() {
  return (
    <div style={{overflowX:"clip"}}>
      <Topbar />
      <Navbar />
      <PropertyHeader />
      <PropertySection />
      <DescriptionSection />
      <AddressSection />
      <PropertyDetailsSection />
      <FloorPlans />
      <VideoSection />
      <ReviewForm />
      <Footer />
       </div>
  );
}