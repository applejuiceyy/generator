import { writable } from "svelte/store";
import type { Writable } from "svelte/store";

export type Choice = {content: string, editing: boolean, id: number}
export type Block = {name: string, id: number, choices: Choice[], editing: boolean, showing: boolean}
export type Blocks = Block[];

export let blocks: Writable<Blocks> = writable([
    {
        name: "root",
        id: 0,
        choices: [{
            content: "@who @verb",
            editing: false,
            id: 0
        }],
        editing: false,
        showing: true
    },

    {
        name: "who",
        id: 1,
        choices: [{
            content: "I",
            editing: false,
            id: 0
        },
        {
            content: "You",
            editing: false,
            id: 1
        }],
        editing: false,
        showing: true
    },

    {
        name: "verb",
        id: 2,
        choices: [{
            content: "dance",
            editing: false,
            id: 0
        },
        {
            content: "revolutionize",
            editing: false,
            id: 1
        }],
        editing: false,
        showing: true
    }
]);
