/** STRUCTURE STUFF **/
declare type Link = [string, string];
declare type Required = [SkillConfig, number] | SkillConfig;
interface SkillConfigSummary {
    description: string;
    requires: Required[];
    links?: Link[];
}
interface SkillConfig extends SkillConfigSummary {
    title: string;
    levels: SkillConfigSummary[];
    links: Link[];
}
interface SkillBase {
    uid: string;
    title: string;
    description: string;
    links: Link[];
    level: number;
}
interface ProcessingSkill extends SkillBase {
    requires: string[];
    levels: string[];
}
interface Skill extends SkillBase {
    id: number;
    requires: number[];
    levels: number[];
}
declare const requiredToUid: (r: Required) => string;
declare const toSlug: (str: string) => string;
declare const unprocessedTree: SkillConfig[];
declare const add: (a: SkillConfig) => SkillConfig;
declare const html: SkillConfig;
declare const css: SkillConfig;
declare const csstools: SkillConfig;
declare const webdesign: SkillConfig;
declare const jquery: SkillConfig;
declare const seo: SkillConfig;
declare const analytics: SkillConfig;
declare const js: SkillConfig;
declare const jslib: SkillConfig;
declare const front_end: SkillConfig;
declare const server_side_programming: SkillConfig;
declare const server_side_frameworks: SkillConfig;
declare const db: SkillConfig;
declare const dbmanagement: SkillConfig;
declare const server_side_development_mastery: SkillConfig;
declare const auth: SkillConfig;
declare const ajax: SkillConfig;
declare const user_discovery: SkillConfig;
declare const graphic_design: SkillConfig;
declare const graphic_design_tools: SkillConfig;
declare const prototypes: SkillConfig;
declare const user_experience_design_mastery: SkillConfig;
declare const user_testing: SkillConfig;
declare const server_admin: SkillConfig;
declare const deployment: SkillConfig;
declare const web_design_mastery: SkillConfig;
declare const makeUidToId: (byID: {
    [k: string]: ProcessingSkill & {
        id: number;
    };
}) => (uid: string) => number;
declare const buildTree: (skills: SkillConfig[], byID?: {
    [k: string]: ProcessingSkill & {
        id: number;
    };
}, UidToId?: (uid: string) => number) => Skill[];
declare const cx: (classes: HTMLClassAttr) => any;
declare const cs: (styles: {
    [key: string]: any;
}) => string;
declare const makeProps: (el: HTMLElement, props: object) => HTMLElement;
/** RENDER STUFF **/
declare type HTMLChild = string | number | Node;
declare type HTMLClassAttr = string | string[] | {
    [key: string]: any;
};
interface HTMLProps {
    class?: HTMLClassAttr;
    className?: HTMLClassAttr;
    style?: {
        [k: string]: any;
    };
    [more: string]: any;
}
declare const isNode: (thing: any) => thing is Node;
declare const isRawValue: (thing: any) => thing is HTMLChild;
declare const isHTMLChild: (thing: any) => thing is HTMLChild;
declare function createElement(tag: string, props: HTMLProps): any;
declare function createElement(tag: string, props: HTMLProps, ...children: HTMLChild[]): any;
declare function createElement(tag: string, ...children: HTMLChild[]): any;
declare const h: typeof createElement;
declare const mount: (root: Node, where?: string) => Node;
declare const div: any;
declare const span: any;
declare const ul: any;
declare const li: any;
declare const p: any;
declare const h1: any;
declare const h2: any;
declare const h3: any;
declare const h4: any;
declare const a: any;
declare const anchor: (href: string, text?: string, props?: any) => any;
declare const style: (props: {
    [key: string]: {
        [key: string]: any;
    };
}) => any;
declare const tree: Skill[];
