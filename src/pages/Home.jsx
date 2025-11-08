import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import { useHomeData } from '../hooks/useStrapiData';

const Home = () => {
  const { data: response } = useHomeData();
  const homeData = response?.data || null;

  return (
    <>
      <Helmet>
        <title>{homeData?.SEO?.SEO_Title || 'Pattern 23'}</title>
        <meta 
          name="description" 
          content={homeData?.SEO?.SEO_Description || "Welcome to Ramin's portfolio"} 
        />
        <meta 
          property="og:title" 
          content={homeData?.SEO?.SEO_Title || 'Pattern 23'} 
        />
        <meta 
          property="og:description" 
          content={homeData?.SEO?.SEO_Description || "Welcome to Ramin's portfolio"} 
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <PageLayout>
        <div className="flex flex-col">

          {/* --- STATIC TEXT REPLACING “NO CONTENT AVAILABLE” --- */}
          <div className="mb-[70px] md:mb-[170px] max-w-xl">
            <p className="text-[16px] md:text-[16pt] text-gray-900 dark:text-white">
              Design research lab focused on the co-evolution of human and machine intelligence—
              crafting interfaces, behaviors, and systems for our shared future.
            </p>
          </div>

          {/* --- MENU --- */}
          <nav className="mb-16">
            <div className="flex flex-col space-y-2">
              {homeData?.Menu?.map((menuItem) => (
                <div
                  key={menuItem.id}
                  className="flex items-center text-[16px] md:text-[16pt] text-black dark:text-white"
                >
                  <Link
                    to={`/${menuItem.Link}`}
                    className="hover:text-[#6366f1]"
                  >
                    {menuItem.Name}
                  </Link>
                </div>
              ))}
            </div>
          </nav>

        </div>
      </PageLayout>
    </>
  );
};

export default Home;
