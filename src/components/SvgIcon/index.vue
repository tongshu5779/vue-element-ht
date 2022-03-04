<template>
    <svg :class="svgClass" aria-hidden="true" :width="swidth" :height="sheight">
        <use :xlink:href="iconName" />
    </svg>
</template>

<script>

export default {
    name:'SvgIcon',
    props:{
        iconClass:{
            type:String,
            required:true
        },
        size:{
            type:[String,Number],
            default:20
        }
    },
    computed: {
        iconName() {
            return "#icon-" + this.iconClass
        },
        svgClass(){
            if(this.iconClass){
                return "svg-icon" + this.iconClass;
            }else{
                return "svg-icon"
            }
        },
        swidth(){
            if(this.size < 0 || isNaN(this.size)){
                return 20;
            }
            return this.size;  
        },
        sheight(){
            if(this.size < 0 || isNaN(this.size)){
                return 20;
            }
            return this.size;  
        }
    },
    methods: {},
    mounted() {},
    }
</script>
<style lang='stylus' scoped>
.svg-icon{
    overflow: hidden;
    fill:currentColor;
    vertical-align: -0.15em;
}
</style>