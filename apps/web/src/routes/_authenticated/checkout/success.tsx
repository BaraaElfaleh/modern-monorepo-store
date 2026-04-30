import { createFileRoute } from '@tanstack/react-router';
import { SuccessPage } from '../../../pages/SuccessPage';

export const Route = createFileRoute('/_authenticated/checkout/success')({
  component: SuccessPage,
});