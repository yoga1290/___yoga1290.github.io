(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-79187801-1', 'auto');

window.document.addEventListener('click', function(e) {

    var page = '';
    if (e.target.hasAttribute('id')) {
      page = e.target.id;
    } else if (e.target.hasAttribute('onclick')) {
      page = e.target.innerText;
    } else if (e.target.tagName.toUpperCase() === 'A' && e.target.hasAttribute('href')) {
      page = e.target.href;
    }

    if (page.length > 0) {
      ga('set', 'page', page);
      ga('send', 'pageview');
    }

} )
