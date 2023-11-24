import { combineReducers } from 'redux';
import { todoProducts } from './todoProducts';

const ShopApp = combineReducers({
  _todoProduct: todoProducts,
});
export default ShopApp;