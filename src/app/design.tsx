const Design = () => {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-4">
      <div>
        <h2>1. Colors</h2>
        <ul>
          <li className="text-primary">Primary</li>
        </ul>
      </div>

      <div>
        <h2>2. Fonts</h2>
        <ul>
          <li className="font-thin">Outfit Thin</li>
          <li className="font-normal">Outfit Normal</li>
          <li className="font-bold">Outfit Bold</li>
        </ul>
      </div>
    </div>
  );
};

export default Design;
