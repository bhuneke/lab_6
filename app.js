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
  total: 0,
  salesHourly: function(){
    for (var i = 0; i < this.storeHours.length; i++) {
      var randomCookies = Math.round(this.cookiesPurchasedHourly());
      this.cookieArray[i] = (this.storeHours[i] + ': ' + randomCookies + ' cookies');
      this.total += randomCookies;
    }
    return this.total;
    console.log('total: ' + this.total);
    console.log(this.cookieArray);
  },
  cookieArray: [],
  listCreation: function (){
    this.salesHourly();
    var contentArea = document.getElementById('content_area');
    console.log(this.cookieArray);
    var h1 = document.createElement('h1');
    h1.textContent = '1st and Pike';
    var ul = document.createElement('ul');
    var li;
    var liTotal = document.createElement('li');
    for (var i = 0; i < this.cookieArray.length; i++) {
      li = document.createElement('li');
      this.cookieArray[i];
      li.textContent = this.cookieArray[i];
      ul.appendChild(li);
    }
    liTotal.textContent = 'Total: ' + this.total + ' cookies';
    ul.appendChild(liTotal);
    contentArea.appendChild(h1);
    contentArea.appendChild(ul);
  }
};
console.log(firstAndPike.randomHourlyCustomers());
console.log(firstAndPike.cookiesPurchasedHourly());
console.log(firstAndPike.avgCookiesPerCustomer);
console.log(firstAndPike.cookieArray);
firstAndPike.listCreation();
