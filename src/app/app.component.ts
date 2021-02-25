import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
@Component({
  selector: "el-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "elClassroom";
  backgroundColor = "landing-gradient-red-orange";
  constructor(private router: Router) {}

  ngOnInit() {

  }

}
