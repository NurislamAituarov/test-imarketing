import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import './Nav.scss';

const listArr = ['Product', 'Customers', 'Pricng', 'Resources'];

export function Nav({ setTrigger }) {
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        document.querySelector('.hamburger') &&
        !document.querySelector('.hamburger').contains(event.target)
      ) {
        setTrigger(false);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  const variantsChildren = {
    visible: {
      opacity: 1,
    },
    hidden: { opacity: 0 },
  };

  return (
    <nav className="nav">
      <ul className="flex" ref={ref}>
        {listArr.map((el, i) => {
          return (
            <motion.div variants={variantsChildren} key={i}>
              <li tabIndex={1} className="list">
                {el}
              </li>
            </motion.div>
          );
        })}
      </ul>
    </nav>
  );
}
