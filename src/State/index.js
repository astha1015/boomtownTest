import { createGlobalState } from 'react-hooks-global-state';

const{ setGlobalState, useGlobalState } = createGlobalState({
    data: [],
});

export {setGlobalState, useGlobalState};
