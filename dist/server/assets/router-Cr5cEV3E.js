import { t as createServerFn } from "../server.js";
import { t as createSsrRpc } from "./createSsrRpc-CsrAbYNF.js";
import { t as Route$5 } from "./dashboard-C5Oy9OoQ.js";
import { t as Route$6 } from "./jobs-C7_VPlWJ.js";
import { t as Route$7 } from "./_jobid-DVC0fO_5.js";
import { t as authConfig } from "./auth-z6bPHT1_.js";
import { useState } from "react";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, redirect } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Menu, X } from "lucide-react";
import { StartAuthJS } from "start-authjs";
//#region src/routes/__root.tsx
var fetchSession$1 = createServerFn({ method: "GET" }).handler(createSsrRpc("8ca68a78cb68399107cccece277a4ee8fb04a249ee2a1193bf3ec65b0df7039d"));
var Route$4 = createRootRouteWithContext()({
	beforeLoad: async () => {
		return { session: await fetchSession$1() };
	},
	head: () => ({ meta: [
		{ charSet: "utf-8" },
		{
			name: "viewport",
			content: "width=device-width, initial-scale=1"
		},
		{ title: "JobWeb" }
	] }),
	component: RootComponent
});
function RootComponent() {
	const { session } = Route$4.useRouteContext();
	const [menuOpen, setMenuOpen] = useState(false);
	return /* @__PURE__ */ jsxs(RootDocument, { children: [/* @__PURE__ */ jsx("nav", {
		className: "bg-white border-b shadow-sm",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-7xl mx-auto px-4 md:px-6",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between h-16",
				children: [
					/* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "font-bold text-2xl text-blue-600",
						children: "JobWeb"
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "hidden md:flex items-center gap-4",
						children: [/* @__PURE__ */ jsx(Link, {
							to: "/jobs",
							className: "text-gray-600 hover:text-black text-sm",
							children: "Browse Jobs"
						}), session?.user ? /* @__PURE__ */ jsxs(Fragment, { children: [
							/* @__PURE__ */ jsx(Link, {
								to: "/dashboard",
								className: "text-gray-600 hover:text-black text-sm",
								children: "My Listings"
							}),
							/* @__PURE__ */ jsx(Link, {
								to: "/jobs/new",
								className: "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium",
								children: "Post a Job"
							}),
							/* @__PURE__ */ jsx("img", {
								src: session.user.image ?? "",
								alt: session.user.name ?? "User",
								className: "w-8 h-8 rounded-full"
							}),
							/* @__PURE__ */ jsx("a", {
								href: "/api/auth/signout",
								className: "text-sm text-gray-500 hover:text-black",
								children: "Sign out"
							})
						] }) : /* @__PURE__ */ jsx("a", {
							href: "/api/auth/signin",
							className: "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium",
							children: "Sign in with GitHub"
						})]
					}),
					/* @__PURE__ */ jsx("button", {
						onClick: () => setMenuOpen(!menuOpen),
						className: "md:hidden",
						children: menuOpen ? /* @__PURE__ */ jsx(X, { className: "w-6 h-6" }) : /* @__PURE__ */ jsx(Menu, { className: "w-6 h-6" })
					})
				]
			}), menuOpen && /* @__PURE__ */ jsxs("div", {
				className: "md:hidden py-4 border-t flex flex-col gap-4",
				children: [/* @__PURE__ */ jsx(Link, {
					to: "/jobs",
					className: "text-gray-600 hover:text-black text-sm",
					onClick: () => setMenuOpen(false),
					children: "Browse Jobs"
				}), session?.user ? /* @__PURE__ */ jsxs(Fragment, { children: [
					/* @__PURE__ */ jsx(Link, {
						to: "/dashboard",
						className: "text-gray-600 hover:text-black text-sm",
						onClick: () => setMenuOpen(false),
						children: "My Listings"
					}),
					/* @__PURE__ */ jsx(Link, {
						to: "/jobs/new",
						className: "bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium text-center",
						onClick: () => setMenuOpen(false),
						children: "Post a Job"
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ jsx("img", {
							src: session.user.image ?? "",
							alt: session.user.name ?? "User",
							className: "w-8 h-8 rounded-full"
						}), /* @__PURE__ */ jsx("a", {
							href: "/api/auth/signout",
							className: "text-sm text-gray-500",
							children: "Sign out"
						})]
					})
				] }) : /* @__PURE__ */ jsx("a", {
					href: "/api/auth/signin",
					className: "bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium text-center",
					children: "Sign in with GitHub"
				})]
			})]
		})
	}), /* @__PURE__ */ jsx("main", {
		className: "px-4 md:px-6 py-6",
		children: /* @__PURE__ */ jsx(Outlet, {})
	})] });
}
function RootDocument({ children }) {
	return /* @__PURE__ */ jsxs("html", { children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", {
		className: "bg-gray-100 min-h-screen",
		children: [children, /* @__PURE__ */ jsx(Scripts, {})]
	})] });
}
//#endregion
//#region src/routes/$.tsx
var $$splitComponentImporter$2 = () => import("./_-D09DvKIB.js");
var Route$3 = createFileRoute("/$")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter$1 = () => import("./routes-BRinRrdu.js");
var Route$2 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
//#endregion
//#region src/routes/jobs/new.tsx
var $$splitComponentImporter = () => import("./new--MULCfvU.js");
var fetchSession = createServerFn({ method: "GET" }).handler(createSsrRpc("260bd1b09819111173ce3bd631b7989afe91943ea2f7ebc6802470b0c275cf5b"));
var Route$1 = createFileRoute("/jobs/new")({
	beforeLoad: async () => {
		const session = await fetchSession();
		if (!session?.user) throw redirect({ to: "/" });
		return { session };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routes/api/auth/$.ts
var auth = StartAuthJS(authConfig);
var Route = createFileRoute("/api/auth/$")({ server: { handlers: {
	GET: ({ request }) => auth.GET({ request }),
	POST: ({ request }) => auth.POST({ request })
} } });
//#endregion
//#region src/routeTree.gen.ts
var DashboardRoute = Route$5.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => Route$4
});
var SplatRoute = Route$3.update({
	id: "/$",
	path: "/$",
	getParentRoute: () => Route$4
});
var IndexRoute = Route$2.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$4
});
var JobsIndexRoute = Route$6.update({
	id: "/jobs/",
	path: "/jobs/",
	getParentRoute: () => Route$4
});
var JobsNewRoute = Route$1.update({
	id: "/jobs/new",
	path: "/jobs/new",
	getParentRoute: () => Route$4
});
var rootRouteChildren = {
	IndexRoute,
	SplatRoute,
	DashboardRoute,
	JobsJobidRoute: Route$7.update({
		id: "/jobs/$jobid",
		path: "/jobs/$jobid",
		getParentRoute: () => Route$4
	}),
	JobsNewRoute,
	JobsIndexRoute,
	ApiAuthSplatRoute: Route.update({
		id: "/api/auth/$",
		path: "/api/auth/$",
		getParentRoute: () => Route$4
	})
};
var routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
function getRouter() {
	return createRouter({
		routeTree,
		scrollRestoration: true,
		context: { session: null }
	});
}
//#endregion
export { getRouter };
