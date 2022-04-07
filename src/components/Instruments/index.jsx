import './Instruments.scss';
import cn from 'classnames';
import background from '../../Image/Bg.png';
import { Svg1, Svg2, Svg3, Svg4 } from '../Svg';
import { Button } from '../Button';

const instrumentsSVG = [
  {
    id: 1,
    title: 'First click tests',
    subtitle: 'While most people enjoy casino gambling,',
    svg: <Svg1 />,
  },
  {
    id: 2,
    title: 'Design surveys',
    subtitle: 'Sports betting, lottery and bingo playing for the fun',
    svg: <Svg2 />,
  },
  {
    id: 3,
    title: 'Preference tests',
    subtitle: 'The Myspace page defines the individual.',
    svg: <Svg3 />,
  },
  {
    id: 4,
    title: 'Five second tests',
    subtitle: 'Personal choices and the overall personality of the person. ',
    svg: <Svg4 />,
  },
];

export function Instruments() {
  return (
    <div className="instruments">
      <h2>We design tools to unveil your superpowers</h2>
      <div className="instruments__blog">
        {instrumentsSVG.map((item, i) => {
          return (
            <div key={i} className="instruments__blog_item">
              <div
                className={cn(
                  'instrument__blog_svg',
                  { background1: 1 === item.id },
                  { background2: 2 === item.id },
                  { background3: 3 === item.id },
                  { background4: 4 === item.id },
                )}>
                {item.svg}
              </div>
              <p className="instruments__blog_title">{item.title}</p>
              <p className="instruments__blog_subtitle"> {item.subtitle}</p>
            </div>
          );
        })}
      </div>
      <Button title="SIGN UP NOW" size="m" active={true} />
      <img className="instruments__fon" src={background} alt="задний фон" />
    </div>
  );
}
