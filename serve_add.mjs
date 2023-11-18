import "./src/index.mjs";

try {
    new EventSource("/esbuild").addEventListener("change", () =>
        location.reload(),
    );
} catch {}
