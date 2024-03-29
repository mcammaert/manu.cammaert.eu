import { useEffect } from 'react';

import { Location, LocationListener, UnregisterCallback } from 'history';
import ReactGA from 'react-ga';
import { useHistory } from 'react-router';

const sendPageView: LocationListener = (location: Location): void => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
};

interface Props {
  children: JSX.Element;
  trackingId?: string;
}
const GAListener = ({ children, trackingId }: Props): JSX.Element => {
  const history = useHistory();

  useEffect((): UnregisterCallback | void => {
    if (trackingId) {
      ReactGA.initialize(trackingId, {
        testMode: process.env.NODE_ENV !== 'production',
      });
      sendPageView(history.location, 'REPLACE');
      return history.listen(sendPageView);
    }
    return undefined;
  }, [history, trackingId]);

  return children;
};

export default GAListener;
