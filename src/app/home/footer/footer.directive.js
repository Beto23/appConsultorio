module.exports = function(ngModule){
  ngModule.directive('homeFooter',homeFooter);

  function homeFooter (){
    return{
      restrict: 'E',
			template: require('./footer.html')
    }
  }
}
