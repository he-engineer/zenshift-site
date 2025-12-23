import LegalPage from '../components/LegalPage';
import deleteHtml from '../content/delete-account.html?raw';

const DeleteAccountPage = () => (
  <LegalPage
    title="Delete Account and Data"
    lastUpdated="October 31, 2025"
    contentHtml={deleteHtml}
  />
);

export default DeleteAccountPage;
