// === 在檔案最頂部 ===
const CWB_API_KEY = "CWA-9565CFB8-7CCD-4E47-9B93-6A313A7C8E30";
const EPA_API_KEY = "ead00f55-0b6c-44e6-8a33-624731a41418";


// --- 資料定義 ---
const baseNodes = {
  1: { name: "校門口", lat: 23.463095452135853, lng: 120.44121829575867 },
  2: { name: "圖書館", lat: 23.464384149850638, lng: 120.44135207376252 },
  3: { name: "管理學院A棟", lat: 23.464416032036247, lng: 120.44117634068238 },
  4: { name: "管理學院B棟", lat: 23.464040363266747, lng: 120.44168435756504 },
  5: { name: "學生餐廳", lat: 23.464, lng: 120.4410 },
  6: { name: "學生宿舍", lat: 23.46496, lng: 120.44270 },
  7: { name: "排球場", lat: 23.46455, lng: 120.44331 },
  8: { name: "獸醫院", lat: 23.46263, lng: 120.44360 },
  9: { name: "籃球場", lat: 23.46415, lng: 120.44476 },
};
const basePaths = [
  { start: 1, end: 2, distance: 135.02, temp: 4, shade: 8, pm25: 6, isExposed: 0, isRoadside: 1 },
  { start: 1, end: 3, distance: 138.67, temp: 8, shade: 2, pm25: 7, isExposed: 1, isRoadside: 1 },
  { start: 1, end: 4, distance: 113.79, temp: 6, shade: 5, pm25: 3, isExposed: 1, isRoadside: 0 },
  { start: 1, end: 5, distance: 15.78, temp: 8, shade: 2, pm25: 7, isExposed: 1, isRoadside: 1 },
  { start: 1, end: 6, distance: 273.86, temp: 6, shade: 5, pm25: 3, isExposed: 1, isRoadside: 0 },
  { start: 1, end: 7, distance: 285.04, temp: 9, shade: 1, pm25: 2, isExposed: 1, isRoadside: 0 },
  { start: 1, end: 8, distance: 283.17, temp: 6, shade: 5, pm25: 3, isExposed: 1, isRoadside: 0 },
  { start: 1, end: 9, distance: 392.27, temp: 8, shade: 2, pm25: 7, isExposed: 1, isRoadside: 1 },
  { start: 2, end: 3, distance: 38.26, temp: 3, shade: 9, pm25: 4, isExposed: 0, isRoadside: 0 },
  { start: 2, end: 4, distance: 54.38, temp: 3, shade: 9, pm25: 3, isExposed: 0, isRoadside: 0 },
  { start: 2, end: 5, distance: 16.10, temp: 3, shade: 9, pm25: 3, isExposed: 0, isRoadside: 0 },
  { start: 2, end: 6, distance: 166.33, temp: 7, shade: 3, pm25: 5, isExposed: 1, isRoadside: 0 },
  { start: 2, end: 7, distance: 215.19, temp: 7, shade: 3, pm25: 5, isExposed: 1, isRoadside: 0 },
  { start: 2, end: 8, distance: 322.73, temp: 6, shade: 5, pm25: 3, isExposed: 1, isRoadside: 0 },
  { start: 2, end: 9, distance: 343.70, temp: 6, shade: 5, pm25: 3, isExposed: 1, isRoadside: 0 },
  { start: 3, end: 4, distance: 72.62, temp: 5, shade: 6, pm25: 4, isExposed: 0, isRoadside: 0 },
  { start: 3, end: 5, distance: 40.04, temp: 7, shade: 3, pm25: 5, isExposed: 1, isRoadside: 0 },
  { start: 3, end: 6, distance: 177.95, temp: 6, shade: 5, pm25: 3, isExposed: 1, isRoadside: 0 },
  { start: 3, end: 7, distance: 231.73, temp: 7, shade: 3, pm25: 5, isExposed: 1, isRoadside: 0 },
  { start: 3, end: 8, distance: 370.12, temp: 6, shade: 5, pm25: 3, isExposed: 1, isRoadside: 0 },
  { start: 3, end: 9, distance: 375.82, temp: 6, shade: 5, pm25: 3, isExposed: 1, isRoadside: 0 },
  { start: 4, end: 5, distance: 44.68, temp: 5, shade: 6, pm25: 4, isExposed: 0, isRoadside: 0 },
  { start: 4, end: 6, distance: 152.45, temp: 9, shade: 1, pm25: 2, isExposed: 1, isRoadside: 0 },
  { start: 4, end: 7, distance: 186.09, temp: 9, shade: 1, pm25: 2, isExposed: 1, isRoadside: 0 },
  { start: 4, end: 8, distance: 288.31, temp: 6, shade: 5, pm25: 3, isExposed: 1, isRoadside: 0 },
  { start: 4, end: 9, distance: 318.26, temp: 6, shade: 5, pm25: 3, isExposed: 1, isRoadside: 0 },
  { start: 5, end: 6, distance: 184.17, temp: 9, shade: 10, pm25: 3, isExposed: 0, isRoadside: 0},
  { start: 5, end: 7, distance: 224.97, temp: 10,shade: 1, pm25: 2, isExposed: 1, isRoadside: 0 },
  { start: 5, end: 8, distance: 329.89, temp: 4, shade: 8, pm25: 1, isExposed: 0, isRoadside: 0 },
  { start: 5, end: 9, distance: 120, temp: 6, shade: 5, pm25: 3, isExposed: 1, isRoadside: 0 },
  { start: 6, end: 7, distance: 84.27, temp: 6, shade: 5, pm25: 3, isExposed: 1, isRoadside: 0 },
  { start: 6, end: 8, distance: 310.92, temp: 6, shade: 5, pm25: 3, isExposed: 1, isRoadside: 0 },
  { start: 6, end: 9, distance: 231.52, temp: 6, shade: 5, pm25: 3, isExposed: 1, isRoadside: 0 },
  { start: 7, end: 8, distance: 246.52, temp: 6, shade: 5, pm25: 3, isExposed: 1, isRoadside: 0 },
  { start: 7, end: 9, distance: 141.83, temp: 6, shade: 5, pm25: 3, isExposed: 1, isRoadside: 0 },
  

];

let nodes = JSON.parse(JSON.stringify(baseNodes));
let paths = JSON.parse(JSON.stringify(basePaths));

// 新增：儲存即時取得的基礎溫度和 PM2.5
let currentRealTemp = 25; // 預設一個合理的起始溫度
let currentRealPm25 = 5;  // 預設一個合理的起始 PM2.5 值

// 1) 取出所有氣象站即時溫度
async function fetchAllWeatherStations() {
  const res = await fetch(
    `https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001` +
    `?Authorization=${CWB_API_KEY}`
  );
  const data = await res.json();
  return data.records.location.map(loc => ({
    lat:  parseFloat(loc.lat),
    lng:  parseFloat(loc.lon),
    temp: parseFloat(
      loc.weatherElement.find(e=>e.elementName==="TEMP").elementValue
    )
  }));

  async function fetchAllWeatherStations() {
  const res  = await fetch(/* … */);
  const data = await res.json();
  const stations = data.records.location.map(loc => ({
    lat:  parseFloat(loc.lat),
    lng:  parseFloat(loc.lon),
    temp: parseFloat(loc.weatherElement.find(e=>e.elementName==="TEMP").elementValue)
  }));

  console.log('— 所有測站 (前 10 筆) —', stations.slice(0,10));
  return stations;
}

}

// 2) 計算兩點平方距離
function sqDist(a,b,c,d) { return (a-c)**2 + (b-d)**2; }

// 3) 用最近 3 站做反距離加權
function getWeightedTemp(lat, lng, stations) {
  const nearest3 = stations
    .map(s=>({ ...s, d: sqDist(lat,lng,s.lat,s.lng) }))
    .sort((a,b)=>a.d - b.d)
    .slice(0,3);
  let sumW=0, sumWT=0;
  nearest3.forEach(s => {
    const w = 1/Math.sqrt(s.d + 0.0001);
    sumWT += s.temp * w;
    sumW  += w;
  });
  return sumWT / sumW;
}


// --- DOM & App State ---
const dom = {
  startNodeSelect:    document.getElementById('startNode'),
  endNodeSelect:      document.getElementById('endNode'),
  preferenceContainer:document.getElementById('preference'),
  resultDiv:          document.getElementById('result'),
  mapLoader:          document.getElementById('map-loader'),
  legend:             document.getElementById('legend'),
  scenarios:          document.getElementById('scenarios'),
  sunSensitiveToggle: document.getElementById('sun-sensitive-toggle'),
};

let map,
    recommendedRouteLayer = null,
    shortestRouteLayer    = null,
    sensorLayerGroup;

let state = {
  currentPreference: 'balanced',
  startNodeId:       1,
  endNodeId:         8,
  simulationInterval:null,
  currentScenario:   'normal',
  isSunSensitive:    false,
};

function getNearestStation(lat, lng, stations) {
  let best = null, bestDist = Infinity;
  stations.forEach(s => {
    const d = (s.lat - lat)**2 + (s.lng - lng)**2;
    if (d < bestDist) {
      bestDist = d;
      best = s;
    }
  });
  return best;
}


async function fetchAndUpdateRealData() {
  try {
    // --- 獲取溫度 (CWB API) ---
    const cwbRes = await fetch(
      `https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001` +
      `?Authorization=${CWB_API_KEY}&locationName=嘉義`
    );
    const cwbData = await cwbRes.json();
    let fetchedTemp = null;
    if (cwbData.records && cwbData.records.location && cwbData.records.location.length > 0) {
      const tempElement = cwbData.records.location[0].weatherElement.find(e => e.elementName === 'TEMP');
      if (tempElement && tempElement.elementValue !== undefined) {
        fetchedTemp = parseFloat(tempElement.elementValue);
      }
    }

    if (fetchedTemp !== null && !isNaN(fetchedTemp)) {
      currentRealTemp = fetchedTemp;
      console.log("即時取得溫度:", currentRealTemp, "°C");
    } else {
      console.error("無法取得有效即時溫度，使用預設值:", currentRealTemp, "°C");
      // 如果API獲取失敗，可以使用一個合理的預設值，而不是之前的7度
      // currentRealTemp = 25; // 或者保持不變，使用上次成功獲取的值或初始化值
    }

    // --- 獲取 PM2.5 (EPA API) ---
    // 假設 EPA API 也是針對嘉義的，並且能獲取類似的實時數據
    // 注意：您目前提供的 EPA_API_KEY 可能需要實際的 EPA API Endpoint 和解析邏輯
    // 這裡我將其簡化為一個模擬值，您需要根據實際 EPA API 進行調整
    const epaRes = await fetch(
      `https://data.epa.gov.tw/api/v2/aqx_p_432?api_key=${EPA_API_KEY}&limit=1&offset=0&filters=County,EQ,嘉義市&sort=ImportDate desc`
    );
    const epaData = await epaRes.json();
    let fetchedPm25 = null;
    if (epaData.records && epaData.records.length > 0) {
        // 假設 PM2.5 在第一筆資料的 PM2.5 欄位
        fetchedPm25 = parseFloat(epaData.records[0]['PM2.5']);
    }

    if (fetchedPm25 !== null && !isNaN(fetchedPm25)) {
        currentRealPm25 = fetchedPm25;
        console.log("即時取得 PM2.5:", currentRealPm25);
    } else {
        console.error("無法取得有效即時 PM2.5，使用預設值:", currentRealPm25);
        // 如果API獲取失敗，也可以使用一個合理的預設值
        // currentRealPm25 = 5;
    }


  } catch (error) {
    console.error("獲取即時資料失敗:", error);
    // 在發生錯誤時，也可以考慮將 currentRealTemp 和 currentRealPm25 重設為預設值，
    // 以避免在長時間網路問題下顯示舊的或異常的數據。
  }
}


// 在所有其他函式之後、initialize 之前，新增：
function redrawAndFlash() {
  drawAllNodesAndSensors();
  findAndDrawRoute(true);
}

// 完整取代舊的 handleScenarioChange：
async function handleScenarioChange(e) {
  const btn = e.target.closest('.scenario-btn');
  if (!btn) return;
  state.currentScenario = btn.dataset.scenario;
  document.querySelectorAll('.scenario-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  // 停掉之前的定時器 (針對 live 模式)
  clearInterval(state.simulationInterval);
  state.simulationInterval = null;

  // 1. 每次情境改變時，先重新從 basePaths 複製一份全新的 `paths` 陣列
  // 這確保我們每次都從一個乾淨的、沒有被上次情境修改過的基底開始
  paths = JSON.parse(JSON.stringify(basePaths));

  // 2. 確保取得最新的真實資料基礎值 (currentRealTemp, currentRealPm25)
  // 這裡只負責獲取，不直接修改 paths
  await fetchAndUpdateRealData(); // 這會更新 currentRealTemp 和 currentRealPm25

  // 3. 根據 currentRealTemp 和 currentRealPm25 更新 `paths` 裡每個路徑的 temp 和 pm25
  // 並考慮路段的 isExposed 和 isRoadside 屬性進行基礎調整
  paths.forEach(p => {
    // 將每個路徑的溫度設定為即時獲取的基礎溫度
    let adjustedTemp = currentRealTemp;
    if (p.isExposed) {
        // 如果是曝曬路段，增加一些溫度 (您可以根據實際情況調整增加的數值)
        adjustedTemp += 2; // 例如，曝曬路段比基礎溫度高 2 度
    }
    p.temp = adjustedTemp;

    // 同理更新 PM2.5
    let adjustedPm25 = currentRealPm25;
    if (p.isRoadside) {
        // 如果是路邊路段，PM2.5 值更高 (您可以調整增加的數值)
        adjustedPm25 += 2; // 例如，路邊路段比基礎 PM2.5 高 2
    }
    p.pm25 = adjustedPm25;
  });


  // 4. 根據「選定情境」對 `paths` 數據進行進一步的「模擬」調整
  switch (state.currentScenario) {
    case 'hot':
      paths.forEach((p) => {
        // 在基礎溫度之上，如果情境是「炎熱午後」，曝曬路段再額外增加溫度
        if (p.isExposed) {
          p.temp = Math.min(p.temp + 3, p.temp + 5); // 確保增加，但有上限
        }
      });
      break;
    case 'pollution':
      paths.forEach((p) => {
        // 在基礎 PM2.5 之上，如果情境是「空污事件」，路邊路段再額外增加 PM2.5
        if (p.isRoadside) {
          p.pm25 = Math.min(p.pm25 + 4, 15); // 確保增加，但有上限，例如不超過 15
        }
      });
      break;
    case 'live':
      // 即時模式：每30秒再拉一次真實資料並觸發重畫
      state.simulationInterval = setInterval(async () => {
        // 這裡會再次執行 handleScenarioChange 的邏輯，但不會觸發按鈕點擊事件
        // 它可以先 await fetchAndUpdateRealData();
        await fetchAndUpdateRealData(); // 更新 currentRealTemp 和 currentRealPm25
        // 然後手動觸發根據情境重新計算 paths 並重畫
        // 為了避免重複的 await fetchAndUpdateRealData()，這裡可以只調用一個更新 paths 的函數
        // 或直接呼叫 redrawAndFlash()，讓它重新計算路徑
        
        // 重新根據最新的 currentRealTemp 和 currentRealPm25 構造 paths
        paths = JSON.parse(JSON.stringify(basePaths));
        paths.forEach(p => {
            let adjustedTemp = currentRealTemp;
            if (p.isExposed) adjustedTemp += 2;
            p.temp = adjustedTemp;

            let adjustedPm25 = currentRealPm25;
            if (p.isRoadside) adjustedPm25 += 2;
            p.pm25 = adjustedPm25;
        });

        redrawAndFlash(); // 重新繪製地圖上的所有感測器和路徑
      }, 30000); // 每 30 秒更新
      break;
  }

  // 5. 最後重畫地圖上的所有感測器點和路徑，並閃爍高亮
  redrawAndFlash();
}


// --- Initialization ---
async function initialize() {
  // 1. 地圖初始化
  map = L.map('map').setView([23.4738, 120.4455], 17);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:'&copy; OpenStreetMap contributors'
  }).addTo(map);

  dom.mapLoader.style.display = 'none';
  dom.legend.style.display    = 'block';

  // 2. 填入下拉、畫節點、綁事件、預設路徑
 populateSelectors();
drawAllNodesAndSensors();
bindEvents();
// **在最一開始先拉真實資料再算路徑**
await fetchAndUpdateRealData();

// 每 5 分鐘自動拉一次最新資料並重畫
setInterval(async () => {
  await fetchAndUpdateRealData();
}, 5 * 60 * 1000);


}

document.addEventListener('DOMContentLoaded', initialize);

// --- 填選單 ---
function populateSelectors() {
  dom.startNodeSelect.innerHTML = '';
  dom.endNodeSelect.innerHTML   = '';
  Object.keys(nodes).forEach(id => {
    const opt1 = document.createElement('option');
    opt1.value = id; opt1.text = nodes[id].name;
    dom.startNodeSelect.appendChild(opt1);

    const opt2 = opt1.cloneNode(true);
    dom.endNodeSelect.appendChild(opt2);
  });
  dom.startNodeSelect.value = state.startNodeId;
  dom.endNodeSelect.value   = state.endNodeId;
}

// --- 綁事件 ---
function bindEvents() {
  dom.startNodeSelect.addEventListener('change', e => {
    state.startNodeId = +e.target.value;
    findAndDrawRoute();
  });
  dom.endNodeSelect.addEventListener('change', e => {
    state.endNodeId = +e.target.value;
    findAndDrawRoute();
  });
  dom.preferenceContainer.addEventListener('click', handlePreferenceChange);
  dom.scenarios.addEventListener('click', handleScenarioChange);
  dom.sunSensitiveToggle.addEventListener('change', e => {
    state.isSunSensitive = e.target.checked;
    findAndDrawRoute();
  });
}

// --- 畫節點與感測器 ---
function drawAllNodesAndSensors() {
  if (sensorLayerGroup) sensorLayerGroup.clearLayers();
  else sensorLayerGroup = L.layerGroup().addTo(map);

  Object.keys(nodes).forEach(id => {
    const n = nodes[id];
    if (!n.marker) {
      n.marker = L.circleMarker([n.lat, n.lng], {
        radius: 8, color: '#fff', weight: 2,
        fillColor: '#4338CA', fillOpacity: 0.9
      })
      .addTo(map)
      .bindTooltip(n.name, { permanent:true, direction:'top' })
      .on('click', ()=> {
        if (state.startNodeId!==+id && state.endNodeId!==+id) {
          dom.endNodeSelect.value = id;
          state.endNodeId = +id;
          findAndDrawRoute();
        }
      });
    }
  });

  paths.forEach(p => drawPathSensors(p));
}

function drawPathSensors(path) {
  const a = nodes[path.start];
  const b = nodes[path.end];
  const mid = [(a.lat + b.lat) / 2, (a.lng + b.lng) / 2];

  // 溫度顏色判斷 (使用實際攝氏溫度值)
  let tempColor;
  if (path.temp >= 30) {
    tempColor = '#EF4444'; // 高溫紅色 (30°C以上)
  } else if (path.temp <= 20) {
    tempColor = '#22C55E'; // 低溫綠色 (20°C以下)
  } else {
    tempColor = '#FBBF24'; // 中等溫度黃色 (20-30°C之間)
  }

  // 建立溫度感測點
  const tempIcon = L.divIcon({
    className: 'temp-sensor-dot',
    html: `<div style="background:${tempColor}; width:12px; height:12px; border-radius:50%; border:1px solid white;"></div>`
  });

  const tempMarker = L.marker(mid, {
    icon: tempIcon,
    zIndexOffset: 1000 // 確保顯示在最上層
  }).addTo(sensorLayerGroup);

  // 溫度提示框
  tempMarker.bindTooltip(
    `路段: ${a.name} ↔ ${b.name}<br>溫度: ${path.temp.toFixed(1)}°C`,
    { 
      direction: 'top',
      permanent: false, // 滑鼠懸停時才顯示
      className: 'custom-tooltip'
    }
  );

  // 如果PM2.5值高於6，顯示污染感測點
  if (path.pm25 > 6) {
    const pmIcon = L.divIcon({
      className: 'pm-sensor-dot',
      html: `<div style="background:#6B7280; width:10px; height:10px; border-radius:50%; border:1px solid white;"></div>`
    });

    // 稍微偏移位置避免重疊
    const pmPos = [mid[0] - 0.00005, mid[1] - 0.00005];
    
    L.marker(pmPos, {
      icon: pmIcon,
      zIndexOffset: 900
    })
    .addTo(sensorLayerGroup)
    .bindTooltip(
      `PM2.5: ${path.pm25.toFixed(1)}<br>${path.isRoadside ? '(路邊路段)' : ''}`,
      {
        direction: 'bottom',
        permanent: false
      }
    );
  }
}

// --- 計算與畫路徑 ---
function findAndDrawRoute(flash=false) {
  if (state.startNodeId===state.endNodeId) {
    dom.resultDiv.innerHTML = `<p class="text-red-500 font-bold">起點和終點不能相同！</p>`;
    if(recommendedRouteLayer) map.removeLayer(recommendedRouteLayer);
    if(shortestRouteLayer)    map.removeLayer(shortestRouteLayer);
    return;
  }
  const rec  = findShortestPath(state.startNodeId, state.endNodeId, state.currentPreference);
  const shrt = findShortestPath(state.startNodeId, state.endNodeId, 'shortest');

  recommendedRouteLayer = drawRoute(rec.path, recommendedRouteLayer, {color:'#3B82F6',weight:7,opacity:0.9});
  shortestRouteLayer    = drawRoute(shrt.path, shortestRouteLayer, {color:'#4B5563',weight:3,opacity:0.8,dashArray:'5,10'});

  if (flash && recommendedRouteLayer) {
    const el = recommendedRouteLayer.getElement();
    el?.classList.add('path-flash');
    setTimeout(()=> el?.classList.remove('path-flash'), 1000);
  }

  map.fitBounds(L.polyline(rec.path.map(i=>[nodes[i].lat,nodes[i].lng])).getBounds().pad(0.1));
  displayResult(rec, shrt);
}

function drawRoute(path, layer, opts) {
  if (layer) map.removeLayer(layer);
  if (!path||!path.length) return null;
  return L.polyline(path.map(id=>[nodes[id].lat,nodes[id].lng]), opts).addTo(map);
}

function findShortestPath(start, end, pref) {
  const costs = {}, prev = {};
  const unv = new Set(Object.keys(nodes).map(Number));
  Object.keys(nodes).forEach(id=>costs[id]=Infinity);
  costs[start]=0;

  while (unv.size) {
    let cur = [...unv].reduce((a,b)=>costs[a]<costs[b]?a:b);
    if (cur===end||costs[cur]===Infinity) break;
    unv.delete(cur);

    for (const p of paths.filter(p=>p.start===cur||p.end===cur)) {
      const nxt = p.start===cur?p.end:p.start;
      if (!unv.has(nxt)) continue;
      const w = calculateWeight(p, pref);
      if (costs[cur]+w < costs[nxt]) {
        costs[nxt] = costs[cur]+w;
        prev[nxt]  = cur;
      }
    }
  }

  const path = [], stats = {totalDistance:0,totalTemp:0,totalShade:0,totalPm25:0};
  for (let cur=end; cur!==undefined; cur=prev[cur]) path.unshift(cur);
  if (path[0]!==start) return {path:[],totalDistance:Infinity};

  for (let i=0;i<path.length-1;i++) {
    const p = paths.find(p=>[p.start,p.end].includes(path[i])&&[p.start,p.end].includes(path[i+1]));
    stats.totalDistance += p.distance;
    stats.totalTemp     += p.temp;
    stats.totalShade    += p.shade;
    stats.totalPm25     += p.pm25;
  }
  const segs = path.length-1;
  return {
    path,
    totalDistance: stats.totalDistance,
    avgTemp: stats.totalTemp/segs,
    avgShade: stats.totalShade/segs,
    avgPm25: stats.totalPm25/segs,
  };
}

// --- 計算路徑權重 ---
function calculateWeight(path, pref) {
  if (pref === 'shortest') return path.distance; // 最短路徑模式：只考慮距離

  let cost = path.distance; // 預設成本是路段距離

  // 調整權重係數，使其對距離的影響更小，避免過度繞路
  const sunSensitiveTempPenalty = state.isSunSensitive ? 100 : 30; // 日曬敏感時溫度懲罰降低
  const normalTempPenalty = 10; // 一般溫度懲罰
  const shadeBonus = 20; // 遮蔭獎勵降低
  const pm25Penalty = 150; // PM2.5 懲罰降低

  switch (pref) {
    case 'comfort': // 舒適優先模式
      // 降低溫度懲罰和遮蔭獎勵，讓距離有更大的影響
      cost += path.temp * sunSensitiveTempPenalty; // 溫度越高，成本越高
      cost -= path.shade * shadeBonus;  // 遮蔭越多，成本越低
      break;
    case 'health': // 健康優先模式
      // 調整 PM2.5 的處理方式：
      // 不再直接 return Infinity，而是給予非常高的懲罰，但仍允許繞路
      // 這樣可以避免在沒有其他選擇時完全無路可走，或者繞路過於誇張
      if (path.pm25 > 8) { // 將閾值稍微提高，或根據實際情況調整
          cost += path.pm25 * pm25Penalty * 3; // 超過閾值時給予更高的懲罰
      } else if (path.pm25 > 6) {
          cost += path.pm25 * pm25Penalty; // PM2.5 較高時增加成本
      }
      // 如果您仍希望完全避開，可以保留 return Infinity，但這會導致繞路更嚴重
      // if (path.pm25 > 6) return Infinity;
      break;
    case 'balanced': // 智慧平衡推薦模式
      // 進一步降低各項權重，確保距離在平衡模式中佔主導地位
      cost += path.temp * (state.isSunSensitive ? 10 : 5); // 溫度影響更小
      cost -= path.shade * 2;  // 遮蔭影響更小
      cost += path.pm25 * 15;  // PM2.5 影響更小
      break;
  }
  return cost;
}

function handlePreferenceChange(e) {
  const btn = e.target.closest('.pref-btn');
  if (!btn) return;
  state.currentPreference = btn.dataset.pref;
  document.querySelectorAll('.pref-btn').forEach(b=>{
    b.classList.toggle('border-indigo-600', b===btn);
    b.classList.toggle('bg-indigo-100', b===btn);
  });
  findAndDrawRoute();
}


function displayResult(rec, shrt) {
  if (!rec.path.length) {
    dom.resultDiv.innerHTML = '<p class="text-red-500">找不到路徑！</p>';
    return;
  }
  const walkTime = Math.round(rec.totalDistance/80);
  let reasoning = {
    comfort: '避開高溫路段，優先遮蔭。',
    health:  '完全繞開高污染區域。',
    balanced: '在距離、舒適度與健康間取得平衡。',
    shortest: '純粹以距離最短為考量。', // 新增最短路徑的說明
  }[state.currentPreference];
  const diff = rec.totalDistance - shrt.totalDistance;
  const compare = diff>10
    ? `比最短多 ${diff.toFixed(0)} 公尺，`
    : diff<-10
    ? `比最短少 ${Math.abs(diff).toFixed(0)} 公尺，`
    : `與最短差不多，`;
  dom.resultDiv.innerHTML = `
    <h3 class="font-bold mb-2">AI 智慧路徑分析</h3>
    <p class="text-sm mb-2">${compare}${reasoning}</p>
    <p class="text-sm">路線：${rec.path.map(i=>nodes[i].name).join('→')}</p>
    <p class="text-sm">時間：約 ${walkTime} 分鐘，距離 ${rec.totalDistance.toFixed(0)}m</p>
  `;
}

function runLiveSimulation() {
  let changed = false;
  paths.forEach(p=>{
    const o = p.temp;
    p.temp = Math.max(1, Math.min(10, p.temp + (Math.random()-0.5)*1));
    if (Math.abs(o-p.temp)>0.3) changed = true;
  });
  if (changed) {
    drawAllNodesAndSensors();
    findAndDrawRoute(true);
  }
}

