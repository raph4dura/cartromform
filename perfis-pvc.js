
(() => {
  "use strict";

  // Catálogo inicial de códigos.
  // A lista precisa ser conferida com a documentação técnica da Bazze.
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

  const FONTES = [
    {
      nome: "Site oficial — esquadrias PVC",
      url: "https://www.bazze.com.br/produtos/esquadrias-de-pvc/"
    },
    {
      nome: "Manual oficial de instalação",
      url: "https://www.bazze.com.br/wp-content/uploads/2020/11/manual_instalacao_bazze.pdf"
    },
    {
      nome: "Catálogo da linha Europa",
      url: "https://www.bazze.com.br/wp-content/uploads/2016/08/Europa.pdf"
    }
  ];

  const normalizar = (texto) =>
    String(texto || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();

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

    return [...mapa.values()].sort((a, b) =>
      a.codigo.localeCompare(b.codigo, "pt-BR")
    );
  }

  const catalogo = prepararDados();

  function iniciar() {
    const abas = document.querySelector(".tabs");
    const container = document.querySelector(".container");

    if (!abas || !container) {
      console.error(
        "Perfis PVC: não encontrei .tabs ou .container no index.html."
      );
      return;
    }

    // Evita criar duas abas se o arquivo for carregado novamente.
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

      .pvc-desenho-pendente {
        min-height: 130px;
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

      .pvc-detalhes p {
        font-size: 13px;
        line-height: 1.6;
        color: #cbd5e1;
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
      }
    `;

    document.head.appendChild(estilo);

    // Cria a terceira aba.
    const botao = document.createElement("button");
    botao.type = "button";
    botao.id = "btnPerfisPVC";
    botao.textContent = "Perfis PVC";
    abas.appendChild(botao);

    abas.style.gridTemplateColumns = "repeat(3, minmax(0, 1fr))";

    // Cria o painel do catálogo.
    const painel = document.createElement("section");
    painel.id = "painelPerfisPVC";
    painel.hidden = true;

    painel.innerHTML = `
      <div class="pvc-cabecalho">
        <h2>Catálogo de Perfis PVC</h2>
        <p>
          Pesquise por código ou categoria e abra um perfil para consultar
          os dados disponíveis.
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
          ${perfis.map((grupo) =>
            `<option value="${grupo.categoria}">${grupo.categoria}</option>`
          ).join("")}
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

    function selecionarAbaPerfis() {
      // Oculta o conteúdo do estoque sem removê-lo.
      Array.from(container.children).forEach((elemento) => {
        if (elemento !== abas && elemento !== painel) {
          elemento.dataset.pvcDisplayOriginal ??= elemento.style.display;
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
            elemento.style.display = elemento.dataset.pvcDisplayOriginal;
            delete elemento.dataset.pvcDisplayOriginal;
          }
        }
      });
    }

    function abrirDetalhes(item) {
      detalhes.hidden = false;

      const etiquetas = item.categorias
        .map((cat) => `<span class="pvc-etiqueta">${cat}</span>`)
        .join("");

      detalhes.innerHTML = `
        <h3>${item.codigo}</h3>

        <div class="pvc-etiquetas">${etiquetas}</div>

        <div class="pvc-desenho-pendente">
          <strong>Desenho técnico pendente de confirmação</strong>
          <span>
            O desenho da seção transversal e as dimensões deste código
            ainda precisam ser conferidos com a documentação técnica.
          </span>
        </div>

        <p>
          <strong>Código:</strong> ${item.codigo}<br>
          <strong>Categoria:</strong> ${item.categorias.join(", ")}<br>
          <strong>Dimensões:</strong> não confirmadas<br>
          <strong>Seção transversal:</strong> não confirmada
        </p>

        <button type="button" class="pvc-fechar" id="pvcFecharDetalhes">
          Fechar detalhes
        </button>

        <div class="pvc-fontes">
          ${FONTES.map((fonte) => `
            <a href="${fonte.url}" target="_blank" rel="noopener noreferrer">
              ${fonte.nome}
            </a>
          `).join("")}
        </div>
      `;

      detalhes.querySelector("#pvcFecharDetalhes")
        .addEventListener("click", () => {
          detalhes.hidden = true;
        });

      detalhes.scrollIntoView({ behavior: "smooth", block: "nearest" });
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
        aviso.textContent = "Desenho técnico a confirmar";

        card.append(codigo, etiquetas, aviso);
        card.addEventListener("click", () => abrirDetalhes(item));
        grade.appendChild(card);
      });
    }

    botao.addEventListener("click", selecionarAbaPerfis);

    // Ao voltar para Entrada ou Saída, deixa o código atual do estoque agir.
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
