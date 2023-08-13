import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { DialogData } from "../main-page/main-page.component";

interface City {
  name: string;
  viewValue: string;
  hidden: Boolean;
}

@Component({
  selector: "app-popup",
  templateUrl: "./popup.component.html",
  styleUrls: ["./popup.component.css"],
})
export class PopupComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}
  citys: any = [];
  search: string = "";
  selectedCity: string = "";
  ngOnInit(): void {
    this.citys = this.data;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  searchCity() {
    if (this.search) {
      this.citys.forEach((el: City) => {
        if (!el.name.toLowerCase().includes(this.search.toLowerCase())) {
          el.hidden = true;
        } else {
          el.hidden = false;
        }
      });
    } else {
      this.citys.forEach((el: City) => {
        el.hidden = false;
      });
    }
  }
  selectCity(name: any) {
    this.selectedCity = name;
    // this.onNoClick();
  }
}
