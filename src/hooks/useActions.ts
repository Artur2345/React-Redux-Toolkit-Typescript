import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { allActionCreators } from '../store/slices'
import { AppDispatch } from '../store';

const useActions = () => {
  const dispatch = useDispatch<AppDispatch>();
  return bindActionCreators(allActionCreators, dispatch);
}

export default useActions;
