import './Cart.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import cart1 from '../../Image/cart1.png';
import cart2 from '../../Image/cart2.png';
import cart3 from '../../Image/cart3.png';
import { Path } from '../Svg';
import { Htag } from '../HTag';

export function Cart() {
  return (
    <section className="container__cart">
      <div className="cart__item flex">
        <CartInformation />
        <LazyLoadImage effect="blur" src={cart1} alt="img" />
      </div>
      <div className="cart__item flex">
        <LazyLoadImage effect="blur" src={cart2} alt="img" />
        <CartInformationSecond />
      </div>
      <div className="cart__item flex">
        <CartInformationThird />
        <LazyLoadImage effect="blur" src={cart3} alt="img" />
      </div>
    </section>
  );
}

export function CartInformation() {
  return (
    <div className="cart__item_information">
      <p className="cart__item_subtitle">Effortless Validation for</p>
      <Htag tag="h2" children="Design Professionals" />
      <p className="cart__item_subtitle">
        The Myspace page defines the individual, his or her characteristics, traits, personal
        choices and the overall personality of the person.{' '}
      </p>
      <h5>Accessory makers</h5>
      <p className="cart__item_subtitle">
        While most people enjoy casino gambling, sports betting, lottery and bingo playing for the
        fun
      </p>
      <h5>Alterationists</h5>
      <p className="cart__item_subtitle">
        If you are looking for a new way to promote your business that won’t cost you more money,
      </p>
      <h5>Custom Design designers</h5>
      <p className="cart__item_subtitle">
        If you are looking for a new way to promote your business that won’t cost you more money,
      </p>
    </div>
  );
}
export function CartInformationSecond() {
  return (
    <div className="cart__item_information">
      <p className="cart__item_subtitle">Easier decision making for</p>
      <Htag tag="h2" children="Product Managers" />
      <p className="cart__item_subtitle">
        The Myspace page defines the individual, his or her characteristics, traits, personal
        choices and the overall personality of the person.
      </p>
      <div className="cart__item_additionally flex">
        <div className="cart__item_svg flex">
          <Path />
        </div>
        <p className="cart__item_subtitle">Never worry about overpaying for your energy again.</p>
      </div>
      <div className="cart__item_additionally flex">
        <div className="cart__item_svg flex">
          <Path />
        </div>
        <p className="cart__item_subtitle">
          We will only switch you to energy companies that we trust and will treat you right
        </p>
      </div>
      <div className="cart__item_additionally flex">
        <div className="cart__item_svg flex">
          <Path />
        </div>
        <p className="cart__item_subtitle">
          We track the markets daily and know where the savings are.
        </p>
      </div>
    </div>
  );
}
export function CartInformationThird() {
  return (
    <div className="cart__item_information">
      <p className="cart__item_subtitle">Optimisation for</p>
      <Htag tag="h2" children="Marketers" />
      <p className="cart__item_subtitle">
        Few would argue that, despite the advancements of feminism over the past three decades,
        women still face a double standard when it comes to their behavior.{' '}
      </p>
      <h5>Accessory makers</h5>
      <p className="cart__item_subtitle">
        While most people enjoy casino gambling, sports betting, lottery and bingo playing for the
        fun
      </p>
      <h5>Alterationists</h5>
      <p className="cart__item_subtitle">
        If you are looking for a new way to promote your business that won’t cost you more money,{' '}
      </p>
      <h5>Custom Design designers</h5>
      <p className="cart__item_subtitle">
        If you are looking for a new way to promote your business that won’t cost you more money,{' '}
      </p>
    </div>
  );
}
