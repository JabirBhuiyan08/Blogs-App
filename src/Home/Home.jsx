import React from 'react';
import FeaturedBlogs from './FeaturedBlogs';
import EmailLead from './EmailLead/EmailLead';


const Home = () => {
    return (
        <div className='container mx-auto'>
              <h1 className='text-4xl text-center'>Welcome to Our Blog</h1>
           <FeaturedBlogs></FeaturedBlogs>
           <EmailLead></EmailLead>
        </div>
    );
};

export default Home;