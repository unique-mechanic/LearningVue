export default{ // type == not ===
    template: `
                    <button 
                    :class= "{
                        'border rounded px-5 py-2 disabled:cursor-not-allowed': true,
                        'bg-blue-600 hover:bg-blue-700': type == 'primary',  
                        'bg-purple-200 hover:bg-purple-400': type == 'secondary',
                        'bg-gray-200 hover:bg-gray-400': type == 'muted',
                        'is-loading': processing,
                    }" 
                    :disabled="processing"
                    >
                        <slot />
                    </button>
                `,

    props:{
        type: {
            type: String, //this is just type of the prop, that's why it's doubling up here.
            default: 'primary'
        },
        processing: {
            type: Boolean,
            default: false
        }
    },          

}
 