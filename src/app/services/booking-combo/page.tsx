import { Suspense } from "react";
import ComboBookingClient from "./comboBookingClinet";

export default function BookingComboPage() {
  return (
    <Suspense
      fallback={
        <div className="p-10 text-center">Loading booking combo...</div>
      }
    >
      <ComboBookingClient />
    </Suspense>
  );
}
