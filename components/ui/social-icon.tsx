const SocialIcon = ({
  icon,
  href,
  color,
}: {
  icon: React.ReactNode;
  href: string;
  color: string;
}) => {
  return (
    <>
      <a
        href={href}
        className={`w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-xl ${color}`}
      >
        {icon}
      </a>
    </>
  );
};

export default SocialIcon;
