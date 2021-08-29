export const flow = (gap) => {
    return `
        > * + * {
            margin-top: ${gap / 16}rem;
        }
    `;
};
