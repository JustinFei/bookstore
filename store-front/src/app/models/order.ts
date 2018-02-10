import { CartItem } from './cart-item';
import { UserShipping } from './user-shipping';
import { UserBilling } from './user-billing';
import { UserPayment } from './user-payment';

export class Order {
	public id: number;
	public orderDate: string;
	public shippingDate: string;
	public shippingMethod: string;
	public orderStatus: string;
	public orderTotal: number;
	public cartItemList: CartItem[];
	public shippingAddress: UserShipping;
	public billingAddress: UserBilling;
	public payment: UserPayment;
}
