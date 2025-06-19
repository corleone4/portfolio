export default function Card({ title, image, children }) {
  return (
    <div className="px-8 overflow-auto py-2 flex flex-col justify-center items-center rounded-md bg-gray-300 dark:bg-stone-800">
      <h2 className="text-xl lg:text-2xl font-bold text-stone-900 dark:text-gray-100 hover:text-black dark:hover:text-white ">
        {title}
      </h2>
      <img className="lg:size-36 sm:size-12 w-full mx-auto rounded-sm" src={image} />
      {children}
    </div>
  );
}
