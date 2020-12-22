<template>
    <div class="main products">
        <NavBar class="navbar" />
        <div class="content">
            <h1>All products</h1>
            <div class="products-list">
                <div class="product">
                    <span>ID produit</span>
                    <span>Nom du produit</span>
                    <span>Catégorie</span> <!-- Couleur pour chaque catégorie (style étiquette) -->
                    <span>Quantité</span>
                    <span>Prix unitaire</span>
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
    name: 'Products',
    components: { NavBar }
}
</script>

<style>

</style>