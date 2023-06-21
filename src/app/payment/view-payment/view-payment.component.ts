import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/service/booking.service';

@Component({
  selector: 'app-view-payment',
  templateUrl: './view-payment.component.html',
  styleUrls: ['./view-payment.component.css']
})
export class ViewPaymentComponent  implements OnInit{
  constructor( 
    private bookingService : BookingService
    ){}
  
    bookingList: any;
  
    ngOnInit(){
    this.bookingList = this.bookingService.getAllBooking();



    console.log('------Booking List',this.bookingList);
    
    }
}
