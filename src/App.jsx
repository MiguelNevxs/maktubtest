import React, { useState } from 'react';
import { CalendarDays, ChefHat, Brush, Sparkles, Diamond, Check, Pencil } from 'lucide-react';

import { DAYS, TEAM, DEFAULT_SCHEDULE, CURRENT_WEEK, createMonthlySchedule } from './data/schedule';
const TASKS = [{ id: 'cozinha', name: 'Cozinha', icon: ChefHat }, { id: 'vassoura', name: 'Vassoura', icon: Brush }, { id: 'pano', name: 'Pano', icon: Sparkles }];
const STORAGE_KEY = `maktub_weekly_rotation_v4_${CURRENT_WEEK}`;

export default function App() {
  const [view, setView] = useState('monthly');
  const [month, setMonth] = useState(() => {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
  });
  const [monthlyEdits, setMonthlyEdits] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('maktub_monthly_rotation_v2') || '{}');
      return saved && typeof saved === 'object' && !Array.isArray(saved) ? saved : {};
    } catch { return {}; }
  });
  const generatedMonth = createMonthlySchedule(month);
  const monthlySchedule = { ...generatedMonth.schedule, ...monthlyEdits[month] };
  const [schedule, setSchedule] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      return saved && typeof saved === 'object' && !Array.isArray(saved) ? { ...DEFAULT_SCHEDULE, ...saved } : DEFAULT_SCHEDULE;
    } catch { return DEFAULT_SCHEDULE; }
  });
  const [saveError, setSaveError] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  function updateMonthlyCell(key, slot, value) {
    const pair = [...(monthlySchedule[key] || generatedMonth.schedule[key])];
    pair[slot] = value;
    const next = { ...monthlyEdits, [month]: { ...monthlyEdits[month], [key]: pair } };
    setMonthlyEdits(next);
    try { localStorage.setItem('maktub_monthly_rotation_v2', JSON.stringify(next)); setSaveError(false); }
    catch { setSaveError(true); }
  }
  function updateCell(key, slot, value) {
    const pair = Array.isArray(schedule[key]) ? [...schedule[key]] : [...DEFAULT_SCHEDULE[key]];
    pair[slot] = value;
    const next = { ...schedule, [key]: pair };
    setSchedule(next);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); setSaveError(false); }
    catch { setSaveError(true); }
  }
  return (
    <div className="landing">
      <header className="topline">
        <span className="brand-mark"><Diamond size={12} aria-hidden="true" /> Pizzaria & Esfiharia</span>
      </header>
      <main className="landing-main">
        <div className="brand">
          <img className="brand-logo" src="/logo.png" alt="Maktub Pizzaria & Esfiharia" width="550" height="538" />
        </div>
        <section className="schedule" aria-labelledby="schedule-title">
          <div className="schedule-heading">
            <div className="schedule-title">
              <CalendarDays size={25} strokeWidth={1.4} aria-hidden="true" />
              <div><h2 id="schedule-title">{view === 'monthly' ? 'Escala do mês' : 'Escala da semana'}</h2><p>Cozinha: tarefa pesada · Vassoura e pano: tarefas leves</p></div>
            </div>
            <span className="schedule-tag">Terça a domingo</span>
          </div>
          <div className="schedule-toolbar month-controls">
            <div className="view-switch" aria-label="Visualização da escala">
              <button type="button" aria-pressed={view === 'weekly'} onClick={() => { setView('weekly'); setIsEditing(false); }}>Semanal</button>
              <button type="button" aria-pressed={view === 'monthly'} onClick={() => { setView('monthly'); setIsEditing(false); }}>Mensal</button>
            </div>
            {view === 'monthly' && <label className="month-picker">Mês da escala<input type="month" value={month} min="2000-01" max="2100-12" onChange={event => { if (/^(20\d{2}|2100)-(0[1-9]|1[0-2])$/.test(event.target.value)) { setMonth(event.target.value); setIsEditing(false); } }} /></label>}
          </div>
          <div className="schedule-toolbar">
            <p>{isEditing ? 'Escolha um integrante ou digite um nome em cada campo.' : 'Precisa trocar alguém de dia ou função? Edite os nomes abaixo.'}</p>
            <button type="button" className="edit-schedule" aria-pressed={isEditing} onClick={() => setIsEditing(!isEditing)}>
              {isEditing ? <Check size={15} aria-hidden="true" /> : <Pencil size={15} aria-hidden="true" />}
              {isEditing ? 'Concluir edição' : 'Editar escala'}
            </button>
          </div>
          <datalist id="team-members">{TEAM.map(name => <option key={name} value={name} />)}</datalist>
          {view === 'monthly' ? <>
            <p className="month-description">{generatedMonth.dates.length} dias de trabalho · Segunda-feira sem escala · Duas pessoas por função</p>
            <div className="table-scroll" role="region" aria-label="Escala mensal por data" tabIndex={0}>
              <table className="monthly-table">
                <caption>Escala mensal de {month}</caption>
                <thead><tr><th scope="col">DATA</th>{TASKS.map(task => <th scope="col" key={task.id}>{task.name}</th>)}</tr></thead>
                <tbody>{generatedMonth.dates.map(date => <tr key={date.iso}>
                  <th scope="row">{date.label}<span className="date-weekday">{date.weekday}</span></th>
                  {TASKS.map(task => { const key = `${task.id}-${date.iso}`; return <td key={key}><div className="task-pair">{[0, 1].map(slot => <input key={slot} readOnly={!isEditing} list={isEditing ? 'team-members' : undefined} aria-label={`${task.name} — ${date.iso}: responsável ${slot + 1}`} placeholder="Adicionar nome" maxLength={60} value={typeof monthlySchedule[key]?.[slot] === 'string' ? monthlySchedule[key][slot] : generatedMonth.schedule[key][slot]} onChange={event => updateMonthlyCell(key, slot, event.target.value)} />)}</div></td>; })}
                </tr>)}</tbody>
              </table>
            </div>
          </> :
          <div className="table-scroll" role="region" aria-label="Escala semanal — deslize para ver todos os dias" tabIndex={0}>
            <table>
              <caption>Responsáveis pelas tarefas da Maktub, de terça a domingo</caption>
              <thead><tr><th scope="col">TAREFA</th>{DAYS.map((day, index) => <th scope="col" key={day}><span className="day-number">0{index + 1}</span>{day}</th>)}</tr></thead>
              <tbody>{TASKS.map(({ id, name, icon: Icon }) => <tr key={id}>
                <th scope="row"><span className="task-label"><Icon size={17} strokeWidth={1.5} aria-hidden="true" />{name}</span></th>
                {DAYS.map(day => { const key = `${id}-${day}`; return <td key={key}><div className="task-pair">{[0, 1].map(slot => <input key={slot} readOnly={!isEditing} list={isEditing ? 'team-members' : undefined} aria-label={`${name} — ${day}: responsável ${slot + 1}`} placeholder="Adicionar nome" maxLength={60} value={typeof schedule[key]?.[slot] === 'string' ? schedule[key][slot] : DEFAULT_SCHEDULE[key][slot]} onChange={event => updateCell(key, slot, event.target.value)} />)}</div></td>; })}
              </tr>)}</tbody>
            </table>
          </div>}
          <div className="schedule-note"><span>{isEditing ? 'As mudanças são salvas automaticamente. Ao trocar nomes, confira o equilíbrio das tarefas.' : 'Clique em Editar escala para modificar os responsáveis.'}</span><span className={saveError ? 'save-error' : 'save-status'} role="status">{!saveError && <Check size={13} aria-hidden="true" />}{saveError ? 'Não foi possível salvar neste navegador.' : 'Salvo neste navegador'}</span></div>
        </section>
        <p className="below-note"><Diamond size={9} aria-hidden="true" />{view === 'monthly' ? 'Miguel e Ramon alternam terça e quarta na cozinha. O outro fica uma vez na semana. O rodízio continua entre os meses.' : 'Semana atual: Miguel e Ramon alternam quem assume a cozinha na terça e quarta. Duas pessoas por função.'}</p>
      </main>
      <footer className="landing-footer"><span className="footer-brand">Maktub<span>PIZZARIA & ESFIHARIA</span></span><span>Organização & cuidado em cada detalhe.</span></footer>
    </div>
  );
}

