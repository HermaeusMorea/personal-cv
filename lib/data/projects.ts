import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    title: "Loombound",
    slug: "loombound",
    description: {
      en: "A roguelike narrative engine prototype that explores layered AI systems for saga generation, runtime semantic decisions, and scene expansion.",
      zh: "一个 roguelike 叙事引擎原型，探索如何用分层 AI 系统生成故事结构、判断运行时语义，并展开可游玩的文本场景。",
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
          zh: "问题",
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
          en: "Approach",
          zh: "思路",
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
      en: "A 2D top-down survivor-like roguelike vertical slice where a theme phrase generates the run's world, weapons, enemies, art direction, and wave flavor offline, then Unity plays it deterministically.",
      zh: "一个 2D 俯视角类幸存者 roguelike 垂直切片：一句主题短语离线生成世界观、武器、敌人、美术方向和 wave flavor，再由 Unity 确定性运行。",
    },
    tags: ["Unity", "C#", "Python", "Anthropic", "fal.ai", "Pydantic"],
    status: "prototype",
    links: [],
    highlights: [
      {
        text: {
          en: "Builds a theme-to-run pipeline: L3 World Forger creates canon packs, L2 Run Assembler creates run manifests, and the art pipeline generates a 9-sprite bundle.",
          zh: "构建 theme-to-run 管线：L3 World Forger 生成 canon pack，L2 Run Assembler 生成 run manifest，美术管线生成 9 张 sprite bundle。",
        },
      },
      {
        text: {
          en: "Keeps LLM calls out of Unity: generated artifacts are loaded into the engine, while combat, spawning, collision, upgrades, and progression stay deterministic C#.",
          zh: "把 LLM 调用放在 Unity 外部：生成 artifacts 被加载进引擎，而战斗、刷怪、碰撞、升级和成长保持确定性 C#。",
        },
      },
      {
        text: {
          en: "Maps generated run data into a Unity runtime loop: Run -> Stage -> Wave -> Node, with 4 weapon families, 11 modifiers, 4 enemy pressure roles, and themed wave banners.",
          zh: "将生成出的单局数据映射到 Unity 运行时循环：Run -> Stage -> Wave -> Node，包含 4 类武器、11 个 modifier、4 类敌人压力角色和主题化 wave banner。",
        },
      },
      {
        text: {
          en: "The ThreadState reader is still planned: player choices are recorded today, but using that state to bias Node offers and future enemy pools is a next step rather than shipped runtime behavior.",
          zh: "ThreadState 读取端仍在计划中：当前已记录玩家选择，但根据这些状态影响 Node 构筑选项和后续 enemy pool 刷怪偏向，还不是已完成的运行时行为。",
        },
        tone: "note",
      },
    ],
    sections: [
      {
        title: {
          en: "Problem",
          zh: "问题",
        },
        body: {
          en: "Threadfall's goal is to turn a generated theme into a playable survivor-like roguelike run that the engine can actually execute.",
          zh: "Threadfall 的目标是把生成主题转成引擎能真正执行的一局类幸存者 roguelike。",
        },
        bullets: [
          {
            en: "Generated content needs schemas, constraints, and validation before it can become engine data.",
            zh: "生成内容需要 schema、约束和校验，才能变成引擎数据。",
          },
          {
            en: "The action layer still needs predictable combat, movement, enemy behavior, pickups, and upgrade flow.",
            zh: "动作层仍然需要稳定可预测的战斗、移动、敌人行为、掉落和升级流程。",
          },
        ],
      },
      {
        title: {
          en: "Approach",
          zh: "思路",
        },
        body: {
          en: "Threadfall keeps generation out of the moment-to-moment action loop. L3 forge produces the canon pack, L2 gen produces the run manifest, the art pipeline produces sprites, and Unity consumes those artifacts as deterministic runtime input.",
          zh: "Threadfall 将生成层放在即时动作循环之外。L3 forge 产出 canon pack，L2 gen 产出 run manifest，美术管线产出 sprites，Unity 将这些 artifacts 当作确定性运行时输入来消费。",
        },
        bullets: [
          {
            en: "L3 World Forger: theme phrase -> palette, mood, content whitelist, art style, and per-asset art prompts.",
            zh: "L3 World Forger：主题短语 -> 调色板、氛围、内容白名单、art style 和每个 asset 的美术提示。",
          },
          {
            en: "L2 Run Assembler: canon -> budget-balanced run manifest with weapons, enemies, stages, waves, names, and flavor.",
            zh: "L2 Run Assembler：canon -> 经过预算平衡的 run manifest，包含武器、敌人、stages、waves、命名和 flavor。",
          },
          {
            en: "K0 Unity engine: loads artifacts into registries and ScriptableObjects, then owns spawning, combat, pickups, and progression.",
            zh: "K0 Unity 引擎：把 artifacts 加载进 registry 和 ScriptableObject，再负责刷怪、战斗、掉落和成长。",
          },
        ],
      },
      {
        title: {
          en: "Implementation",
          zh: "实现内容",
        },
        body: {
          en: "The current slice demonstrates a playable Unity scene with themed stages, enemy waves, player weapons, orbit projectiles, damage feedback, HUD state, generated wave banners, and generated sprite bundles.",
          zh: "当前切片已经能展示可玩的 Unity 场景，包括主题化 stage、敌潮、玩家武器、环绕投射物、伤害反馈、HUD 状态、生成式 wave banner 和生成式 sprite bundle。",
        },
        bullets: [
          {
            en: "Run manifests are loaded into Unity and converted into a concrete run with stage, wave, enemy, and reward data.",
            zh: "run manifest 被加载进 Unity，并转换成包含 stage、wave、敌人和奖励数据的具体单局。",
          },
          {
            en: "The same engine loop can play different generated canons, changing presentation and content framing without changing the core combat rules.",
            zh: "同一个引擎循环可以运行不同生成 canon，在不改变战斗核心规则的前提下更换呈现和内容包装。",
          },
        ],
      },
    ],
    media: [
      {
        title: {
          en: "Hollow Watch run",
          zh: "Hollow Watch 单局",
        },
        description: {
          en: "A dark generated run showing the player, orbit weapon behavior, enemy pressure, stage timer, and generated wave banner inside the Unity runtime.",
          zh: "一把暗色生成主题的实际运行画面，展示玩家、环绕武器、敌人压力、stage 计时和生成式 wave banner 如何进入 Unity 运行时。",
        },
        src: "/projects/threadfall/hollow-watch.png",
        alt: {
          en: "Threadfall gameplay screenshot showing the Hollow Watch stage with enemies, orbit projectiles, damage text, and wave banner.",
          zh: "Threadfall gameplay 截图，展示 Hollow Watch stage、敌人、环绕投射物、伤害数字和 wave banner。",
        },
        width: 1333,
        height: 694,
      },
      {
        title: {
          en: "Rust-Pollen Drift run",
          zh: "Rust-Pollen Drift 单局",
        },
        description: {
          en: "A separate generated run with a warmer palette and different stage presentation, while the deterministic combat loop remains owned by Unity.",
          zh: "另一把暖色生成主题的运行画面，世界基调、调色板和 stage 呈现发生变化，但确定性战斗循环仍由 Unity 负责。",
        },
        src: "/projects/threadfall/rust-pollen-drift.png",
        alt: {
          en: "Threadfall gameplay screenshot showing the Rust-Pollen Drift stage with player HUD, enemies, projectiles, and generated banner text.",
          zh: "Threadfall gameplay 截图，展示 Rust-Pollen Drift stage、玩家 HUD、敌人、投射物和生成式 banner 文本。",
        },
        width: 1488,
        height: 709,
      },
      {
        title: {
          en: "The Tumbling Hour run",
          zh: "The Tumbling Hour 单局",
        },
        description: {
          en: "A third generated run showing a different canon entering the same action runtime, with themed enemies, floor treatment, damage feedback, and wave banner text.",
          zh: "第三把生成主题的运行画面，展示不同 canon 如何进入同一个动作运行时，并呈现主题化敌人、地面处理、伤害反馈和 wave banner 文本。",
        },
        src: "/projects/threadfall/tumbling-hour.png",
        alt: {
          en: "Threadfall gameplay screenshot showing The Tumbling Hour wave with themed enemies, orbit projectiles, damage feedback, and generated banner text.",
          zh: "Threadfall gameplay 截图，展示 The Tumbling Hour wave、主题化敌人、环绕投射物、伤害反馈和生成式 banner 文本。",
        },
        width: 1450,
        height: 711,
      },
    ],
    outcomes: [
      {
        title: {
          en: "Offline generation pipeline",
          zh: "离线生成管线",
        },
        body: {
          en: "Threadfall treats the LLM as an authoring pipeline rather than a frame-by-frame runtime dependency. A fresh theme produces structured artifacts first; Unity only loads the results and runs the game.",
          zh: "Threadfall 把 LLM 当作创作管线，而不是逐帧运行时依赖。新主题先生成结构化 artifacts，Unity 只加载结果并运行游戏。",
        },
        bullets: [
          {
            en: "L3 forge: canon pack with palette, mood, whitelist, art style, and asset prompts.",
            zh: "L3 forge：生成包含调色板、氛围、白名单、art style 和 asset prompts 的 canon pack。",
          },
          {
            en: "L2 gen: run manifest with weapons, enemies, stages, waves, names, flavor, and budget balancing.",
            zh: "L2 gen：生成包含武器、敌人、stages、waves、命名、flavor 和预算平衡的 run manifest。",
          },
          {
            en: "Art pipeline: fal.ai Flux generates the player, enemies, projectiles, orbit weapon, enemy projectile, and tiled stage background.",
            zh: "美术管线：fal.ai Flux 生成玩家、敌人、投射物、环绕武器、敌弹和可平铺 stage 背景。",
          },
          {
            en: "Unity K0: deterministic C# runtime with no LLM SDK inside the engine.",
            zh: "Unity K0：确定性 C# 运行时，引擎内部不引入 LLM SDK。",
          },
        ],
        conclusion: {
          en: "A new theme currently costs about $1.6 with portfolio-grade art, or about $1.1 when using the cheaper Schnell art path for iteration.",
          zh: "当前生成一个新主题约 $1.6；如果用更便宜的 Schnell 美术路径做迭代，约 $1.1。",
        },
      },
      {
        title: {
          en: "Runtime boundary",
          zh: "运行时边界",
        },
        body: {
          en: "The architectural rule is deliberately strict: Unity should not import an LLM SDK. Runtime LLM flavor is allowed later, but only through a Python sidecar, file IPC, and timeout fallback.",
          zh: "这个项目的架构红线很明确：Unity 不引入 LLM SDK。后续可以加入 runtime LLM flavor，但必须通过 Python sidecar、文件 IPC 和 timeout fallback。",
        },
        bullets: [
          {
            en: "Unity remains responsible for timing, collision, damage, spawning, pickups, and progression.",
            zh: "Unity 仍然负责计时、碰撞、伤害、刷怪、掉落和成长。",
          },
          {
            en: "The sidecar can fail without breaking the run; pre-baked wave text remains the fallback.",
            zh: "sidecar 即使失败也不会拖垮整局；预烘焙 wave 文本会作为 fallback。",
          },
          {
            en: "The planned per-wave moment director can combine player build state with Haiku-generated flavor at roughly cent-level cost per run.",
            zh: "计划中的 per-wave moment director 可以结合玩家 build state 和 Haiku 生成 flavor，单局成本控制在美分级别。",
          },
          {
            en: "This keeps the game playable first and uses generation to shape content, not to replace the engine.",
            zh: "这让游戏先保持可玩，再用生成能力塑造内容，而不是用模型替代引擎。",
          },
        ],
        conclusion: {
          en: "The result is a clearer boundary between generated content and deterministic gameplay: the model authors the run, but Unity owns the run.",
          zh: "结果是生成内容和确定性玩法之间的边界更清楚：模型负责创作这局游戏，Unity 负责真正运行这局游戏。",
        },
      },
    ],
  },
  {
    title: {
      en: "Typed AI Runtime (Experimental)",
      zh: "Typed AI Runtime（实验性）",
    },
    slug: "typed-ai-runtime",
    description: {
      en: "A semantic type system prototype where user input and model output are treated as candidates, and a runtime-updated type system decides what can actually happen.",
      zh: "一个语义类型系统原型：用户输入和模型输出都先被视为 candidate，由运行时会动态更新的类型系统决定什么能真正发生。",
    },
    tags: ["Python", "Type System", "Runtime", "Validation", "Semantic Constraints"],
    status: "prototype",
    featured: false,
    links: [],
    highlights: [
      {
        text: {
          en: "Separates interpretation from execution: external input and LLM output are not commands, but candidates that must pass the active type environment.",
          zh: "将解释和执行分离：外部输入和 LLM 输出都不是命令，而是必须通过当前类型环境的 candidates。",
        },
      },
      {
        text: {
          en: "Builds a layered runtime shape where higher-level semantic worlds constrain lower-level scenes, options, writes, and state transitions.",
          zh: "构建分层运行时结构，让高层语义世界约束低层场景、选项、字段写入和状态转移。",
        },
      },
      {
        text: {
          en: "Uses structured rejection reasons such as guard failure, forbidden family, and out-of-bounds writes to make illegal behavior explainable.",
          zh: "用 guard failure、forbidden family、out-of-bounds writes 等结构化原因解释非法行为为什么被拒绝。",
        },
      },
      {
        text: {
          en: "After the type environment is preloaded, most semantic legality checks can run as deterministic CPU validation rather than another AI call.",
          zh: "类型环境预载完毕后，大部分语义合法性检测几乎可以由 CPU 的确定性校验完成，而不是再次调用 AI。",
        },
      },
      {
        text: {
          en: "The current work is narrowing the scope: preload and authoring costs are too high for low-value, low-repetition scenarios, and without a stable memory / field-normalization layer, local type-system recompilation can cause semantic fields to drift.",
          zh: "当前正在收缩范围：预载和 authoring 成本偏高，低价值、低重复场景未必优于普通 schema / validator；同时缺少稳定记忆与字段归一层时，局部重编译类型系统容易出现字段语义漂移。",
        },
        tone: "note",
      },
    ],
    sections: [
      {
        title: {
          en: "Problem",
          zh: "问题",
        },
        body: {
          en: "AI-driven software needs a safer boundary between what a model suggests and what the application is allowed to commit.",
          zh: "AI 驱动的软件需要在“模型建议了什么”和“应用允许提交什么”之间建立更可靠的边界。",
        },
        bullets: [
          {
            en: "Natural-language input is ambiguous and should not directly mutate runtime state.",
            zh: "自然语言输入具有歧义，不应该直接修改运行时状态。",
          },
          {
            en: "Model output can propose actions, but those actions still need domain rules, state guards, and write constraints.",
            zh: "模型输出可以提出动作，但这些动作仍然需要经过领域规则、状态 guard 和写入约束。",
          },
        ],
      },
    ],
    media: [
      {
        title: {
          en: "Elden Ring-style type gates",
          zh: "法环风格类型闸门",
        },
        description: {
          en: "An Elden Ring-style example where exploration, blessing, shard pickup, and ending transitions are filtered by current guards and precise state bounds.",
          zh: "法环风格示例中，探索、赐福、碎片拾取和结局转移会根据当前 guard 与精确状态边界被筛选。",
        },
        src: "/projects/typed-ai-runtime/elden-ring-type-gates.png",
        alt: {
          en: "Typed AI Runtime demo showing an Elden Ring-style layered state machine with options rejected by guards or out-of-bounds writes.",
          zh: "Typed AI Runtime 演示，展示法环风格的分层状态机以及因 guard 或越界写入被拒绝的选项。",
        },
        width: 901,
        height: 688,
      },
    ],
    outcomes: [
      {
        title: {
          en: "Runtime safety boundary",
          zh: "运行时安全边界",
        },
        body: {
          en: "The core idea is not to make the model more obedient, but to make the runtime less permissive. A model can propose behavior; the installed type system decides whether that behavior is legal.",
          zh: "核心思路不是让模型更听话，而是让运行时不那么宽松。模型可以提出行为，但已安装的类型系统决定这个行为是否合法。",
        },
        bullets: [
          {
            en: "Candidates are checked against semantic scene rules, action families, write permissions, and precise field bounds.",
            zh: "Candidates 会经过语义场景规则、动作族、写入权限和精确字段边界检查。",
          },
          {
            en: "Rejected behavior returns structured reasons instead of silently failing or being patched after execution.",
            zh: "被拒绝的行为会返回结构化原因，而不是静默失败或执行后再补救。",
          },
          {
            en: "The same mechanism can describe game-state legality, tool permissions, workflow gates, or other domain-specific AI action spaces.",
            zh: "同一机制可以描述游戏状态合法性、工具权限、工作流闸门，或其他领域里的 AI action space。",
          },
          {
            en: "LLM-backed bootstrap can install environments, but validation and commit remain deterministic.",
            zh: "LLM-backed bootstrap 可以安装环境，但校验与提交仍保持确定性。",
          },
        ],
        conclusion: {
          en: "Typed AI Runtime turns AI output from an authority into a proposal, making application-specific constraints explicit and enforceable.",
          zh: "Typed AI Runtime 把 AI 输出从“权威指令”降级为“待审提案”，让应用内的具体约束变得明确且可执行。",
        },
      },
    ],
  },
];
