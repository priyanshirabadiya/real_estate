import React from 'react';
import Topbar from '../components/common/Topbar';
import Navbar from '../components/common/Navbar';
import AgentProfileCard from '../components/agentsdetails/AgentProfileCard';
import Dashboard from '../components/agentsdetails/Dashboard';
import ReviewForm from '../components/agentsdetails/Review';
import Footer from '../components/common/footer';

export default function Agentsprofile() {
  return (
    <div style={{overflowX:"clip"}}>
      <Topbar />
      <Navbar />
      <AgentProfileCard />
      <Dashboard />
      <ReviewForm />
      <Footer />
       </div>
  );
}