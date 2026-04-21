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
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 640);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const createPages = () => {
    const pages: (number | string)[] = [];

    if (isMobile) {
      pages.push(1);
      if (totalPages >= 6) {
        const mid = Math.min(Math.max(currentPage, 3), totalPages - 2);
        pages.push("...");
        pages.push(mid - 1, mid);
        pages.push("...");
      }
      pages.push(totalPages);
    } else {
      const mid = Math.min(Math.max(currentPage, 5), totalPages - 4);
      pages.push(1, 2, 3);
      if (totalPages >= 10) {
        pages.push("...");
        pages.push(mid - 1, mid, mid + 1);
        pages.push("...");
      }
      pages.push(totalPages - 2, totalPages - 1, totalPages);
    }

    const seen = new Set<number>();
    return pages.filter((p) => {
      if (p === "...") return true;
      if (seen.has(p as number)) return false;
      seen.add(p as number);
      return true;
    });
  };

  const pages = createPages();

  // 🎨 THEMED BUTTON
  const btnClass = (active: boolean) =>
    `relative border-t-2 transition h-10 sm:h-12 w-8 sm:w-12 text-xs sm:text-sm
    border-transparent
    ${
      active
        ? "text-primary border-primary font-semibold"
        : "text-text-muted hover:text-text hover:border-primary/40"
    }
    dark:text-gray-300 dark:hover:text-white`;

  return (
    <div className="w-full flex items-center justify-between border-t border-border bg-background text-sm transition-colors">

      {/* Previous */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        style={{ width: "100px" }}
        className={`${btnClass(false)} disabled:opacity-30`}
      >
        Previous
      </button>

      {/* Pages */}
      <div className="flex items-center">
        {pages.map((p, i) =>
          p === "..." ? (
            <span
              key={i}
              className="text-text-muted w-6 sm:w-8 text-center text-xs sm:text-sm"
            >
              ...
            </span>
          ) : (
            <button
              key={i}
              onClick={() => onPageChange(Number(p))}
              className={btnClass(p === currentPage)}
            >
              {p}
            </button>
          )
        )}
      </div>

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        style={{ width: "100px" }}
        className={`${btnClass(false)} disabled:opacity-30`}
      >
        Next
      </button>
    </div>
  );
};