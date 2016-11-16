'use strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var cookiesByHour = [];
var stores = [];

/*var storeArray = function() {
  for (var i = 0; i < storeHours.length; i++){
    cookiesByHour[i] = 0;
  }
};*/

function CookieStore(storeName, minHourlyCustomers, maxHourlyCustomers, avgCookiesPerCustomer) {
  this.storeName = storeName;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.cookieArray = [];
  this.total = 0;
};

CookieStore.prototype.logStoreName = function() {
  console.log(this.storeName);
};

CookieStore.prototype.randomHourlyCustomers = function() {
  this.minHourlyCustomers = Math.ceil(this.minHourlyCustomers);
  this.maxHourlyCustomers = Math.floor(this.maxHourlyCustomers);
  return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers);
};

CookieStore.prototype.cookiesPurchasedHourly = function() {
  var totalHourlyCookies = Math.round(this.avgCookiesPerCustomer * this.randomHourlyCustomers());
  return totalHourlyCookies;
};

CookieStore.prototype.totalSalesPerLocation = function() {
  var randomCookies;
  for (var i = 0; i < storeHours.length; i++) {
    randomCookies = this.cookiesPurchasedHourly();
    this.cookieArray[i] = randomCookies;
    this.total += randomCookies;
    cookiesByHour[i] += randomCookies;
  };
  return this.total;
};


/*WORKING ON THE STRETCH GOAL HERE...
var storeArray = [];
var makeStoreArray = function() {
  for (var i = 0; i)
storeArray =
function totalSalesPerHour () {
  var totalAllStores = 0;
  for (var i = 0; i < storeHours.length; i++) {
    for (var i = 1; i < 4; i++) {
       totalAllStores += cookieArray[0];
    }
  }
  return totalAllStores;
};*/

//make array of all store locations
//go over each store and for each store add up the cookies in that slot in the array
//storeArray();

var storeForm = document.getElementById('store_form');

storeForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  var storeName = event.target.store_name.value;
  var minHourlyCustomers = event.target.min_cust.value;
  var maxHourlyCustomers = event.target.max_cust.value;
  var avgCookiesPerCustomer = event.target.avg_cookies;

  var newStore = new CookieStore(storeName, minHourlyCustomers, maxHourlyCustomers, avgCookiesPerCustomer);
  stores.push(newStore);

  event.target.store_name.value = '';
  event.target.min_cust.value = '';
  event.target.max_cust.value = '';
  event.target.avg_cookies = '';
}

function renderHeaderRow () {
  var storeTable = document.getElementById('store_table');
  var tableRow = document.createElement('tr');
  var blankTableHeader = document.createElement('th');
  var totalTableHeader = document.createElement('th');
  var hourlyTableHeader;

  tableRow.appendChild(blankTableHeader);

  for (var i = 0; i < storeHours.length; i++) {
    hourlyTableHeader = document.createElement('th');//create element
    hourlyTableHeader.textContent = storeHours[i];//update content
    tableRow.appendChild(hourlyTableHeader);//put it somewhere
  }

  totalTableHeader.textContent = 'Daily Location Total';
  tableRow.appendChild(totalTableHeader);

  storeTable.appendChild(tableRow);
}

renderHeaderRow();

CookieStore.prototype.toHtml = function (){
  this.totalSalesPerLocation();
  var storeTable = document.getElementById('store_table');
  var tableRow = document.createElement('tr');
  var nameTableHeader = document.createElement('th');
  var totalTableData = document.createElement('td');
  totalTableData.setAttribute('class', 'totalCell');
  var hourlyTableData;

  nameTableHeader.textContent = this.storeName;
  tableRow.appendChild(nameTableHeader);

  for (var i = 0; i < storeHours.length; i++) {
    hourlyTableData = document.createElement('td');
    hourlyTableData.textContent = this.cookieArray[i]; //use random numbers generated
    tableRow.appendChild(hourlyTableData);
  }

  totalTableData.textContent = this.total;
  tableRow.appendChild(totalTableData);

  storeTable.appendChild(tableRow);
};

//FOR STRETCH GOAL
/* function renderFooterRow(){
  var storeTable = document.getElementById('store_table');
  var tableRow = document.createElement('tr');
  var totalTableFooter = document.createElement('th');
  var hourlyTableFooter;

  for
}; */

/* put all objects into an array
iterate over that array
for each item in the store array, want to access cookiesArray and pull out information for that one array item and stash it somewhere
add them together while walking through
*/

var pike = new CookieStore('1st and Pike', 23, 65, 6.3);
console.log(pike);

var seaTacAirport = new CookieStore('SeaTac Airport', 3, 24, 1.2);
console.log(seaTacAirport);

var seattleCenter = new CookieStore('Seattle Center', 11, 38, 3.7);
console.log(seattleCenter);

var capitolHill = new CookieStore('Capitol Hill', 20, 38, 2.3);
console.log(capitolHill);

var alki = new CookieStore('Alki', 2, 16, 4.6);
console.log(alki);

pike.toHtml();

console.log('randomHourlyCustomers: ' + pike.randomHourlyCustomers());
console.log('cookiesPurchasedHourly: ' + pike.cookiesPurchasedHourly());
console.log('totalSalesPerLocation: ' + pike.totalSalesPerLocation());
console.log('cookieArray: ' + pike.cookieArray);
//console.log('cookieArray: ' + pike.cookieArray[]);

seaTacAirport.toHtml();

console.log('randomHourlyCustomers: ' + seaTacAirport.randomHourlyCustomers());
console.log('cookiesPurchasedHourly: ' + seaTacAirport.cookiesPurchasedHourly());
console.log('totalSalesPerLocation: ' + seaTacAirport.totalSalesPerLocation());
console.log('cookieArray: ' + seaTacAirport.cookieArray);

seattleCenter.toHtml();

console.log('randomHourlyCustomers: ' + seattleCenter.randomHourlyCustomers());
console.log('cookiesPurchasedHourly: ' + seattleCenter.cookiesPurchasedHourly());
console.log('totalSalesPerLocation: ' + seattleCenter.totalSalesPerLocation());
console.log('cookieArray: ' + seattleCenter.cookieArray);

capitolHill.toHtml();

console.log('randomHourlyCustomers: ' + capitolHill.randomHourlyCustomers());
console.log('cookiesPurchasedHourly: ' + capitolHill.cookiesPurchasedHourly());
console.log('totalSalesPerLocation: ' + capitolHill.totalSalesPerLocation());
console.log('cookieArray: ' + capitolHill.cookieArray);

alki.toHtml();

console.log('randomHourlyCustomers: ' + alki.randomHourlyCustomers());
console.log('cookiesPurchasedHourly: ' + alki.cookiesPurchasedHourly());
console.log('totalSalesPerLocation: ' + alki.totalSalesPerLocation());
console.log('cookieArray: ' + alki.cookieArray);

//console.log('cookiesByHour: ' + cookiesByHour);

/*cookiesPerDay: function() {
    var dailyCookieCount;
    for(var i = 0; i < this.storeHours.length; i++) {
      dailyCookieCount = this.cookiesPurchasedHourly();
      this.totalSalesPerLocation.push(dailyCookieCount);
    }
  },
  toHtml: function() {
    this.cookiesPerDay();
    var unorderedList = document.createElement('ul');
    var storeNameListItem = document.createElement('li');
    var totalListItem = document.createElement('li');
    var hourlyListItem;
    var hourMessage;

    storeNameListItem.textContent = this.name;
    unorderedList.appendChild(storeNameListItem);

    for (var i = 0; i < this.storeHours.length; i++) {
      hourlyListItem = document.createElement('li');
      hourMessage = this.storeHours[i] + ': ' + this.totalSalesPerLocation[i];
      hourlyListItem.textContent = hourMessage;
      unorderedList.appendChild(hourlyListItem);
    }

    totalListItem.textContent = 'Total: ' + this.total + ' cookies';
    unorderedList.appendChild(totalListItem);

    return unorderedList;
  }*/

// in console: var contentArea = document.getElementById('content_area')
//contentArea.appendChild(storeNameListItem)
