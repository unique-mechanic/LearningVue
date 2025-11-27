export default{
    template: `
                    <button class="bg-green-200 hover:bg-gray-400 border rounded px-5 py-2">
                        <slot />
                    </button>
                `,

    data(){
        return {
            processing: true
        };
    }
}
