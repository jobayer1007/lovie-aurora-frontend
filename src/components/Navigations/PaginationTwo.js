import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { ArrowBack, ArrowForward } from "react-ionicons";

// Example items, to simulate fetching from another resources.
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div>
            <h3>Item #{item}</h3>
          </div>
        ))}
    </>
  );
}

export default function PaginatedItems({ itemsPerPage }) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(10);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div className="relative pb-10">
      <ReactPaginate
        breakLabel="..."
        nextLabel={
          <p className="flex items-center gap-2 text-sm">
            Next
            <ArrowForward />
          </p>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={10}
        previousLabel={
          <p className="flex items-center gap-2 text-sm">
            <ArrowBack />
            Previous
          </p>
        }
        renderOnZeroPageCount={null}
        containerClassName={
          " absolute flex transform -translate-x-1/2 left-1/2"
        }
        pageClassName={
          "border-transparent text-coolBlack border-t-2 px-4 inline-flex items-center text-sm font-medium"
        }
        activeClassName={
          "border-t-2 border-[#E84414] text-coolOrange hover:text-gray-700 hover:border-gray-300  px-4 inline-flex items-center text-sm font-medium"
        }
      />
    </div>
  );
}
