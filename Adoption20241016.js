const sourceData2 = [
  {
    value: 168, color: '#bd6bdc', properties: {
      numberFont: '80px Arial',
      numberText: [{ value: '168', x: 250, y: 270 }],
      fillTextFont: 'bold 30px Arial',
      fillTextAlign: 'left',
      fillText: [{ value: 'Smart', x: 400, y: 210 }, { value: 'Assistance', x: 400, y: 240 }],
      line: [{ x: 0, y: 50 }, { x: 150, y: 50 }, { x: 320, y: 170 }],
      lineColor: '#995bb6',
      rotate: 0,
    }
  },
  {
    value: 22, color: '#ee618b', properties: {
      numberFont: '60px Arial',
      numberText: [{ value: '22', x: 750, y: 340 }],
      fillTextFont: 'bold 25px Arial',
      fillTextAlign: 'left',
      fillText: [{ value: 'Smart Warehouse', x: 640, y: 370 }],
      line: [{ x: 840, y: 350 }, { x: 940, y: 50 }, { x: 980, y: 50 }],
      lineColor: '#b44c6d',
      rotate: 0,
    }
  },
  {
    value: 48, color: '#4584e2', properties: {
      numberFont: '60px Arial',
      numberText: [{ value: '48', x: 730, y: 480 }],
      fillTextFont: 'bold 30px Arial',
      fillTextAlign: 'center',
      fillText: [{ value: 'Cleaning', x: 740, y: 520 }],
      line: [{ x: 800, y: 450 }, { x: 940, y: 400 }, { x: 980, y: 400 }],
      lineColor: '#2f6ab0',
      rotate: 0,
    }
  },
  {
    value: 25, color: '#a98718', properties: {
      numberFont: '50px Arial',
      numberText: [{ value: '25', x: 280, y: 15 }],
      fillTextFont: '25px Arial',
      fillTextAlign: 'left',
      fillText: [{ value: 'Companion', x: 140, y: 5 }],
      line: [{ x: 690, y: 630 }, { x: 840, y: 750 }, { x: 980, y: 750 }],
      lineColor: '#6e602b',
      rotate: Math.PI / 3,
    }
  },
  {
    value: 96, color: '#62c7bf', properties: {
      numberFont: '60px Arial',
      numberText: [{ value: '96', x: 400, y: 600 }],
      fillTextFont: 'bold 30px Arial',
      fillTextAlign: 'center',
      fillText: [{ value: 'Delivery', x: 400, y: 630 }],
      line: [{ x: 0, y: 450 }, { x: 70, y: 450 }, { x: 150, y: 490 }, { x: 260, y: 490 }],
      lineColor: '#3b938a',
      rotate: 0,
    }
  },
];


const deviceList = [
  {
    id:1,
    Name:'Alpha Mini',
    company:'UBTECH',
    origin:'China',
    image:'Image.png',
    imageStyle:'width:270px',
    website:'https://www.ubtrobot.com/consumer/humanoidRobots/alphaSeries/AlphaMini',
  },
  {
    id:2,
    Name:'NAO',
    company:'Aldebaran Robotics',
    origin:'France',
    image:'Image_1.png',
    imageStyle:'width:240px',
    website:'https://www.aldebaran.com/en/nao',  
  },
  {
    id:3,
    Name:'Novelte GB1',
    company:'Novelte',
    origin:'China',
    image:'Image_2.png',
    imageStyle:'width:160px',
    website:'https://www.noveltebot.com/gb1',  
  },
  {
    id:4,
    Name:'Saite Concierge',
    company:'Saite',
    origin:'China',
    image:'Image_3.png',
    imageStyle:'width:140px',
    website:'https://en.saiterobot.com/',  
  },
  {
    id:5,
    Name:'TEMI',
    company:'Temi Global Ltd',
    origin:'Israel',
    image:'Image_4.png',
    imageStyle:'width:140px',
    website:'https://www.robotemi.com/',  
  },
  {
    id:6,
    Name:'Time Medical Sophie',
    company:'Time Medical Systems',
    origin:'Hong Kong',
    image:'Image_5.png',
    imageStyle:'width:100px',
    website:'https://www.time-medical.com/',  
  },
  {
    id:7,
    Name:'Not specified',
    company:' /',
    origin:' /',
    image:'Image_6.png',
    imageStyle:'width:300px',
    website:' /',  
  },
  {
    id:8,
    Name:'BellaBot',
    company:'Pudu Robotics',
    origin:'China',
    image:'Image_7.png',
    imageStyle:'width:200px',
    website:'https://www.pudurobotics.com/product/detail/bellabot',  
  },
  {
    id:9,
    Name:'DOOG-RMS-ECO1-1',
    company:'Doog Inc',
    origin:'Japan',
    image:'Image_8.png',
    imageStyle:'width:200px',
    website:'https://doog-inc.com/en/type-transport/',  
  },
  {
    id:10,
    Name:'HikRobot',
    company:'HIKROBOT',
    origin:'China',
    image:'Image_9.png',
    imageStyle:'width:200px;margin-top: 89px;margin-bottom: 90px;',
    website:'https://www.hikrobotics.com/cn/mobilerobot/',  
  }, 
  {
    id:11,
    Name:'PuDuBot',
    company:'Pudu Robotics',
    origin:'China',
    image:'Image_10.png',
    imageStyle:'width:265px;',
    website:'https://www.pudurobotics.com/product/detail/pudubot',  
  }, 
  {
    id:12,
    Name:'Time Medical GDR',
    company:'Times Medical Systems',
    origin:'Hong Kong',
    image:'Image_13.png',
    imageStyle:'width:240px;',
    website:'https://www.time-medical.com/',  
  },    
  {
    id:13,
    Name:'Time Medical HDDR',
    company:'Times Medical Systems',
    origin:'Hong Kong',
    image:'Image_14.png',
    imageStyle:'width:265px;margin-top: 50px;',
    website:'https://www.time-medical.com/',  
  },
  {
    id:14,
    Name:'Time Medical TM-SDR-01',
    company:'Times Medical Systems',
    origin:'United States',
    image:'Image_15.png',
    imageStyle:'width:265px;margin-top: 50px;margin-bottom: 40px;',
    website:'https://www.time-robotics.com/',  
  }, 
  {
    id:15,
    Name:'TUG',
    company:'Aethon',
    origin:'United States',
    image:'Image_16.png',
    imageStyle:'width:200px;margin-top: 50px;',
    website:'https://aethon.com/products/',  
  }, 
  {
    id:16,
    Name:'VisionNav',
    company:'VisionNav Robotics',
    origin:'United States',
    image:'Image_17.png',
    imageStyle:'width:265px;margin-top: 50px;',
    website:'https://www.visionnav.com/',  
  },
  {
    id:17,
    Name:'极光',
    company:'易普森智慧健康科技',
    origin:'China',
    image:'Image_18.png',
    imageStyle:'width:170px;margin-top: 50px;',
    website:'NA',  
  }, 
  {
    id:18,
    Name:'Kebbi',
    company:'NUWA Robotics',
    origin:'Taiwan',
    image:'Image_20.png',
    imageStyle:'width:170px;margin-top: 50px;',
    website:'https://www.nuwarobotics.com/en/product/',  
  }, 
  {
    id:19,
    Name:'Zenbo Junior',
    company:'ASUS',
    origin:'Taiwan',
    image:'Image_23.png',
    imageStyle:'width:170px;margin-top: 50px;',
    website:'https://zenbo.asus.com/product/zenbojunior/overview/',  
  }, 
  {
    id:20,
    Name:'Avidbots Neo',
    company:'Avidbots',
    origin:'Canada',
    image:'Image_24.png',
    imageStyle:'width:220px;margin-top: 50px;margin-bottom: 50px;',
    website:'https://avidbots.com/',  
  },     
  {
    id:21,
    Name:'Ecobot Scrubber',
    company:'Gaussian Robotics',
    origin:'Singapore',
    image:'Image_25.png',
    imageStyle:'width:220px;margin-top: 50px;',
    website:'https://www.gaussianrobotics.com/scrubber-50',  
  },  
  {
    id:22,
    Name:'Lionbot',
    company:'Quali-Kleen',
    origin:'Hong Kong',
    image:'Image_26.png',
    imageStyle:'width:170px;margin-top: 50px;',
    website:'https://www.quali-kleen.com/',  
  },  
  {
    id:23,
    Name:'Phantas',
    company:'Gausium',
    origin:'China',
    image:'Image_27.png',
    imageStyle:'width:220px;margin-top: 50px;',
    website:'https://gausium.com/products/phantas/',  
  },
  {
    id:24,
    Name:'Time Medical ISR',
    company:'Time Medical Systems',
    origin:'Hong Kong',
    image:'Image_28.png',
    imageStyle:'width:170px;margin-top: 50px;',
    website:'https://www.time-medical.com/intelligent-sterilization-robot',  
  }, 
  {
    id:25,
    Name:'Y-Sani',
    company:'Futuristic Inc',
    origin:'Jpan',
    image:'Image_29.png',
    imageStyle:'width:120px;margin-top: 50px;',
    website:'https://futuristic.co.jp/uvdoctor.html',  
  },
  {
    id:26,
    Name:'Geek+',
    company:'Geek+',
    origin:'China',
    image:'Image_31.png',
    imageStyle:'width:200px;margin-top: 90px;margin-bottom: 90px;',
    website:'https://www.geekplus.com/technology/robotics',  
  },
  {
    id:27,
    Name:'Swisslog',
    company:'Swisslog',
    origin:'Switzerland',
    image:'Image_32.png',
    imageStyle:'width:200px;margin-top: 50px;',
    website:'https://www.swisslog.com/en-us/products-systems-solutions/picking-palletizing-order-fulfillment/robot-based-robotics-fully-automated/',  
  },      
  {
    id:28,
    Name:'VisionNav',
    company:'VisionNav Robotics',
    origin:'United States',
    image:'Image_33.png',
    imageStyle:'width:240px;margin-top: 50px;',
    website:'https://polytex-technologies.com/',  
  },             
];

function drawDonutShadow(ctx, centerX, centerY, radius) {
  ctx.shadowOffsetX = 5;
  ctx.shadowOffsetY = 5;
  ctx.shadowBlur = 10;
  ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  ctx.lineWidth = 230;
  ctx.strokeStyle = '#ffffff';
  ctx.stroke();
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.shadowBlur = 0;
}
function drawBlock(ctx, properties, centerX, centerY) {

  if (properties.rotate > 0) {
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(properties.rotate);
  }
  ctx.font = properties.numberFont;
  ctx.fillStyle = '#FFFFFF';
  ctx.textAlign = properties.fillTextAlign;

  for (var i = 0; i < properties.numberText.length; i++) {
    ctx.fillText(properties.numberText[i].value, properties.numberText[i].x, properties.numberText[i].y);
  }
  ctx.font = properties.fillTextFont;
  ctx.textAlign = properties.fillTextAlign;
  for (var i = 0; i < properties.fillText.length; i++) {
    ctx.fillText(properties.fillText[i].value, properties.fillText[i].x, properties.fillText[i].y);
  }
  if (properties.rotate > 0) {
    ctx.restore();
  }

  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.strokeStyle = properties.lineColor;
  for (var i = 0; i < properties.line.length; i++) {
    if (i === 0) {
      ctx.moveTo(properties.line[i].x, properties.line[i].y);
    } else {
      ctx.lineTo(properties.line[i].x, properties.line[i].y);
    }
  }
  ctx.stroke();
}

function drawDonutChart2(canvasId, data) {
  var canvas = document.getElementById(canvasId);
  var ctx = canvas.getContext("2d");
  var centerX = canvas.width / 2;
  var centerY = canvas.height / 2;
  var radius = 700 / 3;

  var total = 0;
  for (var i = 0; i < data.length; i++) {
    total += data[i].value;
  }

  drawDonutShadow(ctx, centerX, centerY, radius);

  var startAngle = (data[0].value / total) * 2 * Math.PI;
  for (var i = 0; i < data.length; i++) {
    var endAngle = startAngle + (data[i].value / total) * 2 * Math.PI;
    console.log(endAngle);
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.lineWidth = 230;
    ctx.strokeStyle = data[i].color;
    ctx.stroke();

    startAngle = endAngle;
    drawBlock(ctx, data[i].properties, centerX, centerY);
  }

  ctx.font = 'bold 40px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = '#425198';
  ctx.fillText('Current', canvas.width / 2, 370);
  ctx.fillText('Adoption', canvas.width / 2, 410);
}
function adjustColor(id) {
  let color = "";
  switch (id) {
    case 'SmartAssistance':
      color = sourceData2[0].properties.lineColor;
      break;
    case 'SmartWarehouse':
      color = sourceData2[1].properties.lineColor;
      break;
    case 'Cleaning':
      color = sourceData2[2].properties.lineColor;
      break;
    case 'Companion':
      color = sourceData2[3].properties.lineColor;
      break;
    case 'Delivery':
      color = sourceData2[4].properties.lineColor;
      break;
  }
  return color;
}
