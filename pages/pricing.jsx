import styled from 'styled-components';
import Page from 'components/Page';

export default function PricingPage() {
  return (
    <Page title="Pricing" description="Cupidatat et reprehenderit ullamco aute ullamco anim tempor.">
      <Wrapper>
        <div>Pricing Page</div>
      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;