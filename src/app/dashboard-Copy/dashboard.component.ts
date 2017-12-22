import { Component, OnInit } from '@angular/core';
import { CHARTCONFIG } from '../charts/charts.config';
import { ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs/RX';
// service
import { FastUpService } from '../services/FastupService';
import { SearchResult } from '../Model/search';
import { Invite, InviteResult } from '../Model/invite';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

import { Dashboard, DashboardResult } from '../Model/dashboard';

@Component({
  selector: 'my-dashboard',
  providers: [FastUpService],
  templateUrl: './dashboard.component.html'
})
export class MainDashboardComponent {
  config = CHARTCONFIG;


  private modelrlist: DashboardResult[] = [];

  private modelslist: SearchResult[] = [];
  public myForm: FormGroup;
  public isedit: boolean = false;
  public iseditbutton: boolean = false;
  // public isloading:boolean=false;
  currentuser: any;
  public ID: string;

  private modelin = new Invite('true', '', '');

  private modelilist: InviteResult;
  private modelialist: InviteResult[] = [];

  public myForm1: FormGroup;


  public invite: boolean = false;

  public src: any;

  constructor(private FastUpService: FastUpService, private _fb: FormBuilder, ) {
    this.currentuser = JSON.parse(localStorage.getItem('currentUser'));

  }

  ngOnInit(): void {
    debugger;
    this.getdashboard();
    this.myForm = this._fb.group({
      'data': [''],

    });
    this.myForm1 = this._fb.group({
      'email': ['', Validators.required],
    });

  }



  reset() {
    this.myForm.reset();
    this.iseditbutton = false;
  }


  getdashboard() {
    debugger
    this.FastUpService.getdashboard().subscribe(
      results => {
        debugger;
        this.isedit = false;
        this.modelrlist = results;
        this.iseditbutton = false;
      },
      error => {

      });
  }


  label: any;
  hits: any = [];
  modelnlist: any
  getsearch(data: string) {
    debugger;
    //  this.isloading=true;
    data = this.myForm.value.data;
    this.FastUpService.getsearch(data).subscribe(
      results => {
        debugger;
        this.modelnlist = results;


        if (this.modelnlist.hits.hit.length > 0) {
          this.modelrlist = [];
          this.isedit = false;
          this.iseditbutton = true;
          for (let i = 0; i < this.modelnlist.hits.hit.length; i++) {
            debugger;

            this.modelrlist.push(this.modelnlist.hits.hit[i].fields);
          }
        }
        if (this.modelnlist.hits.hit.length <= 0) {
          debugger;
          this.modelrlist = [];
          this.isedit = true;
          this.label = "No Results Found";
          this.iseditbutton = true;
        }



      },
      error => {
        console.log(error);
        // this.isloading=false;
      });

  }



  invite1: any;

  postInvite() {
    debugger
    this.modelin.ID = "4004";

    let commentOperation: Observable<Invite>;
    commentOperation = this.FastUpService.postInvite(this.modelin)
    commentOperation.subscribe(
      results => {
        debugger
        this.modelilist = results;
        if (this.modelilist.EmailAddress != null) {
          this.invite = true;
          this.invite1 = "Invitation Sent Successfully ";
          // this.invite = false;
          setTimeout(() => {
            this.invite = false;
            this.myForm1.reset();
            //  this.function();
          }, 2000);
        }
      },
      err => {

      });
  }




  getMonData = () => {
    const data = [];
    for (let i = 0; i < 13; i++) {
      data.push('Mon. ' + i);
    }
    return data;
  }

  monData = this.getMonData();

  //
  trafficChart = {
    legend: {
      show: true,
      x: 'right',
      y: 'top',
      textStyle: {
        color: this.config.textColor
      },
      data: ['Trend', 'Search', 'Paid Ads', 'Virality']
    },
    grid: {
      x: 40,
      y: 60,
      x2: 40,
      y2: 30,
      borderWidth: 0
    },
    tooltip: {
      show: true,
      trigger: 'axis',
      axisPointer: {
        lineStyle: {
          color: this.config.gray
        }
      }
    },
    xAxis: [
      {
        type: 'category',
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          textStyle: {
            color: this.config.textColor
          }
        },
        splitLine: {
          show: false,
          lineStyle: {
            color: this.config.splitLineColor
          }
        },
        data: this.monData
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          textStyle: {
            color: this.config.textColor
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: this.config.splitLineColor
          }
        }
      }
    ],
    series: [
      {
        name: 'Trend',
        type: 'line',
        clickable: false,
        lineStyle: {
          normal: {
            color: this.config.gray,
          }
        },
        areaStyle: {
          normal: {
            color: this.config.gray,
          },
          emphasis: {}
        },
        data: [41, 85, 27, 70, 50, 57, 41, 56, 69, 52, 48, 44, 35],
        legendHoverLink: false,
        z: 1
      },
      {
        name: 'Search',
        type: 'bar',
        stack: 'traffic',
        clickable: false,
        itemStyle: {
          normal: {
            color: this.config.success, // '#8BC34A', // Light Green 500
            barBorderRadius: 0
          },
          emphasis: {
            // color: this.config.success
          }
        },
        barCategoryGap: '60%',
        data: [25, 45, 15, 39, 20, 26, 23, 26, 35, 27, 26, 25, 22],
        legendHoverLink: false,
        z: 2
      },
      {
        name: 'Paid Ads',
        type: 'bar',
        stack: 'traffic',
        smooth: true,
        itemStyle: {
          normal: {
            color: this.config.primary, // '#03A9F4', // Light Blue 500
            barBorderRadius: 0
          },
          emphasis: {
            // color: this.config.primary
          }
        },
        barCategoryGap: '60%',
        data: [10, 25, 6, 19, 24, 25, 12, 15, 26, 13, 12, 8, 7],
        symbol: 'none',
        legendHoverLink: false,
        z: 2
      },
      {
        name: 'Virality',
        type: 'bar',
        stack: 'traffic',
        smooth: true,
        itemStyle: {
          normal: {
            color: this.config.info, // '#4FC3F7', // Light Blue 300
            barBorderRadius: 0
          },
          emphasis: {
            // color: this.config.info
          }
        },
        barCategoryGap: '60%',
        data: [6, 15, 6, 12, 6, 6, 6, 15, 8, 13, 10, 11, 6],
        symbol: 'none',
        legendHoverLink: false,
        z: 2
      }
    ]
  };

  //
  donutChart = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      show: false,
      orient: 'vertical',
      x: 'right',
      data: ['Direct', 'Email', 'Affiliate', 'Video Ads', 'Search']
    },
    toolbox: {
      show: false,
      feature: {
        restore: { show: true, title: 'restore' },
        saveAsImage: { show: true, title: 'save as image' }
      }
    },
    calculable: true,
    series: [
      {
        name: 'Traffic source',
        type: 'pie',
        radius: ['51%', '69%'],
        itemStyle: {
          normal: {
            color: this.config.info
          },
          emphasis: {
            label: {
              show: true,
              position: 'center',
              textStyle: {
                fontSize: '20',
                fontWeight: 'normal'
              }
            }
          }
        },
        data: [
          {
            value: 40,
            name: 'United States',
            itemStyle: {
              normal: {
                color: this.config.success,
                label: {
                  textStyle: {
                    color: this.config.success
                  }
                },
                labelLine: {
                  lineStyle: {
                    color: this.config.success
                  }
                }
              }
            }
          },
          {
            value: 10,
            name: 'United Kingdom',
            itemStyle: {
              normal: {
                color: this.config.primary,
                label: {
                  textStyle: {
                    color: this.config.primary
                  }
                },
                labelLine: {
                  lineStyle: {
                    color: this.config.primary
                  }
                }
              }
            }
          },
          {
            value: 20,
            name: 'Canada',
            itemStyle: {
              normal: {
                color: this.config.infoAlt,
                label: {
                  textStyle: {
                    color: this.config.infoAlt
                  }
                },
                labelLine: {
                  lineStyle: {
                    color: this.config.infoAlt
                  }
                }
              }
            }
          },
          {
            value: 12,
            name: 'Germany',
            itemStyle: {
              normal: {
                color: this.config.info,
                label: {
                  textStyle: {
                    color: this.config.info
                  }
                },
                labelLine: {
                  lineStyle: {
                    color: this.config.info
                  }
                }
              }
            }
          },
          {
            value: 18,
            name: 'Japan',
            itemStyle: {
              normal: {
                color: this.config.warning,
                label: {
                  textStyle: {
                    color: this.config.warning
                  }
                },
                labelLine: {
                  lineStyle: {
                    color: this.config.warning
                  }
                }
              }
            }
          }
        ]
      }
    ]
  };

  //
  radarChart = {
    tooltip: {},
    legend: {
      show: false, // because the legend symbol color is not the same with radar line
      orient: 'vertical',
      x: 'right',
      y: 'bottom',
      data: ['Budget', 'Spending']
    },
    toolbox: {
      show: false
    },
    radar: [
      {
        axisLine: {
          show: true,
          lineStyle: {
            // for both indicator and axisLine, bad, better seperate them
            color: '#b1b1b1'
          }
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(0,0,0,.1)'
          }
        },
        splitArea: {
          show: true,
          areaStyle: {
            color: this.config.splitAreaColor
          }
        },
        indicator: [
          { name: 'sales', max: 6000 },
          { name: 'dministration', max: 16000 },
          { name: 'Information Techology', max: 30000 },
          { name: 'Customer Support', max: 38000 },
          { name: 'Development', max: 52000 },
          { name: 'Marketing', max: 25000 }
        ]
      }
    ],
    calculable: true,
    series: [
      {
        type: 'radar',
        data: [
          {
            name: 'Budget',
            value: [4300, 10000, 28000, 35000, 50000, 19000],
            itemStyle: {
              normal: {
                color: this.config.primary
              }
            }
          },
          {
            name: 'Spending',
            value: [5000, 14000, 28000, 31000, 42000, 21000],
            itemStyle: {
              normal: {
                color: this.config.success
              }
            }
          }
        ]
      }
    ]
  };
}
