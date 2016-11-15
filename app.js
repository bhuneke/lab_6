'use strict';

var firstAndPike = {
  storeName: '1st and Pike',
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  avgCookiesPerCustomer: 6.3,
  randomHourlyCustomers: function(){
    this.minHourlyCustomers = Math.ceil(this.minHourlyCustomers);
    this.maxHourlyCustomers = Math.floor(this.maxHourlyCustomers);
    return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers);
  },
  cookiesPurchasedHourly: function() {
    var total = (this.avgCookiesPerCustomer * this.randomHourlyCustomers());
    return total;
  },
  salesHourly: function(){
    for (var i = 0; i < this.storeHours.length; i++) {
      var randomCookies = Math.round(this.cookiesPurchasedHourly());
      this.cookieArray[i] = (this.storeHours[i] + ': ' + randomCookies + ' cookies');
    }
    console.log(this.cookieArray);
  },
  cookieArray: [],
  listCreation: function (){
    var contentArea = document.getElementById('content_area');
    console.log(this.cookieArray);
    var h1 = document.createElement('h1');
    h1.textContent = '1st and Pike';
    var ul = document.createElement('ul');
    for (var i = 0; i < this.cookieArray.length; i++) {
      this.cookieArray[i];
      var li = document.createElement('li');
      li.textContent = this.cookieArray[i];
      ul.appendChild(li);
    }
    contentArea.appendChild(h1);
    contentArea.appendChild(ul);
  }
};
//Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
console.log(firstAndPike.randomHourlyCustomers());
console.log(firstAndPike.cookiesPurchasedHourly());
console.log(firstAndPike.avgCookiesPerCustomer);
console.log(firstAndPike.salesHourly());
console.log(firstAndPike.cookieArray);
firstAndPike.listCreation();
console.log(firstAndPike.total);
