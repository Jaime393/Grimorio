# ALMA-NEXUS Ω v6.0
## Sistema Fractal Autónomo Modular

Versión: 6.0  
Autor: Meta AI + Tu Nombre  
Licencia: MIT  
Fecha: 2026

---

### DESCRIPCION

ALMA-NEXUS Ω v6.0 es un sistema fractal autónomo de 8 módulos interconectados que simula entidades BEA, células BIO, ciclos Ω, fractales climáticos GDCP, consenso cuántico φ, autofagia G31, innovación SIK y topología distribuida Nexus 10K.

Arquitectura: 9 archivos HTML separados + 1 JS compartido para evitar cortes en WhatsApp. Cada módulo es independiente y se carga en iframe desde index.html.

---

### INSTALACION RAPIDA

1. Descarga: Crea carpeta alma-nexus/
2. Archivos: Copia los 10 archivos de la carpeta
3. Ejecutar: Abre index.html en Chrome/Edge/Brave
4. PWA: Click "Instalar" en la barra de direcciones para modo app

No requiere servidor. Funciona 100% offline desde file://

---

### ESTRUCTURA DE ARCHIVOS

alma-nexus/
├── index.html          Menú principal + iframe loader
├── shared.js           Estado global K_i, H_t, IndexedDB
├── bea.html            Módulo 1: BEA Fractal WebGL 3D
├── bio.html            Módulo 2: BIO Células 3D
├── omega.html          Módulo 3: Ciclo Ω Total 7 pasos
├── gdcp.html           Módulo 4: GDCP Fractal Climático + CSV
├── consenso.html       Módulo 5: Consenso φ WebXR VR
├── autofagia.html      Módulo 6: G31 Autofagia Visual
├── sik.html            Módulo 7: SIK Innovación + HC
└── nexus.html          Módulo 8: Nexus 10K + PPF-02 Sync

Peso total: ~120KB | Archivos: 10 archivos de 4-14KB cada uno

---

### MODULOS DETALLADOS

1. BEA - Entidad Fractal WebGL 3D
- Fractal recursivo con razón áurea φ = 1.618
- Controles: Radio, Profundidad, Rotación Z, Hue, Velocidad
- Fórmula: len_new = len_padre / φ
- Sincronizado con ciclo Ω global

2. BIO - Simulación Celular 3D
- Células con metabolismo, energía y división
- Movimiento Browniano + rebotes
- Stats: Células activas, Energía promedio, Divisiones/min
- K_i individual por célula

3. OMEGA - Ciclo Ω Total
- 7 pasos: Generar → Evaluar → Seleccionar → Inyectar → Podar → Polinizar → Consensuar
- Gráfico K_i vs H(t) en tiempo real
- Auto-ciclos configurables
- Log de eventos completo

4. GDCP - Fractal Climático
- Carga CSV: año,temperatura,humedad
- Cálculo D_f multifractal por Box Counting
- K_i regional derivado de D_f
- Mapa de calor climático

Fórmula D_f: D_f = log(N) / log(1/ε)

5. CONSENSO φ - WebXR VR
- Votación cuántica con umbral φ⁻¹ = 61.8%
- Barras SÍ/NO con K_i ponderado
- Visualización 3D circular del consenso
- Soporte WebXR para VR

6. G31 - Autofagia Visual
- Detección nodos ROJA K_i⁻ < umbral
- Poda automática: f_new = f * (1 - intensidad)
- Mapa de nodos con colores por estado
- Stats: ROJA/AMARILLA/VERDE

Fórmula K_i⁻: K_i⁻ = K_i × (1 - 2f)

7. SIK - Innovación + Huesos Conceptuales
- Procesador NACK → HC automático
- Árbol de huesos conceptuales visual
- Export HC a JSON
- 7 huesos base + innovaciones dinámicas

8. NEXUS - Topología 10K Nodos
- Generación hasta 10,000 nodos
- Conexiones distribuidas PPF-02
- Sync K_i promedio ponderado φ
- Optimizado para rendimiento

---

### VARIABLES GLOBALES

Todas las herramientas comparten shared.js:

ALMA.K_i        // Coherencia global 0.0-1.0
ALMA.H_t        // Entropía temporal
ALMA.phi        // 1.6180339887
ALMA.phi_inv    // 0.6180339887 = 61.8%
ALMA.omega      // Fase del ciclo Ω
ALMA.ciclos     // Contador de ciclos
ALMA.nodos      // Array de nodos raíz
ALMA.db         // IndexedDB para persistencia

Ciclo Ω: Se actualiza cada 50ms automáticamente

---

### PERSISTENCIA

IndexedDB: ALMA_NEXUS_DB_v6
- Store estado: K_i, H_t, ciclos, omega
- Store nodos: configuración de nodos
- Store huesos: HC generados

Export/Import JSON: Click derecho → "Guardar estado" / "Cargar estado"

---

### FORMULAS CLAVE

1. Fractal BEA: len_hija = len_padre / φ
2. K_i neto: K_i⁻ = K_i × (1 - 2f)
3. Consenso φ: ratio_SI > φ⁻¹ = 61.8%
4. Dimensión Fractal: D_f = log(N) / log(1/ε)
5. PPF-02 Sync: K_i_new = K_i × 0.8 + K_i_promedio × 0.2

---

### TROUBLESHOOTING

Problema: Pantalla en blanco
Solución: Usar Chrome/Edge. Firefox requiere http://localhost

Problema: CSV no carga
Solución: Formato: año,temperatura,humedad sin headers raros

Problema: WebXR no funciona
Solución: Solo Quest 2/3, Chrome Android, Edge Windows

Problema: 10K nodos lag
Solución: Reducir maxNodos en shared.js o usar Chrome 64bit

---

### LICENCIA

MIT License - Libre uso, modificación y distribución.
Mantener créditos.

---

### CREDITOS

Desarrollado con Nodo AI.
Inspirado en sistemas fractales, autómatas celulares y consenso cuántico.

"K_i⁻ > 0.3 = Sistema vivo"