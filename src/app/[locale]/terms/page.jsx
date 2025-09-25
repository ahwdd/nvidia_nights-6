"use client";

import TermsContent from "@/components/Terms/TermsContent";

export default function TermsPage({locale}) {
    console.log('locale :>> ', locale);
  return (
    <div className="container mx-auto px-4 py-8">
      <TermsContent />
    </div>
  );
}
