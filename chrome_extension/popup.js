document.addEventListener('DOMContentLoaded', function () {
    // 获取HTML元素
    var zoneElement = document.querySelector('#zone');
    var carbonIntensityElement = document.querySelector('#carbonIntensity');
    var datetimeElement = document.querySelector('#datetime');
  
    // 将信息填充到HTML元素中
    zoneElement.textContent = '区域：JP-TK';
    carbonIntensityElement.textContent = '碳排放强度：466';
    datetimeElement.textContent = '日期时间：2023-10-25T01:00:00.000Z';
  
    // 添加更多信息...
  });
  