import { ArrowUp, ArrowDown } from "react-ionicons";

const stats = [
  {
    name: "Net Income",
    stat: "$71,897",
  },
  {
    name: "Withdrawn",
    stat: "$58.16",
  },
  {
    name: "Pending Clearence",
    stat: "$24.57",
  },
  {
    name: "Available for withdraw",
    stat: "$24.57",
  },
];

export default function Stats() {
  return (
    <div>
      <dl className="mt-5 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow-lg divide-y py-3 divide-gray-200 md:grid-cols-4 md:divide-y-0 md:divide-x">
        {stats.map((item) => (
          <div key={item.name} className="px-4 py-5 sm:p-6">
            <dt className="text-base text-center font-normal text-coolDarkerGreen">
              {item.name}
            </dt>
            <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
              <div className="flex items-center justify-center w-full text-4xl font-semibold text-coolBlack mt-2">
                {item.stat}
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
