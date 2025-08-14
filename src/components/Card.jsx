export default function Card({ title, image, children }) {
  return (
    <div className="rounded-2xl shadow-md bg-white dark:bg-stone-900 overflow-hidden">
      <div className="w-full h-48 relative group">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-110 group-hover:opacity-85"
        />
        <p className="absolute inset-0 flex items-center justify-center text-black dark:text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Ver mais
        </p>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold dark:text-white">{title}</h2>
        <p className="mt-2 text-sm">{children}</p>
      </div>
    </div>
  );
}
