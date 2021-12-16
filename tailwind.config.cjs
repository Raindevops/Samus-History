module.exports = {
    mode: 'jit',
    purge: ["./src/**/*.svelte"],
    theme: {
        fontFamily: {
            // 'body': ['"Open Sans"']
        },
        extend: {
            backgroundImage: {
                'header':'url(/background.jpg)',
                'biography1': 'url(/biographie.jpg)',
                'biography2': 'url(/biographie2.jpg)',
                'background1': 'url(/body-bg.jpg)',
                'background2': 'url(/body-bg2.jpg)',
                'appearence': 'url(/appearence.jpg)',
                'personnality': 'url(/personnalite.jpg)'
            }
        }
    }
}