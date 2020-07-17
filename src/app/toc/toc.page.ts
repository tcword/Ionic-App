import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-toc",
  templateUrl: "./toc.page.html",
  styleUrls: ["./toc.page.scss"],
})
export class TocPage implements OnInit {
  public chapters = [
    {
      title: "Title Page",
      url: "/home",
      icon: "star"
    },
    {
      title: "Chapter 1 | The Reminder",
      url: "/chapter1",
      icon: "book"
    },
    {
      title: "Chapter 2 | The Test",
      url: "/chapter2",
      icon: "book"
    },
    {
      title: "Chapter 3 | The Race",
      url: "/chapter3",
      icon: "book"
    },
  ];
  constructor() {}

  ngOnInit() {}
}
