declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'radix-connect-button': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

const Header = () => {
  return (
    <div className="flex items-center justify-between [--radix-connect-button-width:100px] sm:[--radix-connect-button-width:138px]">
      <h1 className="font-bold text-primary">Radix React Nx Demo</h1>
      <span className="font-thin">{import.meta.env.MODE}</span>
      <radix-connect-button />
    </div>
  );
};

export default Header;
