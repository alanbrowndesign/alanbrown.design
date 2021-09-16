const TypeData = {
    Hero: {
        size: 7,
        defaultStyle: "display",
        defaultWeight: "light",
        lineHeight: {
            default: 1.1,
            tight: 1,
        },
    },
    Headline: {
        size: 6,
        defaultStyle: "display",
        defaultWeight: "light",
        lineHeight: {
            default: 1.2,
            tight: 1.1,
        },
    },
    TitleAlpha: {
        size: 5,
        defaultStyle: "display",
        defaultWeight: "light",
        lineHeight: {
            default: 1.2,
            tight: 1.1,
        },
    },
    TitleBravo: {
        size: 4,
        defaultStyle: "display",
        defaultWeight: "light",
        lineHeight: {
            default: 1.2,
            tight: 1.1,
        },
    },
    TitleCharlie: {
        size: 3,
        defaultStyle: "display",
        defaultWeight: "medium",
        lineHeight: {
            default: 1.2,
            tight: 1.1,
        },
    },
    Heading: {
        size: 2,
        defaultStyle: "text",
        defaultWeight: "medium",
        lineHeight: {
            default: 1.2,
            tight: 1.1,
        },
    },
    Subhead: {
        size: 1,
        defaultStyle: "text",
        defaultWeight: "medium",
        lineHeight: {
            default: 1.3,
            tight: 1.1,
        },
    },
    Body: {
        size: 0,
        defaultStyle: "text",
        defaultWeight: "medium",
        lineHeight: {
            default: 1.4,
            tight: 1.2,
        },
    },
    Footnote: {
        size: -1,
        defaultStyle: "text",
        defaultWeight: "medium",
        lineHeight: {
            default: 1.4,
            tight: 1.2,
        },
    },
    Caption: {
        size: -2,
        defaultStyle: "text",
        defaultWeight: "medium",
        lineHeight: {
            default: 1.4,
            tight: 1.2,
        },
    },
    Micro: {
        size: -3,
        defaultStyle: "text",
        defaultWeight: "medium",
        lineHeight: {
            default: 1.5,
            tight: 1.3,
        },
    },
};

const fontWeights = {
    display: {
        light: 300,
        medium: 500,
        heavy: 500,
    },
    text: {
        light: 400,
        medium: 400,
        heavy: 700,
    },
};

export const Typography = (typeName = "Body", typeProperties) => {
    // Get the correct TypeData object (e.g. Hero, Body)
    typeName = TypeData[typeName];

    // Set the defaults
    let style = typeName.defaultStyle;
    let weight = typeName.defaultWeight;
    let lineHeight = typeName.lineHeight.default;

    // Override them if typeProperties is passed
    if (typeProperties) {
        typeProperties.style && (style = typeProperties.style);
        typeProperties.weight && (weight = typeProperties.weight);
        typeProperties.isUI && (lineHeight = typeName.lineHeight.tight);
    }

    // use weight to get number from fontWeight
    weight = fontWeights[style][weight];

    return `
        font-size: var(--type-${typeName.size});
        line-height: ${lineHeight};
        font-family: var(--font-${style});
        font-weight: ${weight};
    `;
};
