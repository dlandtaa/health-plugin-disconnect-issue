<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <div>
        <input type="button" @click="connect()" value="Connect"/>
    </div>
    <div>
        <input type="button" @click="disconnect()" value="Disconnect"/>
    </div>
    <div>
        <input type="button" @click="getData('steps')" value="Get Steps"/>
    </div>
    <div>
        <input type="button" @click="getData('heart_rate')" value="Get Heart Rate"/>
    </div>
</template>

<script setup>
    function connect() {
        navigator.health.requestAuthorization(
            [{ read: ['steps'] }],
            data => {
                console.log('authorization successful:', data);
                alert('connected');
            },
            err => {
                console.log('authorization error:', err);
                alert('error');
            }
        );
    }

    function getData(dataType) {
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - 1);
        const endDate = new Date();

        navigator.health.query(
            {
                startDate,
                endDate,
                dataType,
                limit: 1000
            },
            data =>{
                console.log('dataType:', data);
                // alert(`data: ${data.reduce((sum, cur) => sum += cur.value, 0)}`);
            },
            err => {
                console.error(err);
                alert('error');
            }
        );
    }

    function disconnect() {
        navigator.health.disconnect(
            success => {
                console.log('disconnect result:', success);
                alert('disconnected');
            },
            err => {
                console.log('disconnect error:', err);
                alert('error');
            }
        );
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    
    div {
        margin-bottom: 20px;
    }
</style>
