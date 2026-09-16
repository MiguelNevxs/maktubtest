import React from 'react';
import { REGISTERED_MEMBERS } from '../data/schedule';

export default function DayOffPicker({ date, names, onToggle }) {
  return <details className="day-off-picker">
    <summary aria-label={`Marcar folga em ${date}`}>Folgas{names.length ? ` (${names.length})` : ' +'}</summary>
    <div className="day-off-options">
      <p>Quem estará de folga?</p>
      {REGISTERED_MEMBERS.map(name => <label key={name}>
        <input type="checkbox" checked={names.includes(name)} onChange={() => onToggle(date, name)} />
        {name}
      </label>)}
      <small>Ao desmarcar, a escala anterior reaparece se a vaga não tiver sido substituída.</small>
    </div>
  </details>;
}
