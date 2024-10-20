import { ErrorBoundary } from '../../../ErrorBoundary';
import { Header } from '../../../Header';
import { LimioProvider } from '@limio/sdk';
import LimioHeader from '../../../components/limio-header';
import GroupedOffers from '../../../components/grouped-offers';
import LimioFooter from '../../../components/limio-footer';

const HomePage = ({ endpoint, key }) => {
  <div>
    <Header endpoint={endpoint} />
    <div>
      <ErrorBoundary>
        <LimioProvider key={key}>
          <LimioHeader />
          <GroupedOffers />
          <LimioFooter />
        </LimioProvider>
      </ErrorBoundary>
    </div>
  </div>;
};

export default HomePage;
