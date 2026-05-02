function WeatherDataApi() {
  this.fetchWeatherData = function (day) {
    console.log("fetchWeatherData...");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`天气数据${day}`);
      }, 1000);
    });
  };
}

function WeatherDataApiProxy() {
  this.cache = {};
  // 跟代理类实现同一接口
  this.fetchWeatherData = function (day) {
    if (this.cache[day]) {
      return Promise.resolve(this.cache[day]);
    } else {
      const weatherData = new WeatherDataApi();
      const p = weatherData.fetchWeatherData(day);
      p.then((res) => (this.cache[day] = res));
      return p;
    }
  };
}

const p = new WeatherDataApiProxy();
p.fetchWeatherData(1).then((res) => console.log(res));
p.fetchWeatherData(2).then((res) => console.log(res));
setTimeout(() => {
  p.fetchWeatherData(1).then((res) => console.log(res));
}, 2000);
