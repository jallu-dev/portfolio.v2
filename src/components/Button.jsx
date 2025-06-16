const Button = ({ content, link }) => {
  return (
    <a
      href={`${link}`}
      target="_blank"
      rel="noopener noreferrer"
      className="text-red-400 inline-block px-2 py-1 my-1 border border-red-400 rounded lg:mb-2 hover:bg-red-400 hover:text-zinc-900 transition-colors"
      aria-label="a link button (opens in new tab)"
    >
      {content}
    </a>
  );
};

export default Button;
