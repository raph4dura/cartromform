(() => {
  "use strict";

  // =========================================================
  // CATÁLOGO DE PERFIS PVC — BAZZE
  // Desenhos ilustrativos baseados em referências visuais.
  // Confirmar geometria e cotas na documentação original.
  // =========================================================

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
      nome: "Manual de instalação — página 23",
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
  // Os perfis abaixo são representações visuais esquemáticas.
  // Não são arquivos CAD oficiais.
  // =========================================================

  const DESENHOS = {

    // -------------------------------------------------------
    // HF88 — esboço de perfil com câmaras internas
    // -------------------------------------------------------

    "hf88": {
      status: "ilustrativo",
      fonte: "Esboço visual HF88. Conferir a seção original antes de uso técnico.",

      svg: `
        <svg xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 420 330" role="img"
          aria-label="Esboço de seção do perfil HF88">

          <defs>
            <marker id="hf88-dim"
              markerWidth="7" markerHeight="7"
              refX="3.5" refY="3.5"
              orient="auto-start-reverse">
              <path d="M0 0 L7 3.5 L0 7Z" fill="#38bdf8"/>
            </marker>
          </defs>

          <rect width="420" height="330" rx="8" fill="#0b1220"/>

          <g stroke="#38bdf8" stroke-width="1.4" fill="none">
            <path d="M74 90 V48 M326 90 V48"/>
            <path d="M80 55 H320"
              marker-start="url(#hf88-dim)"
              marker-end="url(#hf88-dim)"/>

            <path d="M326 90 H365 M326 232 H365"/>
            <path d="M356 96 V226"
              marker-start="url(#hf88-dim)"
              marker-end="url(#hf88-dim)"/>
          </g>

          <g fill="#7dd3fc" font-family="Arial" font-size="12">
            <text x="200" y="39" text-anchor="middle">88 mm — referência</text>
            <text x="379" y="160" text-anchor="middle"
              transform="rotate(90 379 160)">52 mm — referência</text>
          </g>

          <path id="hf88-contorno"
            class="pvc-contorno-animado"
            d="
              M74 90
              H326 V112
              H306 V130
              H326 V150
              H306 V170
              H326 V192
              H306 V210
              H326 V232
              H74 V211
              H94 V190
              H74 V168
              H94 V148
              H74 V126
              H94 V108
              H74 Z"
            fill="#1e3a5f"
            stroke="#e2e8f0"
            stroke-width="3"
            stroke-linejoin="round"/>

          <g fill="#0b1220" stroke="#cbd5e1" stroke-width="2">
            <path d="M104 105 H148 V132 H104 Z"/>
            <path d="M159 105 H203 V132 H159 Z"/>
            <path d="M214 105 H260 V132 H214 Z"/>

            <path d="M104 145 H143 V181 H104 Z"/>
            <path d="M154 145 H198 V181 H154 Z"/>
            <path d="M209 145 H253 V181 H209 Z"/>

            <path d="M104 194 H148 V217 H104 Z"/>
            <path d="M159 194 H203 V217 H159 Z"/>
            <path d="M214 194 H260 V217 H214 Z"/>
          </g>

          <g stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 4">
            <path d="M74 245 H326"/>
          </g>

          <g font-family="Arial" text-anchor="middle">
            <text x="200" y="265" fill="#fbbf24"
              font-size="14" font-weight="bold">HF88 — ESBOÇO</text>
            <text x="200" y="284" fill="#fbbf24" font-size="11">
              Câmaras representativas
            </text>
            <text x="200" y="301" fill="#94a3b8" font-size="10">
              Geometria a confirmar no catálogo
            </text>
            <text x="200" y="316" fill="#94a3b8" font-size="9">
              Não utilizar para fabricação
            </text>
          </g>
        </svg>
      `
    },

    // -------------------------------------------------------
    // SF66 — esboço de seção
    // -------------------------------------------------------

    "sf66": {
      status: "ilustrativo",
      fonte: "Esboço experimental SF66. Contorno e cotas a confirmar.",

      svg: `
        <svg xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 360 300" role="img"
          aria-label="Esboço de seção do perfil SF66">

          <rect width="360" height="300" rx="8" fill="#0b1220"/>

          <path id="sf66-contorno"
            class="pvc-contorno-animado"
            d="
              M72 55 H286
              V80 H264
              V101 H286
              V178 H260
              V202 H72
              V180 H92
              V151 H72
              V126 H92
              V101 H72 Z"
            fill="#1e3a5f"
            stroke="#e2e8f0"
            stroke-width="3"
            stroke-linejoin="round"/>

          <g fill="#0b1220" stroke="#cbd5e1" stroke-width="2">
            <path d="M109 78 H153 V109 H109 Z"/>
            <path d="M164 78 H244 V109 H164 Z"/>
            <path d="M109 124 H151 V178 H109 Z"/>
            <path d="M163 124 H230 V178 H163 Z"/>
          </g>

          <g stroke="#38bdf8" stroke-width="1.4" fill="none">
            <path d="M72 42 H286"/>
            <path d="M72 37 V49 M286 37 V49"/>
          </g>

          <text x="179" y="34" text-anchor="middle"
            fill="#7dd3fc" font-family="Arial" font-size="11">
            Seção esquemática
          </text>

          <g font-family="Arial" text-anchor="middle">
            <text x="180" y="234" fill="#fbbf24"
              font-size="13" font-weight="bold">SF66 — ESBOÇO</text>
            <text x="180" y="253" fill="#fbbf24" font-size="10">
              Geometria a confirmar
            </text>
            <text x="180" y="270" fill="#94a3b8" font-size="9">
              Não usar para fabricação
            </text>
          </g>
        </svg>
      `
    },

    // -------------------------------------------------------
    // MARCO EUROPA — seção com câmaras e encaixes
    // Referência visual: manual Bazze, página 23.
    // Cota externa de referência: 88 × 52 mm.
    // -------------------------------------------------------

    "europa-marco": {
      status: "ilustrativo",
      fonte: "Manual de instalação Bazze, página 23. Referência visual do marco; seção redesenhada em SVG, não CAD oficial.",

      svg: `
        <svg xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 440 330" role="img"
          aria-label="Seção ilustrativa do marco Europa">

          <defs>
            <marker id="marco-seta"
              markerWidth="7" markerHeight="7"
              refX="3.5" refY="3.5"
              orient="auto-start-reverse">
              <path d="M0 0 L7 3.5 L0 7Z" fill="#38bdf8"/>
            </marker>
          </defs>

          <rect width="440" height="330" rx="8" fill="#0b1220"/>

          <!-- Cotas externas -->
          <g stroke="#38bdf8" stroke-width="1.4" fill="none">
            <path d="M86 86 V45 M340 86 V45"/>
            <path d="M92 52 H334"
              marker-start="url(#marco-seta)"
              marker-end="url(#marco-seta)"/>

            <path d="M340 86 H378 M340 236 H378"/>
            <path d="M369 92 V230"
              marker-start="url(#marco-seta)"
              marker-end="url(#marco-seta)"/>
          </g>

          <g fill="#7dd3fc" font-family="Arial" font-size="12">
            <text x="213" y="38" text-anchor="middle">88 mm</text>
            <text x="391" y="162" text-anchor="middle"
              transform="rotate(90 391 162)">52 mm</text>
          </g>

          <!-- Corpo principal do marco -->
          <path id="europa-marco-contorno"
            class="pvc-contorno-animado"
            d="
              M86 86
              H340 V236
              H86 Z"
            fill="#1e3a5f"
            stroke="#e2e8f0"
            stroke-width="3"
            stroke-linejoin="round"/>

          <!-- Cavidades internas -->
          <g fill="#0b1220" stroke="#cbd5e1" stroke-width="2">
            <path d="M104 103 H153 V133 H104 Z"/>
            <path d="M162 103 H211 V133 H162 Z"/>
            <path d="M220 103 H266 V133 H220 Z"/>
            <path d="M275 103 H321 V133 H275 Z"/>

            <path d="M104 143 H153 V174 H104 Z"/>
            <path d="M162 143 H211 V174 H162 Z"/>
            <path d="M220 143 H266 V174 H220 Z"/>
            <path d="M275 143 H321 V174 H275 Z"/>

            <path d="M104 184 H153 V218 H104 Z"/>
            <path d="M162 184 H211 V218 H162 Z"/>
            <path d="M220 184 H266 V218 H220 Z"/>
            <path d="M275 184 H321 V218 H275 Z"/>
          </g>

          <!-- Linha de referência do corte -->
          <path d="M70 250 H355"
            stroke="#64748b" stroke-width="1"
            stroke-dasharray="5 5"/>

          <g font-family="Arial" text-anchor="middle">
            <text x="213" y="274" fill="#fbbf24"
              font-size="14" font-weight="bold">MARCO EUROPA</text>
            <text x="213" y="292" fill="#fbbf24" font-size="11">
              Seção visual ilustrativa
            </text>
            <text x="213" y="309" fill="#94a3b8" font-size="10">
              Conferir câmaras, encaixes e cotas
            </text>
          </g>
        </svg>
      `
    },

    // -------------------------------------------------------
    // FOLHA EUROPA — seção vertical
    // Referência visual: manual Bazze, página 23.
    // Cota externa de referência: 42 × 92 mm.
    // -------------------------------------------------------

    "europa-folha": {
      status: "ilustrativo",
      fonte: "Manual de instalação Bazze, página 23. Referência visual da folha; seção redesenhada em SVG, não CAD oficial.",

      svg: `
        <svg xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 380 370" role="img"
          aria-label="Seção ilustrativa da folha Europa">

          <defs>
            <marker id="folha-seta"
              markerWidth="7" markerHeight="7"
              refX="3.5" refY="3.5"
              orient="auto-start-reverse">
              <path d="M0 0 L7 3.5 L0 7Z" fill="#38bdf8"/>
            </marker>
          </defs>

          <rect width="380" height="370" rx="8" fill="#0b1220"/>

          <!-- Cotas -->
          <g stroke="#38bdf8" stroke-width="1.4" fill="none">
            <path d="M115 85 V47 M265 85 V47"/>
            <path d="M121 54 H259"
              marker-start="url(#folha-seta)"
              marker-end="url(#folha-seta)"/>

            <path d="M265 85 H305 M265 255 H305"/>
            <path d="M296 91 V249"
              marker-start="url(#folha-seta)"
              marker-end="url(#folha-seta)"/>
          </g>

          <g fill="#7dd3fc" font-family="Arial" font-size="12">
            <text x="190" y="39" text-anchor="middle">42 mm</text>
            <text x="318" y="170" text-anchor="middle"
              transform="rotate(90 318 170)">92 mm</text>
          </g>

          <!-- Corpo do perfil -->
          <path id="europa-folha-contorno"
            class="pvc-contorno-animado"
            d="
              M115 85
              H265 V255
              H115 Z"
            fill="#1e3a5f"
            stroke="#e2e8f0"
            stroke-width="3"
            stroke-linejoin="round"/>

          <!-- Câmaras ilustrativas -->
          <g fill="#0b1220" stroke="#cbd5e1" stroke-width="2">
            <path d="M132 102 H174 V139 H132 Z"/>
            <path d="M183 102 H247 V139 H183 Z"/>

            <path d="M132 149 H174 V190 H132 Z"/>
            <path d="M183 149 H247 V190 H183 Z"/>

            <path d="M132 200 H174 V237 H132 Z"/>
            <path d="M183 200 H247 V237 H183 Z"/>
          </g>

          <g font-family="Arial" text-anchor="middle">
            <text x="190" y="292" fill="#fbbf24"
              font-size="14" font-weight="bold">FOLHA EUROPA</text>
            <text x="190" y="311" fill="#fbbf24" font-size="11">
              Seção visual ilustrativa
            </text>
            <text x="190" y="329" fill="#94a3b8" font-size="10">
              Câmaras e encaixes a confirmar
            </text>
            <text x="190" y="346" fill="#94a3b8" font-size="9">
              Não utilizar para fabricação
            </text>
          </g>
        </svg>
      `
    },

    // -------------------------------------------------------
    // PORTA DE CORRER — DUAS FOLHAS
    // Vista frontal esquemática da montagem.
    // -------------------------------------------------------

    "europa-porta-2-folhas": {
      status: "ilustrativo",
      fonte: "Manual de instalação Bazze, página 23. Vista esquemática da montagem, sem escala.",

      svg: `
        <svg xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 440 350" role="img"
          aria-label="Vista esquemática de porta de correr com duas folhas">

          <defs>
            <marker id="porta-seta"
              markerWidth="7" markerHeight="7"
              refX="3.5" refY="3.5"
              orient="auto">
              <path d="M0 0 L7 3.5 L0 7Z" fill="#38bdf8"/>
            </marker>
          </defs>

          <rect width="440" height="350" rx="8" fill="#0b1220"/>

          <!-- Marco externo -->
          <rect x="44" y="35" width="352" height="240"
            fill="#1e3a5f"
            stroke="#e2e8f0"
            stroke-width="5"/>

          <!-- Área interna -->
          <rect x="59" y="50" width="322" height="210"
            fill="#0c4a6e"
            stroke="#cbd5e1"
            stroke-width="2"/>

          <!-- Folha esquerda -->
          <rect x="69" y="60" width="145" height="190"
            fill="#164e63"
            fill-opacity="0.65"
            stroke="#e2e8f0"
            stroke-width="4"/>

          <!-- Folha direita -->
          <rect x="226" y="60" width="145" height="190"
            fill="#164e63"
            fill-opacity="0.65"
            stroke="#e2e8f0"
            stroke-width="4"/>

          <!-- Encontro das folhas -->
          <path d="M214 60 V250 M226 60 V250"
            stroke="#cbd5e1"
            stroke-width="3"/>

          <!-- Vidros -->
          <rect x="82" y="74" width="119" height="162"
            fill="#0ea5e9"
            fill-opacity="0.12"
            stroke="#7dd3fc"
            stroke-width="1.5"/>

          <rect x="239" y="74" width="119" height="162"
            fill="#0ea5e9"
            fill-opacity="0.12"
            stroke="#7dd3fc"
            stroke-width="1.5"/>

          <!-- Setas de deslizamento -->
          <g stroke="#38bdf8"
            stroke-width="3"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round">

            <path d="M93 151 H169"
              marker-end="url(#porta-seta)"/>

            <path d="M347 177 H271"
              marker-end="url(#porta-seta)"/>
          </g>

          <!-- Trilho inferior -->
          <path d="M44 278 H396"
            stroke="#94a3b8"
            stroke-width="2"/>

          <path d="M59 285 H381"
            stroke="#64748b"
            stroke-width="3"/>

          <g font-family="Arial" text-anchor="middle">
            <text x="220" y="306" fill="#fbbf24"
              font-size="14" font-weight="bold">
              PORTA DE CORRER — 2 FOLHAS
            </text>
            <text x="220" y="325" fill="#94a3b8" font-size="11">
              Esquema de montagem ilustrativo
            </text>
            <text x="220" y="340" fill="#94a3b8" font-size="9">
              Sem escala; ferragens não representadas
            </text>
          </g>
        </svg>
      `
    }
  };

  // =========================================================
  // FUNÇÕES AUXILIARES
  // =========================================================

  const normalizar = (texto) =>
    String(texto || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim()
      .replace(/\s+/g, " ");

  const escaparHTML = (texto) =>
    String(texto ?? "").replace(/[&<>"']/g, (caractere) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[caractere]);

  function obterMedidas(codigo) {
    const chave = normalizar(codigo);

    const equivalencias = {
      "hf88s": "hf88"
    };

    const chaveMedidas = equivalencias[chave] || chave;

    const nome = Object.keys(MEDIDAS).find(
      (item) => normalizar(item) === chaveMedidas
    );

    return nome ? MEDIDAS[nome] : null;
  }

  function obterDesenho(codigo) {
    const chave = normalizar(codigo);

    const equivalencias = {
      "hf88s": "hf88",
      "hf88": "hf88",
      "europa — marco 88 x 52": "europa-marco",
      "europa — folha 42 x 92": "europa-folha",
      "porta europa 2 folhas": "europa-porta-2-folhas"
    };

    const desenhoId = equivalencias[chave] || chave;

    return DESENHOS[desenhoId] || null;
  }

  // =========================================================
  // MONTAR CATÁLOGO
  // =========================================================

  function prepararDados() {
    const mapa = new Map();

    perfis.forEach((grupo) => {
      grupo.codigos.forEach((codigo) => {
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

    const extras = [
      {
        codigo: "EUROPA — MARCO 88 X 52",
        categoria: "Europa"
      },
      {
        codigo: "EUROPA — FOLHA 42 X 92",
        categoria: "Europa"
      },
      {
        codigo: "PORTA EUROPA 2 FOLHAS",
        categoria: "Europa"
      }
    ];

    extras.forEach(({ codigo, categoria }) => {
      const chave = normalizar(codigo);

      if (!mapa.has(chave)) {
        mapa.set(chave, {
          codigo,
          categorias: [categoria]
        });
      }
    });

    Object.keys(MEDIDAS).forEach((codigo) => {
      const chave = normalizar(codigo);

      if (!mapa.has(chave)) {
        mapa.set(chave, {
          codigo,
          categorias: ["Outros"]
        });
      }
    });

    return [...mapa.values()].sort((a, b) =>
      a.codigo.localeCompare(b.codigo, "pt-BR")
    );
  }

  const catalogo = prepararDados();

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
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"/>

          <path d="M8 8 H92 M8 67 H92"
            fill="none"
            stroke="currentColor"
            stroke-dasharray="4 4"/>
        </svg>

        <strong>Desenho técnico pendente</strong>
        <span>O contorno específico deste perfil ainda precisa ser confirmado.</span>

        ${
          medidas
            ? "<small>As medidas cadastradas não definem o formato completo.</small>"
            : ""
        }
      </div>
    `;
  }

  // =========================================================
  // ANIMAÇÃO DO CONTORNO
  // =========================================================

  const contorno = svg.querySelector([
  "#br88-contorno",
  "#hf88-contorno",
  "#sf66-contorno",
  "#europa-marco-contorno",
  "#europa-folha-contorno"
].join(", "));

    if (!contorno) return;

    if (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      contorno.style.strokeDasharray = "none";
      contorno.style.strokeDashoffset = "0";
      return;
    }

    const comprimento = contorno.getTotalLength();

    contorno.style.setProperty(
      "--pvc-comprimento",
      comprimento
    );

    contorno.style.strokeDasharray = comprimento;
    contorno.style.strokeDashoffset = comprimento;
    contorno.style.animation = "none";

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

      const progresso = Math.min(
        (agora - inicio) / duracao,
        1
      );

      const posicao = contorno.getPointAtLength(
        comprimento * progresso
      );

      ponto.setAttribute("cx", posicao.x);
      ponto.setAttribute("cy", posicao.y);

      if (progresso < 1) {
        requestAnimationFrame(percorrer);
      } else {
        ponto.remove();
      }
    }

    requestAnimationFrame(percorrer);
  }

  // =========================================================
  // RENDERIZAR DESENHOS
  // =========================================================

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
          ${
            desenho.status === "confirmado"
              ? "Desenho com referência técnica confirmada."
              : "Desenho ilustrativo — geometria não confirmada."
          }
        </p>

        ${
          desenho.fonte
            ? `
              <small class="pvc-fonte-desenho">
                Referência: ${escaparHTML(desenho.fonte)}
              </small>
            `
            : ""
        }
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
        "Perfis PVC: não encontrei .tabs ou .container."
      );
      return;
    }

    if (document.getElementById("btnPerfisPVC")) return;

    // =======================================================
    // ESTILOS
    // =======================================================

    const estilo = document.createElement("style");

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
        max-width: 520px;
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

    abas.appendChild(botao);

    abas.style.gridTemplateColumns = "repeat(3, minmax(0, 1fr))";

    // =======================================================
    // PAINEL
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
            `)
            .join("")}

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

    // =======================================================
    // ALTERNAR ABAS
    // =======================================================

    function selecionarAbaPerfis() {
      if (painel.hidden) {
        abaAnterior = abas.querySelector("button.ativo");
      }

      Array.from(container.children).forEach(elemento => {
        if (elemento !== abas && elemento !== painel) {
          if (elemento.dataset.pvcDisplayOriginal === undefined) {
            elemento.dataset.pvcDisplayOriginal = elemento.style.display;
          }

          elemento.style.display = "none";
        }
      });

      painel.hidden = false;
      botao.classList.add("ativo");

      abas.querySelectorAll("button").forEach(b => {
        if (b !== botao) b.classList.remove("ativo");
      });

      renderizar();
    }

    function voltarAoEstoque() {
      painel.hidden = true;
      botao.classList.remove("ativo");

      Array.from(container.children).forEach(elemento => {
        if (
          elemento !== abas &&
          elemento !== painel &&
          elemento.dataset.pvcDisplayOriginal !== undefined
        ) {
          elemento.style.display = elemento.dataset.pvcDisplayOriginal;
          delete elemento.dataset.pvcDisplayOriginal;
        }
      });

      if (abaAnterior) abaAnterior.classList.add("ativo");

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
        return `
          <p><strong>Medidas:</strong> ainda não cadastradas.</p>
        `;
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
        `)
        .join("");

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
        `)
        .join("");

      const desenho = renderizarDesenho(item);
      const medidas = criarCartoesMedidas(item);
      const desenhoCadastrado = Boolean(obterDesenho(item.codigo));
      const desenhoConfirmado =
        obterDesenho(item.codigo)?.status === "confirmado";

      detalhes.innerHTML = `
        <h3>${escaparHTML(item.codigo)}</h3>

        <div class="pvc-etiquetas">${etiquetas}</div>

        ${desenho}
        ${medidas}

        <div class="pvc-aviso">
          ${
            desenhoConfirmado
              ? "Consulte a referência técnica indicada."
              : desenhoCadastrado
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

    document.querySelectorAll("#btnEntrada, #btnSaida")
      .forEach(b => b.addEventListener("click", voltarAoEstoque));

    busca.addEventListener("input", renderizar);
    categoria.addEventListener("change", renderizar);

    renderizar();
  }

  // =========================================================
  // INICIAR QUANDO O DOCUMENTO ESTIVER PRONTO
  // =========================================================

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciar);
  } else {
    iniciar();
  }
})();