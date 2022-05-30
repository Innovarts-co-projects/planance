import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { FullScreenLoaderContainer, LoadAnimation } from './FullScreenLoaderStyles';

interface FullScreenLoaderProps {

  render: boolean;
}

function FullScreenLoader({ render }: FullScreenLoaderProps) {

  const [documentIsReady, setDocumentIsReady] = useState(false);

  useEffect(() => { if (typeof document === 'object') setDocumentIsReady(true); }, []);

  if (!render) { return null; }

  if (!documentIsReady) {
    return null;
  }

  return createPortal(
    <FullScreenLoaderContainer>
      <main>
        <h1>Planance</h1>
        <LoadAnimation className="cssload-container">
          <ul className="cssload-flex-container">
            <li>
              <span className="cssload-loading" />
            </li>
          </ul>
        </LoadAnimation>
      </main>
    </FullScreenLoaderContainer>,
    document.getElementById('loader-root'),
  );
}

export default FullScreenLoader;
