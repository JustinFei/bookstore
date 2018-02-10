import { User } from './user';
import { CartItem } from './cart-item';

export class ShoppingCart {
	public id: number;
	public grandTotal: number;
	public user: User;
}
