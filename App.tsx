import React from 'react';
import RootNavigator from './src/Stacks/Root'
import {AuthProvider} from './src/database/authContext';

function App(): React.JSX.Element {
  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
}

export default App;
