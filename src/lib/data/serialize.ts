import type { Blocks } from "./stores";

export type SerializedBlock = string[];

export type SerializedBlocks = {
    [key: string]: SerializedBlock
};

export function serialize(blocks: Blocks): SerializedBlocks {
    let ret: SerializedBlocks = Object.create(null); // prevent prototype pollution?

    for(let i = 0; i < blocks.length; i++) {
        ret[blocks[i].name] = blocks[i].choices.map((val)=>val.content);
    }

    return ret;
}

export function deserialize(serializedBlocks: SerializedBlocks): Blocks {
    let entries = Object.entries(serializedBlocks);
    let ret: Blocks = [];

    for(let i = 0; i < entries.length; i++) {
        let entry = entries[i];
        ret.push({name: entry[0], choices: entry[1].map((val, idx)=>{return {content: val, editing: false, id: idx}}), id: i, editing: false, showing: true})
    }

    return ret;
}

export function isSerializedBlock(val: any): val is SerializedBlock {
    return Array.isArray(val) && val.filter((val) => !(typeof val == "string")).length == 0
}

export function isSerializedBlocks(val: any): val is SerializedBlocks {
    return typeof val === "object" && Object.values(val).filter((val) => !isSerializedBlock(val)).length == 0
}