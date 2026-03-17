type ImageProps = {
  src: string;
  alt: string;
};

type HeaderProps = {
  image: ImageProps;
  children?: React.ReactNode;
};

export function Header({ image, children }: HeaderProps) {
  return (
    <header>
      <img {...image}/>
      {children}
    </header>
  );
}
