const button = document.querySelector('button');
var state = false;
const canUnregister = window.CSS && CSS.unregisterProperty;

button.addEventListener('click', function(e) {
  if (!state) {
    registerProperties();
  } else if (canUnregister) {
    unregisterProperties();
  }
})

if (window.CSS && CSS.registerProperty) {
  document.documentElement.classList.add('supported');
}

function registerProperties() {
  CSS.registerProperty({
    name: '--pupil1-x',
    syntax: '<length>',
    inherits: false,
    initialValue: '0px'
  });
  CSS.registerProperty({
    name: '--by1',
    syntax: '<length>',
    inherits: false,
    initialValue: '0px'
  });
  CSS.registerProperty({
    name: '--by2',
    syntax: '<length>',
    inherits: false,
    initialValue: '0px'
  });
  
  state = !state;
}
function unregisterProperties() {
  CSS.unregisterProperty('--pupil1-x');
  CSS.unregisterProperty('--by1');
  CSS.unregisterProperty('--by2');
  
  state = !state;
}