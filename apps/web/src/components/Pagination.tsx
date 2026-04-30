import { useState, useEffect } from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' ? window.innerWidth < 640 : false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const createPages = () => {
    const pages: (number | string)[] = [];
    const maxVisible = isMobile ? 4 : 7;

    // إصلاح المنطق: إذا عدد الصفحات أقل من المسموح، اعرضهم كما هم فقط
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");
      
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) pages.push(i);

      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  const pages = createPages();

  // 🎨 THEMED CLASS (Boho)
  const btnClass = (active: boolean) =>
    `relative border-t-2 transition-all h-10 sm:h-12 w-8 sm:w-12 text-xs sm:text-sm flex items-center justify-center
    ${
      active
        ? "text-primary border-primary font-semibold"
        : "text-text-muted border-transparent hover:text-primary hover:border-primary/40"
    }`;

  if (totalPages <= 0) return null;

  return (
    <div className="w-full flex items-center justify-between border-t border-border bg-background text-sm transition-colors">
      
      {/* Previous - تصميمك الأصلي */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        style={{ width: "100px" }}
        className={`${btnClass(false)} disabled:opacity-30 disabled:cursor-not-allowed`}
      >
        Previous
      </button>

      {/* Pages */}
      <div className="flex items-center">
        {pages.map((p, i) =>
          p === "..." ? (
            <span
              key={`dots-${i}`}
              className="text-text-muted w-6 sm:w-8 text-center text-xs sm:text-sm"
            >
              ...
            </span>
          ) : (
            <button
              key={`page-${p}`}
              onClick={() => onPageChange(Number(p))}
              className={btnClass(p === currentPage)}
            >
              {p}
            </button>
          )
        )}
      </div>

      {/* Next - تصميمك الأصلي */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        style={{ width: "100px" }}
        className={`${btnClass(false)} disabled:opacity-30 disabled:cursor-not-allowed`}
      >
        Next
      </button>
    </div>
  );
};