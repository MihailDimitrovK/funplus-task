import { Stat } from '../Stat/Stat';
import data from '../../../data/stat.json';
import { StyledStatList } from './StatList.styles';

function StatList() {
  const list = data.data.map(({ title, amount, img }, indx) => (
    <Stat key={indx} title={title} amount={amount} img={img} />
  ));

  return <StyledStatList>{list}</StyledStatList>;
}

export { StatList };
