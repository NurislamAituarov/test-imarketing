import './Htag.scss';

export function Htag({ tag, children }) {
  switch (tag) {
    case 'h1':
      return <h1 className="h1">{children}</h1>;
    case 'h2':
      return <h2 className="h2">{children}</h2>;
    case 'h3':
      return <h3 className="h3">{children}</h3>;
    case 'h5':
      return <h5 className="h3">{children}</h5>;
    default:
      return <></>;
  }
}
