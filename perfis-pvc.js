
(() => {
  const perfis = [
    ["HF88S","Europa"],["HF112","Europa"],
    ["SF92","Europa"],["SF66","Europa"],
    ["SP66","Europa"],["MF52","Europa"],
    ["GM42N","Europa"],["IL36","Europa"],
    ["IL50","Europa"],["BR60","Europa"],
    ["BR88","Europa"],["FR106","Europa"],
    ["SF106","Europa"],["SF78C","Europa"],
    ["SE76N","Europa"],["JT61","Europa"],
    ["FR73N","Europa"],
    ["GB10","Europa"],["GB15","Europa"],
    ["GB19","Europa"],["GB25","Europa"],
    ["GB31","Europa"],["GB34","Europa"],
    ["BZ4556","Europa"],["BZ5563","Europa"],
    ["PERS. 37/57","Europa"],["BZ3016","Europa"],
    ["KT16","Europa"],["BZ0012","Europa"],
    ["BZ0006","Europa"],["BZ1770","Europa"],
    ["BZ0010","Europa"],["CP2","Europa"],
    ["CA6","Europa"],["ZS30","Europa"],
    ["VENEZ TROPICAL","Europa"],["BY60","Europa"],
    ["PP150N","Europa"],["BZ20010","Europa"],

    ["HF112","Reforços"],["HF88S","Reforços"],
    ["SF66","Reforços"],["SP66","Reforços"],
    ["SF92","Reforços"],["HF73","Reforços"],
    ["BR60","Reforços"],["FR73N","Reforços"],
    ["SF78C","Reforços"],["FR106 / SF106","Reforços"],
    ["BR88","Reforços"],["SF52","Reforços"],
    ["CA6","Reforços"],["TRILHO Z","Reforços"],

    ["HF73","Design"],["SF52","Design"],
    ["IL22","Design"],["SP66","Design"],
    ["SP66 REFILADO","Design"],["TR27","Design"],
    ["EMBELEZADOR L22","Design"],

    ["AL1092","Alumínio"],["AL1093","Alumínio"],
    ["EMBELEZADOR SF92","Alumínio"],
    ["COLUNA 100 X 50","Alumínio"],
    ["COLUNA 150 X 50","Alumínio"],
    ["COLUNA 125 X 125","Alumínio"]
  ].map(([codigo, categoria]) => ({codigo,categoria}));

  const categorias = ["Europa","Reforços","Design","Alumínio"];

  const estilo = document.createElement("style");
  estilo.textContent = `
    #btnPerfisPVC {background:transparent;color:#475569;box-shadow:none}
    #btnPerfisPVC.active {background:white;color:#2563eb}
    #painelPerfisPVC {display:none}
    #painelPerfisPVC .filtros {
      display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:15px
    }
    #painelPerfisPVC .grade {
      display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px
    }
    #painelPerfisPVC .perfil {
      background:white;color:#1e293b;text-align:left;
      border:1px solid #e2e8f0;box-shadow:none;padding:14px;
      min-height:95px
    }
    #painelPerfisPVC .perfil strong {display:block;color:#2563eb;font-size:17px}
    #painelPerfisPVC .perfil small {display:block;color:#64748b;margin-top:7px}
    #modalPerfilPVC {
      display:none;position:fixed;inset:0;z-index:99999;
      background:#0f172acc;padding:12px;overflow:auto
    }
    #modalPerfilPVC .conteudo {
      background:white;border-radius:16px;padding:18px;
      max-width:600px;margin:25px auto
    }
    #modalPerfilPVC .desenho {
      background:#f8fafc;border:1px solid #e2e8f0;
      border-radius:12px;padding:12px;margin:15px 0
    }
    #modalPerfilPVC .fechar {
      width:auto;background:#e2e8f0;color:#0f172a;box-shadow:none
    }
    #modalPerfilPVC .aviso {
      font-size:12px;line-height:1.5;color:#64748b
    }
    @media(max-width:500px) {
      #painelPerfisPVC .grade {grid-template-columns:1fr}
      #painelPerfisPVC .filtros {grid-template-columns:1fr}
    }
  `;
  document.head.appendChild(estilo);

  const abas = document.querySelector(".tabs");
  const container = document.querySelector(".container");
  if (!abas || !container) return;

  abas.style.gridTemplateColumns = "repeat(3,minmax(0,1fr))";

  const botao = document.createElement("button");
  botao.id = "btnPerfisPVC";
  botao.className = "tab";
  botao.textContent = "🧩 Perfis PVC";
  abas.appendChild(botao);

  const painel = document.createElement("section");
  painel.id = "painelPerfisPVC";
  painel.className = "card";

  painel.innerHTML = `
    <h2>🧩 Catálogo de perfis</h2>
    <p class="small">Pesquise por código e selecione a categoria desejada.</p>
    <div class="filtros">
      <input id="pesquisaPerfilPVC" placeholder="🔎 Buscar perfil...">
      <select id="categoriaPerfilPVC">
        <option value="">Todas as categorias</option>
        ${categorias.map(c=>`<option value="${c}">${c}</option>`).join("")}
      </select>
    </div>
    <p id="quantidadePerfisPVC" class="count"></p>
    <div id="gradePerfisPVC" class="grade"></div>
    <p class="small">Os códigos foram identificados a partir da foto enviada. Confira as medidas no catálogo oficial.</p>
  `;
  abas.insertAdjacentElement("afterend",painel);

  const modal = document.createElement("div");
  modal.id = "modalPerfilPVC";
  modal.innerHTML = `
    <div class="conteudo">
      <div style="display:flex;justify-content:space-between;gap:10px;align-items:center">
        <div>
          <p id="modalCategoriaPVC" class="count"></p>
          <h2 id="modalTituloPVC" style="margin:0"></h2>
        </div>
        <button id="fecharPerfilPVC" class="fechar">Fechar ✕</button>
      </div>
      <div id="desenhoPerfilPVC" class="desenho"></div>
      <p><strong>Categoria:</strong> <span id="tipoPerfilPVC"></span></p>
      <p class="small">Medidas: consulte o desenho técnico oficial do fabricante.</p>
      <label for="observacaoPerfilPVC">Observações</label>
      <textarea id="observacaoPerfilPVC" rows="4"
        placeholder="Anotações sobre este perfil..."></textarea>
      <button id="salvarPerfilPVC" style="margin-top:10px">💾 Salvar observação</button>
      <p id="statusPerfilPVC" class="small"></p>
      <p class="aviso">
        O desenho exibido é ilustrativo, não representa a geometria exata
        do perfil. Não use para fabricação ou corte.
      </p>
    </div>
  `;
  document.body.appendChild(modal);

  const grade = document.getElementById("gradePerfisPVC");
  const pesquisa = document.getElementById("pesquisaPerfilPVC");
  const filtro = document.getElementById("categoriaPerfilPVC");

  // Mantém a mesma ficha para códigos repetidos em categorias diferentes.
  function chave(p) {
    return p.categoria + ":" + p.codigo;
  }

  function desenhoSVG(codigo) {
    // Desenho genérico para demonstrar a ficha; não é o perfil real.
    return `
      <svg viewBox="0 0 240 180" width="100%"
        role="img" aria-label="Desenho ilustrativo de ${codigo}">
        <g fill="#dbeafe" stroke="#2563eb" stroke-width="4"
           stroke-linejoin="round">
          <path d="M55 35 H185 V60 H155 V80 H180 V145 H130
                   V115 H100 V145 H55 Z"/>
          <path d="M75 52 V125 H88 V98 H145 V125 H162 V52 Z"
                fill="#f8fafc"/>
        </g>
        <g fill="#64748b" font-size="10" text-anchor="middle">
          <text x="120" y="20">Esquema ilustrativo</text>
          <text x="120" y="165">Não está em escala</text>
        </g>
      </svg>`;
  }

  function renderizar() {
    const termo = pesquisa.value.trim().toLowerCase();
    const cat = filtro.value;

    const encontrados = perfis.filter(p =>
      (!cat || p.categoria === cat) &&
      (!termo ||
        p.codigo.toLowerCase().includes(termo) ||
        p.categoria.toLowerCase().includes(termo))
    );

    document.getElementById("quantidadePerfisPVC").textContent =
      encontrados.length + " perfil(is) encontrado(s)";

    grade.innerHTML = encontrados.map((p,i) => `
      <button class="perfil" data-indice="${i}">
        <strong>${p.codigo}</strong>
        <small>${p.categoria}</small>
        <small>Toque para ver a ficha →</small>
      </button>
    `).join("") || '<p>Nenhum perfil encontrado.</p>';

    grade.querySelectorAll("[data-indice]").forEach((b,i) => {
      b.addEventListener("click", () => abrirPerfil(encontrados[i]));
    });
  }

  let perfilAtual = null;

  function abrirPerfil(p) {
    perfilAtual = p;
    document.getElementById("modalTituloPVC").textContent = p.codigo;
    document.getElementById("modalCategoriaPVC").textContent = p.categoria;
    document.getElementById("tipoPerfilPVC").textContent = p.categoria;
    document.getElementById("desenhoPerfilPVC").innerHTML = desenhoSVG(p.codigo);

    try {
      document.getElementById("observacaoPerfilPVC").value =
        localStorage.getItem("obsPerfilPVC:" + chave(p)) || "";
    } catch(e) {
      document.getElementById("observacaoPerfilPVC").value = "";
    }

    document.getElementById("statusPerfilPVC").textContent = "";
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  }

  function fecharModal() {
    modal.style.display = "none";
    document.body.style.overflow = "";
  }

  document.getElementById("fecharPerfilPVC").onclick = fecharModal;

  modal.addEventListener("click",e => {
    if (e.target === modal) fecharModal();
  });

  document.addEventListener("keydown",e => {
    if (e.key === "Escape") fecharModal();
  });

  document.getElementById("salvarPerfilPVC").onclick = () => {
    if (!perfilAtual) return;
    try {
      localStorage.setItem(
        "obsPerfilPVC:" + chave(perfilAtual),
        document.getElementById("observacaoPerfilPVC").value
      );
      document.getElementById("statusPerfilPVC").textContent =
        "Observação salva neste aparelho e navegador.";
    } catch(e) {
      document.getElementById("statusPerfilPVC").textContent =
        "Não foi possível salvar a observação neste navegador.";
    }
  };

  // Guarda a visibilidade original para alternar de aba sem afetar o estoque.
  const elementosEstoque = [...container.children].filter(
    el => el !== abas && el !== painel
  );
  const visibilidadeOriginal = new Map(
    elementosEstoque.map(el => [el,el.style.display])
  );

  function mostrarCatalogo() {
    elementosEstoque.forEach(el => el.style.display = "none");
    painel.style.display = "block";
    abas.querySelectorAll(".tab").forEach(b=>b.classList.remove("active"));
    botao.classList.add("active");
    window.scrollTo({top:0,behavior:"smooth"});
  }

  function mostrarEstoque(btn) {
    elementosEstoque.forEach(el => {
      el.style.display = visibilidadeOriginal.get(el);
    });
    painel.style.display = "none";
    abas.querySelectorAll(".tab").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
  }

  botao.addEventListener("click",mostrarCatalogo);
  document.getElementById("btnEntrada").addEventListener("click",() =>
    mostrarEstoque(document.getElementById("btnEntrada"))
  );
  document.getElementById("btnSaida").addEventListener("click",() =>
    mostrarEstoque(document.getElementById("btnSaida"))
  );

  pesquisa.addEventListener("input",renderizar);
  filtro.addEventListener("change",renderizar);

  renderizar();
})();
