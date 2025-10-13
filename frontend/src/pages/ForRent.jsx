import React from 'react';
import Topbar from '../components/common/Topbar';
import Navbar from '../components/common/Navbar';
import Headerimage from '../components/forrentpage/headerimage/Headerimage';
import SearchForm from '../components/forrentpage/searchform/SearchForm';
import ForRentCard from '../components/forrentpage/forrentcards/ForRentCard';
import Footer from '../components/common/footer';
export default function ForRent() {
  return (
    <div style={{overflowX:"clip"}}>
      <Topbar />
      <Navbar />
     <Headerimage />
     <SearchForm />
     <ForRentCard />
     <Footer />
       </div>
  );
}