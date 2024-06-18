import React,{useState,useEffect} from 'react'
import ApexCharts from 'react-apexcharts';
const Dashboard = () => {
 const [chart,setChart] = useState ({
          
    series: [{
      name: 'Servings',
      data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35]
    }],
    options: {
      annotations: {
        points: [{
          x: 'Bananas',
          seriesIndex: 0,
          label: {
            borderColor: '#775DD0',
            offsetY: 0,
            style: {
              color: '#fff',
              background: '#775DD0',
            },
            text: 'Bananas are good',
          }
        }]
      },
      chart: {
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          columnWidth: '50%',
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 2
      },
      
      grid: {
        row: {
          colors: ['#fff', '#f2f2f2']
        }
      },
      xaxis: {
        labels: {
          rotate: -45
        },
        categories: ['Apples', 'Oranges', 'Strawberries', 'Pineapples', 'Mangoes', 'Bananas',
          'Blackberries', 'Pears', 'Watermelons', 'Cherries', 'Pomegranates', 'Tangerines', 'Papayas'
        ],
        tickPlacement: 'on'
      },
      yaxis: {
        title: {
          text: 'Servings',
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 0.85,
          opacityTo: 0.85,
          stops: [50, 0, 100]
        },
      }
    }
  
  })
  const [chart2,setChart2] = useState(
    {
          
      series: [44, 55, 41, 17, 15],
      options: {
        chart: {
          type: 'donut',
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
    
    
    }
  )


  return (
    <div class="container-xxl flex-grow-1 container-p-y">

                <div className="row mb-4">
                    <div className='col-1'>
                        <button className="btn btn-sm" style={{background:"#2a9d8f",color:"white"}}>Daily &nbsp; report</button>
                    </div>
                    <div className='col-1'>
                        <button className="btn btn-sm" style={{background:"#e9c46a",color:"white"}}>Weekly report</button>
                    </div>
                    <div className='col-1'>
                        <button className="btn btn-sm" style={{background:"#023047",color:"white"}}>Monthly report</button>
                    </div>
                    <div className='col-1'>
                        <button className="btn btn-sm" style={{background:"#e76f51",color:"white"}}>General report</button>
                    </div>
                </div>
                
                <div class="row">

                    <div class="col-lg-3 col-md-3 col-3 mb-4">
                      <div class="card">
                        <div class="card-body">
                          <div class="card-title d-flex align-items-start justify-content-between">
                            <h5 class="card-title mb-2">Companies</h5>
                          </div>
                          <div className='row'>
                            <div className='col-7'>
                            <h3 style={{color:'black'}}>15</h3>
                            </div>
                            <div className='col-5'>
                            <button className="btn btn-sm btn-primary">Add new</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>


                    <div class="col-lg-3 col-md-3 col-3 mb-4">
                      <div class="card">
                        <div class="card-body">
                          <div class="card-title d-flex align-items-start justify-content-between">
                            <h5 class="card-title mb-2">Projects</h5>
                          </div>
                          <div className='row'>
                          <div className='col-2'>
                            <i className='bx bx-door-open bx-md'></i>
                            </div>

                            <div className='col-10'>
                            <h3 style={{color:'black'}}>15</h3>
                            </div>
                            
                          </div>
                        </div>
                      </div>
                    </div>


                    <div class="col-lg-3 col-md-3 col-3 mb-4">
                      <div class="card">
                        <div class="card-body">
                          <div class="card-title d-flex align-items-start justify-content-between">
                            <h5 class="card-title mb-2">Milestones</h5>
                          </div>
                          <div className='row'>
                          <div className='col-2'>
                            <i className='bx bx-door-open bx-md'></i>
                            </div>

                            <div className='col-10'>
                            <h3 style={{color:'black'}}>15</h3>
                            </div>
                            
                          </div>
                        </div>
                      </div>
                    </div>


                    <div class="col-lg-3 col-md-3 col-3 mb-4">
                      <div class="card">
                        <div class="card-body">
                          <div class="card-title d-flex align-items-start justify-content-between">
                            <h5 class="card-title mb-2">Activities</h5>
                          </div>
                          <div className='row'>
                          <div className='col-2'>
                            <i className='bx bx-door-open bx-md'></i>
                            </div>

                            <div className='col-10'>
                            <h3 style={{color:'black'}}>15</h3>
                            </div>
                            
                          </div>
                        </div>
                      </div>
                    </div>

                    
                </div>


                <div class="row">

                    <div class="col-lg-3 col-md-3 col-3 mb-4">
                      <div class="card">
                        <div class="card-body">
                          <div class="card-title d-flex align-items-start justify-content-between">
                            <h5 class="card-title mb-2">Contract to expire</h5>
                          </div>
                          <div className='row'>
                          <div className='col-2'>
                            <i className='bx bx-door-open bx-md'></i>
                            </div>

                            <div className='col-10'>
                            <h3 style={{color:'black'}}>15</h3>
                            </div>
                            
                          </div>
                        </div>
                      </div>
                    </div>


                    <div class="col-lg-3 col-md-3 col-3 mb-4">
                      <div class="card">
                        <div class="card-body">
                          <div class="card-title d-flex align-items-start justify-content-between">
                            <h5 class="card-title mb-2">Total staff</h5>
                          </div>
                          <div className='row'>
                          <div className='col-2'>
                            <i className='bx bx-door-open bx-md'></i>
                            </div>

                            <div className='col-10'>
                            <h3 style={{color:'black'}}>15</h3>
                            </div>
                            
                          </div>
                        </div>
                      </div>
                    </div>


                    <div class="col-lg-3 col-md-3 col-3 mb-4">
                      <div class="card">
                        <div class="card-body">
                          <div class="card-title d-flex align-items-start justify-content-between">
                            <h5 class="card-title mb-2">New staff this month</h5>
                          </div>
                          <div className='row'>
                          <div className='col-2'>
                            <i className='bx bx-door-open bx-md'></i>
                            </div>

                            <div className='col-10'>
                            <h3 style={{color:'black'}}>15</h3>
                            </div>
                            
                          </div>
                        </div>
                      </div>
                    </div>


                    <div class="col-lg-3 col-md-3 col-3 mb-4">
                      <div class="card">
                        <div class="card-body">
                          <div class="card-title d-flex align-items-start justify-content-between">
                            <h5 class="card-title mb-2">Overdue contract</h5>
                          </div>
                          <div className='row'>
                          <div className='col-2'>
                            <i className='bx bx-door-open bx-md'></i>
                            </div>

                            <div className='col-10'>
                            <h3 style={{color:'black'}}>15</h3>
                            </div>
                            
                          </div>
                        </div>
                      </div>
                    </div>

                    
                  </div>

                  <div className='row'>
                  <div class="col-md-6">
                    <h5 class="card-header m-0 me-2 pb-3">Total Revenue</h5>
                    <ApexCharts options={chart.options} series={chart.series} type="bar" height={350} />
                  </div>

                  <div class="col-md-6">
                    <h5 class="card-header m-0 me-2 pb-3">Total Revenue</h5>
                    <ApexCharts options={chart2.options} series={chart2.series} type="donut" height={350}/>
                  </div>
                  </div>
                  
                
            </div>
  )
}

export default Dashboard;