import { css } from "atomico";
import { tokensBox, cssInput } from "../tokens";

export const inputBaseStyle = [
    tokensBox,
    cssInput,
    css`
        :host {
            width: 100%;
            height: var(--size-xl);
            display: block;
            ---line-opacity: var(--input-opacity-unfocus);
            ---space-x: var(--size-s);
        }

        .input-row {
            width: 100%;
            height: 100%;
            display: grid;
            align-items: center;
            grid-template-columns: var(--columns);
            position: relative;
            box-sizing: border-box;
            gap: var(--size-xs);
        }

        .input-line {
            width: 100%;
            height: var(--input-border-width);
            position: absolute;
            bottom: calc(var(--input-border-width) * -1);
            left: 0px;
            background: var(--color-input-10);
            opacity: var(---line-opacity);
            transition: var(--input-transition);
        }

        .input {
            width: 100%;
            height: 100%;
            border: var(--input-border);
            border-radius: var(--radius);
            padding: 0 var(---space-x);
            background: var(--color-input-60);
            box-sizing: border-box;
            position: relative;
        }

        :host([narrow]) {
            ---space-x: 0;
        }

        :host([focused]) {
            ---line-opacity: 1;
        }

        :host([ghost]) {
            --color-input-fill: transparent;
        }

        :host([disabled]) {
            opacity: var(--input-opacity-disabled);
            pointer-events: none;
        }

        ::slotted([slot="input"]) {
            width: 100%;
            height: 100%;
            font: unset;
            background: transparent;
            border: none;
            letter-spacing: unset;
            color: unset;
            outline: none;
            position: relative;
            z-index: 1;
            line-height: unset;
            text-align: var(--text-align);
            border: none;
            padding: 0;
        }
    `,
];
