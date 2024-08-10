interface IDescriptionProps {
  className?: string;
}

export const Description = ({ className = "" }: IDescriptionProps) => {
  return (
    <p className={`${className} description`}>
      Get the medicine to help you feel better, get back to your active life,
      and enjoy every moment.
    </p>
  );
};
