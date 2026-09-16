import React, { useState, useEffect } from 'react';
import { PackagePlus, Trash2, Snowflake, ArrowLeft, Tag } from 'lucide-react';
const STOCK_TYPES = { stock: { key: 'maktub_chamber_stock_v2', title: 'Câmara', description: 'Registre os produtos e indique onde estão guardados na câmara.' }, cleaning: { key: 'maktub_cleaning_stock_v1', title: 'Produtos de limpeza', description: 'Organize os materiais de limpeza, as quantidades e os locais de armazenamento.' }, drinks: { key: 'maktub_drinks_stock_v1', title: 'Refrigerantes', description: 'Cadastre cada refrigerante, incluindo marca e tamanho no nome do produto.' } };
const PRODUCTS = ['Frango', 'Calabresa', 'Calabresa fatiada', 'Lombo', 'Cebola', 'Tomate picado', 'Bacon', 'Presunto', 'Catupiry', 'Carne', 'Bacon picado'];
const normalize = name => name.trim().toLocaleLowerCase('pt-BR');
export default function ChamberStock({ category = 'stock' }) {
  const config = STOCK_TYPES[category];
  const KEY = config.key;
  const [items, setItems] = useState(() => {
    let existing = [];
    try {
      const saved = JSON.parse(localStorage.getItem(KEY) || 'null');
      if (Array.isArray(saved)) return saved;
      const previous = category === 'stock' ? JSON.parse(localStorage.getItem('maktub_chamber_stock_v1') || '[]') : [];
      if (Array.isArray(previous)) existing = previous;
    } catch { /* Start with the requested catalog if storage is unavailable. */ }
    return [...existing, ...(category === 'stock' ? PRODUCTS : []).filter(name => !existing.some(item => normalize(item.name) === normalize(name))).map(name => ({ id: `catalog-${normalize(name).replaceAll(' ', '-')}`, name, quantity: '', unit: 'un', location: '', lot: '' }))];
  });
  const [error, setError] = useState(false);
  const [lotItemId, setLotItemId] = useState(null);
  const [lotDraft, setLotDraft] = useState('');
  const [lotSaved, setLotSaved] = useState(false);
  useEffect(() => {
    try { localStorage.setItem(KEY, JSON.stringify(items)); setError(false); } catch { setError(true); }
  }, [items, KEY]);
  function save(next) {
    setItems(next);
    try { localStorage.setItem(KEY, JSON.stringify(next)); setError(false); } catch { setError(true); }
  }
  function addItem(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name')).trim();
    if (!name) return;
    save([...items, { id: crypto.randomUUID(), name, quantity: String(data.get('quantity')), unit: String(data.get('unit')), location: String(data.get('location')).trim() }]);
    form.reset();
  }
  function update(id, field, value) { save(items.map(item => item.id === id ? { ...item, [field]: value } : item)); }
  const lotItem = items.find(item => item.id === lotItemId);
  if (lotItem) return <div className="chamber-content lot-page">
    <button type="button" className="lot-back" onClick={() => setLotItemId(null)}><ArrowLeft size={16} aria-hidden="true" />Voltar ao estoque</button>
    <div className="stock-intro"><h3>Catupiry · Lote</h3><p>Digite o código do lote conforme aparece na embalagem.</p></div>
    <form className="lot-form" onSubmit={event => { event.preventDefault(); update(lotItem.id, 'lot', lotDraft.trim()); setLotSaved(true); }}>
      <label htmlFor="catupiry-lot">Número ou código do lote</label>
      <input id="catupiry-lot" value={lotDraft} onChange={event => { setLotDraft(event.target.value); setLotSaved(false); }} placeholder="Digite o lote da embalagem" maxLength={100} required autoFocus />
      <button type="submit" className="edit-schedule"><Tag size={16} aria-hidden="true" />Salvar lote</button>
      <p role="status">{error ? 'Não foi possível salvar neste navegador.' : lotSaved ? 'Lote salvo neste navegador.' : lotItem.lot ? `Lote atual: ${lotItem.lot}` : 'Nenhum lote cadastrado.'}</p>
    </form>
  </div>;
  return <div className="chamber-content">
    <div className="stock-intro"><h3>Organização de estoque</h3><p>{config.description}</p></div>
    <form className="stock-form" onSubmit={addItem}>
      <label>Produto<input name="name" placeholder="Nome do produto" required maxLength={100} /></label>
      <label>Quantidade<input name="quantity" type="number" min="0" step="0.01" placeholder="0" required /></label>
      <label>Unidade<select name="unit"><option>un</option><option>kg</option><option>L</option><option>caixas</option><option>pacotes</option></select></label>
      <label>Localização<input name="location" placeholder="Prateleira ou setor" maxLength={100} /></label>
      <button className="edit-schedule" type="submit"><PackagePlus size={16} aria-hidden="true" />Adicionar</button>
    </form>
    {items.length === 0 ? <div className="stock-empty"><Snowflake size={30} strokeWidth={1.3} aria-hidden="true" /><h4>Organize seu estoque aqui</h4><p>Adicione o primeiro produto para montar seu estoque.</p></div> : <div className="table-scroll" role="region" aria-label="Produtos no estoque" tabIndex={0}>
      <table className="stock-table"><caption>Estoque · {config.title}</caption><thead><tr><th>Produto</th><th>Quantidade</th><th>Unidade</th><th>Localização</th><th>Ações</th></tr></thead><tbody>
        {items.map(item => <tr key={item.id}>
          <td><input aria-label={`Nome de ${item.name}`} value={item.name} maxLength={100} onChange={e => update(item.id, 'name', e.target.value)} />{category === 'stock' && (normalize(item.name) === 'catupiry' || item.id === 'catalog-catupiry') && <button type="button" className="lot-link" onClick={() => { setLotItemId(item.id); setLotDraft(item.lot || ''); setLotSaved(false); }}><Tag size={13} aria-hidden="true" />{item.lot ? `Lote: ${item.lot}` : 'Cadastrar lote'} →</button>}</td>
          <td><input aria-label={`Quantidade de ${item.name}`} type="number" min="0" step="0.01" value={item.quantity} onChange={e => { if (e.target.value === '' || Number(e.target.value) >= 0) update(item.id, 'quantity', e.target.value); }} /></td>
          <td><select aria-label={`Unidade de ${item.name}`} value={item.unit} onChange={e => update(item.id, 'unit', e.target.value)}>{['un','kg','L','caixas','pacotes'].map(unit => <option key={unit}>{unit}</option>)}</select></td>
          <td><input aria-label={`Localização de ${item.name}`} value={item.location} maxLength={100} onChange={e => update(item.id, 'location', e.target.value)} /></td>
          <td><button type="button" className="stock-remove" aria-label={`Excluir ${item.name}`} onClick={() => save(items.filter(row => row.id !== item.id))}><Trash2 size={16} /></button></td>
        </tr>)}
      </tbody></table>
    </div>}
    <div className="schedule-note" role="status">{error ? 'Não foi possível salvar neste navegador.' : 'Estoque salvo neste navegador. Você pode editar os campos diretamente na tabela.'}</div>
  </div>;
}

