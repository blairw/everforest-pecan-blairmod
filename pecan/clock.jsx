const command = 'date +"%a %d %b %Y, %H:%M"';
const refreshFrequency = 60000; // ms

const render = ({ output }) => <div class='screen'><div class='pecanclock'>→ {`${output}`}</div></div>;

export { command, refreshFrequency, render };
