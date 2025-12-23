import LegalPage from '../components/LegalPage';
import privacyHtml from '../content/privacy-policy.html?raw';

const PrivacyPolicyPage = () => (
  <LegalPage
    title="Privacy Policy"
    lastUpdated="September 20, 2025"
    effectiveDate="September 20, 2025"
    contentHtml={privacyHtml}
  />
);

export default PrivacyPolicyPage;
