"use client";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import Nav from "@/app/components/Nav";

// Sample package data
const packageDeals = [
  {
    id: "1",
    name: "Birthday Combo",
    items: [
      "Birthday cake (2-tier)",
      "Balloon & backdrop decoration",
      "Catering for 50 guests",
      "Gift table setup",
    ],
    optionalAdditions: [
      "MC or hype-person",
      "Games and activity table",
      "Clown or mascot (for kids)",
      "Photo booth",
      "Customized souvenirs",
      "Party packs",
    ],
  },
  {
    id: "2",
    name: "Wedding Classic",
    items: [
      "Wedding cake (3-tier)",
      "Venue decoration (traditional + white)",
      "Catering for 100 guests",
      "Bridal shower setup",
      "Car decorations",
    ],
    optionalAdditions: [
      "MC + DJ ",
      "Bridal makeup & hairstyling ",
      "Stage, canopies, chairs rentals",
      "Photography & videography",
      "Live band",
      "Souvenirs",
      "Cocktail & mocktail bar",
    ],
  },
  {
    id: "3",
    name: "Burial Combo",
    items: [
      "Funeral paurlor decoration",
      "Venue decoration (white/gold/black theme)",
      "Canopy, chairs, stage setup",
      "Catering for 100 guests",
      "Condolence banner & photo frame",
    ],
    optionalAdditions: [
      "Live gospel band or choir",
      "Casket & pallbearer coordination",
      "Hearse transportation",
      "Tents for extended family",
      "Condolence register setup",
      "Media coverage (photo/video)",
    ],
  },
  {
    id: "4",
    name: "Naming Ceremony Combo",
    items: [
      "Baby welcome decoration (blue/pink theme)",
      "Catering for 70 guests",
      "Chair & canopy setup",
      "Customized banner or backdrop",
      "Cake & snacks table",
    ],
    optionalAdditions: [
      "Sound system",
      "Photo booth",
      "MC & DJ",
      "Customized souvenirs (baby-themed)",
      "Traditional naming rites support",
    ],
  },

  {
    id: "5",
    name: "Housewarming Combo",
    items: [
      "Home blessing setup (Christian/Muslim)",
      "Light venue decoration (indoors & outdoors)",
      "Catering for 50 guests",
      "Refreshments: drinks, water, small chops",
      "Canopy + chairs setup",
    ],
    optionalAdditions: [
      "Music setup with speaker ",
      "Professional MC",
      "Live cooking station",
      "Souvenirs (branded)",
      "House tour assistant",
    ],
  },
];

// Add more packages if needed
export default function BookingComboPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const packageId = searchParams.get("packageId");

  const selectedPackage = packageDeals.find((pkg) => pkg.id === packageId);

  const [selectedItems, setSelectedItems] = useState<string[]>(
    selectedPackage ? [...selectedPackage.items] : []
  );

  const [newItem, setNewItem] = useState("");
  const [attendees, setAttendees] = useState(50);
  const [eventDate, setEventDate] = useState("");
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");
  const [selectPackage, setSelectPackage] = useState(
    selectedPackage?.name ?? ""
  );
  const [availableAdditions, setAvailableAdditions] = useState<string[]>([]);

  // OPTIONAL: Update selectedItems when manually choosing another package
  useEffect(() => {
    const matched = packageDeals.find((pkg) => pkg.name === selectPackage);
    if (matched) setSelectedItems([...matched.items]);
  }, [selectPackage]);

  // Reset state when package changes
  useEffect(() => {
    if (selectedPackage) {
      setSelectedItems([...selectedPackage.items]);
      setAvailableAdditions([...selectedPackage.optionalAdditions]);
    }
  }, [packageId, setSelectPackage]);

  // // Handle new item addition
  //   const handleAddItem = () => {
  //     const trimmed = newItem.trim();
  //     if (trimmed && !selectedItems.includes(trimmed)) {
  //       setSelectedItems([...selectedItems, trimmed]);
  //       setNewItem("");
  //     }
  //   };

  //     // Handle item removal
  //   const handleItemRemove = (index: number) => {
  //     const updated = [...selectedItems];
  //     updated.splice(index, 1);
  //     setSelectedItems(updated);
  //   };
  const handleItemRemove = (item: string) => {
    setSelectedItems((prev) => prev.filter((i) => i !== item));
    setAvailableAdditions((prev) => [...prev, item]);
  };

  // Add addition to package (remove from additions)

  const handleAddItem = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const addition = e.target.value;
    if (!addition) return;
    setSelectedItems((prev) => [...prev, addition]);
    setAvailableAdditions((prev) => prev.filter((i) => i !== addition));
    // Reset select
    e.target.selectedIndex = 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      packageId,
      packageName: selectPackage,
      selectedItems,
      attendees,
      eventDate,
      location,
      notes,
    };
    console.log("Submitted:", payload);
    alert("Booking submitted successfully!");
  };

  // Update selectedItems when package changes
  useEffect(() => {
    if (selectedPackage) {
      setSelectedItems([...selectedPackage.items]);
    }
  }, [packageId]);
  const handlePackageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newId = e.target.value;
    router.push(`/services/booking-combo?packageId=${newId}`);
  };

  if (!selectedPackage) {
    return (
      <div className="p-10 text-red-600 font-semibold">Package not found.</div>
    );
  }

  return (
    <>
      <Nav />
      <div className="bg-[#FFF8F3] min-h-screen py-12 px-6 sm:px-10 lg:px-20">
        <Link
          href="/services/package-deals"
          className="inline-block mb-8 text-[#C49A6C] hover:underline"
        >
          ← Back to Package Deals
        </Link>

        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md">
          <h1 className="text-3xl font-bold text-[#3E2F21] mb-2">
            Book “{selectedPackage.name}”
          </h1>
          <p className="text-[#5C3B1E] mb-6">
            Customize your package by adding or removing items. We’ll make it
            just right for your event.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Combo Select */}
            <div>
              <label className="block text-sm font-semibold text-[#3E2F21] mb-2">
                Select Combo Package
              </label>
              <select
                id="combo-select"
                value={selectedPackage.id}
                onChange={handlePackageChange}
                className="w-full border border-[#C49A6C] rounded-lg p-3 text-[#3E2F21]"
              >
                {packageDeals.map((pkg) => (
                  <option key={pkg.id} value={pkg.id}>
                    {pkg.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Item List */}
            <div>
              <label className="block text-sm font-semibold text-[#3E2F21] mb-2">
                Customize Package Items
              </label>
              <ul className="mb-3 space-y-1">
                {selectedItems.map((item, i) => (
                  <li
                    key={i}
                    className="flex justify-between items-center bg-[#FFF3E5] rounded-lg px-3 py-2 text-sm text-[#5C3B1E]"
                  >
                    {item}
                    <button
                      className="ml-2 text-xs text-red-600 hover:underline"
                      onClick={() => handleItemRemove(item)}
                      type="button"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
              <label
                htmlFor="additions-select"
                className="block mb-2 font-semibold"
              >
                Add Optional Addition:
              </label>
              <select
                id="additions-select"
                onChange={handleAddItem}
                className="w-full border border-[#C49A6C] rounded-lg p-3 mb-6 text-[#3E2F21]"
                defaultValue=""
              >
                <option value="" disabled>
                  Select an addition...
                </option>
                {availableAdditions.map((addition) => (
                  <option key={addition} value={addition}>
                    {addition}
                  </option>
                ))}
              </select>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Add custom item"
                  value={newItem}
                  onChange={(e) => setNewItem(e.target.value)}
                  className="flex-1 border border-[#C49A6C] rounded-lg px-3 py-2 text-sm"
                />
                <button
                  type="button"
                  onClick={() => {
                    const trimmed = newItem.trim();
                    if (trimmed && !selectedItems.includes(trimmed)) {
                      setSelectedItems([...selectedItems, trimmed]);
                      setNewItem("");
                    }
                  }}
                  className="bg-[#C49A6C] text-white px-4 py-2 rounded-lg text-sm font-semibold"
                >
                  Add
                </button>
              </div>
            </div>

            {/* Attendees */}
            <div>
              <label className="block font-semibold text-[#3E2F21] mb-2">
                Number of Attendees
              </label>
              <input
                type="number"
                value={attendees}
                onChange={(e) => setAttendees(Number(e.target.value))}
                className="w-full border border-[#C49A6C] rounded-lg px-3 py-2 text-sm"
                min={1}
                max={1000}
              />
            </div>

            {/* Event Date */}
            <div>
              <label className="block font-semibold text-[#3E2F21] mb-2">
                Event Date
              </label>
              <input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full border border-[#C49A6C] rounded-lg px-3 py-2 text-sm"
              />
            </div>

            {/* Location */}
            <div>
              <label className="block font-semibold text-[#3E2F21] mb-2">
                Event Location
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Owerri, Imo State"
                className="w-full border border-[#C49A6C] rounded-lg px-3 py-2 text-sm"
              />
            </div>

            {/* Notes */}
            <div>
              <label className="block font-semibold text-[#3E2F21] mb-2">
                Additional Notes
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                placeholder="Color themes, allergies, delivery time, etc."
                className="w-full border border-[#C49A6C] rounded-lg px-3 py-2 text-sm"
              />
            </div>

            {/* Submit */}
            <div className="pt-4 text-center">
              <button
                type="submit"
                className="bg-[#C49A6C] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#b68654] transition"
              >
                Submit Booking
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
