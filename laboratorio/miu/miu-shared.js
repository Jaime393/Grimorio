// shared.js v5.0 — Núcleo MATH-NEXUS "Micelio Unificado"
const MATH_NEXUS = (() => {
  const PHI = 1.6180339887498948482;
  const PHI_INV = 0.6180339887498948482;
  const SOURCE_ID = 'core_' + Math.random().toString(36).slice(2, 9);

  const state = {
    version: '5.0',
    phi: PHI, phi_inv: PHI_INV,
    K_i: 0.570,
    K_i_minus: 0.570,
    D_f: 1.0,
    f_crit: 0.35,
    D_eff: 7.24,
    alpha_inv: 137.0359993,
    ciclos: 0,
    nodos: [],
    aristas: [],
    memoria: [],
    entropia: 0,
    sombra: 'SALUDABLE'
  };

  const deepClone = obj => JSON.parse(JSON.stringify(obj));

  function load() {
    const saved = localStorage.getItem('math_nexus_state');
    if (saved) {
      try { Object.assign(state, JSON.parse(saved)); } catch(e) {}
      state.phi = PHI; state.phi_inv = PHI_INV;
      state.D_eff = 7.24; state.f_crit = 0.35; state.alpha_inv = 137.0359993;
    }
  }

  function save() {
    localStorage.setItem('math_nexus_state', JSON.stringify(state));
    const payload = { type: 'miu:sync', source: SOURCE_ID, state: deepClone(state) };
    window.dispatchEvent(new CustomEvent('miu:statechange', {detail: payload.state}));
    if (window.parent !== window) parent.postMessage(payload, '*');
    window.postMessage(payload, '*');
  }

  function calcularD_f() {
    const nodos = state.nodos;
    if (nodos.length < 3) return 1.0;
    const xs = nodos.map(n => n.x || 0), zs = nodos.map(n => n.z || 0);
    const rango = Math.max(...xs) - Math.min(...xs) + Math.max(...zs) - Math.min(...zs);
    return Math.min(3.0, Math.max(1.0, 2.0 * Math.log(nodos.length) / Math.log(rango || 1)));
  }

  return {
    get state() { return deepClone(state); },

    tick() {
      state.K_i *= PHI_INV;
      if (Math.random() < 0.3) state.K_i += 0.02;
      if (state.K_i < 0.25) { this.autofagiaG31(); state.K_i = 0.35 + Math.random() * 0.15; }
      state.ciclos++;
      state.entropia = state.nodos.length ? -state.nodos.reduce((a,n) => a + (n.ki||0.5) * Math.log2((n.ki||0.5) + 0.001), 0) : 0;
      state.D_f = calcularD_f();
      const f = state.nodos.length ? state.nodos.filter(n => (n.ki||0.5) < 0.3).length / state.nodos.length : 0;
      state.K_i_minus = state.K_i * (1 - 2 * f);
      state.sombra = state.nodos.length < 5 ? "SALUDABLE" : (f > 0.4 ? "SOMBRA_FRAGMENTADA" : (state.K_i_minus < 0.3 ? "SOMBRA_CRITICA" : "SALUDABLE"));
      save();
      return this.state;
    },

    autofagiaG31() {
      const antes = state.nodos.length;
      state.nodos = state.nodos.filter(n => (n.ki || 0.5) > 0.25 || n.tipo === 'raiz');
      state.K_i = Math.min(1, state.K_i + 0.02);
      window.dispatchEvent(new CustomEvent('miu:autofagia', {detail: {podados: antes - state.nodos.length, K_i: state.K_i}}));
      save();
    },

    addNodo(nodo) {
      const nuevo = {
        id: Date.now() + Math.random(),
        ki: nodo.ki || 0.5,
        tipo: nodo.tipo || 'concepto',
        concepto: nodo.concepto || `nodo_${state.nodos.length}`,
        x: nodo.x ?? (Math.random() - 0.5) * 400,
        y: nodo.y ?? (Math.random() - 0.5) * 200,
        z: nodo.z ?? (Math.random() - 0.5) * 300,
        ciclo: state.ciclos,
        ...nodo
      };
      state.nodos.push(nuevo);
      save();
      return nuevo;
    },

    addMemoria(evento) {
      state.memoria.push({...evento, ciclo: state.ciclos, ts: Date.now()});
      if (state.memoria.length > 200) state.memoria = state.memoria.slice(-200);
      save();
    },

    importUniverso(json) {
      if (!json?.miu) return false;
      Object.assign(state, deepClone(json.miu));
      state.version = '5.0';
      save();
      return true;
    },

    getAudio() {
      if (!window.MIU_AUDIO) window.MIU_AUDIO = {
        enabled: true,
        toggle: () => { window.MIU_AUDIO.enabled = !window.MIU_AUDIO.enabled; return window.MIU_AUDIO.enabled; }
      };
      return window.MIU_AUDIO;
    },

    beep(freq = 600, dur = 0.1) {
      if (!this.getAudio().enabled) return;
      try {
        if (!window.audioCtx) window.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = window.audioCtx.createOscillator(); osc.frequency.value = freq;
        osc.connect(window.audioCtx.destination); osc.start(); osc.stop(window.audioCtx.currentTime + dur);
      } catch(e) {}
    }
  };
})();

Object.defineProperty(window, 'MIU', { get: () => MATH_NEXUS.state, enumerable: true });
window.MIU_API = MATH_NEXUS;
MATH_NEXUS.load();

window.addEventListener('message', (e) => {
  if (e.data.type === 'miu:update' && e.data.source) {
    window.postMessage({ type: 'miu:sync', source: 'launcher', state: JSON.parse(JSON.stringify(e.data.state)) }, '*');
  }
  if (e.data.type === 'miu:request_sync') {
    e.source.postMessage({ type: 'miu:sync', source: 'launcher', state: JSON.parse(JSON.stringify(MATH_NEXUS.state)) }, '*');
  }
});

console.log('[MATH-NEXUS v5.0] Micelio Unificado activo. K_i =', MATH_NEXUS.state.K_i.toFixed(3));