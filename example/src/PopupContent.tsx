interface PopUpContentProps {
  area: string | undefined;
}

export const PopUpContent = ({ area }: PopUpContentProps) => {
  return <strong>{area}</strong>;
};
