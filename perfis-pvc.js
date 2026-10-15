
(() => {
  "use strict";

  // =========================================================
  // CATÁLOGO DE PERFIS PVC
  // Códigos e categorias iniciais: conferir com a documentação.
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
  // MEDIDAS INFORMADAS
  // Todas as medidas estão em milímetros.
  // Valores registrados como informados, sem completar lacunas.
  // =========================================================

  const MEDIDAS = {
    "GB8": {
      externa: 3.2
    },
    "GB12": {
      externa: 3.5
    },
    "GB15": {
      externa: 3.8
    },
    "GB19": {
      externa: 4.2
    },
    "GB22": {
      externa: 4.4
    },
    "GB25": {
      externa: 5.0
    },
    "GB31": {
      externa: 5.0
    },
    "GB34": {
      externa: 5.2
    },
    "GB38": {
      externa: 5.6
    },
    "SE76N": {
      externa: 10.4,
      interna: 4.3
    },
    "SF66": {
      externa: 9.0,
      interna: 7.0
    },
    "SF78C": {
      externa: 10.7,
      interna: "5 / 5,5"
    },
    "SF92": {
      externa: 11.6,
      interna: 9.5
    },
    "SF106": {
      externa: 13.3,
      interna: 7.7
    },
    "SF111": {
      externa: 14.4,
      interna: 11.4
    },
    "BR60": {
      externa: 8.5,
      interna: 5.5
    },
    "BR88": {
      externa: 7.5,
      interna: 6.5
    },
    "FR73": {
      externa: 7.5,
      interna: 7.3
    },
    "FR106": {
      externa: 11.0,
      interna: 10.4
    },
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
    "LAMBri": {
      externa: 17.5
    },
    "CAIXA": {
      externa: 21.0
    },
    "APLique": {
      externa: 5.0
    },
    "PINAZIO": {
      externa: 5.0,
      interna: 5.5
    },
    "GM42": {
      meio: 5.0,
      lateral: 4.3
    },
    "IL42": {
      externa: 6.0
    },
    "KT42": {
      externa: 5.5
    },
    "IL65": {
      externa: 7.0,
      interna: 7.5
    },
    "KT65": {
      externa: 7.0,
      interna: 8.0
    },
    "VENEZIANA 60": {
      externa: 9.5
    }
  };

  // =========================================================
  // REFERÊNCIAS
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
    }
  ];

  // =========================================================
  // UTILITÁRIOS
  // =========================================================

  const normalizar = (texto) =>
    String(texto || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();

  const escaparHTML = (texto) =>
    String(texto ?? "").replace(/[&<>"']/g, (caractere) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[caractere]);

  function chaveMedida(codigo) {
    const chave = normalizar(codigo);

    return Object.keys(MEDIDAS).find(
      (nome) => normalizar(nome) === chave
    );
  }

  function obterMedidas(codigo) {
    const chave = chaveMedida(codigo);
    return chave ? MEDIDAS[chave] : null;
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

    // Acrescenta os perfis informados que ainda não estavam
    // na lista original de códigos.
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
  // DESENHO SVG PROVISÓRIO DO SF66
  // IMPORTANTE:
  // O formato abaixo é ilustrativo, não é o desenho confirmado
  // do perfil original da Bazze.
  // =========================================================

  function desenhoSF66() {
    return `
      <div class="pvc-desenho-area">
        <svg
          class="pvc-svg"
          viewBox="0 0 340 285"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Desenho provisório do perfil SF66"
        >
          <defs>
            <pattern
              id="pvcGradeSF66"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke="#263449"
                stroke-width="0.6"
              />
            </pattern>
          </defs>

          <rect
            x="0" y="0" width="340" height="285"
            rx="10"
            fill="url(#pvcGradeSF66)"
          />

          <!-- Cota horizontal superior -->
          <g
            fill="none"
            stroke="#38bdf8"
            stroke-width="1.5"
          >
            <path d="M95 88 V44 M245 88 V44"/>
            <path d="M95 52 H245"/>
            <path d="M95 52 l8 -4 M95 52 l8 4"/>
            <path d="M245 52 l-8 -4 M245 52 l-8 4"/>

            <!-- Cota vertical esquerda -->
            <path d="M95 88 H49 M95 188 H49"/>
            <path d="M57 88 V188"/>
            <path d="M57 88 l-4 8 M57 88 l4 8"/>
            <path d="M57 188 l-4 -8 M57 188 l4 -8"/>

            <!-- Cota horizontal da cavidade -->
            <path d="M125 128 V150 M215 128 V150"/>
            <path d="M125 142 H215"/>
            <path d="M125 142 l7 -4 M125 142 l7 4"/>
            <path d="M215 142 l-7 -4 M215 142 l-7 4"/>
          </g>

          <!-- Contorno exterior ilustrativo -->
          <path
            d="M95 88
               H245
               V188
               H95
               Z"
            fill="#334155"
            stroke="#38bdf8"
            stroke-width="3"
            stroke-linejoin="round"
          />

          <!-- Cavidade ilustrativa -->
          <path
            d="M125 118
               H215
               V158
               H125
               Z"
            fill="#0b1220"
            stroke="#38bdf8"
            stroke-width="2"
            stroke-linejoin="round"
          />

          <!-- Identificação das cotas -->
          <g
            fill="#7dd3fc"
            font-family="Arial, sans-serif"
            font-size="12"
            text-anchor="middle"
          >
            <text x="170" y="36">Externa: 9,0 mm</text>
            <text x="170" y="134">7,0 mm</text>
            <text
              x="32" y="138"
              transform="rotate(-90 32 138)"
            >Esquema ilustrativo</text>
          </g>

          <g
            font-family="Arial, sans-serif"
            text-anchor="middle"
          >
            <text
              x="170" y="230"
              fill="#fbbf24"
              font-size="12"
              font-weight="700"
            >DESENHO PROVISÓRIO</text>

            <text
              x="170" y="249"
              fill="#94a3b8"
              font-size="10"
            >Geometria a conferir</text>

            <text
              x="170" y="267"
              fill="#94a3b8"
              font-size="10"
            >Cotas não estão em escala real</text>
          </g>
        </svg>
      </div>
    `;
  }

  // =========================================================
  // DESENHO GENÉRICO PARA OS DEMAIS PERFIS
  // Só é utilizado quando não existe desenho específico.
  // =========================================================

  function desenhoPendente() {
    return `
      <div class="pvc-desenho-pendente">
        <span class="pvc-icone-desenho">⌗</span>
        <strong>Desenho técnico pendente</strong>
        <span>
          O contorno real deste perfil ainda precisa ser conferido.
        </span>
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
        grid-template-columns: repeat(
          auto-fill, minmax(155px, 1fr)
        );
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

      .pvc-svg {
        display: block;
        width: 100%;
        max-width: 440px;
        height: auto;
        margin: 0 auto;
      }

      .pvc-desenho-pendente {
        min-height: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 8px;
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

      .pvc-icone-desenho {
        font-size: 30px;
        color: #38bdf8;
      }

      .pvc-medidas {
        display: grid;
        grid-template-columns: repeat(
          auto-fit, minmax(110px, 1fr)
        );
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

    // Cria a aba de perfis.
    const botao = document.createElement("button");
    botao.type = "button";
    botao.id = "btnPerfisPVC";
    botao.textContent = "Perfis PVC";
    abas.appendChild(botao);

    // Mantém a distribuição em três colunas das abas.
    abas.style.gridTemplateColumns = "repeat(3, minmax(0, 1fr))";

    // Cria o painel do catálogo.
    const painel = document.createElement("section");
    painel.id = "painelPerfisPVC";
    painel.hidden = true;

    painel.innerHTML = `
      <div class="pvc-cabecalho">
        <h2>Catálogo de Perfis PVC</h2>
        <p>
          Pesquise por código ou categoria e abra um perfil
          para consultar suas medidas e seu desenho.
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

      <div id="pvcContagem" class="pvc-contagem"></div>
      <div id="pvcDetalhes" class="pvc-detalhes" hidden></div>
      <div id="pvcGrade" class="pvc-grade"></div>
    `;

    abas.insertAdjacentElement("afterend", painel);

    const busca = painel.querySelector("#pvcBusca");
    const categoria = painel.querySelector("#pvcCategoria");
    const grade = painel.querySelector("#pvcGrade");
    const contagem = painel.querySelector("#pvcContagem");
    const detalhes = painel.querySelector("#pvcDetalhes");

    // Guarda a aba ativa para poder restaurá-la ao sair do catálogo.
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
        if (elemento !== abas && elemento !== painel) {
          if (elemento.dataset.pvcDisplayOriginal !== undefined) {
            elemento.style.display =
              elemento.dataset.pvcDisplayOriginal;

            delete elemento.dataset.pvcDisplayOriginal;
          }
        }
      });

      if (abaAnterior) {
        abaAnterior.classList.add("ativo");
      }

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
        return `
          <p>
            <strong>Medidas:</strong> ainda não cadastradas.
          </p>
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
        centralMenor: "Central menor"
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

    function abrirDetalhes(item) {
      detalhes.hidden = false;

      const etiquetas = item.categorias
        .map((cat) =>
          `<span class="pvc-etiqueta">${escaparHTML(cat)}</span>`
        )
        .join("");

      // Só o SF66 possui desenho individual neste primeiro teste.
      const temDesenho = normalizar(item.codigo) === "sf66";

      const desenho = temDesenho
        ? desenhoSF66()
        : desenhoPendente();

      const medidas = criarCartoesMedidas(item);

      detalhes.innerHTML = `
        <h3>${escaparHTML(item.codigo)}</h3>

        <div class="pvc-etiquetas">${etiquetas}</div>

        ${desenho}

        ${medidas}

        <div class="pvc-aviso">
          ${
            temDesenho
              ? "ATENÇÃO: desenho ilustrativo provisório. O formato real do SF66 ainda precisa ser conferido. As medidas exibidas foram informadas para cadastro e o desenho não está em escala real."
              : "O desenho técnico deste perfil ainda não foi confirmado. As medidas exibidas, quando disponíveis, são as registradas no cadastro."
          }
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
            Nenhum perfil encontrado.
            Tente outro código ou categoria.
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

        if (normalizar(item.codigo) === "sf66") {
          aviso.textContent = "Desenho ilustrativo disponível";
        } else if (obterMedidas(item.codigo)) {
          aviso.textContent = "Medidas cadastradas";
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

    // Retorna ao estoque quando as abas Entrada/Saída são acionadas.
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
