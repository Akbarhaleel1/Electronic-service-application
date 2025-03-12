import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Testimonials from 'views/HomePage/Testimonials';

export default function Homepage({ posts }) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Fast, reliable, and affordable repair services for laptops, mobiles, and electronics. Your devices deserve the best care!"
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <Partners />
          <BasicSection
            imageUrl="/demo-illustration-1.svg"
            title="Expert Repairs for Your Devices"
            overTitle="Why Choose Us?"
          >
            <p>
              We understand how important your devices are to your daily life. Whether it&apos;s a cracked screen, a faulty
              battery, or a software issue, our skilled technicians are here to get you back up and running quickly.{' '}
              <Link href="/services">Explore our repair services</Link> and see why we&apos;re the trusted choice for thousands of happy customers.
            </p>
          </BasicSection>
          <BasicSection
            imageUrl="/demo-illustration-2.svg"
            title="Comprehensive Repair Solutions"
            overTitle="What We Offer"
            reversed
          >
            <p>
              From laptops to smartphones and everything in between, we provide <strong>fast, reliable, and affordable repairs</strong> for all your
              devices. Our services are designed to save you time and money, so you can focus on what matters most.
            </p>
            <ul>
              <li>Laptop screen and keyboard repairs</li>
              <li>Mobile phone screen replacement</li>
              <li>Battery replacement for all devices</li>
              <li>Software troubleshooting and upgrades</li>
              <li>Data recovery and backup services</li>
            </ul>
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          <FeaturesGallery />
          <Features />
          <Testimonials />
          <ScrollableBlogPosts posts={posts} />
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

// Styled components
const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

// Fetch posts at build time
export async function getStaticProps() {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
}