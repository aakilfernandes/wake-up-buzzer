const fetch = require('node-fetch')
const moment = require('date-format')

const target = 1 * 60 * 1000

sendMessage()
setInterval(run, target)

async function run(minutesish) {
  const sleep = target * Math.random()
  setTimeout(sendMessage, sleep)
}

function sendMessage() {
  const nowString = formatAMPM(new Date())
  console.log(nowString)
  fetch('https://ntfy.sh/aakilfernandes', {
    method: 'POST', // PUT works too
    body: nowString,
    headers: {
      'Title': 'Wake Up',
      'Priority': 'urgent',
    }
  })
}

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}
