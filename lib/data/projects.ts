import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    title: "Loombound",
    slug: "loombound",
    description: {
      en: "A roguelite narrative engine prototype that explores layered AI systems for saga generation, runtime semantic decisions, and scene expansion.",
      zh: "一个 roguelite 叙事引擎原型，探索如何用分层 AI 系统生成故事结构、判断运行时语义，并展开可游玩的文本场景。",
    },
    tags: ["Python", "Claude API", "Ollama", "Qwen 2.5 7B", "Prompt Cache"],
    status: "prototype",
    links: [
      {
        label: {
          en: "GitHub",
          zh: "GitHub",
        },
        href: "https://github.com/HermaeusMorea",
      },
    ],
    highlights: [
      {
        text: {
          en: "Built a layered LLM narrative game engine that separates saga graph generation, runtime semantic classification, and scene text expansion into independent modules, avoiding a single large model doing all generation work.",
          zh: "构建分层 LLM 叙事游戏引擎，将 saga 图生成、运行时语义分类和场景文本展开拆成独立模块，避免单一大模型承担全部生成任务。",
        },
      },
      {
        text: {
          en: "Designed an Opus / Haiku / Qwen 2.5 7B collaboration flow: Opus generates waypoint topology, toll lexicon, rules, and narration table offline; Haiku outputs bearing, effects, and tolls at runtime; local Qwen expands scene text.",
          zh: "设计 Opus / Haiku / Qwen 2.5 7B 多模型协作流程：Opus 离线生成 waypoint 拓扑、toll lexicon、rules 和 narration table，Haiku 在运行时输出 bearing、effects 与 tolls，本地 Qwen 负责场景文本展开。",
        },
      },
      {
        text: {
          en: "Implemented Prompt Cache, Prefetch Cache, and token cost reports, moving high-frequency text expansion from API calls to a local model and providing 1000-run cost projections for architecture evaluation.",
          zh: "实现 Prompt Cache、Prefetch Cache 和 token 成本报表，将高频文本展开从 API 调用迁移到本地模型，并提供 1000 局成本投影用于架构评估。",
        },
      },
      {
        text: {
          en: "The module boundaries are already close to MCP-style tools and LangGraph nodes. I kept the current demo on direct API calls to better control cost, caching, and latency, with room to migrate once the runtime stabilizes.",
          zh: "项目模块边界已经接近 MCP tools 和 LangGraph 节点；当前 demo 先保留直接 API 调用，以便能更直接控制成本、缓存和延迟，等运行时稳定后再迁移。",
        },
        tone: "note",
      },
    ],
    sections: [
      {
        title: {
          en: "Problem",
          zh: "问题背景",
        },
        body: {
          en: "LLM-driven games can easily collapse into open-ended chat: the model writes text, but the application has little control over state, rules, cost, or continuity.",
          zh: "LLM 驱动的游戏很容易变成开放式聊天：模型能写文本，但应用很难稳定控制状态、规则、成本和叙事连续性。",
        },
        bullets: [
          {
            en: "Player choices need to affect structured game state, not only produce more prose.",
            zh: "玩家选择需要影响结构化游戏状态，而不只是生成更多文本。",
          },
          {
            en: "Narrative pressure, resources, and next-scene options need to stay coherent across a run.",
            zh: "叙事压力、资源变化和下一场景选项需要在整局流程中保持一致。",
          },
        ],
      },
      {
        title: {
          en: "Architecture",
          zh: "架构思路",
        },
        body: {
          en: "Loombound splits the system into generation-time structure, runtime semantic decisions, and local scene expansion, with deterministic code owning the final game loop.",
          zh: "Loombound 将系统拆成生成时结构、运行时语义决策和本地场景展开，并由确定性代码掌握最终游戏循环。",
        },
        bullets: [
          {
            en: "Opus prepares the saga structure, rule tables, narrative themes, and scene skeletons during offline generation, giving runtime a stable world frame.",
            zh: "Opus 在离线生成阶段负责准备 saga 结构、规则表、叙事主题和场景骨架，为运行时提供稳定的世界框架。",
          },
          {
            en: "Runtime Haiku classification interprets the narrative state after each player choice, keeps game semantics consistent, and assigns option effects for the next encounter.",
            zh: "运行时 Haiku 分类负责判断玩家选择后的叙事状态，保持游戏语义一致，并为下一次 encounter 分配选项影响。",
          },
          {
            en: "Local Qwen 2.5, or a small model deployed in the cloud, expands structured scene input into text the player can read directly.",
            zh: "本地 Qwen 2.5，或可自行部署在云端的小模型，负责把结构化场景输入展开成玩家能直接阅读的文本。",
          },
          {
            en: "The deterministic game core applies the concrete numeric changes caused by player choices, including health, money, sanity, and rule penalties.",
            zh: "确定性游戏内核最终执行玩家选择带来的数值变化，包括 health、money、sanity 和 rule penalty 等状态更新。",
          },
        ],
      },
    ],
    mediaNote: {
      en: "This section can hold a CLI run screenshot, a generated scene sample, or a short GIF showing the flow from theme input to player choice.",
      zh: "这里可以放 CLI 运行截图、生成场景片段，或一段从主题输入到玩家选择流程的简短 GIF。",
    },
    media: [
      {
        title: {
          en: "Opus generates the saga map",
          zh: "Opus 生成 saga 地图",
        },
        description: {
          en: "The offline generation step turns a theme into a waypoint graph with branches, encounter types, and a terminal destination.",
          zh: "离线生成阶段把一个主题转成 waypoint 图，包含分支、encounter 类型和最终终点。",
        },
        src: "/projects/loombound/opus-generate.png",
        alt: {
          en: "Terminal screenshot showing Opus generating a Loombound saga graph.",
          zh: "终端截图，展示 Opus 生成 Loombound saga 图。",
        },
        width: 913,
        height: 490,
      },
      {
        title: {
          en: "Haiku prepares scene skeletons",
          zh: "Haiku 准备场景骨架",
        },
        description: {
          en: "Haiku batches the waypoints and writes scene skeletons, giving runtime models a structured base instead of asking them to invent everything live.",
          zh: "Haiku 分批处理 waypoints 并写入场景骨架，让运行时模型基于结构化材料工作，而不是临场从零发明。",
        },
        src: "/projects/loombound/haiku-generate.png",
        alt: {
          en: "Terminal screenshot showing Haiku generating scene skeleton cache.",
          zh: "终端截图，展示 Haiku 生成场景骨架缓存。",
        },
        width: 1105,
        height: 202,
      },
      {
        title: {
          en: "Runtime expands the next scene",
          zh: "运行时展开下一段场景",
        },
        description: {
          en: "When the player enters a waypoint, the runtime can show the location while background generation prepares the encounter text.",
          zh: "玩家进入 waypoint 时，运行时先展示地点信息，同时后台生成下一段 encounter 文本。",
        },
        src: "/projects/loombound/runtime-generating.png",
        alt: {
          en: "Loombound runtime screenshot showing content generation in progress.",
          zh: "Loombound 运行时截图，展示内容生成中。",
        },
        width: 1023,
        height: 168,
      },
      {
        title: {
          en: "The generated encounter becomes playable state",
          zh: "生成内容进入可游玩的状态",
        },
        description: {
          en: "The final encounter screen combines player state, generated scene text, choices, toll labels, and sanity costs into one playable loop.",
          zh: "最终 encounter 页面把玩家状态、生成场景文本、选项、toll 标签和 sanity cost 合成一个可游玩的循环。",
        },
        src: "/projects/loombound/runtime-encounter.png",
        alt: {
          en: "Loombound encounter screen with player stats, generated text, choices, tolls, and sanity costs.",
          zh: "Loombound encounter 页面，包含玩家状态、生成文本、选项、toll 和 sanity cost。",
        },
        width: 1231,
        height: 745,
      },
    ],
    outcomes: [
      {
        title: {
          en: "Cost and latency control",
          zh: "成本与延迟控制",
        },
        body: {
          en: "Loombound limits expensive large-model calls to low-frequency offline generation, then routes frequent runtime work to Haiku and local Qwen 2.5. Prompt Cache, PrefetchCache, and token reports are used to track both cost and perceived waiting time.",
          zh: "Loombound 将昂贵的大模型调用限制在低频离线阶段，把运行时高频任务拆给 Haiku 与本地 Qwen 2.5，并通过 Prompt Cache、PrefetchCache 和 token 报表持续评估成本与等待时间。",
        },
        bullets: [
          {
            en: "Opus: offline saga, rules, and narration table generation.",
            zh: "Opus：离线生成 saga、rules 和 narration table。",
          },
          {
            en: "Haiku: runtime bearing, effects, and toll classification with cached context reuse.",
            zh: "Haiku：运行时分类 bearing、effects、tolls，并复用缓存上下文。",
          },
          {
            en: "Qwen 2.5: local expansion for player-facing scene text.",
            zh: "Qwen 2.5：本地展开玩家可见文本。",
          },
          {
            en: "Reports: estimate single-run and 1000-run cost to compare model combinations.",
            zh: "报表：估算单局与 1000 局成本，用于比较不同模型组合。",
          },
        ],
        conclusion: {
          en: "In the current test scale, this layered architecture reduces the estimated 1000-run cost from about $220 to about $15, while moving high-frequency text generation to a local or self-deployable small model.",
          zh: "在当前测试规模下，分层架构将 1000 局成本估算从约 $220 降到约 $15，并把高频文本生成从 API 调用迁移到本地或可自部署的小模型上。",
        },
      },
      {
        title: {
          en: "Portable generation pipeline",
          zh: "可迁移的生成管线",
        },
        body: {
          en: "The pipeline is not tied to a CLI text game. Its outputs are structured assets and runtime signals, so the same generation layer can be adapted to Unity, Godot, web games, or other genres with a thin engine adapter.",
          zh: "这套管线并不绑定在 CLI 文本游戏上。它输出的是结构化资产和运行时信号，因此可以通过一层引擎适配器迁移到 Unity、Godot、网页游戏或其他类型的游戏中。",
        },
        bullets: [
          {
            en: "Generation layer: saga graphs, rules, scene skeletons, narrative themes, and option signals.",
            zh: "生成层：产出 saga 图、规则、场景骨架、叙事主题和选项信号。",
          },
          {
            en: "Engine adapter: maps those signals into UI, state changes, encounters, or level flow.",
            zh: "引擎适配层：把这些信号映射到 UI、状态变化、encounter 或关卡流程里。",
          },
          {
            en: "Game core: keeps combat, physics, economy, and progression deterministic inside the target engine.",
            zh: "游戏内核：战斗、物理、经济和成长系统仍由目标引擎内的确定性逻辑负责。",
          },
          {
            linkLabel: {
              en: "Threadfall",
              zh: "Threadfall",
            },
            href: "/projects/threadfall",
            text: {
              en: " is a natural next target: the same idea can guide a Unity survivor-like roguelike while Unity owns the action runtime.",
              zh: " 是很自然的后续目标：同样的思路可以用于 Unity 类幸存者 roguelike，由 Unity 负责动作运行时。",
            },
          },
        ],
        conclusion: {
          en: "Loombound can be presented not only as one game prototype, but also as a reusable AI content pipeline for different engines and gameplay formats.",
          zh: "Loombound 不只是一个单独的游戏原型，也可以被视为一套可复用的 AI 内容生成管线，迁移到不同引擎和玩法形态中。",
        },
      },
    ],
  },
  {
    title: "Threadfall",
    slug: "threadfall",
    description: {
      en: "A Unity survivor-like roguelike prototype that explores how AI-generated world direction and visual style can connect to a deterministic action game runtime.",
      zh: "一个 Unity 类幸存者 roguelike 原型，探索如何把 AI 生成的世界方向和视觉风格连接到确定性的动作游戏运行时。",
    },
    tags: ["Unity", "C#", "Survivor-like Roguelike", "AI-Assisted Game"],
    status: "prototype",
    links: [],
    highlights: [
      {
        text: {
          en: "Turns a theme-driven generation pipeline into a playable survivor-like roguelike prototype rather than a static content mockup.",
          zh: "把主题驱动的生成流程落到一个可玩的类幸存者 roguelike 原型里，而不是停留在静态内容展示。",
        },
      },
      {
        text: {
          en: "Keeps gameplay execution deterministic while using AI-generated direction for world tone, presentation, and content framing.",
          zh: "玩法执行保持确定性，同时用 AI 生成的方向来塑造世界基调、视觉呈现和内容包装。",
        },
      },
    ],
    sections: [
      {
        title: {
          en: "Problem",
          zh: "问题背景",
        },
        body: {
          en: "The project explores how generated world direction can become an actual playable survivor-like roguelike run, instead of stopping at concept text or visual prompts.",
          zh: "这个项目探索如何让生成出的世界方向进入真正可玩的类幸存者 roguelike 流程，而不是停在概念文本或视觉提示词。",
        },
      },
      {
        title: {
          en: "Architecture",
          zh: "架构思路",
        },
        body: {
          en: "The high-level generation layer prepares theme, content direction, and visual identity, while Unity owns deterministic combat, spawning, progression, and player-facing runtime behavior.",
          zh: "高层生成部分负责主题、内容方向和视觉身份，Unity 侧负责确定性的战斗、刷怪、成长和玩家可体验的运行时行为。",
        },
      },
      {
        title: {
          en: "Implementation",
          zh: "实现内容",
        },
        body: {
          en: "The current page is a public-facing framework for the project. More concrete screenshots, GIFs, and short notes can be added once the presentation assets are selected.",
          zh: "当前页面先作为项目展示框架。之后选好截图、GIF 和简短说明后，可以继续补充更具体的展示内容。",
        },
      },
    ],
    mediaNote: {
      en: "Reserve this space for a short gameplay GIF, generated world preview, or screenshot showing combat, enemy waves, and upgrade choices.",
      zh: "这里预留给简短 gameplay GIF、生成世界预览，或展示战斗、敌潮和升级选择的截图。",
    },
  },
];
