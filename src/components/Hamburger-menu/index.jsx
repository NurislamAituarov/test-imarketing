import { useEffect, useRef } from 'react';
import './Hamburger.scss';

export function Hamburger({ trigger, setTrigger }) {
  const refInput = useRef();

  useEffect(() => {
    if (!trigger) {
      refInput.current.checked = false;
    }
  }, [trigger]);

  return (
    <div className="container__hamburger">
      <input ref={refInput} type="checkbox" id="checkbox1" className="checkbox1 visuallyHidden" />
      <label htmlFor="checkbox1">
        <div onClick={() => setTrigger(!trigger)} className="hamburger hamburger1">
          <span className="bar bar1"></span>
          <span className="bar bar2"></span>
          <span className="bar bar3"></span>
          <span className="bar bar4"></span>
        </div>
      </label>
    </div>
  );
}
