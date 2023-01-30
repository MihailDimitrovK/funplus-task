import { Card } from '../../../../components/Card/Card';
import { Button } from '../../../../components/Button/Button';
import { StyledHeader } from './Header.styles';
import heroImg from '../../assets/hero-img.png';
import { FaPlus } from 'react-icons/fa';

function Header() {
  return (
    <StyledHeader>
      <Card>
        <div>
          <h1>
            <span>Just for</span>
            <span> fun</span>
          </h1>
        </div>
        <div>
          <p>We Create Leading Innovative and Fun Experiences Worldwide</p>
        </div>
        <Button icon={<FaPlus />}>Do this</Button>
      </Card>

      <Card flex>
        <img src={heroImg} alt="Hero" />
      </Card>
    </StyledHeader>
  );
}

export { Header };
