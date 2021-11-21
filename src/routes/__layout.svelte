<script>
    import "../styles/build.css"
</script>
<nav class="fixed z-50 grid grid-cols-3 w-full text-center p-6 bg-black border-b-4">
    <a class="text-white uppercase font-bold hover:text-red-500 transition-colors focus:outline-none" href="#biography">Biographie</a>
    <a class="text-white uppercase font-bold hover:text-red-500 transition-colors focus:outline-none" href="#personnality">Personnalité</a>
    <a class="text-white uppercase font-bold hover:text-red-500 transition-colors focus:outline-none" href="#skills">Aptitudes et compétences</a>
</nav>

<slot></slot>