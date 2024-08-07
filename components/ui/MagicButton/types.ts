export type MagicButtonProps = {
  text: string;
  icon: React.ReactNode;
  position?: 'left' | 'right';
  handleClick?: () => void;
  otherClasses?: string;
};
