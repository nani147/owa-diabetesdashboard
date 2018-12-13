var url = new URL(window.location.href);
var patientId = url.searchParams.get('patientId');
var tc = [];
tcVals = localStorage.getItem(patientId + ".tc").split(',');
tc.push(parseFloat(tcVals[tcVals.length-1]));

var url = new URL(window.location.href);
var patientId = url.searchParams.get('patientId');
var hdlc = [];
hdlcVals = localStorage.getItem(patientId + ".hdlc").split(',');
hdlc.push(parseFloat(hdlcVals[hdlcVals.length-1]));

var url = new URL(window.location.href);
var patientId = url.searchParams.get('patientId');
var ldlc = [];
ldlcVals = localStorage.getItem(patientId + ".ldlc").split(',');
ldlc.push(parseFloat(ldlcVals[ldlcVals.length-1]));

var url = new URL(window.location.href);
var patientId = url.searchParams.get('patientId');
var tg = [];
tgVals = localStorage.getItem(patientId + ".tg").split(',');
tg.push(parseFloat(tgVals[tgVals.length-1]));

var url = new URL(window.location.href);
var patientId = url.searchParams.get('patientId');
var egfr = [];
egfrVals = localStorage.getItem(patientId + ".egfr").split(',');
egfr.push(parseInt(egfrVals[egfrVals.length-1]));

var url = new URL(window.location.href);
var patientId = url.searchParams.get('patientId');
var sc = [];
scVals = localStorage.getItem(patientId + ".sc").split(',');
sc.push(parseFloat(scVals[scVals.length-1]));

Highcharts.chart('container3', {

  chart: {
    type: 'gauge',
    plotBackgroundColor: null,
    plotBackgroundImage: null,
    plotBorderWidth: 0,
    plotShadow: false
  },

  title: {
    text: 'TC'
  },

  pane: {
    startAngle: -150,
    endAngle: 150,
    background: [{
      backgroundColor: {
        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
        stops: [
          [0, '#FFF'],
          [1, '#333']
        ]
      },
      borderWidth: 0,
      outerRadius: '109%'
    }, {
      backgroundColor: {
        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
        stops: [
          [0, '#333'],
          [1, '#FFF']
        ]
      },
      borderWidth: 1,
      outerRadius: '107%'
    }, {
      // default background
    }, {
      backgroundColor: '#DDD',
      borderWidth: 0,
      outerRadius: '105%',
      innerRadius: '103%'
    }]
  },

  // the value axis
  yAxis: {
    min: 0,
    max: 15,

    minorTickInterval: 'none',
    minorTickWidth: 1,
    minorTickLength: 10,
    minorTickPosition: 'inside',
    minorTickColor: '#666',

    tickPixelInterval: 30,
    tickWidth: 2,
    tickPosition: 'inside',
    tickLength: 10,
    tickColor: '#666',
    labels: {
      step: 2,
      rotation: 'none'
    },
    title: {
      text: 'mmol/L'
    },
    plotBands: [{
      from: 0,
      to: 5.2,
      color: '#55BF3B' // green
    }, {
      from: 5.3,
      to: 6.2,
      color: '#DDDF0D' // yellow
    }, {
      from: 6.3,
      to: 15.0,
      color: '#DF5353' // red
    }]
  },
  credits: {
    enabled: false
  },
  navigation: {
    buttonOptions: {
    enabled: false
  }
  },
  series: [{
    name: 'Total Cholesterol',
    data: tc,
    tooltip: {
      valueSuffix: 'mmol/L'
    }
  }]
});
Highcharts.chart('container4', {

  chart: {
    type: 'gauge',
    plotBackgroundColor: null,
    plotBackgroundImage: null,
    plotBorderWidth: 0,
    plotShadow: false
  },

  title: {
    text: 'HDL-C'
  },

  pane: {
    startAngle: -150,
    endAngle: 150,
    background: [{
      backgroundColor: {
        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
        stops: [
          [0, '#FFF'],
          [1, '#333']
        ]
      },
      borderWidth: 0,
      outerRadius: '109%'
    }, {
      backgroundColor: {
        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
        stops: [
          [0, '#333'],
          [1, '#FFF']
        ]
      },
      borderWidth: 1,
      outerRadius: '107%'
    }, {
      // default background
    }, {
      backgroundColor: '#DDD',
      borderWidth: 0,
      outerRadius: '105%',
      innerRadius: '103%'
    }]
  },

  // the value axis
  yAxis: {
    min: 0,
    max: 5,

    minorTickInterval: 'none',
    minorTickWidth: 1,
    minorTickLength: 10,
    minorTickPosition: 'inside',
    minorTickColor: '#666',

    tickPixelInterval: 30,
    tickWidth: 2,
    tickPosition: 'inside',
    tickLength: 10,
    tickColor: '#666',
    labels: {
      step: 2,
      rotation: 'none'
    },
    title: {
      text: 'mmol/L'
    },
    plotBands: [{
      from: 0,
      to: 1.0,
      color: '#DF5353' // red
    }, {
      from: 1.0,
      to: 1.5,
      color: '#DDDF0D' // yellow
    }, {
      from: 1.5,
      to: 5.0,
      color: '#55BF3B' // green
    }]
  },
credits: {
  enabled: false
},
navigation: {
  buttonOptions: {
  enabled: false
}
},
  series: [{
    name: 'HDL-C',
    data: hdlc,
    tooltip: {
      valueSuffix: 'mmol/L'
    }
  }]
});


Highcharts.chart('container5', {

  chart: {
    type: 'gauge',
    plotBackgroundColor: null,
    plotBackgroundImage: null,
    plotBorderWidth: 0,
    plotShadow: false
  },

  title: {
    text: 'LDL-C'
  },
  pane: {
    startAngle: -150,
    endAngle: 150,
    background: [{
      backgroundColor: {
        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
        stops: [
          [0, '#FFF'],
          [1, '#333']
        ]
      },
      borderWidth: 0,
      outerRadius: '109%'
    }, {
      backgroundColor: {
        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
        stops: [
          [0, '#333'],
          [1, '#FFF']
        ]
      },
      borderWidth: 1,
      outerRadius: '107%'
    }, {
      // default background
    }, {
      backgroundColor: '#DDD',
      borderWidth: 0,
      outerRadius: '105%',
      innerRadius: '103%'
    }]
  },

  // the value axis
  yAxis: {
    min: 0,
    max: 10,

    minorTickInterval: 'none',
    minorTickWidth: 1,
    minorTickLength: 10,
    minorTickPosition: 'inside',
    minorTickColor: '#666',

    tickPixelInterval: 30,
    tickWidth: 2,
    tickPosition: 'inside',
    tickLength: 10,
    tickColor: '#666',
    labels: {
      step: 2,
      rotation: 'none'
    },
    title: {
      text: 'mmol/L'
    },
    plotBands: [{
      from: 0,
      to: 3.0,
      color: '#55BF3B' // green
    }, {
      from: 3.1,
      to: 4.9,
      color: '#DDDF0D' // yellow
    }, {
      from: 4.9,
      to: 10.0,
      color: '#DF5353' // red
    }]
  },
  credits: {
    enabled: false
  },
  navigation: {
    buttonOptions: {
    enabled: false
  }
  },
  series: [{
    name: 'LDL-C',
    data: ldlc,
    tooltip: {
      valueSuffix: 'mmol/L',
     valueDecimals: 2
    }
  }]
});
Highcharts.chart('container6', {

  chart: {
    type: 'gauge',
    plotBackgroundColor: null,
    plotBackgroundImage: null,
    plotBorderWidth: 0,
    plotShadow: false
  },

  title: {
    text: 'TG'
  },

  pane: {
    startAngle: -150,
    endAngle: 150,
    background: [{
      backgroundColor: {
        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
        stops: [
          [0, '#FFF'],
          [1, '#333']
        ]
      },
      borderWidth: 0,
      outerRadius: '109%'
    }, {
      backgroundColor: {
        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
        stops: [
          [0, '#333'],
          [1, '#FFF']
        ]
      },
      borderWidth: 1,
      outerRadius: '107%'
    }, {
      // default background
    }, {
      backgroundColor: '#DDD',
      borderWidth: 0,
      outerRadius: '105%',
      innerRadius: '103%'
    }]
  },

  // the value axis
  yAxis: {
    min: 0.0,
    max: 10.0,

    minorTickInterval: 'none',
    minorTickWidth: 1,
    minorTickLength: 10,
    minorTickPosition: 'inside',
    minorTickColor: '#666',

    tickPixelInterval: 30,
    tickWidth: 2,
    tickPosition: 'inside',
    tickLength: 10,
    tickColor: '#666',
    labels: {
      step: 2,
      rotation: 'none'
    },
    title: {
      text: 'mmol/L'
    },
    plotBands: [{
      from: 0,
      to: 2.2,
      color: '#55BF3B' // green
    }, {
      from: 2.3,
      to: 5.6,
      color: '#DDDF0D' // yellow
    }, {
      from: 5.6,
      to: 10.0,
      color: '#DF5353' // red
    }]
  },
credits: {
  enabled: false
},
navigation: {
  buttonOptions: {
  enabled: false
}
},
  series: [{
    name: 'Triglycerides',
    data: tg,
    tooltip: {
      valueSuffix: 'mmol/L'
    }
  }]
});

Highcharts.chart('container7', {

  chart: {
    type: 'gauge',
    plotBackgroundColor: null,
    plotBackgroundImage: null,
    plotBorderWidth: 0,
    plotShadow: false
  },

  title: {
    text: 'eGFR'
  },

  pane: {
    startAngle: -150,
    endAngle: 150,
    background: [{
      backgroundColor: {
        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
        stops: [
          [0, '#FFF'],
          [1, '#333']
        ]
      },
      borderWidth: 0,
      outerRadius: '109%'
    }, {
      backgroundColor: {
        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
        stops: [
          [0, '#333'],
          [1, '#FFF']
        ]
      },
      borderWidth: 1,
      outerRadius: '107%'
    }, {
      // default background
    }, {
      backgroundColor: '#DDD',
      borderWidth: 0,
      outerRadius: '105%',
      innerRadius: '103%'
    }]
  },

  // the value axis
  yAxis: {
    min: 0,
    max: 150,

    minorTickInterval: 'none',
    minorTickWidth: 1,
    minorTickLength: 10,
    minorTickPosition: 'inside',
    minorTickColor: '#666',

    tickPixelInterval: 30,
    tickWidth: 2,
    tickPosition: 'inside',
    tickLength: 10,
    tickColor: '#666',
    labels: {
      step: 2,
      rotation: 'none'
    },
    title: {
      text: 'mL/min/1.73 m²'
    },
    plotBands: [{
        from: 59,
        to: 0,
        color: '#DF5353' // red
      }, {
      from: 89,
      to: 60,
      color: '#DDDF0D' // yellow
    }, {
    from: 90,
    to: 150,
    color: '#55BF3B' // green
  }]
  },
  credits: {
    enabled: false
  },
  navigation: {
    buttonOptions: {
    enabled: false
  }
  },
  series: [{
    name: 'eGFR',
    data: egfr,
    tooltip: {
      valueSuffix: 'mL/min/1.73 m²'
    }
  }]
});

Highcharts.chart('container8', {

  chart: {
    type: 'gauge',
    plotBackgroundColor: null,
    plotBackgroundImage: null,
    plotBorderWidth: 0,
    plotShadow: false
  },

  title: {
    text: 'SerumCreatinine'
  },

  pane: {
    startAngle: -150,
    endAngle: 150,
    background: [{
      backgroundColor: {
        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
        stops: [
          [0, '#FFF'],
          [1, '#333']
        ]
      },
      borderWidth: 0,
      outerRadius: '109%'
    }, {
      backgroundColor: {
        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
        stops: [
          [0, '#333'],
          [1, '#FFF']
        ]
      },
      borderWidth: 1,
      outerRadius: '107%'
    }, {
      // default background
    }, {
      backgroundColor: '#DDD',
      borderWidth: 0,
      outerRadius: '105%',
      innerRadius: '103%'
    }]
  },

  // the value axis
  yAxis: {
    min: 0.0,
    max: 5.0,

    minorTickInterval: 'none',
    minorTickWidth: 1,
    minorTickLength: 10,
    minorTickPosition: 'inside',
    minorTickColor: '#666',

    tickPixelInterval: 30,
    tickWidth: 2,
    tickPosition: 'inside',
    tickLength: 10,
    tickColor: '#666',
    labels: {
      step: 2,
      rotation: 'none'
    },
    title: {
      text: '%'
    },
    plotBands: [{
      from: 0.0,
      to: 1.3,
      color: '#55BF3B' // green
    }, {
      from: 1.3,
      to: 1.8,
      color: '#DDDF0D' // yellow
    }, {
      from: 1.9,
      to: 5.0,
      color: '#DF5353' // red
    }]
  },
  credits: {
    enabled: false
  },
  navigation: {
    buttonOptions: {
    enabled: false
  }
  },
  series: [{
    name: 'SerumCreatinine',
    data: sc,
    tooltip: {
      valueSuffix: 'mg/dL'
    }
  }]
});
