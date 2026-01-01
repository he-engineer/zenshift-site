import { Metadata } from 'next';
import DeleteAccountContent from './DeleteAccountContent';

export const metadata: Metadata = {
  title: 'Delete Account - ZenShift',
  description: 'Learn how to permanently delete your ZenShift meditation app account and all associated data.',
  robots: 'noindex, follow',
};

export default function DeleteAccountPage() {
  return <DeleteAccountContent />;
}
