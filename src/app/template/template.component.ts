import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GetServiceService } from '../get-service.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  templates;

  constructor(
    private templateService: GetServiceService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.templates = this.templateService.getTemplate();
  }

}
