import React from 'react';
import { Link } from 'react-router-dom';
import { useWorksData } from '../hooks/useStrapiData';
import PageLayout from '../components/layout/PageLayout';
import { Helmet } from 'react-helmet-async';

const Works = () => {
  const { data: response } = useWorksData();
  const works = response?.data || [];

  return (
    <>
      <Helmet>
        <title>{'Work'}</title>
        <meta
          property="og:title"
          content={'Work'}
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <PageLayout>
        <div className="space-y-4">
          {works.map((work) => (
            <div key={work.id} className="text-[16px] md:text-[16pt]">
              <Link
                to={`/works/${work.slug}`}
                className="hover:text-[#6366f1] flex items-center text-black dark:text-white"
              >
                [ {work.Title} ]
              </Link>
            </div>
          ))}
        </div>

        <div className="flex items-center text-[16px] md:text-[16pt] text-black dark:text-white mt-16">
          <Link to="/" className="hover:text-[#6366f1]">[ Back ]</Link>
        </div>
      </PageLayout>
    </>
  );
};

export default Works;