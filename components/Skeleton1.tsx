import React from "react";

export default function SkeletonTable() {
  return (
    <section className="bg-white py-5 dark:bg-neutral-900">
      <div className="container mx-auto">
        <div className="w-full max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-4">
            {/* Row 1 */}
            <div className="h-6 p-4 rounded bg-gradient-to-r from-neutral-200 to-neutral-400 dark:from-neutral-700 dark:to-neutral-900 animate-pulse"></div>
            <div className="h-6 p-4 rounded bg-gradient-to-r from-neutral-200 to-neutral-400 dark:from-neutral-700 dark:to-neutral-900 animate-pulse"></div>
            <div className="h-6 p-4 rounded bg-gradient-to-r from-neutral-200 to-neutral-400 dark:from-neutral-700 dark:to-neutral-900 animate-pulse"></div>

            {/* Row 2 */}
            <div className="h-6 p-4 rounded bg-gradient-to-r from-neutral-200 to-neutral-400 dark:from-neutral-700 dark:to-neutral-900 animate-pulse"></div>
            <div className="h-6 p-4 rounded bg-gradient-to-r from-neutral-200 to-neutral-400 dark:from-neutral-700 dark:to-neutral-900 animate-pulse"></div>
            <div className="h-6 p-4 rounded bg-gradient-to-r from-neutral-200 to-neutral-400 dark:from-neutral-700 dark:to-neutral-900 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}