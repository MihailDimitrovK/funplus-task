import { StyledStat } from './Stat.styles';

function Stat({ title, amount, img }) {
  return (
    <StyledStat>
      <div>
        <div>{amount}</div>
        <div>{title}</div>
      </div>

      <img src={require(`../../../assets/${img}`)} alt={title} />
    </StyledStat>
  );
}

export { Stat };
