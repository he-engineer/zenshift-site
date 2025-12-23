import LegalPage from '../components/LegalPage';
import accessibilityHtml from '../content/accessibility.html?raw';

const AccessibilityPage = () => (
  <LegalPage
    title="Accessibility Statement"
    lastUpdated="January 20, 2025"
    contentHtml={accessibilityHtml}
  />
);

export default AccessibilityPage;
