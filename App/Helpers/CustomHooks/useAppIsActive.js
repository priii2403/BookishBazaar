import {useCallback, useEffect, useRef} from 'react';
import {AppState} from 'react-native';

export default callback => {
  const appStateRef = useRef(AppState.currentState);
  const handleAppStateChange = useCallback(nextAppState => {
    if (
      appStateRef.current.match(/inactive|background/) &&
      nextAppState === 'active' &&
      !!callback
    ) {
      callback();
    }

    appStateRef.current = nextAppState;
  }, []);

  useEffect(() => {
    const subscribe = AppState.addEventListener('change', handleAppStateChange);
    return () => {
      !!handleAppStateChange && subscribe.remove();
    };
  }, []);
};
