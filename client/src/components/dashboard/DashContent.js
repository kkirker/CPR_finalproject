import React from "react";
import { Link } from "react-router-dom";
import styled from 'react-emotion'

const Cards = styled('div')({
    width: '90%',
    height: '10vh',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
  })

const DashContent = () => (
  <div>
      <div className = "Intro">Welcome to Still Alive.  This webpage was developed to help you pass your written CPR test.  On this page, you can do multiple things.  Take the tests, check your scores, update your profile, or even look up more resources on CPR.</div>
      <div className = "TestContent">
        <Link to = "/test">Link to Test</Link>
        <Link to = "/Results">Link to Results</Link>
        <div>If you wish to complete the Test or see what your current results look like.  Please click on the two links to the left.  </div>
      </div>
      <div className = "Profilez">
        <div>
            If you wish to update your profile to include more information, please click on the link to the right?
        </div>
        <Link to ="/Profile">Link to Profile</Link>
      </div>
      <div>All remaining extra resources can be found here <Link to= "/resources">Link</Link></div>
      {/* <Intro /> //Text
      <Tests /> //Take your test + check your score
      <Profile /> //Them to Updated
      <Resources /> //Link to the resource page */}
  </div>
);
export default DashContent;
