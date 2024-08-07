import { MagicButtonProps } from './types';

export function MagicButton(props: MagicButtonProps) {
  const { text, icon, position = 'right', handleClick, otherClasses } = props;
  return (
    <button
      className="relative mt-5 inline-flex h-12 w-full overflow-hidden rounded-lg p-[3px] md:mt-10 md:w-60"
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-slate-100 px-7 text-sm font-medium text-purple-950 backdrop-blur-3xl dark:bg-slate-950 dark:text-slate-200 ${otherClasses}`}
      >
        {position === 'left' && icon}
        {text}
        {position === 'right' && icon}
      </span>
    </button>
  );
}

export default MagicButton;
