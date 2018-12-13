var hba1c = localStorage.getItem(patientId + ".hba1c").split(',');
hba1c = hba1c.map(Number);
console.log(hba1c);

var fpgt = localStorage.getItem(patientId + ".fpgt").split(',');
fpgt = fpgt.map(Number);
console.log(fpgt);

var tc = localStorage.getItem(patientId + ".tc").split(',');
tc = tc.map(Number);
console.log(tc);

var hdlc = localStorage.getItem(patientId + ".hdlc").split(',');
hdlc = hdlc.map(Number);
console.log(hdlc);

var ldlc = localStorage.getItem(patientId + ".ldlc").split(',');
ldlc = ldlc.map(Number);
console.log(ldlc);

var tg = localStorage.getItem(patientId + ".tg").split(',');
tg = tg.map(Number);
console.log(tg);

var egfr = localStorage.getItem(patientId + ".egfr").split(',');
egfr = egfr.map(Number);
console.log(egfr);

var sc = localStorage.getItem(patientId + ".sc").split(',');
sc = sc.map(Number);
console.log(sc);

Highcharts.chart('container9', {

  title: {
      text: 'HbA1c'
  },
     xAxis: {
       gridLineWidth: 1,
        categories:  ['Jan18', 'Mar18', 'Jun18', 'Jul18', 'Sep18', 'Nov18','Nov18','Nov18','Nov18','Nov18','Nov18']
    },
    yAxis: {
        title: {
          gridLineWidth: 1,
            text: 'Range'
        }
    },
    credits: {
    enabled: false
  },
  navigation: {
    buttonOptions: {
    enabled: false
  }
  },
  tooltip: {
    valueDecimals: 1,
    valueSuffix: '%'
},
    series: [{
      showInLegend: false,
      name: 'HbA1c',
        data: hba1c
    },],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});



Highcharts.chart('container10', {

  title: {
      text: 'Fasting Plasma'
  },
     xAxis: {
       gridLineWidth: 1,
        categories:  ['Jan18', 'Mar18', 'Jun18', 'Jul18', 'Sep18', 'Nov18','Nov18','Nov18','Nov18','Nov18','Nov18']
    },
    yAxis: {
        title: {
          gridLineWidth: 1,
            text: 'Range'
        }
    },

    credits: {
    enabled: false
  },
  navigation: {
    buttonOptions: {
    enabled: false
  }
  },
  tooltip: {
    valueDecimals: 1,
    valueSuffix: 'mmol/L'
},
    series: [{
      showInLegend: false,
      name: 'Fasting Plasma',
        data: fpgt
    },],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});


Highcharts.chart('container11', {

  title: {
      text: 'Total Cholesterol'
  },
     xAxis: {
       gridLineWidth: 1,
        categories:  ['Jan18', 'Mar18', 'Jun18', 'Jul18', 'Sep18', 'Nov18','Nov18','Nov18','Nov18','Nov18','Nov18']
    },
    yAxis: {
        title: {
          gridLineWidth: 1,
            text: 'Range'
        }
    },

    credits: {
    enabled: false
  },
  navigation: {
    buttonOptions: {
    enabled: false
  }
  },
  tooltip: {
    valueDecimals: 1,
    valueSuffix: 'mmol/L'
},
    series: [{
      showInLegend: false,
      name: 'Total Cholesterol',
        data: tc
    },],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});


Highcharts.chart('container12', {

  title: {
      text: 'HDL-C'
  },
     xAxis: {
       gridLineWidth: 1,
        categories:  ['Jan18', 'Mar18', 'Jun18', 'Jul18', 'Sep18', 'Nov18','Nov18','Nov18','Nov18','Nov18','Nov18']
    },
    yAxis: {
        title: {
          gridLineWidth: 1,
            text: 'Range'
        }
    },
    credits: {
    enabled: false
  },
  navigation: {
    buttonOptions: {
    enabled: false
  }
  },
  tooltip: {
    valueDecimals: 1,
    valueSuffix: 'mmol/L'
},
    series: [{
      showInLegend: false,
      name: 'HDL-C',
        data: hdlc
    },],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});


Highcharts.chart('container13', {

  title: {
      text: 'LDL-C'
  },
     xAxis: {
       gridLineWidth: 1,
        categories:  ['Jan18', 'Mar18', 'Jun18', 'Jul18', 'Sep18', 'Nov18','Nov18','Nov18','Nov18','Nov18','Nov18']
    },
    yAxis: {
        title: {
          gridLineWidth: 1,
            text: 'Range'
        }
    },

    credits: {
    enabled: false
  },
  navigation: {
    buttonOptions: {
    enabled: false
  }
  },
  tooltip: {
    valueDecimals: 1,
    valueSuffix: 'mmol/L'
},
    series: [{
      showInLegend: false,
      name: 'LDL-C',
        data: ldlc
    },],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});


Highcharts.chart('container14', {

  title: {
      text: 'Triglycerides'
  },
     xAxis: {
       gridLineWidth: 1,
        categories:  ['Jan18', 'Mar18', 'Jun18', 'Jul18', 'Sep18', 'Nov18','Nov18','Nov18','Nov18','Nov18','Nov18']
    },
    yAxis: {
        title: {
          gridLineWidth: 1,
            text: 'Range'
        }
    },
    credits: {
    enabled: false
  },
  navigation: {
    buttonOptions: {
    enabled: false
  }
  },
  tooltip: {
    valueDecimals: 1,
    valueSuffix: 'mmol/L'
},
    series: [{
      showInLegend: false,
      name: 'Triglycerides',
        data: tg
    },],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});


Highcharts.chart('container15', {

  title: {
      text: 'eGFR'
  },
     xAxis: {
       gridLineWidth: 1,
        categories:  ['Jan18', 'Mar18', 'Jun18', 'Jul18', 'Sep18', 'Nov18','Nov18','Nov18','Nov18','Nov18','Nov18']
    },
    yAxis: {
        title: {
          gridLineWidth: 1,
            text: 'Range'
        }
    },
    credits: {
    enabled: false
  },
  navigation: {
    buttonOptions: {
    enabled: false
  }
  },
  tooltip: {
    valueSuffix: 'mL/min/1.73 m²'
},
    series: [{
      showInLegend: false,
      name: 'eGFR',
        data: egfr
    },],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});

Highcharts.chart('container16', {

  title: {
      text: 'Serum Creatinine'
  },
     xAxis: {
     gridLineWidth: 1,
        categories:  ['Jan18', 'Mar18', 'Jun18', 'Jul18', 'Sep18', 'Nov18','Nov18','Nov18','Nov18','Nov18','Nov18']
    },
    yAxis: {
        title: {
        gridLineWidth: 1,
            text: 'Range'
        }
    },

    credits: {
    enabled: false
  },
  navigation: {
    buttonOptions: {
    enabled: false
  }
  },
  tooltip: {
    valueDecimals: 1,
    valueSuffix: 'mg/dL'
},

    series: [{
    showInLegend: false,
      name: 'Serum Creatinine',
        data: sc
    },],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});
