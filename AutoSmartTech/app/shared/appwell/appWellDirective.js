homeTechApp.directive("appWellDir", function() {
    return {
        template : "<nav class='well ell-lg navbar navbar-inverse' role='navigation'>   <div class='navbar-header'> <a class='' href='#'>   <img class='logo' ng-src='assets/img/smart-home-icon-black-150x150.png'  alt=''>   </a>    <a class='navbar-brand' href='#'>SmartTech@Home</a> <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>  <span class='icon-bar'></span>  <span class='icon-bar'></span>  <span class='icon-bar'></span>  </button>   </div>  <div class='navbar-collapse collapse'>  <ul class='nav navbar-nav navbar-left'> </ul>   <ul class='nav navbar-nav navbar-center'>   </ul>   <ul class='nav navbar-nav navbar-right'>    <li><a href='#'><i class='fa fa-gear fa-2x'></i></a></li>   <li><a href='#'><i class='fa fa-question-circle-o fa-2x'></i></a></li>  <li><a href='#'><i class='fa fa-power-off fa-2x'></i></a></li>  </ul>   </div>  </nav>"
    };
});

