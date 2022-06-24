import type { Blocks } from "./data/stores";
import { serialize } from "./data/serialize"
import type {SerializedBlocks} from "./data/serialize"

export function findBiggestPath(blocks: Blocks): string | null {
    let serialized = serialize(blocks); // easier to work with serialized

    if("root" in serialized) {
        return getBiggestPath(serialized, "root", []);
    }

    return null;
}

export function findShortestPath(blocks: Blocks): string | null {
    let serialized = serialize(blocks); // easier to work with serialized

    if("root" in serialized) {
        return getShortestPath(serialized, "root", []);
    }

    return null;
}

function getBiggestPath(blocks: SerializedBlocks, target: string, history: string[]): string | null {
    let bestChoice = "";

    if(history.includes(target)) {
        return null;
    }

    for(let i = 0; i < blocks[target].length; i++) {
        let choice = blocks[target][i];
        let regex = /@([a-zA-Z0-9-]+)/g;
        let result;
        let running = true;

        while ((result = regex.exec(choice)) !== null && running) {
            let selected = result[1];

            if(!(selected in blocks)) {
                running = false;
                break;
            }

            let ms = getBiggestPath(blocks, selected, [...history, target]);

            if(ms === null) {
                // infinite loop
                return null;
            }
            else
            {
                choice = choice.substring(0, result.index) + ms + choice.substring(result.index + selected.length + 1);
                regex.lastIndex = 0;
            }
        }

        if(choice.length > bestChoice.length) {
            bestChoice = choice;
        }
    }

    return bestChoice;
}


function getShortestPath(blocks: SerializedBlocks, target: string, history: string[]): string | null {
    let bestChoice = "";
    let first = true;

    if(history.includes(target)) {
        return null;
    }

    for(let i = 0; i < blocks[target].length; i++) {
        let choice = blocks[target][i];
        let regex = /@([a-zA-Z0-9-]+)/g;
        let result;
        let running = true;

        while ((result = regex.exec(choice)) !== null && running) {
            let selected = result[1];

            if(!(selected in blocks)) {
                running = false;
                break;
            }

            let ms = getShortestPath(blocks, selected, [...history, target]);

            if(ms === null) {
                // infinite loop
                running = false;
                break;
            }
            else
            {
                choice = choice.substring(0, result.index) + ms + choice.substring(result.index + selected.length + 1);
                regex.lastIndex = 0;
            }
        }

        if(choice.length < bestChoice.length || first && running) {
            bestChoice = choice;
            first = false;
        }
    }

    return bestChoice;
}
