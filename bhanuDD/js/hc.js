var url = new URL(window.location.href);
var patientId = url.searchParams.get('patientId');
var hba1c = [];
hba1cVals = localStorage.getItem(patientId + ".hba1c").split(',');
hba1c.push(parseFloat(hba1cVals[hba1cVals.length-1]));


var url = new URL(window.location.href);
var patientId = url.searchParams.get('patientId');
var fpgt = [];
fpgtVals = localStorage.getItem(patientId + ".fpgt").split(',');
fpgt.push(parseFloat(fpgtVals[fpgtVals.length-1]));


Highcharts.chart('container', {
  chart: {
    type: 'gauge',
    plotBackgroundColor: null,
    plotBackgroundImage: null,
    plotBorderWidth: 0,
    plotShadow: false
  },
  title: {
    text: 'HbA1c'
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
    max: 30.0,

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
      from: 0,
      to: 5.7,
      color: '#55BF3B' // green
    }, {
      from: 5.7,
      to: 8.5,
      color: '#DDDF0D' // yellow
    }, {
      from: 8.6,
      to: 30.0,
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
  tooltip: {
      valueDecimals: 1,
      valueSuffix: 'mmol/L'
  },
  series: [{
    name: 'Glycated Hb',
    data: hba1c
  }]
});


Highcharts.chart('container2', {

  chart: {
    type: 'gauge',
    plotBackgroundColor: null,
    plotBackgroundImage: null,
    plotBorderWidth: 0,
    plotShadow: false
  },

  title: {
    text: 'Fasting Plasma'
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
    max: 30.0,

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
      to: 5.5,
      color: '#55BF3B' // green
    }, {
      from: 5.6,
      to: 6.9,
      color: '#DDDF0D' // yellow
    }, {
      from: 7.0,
      to: 30.0,
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
tooltip: {
    valueDecimals: 1,
    valueSuffix: 'mmol/L'
},
  series: [{
    name: 'FPGT',
    data: fpgt
  }]


});
