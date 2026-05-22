// src/routes/__root.tsx
/// <reference types="vite/client" />

import type { ReactNode } from "react";
import { useState } from "react";
import {
  Outlet,
  HeadContent,
  Scripts,
  createRootRouteWithContext,
  Link,
} from "@tanstack/react-router";

import { Menu, X } from "lucide-react";

import "../styles/app.css";
import { createServerFn } from "@tanstack/react-start";
import { getCurrentSession } from "../lib/get-session";

const fetchSession = createServerFn({ method: "GET" }).handler(async () => {
  return getCurrentSession();
});

export const Route = createRootRouteWithContext()({
  beforeLoad: async () => {
    const session = await fetchSession();
    return { session };
  },

  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "JobWeb",
      },
    ],
  }),

  component: RootComponent,
});

function RootComponent() {
  const { session } = Route.useRouteContext();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <RootDocument>
      <nav className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <Link
              to="/"
              className="font-bold text-2xl text-blue-600"
            >
              JobWeb
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                to="/jobs"
                className="text-gray-600 hover:text-black text-sm"
              >
                Browse Jobs
              </Link>

              {session?.user ? (
                <>
                  <Link
                    to="/dashboard"
                    className="text-gray-600 hover:text-black text-sm"
                  >
                    My Listings
                  </Link>

                  <Link
                    to="/jobs/new"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
                  >
                    Post a Job
                  </Link>

                  <img
                    src={session.user.image ?? ""}
                    alt={session.user.name ?? "User"}
                    className="w-8 h-8 rounded-full"
                  />

                  <a
                    href="/api/auth/signout"
                    className="text-sm text-gray-500 hover:text-black"
                  >
                    Sign out
                  </a>
                </>
              ) : (
                <a
                  href="/api/auth/signin"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
                >
                  Sign in with GitHub
                </a>
              )}
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden"
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden py-4 border-t flex flex-col gap-4">
              <Link
                to="/jobs"
                className="text-gray-600 hover:text-black text-sm"
                onClick={() => setMenuOpen(false)}
              >
                Browse Jobs
              </Link>

              {session?.user ? (
                <>
                  <Link
                    to="/dashboard"
                    className="text-gray-600 hover:text-black text-sm"
                    onClick={() => setMenuOpen(false)}
                  >
                    My Listings
                  </Link>

                  <Link
                    to="/jobs/new"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium text-center"
                    onClick={() => setMenuOpen(false)}
                  >
                    Post a Job
                  </Link>

                  <div className="flex items-center gap-3">
                    <img
                      src={session.user.image ?? ""}
                      alt={session.user.name ?? "User"}
                      className="w-8 h-8 rounded-full"
                    />

                    <a
                      href="/api/auth/signout"
                      className="text-sm text-gray-500"
                    >
                      Sign out
                    </a>
                  </div>
                </>
              ) : (
                <a
                  href="/api/auth/signin"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium text-center"
                >
                  Sign in with GitHub
                </a>
              )}
            </div>
          )}
        </div>
      </nav>

      <main className="px-4 md:px-6 py-6">
        <Outlet />
      </main>
    </RootDocument>
  );
}

function RootDocument({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <head>
        <HeadContent />
      </head>

      <body className="bg-gray-100 min-h-screen">
        {children}
        <Scripts />
      </body>
    </html>
  );
}