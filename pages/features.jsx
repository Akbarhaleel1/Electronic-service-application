import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Page from 'components/Page';
import SectionTitle from 'components/SectionTitle';
import YoutubeVideo from 'components/YoutubeVideo';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/grid-icons/asset-5.svg', // Update with your icon path
    title: 'Laptop Repairs',
    description:
      'From cracked screens to faulty keyboards, we provide fast and reliable laptop repairs. Our skilled technicians use high-quality parts to ensure your device works like new.',
  },
  {
    imageUrl: '/grid-icons/asset-5.svg', // Update with your icon path
    title: 'Mobile Repairs',
    description:
      'Broken screen? Battery issues? We offer quick and affordable mobile repairs for all major brands. Get your phone back in perfect condition in no time.',
  },
  {
    imageUrl: '/grid-icons/asset-5.svg', // Update with your icon path
    title: 'Electronics Repairs',
    description:
      'We repair a wide range of electronics, including tablets, gaming consoles, and more. Trust us to fix your devices with precision and care.',
  },
  {
    imageUrl: '/grid-icons/asset-5.svg', // Update with your icon path
    title: 'Data Recovery',
    description:
      'Lost important files? Our data recovery services can help you retrieve your valuable data from damaged or corrupted devices.',
  },
  {
    imageUrl: '/grid-icons/asset-5.svg', // Update with your icon path
    title: 'Software Troubleshooting',
    description:
      'Experiencing software issues? We diagnose and fix problems like viruses, slow performance, and system errors to get your device running smoothly.',
  },
  {
    imageUrl: '/grid-icons/asset-5.svg', // Update with your icon path
    title: 'Preventive Maintenance',
    description:
      'Keep your devices in top condition with our preventive maintenance services. We clean, optimize, and update your devices to prevent future issues.',
  },
  {
    imageUrl: '/grid-icons/asset-5.svg', // Update with your icon path
    title: 'Hardware Upgrades',
    description:
      'Upgrade your device’s hardware for better performance. We offer RAM upgrades, SSD installations, and more to enhance your device’s capabilities.',
  },
  {
    imageUrl: '/grid-icons/asset-5.svg', // Update with your icon path
    title: 'Warranty Support',
    description:
      'We provide warranty support for all repairs. If any issues arise after the repair, we’ll fix them at no extra cost.',
  },
  {
    imageUrl: '/grid-icons/onsite-support.svg', // Update with your icon path
    title: 'On-Site Support',
    description:
      'Need repairs at your location? Our on-site support team will come to you and fix your devices wherever you are.',
  },
];

export default function FeaturesPage() {
  return (
    <Page title="Our Services" description="Explore our comprehensive repair and maintenance services for laptops, mobiles, and electronics.">
      <Wrapper>
        <SectionTitle>Why Choose Us?</SectionTitle>
        <YoutubeVideo url="https://www.youtube.com/watch?v=BggrpKfqh1c" />
        <CustomAutofitGrid>
          {FEATURES.map((singleFeature, idx) => (
            <BasicCard key={singleFeature.title} {...singleFeature} />
          ))}
        </CustomAutofitGrid>
      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 10rem;
  }
`;

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;