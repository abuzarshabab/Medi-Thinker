var leftReport = document.getElementById('leftReport');
leftReport.addEventListener('click', function() {
  // console.log('hello world');

  var contentMiddle = document.getElementById('contentMiddle');
  var contentRight = document.getElementById('contentRight');
  contentMiddle.parentNode.removeChild(contentMiddle);
  contentRight.parentNode.removeChild(contentRight);
  var parentReport = document.getElementById('container');

  var contentReport = document.getElementById('contentMiddleReport');
  parentReport.appendChild(contentReport);
});
