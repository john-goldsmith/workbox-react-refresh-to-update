import * as serviceWorker from '../sw-registration';
import React, { FC, useEffect, useState } from 'react';

const RegisterServiceWorker: FC = () => {
  const [showReload, setShowReload] = useState(false);
  const [waitingWorker, setWaitingWorker] = useState<ServiceWorker | null>(null);

  const onSWUpdate = (registration: ServiceWorkerRegistration) => {
    setShowReload(true);
    setWaitingWorker(registration.waiting);
  };

  useEffect(() => {
    serviceWorker.register({ onUpdate: onSWUpdate });
  }, []);

  const refresh = () => {
    waitingWorker?.postMessage({ type: 'SKIP_WAITING' });
    setShowReload(false);
    window.location.reload();
  };

  return (
    <>
      {showReload &&
        <div className="update">
          <span>Update available!</span>
          <button onClick={refresh}>Refresh</button>
        </div>
      }
    </>
  );
}

export default RegisterServiceWorker;
