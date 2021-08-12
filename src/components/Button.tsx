type Props = {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Button({ text, onClick }: Props) {
  return (
    <button type="button" onClick={onClick}>
      {text}
    </button>
  );
}
