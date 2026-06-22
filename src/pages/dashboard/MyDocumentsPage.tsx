import { Trash2Icon } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router";

interface DocumentItem {
  id: string;
  name: string;
  fileSize: string;
  flashcardsCount: number;
  quizzesCount: number;
  uploadedAt: string;
}

export default function MyDocumentsPage(): React.JSX.Element {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const mockDocuments: DocumentItem[] = [
    {
      id: "doc-1",
      name: "Comptia Notes.pdf",
      fileSize: "4.2 MB",
      flashcardsCount: 24,
      quizzesCount: 2,
      uploadedAt: "25 days ago",
    },
    {
      id: "doc-2",
      name: "Cybersecurity factsheets.pdf",
      fileSize: "12.8 MB",
      flashcardsCount: 16,
      quizzesCount: 1,
      uploadedAt: "61 days ago",
    },
    {
      id: "doc-3",
      name: "Structural Topology.pdf",
      fileSize: "8.5 MB",
      flashcardsCount: 8,
      quizzesCount: 0,
      uploadedAt: "61 days ago",
    },
  ];

  const filteredDocuments = mockDocuments.filter((doc) =>
    doc.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <main className="flex flex-1 flex-col gap-8">
      {/* ── HEADER CONTAINER ── */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-text font-serif text-3xl font-bold tracking-tight">
            My Documents
          </h1>
          <p className="text-muted mt-1 text-xs">
            Manage your uploaded files and jump straight into your AI study
            materials.
          </p>
        </div>

        <Link
          to="/dashboard"
          className="bg-text text-bg inline-block rounded-xl px-4 py-2.5 text-center text-xs font-bold tracking-wide shadow-xs transition duration-150 hover:opacity-95"
        >
          + Upload Document
        </Link>
      </div>

      {/* ── FILTER TOOLBAR ── */}
      <div className="bg-surface border-border/80 flex flex-col items-center justify-between gap-3 rounded-2xl border p-4 shadow-xs sm:flex-row">
        <div className="relative w-full sm:max-w-md">
          <span className="text-muted absolute top-1/2 left-3.5 -translate-y-1/2 text-xs select-none">
            🔍
          </span>
          <input
            type="text"
            placeholder="Search documents by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-bg border-border text-text placeholder-muted/50 focus:border-accent w-full rounded-xl border py-2 pr-4 pl-9 text-xs transition outline-none"
          />
        </div>
        <div className="text-muted shrink-0 text-[0.65rem] font-medium">
          Showing <strong>{filteredDocuments.length}</strong> documents
        </div>
      </div>

      {/* ── GRID HOUSING LISTING ── */}
      {filteredDocuments.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredDocuments.map((doc) => (
            <div
              key={doc.id}
              className="bg-surface border-border/80 hover:border-border group flex flex-col justify-between rounded-2xl border p-5 shadow-xs transition-all"
            >
              <div className="mb-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="bg-bg border-border rounded-xl border p-2.5 text-lg select-none">
                    📄
                  </div>
                  <button className="text-muted rounded-lg p-2 text-xs transition hover:text-red-500">
                    <Trash2Icon size={16} />
                  </button>
                </div>

                <h3 className="text-text group-hover:text-accent mt-4 truncate text-sm font-bold transition-colors">
                  {doc.name}
                </h3>

                <div className="text-muted mt-1.5 flex items-center gap-2 text-[0.65rem] font-medium">
                  <span>{doc.fileSize}</span>
                  <span>•</span>
                  <span>Uploaded {doc.uploadedAt}</span>
                </div>
              </div>

              <div className="border-border/40 border-t pt-4">
                <div className="mb-4 grid grid-cols-2 gap-2">
                  <div className="bg-bg/60 border-border/50 rounded-xl border p-2.5 text-center">
                    <span className="text-muted block text-[0.62rem] font-bold tracking-wider uppercase">
                      Flashcards
                    </span>
                    <span className="text-text mt-0.5 block font-serif text-base font-bold">
                      {doc.flashcardsCount}
                    </span>
                  </div>
                  <div className="bg-bg/60 border-border/50 rounded-xl border p-2.5 text-center">
                    <span className="text-muted block text-[0.62rem] font-bold tracking-wider uppercase">
                      AI Quizzes
                    </span>
                    <span className="text-text mt-0.5 block font-serif text-base font-bold">
                      {doc.quizzesCount}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <Link
                    to="/dashboard/flashcards"
                    className="bg-surface border-border text-text hover:border-accent block rounded-xl border py-2 text-center text-[0.7rem] font-bold shadow-xs transition"
                  >
                    Study Cards
                  </Link>
                  <Link
                    to="/dashboard/quizzes"
                    className="bg-accent shadow-accent/15 block rounded-xl py-2 text-center text-[0.7rem] font-bold text-white shadow-xs transition hover:opacity-95"
                  >
                    Take Quiz
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-surface border-border rounded-2xl border border-dashed p-16 text-center shadow-xs">
          <span className="text-muted/40 mb-3 block text-3xl">📁</span>
          <h3 className="text-text text-sm font-bold">No documents found</h3>
          <p className="text-muted mx-auto mt-1 max-w-xs text-xs">
            {searchQuery
              ? "No results match your search term."
              : "Upload a PDF or paste text snippets directly on the dashboard to generate your workspace components."}
          </p>
        </div>
      )}
    </main>
  );
}
