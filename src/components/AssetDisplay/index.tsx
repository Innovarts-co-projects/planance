import Image from 'next/image';
import { memo } from 'react';

import { AssetDisplayContainer } from './assetDisplayStyles';

interface AssetDisplayProps {

  assetIcon: string;
  assetName: string;
  assetValue: string;
  className: string;
}

function AssetDisplay({
  assetIcon, assetName, assetValue, className,
}: AssetDisplayProps) {

  return (
    <AssetDisplayContainer className={className}>
      <header>
        <div className="asset-icon">
          <Image src={assetIcon} layout="raw" />
        </div>
        <h3>{assetName}</h3>
      </header>
      <main>
        <h4 className="asset-value">
          {assetValue}
        </h4>
      </main>
    </AssetDisplayContainer>
  );
}

export default memo(AssetDisplay);
