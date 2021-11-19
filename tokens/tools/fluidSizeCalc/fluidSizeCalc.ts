export const fluidSizeCalc = (multiplier: number) => {
    return `
    calc(
        (((var(--fc-s-min) * ${multiplier}) / 16) * 1rem) +
            ((var(--fc-s-max) * ${multiplier}) - (var(--fc-s-min) * ${multiplier})) *
            var(--fluid-bp)
    )
    `;
};
