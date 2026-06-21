// ===== ALMA-NEXUS Ω v6.1 - CONTROL GLOBAL AUDIO =====
window.ALMA_AUDIO = {
  enabled: true,
  toggle: function() {
    this.enabled =!this.enabled;
    localStorage.setItem('ALMA_AUDIO_ENABLED', this.enabled);
    return this.enabled;
  },
  init: function() {
    const saved = localStorage.getItem('ALMA_AUDIO_ENABLED');
    if (saved!== null) this.enabled = saved === 'true';
  }
};
ALMA_AUDIO.init();

// ===== ALMA-NEXUS Ω v6.1 - ESTADO GLOBAL COMPARTIDO =====
const ALMA = {
  K_i: 0.570,
  H_t: 0.430,
  phi: 1.6180339887,
  phi_inv: 0.6180339887,
  omega: 0,
  ciclos: 0,
  huesos: 7,
  autofagias: 0,
  innovaciones: 0,
  consenso: 0.942,
  nodos: [{
    id: 0,
    ki: 0.570,
    f: 0.100,
    x: 400,
    y: 250,
    label: 'Nodo Raíz',
    estado: 'verde'
  }],
  db: null,
  log: [],
  config: {
    particles: true,
    webgl: true,
    maxNodos: 10000
  }
};

// ===== INDEXEDDB PERSISTENCIA =====
function initDB() {
  return new Promise((resolve) => {
    const req = indexedDB.open('ALMA_NEXUS_DB_v6', 3);

    req.onupgradeneeded = e => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains('estado')) {
        db.createObjectStore('estado', { keyPath: 'id' });
      }
      if (!db.objectStoreNames.contains('nodos')) {
        db.createObjectStore('nodos', { keyPath: 'id' });
      }
      if (!db.objectStoreNames.contains('huesos')) {
        db.createObjectStore('huesos', { keyPath: 'id' });
      }
    };

    req.onsuccess = e => {
      ALMA.db = e.target.result;
      cargarEstado();
      resolve();
    };

    req.onerror = () => {
      console.warn('IndexedDB no disponible');
      resolve();
    };
  });
}

// Guardar estado cada 100 ciclos
function guardarEstado() {
  if (!ALMA.db) return;
  const tx = ALMA.db.transaction('estado', 'readwrite');
  tx.objectStore('estado').put({
    id: 1,
    K_i: ALMA.K_i,
    H_t: ALMA.H_t,
    ciclos: ALMA.ciclos,
    omega: ALMA.omega,
    timestamp: Date.now()
  });
}

// Cargar estado al inicio
function cargarEstado() {
  if (!ALMA.db) return;
  const tx = ALMA.db.transaction('estado', 'readonly');
  const req = tx.objectStore('estado').get(1);
  req.onsuccess = e => {
    if (e.target.result) {
      const d = e.target.result;
      ALMA.K_i = d.K_i || ALMA.K_i;
      ALMA.H_t = d.H_t || ALMA.H_t;
      ALMA.ciclos = d.ciclos || ALMA.ciclos;
      ALMA.omega = d.omega || ALMA.omega;
    }
  };
}

// ===== CICLO Ω GLOBAL - LATIDO DEL SISTEMA =====
function startCycle() {
  setInterval(() => {
    ALMA.omega += 0.02;
    ALMA.ciclos++;

    // Oscilación K_i y H_t sincronizada
    ALMA.K_i = 0.5 + 0.4 * Math.sin(ALMA.omega * 0.1);
    ALMA.H_t = 0.5 - 0.3 * Math.cos(ALMA.omega * 0.07);

    // Guardar cada 100 ciclos
    if (ALMA.ciclos % 100 === 0) {
      guardarEstado();
    }
  }, 50); // 20 FPS ciclo global
}

// ===== UTILIDADES EXPORT/IMPORT JSON =====
function exportarJSON() {
  const data = {
    version: '6.1',
    timestamp: new Date().toISOString(),
    K_i: ALMA.K_i,
    H_t: ALMA.H_t,
    ciclos: ALMA.ciclos,
    omega: ALMA.omega,
    nodos: ALMA.nodos,
    config: ALMA.config
  };

  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `alma_nexus_${Date.now()}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function importarJSON() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json';
  input.onchange = e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      try {
        const data = JSON.parse(ev.target.result);
        ALMA.K_i = data.K_i || ALMA.K_i;
        ALMA.H_t = data.H_t || ALMA.H_t;
        ALMA.ciclos = data.ciclos || ALMA.ciclos;
        ALMA.omega = data.omega || ALMA.omega;
        ALMA.nodos = data.nodos || ALMA.nodos;
        alert('Estado importado correctamente');
      } catch(err) {
        alert('Error al importar: ' + err.message);
      }
    };
    reader.readAsText(file);
  };
  input.click();
}

// ===== CALCULO K_i NETO CON FRACTURA =====
function calcularKiMenos(ki, f) {
  return ki * (1 - 2 * f);
}

// ===== VERIFICACION CONSENSO φ =====
function verificarConsenso(ratioSi) {
  return ratioSi > ALMA.phi_inv;
}

// ===== LOGGING =====
function log(msg) {
  ALMA.log.push({
    timestamp: new Date().toISOString(),
    msg: msg
  });
  if (ALMA.log.length > 1000) ALMA.log.shift();
  console.log('[ALMA]', msg);
}

// ===== INICIALIZACION =====
if (typeof window!== 'undefined') {
  window.ALMA = ALMA;
  window.exportarJSON = exportarJSON;
  window.importarJSON = importarJSON;

  // Iniciar DB y ciclo solo si es el frame principal, no los iframes
  if (window === window.parent) {
    initDB().then(() => {
      startCycle();
      log('ALMA-NEXUS Ω v6.1 inicializado');
    });
  }
}

console.log('shared.js v6.1 cargado - ALMA-NEXUS Ω');