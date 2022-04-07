import './OurExpert.scss';
import { Htag } from '../HTag';
import avatar from '../../Image/Avator.png';
import avatar1 from '../../Image/Avator1.png';
import avatar2 from '../../Image/Avator2.png';
import avatar3 from '../../Image/Avator3.png';
import avatar4 from '../../Image/Avator4.png';
import oval from '../../Image/Oval.png';
import text from '../../Image/Text.png';
import text1 from '../../Image/Text1.png';
import text2 from '../../Image/Text2.png';
import text3 from '../../Image/Text3.png';
import text4 from '../../Image/Text4.png';

import { Button } from '../Button';
export function OurExpert() {
  return (
    <section className="container__expert">
      <div className="container__expert_contact">
        <Htag tag="h2" children="Need a super hero?" />
        <p>
          Do you require some help for your project: Conception workshop, prototyping, marketing
          strategy, landing page, Ux/UI?
        </p>
        <Button title="Contact our expert" size="m" active={true} />
      </div>
      <div className="container__expert_avatar0 avatar">
        <img src={avatar} alt="avatar" />
        <img className="text text_default" src={text} alt="text" />
      </div>
      <div className="container__expert_avatar1 avatar">
        <img src={avatar1} alt="avatar" />
        <img className="text1 text_default" src={text1} alt="text" />
      </div>
      <div className="container__expert_avatar2 avatar">
        <img src={avatar2} alt="avatar" />
        <img className="text2 text_default" src={text2} alt="text" />
      </div>
      <div className="container__expert_avatar3 avatar">
        <img src={avatar3} alt="avatar" />
        <img className="text3 text_default" src={text3} alt="text" />
      </div>
      <div className="container__expert_avatar4 avatar">
        <img src={avatar4} alt="avatar" />
        <img className="text4 text_default" src={text4} alt="text" />
      </div>

      <img className="container__expert_fon" src={oval} alt="oval" />
    </section>
  );
}
