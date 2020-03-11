//let POMprac = () => {
  let POMprac = function () {  
    
   let  step1 = element(by.cssContainingText("[class='mega-link-item pa3 pa0-ns ma0 fn list f4 fl-ns ng-star-inserted'] a",'Explore'));
   let  step2 = element(by.cssContainingText('.mh1','All Destinations'));
   let  step3 = element(by.cssContainingText("[class='pv0 list-item ng-star-inserted'] a",'Buffalo, NY (BUF)'));

this.first_element = function ()
{
   step1.click();
};

this.second_element = function ()
{
    
    step2.click();
};

this.third_element = function ()
{
    
    step3.click();
};



};
module.exports = new POMprac();
//export default POMprac;
