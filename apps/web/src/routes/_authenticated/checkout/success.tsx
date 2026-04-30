import { createFileRoute } from '@tanstack/react-router';
import { SuccessPage } from '../../../pages/SuccessPage';

// 1. بنعرف واجهة (Interface) لشكل البيانات اللي بالرابط
interface OrderSearch {
  id: string;
}

export const Route = createFileRoute('/_authenticated/checkout/success')({
  // 2. بنضيف فحص للـ Search Params
  validateSearch: (search: Record<string, unknown>): OrderSearch => {
    return {
      // إذا لقي id بالرابط بياخده، وإذا ما لقي بنحط قيمة افتراضية أو فاضية
      id: (search.id as string) || '',
    };
  },
  component: SuccessPage,
});