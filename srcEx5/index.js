var tab = [6,1,4,2,5,3];
var tabPair = new Array();
var tabImpair = new Array();
tab.forEach(element => {
  if(element%2)
{
  tabImpair.push(element);
}else {
  tabPair.push(element);
}
})
tabPair.sort()
tabImpair.sort()
console.log("tabPair : ", tabPair)
console.log("tabImpair : ", tabImpair)
