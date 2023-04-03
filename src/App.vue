<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <div>
        <input type="button" @click="connect()" value="Connet"/>
    </div>
    <div>
        <input type="button" @click="disconnect()" value="Disconnet"/>
    </div>
    <div>
        <input type="button" @click="getSteps()" value="Get Steps"/>
    </div>
</template>

<script setup>
    function connect() {
        navigator.health.requestAuthorization(
            ['steps'],
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

    function getSteps() {
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - 1);
        const endDate = new Date();

        navigator.health.query(
            {
                startDate,
                endDate,
                dataType: 'steps',
                limit: 1000
            },
            steps =>{
                console.log('steps:', steps);
                alert(`steps: ${steps.reduce((sum, cur) => sum += cur.value, 0)}`);
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
