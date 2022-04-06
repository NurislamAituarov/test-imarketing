import cn from 'classnames';
import './Button.scss';

export function Button({ title, size, click }) {
  return (
    <button
      onClick={click}
      className={cn('btn', {
        s: size === 's',
        m: size === 'm',
      })}>
      {title}
    </button>
  );
}
