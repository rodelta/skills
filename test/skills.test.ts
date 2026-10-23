import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, test } from "vite-plus/test";
import { parse } from "yaml";

const root = join(import.meta.dirname, "..");
const skillsDir = join(root, "skills");
const readme = readFileSync(join(root, "README.md"), "utf8");
const names = readdirSync(skillsDir).filter((name) =>
  existsSync(join(skillsDir, name, "SKILL.md")),
);

const frontmatterOf = (markdown: string) => {
  const match = /^---\n([\s\S]*?)\n---\n/.exec(markdown);
  if (!match) throw new Error("missing frontmatter");
  return parse(match[1]) as Record<string, unknown>;
};

describe.each(names)("%s", (name) => {
  const dir = join(skillsDir, name);
  const frontmatter = frontmatterOf(readFileSync(join(dir, "SKILL.md"), "utf8"));
  const userInvoked = frontmatter["disable-model-invocation"] === true;

  test("name matches folder", () => {
    expect(frontmatter.name).toBe(name);
  });

  test("has a description", () => {
    expect(frontmatter.description).toBeTypeOf("string");
  });

  test("openai.yaml agrees on invocation", () => {
    const openai = parse(readFileSync(join(dir, "agents/openai.yaml"), "utf8"));
    expect(openai.interface.display_name).toBeTypeOf("string");
    expect(openai.policy?.allow_implicit_invocation === false).toBe(userInvoked);
  });

  test("README links it", () => {
    expect(readme).toContain(`[${name}](./skills/${name}/SKILL.md)`);
  });
});
