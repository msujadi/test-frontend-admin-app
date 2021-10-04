import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GetServiceService } from '../get-service.service';


@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {
  campaigns;
  constructor(
    private campaignService: GetServiceService,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.campaigns = this.campaignService.getCampaign();
  }

  onSubmit(data){
    this.http.post('https://emaillead.aturtoko.id/api/v1/campaign', data)
    .subscribe((result)=>{
      console.warn("result", result)
    })
    console.warn(data)
  }

}
