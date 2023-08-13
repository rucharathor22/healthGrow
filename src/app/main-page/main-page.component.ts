import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { PopupComponent } from "../popup/popup.component";

export interface DialogData {
  name: string;
}

interface City {
  name: string;
  viewValue: string;
  hidden: Boolean;
}

interface MenuOption {
  name: string;
  viewValue: string;
  hidden: Boolean;
}

@Component({
  selector: "app-root",
  templateUrl: `./main-page.component.html`,
  styleUrls: ["./main-page.component.scss"],
})
export class MainPageComponent {
  search: String = "";
  Citys: City[] = [
    { name: "Delhi", viewValue: "Delhi", hidden: false },
    { name: "Mumbai", viewValue: "Mumbai", hidden: false },
    { name: "Bangalore", viewValue: "Bangalore", hidden: false },
    { name: "Pune", viewValue: "Pune", hidden: false },
    { name: "Hydrabad", viewValue: "Hyderabad", hidden: false },
    { name: "Bangalore", viewValue: "Gurugram", hidden: false },
  ];
  menuOptions: MenuOption[] = [
    { name: "Delhi", viewValue: "Hospitals", hidden: false },
    { name: "Mumbai", viewValue: "Appointments", hidden: false },
    { name: "Bangalore", viewValue: "Surgery Packages", hidden: false },
    { name: "Pune", viewValue: "Tests", hidden: false },
    { name: "Hydrabad", viewValue: "Health Packages", hidden: false },
    { name: "Bangalore", viewValue: "Hospital Bill Payments", hidden: false },
    { name: "Bangalore", viewValue: "Bed Booking", hidden: false },
  ];

  selectedCity = this.Citys[2].name;

  animal: string = "";
  name: string = "";

  constructor(public dialog: MatDialog) {
    this.openDialog();
  }
  loginWithGoogle() {}

  openDialog(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: "600px", // Set width to 600px
      height: "500px",
      data: this.Citys,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      if (result) {
        this.selectedCity = result;
      } else {
        this.openDialog();
      }
    });
  }
}
