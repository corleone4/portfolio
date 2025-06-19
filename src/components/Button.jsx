export default function Button({children, ...props}){
    return <button {...props} className="bg-transparent text-black dark:text-white p-2.5 rounded-sm dark:ring-gray-200 ring-1 ring-stone-800 hover:ring-cyan-500">{children}</button>;
}