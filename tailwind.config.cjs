module.exports = {
    mode: 'jit',
    purge: ["./src/**/*.svelte"],
    theme: {
        extend: {
            backgroundImage: {
                'header':'url(/static/background.jpg)',
                'biography1': 'url(/static/biographie.jpg)',
                'biography2': 'url(/static/biographie2.jpg)',
                'background1': 'url(/static/body-bg.jpg)',
                'background2': 'url(/static/body-bg2.jpg)',
                'appearence': 'url(/static/appearence.jpg)',
                'personnality': 'url(/static/personnalite.jpg)'
            }
        }
    }
}