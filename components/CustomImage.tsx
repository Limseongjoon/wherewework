import Image from 'next/image';

const CustomImage = ({
  className = '',
  src = '',
  alt = '',
  priority,
}: {
  className?: string;
  src?: string; // /images/ 뒤에 붙는 걸로
  alt?: string;
  priority?: boolean;
}) => {
  return (
    <Image
      className={className}
      src={src}
      alt={alt}
      width={1}
      height={1}
      sizes="100vw"
      priority={priority}
    />
  );
};

export default CustomImage;
