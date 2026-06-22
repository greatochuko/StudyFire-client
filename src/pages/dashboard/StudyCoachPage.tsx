import React, { useState } from "react";

interface Message {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: string;
}

interface MaterialSource {
  id: string;
  name: string;
  type: string;
}

interface StudyTopic {
  name: string;
  status: "Mastered" | "Reviewing" | "Unexplored";
  materialId: string;
}

export default function StudyCoachPage(): React.JSX.Element {
  // ── MOCK MATERIALS & SCOPED KNOWLEDGE MAPS ──
  const mockMaterials: MaterialSource[] = [
    { id: "mat-1", name: "CompTIA Security+ Notes.pdf", type: "pdf" },
    { id: "mat-2", name: "Network Engineering Essentials.pdf", type: "pdf" },
    { id: "mat-3", name: "Cloud Architecture Guide.docx", type: "docx" },
  ];

  const mockTopics: StudyTopic[] = [
    // Topics for CompTIA Security+ Notes
    {
      name: "Symmetric vs Asymmetric Ciphers",
      status: "Mastered",
      materialId: "mat-1",
    },
    {
      name: "Hashing & Salting Implementations",
      status: "Reviewing",
      materialId: "mat-1",
    },
    {
      name: "TLS Handshake Protocol Layers",
      status: "Unexplored",
      materialId: "mat-1",
    },
    {
      name: "Rainbow Table Attack Mechanics",
      status: "Reviewing",
      materialId: "mat-1",
    },
    // Topics for Network Engineering
    {
      name: "OSI Model Encapsulation Pipelines",
      status: "Mastered",
      materialId: "mat-2",
    },
    {
      name: "Subnet Mask Calculation Metrics",
      status: "Reviewing",
      materialId: "mat-2",
    },
    {
      name: "BGP Routing Protocol Boundaries",
      status: "Unexplored",
      materialId: "mat-2",
    },
    // Topics for Cloud Architecture
    {
      name: "AWS IAM Policy Evaluation Logic",
      status: "Mastered",
      materialId: "mat-3",
    },
    {
      name: "Multi-Region Multi-Tenant Failover",
      status: "Unexplored",
      materialId: "mat-3",
    },
  ];

  // Quick action starter prompt configurations
  const quickPrompts = [
    "🔥 Give me a 5-question Socratic drill",
    "🧠 Explain this topic like I am 5 years old",
    "📝 Summarize the core terms into a cheat-sheet",
  ];

  // ── COMPONENT STATE LAYERS ──
  const [selectedMaterialId, setSelectedMaterialId] = useState<string>("mat-1");
  const [inputMessage, setInputMessage] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "m-1",
      sender: "ai",
      text: "Hello! I'm your AI Study Coach. Select a study source above, and we can isolate targeted knowledge vectors or test recall metrics on specific concepts.",
      timestamp: "10:00 AM",
    },
  ]);

  // Compute active document state profiles and filter tracking list topics safely
  const activeMaterial =
    mockMaterials.find((m) => m.id === selectedMaterialId) || mockMaterials[0];
  const activeTopics = mockTopics.filter(
    (t) => t.materialId === selectedMaterialId,
  );

  // Send interaction processor core handler
  const executeSendMessage = (messageText: string) => {
    if (!messageText.trim()) return;

    const userMsg: Message = {
      id: `msg-${Date.now()}`,
      sender: "user",
      text: messageText,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMsg]);

    setTimeout(() => {
      const aiMsg: Message = {
        id: `msg-${Date.now() + 1}`,
        sender: "ai",
        text: `Analyzing active concepts from [${activeMaterial.name}] to resolve your query: "${messageText}". Let's review the architectural variables in play.`,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, aiMsg]);
    }, 800);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeSendMessage(inputMessage);
    setInputMessage("");
  };

  const handleQuickPromptClick = (promptText: string) => {
    executeSendMessage(promptText);
  };

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-8">
      {/* ── HEADER CONTAINER ── */}
      <div>
        <h1 className="text-text font-serif text-3xl font-bold tracking-tight">
          AI Study Coach
        </h1>
        <p className="text-muted mt-1 text-xs">
          Engage in structured dialogue with your personal tutor to break down
          complex architectural themes.
        </p>
      </div>

      {/* ── TWO-COLUMN INTERACTIVE PANEL ── */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* LEFT & CENTER PANEL: CONVERSATION FRAMEWORK (2 Columns) */}
        <div className="bg-surface border-border/80 flex h-150 flex-col rounded-2xl border shadow-xs lg:col-span-2">
          {/* Chat Header Banner + Material Selection Utilities */}
          <div className="border-border/40 flex flex-col justify-between gap-3 border-b p-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <div className="bg-accent-lo border-accent/10 relative flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border">
                <span className="text-accent text-sm">✦</span>
                <span className="border-surface absolute right-0 bottom-0 h-2 w-2 rounded-full border bg-green-500" />
              </div>
              <div>
                <h3 className="text-text font-serif text-xs font-bold">
                  Active Mentor Loop
                </h3>
                <p className="text-muted text-[0.62rem] font-medium tracking-wider uppercase">
                  Targeted Material Scope Selector
                </p>
              </div>
            </div>

            {/* Material Source Dropdown Component */}
            <div className="relative">
              <select
                value={selectedMaterialId}
                onChange={(e) => setSelectedMaterialId(e.target.value)}
                className="bg-bg border-border text-text focus:border-accent w-full cursor-pointer appearance-none truncate rounded-xl border py-2 pr-8 pl-3 text-xs font-semibold shadow-xs transition outline-none sm:w-60"
              >
                {mockMaterials.map((mat) => (
                  <option key={mat.id} value={mat.id}>
                    📄 {mat.name}
                  </option>
                ))}
              </select>
              <span className="text-muted pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-[0.5rem] select-none">
                ▼
              </span>
            </div>
          </div>

          {/* Messages Stream Segment */}
          <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex max-w-[85%] flex-col ${
                  msg.sender === "user"
                    ? "items-end self-end"
                    : "items-start self-start"
                }`}
              >
                <div
                  className={`rounded-2xl px-4 py-3 text-xs leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-text text-bg rounded-tr-none font-medium"
                      : "bg-bg/60 border-border/60 text-text rounded-tl-none border"
                  }`}
                >
                  {msg.text}
                </div>
                <span className="text-muted mt-1 px-1 font-mono text-[0.6rem]">
                  {msg.timestamp}
                </span>
              </div>
            ))}
          </div>

          {/* Chat Input Action Tray */}
          <form
            onSubmit={handleFormSubmit}
            className="border-border/40 bg-bg/20 flex gap-2 border-t p-4"
          >
            <input
              type="text"
              placeholder={`Query structural items isolated inside ${activeMaterial.name}...`}
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              className="bg-bg border-border text-text placeholder-muted/50 focus:border-accent w-full rounded-xl border px-4 py-2.5 text-xs transition outline-none"
            />
            <button
              type="submit"
              className="bg-text text-bg shrink-0 cursor-pointer rounded-xl px-5 text-xs font-bold shadow-xs transition hover:opacity-95"
            >
              Send
            </button>
          </form>
        </div>

        {/* RIGHT PANEL: CONTEXTUAL REVIEW INSIGHTS (1 Column) */}
        <div className="flex flex-col gap-4 lg:col-span-1">
          {/* Dynamic Knowledge Map Tracking (Sourced directly from selected Dropdown document ID) */}
          <div className="bg-surface border-border/80 flex flex-1 flex-col overflow-hidden rounded-2xl border p-5 shadow-xs">
            <span className="text-muted block font-mono text-[0.62rem] font-bold tracking-wider uppercase">
              Material Context Mapping
            </span>
            <h3 className="text-text mt-1 truncate font-serif text-sm font-bold">
              Extracted Index Matrix
            </h3>

            <div className="mt-4 flex flex-col gap-2.5 overflow-y-auto pr-1">
              {activeTopics.map((topic, idx) => (
                <div
                  key={idx}
                  className="bg-bg/40 border-border/40 flex items-center justify-between gap-3 rounded-xl border p-3"
                >
                  <span className="text-text truncate text-xs font-medium">
                    {topic.name}
                  </span>
                  <span
                    className={`shrink-0 rounded border px-2 py-0.5 text-[0.58rem] font-bold tracking-wide uppercase ${
                      topic.status === "Mastered"
                        ? "border-green-100 bg-green-50 text-green-600"
                        : topic.status === "Reviewing"
                          ? "border-amber-100 bg-amber-50 text-amber-600"
                          : "bg-bg text-muted border-border"
                    }`}
                  >
                    {topic.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ONE-CLICK MESSAGE PROMPTS UTILITY */}
          <div className="bg-surface border-border/80 flex shrink-0 flex-col gap-4 rounded-2xl border p-5 shadow-xs">
            <div>
              <span className="text-accent block font-mono text-[0.62rem] font-bold tracking-wider uppercase">
                Quick Actions
              </span>
              <h4 className="text-text mt-1 font-serif text-sm font-bold">
                One-Click Prompts
              </h4>
              <p className="text-muted mt-1.5 text-xs leading-relaxed">
                Click any workflow action block below to automatically issue
                pre-engineered instructions to the mentor loop.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleQuickPromptClick(prompt)}
                  className="bg-bg/50 hover:bg-bg border-border/60 hover:border-border text-text w-full cursor-pointer rounded-xl border p-3 text-left text-xs font-medium transition"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
