import type { UnpluginFactory } from "unplugin";
import type { Options } from "./types";
import { createUnplugin } from "unplugin";
import type { OutputAsset } from "rollup";

export const unpluginFactory: UnpluginFactory<Options | undefined> = (
  options
) => ({
  name: "unplugin-compress-json",
  enforce: "post",
  generateBundle(_: unknown, bundle: Record<string, OutputAsset>) {
    for (const id in bundle) {
      if (id.endsWith(".json") && typeof bundle[id].source === "string") {
        bundle[id].source = bundle[id].source.replace(/\s+/g, "");
      }
    }
  },
  webpack(compiler) {
    compiler.hooks.emit.tap('unplugin-compress-json', (compilation) => {
      for (const name in compilation.assets) {
        if (name.endsWith('.json')) {
          const asset = compilation.assets[name];
          const source = asset.source().toString();
          const compressed = source.replace(/\s+/g, "");
          compilation.assets[name] = {
            source: () => compressed,
            size: () => compressed.length
          } as any;
        }
      }
    });
  }
});

export const unplugin = /* #__PURE__ */ createUnplugin(unpluginFactory);

export default unplugin;
