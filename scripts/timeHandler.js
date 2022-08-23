function findTime() {
    let hours = [
      12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
      11,
    ];
    const hourIndex = new Date().getHours(),
          getMin = new Date().getMinutes(),
          am_pm = hourIndex < 11 ? "PM" : "AM",
          zero = getMin < 10 ? "0" : "";
  
    return (postTime = `${hours[hourIndex]}:${zero}${getMin} ${am_pm}`);
  }

  