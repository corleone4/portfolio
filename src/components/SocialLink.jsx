export default function SocialLink({ href, icon, text }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 transition rounded-lg text-gray-200"
    >
      <span className="text-xl">{icon}</span>
      <span>{text}</span>
    </a>
  );
}