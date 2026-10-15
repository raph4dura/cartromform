
(() => {
  "use strict";

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
    "GUIA CENTRAL": { centralMaior: 9.6, centralMenor: 9.0 },
    "GUIA LATERAL": { maior: 9.0, menor: 6.5 },
    "HF88": { externa: 8.0, interna: 8.5, meio: 12.5 },
    "HF166": { meio: 18.5, lateral: 10.5 },
    "COLUNA 100 X 100": { externa: 12.0, interna: 9.0 },
    "COLUNA 50 X 50": { externa: 7.0, interna: 4.0 },
    "COLUNA 100 X 50": { externa: 7.0 },
    "COLUNA 150 X 50": { externa: 7.0, interna: 8.0 },
    "COLUNA 125 X 125": { externa: 14.5, interna: 11.5 },
    "LAMBri": { externa: 17.5 },
    "CAIXA": { externa: 21.0 },
    "APLique": { externa: 5.0 },
    "PINAZIO": { externa: 5.0, interna: 5.5 },
    "GM42": { meio: 5.0, lateral: 4.3 },
    "IL42": { externa: 6.0 },
    "KT42": { externa: 5.5 },
    "IL65": { externa: 7.0, interna: 7.5 },
    "KT65": { externa: 7.0, interna: 8.0 },
    "VENEZIANA 60": { externa: 9.5 }
  };

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

  // Desenhos cadastrados.
  // O SF66 abaixo continua sendo ilustrativo, não oficial.

  const DESENHOS = {
    "sf66": {
      status: "ilustrativo",
      fonte: "Esboço experimental baseado nas referências textuais do Manual Técnico Wolff v2 2021, página impressa 08. Contorno e cotas a confirmar.",
      svg: `
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 360 290"
          role="img"
          aria-labelledby="sf66-titulo sf66-desc"
        >
          <title id="sf66-titulo">SF66 — folha para janela</title>

          <desc id="sf66-desc">
            Esboço ilustrativo de uma seção de perfil PVC com câmaras internas.
            Geometria e dimensões não confirmadas.
          </desc>

          <defs>
            <marker
              id="sf66-seta"
              markerWidth="7"
              markerHeight="7"
              refX="3.5"
              refY="3.5"
              orient="auto-start-reverse"
            >
              <path
                d="M 0 0 L 7 3.5 L 0 7 z"
                fill="#38bdf8"
              />
            </marker>
          </defs>

          <rect
            width="360"
            height="290"
            rx="8"
            fill="#0b1220"
          />

          <!-- Cotas ilustrativas -->
          <g
            stroke="#38bdf8"
            stroke-width="1.2"
            fill="none"
          >
            <path d="M75 55 V30 M285 55 V30"/>

            <path
              d="M78 35 H282"
              marker-start="url(#sf66-seta)"
              marker-end="url(#sf66-seta)"
            />

            <path d="M285 55 H320 M285 205 H320"/>

            <path
              d="M314 58 V202"
              marker-start="url(#sf66-seta)"
              marker-end="url(#sf66-seta)"
            />
          </g>

          <g
            fill="#7dd3fc"
            font-family="Arial, sans-serif"
            font-size="11"
          >
            <text
              x="180"
              y="24"
              text-anchor="middle"
            >largura a confirmar</text>

            <text
              x="330"
              y="130"
              text-anchor="middle"
              transform="rotate(90 330 130)"
            >altura a confirmar</text>
          </g>

          <!-- Contorno externo animado -->
          <g
            stroke="#e2e8f0"
            stroke-width="3"
            stroke-linejoin="round"
            stroke-linecap="round"
          >
            <path
              id="sf66-contorno"
              class="pvc-contorno-animado"
              pathLength="1000"
              fill="#1e3a5f"
              d="
                M75 55
                H285
                V82
                H260
                V102
                H285
                V178
                H250
                V205
                H75
                V180
                H95
                V150
                H75
                Z
              "
            />

            <!-- Câmaras internas ilustrativas -->
            <path
              d="M110 78 H155 V112 H110 Z"
              fill="#0b1220"
              stroke-width="2"
            />

            <path
              d="M170 78 H245 V112 H170 Z"
              fill="#0b1220"
              stroke-width="2"
            />

            <path
              d="M115 128 H155 V180 H115 Z"
              fill="#0b1220"
              stroke-width="2"
            />

            <path
              d="M170 128 H230 V180 H170 Z"
              fill="#0b1220"
              stroke-width="2"
            />
          </g>

          <!-- Pontinho azul que percorre o contorno -->
          <circle
            r="4.5"
            fill="#38bdf8"
            stroke="#e0f2fe"
            stroke-width="1.5"
          >
            <animateMotion
              dur="1.5s"
              repeatCount="1"
              fill="freeze"
              calcMode="paced"
            >
              <mpath href="#sf66-contorno"/>
            </animateMotion>
          </circle>

          <g
            font-family="Arial, sans-serif"
            text-anchor="middle"
          >
            <text
              x="180"
              y="235"
              fill="#fbbf24"
              font-size="13"
              font-weight="bold"
            >ESBOÇO ILUSTRATIVO</text>

            <text
              x="180"
              y="253"
              fill="#fbbf24"
              font-size="10"
            >Não usar para fabricação</text>

            <text
              x="180"
              y="269"
              fill="#94a3b8"
              font-size="9"
            >Formato e cotas a confirmar</text>
          </g>
        </svg>
      `
    }
  };

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

    const nome = Object.keys(MEDIDAS).find(
      (item) => normalizar(item) === chave
    );

    return nome ? MEDIDAS[nome] : null;
  }

  function obterDesenho(codigo) {
    return DESENHOS[normalizar(codigo)] || null;
  }

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

  function desenhoPendente(item) {
    const medidas = obterMedidas(item.codigo);

    return `
      <div class="pvc-desenho-pendente" role="status">
        <svg
          class="pvc-icone-pendente"
          viewBox="0 0 100 75"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 15 H82 V60 H18 Z M30 27 H70 V48 H30 Z"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linejoin="round"
          />

          <path
            d="M8 8 H92 M8 67 H92"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-dasharray="4 4"
            opacity=".55"
          />
        </svg>

        <strong>Desenho técnico pendente</strong>

        <span>
          O contorno real deste perfil ainda precisa ser confirmado
          em uma referência técnica confiável.
        </span>

        ${medidas
          ? `<small>Há medidas cadastradas abaixo; elas não definem o formato do contorno.</small>`
          : ""}
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
        <div class="pvc-desenho-svg">${desenho.svg}</div>

        <p class="pvc-status-desenho">
          ${desenho.status === "confirmado"
            ? "Desenho cadastrado com referência técnica."
            : "Desenho ilustrativo: geometria ainda não confirmada."}
        </p>

        ${desenho.fonte
          ? `<small class="pvc-fonte-desenho">Referência: ${escaparHTML(desenho.fonte)}</small>`
          : ""}
      </div>
    `;
  }

  function iniciar() {
    const abas = document.querySelector(".tabs");
    const container = document.querySelector(".container");

    if (!abas || !container) {
      console.error(
        "Perfis PVC: não encontrei .tabs ou .container no index.html."
      );
      return;
    }

    if (document.getElementById("btnPerfisPVC")) return;

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

      /* Animação do contorno do SF66 */
      .pvc-contorno-animado {
        stroke-dasharray: 1000;
        stroke-dashoffset: 1000;
        animation:
          pvcDesenharContorno 1.5s ease-out forwards,
          pvcPreencherPerfil 0.2s ease 1.3s forwards;
      }

      @keyframes pvcDesenharContorno {
        to {
          stroke-dashoffset: 0;
        }
      }

      @keyframes pvcPreencherPerfil {
        to {
          fill-opacity: 1;
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

    const botao = document.createElement("button");
    botao.type = "button";
    botao.id = "btnPerfisPVC";
    botao.textContent = "Perfis PVC";
    abas.appendChild(botao);

    abas.style.gridTemplateColumns = "repeat(3, minmax(0, 1fr))";

    const painel = document.createElement("section");
    painel.id = "painelPerfisPVC";
    painel.hidden = true;

    painel.innerHTML = `
      <div class="pvc-cabecalho">
        <h2>Catálogo de Perfis PVC</h2>
        <p>
          Pesquise por código ou categoria e abra um perfil para consultar
          as medidas cadastradas e o desenho técnico, quando confirmado.
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
          ${[...new Set(perfis.map((grupo) => grupo.categoria))]
            .map((cat) =>
              `<option value="${escaparHTML(cat)}">${escaparHTML(cat)}</option>`
            ).join("")}
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

    function selecionarAbaPerfis() {
      if (painel.hidden) {
        abaAnterior = abas.querySelector("button.ativo");
      }

      Array.from(container.children).forEach((elemento) => {
        if (elemento !== abas && elemento !== painel) {
          if (elemento.dataset.pvcDisplayOriginal === undefined) {
            elemento.dataset.pvcDisplayOriginal = elemento.style.display;
          }

          elemento.style.display = "none";
        }
      });

      painel.hidden = false;
      botao.classList.add("ativo");

      abas.querySelectorAll("button").forEach((b) => {
        if (b !== botao) b.classList.remove("ativo");
      });

      renderizar();
    }

    function voltarAoEstoque() {
      painel.hidden = true;
      botao.classList.remove("ativo");

      Array.from(container.children).forEach((elemento) => {
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
        return `<p><strong>Medidas:</strong> ainda não cadastradas.</p>`;
      }

      const nomes = {
        externa: "Externa",
        interna: "Interna",
        meio: "Central / meio",
        lateral: "Lateral",
        maior: "Maior",
        menor: "Menor",
        centralMaior: "Central maior",
        centralMenor: "Central menor"
      };

      const cartoes = Object.entries(medidas).map(([chave, valor]) => `
        <div class="pvc-medida">
          <span>${escaparHTML(nomes[chave] || chave)}</span>
          <strong>${escaparHTML(formatarMedida(valor))}</strong>
        </div>
      `).join("");

      return `<div class="pvc-medidas">${cartoes}</div>`;
    }

    function abrirDetalhes(item) {
      detalhes.hidden = false;

      const etiquetas = item.categorias.map((cat) =>
        `<span class="pvc-etiqueta">${escaparHTML(cat)}</span>`
      ).join("");

      const desenho = renderizarDesenho(item);
      const medidas = criarCartoesMedidas(item);
      const desenhoCadastrado = Boolean(obterDesenho(item.codigo));

      detalhes.innerHTML = `
        <h3>${escaparHTML(item.codigo)}</h3>

        <div class="pvc-etiquetas">${etiquetas}</div>

        ${desenho}
        ${medidas}

        <div class="pvc-aviso">
          ${desenhoCadastrado
            ? "Confira a referência indicada e valide o desenho antes de utilizá-lo para fabricação ou identificação técnica."
            : "O contorno deste perfil ainda não foi confirmado. As medidas exibidas são as registradas no cadastro e não permitem deduzir a geometria completa."}
        </div>

        <p>
          <strong>Código:</strong> ${escaparHTML(item.codigo)}<br>
          <strong>Categoria:</strong>
          ${escaparHTML(item.categorias.join(", "))}
        </p>

        <button
          type="button"
          class="pvc-fechar"
          id="pvcFecharDetalhes"
        >
          Fechar detalhes
        </button>

        <div class="pvc-fontes">
          ${FONTES.map((fonte) => `
            <a
              href="${escaparHTML(fonte.url)}"
              target="_blank"
              rel="noopener noreferrer"
            >${escaparHTML(fonte.nome)}</a>
          `).join("")}
        </div>
      `;

      detalhes.querySelector("#pvcFecharDetalhes")
        .addEventListener("click", () => {
          detalhes.hidden = true;
        });

      detalhes.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }

    function renderizar() {
      const termo = normalizar(busca.value);
      const filtro = categoria.value;

      const encontrados = catalogo.filter((item) => {
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

      encontrados.forEach((item) => {
        const card = document.createElement("button");
        card.type = "button";
        card.className = "pvc-card";

        const codigo = document.createElement("span");
        codigo.className = "pvc-codigo";
        codigo.textContent = item.codigo;

        const etiquetas = document.createElement("span");
        etiquetas.className = "pvc-etiquetas";

        item.categorias.forEach((cat) => {
          const tag = document.createElement("span");
          tag.className = "pvc-etiqueta";
          tag.textContent = cat;
          etiquetas.appendChild(tag);
        });

        const aviso = document.createElement("span");
        aviso.className = "pvc-pendente";

        if (obterDesenho(item.codigo)) {
          aviso.textContent = "Desenho cadastrado — conferir referência";
        } else if (obterMedidas(item.codigo)) {
          aviso.textContent = "Medidas cadastradas · desenho pendente";
        } else {
          aviso.textContent = "Desenho técnico a confirmar";
        }

        card.append(codigo, etiquetas, aviso);

        card.addEventListener("click", () => {
          abrirDetalhes(item);
        });

        grade.appendChild(card);
      });
    }

    botao.addEventListener("click", selecionarAbaPerfis);

    document.querySelectorAll("#btnEntrada, #btnSaida").forEach((b) => {
      b.addEventListener("click", voltarAoEstoque);
    });

    busca.addEventListener("input", renderizar);
    categoria.addEventListener("change", renderizar);

    renderizar();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciar);
  } else {
    iniciar();
  }
})();
