import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { AppConst } from '../../constants/app-const';
import { CartItem } from '../../models/cart-item';
import { Order } from '../../models/order';
import { CheckoutService } from '../../services/checkout.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {

  public serverPath = AppConst.serverPath;
  public order: Order = new Order();
  public estimatedDeliveryDate: string;
  public cartItemList: CartItem[] = [];
  
  constructor(private router: Router, private route: ActivatedRoute, private checkoutService: CheckoutService) { }

  ngOnInit() {
	  this.route.queryParams.subscribe(params => {
		  this.order = JSON.parse(params['order']);
		  
		  let deliveryDate = new Date();
		  if(this.order.shippingMethod == "groundShipping"){
			  deliveryDate.setDate(deliveryDate.getDate() + 5);
		  }else{
			  deliveryDate.setDate(deliveryDate.getDate() + 2);
		  }
		  
		  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		  this.estimatedDeliveryDate = days[deliveryDate.getDay()] + ',' + deliveryDate.getFullYear() + '/' + deliveryDate.getMonth() + '/' + deliveryDate.getDate();
		  
		  this.cartItemList = this.order.cartItemList;
	  });
  }

}
