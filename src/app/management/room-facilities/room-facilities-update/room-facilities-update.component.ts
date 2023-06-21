import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomFacilities } from 'src/app/model/roomfacilities.model';
import { RoomFacilitiesService } from 'src/app/service/room-facilities.service';

@Component({
  selector: 'app-room-facilities-update',
  templateUrl: './room-facilities-update.component.html',
  styleUrls: ['./room-facilities-update.component.css']
})
export class RoomFacilitiesUpdateComponent {



  id: number = 0;
  rf: RoomFacilities = new RoomFacilities();

  constructor(private roomFacService: RoomFacilitiesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.roomFacService.getRoomFacById(this.id).subscribe(
      data => {
        this.rf = data;
      }
    );
  }

  
  roomFacilitiesUpdate(){
    this.roomFacService.updateRoomFacilities(this.id, this.rf).subscribe(
      data => alert('Roomfacilities updated successfull!!'),
       error => alert('Something is wrong, please try again!!'));   
       this.router.navigate(['/allroomfacilities']);
  }

  getRFid: number;
  deleteFaci() {
    let confirmAction = confirm("Are you sure to delete this room facilities?");
    if (confirmAction) {
      this.getRFid = this.id
      this.deleteRFacilities(this.getRFid);
    }
  }

  deleteRFacilities(id: number) {
    console.log(id);
    this.roomFacService.deleteRoomFacilities(id).subscribe(
      data => {
        alert('Room facilities successfully deleted!!');
        this.router.navigate(['/allroomfacilities']);
      },
      error => alert('Somethig wrong, please try again!!')
    );
  }
}
