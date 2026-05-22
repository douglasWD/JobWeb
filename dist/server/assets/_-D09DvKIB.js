import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/$.tsx?tsr-split=component
function RouteComponent() {
	return /* @__PURE__ */ jsxs("div", {
		className: "text-center py-24",
		children: [
			/* @__PURE__ */ jsx("h1", {
				className: "text-6xl font-bold text-gray-200",
				children: "404"
			}),
			/* @__PURE__ */ jsx("p", {
				className: "text-gray-500 mt-4",
				children: "This page doesn't exist."
			}),
			/* @__PURE__ */ jsx(Link, {
				to: "/jobs",
				className: "mt-6 inline-block text-blue-600 hover:underline",
				children: "Browse jobs instead"
			})
		]
	});
}
//#endregion
export { RouteComponent as component };
