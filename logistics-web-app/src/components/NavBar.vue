<template>
    <div class="navbar">
        <header>
            <h1>WebLogistics</h1>
        </header>
        <div class="icons">
            <img src="../assets/ic-disconnect.png">
        </div>
        <nav>
            <router-link to="/dashboard">Dashboard</router-link>
            <router-link to="/products">Products</router-link>
            <router-link to="/orders">Orders</router-link>
            <router-link to="/delivery-tours">Delivery Tours</router-link>
            <router-link to="/vehicles">Vehicles</router-link>
            <router-link to="/staff">Staff</router-link>
            <router-link to="/customers">Customers</router-link>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style scoped>
.navbar{
    width: 280px;
    height: 100vh;
    background: #424242;
}

header{
    text-align: center;
    padding: 50px 0 10px;
}

.icons{
    text-align: center;
}

.icons img{
    cursor: pointer;
}

nav{
    margin-top: 50px;
}

nav a{
    display: block;
    padding: 10px 0 10px 40px;
    font-size: 1.2em;
}

nav a.router-link-active{
    background: #8f8f8f;
    border-left: 3px solid #FFFFFF;
    padding-left: 37px;
}

nav a:hover{
    background: #8f8f8f;
    border-left: 3px solid #FFFFFF;
    padding-left: 37px;
}

</style>