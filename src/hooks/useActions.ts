import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

// import * as ActionCreators from '../store/reducers/auth/action-creators';
import { ActionCreators } from '../store/slices'

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(ActionCreators, dispatch);
}
