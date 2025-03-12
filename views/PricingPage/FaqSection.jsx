import styled from 'styled-components';
import Accordion from 'components/Accordion';
import SectionTitle from 'components/SectionTitle';

export default function FaqSection() {
  return (
    <Wrapper>
      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <Accordion title="What services do you offer?">
        We provide expert repair services for mobile phones, tablets, laptops, and other electronic devices. Our team ensures quick and reliable fixes with high-quality parts.
      </Accordion>
      <Accordion title="How long does a repair take?">
        Repair times vary depending on the issue. Most standard repairs, like screen replacements, take 30-60 minutes, while more complex issues may require additional time.
      </Accordion>
      <Accordion title="Do you offer a warranty on repairs?">
        Yes! We provide a warranty on all our repair services. The duration depends on the type of repair, ensuring peace of mind for our customers.
      </Accordion>
      <Accordion title="Can I get a repair at my location?">
        Absolutely! We offer on-site repair services for certain devices and locations. Contact us to check availability and schedule an appointment.
      </Accordion>
      <Accordion title="How much will my repair cost?">
        The cost varies based on the device and issue. Please reach out to us with your device details, and we will provide a transparent price estimate.
      </Accordion>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 15rem;
  & > *:not(:first-child) {
    margin-top: 3rem;
  }
`;