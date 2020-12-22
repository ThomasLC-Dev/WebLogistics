<template>
    <div class="main orders">
        <NavBar class="navbar"/>
        <div class="content">
            <h1>All orders</h1>
            <div class="orders-list">
                <div class="order">
                    <span>ID commande</span>
                    <span>Nom / Prénom</span>
                    <span>Date</span>
                    <span>Nombre de produits</span>
                    <span>Prix HT</span>
                    <span>Prix TTC</span>
                    <span>État de la commande</span>
                    <span>Date de livraison</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from '../components/NavBar';

export default {
    name: 'Orders',
    components: { NavBar }
}
</script>

<style>

</style>