import './Header.scss';
import { motion } from 'framer-motion';
import { Logo } from '../Svg';
import { Button } from '../Button';
import { Nav } from '../Nav';
import { useEffect, useState } from 'react';
import { Hamburger } from '../Hamburger-menu';

const btnArr = ['Sign In', 'Sign Up'];

export default function Header() {
  const [resize, setResize] = useState(true);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    function onResize() {
      if (window.innerWidth > 926) {
        setResize(true);
        setTrigger(false);
      }
      if (window.innerWidth < 926) {
        setResize(false);
      }
    }
    onResize();
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);
  const variants = {
    visible: {
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    hidden: {},
  };

  return (
    <header className="header flex">
      <div className="header__logo flex">
        <Logo />
      </div>
      <div className="nav__container flex">
        {resize && <Nav />}
        <div className="header__btns">
          {btnArr.map((el, i) => {
            return <Button key={i} title={el} size="s" />;
          })}
        </div>
        {!resize && <Hamburger trigger={trigger} setTrigger={setTrigger} />}
      </div>

      {trigger && (
        <motion.div
          layout
          variants={variants}
          initial={'hidden'}
          animate={trigger ? 'visible' : 'hidden'}
          className="header__menuList">
          <Nav setTrigger={setTrigger} />
        </motion.div>
      )}
    </header>
  );
}
