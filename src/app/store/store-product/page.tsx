import { Suspense } from "react";
import ProductDetails from "./productDetails";

export default function BookingComboPage() {
  return (
    <Suspense
      fallback={
        <div className="p-10 text-center">Loading booking combo...</div>
      }
    >
      <ProductDetails />
    </Suspense>
  );
}
