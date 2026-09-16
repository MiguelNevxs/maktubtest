export const DAYS = ['Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];
export const TEAM = ['Miguel', 'Ramon', 'Angelina', 'Ana Paula', 'Maia', 'Flavia'];
const WEEK_MS = 7 * 86400000;
const ANCHOR = Date.UTC(2026, 8, 14); // Monday: Miguel starts the alternating cycle.
const mod = (value, divisor) => ((value % divisor) + divisor) % divisor;

export function getWeekIndex(date) {
  return Math.floor((Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - ANCHOR) / WEEK_MS);
}

export function createWeeklySchedule(weekIndex) {
  const lead = TEAM[mod(weekIndex, 2)];
  const other = TEAM[1 - mod(weekIndex, 2)];
  const rest = Array.from({ length: 4 }, (_, i) => TEAM[2 + mod(i + weekIndex, 4)]);
  const [a, b, c, d] = rest;
  // Nine remaining kitchen slots: 3 for one person, 2 for each of the others.
  // Rotate the extra slot every week among the four other team members.
  const kitchen = [[lead, a], [lead, b], [other, c], [a, d], [b, c], [a, d]];
  const lightBalance = Object.fromEntries(TEAM.map(name => [name, 0]));
  const schedule = {};
  DAYS.forEach((day, index) => {
    const available = TEAM.filter(name => !kitchen[index].includes(name));
    let best;
    let bestScore = Infinity;
    for (let i = 0; i < 4; i++) for (let j = i + 1; j < 4; j++) {
      const broom = [available[i], available[j]];
      const score = available.reduce((sum, name) => sum + (lightBalance[name] + (broom.includes(name) ? 1 : -1)) ** 2, 0);
      if (score < bestScore) { bestScore = score; best = broom; }
    }
    const mop = available.filter(name => !best.includes(name));
    best.forEach(name => lightBalance[name]++);
    mop.forEach(name => lightBalance[name]--);
    schedule[`cozinha-${day}`] = kitchen[index];
    schedule[`vassoura-${day}`] = mod(weekIndex, 2) ? mop : best;
    schedule[`pano-${day}`] = mod(weekIndex, 2) ? best : mop;
  });
  return schedule;
}

export function createMonthlySchedule(month) {
  if (!/^\d{4}-(0[1-9]|1[0-2])$/.test(month)) return { dates: [], schedule: {} };
  const [year, monthNumber] = month.split('-').map(Number);
  const dates = [];
  const schedule = {};
  const weeks = new Map();
  const length = new Date(year, monthNumber, 0).getDate();
  for (let day = 1; day <= length; day++) {
    const date = new Date(year, monthNumber - 1, day);
    if (date.getDay() === 1) continue;
    const iso = `${month}-${String(day).padStart(2, '0')}`;
    const weekday = DAYS[(date.getDay() + 5) % 7];
    const weekIndex = getWeekIndex(date);
    if (!weeks.has(weekIndex)) weeks.set(weekIndex, createWeeklySchedule(weekIndex));
    dates.push({ iso, label: date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }), weekday });
    ['cozinha', 'vassoura', 'pano'].forEach(task => {
      schedule[`${task}-${iso}`] = weeks.get(weekIndex)[`${task}-${weekday}`];
    });
  }
  return { dates, schedule };
}
export const CURRENT_WEEK = getWeekIndex(new Date());
export const DEFAULT_SCHEDULE = createWeeklySchedule(CURRENT_WEEK);
