<template>
    <div class="main vehicles">
        <NavBar class="navbar" />
        <div class="content">
            <h1>All vehicles</h1>
            <div class="vehicles-list">
                <div class="vehicle">
                    <span>ID véhicule</span>
                    <span>Plaque du véhicule</span>
                    <span>Catégorie</span> <!-- Couleur pour chaque catégorie (style étiquette) avec svg (truck, airplane etc) -->
                    <span>Niveau d'essence</span>
                    <span>Kilomètre</span>
                    <span>Date d'achat</span>
                    <div class="icons">
                        <img alt="modify">
                        <img alt="delete">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from '../components/NavBar';

export default {
    name: 'Vehicles',
    components: { NavBar }
}
</script>

<style>

</style>