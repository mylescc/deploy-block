const core = require('@actions/core');
const github = require('@actions/github');
const { utcToZonedTime } = require('date-fns-tz')

try {
  const timezone = core.getInput('timezone');
  const now = utcToZonedTime(new Date(), timezone)

  const weekDays =  [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday'
  ];

  const dayOfWeek = weekDays[now.getDay()]
  let deadline = core.getInput(dayOfWeek)

  if (deadline === null || deadline === undefined) {
    return
  }

  deadline = parseInt(deadline)
  const nowFormated = parseInt(`${now.getHours()}${now.getMinutes()}`)

  if (nowFormated > deadline) {
    core.setFailed(`It's passed ${deadline} on a ${dayOfWeek} so deploys are blocked`);
  }
} catch (error) {
  core.setFailed(error.message);
}
