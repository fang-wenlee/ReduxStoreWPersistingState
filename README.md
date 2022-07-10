# CounterWithRedux: Redux Store with Persisting State

1. npm install redux-persist
2. configure 2 files:
   store.js and index.js
   eg:
   import { persistReducer } from "redux-persist";

   import storage from "redux-persist/lib/storage";

   import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

3. adding Redux DevTools
4. install extension to Browser
5. configure Store file:
   eg: persistedReducer,
   window.**REDUX_DEVTOOLS_EXTENSION** && window.**REDUX_DEVTOOLS_EXTENSION**()
   );
