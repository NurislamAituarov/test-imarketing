import './Main.scss';
import { Button } from '../Button';
import { Triangle } from '../Svg';
import fon from '../../Image/fon.png';
import { Instruments } from '../Instruments';

export default function Main() {
  return (
    <main className="main">
      <div className="information">
        <h1>The Design Thinking superpowers</h1>
        <p>
          Tools, tutorials, design and innovation experts, all in one place! The most intuitive way
          to imagine your next user experience.
        </p>
        <div className="information__btns flex">
          <Button title="Get started" size="m" />
          <div tabIndex="0" className="information__btns_play flex">
            <Triangle />
            <span>Watch the Video</span>
          </div>
        </div>
      </div>
      <img className="information__fon" src={fon} alt="фоновая картинка" />
      <Instruments />
    </main>
  );
}
