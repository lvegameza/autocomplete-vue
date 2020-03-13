<template>
    <div>
        <input type="text" class="form-control" v-model="queryString" v-on:keyup="autoComplete">
         
    </div>
</template>
<script>
    export default{
        data(){
            return{
                queryString:"",                
            }
        },
        methods:{            
            autoComplete() {
            axios.get('/api/search', {
                params: {
                    'queryString' : this.queryString
                }
            }).then(response => {
                this.products = response.data
                console.log(this.products);
                }).catch(e => {
                    console.log(e)
                })
            }
        }
    }
</script>