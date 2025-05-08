export default function Button({text, file, link}: {text: string; file?: string; link?: string}) {
  let href;

  if (file !== undefined) {
    href = `${file}?dl=`;
  } else if (link !== undefined) {
    href = `${link}`;
  }

  return (
    <a
      href={href !== null ? href : ''}
      className="font-futura text-primary hover:border-primary block border-2 border-white bg-white px-5 py-2.5 text-center text-2xl whitespace-nowrap hover:cursor-pointer hover:bg-transparent hover:text-white"
    >
      {text}
    </a>
  );
}
