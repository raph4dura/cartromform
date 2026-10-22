(() => {
  "use strict";

  // =========================================================
  // CATÁLOGO DE PERFIS PVC — BAZZE
  // SF106: desenho vetorial redesenhado a partir da foto.
  // Demais desenhos: representações ilustrativas.
  // =========================================================

  if (window.__catalogoPerfisPVCIniciado) return;
  window.__catalogoPerfisPVCIniciado = true;

  const perfis = [
    {
      categoria: "Europa",
      codigos: [
        "HF88S", "HF112", "SF92", "SF66", "SP66", "MF52",
        "GM42N", "IL36", "IL50", "BR60", "BR88", "FR106",
        "SF106", "SF78C", "SE76N", "JT61", "FR73N", "GB10",
        "GB15", "GB19", "GB25", "GB31", "GB34", "BZ4556",
        "BZ5563", "PERS. 37/57", "BZ3016", "KT16", "BZ0012",
        "BZ0006", "BZ1770", "BZ0010", "CP2", "CA6", "ZS30",
        "VENEZ TROPICAL", "BY60", "PP150N", "BZ20010"
      ]
    },
    {
      categoria: "Reforços",
      codigos: [
        "HF112", "HF88S", "SF66", "SP66", "SF92", "HF73",
        "BR60", "FR73N", "SF78C", "FR106 / SF106", "BR88",
        "SF52", "CA6", "TRILHO Z"
      ]
    },
    {
      categoria: "Design",
      codigos: [
        "HF73", "SF52", "IL22", "SP66", "SP66 REFILADO",
        "TR27", "EMBELEZADOR L22"
      ]
    },
    {
      categoria: "Alumínio",
      codigos: [
        "AL1092", "AL1093", "EMBELEZADOR SF92",
        "COLUNA 100 X 50", "COLUNA 150 X 50",
        "COLUNA 125 X 125"
      ]
    }
  ];

  // =========================================================
  // MEDIDAS CADASTRADAS
  // =========================================================

  const MEDIDAS = {
    "GB8": { externa: 3.2 },
    "GB12": { externa: 3.5 },
    "GB15": { externa: 3.8 },
    "GB19": { externa: 4.2 },
    "GB22": { externa: 4.4 },
    "GB25": { externa: 5.0 },
    "GB31": { externa: 5.0 },
    "GB34": { externa: 5.2 },
    "GB38": { externa: 5.6 },

    "SE76N": { externa: 10.4, interna: 4.3 },
    "SF66": { externa: 9.0, interna: 7.0 },
    "SF78C": { externa: 10.7, interna: "5 / 5,5" },
    "SF92": { externa: 11.6, interna: 9.5 },
    "SF106": { externa: 13.3, interna: 7.7 },
    "SF111": { externa: 14.4, interna: 11.4 },

    "BR60": { externa: 8.5, interna: 5.5 },
    "BR88": { externa: 7.5, interna: 6.5 },
    "FR73": { externa: 7.5, interna: 7.3 },
    "FR106": { externa: 11.0, interna: 10.4 },

    "GUIA CENTRAL": {
      centralMaior: 9.6,
      centralMenor: 9.0
    },

    "GUIA LATERAL": {
      maior: 9.0,
      menor: 6.5
    },

    "HF88": {
      externa: 8.0,
      interna: 8.5,
      meio: 12.5
    },

    "HF166": {
      meio: 18.5,
      lateral: 10.5
    },

    "COLUNA 100 X 100": {
      externa: 12.0,
      interna: 9.0
    },

    "COLUNA 50 X 50": {
      externa: 7.0,
      interna: 4.0
    },

    "COLUNA 100 X 50": {
      externa: 7.0
    },

    "COLUNA 150 X 50": {
      externa: 7.0,
      interna: 8.0
    },

    "COLUNA 125 X 125": {
      externa: 14.5,
      interna: 11.5
    },

    "LAMBri": { externa: 17.5 },
    "CAIXA": { externa: 21.0 },
    "APLique": { externa: 5.0 },
    "PINAZIO": { externa: 5.0, interna: 5.5 },

    "GM42": {
      meio: 5.0,
      lateral: 4.3
    },

    "IL42": { externa: 6.0 },
    "KT42": { externa: 5.5 },

    "IL65": {
      externa: 7.0,
      interna: 7.5
    },

    "KT65": {
      externa: 7.0,
      interna: 8.0
    },

    "VENEZIANA 60": { externa: 9.5 },

    "EUROPA — MARCO 88 X 52": {
      largura: 88,
      altura: 52
    },

    "EUROPA — FOLHA 42 X 92": {
      largura: 42,
      altura: 92
    }
  };

  // =========================================================
  // FONTES
  // =========================================================

  const FONTES = [
    {
      nome: "Bazze — esquadrias PVC",
      url: "https://www.bazze.com.br/produtos/esquadrias-de-pvc/"
    },
    {
      nome: "Manual de instalação",
      url: "https://www.bazze.com.br/wp-content/uploads/2020/11/manual_instalacao_bazze.pdf"
    },
    {
      nome: "Catálogo Europa",
      url: "https://www.bazze.com.br/wp-content/uploads/2016/08/Europa.pdf"
    },
    {
      nome: "Sistema de perfis",
      url: "https://www.bazze.com.br/produtos/sistema-de-perfis-para-esquadrias/"
    }
  ];

  // =========================================================
  // DESENHOS SVG
  // =========================================================

  const DESENHOS = {

    // =======================================================
    // SF106 — REDESENHO DA IMAGEM ENVIADA
    // =======================================================

    sf106: {
      status: "ilustrativo",
      fonte: "Redesenho vetorial baseado na imagem fornecida do SF106. Cotas de referência visual: 106 mm e 86 mm. Geometria a conferir com o catálogo técnico original.",
      svg: `
        <svg xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 560 500"
          role="img"
          aria-label="Seção do perfil SF106, com câmaras internas, encaixes laterais e cotas de referência 106 e 86">

          <defs>
            <marker id="sf106-cota"
              markerWidth="7" markerHeight="7"
              refX="3.5" refY="3.5"
              orient="auto-start-reverse">
              <path d="M0 0 L7 3.5 L0 7Z" fill="#38bdf8"/>
            </marker>

            <style>
              .sf106-linha {
                fill: none;
                stroke: #e2e8f0;
                stroke-width: 2.2;
                stroke-linejoin: round;
                stroke-linecap: round;
              }
              .sf106-camara {
                fill: #0b1220;
                stroke: #cbd5e1;
                stroke-width: 1.8;
                stroke-linejoin: round;
              }
              .sf106-cota {
                fill: none;
                stroke: #38bdf8;
                stroke-width: 1.4;
              }
              .sf106-numero {
                fill: #7dd3fc;
                font-family: Arial, sans-serif;
                font-size: 24px;
                font-weight: 600;
              }
              .sf106-titulo {
                fill: #fbbf24;
                font-family: Arial, sans-serif;
                font-size: 18px;
                font-weight: 700;
              }
            </style>
          </defs>

          <rect width="560" height="500" rx="8" fill="#0b1220"/>

          <!-- COTA SUPERIOR: 106 -->

          <g class="sf106-cota">
            <path d="M34 83 V48"/>
            <path d="M526 83 V48"/>
            <path d="M39 58 H521"
              marker-start="url(#sf106-cota)"
              marker-end="url(#sf106-cota)"/>
          </g>

          <text x="280" y="43"
            class="sf106-numero"
            text-anchor="middle">106</text>

          <!-- CONTORNO EXTERNO E ENCAIXES -->

          <path id="sf106-contorno"
            class="pvc-contorno-animado"
            d="
              M66 102
              Q52 102 48 115
              L28 165
              Q25 175 36 175
              L48 175
              Q51 155 67 154
              Q84 154 88 175

              L143 175
              L143 119
              Q143 113 150 113
              L174 113
              Q180 113 180 120
              L180 175

              L302 175
              L302 120
              Q302 113 309 113
              L440 113
              Q447 113 447 120
              L447 164
              Q447 175 436 175
              L403 175

              Q395 175 389 184
              Q382 195 370 195
              L331 195

              L331 355
              L351 355
              Q359 355 359 347
              L359 337
              Q359 329 367 329
              L385 329
              Q392 329 392 336
              L392 347
              Q392 354 385 354
              L370 354
              L370 373
              L385 373
              Q392 373 392 380
              L392 390
              Q392 397 385 397
              L359 397
              L359 410
              Q359 417 352 417

              L128 417
              Q118 417 116 406
              L109 376
              L109 312
              L128 312
              L128 302
              L140 302
              L140 290
              L128 290
              L128 280
              L169 280
              Q183 280 183 294
              L183 359
              Q183 370 171 370
              L116 370

              L116 267
              L129 267
              L129 254
              L140 254
              L140 244
              L129 244
              L129 234
              L115 234
              L115 196

              L88 196
              Q82 196 80 188
              Q76 177 65 177
              Q54 177 52 188
              L52 194
              L39 194
              Q30 194 33 184
              L48 115
              Q52 102 66 102
              Z"
            fill="#1e3a5f"
            stroke="#e2e8f0"
            stroke-width="2.4"
            stroke-linejoin="round"/>

          <!-- CÂMARAS SUPERIORES -->

          <g class="sf106-camara">
            <path d="
              M62 116
              L105 116
              L105 166
              L87 166
              Q82 145 66 145
              Q58 145 52 153
              Z"/>

            <path d="M114 116 H137 V166 H114 Z"/>

            <path d="M148 116 H289 V175 H148 Z"/>

            <path d="
              M309 116
              H436
              L445 154
              Q428 145 417 166
              H402
              Q394 146 378 146
              Q359 146 351 166
              H309
              Z"/>
          </g>

          <!-- CÂMARA CENTRAL E PAREDES INTERNAS -->

          <path class="sf106-camara"
            d="
              M126 203
              H330
              V355
              H183
              V294
              Q183 280 169 280
              H151
              V267
              H126
              Z"/>

          <!-- ENCAIXE INTERNO ESQUERDO -->

          <path class="sf106-linha"
            d="
              M115 196
              H165
              Q183 196 183 212
              V226
              Q183 233 192 235
              L207 240
              Q212 242 207 245
              L194 250
              Q188 252 194 255
              L207 260
              Q212 263 206 266
              L194 270
              Q189 272 189 278
              V359
              Q189 370 176 370
              H116"/>

          <!-- CÂMARAS INFERIORES -->

          <g class="sf106-camara">
            <path d="
              M117 382
              H248
              V407
              H125
              Q120 407 119 401
              Z"/>

            <path d="
              M254 382
              H325
              V407
              H254
              Z"/>
          </g>

          <!-- PAREDE VERTICAL DIREITA E ENCAIXES -->

          <path class="sf106-linha"
            d="
              M331 195
              V355
              M331 355
              H350
              Q359 355 359 347
              V337
              Q359 329 367 329
              H385
              Q392 329 392 336
              V347
              Q392 354 385 354
              H370
              M370 354 V373
              H385
              Q392 373 392 380
              V390
              Q392 397 385 397
              H359
              V410
              Q359 417 352 417
              H128"/>

          <!-- REFORÇO DA CÂMARA CENTRAL -->

          <path class="sf106-linha"
            d="
              M126 203 H330
              M126 267 H151
              M151 267 V280
              M151 280 H169
              M183 294 V355
              M183 355 H330"/>

          <!-- COTA INFERIOR: 86 -->

          <g class="sf106-cota">
            <path d="M115 427 V459"/>
            <path d="M359 423 V459"/>
            <path d="M120 450 H354"
              marker-start="url(#sf106-cota)"
              marker-end="url(#sf106-cota)"/>
          </g>

          <text x="237" y="443"
            class="sf106-numero"
            text-anchor="middle">86</text>

          <!-- IDENTIFICAÇÃO -->

          <text x="280" y="482"
            class="sf106-titulo"
            text-anchor="middle">SF106</text>

        </svg>
      `
    },

    // =======================================================
    // BR88
    // =======================================================

    br88: {
      status: "ilustrativo",
      fonte: "Redesenho visual aproximado do BR88. Conferir a documentação original.",
      svg: `
        <svg xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 520 340" role="img"
          aria-label="Desenho ilustrativo BR88">
          <rect width="520" height="340" rx="8" fill="#0b1220"/>

          <path class="pvc-contorno-animado"
            d="M70 70 H120 V100 H140 V145 H300 V175 H350 V145 H390 V170 H450 V150 H490 V265 H70 Z"
            fill="#1e3a5f" stroke="#e2e8f0" stroke-width="3"
            stroke-linejoin="round"/>

          <g fill="#0b1220" stroke="#cbd5e1" stroke-width="2">
            <path d="M85 85 H108 V115 H85 Z"/>
            <path d="M150 160 H285 V245 H150 Z"/>
            <path d="M310 190 H340 V245 H310 Z"/>
            <path d="M365 165 H385 V235 H365 Z"/>
            <path d="M400 185 H470 V245 H400 Z"/>
          </g>

          <g stroke="#38bdf8" stroke-width="1.5" fill="none">
            <path d="M70 280 V310 M490 275 V310"/>
            <path d="M76 302 H484"/>
          </g>

          <text x="280" y="294" text-anchor="middle"
            fill="#7dd3fc" font-family="Arial" font-size="15">
            88 mm
          </text>
          <text x="260" y="328" text-anchor="middle"
            fill="#fbbf24" font-family="Arial" font-size="14">
            BR88 — ILUSTRATIVO
          </text>
        </svg>
      `
    },

    // =======================================================
    // HF88
    // =======================================================

    hf88: {
      status: "ilustrativo",
      fonte: "Esboço visual HF88. Conferir a seção original antes de uso técnico.",
      svg: `
        <svg xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 420 330" role="img"
          aria-label="Desenho ilustrativo HF88">
          <rect width="420" height="330" rx="8" fill="#0b1220"/>

          <path class="pvc-contorno-animado"
            d="M74 90 H326 V232 H74 Z"
            fill="#1e3a5f" stroke="#e2e8f0" stroke-width="3"/>

          <g fill="#0b1220" stroke="#cbd5e1" stroke-width="2">
            <path d="M90 105 H145 V132 H90 Z"/>
            <path d="M154 105 H210 V132 H154 Z"/>
            <path d="M219 105 H270 V132 H219 Z"/>
            <path d="M279 105 H310 V132 H279 Z"/>
            <path d="M90 142 H145 V180 H90 Z"/>
            <path d="M154 142 H210 V180 H154 Z"/>
            <path d="M219 142 H270 V180 H219 Z"/>
            <path d="M279 142 H310 V180 H279 Z"/>
            <path d="M90 190 H145 V216 H90 Z"/>
            <path d="M154 190 H210 V216 H154 Z"/>
            <path d="M219 190 H270 V216 H219 Z"/>
            <path d="M279 190 H310 V216 H279 Z"/>
          </g>

          <text x="200" y="38" text-anchor="middle"
            fill="#7dd3fc" font-family="Arial" font-size="12">
            88 mm — referência
          </text>

          <text x="200" y="263" text-anchor="middle"
            fill="#fbbf24" font-family="Arial" font-size="14">
            HF88 — ESBOÇO
          </text>
          <text x="200" y="283" text-anchor="middle"
            fill="#94a3b8" font-family="Arial" font-size="11">
            Câmaras representativas
          </text>
        </svg>
      `
    },

    // =======================================================
    // SF66
    // =======================================================

    sf66: {
      status: "ilustrativo",
      fonte: "Esboço experimental SF66. Contorno e cotas a confirmar.",
      svg: `
        <svg xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 360 300" role="img"
          aria-label="Desenho ilustrativo SF66">
          <rect width="360" height="300" rx="8" fill="#0b1220"/>

          <path class="pvc-contorno-animado"
            d="M72 55 H286 V202 H72 Z"
            fill="#1e3a5f" stroke="#e2e8f0" stroke-width="3"/>

          <g fill="#0b1220" stroke="#cbd5e1" stroke-width="2">
            <path d="M90 75 H145 V112 H90 Z"/>
            <path d="M154 75 H266 V112 H154 Z"/>
            <path d="M90 121 H145 V182 H90 Z"/>
            <path d="M154 121 H266 V182 H154 Z"/>
          </g>

          <text x="179" y="35" text-anchor="middle"
            fill="#7dd3fc" font-family="Arial" font-size="12">
            Seção esquemática
          </text>

          <text x="180" y="230" text-anchor="middle"
            fill="#fbbf24" font-family="Arial" font-size="14">
            SF66 — ESBOÇO
          </text>
        </svg>
      `
    },

    // =======================================================
    // MARCO EUROPA
    // =======================================================

    "europa-marco": {
      status: "ilustrativo",
      fonte: "Referência visual do marco Europa. Seção redesenhada, não CAD oficial.",
      svg: `
        <svg xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 440 330" role="img"
          aria-label="Desenho ilustrativo do marco Europa">
          <rect width="440" height="330" rx="8" fill="#0b1220"/>

          <path class="pvc-contorno-animado"
            d="M86 86 H340 V236 H86 Z"
            fill="#1e3a5f" stroke="#e2e8f0" stroke-width="3"/>

          <g fill="#0b1220" stroke="#cbd5e1" stroke-width="2">
            <path d="M103 103 H153 V133 H103 Z"/>
            <path d="M161 103 H211 V133 H161 Z"/>
            <path d="M219 103 H269 V133 H219 Z"/>
            <path d="M277 103 H322 V133 H277 Z"/>
            <path d="M103 143 H153 V174 H103 Z"/>
            <path d="M161 143 H211 V174 H161 Z"/>
            <path d="M219 143 H269 V174 H219 Z"/>
            <path d="M277 143 H322 V174 H277 Z"/>
            <path d="M103 184 H153 V218 H103 Z"/>
            <path d="M161 184 H211 V218 H161 Z"/>
            <path d="M219 184 H269 V218 H219 Z"/>
            <path d="M277 184 H322 V218 H277 Z"/>
          </g>

          <text x="213" y="270" text-anchor="middle"
            fill="#fbbf24" font-family="Arial" font-size="14">
            MARCO EUROPA
          </text>
          <text x="213" y="290" text-anchor="middle"
            fill="#94a3b8" font-family="Arial" font-size="11">
            Seção ilustrativa — 88 × 52 mm
          </text>
        </svg>
      `
    },

    // =======================================================
    // FOLHA EUROPA
    // =======================================================

    "europa-folha": {
      status: "ilustrativo",
      fonte: "Referência visual da folha Europa. Seção redesenhada, não CAD oficial.",
      svg: `
        <svg xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 380 370" role="img"
          aria-label="Desenho ilustrativo da folha Europa">
          <rect width="380" height="370" rx="8" fill="#0b1220"/>

          <path class="pvc-contorno-animado"
            d="M115 85 H265 V255 H115 Z"
            fill="#1e3a5f" stroke="#e2e8f0" stroke-width="3"/>

          <g fill="#0b1220" stroke="#cbd5e1" stroke-width="2">
            <path d="M132 102 H174 V139 H132 Z"/>
            <path d="M183 102 H247 V139 H183 Z"/>
            <path d="M132 149 H174 V190 H132 Z"/>
            <path d="M183 149 H247 V190 H183 Z"/>
            <path d="M132 200 H174 V237 H132 Z"/>
            <path d="M183 200 H247 V237 H183 Z"/>
          </g>

          <text x="190" y="292" text-anchor="middle"
            fill="#fbbf24" font-family="Arial" font-size="14">
            FOLHA EUROPA
          </text>
          <text x="190" y="312" text-anchor="middle"
            fill="#94a3b8" font-family="Arial" font-size="11">
            Seção ilustrativa — 42 × 92 mm
          </text>
        </svg>
      `
    },

    // =======================================================
    // PORTA EUROPA COM DUAS FOLHAS
    // =======================================================

    "europa-porta-2-folhas": {
      status: "ilustrativo",
      fonte: "Esquema visual de porta de correr com duas folhas. Sem escala.",
      svg: `
        <svg xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 440 350" role="img"
          aria-label="Porta de correr com duas folhas">
          <rect width="440" height="350" rx="8" fill="#0b1220"/>

          <rect x="44" y="35" width="352" height="240"
            fill="#1e3a5f" stroke="#e2e8f0" stroke-width="5"/>

          <rect x="59" y="50" width="322" height="210"
            fill="#0c4a6e" stroke="#cbd5e1" stroke-width="2"/>

          <rect x="69" y="60" width="145" height="190"
            fill="#164e63" fill-opacity=".65"
            stroke="#e2e8f0" stroke-width="4"/>

          <rect x="226" y="60" width="145" height="190"
            fill="#164e63" fill-opacity=".65"
            stroke="#e2e8f0" stroke-width="4"/>

          <g stroke="#38bdf8" stroke-width="3"
            fill="none" stroke-linecap="round">
            <path d="M95 151 H165 L157 143 M165 151 L157 159"/>
            <path d="M345 177 H275 L283 169 M275 177 L283 185"/>
          </g>

          <text x="220" y="306" text-anchor="middle"
            fill="#fbbf24" font-family="Arial" font-size="14">
            PORTA DE CORRER — 2 FOLHAS
          </text>
          <text x="220" y="325" text-anchor="middle"
            fill="#94a3b8" font-family="Arial" font-size="11">
            Montagem ilustrativa, sem escala
          </text>
        </svg>
      `
    }
  };

  // =========================================================
  // FUNÇÕES AUXILIARES
  // =========================================================

  const normalizar = texto =>
    String(texto ?? "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim()
      .replace(/\s+/g, " ");

  const escaparHTML = texto =>
    String(texto ?? "").replace(/[&<>"']/g, c => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[c]);

  function obterMedidas(codigo) {
    const chave = normalizar(codigo);

    const equivalencias = {
      "hf88s": "hf88"
    };

    const chaveMedidas = equivalencias[chave] || chave;

    const nome = Object.keys(MEDIDAS).find(
      item => normalizar(item) === chaveMedidas
    );

    return nome ? MEDIDAS[nome] : null;
  }

  function obterDesenho(codigo) {
    const chave = normalizar(codigo);

    const equivalencias = {
      "hf88s": "hf88",
      "hf88": "hf88",
      "sf106": "sf106",
      "europa — marco 88 x 52": "europa-marco",
      "europa — folha 42 x 92": "europa-folha",
      "porta europa 2 folhas": "europa-porta-2-folhas"
    };

    return DESENHOS[equivalencias[chave] || chave] || null;
  }

  // =========================================================
  // PREPARAR CATÁLOGO
  // =========================================================

  function prepararDados() {
    const mapa = new Map();

    perfis.forEach(grupo => {
      grupo.codigos.forEach(codigo => {
        const chave = normalizar(codigo);

        if (!mapa.has(chave)) {
          mapa.set(chave, {
            codigo,
            categorias: []
          });
        }

        const item = mapa.get(chave);

        if (!item.categorias.includes(grupo.categoria)) {
          item.categorias.push(grupo.categoria);
        }
      });
    });

    [
      ["EUROPA — MARCO 88 X 52", "Europa"],
      ["EUROPA — FOLHA 42 X 92", "Europa"],
      ["PORTA EUROPA 2 FOLHAS", "Europa"]
    ].forEach(([codigo, categoria]) => {
      const chave = normalizar(codigo);

      if (!mapa.has(chave)) {
        mapa.set(chave, { codigo, categorias: [categoria] });
      }
    });

    Object.keys(MEDIDAS).forEach(codigo => {
      const chave = normalizar(codigo);

      if (!mapa.has(chave)) {
        mapa.set(chave, {
          codigo,
          categorias: ["Outros"]
        });
      }
    });

    return [...mapa.values()].sort(
      (a, b) => a.codigo.localeCompare(b.codigo, "pt-BR")
    );
  }

  const catalogo = prepararDados();

  // =========================================================
  // ANIMAÇÃO DO CONTORNO SVG
  // =========================================================

  function animarContornoSVG(areaDesenho) {
    if (!areaDesenho) return;

    const svg = areaDesenho.querySelector("svg");
    if (!svg) return;

    const contorno = svg.querySelector(".pvc-contorno-animado");
    if (!contorno) return;

    if (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      contorno.style.strokeDasharray = "none";
      contorno.style.strokeDashoffset = "0";
      return;
    }

    let comprimento;

    try {
      comprimento = contorno.getTotalLength();
    } catch (erro) {
      console.warn("Não foi possível animar o contorno SVG.", erro);
      return;
    }

    if (!Number.isFinite(comprimento) || comprimento <= 0) return;

    contorno.style.animation = "none";
    contorno.style.strokeDasharray = String(comprimento);
    contorno.style.strokeDashoffset = String(comprimento);
    contorno.style.setProperty("--pvc-comprimento", comprimento);

    void contorno.getBoundingClientRect();

    contorno.style.animation =
      "pvcDesenharContorno 0.75s ease-out forwards";

    const ns = "http://www.w3.org/2000/svg";
    const ponto = document.createElementNS(ns, "circle");

    ponto.setAttribute("r", "4");
    ponto.setAttribute("fill", "#38bdf8");
    ponto.setAttribute("stroke", "#e0f2fe");
    ponto.setAttribute("stroke-width", "1.5");
    ponto.setAttribute("pointer-events", "none");

    svg.appendChild(ponto);

    const inicio = performance.now();
    const duracao = 750;

    function percorrer(agora) {
      if (!ponto.isConnected || !contorno.isConnected) {
        ponto.remove();
        return;
      }

      const progresso = Math.min((agora - inicio) / duracao, 1);

      try {
        const posicao = contorno.getPointAtLength(
          comprimento * progresso
        );

        ponto.setAttribute("cx", posicao.x);
        ponto.setAttribute("cy", posicao.y);
      } catch (erro) {
        ponto.remove();
        return;
      }

      if (progresso < 1) {
        requestAnimationFrame(percorrer);
      } else {
        ponto.remove();
      }
    }

    requestAnimationFrame(percorrer);
  }

  // =========================================================
  // DESENHO PENDENTE
  // =========================================================

  function desenhoPendente(item) {
    const medidas = obterMedidas(item.codigo);

    return `
      <div class="pvc-desenho-pendente" role="status">
        <svg class="pvc-icone-pendente"
          viewBox="0 0 100 75"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M18 15 H82 V60 H18 Z M30 27 H70 V48 H30 Z"
            fill="none" stroke="currentColor" stroke-width="2.5"/>
          <path d="M8 8 H92 M8 67 H92"
            fill="none" stroke="currentColor" stroke-dasharray="4 4"/>
        </svg>
        <strong>Desenho técnico pendente</strong>
        <span>O contorno específico deste perfil ainda precisa ser confirmado.</span>
        ${medidas ? "<small>As medidas cadastradas não definem o formato completo.</small>" : ""}
      </div>
    `;
  }

  function renderizarDesenho(item) {
    const desenho = obterDesenho(item.codigo);

    if (!desenho || !desenho.svg) {
      return desenhoPendente(item);
    }

    return `
      <div class="pvc-desenho-area">
        <div class="pvc-desenho-svg">
          ${desenho.svg}
        </div>

        <p class="pvc-status-desenho">
          Desenho ilustrativo — geometria não confirmada.
        </p>

        <small class="pvc-fonte-desenho">
          Referência: ${escaparHTML(desenho.fonte)}
        </small>
      </div>
    `;
  }

  // =========================================================
  // INICIALIZAÇÃO
  // =========================================================

  function iniciar() {
    const abas = document.querySelector(".tabs");
    const container = document.querySelector(".container");

    if (!abas || !container) {
      console.error(
        "Perfis PVC: não encontrei .tabs ou .container. Confira o HTML."
      );

      window.__catalogoPerfisPVCIniciado = false;
      return;
    }

    if (document.getElementById("btnPerfisPVC")) return;

    // =======================================================
    // ESTILOS
    // =======================================================

    const estilo = document.createElement("style");
    estilo.id = "estiloPerfisPVC";

    estilo.textContent = `
      #btnPerfisPVC {
        cursor: pointer;
        border: 1px solid #334155;
        border-radius: 10px;
        padding: 12px 8px;
        font-weight: 700;
        background: #1e293b;
        color: #e2e8f0;
        font-size: 14px;
      }

      #btnPerfisPVC.ativo {
        background: #2563eb;
        color: white;
        border-color: #3b82f6;
      }

      #painelPerfisPVC {
        width: 100%;
        color: #e2e8f0;
        margin-top: 16px;
      }

      #painelPerfisPVC[hidden],
      #pvcDetalhes[hidden] {
        display: none !important;
      }

      #painelPerfisPVC * {
        box-sizing: border-box;
      }

      .pvc-cabecalho {
        margin-bottom: 18px;
      }

      .pvc-cabecalho h2 {
        margin: 0 0 7px;
        font-size: 23px;
        color: #f8fafc;
      }

      .pvc-cabecalho p {
        margin: 0;
        color: #94a3b8;
        font-size: 13px;
        line-height: 1.6;
      }

      .pvc-filtros {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 180px);
        gap: 10px;
        margin-bottom: 16px;
      }

      .pvc-filtros input,
      .pvc-filtros select {
        width: 100%;
        min-width: 0;
        padding: 12px;
        border: 1px solid #334155;
        border-radius: 9px;
        background: #0f172a;
        color: #f8fafc;
        font-size: 14px;
      }

      .pvc-contagem {
        color: #94a3b8;
        font-size: 12px;
        margin-bottom: 12px;
      }

      .pvc-grade {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(155px, 1fr));
        gap: 12px;
      }

      .pvc-card {
        display: flex;
        flex-direction: column;
        text-align: left;
        width: 100%;
        min-width: 0;
        padding: 14px;
        border: 1px solid #334155;
        border-radius: 12px;
        background: #111c30;
        color: #e2e8f0;
        cursor: pointer;
        transition: border-color .15s, transform .15s;
      }

      .pvc-card:hover {
        border-color: #3b82f6;
        transform: translateY(-2px);
      }

      .pvc-card:focus-visible,
      #btnPerfisPVC:focus-visible,
      .pvc-fechar:focus-visible {
        outline: 2px solid #38bdf8;
        outline-offset: 3px;
      }

      .pvc-codigo {
        font-size: 18px;
        font-weight: 800;
        overflow-wrap: anywhere;
        color: #f8fafc;
        margin-bottom: 10px;
      }

      .pvc-etiquetas {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        margin-bottom: 12px;
      }

      .pvc-etiqueta {
        background: #1e3a5f;
        color: #bfdbfe;
        border-radius: 5px;
        padding: 4px 6px;
        font-size: 10px;
      }

      .pvc-pendente {
        font-size: 11px;
        line-height: 1.5;
        color: #fbbf24;
        margin-top: auto;
      }

      .pvc-detalhes {
        border: 1px solid #334155;
        background: #111c30;
        padding: 16px;
        border-radius: 12px;
        margin-bottom: 16px;
      }

      .pvc-detalhes h3 {
        font-size: 21px;
        margin: 0 0 12px;
        overflow-wrap: anywhere;
      }

      .pvc-detalhes p {
        font-size: 13px;
        line-height: 1.8;
        color: #cbd5e1;
      }

      .pvc-desenho-area {
        width: 100%;
        margin: 12px 0;
        padding: 8px;
        background: #0b1220;
        border: 1px solid #334155;
        border-radius: 10px;
        overflow: hidden;
      }

      .pvc-desenho-svg {
        width: 100%;
        overflow-x: auto;
      }

      .pvc-desenho-svg svg {
        display: block;
        width: 100%;
        max-width: 560px;
        height: auto;
        margin: 0 auto;
      }

      .pvc-contorno-animado {
        stroke-dasharray: 1000;
        stroke-dashoffset: 0;
      }

      @keyframes pvcDesenharContorno {
        from {
          stroke-dashoffset: var(--pvc-comprimento, 1000);
        }
        to {
          stroke-dashoffset: 0;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .pvc-contorno-animado {
          animation: none !important;
          stroke-dashoffset: 0 !important;
        }
      }

      .pvc-desenho-pendente {
        min-height: 180px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 9px;
        padding: 20px;
        border: 1px dashed #64748b;
        border-radius: 10px;
        text-align: center;
        color: #cbd5e1;
        margin: 12px 0;
      }

      .pvc-desenho-pendente strong {
        color: #fbbf24;
      }

      .pvc-desenho-pendente small {
        display: block;
        max-width: 420px;
        color: #94a3b8;
        line-height: 1.5;
      }

      .pvc-icone-pendente {
        width: 84px;
        height: 64px;
        color: #38bdf8;
      }

      .pvc-status-desenho {
        margin: 8px 0 0;
        color: #fbbf24;
        font-size: 12px;
      }

      .pvc-fonte-desenho {
        display: block;
        color: #94a3b8;
        font-size: 11px;
        line-height: 1.6;
        margin-top: 5px;
      }

      .pvc-medidas {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
        gap: 9px;
        margin: 14px 0;
      }

      .pvc-medida {
        padding: 12px;
        background: #1e293b;
        border: 1px solid #334155;
        border-radius: 9px;
      }

      .pvc-medida span {
        display: block;
        color: #94a3b8;
        font-size: 11px;
        margin-bottom: 6px;
      }

      .pvc-medida strong {
        display: block;
        color: #38bdf8;
        font-size: 17px;
        overflow-wrap: anywhere;
      }

      .pvc-aviso {
        color: #fbbf24;
        background: #29200c;
        border: 1px solid #854d0e;
        border-radius: 8px;
        padding: 10px;
        font-size: 11px;
        line-height: 1.6;
      }

      .pvc-fontes {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 12px;
      }

      .pvc-fontes a {
        color: #93c5fd;
        font-size: 12px;
        text-decoration: underline;
      }

      .pvc-fechar {
        padding: 9px 13px;
        border: 1px solid #475569;
        border-radius: 8px;
        background: #1e293b;
        color: white;
        cursor: pointer;
      }

      .pvc-vazio {
        padding: 25px 12px;
        text-align: center;
        color: #94a3b8;
        grid-column: 1 / -1;
      }

      @media (max-width: 480px) {
        .pvc-filtros {
          grid-template-columns: 1fr;
        }

        .pvc-grade {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 8px;
        }

        .pvc-card {
          padding: 11px;
        }

        .pvc-codigo {
          font-size: 16px;
        }

        .pvc-detalhes {
          padding: 12px;
        }
      }
    `;

    document.head.appendChild(estilo);

    // =======================================================
    // BOTÃO DA ABA
    // =======================================================

    const botao = document.createElement("button");

    botao.type = "button";
    botao.id = "btnPerfisPVC";
    botao.textContent = "Perfis PVC";
    botao.setAttribute("aria-controls", "painelPerfisPVC");
    botao.setAttribute("aria-expanded", "false");

    abas.appendChild(botao);

    const quantidadeAbas = abas.querySelectorAll("button").length;

    abas.style.gridTemplateColumns =
      `repeat(${Math.max(quantidadeAbas, 1)}, minmax(0, 1fr))`;

    // =======================================================
    // PAINEL DO CATÁLOGO
    // =======================================================

    const painel = document.createElement("section");

    painel.id = "painelPerfisPVC";
    painel.hidden = true;

    painel.innerHTML = `
      <div class="pvc-cabecalho">
        <h2>Catálogo de Perfis PVC</h2>
        <p>
          Pesquise por código ou categoria e consulte os desenhos
          e as medidas disponíveis.
        </p>
      </div>

      <div class="pvc-filtros">
        <input
          id="pvcBusca"
          type="search"
          placeholder="Buscar código do perfil..."
          aria-label="Buscar perfil por código"
        >

        <select id="pvcCategoria" aria-label="Filtrar por categoria">
          <option value="">Todas as categorias</option>
          ${[...new Set(perfis.map(g => g.categoria))]
            .map(cat => `
              <option value="${escaparHTML(cat)}">
                ${escaparHTML(cat)}
              </option>
            `).join("")}
          <option value="Outros">Outros</option>
        </select>
      </div>

      <div id="pvcContagem" class="pvc-contagem" aria-live="polite"></div>
      <div id="pvcDetalhes" class="pvc-detalhes" hidden></div>
      <div id="pvcGrade" class="pvc-grade"></div>
    `;

    abas.insertAdjacentElement("afterend", painel);

    const busca = painel.querySelector("#pvcBusca");
    const categoria = painel.querySelector("#pvcCategoria");
    const grade = painel.querySelector("#pvcGrade");
    const contagem = painel.querySelector("#pvcContagem");
    const detalhes = painel.querySelector("#pvcDetalhes");

    let abaAnterior = null;
    let estadoDisplay = new Map();

    // =======================================================
    // ABRIR O CATÁLOGO
    // =======================================================

    function selecionarAbaPerfis() {
      if (painel.hidden) {
        abaAnterior = abas.querySelector("button.ativo");
        estadoDisplay = new Map();

        Array.from(container.children).forEach(elemento => {
          if (elemento === abas || elemento === painel) return;

          estadoDisplay.set(elemento, elemento.style.display);
          elemento.style.display = "none";
        });
      }

      painel.hidden = false;
      botao.classList.add("ativo");
      botao.setAttribute("aria-expanded", "true");

      abas.querySelectorAll("button").forEach(b => {
        if (b !== botao) b.classList.remove("ativo");
      });

      renderizar();
    }

    // =======================================================
    // VOLTAR AO ESTOQUE
    // =======================================================

    function voltarAoEstoque() {
      painel.hidden = true;
      botao.classList.remove("ativo");
      botao.setAttribute("aria-expanded", "false");

      estadoDisplay.forEach((displayOriginal, elemento) => {
        if (elemento.isConnected) {
          elemento.style.display = displayOriginal;
        }
      });

      estadoDisplay.clear();

      if (abaAnterior && abaAnterior.isConnected) {
        abaAnterior.classList.add("ativo");
      }

      abaAnterior = null;
    }

    // =======================================================
    // MEDIDAS
    // =======================================================

    function formatarMedida(valor) {
      if (typeof valor === "number") {
        return valor.toLocaleString("pt-BR", {
          maximumFractionDigits: 2
        }) + " mm";
      }

      return String(valor);
    }

    function criarCartoesMedidas(item) {
      const medidas = obterMedidas(item.codigo);

      if (!medidas) {
        return "<p><strong>Medidas:</strong> ainda não cadastradas.</p>";
      }

      const nomes = {
        externa: "Externa",
        interna: "Interna",
        meio: "Central / meio",
        lateral: "Lateral",
        maior: "Maior",
        menor: "Menor",
        centralMaior: "Central maior",
        centralMenor: "Central menor",
        largura: "Largura de referência",
        altura: "Altura de referência"
      };

      const cartoes = Object.entries(medidas)
        .map(([chave, valor]) => `
          <div class="pvc-medida">
            <span>${escaparHTML(nomes[chave] || chave)}</span>
            <strong>${escaparHTML(formatarMedida(valor))}</strong>
          </div>
        `).join("");

      return `<div class="pvc-medidas">${cartoes}</div>`;
    }

    // =======================================================
    // DETALHES DO PERFIL
    // =======================================================

    function abrirDetalhes(item) {
      detalhes.hidden = false;

      const etiquetas = item.categorias
        .map(cat => `
          <span class="pvc-etiqueta">${escaparHTML(cat)}</span>
        `).join("");

      const desenho = renderizarDesenho(item);
      const medidas = criarCartoesMedidas(item);
      const desenhoCadastrado = Boolean(obterDesenho(item.codigo));

      detalhes.innerHTML = `
        <h3>${escaparHTML(item.codigo)}</h3>

        <div class="pvc-etiquetas">${etiquetas}</div>

        ${desenho}
        ${medidas}

        <div class="pvc-aviso">
          ${
            desenhoCadastrado
              ? "Desenho ilustrativo. Valide o contorno e as medidas antes de utilizá-lo tecnicamente."
              : "Desenho ainda não confirmado. As medidas cadastradas não definem a geometria completa."
          }
        </div>

        <p>
          <strong>Código:</strong> ${escaparHTML(item.codigo)}<br>
          <strong>Categoria:</strong> ${escaparHTML(item.categorias.join(", "))}
        </p>

        <button type="button" class="pvc-fechar" id="pvcFecharDetalhes">
          Fechar detalhes
        </button>

        <div class="pvc-fontes">
          ${FONTES.map(fonte => `
            <a href="${escaparHTML(fonte.url)}"
              target="_blank" rel="noopener noreferrer">
              ${escaparHTML(fonte.nome)}
            </a>
          `).join("")}
        </div>
      `;

      const areaDesenho = detalhes.querySelector(".pvc-desenho-svg");

      if (areaDesenho) {
        requestAnimationFrame(() => animarContornoSVG(areaDesenho));
      }

      detalhes.querySelector("#pvcFecharDetalhes")
        .addEventListener("click", () => {
          detalhes.hidden = true;
        });

      detalhes.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }

    // =======================================================
    // PESQUISA E FILTROS
    // =======================================================

    function renderizar() {
      const termo = normalizar(busca.value);
      const filtro = categoria.value;

      const encontrados = catalogo.filter(item => {
        const combinaBusca = normalizar(item.codigo).includes(termo);
        const combinaCategoria =
          !filtro || item.categorias.includes(filtro);

        return combinaBusca && combinaCategoria;
      });

      contagem.textContent =
        `${encontrados.length} perfil(is) encontrado(s)`;

      grade.innerHTML = "";

      if (!encontrados.length) {
        grade.innerHTML = `
          <div class="pvc-vazio">
            Nenhum perfil encontrado. Tente outro código ou categoria.
          </div>
        `;
        return;
      }

      encontrados.forEach(item => {
        const card = document.createElement("button");

        card.type = "button";
        card.className = "pvc-card";

        const codigo = document.createElement("span");
        codigo.className = "pvc-codigo";
        codigo.textContent = item.codigo;

        const etiquetas = document.createElement("span");
        etiquetas.className = "pvc-etiquetas";

        item.categorias.forEach(cat => {
          const tag = document.createElement("span");
          tag.className = "pvc-etiqueta";
          tag.textContent = cat;
          etiquetas.appendChild(tag);
        });

        const aviso = document.createElement("span");
        aviso.className = "pvc-pendente";

        const desenho = obterDesenho(item.codigo);

        if (desenho?.status === "confirmado") {
          aviso.textContent = "Desenho confirmado";
        } else if (desenho) {
          aviso.textContent = "Desenho ilustrativo — conferir";
        } else if (obterMedidas(item.codigo)) {
          aviso.textContent = "Medidas cadastradas · desenho pendente";
        } else {
          aviso.textContent = "Desenho técnico a confirmar";
        }

        card.append(codigo, etiquetas, aviso);

        card.addEventListener("click", () => abrirDetalhes(item));

        grade.appendChild(card);
      });
    }

    // =======================================================
    // EVENTOS
    // =======================================================

    botao.addEventListener("click", selecionarAbaPerfis);

    abas.querySelectorAll("button").forEach(b => {
      if (b === botao) return;

      b.addEventListener("click", () => {
        if (!painel.hidden) voltarAoEstoque();
      });
    });

    busca.addEventListener("input", renderizar);
    categoria.addEventListener("change", renderizar);

    renderizar();
  }

  // =========================================================
  // INICIAR QUANDO O DOCUMENTO ESTIVER PRONTO
  // =========================================================

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciar, { once: true });
  } else {
    iniciar();
  }
})();