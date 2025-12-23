import LegalPage from '../components/LegalPage';
import termsHtml from '../content/terms.html?raw';

const TermsPage = () => (
  <LegalPage
    title="Terms of Service"
    lastUpdated="September 20, 2025"
    effectiveDate="September 20, 2025"
    contentHtml={termsHtml}
  />
);

export default TermsPage;
