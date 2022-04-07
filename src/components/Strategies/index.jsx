import './Strategies.scss';
import cn from 'classnames';
import { Htag } from '../HTag';
import marketing1 from '../../Image/marketing1.png';
import marketing2 from '../../Image/marketing2.png';
import marketing3 from '../../Image/marketing3.png';
import { useState } from 'react';

export function Strategies() {
  const [index, setIndex] = useState(2);

  return (
    <section className="container__strategies">
      <Htag tag="h2" children="Marketing Strategies" />
      <p className="cart__item_subtitle">
        Join 40,000+ other marketers and get proven strategies on email marketing
      </p>
      <div className="wrapperBlockSlide">
        <div className="strategies__blockSlide flex">
          <SelectedBlock index={index} />
        </div>
      </div>
      <div className="strategies__nav flex">
        <div
          onClick={() => setIndex(1)}
          style={index === 1 ? { backgroundColor: 'var(--color-yellow)' } : null}
          className="strategies__nav_item"></div>
        <div
          onClick={() => setIndex(2)}
          style={index === 2 ? { backgroundColor: 'var(--color-yellow)' } : null}
          className="strategies__nav_item"></div>
        <div
          onClick={() => setIndex(3)}
          style={index === 3 ? { backgroundColor: 'var(--color-yellow)' } : null}
          className="strategies__nav_item"></div>
      </div>
    </section>
  );
}

function StrategiesBlock1({ index }) {
  return (
    <div className={cn('strategies__blockSlide_item', { fade: index === 1 })}>
      <img src={marketing1} alt="img" />
      <div className="flex">
        By <span> By Abdullah</span> <hr /> 03 March 2019
      </div>
      <h5 className={cn({ active_nav: index === 1 })}>
        Increasing Prosperity With Positive Thinking
      </h5>
    </div>
  );
}
function StrategiesBlock2({ index }) {
  return (
    <div className={cn('strategies__blockSlide_item', { fade: index === 2 })}>
      <img src={marketing2} alt="img" />
      <div className="flex">
        By <span> By Abdullah</span> <hr /> 03 March 2019
      </div>
      <h5 className={cn({ active_nav: index === 2 })}>Motivation Is The First Step To Success</h5>
    </div>
  );
}
function StrategiesBlock3({ index }) {
  return (
    <div className={cn('strategies__blockSlide_item', { fade: index === 3 })}>
      <img src={marketing3} alt="img" />
      <div className="flex">
        By <span> By Abdullah</span> <hr /> 03 March 2019
      </div>
      <h5 className={cn({ active_nav: index === 3 })}>
        Success Steps For Your Personal Or Business Life
      </h5>
    </div>
  );
}

function SelectedBlock({ index }) {
  switch (index) {
    case 1:
      return (
        <>
          <StrategiesBlock3 index={index} />
          <StrategiesBlock1 index={index} />
          <StrategiesBlock2 index={index} />
        </>
      );
    case 2:
      return (
        <>
          <StrategiesBlock1 index={index} />
          <StrategiesBlock2 index={index} />
          <StrategiesBlock3 index={index} />
        </>
      );
    case 3:
      return (
        <>
          <StrategiesBlock2 index={index} />
          <StrategiesBlock3 index={index} />
          <StrategiesBlock1 index={index} />
        </>
      );
    default:
      return (
        <>
          <StrategiesBlock1 index={index} />
          <StrategiesBlock2 index={index} />
          <StrategiesBlock3 index={index} />
        </>
      );
  }
}
