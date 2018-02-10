import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AppConst } from '../../constants/app-const';
import { Book } from '../../models/book';
import { ShoppingCart } from '../../models/shopping-cart';
import { CartItem } from '../../models/cart-item';
import { Order } from '../../models/order';
import { UserBilling } from '../../models/user-billing';
import { UserShipping } from '../../models/user-shipping';
import { UserPayment } from '../../models/user-payment';
import { CartService } from '../../services/cart.service';
import { ShippingService } from '../../services/shipping.service';
import { PaymentService } from '../../services/payment.service';
import { CheckoutService } from '../../services/checkout.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  public serverPath = AppConst.serverPath;
  public yearList = AppConst.yearList;
  public stateList: string[] = Object.keys(AppConst.usStates);
  public selectedBook: Book;
  
  public userShippingList: UserShipping[] = [];
  public userPaymentList: UserPayment[] = [];
  public cartItemList: CartItem[] = [];
  public cartItemNumber: number;
  
  public shoppingCart: ShoppingCart = new ShoppingCart();
  public cartItemUpdated: boolean;
  public userPayment: UserPayment = new UserPayment();
  public userBilling: UserBilling = new UserBilling();
  public userShipping: UserShipping = new UserShipping();
  public payment: UserPayment = new UserPayment();
  public billingAddress: UserBilling = new UserBilling();
  public shippingAddress: UserShipping = new UserShipping();
  
  public selectedTab: number;
  public emptyShippingList = true;
  public emptyPaymentList = true;
  public shippingMethod: string;
  public order: Order = new Order();
  
  constructor(private router: Router, private cartService: CartService, private shippingService: ShippingService, private paymentService: PaymentService, private checkoutService: CheckoutService) { }

  onSelect(book: Book){
	  this.selectedBook = book;
	  this.router.navigate(['/bookDetail/',this.selectedBook.bookId]);
  }
  
  selectedChange(val: number){
	  this.selectedTab = val;
  }
  
  goToPayment(){
	  this.selectedTab = 1;
  }
  
  goToReview(){
	  this.selectedTab = 2;
  }
  
  getCartItemList(){
	  this.cartService.getCartItemList().subscribe(
		res => {
			this.cartItemList = res.json();
			this.cartItemNumber = this.cartItemList.length;
		},
		error => {
			console.log(error.text());
		}
	  );
  }
  
  setShippingAddress(userShipping: UserShipping){
	  this.shippingAddress = userShipping;
  }
  
  setPaymentMethod(userPayment: UserPayment){
	  this.payment = userPayment;
	  this.billingAddress = userPayment.userBilling
  }
  
  setBillingAsShipping(checked: boolean){
	  console.log("same as shipping");
	  if(checked){
		  this.billingAddress.userBillingName = this.shippingAddress.userShippingName;
		  this.billingAddress.userBillingStreet1 = this.shippingAddress.userShippingStreet1;
		  this.billingAddress.userBillingStreet2 = this.shippingAddress.userShippingStreet2;
		  this.billingAddress.userBillingCity = this.shippingAddress.userShippingCity;
		  this.billingAddress.userBillingState = this.shippingAddress.userShippingState;
		  this.billingAddress.userBillingZipcode = this.shippingAddress.userShippingZipcode;
	  }
  }
  
  onSubmit(){
	  this.checkoutService.checkout(this.shippingAddress, this.billingAddress, this.payment, this.shippingMethod).subscribe(
		res => {
			console.log(this.order);
			this.order = res.json();
			
			let navigateExtras: NavigationExtras = {
				queryParams:{
					"order":JSON.stringify(this.order)
				}
			};
			this.router.navigate(['/orderSummary/'], navigateExtras);
		},
		error => {
			console.log(error.text());
		}
	  );
  }
  
  ngOnInit() {
	  this.getCartItemList();
	  
	  this.cartService.getShoppingCart().subscribe(
		res => {
			this.shoppingCart = res.json();
		},
		error => {
			console.log(error.text());
		}
	  );
	  
	  this.shippingService.getUserShippingList().subscribe(
		res => {
			this.userShippingList = res.json();
			if(this.userShippingList.length != 0){
				this.emptyShippingList = false;
				for(let userShipping of this.userShippingList){
					if(userShipping.defaultShipping){
						this.setShippingAddress(userShipping);
						return;
					}
				}
			}	
		},
		error => {
			console.log(error.text());
		}
	  );
	  
	  this.paymentService.getPaymentList().subscribe(
		res => {
			this.userPaymentList = res.json();
			if(this.userPaymentList.length != 0){
				this.emptyPaymentList = false;
				for(let userPayment of this.userPaymentList){
					if(userPayment.defaultPayment){
						this.setPaymentMethod(userPayment);
						return;
					}
				}
			}	
		},
		error => {
			console.log(error.text());
		}
	  );
	  
	  this.payment.type = "";
	  this.payment.expiryMonth = "";
	  this.payment.expiryYear = "";
	  this.billingAddress.userBillingState = "";
	  this.shippingAddress.userShippingState = "";
	  this.shippingMethod = "groundShipping";
  }

}
