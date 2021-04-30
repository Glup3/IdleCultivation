import { useRecoilState, useRecoilValue } from 'recoil';
import { premiumCurrencyState, totalXPState, xpRateSumState } from '../common/api/state';

const XPCounter = () => {
  const [totalXP] = useRecoilState(totalXPState);
  const [premiumCurrency] = useRecoilState(premiumCurrencyState);
  const xpRateSum = useRecoilValue(xpRateSumState);

  return (
    <aside className="menu">
      <p className="menu-label">Xp Rate</p>
      <ul className="menu-list">
        <li>
          <p>
            {totalXP.toFixed(2)} + {xpRateSum.toFixed(2)}
          </p>
        </li>
      </ul>
      <p className="menu-label">Premium Währung</p>
      <ul className="menu-list">
        <li>
          <p>{premiumCurrency}</p>
        </li>
      </ul>
    </aside>
  );
};

export default XPCounter;
