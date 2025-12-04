import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useWorkData } from '../hooks/useStrapiData';
import PageLayoutWorkSingle from '../components/layout/PageLayoutWorkSingle';
import { Helmet } from'react-helmet-async';

const Work = () => {
  const { slug } = useParams();
  const { data: response } = useWorkData(slug);
  const work = response?.data || null;

  return (
    <>
      <Helmet>
        <title>{work?.SEO?.SEO_Title || work?.Title}</title>
        <meta
          name="description"
          content={work?.SEO?.SEO_Description || "Welcome to Ramin's portfolio"}
        />
        <meta
          property="og:title"
          content={work?.SEO?.SEO_Title || 'Ramin Tahbaz'}
        />
        <meta
          property="og:description"
          content={work?.SEO?.SEO_Description || "Welcome to Ramin's portfolio"}
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <PageLayoutWorkSingle>
        <div className="fixed top-5 right-5 md:top-10 md:right-10 z-50">
          <Link
            to="/works"
            className="hover:text-[#6366f1] text-black dark:text-white"
          >
            × Close
          </Link>
        </div>

        {work && (
          <div className="w-full md:max-w-[1200px] mx-auto md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {work.WorkMedia?.map((media, index) => (
                <div
                  key={media.id}
                  className={`
                  overflow-hidden rounded-xl bg-white dark:bg-[#1c1f26]
                  ${index === 0 ? 'md:col-span-2' : ''}
                `}
                >
                  <img
                    src={media.url?.startsWith('http') ? media.url : media.url || ''}
                    alt={media.name || 'Work media'}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </PageLayoutWorkSingle>
    </>
  );
};

export default Work;