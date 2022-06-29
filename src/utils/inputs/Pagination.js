import { ArrowBack, ArrowForward } from "react-ionicons";

const arr1 = [{ page: 1 }, { page: 2 }, { page: 3 }, { page: 4 }, { page: 5 }, { page: 6 }, { page: 7 }];

const arr2 = [{ page: 121 }, { page: 122 }, { page: 123 }];

export default function Example() {
  return (
    <nav className="mx-auto px-4 flex items-center justify-between sm:px-0">
      <div className="-mt-px w-0 flex-1 flex">
        <button className="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-coolBlack hover:text-gray-700 hover:border-gray-300">
          <ArrowBack />
          Previous
        </button>
      </div>
      <div className="hidden md:-mt-px md:flex">
        {arr1.map((item, index) => (
          <button
            key={index}
            aria-current="page"
            className={`border-${index === 0 ? 'coolOrange' : 'gray-300'} text-${index === 0 ? 'coolOrange' : 'gray-700'} hover:text-coolOrange hover:border-coolOrange border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium`}
          >
            {item.page}
          </button>
        ))}

        <span className="border-gray-300 text-coolBlack border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
          ...
        </span>
        {arr2.map((item, index) => (
          <button
            key={index}
            aria-current="page"
            className="border-gray-300 text-gray-700 hover:text-coolOrange hover:border-coolOrange border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
          >
            {item.page}
          </button>
        ))}
      </div>
      <div className="-mt-px w-0 flex-1 flex justify-end">
        <button className="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-coolBlack hover:text-gray-700 hover:border-gray-300">
          Next
          <ArrowForward />
        </button>
      </div>
    </nav>
  );
}
